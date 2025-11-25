#!/usr/bin/env python3
"""
Ethereum Proving Gas Repricing - Data Processing Script

This script processes zkVM benchmark results and generates a consolidated JSON file
for visualization in the interactive website.
"""

import json
import os
import re
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

# Base paths
BENCHMARK_BASE = Path("proving/1xL40s/10M-gas-limit/reth/eest-benchmark")
HARDWARE_FILE = Path("proving/1xL40s/10M-gas-limit/hardware.json")
OUTPUT_FILE = Path("website/data/results.json")

# Canonical precompile mapping rules (addresses from Ethereum Yellow Paper / EIPs)
# Keep this table maintainable: add new fixture patterns to "patterns" when they appear.
PRECOMPILE_RULES = [
    # 0x01
    {"name": "ECRECOVER", "patterns": [r"^ECRECOVER$", r"^EC_RECOVER$"]},
    # 0x02
    {"name": "SHA256", "patterns": [r"^SHA256$"]},
    # 0x03
    {"name": "RIPEMD160", "patterns": [r"^RIPEMD160$"]},
    # 0x04
    {"name": "IDENTITY", "patterns": [r"^IDENTITY$", r"^ID$"]},
    # 0x05
    {"name": "MODEXP", "patterns": [r"^MODEXP$", r"^MOD ?EXP$"]},
    # 0x06 EIP-196
    {"name": "BN128_ADD", "patterns": [r"^BN128_ADD.*$", r"^ALT_BN128_ADD$", r"^ECADD$"]},
    # 0x07 EIP-196
    {"name": "BN128_MUL", "patterns": [r"^BN128_MUL.*$", r"^ALT_BN128_MUL$", r"^ECMUL$"]},
    # 0x08 EIP-197
    {
        "name": "BN128_PAIRING",
        "patterns": [
            r"^BN128_PAIRING.*$",
            r"^BN128_PAIRINGS.*$",
            r"^BN128_.*PAIRING(S)?(_.*)?$",
            r"^ALT_BN128_PAIRING$",
            r"^ALT_BN128_.*PAIRING.*$",
            r"^ECPAIRING.*$",
            r"^EC_PAIRING.*$",
        ],
    },
    # 0x09 EIP-152
    {"name": "BLAKE2F", "patterns": [r"^BLAKE2F.*$"]},
    # 0x0a EIP-4844
    {"name": "POINT_EVALUATION", "patterns": [r"^POINT_EVALUATION$", r"^KZG.*$", r"^EIP4844_.*$"]},
    # 0x0b EIP-2537
    {"name": "BLS12_381_G1ADD", "patterns": [r"^BLS12_381_G1ADD$", r"^BLS12_G1ADD$"]},
    # 0x0c EIP-2537
    {"name": "BLS12_381_G1MSM", "patterns": [r"^BLS12_381_G1MSM$", r"^BLS12_G1MSM$"]},
    # 0x0d EIP-2537
    {"name": "BLS12_381_G2ADD", "patterns": [r"^BLS12_381_G2ADD$", r"^BLS12_G2ADD$"]},
    # 0x0e EIP-2537
    {"name": "BLS12_381_G2MSM", "patterns": [r"^BLS12_381_G2MSM$", r"^BLS12_G2MSM$"]},
    # 0x0f EIP-2537
    {"name": "BLS12_381_PAIRING", "patterns": [r"^BLS12_381_PAIRING$", r"^BLS12_PAIRING$", r"^BLS12_PAIRING_CHECK$"]},
    # 0x10 EIP-2537
    {"name": "BLS12_381_MAP_FP_TO_G1", "patterns": [r"^BLS12_381_MAP_FP_TO_G1$", r"^BLS12_MAP_FP_TO_G1$", r"^BLS12_FP_TO_G1$"]},
    # 0x11 EIP-2537
    {"name": "BLS12_381_MAP_FP2_TO_G2", "patterns": [r"^BLS12_381_MAP_FP2_TO_G2$", r"^BLS12_MAP_FP2_TO_G2$", r"^BLS12_FP_TO_G2$"]},
]

