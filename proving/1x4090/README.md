# 1x4090 Benchmark Results

This folder contains benchmark results for the **1x4090** hardware setup.

## Available Benchmark Runs

- [eest-benchmark-v0.0.3](#eestbenchmarkv003)

---

## eest-benchmark-v0.0.3

### sp1-v5.1.0

**Total fixtures processed:** 341


### ❌ SDK Reported Crashes

| Fixture Name | Time | Throughput | Gas Used |
|--------------|------|------------|----------|
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_1045_gas_base_heavy] | ❌ Crashed (SDK) | N/A | 45,000,000 |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_1360_gas_balanced] | ❌ Crashed (SDK) | N/A | 45,000,000 |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_408_gas_base_heavy] | ❌ Crashed (SDK) | N/A | 45,000,000 |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_800_gas_base_heavy] | ❌ Crashed (SDK) | N/A | 45,000,000 |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_800_gas_exp_heavy] | ❌ Crashed (SDK) | N/A | 45,000,000 |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_16b_exp_320] | ❌ Crashed (SDK) | N/A | 45,000,000 |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_32b_exp_96] | ❌ Crashed (SDK) | N/A | 45,000,000 |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_min_as_exp_heavy] | ❌ Crashed (SDK) | N/A | 45,000,000 |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_256] | ❌ Crashed (SDK) | N/A | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_fp_to_g1] | ❌ Crashed (SDK) | N/A | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_fp_to_g2] | ❌ Crashed (SDK) | N/A | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_pairing_check] | ❌ Crashed (SDK) | N/A | 45,000,000 |

### ✅ Successful Runs

