# 1xL40s - 10M-gas-limit

## Gas Limit Configuration - Execution

EEST benchmarks with 10M-gas-limit gas limit (execution results) on **1xL40s** hardware.

## Available EL Clients

- [ethrex](#ethrex)
- [reth](#reth)

---

## ethrex


## Execution Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | risc0-v3.0.3 | sp1-v5.2.1 | Avg |
|-----------|-----------|-----------|----------|
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-point_evaluation] | 13m 3.40s | 3m 9.43s | 8m 6.41s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MULMOD-mod_bits_127] | 6m 16.98s | 9m 4.85s | 7m 40.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_8b_exp_896] | 6m 19.44s | 8m 30.86s | 7m 25.15s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 5m 52.18s | 8m 48.25s | 7m 20.21s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_5_pair] | 5m 36.06s | 8m 20.65s | 6m 58.36s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MULMOD-mod_bits_191] | 5m 42.24s | 8m 5.14s | 6m 53.69s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_4_pair] | 5m 28.53s | 8m 13.27s | 6m 50.90s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MULMOD-mod_bits_255] | 4m 58.32s | 8m 3.58s | 6m 30.95s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_2_pair] | 5m 3.31s | 7m 35.40s | 6m 19.35s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_two_pairings] | 5m 4.60s | 7m 31.41s | 6m 18.01s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_one_pairing] | 4m 34.59s | 6m 48.88s | 5m 41.73s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MULMOD-mod_bits_63] | 4m 18.73s | 6m 23.84s | 5m 21.28s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_guido_2_even] | 4m 21.13s | 6m 4.89s | 5m 13.01s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_800_gas_base_heavy] | 4m 23.24s | 5m 46.44s | 5m 4.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_marius_1_even] | 4m 17.37s | 5m 51.63s | 5m 4.50s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_867_gas_base_heavy] | 4m 24.01s | 5m 44.02s | 5m 4.01s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_616_gas_base_heavy] | 4m 23.27s | 5m 40.42s | 5m 1.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_4_qube] | 4m 19.43s | 5m 41.41s | 5m 0.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_1045_gas_base_heavy] | 4m 14.62s | 5m 40.70s | 4m 57.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_408_gas_base_heavy] | 4m 17.37s | 5m 32.65s | 4m 55.01s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_g1add] | 4m 5.82s | 5m 42.26s | 4m 54.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_264_exp_2] | 4m 16.29s | 5m 27.46s | 4m 51.88s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_16b_exp_320] | 4m 9.01s | 5m 29.12s | 4m 49.07s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_3_qube] | 4m 9.98s | 5m 26.50s | 4m 48.24s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MOD-mod_bits_127] | 3m 55.81s | 5m 32.45s | 4m 44.13s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_SMOD-mod_bits_127] | 4m 0.49s | 5m 26.85s | 4m 43.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_256_exp_2] | 4m 4.86s | 5m 20.75s | 4m 42.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_guido_1_even] | 3m 44.46s | 5m 5.42s | 4m 24.94s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul] | 3m 30.77s | 5m 3.47s | 4m 17.12s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ecrecover] | 4m 13.25s | 4m 20.36s | 4m 16.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_min_gas_base_heavy] | 3m 42.78s | 4m 45.15s | 4m 13.96s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_scalar] | 3m 25.46s | 4m 57.80s | 4m 11.63s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_1_2_32_byte_scalar] | 3m 24.96s | 4m 54.93s | 4m 9.94s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_852_gas_exp_heavy] | 3m 32.83s | 4m 41.33s | 4m 7.08s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_800_gas_exp_heavy] | 3m 30.11s | 4m 35.48s | 4m 2.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_exp_298_gas_exp_heavy] | 3m 22.96s | 4m 39.55s | 4m 1.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_8_exp_896] | 3m 22.58s | 4m 39.84s | 4m 1.21s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_600_gas_exp_heavy] | 3m 26.25s | 4m 29.35s | 3m 57.80s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_g2add] | 3m 18.70s | 4m 30.72s | 3m 54.71s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_4_square] | 3m 17.62s | 4m 26.47s | 3m 52.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_5_qube] | 3m 15.46s | 4m 25.33s | 3m 50.40s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_3_square] | 3m 15.52s | 4m 24.65s | 3m 50.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_8_exp_648] | 3m 11.34s | 4m 24.97s | 3m 48.15s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_exp_215_gas_exp_heavy] | 3m 10.44s | 4m 25.83s | 3m 48.13s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_1024_exp_2] | 3m 14.12s | 4m 20.57s | 3m 47.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_400_gas_exp_heavy] | 3m 14.06s | 4m 20.29s | 3m 47.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_pawel_2] | 3m 14.96s | 4m 16.95s | 3m 45.96s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_min_gas_exp_heavy] | 3m 8.88s | 4m 22.53s | 3m 45.71s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_127] | 3m 1.72s | 4m 12.18s | 3m 36.95s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SDIV-1] | 3m 0.34s | 4m 12.38s | 3m 36.36s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_pairing_check] | 5m 50.05s | 1m 15.19s | 3m 32.62s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_add_1_2] | 3m 1.60s | 3m 56.18s | 3m 28.89s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALLCODE] | 5m 52.53s | 53.82s | 3m 23.17s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODESIZE] | 5m 52.41s | 52.46s | 3m 22.44s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DELEGATECALL] | 5m 51.91s | 52.91s | 3m 22.41s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_STATICCALL] | 5m 50.05s | 53.08s | 3m 21.56s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALL] | 5m 48.88s | 52.91s | 3m 20.89s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_24b_exp_168] | 2m 51.27s | 3m 50.26s | 3m 20.76s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODECOPY] | 5m 38.51s | 49.97s | 3m 14.24s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MOD-mod_bits_191] | 2m 41.20s | 3m 46.39s | 3m 13.79s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_SMOD-mod_bits_191] | 2m 40.54s | 3m 44.27s | 3m 12.40s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODEHASH] | 5m 38.50s | 44.81s | 3m 11.65s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DIV-1] | 2m 36.71s | 3m 43.87s | 3m 10.29s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SDIV-0] | 2m 37.27s | 3m 38.83s | 3m 8.05s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_add] | 2m 39.71s | 3m 34.29s | 3m 7.00s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_5_square] | 2m 39.02s | 3m 31.00s | 3m 5.01s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DIV-0] | 2m 32.01s | 3m 36.79s | 3m 4.40s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MOD-mod_bits_63] | 2m 27.59s | 3m 35.02s | 3m 1.30s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_SMOD-mod_bits_63] | 2m 28.38s | 3m 30.14s | 2m 59.26s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_fp_to_g2] | 4m 51.31s | 1m 2.00s | 2m 56.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_765_gas_exp_heavy] | 2m 29.17s | 3m 20.43s | 2m 54.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_8] | 2m 28.01s | 3m 19.02s | 2m 53.51s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-blake2f] | 2m 52.67s | ❌ SDK Crash | 2m 52.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_pawel_3] | 2m 28.40s | 3m 16.94s | 2m 52.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_32b_exp_256] | 2m 22.40s | 3m 8.54s | 2m 45.47s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_191] | 2m 15.50s | 3m 9.47s | 2m 42.48s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_32b_exp_96] | 2m 18.80s | 3m 4.65s | 2m 41.72s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_fp_to_g1] | 4m 23.25s | 46.51s | 2m 34.88s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_32b_exp_40] | 2m 11.09s | 2m 52.20s | 2m 31.65s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_32b_exp_256] | 2m 8.27s | 2m 54.17s | 2m 31.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_example_1] | 2m 7.76s | 2m 51.17s | 2m 29.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_1360_gas_balanced] | 2m 6.35s | 2m 51.95s | 2m 29.15s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_677_gas_base_heavy] | 2m 7.25s | 2m 48.30s | 2m 27.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_32b_exp_cover_windows] | 2m 4.67s | 2m 50.57s | 2m 27.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_1360n1] | 2m 7.12s | 2m 47.86s | 2m 27.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_1349n1] | 2m 5.84s | 2m 47.45s | 2m 26.64s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_128] | 2m 5.18s | 2m 47.95s | 2m 26.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_64] | 2m 6.52s | 2m 45.37s | 2m 25.94s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_32b_exp_96] | 2m 4.19s | 2m 46.95s | 2m 25.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_pawel_4] | 2m 3.88s | 2m 46.01s | 2m 24.95s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_65] | 2m 4.07s | 2m 45.40s | 2m 24.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_1360n2] | 2m 1.40s | 2m 40.05s | 2m 20.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_2_qube] | 2m 1.41s | 2m 36.41s | 2m 18.91s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_63] | 1m 52.07s | 2m 43.55s | 2m 17.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_exp_208_gas_balanced] | 1m 56.99s | 2m 37.29s | 2m 17.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_min_gas_balanced] | 1m 58.54s | 2m 35.28s | 2m 16.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_40] | 1m 57.31s | 2m 35.19s | 2m 16.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_600_gas_balanced] | 1m 51.46s | 2m 28.79s | 2m 10.13s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_36] | 1m 50.27s | 2m 27.89s | 2m 9.08s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_408_gas_balanced] | 1m 48.42s | 2m 27.13s | 2m 7.77s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_996_gas_balanced] | 1m 46.37s | 2m 26.28s | 2m 6.32s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_767_gas_balanced] | 1m 47.56s | 2m 23.69s | 2m 5.63s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_1152n1] | 1m 46.92s | 2m 23.28s | 2m 5.10s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_32] | 1m 41.29s | 2m 13.40s | 1m 57.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_2_square] | 1m 42.17s | 2m 6.65s | 1m 54.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_1_pow_0x10001] | 1m 34.06s | 2m 12.34s | 1m 53.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_64b_exp_512] | 1m 30.31s | 2m 12.52s | 1m 51.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_64b_exp_512] | 1m 27.15s | 2m 9.37s | 1m 48.25s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_255] | 1m 30.22s | 2m 5.81s | 1m 48.01s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_g1msm] | 2m 45.84s | 44.63s | 1m 45.23s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MOD-mod_bits_255] | 1m 25.62s | 1m 57.69s | 1m 41.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_200n2] | 1m 29.55s | 1m 53.52s | 1m 41.54s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_2_pow_0x10001] | 1m 26.45s | 1m 56.52s | 1m 41.48s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_200n3] | 1m 28.11s | 1m 53.62s | 1m 40.86s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_SMOD-mod_bits_255] | 1m 23.79s | 1m 54.37s | 1m 39.08s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_3_pow_0x10001] | 1m 17.13s | 1m 47.03s | 1m 32.08s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 2m 48.62s | 14.91s | 1m 31.76s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_128b_exp_1024] | 1m 11.76s | 1m 48.91s | 1m 30.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_128b_exp_1024] | 1m 11.90s | 1m 47.83s | 1m 29.87s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_4_pow_0x10001] | 1m 8.19s | 1m 42.79s | 1m 25.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_200n1] | 1m 13.78s | 1m 32.87s | 1m 23.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_256b_exp_1024] | 1m 5.11s | 1m 38.11s | 1m 21.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_256b_exp_1024] | 1m 5.52s | 1m 35.41s | 1m 20.47s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_g2msm] | 2m 19.76s | 14.82s | 1m 17.29s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_512b_exp_1024] | 1m 0.32s | 1m 28.35s | 1m 14.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_512b_exp_1024] | 1m 0.70s | 1m 27.06s | 1m 13.88s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_EXP-] | 49.41s | 1m 13.62s | 1m 1.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_5_pow_0x10001] | 49.29s | 1m 5.75s | 57.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_1_qube] | 51.46s | 1m 2.97s | 57.21s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_BLOBBASEFEE] | 50.23s | 1m 2.16s | 56.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_guido_3_even] | 47.22s | 57.43s | 52.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_1_square] | 46.42s | 55.92s | 51.17s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_diff_acc_to_diff_acc] | 40.36s | 42.84s | 41.60s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_STATICCALL] | 33.44s | 44.45s | 38.94s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_diff_acc_to_b] | 36.26s | 41.58s | 38.92s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PREVRANDAO] | 33.93s | 43.53s | 38.73s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_CALL] | 33.41s | 42.84s | 38.12s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_CALLCODE] | 33.05s | 42.81s | 37.93s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_DELEGATECALL] | 32.91s | 42.67s | 37.79s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SIGNEXTEND-] | 32.22s | 40.70s | 36.46s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_diff_acc] | 32.37s | 40.20s | 36.28s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_b] | 31.64s | 38.57s | 35.11s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_a] | 31.28s | 38.33s | 34.80s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_add_infinities] | 28.68s | 36.47s | 32.58s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_STATICCALL] | 28.61s | 35.45s | 32.03s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-zero-loop] | 24.80s | 38.99s | 31.89s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB of zero data-opcode_REVERT] | 35.40s | 27.78s | 31.59s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SAR-] | 25.50s | 36.77s | 31.13s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB of zero data-opcode_RETURN] | 34.55s | 27.41s | 30.98s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_CALL] | 27.34s | 34.53s | 30.93s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-empty-opcode_RETURN] | 27.70s | 34.09s | 30.89s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_CALLCODE] | 27.76s | 34.00s | 30.88s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-empty-opcode_REVERT] | 27.04s | 34.43s | 30.74s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-one-loop] | 24.14s | 37.23s | 30.68s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_DELEGATECALL] | 27.32s | 33.89s | 30.60s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 24.83s | 35.89s | 30.36s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 24.56s | 36.17s | 30.36s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 25.16s | 35.18s | 30.17s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 24.26s | 35.42s | 29.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_1024b_exp_1024] | 25.53s | 33.56s | 29.55s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 23.90s | 35.11s | 29.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_1024b_exp_1024] | 25.34s | 33.51s | 29.43s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-shift_right_SAR] | 23.25s | 33.27s | 28.26s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-empty] | 21.30s | 32.47s | 26.88s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 22.70s | 30.51s | 26.60s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 22.70s | 30.16s | 26.43s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 22.32s | 29.14s | 25.73s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_False-0 bytes] | 20.99s | 29.84s | 25.41s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-100 bytes] | 19.27s | 27.21s | 23.24s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SHL-] | 18.85s | 27.33s | 23.09s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-shift_right_SHR] | 18.40s | 26.14s | 22.27s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 18.02s | 25.59s | 21.80s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_RETURN] | 22.84s | 20.26s | 21.55s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_REVERT] | 22.29s | 19.68s | 20.98s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SHR-] | 17.03s | 24.94s | 20.98s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_MUL-] | 15.08s | 26.78s | 20.93s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH31] | 16.93s | 24.00s | 20.47s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_EQ-] | 16.42s | 23.71s | 20.07s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH30] | 16.23s | 23.85s | 20.04s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH32] | 16.84s | 23.14s | 19.99s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value] | 26.87s | 12.30s | 19.58s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH27] | 17.00s | 22.12s | 19.56s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 26.87s | 11.88s | 19.38s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH25] | 16.29s | 22.06s | 19.17s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_ADDRESS] | 16.89s | 21.41s | 19.15s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_ORIGIN] | 17.12s | 21.08s | 19.10s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH29] | 16.15s | 21.90s | 19.02s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_COINBASE] | 16.86s | 21.00s | 18.93s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 26.22s | 11.64s | 18.93s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSLOAD] | 26.03s | 11.71s | 18.87s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH26] | 16.49s | 20.97s | 18.73s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CALLER] | 16.55s | 20.78s | 18.66s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH28] | 16.00s | 21.14s | 18.57s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 25.46s | 11.57s | 18.52s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-615b5b] | 19.71s | 17.16s | 18.43s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH23] | 15.20s | 21.12s | 18.16s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH24] | 15.29s | 20.33s | 17.81s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH22] | 15.26s | 20.35s | 17.81s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_False-100 bytes] | 15.24s | 20.20s | 17.72s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-615b5b5b] | 18.38s | 16.42s | 17.40s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_1_exp_heavy] | 15.20s | 19.22s | 17.21s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-605b] | 17.89s | 16.12s | 17.01s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH21] | 14.74s | 18.08s | 16.41s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value] | 21.32s | 9.88s | 15.60s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SSTORE new value] | 13.64s | 17.47s | 15.55s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH20] | 13.78s | 17.27s | 15.53s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH19] | 13.90s | 17.08s | 15.49s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 12.53s | 18.27s | 15.40s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 12.49s | 18.24s | 15.36s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 12.47s | 18.04s | 15.26s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 12.22s | 18.13s | 15.18s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 12.33s | 17.99s | 15.16s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 12.44s | 17.87s | 15.16s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 12.27s | 17.94s | 15.11s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 12.39s | 17.74s | 15.06s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 12.02s | 18.07s | 15.04s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 12.30s | 17.77s | 15.04s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 12.24s | 17.81s | 15.02s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 12.11s | 17.89s | 15.00s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-605b5b] | 15.20s | 14.42s | 14.81s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-one blob and accessed] | 13.35s | 15.95s | 14.65s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH18] | 13.11s | 16.18s | 14.65s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH16] | 12.92s | 16.22s | 14.57s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH17] | 12.35s | 16.64s | 14.49s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH15] | 12.76s | 16.19s | 14.47s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-six blobs, access latest] | 13.31s | 15.36s | 14.33s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_TIMESTAMP] | ❌ SDK Crash | 14.15s | 14.15s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 15.45s | 12.42s | 13.94s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH14] | 12.40s | 15.42s | 13.91s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 15.31s | 12.21s | 13.76s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 15.21s | 12.18s | 13.69s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-max code size] | 15.54s | 11.43s | 13.48s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH13] | 11.71s | 15.08s | 13.40s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH11] | 11.54s | 14.93s | 13.23s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_10M-blockchain_test-value_bearing_True] | 17.44s | 8.82s | 13.13s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CHAINID] | 11.30s | 14.59s | 12.95s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH12] | 11.77s | 14.12s | 12.94s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH7] | 11.63s | 13.93s | 12.78s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_NUMBER] | 11.16s | 14.19s | 12.67s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH8] | 11.62s | 13.64s | 12.63s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_BASEFEE] | 11.40s | 13.85s | 12.63s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_GASPRICE] | 11.30s | 13.91s | 12.60s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH10] | 10.91s | 13.77s | 12.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_2_exp_heavy] | 10.49s | 13.70s | 12.10s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 9.81s | 13.97s | 11.89s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH6] | 10.76s | 12.99s | 11.88s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 10.18s | 13.51s | 11.84s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH9] | 10.69s | 12.93s | 11.81s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_GT-] | 9.87s | 13.70s | 11.78s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_MOD-] | 9.76s | 13.76s | 11.76s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 9.73s | 13.76s | 11.74s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 9.83s | 13.64s | 11.74s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH4] | 10.56s | 12.81s | 11.69s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH5] | 10.53s | 12.83s | 11.68s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_0] | 10.76s | 12.57s | 11.66s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 9.79s | 13.52s | 11.66s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_1000000] | 10.52s | 12.76s | 11.64s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 9.83s | 13.40s | 11.61s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 9.69s | 13.52s | 11.61s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP4] | 9.39s | 13.82s | 11.60s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 9.68s | 13.45s | 11.56s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_1000] | 10.61s | 12.46s | 11.54s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 15.00s | 8.03s | 11.52s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 9.60s | 13.40s | 11.50s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP2] | 9.54s | 13.47s | 11.50s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 9.56s | 13.43s | 11.49s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_GASLIMIT] | 10.37s | 12.59s | 11.48s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_LT-] | 9.50s | 13.45s | 11.47s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_100000] | 10.41s | 12.50s | 11.45s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_1] | 10.43s | 12.44s | 11.43s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 9.46s | 13.41s | 11.43s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP3] | 9.18s | 13.61s | 11.40s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 9.49s | 13.23s | 11.36s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP5] | 9.37s | 13.30s | 11.34s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 9.98s | 12.66s | 11.32s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP6] | 9.25s | 13.34s | 11.29s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 9.57s | 12.98s | 11.28s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CODESIZE] | 10.13s | 12.33s | 11.23s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP1] | 9.17s | 13.29s | 11.23s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH3] | 10.16s | 12.14s | 11.15s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_GAS] | 10.26s | 11.78s | 11.02s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH0] | 10.05s | 11.82s | 10.94s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH2] | 9.71s | 12.16s | 10.93s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP7] | 8.94s | 12.78s | 10.86s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-5b] | 10.68s | 10.72s | 10.70s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_True-0 bytes] | 9.02s | 12.32s | 10.67s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SGT-] | 8.81s | 12.46s | 10.64s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SLT-] | 8.79s | 12.37s | 10.58s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SUB-] | 8.83s | 12.31s | 10.57s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH1] | 9.79s | 11.29s | 10.54s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-00] | 10.04s | 11.00s | 10.52s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_ADD-] | 8.56s | 12.28s | 10.42s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 8.67s | 12.17s | 10.42s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 8.46s | 12.10s | 10.28s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-IDENTITY] | 12.29s | 8.20s | 10.24s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_heavy] | 9.24s | 10.99s | 10.12s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-no blobs] | 8.85s | 10.97s | 9.91s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 8.37s | 11.44s | 9.91s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-one blob but access non-existent index] | 8.94s | 10.85s | 9.89s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_4_exp_heavy] | 9.03s | 10.72s | 9.88s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP8] | 7.97s | 11.55s | 9.76s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_BYTE-] | 8.10s | 11.17s | 9.63s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 8.18s | 11.04s | 9.61s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP5] | 7.69s | 11.35s | 9.52s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 7.67s | 10.60s | 9.13s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP16] | 8.33s | 9.94s | 9.13s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_ISZERO] | 7.79s | 10.47s | 9.13s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-1MiB] | 11.73s | 6.50s | 9.11s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 7.69s | 10.54s | 9.11s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP4] | 8.14s | 10.05s | 9.10s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 7.57s | 10.60s | 9.09s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP13] | 8.21s | 9.95s | 9.08s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-SHA2-256] | 4.19s | 13.93s | 9.06s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP14] | 8.12s | 9.99s | 9.05s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 7.62s | 10.46s | 9.04s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP6] | 8.16s | 9.91s | 9.03s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 7.56s | 10.46s | 9.01s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP12] | 8.13s | 9.86s | 9.00s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 7.53s | 10.46s | 9.00s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 7.58s | 10.41s | 8.99s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 7.60s | 10.38s | 8.99s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 7.34s | 10.63s | 8.99s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP9] | 8.14s | 9.83s | 8.98s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 7.60s | 10.37s | 8.98s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP2] | 8.09s | 9.86s | 8.97s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 7.50s | 10.41s | 8.95s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP7] | 8.07s | 9.82s | 8.95s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP1] | 8.12s | 9.76s | 8.94s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP11] | 8.03s | 9.82s | 8.92s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_XOR-] | 7.37s | 10.46s | 8.92s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP3] | 8.00s | 9.82s | 8.91s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_OR-] | 7.31s | 10.49s | 8.90s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP8] | 8.08s | 9.71s | 8.89s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP15] | 7.91s | 9.86s | 8.88s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_1_2_2_scalar] | 7.91s | 9.84s | 8.87s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-from_origin_True-non_zero_value_False] | 7.46s | 10.16s | 8.81s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-from_origin_False-non_zero_value_True] | 7.46s | 10.15s | 8.80s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-from_origin_False-non_zero_value_False] | 7.53s | 10.06s | 8.79s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP10] | 7.86s | 9.73s | 8.79s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-100 bytes] | 7.31s | 10.23s | 8.77s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-from_origin_True-non_zero_value_True] | 7.47s | 10.01s | 8.74s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_AND-] | 7.15s | 10.33s | 8.74s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 7.43s | 9.96s | 8.70s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 11.82s | 5.57s | 8.70s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP9] | 7.16s | 10.19s | 8.68s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODESIZE] | 7.46s | 9.78s | 8.62s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 11.60s | 5.41s | 8.51s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-1MiB] | 10.97s | 5.98s | 8.47s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODESIZE] | 7.20s | 9.42s | 8.31s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SSTORE same value] | 7.17s | 9.39s | 8.28s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-calldata_length_1000] | 7.09s | 9.40s | 8.24s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 7.18s | 9.29s | 8.24s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 7.17s | 9.31s | 8.24s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-calldata_length_0] | 6.97s | 9.49s | 8.23s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 7.07s | 9.29s | 8.18s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-calldata_length_10000] | 6.90s | 9.40s | 8.15s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 7.07s | 9.16s | 8.11s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 6.92s | 9.29s | 8.11s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 6.94s | 9.26s | 8.10s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 6.97s | 9.14s | 8.06s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_2_scalar] | 7.43s | 8.63s | 8.03s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP10] | 6.67s | 9.26s | 7.96s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_True-100 bytes] | 6.68s | 8.78s | 7.73s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 6.54s | 8.91s | 7.72s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 6.51s | 8.83s | 7.67s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODEHASH] | 6.81s | 8.45s | 7.63s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-10KiB] | 6.99s | 8.19s | 7.59s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 6.40s | 8.78s | 7.59s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_NOT] | 6.47s | 8.69s | 7.58s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SMOD-] | 6.19s | 8.77s | 7.48s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP11] | 6.15s | 8.67s | 7.41s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODEHASH] | 6.62s | 8.16s | 7.39s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_BALANCE] | 6.42s | 7.82s | 7.12s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_10M-blockchain_test-value_bearing_False] | 9.49s | 4.66s | 7.08s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-512] | 6.25s | 7.78s | 7.01s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_BALANCE] | 6.14s | 7.86s | 7.00s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 6.00s | 7.94s | 6.97s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP12] | 5.70s | 7.80s | 6.75s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSLOAD] | 6.52s | 6.40s | 6.46s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP13] | 5.39s | 7.38s | 6.38s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB] | 5.44s | 6.81s | 6.12s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 5.18s | 6.84s | 6.01s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP14] | 5.08s | 6.84s | 5.96s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_False-1MiB] | 8.32s | 3.54s | 5.93s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 5.19s | 6.59s | 5.89s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP15] | 4.96s | 6.63s | 5.80s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0.25x max code size] | 4.81s | 6.12s | 5.46s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_False] | 4.84s | 6.07s | 5.46s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 8.04s | 2.87s | 5.46s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_True] | 4.86s | 5.97s | 5.41s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_True] | 4.91s | 5.90s | 5.40s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0.50x max code size] | 4.67s | 6.14s | 5.40s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP16] | 4.70s | 6.05s | 5.37s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_False] | 4.88s | 5.86s | 5.37s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SLOAD] | 4.67s | 5.97s | 5.32s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 8.82s | 1.81s | 5.32s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-val_mut_True-key_mut_True] | 4.84s | 5.77s | 5.30s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 8.82s | 1.74s | 5.28s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_zkevm_worst_case] | 4.73s | 5.76s | 5.25s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-val_mut_True-key_mut_False] | 4.70s | 5.76s | 5.23s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_True-1MiB] | 7.75s | 2.66s | 5.20s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-10KiB] | 4.63s | 5.53s | 5.08s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_False-10KiB] | 4.70s | 5.44s | 5.07s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0.25x max code size] | 3.11s | 6.92s | 5.01s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 4.25s | 5.46s | 4.86s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0.75x max code size] | 4.41s | 4.94s | 4.67s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 5.87s | 3.11s | 4.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_example_2] | 3.97s | 4.79s | 4.38s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-5KiB] | 3.90s | 4.70s | 4.30s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-zero_byte_True] | 5.85s | 2.34s | 4.10s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-RIPEMD-160] | 3.59s | 4.12s | 3.86s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_True-10KiB] | 3.06s | 3.72s | 3.39s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 3.12s | 3.59s | 3.36s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0.75x max code size] | 3.26s | 3.45s | 3.35s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0.50x max code size] | 3.12s | 3.58s | 3.35s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-max code size] | 3.22s | 3.44s | 3.33s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 3.05s | 3.60s | 3.32s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 3.07s | 3.49s | 3.28s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 4.19s | 2.05s | 3.12s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 2.78s | 2.65s | 2.71s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CREATE] | 3.47s | 1.54s | 2.50s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 2.31s | 2.14s | 2.22s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value] | 2.79s | 1.64s | 2.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 2.19s | 2.08s | 2.13s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_REVERT] | 3.14s | 1.04s | 2.09s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value] | 2.65s | 1.46s | 2.05s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 2.13s | 1.95s | 2.04s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_RETURN] | 3.03s | 1.03s | 2.03s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-val_mut_False-key_mut_True] | 1.88s | 1.96s | 1.92s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-val_mut_False-key_mut_False] | 1.97s | 1.85s | 1.91s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1MiB of zero data-opcode_RETURN] | 2.66s | 0.75s | 1.71s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1MiB of zero data-opcode_REVERT] | 2.55s | 0.72s | 1.63s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 1.82s | 1.30s | 1.56s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 1.75s | 1.31s | 1.53s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_infinities_2_scalar] | 1.72s | 1.28s | 1.50s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_True] | 1.99s | 0.99s | 1.49s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_infinities_32_byte_scalar] | 1.62s | 1.26s | 1.44s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_False] | 1.95s | 0.92s | 1.44s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-zero_byte_False] | 2.04s | 0.83s | 1.43s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE2] | 2.11s | 0.68s | 1.40s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE2] | 2.06s | 0.73s | 1.40s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE] | 1.95s | 0.76s | 1.35s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 1.70s | 1.00s | 1.35s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_True] | 1.84s | 0.84s | 1.34s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 1.59s | 1.05s | 1.32s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 1.64s | 1.00s | 1.32s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_False] | 1.81s | 0.77s | 1.29s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE] | 1.87s | 0.69s | 1.28s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 1.56s | 1.00s | 1.28s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 1.48s | 0.95s | 1.22s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 1.51s | 0.90s | 1.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 1.41s | 0.87s | 1.14s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_2_sets] | 1.41s | 0.87s | 1.14s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 1.43s | 0.84s | 1.14s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 1.49s | 0.77s | 1.13s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 1.41s | 0.80s | 1.11s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 1.36s | 0.79s | 1.08s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 1.39s | 0.74s | 1.07s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 1.34s | 0.74s | 1.04s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 1.28s | 0.80s | 1.03s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 1.35s | 0.66s | 1.00s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 1.28s | 0.57s | 0.93s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 1.30s | 0.55s | 0.93s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CREATE2] | 1.35s | 0.48s | 0.91s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 1.25s | 0.57s | 0.91s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 1.20s | 0.58s | 0.89s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE2] | 1.37s | 0.27s | 0.82s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE2] | 1.38s | 0.26s | 0.82s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE2] | 1.38s | 0.26s | 0.82s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE2] | 1.35s | 0.28s | 0.81s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE2] | 1.31s | 0.27s | 0.79s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE2] | 1.27s | 0.26s | 0.77s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE2] | 1.26s | 0.26s | 0.76s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE] | 1.27s | 0.26s | 0.76s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE2] | 1.20s | 0.26s | 0.73s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE] | 1.18s | 0.25s | 0.72s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE] | 1.12s | 0.25s | 0.68s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE] | 1.10s | 0.25s | 0.68s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE] | 1.09s | 0.25s | 0.67s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE] | 1.06s | 0.26s | 0.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | ❌ SDK Crash | 0.65s | 0.65s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE] | 0.98s | 0.30s | 0.64s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE] | 1.01s | 0.26s | 0.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 1.07s | 0.20s | 0.63s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 1.04s | 0.21s | 0.62s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_zero_input] | 0.94s | 0.29s | 0.62s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_1_pair] | 0.93s | 0.30s | 0.61s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 0.98s | 0.22s | 0.60s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 0.92s | 0.26s | 0.59s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 0.97s | 0.20s | 0.58s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 0.96s | 0.20s | 0.58s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 0.92s | 0.23s | 0.58s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 0.94s | 0.21s | 0.58s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 0.94s | 0.21s | 0.57s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 0.87s | 0.27s | 0.57s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 0.93s | 0.21s | 0.57s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 0.88s | 0.25s | 0.56s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 0.92s | 0.20s | 0.56s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 0.90s | 0.22s | 0.56s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 0.91s | 0.20s | 0.56s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 0.89s | 0.21s | 0.55s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 0.89s | 0.20s | 0.55s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 0.89s | 0.20s | 0.55s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 0.89s | 0.21s | 0.55s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 0.89s | 0.21s | 0.55s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 0.88s | 0.22s | 0.55s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 0.88s | 0.21s | 0.55s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 0.88s | 0.20s | 0.54s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 0.88s | 0.20s | 0.54s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 0.86s | 0.21s | 0.54s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 0.87s | 0.20s | 0.54s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 0.86s | 0.21s | 0.54s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 0.86s | 0.21s | 0.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 0.87s | 0.20s | 0.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 0.86s | 0.20s | 0.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 0.86s | 0.20s | 0.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 0.86s | 0.20s | 0.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 0.86s | 0.20s | 0.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 0.86s | 0.20s | 0.53s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_1_pair_empty] | 0.86s | 0.20s | 0.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 0.86s | 0.20s | 0.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 0.85s | 0.21s | 0.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 0.86s | 0.20s | 0.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 0.86s | 0.20s | 0.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 0.85s | 0.20s | 0.52s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 0.84s | 0.20s | 0.52s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_3_pair] | 0.83s | 0.20s | 0.52s |
| test_worst_compute.py::test_empty_block[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 0.68s | 0.11s | 0.40s |

## Summary

**Total unique test cases:** 528

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| risc0-v3.0.3 | 528 | 526 | 2 | 0 |
| sp1-v5.2.1 | 528 | 527 | 1 | 0 |

---

## reth


## Execution Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | openvm-v1.4.1 | risc0-v3.0.4 | sp1-v5.2.3 | zisk-v0.14.0 | Avg |
|-----------|-----------|-----------|-----------|-----------|----------|
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_5_qube] | 2m 53.54s | 13m 4.74s | 21m 9.03s | ❌ SDK Crash | 12m 22.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_4_qube] | 2m 56.88s | 12m 49.64s | 20m 8.95s | ❌ SDK Crash | 11m 58.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_5_square] | 2m 39.41s | 12m 26.00s | 19m 20.11s | ❌ SDK Crash | 11m 28.51s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_1024_exp_2] | 2m 44.59s | 11m 59.46s | 19m 19.15s | ❌ SDK Crash | 11m 21.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_4_square] | 2m 34.76s | 11m 51.99s | 18m 22.25s | ❌ SDK Crash | 10m 56.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_1045_gas_base_heavy] | 2m 34.57s | 11m 21.81s | 18m 10.07s | ❌ SDK Crash | 10m 42.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_800_gas_base_heavy] | 2m 34.18s | 11m 12.19s | 18m 16.66s | ❌ SDK Crash | 10m 41.01s |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_10M-blockchain_test-point_evaluation] | 3m 12.69s | 10m 42.61s | 18m 2.71s | ❌ SDK Crash | 10m 39.34s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_867_gas_base_heavy] | 2m 40.35s | 11m 10.71s | 17m 58.76s | ❌ SDK Crash | 10m 36.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_616_gas_base_heavy] | 2m 38.67s | 10m 55.17s | 18m 12.77s | ❌ SDK Crash | 10m 35.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_3_qube] | 2m 26.10s | 11m 22.75s | 17m 27.51s | ❌ SDK Crash | 10m 25.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_408_gas_base_heavy] | 2m 18.63s | 10m 25.47s | 16m 34.80s | ❌ SDK Crash | 9m 46.30s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_3_square] | 2m 14.38s | 10m 18.65s | 15m 58.73s | ❌ SDK Crash | 9m 30.58s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_264_exp_2] | 2m 16.33s | 9m 59.65s | 16m 14.24s | ❌ SDK Crash | 9m 30.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_256_exp_2] | 2m 19.80s | 9m 48.82s | 16m 7.64s | ❌ SDK Crash | 9m 25.42s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_min_gas_base_heavy] | 1m 52.14s | 8m 16.57s | 13m 22.87s | ❌ SDK Crash | 7m 50.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_8b_exp_896] | 1m 44.25s | 7m 20.69s | 11m 27.74s | ❌ SDK Crash | 6m 50.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_8_exp_896] | 1m 49.33s | 7m 8.47s | 11m 15.15s | ❌ SDK Crash | 6m 44.31s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_exp_298_gas_exp_heavy] | 1m 41.23s | 7m 11.87s | 11m 4.00s | ❌ SDK Crash | 6m 39.03s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_1_exp_heavy] | 1m 36.40s | 7m 8.92s | 10m 52.80s | ❌ SDK Crash | 6m 32.70s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_8_exp_648] | 1m 32.04s | 6m 49.05s | 10m 19.13s | ❌ SDK Crash | 6m 13.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_exp_215_gas_exp_heavy] | 1m 38.80s | 6m 35.99s | 10m 12.87s | ❌ SDK Crash | 6m 9.22s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_min_gas_exp_heavy] | 1m 37.46s | 6m 23.65s | 9m 59.85s | ❌ SDK Crash | 6m 0.32s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_guido_3_even] | 1m 17.20s | 5m 6.56s | 9m 6.17s | ❌ SDK Crash | 5m 9.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_2_qube] | 1m 1.40s | 4m 32.33s | 7m 15.61s | ❌ SDK Crash | 4m 16.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_852_gas_exp_heavy] | 1m 6.36s | 4m 24.96s | 6m 47.59s | ❌ SDK Crash | 4m 6.30s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_800_gas_exp_heavy] | 1m 7.51s | 4m 22.40s | 6m 46.75s | ❌ SDK Crash | 4m 5.55s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_600_gas_exp_heavy] | 1m 3.97s | 4m 15.28s | 6m 38.36s | ❌ SDK Crash | 3m 59.20s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_16b_exp_320] | 1m 2.11s | 4m 9.69s | 6m 24.40s | ❌ SDK Crash | 3m 52.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_2_square] | 56.78s | 4m 15.37s | 6m 37.58s | 3m 22.32s | 3m 48.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_pawel_2] | 1m 2.14s | 3m 57.92s | 6m 17.26s | ❌ SDK Crash | 3m 45.77s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_400_gas_exp_heavy] | 1m 4.15s | 3m 56.12s | 6m 9.81s | ❌ SDK Crash | 3m 43.36s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_pairing_check] | 1m 7.47s | 4m 24.67s | 6m 28.03s | 2m 35.70s | 3m 38.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 57.12s | 3m 51.14s | 6m 1.71s | ❌ SDK Crash | 3m 36.65s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_guido_2_even] | 56.71s | 3m 51.08s | 5m 59.99s | ❌ SDK Crash | 3m 35.93s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_fp_to_g1] | 1m 29.42s | 3m 3.52s | 7m 11.79s | 2m 24.37s | 3m 32.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_marius_1_even] | 50.58s | 3m 25.23s | 5m 24.24s | ❌ SDK Crash | 3m 13.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_765_gas_exp_heavy] | 48.77s | 3m 23.48s | 5m 10.09s | 3m 23.49s | 3m 11.46s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_24b_exp_168] | 47.80s | 3m 15.52s | 5m 9.97s | 3m 30.22s | 3m 10.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_pawel_3] | 49.65s | 3m 7.20s | 4m 55.67s | 3m 11.39s | 3m 0.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_32b_exp_256] | 44.48s | 3m 3.18s | 4m 52.63s | 3m 2.54s | 2m 55.71s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 43.67s | 3m 1.14s | 4m 42.20s | 3m 7.04s | 2m 53.51s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_32b_exp_256] | 43.59s | 3m 3.92s | 4m 49.96s | 2m 52.67s | 2m 52.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_example_1] | 42.96s | 3m 1.07s | 4m 41.87s | 2m 57.61s | 2m 50.87s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_zkevm_worst_case] | 45.11s | 2m 54.74s | 4m 40.74s | 3m 0.73s | 2m 50.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_1360_gas_balanced] | 42.58s | 3m 0.16s | 4m 44.53s | 2m 52.43s | 2m 49.92s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_32b_exp_96] | 40.62s | 2m 57.70s | 4m 35.23s | 2m 58.14s | 2m 47.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_3_exp_8] | 41.25s | 2m 46.65s | 4m 25.22s | 3m 10.77s | 2m 45.97s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_fp_to_g2] | 58.28s | 2m 37.76s | 5m 19.34s | 1m 53.53s | 2m 42.23s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_128] | 40.67s | 2m 49.23s | 4m 31.11s | 2m 47.88s | 2m 42.22s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_example_2] | 41.01s | 2m 46.80s | 4m 33.32s | 2m 46.16s | 2m 41.82s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_677_gas_base_heavy] | 40.48s | 2m 49.19s | 4m 29.20s | 2m 45.62s | 2m 41.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_32b_exp_96] | 39.85s | 2m 46.70s | 4m 25.97s | 2m 45.14s | 2m 39.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_pawel_4] | 39.24s | 2m 43.37s | 4m 27.61s | 2m 41.49s | 2m 37.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_65] | 41.67s | 2m 40.10s | 4m 22.14s | 2m 40.05s | 2m 35.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 37.60s | 2m 37.31s | 4m 11.87s | 2m 37.74s | 2m 31.13s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_guido_1_even] | 31.71s | 2m 19.50s | 3m 36.80s | 3m 29.19s | 2m 29.30s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_10M-blockchain_test-ecrecover] | 4m 4.81s | 1m 21.19s | 4m 12.98s | 15.21s | 2m 28.54s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1360n1] | 38.47s | 2m 36.98s | 4m 4.67s | 2m 32.86s | 2m 28.24s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_64] | 36.77s | 2m 34.43s | 4m 3.88s | 2m 36.11s | 2m 27.80s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_32b_exp_40] | 35.71s | 2m 28.46s | 3m 57.68s | 2m 45.52s | 2m 26.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_600_gas_balanced] | 35.73s | 2m 33.79s | 4m 10.59s | 2m 23.63s | 2m 25.94s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g2add] | 46.61s | 2m 30.40s | 4m 13.37s | 2m 4.63s | 2m 23.75s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_10M-blockchain_test-blake2f] | 43.52s | 2m 47.20s | 3m 33.20s | 2m 28.96s | 2m 23.22s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_996_gas_balanced] | 34.39s | 2m 37.29s | 4m 3.37s | 2m 15.02s | 2m 22.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_64b_exp_512] | 35.65s | 2m 34.21s | 4m 5.30s | 2m 10.02s | 2m 21.29s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_408_gas_balanced] | 35.19s | 2m 29.86s | 4m 1.42s | 2m 17.67s | 2m 21.03s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_min_gas_balanced] | 36.46s | 2m 24.72s | 3m 58.78s | 2m 22.40s | 2m 20.59s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_64b_exp_512] | 34.91s | 2m 32.91s | 4m 3.84s | 2m 9.08s | 2m 20.18s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_767_gas_balanced] | 34.64s | 2m 26.05s | 3m 59.44s | 2m 9.02s | 2m 17.28s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1360n2] | 33.71s | 2m 22.80s | 3m 46.88s | 2m 20.91s | 2m 16.07s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g1add] | 49.31s | 2m 2.68s | 4m 0.64s | 2m 9.03s | 2m 15.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_40] | 33.53s | 2m 18.93s | 3m 41.06s | 2m 26.36s | 2m 14.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1349n1] | 33.22s | 2m 20.82s | 3m 41.49s | 2m 20.47s | 2m 14.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_exp_208_gas_balanced] | 33.56s | 2m 18.11s | 3m 41.40s | 2m 21.03s | 2m 13.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_36] | 32.34s | 2m 14.86s | 3m 36.35s | 2m 20.41s | 2m 10.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_128b_exp_1024] | 30.98s | 2m 16.44s | 3m 42.31s | 1m 51.80s | 2m 5.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_128b_exp_1024] | 30.93s | 2m 18.55s | 3m 40.40s | 1m 50.40s | 2m 5.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_32b_exp_cover_windows] | 31.04s | 2m 10.70s | 3m 25.65s | 2m 8.65s | 2m 4.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_256b_exp_1024] | 28.79s | 2m 9.64s | 3m 31.72s | 1m 40.60s | 1m 57.69s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_256b_exp_1024] | 29.35s | 2m 9.19s | 3m 28.99s | 1m 40.38s | 1m 56.98s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_512b_exp_1024] | 28.36s | 2m 6.58s | 3m 28.65s | 1m 38.11s | 1m 55.43s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_512b_exp_1024] | 29.33s | 2m 6.12s | 3m 23.46s | 1m 36.43s | 1m 53.83s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_32] | 30.14s | 1m 54.94s | 3m 7.15s | 1m 56.98s | 1m 52.30s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 27.52s | 2m 2.54s | 3m 10.69s | 1m 47.19s | 1m 51.98s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 27.26s | 2m 3.98s | 3m 12.13s | 1m 44.13s | 1m 51.88s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g1msm] | 42.71s | ❌ SDK Crash | 3m 29.05s | 1m 16.64s | 1m 49.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 26.17s | 1m 58.90s | 3m 2.93s | 1m 34.34s | 1m 45.58s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 25.24s | 1m 54.89s | 2m 56.83s | 1m 28.69s | 1m 41.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 25.75s | 1m 53.16s | 2m 56.91s | 1m 28.95s | 1m 41.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_200n3] | 24.71s | 1m 39.90s | 2m 40.22s | 1m 44.77s | 1m 37.40s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_200n2] | 25.81s | 1m 38.66s | 2m 37.89s | 1m 46.89s | 1m 37.31s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1152n1] | 24.05s | 1m 39.70s | 2m 36.51s | 1m 43.00s | 1m 35.81s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_1_qube] | 21.88s | 1m 28.46s | 2m 25.37s | 1m 20.24s | 1m 23.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_1_square] | 19.49s | 1m 23.26s | 2m 13.38s | 1m 18.35s | 1m 18.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_200n1] | 18.71s | 1m 16.64s | 2m 1.78s | 1m 23.10s | 1m 15.06s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g2msm] | 23.74s | ❌ SDK Crash | 2m 14.98s | 57.15s | 1m 11.95s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_add] | 34.70s | 17.13s | 3m 8.01s | 44.00s | 1m 10.96s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_10M-blockchain_test-contract_balance_1] | 15.45s | 1m 0.46s | 1m 34.82s | 1m 50.36s | 1m 10.27s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_10M-blockchain_test-contract_balance_0] | 15.50s | 59.92s | 1m 34.88s | 1m 48.35s | 1m 9.66s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_191] | 19.06s | 1m 14.34s | 1m 51.47s | 1m 1.85s | 1m 6.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_1024b_exp_1024] | 16.15s | 1m 13.14s | 1m 58.73s | 56.10s | 1m 6.03s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_255] | 17.83s | 1m 11.37s | 1m 48.72s | 1m 1.13s | 1m 4.77s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_1024b_exp_1024] | 16.04s | 1m 11.22s | 1m 56.39s | 55.25s | 1m 4.72s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul] | 1m 3.72s | 1m 6.41s | 1m 55.72s | 8.38s | 1m 3.56s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 1m 1.95s | 1m 4.34s | 1m 52.95s | 8.69s | 1m 1.98s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 1m 1.93s | 1m 4.08s | 1m 50.83s | 8.46s | 1m 1.33s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_191] | 14.03s | 52.65s | 1m 17.36s | 50.46s | 48.62s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_191] | 13.53s | 52.18s | 1m 13.86s | 50.13s | 47.43s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_127] | 13.88s | 50.88s | 1m 16.55s | 45.37s | 46.67s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SDIV-0] | 14.41s | 49.47s | 1m 11.66s | 46.12s | 45.41s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SDIV-1] | 15.29s | 48.95s | 1m 11.08s | 45.07s | 45.10s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DELEGATECALL] | 3.98s | 1m 6.29s | 56.12s | 53.14s | 44.88s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_STATICCALL] | 3.92s | 1m 6.38s | 53.60s | 55.46s | 44.84s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_5_pair] | 42.02s | 1m 8.20s | 52.88s | 12.76s | 43.96s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 39.97s | 1m 9.06s | 53.63s | 11.93s | 43.65s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_two_pairings] | 40.22s | 1m 7.33s | 52.48s | 14.51s | 43.63s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALL] | 3.74s | 1m 5.88s | 50.50s | 54.20s | 43.58s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_4_pair] | 40.32s | 1m 7.81s | 52.73s | 13.42s | 43.57s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALLCODE] | 3.81s | 1m 6.71s | 48.60s | 54.08s | 43.30s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODECOPY] | 3.80s | 1m 6.19s | 51.62s | 51.15s | 43.19s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODESIZE] | 3.95s | 1m 4.57s | 48.70s | 53.62s | 42.71s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_2_pair] | 37.07s | 1m 4.75s | 53.25s | 14.31s | 42.34s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODEHASH] | 3.95s | 1m 6.34s | 49.45s | 48.86s | 42.15s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_one_pairing] | 36.37s | 1m 1.67s | 52.16s | 16.02s | 41.55s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DIV-0] | 12.02s | 42.29s | 1m 0.73s | 40.25s | 38.82s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_255] | 10.76s | 40.23s | 57.50s | 43.44s | 37.98s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_63] | 9.50s | 39.15s | 58.90s | 38.64s | 36.55s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DIV-1] | 11.62s | 39.20s | 56.69s | 38.08s | 36.40s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_127] | 10.83s | 40.10s | 58.60s | 34.63s | 36.04s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_255] | 10.43s | 38.49s | 56.28s | 38.82s | 36.01s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_191] | 8.78s | 37.00s | 53.71s | 39.18s | 34.67s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_add_1_2] | 39.13s | 17.04s | 37.28s | 41.16s | 33.65s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_127] | 9.98s | 37.96s | 54.95s | 31.21s | 33.52s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PREVRANDAO] | 4.88s | 19.56s | 44.59s | 1m 4.31s | 33.34s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_255] | 8.41s | 31.28s | 46.71s | 35.73s | 30.53s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_127] | 8.10s | 30.18s | 42.40s | 32.70s | 28.34s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 1.01s | 36.52s | 1m 5.86s | 5.00s | 27.10s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_63] | 6.46s | 27.21s | 38.91s | 28.56s | 25.28s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_63] | 5.91s | 25.33s | 35.84s | 28.13s | 23.80s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-empty-opcode_REVERT] | 5.43s | 18.05s | 29.13s | 35.64s | 22.06s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_STATICCALL] | 4.66s | 16.33s | 26.66s | 37.34s | 21.25s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero-loop] | 3.83s | 16.65s | 32.31s | 31.93s | 21.18s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_CALLCODE] | 4.50s | 16.19s | 26.61s | 36.49s | 20.95s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP3] | 3.35s | 16.24s | 30.84s | 33.25s | 20.92s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_CALL] | 4.45s | 15.90s | 27.01s | 35.07s | 20.61s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP11] | 3.41s | 16.45s | 29.15s | 33.21s | 20.55s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test-one-loop] | 3.68s | 16.30s | 29.01s | 33.20s | 20.54s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH32] | 3.00s | 12.43s | 26.72s | 39.79s | 20.48s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-empty-opcode_RETURN] | 4.54s | 15.93s | 26.31s | 34.68s | 20.36s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP12] | 3.45s | 16.62s | 29.07s | 32.19s | 20.33s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_63] | 5.06s | 19.96s | 29.60s | 26.67s | 20.32s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP7] | 3.58s | 16.04s | 29.37s | 32.02s | 20.25s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP6] | 3.36s | 16.69s | 29.05s | 31.38s | 20.12s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP4] | 3.55s | 16.05s | 28.82s | 31.92s | 20.09s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP8] | 3.33s | 16.39s | 29.53s | 31.03s | 20.07s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH31] | 2.86s | 11.90s | 27.98s | 37.20s | 19.98s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP13] | 3.35s | 16.17s | 29.43s | 30.82s | 19.94s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP2] | 3.47s | 15.99s | 28.83s | 31.46s | 19.94s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP5] | 3.37s | 16.29s | 29.06s | 31.03s | 19.94s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP15] | 3.39s | 16.11s | 29.54s | 30.44s | 19.87s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP16] | 3.38s | 16.10s | 28.79s | 30.96s | 19.81s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP9] | 3.34s | 15.96s | 28.89s | 30.90s | 19.77s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP10] | 3.36s | 16.15s | 29.11s | 30.44s | 19.76s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP14] | 3.40s | 16.12s | 28.78s | 30.55s | 19.71s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH30] | 2.90s | 11.80s | 26.87s | 37.25s | 19.71s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP1] | 3.40s | 15.73s | 28.58s | 30.59s | 19.57s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_ADDRESS] | 3.70s | 15.08s | 27.00s | 30.94s | 19.18s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALLER] | 3.39s | 14.97s | 27.08s | 30.75s | 19.05s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_ORIGIN] | 3.41s | 15.20s | 26.61s | 30.81s | 19.01s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH29] | 2.61s | 11.95s | 25.21s | 36.15s | 18.98s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXP-] | 5.77s | 23.70s | 33.52s | 12.87s | 18.96s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_COINBASE] | 3.40s | 14.93s | 26.82s | 30.46s | 18.90s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH27] | 2.81s | 11.36s | 24.65s | 36.24s | 18.77s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SGT-] | 3.25s | 13.57s | 27.08s | 29.77s | 18.42s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH28] | 2.77s | 11.54s | 24.49s | 34.59s | 18.35s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 4.02s | 14.62s | 23.56s | 29.93s | 18.03s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test-empty] | 3.67s | 13.89s | 27.42s | 26.23s | 17.80s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_diff_acc_to_diff_acc] | 17.88s | 8.37s | 38.54s | 6.35s | 17.78s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_STATICCALL] | 4.03s | 14.05s | 23.26s | 29.74s | 17.77s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_a] | 18.00s | 6.86s | 40.43s | 5.17s | 17.61s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_diff_acc_to_b] | 17.87s | 7.42s | 38.43s | 6.70s | 17.60s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_diff_acc] | 17.87s | 7.31s | 39.71s | 5.31s | 17.55s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH26] | 2.70s | 11.18s | 22.81s | 32.78s | 17.37s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_CALLCODE] | 3.89s | 13.78s | 23.08s | 28.70s | 17.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH24] | 2.40s | 10.45s | 21.68s | 34.00s | 17.13s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_CALL] | 4.08s | 13.81s | 22.61s | 27.95s | 17.11s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EQ-] | 3.01s | 12.94s | 23.46s | 28.19s | 16.90s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH25] | 2.46s | 10.81s | 22.00s | 31.79s | 16.76s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_b] | 17.76s | 6.95s | 37.12s | 5.23s | 16.76s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 2.88s | 12.64s | 22.03s | 28.46s | 16.50s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH22] | 2.10s | 9.83s | 22.12s | 31.09s | 16.28s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH23] | 2.21s | 9.71s | 23.50s | 29.15s | 16.14s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SMOD-] | 2.94s | 12.40s | 22.01s | 24.76s | 15.53s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SSTORE new value] | 3.20s | 12.25s | 19.25s | 26.13s | 15.21s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 3.42s | 11.95s | 19.77s | 25.44s | 15.14s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH21] | 2.17s | 9.51s | 20.19s | 28.01s | 14.97s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of zero data-opcode_REVERT] | 3.37s | 12.13s | 20.32s | 23.59s | 14.85s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH20] | 2.06s | 9.09s | 19.46s | 27.49s | 14.52s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH19] | 1.99s | 8.90s | 19.50s | 27.23s | 14.40s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SAR-] | 3.13s | 13.31s | 23.30s | 17.82s | 14.39s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_add_infinities] | 2.83s | 9.19s | 14.81s | 29.62s | 14.11s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_BLOBBASEFEE] | 2.55s | 11.88s | 21.66s | 19.99s | 14.02s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-six blobs, access latest] | 2.41s | 9.57s | 17.00s | 26.56s | 13.88s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_10M-blockchain_test-shift_right_SAR] | 2.93s | 13.47s | 21.31s | 16.89s | 13.65s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-one blob and accessed] | 2.51s | 9.36s | 16.95s | 25.69s | 13.63s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of zero data-opcode_RETURN] | 3.05s | 11.05s | 18.31s | 21.99s | 13.60s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_GASPRICE] | 2.58s | 11.39s | 20.84s | 18.99s | 13.45s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH18] | 1.83s | 8.84s | 17.50s | 24.98s | 13.29s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_MOD-] | 2.33s | 9.94s | 17.66s | 22.34s | 13.06s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH15] | 1.86s | 7.94s | 18.25s | 22.72s | 12.69s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH17] | 1.87s | 8.29s | 16.91s | 23.64s | 12.68s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH16] | 1.76s | 8.32s | 16.67s | 23.78s | 12.63s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_10M-blockchain_test-shift_right_SHR] | 2.81s | 11.67s | 19.63s | 15.12s | 12.31s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH14] | 1.74s | 7.96s | 17.21s | 21.73s | 12.16s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SHR-] | 2.68s | 11.72s | 18.68s | 15.43s | 12.13s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_True-empty_authority_False] | 0.77s | 11.13s | 29.41s | 6.52s | 11.96s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SHL-] | 2.86s | 11.51s | 18.33s | 14.60s | 11.82s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_False-empty_authority_False] | 0.76s | 11.11s | 29.80s | 5.39s | 11.77s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 2.67s | 9.22s | 14.95s | 20.21s | 11.76s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 2.14s | 8.63s | 16.34s | 19.69s | 11.70s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_False-empty_authority_True] | 0.79s | 11.32s | 29.51s | 5.12s | 11.69s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH13] | 1.67s | 7.65s | 14.73s | 22.42s | 11.62s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 1.97s | 8.42s | 13.07s | 22.91s | 11.59s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 2.50s | 10.50s | 16.93s | 16.28s | 11.55s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 2.48s | 10.48s | 17.58s | 15.59s | 11.53s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 1.97s | 8.74s | 12.85s | 22.54s | 11.53s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_True-empty_authority_True] | 0.79s | 11.05s | 29.28s | 4.83s | 11.49s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 2.05s | 8.37s | 12.89s | 22.33s | 11.41s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 1.95s | 8.36s | 12.69s | 22.57s | 11.39s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_NUMBER] | 2.13s | 9.47s | 16.75s | 17.03s | 11.34s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 1.96s | 8.60s | 12.81s | 21.95s | 11.33s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 2.05s | 8.91s | 12.90s | 21.45s | 11.33s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-0 bytes] | 2.44s | 10.34s | 16.58s | 15.81s | 11.29s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 0.34s | 19.09s | 11.98s | 13.75s | 11.29s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 1.97s | 8.58s | 12.95s | 21.65s | 11.29s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 2.14s | 8.44s | 16.73s | 17.69s | 11.25s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 2.13s | 8.53s | 16.39s | 17.91s | 11.24s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 1.98s | 8.53s | 12.66s | 21.72s | 11.22s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH11] | 1.66s | 7.57s | 13.73s | 21.91s | 11.22s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_TIMESTAMP] | 2.09s | 9.48s | 16.40s | 16.75s | 11.18s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 1.99s | 8.48s | 13.16s | 20.90s | 11.13s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 2.18s | 8.61s | 16.27s | 17.32s | 11.09s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 2.06s | 8.44s | 13.04s | 20.83s | 11.09s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 2.14s | 8.46s | 12.77s | 20.80s | 11.04s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 1.97s | 8.34s | 12.64s | 20.97s | 10.98s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 2.18s | 8.63s | 16.38s | 16.63s | 10.95s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 2.11s | 8.70s | 16.38s | 16.41s | 10.90s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 2.15s | 8.69s | 16.51s | 16.21s | 10.89s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_True-key_mut_True] | 2.30s | 9.52s | 13.54s | 18.11s | 10.87s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 2.14s | 8.36s | 16.39s | 16.49s | 10.85s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CHAINID] | 2.03s | 8.79s | 15.76s | 16.65s | 10.80s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 2.13s | 8.67s | 16.78s | 15.64s | 10.80s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0 bytes] | 2.58s | 10.13s | 16.16s | 14.33s | 10.80s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH12] | 1.64s | 7.44s | 13.56s | 20.56s | 10.80s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 2.12s | 8.48s | 16.28s | 16.24s | 10.78s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_1] | 2.00s | 9.05s | 15.56s | 16.50s | 10.78s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 2.24s | 8.49s | 16.34s | 16.02s | 10.77s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SIGNEXTEND-] | 2.38s | 10.19s | 16.66s | 13.78s | 10.75s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 2.14s | 8.51s | 16.52s | 15.79s | 10.74s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0 bytes] | 2.42s | 9.85s | 16.03s | 14.66s | 10.74s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_True-key_mut_False] | 2.27s | 9.12s | 13.45s | 18.10s | 10.73s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_MUL-] | 2.70s | 10.49s | 19.19s | 10.45s | 10.71s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1.98s | 8.56s | 15.41s | 16.83s | 10.70s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_BASEFEE] | 2.04s | 8.73s | 15.86s | 16.11s | 10.68s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_0] | 2.01s | 9.18s | 15.33s | 15.99s | 10.63s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 2.36s | 8.37s | 14.07s | 17.62s | 10.61s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_GASLIMIT] | 1.98s | 8.57s | 15.19s | 16.66s | 10.60s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1.94s | 8.58s | 15.03s | 16.83s | 10.59s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 2.07s | 8.50s | 15.09s | 16.15s | 10.45s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_1000] | 2.04s | 8.78s | 15.18s | 15.76s | 10.44s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 2.32s | 9.08s | 14.49s | 15.85s | 10.43s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SSTORE same value] | 2.36s | 8.43s | 13.29s | 17.09s | 10.29s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-100 bytes] | 2.18s | 8.95s | 14.64s | 15.25s | 10.25s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH0] | 1.88s | 8.31s | 14.41s | 15.91s | 10.13s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 2.32s | 8.93s | 14.14s | 15.00s | 10.10s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 2.15s | 8.64s | 13.81s | 15.43s | 10.01s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1.74s | 7.34s | 12.84s | 16.31s | 9.56s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-100 bytes] | 1.96s | 7.97s | 13.02s | 15.02s | 9.49s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH10] | 1.52s | 7.05s | 11.00s | 17.66s | 9.30s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-0 bytes] | 1.88s | 7.70s | 12.96s | 13.89s | 9.11s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH9] | 1.52s | 6.40s | 10.75s | 17.02s | 8.92s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 1.95s | 7.99s | 12.37s | 12.95s | 8.81s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_False-non_zero_value_True] | 1.80s | 7.70s | 13.08s | 12.58s | 8.79s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_True-non_zero_value_False] | 1.73s | 7.73s | 12.66s | 13.04s | 8.79s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH7] | 1.51s | 6.67s | 10.88s | 15.94s | 8.75s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_False-non_zero_value_False] | 1.74s | 7.64s | 12.86s | 12.39s | 8.65s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_True-non_zero_value_True] | 1.79s | 7.61s | 12.81s | 12.32s | 8.63s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH8] | 1.46s | 6.42s | 10.43s | 16.19s | 8.62s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SLT-] | 1.64s | 7.39s | 12.19s | 12.84s | 8.52s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH6] | 1.44s | 6.26s | 10.13s | 16.11s | 8.49s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 1.63s | 6.73s | 11.00s | 13.04s | 8.10s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 10.69s | 1.22s | 12.91s | 7.21s | 8.01s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 1.52s | 5.66s | 9.82s | 14.16s | 7.79s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH5] | 1.34s | 6.08s | 9.46s | 14.28s | 7.79s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1.57s | 6.73s | 10.32s | 12.46s | 7.77s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1.60s | 6.04s | 8.85s | 14.41s | 7.72s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SUB-] | 1.75s | 7.41s | 11.26s | 10.17s | 7.65s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH4] | 1.30s | 5.97s | 9.24s | 13.88s | 7.59s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 1.55s | 6.28s | 10.81s | 11.74s | 7.59s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test-calldata_length_1000] | 1.40s | 6.36s | 9.80s | 12.73s | 7.57s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 1.37s | 6.27s | 9.68s | 12.94s | 7.57s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-5b] | 1.16s | 4.88s | 11.21s | 12.95s | 7.55s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 1.39s | 6.32s | 9.85s | 12.62s | 7.55s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_ADD-] | 1.57s | 7.01s | 10.68s | 10.85s | 7.53s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 1.37s | 6.23s | 9.77s | 12.66s | 7.51s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-one blob but access non-existent index] | 1.40s | 6.08s | 9.20s | 13.21s | 7.47s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test-calldata_length_0] | 1.46s | 6.28s | 9.63s | 12.43s | 7.45s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test-calldata_length_10000] | 1.39s | 6.61s | 9.71s | 11.94s | 7.41s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 1.51s | 6.18s | 9.68s | 12.15s | 7.38s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 1.39s | 6.21s | 9.76s | 12.07s | 7.36s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 1.38s | 6.26s | 9.93s | 11.69s | 7.31s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 1.24s | 5.82s | 8.86s | 12.84s | 7.19s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-no blobs] | 1.46s | 6.08s | 8.83s | 12.17s | 7.13s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_BYTE-] | 1.41s | 6.29s | 9.95s | 10.85s | 7.12s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH3] | 1.29s | 5.81s | 8.97s | 12.38s | 7.11s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 1.26s | 5.83s | 9.42s | 11.39s | 6.97s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP2] | 1.23s | 5.47s | 9.48s | 11.56s | 6.94s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 1.35s | 5.84s | 8.86s | 11.67s | 6.93s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_GT-] | 1.38s | 5.97s | 9.73s | 10.32s | 6.85s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0 bytes] | 1.40s | 5.73s | 9.61s | 10.51s | 6.81s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 1.30s | 5.81s | 8.95s | 11.04s | 6.78s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP6] | 1.24s | 5.59s | 9.40s | 10.83s | 6.76s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_LT-] | 1.35s | 5.99s | 9.64s | 9.91s | 6.72s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-100 bytes] | 1.32s | 5.50s | 8.76s | 11.28s | 6.71s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 1.35s | 5.85s | 8.88s | 10.75s | 6.71s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP11] | 1.25s | 5.55s | 8.93s | 11.10s | 6.71s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 1.35s | 5.85s | 8.95s | 10.62s | 6.69s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 1.33s | 5.88s | 8.88s | 10.62s | 6.68s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 1.24s | 5.85s | 8.88s | 10.73s | 6.67s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP7] | 1.26s | 5.60s | 9.22s | 10.58s | 6.67s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP10] | 1.31s | 5.55s | 8.98s | 10.79s | 6.66s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 1.32s | 5.85s | 8.87s | 10.49s | 6.63s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 1.26s | 5.92s | 9.01s | 10.34s | 6.63s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_BALANCE] | 1.28s | 4.87s | 7.43s | 12.84s | 6.60s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 1.26s | 5.84s | 9.03s | 10.27s | 6.60s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP5] | 1.28s | 5.53s | 9.23s | 10.33s | 6.59s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-1MiB] | 1.17s | 8.09s | 8.11s | 8.93s | 6.58s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_OR-] | 1.34s | 5.65s | 9.33s | 9.96s | 6.57s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0 bytes] | 1.37s | 5.56s | 9.45s | 9.87s | 6.56s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 1.24s | 5.78s | 8.96s | 10.27s | 6.56s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_AND-] | 1.33s | 5.74s | 9.39s | 9.70s | 6.54s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP1] | 1.30s | 5.84s | 8.83s | 10.05s | 6.50s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 1.28s | 4.83s | 7.50s | 12.35s | 6.49s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP9] | 1.26s | 5.66s | 9.12s | 9.82s | 6.46s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP15] | 1.26s | 5.61s | 8.91s | 10.05s | 6.46s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP3] | 1.23s | 5.51s | 8.87s | 10.17s | 6.45s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP4] | 1.23s | 5.65s | 8.96s | 9.94s | 6.45s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP12] | 1.27s | 5.49s | 9.21s | 9.77s | 6.43s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_XOR-] | 1.37s | 5.68s | 9.36s | 9.17s | 6.40s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 1.22s | 5.32s | 8.13s | 10.85s | 6.38s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-100 bytes] | 1.28s | 5.18s | 8.66s | 10.38s | 6.38s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 1.21s | 5.34s | 7.96s | 10.99s | 6.37s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP16] | 1.28s | 5.50s | 8.96s | 9.62s | 6.34s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP14] | 1.27s | 5.52s | 8.97s | 9.50s | 6.32s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP8] | 1.23s | 5.50s | 8.92s | 9.57s | 6.31s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP13] | 1.25s | 5.50s | 8.94s | 9.53s | 6.30s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-10KiB] | 1.52s | 4.86s | 8.76s | 9.94s | 6.27s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH2] | 1.20s | 5.24s | 8.36s | 10.08s | 6.22s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1.35s | 4.92s | 8.90s | 9.66s | 6.21s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH1] | 1.15s | 4.71s | 7.95s | 10.59s | 6.10s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1.28s | 5.49s | 7.96s | 9.67s | 6.10s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 1.27s | 4.90s | 7.49s | 9.87s | 5.88s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 1.12s | 4.73s | 6.99s | 10.53s | 5.84s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_False-key_mut_False] | 1.21s | 4.58s | 6.49s | 11.03s | 5.83s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 0.79s | 10.52s | 6.01s | 5.82s | 5.78s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 1.14s | 4.30s | 6.06s | 11.06s | 5.64s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-1MiB] | 0.85s | 8.27s | 7.41s | 5.69s | 5.55s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_False-key_mut_True] | 1.23s | 4.42s | 6.43s | 9.93s | 5.50s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SLOAD] | 1.28s | 4.39s | 6.77s | 9.49s | 5.48s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 1.05s | 3.62s | 6.54s | 10.12s | 5.33s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 1.10s | 4.05s | 5.77s | 10.38s | 5.32s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_BALANCE] | 1.09s | 4.02s | 5.68s | 9.81s | 5.15s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-10KiB] | 1.02s | 3.61s | 5.98s | 9.75s | 5.09s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 1.00s | 3.47s | 5.15s | 10.53s | 5.04s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 0.99s | 3.43s | 5.10s | 10.41s | 4.98s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-00] | 0.79s | 4.47s | 6.35s | 8.31s | 4.98s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 0.94s | 3.44s | 5.18s | 10.26s | 4.96s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-512] | 1.08s | 3.92s | 5.87s | 8.90s | 4.94s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 0.95s | 3.52s | 5.24s | 10.03s | 4.93s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 1.00s | 3.42s | 5.06s | 10.11s | 4.90s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-max code size] | 0.95s | 3.37s | 5.21s | 10.02s | 4.89s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-605b5b] | 0.81s | 4.43s | 5.39s | 8.30s | 4.73s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 0.88s | 3.93s | 5.85s | 7.86s | 4.63s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-1MiB] | 0.64s | 6.74s | 4.74s | 6.37s | 4.62s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB] | 1.05s | 3.68s | 5.61s | 8.14s | 4.62s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_True-key_mut_False] | 0.99s | 3.65s | 5.39s | 8.35s | 4.59s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 0.57s | 6.62s | 4.39s | 6.71s | 4.57s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-10KiB] | 1.04s | 3.42s | 6.55s | 6.73s | 4.43s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_True-key_mut_True] | 0.97s | 3.49s | 5.16s | 7.88s | 4.38s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-615b5b5b] | 0.68s | 4.22s | 4.54s | 7.45s | 4.22s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value] | 0.68s | 3.71s | 4.36s | 7.87s | 4.15s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 1.75s | 1.50s | 8.67s | 4.40s | 4.08s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 0.73s | 3.96s | 4.58s | 6.97s | 4.06s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 0.79s | 3.95s | 4.53s | 6.89s | 4.04s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 0.63s | 4.71s | 4.05s | 6.51s | 3.98s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 0.85s | 2.80s | 4.08s | 7.89s | 3.90s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-1MiB] | 0.48s | 6.95s | 3.18s | 4.89s | 3.88s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-605b] | 0.60s | 4.09s | 4.09s | 6.57s | 3.84s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-5KiB] | 0.77s | 2.98s | 4.83s | 6.65s | 3.81s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 0.45s | 6.50s | 3.52s | 4.68s | 3.79s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSLOAD] | 0.62s | 3.58s | 4.23s | 6.31s | 3.69s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 0.40s | 8.15s | 2.17s | 3.99s | 3.68s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 0.39s | 8.29s | 2.05s | 3.80s | 3.63s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-max code size] | 0.72s | 2.60s | 3.95s | 7.21s | 3.62s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_10M-blockchain_test-value_bearing_True] | 0.60s | 2.88s | 3.28s | 7.28s | 3.51s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 0.68s | 2.62s | 4.19s | 6.12s | 3.40s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-615b5b] | 0.52s | 3.96s | 3.52s | 5.59s | 3.39s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 0.66s | 2.51s | 4.00s | 6.37s | 3.38s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 0.68s | 2.63s | 4.08s | 6.15s | 3.38s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-10KiB] | 0.73s | 2.61s | 4.07s | 6.00s | 3.35s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 0.68s | 2.56s | 3.95s | 6.17s | 3.34s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 0.70s | 2.60s | 3.99s | 5.97s | 3.31s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 0.66s | 2.59s | 3.98s | 5.93s | 3.29s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value] | 0.55s | 2.81s | 3.34s | 5.41s | 3.03s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 0.47s | 2.10s | 2.94s | 5.54s | 2.76s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_10M-blockchain_test-value_bearing_False] | 0.51s | 2.29s | 2.57s | 5.63s | 2.75s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_1_2_2_scalar] | 1.83s | 1.52s | 2.05s | 4.87s | 2.56s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSLOAD] | 0.53s | 2.23s | 2.41s | 4.85s | 2.50s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 0.47s | 1.95s | 2.24s | 5.11s | 2.44s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 0.45s | 2.40s | 1.88s | 4.72s | 2.36s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 0.51s | 1.71s | 2.26s | 4.58s | 2.27s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 0.47s | 1.54s | 2.02s | 4.61s | 2.16s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_100000] | 0.44s | 1.59s | 1.78s | 4.72s | 2.13s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_False-key_mut_False] | 0.42s | 1.50s | 1.75s | 4.57s | 2.06s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_byte_True] | 0.27s | 2.31s | 1.41s | 4.09s | 2.02s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_False-key_mut_True] | 0.39s | 1.42s | 1.63s | 4.22s | 1.91s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 0.28s | 1.57s | 1.11s | 4.66s | 1.91s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_infinities_2_scalar] | 0.43s | 1.42s | 1.78s | 3.86s | 1.87s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 0.30s | 1.10s | 1.01s | 4.13s | 1.63s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 0.26s | 0.80s | 0.60s | 4.51s | 1.54s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 0.26s | 1.91s | 0.59s | 3.34s | 1.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 0.31s | 1.04s | 1.06s | 3.67s | 1.52s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 0.25s | 1.80s | 0.58s | 3.38s | 1.50s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 0.24s | 0.96s | 0.62s | 4.16s | 1.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 0.26s | 0.92s | 0.61s | 4.10s | 1.47s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 0.24s | 0.75s | 0.50s | 4.40s | 1.47s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_False] | 0.24s | 0.79s | 0.41s | 4.29s | 1.43s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 0.28s | 0.88s | 0.77s | 3.65s | 1.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 0.34s | 0.89s | 0.77s | 3.48s | 1.37s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value] | 0.30s | 0.93s | 0.71s | 3.45s | 1.34s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_byte_False] | 0.23s | 0.89s | 0.52s | 3.70s | 1.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 0.26s | 0.83s | 0.54s | 3.70s | 1.33s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 0.20s | 0.65s | 0.16s | 4.29s | 1.33s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 0.20s | 0.65s | 0.16s | 4.27s | 1.32s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value] | 0.28s | 0.93s | 0.72s | 3.33s | 1.31s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of zero data-opcode_RETURN] | 0.24s | 1.46s | 0.50s | 3.04s | 1.31s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of zero data-opcode_REVERT] | 0.23s | 1.43s | 0.49s | 3.08s | 1.31s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 0.24s | 0.80s | 0.47s | 3.71s | 1.30s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 0.26s | 0.88s | 0.66s | 3.39s | 1.30s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 0.24s | 0.86s | 0.56s | 3.50s | 1.29s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CREATE] | 0.28s | 0.91s | 0.70s | 3.27s | 1.29s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 0.29s | 0.88s | 0.60s | 3.39s | 1.29s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 0.27s | 0.88s | 0.67s | 3.34s | 1.29s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 0.25s | 0.80s | 0.61s | 3.35s | 1.25s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 0.20s | 0.65s | 0.17s | 3.92s | 1.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 0.26s | 0.87s | 0.54s | 3.22s | 1.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 0.24s | 0.66s | 0.23s | 3.75s | 1.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 0.26s | 0.79s | 0.59s | 3.22s | 1.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with zero data-opcode_CREATE2] | 0.24s | 0.68s | 0.35s | 3.59s | 1.21s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes with value-opcode_CREATE] | 0.24s | 0.77s | 0.46s | 3.35s | 1.21s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes without value-opcode_CREATE] | 0.26s | 0.82s | 0.44s | 3.30s | 1.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 0.24s | 0.78s | 0.49s | 3.28s | 1.20s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 0.25s | 0.80s | 0.46s | 3.24s | 1.18s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_True] | 0.25s | 0.83s | 0.52s | 3.13s | 1.18s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 0.20s | 0.62s | 0.16s | 3.75s | 1.18s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_False] | 0.25s | 0.80s | 0.52s | 3.15s | 1.18s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CREATE2] | 0.23s | 0.71s | 0.37s | 3.40s | 1.18s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 0.25s | 0.82s | 0.48s | 3.15s | 1.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 0.25s | 0.78s | 0.49s | 3.16s | 1.17s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_2_sets] | 0.30s | 0.89s | 0.52s | 2.96s | 1.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 0.23s | 0.62s | 0.16s | 3.65s | 1.17s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 0.24s | 0.81s | 0.48s | 3.12s | 1.16s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 0.24s | 0.67s | 0.23s | 3.50s | 1.16s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 0.25s | 0.79s | 0.50s | 3.10s | 1.16s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes with value-opcode_CREATE2] | 0.24s | 0.79s | 0.50s | 3.09s | 1.16s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 0.26s | 0.84s | 0.50s | 3.03s | 1.16s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 0.23s | 0.67s | 0.27s | 3.46s | 1.15s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 0.22s | 0.61s | 0.18s | 3.54s | 1.14s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes without value-opcode_CREATE2] | 0.24s | 0.78s | 0.47s | 3.06s | 1.14s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 0.21s | 0.68s | 0.28s | 3.31s | 1.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 0.20s | 0.64s | 0.16s | 3.47s | 1.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 0.22s | 0.62s | 0.16s | 3.45s | 1.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 0.20s | 0.71s | 0.17s | 3.32s | 1.10s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_True] | 0.26s | 0.77s | 0.41s | 2.92s | 1.09s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 0.24s | 0.66s | 0.24s | 3.20s | 1.08s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 0.20s | 0.61s | 0.17s | 3.35s | 1.08s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_1000000] | 0.22s | 1.04s | 0.28s | 2.76s | 1.07s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_zero_input] | 0.21s | 0.66s | 0.23s | 3.17s | 1.07s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 0.22s | 0.65s | 0.28s | 3.11s | 1.06s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 0.22s | 0.66s | 0.16s | 3.17s | 1.05s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_1_pair] | 0.24s | 0.62s | 0.23s | 3.10s | 1.05s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 0.20s | 0.61s | 0.18s | 3.19s | 1.04s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 0.24s | 0.66s | 0.22s | 3.06s | 1.04s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with zero data-opcode_CREATE] | 0.20s | 0.65s | 0.22s | 3.06s | 1.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 0.21s | 0.63s | 0.17s | 3.09s | 1.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 0.20s | 0.66s | 0.17s | 3.03s | 1.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 0.20s | 0.61s | 0.20s | 3.06s | 1.01s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 0.22s | 0.71s | 0.27s | 2.86s | 1.01s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 0.20s | 0.62s | 0.16s | 3.07s | 1.01s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 0.21s | 0.65s | 0.17s | 3.02s | 1.01s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 0.23s | 0.64s | 0.16s | 3.00s | 1.01s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 0.20s | 0.62s | 0.17s | 3.04s | 1.01s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 0.22s | 0.63s | 0.17s | 3.00s | 1.00s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 0.22s | 0.62s | 0.16s | 3.00s | 1.00s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 0.21s | 0.62s | 0.17s | 3.00s | 1.00s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 0.20s | 0.62s | 0.20s | 2.97s | 1.00s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 0.22s | 0.63s | 0.17s | 2.96s | 0.99s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 0.20s | 0.68s | 0.24s | 2.85s | 0.99s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 0.20s | 0.65s | 0.24s | 2.87s | 0.99s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 0.21s | 0.62s | 0.17s | 2.96s | 0.99s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 0.20s | 0.62s | 0.17s | 2.96s | 0.99s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 0.20s | 0.64s | 0.16s | 2.94s | 0.99s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 0.20s | 0.62s | 0.18s | 2.94s | 0.99s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 0.21s | 0.69s | 0.27s | 2.78s | 0.99s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 0.20s | 0.61s | 0.19s | 2.92s | 0.98s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 0.23s | 0.61s | 0.17s | 2.90s | 0.98s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 0.23s | 0.62s | 0.16s | 2.89s | 0.98s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_1_pair_empty] | 0.21s | 0.63s | 0.16s | 2.89s | 0.97s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 0.24s | 0.68s | 0.24s | 2.73s | 0.97s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 0.20s | 0.63s | 0.18s | 2.85s | 0.96s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 0.21s | 0.66s | 0.22s | 2.74s | 0.96s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 0.20s | 0.65s | 0.16s | 2.83s | 0.96s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 0.20s | 0.62s | 0.16s | 2.86s | 0.96s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 0.20s | 0.62s | 0.16s | 2.85s | 0.96s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 0.24s | 0.66s | 0.22s | 2.71s | 0.95s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 0.23s | 0.66s | 0.16s | 2.77s | 0.95s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 0.22s | 0.62s | 0.17s | 2.76s | 0.94s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 0.19s | 0.64s | 0.17s | 2.73s | 0.93s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 0.26s | 0.61s | 0.17s | 2.68s | 0.93s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 0.20s | 0.65s | 0.17s | 2.70s | 0.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_3_pair] | 0.22s | 0.63s | 0.18s | 2.69s | 0.93s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 0.16s | 0.57s | 0.07s | 2.78s | 0.89s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| openvm-v1.4.1 | 533 | 533 | 0 | 0 |
| risc0-v3.0.4 | 533 | 531 | 2 | 0 |
| sp1-v5.2.3 | 533 | 533 | 0 | 0 |
| zisk-v0.14.0 | 533 | 499 | 34 | 0 |

---