# Canonical opcode mapping rules (EVM yellow paper opcodes)
# Add aliases/fixture spelling variants to patterns to keep UI clean.
OPCODE_RULES = [
    {"name": "STOP", "patterns": [r"^STOP$"]},
    {"name": "ADD", "patterns": [r"^ADD$"]},
    {"name": "MUL", "patterns": [r"^MUL$"]},
    {"name": "SUB", "patterns": [r"^SUB$"]},
    {"name": "DIV", "patterns": [r"^DIV$"]},
    {"name": "SDIV", "patterns": [r"^SDIV$"]},
    {"name": "MOD", "patterns": [r"^MOD$"]},
    {"name": "SMOD", "patterns": [r"^SMOD$"]},
    {"name": "ADDMOD", "patterns": [r"^ADDMOD$"]},
    {"name": "MULMOD", "patterns": [r"^MULMOD$"]},
    {"name": "EXP", "patterns": [r"^EXP$"]},
    {"name": "SIGNEXTEND", "patterns": [r"^SIGNEXTEND$"]},
    {"name": "LT", "patterns": [r"^LT$"]},
    {"name": "GT", "patterns": [r"^GT$"]},
    {"name": "SLT", "patterns": [r"^SLT$"]},
    {"name": "SGT", "patterns": [r"^SGT$"]},
    {"name": "EQ", "patterns": [r"^EQ$"]},
    {"name": "ISZERO", "patterns": [r"^ISZERO$"]},
    {"name": "AND", "patterns": [r"^AND$"]},
    {"name": "OR", "patterns": [r"^OR$"]},
    {"name": "XOR", "patterns": [r"^XOR$"]},
    {"name": "NOT", "patterns": [r"^NOT$"]},
    {"name": "BYTE", "patterns": [r"^BYTE$"]},
    {"name": "SHL", "patterns": [r"^SHL$"]},
    {"name": "SHR", "patterns": [r"^SHR$"]},
    {"name": "SAR", "patterns": [r"^SAR$"]},
    {"name": "KECCAK256", "patterns": [r"^KECCAK256$", r"^KECCAK$", r"^SHA3$"]},
    {"name": "ADDRESS", "patterns": [r"^ADDRESS$"]},
    {"name": "BALANCE", "patterns": [r"^BALANCE$"]},
    {"name": "ORIGIN", "patterns": [r"^ORIGIN$"]},
    {"name": "CALLER", "patterns": [r"^CALLER$"]},
    {"name": "CALLVALUE", "patterns": [r"^CALLVALUE$"]},
    {"name": "CALLDATALOAD", "patterns": [r"^CALLDATALOAD$"]},
    {"name": "CALLDATASIZE", "patterns": [r"^CALLDATASIZE$"]},
    {"name": "CALLDATACOPY", "patterns": [r"^CALLDATACOPY$"]},
    {"name": "CODESIZE", "patterns": [r"^CODESIZE$"]},
    {"name": "CODECOPY", "patterns": [r"^CODECOPY$"]},
    {"name": "GASPRICE", "patterns": [r"^GASPRICE$"]},
    {"name": "EXTCODESIZE", "patterns": [r"^EXTCODESIZE$"]},
    {"name": "EXTCODECOPY", "patterns": [r"^EXTCODECOPY$"]},
    {"name": "RETURNDATASIZE", "patterns": [r"^RETURNDATASIZE$"]},
    {"name": "RETURNDATACOPY", "patterns": [r"^RETURNDATACOPY$"]},
    {"name": "EXTCODEHASH", "patterns": [r"^EXTCODEHASH$"]},
    {"name": "BLOCKHASH", "patterns": [r"^BLOCKHASH$"]},
    {"name": "COINBASE", "patterns": [r"^COINBASE$"]},
    {"name": "TIMESTAMP", "patterns": [r"^TIMESTAMP$"]},
    {"name": "NUMBER", "patterns": [r"^NUMBER$"]},
    {"name": "PREVRANDAO", "patterns": [r"^PREVRANDAO$", r"^DIFFICULTY$"]},
    {"name": "GASLIMIT", "patterns": [r"^GASLIMIT$"]},
    {"name": "CHAINID", "patterns": [r"^CHAINID$"]},
    {"name": "SELFBALANCE", "patterns": [r"^SELFBALANCE$"]},
    {"name": "BASEFEE", "patterns": [r"^BASEFEE$"]},
    {"name": "BLOBHASH", "patterns": [r"^BLOBHASH$"]},
    {"name": "BLOBBASEFEE", "patterns": [r"^BLOBBASEFEE$"]},
    {"name": "POP", "patterns": [r"^POP$"]},
    {"name": "MLOAD", "patterns": [r"^MLOAD$"]},
    {"name": "MSTORE", "patterns": [r"^MSTORE$"]},
    {"name": "MSTORE8", "patterns": [r"^MSTORE8$"]},
    {"name": "SLOAD", "patterns": [r"^SLOAD$"]},
    {"name": "SSTORE", "patterns": [r"^SSTORE$"]},
    {"name": "JUMP", "patterns": [r"^JUMP$"]},
    {"name": "JUMPI", "patterns": [r"^JUMPI$"]},
    {"name": "PC", "patterns": [r"^PC$"]},
    {"name": "MSIZE", "patterns": [r"^MSIZE$"]},
    {"name": "GAS", "patterns": [r"^GAS$"]},
    {"name": "JUMPDEST", "patterns": [r"^JUMPDEST$"]},
    {"name": "TLOAD", "patterns": [r"^TLOAD$"]},
    {"name": "TSTORE", "patterns": [r"^TSTORE$"]},
    {"name": "MCOPY", "patterns": [r"^MCOPY$"]},
    {"name": "PUSH", "patterns": [r"^PUSH$"]},  # grouped via normalize_operation for PUSH0-32
    {"name": "DUP", "patterns": [r"^DUP$"]},    # grouped
    {"name": "SWAP", "patterns": [r"^SWAP$"]},  # grouped
    {"name": "LOG", "patterns": [r"^LOG$"]},    # grouped
    {"name": "CREATE", "patterns": [r"^CREATE$"]},
    {"name": "CALL", "patterns": [r"^CALL$"]},
    {"name": "CALLCODE", "patterns": [r"^CALLCODE$"]},
    {"name": "RETURN", "patterns": [r"^RETURN$"]},
    {"name": "DELEGATECALL", "patterns": [r"^DELEGATECALL$"]},
    {"name": "CREATE2", "patterns": [r"^CREATE2$"]},
    {"name": "STATICCALL", "patterns": [r"^STATICCALL$"]},
    {"name": "REVERT", "patterns": [r"^REVERT$"]},
    {"name": "INVALID", "patterns": [r"^INVALID$"]},
    {"name": "SELFDESTRUCT", "patterns": [r"^SELFDESTRUCT.*$", r"^SUICIDE$"]},
]


