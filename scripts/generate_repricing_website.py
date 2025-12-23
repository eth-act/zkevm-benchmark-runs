#!/usr/bin/env python3
"""
Ethereum Proving Gas Repricing - Data Processing Script

This script processes zkVM benchmark results and generates a consolidated JSON file
for visualization in the interactive repricing analysis website.
"""

from __future__ import annotations

import argparse
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

# Base paths (relative to repo root)
DEFAULT_PROVING_BASE = Path("data/proving")
DEFAULT_OUTPUT_DIR = Path("dist/repricing/data")

# Pattern to match EEST configurations (e.g., "10M-gas-limit", "1M-gas-limit")
EEST_CONFIG_PATTERN = re.compile(r"^\d+M-gas-limit$")


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


def match_operation(text: str, rules: list[dict[str, Any]], strategy: str = "exact") -> str | None:
    """
    Match text against operation rules using the specified strategy.

    Args:
        text: The text to match against rules
        rules: List of rule dictionaries with 'name' and 'patterns' keys
        strategy: Matching strategy:
            - "exact": Pattern must match the entire text (uses regex.match)
            - "search": Pattern can match anywhere in text (uses regex.search)
            - "tokens": Split text into tokens, match each token exactly

    Returns:
        Canonical operation name if matched, None otherwise
    """
    if strategy == "exact":
        for rule in rules:
            for pattern in rule["patterns"]:
                if pattern.match(text):
                    return rule["name"]
        return None

    if strategy == "search":
        for rule in rules:
            for pattern in rule["patterns"]:
                if pattern.search(text):
                    return rule["name"]
        return None

    if strategy == "tokens":
        tokens = [t for t in re.split(r"[^A-Za-z0-9]+", text) if t]
        for token in tokens:
            result = match_operation(token, rules, strategy="exact")
            if result:
                return result
        return None

    raise ValueError(f"Unknown matching strategy: {strategy}")


def categorize_operation(op: str) -> Category:
    """Bucket operation into Opcode / Precompile / Other."""
    if match_operation(op, PRECOMPILE_RULES, strategy="exact"):
        return Category.PRECOMPILE
    if match_operation(op, OPCODE_RULES, strategy="exact"):
        return Category.OPCODE
    return Category.OTHER


def match_rule_in_text(text: str, rules: list[dict[str, Any]]) -> str | None:
    """
    Return canonical rule name if any of its patterns appear in the text.

    Tries two strategies in order:
    1. Search: Look for pattern anywhere in the text
    2. Tokens: Split into tokens and match each exactly

    The token fallback handles anchored patterns like ^BN128_ADD.*$ that
    won't match via search in longer strings.
    """
    # First try: search anywhere in text
    result = match_operation(text, rules, strategy="search")
    if result:
        return result

    # Fallback: tokenize and match each token
    return match_operation(text, rules, strategy="tokens")


def extract_operation(test_name: str) -> str:
    """
    Extract the operation name from test parameters.

    This function uses a priority-based extraction strategy to identify
    which EVM operation (opcode or precompile) a test is benchmarking.

    Extraction priority (stops at first match):
        1. Function name for precompiles (e.g., test_modexp -> MODEXP)
        2. Parameter region after "blockchain_test" for precompiles
        3. Parameter region for opcodes
        4. Function name for opcodes
        5. Variant info from test name
        6. Fallback: "Unknown"

    This ordering prioritizes precompile detection to avoid false positives.
    For example, MODEXP tests have "mod_" in params which could wrongly
    match the MOD opcode if we checked opcodes first.

    Args:
        test_name: Full test identifier string (e.g., "test_foo.py::test_bar[...]")

    Returns:
        Canonical operation name (e.g., "MODEXP", "KECCAK256", "ADD")
    """
    # Step 1: Extract function name (most reliable for precompiles)
    func_match = re.search(r"::test_([a-z0-9_]+)\[", test_name)
    if func_match:
        func_name = func_match.group(1).upper()
        rule_match = match_rule_in_text(func_name, PRECOMPILE_RULES)
        if rule_match:
            return rule_match

    # Step 2: Extract parameter region after "blockchain_test"
    params_match = re.search(r"\[(.*)\]", test_name)
    op_region = ""
    if params_match:
        params = params_match.group(1)
        if "blockchain_test" in params:
            op_region = params.split("blockchain_test", 1)[1].lstrip("-")

    # Step 3: Check parameter region for precompiles, then opcodes
    if op_region:
        rule_match = match_rule_in_text(op_region, PRECOMPILE_RULES)
        if rule_match:
            return rule_match

        rule_match = match_rule_in_text(op_region, OPCODE_RULES)
        if rule_match:
            return rule_match

    # Step 4: Fall back to function name for opcodes
    if func_match:
        func_name = func_match.group(1).upper()
        rule_match = match_rule_in_text(func_name, OPCODE_RULES)
        if rule_match:
            return rule_match
        # Use function name as-is (title case)
        return func_match.group(1).replace("_", " ").title()

    # Step 5: Try to extract variant info from test name
    variant_match = re.search(r"\[.*?-([\w\s]+)\]\.json$", test_name)
    if variant_match:
        return variant_match.group(1)

    # Step 6: Unknown operation
    return "Unknown"


