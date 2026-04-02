#!/usr/bin/env python3
"""Generate JSON data files for the Zisk profiles dashboard.

Reads .prof files from data/profiles/zisk/ and produces:
  - manifest.json: fixture sets and EL clients
  - aggregates-{fixture_set}.json: summary data for the overview
  - detail-{fixture_set}-{el_client}-{hash}.json: per-test detail
"""

import argparse
import hashlib
import json
import statistics
import sys
from datetime import datetime, timezone
from pathlib import Path

# Add scripts directory to path for imports
sys.path.insert(0, str(Path(__file__).parent))
from _profile_parser import parse_profile_file, extract_operation


def test_hash(test_id: str) -> str:
    """Return first 8 chars of SHA-256 hash of test_id."""
    return hashlib.sha256(test_id.encode()).hexdigest()[:8]


def short_test_name(test_id: str) -> str:
    """Shorten a test ID for display.

    'test_account_query.py::test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-False-1024-...]'
    -> 'account_query [EXTCODECOPY False 1024 ...]'
    """
    # Get the function name part
    parts = test_id.split('::')
    if len(parts) < 2:
        return test_id

    func_and_params = parts[1]
    # Extract function name (strip test_ prefix)
    func_name = func_and_params.split('[')[0]
    if func_name.startswith('test_'):
        func_name = func_name[5:]

    # Extract params
    import re
    m = re.search(r'\[(.*)\]', func_and_params)
    if not m:
        return func_name

    params = m.group(1)
    # Remove common prefixes
    params = params.replace('fork_Osaka-', '')
    params = params.replace('benchmark_test-', '')
    params = params.replace('benchmark_', '')
    params = params.replace('blockchain_test-', '')
    # Shorten
    params = params.replace('cache_strategy_CacheStrategy.', '')
    params = params.replace('token_name_', '')
    params = params.replace('max_code_size-', 'code:')
    params = params.replace('mem_size-', 'mem:')

    return f"{func_name} [{params}]"


def compute_aggregates(profiles: list[dict]) -> dict:
    """Compute aggregate statistics from a list of parsed profiles."""
    successful = [p for p in profiles if p['status'] == 'success']
    if not successful:
        return {}

    # Cost distribution averages
    categories = ['base', 'main', 'opcodes', 'precompiles', 'memory']
    cost_dist = {}
    for cat in categories:
        values = [
            p['report']['cost_distribution'][cat]['pct']
            for p in successful
            if 'cost_distribution' in p.get('report', {})
            and cat in p['report']['cost_distribution']
        ]
        if values:
            cost_dist[cat] = {
                'mean': round(statistics.mean(values), 2),
                'median': round(statistics.median(values), 2),
                'min': round(min(values), 2),
                'max': round(max(values), 2),
            }

    # Opcode cost aggregates
    opcode_stats = {}
    for p in successful:
        for op in p.get('cost_by_opcode', []):
            name = op['name']
            if name not in opcode_stats:
                opcode_stats[name] = {
                    'total_cost': 0,
                    'cost_pcts': [],
                    'total_count': 0,
                    'test_count': 0,
                }
            opcode_stats[name]['total_cost'] += op['cost']
            opcode_stats[name]['cost_pcts'].append(op['cost_pct'])
            opcode_stats[name]['total_count'] += op['count']
            opcode_stats[name]['test_count'] += 1

    opcode_summary = []
    for name, stats in sorted(opcode_stats.items(),
                               key=lambda x: -sum(x[1]['cost_pcts'])):
        opcode_summary.append({
            'name': name,
            'total_cost': stats['total_cost'],
            'avg_cost_pct': round(statistics.mean(stats['cost_pcts']), 2),
            'max_cost_pct': round(max(stats['cost_pcts']), 2),
            'total_count': stats['total_count'],
            'test_count': stats['test_count'],
        })

    # MARK_ID phase aggregates
    mark_stats = {}
    for p in successful:
        for mark in p.get('mark_ids', []):
            name = mark['name']
            if name not in mark_stats:
                mark_stats[name] = {'cost_pcts': [], 'steps_pcts': []}
            mark_stats[name]['cost_pcts'].append(mark['total_cost_pct'])
            mark_stats[name]['steps_pcts'].append(mark['steps_pct'])

    mark_summary = []
    for name, stats in sorted(mark_stats.items(),
                               key=lambda x: -statistics.mean(x[1]['cost_pcts'])):
        mark_summary.append({
            'name': name,
            'mean_cost_pct': round(statistics.mean(stats['cost_pcts']), 2),
            'mean_steps_pct': round(statistics.mean(stats['steps_pcts']), 2),
            'test_count': len(stats['cost_pcts']),
        })

    # Top functions by cost (aggregate across tests)
    func_stats = {}
    for p in successful:
        for f in p.get('top_cost_functions', []):
            key = f['function_short']
            if key not in func_stats:
                func_stats[key] = {
                    'function_short': f['function_short'],
                    'function': f['function'],
                    'cost_pcts': [],
                    'test_count': 0,
                }
            func_stats[key]['cost_pcts'].append(f['cost_pct'])
            func_stats[key]['test_count'] += 1

    top_functions = []
    for stats in sorted(func_stats.values(),
                        key=lambda x: -statistics.mean(x['cost_pcts'])):
        top_functions.append({
            'function_short': stats['function_short'],
            'function': stats['function'],
            'avg_cost_pct': round(statistics.mean(stats['cost_pcts']), 2),
            'max_cost_pct': round(max(stats['cost_pcts']), 2),
            'test_count': stats['test_count'],
        })

    return {
        'cost_distribution': cost_dist,
        'opcode_summary': opcode_summary,
        'mark_id_summary': mark_summary,
        'top_functions': top_functions[:30],  # Top 30
    }


