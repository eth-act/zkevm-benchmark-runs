# 1xL40s - 5M-gas-limit

## Gas Limit Configuration - Proving

EEST benchmarks with 5M-gas-limit gas limit (proving results) on **1xL40s** hardware.

## Available EL Clients

- [ethrex](#ethrex)
- [reth](#reth)

---

## ethrex


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | sp1-v5.2.3<br/>(1.41MiB) | Avg |
|-----------|-----------|----------|
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_127] | 55m 26.80s | 55m 26.80s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_191] | 48m 48.74s | 48m 48.74s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_8b_exp_896] | 44m 17.32s | 44m 17.32s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_255] | 42m 8.93s | 42m 8.93s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_63] | 41m 52.88s | 41m 52.88s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-point_evaluation] | 37m 8.10s | 37m 8.10s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_127] | 36m 51.64s | 36m 51.64s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_127] | 36m 30.04s | 36m 30.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_qube] | 33m 44.08s | 33m 44.08s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_800_gas_base_heavy] | 33m 3.94s | 33m 3.94s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_867_gas_base_heavy] | 32m 55.79s | 32m 55.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_616_gas_base_heavy] | 32m 42.83s | 32m 42.83s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_2_even] | 32m 29.29s | 32m 29.29s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_qube] | 32m 10.29s | 32m 10.29s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1045_gas_base_heavy] | 32m 4.51s | 32m 4.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_408_gas_base_heavy] | 31m 56.41s | 31m 56.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_264_exp_2] | 31m 50.43s | 31m 50.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_marius_1_even] | 31m 1.39s | 31m 1.39s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g1add] | 30m 57.62s | 30m 57.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_256_exp_2] | 30m 33.10s | 30m 33.10s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_16b_exp_320] | 29m 9.89s | 29m 9.89s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_base_heavy] | 26m 58.35s | 26m 58.35s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_63] | 26m 52.48s | 26m 52.48s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_63] | 26m 29.01s | 26m 29.01s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_square] | 26m 16.14s | 26m 16.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_1_even] | 26m 13.86s | 26m 13.86s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_qube] | 26m 2.83s | 26m 2.83s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SDIV-1] | 25m 34.12s | 25m 34.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_800_gas_exp_heavy] | 25m 17.57s | 25m 17.57s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_852_gas_exp_heavy] | 25m 17.20s | 25m 17.20s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_127] | 25m 16.17s | 25m 16.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_8_exp_896] | 25m 3.61s | 25m 3.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_square] | 25m 0.81s | 25m 0.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1024_exp_2] | 24m 45.73s | 24m 45.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_298_gas_exp_heavy] | 24m 44.34s | 24m 44.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_600_gas_exp_heavy] | 24m 25.68s | 24m 25.68s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g2add] | 24m 10.52s | 24m 10.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_8_exp_648] | 24m 8.05s | 24m 8.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_215_gas_exp_heavy] | 24m 2.67s | 24m 2.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_exp_heavy] | 23m 44.24s | 23m 44.24s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_2] | 23m 29.97s | 23m 29.97s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_191] | 23m 28.14s | 23m 28.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_400_gas_exp_heavy] | 23m 26.19s | 23m 26.19s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_191] | 23m 17.96s | 23m 17.96s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_DIV-1] | 22m 0.04s | 22m 0.04s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SDIV-0] | 21m 46.42s | 21m 46.42s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_DIV-0] | 21m 24.98s | 21m 24.98s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_square] | 20m 50.03s | 20m 50.03s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-blake2f] | 20m 46.44s | 20m 46.44s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_24b_exp_168] | 20m 45.56s | 20m 45.56s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add_1_2] | 20m 4.73s | 20m 4.73s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add] | 19m 14.08s | 19m 14.08s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_191] | 18m 28.53s | 18m 28.53s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_765_gas_exp_heavy] | 18m 6.84s | 18m 6.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_3_exp_8] | 17m 49.57s | 17m 49.57s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_3] | 17m 48.88s | 17m 48.88s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_256] | 17m 29.55s | 17m 29.55s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_96] | 16m 50.90s | 16m 50.90s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_63] | 16m 48.34s | 16m 48.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_40] | 15m 48.23s | 15m 48.23s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_256] | 15m 31.31s | 15m 31.31s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1360_gas_balanced] | 15m 15.73s | 15m 15.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1349n1] | 15m 13.30s | 15m 13.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_example_1] | 15m 12.42s | 15m 12.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1360n1] | 15m 7.42s | 15m 7.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_cover_windows] | 14m 58.39s | 14m 58.39s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_677_gas_base_heavy] | 14m 57.87s | 14m 57.87s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_128] | 14m 55.84s | 14m 55.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_96] | 14m 50.21s | 14m 50.21s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_65] | 14m 46.24s | 14m 46.24s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_64] | 14m 45.02s | 14m 45.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_4] | 14m 44.73s | 14m 44.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_qube] | 14m 40.14s | 14m 40.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1360n2] | 14m 20.03s | 14m 20.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_balanced] | 14m 4.54s | 14m 4.54s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_208_gas_balanced] | 13m 51.79s | 13m 51.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_40] | 13m 51.41s | 13m 51.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_996_gas_balanced] | 13m 50.70s | 13m 50.70s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_767_gas_balanced] | 13m 39.12s | 13m 39.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_600_gas_balanced] | 13m 23.34s | 13m 23.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_408_gas_balanced] | 13m 16.19s | 13m 16.19s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1152n1] | 13m 15.22s | 13m 15.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_36] | 13m 8.08s | 13m 8.08s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_pairing_check] | 12m 49.34s | 12m 49.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_64b_exp_512] | 12m 43.49s | 12m 43.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_64b_exp_512] | 12m 20.46s | 12m 20.46s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_square] | 12m 8.12s | 12m 8.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_32] | 11m 49.72s | 11m 49.72s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 11m 28.20s | 11m 28.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 11m 25.97s | 11m 25.97s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_255] | 11m 3.52s | 11m 3.52s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_255] | 11m 1.87s | 11m 1.87s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_255] | 10m 51.49s | 10m 51.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 10m 42.05s | 10m 42.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n3] | 10m 33.21s | 10m 33.21s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n2] | 10m 32.01s | 10m 32.01s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_128b_exp_1024] | 10m 20.31s | 10m 20.31s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_128b_exp_1024] | 10m 19.11s | 10m 19.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 9m 45.90s | 9m 45.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_256b_exp_1024] | 9m 32.38s | 9m 32.38s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_256b_exp_1024] | 9m 30.30s | 9m 30.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n1] | 9m 4.08s | 9m 4.08s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_5_pair] | 8m 41.83s | 8m 41.83s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_4_pair] | 8m 31.65s | 8m 31.65s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_2_pair] | 8m 16.18s | 8m 16.18s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_two_pairings] | 8m 15.34s | 8m 15.34s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-blockchain_test] | 8m 5.20s | 8m 5.20s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-SHA2-256] | 8m 0.68s | 8m 0.68s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_one_pairing] | 7m 52.17s | 7m 52.17s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_CALLCODE] | 7m 39.40s | 7m 39.40s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_DELEGATECALL] | 7m 37.97s | 7m 37.97s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_CALL] | 7m 34.76s | 7m 34.76s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_STATICCALL] | 7m 34.61s | 7m 34.61s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODESIZE] | 7m 31.59s | 7m 31.59s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_512b_exp_1024] | 7m 30.72s | 7m 30.72s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_512b_exp_1024] | 7m 29.36s | 7m 29.36s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODEHASH] | 7m 29.20s | 7m 29.20s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODECOPY] | 7m 14.42s | 7m 14.42s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_EXP-] | 6m 50.73s | 6m 50.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 6m 43.90s | 6m 43.90s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_fp_to_g2] | 6m 42.91s | 6m 42.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_qube] | 6m 4.67s | 6m 4.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_3_even] | 5m 51.99s | 5m 51.99s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_square] | 5m 18.75s | 5m 18.75s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_PREVRANDAO] | 4m 35.55s | 4m 35.55s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_STATICCALL] | 4m 15.66s | 4m 15.66s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_CALL] | 4m 9.80s | 4m 9.80s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_CALLCODE] | 4m 9.16s | 4m 9.16s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 4m 5.65s | 4m 5.65s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_STATICCALL] | 3m 47.15s | 3m 47.15s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_CALL] | 3m 45.51s | 3m 45.51s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-blockchain_test-contract_balance_0] | 3m 45.04s | 3m 45.04s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-blockchain_test-contract_balance_1] | 3m 44.74s | 3m 44.74s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_CALLCODE] | 3m 44.35s | 3m 44.35s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ecrecover] | 3m 41.92s | 3m 41.92s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 3m 39.56s | 3m 39.56s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-empty-opcode_REVERT] | 3m 38.64s | 3m 38.64s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SIGNEXTEND-] | 3m 33.09s | 3m 33.09s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-empty-opcode_RETURN] | 3m 32.32s | 3m 32.32s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add_infinities] | 3m 31.78s | 3m 31.78s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 3m 26.64s | 3m 26.64s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 3m 25.09s | 3m 25.09s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of zero data-opcode_RETURN] | 3m 24.83s | 3m 24.83s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of zero data-opcode_REVERT] | 3m 24.10s | 3m 24.10s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-zero-loop] | 3m 24.01s | 3m 24.01s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_fp_to_g1] | 3m 20.78s | 3m 20.78s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-blockchain_test] | 3m 19.61s | 3m 19.61s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g2msm] | 3m 19.22s | 3m 19.22s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0 bytes] | 3m 19.09s | 3m 19.09s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-0 bytes] | 3m 18.13s | 3m 18.13s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-one-loop] | 3m 11.56s | 3m 11.56s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SAR-] | 3m 8.06s | 3m 8.06s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-empty] | 2m 53.52s | 2m 53.52s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-0 bytes] | 2m 48.75s | 2m 48.75s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 2m 45.61s | 2m 45.61s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 2m 44.97s | 2m 44.97s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-blockchain_test-shift_right_SAR] | 2m 44.89s | 2m 44.89s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 2m 41.39s | 2m 41.39s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SHL-] | 2m 39.42s | 2m 39.42s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_EQ-] | 2m 38.41s | 2m 38.41s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-100 bytes] | 2m 27.74s | 2m 27.74s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 2m 26.14s | 2m 26.14s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 2m 24.98s | 2m 24.98s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 2m 23.83s | 2m 23.83s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-5b] | 2m 20.37s | 2m 20.37s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-blockchain_test-shift_right_SHR] | 2m 15.55s | 2m 15.55s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH27] | 2m 13.01s | 2m 13.01s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH26] | 2m 11.92s | 2m 11.92s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SHR-] | 2m 6.99s | 2m 6.99s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH24] | 2m 6.99s | 2m 6.99s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH25] | 2m 5.69s | 2m 5.69s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_1_exp_heavy] | 2m 1.01s | 2m 1.01s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH23] | 1m 57.83s | 1m 57.83s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_MUL-] | 1m 55.61s | 1m 55.61s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH31] | 1m 55.25s | 1m 55.25s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_ORIGIN] | 1m 55.12s | 1m 55.12s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CALLER] | 1m 54.82s | 1m 54.82s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH30] | 1m 54.08s | 1m 54.08s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH22] | 1m 54.00s | 1m 54.00s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_ADDRESS] | 1m 53.60s | 1m 53.60s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_COINBASE] | 1m 53.23s | 1m 53.23s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-100 bytes] | 1m 52.41s | 1m 52.41s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul] | 1m 52.12s | 1m 52.12s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH20] | 1m 51.90s | 1m 51.90s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SSTORE new value] | 1m 51.79s | 1m 51.79s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH29] | 1m 51.45s | 1m 51.45s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH32] | 1m 51.33s | 1m 51.33s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 1m 48.98s | 1m 48.98s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH21] | 1m 48.43s | 1m 48.43s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 1m 47.70s | 1m 47.70s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH28] | 1m 46.65s | 1m 46.65s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 46.26s | 1m 46.26s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 46.16s | 1m 46.16s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 45.29s | 1m 45.29s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 45.20s | 1m 45.20s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 45.06s | 1m 45.06s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 44.98s | 1m 44.98s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 44.98s | 1m 44.98s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 44.88s | 1m 44.88s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 44.86s | 1m 44.86s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 44.63s | 1m 44.63s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 44.50s | 1m 44.50s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 44.45s | 1m 44.45s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH19] | 1m 43.88s | 1m 43.88s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GAS] | 1m 43.24s | 1m 43.24s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH18] | 1m 41.60s | 1m 41.60s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH16] | 1m 41.35s | 1m 41.35s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-605b5b] | 1m 39.79s | 1m 39.79s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH15] | 1m 39.45s | 1m 39.45s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-blockchain_test] | 1m 38.44s | 1m 38.44s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH17] | 1m 38.19s | 1m 38.19s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH14] | 1m 35.66s | 1m 35.66s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-max code size] | 1m 34.21s | 1m 34.21s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 1m 33.71s | 1m 33.71s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g1msm] | 1m 30.88s | 1m 30.88s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH13] | 1m 30.81s | 1m 30.81s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 1m 30.43s | 1m 30.43s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 1m 30.37s | 1m 30.37s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-one blob and accessed] | 1m 28.90s | 1m 28.90s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-six blobs, access latest] | 1m 28.46s | 1m 28.46s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-615b5b5b] | 1m 27.05s | 1m 27.05s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH12] | 1m 26.97s | 1m 26.97s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 24.51s | 1m 24.51s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 23.83s | 1m 23.83s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 23.74s | 1m 23.74s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 23.66s | 1m 23.66s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 23.55s | 1m 23.55s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 23.41s | 1m 23.41s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 23.39s | 1m 23.39s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 23.34s | 1m 23.34s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-00] | 1m 23.18s | 1m 23.18s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 23.11s | 1m 23.11s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH8] | 1m 22.55s | 1m 22.55s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 22.31s | 1m 22.31s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 22.24s | 1m 22.24s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH7] | 1m 22.04s | 1m 22.04s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 22.03s | 1m 22.03s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_LT-] | 1m 22.00s | 1m 22.00s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH10] | 1m 21.31s | 1m 21.31s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_2_exp_heavy] | 1m 21.16s | 1m 21.16s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_GT-] | 1m 21.11s | 1m 21.11s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_NUMBER] | 1m 20.95s | 1m 20.95s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_BASEFEE] | 1m 20.92s | 1m 20.92s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CHAINID] | 1m 20.91s | 1m 20.91s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH9] | 1m 20.55s | 1m 20.55s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_TIMESTAMP] | 1m 20.14s | 1m 20.14s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_MOD-] | 1m 19.78s | 1m 19.78s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH6] | 1m 19.77s | 1m 19.77s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GASPRICE] | 1m 19.75s | 1m 19.75s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_BLOBBASEFEE] | 1m 19.73s | 1m 19.73s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP7] | 1m 19.47s | 1m 19.47s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP5] | 1m 19.42s | 1m 19.42s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP14] | 1m 19.41s | 1m 19.41s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP12] | 1m 19.25s | 1m 19.25s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP2] | 1m 19.24s | 1m 19.24s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP11] | 1m 19.21s | 1m 19.21s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP13] | 1m 19.07s | 1m 19.07s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP8] | 1m 18.86s | 1m 18.86s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP15] | 1m 18.79s | 1m 18.79s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP1] | 1m 18.73s | 1m 18.73s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP10] | 1m 18.49s | 1m 18.49s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP4] | 1m 18.35s | 1m 18.35s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP3] | 1m 18.34s | 1m 18.34s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP6] | 1m 18.33s | 1m 18.33s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP16] | 1m 18.26s | 1m 18.26s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1000] | 1m 17.54s | 1m 17.54s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP9] | 1m 17.18s | 1m 17.18s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH11] | 1m 16.22s | 1m 16.22s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH5] | 1m 16.18s | 1m 16.18s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-605b] | 1m 15.30s | 1m 15.30s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-0 bytes] | 1m 15.09s | 1m 15.09s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH3] | 1m 15.01s | 1m 15.01s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH4] | 1m 14.94s | 1m 14.94s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-IDENTITY] | 1m 14.91s | 1m 14.91s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-blockchain_test] | 1m 14.90s | 1m 14.90s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_0] | 1m 13.53s | 1m 13.53s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GASLIMIT] | 1m 13.48s | 1m 13.48s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 1m 13.17s | 1m 13.17s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1] | 1m 12.98s | 1m 12.98s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 1m 12.83s | 1m 12.83s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-blockchain_test] | 1m 12.63s | 1m 12.63s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_4_exp_heavy] | 1m 12.30s | 1m 12.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_3_exp_heavy] | 1m 12.14s | 1m 12.14s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_ADD-] | 1m 11.94s | 1m 11.94s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CODESIZE] | 1m 11.89s | 1m 11.89s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH0] | 1m 11.67s | 1m 11.67s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH2] | 1m 11.64s | 1m 11.64s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SLT-] | 1m 11.60s | 1m 11.60s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_BYTE-] | 1m 10.34s | 1m 10.34s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-615b5b] | 1m 10.28s | 1m 10.28s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SGT-] | 1m 10.18s | 1m 10.18s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0 bytes] | 1m 10.17s | 1m 10.17s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-0 bytes] | 1m 9.59s | 1m 9.59s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH1] | 1m 8.43s | 1m 8.43s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SUB-] | 1m 8.33s | 1m 8.33s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_diff_acc_to_diff_acc] | 1m 7.33s | 1m 7.33s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SSTORE same value] | 1m 6.91s | 1m 6.91s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-no blobs] | 1m 6.71s | 1m 6.71s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 1m 6.27s | 1m 6.27s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 1m 6.16s | 1m 6.16s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-one blob but access non-existent index] | 1m 6.08s | 1m 6.08s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_AND-] | 1m 5.91s | 1m 5.91s |
| test_worst_compute.py::test_worst_unop[fork_Prague-blockchain_test-opcode_ISZERO] | 1m 4.48s | 1m 4.48s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 1m 3.79s | 1m 3.79s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 1m 3.64s | 1m 3.64s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 1m 3.59s | 1m 3.59s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_diff_acc_to_b] | 1m 3.59s | 1m 3.59s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_OR-] | 1m 3.50s | 1m 3.50s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 1m 3.41s | 1m 3.41s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 1m 3.37s | 1m 3.37s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 1m 3.33s | 1m 3.33s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 1m 3.20s | 1m 3.20s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 1m 3.11s | 1m 3.11s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_XOR-] | 1m 3.07s | 1m 3.07s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 1m 2.91s | 1m 2.91s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 1m 2.87s | 1m 2.87s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 1m 2.49s | 1m 2.49s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 1m 2.03s | 1m 2.03s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-10KiB] | 1m 1.75s | 1m 1.75s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP12] | 1m 1.56s | 1m 1.56s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-100 bytes] | 1m 1.54s | 1m 1.54s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP16] | 1m 1.50s | 1m 1.50s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_diff_acc] | 1m 1.20s | 1m 1.20s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP3] | 1m 1.01s | 1m 1.01s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP8] | 1m 0.89s | 1m 0.89s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP6] | 1m 0.78s | 1m 0.78s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP11] | 1m 0.76s | 1m 0.76s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP13] | 1m 0.76s | 1m 0.76s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP14] | 1m 0.68s | 1m 0.68s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP7] | 1m 0.62s | 1m 0.62s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP2] | 1m 0.52s | 1m 0.52s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP5] | 1m 0.36s | 1m 0.36s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP4] | 1m 0.21s | 1m 0.21s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP10] | 1m 0.20s | 1m 0.20s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP9] | 1m 0.12s | 1m 0.12s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP15] | 1m 0.01s | 1m 0.01s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 59.79s | 59.79s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP1] | 59.73s | 59.73s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_100000] | 59.65s | 59.65s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_b] | 58.37s | 58.37s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_a] | 57.59s | 57.59s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_True-non_zero_value_False] | 57.19s | 57.19s |
| test_worst_compute.py::test_worst_unop[fork_Prague-blockchain_test-opcode_NOT] | 57.10s | 57.10s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_True-non_zero_value_True] | 56.94s | 56.94s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_False-non_zero_value_False] | 56.90s | 56.90s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 56.20s | 56.20s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-1KiB] | 55.92s | 55.92s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_False-non_zero_value_True] | 55.64s | 55.64s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 55.16s | 55.16s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SMOD-] | 55.02s | 55.02s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_BALANCE] | 54.66s | 54.66s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_BALANCE] | 54.53s | 54.53s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 53.33s | 53.33s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-512] | 52.97s | 52.97s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 52.85s | 52.85s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.50x max code size] | 52.80s | 52.80s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-100 bytes] | 52.63s | 52.63s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-5KiB] | 52.24s | 52.24s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 52.17s | 52.17s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_0] | 51.58s | 51.58s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 51.47s | 51.47s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 51.44s | 51.44s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_10000] | 51.42s | 51.42s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 51.34s | 51.34s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 51.31s | 51.31s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 51.26s | 51.26s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 51.03s | 51.03s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value] | 50.76s | 50.76s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_1000] | 50.41s | 50.41s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.25x max code size] | 49.97s | 49.97s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.25x max code size] | 48.73s | 48.73s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-max code size] | 48.40s | 48.40s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.50x max code size] | 48.07s | 48.07s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSLOAD] | 47.78s | 47.78s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-1MiB] | 45.71s | 45.71s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_True-empty_authority_False] | 45.56s | 45.56s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SLOAD] | 45.55s | 45.55s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_False-empty_authority_False] | 45.31s | 45.31s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-10KiB] | 45.08s | 45.08s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value, revert] | 44.64s | 44.64s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_True-empty_authority_True] | 44.18s | 44.18s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_False-empty_authority_True] | 43.91s | 43.91s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 43.69s | 43.69s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_True-key_mut_False] | 43.09s | 43.09s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_False-key_mut_True] | 42.99s | 42.99s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_True-key_mut_True] | 42.89s | 42.89s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_False-key_mut_False] | 42.44s | 42.44s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-blockchain_test] | 41.91s | 41.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_zkevm_worst_case] | 41.73s | 41.73s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-10KiB] | 40.75s | 40.75s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_True-key_mut_False] | 40.16s | 40.16s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_True-key_mut_True] | 39.91s | 39.91s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value] | 39.48s | 39.48s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-blockchain_test] | 39.20s | 39.20s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.75x max code size] | 38.86s | 38.86s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-RIPEMD-160] | 38.38s | 38.38s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-1MiB] | 36.25s | 36.25s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-blockchain_test-value_bearing_True] | 35.87s | 35.87s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSLOAD] | 35.80s | 35.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_example_2] | 35.60s | 35.60s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-blockchain_test-absent_accounts_False-opcode_BALANCE] | 35.11s | 35.11s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-blockchain_test] | 33.61s | 33.61s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 32.25s | 32.25s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-blockchain_test-zero_byte_True] | 31.08s | 31.08s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.75x max code size] | 29.62s | 29.62s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-10KiB] | 29.29s | 29.29s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 29.29s | 29.29s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 29.12s | 29.12s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 29.10s | 29.10s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value, revert] | 28.88s | 28.88s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 28.79s | 28.79s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 26.37s | 26.37s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-blockchain_test] | 25.60s | 25.60s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-blockchain_test-value_bearing_False] | 25.43s | 25.43s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 23.79s | 23.79s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 22.51s | 22.51s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 22.21s | 22.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 21.92s | 21.92s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-blockchain_test-absent_accounts_True-opcode_BALANCE] | 21.91s | 21.91s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 21.01s | 21.01s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_1_2_2_scalar] | 20.80s | 20.80s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 20.69s | 20.69s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-1MiB] | 20.16s | 20.16s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_False-key_mut_False] | 20.09s | 20.09s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_False-key_mut_True] | 19.90s | 19.90s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 19.75s | 19.75s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-1MiB] | 18.89s | 18.89s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 18.61s | 18.61s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 18.40s | 18.40s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 18.33s | 18.33s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of zero data-opcode_REVERT] | 17.01s | 17.01s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 16.83s | 16.83s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of zero data-opcode_RETURN] | 16.75s | 16.75s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 16.66s | 16.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 16.31s | 16.31s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 16.23s | 16.23s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 16.16s | 16.16s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value] | 16.13s | 16.13s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-blockchain_test-opcode_CREATE] | 15.24s | 15.24s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-blockchain_test-zero_byte_False] | 15.23s | 15.23s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 14.92s | 14.92s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value] | 14.85s | 14.85s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 14.81s | 14.81s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 14.66s | 14.66s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 14.57s | 14.57s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 14.42s | 14.42s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-blockchain_test_from_state_test-value_bearing_False] | 14.41s | 14.41s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_infinities_2_scalar] | 14.34s | 14.34s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 14.31s | 14.31s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-blockchain_test_from_state_test-value_bearing_False] | 14.12s | 14.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 14.11s | 14.11s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes with value-opcode_CREATE] | 13.94s | 13.94s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-blockchain_test_from_state_test-value_bearing_True] | 13.92s | 13.92s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes with value-opcode_CREATE2] | 13.73s | 13.73s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 13.69s | 13.69s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1000000] | 13.68s | 13.68s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-blockchain_test_from_state_test-value_bearing_True] | 13.53s | 13.53s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes without value-opcode_CREATE] | 13.35s | 13.35s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 13.30s | 13.30s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 13.28s | 13.28s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 13.14s | 13.14s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with zero data-opcode_CREATE] | 13.05s | 13.05s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 12.99s | 12.99s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-blockchain_test-opcode_CREATE2] | 12.80s | 12.80s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 12.68s | 12.68s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes without value-opcode_CREATE2] | 12.67s | 12.67s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 12.67s | 12.67s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value, revert] | 12.51s | 12.51s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 12.45s | 12.45s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 12.45s | 12.45s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 12.37s | 12.37s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value, revert] | 12.33s | 12.33s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 12.31s | 12.31s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 12.14s | 12.14s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_1_pair] | 12.13s | 12.13s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 12.10s | 12.10s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 12.05s | 12.05s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 12.01s | 12.01s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 11.99s | 11.99s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 11.86s | 11.86s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 11.83s | 11.83s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 11.76s | 11.76s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 11.67s | 11.67s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 11.63s | 11.63s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 11.61s | 11.61s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 11.56s | 11.56s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with zero data-opcode_CREATE2] | 11.51s | 11.51s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 11.51s | 11.51s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 11.50s | 11.50s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_1024b_exp_1024] | 11.47s | 11.47s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 11.46s | 11.46s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 11.46s | 11.46s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 11.46s | 11.46s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 11.46s | 11.46s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_2_sets] | 11.44s | 11.44s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 11.42s | 11.42s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 11.38s | 11.38s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 11.38s | 11.38s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_3_pair] | 11.34s | 11.34s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_1_pair_empty] | 11.33s | 11.33s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 11.31s | 11.31s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 11.30s | 11.30s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 11.29s | 11.29s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 11.26s | 11.26s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 11.25s | 11.25s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 11.25s | 11.25s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 11.25s | 11.25s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 11.23s | 11.23s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with non-zero data-opcode_CREATE] | 11.18s | 11.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 11.18s | 11.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 11.16s | 11.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_1024b_exp_1024] | 11.13s | 11.13s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_zero_input] | 11.10s | 11.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 11.10s | 11.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 11.09s | 11.09s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 11.09s | 11.09s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 11.06s | 11.06s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 11.05s | 11.05s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 11.02s | 11.02s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 11.00s | 11.00s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 10.98s | 10.98s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 10.93s | 10.93s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 10.92s | 10.92s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 10.90s | 10.90s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 10.89s | 10.89s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 10.88s | 10.88s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 10.87s | 10.87s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 10.79s | 10.79s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 10.79s | 10.79s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 10.79s | 10.79s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 10.64s | 10.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 10.51s | 10.51s |
| test_worst_compute.py::test_empty_block[fork_Prague-blockchain_test] | 7.70s | 7.70s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| sp1-v5.2.3 | 533 | 533 | 0 | 0 |