def normalize_operation(operation: str) -> str:
    """Map detailed opcodes to grouped buckets when applicable."""
    for group, pattern in GROUP_PATTERNS:
        if pattern.match(operation):
            return group.upper()
    return operation


def canonicalize_operation(operation: str) -> str:
    """
    Return canonical name if operation matches a known precompile or opcode rule.

    This ensures consistent naming even if the input uses an alias
    (e.g., SHA3 -> KECCAK256, DIFFICULTY -> PREVRANDAO).
    """
    result = match_operation(operation, PRECOMPILE_RULES, strategy="exact")
    if result:
        return result
    result = match_operation(operation, OPCODE_RULES, strategy="exact")
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


def validate_result(result: dict[str, Any], file_path: Path) -> list[str]:
    """
    Validate a parsed result and return list of warnings.

    Args:
        result: Parsed result dictionary
        file_path: Source file path (for warning messages)

    Returns:
        List of warning messages (empty if valid)
    """
    warnings = []

    if result.get("block_used_gas") is None:
        warnings.append(f"{file_path.name}: missing block_used_gas")

    if result.get("status") == "success":
        if not result.get("proving_time_ms"):
            warnings.append(f"{file_path.name}: success status but no proving_time_ms")

    return warnings


def parse_result_file(file_path: Path) -> tuple[dict[str, Any] | None, list[str]]:
    """
    Parse a single result JSON file.

    Args:
        file_path: Path to the JSON result file

    Returns:
        Tuple of (parsed result or None, list of warnings)
    """
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

        warnings = validate_result(result, file_path)
        return result, warnings

    except (json.JSONDecodeError, OSError) as e:
        logger.error("Error parsing %s: %s", file_path, e)
        return None, [f"{file_path.name}: parse error - {e}"]


def load_hardware_info(hardware_file: Path) -> dict[str, Any]:
    """Load hardware specification."""
    try:
        with open(hardware_file) as f:
            return json.load(f)
    except (json.JSONDecodeError, OSError) as e:
        logger.warning("Could not load hardware info from %s: %s", hardware_file, e)
        return {}


def discover_hardware_configs(proving_base: Path) -> list[str]:
    """Discover all hardware configurations in the proving directory."""
    hardware_configs = []
    if proving_base.exists():
        for entry in sorted(proving_base.iterdir()):
            if entry.is_dir() and not entry.name.startswith('.'):
                # Check if it has at least one EEST config
                if discover_eest_configs(entry):
                    hardware_configs.append(entry.name)
    return hardware_configs


def get_hardware_friendly_name(hardware_id: str, hardware_info: dict[str, Any]) -> str:
    """Generate a friendly display name for a hardware configuration."""
    # Try to extract GPU info from hardware_info
    gpus = hardware_info.get("gpus", [])
    if gpus:
        gpu_model = gpus[0].get("model", "")
        gpu_count = len(gpus)
        if gpu_model:
            return f"{gpu_count}x {gpu_model}"

    # Fallback to parsing the hardware_id (e.g., "1xL40s" -> "1x L40s")
    match = re.match(r"^(\d+)x(.+)$", hardware_id)
    if match:
        count, model = match.groups()
        return f"{count}x {model}"

    return hardware_id


def discover_eest_configs(proving_base: Path) -> list[str]:
    """Discover all EEST configurations in the proving directory."""
    configs = []
    if proving_base.exists():
        for entry in sorted(proving_base.iterdir()):
            if entry.is_dir() and EEST_CONFIG_PATTERN.match(entry.name):
                # Check if it has at least one EL client subdirectory with zkVM data
                has_el_client = any(
                    subdir.is_dir() and any(subdir.iterdir())
                    for subdir in entry.iterdir()
                    if subdir.is_dir() and not subdir.name.startswith('.')
                )
                if has_el_client:
                    configs.append(entry.name)
    return configs


