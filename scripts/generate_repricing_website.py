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

from _utils import (
    _is_flat_eest_layout,
    _discover_gas_values,
    filter_json_by_gas,
)

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


def _build_rules(spec: dict[str, list[str]]) -> list[dict[str, Any]]:
    """Build compiled rule list from a compact {canonical_name: [alias_patterns]} spec.

    Entries with an empty alias list get a single exact-match pattern (^NAME$).
    Alias strings are compiled as-is (case-insensitive) so they can contain regex.
    """
    rules: list[dict[str, Any]] = []
    for name, aliases in spec.items():
        if aliases:
            patterns = [re.compile(p, re.IGNORECASE) for p in aliases]
        else:
            patterns = [re.compile(rf"^{re.escape(name)}$", re.IGNORECASE)]
        rules.append({"name": name, "patterns": patterns})
    return rules


# Canonical precompile mapping rules (addresses from Ethereum Yellow Paper / EIPs).
# Key = canonical name, value = alias regex patterns (empty list = exact match only).
PRECOMPILE_RULES = _build_rules({
    "ECRECOVER":                [r"^ECRECOVER$", r"^EC_RECOVER$"],                          # 0x01
    "SHA256":                   [],                                                          # 0x02
    "RIPEMD160":                [],                                                          # 0x03
    "IDENTITY":                 [],                                                          # 0x04
    "MODEXP":                   [r"^MODEXP$", r"^MOD ?EXP$"],                                # 0x05
    "BN128_ADD":                [r"^BN128_ADD.*$", r"^ALT_BN128_ADD$", r"^ECADD$"],          # 0x06 EIP-196
    "BN128_MUL":                [r"^BN128_MUL.*$", r"^ALT_BN128_MUL$", r"^ECMUL$"],         # 0x07 EIP-196
    "BN128_PAIRING":            [                                                            # 0x08 EIP-197
        r"^BN128_PAIRING.*$", r"^BN128_PAIRINGS.*$", r"^BN128_.*PAIRING(S)?(_.*)?$",
        r"^ALT_BN128_PAIRING$", r"^ALT_BN128_.*PAIRING.*$", r"^ALT_BN128_BENCHMARK$",
        r"^ECPAIRING.*$", r"^EC_PAIRING.*$",
    ],
    "BLAKE2F":                  [r"^BLAKE2F.*$"],                                            # 0x09 EIP-152
    "POINT_EVALUATION":         [r"^POINT_EVALUATION$", r"^KZG.*$", r"^EIP4844_.*$"],        # 0x0a EIP-4844
    "BLS12_381_G1ADD":          [r"^BLS12_381_G1ADD$", r"^BLS12_G1ADD$"],                    # 0x0b EIP-2537
    "BLS12_381_G1MSM":          [r"^BLS12_381_G1MSM$", r"^BLS12_G1MSM$", r"^BLS12_G1_MSM$"],# 0x0c EIP-2537
    "BLS12_381_G2ADD":          [r"^BLS12_381_G2ADD$", r"^BLS12_G2ADD$"],                    # 0x0d EIP-2537
    "BLS12_381_G2MSM":          [r"^BLS12_381_G2MSM$", r"^BLS12_G2MSM$", r"^BLS12_G2_MSM$"],# 0x0e EIP-2537
    "BLS12_381_PAIRING":        [r"^BLS12_381_PAIRING$", r"^BLS12_PAIRING$", r"^BLS12_PAIRING_CHECK$"],  # 0x0f EIP-2537
    "BLS12_381_MAP_FP_TO_G1":   [r"^BLS12_381_MAP_FP_TO_G1$", r"^BLS12_MAP_FP_TO_G1$", r"^BLS12_FP_TO_G1$"],   # 0x10 EIP-2537
    "BLS12_381_MAP_FP2_TO_G2":  [r"^BLS12_381_MAP_FP2_TO_G2$", r"^BLS12_MAP_FP2_TO_G2$", r"^BLS12_FP_TO_G2$"], # 0x11 EIP-2537
    "P256VERIFY":               [r"^P256VERIFY$", r"^P256_VERIFY$"],                         # 0x100 EIP-7212
})