def generate(profiles_base: Path, output_dir: Path):
    """Main generation logic."""
    output_dir.mkdir(parents=True, exist_ok=True)
    now = datetime.now(timezone.utc).isoformat()

    fixture_sets = sorted([
        d.name for d in profiles_base.iterdir() if d.is_dir()
    ])

    manifest = {
        'generated_at': now,
        'fixture_sets': [],
    }

    for fs_name in fixture_sets:
        fs_dir = profiles_base / fs_name
        el_clients = sorted([
            d.name for d in fs_dir.iterdir() if d.is_dir()
        ])

        fs_info = {
            'id': fs_name,
            'el_clients': el_clients,
            'test_count': {},
            'error_count': {},
        }

        # Parse all profiles per EL client
        all_profiles = {}  # el_client -> list of parsed profiles
        for el_client in el_clients:
            el_dir = fs_dir / el_client
            profiles = []

            for f in sorted(el_dir.iterdir()):
                if f.name.endswith('.prof') or f.name.endswith('.error.txt'):
                    try:
                        profile = parse_profile_file(f)
                        profiles.append(profile)
                    except Exception as e:
                        print(f"  Warning: failed to parse {f.name}: {e}",
                              file=sys.stderr)

            all_profiles[el_client] = profiles
            success_count = sum(1 for p in profiles if p['status'] == 'success')
            error_count = sum(1 for p in profiles if p['status'] == 'error')
            fs_info['test_count'][el_client] = success_count
            fs_info['error_count'][el_client] = error_count
            print(f"  {el_client}: {success_count} profiles, {error_count} errors")

        manifest['fixture_sets'].append(fs_info)

        # Compute aggregates per EL client
        aggregates_per_client = {}
        for el_client in el_clients:
            aggregates_per_client[el_client] = compute_aggregates(
                all_profiles[el_client]
            )

        # Build test list (union of all EL clients)
        test_map = {}  # test_id -> {el_client -> summary}
        for el_client in el_clients:
            for p in all_profiles[el_client]:
                tid = p['test_id']
                if tid not in test_map:
                    test_map[tid] = {
                        'id': tid,
                        'name': short_test_name(tid),
                        'operation': p.get('operation'),
                        'hash': test_hash(tid),
                        'el_clients': {},
                    }

                if p['status'] == 'success':
                    # Find top opcode by cost
                    top_op = None
                    if p.get('cost_by_opcode'):
                        top_op_entry = max(p['cost_by_opcode'],
                                          key=lambda x: x['cost'])
                        top_op = f"{top_op_entry['name']} ({top_op_entry['cost_pct']}%)"

                    test_map[tid]['el_clients'][el_client] = {
                        'status': 'success',
                        'steps': p['report'].get('steps', 0),
                        'total_cost': p['report'].get('total_cost', 0),
                        'top_opcode': top_op,
                    }
                else:
                    test_map[tid]['el_clients'][el_client] = {
                        'status': 'error',
                        'error': p.get('error', '')[:200],
                    }

        tests = sorted(test_map.values(), key=lambda t: t['name'])

        # Write aggregates file
        aggregates = {
            'generated_at': now,
            'fixture_set': fs_name,
            'el_clients': el_clients,
            'aggregates': aggregates_per_client,
            'tests': tests,
        }

        agg_file = output_dir / f'aggregates-{fs_name}.json'
        agg_file.write_text(json.dumps(aggregates, separators=(',', ':')))
        print(f"  Wrote {agg_file.name} ({len(tests)} tests)")

        # Write detail files per test per EL client
        detail_count = 0
        for el_client in el_clients:
            for p in all_profiles[el_client]:
                if p['status'] != 'success':
                    continue

                h = test_hash(p['test_id'])
                detail = {
                    'test_id': p['test_id'],
                    'name': short_test_name(p['test_id']),
                    'operation': p.get('operation'),
                    'el_client': el_client,
                    'report': p['report'],
                    'cost_by_opcode': p['cost_by_opcode'],
                    'top_step_functions': p['top_step_functions'][:20],
                    'top_cost_functions': p['top_cost_functions'][:20],
                    'mark_ids': p['mark_ids'],
                }

                detail_file = output_dir / f'detail-{fs_name}-{el_client}-{h}.json'
                detail_file.write_text(
                    json.dumps(detail, separators=(',', ':'))
                )
                detail_count += 1

        print(f"  Wrote {detail_count} detail files")

    # Write manifest
    manifest_file = output_dir / 'manifest.json'
    manifest_file.write_text(json.dumps(manifest, indent=2))
    print(f"Wrote {manifest_file.name}")


def main():
    parser = argparse.ArgumentParser(
        description='Generate Zisk profiles dashboard data'
    )
    parser.add_argument(
        '--output', type=Path,
        default=Path('dist/profiles/data'),
        help='Output directory for JSON files'
    )
    parser.add_argument(
        '--profiles-base', type=Path,
        default=Path(__file__).parent.parent / 'data' / 'profiles' / 'zisk',
        help='Base directory containing profile data'
    )
    args = parser.parse_args()

    print(f"Generating profiles data from {args.profiles_base}")
    generate(args.profiles_base, args.output)
    print("Done!")


if __name__ == '__main__':
    main()