| Fixture Name | Time | Throughput | Gas Used |
|--------------|------|------------|----------|
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g2msm] | 1h 47m 19.65s | 6.99K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_255] | 1h 27m 51.17s | 8.54K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul] | 1h 24m 48.90s | 8.84K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_scalar] | 1h 22m 25.54s | 9.10K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_1_2_32_byte_scalar] | 1h 22m 17.70s | 9.11K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_191] | 1h 9m 47.63s | 10.75K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_127] | 1h 1m 27.29s | 12.20K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-SHA2-256] | 1h 0m 42.19s | 12.36K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_191] | 1h 0m 27.86s | 12.40K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_two_pairings] | 58m 41.69s | 12.78K gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_STATICCALL] | 58m 3.01s | 12.92K gas/s | 45,000,000 |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 57m 44.98s | 12.99K gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_DELEGATECALL] | 57m 8.36s | 13.13K gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODEHASH] | 57m 6.38s | 13.13K gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODESIZE] | 57m 4.53s | 13.14K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_191] | 56m 2.90s | 13.38K gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODECOPY] | 54m 28.84s | 13.77K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_one_pairing] | 54m 26.10s | 13.78K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SDIV-1] | 52m 35.45s | 14.26K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SDIV-0] | 51m 44.51s | 14.50K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_127] | 50m 16.90s | 14.92K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_255] | 49m 36.95s | 15.12K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_63] | 47m 24.20s | 15.82K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DIV-0] | 46m 32.76s | 16.11K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_255] | 42m 53.90s | 17.48K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_127] | 42m 51.55s | 17.50K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DIV-1] | 42m 34.84s | 17.61K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_255] | 41m 10.43s | 18.22K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_63] | 34m 35.10s | 21.69K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ecrecover] | 30m 26.46s | 24.64K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_63] | 29m 27.40s | 25.46K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_EXP-] | 27m 54.41s | 26.88K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_63] | 27m 41.99s | 27.08K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PREVRANDAO] | 25m 0.06s | 30.00K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_add] | 22m 27.23s | 33.40K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty-opcode_REVERT] | 19m 19.12s | 38.82K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_EQ-] | 19m 14.56s | 38.98K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero-loop] | 18m 40.96s | 40.14K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_CALLCODE] | 18m 2.39s | 41.57K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_CALL] | 18m 1.64s | 41.60K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty-opcode_RETURN] | 17m 48.79s | 42.10K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_CALLCODE] | 17m 14.41s | 43.50K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_CALL] | 17m 9.03s | 43.73K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_STATICCALL] | 16m 57.05s | 44.25K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ADDRESS] | 16m 52.36s | 44.45K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CALLER] | 16m 31.92s | 45.37K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH31] | 16m 21.94s | 45.83K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH32] | 16m 14.24s | 46.19K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH30] | 16m 3.79s | 46.69K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH29] | 15m 40.25s | 47.86K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH28] | 15m 36.56s | 48.05K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH27] | 15m 19.58s | 48.94K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH21] | 15m 19.53s | 48.94K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BLOBBASEFEE] | 15m 17.31s | 49.06K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 15m 8.57s | 49.53K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 15m 8.45s | 49.53K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 15m 7.95s | 49.56K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_keccak[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 15m 7.94s | 49.56K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 15m 7.65s | 49.58K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 15m 7.53s | 49.59K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_DELEGATECALL] | 15m 5.59s | 49.69K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 15m 5.40s | 49.70K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 15m 3.63s | 49.80K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP1] | 15m 2.51s | 49.86K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH26] | 14m 57.48s | 50.14K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty] | 14m 53.38s | 50.37K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CODESIZE] | 14m 42.98s | 50.96K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH18] | 14m 30.75s | 51.68K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH25] | 14m 30.05s | 51.72K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH23] | 14m 27.62s | 51.87K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GASPRICE] | 14m 24.84s | 52.03K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH22] | 14m 22.05s | 52.20K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_MOD-] | 14m 18.45s | 52.42K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH15] | 14m 14.93s | 52.64K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_DELEGATECALL] | 14m 14.83s | 52.64K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH16] | 14m 6.51s | 53.16K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-shift_right_SAR] | 14m 1.00s | 53.51K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH14] | 13m 55.76s | 53.84K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_100000] | 13m 47.23s | 54.40K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1000] | 13m 46.09s | 54.47K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1] | 13m 44.25s | 54.59K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1000000] | 13m 44.18s | 54.60K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_0] | 13m 41.02s | 54.81K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of zero data-opcode_REVERT] | 13m 33.25s | 55.33K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 13m 22.03s | 56.11K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH13] | 13m 20.40s | 56.22K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 13m 19.26s | 56.30K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-shift_right_SHR] | 13m 8.39s | 57.08K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_TIMESTAMP] | 13m 6.94s | 57.18K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH12] | 13m 4.43s | 57.37K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_NUMBER] | 13m 4.04s | 57.40K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH11] | 13m 0.17s | 57.68K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SHL-] | 12m 56.52s | 57.95K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 12m 48.27s | 58.57K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of zero data-opcode_RETURN] | 12m 42.90s | 58.99K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH10] | 12m 39.67s | 59.24K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BASEFEE] | 12m 35.15s | 59.59K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-0 bytes] | 12m 20.20s | 60.79K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH0] | 12m 15.10s | 61.22K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH7] | 12m 8.26s | 61.79K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GASLIMIT] | 12m 8.03s | 61.81K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 12m 7.39s | 61.87K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH8] | 12m 1.04s | 62.41K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GAS] | 11m 56.25s | 62.83K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH9] | 11m 55.42s | 62.90K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH6] | 11m 45.58s | 63.78K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SIGNEXTEND-] | 11m 44.63s | 63.86K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-six blobs, access latest] | 11m 24.82s | 65.71K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH5] | 11m 15.69s | 66.60K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 11m 5.26s | 67.64K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_add_infinities] | 10m 58.88s | 68.30K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 10m 56.19s | 68.58K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH4] | 10m 55.49s | 68.65K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH3] | 10m 46.74s | 69.58K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-100 bytes] | 10m 42.55s | 70.03K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 10m 18.39s | 72.77K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 10m 13.76s | 73.32K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH2] | 10m 13.14s | 73.39K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_REVERT] | 10m 9.04s | 73.89K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP2] | 10m 2.95s | 74.63K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH1] | 9m 57.61s | 75.30K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 9m 51.32s | 76.10K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 9m 40.22s | 77.56K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 9m 39.40s | 77.67K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 9m 38.11s | 77.84K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 9m 37.99s | 77.86K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 9m 37.47s | 77.93K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 9m 37.45s | 77.93K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 9m 36.98s | 77.99K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 9m 36.84s | 78.01K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 9m 36.80s | 78.02K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 9m 35.93s | 78.14K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 9m 34.02s | 78.39K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 9m 27.50s | 79.30K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_0] | 9m 24.77s | 79.68K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_1000] | 9m 23.85s | 79.81K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_10000] | 9m 22.21s | 80.04K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SLT-] | 9m 21.39s | 80.16K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_False-non_zero_value_False] | 9m 20.60s | 80.27K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_True-non_zero_value_False] | 9m 18.31s | 80.60K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-100 bytes] | 9m 15.67s | 80.98K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 9m 14.54s | 81.15K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_False-non_zero_value_True] | 9m 14.48s | 81.16K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-one blob but access non-existent index] | 9m 10.12s | 81.80K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 9m 4.85s | 82.59K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 9m 3.97s | 82.72K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-no blobs] | 9m 3.16s | 82.85K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 9m 2.61s | 82.93K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 9m 2.20s | 83.00K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 9m 1.84s | 83.05K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 9m 1.44s | 83.11K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BYTE-] | 8m 25.02s | 89.11K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 8m 10.43s | 91.76K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_True] | 8m 10.00s | 91.84K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-100 bytes] | 7m 46.09s | 96.55K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_OR-] | 7m 45.55s | 96.66K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ADD-] | 7m 41.03s | 97.61K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 7m 40.34s | 97.75K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 7m 40.06s | 97.81K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP3] | 7m 35.69s | 98.75K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 7m 35.50s | 98.79K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 7m 34.95s | 98.91K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 7m 34.81s | 98.94K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 7m 33.88s | 99.14K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 7m 33.53s | 99.22K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 7m 32.61s | 99.42K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 7m 32.53s | 99.44K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 7m 31.38s | 99.69K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 7m 31.19s | 99.74K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 7m 29.58s | 100.09K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-1MiB] | 7m 25.56s | 101.00K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 7m 15.52s | 103.32K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GT-] | 7m 6.89s | 105.41K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_LT-] | 7m 5.91s | 105.66K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP6] | 6m 51.47s | 109.36K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-1MiB] | 6m 50.27s | 109.68K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-100 bytes] | 6m 49.67s | 109.84K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP13] | 6m 47.04s | 110.55K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP12] | 6m 43.69s | 111.47K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP8] | 6m 42.61s | 111.77K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP10] | 6m 38.54s | 112.91K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP16] | 6m 38.05s | 113.05K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP14] | 6m 37.96s | 113.08K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 6m 37.93s | 113.08K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP3] | 6m 37.83s | 113.11K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP5] | 6m 36.89s | 113.38K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP11] | 6m 35.91s | 113.66K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP7] | 6m 34.59s | 114.04K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-10KiB] | 6m 34.53s | 114.06K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-IDENTITY] | 6m 31.86s | 114.84K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP9] | 6m 30.52s | 115.23K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-benchmark-gas-value_45M-blockchain_test] | 6m 28.24s | 115.91K gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-5b] | 6m 28.08s | 115.95K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 6m 27.40s | 116.16K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP4] | 6m 11.98s | 120.98K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-1MiB] | 5m 44.70s | 130.55K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-1MiB] | 5m 43.84s | 130.88K gas/s | 45,000,000 |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_diff_acc_to_b] | 5m 37.98s | 133.09K gas/s | 44,982,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 5m 36.88s | 133.58K gas/s | 45,000,000 |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_a_to_diff_acc] | 5m 30.54s | 136.09K gas/s | 44,982,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | 5m 10.17s | 145.08K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_jumps[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 5m 6.51s | 146.82K gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-00] | 5m 6.17s | 146.98K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP5] | 5m 5.10s | 147.50K gas/s | 45,000,000 |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_a_to_a] | 4m 58.87s | 150.51K gas/s | 44,982,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | 4m 43.91s | 158.50K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODEHASH] | 4m 37.20s | 162.34K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-10KiB] | 4m 36.86s | 162.54K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-10KiB] | 4m 36.19s | 162.93K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.25x max code size] | 4m 34.06s | 164.20K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP6] | 4m 25.71s | 169.36K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 4m 11.81s | 178.71K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_False] | 4m 6.75s | 182.37K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 3m 51.00s | 194.80K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP7] | 3m 49.03s | 196.48K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test-SLOAD] | 3m 46.02s | 199.10K gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-605b] | 3m 42.70s | 202.06K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 3m 39.24s | 205.26K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 3m 39.09s | 205.39K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 3m 37.88s | 206.53K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.50x max code size] | 3m 35.45s | 208.87K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODEHASH] | 3m 34.33s | 209.96K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB] | 3m 33.87s | 210.41K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-max code size] | 3m 30.80s | 213.48K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.75x max code size] | 3m 28.00s | 216.35K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP9] | 3m 7.54s | 239.95K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE same value] | 3m 7.43s | 240.09K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_True-key_mut_False] | 3m 2.21s | 246.97K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODESIZE] | 3m 1.62s | 247.77K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODESIZE] | 2m 59.01s | 251.38K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSLOAD] | 2m 58.82s | 251.65K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 2m 57.40s | 253.66K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_BALANCE] | 2m 37.86s | 285.07K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP11] | 2m 37.66s | 285.43K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-10KiB] | 2m 37.13s | 286.39K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 2m 36.16s | 288.16K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 2m 35.95s | 288.55K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0.75x max code size] | 2m 32.91s | 294.29K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_45M-blockchain_test-value_bearing_True] | 2m 29.44s | 301.10K gas/s | 44,995,051 |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-max code size] | 2m 27.68s | 304.71K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP13] | 2m 15.92s | 331.08K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP14] | 2m 8.21s | 350.99K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_45M-blockchain_test-value_bearing_False] | 1m 57.14s | 384.12K gas/s | 44,995,051 |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero_byte_True] | 1m 54.22s | 393.99K gas/s | 45,000,000 |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 1m 47.42s | 418.91K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE new value] | 1m 38.07s | 458.85K gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 1m 19.73s | 564.38K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_2_scalar] | 1m 17.72s | 578.98K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_1_2_2_scalar] | 1m 16.98s | 584.54K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_False-key_mut_False] | 1m 15.97s | 592.30K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_False-key_mut_True] | 1m 14.55s | 603.59K gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_infinities_2_scalar] | 1m 7.84s | 663.28K gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 47.87s | 940.05K gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 47.48s | 947.83K gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 38.67s | 1.16M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 38.36s | 1.17M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 37.50s | 1.20M gas/s | 45,000,000 |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero_byte_False] | 37.27s | 1.21M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 36.33s | 1.24M gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of zero data-opcode_REVERT] | 35.84s | 1.26M gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of zero data-opcode_RETURN] | 35.77s | 1.26M gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_REVERT] | 35.38s | 1.27M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 33.34s | 1.35M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 32.72s | 1.38M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 32.14s | 1.40M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 31.84s | 1.41M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 31.41s | 1.43M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CREATE] | 31.38s | 1.43M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 31.33s | 1.44M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 29.45s | 1.53M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 28.82s | 1.56M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 28.19s | 1.60M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 28.18s | 1.60M gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_True] | 25.60s | 1.76M gas/s | 44,981,268 |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_False] | 24.62s | 1.83M gas/s | 44,981,268 |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE2] | 23.92s | 1.88M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE2] | 23.84s | 1.89M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE] | 23.20s | 1.94M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE] | 23.04s | 1.95M gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE same value] | 21.26s | 2.12M gas/s | 45,000,000 |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_True] | 20.91s | 2.15M gas/s | 44,997,436 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 17.86s | 2.52M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 17.85s | 2.52M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 17.84s | 2.52M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 17.36s | 2.59M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CREATE2] | 17.33s | 2.60M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 16.29s | 2.76M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 16.27s | 2.77M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 16.15s | 2.79M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 16.01s | 2.81M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 15.99s | 2.81M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 15.82s | 2.84M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 15.76s | 2.86M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 15.75s | 2.86M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 15.70s | 2.87M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 15.67s | 2.87M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 15.65s | 2.88M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 15.63s | 2.88M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 15.57s | 2.89M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 15.47s | 2.91M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 15.46s | 2.91M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 15.45s | 2.91M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 15.44s | 2.92M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 15.42s | 2.92M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 15.41s | 2.92M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 15.39s | 2.92M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 15.36s | 2.93M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 15.34s | 2.93M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 15.29s | 2.94M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 15.28s | 2.94M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 15.25s | 2.95M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 15.22s | 2.96M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 15.19s | 2.96M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 15.12s | 2.98M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 15.01s | 3.00M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 14.96s | 3.01M gas/s | 45,000,000 |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 14.93s | 3.01M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE2] | 13.03s | 3.45M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE2] | 12.97s | 3.47M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE2] | 12.91s | 3.49M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE2] | 12.41s | 3.63M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE] | 12.27s | 3.67M gas/s | 45,000,000 |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_two_pairings_empty] | 12.16s | 3.70M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE2] | 12.01s | 3.75M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE2] | 11.99s | 3.75M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE] | 11.82s | 3.81M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE] | 11.61s | 3.88M gas/s | 45,000,000 |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE] | 11.52s | 3.91M gas/s | 45,000,000 |
| test_worst_compute.py::test_empty_block[fork_Prague-benchmark-gas-value_45M-blockchain_test] | 6.42s | N/A | N/A |

---

