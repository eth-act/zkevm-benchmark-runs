#!/usr/bin/env python3
"""
Generate data.js for the verification dashboard.

Reads verification benchmark results from data/verification/<machine>/<zkvm>/*.json
and produces a JavaScript file with all verification times and proof sizes,
keyed by machine ID.

Usage:
    python3 scripts/generate_verification_website.py --output dist/verification
"""

import argparse
import json
import re
import urllib.request
from pathlib import Path

SOUNDCALC_URL = 'https://raw.githubusercontent.com/ethereum/soundcalc/main/reports/summary.md'


def fetch_security_bits():
    """Fetch security bits per proof system from the soundcalc summary table."""
    try:
        with urllib.request.urlopen(SOUNDCALC_URL, timeout=15) as resp:
            text = resp.read().decode('utf-8')
    except Exception as e:
        print(f"Warning: could not fetch soundcalc data: {e}")
        return {}

    bits = {}
    in_table = False
    header_cols = []
    sec_idx = None

    for line in text.splitlines():
        line = line.strip()
        if not line.startswith('|'):
            if in_table:
                break
            continue

        cols = [c.strip() for c in line.split('|')]
        # split('|') gives empty strings at the edges for "|a|b|"
        cols = [c for c in cols if c or not cols]

        if not in_table:
            # First table row is the header
            header_cols = cols
            try:
                sec_idx = next(
                    i for i, h in enumerate(header_cols)
                    if h.strip().lower() == 'security'
                )
            except StopIteration:
                print("Warning: 'Security' column not found in soundcalc table")
                return {}
            in_table = True
            continue

        # Skip separator row (e.g. |---|---|)
        if all(c.replace('-', '').replace(':', '') == '' for c in cols):
            continue

        if len(cols) > sec_idx:
            name = cols[0].strip()
            # Strip markdown link syntax: [text](url) → text
            link_match = re.match(r'\[([^\]]+)\]', name)
            if link_match:
                name = link_match.group(1)
            # Use value verbatim, just strip markdown bold markers
            sec_val = cols[sec_idx].strip().replace('**', '')
            if name and sec_val:
                bits[name.lower()] = sec_val

    return bits


def load_machine_data(machine_dir):
    """Load zkVM results and metadata for a single machine directory."""
    zkvms = {}

    metadata = {}
    metadata_file = machine_dir / 'metadata.json'
    if metadata_file.exists():
        with open(metadata_file, 'r') as f:
            metadata = json.load(f)

    for zkvm_dir in sorted(machine_dir.iterdir()):
        if not zkvm_dir.is_dir():
            continue

        zkvm_name = zkvm_dir.name
        results = []

        for json_file in sorted(zkvm_dir.glob('*.json')):
            try:
                with open(json_file, 'r') as f:
                    data = json.load(f)

                verification = data.get('verification', {})
                success = verification.get('success', {})

                if success:
                    results.append({
                        'name': data.get('name', json_file.stem),
                        'verification_time_ms': success.get('verification_time_ms', 0),
                        'proof_size': success.get('proof_size', 0),
                    })
            except Exception as e:
                print(f"Error processing {json_file}: {e}")

        if results:
            zkvms[zkvm_name] = {'results': results}
            print(f"    {zkvm_name}: {len(results)} results")

    return metadata, zkvms


def main():
    parser = argparse.ArgumentParser(
        description='Generate verification dashboard data.'
    )
    parser.add_argument(
        '--output',
        type=str,
        required=True,
        help='Output directory for data.js'
    )
    args = parser.parse_args()

    repo_root = Path(__file__).resolve().parent.parent
    verification_dir = repo_root / 'data' / 'verification'
    output_dir = Path(args.output)
    if not output_dir.is_absolute():
        output_dir = repo_root / output_dir

    machines = {}

    if not verification_dir.exists():
        print(f"Warning: {verification_dir} does not exist")
    else:
        for machine_dir in sorted(verification_dir.iterdir()):
            if not machine_dir.is_dir():
                continue
            # A machine directory must contain metadata.json
            if not (machine_dir / 'metadata.json').exists():
                continue

            machine_id = machine_dir.name
            print(f"  Machine: {machine_id}")
            metadata, zkvms = load_machine_data(machine_dir)

            if zkvms:
                machines[machine_id] = {
                    'metadata': metadata,
                    'zkvms': zkvms,
                }

    # Fetch security bits from soundcalc (once, shared across machines)
    security_bits = fetch_security_bits()
    if security_bits:
        print(f"  Soundcalc security bits: {security_bits}")

    for machine_id, machine_data in machines.items():
        for zkvm_name in machine_data['zkvms']:
            zkvm_lower = zkvm_name.lower()
            matched = None
            for sc_name, bits_val in security_bits.items():
                if zkvm_lower.startswith(sc_name):
                    matched = bits_val
                    break
            machine_data['zkvms'][zkvm_name]['security_bits'] = matched

    data_js = 'const verificationData = ' + json.dumps({'machines': machines}, indent=2) + ';\n'
    output_file = output_dir / 'data.js'
    with open(output_file, 'w') as f:
        f.write(data_js)

    total_zkvms = sum(len(m['zkvms']) for m in machines.values())
    print(f"Generated {output_file} ({len(machines)} machines, {total_zkvms} zkVM entries)")


if __name__ == '__main__':
    main()
