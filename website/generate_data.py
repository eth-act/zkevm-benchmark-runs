#!/usr/bin/env python3
"""
Ethereum Proving Gas Repricing - Data Processing Script

This script processes zkVM benchmark results and generates a consolidated JSON file
for visualization in the interactive website.
"""

from __future__ import annotations

import json
import logging
import re
from datetime import datetime, timezone
from enum import Enum
from pathlib import Path
from typing import Any

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
logger = logging.getLogger(__name__)

# Base paths
BENCHMARK_BASE = Path("proving/1xL40s/10M-gas-limit/reth/eest-benchmark")
HARDWARE_FILE = Path("proving/1xL40s/10M-gas-limit/hardware.json")
OUTPUT_FILE = Path("website/data/results.json")


class Category(str, Enum):
    """Operation categories for classification."""

    OPCODE = "Opcode"
    PRECOMPILE = "Precompile"
    OTHER = "Other"


def _compile_patterns(pattern_strings: list[str]) -> list[re.Pattern]:
    """Compile a list of regex pattern strings."""
    return [re.compile(p, re.IGNORECASE) for p in pattern_strings]


# Canonical precompile mapping rules (addresses from Ethereum Yellow Paper / EIPs)
# Keep this table maintainable: add new fixture patterns to "patterns" when they appear.
PRECOMPILE_RULES = [
    # 0x01
    {"name": "ECRECOVER", "patterns": _compile_patterns([r"^ECRECOVER$", r"^EC_RECOVER$"])},
    # 0x02
    {"name": "SHA256", "patterns": _compile_patterns([r"^SHA256$"])},
    # 0x03
    {"name": "RIPEMD160", "patterns": _compile_patterns([r"^RIPEMD160$"])},
    # 0x04
    {"name": "IDENTITY", "patterns": _compile_patterns([r"^IDENTITY$", r"^ID$"])},
    # 0x05
    {"name": "MODEXP", "patterns": _compile_patterns([r"^MODEXP$", r"^MOD ?EXP$"])},
    # 0x06 EIP-196
    {"name": "BN128_ADD", "patterns": _compile_patterns([r"^BN128_ADD.*$", r"^ALT_BN128_ADD$", r"^ECADD$"])},
    # 0x07 EIP-196
    {"name": "BN128_MUL", "patterns": _compile_patterns([r"^BN128_MUL.*$", r"^ALT_BN128_MUL$", r"^ECMUL$"])},
    # 0x08 EIP-197
    {
        "name": "BN128_PAIRING",
        "patterns": _compile_patterns([
            r"^BN128_PAIRING.*$",
            r"^BN128_PAIRINGS.*$",
            r"^BN128_.*PAIRING(S)?(_.*)?$",
            r"^ALT_BN128_PAIRING$",
            r"^ALT_BN128_.*PAIRING.*$",
            r"^ECPAIRING.*$",
            r"^EC_PAIRING.*$",
        ]),
    },
    # 0x09 EIP-152
    {"name": "BLAKE2F", "patterns": _compile_patterns([r"^BLAKE2F.*$"])},
    # 0x0a EIP-4844
    {"name": "POINT_EVALUATION", "patterns": _compile_patterns([r"^POINT_EVALUATION$", r"^KZG.*$", r"^EIP4844_.*$"])},
    # 0x0b EIP-2537
    {"name": "BLS12_381_G1ADD", "patterns": _compile_patterns([r"^BLS12_381_G1ADD$", r"^BLS12_G1ADD$"])},
    # 0x0c EIP-2537
    {"name": "BLS12_381_G1MSM", "patterns": _compile_patterns([r"^BLS12_381_G1MSM$", r"^BLS12_G1MSM$"])},
    # 0x0d EIP-2537
    {"name": "BLS12_381_G2ADD", "patterns": _compile_patterns([r"^BLS12_381_G2ADD$", r"^BLS12_G2ADD$"])},
    # 0x0e EIP-2537
    {"name": "BLS12_381_G2MSM", "patterns": _compile_patterns([r"^BLS12_381_G2MSM$", r"^BLS12_G2MSM$"])},
    # 0x0f EIP-2537
    {"name": "BLS12_381_PAIRING", "patterns": _compile_patterns([r"^BLS12_381_PAIRING$", r"^BLS12_PAIRING$", r"^BLS12_PAIRING_CHECK$"])},
    # 0x10 EIP-2537
    {"name": "BLS12_381_MAP_FP_TO_G1", "patterns": _compile_patterns([r"^BLS12_381_MAP_FP_TO_G1$", r"^BLS12_MAP_FP_TO_G1$", r"^BLS12_FP_TO_G1$"])},
    # 0x11 EIP-2537
    {"name": "BLS12_381_MAP_FP2_TO_G2", "patterns": _compile_patterns([r"^BLS12_381_MAP_FP2_TO_G2$", r"^BLS12_MAP_FP2_TO_G2$", r"^BLS12_FP_TO_G2$"])},
]

