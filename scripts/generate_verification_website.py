#!/usr/bin/env python3
"""
Generate data.js for the verification dashboard.

Reads verification benchmark results from data/verification/<zkvm>/*.json
and produces a JavaScript file with all verification times and proof sizes.

Usage:
    python3 scripts/generate_verification_website.py --output dist/verification
"""

import argparse
import json
from pathlib import Path


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

    zkvms = {}

    if not verification_dir.exists():
        print(f"Warning: {verification_dir} does not exist")
    else:
        for zkvm_dir in sorted(verification_dir.iterdir()):
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
                print(f"  {zkvm_name}: {len(results)} results")

    metadata = {}
    metadata_file = verification_dir / 'metadata.json'
    if metadata_file.exists():
        with open(metadata_file, 'r') as f:
            metadata = json.load(f)

    data_js = 'const verificationData = ' + json.dumps({'zkvms': zkvms, 'metadata': metadata}, indent=2) + ';\n'
    output_file = output_dir / 'data.js'
    with open(output_file, 'w') as f:
        f.write(data_js)

    print(f"Generated {output_file} ({len(zkvms)} zkVMs)")


if __name__ == '__main__':
    main()
