"""
Shared utility functions for benchmark data processing.

This module provides common functions used by both the README generator
and the website generator scripts.
"""

import json
from pathlib import Path
from typing import Dict, List, Tuple, Any, Optional


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

    Returns:
        Tuple of (successful_runs, sdk_crashed_runs, prover_crashed_runs)
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


def load_hardware_info(folder: Path) -> Optional[Dict[str, Any]]:
    """Load hardware information from hardware.json file."""
    hardware_file = folder / "hardware.json"
    if hardware_file.exists():
        try:
            with open(hardware_file, 'r') as f:
                return json.load(f)
        except Exception as e:
            print(f"Warning: Could not read {hardware_file}: {e}")
    return None