# Canonical opcode mapping rules (EVM yellow paper opcodes)
# Add aliases/fixture spelling variants to patterns to keep UI clean.
OPCODE_RULES = [
    {"name": "STOP", "patterns": _compile_patterns([r"^STOP$"])},
    {"name": "ADD", "patterns": _compile_patterns([r"^ADD$"])},
    {"name": "MUL", "patterns": _compile_patterns([r"^MUL$"])},
    {"name": "SUB", "patterns": _compile_patterns([r"^SUB$"])},
    {"name": "DIV", "patterns": _compile_patterns([r"^DIV$"])},
    {"name": "SDIV", "patterns": _compile_patterns([r"^SDIV$"])},
    {"name": "MOD", "patterns": _compile_patterns([r"^MOD$"])},
    {"name": "SMOD", "patterns": _compile_patterns([r"^SMOD$"])},
    {"name": "ADDMOD", "patterns": _compile_patterns([r"^ADDMOD$"])},
    {"name": "MULMOD", "patterns": _compile_patterns([r"^MULMOD$"])},
    {"name": "EXP", "patterns": _compile_patterns([r"^EXP$"])},
    {"name": "SIGNEXTEND", "patterns": _compile_patterns([r"^SIGNEXTEND$"])},
    {"name": "LT", "patterns": _compile_patterns([r"^LT$"])},
    {"name": "GT", "patterns": _compile_patterns([r"^GT$"])},
    {"name": "SLT", "patterns": _compile_patterns([r"^SLT$"])},
    {"name": "SGT", "patterns": _compile_patterns([r"^SGT$"])},
    {"name": "EQ", "patterns": _compile_patterns([r"^EQ$"])},
    {"name": "ISZERO", "patterns": _compile_patterns([r"^ISZERO$"])},
    {"name": "AND", "patterns": _compile_patterns([r"^AND$"])},
    {"name": "OR", "patterns": _compile_patterns([r"^OR$"])},
    {"name": "XOR", "patterns": _compile_patterns([r"^XOR$"])},
    {"name": "NOT", "patterns": _compile_patterns([r"^NOT$"])},
    {"name": "BYTE", "patterns": _compile_patterns([r"^BYTE$"])},
    {"name": "SHL", "patterns": _compile_patterns([r"^SHL$"])},
    {"name": "SHR", "patterns": _compile_patterns([r"^SHR$"])},
    {"name": "SAR", "patterns": _compile_patterns([r"^SAR$"])},
    {"name": "KECCAK256", "patterns": _compile_patterns([r"^KECCAK256$", r"^KECCAK$", r"^SHA3$"])},
    {"name": "ADDRESS", "patterns": _compile_patterns([r"^ADDRESS$"])},
    {"name": "BALANCE", "patterns": _compile_patterns([r"^BALANCE$"])},
    {"name": "ORIGIN", "patterns": _compile_patterns([r"^ORIGIN$"])},
    {"name": "CALLER", "patterns": _compile_patterns([r"^CALLER$"])},
    {"name": "CALLVALUE", "patterns": _compile_patterns([r"^CALLVALUE$"])},
    {"name": "CALLDATALOAD", "patterns": _compile_patterns([r"^CALLDATALOAD$"])},
    {"name": "CALLDATASIZE", "patterns": _compile_patterns([r"^CALLDATASIZE$"])},
    {"name": "CALLDATACOPY", "patterns": _compile_patterns([r"^CALLDATACOPY$"])},
    {"name": "CODESIZE", "patterns": _compile_patterns([r"^CODESIZE$"])},
    {"name": "CODECOPY", "patterns": _compile_patterns([r"^CODECOPY$"])},
    {"name": "GASPRICE", "patterns": _compile_patterns([r"^GASPRICE$"])},
    {"name": "EXTCODESIZE", "patterns": _compile_patterns([r"^EXTCODESIZE$"])},
    {"name": "EXTCODECOPY", "patterns": _compile_patterns([r"^EXTCODECOPY$"])},
    {"name": "RETURNDATASIZE", "patterns": _compile_patterns([r"^RETURNDATASIZE$"])},
    {"name": "RETURNDATACOPY", "patterns": _compile_patterns([r"^RETURNDATACOPY$"])},
    {"name": "EXTCODEHASH", "patterns": _compile_patterns([r"^EXTCODEHASH$"])},
    {"name": "BLOCKHASH", "patterns": _compile_patterns([r"^BLOCKHASH$"])},
    {"name": "COINBASE", "patterns": _compile_patterns([r"^COINBASE$"])},
    {"name": "TIMESTAMP", "patterns": _compile_patterns([r"^TIMESTAMP$"])},
    {"name": "NUMBER", "patterns": _compile_patterns([r"^NUMBER$"])},
    {"name": "PREVRANDAO", "patterns": _compile_patterns([r"^PREVRANDAO$", r"^DIFFICULTY$"])},
    {"name": "GASLIMIT", "patterns": _compile_patterns([r"^GASLIMIT$"])},
    {"name": "CHAINID", "patterns": _compile_patterns([r"^CHAINID$"])},
    {"name": "SELFBALANCE", "patterns": _compile_patterns([r"^SELFBALANCE$"])},
    {"name": "BASEFEE", "patterns": _compile_patterns([r"^BASEFEE$"])},
    {"name": "BLOBHASH", "patterns": _compile_patterns([r"^BLOBHASH$"])},
    {"name": "BLOBBASEFEE", "patterns": _compile_patterns([r"^BLOBBASEFEE$"])},
    {"name": "POP", "patterns": _compile_patterns([r"^POP$"])},
    {"name": "MLOAD", "patterns": _compile_patterns([r"^MLOAD$"])},
    {"name": "MSTORE", "patterns": _compile_patterns([r"^MSTORE$"])},
    {"name": "MSTORE8", "patterns": _compile_patterns([r"^MSTORE8$"])},
    {"name": "SLOAD", "patterns": _compile_patterns([r"^SLOAD$"])},
    {"name": "SSTORE", "patterns": _compile_patterns([r"^SSTORE$"])},
    {"name": "JUMP", "patterns": _compile_patterns([r"^JUMP$"])},
    {"name": "JUMPI", "patterns": _compile_patterns([r"^JUMPI$"])},
    {"name": "PC", "patterns": _compile_patterns([r"^PC$"])},
    {"name": "MSIZE", "patterns": _compile_patterns([r"^MSIZE$"])},
    {"name": "GAS", "patterns": _compile_patterns([r"^GAS$"])},
    {"name": "JUMPDEST", "patterns": _compile_patterns([r"^JUMPDEST$"])},
    {"name": "TLOAD", "patterns": _compile_patterns([r"^TLOAD$"])},
    {"name": "TSTORE", "patterns": _compile_patterns([r"^TSTORE$"])},
    {"name": "MCOPY", "patterns": _compile_patterns([r"^MCOPY$"])},
    {"name": "PUSH", "patterns": _compile_patterns([r"^PUSH$"])},  # grouped via normalize_operation for PUSH0-32
    {"name": "DUP", "patterns": _compile_patterns([r"^DUP$"])},  # grouped
    {"name": "SWAP", "patterns": _compile_patterns([r"^SWAP$"])},  # grouped
    {"name": "LOG", "patterns": _compile_patterns([r"^LOG$"])},  # grouped
    {"name": "CREATE", "patterns": _compile_patterns([r"^CREATE$"])},
    {"name": "CALL", "patterns": _compile_patterns([r"^CALL$"])},
    {"name": "CALLCODE", "patterns": _compile_patterns([r"^CALLCODE$"])},
    {"name": "RETURN", "patterns": _compile_patterns([r"^RETURN$"])},
    {"name": "DELEGATECALL", "patterns": _compile_patterns([r"^DELEGATECALL$"])},
    {"name": "CREATE2", "patterns": _compile_patterns([r"^CREATE2$"])},
    {"name": "STATICCALL", "patterns": _compile_patterns([r"^STATICCALL$"])},
    {"name": "REVERT", "patterns": _compile_patterns([r"^REVERT$"])},
    {"name": "INVALID", "patterns": _compile_patterns([r"^INVALID$"])},
    {"name": "SELFDESTRUCT", "patterns": _compile_patterns([r"^SELFDESTRUCT.*$", r"^SUICIDE$"])},
]