# Canonical opcode mapping rules (EVM Yellow Paper opcodes).
# Aliases handle fixture spelling variants (e.g., SHA3 -> KECCAK256, DIFFICULTY -> PREVRANDAO).
# Opcodes with no aliases use exact match (empty list).
OPCODE_RULES = _build_rules({
    # Arithmetic
    "STOP": [], "ADD": [], "MUL": [], "SUB": [], "DIV": [], "SDIV": [],
    "MOD": [], "SMOD": [], "ADDMOD": [], "MULMOD": [], "EXP": [], "SIGNEXTEND": [],
    # Comparison & bitwise
    "LT": [], "GT": [], "SLT": [], "SGT": [], "EQ": [], "ISZERO": [],
    "AND": [], "OR": [], "XOR": [], "NOT": [], "BYTE": [],
    "SHL": [], "SHR": [], "SAR": [], "CLZ": [],
    # Crypto
    "KECCAK256":      [r"^KECCAK256$", r"^KECCAK$", r"^SHA3$"],
    # Environment
    "ADDRESS": [], "BALANCE": [], "ORIGIN": [], "CALLER": [], "CALLVALUE": [],
    "CALLDATALOAD": [], "CALLDATASIZE": [], "CALLDATACOPY": [],
    "CODESIZE": [], "CODECOPY": [], "GASPRICE": [],
    "EXTCODESIZE": [], "EXTCODECOPY": [], "RETURNDATASIZE": [], "RETURNDATACOPY": [],
    "EXTCODEHASH": [],
    # Block
    "BLOCKHASH": [], "COINBASE": [], "TIMESTAMP": [], "NUMBER": [],
    "PREVRANDAO":     [r"^PREVRANDAO$", r"^DIFFICULTY$"],
    "GASLIMIT": [], "CHAINID": [], "SELFBALANCE": [], "BASEFEE": [],
    "BLOBHASH": [], "BLOBBASEFEE": [],
    # Stack / memory / storage
    "POP": [], "MLOAD": [], "MSTORE": [], "MSTORE8": [],
    "SLOAD":          [r"^SLOAD$", r"^SSLOAD$"],
    "SSTORE":         [r"^SSTORE$", r"^SSSTORE$"],
    "JUMP":           [r"^JUMP$", r"^JUMPS$"],
    "JUMPI":          [r"^JUMPI$", r"^JUMPIS$"],
    "PC": [], "MSIZE": [], "GAS": [],
    "JUMPDEST":       [r"^JUMPDEST$", r"^JUMPDESTS$"],
    "TLOAD": [], "TSTORE": [], "MCOPY": [],
    # Grouped (PUSH0-32 -> PUSH, DUP1-16 -> DUP, etc. via normalize_operation)
    "PUSH": [], "DUP": [], "SWAP": [], "LOG": [],
    # Calls & lifecycle
    "CREATE": [], "CALL": [], "CALLCODE": [], "RETURN": [],
    "DELEGATECALL": [], "CREATE2": [], "STATICCALL": [], "REVERT": [], "INVALID": [],
    "SELFDESTRUCT":   [r"^SELFDESTRUCT.*$", r"^SUICIDE$"],
})

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


# Known function-name aliases for tests that don't map to an opcode/precompile.
_FUNC_NAME_ALIASES: dict[str, str] = {
    "ether_transfers_to_precompile": "Ether Transfers",
}