def categorize_operation(op: str) -> str:
    """Bucket operation into Opcode / Precompile / Other."""
    upper = op.upper()
    if any(re.match(pat, upper, re.IGNORECASE) for rule in PRECOMPILE_RULES for pat in rule["patterns"]):
        return "Precompile"
    if any(re.match(pat, upper, re.IGNORECASE) for rule in OPCODE_RULES for pat in rule["patterns"]):
        return "Opcode"
    return "Other"


def match_rule_in_text(text: str, rules: List[Dict[str, Any]]) -> Optional[str]:
    """Return canonical rule name if any of its patterns appear in the text."""
    upper = text.upper()

    # Direct search across whole string
    for rule in rules:
        for pat in rule["patterns"]:
            if re.search(pat, upper, re.IGNORECASE):
                return rule["name"]

    # Fallback: scan tokens to satisfy anchored patterns like ^BN128_ADD.*$
    tokens = [t for t in re.split(r"[^A-Z0-9]+", upper) if t]
    for token in tokens:
        for rule in rules:
            for pat in rule["patterns"]:
                if re.match(pat, token, re.IGNORECASE):
                    return rule["name"]

    return None


def extract_operation(test_name: str) -> str:
    """Extract the operation name from test parameters."""
    # Limit rule matching to the parameter section after "blockchain_test"
    params_match = re.search(r"\[(.*)\]", test_name)
    op_region = ""
    if params_match:
        params = params_match.group(1)
        if "blockchain_test" in params:
            op_region = params.split("blockchain_test", 1)[1].lstrip("-")

    if op_region:
        rule_match = match_rule_in_text(op_region, PRECOMPILE_RULES)
        if rule_match:
            return rule_match

        rule_match = match_rule_in_text(op_region, OPCODE_RULES)
        if rule_match:
            return rule_match

    # Try to extract test function name after test_
    func_match = re.search(r"::test_([a-z0-9_]+)\[", test_name)
    if func_match:
        func_name = func_match.group(1).upper()
        # Try matching function name against rules before falling back to title case
        rule_match = match_rule_in_text(func_name, PRECOMPILE_RULES)
        if rule_match:
            return rule_match
        rule_match = match_rule_in_text(func_name, OPCODE_RULES)
        if rule_match:
            return rule_match
        return func_match.group(1).replace("_", " ").title()

    # Try to extract specific test variant info
    variant_match = re.search(r"\[.*?-([\w\s]+)\]\.json$", test_name)
    if variant_match:
        return variant_match.group(1)

    return "Unknown"