# Group similar opcodes under a single bucket (e.g., PUSH0-32 -> PUSH)
GROUP_PATTERNS = [
    ("PUSH", re.compile(r"^PUSH\d+$", re.IGNORECASE)),
    ("DUP", re.compile(r"^DUP\d+$", re.IGNORECASE)),
    ("SWAP", re.compile(r"^SWAP\d+$", re.IGNORECASE)),
    ("LOG", re.compile(r"^LOG\d+$", re.IGNORECASE)),
]


def _match_rules(text: str, rules: list[dict[str, Any]]) -> str | None:
    """Return canonical rule name if text matches any pattern in the rules."""
    for rule in rules:
        for pattern in rule["patterns"]:
            if pattern.match(text):
                return rule["name"]
    return None


def _search_rules(text: str, rules: list[dict[str, Any]]) -> str | None:
    """Return canonical rule name if any pattern is found within the text."""
    for rule in rules:
        for pattern in rule["patterns"]:
            if pattern.search(text):
                return rule["name"]
    return None


def _match_rules_in_tokens(text: str, rules: list[dict[str, Any]]) -> str | None:
    """Split text into tokens and try to match each against rules."""
    tokens = [t for t in re.split(r"[^A-Za-z0-9]+", text) if t]
    for token in tokens:
        match = _match_rules(token, rules)
        if match:
            return match
    return None