# Regex strips applied to the parameter region to prevent false opcode matches.
_OP_REGION_STRIPS: list[tuple[re.Pattern, str]] = [
    # "benchmark-gas-value_10M" contains "gas" -> false GAS opcode match
    (re.compile(r"-?benchmark-gas-value_\d+M$"), ""),
    # Enum-qualified values (e.g., ReturnDataStyle.IDENTITY) are test params, not ops
    (re.compile(r"[A-Z][a-zA-Z0-9]*\.[A-Z][A-Z0-9_]+"), ""),
    # "return_data_style" contains "RETURN" -> false RETURN opcode match
    (re.compile(r"return[_-]data[_-]style[_-]?", re.IGNORECASE), ""),
    # "returned_size" contains opcode-like substrings
    (re.compile(r"returned[_-]size[_-]?\d*", re.IGNORECASE), ""),
]


def _extract_func_name(test_name: str) -> str | None:
    """Extract the test function name (uppercase) from a test identifier, or None."""
    m = re.search(r"::test_([a-z0-9_]+)\[", test_name)
    return m.group(1) if m else None


def _extract_op_region(test_name: str) -> str:
    """Extract the parameter region after 'blockchain_test', stripped of boilerplate."""
    params_match = re.search(r"\[(.*)\]", test_name)
    if not params_match:
        return ""
    params = params_match.group(1)
    if "blockchain_test" not in params:
        return ""
    region = params.split("blockchain_test", 1)[1].lstrip("-")
    for pattern, repl in _OP_REGION_STRIPS:
        region = pattern.sub(repl, region)
    return region


def extract_operation(test_name: str) -> str:
    """
    Extract the EVM operation name from a test identifier.

    Uses a priority-based strategy (stops at first match):
        1. Function name matched as precompile  (e.g., test_modexp -> MODEXP)
        2. Parameter region matched as precompile
        3. Parameter region matched as opcode
        4. Function name matched as opcode
        5. Variant info from test name brackets
        6. Fallback: "Unknown"

    Precompiles are checked before opcodes to avoid false positives
    (e.g., MODEXP tests contain "mod_" which would wrongly match MOD).
    """
    func_name = _extract_func_name(test_name)
    op_region = _extract_op_region(test_name)

    # Priority 1: function name -> precompile
    if func_name:
        result = match_rule_in_text(func_name.upper(), PRECOMPILE_RULES)
        if result:
            return result

    # Priority 2-3: parameter region -> precompile, then opcode
    if op_region:
        result = match_rule_in_text(op_region, PRECOMPILE_RULES)
        if result:
            return result
        result = match_rule_in_text(op_region, OPCODE_RULES)
        if result:
            return result

    # Priority 4: function name -> opcode or human-readable fallback
    if func_name:
        result = match_rule_in_text(func_name.upper(), OPCODE_RULES)
        if result:
            return result
        return _FUNC_NAME_ALIASES.get(func_name, func_name.replace("_", " ").title())

    # Priority 5: variant info from bracket region
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


def _has_el_client_data(config_dir: Path) -> bool:
    """Check if a config directory has at least one EL client with zkVM data."""
    return any(
        subdir.is_dir() and any(subdir.iterdir())
        for subdir in config_dir.iterdir()
        if subdir.is_dir() and not subdir.name.startswith('.')
    )