# Group similar opcodes under a single bucket (e.g., PUSH0-32 -> PUSH)
GROUP_PATTERNS = [
    ("PUSH", re.compile(r"^PUSH\d+$", re.IGNORECASE)),
    ("DUP", re.compile(r"^DUP\d+$", re.IGNORECASE)),
    ("SWAP", re.compile(r"^SWAP\d+$", re.IGNORECASE)),
    ("LOG", re.compile(r"^LOG\d+$", re.IGNORECASE)),
]


def normalize_operation(operation: str) -> str:
    """Map detailed opcodes to grouped buckets when applicable."""
    for group, pattern in GROUP_PATTERNS:
        if pattern.match(operation):
            return group.upper()
    return operation


def canonicalize_precompile(operation: str) -> str:
    """Return canonical precompile name if operation matches a known rule; otherwise pass through."""
    for rule in PRECOMPILE_RULES:
        for pat in rule["patterns"]:
            if re.match(pat, operation, re.IGNORECASE):
                return rule["name"]
    return operation


def canonicalize_opcode(operation: str) -> str:
    """Return canonical opcode name if operation matches a known opcode rule; otherwise pass through."""
    for rule in OPCODE_RULES:
        for pat in rule["patterns"]:
            if re.match(pat, operation, re.IGNORECASE):
                return rule["name"]
    return operation


def extract_short_name(test_name: str) -> str:
    """Extract a human-readable short name from the test."""
    # Get the operation first
    operation = extract_operation(test_name)

    # Try to get additional context from the test name
    # Remove the file prefix and fork/benchmark boilerplate
    simplified = re.sub(r"^test_\w+\.py::test_\w+\[fork_\w+-benchmark-gas-value_\d+M-blockchain_test-?", "", test_name)
    simplified = simplified.rstrip("].json").rstrip("]")

    if simplified and simplified != operation:
        # Clean up the variant info
        simplified = simplified.replace("-", " ").replace("_", " ").strip()
        if simplified:
            return f"{operation} ({simplified})"

    return operation


def discover_zkvms() -> List[str]:
    """Discover all zkVM versions in the benchmark directory."""
    zkvms = []
    if BENCHMARK_BASE.exists():
        for entry in sorted(BENCHMARK_BASE.iterdir()):
            if entry.is_dir():
                zkvms.append(entry.name)
    return zkvms


def parse_result_file(file_path: Path) -> Optional[Dict[str, Any]]:
    """Parse a single result JSON file."""
    try:
        with open(file_path) as f:
            data = json.load(f)

        result = {
            "name": data.get("name", file_path.stem),
            "timestamp": data.get("timestamp_completed"),
            "block_used_gas": data.get("metadata", {}).get("block_used_gas"),
        }

        proving = data.get("proving", {})
        if "success" in proving:
            result["status"] = "success"
            result["proving_time_ms"] = proving["success"].get("proving_time_ms")
            result["proof_size_bytes"] = proving["success"].get("proof_size")
        elif "crashed" in proving:
            result["status"] = "crashed"
            result["crash_reason"] = proving["crashed"].get("reason", "Unknown error")
        else:
            result["status"] = "unknown"

        return result
    except (json.JSONDecodeError, OSError) as e:
        print(f"Error parsing {file_path}: {e}")
        return None


