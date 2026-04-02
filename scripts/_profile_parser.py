"""Parser for ziskemu .prof profile files.

Parses the text-based profile format into structured Python dicts
for use by generate_profiles_website.py.
"""

import re
from pathlib import Path


def simplify_function_name(full_name: str) -> str:
    """Simplify a Rust function path by stripping generic type parameters.

    Examples:
        '<Foo<Bar> as Baz>::method' -> 'Foo::method'
        'revm_interpreter::instructions::system::keccak256::<...>' -> 'keccak256'
        'ziskos::zisklib::lib::keccak256::keccak256' -> 'keccak256::keccak256'
    """
    # Strip angle-bracket generics (handle nested)
    result = []
    depth = 0
    for ch in full_name:
        if ch == '<':
            depth += 1
        elif ch == '>':
            depth -= 1
        elif depth == 0:
            result.append(ch)
    name = ''.join(result).strip()

    # Clean up artifacts: " as " remnants, leading/trailing ::
    name = name.replace(' as ', '::')
    name = re.sub(r'::+', '::', name)
    name = name.strip(':')

    # Keep last 2 segments
    parts = name.split('::')
    if len(parts) > 2:
        name = '::'.join(parts[-2:])

    return name


def _parse_int(s: str) -> int:
    """Parse an integer that may contain commas."""
    return int(s.replace(',', ''))


def _parse_float(s: str) -> float:
    """Parse a float, stripping % if present."""
    return float(s.rstrip('%'))