def discover_eest_configs(hardware_base: Path) -> list[tuple[str | None, str, Path, str | None]]:
    """Discover all EEST configurations under a hardware directory.

    Handles:
    - eest-* fixture-set dirs with flat layout (gas value in filenames)
    - eest-* fixture-set dirs containing gas-limit subdirs (old layout)
    - Direct *M-gas-limit dirs (legacy layout)

    Returns list of (fixture_set_name, config_name, config_path, gas_value_filter) tuples.
    gas_value_filter is set for flat layout configs, None otherwise.
    """
    configs = []
    if not hardware_base.exists():
        return configs

    for entry in sorted(hardware_base.iterdir()):
        if not entry.is_dir() or entry.name.startswith('.'):
            continue

        if entry.name.startswith("eest-"):
            if _is_flat_eest_layout(entry):
                # Flat layout — discover gas values from filenames
                if _has_el_client_data(entry):
                    for gas_value in _discover_gas_values(entry):
                        configs.append((entry.name, f"{gas_value}-gas-limit", entry, gas_value))
            else:
                # Old layout — gas-limit subdirs inside
                for sub in sorted(entry.iterdir()):
                    if sub.is_dir() and EEST_CONFIG_PATTERN.match(sub.name):
                        if _has_el_client_data(sub):
                            configs.append((entry.name, sub.name, sub, None))
        elif EEST_CONFIG_PATTERN.match(entry.name):
            # Legacy flat layout
            if _has_el_client_data(entry):
                configs.append((None, entry.name, entry, None))

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
    gas_value_filter: str | None = None,
) -> dict[str, Any]:
    """
    Process all benchmark results across all EL clients and generate consolidated data.

    Args:
        config_path: Path to the configuration directory (e.g., .../10M-gas-limit or flat eest-* dir)
        hardware_file: Path to hardware.json
        config_name: Name of the configuration (e.g., "10M-gas-limit")
        hardware_id: Hardware identifier (e.g., "1xL40s")
        gas_value_filter: If set, only process JSON files matching this gas value (e.g., '10M')

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
            if gas_value_filter:
                json_files = filter_json_by_gas(json_files, gas_value_filter)
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


def _gas_sort_key(g: str) -> int:
    """Extract leading integer from a gas-limit string for numeric sorting."""
    m = re.match(r"(\d+)", g)
    return int(m.group(1)) if m else 0


_NORMALIZE_GAS_RE = re.compile(r"-benchmark(?:-gas-value)?_\d+M")


def normalize_test_id(test_id: str) -> str:
    """Strip the gas-value portion from a test ID so the same fixture across gas limits maps to one key.

    Example:
        "test_codecopy[fork_Osaka-blockchain_test-code_size_0-benchmark-gas-value_5M]"
        → "test_codecopy[fork_Osaka-blockchain_test-code_size_0]"
    """
    return _NORMALIZE_GAS_RE.sub("", test_id)


def generate_combined_dataset(per_gas_outputs: list[dict[str, Any]]) -> dict[str, Any]:
    """Merge per-gas-limit outputs into a single combined dataset.

    Each test gets a ``data_points`` list with one entry per gas limit, keyed
    by the normalized (gas-stripped) test ID.
    """
    if not per_gas_outputs:
        return {}

    # Use first output as template for shared metadata
    template = per_gas_outputs[0]

    # Collect ordered gas limits
    gas_limits: list[str] = []
    for out in per_gas_outputs:
        gl = out.get("gas_limit", out.get("config", "unknown"))
        if gl not in gas_limits:
            gas_limits.append(gl)

    gas_limits.sort(key=_gas_sort_key)

    # Group tests by normalized ID
    combined_tests: dict[str, dict[str, Any]] = {}

    for out in per_gas_outputs:
        gl = out.get("gas_limit", out.get("config", "unknown"))
        for test in out["tests"]:
            norm_id = normalize_test_id(test["id"])
            if norm_id not in combined_tests:
                combined_tests[norm_id] = {
                    "id": norm_id,
                    "name": test["name"],
                    "operation": test["operation"],
                    "data_points": [],
                }
            combined_tests[norm_id]["data_points"].append({
                "gas_limit": gl,
                "block_used_gas": test["block_used_gas"],
                "results": test["results"],
            })

    # Sort data_points within each test by gas limit
    for test in combined_tests.values():
        test["data_points"].sort(key=lambda dp: _gas_sort_key(dp["gas_limit"]))

    tests_list = sorted(combined_tests.values(), key=lambda x: (x["operation"], x["name"]))

    return {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "hardware": template["hardware"],
        "hardware_info": template.get("hardware_info", {}),
        "gas_limits": gas_limits,
        "el_clients": template.get("el_clients", []),
        "zkvms": template.get("zkvms", []),
        "operations": template.get("operations", []),
        "operations_by_category": template.get("operations_by_category", {}),
        "tests": tests_list,
    }


def _dataset_naming(
    fixture_set: str | None, config_name: str, gas_limit: str
) -> tuple[str, str, str]:
    """Return (dataset_id, output_filename, display_name) for a config."""
    if fixture_set:
        display_ref = fixture_set.removeprefix("eest-")
        return (
            f"{fixture_set}/{config_name}",
            f"results-{fixture_set}-{config_name}.json",
            f"EEST {gas_limit} Gas Limit ({display_ref})",
        )
    return (
        config_name,
        f"results-{config_name}.json",
        f"EEST {gas_limit} Gas Limit",
    )


def _log_output_summary(output: dict[str, Any], output_file: Path) -> None:
    """Log a short summary of a generated dataset."""
    logger.info("Generated %s", output_file)
    logger.info("  - %d zkVMs", len(output["zkvms"]))
    logger.info("  - %d operations", len(output["operations"]))
    logger.info("  - %d tests", len(output["tests"]))
    for zkvm in output["zkvms"]:
        success = sum(1 for t in output["tests"] if t["results"].get(zkvm, {}).get("status") == "success")
        crashed = sum(1 for t in output["tests"] if t["results"].get(zkvm, {}).get("status") == "crashed")
        logger.info("  - %s: %d success, %d crashed", zkvm, success, crashed)


def _write_json(path: Path, data: dict[str, Any]) -> None:
    """Serialize *data* to a JSON file at *path*."""
    with open(path, "w") as f:
        json.dump(data, f, indent=2)


def process_hardware(
    hardware_id: str,
    proving_base: Path,
    output_dir: Path,
) -> dict[str, Any] | None:
    """Process a single hardware configuration and write its datasets + manifest.

    Returns a global-manifest entry dict, or None if no EEST configs were found.
    """
    hardware_base = proving_base / hardware_id
    logger.info("=" * 60)
    logger.info("Processing hardware: %s", hardware_id)

    eest_configs = discover_eest_configs(hardware_base)
    if not eest_configs:
        logger.warning("No EEST configurations found for %s, skipping", hardware_id)
        return None

    logger.info("Discovered EEST configurations: %s",
                 [(fs, cn) for fs, cn, *_ in eest_configs])

    hardware_output_dir = output_dir / hardware_id
    hardware_output_dir.mkdir(parents=True, exist_ok=True)

    manifest_datasets: list[dict[str, Any]] = []
    hardware_info_sample: dict[str, Any] = {}
    outputs_by_fixture_set: dict[str | None, list[dict[str, Any]]] = {}

    # --- per-config processing ---
    for fixture_set, config_name, config_path, gas_value_filter in eest_configs:
        logger.info("Processing configuration: %s/%s%s", hardware_id,
                     f"{fixture_set}/" if fixture_set else "", config_name)

        hardware_file = config_path / "hardware.json"
        output = process_all_results(config_path, hardware_file, config_name, hardware_id,
                                     gas_value_filter=gas_value_filter)
        if fixture_set:
            output["fixture_set"] = fixture_set
        if not hardware_info_sample and output.get("hardware_info"):
            hardware_info_sample = output["hardware_info"]

        dataset_id, output_filename, display_name = _dataset_naming(
            fixture_set, config_name, output["gas_limit"])

        output_file = hardware_output_dir / output_filename
        _write_json(output_file, output)
        _log_output_summary(output, output_file)

        manifest_entry: dict[str, Any] = {
            "id": dataset_id,
            "name": display_name,
            "file": output_filename,
            "gas_limit": output["gas_limit"],
            "test_count": len(output["tests"]),
            "zkvm_count": len(output["zkvms"]),
        }
        if fixture_set:
            manifest_entry["fixture_set"] = fixture_set
        manifest_datasets.append(manifest_entry)

        outputs_by_fixture_set.setdefault(fixture_set, []).append(output)

    # --- combined datasets (one per fixture set with 2+ gas limits) ---
    for fs, fs_outputs in outputs_by_fixture_set.items():
        if len(fs_outputs) < 2:
            continue

        combined = generate_combined_dataset(fs_outputs)
        if not combined:
            continue

        if fs:
            combined_id = f"{fs}/combined"
            combined_filename = f"results-{fs}-combined.json"
            display_ref = fs.removeprefix("eest-")
            combined_name = f"EEST All Gas Limits ({display_ref})"
        else:
            combined_id = "combined"
            combined_filename = "results-combined.json"
            combined_name = "EEST All Gas Limits"

        _write_json(hardware_output_dir / combined_filename, combined)
        logger.info("Generated combined dataset: %s (%d tests, %d gas limits)",
                     hardware_output_dir / combined_filename,
                     len(combined["tests"]), len(combined["gas_limits"]))

        combined_entry: dict[str, Any] = {
            "id": combined_id,
            "name": combined_name,
            "file": combined_filename,
            "gas_limit": "combined",
            "test_count": len(combined["tests"]),
            "zkvm_count": len(combined.get("zkvms", [])),
            "combined": True,
        }
        if fs:
            combined_entry["fixture_set"] = fs
        manifest_datasets.append(combined_entry)

    # --- hardware manifest ---
    manifest_datasets.sort(key=lambda d: _gas_sort_key(d["gas_limit"]), reverse=True)

    combined_ds = next((d for d in manifest_datasets if d.get("combined")), None)
    default_ds_id = combined_ds["id"] if combined_ds else (manifest_datasets[0]["id"] if manifest_datasets else None)

    hardware_manifest = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "hardware_id": hardware_id,
        "hardware_info": hardware_info_sample,
        "datasets": manifest_datasets,
        "default_dataset": default_ds_id,
    }
    hardware_manifest_file = hardware_output_dir / "manifest.json"
    _write_json(hardware_manifest_file, hardware_manifest)
    logger.info("Generated hardware manifest: %s with %d datasets", hardware_manifest_file, len(manifest_datasets))

    return {
        "id": hardware_id,
        "name": get_hardware_friendly_name(hardware_id, hardware_info_sample),
        "path": hardware_id,
        "dataset_count": len(manifest_datasets),
        "default_dataset": manifest_datasets[0]["id"] if manifest_datasets else None,
    }


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description='Generate repricing analysis data for the interactive website.'
    )
    parser.add_argument(
        '--output', type=str, default=None,
        help='Output directory path (default: dist/repricing/data)'
    )
    parser.add_argument(
        '--hardware', type=str, default=None,
        help='Process specific hardware config only (default: all)'
    )
    args = parser.parse_args()

    logger.info("Generating repricing analysis data...")

    repo_root = Path(__file__).parent.parent
    proving_base = repo_root / DEFAULT_PROVING_BASE
    output_dir = Path(args.output) if args.output else repo_root / DEFAULT_OUTPUT_DIR
    output_dir.mkdir(parents=True, exist_ok=True)

    all_hardware = discover_hardware_configs(proving_base)
    if not all_hardware:
        logger.error("No hardware configurations found in %s", proving_base)
        return

    if args.hardware:
        if args.hardware not in all_hardware:
            logger.error("Hardware '%s' not found. Available: %s", args.hardware, all_hardware)
            return
        all_hardware = [args.hardware]

    logger.info("Processing hardware configurations: %s", all_hardware)

    global_hardware_configs = []
    for hardware_id in all_hardware:
        entry = process_hardware(hardware_id, proving_base, output_dir)
        if entry:
            global_hardware_configs.append(entry)

    global_manifest = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "hardware_configs": global_hardware_configs,
        "default_hardware": global_hardware_configs[0]["id"] if global_hardware_configs else None,
    }
    _write_json(output_dir / "manifest.json", global_manifest)

    logger.info("=" * 60)
    logger.info("Generated global manifest: %s", output_dir / "manifest.json")
    logger.info("Hardware configurations: %s", [h["id"] for h in global_hardware_configs])


if __name__ == "__main__":
    main()