def discover_el_clients(config_path: Path) -> list[str]:
    """Discover all EL clients in a configuration directory."""
    el_clients = []
    if config_path.exists():
        for entry in sorted(config_path.iterdir()):
            if entry.is_dir() and not entry.name.startswith('.'):
                # Check if it has zkVM subdirectories
                if any(e.is_dir() for e in entry.iterdir()):
                    el_clients.append(entry.name)
    return el_clients


def process_all_results(
    config_path: Path,
    hardware_file: Path,
    config_name: str,
    hardware_id: str,
) -> dict[str, Any]:
    """
    Process all benchmark results across all EL clients and generate consolidated data.

    Args:
        config_path: Path to the configuration directory (e.g., .../10M-gas-limit)
        hardware_file: Path to hardware.json
        config_name: Name of the configuration (e.g., "10M-gas-limit")
        hardware_id: Hardware identifier (e.g., "1xL40s")

    Returns:
        Consolidated data structure ready for JSON serialization
    """
    # Discover all EL clients
    el_clients = discover_el_clients(config_path)
    logger.info("Discovered EL clients: %s", el_clients)

    # Collect all unique test IDs across all EL clients and zkVMs
    all_tests: dict[str, dict[str, Any]] = {}
    op_buckets: dict[Category, set[str]] = {
        Category.OPCODE: set(),
        Category.PRECOMPILE: set(),
        Category.OTHER: set(),
    }

    # Track all EL/zkVM combinations
    all_el_zkvms: list[str] = []
    all_warnings: list[str] = []

    for el_client in el_clients:
        el_path = config_path / el_client
        zkvms = discover_zkvms(el_path)
        logger.info("  %s zkVMs: %s", el_client, zkvms)

        for zkvm in zkvms:
            # Create combined identifier: el_client/zkvm
            el_zkvm = f"{el_client}/{zkvm}"
            all_el_zkvms.append(el_zkvm)

            zkvm_path = el_path / zkvm
            json_files = list(zkvm_path.glob("*.json"))
            logger.info("  Processing %s: %d files", el_zkvm, len(json_files))

            for json_file in json_files:
                result, warnings = parse_result_file(json_file)
                all_warnings.extend(warnings)

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

                # Add result for this EL/zkVM combination
                if result["status"] == "success":
                    all_tests[test_id]["results"][el_zkvm] = {
                        "status": "success",
                        "proving_time_ms": result["proving_time_ms"],
                        "proof_size_bytes": result["proof_size_bytes"],
                    }
                else:
                    all_tests[test_id]["results"][el_zkvm] = {
                        "status": "crashed",
                        "crash_reason": result.get("crash_reason", "Unknown"),
                    }

    # Log data validation warnings
    if all_warnings:
        logger.warning("Data validation warnings (%d):", len(all_warnings))
        for warning in all_warnings[:10]:  # Show first 10
            logger.warning("  %s", warning)
        if len(all_warnings) > 10:
            logger.warning("  ... and %d more warnings", len(all_warnings) - 10)

    # Sort EL/zkVM combinations for consistent ordering
    all_el_zkvms.sort()

    # Convert to list and sort by operation, then name
    tests_list = sorted(all_tests.values(), key=lambda x: (x["operation"], x["name"]))

    # Collect all unique operations (opcodes/precompiles)
    operations = sorted(set(t["operation"] for t in tests_list))

    operations_by_category = {
        cat.value: sorted(list(ops)) for cat, ops in op_buckets.items() if ops
    }

    # Extract gas limit from config name (e.g., "10M-gas-limit" -> "10M")
    gas_limit_match = re.match(r"^(\d+M)-gas-limit$", config_name)
    gas_limit = gas_limit_match.group(1) if gas_limit_match else config_name

    # Build output
    output = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "hardware": hardware_id,
        "hardware_info": load_hardware_info(hardware_file),
        "gas_limit": gas_limit,
        "config": config_name,
        "el_clients": el_clients,
        "zkvms": all_el_zkvms,  # Contains "el_client/zkvm" format
        "operations": operations,
        "operations_by_category": operations_by_category,
        "tests": tests_list,
    }

    return output


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description='Generate repricing analysis data for the interactive website.'
    )
    parser.add_argument(
        '--output',
        type=str,
        default=None,
        help='Output directory path (default: dist/repricing/data)'
    )
    parser.add_argument(
        '--hardware',
        type=str,
        default=None,
        help='Process specific hardware config only (default: all)'
    )

    args = parser.parse_args()

    logger.info("Generating repricing analysis data...")

    # Resolve paths relative to repo root
    repo_root = Path(__file__).parent.parent
    proving_base = repo_root / DEFAULT_PROVING_BASE

    if args.output:
        output_dir = Path(args.output)
    else:
        output_dir = repo_root / DEFAULT_OUTPUT_DIR

    # Ensure output directory exists
    output_dir.mkdir(parents=True, exist_ok=True)

    # Discover all hardware configurations
    all_hardware = discover_hardware_configs(proving_base)
    if not all_hardware:
        logger.error("No hardware configurations found in %s", proving_base)
        return

    # Filter to specific hardware if requested
    if args.hardware:
        if args.hardware not in all_hardware:
            logger.error("Hardware '%s' not found. Available: %s", args.hardware, all_hardware)
            return
        all_hardware = [args.hardware]

    logger.info("Processing hardware configurations: %s", all_hardware)

    # Track all hardware configs for global manifest
    global_hardware_configs = []

    # Process each hardware configuration
    for hardware_id in all_hardware:
        hardware_base = proving_base / hardware_id
        logger.info("=" * 60)
        logger.info("Processing hardware: %s", hardware_id)

        # Discover EEST configurations for this hardware
        eest_configs = discover_eest_configs(hardware_base)
        if not eest_configs:
            logger.warning("No EEST configurations found for %s, skipping", hardware_id)
            continue

        logger.info("Discovered EEST configurations: %s", eest_configs)

        # Create hardware-specific output directory
        hardware_output_dir = output_dir / hardware_id
        hardware_output_dir.mkdir(parents=True, exist_ok=True)

        # Process each configuration for this hardware
        manifest_datasets = []
        hardware_info_sample = {}

        for config_name in eest_configs:
            logger.info("Processing configuration: %s/%s", hardware_id, config_name)

            config_path = hardware_base / config_name
            hardware_file = config_path / "hardware.json"

            output = process_all_results(config_path, hardware_file, config_name, hardware_id)

            # Keep a sample of hardware_info for the global manifest
            if not hardware_info_sample and output.get("hardware_info"):
                hardware_info_sample = output["hardware_info"]

            # Write output file for this configuration
            output_file = hardware_output_dir / f"results-{config_name}.json"
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

            # Add to per-hardware manifest
            manifest_datasets.append({
                "id": config_name,
                "name": f"EEST {output['gas_limit']} Gas Limit",
                "file": f"results-{config_name}.json",
                "gas_limit": output["gas_limit"],
                "test_count": len(output["tests"]),
                "zkvm_count": len(output["zkvms"]),
            })

        # Sort datasets by gas limit (numeric sort, descending)
        def sort_key(d):
            match = re.match(r"(\d+)", d["gas_limit"])
            return int(match.group(1)) if match else 0

        manifest_datasets.sort(key=sort_key, reverse=True)

        # Write per-hardware manifest
        hardware_manifest = {
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "hardware_id": hardware_id,
            "hardware_info": hardware_info_sample,
            "datasets": manifest_datasets,
            "default_dataset": manifest_datasets[0]["id"] if manifest_datasets else None,
        }

        hardware_manifest_file = hardware_output_dir / "manifest.json"
        with open(hardware_manifest_file, "w") as f:
            json.dump(hardware_manifest, f, indent=2)

        logger.info("Generated hardware manifest: %s with %d datasets", hardware_manifest_file, len(manifest_datasets))

        # Add to global hardware configs
        global_hardware_configs.append({
            "id": hardware_id,
            "name": get_hardware_friendly_name(hardware_id, hardware_info_sample),
            "path": hardware_id,
            "dataset_count": len(manifest_datasets),
            "default_dataset": manifest_datasets[0]["id"] if manifest_datasets else None,
        })

    # Write global manifest
    global_manifest = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "hardware_configs": global_hardware_configs,
        "default_hardware": global_hardware_configs[0]["id"] if global_hardware_configs else None,
    }

    global_manifest_file = output_dir / "manifest.json"
    with open(global_manifest_file, "w") as f:
        json.dump(global_manifest, f, indent=2)

    logger.info("=" * 60)
    logger.info("Generated global manifest: %s", global_manifest_file)
    logger.info("Hardware configurations: %s", [h["id"] for h in global_hardware_configs])


if __name__ == "__main__":
    main()