def categorize_operation(op: str) -> Category:
    """Bucket operation into Opcode / Precompile / Other."""
    if _match_rules(op, PRECOMPILE_RULES):
        return Category.PRECOMPILE
    if _match_rules(op, OPCODE_RULES):
        return Category.OPCODE
    return Category.OTHER


def match_rule_in_text(text: str, rules: list[dict[str, Any]]) -> str | None:
    """Return canonical rule name if any of its patterns appear in the text."""
    # Direct search across whole string
    result = _search_rules(text, rules)
    if result:
        return result

    # Fallback: scan tokens to satisfy anchored patterns like ^BN128_ADD.*$
    return _match_rules_in_tokens(text, rules)


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


def normalize_operation(operation: str) -> str:
    """Map detailed opcodes to grouped buckets when applicable."""
    for group, pattern in GROUP_PATTERNS:
        if pattern.match(operation):
            return group.upper()
    return operation


def canonicalize_operation(operation: str) -> str:
    """Return canonical name if operation matches a known precompile or opcode rule."""
    result = _match_rules(operation, PRECOMPILE_RULES)
    if result:
        return result
    result = _match_rules(operation, OPCODE_RULES)
    if result:
        return result
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


def discover_zkvms(benchmark_base: Path) -> list[str]:
    """Discover all zkVM versions in the benchmark directory."""
    zkvms = []
    if benchmark_base.exists():
        for entry in sorted(benchmark_base.iterdir()):
            if entry.is_dir():
                zkvms.append(entry.name)
    return zkvms


