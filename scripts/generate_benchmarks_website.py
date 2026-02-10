#!/usr/bin/env python3
"""
Generate benchmark data (data.js) for the zkEVM benchmarks website.

This script processes benchmark runs in the data/proving and data/executions folders
and generates the data.js file consumed by the static benchmarks website.
"""

import argparse
import json
from pathlib import Path
from typing import Dict, Any

from _utils import (
    load_workload_info,
    load_crashes_from_file,
    load_hardware_info,
    process_zkvm_folder,
)


def collect_el_client_data(el_client_folder: Path, mode: str, hardware_info_folder: Path) -> Dict[str, Any]:
    """Collect zkVM data for an EL client.

    Args:
        el_client_folder: Path to the folder containing zkVM data
        mode: Either 'proving' or 'execution'
        hardware_info_folder: Path to the folder containing hardware.json

    Returns:
        Dictionary organized by zkVM name with their results
    """
    zkvm_data = {}

    # Load hardware info from the specified folder
    hardware_info = load_hardware_info(hardware_info_folder)

    zkvm_folders = [item for item in el_client_folder.iterdir()
                   if item.is_dir() and not item.name.startswith('.')]

    for zkvm_folder in zkvm_folders:
        zkvm_name = zkvm_folder.name

        # Load workload URL
        workload_file = zkvm_folder / "_zkevm-benchmark-workload.txt"
        workload_url = load_workload_info(workload_file)

        # Load crashed fixtures
        crashes_file = zkvm_folder / "_crashes.txt"
        crashed_fixtures = load_crashes_from_file(crashes_file)

        # Process results
        successful_runs, sdk_crashed_runs, prover_crashed_runs = process_zkvm_folder(
            zkvm_folder, crashed_fixtures, mode=mode
        )

        zkvm_data[zkvm_name] = {
            'workload_url': workload_url,
            'successful_runs': successful_runs,
            'sdk_crashed_runs': sdk_crashed_runs,
            'prover_crashed_runs': prover_crashed_runs
        }

    return {'hardware_info': hardware_info, 'zkvm_data': zkvm_data}


def collect_mode_data(mode_path: Path, mode: str) -> Dict[str, Any]:
    """Collect data for a specific mode (proving or execution).

    Returns:
        Dictionary organized by hardware -> config -> EL client -> zkVM -> results
    """
    mode_data = {}

    # Find all hardware folders
    hardware_folders = [item for item in mode_path.iterdir()
                       if item.is_dir() and not item.name.startswith('.')]

    for hardware_folder in hardware_folders:
        hardware_name = hardware_folder.name
        mode_data[hardware_name] = {}

        # Find all config folders (gas limits and mainnet ranges)
        config_folders = [item for item in hardware_folder.iterdir()
                         if item.is_dir() and not item.name.startswith('.')]

        for config_folder in config_folders:
            config_name = config_folder.name
            mode_data[hardware_name][config_name] = {}

            # Determine dataset type
            if config_name.endswith('-gas-limit'):
                dataset_type = 'eest'
            elif config_name.startswith('mainnet-'):
                dataset_type = 'mainnet'
            else:
                dataset_type = 'other'

            mode_data[hardware_name][config_name]['dataset_type'] = dataset_type
            mode_data[hardware_name][config_name]['el_clients'] = {}

            # All configurations: config -> EL client -> zkVM
            el_client_folders = [item for item in config_folder.iterdir()
                               if item.is_dir() and not item.name.startswith('.')]

            for el_client_folder in el_client_folders:
                el_client_name = el_client_folder.name
                # Hardware info is always at config level
                el_client_data = collect_el_client_data(el_client_folder, mode, config_folder)
                mode_data[hardware_name][config_name]['el_clients'][el_client_name] = el_client_data

    return mode_data


def collect_website_data(proving_path: Path, executions_path: Path) -> Dict[str, Any]:
    """Collect all benchmark data for the website.

    Returns:
        Dictionary containing all benchmark data organized by mode, hardware, config, EL client, and zkVM
    """
    data = {
        'proving': {},
        'execution': {},
    }

    # Process proving data
    if proving_path.exists():
        data['proving'] = collect_mode_data(proving_path, 'proving')

    # Process execution data
    if executions_path.exists():
        data['execution'] = collect_mode_data(executions_path, 'execution')

    return data


def generate_data(proving_path: Path, executions_path: Path, output_dir: Path):
    """Generate data.js for the benchmarks website.

    Args:
        proving_path: Path to the proving folder
        executions_path: Path to the executions folder
        output_dir: Path to the output directory
    """
    print("Generating benchmarks data...")

    output_dir.mkdir(parents=True, exist_ok=True)

    website_data = collect_website_data(proving_path, executions_path)

    data_js_content = f"const benchmarkData = {json.dumps(website_data, indent=2)};\n"

    with open(output_dir / "data.js", 'w') as f:
        f.write(data_js_content)

    print(f"  data.js generated in {output_dir}")


def main():
    """Main function to generate benchmarks data."""
    parser = argparse.ArgumentParser(
        description='Generate data.js for the zkEVM benchmarks website.'
    )
    parser.add_argument(
        '--output',
        type=str,
        default='dist/benchmarks',
        help='Output directory for data.js (default: dist/benchmarks)'
    )

    args = parser.parse_args()

    script_dir = Path(__file__).resolve().parent
    repo_root = script_dir.parent
    proving_path = repo_root / "data/proving"
    executions_path = repo_root / "data/executions"
    output_dir = Path(args.output) if Path(args.output).is_absolute() else repo_root / args.output

    generate_data(proving_path, executions_path, output_dir)


if __name__ == "__main__":
    main()