def load_hardware_info() -> Dict[str, Any]:
    """Load hardware specification."""
    try:
        with open(HARDWARE_FILE) as f:
            return json.load(f)
    except (json.JSONDecodeError, OSError):
        return {}


def process_all_results() -> Dict[str, Any]:
    """Process all benchmark results and generate consolidated data."""
    zkvms = discover_zkvms()
    print(f"Discovered zkVMs: {zkvms}")

    # Collect all unique test IDs across all zkVMs
    all_tests: Dict[str, Dict[str, Any]] = {}
    op_buckets = {"Opcode": set(), "Precompile": set(), "Other": set()}

    for zkvm in zkvms:
        zkvm_path = BENCHMARK_BASE / zkvm
        json_files = list(zkvm_path.glob("*.json"))
        print(f"Processing {zkvm}: {len(json_files)} files")

        for json_file in json_files:
            result = parse_result_file(json_file)
            if result is None:
                continue

            test_id = result["name"]

            # Initialize test entry if not exists
            if test_id not in all_tests:
                raw_operation = extract_operation(test_id)
                grouped_operation = normalize_operation(raw_operation)
                canonical_operation = canonicalize_precompile(grouped_operation)
                if canonical_operation == grouped_operation:
                    canonical_operation = canonicalize_opcode(grouped_operation)
                op_category = categorize_operation(canonical_operation)
                all_tests[test_id] = {
                    "id": test_id,
                    "name": extract_short_name(test_id),
                    "operation": canonical_operation,
                    "block_used_gas": result.get("block_used_gas"),
                    "results": {},
                }
                op_buckets[op_category].add(canonical_operation)

            # Add result for this zkVM
            if result["status"] == "success":
                all_tests[test_id]["results"][zkvm] = {
                    "status": "success",
                    "proving_time_ms": result["proving_time_ms"],
                    "proof_size_bytes": result["proof_size_bytes"],
                }
            else:
                all_tests[test_id]["results"][zkvm] = {
                    "status": "crashed",
                    "crash_reason": result.get("crash_reason", "Unknown"),
                }

    # Convert to list and sort by operation, then name
    tests_list = sorted(all_tests.values(), key=lambda x: (x["operation"], x["name"]))

    # Collect all unique operations (opcodes/precompiles)
    operations = sorted(set(t["operation"] for t in tests_list))

    operations_by_category = {
        cat: sorted(list(ops)) for cat, ops in op_buckets.items() if ops
    }

    # Build output
    output = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "hardware": "1xL40s",
        "hardware_info": load_hardware_info(),
        "gas_limit": "10M",
        "zkvms": zkvms,
        "operations": operations,
        "operations_by_category": operations_by_category,
        "tests": tests_list,
    }

    return output


def main():
    """Main entry point."""
    print("Generating benchmark data...")

    # Change to repo root directory
    script_dir = Path(__file__).parent
    repo_root = script_dir.parent
    os.chdir(repo_root)

    output = process_all_results()

    # Ensure output directory exists
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

    # Write output
    with open(OUTPUT_FILE, "w") as f:
        json.dump(output, f, indent=2)

    print(f"Generated {OUTPUT_FILE}")
    print(f"  - {len(output['zkvms'])} zkVMs")
    print(f"  - {len(output['operations'])} operations")
    print(f"  - {len(output['tests'])} tests")

    # Print summary stats
    for zkvm in output["zkvms"]:
        success = sum(1 for t in output["tests"] if t["results"].get(zkvm, {}).get("status") == "success")
        crashed = sum(1 for t in output["tests"] if t["results"].get(zkvm, {}).get("status") == "crashed")
        print(f"  - {zkvm}: {success} success, {crashed} crashed")


if __name__ == "__main__":
    main()