def parse_profile(text: str) -> dict:
    """Parse a .prof file's text content into a structured dict."""
    lines = text.splitlines()
    result = {
        'report': {},
        'cost_by_opcode': [],
        'top_step_functions': [],
        'top_cost_functions': [],
        'mark_ids': [],
    }

    i = 0
    while i < len(lines):
        line = lines[i].rstrip()

        # REPORT section
        if line.startswith('STEPS'):
            m = re.search(r'([\d,]+)\s*$', line)
            if m:
                result['report']['steps'] = _parse_int(m.group(1))

        # Cost distribution
        elif line.startswith('BASE') or line.startswith('MAIN') or \
             line.startswith('OPCODES') or line.startswith('PRECOMPILES') or \
             line.startswith('MEMORY'):
            parts = line.split()
            if len(parts) >= 3:
                category = parts[0].lower()
                cost = _parse_int(parts[1])
                pct = _parse_float(parts[2])
                if 'cost_distribution' not in result['report']:
                    result['report']['cost_distribution'] = {}
                result['report']['cost_distribution'][category] = {
                    'cost': cost, 'pct': pct
                }

        elif line.startswith('TOTAL') and 'cost_distribution' in result.get('report', {}):
            parts = line.split()
            if len(parts) >= 2:
                result['report']['total_cost'] = _parse_int(parts[1])

        elif line.startswith('FROPS') and not line.startswith('FROPS BY'):
            parts = line.split()
            if len(parts) >= 3:
                result['report']['frops'] = {
                    'count': _parse_int(parts[1]),
                    'pct': _parse_float(parts[2])
                }

        elif line.startswith('RAM USAGE'):
            parts = line.split()
            if len(parts) >= 3:
                result['report']['ram_usage'] = {
                    'count': _parse_int(parts[2]),
                    'pct': _parse_float(parts[3])
                }

        # COST BY OPCODE section
        elif line.startswith('COST BY OPCODE') and not line.startswith('|'):
            i += 2  # skip header underline
            while i < len(lines):
                row = lines[i].rstrip()
                if not row or row.startswith('FROPS BY') or row.startswith('TOP ') or row.startswith('MARK_ID') or row.startswith('DETAIL'):
                    break
                m = re.match(
                    r'\s*OP\s+(\S+)\s+([\d,]+)\s+([\d.]+)%\s+([\d,]+)\s+([\d.]+)%\s*(#\d+)?',
                    row
                )
                if m:
                    rank_str = m.group(6)
                    rank = int(rank_str[1:]) if rank_str else None
                    result['cost_by_opcode'].append({
                        'name': m.group(1),
                        'count': _parse_int(m.group(2)),
                        'count_pct': _parse_float(m.group(3)),
                        'cost': _parse_int(m.group(4)),
                        'cost_pct': _parse_float(m.group(5)),
                        'rank': rank,
                    })
                i += 1
            continue

        # FROPS BY OPCODE section — skip (not used by dashboard)
        elif line.startswith('FROPS BY OPCODE') and not line.startswith('|'):
            i += 1
            while i < len(lines):
                row = lines[i].rstrip()
                if not row or row.startswith('TOP ') or row.startswith('MARK_ID') or row.startswith('DETAIL'):
                    break
                i += 1
            continue

        # TOP STEP FUNCTIONS
        elif line.startswith('TOP STEP FUNCTIONS'):
            i += 2  # skip header underline
            while i < len(lines):
                row = lines[i].rstrip()
                if not row or row.startswith('TOP COST') or row.startswith('DETAIL') or row.startswith('MARK_ID'):
                    break
                m = re.match(
                    r'\s*([\d,]+)\s+([\d.]+)%\s+([\d,]+)\s+([\d,]+)\s+(.*)',
                    row
                )
                if m:
                    func_name = m.group(5).strip()
                    result['top_step_functions'].append({
                        'steps': _parse_int(m.group(1)),
                        'steps_pct': _parse_float(m.group(2)),
                        'calls': _parse_int(m.group(3)),
                        'steps_per_call': _parse_int(m.group(4)),
                        'function': func_name,
                        'function_short': simplify_function_name(func_name),
                    })
                i += 1
            continue

        # TOP COST FUNCTIONS
        elif line.startswith('TOP COST FUNCTIONS'):
            i += 2  # skip header underline
            while i < len(lines):
                row = lines[i].rstrip()
                if not row or row.startswith('DETAIL') or row.startswith('MARK_ID'):
                    break
                m = re.match(
                    r'\s*([\d,]+)\s+([\d.]+)%\s+([\d,]+)\s+([\d,]+)\s+(.*)',
                    row
                )
                if m:
                    func_name = m.group(5).strip()
                    result['top_cost_functions'].append({
                        'cost': _parse_int(m.group(1)),
                        'cost_pct': _parse_float(m.group(2)),
                        'calls': _parse_int(m.group(3)),
                        'cost_per_call': _parse_int(m.group(4)),
                        'function': func_name,
                        'function_short': simplify_function_name(func_name),
                    })
                i += 1
            continue

        # MARK_ID section
        elif line.startswith('MARK_ID') and 'INDEX' in line:
            i += 2  # skip header underline
            while i < len(lines):
                row = lines[i].rstrip()
                if not row:
                    i += 1
                    continue
                parts = row.split()
                if len(parts) >= 10:
                    result['mark_ids'].append({
                        'name': parts[0],
                        'index': int(parts[1]),
                        'count': int(parts[2]),
                        'steps': _parse_int(parts[3]),
                        'steps_pct': _parse_float(parts[4]),
                        'total_cost': _parse_int(parts[5]),
                        'total_cost_pct': _parse_float(parts[6]),
                        'main_cost': _parse_int(parts[7]),
                        'opcode_cost': _parse_int(parts[8]),
                        'precompile_cost': _parse_int(parts[9]),
                        'memory_cost': _parse_int(parts[10]) if len(parts) > 10 else 0,
                    })
                i += 1
            continue

        i += 1

    return result


def parse_error_file(text: str) -> dict:
    """Parse an .error.txt file into a structured dict."""
    result = {'status': 'error', 'fixture': '', 'timestamp': '', 'error': ''}
    lines = text.splitlines()
    for line in lines:
        if line.startswith('fixture:'):
            result['fixture'] = line[len('fixture:'):].strip()
        elif line.startswith('timestamp_utc:'):
            result['timestamp'] = line[len('timestamp_utc:'):].strip()
        elif line.startswith('error:'):
            # Error text spans remaining lines
            idx = lines.index(line)
            result['error'] = '\n'.join(lines[idx + 1:]).strip()
            break
    return result


def extract_test_id(filename: str) -> str:
    """Extract a test ID from a profile filename.

    'zisk_profile_test_X.py__test_Y[Z]_90M.txt.prof'
    -> 'test_X.py::test_Y[Z]'
    """
    name = filename
    # Strip prefix
    if name.startswith('zisk_profile_'):
        name = name[len('zisk_profile_'):]
    # Strip suffix
    for suffix in ['.prof', '.error.txt']:
        if name.endswith(suffix):
            name = name[:-len(suffix)]
    # Strip the trailing _90M.txt (or similar pattern)
    name = re.sub(r'_\d+M\.txt$', '', name)
    # Convert __ to ::
    name = name.replace('__', '::', 1)
    return name


