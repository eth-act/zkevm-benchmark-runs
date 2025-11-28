# 1x4090 - 45M-gas-limit

## Gas Limit Configuration - Proving

EEST benchmarks with 45M-gas-limit gas limit (proving results) on **1x4090** hardware.

## Available EL Clients

- [reth](#reth)

---

## reth


## Proving Results Comparison

### Benchmark Workloads

- **sp1-v5.1.0**: [https://github.com/eth-act/zkevm-benchmark-workload/tree/d2bbf1e8750064a3deae32eb61434bccfbd11ee8](https://github.com/eth-act/zkevm-benchmark-workload/tree/d2bbf1e8750064a3deae32eb61434bccfbd11ee8)

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | sp1-v5.1.0<br/>(1.41MiB) | Avg |
|-----------|-----------|----------|
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_191] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_1045_gas_base_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_1360_gas_balanced] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_400_gas_exp_heavy] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_408_gas_balanced] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_408_gas_base_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_600_as_balanced] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_600_gas_exp_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_616_gas_base_heavy] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_677_gas_base_heavy] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_765_gas_exp_heavy] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_767_gas_balanced] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_800_gas_base_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_800_gas_exp_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_852_gas_exp_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_867_gas_base_heavy] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_996_gas_balanced] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_16b_exp_320] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_24b_exp_168] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_32b_exp_256] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_32b_exp_40] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_32b_exp_96] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_8b_exp_896] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_exp_208_gas_balanced] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_exp_215_gas_exp_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_exp_298_gas_exp_heavy] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_min_as_balanced] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_min_as_base_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_min_as_exp_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_256] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_96] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_cover_windows] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_pawel_2] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_pawel_3] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_pawel_4] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-blake2f] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_fp_to_g1] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_fp_to_g2] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g1add] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g1msm] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g2add] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_pairing_check] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-point_evaluation] | 💥 Prover Crash | — |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g2msm] | 1h 47m 19.65s | 1h 47m 19.65s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_255] | 1h 27m 51.17s | 1h 27m 51.17s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul] | 1h 24m 48.90s | 1h 24m 48.90s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_scalar] | 1h 22m 25.54s | 1h 22m 25.54s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_1_2_32_byte_scalar] | 1h 22m 17.70s | 1h 22m 17.70s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_191] | 1h 9m 47.63s | 1h 9m 47.63s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_127] | 1h 1m 27.29s | 1h 1m 27.29s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-SHA2-256] | 1h 0m 42.19s | 1h 0m 42.19s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_191] | 1h 0m 27.86s | 1h 0m 27.86s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_two_pairings] | 58m 41.69s | 58m 41.69s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_STATICCALL] | 58m 3.01s | 58m 3.01s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 57m 44.98s | 57m 44.98s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_CALLCODE] | 57m 13.16s | 57m 13.16s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_DELEGATECALL] | 57m 8.36s | 57m 8.36s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODEHASH] | 57m 6.38s | 57m 6.38s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODESIZE] | 57m 4.53s | 57m 4.53s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_191] | 56m 2.90s | 56m 2.90s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_CALL] | 55m 53.94s | 55m 53.94s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODECOPY] | 54m 28.84s | 54m 28.84s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_one_pairing] | 54m 26.10s | 54m 26.10s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SDIV-1] | 52m 35.45s | 52m 35.45s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SDIV-0] | 51m 44.51s | 51m 44.51s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_127] | 50m 16.90s | 50m 16.90s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_255] | 49m 36.95s | 49m 36.95s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_infinities_32_byte_scalar] | 47m 29.57s | 47m 29.57s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_63] | 47m 24.20s | 47m 24.20s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DIV-0] | 46m 32.76s | 46m 32.76s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_255] | 42m 53.90s | 42m 53.90s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_127] | 42m 51.55s | 42m 51.55s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DIV-1] | 42m 34.84s | 42m 34.84s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_127] | 41m 26.99s | 41m 26.99s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_255] | 41m 10.43s | 41m 10.43s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 36m 24.76s | 36m 24.76s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_63] | 34m 35.10s | 34m 35.10s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ecrecover] | 30m 26.46s | 30m 26.46s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_63] | 29m 27.40s | 29m 27.40s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_EXP-] | 27m 54.41s | 27m 54.41s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_63] | 27m 41.99s | 27m 41.99s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PREVRANDAO] | 25m 0.06s | 25m 0.06s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_add] | 22m 27.23s | 22m 27.23s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_add_1_2] | 20m 30.65s | 20m 30.65s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SGT-] | 20m 3.45s | 20m 3.45s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty-opcode_REVERT] | 19m 19.12s | 19m 19.12s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_EQ-] | 19m 14.56s | 19m 14.56s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero-loop] | 18m 40.96s | 18m 40.96s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ISZERO] | 18m 23.14s | 18m 23.14s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_CALLCODE] | 18m 2.39s | 18m 2.39s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_CALL] | 18m 1.64s | 18m 1.64s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-one-loop] | 17m 50.54s | 17m 50.54s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty-opcode_RETURN] | 17m 48.79s | 17m 48.79s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_STATICCALL] | 17m 47.52s | 17m 47.52s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_CALLCODE] | 17m 14.41s | 17m 14.41s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_CALL] | 17m 9.03s | 17m 9.03s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ORIGIN] | 16m 57.59s | 16m 57.59s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_COINBASE] | 16m 57.17s | 16m 57.17s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_STATICCALL] | 16m 57.05s | 16m 57.05s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ADDRESS] | 16m 52.36s | 16m 52.36s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SMOD-] | 16m 33.51s | 16m 33.51s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CALLER] | 16m 31.92s | 16m 31.92s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH31] | 16m 21.94s | 16m 21.94s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH32] | 16m 14.24s | 16m 14.24s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH30] | 16m 3.79s | 16m 3.79s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH29] | 15m 40.25s | 15m 40.25s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH28] | 15m 36.56s | 15m 36.56s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH27] | 15m 19.58s | 15m 19.58s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH21] | 15m 19.53s | 15m 19.53s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BLOBBASEFEE] | 15m 17.31s | 15m 17.31s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SAR-] | 15m 14.88s | 15m 14.88s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 15m 8.87s | 15m 8.87s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 15m 8.57s | 15m 8.57s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 15m 8.45s | 15m 8.45s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 15m 7.95s | 15m 7.95s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 15m 7.94s | 15m 7.94s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 15m 7.65s | 15m 7.65s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH20] | 15m 7.54s | 15m 7.54s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 15m 7.53s | 15m 7.53s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_DELEGATECALL] | 15m 5.59s | 15m 5.59s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 15m 5.40s | 15m 5.40s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 15m 3.63s | 15m 3.63s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP1] | 15m 2.51s | 15m 2.51s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH19] | 15m 2.14s | 15m 2.14s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH26] | 14m 57.48s | 14m 57.48s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty] | 14m 53.38s | 14m 53.38s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CODESIZE] | 14m 42.98s | 14m 42.98s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH24] | 14m 37.66s | 14m 37.66s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH18] | 14m 30.75s | 14m 30.75s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH25] | 14m 30.05s | 14m 30.05s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH23] | 14m 27.62s | 14m 27.62s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GASPRICE] | 14m 24.84s | 14m 24.84s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH22] | 14m 22.05s | 14m 22.05s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_MOD-] | 14m 18.45s | 14m 18.45s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH15] | 14m 14.93s | 14m 14.93s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_DELEGATECALL] | 14m 14.83s | 14m 14.83s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH17] | 14m 13.12s | 14m 13.12s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH16] | 14m 6.51s | 14m 6.51s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-shift_right_SAR] | 14m 1.00s | 14m 1.00s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH14] | 13m 55.76s | 13m 55.76s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_MUL-] | 13m 55.69s | 13m 55.69s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_100000] | 13m 47.23s | 13m 47.23s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1000] | 13m 46.09s | 13m 46.09s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1] | 13m 44.25s | 13m 44.25s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1000000] | 13m 44.18s | 13m 44.18s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_0] | 13m 41.02s | 13m 41.02s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of zero data-opcode_REVERT] | 13m 33.25s | 13m 33.25s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 13m 22.03s | 13m 22.03s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH13] | 13m 20.40s | 13m 20.40s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 13m 19.26s | 13m 19.26s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 13m 18.89s | 13m 18.89s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 13m 16.94s | 13m 16.94s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-shift_right_SHR] | 13m 8.39s | 13m 8.39s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_TIMESTAMP] | 13m 6.94s | 13m 6.94s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SHR-] | 13m 6.32s | 13m 6.32s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH12] | 13m 4.43s | 13m 4.43s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_NUMBER] | 13m 4.04s | 13m 4.04s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH11] | 13m 0.17s | 13m 0.17s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SHL-] | 12m 56.52s | 12m 56.52s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 12m 49.18s | 12m 49.18s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 12m 48.27s | 12m 48.27s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of zero data-opcode_RETURN] | 12m 42.90s | 12m 42.90s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH10] | 12m 39.67s | 12m 39.67s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BASEFEE] | 12m 35.15s | 12m 35.15s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CHAINID] | 12m 31.82s | 12m 31.82s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-0 bytes] | 12m 20.20s | 12m 20.20s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 12m 15.96s | 12m 15.96s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH0] | 12m 15.10s | 12m 15.10s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH7] | 12m 8.26s | 12m 8.26s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GASLIMIT] | 12m 8.03s | 12m 8.03s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 12m 7.39s | 12m 7.39s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH8] | 12m 1.04s | 12m 1.04s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GAS] | 11m 56.25s | 11m 56.25s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH9] | 11m 55.42s | 11m 55.42s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-0 bytes] | 11m 51.90s | 11m 51.90s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH6] | 11m 45.58s | 11m 45.58s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SIGNEXTEND-] | 11m 44.63s | 11m 44.63s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-six blobs, access latest] | 11m 24.82s | 11m 24.82s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-one blob and accessed] | 11m 22.92s | 11m 22.92s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH5] | 11m 15.69s | 11m 15.69s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test-SSTORE new value] | 11m 10.21s | 11m 10.21s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 11m 5.26s | 11m 5.26s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_add_infinities] | 10m 58.88s | 10m 58.88s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 10m 56.19s | 10m 56.19s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH4] | 10m 55.49s | 10m 55.49s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH3] | 10m 46.74s | 10m 46.74s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-100 bytes] | 10m 42.55s | 10m 42.55s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 10m 21.84s | 10m 21.84s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 10m 18.39s | 10m 18.39s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 10m 13.76s | 10m 13.76s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH2] | 10m 13.14s | 10m 13.14s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_REVERT] | 10m 9.04s | 10m 9.04s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP2] | 10m 2.95s | 10m 2.95s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 10m 0.33s | 10m 0.33s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH1] | 9m 57.61s | 9m 57.61s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 9m 51.32s | 9m 51.32s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 9m 40.22s | 9m 40.22s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 9m 39.40s | 9m 39.40s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 9m 38.11s | 9m 38.11s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 9m 37.99s | 9m 37.99s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 9m 37.47s | 9m 37.47s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 9m 37.45s | 9m 37.45s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 9m 36.98s | 9m 36.98s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 9m 36.84s | 9m 36.84s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 9m 36.80s | 9m 36.80s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 9m 35.93s | 9m 35.93s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 9m 35.33s | 9m 35.33s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 9m 34.02s | 9m 34.02s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_RETURN] | 9m 33.76s | 9m 33.76s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 9m 27.50s | 9m 27.50s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_0] | 9m 24.77s | 9m 24.77s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_1000] | 9m 23.85s | 9m 23.85s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_10000] | 9m 22.21s | 9m 22.21s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_True-non_zero_value_True] | 9m 21.40s | 9m 21.40s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SLT-] | 9m 21.39s | 9m 21.39s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_False-non_zero_value_False] | 9m 20.60s | 9m 20.60s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_True-non_zero_value_False] | 9m 18.31s | 9m 18.31s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-100 bytes] | 9m 15.67s | 9m 15.67s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 9m 14.54s | 9m 14.54s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_False-non_zero_value_True] | 9m 14.48s | 9m 14.48s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-one blob but access non-existent index] | 9m 10.12s | 9m 10.12s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 9m 5.65s | 9m 5.65s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 9m 4.85s | 9m 4.85s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 9m 3.97s | 9m 3.97s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-no blobs] | 9m 3.16s | 9m 3.16s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 9m 2.61s | 9m 2.61s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 9m 2.20s | 9m 2.20s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 9m 1.84s | 9m 1.84s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 9m 1.44s | 9m 1.44s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test-SSTORE same value] | 8m 46.56s | 8m 46.56s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BYTE-] | 8m 25.02s | 8m 25.02s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 8m 10.43s | 8m 10.43s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_True] | 8m 10.00s | 8m 10.00s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_False] | 8m 7.52s | 8m 7.52s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SUB-] | 8m 6.82s | 8m 6.82s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-100 bytes] | 7m 46.09s | 7m 46.09s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_AND-] | 7m 45.80s | 7m 45.80s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_OR-] | 7m 45.55s | 7m 45.55s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 7m 45.07s | 7m 45.07s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_XOR-] | 7m 43.73s | 7m 43.73s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ADD-] | 7m 41.03s | 7m 41.03s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 7m 40.34s | 7m 40.34s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 7m 40.06s | 7m 40.06s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 7m 36.29s | 7m 36.29s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP3] | 7m 35.69s | 7m 35.69s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 7m 35.50s | 7m 35.50s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 7m 34.95s | 7m 34.95s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 7m 34.81s | 7m 34.81s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 7m 33.88s | 7m 33.88s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 7m 33.53s | 7m 33.53s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 7m 32.61s | 7m 32.61s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 7m 32.53s | 7m 32.53s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 7m 31.38s | 7m 31.38s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 7m 31.19s | 7m 31.19s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 7m 29.58s | 7m 29.58s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_NOT] | 7m 25.75s | 7m 25.75s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-1MiB] | 7m 25.56s | 7m 25.56s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 7m 15.52s | 7m 15.52s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GT-] | 7m 6.89s | 7m 6.89s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_LT-] | 7m 5.91s | 7m 5.91s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP6] | 6m 51.47s | 6m 51.47s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-1MiB] | 6m 50.27s | 6m 50.27s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-100 bytes] | 6m 49.67s | 6m 49.67s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 6m 49.30s | 6m 49.30s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP13] | 6m 47.04s | 6m 47.04s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP12] | 6m 43.69s | 6m 43.69s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP8] | 6m 42.61s | 6m 42.61s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP10] | 6m 38.54s | 6m 38.54s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP16] | 6m 38.05s | 6m 38.05s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP15] | 6m 37.99s | 6m 37.99s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP14] | 6m 37.96s | 6m 37.96s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 6m 37.93s | 6m 37.93s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP3] | 6m 37.83s | 6m 37.83s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP4] | 6m 36.89s | 6m 36.89s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP5] | 6m 36.89s | 6m 36.89s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP11] | 6m 35.91s | 6m 35.91s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP1] | 6m 35.38s | 6m 35.38s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP7] | 6m 34.59s | 6m 34.59s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-10KiB] | 6m 34.53s | 6m 34.53s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP2] | 6m 34.38s | 6m 34.38s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-IDENTITY] | 6m 31.86s | 6m 31.86s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP9] | 6m 30.52s | 6m 30.52s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-benchmark-gas-value_45M-blockchain_test] | 6m 28.24s | 6m 28.24s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-5b] | 6m 28.08s | 6m 28.08s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 6m 27.40s | 6m 27.40s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP4] | 6m 11.98s | 6m 11.98s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_diff_acc_to_diff_acc] | 6m 4.36s | 6m 4.36s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-1MiB] | 5m 44.70s | 5m 44.70s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-1MiB] | 5m 43.84s | 5m 43.84s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_diff_acc_to_b] | 5m 37.98s | 5m 37.98s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 5m 36.88s | 5m 36.88s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_a_to_diff_acc] | 5m 30.54s | 5m 30.54s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | 5m 10.17s | 5m 10.17s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 5m 6.51s | 5m 6.51s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-00] | 5m 6.17s | 5m 6.17s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_a_to_b] | 5m 5.83s | 5m 5.83s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP5] | 5m 5.10s | 5m 5.10s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_a_to_a] | 4m 58.87s | 4m 58.87s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | 4m 43.91s | 4m 43.91s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODEHASH] | 4m 37.20s | 4m 37.20s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-10KiB] | 4m 36.86s | 4m 36.86s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-10KiB] | 4m 36.19s | 4m 36.19s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.25x max code size] | 4m 34.06s | 4m 34.06s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-605b5b] | 4m 32.66s | 4m 32.66s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP6] | 4m 25.71s | 4m 25.71s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_True] | 4m 12.43s | 4m 12.43s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 4m 11.81s | 4m 11.81s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_False] | 4m 6.75s | 4m 6.75s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-512] | 3m 52.50s | 3m 52.50s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 3m 51.00s | 3m 51.00s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-615b5b5b] | 3m 50.01s | 3m 50.01s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP7] | 3m 49.03s | 3m 49.03s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test-SLOAD] | 3m 46.02s | 3m 46.02s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-605b] | 3m 42.70s | 3m 42.70s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 3m 39.24s | 3m 39.24s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 3m 39.09s | 3m 39.09s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 3m 37.88s | 3m 37.88s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.50x max code size] | 3m 35.45s | 3m 35.45s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODEHASH] | 3m 34.33s | 3m 34.33s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB] | 3m 33.87s | 3m 33.87s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-max code size] | 3m 30.80s | 3m 30.80s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.75x max code size] | 3m 28.00s | 3m 28.00s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP8] | 3m 25.91s | 3m 25.91s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-RIPEMD-160] | 3m 24.87s | 3m 24.87s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-615b5b] | 3m 11.86s | 3m 11.86s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP9] | 3m 7.54s | 3m 7.54s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE same value] | 3m 7.43s | 3m 7.43s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_True-key_mut_False] | 3m 2.21s | 3m 2.21s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODESIZE] | 3m 1.62s | 3m 1.62s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_True-key_mut_True] | 2m 59.89s | 2m 59.89s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODESIZE] | 2m 59.01s | 2m 59.01s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSLOAD] | 2m 58.82s | 2m 58.82s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 2m 57.40s | 2m 57.40s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-5KiB] | 2m 52.16s | 2m 52.16s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP10] | 2m 50.44s | 2m 50.44s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0.25x max code size] | 2m 40.88s | 2m 40.88s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_BALANCE] | 2m 37.86s | 2m 37.86s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP11] | 2m 37.66s | 2m 37.66s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-10KiB] | 2m 37.13s | 2m 37.13s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 2m 36.16s | 2m 36.16s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 2m 35.95s | 2m 35.95s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_BALANCE] | 2m 35.75s | 2m 35.75s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 2m 35.57s | 2m 35.57s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0.50x max code size] | 2m 34.74s | 2m 34.74s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0.75x max code size] | 2m 32.91s | 2m 32.91s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_45M-blockchain_test-value_bearing_True] | 2m 29.44s | 2m 29.44s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-max code size] | 2m 27.68s | 2m 27.68s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP12] | 2m 25.14s | 2m 25.14s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP13] | 2m 15.92s | 2m 15.92s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP14] | 2m 8.21s | 2m 8.21s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP15] | 2m 1.54s | 2m 1.54s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_45M-blockchain_test-value_bearing_False] | 1m 57.14s | 1m 57.14s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP16] | 1m 54.70s | 1m 54.70s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero_byte_True] | 1m 54.22s | 1m 54.22s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 1m 47.42s | 1m 47.42s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSLOAD] | 1m 43.32s | 1m 43.32s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE new value] | 1m 38.07s | 1m 38.07s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 1m 31.98s | 1m 31.98s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 1m 31.83s | 1m 31.83s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 1m 21.04s | 1m 21.04s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 1m 19.73s | 1m 19.73s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_2_scalar] | 1m 17.72s | 1m 17.72s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_1_2_2_scalar] | 1m 16.98s | 1m 16.98s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_False-key_mut_False] | 1m 15.97s | 1m 15.97s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_False-key_mut_True] | 1m 14.55s | 1m 14.55s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_infinities_2_scalar] | 1m 7.84s | 1m 7.84s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 47.87s | 47.87s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 47.48s | 47.48s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 38.67s | 38.67s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 38.36s | 38.36s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 37.50s | 37.50s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero_byte_False] | 37.27s | 37.27s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 36.33s | 36.33s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of zero data-opcode_REVERT] | 35.84s | 35.84s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of zero data-opcode_RETURN] | 35.77s | 35.77s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_REVERT] | 35.38s | 35.38s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_RETURN] | 35.09s | 35.09s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 33.34s | 33.34s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 32.97s | 32.97s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 32.72s | 32.72s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 32.52s | 32.52s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 32.14s | 32.14s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 31.84s | 31.84s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 31.41s | 31.41s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CREATE] | 31.38s | 31.38s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 31.33s | 31.33s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 29.45s | 29.45s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 29.11s | 29.11s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 28.82s | 28.82s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 28.19s | 28.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 28.18s | 28.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 28.13s | 28.13s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_True] | 25.60s | 25.60s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_False] | 24.62s | 24.62s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE2] | 23.92s | 23.92s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE2] | 23.84s | 23.84s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE] | 23.20s | 23.20s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE] | 23.04s | 23.04s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_False] | 21.30s | 21.30s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE same value] | 21.26s | 21.26s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_True] | 20.91s | 20.91s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE new value] | 20.55s | 20.55s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 17.86s | 17.86s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 17.85s | 17.85s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 17.84s | 17.84s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 17.36s | 17.36s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CREATE2] | 17.33s | 17.33s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 16.29s | 16.29s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 16.29s | 16.29s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 16.27s | 16.27s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 16.15s | 16.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 16.08s | 16.08s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 16.01s | 16.01s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 15.99s | 15.99s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 15.82s | 15.82s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 15.76s | 15.76s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 15.75s | 15.75s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 15.70s | 15.70s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 15.67s | 15.67s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 15.65s | 15.65s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 15.63s | 15.63s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 15.57s | 15.57s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 15.47s | 15.47s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 15.46s | 15.46s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 15.45s | 15.45s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 15.44s | 15.44s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 15.42s | 15.42s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 15.42s | 15.42s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 15.41s | 15.41s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 15.40s | 15.40s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 15.39s | 15.39s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 15.36s | 15.36s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 15.34s | 15.34s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 15.29s | 15.29s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 15.28s | 15.28s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 15.27s | 15.27s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 15.25s | 15.25s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 15.22s | 15.22s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 15.19s | 15.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 15.12s | 15.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 15.01s | 15.01s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 14.96s | 14.96s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 14.93s | 14.93s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE2] | 13.16s | 13.16s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE2] | 13.03s | 13.03s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE2] | 12.97s | 12.97s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE2] | 12.91s | 12.91s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE2] | 12.41s | 12.41s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE] | 12.27s | 12.27s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE] | 12.27s | 12.27s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE] | 12.27s | 12.27s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE] | 12.21s | 12.21s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE2] | 12.17s | 12.17s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_two_pairings_empty] | 12.16s | 12.16s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE2] | 12.01s | 12.01s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE2] | 11.99s | 11.99s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE] | 11.82s | 11.82s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE] | 11.61s | 11.61s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE] | 11.52s | 11.52s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE] | 11.51s | 11.51s |
| test_worst_compute.py::test_empty_block[fork_Prague-benchmark-gas-value_45M-blockchain_test] | 6.42s | 6.42s |

## Summary

**Total unique test cases:** 461

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| sp1-v5.1.0 | 461 | 418 | 19 | 24 |

---

