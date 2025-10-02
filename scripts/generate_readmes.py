#!/usr/bin/env python3
"""
Script to generate README.md files for zkEVM benchmark runs.

This script processes benchmark runs in the proving and executions folders and generates:
1. README.md files in each hardware setup folder
2. A top-level README.md summarizing all hardware setups
"""

import json
import os
from pathlib import Path
from typing import Dict, List, Tuple, Any, Optional
import re

def format_time(ms: int) -> str:
    """Format milliseconds into human-readable time format."""
    seconds = ms / 1000
    
    if seconds < 60:
        return f"{seconds:.2f}s"
    elif seconds < 3600:
        minutes = int(seconds // 60)
        remaining_seconds = seconds % 60
        return f"{minutes}m {remaining_seconds:.2f}s"
    else:
        hours = int(seconds // 3600)
        remaining_minutes = int((seconds % 3600) // 60)
        remaining_seconds = seconds % 60
        return f"{hours}h {remaining_minutes}m {remaining_seconds:.2f}s"

def format_throughput(gas_used: int, time_ms: int) -> str:
    """Calculate and format proving throughput in gas/second."""
    gas_per_second = (gas_used * 1000) / time_ms

    if gas_per_second >= 1_000_000:
        return f"{gas_per_second / 1_000_000:.2f}M gas/s"
    elif gas_per_second >= 1_000:
        return f"{gas_per_second / 1_000:.2f}K gas/s"
    else:
        return f"{gas_per_second:.2f} gas/s"

def format_proof_size(size_bytes: int) -> str:
    """Format proof size in bytes to human-readable format (KiB or MiB)."""
    if size_bytes >= 1024 * 1024:  # 1 MiB or larger
        return f"{size_bytes / (1024 * 1024):.2f}MiB"
    elif size_bytes >= 1024:  # 1 KiB or larger
        return f"{size_bytes / 1024:.2f}KiB"
    else:
        return f"{size_bytes}B"

def load_workload_info(workload_file: Path) -> Optional[str]:
    """Load workload repository URL from _zkevm-benchmark-workload.txt file."""
    if workload_file.exists():
        try:
            with open(workload_file, 'r') as f:
                url = f.read().strip()
                if url and url.startswith('https://github.com/'):
                    return url
        except Exception as e:
            print(f"Warning: Could not read {workload_file}: {e}")
    return None

def load_crashes_from_file(crashes_file: Path) -> List[str]:
    """Load crashed fixture names from _crashes.txt file."""
    crashes = []
    if crashes_file.exists():
        with open(crashes_file, 'r') as f:
            for line in f:
                line = line.strip()
                if line:
                    # Remove .json extension if present
                    if line.endswith('.json'):
                        line = line[:-5]
                    crashes.append(line)
    return crashes

def process_json_file(json_file: Path, mode: str = 'proving') -> Dict[str, Any]:
    """Process a single JSON benchmark result file.

    Args:
        json_file: Path to the JSON file
        mode: Either 'proving' or 'execution' to determine which data to extract
    """
    try:
        with open(json_file, 'r') as f:
            data = json.load(f)

        result = {
            'name': data.get('name', json_file.stem),
            'gas_used': data.get('metadata', {}).get('block_used_gas', 0),
            'status': 'unknown'
        }

        if mode == 'proving':
            proving_data = data.get('proving', {})

            if 'success' in proving_data:
                result['status'] = 'success'
                result['proving_time_ms'] = proving_data['success'].get('proving_time_ms', 0)
                result['proof_size'] = proving_data['success'].get('proof_size', 0)
            elif 'crashed' in proving_data:
                result['status'] = 'crashed'
                result['crash_reason'] = proving_data['crashed'].get('reason', 'Unknown error')

        elif mode == 'execution':
            execution_data = data.get('execution', {})

            if 'success' in execution_data:
                result['status'] = 'success'
                # Extract execution time from duration
                duration = execution_data['success'].get('execution_duration', {})
                secs = duration.get('secs', 0)
                nanos = duration.get('nanos', 0)
                # Convert to milliseconds
                result['execution_time_ms'] = secs * 1000 + nanos / 1_000_000
                result['total_num_cycles'] = execution_data['success'].get('total_num_cycles', 0)
            elif 'crashed' in execution_data:
                result['status'] = 'crashed'
                result['crash_reason'] = execution_data['crashed'].get('reason', 'Unknown error')

        return result

    except Exception as e:
        print(f"Error processing {json_file}: {e}")
        return {
            'name': json_file.stem,
            'gas_used': 0,
            'status': 'error',
            'error': str(e)
        }

def process_zkvm_folder(zkvm_folder: Path, crashed_fixtures: List[str], mode: str = 'proving') -> Tuple[List[Dict], List[Dict], List[Dict]]:
    """Process a zkVM folder (e.g., sp1-v5.1.0) and categorize results.

    Args:
        zkvm_folder: Path to the zkVM folder
        crashed_fixtures: List of fixture names that crashed
        mode: Either 'proving' or 'execution' to determine which data to extract
    """
    successful_runs = []
    sdk_crashed_runs = []
    prover_crashed_runs = []

    # First, add all fixtures from _crashes.txt as prover crashes
    for crashed_fixture in crashed_fixtures:
        prover_crashed_runs.append({
            'name': crashed_fixture,
            'gas_used': 0,
            'status': 'prover_crashed'
        })

    # Keep track of JSON files to detect duplicates
    json_fixture_names = []
    duplicates_found = []

    # Then process JSON files
    for json_file in zkvm_folder.glob('*.json'):
        result = process_json_file(json_file, mode=mode)
        fixture_name = result['name']
        json_fixture_names.append(fixture_name)
        
        # Check if this fixture was in the crashed list
        # Use exact matching (with and without .json extension)
        crashed_fixture_matches = []
        for crash in crashed_fixtures:
            # Remove .json extension from crash if present for comparison
            crash_clean = crash[:-5] if crash.endswith('.json') else crash
            fixture_clean = fixture_name[:-5] if fixture_name.endswith('.json') else fixture_name
            
            if crash_clean == fixture_clean:
                crashed_fixture_matches.append(crash)
        
        if crashed_fixture_matches:
            # Found duplicate - fixture exists both in _crashes.txt and as JSON
            for crash_match in crashed_fixture_matches:
                duplicate_info = {
                    'fixture_name': fixture_name,
                    'crash_entry': crash_match,
                    'json_status': result['status'],
                    'zkvm_folder': zkvm_folder
                }
                duplicates_found.append(duplicate_info)
            # Skip adding to results - already added as prover crash
            continue
        elif result['status'] == 'crashed':
            sdk_crashed_runs.append(result)
        elif result['status'] == 'success':
            successful_runs.append(result)
    
    # Generate warnings for duplicates
    if duplicates_found:
        print(f"\n⚠️  WARNING: Found {len(duplicates_found)} duplicate fixture(s) in {zkvm_folder}:")
        for dup in duplicates_found:
            print(f"   - Fixture: '{dup['fixture_name']}'")
            print(f"     • Listed in _crashes.txt as: '{dup['crash_entry']}'")
            print(f"     • Has JSON file with status: {dup['json_status']}")
        print("   This may indicate inconsistent benchmark data - please review.\n")
    
    return successful_runs, sdk_crashed_runs, prover_crashed_runs

def generate_results_table(runs: List[Dict], title: str, mode: str = 'proving') -> str:
    """Generate a markdown table for benchmark results.

    Args:
        runs: List of run results
        title: Title for the table section
        mode: Either 'proving' or 'execution' to determine which metrics to display
    """
    if not runs:
        return f"\n### {title}\n\nNo results found.\n"

    markdown = f"\n### {title}\n\n"
    markdown += "| Fixture Name | Time | Throughput |\n"
    markdown += "|--------------|------|------------|\n"

    # Determine time field based on mode
    time_field = 'proving_time_ms' if mode == 'proving' else 'execution_time_ms'

    # Sort by time (successful runs - slowest to fastest) or alphabetically (others)
    if runs[0].get(time_field):
        runs.sort(key=lambda x: x.get(time_field, 0), reverse=True)  # Slowest first
    else:
        runs.sort(key=lambda x: x['name'])

    for run in runs:
        name = run['name']

        if run['status'] == 'success' and time_field in run:
            time_str = format_time(run[time_field])
            throughput = format_throughput(run['gas_used'], run[time_field]) if run['gas_used'] > 0 else "N/A"
        elif run['status'] == 'crashed':
            time_str = "❌ Crashed (SDK)"
            throughput = "N/A"
        elif run['status'] == 'prover_crashed':
            time_str = "💥 Crashed (Prover)"
            throughput = "N/A"
        else:
            time_str = "❌ Error"
            throughput = "N/A"

        markdown += f"| {name} | {time_str} | {throughput} |\n"

    return markdown

def generate_combined_zkvm_table(zkvm_results: Dict[str, Dict], workload_urls: Dict[str, str], mode: str = 'proving') -> str:
    """Generate a combined table with test cases as rows and zkVMs as columns.

    Args:
        zkvm_results: Dictionary of zkVM results
        workload_urls: Dictionary of workload URLs for each zkVM
        mode: Either 'proving' or 'execution' to determine which metrics to display
    """
    if not zkvm_results:
        return "\nNo zkVM results found.\n"

    # Get all unique test cases from all zkVMs
    all_test_cases = set()
    for zkvm_data in zkvm_results.values():
        for category in ['successful_runs', 'sdk_crashed_runs', 'prover_crashed_runs']:
            for run in zkvm_data.get(category, []):
                all_test_cases.add(run['name'])

    if not all_test_cases:
        return "\nNo test cases found.\n"

    # Get sorted list of zkVMs
    zkvm_names = sorted(zkvm_results.keys())

    # Determine time field based on mode
    time_field = 'proving_time_ms' if mode == 'proving' else 'execution_time_ms'

    # Collect proof sizes for each zkVM (proving only) and validate consistency
    zkvm_proof_sizes = {}
    proof_size_warnings = []

    if mode == 'proving':
        for zkvm in zkvm_names:
            zkvm_data = zkvm_results[zkvm]
            proof_sizes_found = set()

            # Collect all proof sizes from successful runs
            for run in zkvm_data.get('successful_runs', []):
                if 'proof_size' in run and run['proof_size'] > 0:
                    proof_sizes_found.add(run['proof_size'])

            if proof_sizes_found:
                if len(proof_sizes_found) > 1:
                    # Check if the difference is significant (more than 1KB difference)
                    sizes_list = sorted(proof_sizes_found)
                    min_size = min(sizes_list)
                    max_size = max(sizes_list)
                    if max_size - min_size > 1024:  # More than 1KB difference
                        proof_size_warnings.append(f"⚠️  WARNING: {zkvm} has inconsistent proof sizes: {', '.join([format_proof_size(s) for s in sizes_list])}")
                    zkvm_proof_sizes[zkvm] = max_size  # Use the largest one
                else:
                    zkvm_proof_sizes[zkvm] = proof_sizes_found.pop()
            else:
                zkvm_proof_sizes[zkvm] = None

    # Build the table header
    result_type = "Proving" if mode == 'proving' else "Execution"
    markdown = f"\n## {result_type} Results Comparison\n\n"

    # Show workload URLs if available
    if workload_urls:
        markdown += "### Benchmark Workloads\n\n"
        for zkvm, url in sorted(workload_urls.items()):
            markdown += f"- **{zkvm}**: [{url}]({url})\n"
        markdown += "\n"

    # Add any proof size warnings
    if proof_size_warnings:
        markdown += "### ⚠️ Warnings\n\n"
        for warning in proof_size_warnings:
            markdown += f"{warning}\n"
        markdown += "\n"

    # Add clarification note about empty results
    markdown += "### Notes\n\n"
    markdown += "- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.\n"
    markdown += "- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.\n\n"

    # Create table header with proof sizes (proving only)
    header = "| Test Case |"
    separator = "|-----------|"
    for zkvm in zkvm_names:
        if mode == 'proving':
            proof_size = zkvm_proof_sizes.get(zkvm)
            if proof_size:
                header += f" {zkvm}<br/>({format_proof_size(proof_size)}) |"
            else:
                header += f" {zkvm} |"
        else:
            header += f" {zkvm} |"
        separator += "-----------|"
    header += " Avg |"
    separator += "----------|"

    markdown += header + "\n" + separator + "\n"
    
    # Collect all test case results with averages for sorting
    test_case_data = []
    
    for test_case in all_test_cases:
        row_data = {'name': test_case, 'zkvm_results': {}, 'avg_time_ms': None}
        
        # Collect results for each zkVM
        valid_times = []
        
        for zkvm in zkvm_names:
            zkvm_data = zkvm_results[zkvm]
            result = None
            
            # Find this test case in the zkVM results
            for category in ['successful_runs', 'sdk_crashed_runs', 'prover_crashed_runs']:
                for run in zkvm_data.get(category, []):
                    if run['name'] == test_case:
                        result = run
                        break
                if result:
                    break
            
            if result:
                row_data['zkvm_results'][zkvm] = result
                if result['status'] == 'success' and time_field in result:
                    valid_times.append(result[time_field])
            else:
                row_data['zkvm_results'][zkvm] = None
        
        # Calculate averages
        if valid_times:
            row_data['avg_time_ms'] = sum(valid_times) / len(valid_times)
        
        test_case_data.append(row_data)
    
    # Sort by average time:
    # 1. Cases with no avg_time_ms (all crashed/missing) appear first (sorted by name)
    # 2. Cases with avg_time_ms appear next, sorted slowest to fastest, then by name for stability
    def sort_key(x):
        if x['avg_time_ms'] is None:
            return (0, x['name'])  # No avg time - sort by name, appear first
        else:
            return (1, -x['avg_time_ms'], x['name'])  # Has avg time - sort by time (negative for slowest first), then by name for stability
    
    test_case_data.sort(key=sort_key)
    
    # Generate table rows
    for test_data in test_case_data:
        row = f"| {test_data['name']} |"
        
        # Add zkVM columns
        for zkvm in zkvm_names:
            result = test_data['zkvm_results'].get(zkvm)
            if result:
                if result['status'] == 'success' and time_field in result:
                    time_str = format_time(result[time_field])
                elif result['status'] == 'crashed':
                    time_str = "❌ SDK Crash"
                elif result['status'] == 'prover_crashed':
                    time_str = "💥 Prover Crash"
                else:
                    time_str = "❌ Error"
            else:
                time_str = "—"

            row += f" {time_str} |"
        
        # Add average column
        if test_data['avg_time_ms']:
            avg_time_str = format_time(int(test_data['avg_time_ms']))
        else:
            avg_time_str = "—"
        
        row += f" {avg_time_str} |"
        markdown += row + "\n"
    
    return markdown

def generate_benchmark_config_readme(config_path: Path, mode: str = 'proving') -> str:
    """Generate README.md content for a specific benchmark configuration (gas limit or mainnet range).

    Args:
        config_path: Path to the configuration folder
        mode: Either 'proving' or 'execution' to determine which data to process
    """
    config_name = config_path.name
    hardware_name = config_path.parent.name
    
    # Determine if this is a gas limit or mainnet range
    mode_label = "Proving" if mode == 'proving' else "Execution"

    if config_name.endswith('-gas-limit'):
        config_type = f"Gas Limit Configuration - {mode_label}"
        config_desc = f"EEST benchmarks with {config_name} gas limit ({mode_label.lower()} results)"
    elif config_name.startswith('mainnet-'):
        config_type = f"Mainnet Block Range - {mode_label}"
        config_desc = f"Mainnet blocks benchmark for {config_name} ({mode_label.lower()} results)"
    else:
        config_type = f"Benchmark Configuration - {mode_label}"
        config_desc = f"Benchmark results for {config_name} ({mode_label.lower()})"

    readme_content = f"# {hardware_name} - {config_name}\n\n"
    readme_content += f"## {config_type}\n\n"
    readme_content += f"{config_desc} on **{hardware_name}** hardware.\n\n"
    
    # Handle different structures for mainnet vs gas limit configurations
    if config_name.startswith('mainnet-'):
        # Mainnet structure: config -> EL client -> zkVM (same as EEST)
        el_client_folders = [item for item in config_path.iterdir() if item.is_dir() and not item.name.startswith('.')]

        if not el_client_folders:
            readme_content += "No EL client results found.\n"
            return readme_content

        el_client_folders.sort(key=lambda x: x.name)

        readme_content += "## Available EL Clients\n\n"
        for el_client_folder in el_client_folders:
            readme_content += f"- [{el_client_folder.name}](#{el_client_folder.name})\n"

        readme_content += "\n---\n\n"

        for el_client_folder in el_client_folders:
            readme_content += f"## {el_client_folder.name}\n\n"

            # Find zkVM folders within EL client folder
            zkvm_folders = [item for item in el_client_folder.iterdir() if item.is_dir() and not item.name.startswith('.')]

            if not zkvm_folders:
                readme_content += "No zkVM results found.\n\n"
                continue

            zkvm_folders.sort(key=lambda x: x.name)

            # Collect results from all zkVMs
            zkvm_results = {}
            workload_urls = {}

            for zkvm_folder in zkvm_folders:
                zkvm_name = zkvm_folder.name

                # Load workload repository info from _zkevm-benchmark-workload.txt
                workload_file = zkvm_folder / "_zkevm-benchmark-workload.txt"
                workload_url = load_workload_info(workload_file)
                if workload_url:
                    workload_urls[zkvm_name] = workload_url

                # Load crashed fixtures from _crashes.txt
                crashes_file = zkvm_folder / "_crashes.txt"
                crashed_fixtures = load_crashes_from_file(crashes_file)

                # Process results
                successful_runs, sdk_crashed_runs, prover_crashed_runs = process_zkvm_folder(zkvm_folder, crashed_fixtures, mode=mode)

                zkvm_results[zkvm_name] = {
                    'successful_runs': successful_runs,
                    'sdk_crashed_runs': sdk_crashed_runs,
                    'prover_crashed_runs': prover_crashed_runs
                }

            # Generate the combined comparison table
            readme_content += generate_combined_zkvm_table(zkvm_results, workload_urls, mode=mode)

            # Add summary statistics
            total_test_cases = set()
            total_stats = {}

            for zkvm_name, zkvm_data in zkvm_results.items():
                successful = len(zkvm_data['successful_runs'])
                sdk_crashed = len(zkvm_data['sdk_crashed_runs'])
                prover_crashed = len(zkvm_data['prover_crashed_runs'])
                total = successful + sdk_crashed + prover_crashed

                total_stats[zkvm_name] = {
                    'total': total,
                    'successful': successful,
                    'sdk_crashed': sdk_crashed,
                    'prover_crashed': prover_crashed
                }

                # Collect all test case names
                for category in ['successful_runs', 'sdk_crashed_runs', 'prover_crashed_runs']:
                    for run in zkvm_data[category]:
                        total_test_cases.add(run['name'])

            readme_content += f"\n## Summary\n\n"
            readme_content += f"**Total unique test cases:** {len(total_test_cases)}\n\n"
            readme_content += "### Results by zkVM\n\n"
            readme_content += "| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |\n"
            readme_content += "|------|-------|---------------|----------------|--------------------|\n"

            for zkvm_name in sorted(total_stats.keys()):
                stats = total_stats[zkvm_name]
                readme_content += f"| {zkvm_name} | {stats['total']} | {stats['successful']} | {stats['sdk_crashed']} | {stats['prover_crashed']} |\n"

            readme_content += "\n---\n\n"
    
    else:
        # Gas limit structure: config -> EL client -> eest-benchmark -> zkVM
        el_client_folders = [item for item in config_path.iterdir() if item.is_dir() and not item.name.startswith('.')]
        
        if not el_client_folders:
            readme_content += "No EL client results found.\n"
            return readme_content
        
        el_client_folders.sort(key=lambda x: x.name)
        
        readme_content += "## Available EL Clients\n\n"
        for el_client_folder in el_client_folders:
            readme_content += f"- [{el_client_folder.name}](#{el_client_folder.name})\n"
        
        readme_content += "\n---\n\n"
        
        for el_client_folder in el_client_folders:
            readme_content += f"## {el_client_folder.name}\n\n"

            # For proving mode: look for the eest-benchmark folder
            # For execution mode: zkVMs are directly under el_client_folder
            if mode == 'proving':
                benchmark_folder = el_client_folder / "eest-benchmark"

                if not benchmark_folder.exists() or not benchmark_folder.is_dir():
                    readme_content += "No eest-benchmark folder found.\n\n"
                    continue

                # Find zkVM folders within eest-benchmark
                zkvm_folders = [item for item in benchmark_folder.iterdir() if item.is_dir() and not item.name.startswith('.')]
            else:
                # For execution mode, zkVMs are directly under el_client_folder
                zkvm_folders = [item for item in el_client_folder.iterdir() if item.is_dir() and not item.name.startswith('.')]

            if not zkvm_folders:
                readme_content += "No zkVM results found.\n\n"
                continue

            zkvm_folders.sort(key=lambda x: x.name)
            
            # Collect results from all zkVMs
            zkvm_results = {}
            workload_urls = {}
            
            for zkvm_folder in zkvm_folders:
                zkvm_name = zkvm_folder.name
                
                # Load workload repository info from _zkevm-benchmark-workload.txt
                workload_file = zkvm_folder / "_zkevm-benchmark-workload.txt"
                workload_url = load_workload_info(workload_file)
                if workload_url:
                    workload_urls[zkvm_name] = workload_url
                
                # Load crashed fixtures from _crashes.txt
                crashes_file = zkvm_folder / "_crashes.txt"
                crashed_fixtures = load_crashes_from_file(crashes_file)

                # Process results
                successful_runs, sdk_crashed_runs, prover_crashed_runs = process_zkvm_folder(zkvm_folder, crashed_fixtures, mode=mode)

                zkvm_results[zkvm_name] = {
                    'successful_runs': successful_runs,
                    'sdk_crashed_runs': sdk_crashed_runs,
                    'prover_crashed_runs': prover_crashed_runs
                }

            # Generate the combined comparison table
            readme_content += generate_combined_zkvm_table(zkvm_results, workload_urls, mode=mode)
            
            # Add summary statistics
            total_test_cases = set()
            total_stats = {}
            
            for zkvm_name, zkvm_data in zkvm_results.items():
                successful = len(zkvm_data['successful_runs'])
                sdk_crashed = len(zkvm_data['sdk_crashed_runs'])
                prover_crashed = len(zkvm_data['prover_crashed_runs'])
                total = successful + sdk_crashed + prover_crashed
                
                total_stats[zkvm_name] = {
                    'total': total,
                    'successful': successful,
                    'sdk_crashed': sdk_crashed,
                    'prover_crashed': prover_crashed
                }
                
                # Collect all test case names
                for category in ['successful_runs', 'sdk_crashed_runs', 'prover_crashed_runs']:
                    for run in zkvm_data[category]:
                        total_test_cases.add(run['name'])
            
            readme_content += f"\n## Summary\n\n"
            readme_content += f"**Total unique test cases:** {len(total_test_cases)}\n\n"
            readme_content += "### Results by zkVM\n\n"
            readme_content += "| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |\n"
            readme_content += "|------|-------|---------------|----------------|--------------------|\n"
            
            for zkvm_name in sorted(total_stats.keys()):
                stats = total_stats[zkvm_name]
                readme_content += f"| {zkvm_name} | {stats['total']} | {stats['successful']} | {stats['sdk_crashed']} | {stats['prover_crashed']} |\n"
            
            readme_content += "\n---\n\n"
    
    return readme_content

def generate_hardware_readme(hardware_path: Path) -> str:
    """Generate README.md content for a hardware setup folder (index-style)."""
    hardware_name = hardware_path.name
    readme_content = f"# {hardware_name} Benchmark Results\n\n"
    readme_content += f"This folder contains benchmark results for the **{hardware_name}** hardware setup.\n\n"
    
    # Find all benchmark configuration folders (gas limits and mainnet ranges)
    config_folders = []
    for item in hardware_path.iterdir():
        if item.is_dir() and not item.name.startswith('.') and item.name != "README.md":
            config_folders.append(item)
    
    if not config_folders:
        readme_content += "No benchmark configurations found.\n"
        return readme_content
    
    # Separate gas limit and mainnet configurations
    gas_limit_configs = []
    mainnet_configs = []
    other_configs = []
    
    for config in config_folders:
        if config.name.endswith('-gas-limit'):
            gas_limit_configs.append(config)
        elif config.name.startswith('mainnet-'):
            mainnet_configs.append(config)
        else:
            other_configs.append(config)
    
    # Sort each category
    gas_limit_configs.sort(key=lambda x: x.name)
    mainnet_configs.sort(key=lambda x: x.name)
    other_configs.sort(key=lambda x: x.name)
    
    # Generate sections for each category
    if gas_limit_configs:
        readme_content += "## EEST Gas Limit Configurations\n\n"
        readme_content += "| Configuration | Description | Details |\n"
        readme_content += "|---------------|-------------|----------|\n"
        
        for config in gas_limit_configs:
            gas_limit = config.name.replace('-gas-limit', '')
            description = f"EEST benchmarks with {gas_limit} gas limit"
            readme_content += f"| **{config.name}** | {description} | [View Results]({config.name}/README.md) |\n"
        
        readme_content += "\n"
    
    if mainnet_configs:
        readme_content += "## Mainnet Block Range Configurations\n\n"
        readme_content += "| Configuration | Description | Details |\n"
        readme_content += "|---------------|-------------|----------|\n"
        
        for config in mainnet_configs:
            # Extract block range from folder name
            parts = config.name.replace('mainnet-', '').split('-')
            if len(parts) >= 2:
                start_block = parts[0]
                end_block = parts[1]
                description = f"Mainnet blocks {start_block} to {end_block}"
            else:
                description = f"Mainnet block range benchmark"
            readme_content += f"| **{config.name}** | {description} | [View Results]({config.name}/README.md) |\n"
        
        readme_content += "\n"
    
    if other_configs:
        readme_content += "## Other Configurations\n\n"
        readme_content += "| Configuration | Details |\n"
        readme_content += "|---------------|----------|\n"
        
        for config in other_configs:
            readme_content += f"| **{config.name}** | [View Results]({config.name}/README.md) |\n"
        
        readme_content += "\n"
    
    readme_content += "## Hardware Information\n\n"
    readme_content += f"- **Setup**: {hardware_name}\n"
    readme_content += "- **Total Configurations**: "
    
    total_configs = len(gas_limit_configs) + len(mainnet_configs) + len(other_configs)
    config_breakdown = []
    if gas_limit_configs:
        config_breakdown.append(f"{len(gas_limit_configs)} gas limit")
    if mainnet_configs:
        config_breakdown.append(f"{len(mainnet_configs)} mainnet range")
    if other_configs:
        config_breakdown.append(f"{len(other_configs)} other")
    
    readme_content += f"{total_configs} ({', '.join(config_breakdown)})\n\n"
    
    return readme_content

def generate_root_readme(proving_path: Path, executions_path: Path) -> str:
    """Generate the root README.md content.

    Args:
        proving_path: Path to the proving folder
        executions_path: Path to the executions folder
    """
    readme_content = "# zkEVM Benchmark Runs\n\n"
    readme_content += "This repository contains benchmark results for zkEVM proving and execution across different hardware configurations.\n\n"
    
    # Collect all unique hardware setups from both proving and executions
    all_hardware = set()

    if proving_path.exists():
        for item in proving_path.iterdir():
            if item.is_dir() and not item.name.startswith('.'):
                all_hardware.add(item.name)

    if executions_path.exists():
        for item in executions_path.iterdir():
            if item.is_dir() and not item.name.startswith('.'):
                all_hardware.add(item.name)

    if not all_hardware:
        readme_content += "No hardware configurations found.\n"
        return readme_content

    hardware_names = sorted(all_hardware)

    readme_content += "## Hardware Configurations\n\n"
    readme_content += "| Hardware Setup | Proving Results | Execution Results |\n"
    readme_content += "|----------------|-----------------|-------------------|\n"

    for hardware_name in hardware_names:
        proving_link = "—"
        execution_link = "—"

        # Check if hardware has proving results
        proving_hw_path = proving_path / hardware_name
        if proving_hw_path.exists():
            # Count configurations
            configurations = []
            for config_item in proving_hw_path.iterdir():
                if config_item.is_dir() and not config_item.name.startswith('.') and config_item.name != "README.md":
                    configurations.append(config_item.name)

            if configurations:
                gas_limits = [c for c in configurations if c.endswith('-gas-limit')]
                mainnet_ranges = [c for c in configurations if c.startswith('mainnet-')]
                others = [c for c in configurations if not c.endswith('-gas-limit') and not c.startswith('mainnet-')]

                config_parts = []
                if gas_limits:
                    config_parts.append(f"{len(gas_limits)} gas limit{'s' if len(gas_limits) > 1 else ''}")
                if mainnet_ranges:
                    config_parts.append(f"{len(mainnet_ranges)} mainnet range{'s' if len(mainnet_ranges) > 1 else ''}")
                if others:
                    config_parts.append(f"{len(others)} other")

                config_str = ", ".join(config_parts)
                proving_link = f"[{config_str}](proving/{hardware_name}/README.md)"

        # Check if hardware has execution results
        execution_hw_path = executions_path / hardware_name
        if execution_hw_path.exists():
            # Count configurations
            configurations = []
            for config_item in execution_hw_path.iterdir():
                if config_item.is_dir() and not config_item.name.startswith('.') and config_item.name != "README.md":
                    configurations.append(config_item.name)

            if configurations:
                gas_limits = [c for c in configurations if c.endswith('-gas-limit')]
                mainnet_ranges = [c for c in configurations if c.startswith('mainnet-')]
                others = [c for c in configurations if not c.endswith('-gas-limit') and not c.startswith('mainnet-')]

                config_parts = []
                if gas_limits:
                    config_parts.append(f"{len(gas_limits)} gas limit{'s' if len(gas_limits) > 1 else ''}")
                if mainnet_ranges:
                    config_parts.append(f"{len(mainnet_ranges)} mainnet range{'s' if len(mainnet_ranges) > 1 else ''}")
                if others:
                    config_parts.append(f"{len(others)} other")

                config_str = ", ".join(config_parts)
                execution_link = f"[{config_str}](executions/{hardware_name}/README.md)"

        readme_content += f"| **{hardware_name}** | {proving_link} | {execution_link} |\n"
    
    readme_content += "\n## Folder Structure\n\n"
    readme_content += "The benchmark results are organized in the following hierarchy:\n\n"
    readme_content += "```\n"
    readme_content += "proving/                            # Proving benchmark results\n"
    readme_content += "├── [Hardware Setup]/              # e.g., 1xL40s, 1x4090\n"
    readme_content += "│   ├── [Configuration]/           # Gas limit or mainnet range\n"
    readme_content += "│   │   │\n"
    readme_content += "│   │   ├── Gas Limits (EEST):\n"
    readme_content += "│   │   │   ├── [EL Client]/       # e.g., reth, ethrex\n"
    readme_content += "│   │   │   │   ├── [Benchmark]/   # e.g., eest-benchmark-v0.0.3\n"
    readme_content += "│   │   │   │   │   └── [zkVM]/    # e.g., sp1-v5.1.0, risc0-v1.2.0\n"
    readme_content += "│   │   │\n"
    readme_content += "│   │   └── Mainnet Ranges:\n"
    readme_content += "│   │       ├── [EL Client]/       # e.g., reth, ethrex\n"
    readme_content += "│   │       │   └── [zkVM]/        # e.g., sp1-v5.1.0, risc0-v1.2.0\n"
    readme_content += "\n"
    readme_content += "executions/                         # Execution benchmark results\n"
    readme_content += "├── [Hardware Setup]/              # e.g., 1xL40s, 1x4090\n"
    readme_content += "│   ├── [Configuration]/           # Gas limit or mainnet range\n"
    readme_content += "│   │   ├── [EL Client]/           # e.g., reth, ethrex\n"
    readme_content += "│   │   │   └── [zkVM]/            # e.g., sp1-v5.1.0, risc0-v1.2.0\n"
    readme_content += "```\n\n"
    
    readme_content += "## Configuration Types\n\n"
    readme_content += "- **XXM-gas-limit**: EEST (Ethereum Execution State Test) benchmarks with specific gas limits\n"
    readme_content += "- **mainnet-A-B**: Mainnet block range benchmarks (blocks A through B)\n\n"
    
    readme_content += "## Understanding the Results\n\n"
    readme_content += "### Result Types\n\n"
    readme_content += "- **Proving**: Measures the time and resources required to generate zero-knowledge proofs for blocks\n"
    readme_content += "- **Execution**: Measures the time and cycles required to execute blocks within the zkVM (without proof generation)\n\n"
    readme_content += "### Individual Configuration READMEs\n\n"
    readme_content += "Each configuration folder (gas limit or mainnet range) contains its own detailed README.md file with specific benchmark results, organized by EL client and zkVM.\n\n"
    readme_content += "### Benchmark Workload\n\n"
    readme_content += "EEST benchmark runs include a **Benchmark Workload** link that points to the specific version of the [zkevm-benchmark-workload](https://github.com/eth-act/zkevm-benchmark-workload) tool used to generate the test fixtures.\n\n"
    readme_content += "### Status Categories\n\n"
    readme_content += "- 💥 **Prover Crashes**: Fixtures that crashed the prover/executor entirely (from _crashes.txt)\n"
    readme_content += "- ❌ **SDK Reported Crashes**: Fixtures that failed during proving/execution (reported by SDK)\n"
    readme_content += "- ✅ **Successful Runs**: Fixtures that completed successfully (sorted slowest to fastest)\n\n"

    readme_content += "### Metrics\n\n"
    readme_content += "**Proving:**\n"
    readme_content += "- **Time**: How long it took to generate the proof\n"
    readme_content += "- **Throughput**: Gas processed per second (gas/s)\n"
    readme_content += "- **Proof Size**: Size of the generated proof\n\n"
    readme_content += "**Execution:**\n"
    readme_content += "- **Time**: How long it took to execute the block in the zkVM\n"
    readme_content += "- **Throughput**: Gas processed per second (gas/s)\n"
    readme_content += "- **Cycles**: Total number of zkVM cycles used\n\n"
    
    return readme_content

def process_benchmark_folder(folder_path: Path, mode: str):
    """Process a benchmark folder (proving or executions) and generate READMEs.

    Args:
        folder_path: Path to the folder to process
        mode: Either 'proving' or 'execution'
    """
    if not folder_path.exists():
        print(f"Warning: {folder_path} does not exist, skipping...")
        return

    print(f"Processing {folder_path.name} folder ({mode} mode)...")

    # Find all hardware setup folders
    hardware_folders = [item for item in folder_path.iterdir() if item.is_dir() and not item.name.startswith('.')]

    for hardware_folder in hardware_folders:
        print(f"  Processing {hardware_folder.name}...")

        # Generate README for the hardware setup (index-style)
        hardware_readme_content = generate_hardware_readme(hardware_folder)
        hardware_readme_file = hardware_folder / "README.md"

        with open(hardware_readme_file, 'w') as f:
            f.write(hardware_readme_content)

        print(f"  Generated {hardware_readme_file}")

        # Generate individual README files for each configuration (gas limit/mainnet)
        config_folders = [item for item in hardware_folder.iterdir()
                         if item.is_dir() and not item.name.startswith('.') and item.name != "README.md"]

        for config_folder in config_folders:
            print(f"    Processing {config_folder.name}...")
            config_readme_content = generate_benchmark_config_readme(config_folder, mode=mode)
            config_readme_file = config_folder / "README.md"

            with open(config_readme_file, 'w') as f:
                f.write(config_readme_content)

            print(f"    Generated {config_readme_file}")

def main():
    """Main function to generate all README files."""
    script_dir = Path(__file__).parent
    proving_path = script_dir / "../proving"
    executions_path = script_dir / "../executions"

    print("Generating README files for zkEVM benchmark runs...")

    # Process proving folder
    process_benchmark_folder(proving_path, mode='proving')

    # Process executions folder
    process_benchmark_folder(executions_path, mode='execution')

    # Generate root README
    print("Generating root README...")
    root_readme_content = generate_root_readme(proving_path, executions_path)
    root_readme_file = script_dir / "../README.md"

    with open(root_readme_file, 'w') as f:
        f.write(root_readme_content)

    print(f"Generated {root_readme_file}")

    print("✅ All README files generated successfully!")

if __name__ == "__main__":
    main()