def extract_operation(test_id: str) -> str | None:
    """Extract the EVM operation name from a test ID's parameters.

    Looks for known opcode/precompile names in the test parameters.
    Returns the canonical operation name or None.
    """
    # Extract bracket params
    m = re.search(r'\[(.*)\]', test_id)
    if not m:
        return None
    params = m.group(1).upper()

    # Also check the test function name
    func_part = test_id.split('[')[0].upper()

    # Check for known operations in params
    known_ops = [
        'EXTCODECOPY', 'EXTCODESIZE', 'EXTCODEHASH',
        'BALANCE', 'SLOAD', 'SSTORE', 'TSTORE', 'TLOAD',
        'KECCAK256', 'SHA256', 'ECRECOVER', 'MODEXP',
        'CREATE2', 'CALL', 'STATICCALL', 'DELEGATECALL',
        'CODECOPY', 'CALLDATACOPY', 'RETURNDATACOPY',
        'MLOAD', 'MSTORE', 'MSTORE8', 'MCOPY',
        'LOG0', 'LOG1', 'LOG2', 'LOG3', 'LOG4',
        'ADD', 'MUL', 'SUB', 'DIV', 'MOD', 'EXP',
        'ADDMOD', 'MULMOD', 'SIGNEXTEND',
        'SHL', 'SHR', 'SAR',
        'AND', 'OR', 'XOR', 'NOT', 'BYTE',
        'EQ', 'LT', 'GT', 'SLT', 'SGT', 'ISZERO',
        'BLOCKHASH', 'COINBASE', 'TIMESTAMP', 'NUMBER',
        'PREVRANDAO', 'GASLIMIT', 'CHAINID', 'SELFBALANCE',
        'BASEFEE', 'BLOBBASEFEE',
        'POP', 'JUMP', 'JUMPI', 'PC', 'GAS',
        'PUSH', 'DUP', 'SWAP',
        'IDENTITY', 'RIPEMD160', 'BLAKE2F',
        'BN128_ADD', 'BN128_MUL', 'BN128_PAIRING',
        'BLS12_G1ADD', 'BLS12_G1MUL', 'BLS12_G1MSM',
        'BLS12_G2ADD', 'BLS12_G2MUL', 'BLS12_G2MSM',
        'BLS12_PAIRING', 'BLS12_MAP_FP_TO_G1', 'BLS12_MAP_FP2_TO_G2',
        'P256VERIFY', 'POINT_EVALUATION',
    ]

    for op in known_ops:
        if op in params:
            return op

    # Try to extract from function name patterns
    if 'ERC20_MINT' in func_part:
        return 'SSTORE'
    if 'ERC20_APPROVE' in func_part:
        return 'SSTORE'
    if 'ERC20_BALANCEOF' in func_part or 'ERC20_BALANCE' in func_part:
        return 'SLOAD'
    if 'SLOAD' in func_part:
        return 'SLOAD'
    if 'SSTORE' in func_part:
        return 'SSTORE'
    if 'TSTORE' in func_part:
        return 'TSTORE'
    if 'KECCAK' in func_part:
        return 'KECCAK256'
    if 'CREATE2' in func_part:
        return 'CREATE2'
    if 'ACCOUNT_ACCESS' in func_part:
        return 'BALANCE'
    if 'ACCOUNT_QUERY' in func_part:
        return 'EXTCODECOPY'
    if 'STATEROOT' in func_part or 'DEPTH' in func_part:
        return None  # Mixed/structural test

    return None


def parse_profile_file(path: Path) -> dict:
    """Parse a profile file and return structured data with metadata."""
    text = path.read_text()
    filename = path.name

    if filename.endswith('.error.txt'):
        data = parse_error_file(text)
        data['filename'] = filename
        data['test_id'] = extract_test_id(filename)
        data['operation'] = extract_operation(data['test_id'])
        return data

    profile = parse_profile(text)
    profile['status'] = 'success'
    profile['filename'] = filename
    profile['test_id'] = extract_test_id(filename)
    profile['operation'] = extract_operation(profile['test_id'])
    return profile