def parse_result_file(file_path: Path) -> dict[str, Any] | None:
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
        logger.error("Error parsing %s: %s", file_path, e)
        return None


def load_hardware_info(hardware_file: Path) -> dict[str, Any]:
    """Load hardware specification."""
    try:
        with open(hardware_file) as f:
            return json.load(f)
    except (json.JSONDecodeError, OSError) as e:
        logger.warning("Could not load hardware info from %s: %s", hardware_file, e)
        return {}


def process_all_results(benchmark_base: Path, hardware_file: Path) -> dict[str, Any]:
    """Process all benchmark results and generate consolidated data."""
    zkvms = discover_zkvms(benchmark_base)
    logger.info("Discovered zkVMs: %s", zkvms)

    # Collect all unique test IDs across all zkVMs
    all_tests: dict[str, dict[str, Any]] = {}
    op_buckets: dict[Category, set[str]] = {
        Category.OPCODE: set(),
        Category.PRECOMPILE: set(),
        Category.OTHER: set(),
    }

    for zkvm in zkvms:
        zkvm_path = benchmark_base / zkvm
        json_files = list(zkvm_path.glob("*.json"))
        logger.info("Processing %s: %d files", zkvm, len(json_files))

        for json_file in json_files:
            result = parse_result_file(json_file)
            if result is None:
                continue

            test_id = result["name"]

            # Initialize test entry if not exists
            if test_id not in all_tests:
                raw_operation = extract_operation(test_id)
                grouped_operation = normalize_operation(raw_operation)
                canonical_operation = canonicalize_operation(grouped_operation)
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
        cat.value: sorted(list(ops)) for cat, ops in op_buckets.items() if ops
    }

    # Build output
    output = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "hardware": "1xL40s",
        "hardware_info": load_hardware_info(hardware_file),
        "gas_limit": "10M",
        "zkvms": zkvms,
        "operations": operations,
        "operations_by_category": operations_by_category,
        "tests": tests_list,
    }

    return output


def main():
    """Main entry point."""
    logger.info("Generating benchmark data...")

    # Resolve paths relative to repo root
    repo_root = Path(__file__).parent.parent
    benchmark_base = repo_root / BENCHMARK_BASE
    hardware_file = repo_root / HARDWARE_FILE
    output_file = repo_root / OUTPUT_FILE

    output = process_all_results(benchmark_base, hardware_file)

    # Ensure output directory exists
    output_file.parent.mkdir(parents=True, exist_ok=True)

    # Write output
    with open(output_file, "w") as f:
        json.dump(output, f, indent=2)

    logger.info("Generated %s", output_file)
    logger.info("  - %d zkVMs", len(output["zkvms"]))
    logger.info("  - %d operations", len(output["operations"]))
    logger.info("  - %d tests", len(output["tests"]))

    # Print summary stats
    for zkvm in output["zkvms"]:
        success = sum(1 for t in output["tests"] if t["results"].get(zkvm, {}).get("status") == "success")
        crashed = sum(1 for t in output["tests"] if t["results"].get(zkvm, {}).get("status") == "crashed")
        logger.info("  - %s: %d success, %d crashed", zkvm, success, crashed)


if __name__ == "__main__":
    main()