---

## reth


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | sp1-v5.2.3<br/>(1.41MiB) | zisk-v0.13.0<br/>(244.02KiB) | Avg |
|-----------|-----------|-----------|----------|
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_qube] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_qube] | 1h 57m 27.82s | ❌ SDK Crash | 1h 57m 27.82s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_square] | 1h 50m 22.81s | ❌ SDK Crash | 1h 50m 22.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1024_exp_2] | 1h 48m 58.56s | ❌ SDK Crash | 1h 48m 58.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_square] | 1h 47m 32.22s | ❌ SDK Crash | 1h 47m 32.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1045_gas_base_heavy] | 1h 43m 32.04s | ❌ SDK Crash | 1h 43m 32.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_867_gas_base_heavy] | 1h 43m 5.78s | ❌ SDK Crash | 1h 43m 5.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_800_gas_base_heavy] | 1h 42m 12.24s | ❌ SDK Crash | 1h 42m 12.24s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-point_evaluation] | 1h 40m 10.97s | ❌ SDK Crash | 1h 40m 10.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_qube] | 1h 40m 1.99s | ❌ SDK Crash | 1h 40m 1.99s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_616_gas_base_heavy] | 1h 39m 2.97s | ❌ SDK Crash | 1h 39m 2.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_408_gas_base_heavy] | 1h 33m 9.65s | ❌ SDK Crash | 1h 33m 9.65s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_264_exp_2] | 1h 31m 21.77s | ❌ SDK Crash | 1h 31m 21.77s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_square] | 1h 30m 53.80s | ❌ SDK Crash | 1h 30m 53.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_256_exp_2] | 1h 29m 12.47s | ❌ SDK Crash | 1h 29m 12.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_base_heavy] | 1h 14m 21.53s | ❌ SDK Crash | 1h 14m 21.53s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_3_even] | 57m 27.39s | ❌ SDK Crash | 57m 27.39s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_8b_exp_896] | 54m 13.76s | ❌ SDK Crash | 54m 13.76s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_8_exp_896] | 52m 59.66s | ❌ SDK Crash | 52m 59.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_298_gas_exp_heavy] | 52m 54.77s | ❌ SDK Crash | 52m 54.77s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_1_exp_heavy] | 51m 2.67s | ❌ SDK Crash | 51m 2.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_215_gas_exp_heavy] | 48m 20.84s | ❌ SDK Crash | 48m 20.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_8_exp_648] | 48m 13.67s | ❌ SDK Crash | 48m 13.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_exp_heavy] | 47m 14.76s | ❌ SDK Crash | 47m 14.76s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_qube] | 39m 49.49s | ❌ SDK Crash | 39m 49.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_800_gas_exp_heavy] | 33m 20.92s | ❌ SDK Crash | 33m 20.92s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_852_gas_exp_heavy] | 33m 19.90s | ❌ SDK Crash | 33m 19.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_600_gas_exp_heavy] | 32m 12.70s | ❌ SDK Crash | 32m 12.70s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_16b_exp_320] | 31m 19.57s | ❌ SDK Crash | 31m 19.57s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_2] | 30m 17.31s | ❌ SDK Crash | 30m 17.31s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_400_gas_exp_heavy] | 30m 0.14s | ❌ SDK Crash | 30m 0.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_2_even] | 29m 19.51s | ❌ SDK Crash | 29m 19.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_2_exp_heavy] | 28m 56.91s | ❌ SDK Crash | 28m 56.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_marius_1_even] | 25m 55.30s | ❌ SDK Crash | 25m 55.30s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_fp_to_g1] | 39m 31.87s | 7m 55.37s | 23m 43.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_square] | 36m 43.58s | 10m 34.00s | 23m 38.79s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_pairing_check] | 36m 42.59s | 8m 25.30s | 22m 33.95s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_24b_exp_168] | 25m 42.93s | 9m 41.09s | 17m 42.01s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_765_gas_exp_heavy] | 25m 51.29s | 9m 20.25s | 17m 35.77s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_fp_to_g2] | 28m 20.05s | 5m 58.73s | 17m 9.39s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_3] | 24m 42.00s | 8m 56.27s | 16m 49.13s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_256] | 24m 38.00s | 8m 30.63s | 16m 34.32s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_256] | 24m 41.54s | 8m 20.51s | 16m 31.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_example_1] | 24m 16.01s | 8m 15.72s | 16m 15.86s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1360_gas_balanced] | 24m 16.33s | 8m 11.56s | 16m 13.94s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_3_exp_heavy] | 23m 25.40s | 8m 1.90s | 15m 43.65s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_96] | 23m 7.08s | 8m 20.06s | 15m 43.57s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_zkevm_worst_case] | 23m 44.68s | 7m 27.81s | 15m 36.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_677_gas_base_heavy] | 22m 55.20s | 7m 56.08s | 15m 25.64s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_3_exp_8] | 21m 59.71s | 8m 47.17s | 15m 23.44s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_128] | 22m 45.25s | 7m 52.09s | 15m 18.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_96] | 22m 22.19s | 7m 40.18s | 15m 1.18s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_example_2] | 22m 52.33s | 7m 6.16s | 14m 59.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_4] | 22m 12.42s | 7m 34.83s | 14m 53.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_65] | 21m 57.79s | 7m 31.41s | 14m 44.60s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_64b_exp_512] | 22m 57.20s | 6m 29.35s | 14m 43.27s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_64b_exp_512] | 22m 39.00s | 6m 33.12s | 14m 36.06s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g2add] | 22m 46.93s | 6m 13.24s | 14m 30.09s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-blake2f] | 20m 45.11s | 8m 8.25s | 14m 26.68s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1360n1] | 21m 22.55s | 7m 8.77s | 14m 15.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_996_gas_balanced] | 21m 59.19s | 6m 29.88s | 14m 14.53s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_600_gas_balanced] | 21m 27.51s | 6m 54.59s | 14m 11.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_767_gas_balanced] | 21m 45.21s | 6m 29.05s | 14m 7.13s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_4_exp_heavy] | 21m 15.24s | 6m 40.66s | 13m 57.95s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_64] | 20m 37.03s | 7m 9.14s | 13m 53.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_408_gas_balanced] | 20m 59.13s | 6m 46.21s | 13m 52.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_40] | 20m 3.85s | 7m 32.97s | 13m 48.41s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g1add] | 21m 16.91s | 5m 57.94s | 13m 37.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_balanced] | 20m 8.63s | 6m 43.24s | 13m 25.93s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_128b_exp_1024] | 20m 59.27s | 5m 40.44s | 13m 19.85s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_128b_exp_1024] | 20m 41.24s | 5m 37.73s | 13m 9.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_1_even] | 16m 46.23s | 9m 8.28s | 12m 57.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1349n1] | 19m 22.58s | 6m 28.77s | 12m 55.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1360n2] | 19m 11.06s | 6m 35.18s | 12m 53.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_256b_exp_1024] | 20m 10.36s | 5m 19.11s | 12m 44.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_256b_exp_1024] | 20m 7.72s | 5m 19.49s | 12m 43.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_40] | 18m 42.36s | 6m 34.28s | 12m 38.32s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_208_gas_balanced] | 18m 41.79s | 6m 33.07s | 12m 37.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_36] | 18m 11.88s | 6m 20.37s | 12m 16.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_cover_windows] | 17m 39.12s | 6m 7.92s | 11m 53.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 17m 56.43s | 5m 16.38s | 11m 36.41s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g1msm] | 19m 5.60s | 4m 1.84s | 11m 33.72s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 17m 56.16s | 5m 0.00s | 11m 28.08s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 17m 10.39s | 5m 23.40s | 11m 16.89s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 17m 36.50s | 4m 47.30s | 11m 11.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 16m 57.85s | 4m 37.83s | 10m 47.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_512b_exp_1024] | 16m 58.76s | 4m 27.42s | 10m 43.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_512b_exp_1024] | 16m 58.48s | 4m 27.20s | 10m 42.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_32] | 15m 51.03s | 5m 33.55s | 10m 42.29s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n3] | 13m 43.60s | 4m 38.94s | 9m 11.27s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n2] | 13m 41.61s | 4m 38.78s | 9m 10.19s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1152n1] | 13m 9.58s | 4m 42.51s | 8m 56.04s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_5_pair] | 8m 40.65s | ❌ SDK Crash | 8m 40.65s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_qube] | 12m 48.33s | 3m 55.47s | 8m 21.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_square] | 12m 7.96s | 3m 42.22s | 7m 55.09s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g2msm] | 11m 37.84s | 2m 41.49s | 7m 9.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n1] | 10m 33.70s | 3m 43.41s | 7m 8.56s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_DELEGATECALL] | 7m 36.01s | 5m 52.34s | 6m 44.18s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_CALL] | 7m 28.75s | 5m 56.15s | 6m 42.45s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_STATICCALL] | 7m 32.22s | 5m 52.13s | 6m 42.18s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_CALLCODE] | 7m 27.85s | 5m 56.14s | 6m 42.00s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODESIZE] | 7m 33.85s | 5m 50.11s | 6m 41.98s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODEHASH] | 7m 28.14s | 5m 48.90s | 6m 38.52s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_191] | 9m 52.41s | 3m 14.66s | 6m 33.54s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODECOPY] | 7m 20.82s | 5m 43.17s | 6m 31.99s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_255] | 9m 39.07s | 3m 10.23s | 6m 24.65s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-blockchain_test-contract_balance_1] | 7m 31.84s | 4m 56.45s | 6m 14.14s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-blockchain_test-contract_balance_0] | 7m 28.64s | 4m 56.28s | 6m 12.46s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul] | 11m 19.61s | 15.42s | 5m 47.51s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 10m 58.90s | 15.69s | 5m 37.29s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 10m 53.50s | 15.49s | 5m 34.50s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_127] | 7m 2.93s | 2m 24.73s | 4m 43.83s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_191] | 6m 49.84s | 2m 21.65s | 4m 35.74s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_4_pair] | 8m 33.63s | 36.80s | 4m 35.21s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_2_pair] | 8m 9.24s | 42.44s | 4m 25.84s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_two_pairings] | 8m 8.23s | 42.90s | 4m 25.56s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_191] | 6m 27.45s | 2m 16.18s | 4m 21.82s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_one_pairing] | 7m 53.60s | 49.08s | 4m 21.34s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-blockchain_test] | 8m 3.29s | 29.72s | 4m 16.50s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SDIV-1] | 6m 10.25s | 2m 5.94s | 4m 8.10s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SDIV-0] | 6m 4.73s | 2m 2.44s | 4m 3.59s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_63] | 5m 21.10s | 2m 3.95s | 3m 42.53s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_DIV-0] | 5m 23.64s | 1m 51.31s | 3m 37.48s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_127] | 5m 18.73s | 1m 43.83s | 3m 31.28s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_255] | 5m 0.73s | 1m 54.47s | 3m 27.60s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_127] | 5m 8.80s | 1m 37.27s | 3m 23.03s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_DIV-1] | 4m 58.97s | 1m 46.36s | 3m 22.67s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_191] | 4m 48.26s | 1m 55.54s | 3m 21.90s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_255] | 4m 50.96s | 1m 48.66s | 3m 19.81s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 6m 24.80s | 9.92s | 3m 17.36s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_PREVRANDAO] | 2m 51.59s | 2m 48.76s | 2m 50.17s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_255] | 3m 53.78s | 1m 45.75s | 2m 49.77s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_127] | 3m 50.83s | 1m 33.13s | 2m 41.98s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_63] | 3m 33.63s | 1m 20.66s | 2m 27.15s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add] | 2m 31.19s | 2m 9.67s | 2m 20.43s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_63] | 3m 22.74s | 1m 15.27s | 2m 19.00s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-blockchain_test] | 2m 12.03s | 2m 20.84s | 2m 16.44s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add_1_2] | 2m 26.30s | 2m 0.28s | 2m 13.29s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ecrecover] | 3m 42.06s | 41.65s | 2m 11.85s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-SHA2-256] | 3m 40.93s | 40.91s | 2m 10.92s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP5] | 2m 10.11s | 2m 1.00s | 2m 5.55s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP16] | 2m 8.79s | 2m 1.25s | 2m 5.02s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP2] | 2m 8.34s | 2m 1.48s | 2m 4.91s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP12] | 2m 9.47s | 1m 59.85s | 2m 4.66s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP3] | 2m 8.51s | 2m 0.63s | 2m 4.57s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP6] | 2m 8.44s | 2m 0.65s | 2m 4.54s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP13] | 2m 9.29s | 1m 59.70s | 2m 4.50s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP15] | 2m 7.88s | 1m 59.96s | 2m 3.92s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP7] | 2m 8.34s | 1m 59.16s | 2m 3.75s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP4] | 2m 8.38s | 1m 58.24s | 2m 3.31s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP14] | 2m 9.29s | 1m 56.84s | 2m 3.06s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP1] | 2m 9.82s | 1m 55.64s | 2m 2.73s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP9] | 2m 7.10s | 1m 55.36s | 2m 1.23s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP10] | 2m 7.41s | 1m 55.00s | 2m 1.20s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP8] | 2m 8.06s | 1m 52.36s | 2m 0.21s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP11] | 2m 8.62s | 1m 50.70s | 1m 59.66s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_63] | 2m 40.32s | 1m 18.69s | 1m 59.51s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SGT-] | 2m 35.29s | 1m 22.17s | 1m 58.73s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_COINBASE] | 2m 5.68s | 1m 43.37s | 1m 54.53s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_ORIGIN] | 2m 4.40s | 1m 43.77s | 1m 54.08s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-empty-opcode_REVERT] | 2m 15.59s | 1m 31.57s | 1m 53.58s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-zero-loop] | 2m 20.43s | 1m 25.13s | 1m 52.78s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-one-loop] | 2m 17.74s | 1m 27.22s | 1m 52.48s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_EQ-] | 2m 27.65s | 1m 17.14s | 1m 52.39s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_EXP-] | 3m 8.33s | 34.25s | 1m 51.29s |
| test_worst_compute.py::test_worst_unop[fork_Prague-blockchain_test-opcode_ISZERO] | 2m 22.39s | 1m 17.77s | 1m 50.08s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_ADDRESS] | 2m 4.86s | 1m 30.65s | 1m 47.75s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CALLER] | 2m 7.98s | 1m 25.95s | 1m 46.97s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH32] | 1m 42.05s | 1m 50.44s | 1m 46.25s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_STATICCALL] | 2m 5.38s | 1m 24.95s | 1m 45.16s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_CALL] | 2m 5.92s | 1m 24.06s | 1m 44.99s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_CALLCODE] | 2m 4.78s | 1m 22.98s | 1m 43.88s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-empty-opcode_RETURN] | 2m 4.39s | 1m 22.62s | 1m 43.51s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH31] | 1m 41.67s | 1m 44.35s | 1m 43.01s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH30] | 1m 40.46s | 1m 41.87s | 1m 41.17s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH29] | 1m 39.86s | 1m 37.95s | 1m 38.90s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SMOD-] | 2m 10.21s | 1m 4.97s | 1m 37.59s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH27] | 1m 35.22s | 1m 35.77s | 1m 35.50s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH28] | 1m 35.11s | 1m 35.68s | 1m 35.40s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-empty] | 1m 53.85s | 1m 14.92s | 1m 34.39s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_STATICCALL] | 1m 50.73s | 1m 14.32s | 1m 32.53s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_CALLCODE] | 1m 51.71s | 1m 12.99s | 1m 32.35s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_CALL] | 1m 52.44s | 1m 12.26s | 1m 32.35s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 1m 50.39s | 1m 13.87s | 1m 32.13s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH26] | 1m 31.37s | 1m 29.81s | 1m 30.59s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH25] | 1m 27.69s | 1m 28.63s | 1m 28.16s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_MOD-] | 1m 56.31s | 58.99s | 1m 27.65s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH24] | 1m 27.59s | 1m 26.52s | 1m 27.06s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH23] | 1m 28.73s | 1m 21.48s | 1m 25.11s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH22] | 1m 27.69s | 1m 19.39s | 1m 23.54s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of zero data-opcode_REVERT] | 1m 43.99s | 1m 2.88s | 1m 23.43s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-six blobs, access latest] | 1m 23.44s | 1m 21.28s | 1m 22.36s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SSTORE new value] | 1m 42.84s | 1m 1.69s | 1m 22.26s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SAR-] | 1m 58.20s | 46.21s | 1m 22.20s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 1m 36.84s | 1m 4.66s | 1m 20.75s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH21] | 1m 22.37s | 1m 16.19s | 1m 19.28s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_BLOBBASEFEE] | 1m 44.64s | 49.58s | 1m 17.11s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH19] | 1m 20.62s | 1m 12.79s | 1m 16.70s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH20] | 1m 20.64s | 1m 12.72s | 1m 16.68s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add_infinities] | 1m 19.43s | 1m 13.59s | 1m 16.51s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of zero data-opcode_RETURN] | 1m 35.37s | 57.63s | 1m 16.50s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-one blob and accessed] | 1m 22.80s | 1m 9.72s | 1m 16.26s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-blockchain_test-shift_right_SAR] | 1m 48.57s | 42.16s | 1m 15.36s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GASPRICE] | 1m 41.75s | 46.45s | 1m 14.10s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH18] | 1m 16.35s | 1m 6.86s | 1m 11.60s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SHR-] | 1m 41.31s | 39.03s | 1m 10.17s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH17] | 1m 13.82s | 1m 5.27s | 1m 9.55s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SHL-] | 1m 41.60s | 37.33s | 1m 9.46s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-blockchain_test-shift_right_SHR] | 1m 40.41s | 38.16s | 1m 9.28s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH16] | 1m 13.59s | 1m 4.92s | 1m 9.25s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_MUL-] | 1m 46.62s | 29.29s | 1m 7.96s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH15] | 1m 14.84s | 1m 0.59s | 1m 7.72s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_NUMBER] | 1m 31.78s | 42.50s | 1m 7.14s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 26.11s | 46.84s | 1m 6.47s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 25.27s | 46.48s | 1m 5.88s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_TIMESTAMP] | 1m 28.44s | 43.21s | 1m 5.82s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 24.72s | 46.62s | 1m 5.67s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-0 bytes] | 1m 31.68s | 39.41s | 1m 5.54s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 24.64s | 46.19s | 1m 5.41s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH14] | 1m 11.53s | 59.21s | 1m 5.37s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 24.19s | 46.49s | 1m 5.34s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 24.23s | 46.45s | 1m 5.34s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 1m 32.50s | 38.13s | 1m 5.31s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 24.02s | 46.49s | 1m 5.26s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 1m 32.20s | 38.22s | 1m 5.21s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 24.20s | 46.19s | 1m 5.19s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 12.27s | 57.99s | 1m 5.13s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 24.04s | 46.22s | 1m 5.13s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 23.80s | 46.27s | 1m 5.03s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 24.05s | 45.91s | 1m 4.98s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 23.88s | 46.07s | 1m 4.98s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 11.87s | 57.65s | 1m 4.76s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 11.49s | 57.28s | 1m 4.39s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 10.66s | 57.88s | 1m 4.27s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 10.61s | 57.62s | 1m 4.11s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 1m 19.71s | 48.42s | 1m 4.06s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 11.14s | 56.98s | 1m 4.06s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 10.55s | 57.52s | 1m 4.04s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 1m 22.43s | 45.33s | 1m 3.88s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 9.99s | 57.60s | 1m 3.80s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 9.70s | 57.65s | 1m 3.67s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 9.49s | 57.73s | 1m 3.61s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 9.56s | 57.40s | 1m 3.48s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-blockchain_test] | 1m 24.41s | 42.52s | 1m 3.47s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_True-key_mut_True] | 1m 19.39s | 47.37s | 1m 3.38s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_True-key_mut_False] | 1m 19.29s | 47.08s | 1m 3.18s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 9.02s | 57.18s | 1m 3.10s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0 bytes] | 1m 30.24s | 35.92s | 1m 3.08s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CHAINID] | 1m 22.85s | 42.52s | 1m 2.68s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CODESIZE] | 1m 20.83s | 43.83s | 1m 2.33s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_BASEFEE] | 1m 21.66s | 42.61s | 1m 2.13s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-0 bytes] | 1m 28.78s | 35.44s | 1m 2.11s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH13] | 1m 8.06s | 56.09s | 1m 2.07s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-blockchain_test] | 1m 21.17s | 42.47s | 1m 1.82s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_0] | 1m 20.67s | 42.78s | 1m 1.73s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1] | 1m 20.11s | 42.91s | 1m 1.51s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SIGNEXTEND-] | 1m 28.44s | 33.50s | 1m 0.97s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1000] | 1m 19.64s | 41.78s | 1m 0.71s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GAS] | 1m 20.19s | 40.94s | 1m 0.56s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GASLIMIT] | 1m 19.86s | 41.06s | 1m 0.46s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH12] | 1m 5.71s | 53.25s | 59.48s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH0] | 1m 17.72s | 40.88s | 59.30s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH11] | 1m 6.71s | 51.05s | 58.88s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SSTORE same value] | 1m 11.72s | 44.07s | 57.89s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-100 bytes] | 1m 17.14s | 36.72s | 56.93s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 1m 13.94s | 39.39s | 56.66s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 1m 14.36s | 38.58s | 56.47s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-0 bytes] | 1m 15.45s | 34.72s | 55.09s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 1m 12.30s | 36.69s | 54.50s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-100 bytes] | 1m 8.60s | 38.32s | 53.46s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_True-non_zero_value_False] | 1m 14.80s | 31.94s | 53.37s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_False-non_zero_value_False] | 1m 13.69s | 32.29s | 52.99s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_False-non_zero_value_True] | 1m 13.49s | 32.09s | 52.79s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH10] | 58.49s | 46.88s | 52.68s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH7] | 1m 1.53s | 43.38s | 52.46s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_True-non_zero_value_True] | 1m 13.07s | 31.84s | 52.46s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH9] | 57.69s | 46.22s | 51.95s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH8] | 56.77s | 46.16s | 51.47s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 1m 9.59s | 31.83s | 50.71s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SLT-] | 1m 7.79s | 32.57s | 50.18s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-blockchain_test] | 1m 7.26s | 31.58s | 49.42s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH6] | 55.98s | 41.75s | 48.86s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 59.25s | 38.36s | 48.81s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-blockchain_test] | 53.90s | 42.79s | 48.34s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-5b] | 58.41s | 37.42s | 47.91s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 1m 5.21s | 30.14s | 47.67s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 1m 5.25s | 29.39s | 47.32s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_False-empty_authority_True] | 46.63s | ❌ SDK Crash | 46.63s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 1m 1.28s | 30.91s | 46.10s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 1m 1.39s | 30.78s | 46.08s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 1m 1.33s | 30.80s | 46.06s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_1000] | 1m 1.57s | 30.39s | 45.98s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_10000] | 1m 1.52s | 30.40s | 45.96s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SUB-] | 1m 4.37s | 27.52s | 45.95s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 1m 1.23s | 30.56s | 45.89s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 59.93s | 30.68s | 45.31s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_0] | 1m 0.04s | 30.55s | 45.30s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 59.95s | 30.58s | 45.26s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH4] | 55.28s | 34.97s | 45.12s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH5] | 52.37s | 37.82s | 45.10s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-10KiB] | 1m 1.09s | 27.62s | 44.35s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_LT-] | 1m 3.05s | 25.38s | 44.22s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 1m 1.32s | 25.91s | 43.62s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_BYTE-] | 1m 0.72s | 26.20s | 43.46s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_GT-] | 1m 1.60s | 25.21s | 43.40s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 1m 0.62s | 26.16s | 43.39s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_ADD-] | 58.88s | 27.47s | 43.18s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0 bytes] | 59.65s | 26.37s | 43.01s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 59.20s | 26.66s | 42.93s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 58.86s | 26.66s | 42.76s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 58.79s | 26.58s | 42.69s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 58.68s | 26.57s | 42.62s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 58.33s | 26.63s | 42.48s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 58.52s | 26.34s | 42.43s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 58.12s | 26.33s | 42.22s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 58.09s | 26.14s | 42.11s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 57.77s | 26.34s | 42.05s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 57.82s | 26.20s | 42.01s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_XOR-] | 59.31s | 24.05s | 41.68s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_AND-] | 58.93s | 24.09s | 41.51s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-0 bytes] | 57.01s | 25.80s | 41.41s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH3] | 49.64s | 33.05s | 41.34s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_OR-] | 58.25s | 24.12s | 41.19s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_diff_acc_to_diff_acc] | 1m 5.77s | 16.44s | 41.10s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-100 bytes] | 55.58s | 26.03s | 40.80s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-one blob but access non-existent index] | 49.10s | 32.18s | 40.64s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP4] | 54.94s | 25.60s | 40.27s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-no blobs] | 49.69s | 30.60s | 40.14s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP3] | 54.11s | 25.84s | 39.98s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP10] | 54.06s | 25.85s | 39.95s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP13] | 53.65s | 26.13s | 39.89s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP9] | 53.70s | 25.95s | 39.83s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP16] | 53.95s | 25.65s | 39.80s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP11] | 53.86s | 25.73s | 39.80s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP8] | 53.80s | 25.71s | 39.75s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 48.27s | 31.23s | 39.75s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP2] | 53.60s | 25.71s | 39.66s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP7] | 53.66s | 25.62s | 39.64s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP5] | 53.15s | 25.94s | 39.55s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP12] | 53.20s | 25.85s | 39.53s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_BALANCE] | 47.73s | 31.21s | 39.47s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP1] | 53.41s | 25.50s | 39.45s |
| test_worst_compute.py::test_worst_unop[fork_Prague-blockchain_test-opcode_NOT] | 55.91s | 22.89s | 39.40s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP14] | 52.69s | 25.92s | 39.30s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP6] | 52.75s | 25.85s | 39.30s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-IDENTITY] | 1m 0.98s | 17.62s | 39.30s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP15] | 53.17s | 25.42s | 39.29s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH2] | 51.92s | 26.35s | 39.13s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_diff_acc_to_b] | 1m 2.26s | 15.49s | 38.87s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-100 bytes] | 49.45s | 28.17s | 38.81s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 51.38s | 25.95s | 38.66s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_diff_acc] | 1m 2.26s | 14.06s | 38.16s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-blockchain_test] | 51.21s | 24.53s | 37.87s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 50.37s | 24.80s | 37.59s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 47.55s | 27.53s | 37.54s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH1] | 48.65s | 24.75s | 36.70s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.25x max code size] | 42.33s | 30.38s | 36.35s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-00] | 48.28s | 23.97s | 36.13s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_b] | 58.84s | 12.77s | 35.80s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_a] | 58.22s | 12.60s | 35.41s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-10KiB] | 44.49s | 26.18s | 35.34s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.75x max code size] | 39.77s | 30.31s | 35.04s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-605b5b] | 44.76s | 24.53s | 34.65s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 46.17s | 23.08s | 34.62s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_False-key_mut_False] | 43.10s | 25.74s | 34.42s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.50x max code size] | 38.07s | 30.49s | 34.28s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 37.76s | 30.75s | 34.25s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_False-key_mut_True] | 42.72s | 25.46s | 34.09s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-max code size] | 37.78s | 30.20s | 33.99s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 37.16s | 30.49s | 33.83s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 39.72s | 27.68s | 33.70s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SLOAD] | 42.78s | 24.41s | 33.59s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 38.62s | 26.68s | 32.65s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-1MiB] | 45.98s | 18.33s | 32.16s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 38.82s | 24.99s | 31.91s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_BALANCE] | 38.23s | 25.12s | 31.68s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-10KiB] | 44.91s | 18.23s | 31.57s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-615b5b5b] | 39.95s | 21.98s | 30.96s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-1KiB] | 38.58s | 22.41s | 30.50s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-RIPEMD-160] | 37.18s | 23.67s | 30.43s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-512] | 37.17s | 23.16s | 30.16s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_False-empty_authority_False] | 46.46s | 13.79s | 30.13s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-blockchain_test] | 39.40s | 20.24s | 29.82s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 37.43s | 22.07s | 29.75s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_True-empty_authority_False] | 45.52s | 13.98s | 29.75s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value, revert] | 36.95s | 22.26s | 29.61s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_True-empty_authority_True] | 44.05s | 14.09s | 29.07s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value] | 35.53s | 21.77s | 28.65s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-605b] | 38.46s | 18.56s | 28.51s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_True-key_mut_False] | 36.15s | 20.65s | 28.40s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSLOAD] | 35.10s | 20.76s | 27.93s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_True-key_mut_True] | 34.58s | 19.48s | 27.03s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-blockchain_test-absent_accounts_False-opcode_BALANCE] | 33.41s | 20.22s | 26.82s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-615b5b] | 35.91s | 16.42s | 26.16s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value] | 33.44s | 17.34s | 25.39s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-1MiB] | 37.62s | 13.16s | 25.39s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-5KiB] | 32.42s | 17.83s | 25.12s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.25x max code size] | 30.86s | 16.70s | 23.78s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 31.06s | 16.49s | 23.77s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.75x max code size] | 30.56s | 16.73s | 23.64s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.50x max code size] | 30.53s | 16.43s | 23.48s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 29.70s | 16.99s | 23.34s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 29.79s | 16.84s | 23.32s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-10KiB] | 30.02s | 16.54s | 23.28s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-blockchain_test-value_bearing_True] | 29.26s | 17.21s | 23.24s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-max code size] | 29.77s | 16.56s | 23.17s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-blockchain_test-zero_byte_True] | 25.49s | 15.90s | 20.70s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-blockchain_test-value_bearing_False] | 25.44s | 14.86s | 20.15s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSLOAD] | 25.58s | 14.12s | 19.85s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value, revert] | 23.04s | 13.97s | 18.50s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 23.74s | 13.23s | 18.49s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 22.94s | 13.55s | 18.25s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 21.41s | 13.33s | 17.37s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 23.48s | 11.16s | 17.32s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-blockchain_test-absent_accounts_True-opcode_BALANCE] | 22.59s | 11.77s | 17.18s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-blockchain_test] | 20.98s | 12.96s | 16.97s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_1_2_2_scalar] | 22.39s | 11.03s | 16.71s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_infinities_2_scalar] | 21.35s | 10.07s | 15.71s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 21.46s | 9.80s | 15.63s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 21.59s | 9.42s | 15.50s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_100000] | 20.02s | 10.72s | 15.37s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_False-key_mut_False] | 19.44s | 10.90s | 15.17s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_False-key_mut_True] | 18.83s | 11.32s | 15.07s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-1MiB] | 20.18s | 9.44s | 14.81s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-1MiB] | 20.12s | 8.48s | 14.30s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 19.64s | 8.83s | 14.24s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 18.70s | 9.43s | 14.06s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value] | 16.12s | 9.09s | 12.61s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 16.32s | 8.77s | 12.55s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 16.45s | 8.59s | 12.52s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-blockchain_test-zero_byte_False] | 14.72s | 10.17s | 12.44s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 16.15s | 8.72s | 12.44s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 16.16s | 8.64s | 12.40s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 15.99s | 8.71s | 12.35s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 15.32s | 9.08s | 12.20s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 15.29s | 8.64s | 11.97s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 15.30s | 8.61s | 11.95s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value] | 14.75s | 9.01s | 11.88s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 14.56s | 9.18s | 11.87s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes with value-opcode_CREATE] | 15.74s | 7.94s | 11.84s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_2_sets] | 15.72s | 7.91s | 11.81s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 14.61s | 8.64s | 11.63s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with zero data-opcode_CREATE] | 15.29s | 7.87s | 11.58s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of zero data-opcode_REVERT] | 15.30s | 7.86s | 11.58s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 14.41s | 8.71s | 11.56s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-blockchain_test-opcode_CREATE] | 14.60s | 8.48s | 11.54s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of zero data-opcode_RETURN] | 15.18s | 7.84s | 11.51s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 14.08s | 8.64s | 11.36s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-blockchain_test_from_state_test-value_bearing_False] | 13.94s | 8.67s | 11.30s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 14.53s | 7.87s | 11.20s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 14.46s | 7.82s | 11.14s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 14.19s | 7.99s | 11.09s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 13.97s | 8.18s | 11.07s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 14.10s | 7.98s | 11.04s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-blockchain_test_from_state_test-value_bearing_True] | 13.55s | 8.50s | 11.03s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 14.01s | 7.97s | 10.99s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes with value-opcode_CREATE2] | 14.28s | 7.68s | 10.98s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 13.71s | 8.17s | 10.94s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-blockchain_test-opcode_CREATE2] | 13.99s | 7.77s | 10.88s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes without value-opcode_CREATE] | 13.95s | 7.78s | 10.86s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 13.81s | 7.91s | 10.86s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 13.54s | 8.09s | 10.81s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 13.56s | 8.06s | 10.81s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 13.49s | 7.96s | 10.73s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 13.71s | 7.72s | 10.72s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes without value-opcode_CREATE2] | 13.63s | 7.78s | 10.71s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-blockchain_test_from_state_test-value_bearing_False] | 13.63s | 7.76s | 10.70s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-blockchain_test_from_state_test-value_bearing_True] | 13.61s | 7.77s | 10.69s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 13.36s | 7.89s | 10.63s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value, revert] | 13.38s | 7.80s | 10.59s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value, revert] | 13.37s | 7.79s | 10.58s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 13.34s | 7.81s | 10.58s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 13.45s | 7.70s | 10.57s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 13.18s | 7.88s | 10.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 13.31s | 7.71s | 10.51s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 12.99s | 7.97s | 10.48s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 12.65s | 8.17s | 10.41s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with non-zero data-opcode_CREATE] | 12.88s | 7.89s | 10.38s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 12.68s | 8.09s | 10.38s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 12.81s | 7.95s | 10.38s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 13.01s | 7.70s | 10.35s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 13.16s | 7.49s | 10.33s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 12.89s | 7.68s | 10.29s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 12.77s | 7.77s | 10.27s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 12.62s | 7.87s | 10.25s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 12.41s | 8.06s | 10.23s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 12.56s | 7.90s | 10.23s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_zero_input] | 12.71s | 7.75s | 10.23s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1000000] | 12.66s | 7.79s | 10.23s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 12.46s | 7.92s | 10.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 12.35s | 7.98s | 10.16s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 12.57s | 7.74s | 10.15s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 12.45s | 7.85s | 10.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 12.40s | 7.89s | 10.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 12.40s | 7.88s | 10.14s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_1_pair] | 12.50s | 7.77s | 10.13s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with zero data-opcode_CREATE2] | 12.29s | 7.96s | 10.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 12.51s | 7.71s | 10.11s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 12.47s | 7.64s | 10.06s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 12.39s | 7.72s | 10.06s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 12.32s | 7.78s | 10.05s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 12.20s | 7.89s | 10.04s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 12.39s | 7.70s | 10.04s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 12.28s | 7.81s | 10.04s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 12.43s | 7.66s | 10.04s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 12.37s | 7.70s | 10.04s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 12.22s | 7.84s | 10.03s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_3_pair] | 12.45s | 7.59s | 10.02s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 12.09s | 7.95s | 10.02s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 12.35s | 7.66s | 10.01s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 12.33s | 7.67s | 10.00s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 12.29s | 7.71s | 10.00s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 12.39s | 7.60s | 9.99s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 12.08s | 7.86s | 9.97s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 12.21s | 7.71s | 9.96s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 12.02s | 7.89s | 9.95s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_1024b_exp_1024] | 12.01s | 7.84s | 9.92s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 12.04s | 7.78s | 9.91s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 11.87s | 7.95s | 9.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_1024b_exp_1024] | 11.93s | 7.85s | 9.89s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 12.08s | 7.68s | 9.88s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 11.96s | 7.78s | 9.87s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_1_pair_empty] | 11.90s | 7.82s | 9.86s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 11.98s | 7.74s | 9.86s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 11.75s | 7.92s | 9.84s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 11.81s | 7.85s | 9.83s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 11.85s | 7.79s | 9.82s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 11.75s | 7.82s | 9.78s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 11.71s | 7.80s | 9.75s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 11.80s | 7.65s | 9.72s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 11.24s | 7.88s | 9.56s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 11.36s | 7.66s | 9.51s |
| test_worst_compute.py::test_empty_block[fork_Prague-blockchain_test] | 8.96s | 7.12s | 8.04s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| sp1-v5.2.3 | 533 | 532 | 1 | 0 |
| zisk-v0.13.0 | 533 | 497 | 36 | 0 |

---

