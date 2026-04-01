"""
Shared utility functions for benchmark data processing.

This module provides common functions used by both the README generator
and the website generator scripts.
"""

import json
import re
from pathlib import Path
from typing import Dict, List, Tuple, Any, Optional

EEST_FIXTURE_SET_PREFIX = "eest-"
EEST_GAS_LIMIT_RE = re.compile(r"^\d+M-gas-limit$")
GAS_VALUE_RE = re.compile(r"benchmark-gas-value_(\d+M)")


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


def filter_json_by_gas(json_files: List[Path], gas_value: str) -> List[Path]:
    """Filter JSON file paths to only those matching a specific gas value.

    Args:
        json_files: List of JSON file paths
        gas_value: Gas value string (e.g., '10M')

    Returns:
        Filtered list of paths whose filenames contain benchmark-gas-value_{gas_value}
    """
    pattern = f"benchmark-gas-value_{gas_value}"
    return [f for f in json_files if pattern in f.name]


def process_zkvm_folder(zkvm_folder: Path, mode: str = 'proving',
                        gas_value_filter: Optional[str] = None) -> Tuple[List[Dict], List[Dict]]:
    """Process a zkVM folder (e.g., sp1-v5.1.0) and categorize results.

    Args:
        zkvm_folder: Path to the zkVM folder
        mode: Either 'proving' or 'execution' to determine which data to extract
        gas_value_filter: If set, only process JSON files matching this gas value (e.g., '10M')

    Returns:
        Tuple of (successful_runs, sdk_crashed_runs)
    """
    successful_runs = []
    sdk_crashed_runs = []

    json_files = list(zkvm_folder.glob('*.json'))
    if gas_value_filter:
        json_files = filter_json_by_gas(json_files, gas_value_filter)

    for json_file in json_files:
        result = process_json_file(json_file, mode=mode)

        if result['status'] == 'crashed':
            sdk_crashed_runs.append(result)
        elif result['status'] == 'success':
            successful_runs.append(result)

    return successful_runs, sdk_crashed_runs


def _is_flat_eest_layout(eest_dir: Path) -> bool:
    """Check whether an eest-* directory uses the flat layout (no gas-limit subdirs).

    Returns True if none of the direct children match the XM-gas-limit pattern,
    meaning EL client folders sit directly inside the eest-* directory.
    """
    for child in eest_dir.iterdir():
        if child.is_dir() and EEST_GAS_LIMIT_RE.match(child.name):
            return False
    return True


def _discover_gas_values(eest_dir: Path) -> List[str]:
    """Discover all unique gas values from JSON filenames in a flat eest-* directory.

    Walks EL client / zkVM subdirectories and extracts gas values from filenames.

    Returns:
        Sorted list of gas value strings (e.g., ['5M', '10M', '15M', ...]),
        sorted numerically.
    """
    gas_values = set()
    # Walk: eest_dir / el_client / zkvm / *.json
    for el_client_dir in eest_dir.iterdir():
        if not el_client_dir.is_dir() or el_client_dir.name.startswith('.'):
            continue
        for zkvm_dir in el_client_dir.iterdir():
            if not zkvm_dir.is_dir() or zkvm_dir.name.startswith('.'):
                continue
            for json_file in zkvm_dir.glob('*.json'):
                m = GAS_VALUE_RE.search(json_file.name)
                if m:
                    gas_values.add(m.group(1))
    return sorted(gas_values, key=lambda v: int(v.rstrip('M')))


def iter_configs(hardware_path: Path):
    """Yield config info dicts for each config under a hardware directory.

    Handles four cases:
    - eest-* fixture-set dirs containing gas-limit subdirs (old layout)
    - eest-* fixture-set dirs with flat layout (gas value in filenames)
    - mainnet-* configs directly under hardware
    - Legacy *M-gas-limit configs directly under hardware (backward compat)

    Each yielded dict has keys:
        path: Path to the config directory (gas-limit dir, or eest-* dir for flat layout)
        name: Config folder name (e.g., '10M-gas-limit')
        dataset_type: 'eest' | 'mainnet' | 'other'
        fixture_set: Fixture-set directory name or None
        gas_value_filter: Gas value string (e.g., '10M') for flat layout, or None
    """
    if not hardware_path.exists():
        return

    for entry in sorted(hardware_path.iterdir()):
        if not entry.is_dir() or entry.name.startswith('.'):
            continue

        if entry.name.startswith(EEST_FIXTURE_SET_PREFIX):
            if _is_flat_eest_layout(entry):
                # Flat layout — discover gas values from filenames
                for gas_value in _discover_gas_values(entry):
                    yield {
                        'path': entry,
                        'name': f'{gas_value}-gas-limit',
                        'dataset_type': 'eest',
                        'fixture_set': entry.name,
                        'gas_value_filter': gas_value,
                    }
            else:
                # Old layout — iterate gas-limit subdirs inside
                for sub in sorted(entry.iterdir()):
                    if sub.is_dir() and not sub.name.startswith('.'):
                        yield {
                            'path': sub,
                            'name': sub.name,
                            'dataset_type': 'eest',
                            'fixture_set': entry.name,
                            'gas_value_filter': None,
                        }
        elif entry.name.startswith('mainnet-'):
            yield {
                'path': entry,
                'name': entry.name,
                'dataset_type': 'mainnet',
                'fixture_set': None,
                'gas_value_filter': None,
            }
        elif EEST_GAS_LIMIT_RE.match(entry.name):
            # Legacy flat layout (pre-migration)
            yield {
                'path': entry,
                'name': entry.name,
                'dataset_type': 'eest',
                'fixture_set': None,
                'gas_value_filter': None,
            }


def load_hardware_info(folder: Path) -> Optional[Dict[str, Any]]:
    """Load hardware information from hardware.json file.

    Searches in the given folder first, then falls back to the parent directory.
    This handles flat eest-* layouts where hardware.json is at the fixture-set level.
    """
    for search_dir in [folder, folder.parent]:
        hardware_file = search_dir / "hardware.json"
        if hardware_file.exists():
            try:
                with open(hardware_file, 'r') as f:
                    return json.load(f)
            except Exception as e:
                print(f"Warning: Could not read {hardware_file}: {e}")
    return None
