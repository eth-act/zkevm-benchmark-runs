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

| Test Case | openvm-v1.4.0 | risc0-v3.0.3 | sp1-v5.2.1 | zisk-v0.12.0 | Avg |
|-----------|-----------|-----------|-----------|-----------|----------|
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_5_qube] | 5m 11.04s | 14m 9.42s | 21m 52.56s | ❌ SDK Crash | 13m 44.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_4_qube] | 5m 5.42s | 13m 54.72s | 21m 25.51s | ❌ SDK Crash | 13m 28.55s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_1024_exp_2] | 4m 41.71s | 12m 50.77s | 20m 15.67s | ❌ SDK Crash | 12m 36.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_5_square] | 4m 47.23s | 12m 57.34s | 20m 0.61s | ❌ SDK Crash | 12m 35.06s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_4_square] | 4m 34.52s | 12m 47.10s | 19m 34.06s | ❌ SDK Crash | 12m 18.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_1045_gas_base_heavy] | 4m 26.30s | 12m 23.81s | 19m 23.29s | ❌ SDK Crash | 12m 4.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_867_gas_base_heavy] | 4m 22.40s | 12m 21.23s | 19m 14.29s | ❌ SDK Crash | 11m 59.31s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_800_gas_base_heavy] | 4m 22.84s | 12m 17.04s | 19m 3.79s | ❌ SDK Crash | 11m 54.55s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_3_qube] | 4m 16.04s | 12m 35.89s | 18m 32.54s | ❌ SDK Crash | 11m 48.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_616_gas_base_heavy] | 4m 14.93s | 12m 3.22s | 18m 27.60s | ❌ SDK Crash | 11m 35.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_3_square] | 3m 54.84s | 12m 49.46s | 17m 10.73s | ❌ SDK Crash | 11m 18.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_408_gas_base_heavy] | 4m 0.11s | 11m 34.98s | 17m 24.41s | ❌ SDK Crash | 10m 59.83s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_264_exp_2] | 3m 54.44s | 11m 24.18s | 16m 58.42s | ❌ SDK Crash | 10m 45.68s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_256_exp_2] | 3m 49.76s | 11m 6.73s | 16m 49.29s | ❌ SDK Crash | 10m 35.26s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_min_gas_base_heavy] | 3m 11.40s | 9m 37.58s | 14m 2.45s | ❌ SDK Crash | 8m 57.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_8b_exp_896] | 2m 39.94s | 8m 11.87s | 11m 30.21s | ❌ SDK Crash | 7m 27.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_exp_298_gas_exp_heavy] | 2m 36.41s | 7m 57.17s | 11m 25.65s | ❌ SDK Crash | 7m 19.74s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_8_exp_896] | 2m 34.40s | 8m 0.24s | 11m 14.35s | ❌ SDK Crash | 7m 16.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_1_exp_heavy] | 2m 31.09s | 7m 41.62s | 10m 50.77s | ❌ SDK Crash | 7m 1.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_8_exp_648] | 2m 21.70s | 7m 19.78s | 10m 14.96s | ❌ SDK Crash | 6m 38.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_exp_215_gas_exp_heavy] | 2m 20.66s | 7m 12.37s | 10m 12.01s | ❌ SDK Crash | 6m 35.01s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_min_gas_exp_heavy] | 2m 20.05s | 7m 8.13s | 10m 2.75s | ❌ SDK Crash | 6m 30.31s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-point_evaluation] | 4m 44.57s | 12m 59.63s | 3m 10.16s | 1m 37.08s | 5m 37.86s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_guido_3_even] | 2m 15.03s | 5m 47.58s | 8m 44.36s | ❌ SDK Crash | 5m 35.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_2_qube] | 1m 45.94s | 5m 18.96s | 7m 33.26s | ❌ SDK Crash | 4m 52.72s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_800_gas_exp_heavy] | 1m 34.67s | 4m 49.52s | 6m 45.90s | ❌ SDK Crash | 4m 23.36s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_852_gas_exp_heavy] | 1m 35.41s | 4m 47.57s | 6m 46.72s | ❌ SDK Crash | 4m 23.23s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_600_gas_exp_heavy] | 1m 31.00s | 4m 40.96s | 6m 35.98s | ❌ SDK Crash | 4m 15.98s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_16b_exp_320] | 1m 28.35s | 4m 35.09s | 6m 27.15s | ❌ SDK Crash | 4m 10.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_pawel_2] | 1m 25.16s | 4m 24.16s | 6m 12.17s | ❌ SDK Crash | 4m 0.50s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_400_gas_exp_heavy] | 1m 24.94s | 4m 23.37s | 6m 10.34s | ❌ SDK Crash | 3m 59.55s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_2_square] | 1m 38.07s | 4m 55.13s | 6m 59.94s | 1m 46.93s | 3m 50.01s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_2_exp_heavy] | 1m 23.06s | 4m 12.83s | 5m 48.46s | ❌ SDK Crash | 3m 48.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_guido_2_even] | 1m 21.83s | 4m 7.73s | 5m 49.91s | ❌ SDK Crash | 3m 46.49s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_pairing_check] | 1m 41.94s | 5m 17.19s | 6m 36.31s | 1m 28.33s | 3m 45.94s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_fp_to_g1] | 2m 3.25s | 3m 30.01s | 7m 18.42s | 1m 16.66s | 3m 32.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_marius_1_even] | 1m 12.48s | 3m 36.19s | 5m 13.88s | ❌ SDK Crash | 3m 20.85s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_24b_exp_168] | 1m 10.94s | 3m 38.40s | 5m 8.69s | ❌ SDK Crash | 3m 19.34s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ecrecover] | 6m 23.13s | 1m 37.67s | 4m 19.55s | 40.06s | 3m 15.10s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_fp_to_g2] | 1m 24.74s | 4m 32.16s | 5m 10.38s | 59.45s | 3m 1.68s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_765_gas_exp_heavy] | 1m 11.09s | 3m 39.79s | 5m 6.82s | 1m 48.81s | 2m 56.63s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_pawel_3] | 1m 8.39s | 3m 27.81s | 4m 54.54s | 1m 43.75s | 2m 48.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_1360_gas_balanced] | 1m 5.33s | 3m 36.10s | 4m 43.32s | 1m 31.15s | 2m 43.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_32b_exp_256] | 1m 6.77s | 3m 26.51s | 4m 46.48s | 1m 33.33s | 2m 43.27s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_32b_exp_256] | 1m 6.92s | 3m 20.44s | 4m 49.10s | 1m 34.65s | 2m 42.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_heavy] | 1m 5.21s | 3m 19.26s | 4m 39.69s | 1m 41.50s | 2m 41.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_example_1] | 1m 5.64s | 3m 21.33s | 4m 44.86s | 1m 26.61s | 2m 39.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_zkevm_worst_case] | 1m 5.30s | 3m 13.84s | 4m 37.58s | 1m 32.60s | 2m 37.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_32b_exp_96] | 1m 3.34s | 3m 15.06s | 4m 32.30s | 1m 33.15s | 2m 35.96s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_8] | 1m 1.66s | 3m 7.62s | 4m 19.77s | 1m 40.77s | 2m 32.46s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_677_gas_base_heavy] | 1m 2.22s | 3m 10.20s | 4m 28.64s | 1m 27.63s | 2m 32.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_128] | 1m 2.21s | 3m 9.67s | 4m 29.02s | 1m 27.46s | 2m 32.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_example_2] | 1m 2.29s | 3m 9.43s | 4m 26.53s | 1m 22.40s | 2m 30.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_32b_exp_96] | 1m 1.44s | 3m 5.77s | 4m 24.26s | 1m 26.50s | 2m 29.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_pawel_4] | 1m 0.36s | 3m 10.87s | 4m 19.21s | 1m 25.41s | 2m 28.96s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_65] | 1m 0.57s | 3m 1.56s | 4m 17.01s | 1m 25.44s | 2m 26.14s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_g2add] | 1m 8.84s | 3m 14.23s | 4m 12.03s | 1m 3.87s | 2m 24.74s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_4_exp_heavy] | 58.46s | 2m 58.16s | 4m 6.84s | 1m 22.94s | 2m 21.60s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_600_gas_balanced] | 58.27s | 2m 58.68s | 4m 6.09s | 1m 15.13s | 2m 19.54s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_64] | 57.39s | 2m 54.15s | 4m 4.07s | 1m 21.45s | 2m 19.26s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_1360n1] | 56.73s | 2m 54.49s | 4m 2.41s | 1m 19.84s | 2m 18.37s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_32b_exp_40] | 55.70s | 2m 47.67s | 3m 58.56s | 1m 25.92s | 2m 16.96s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_408_gas_balanced] | 56.39s | 2m 51.97s | 4m 4.64s | 1m 14.42s | 2m 16.85s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_guido_1_even] | 49.61s | 2m 28.80s | 3m 28.39s | ❌ SDK Crash | 2m 15.60s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_996_gas_balanced] | 55.37s | 2m 51.92s | 4m 5.17s | 1m 9.38s | 2m 15.46s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_64b_exp_512] | 57.65s | 2m 42.12s | 4m 6.02s | 1m 9.06s | 2m 13.71s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-blake2f] | 1m 6.82s | 2m 56.03s | 3m 32.55s | 1m 19.39s | 2m 13.70s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_767_gas_balanced] | 56.10s | 2m 48.12s | 3m 59.81s | 1m 9.55s | 2m 13.39s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_64b_exp_512] | 57.92s | 2m 39.02s | 4m 7.37s | 1m 8.47s | 2m 13.19s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_min_gas_balanced] | 55.07s | 2m 45.95s | 3m 54.85s | 1m 16.52s | 2m 13.10s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_g1add] | 1m 6.85s | 2m 35.07s | 3m 55.86s | 1m 2.32s | 2m 10.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_1360n2] | 51.64s | 2m 39.34s | 3m 43.61s | 1m 12.89s | 2m 6.87s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_40] | 51.66s | 2m 38.34s | 3m 41.75s | 1m 15.47s | 2m 6.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_exp_208_gas_balanced] | 51.78s | 2m 37.48s | 3m 40.65s | 1m 15.56s | 2m 6.36s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_1349n1] | 51.22s | 2m 39.52s | 3m 41.65s | 1m 12.21s | 2m 6.15s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_36] | 50.52s | 2m 31.72s | 3m 36.14s | 1m 13.56s | 2m 2.98s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_128b_exp_1024] | 52.97s | 2m 29.25s | 3m 46.90s | 58.75s | 2m 1.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_128b_exp_1024] | 53.72s | 2m 23.41s | 3m 46.90s | 59.38s | 2m 0.85s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_32b_exp_cover_windows] | 46.82s | 2m 28.49s | 3m 26.37s | 1m 8.58s | 1m 57.57s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_256b_exp_1024] | 50.29s | 2m 17.34s | 3m 35.67s | 54.40s | 1m 54.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_256b_exp_1024] | 50.84s | 2m 18.30s | 3m 33.77s | 54.09s | 1m 54.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_512b_exp_1024] | 49.66s | 2m 15.79s | 3m 32.59s | 52.19s | 1m 52.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_512b_exp_1024] | 49.59s | 2m 15.69s | 3m 30.87s | 52.40s | 1m 52.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_2_pow_0x10001] | 47.23s | 2m 23.08s | 3m 21.53s | 52.16s | 1m 51.00s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_1_pow_0x10001] | 47.10s | 2m 20.31s | 3m 14.87s | 56.87s | 1m 49.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_32] | 43.63s | 2m 13.22s | 3m 5.34s | 1m 4.75s | 1m 46.73s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_g1msm] | 1m 1.67s | ❌ SDK Crash | 3m 32.05s | 39.74s | 1m 44.48s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_3_pow_0x10001] | 45.40s | 2m 9.41s | 3m 14.03s | 48.86s | 1m 44.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_4_pow_0x10001] | 45.04s | 2m 3.19s | 3m 8.31s | 46.70s | 1m 40.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_5_pow_0x10001] | 43.61s | 1m 59.32s | 3m 2.89s | 45.55s | 1m 37.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_200n2] | 37.80s | 2m 13.65s | 2m 37.94s | 53.97s | 1m 35.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_200n3] | 38.38s | 1m 55.01s | 2m 39.93s | 53.80s | 1m 31.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_1152n1] | 35.23s | 1m 48.52s | 2m 34.49s | 51.80s | 1m 27.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_1_qube] | 34.51s | 1m 44.32s | 2m 23.67s | 43.13s | 1m 21.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_1_square] | 33.07s | 1m 38.53s | 2m 15.34s | 40.66s | 1m 16.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_200n1] | 29.10s | 1m 29.81s | 2m 2.80s | 43.27s | 1m 11.24s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul] | 1m 24.38s | 1m 23.11s | 1m 44.06s | 6.39s | 1m 9.48s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_add] | 50.14s | 22.26s | 2m 49.27s | 30.00s | 1m 7.91s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_1_2_32_byte_scalar] | 1m 20.92s | 1m 19.93s | 1m 42.48s | 6.09s | 1m 7.36s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_scalar] | 1m 19.93s | 1m 20.92s | 1m 40.97s | 6.04s | 1m 6.96s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_g2msm] | 35.52s | ❌ SDK Crash | 2m 14.58s | 29.86s | 1m 6.65s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_1024b_exp_1024] | 28.71s | 1m 17.66s | 2m 1.24s | 30.05s | 1m 4.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_1024b_exp_1024] | 28.71s | 1m 17.13s | 1m 57.50s | 30.08s | 1m 3.35s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 54.51s | 1m 23.98s | 44.02s | 1m 4.62s | 1m 1.78s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MULMOD-mod_bits_191] | 25.70s | 1m 11.56s | 1m 50.86s | 33.03s | 1m 0.29s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_5_pair] | 54.60s | 1m 22.53s | 42.67s | 56.18s | 58.99s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MULMOD-mod_bits_255] | 24.59s | 1m 11.07s | 1m 46.74s | 32.48s | 58.72s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_4_pair] | 52.55s | 1m 21.95s | 42.97s | 54.45s | 57.98s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_2_pair] | 51.51s | 1m 19.59s | 43.70s | 45.27s | 55.02s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_two_pairings] | 52.36s | 1m 18.74s | 43.04s | 44.93s | 54.77s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_one_pairing] | 50.55s | 1m 15.40s | 43.65s | 35.30s | 51.23s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MULMOD-mod_bits_127] | 18.94s | 52.61s | 1m 17.85s | 24.41s | 43.45s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_SMOD-mod_bits_191] | 17.35s | 53.02s | 1m 16.24s | 25.50s | 43.03s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MOD-mod_bits_191] | 16.65s | 50.25s | 1m 12.44s | 24.14s | 40.87s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SDIV-1] | 17.19s | 50.53s | 1m 9.96s | 23.73s | 40.35s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SDIV-0] | 17.19s | 50.00s | 1m 8.78s | 24.13s | 40.03s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DELEGATECALL] | 4.40s | 1m 15.89s | 44.82s | 28.39s | 38.37s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_STATICCALL] | 4.41s | 1m 16.39s | 44.24s | 28.32s | 38.34s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODESIZE] | 4.17s | 1m 14.61s | 44.85s | 28.26s | 37.97s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALLCODE] | 4.39s | 1m 15.82s | 42.67s | 28.90s | 37.95s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALL] | 4.47s | 1m 15.29s | 44.45s | 27.03s | 37.81s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODEHASH] | 4.28s | 1m 14.73s | 39.69s | 27.19s | 36.47s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODECOPY] | 4.05s | 1m 11.30s | 42.30s | 26.98s | 36.16s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_add_1_2] | 54.48s | 22.00s | 36.01s | 29.26s | 35.44s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DIV-0] | 14.58s | 43.60s | 1m 0.19s | 21.36s | 34.93s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 12.68s | 39.85s | 50.66s | 34.61s | 34.45s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MULMOD-mod_bits_63] | 14.43s | 40.31s | 58.21s | 20.82s | 33.44s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_SMOD-mod_bits_255] | 13.27s | 40.25s | 57.82s | 20.95s | 33.07s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DIV-1] | 13.53s | 40.38s | 56.11s | 20.11s | 32.53s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_SMOD-mod_bits_127] | 14.08s | 40.04s | 58.33s | 17.66s | 32.53s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MOD-mod_bits_255] | 12.62s | 39.10s | 54.86s | 19.72s | 31.57s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_191] | 12.77s | 37.35s | 53.88s | 21.32s | 31.33s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MOD-mod_bits_127] | 13.27s | 37.55s | 56.41s | 16.66s | 30.97s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PREVRANDAO] | 11.93s | 30.97s | 40.76s | 30.87s | 28.63s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_infinities_32_byte_scalar] | 1.56s | 46.70s | 58.54s | 2.18s | 27.24s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_255] | 10.88s | 31.71s | 45.13s | 19.79s | 26.88s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_127] | 10.03s | 29.57s | 42.08s | 16.18s | 24.46s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_SMOD-mod_bits_63] | 9.45s | 26.61s | 39.16s | 14.30s | 22.38s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_diff_acc_to_diff_acc] | 28.85s | 10.24s | 40.08s | 6.41s | 21.39s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_diff_acc] | 28.74s | 9.32s | 39.53s | 6.21s | 20.95s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_a] | 29.72s | 8.32s | 39.97s | 5.65s | 20.92s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_diff_acc_to_b] | 27.84s | 9.36s | 40.27s | 6.16s | 20.91s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MOD-mod_bits_63] | 8.93s | 24.56s | 36.85s | 13.07s | 20.85s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_b] | 30.05s | 8.31s | 38.94s | 5.87s | 20.79s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-empty-opcode_REVERT] | 7.35s | 21.54s | 28.99s | 20.41s | 19.57s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_CALLCODE] | 6.60s | 20.44s | 26.38s | 19.46s | 18.22s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_EXP-] | 8.73s | 22.63s | 34.61s | 6.75s | 18.18s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_STATICCALL] | 6.79s | 20.75s | 25.73s | 19.11s | 18.09s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_CALL] | 7.19s | 20.04s | 26.03s | 18.97s | 18.05s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-empty-opcode_RETURN] | 6.78s | 20.18s | 25.93s | 18.93s | 17.95s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_63] | 7.13s | 20.47s | 28.64s | 13.74s | 17.50s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_CALLCODE] | 6.36s | 19.11s | 24.53s | 18.16s | 17.04s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_STATICCALL] | 6.53s | 18.51s | 24.21s | 18.15s | 16.85s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_CALL] | 6.23s | 18.58s | 24.18s | 18.01s | 16.75s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-zero-loop] | 6.72s | 16.41s | 25.24s | 16.86s | 16.31s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-one-loop] | 6.18s | 16.17s | 24.05s | 16.86s | 15.81s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_DELEGATECALL] | 6.12s | 17.60s | 22.95s | 16.44s | 15.77s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH32] | 4.94s | 14.77s | 20.75s | 21.23s | 15.42s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP3] | 6.29s | 14.98s | 23.84s | 15.40s | 15.13s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP5] | 6.12s | 14.72s | 24.16s | 15.47s | 15.12s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH31] | 4.19s | 14.14s | 21.60s | 20.26s | 15.05s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP6] | 6.32s | 14.76s | 23.59s | 15.46s | 15.03s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP2] | 5.77s | 14.58s | 24.36s | 15.26s | 14.99s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP1] | 5.99s | 14.74s | 23.70s | 15.34s | 14.95s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP4] | 6.08s | 14.63s | 23.63s | 15.26s | 14.90s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH30] | 4.35s | 13.66s | 20.84s | 19.60s | 14.61s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP7] | 5.96s | 14.03s | 22.51s | 14.76s | 14.31s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB of zero data-opcode_REVERT] | 4.91s | 18.56s | 19.81s | 13.77s | 14.26s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-empty] | 5.70s | 13.78s | 22.63s | 14.79s | 14.22s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SGT-] | 5.44s | 15.25s | 21.87s | 14.16s | 14.18s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH29] | 4.13s | 13.30s | 19.55s | 19.39s | 14.09s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_DELEGATECALL] | 5.00s | 15.74s | 19.85s | 15.75s | 14.09s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH28] | 4.33s | 13.21s | 19.39s | 18.56s | 13.87s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH27] | 4.11s | 13.14s | 18.81s | 19.01s | 13.77s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB of zero data-opcode_RETURN] | 4.60s | 17.54s | 18.53s | 12.84s | 13.38s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_COINBASE] | 4.92s | 14.61s | 18.84s | 14.61s | 13.25s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_ADDRESS] | 4.68s | 14.59s | 19.26s | 14.39s | 13.23s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CALLER] | 4.84s | 14.93s | 18.49s | 14.28s | 13.13s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_ORIGIN] | 4.88s | 14.44s | 18.78s | 14.35s | 13.11s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH26] | 3.98s | 12.75s | 18.13s | 17.49s | 13.09s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_EQ-] | 4.91s | 13.73s | 20.39s | 13.05s | 13.02s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP8] | 5.28s | 12.59s | 19.94s | 13.44s | 12.81s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH25] | 3.78s | 12.46s | 17.18s | 17.31s | 12.68s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_ISZERO] | 4.56s | 13.49s | 19.13s | 12.98s | 12.54s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH24] | 3.77s | 11.88s | 17.29s | 16.72s | 12.42s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SMOD-] | 4.88s | 13.36s | 19.19s | 11.78s | 12.30s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SAR-] | 6.13s | 13.72s | 20.07s | 8.69s | 12.15s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH23] | 3.69s | 11.17s | 18.56s | 15.20s | 12.15s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 4.93s | 11.64s | 18.47s | 12.55s | 11.90s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 4.64s | 11.87s | 18.26s | 12.53s | 11.82s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 4.56s | 11.92s | 18.26s | 12.46s | 11.80s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 4.64s | 11.84s | 18.26s | 12.38s | 11.78s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 4.78s | 11.81s | 18.15s | 12.29s | 11.76s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 4.70s | 11.74s | 18.16s | 12.31s | 11.73s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 4.35s | 11.78s | 18.36s | 12.40s | 11.72s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 4.45s | 11.72s | 18.30s | 12.41s | 11.72s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH22] | 3.40s | 11.07s | 17.57s | 14.80s | 11.71s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP9] | 4.54s | 11.43s | 18.23s | 12.39s | 11.65s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_add_infinities] | 4.68s | 11.89s | 15.38s | 13.68s | 11.40s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-shift_right_SAR] | 5.44s | 12.86s | 18.60s | 8.10s | 11.25s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH21] | 3.32s | 10.48s | 15.88s | 14.45s | 11.03s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH19] | 3.26s | 10.21s | 16.72s | 13.90s | 11.02s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-six blobs, access latest] | 3.44s | 11.04s | 14.68s | 14.13s | 10.82s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-one blob and accessed] | 3.45s | 11.13s | 14.24s | 14.18s | 10.75s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH20] | 3.19s | 10.13s | 15.71s | 13.67s | 10.68s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_MUL-] | 4.35s | 11.61s | 20.83s | 5.51s | 10.57s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_REVERT] | 3.77s | 13.25s | 14.79s | 10.43s | 10.56s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP10] | 4.18s | 10.15s | 16.61s | 11.17s | 10.53s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-shift_right_SHR] | 4.83s | 11.81s | 17.06s | 7.47s | 10.29s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SHR-] | 4.89s | 11.92s | 16.56s | 7.44s | 10.20s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_MOD-] | 3.72s | 10.71s | 15.75s | 10.43s | 10.15s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 4.10s | 10.33s | 16.32s | 9.68s | 10.11s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 4.19s | 10.33s | 16.00s | 9.83s | 10.09s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 4.07s | 10.34s | 16.19s | 9.68s | 10.07s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SSTORE new value] | 3.63s | 11.85s | 14.03s | 10.59s | 10.03s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 4.14s | 10.19s | 16.04s | 9.67s | 10.01s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_RETURN] | 3.55s | 12.98s | 13.23s | 9.94s | 9.93s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH18] | 3.09s | 9.73s | 14.27s | 12.60s | 9.92s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 0.36s | 22.03s | 9.81s | 7.36s | 9.89s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SHL-] | 4.56s | 11.47s | 16.08s | 7.45s | 9.89s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP11] | 3.87s | 9.82s | 15.35s | 10.42s | 9.86s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH15] | 2.89s | 9.49s | 14.54s | 11.79s | 9.68s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH17] | 2.87s | 9.39s | 13.71s | 12.57s | 9.63s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-SHA2-256] | 21.06s | 1.31s | 11.95s | 3.85s | 9.54s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH16] | 2.94s | 9.42s | 13.41s | 12.16s | 9.48s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CODESIZE] | 3.44s | 11.02s | 13.81s | 8.67s | 9.23s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 3.74s | 8.87s | 11.82s | 12.34s | 9.19s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 3.57s | 9.44s | 11.77s | 11.97s | 9.19s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH14] | 2.83s | 8.89s | 13.79s | 11.01s | 9.13s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_BLOBBASEFEE] | 3.40s | 11.25s | 14.02s | 7.77s | 9.11s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 3.32s | 9.13s | 11.79s | 12.12s | 9.09s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 3.53s | 8.59s | 11.94s | 12.16s | 9.05s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 3.58s | 8.63s | 11.81s | 12.12s | 9.04s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 3.47s | 8.57s | 11.97s | 12.13s | 9.03s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 3.19s | 8.84s | 12.04s | 11.98s | 9.02s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SIGNEXTEND-] | 4.21s | 10.25s | 15.15s | 6.42s | 9.01s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 3.27s | 8.67s | 11.89s | 12.19s | 9.00s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 3.46s | 8.66s | 11.76s | 12.10s | 8.99s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 3.38s | 8.67s | 11.86s | 12.04s | 8.98s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 3.31s | 8.61s | 11.78s | 12.20s | 8.97s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 3.50s | 8.59s | 11.73s | 12.07s | 8.97s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP12] | 3.70s | 8.73s | 13.88s | 9.54s | 8.96s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 3.74s | 10.01s | 14.66s | 7.43s | 8.96s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 3.64s | 10.29s | 14.53s | 7.33s | 8.95s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH13] | 2.76s | 8.64s | 12.16s | 11.06s | 8.65s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_GASPRICE] | 3.24s | 10.44s | 13.51s | 7.32s | 8.63s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_False-0 bytes] | 3.58s | 9.55s | 14.03s | 7.33s | 8.62s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 3.48s | 9.50s | 14.02s | 7.03s | 8.51s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 3.35s | 9.40s | 13.94s | 6.72s | 8.35s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP13] | 3.39s | 8.10s | 12.70s | 8.97s | 8.29s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH12] | 2.59s | 8.25s | 12.03s | 9.93s | 8.20s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 3.10s | 9.13s | 12.88s | 7.59s | 8.18s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-100 bytes] | 3.25s | 9.21s | 12.76s | 7.41s | 8.16s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 3.06s | 8.75s | 12.94s | 7.51s | 8.06s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH11] | 2.58s | 8.16s | 11.83s | 9.66s | 8.06s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP14] | 3.13s | 7.65s | 12.30s | 8.53s | 7.90s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_0] | 2.99s | 9.52s | 11.60s | 7.42s | 7.88s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_1] | 2.99s | 9.46s | 11.55s | 7.49s | 7.87s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_100000] | 3.00s | 9.32s | 11.61s | 7.50s | 7.86s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_1000000] | 2.99s | 9.51s | 11.54s | 7.32s | 7.84s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_1000] | 2.98s | 9.46s | 11.48s | 7.37s | 7.82s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 3.06s | 8.54s | 12.24s | 7.40s | 7.81s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_True] | 2.77s | 9.65s | 10.37s | 8.10s | 7.72s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_False] | 2.84s | 9.48s | 10.38s | 8.08s | 7.69s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SSTORE same value] | 2.86s | 7.95s | 10.67s | 8.46s | 7.48s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP15] | 2.96s | 7.26s | 11.50s | 8.08s | 7.45s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_NUMBER] | 2.73s | 8.78s | 11.77s | 6.35s | 7.41s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_TIMESTAMP] | 2.69s | 8.73s | 11.75s | 6.42s | 7.40s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_False-100 bytes] | 2.86s | 8.14s | 11.10s | 7.32s | 7.35s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH10] | 2.45s | 7.62s | 10.05s | 8.87s | 7.25s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 2.87s | 7.80s | 11.24s | 6.27s | 7.04s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP16] | 2.79s | 6.79s | 10.60s | 7.70s | 6.97s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH7] | 2.32s | 7.51s | 9.53s | 8.31s | 6.92s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CHAINID] | 2.57s | 8.02s | 10.88s | 6.20s | 6.92s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_BASEFEE] | 2.69s | 8.19s | 10.49s | 6.25s | 6.90s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH9] | 2.37s | 7.43s | 9.35s | 8.45s | 6.90s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 2.55s | 7.43s | 10.28s | 7.29s | 6.89s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH8] | 2.37s | 7.42s | 9.06s | 8.40s | 6.81s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SLT-] | 2.76s | 7.45s | 10.49s | 6.45s | 6.79s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH0] | 2.57s | 8.10s | 9.75s | 6.36s | 6.69s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_GAS] | 2.53s | 7.88s | 10.00s | 6.04s | 6.62s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH6] | 2.41s | 7.15s | 9.10s | 7.62s | 6.57s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_GASLIMIT] | 2.47s | 7.94s | 9.68s | 6.05s | 6.54s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 3.66s | 6.79s | 9.37s | 6.00s | 6.45s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_True-0 bytes] | 2.58s | 6.99s | 10.19s | 5.91s | 6.42s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SUB-] | 2.77s | 7.35s | 10.12s | 5.22s | 6.36s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 2.52s | 7.18s | 9.33s | 6.05s | 6.27s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 2.51s | 7.05s | 9.29s | 5.96s | 6.20s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 2.66s | 6.74s | 9.28s | 6.09s | 6.19s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 2.49s | 6.78s | 9.41s | 6.06s | 6.19s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 2.59s | 6.71s | 9.39s | 6.06s | 6.18s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 2.49s | 6.74s | 9.50s | 6.00s | 6.18s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 2.57s | 6.77s | 9.35s | 5.98s | 6.17s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 2.58s | 6.71s | 9.23s | 6.13s | 6.16s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-5b] | 1.88s | 7.90s | 8.81s | 5.98s | 6.14s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-1MiB] | 1.93s | 11.68s | 6.45s | 4.48s | 6.13s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 2.53s | 6.67s | 9.24s | 6.05s | 6.12s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 2.49s | 6.72s | 9.32s | 5.95s | 6.12s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 2.51s | 6.65s | 9.34s | 5.93s | 6.11s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-one blob but access non-existent index] | 2.22s | 7.33s | 8.20s | 6.57s | 6.08s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH5] | 2.12s | 6.85s | 8.35s | 6.98s | 6.08s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 2.42s | 6.44s | 9.25s | 5.82s | 5.98s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_ADD-] | 2.44s | 6.65s | 9.39s | 5.17s | 5.92s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-no blobs] | 2.17s | 7.31s | 7.90s | 6.19s | 5.89s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 2.44s | 6.26s | 9.02s | 5.61s | 5.83s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 2.46s | 6.33s | 8.47s | 5.73s | 5.75s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH4] | 2.02s | 6.44s | 8.22s | 6.25s | 5.73s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_BYTE-] | 2.41s | 6.22s | 8.73s | 5.20s | 5.64s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH3] | 2.12s | 6.27s | 8.10s | 6.02s | 5.62s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-IDENTITY] | 1.22s | 12.37s | 5.53s | 3.35s | 5.62s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP7] | 1.97s | 7.11s | 8.01s | 4.92s | 5.50s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_AND-] | 2.27s | 6.70s | 8.14s | 4.77s | 5.47s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP8] | 1.99s | 6.17s | 8.64s | 4.94s | 5.44s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-10KiB] | 2.45s | 6.43s | 7.36s | 5.48s | 5.43s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP5] | 2.04s | 6.18s | 8.23s | 5.21s | 5.42s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 2.25s | 5.60s | 8.28s | 5.34s | 5.36s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_LT-] | 2.26s | 5.90s | 8.28s | 4.88s | 5.33s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-calldata_length_1000] | 2.09s | 5.79s | 7.93s | 5.47s | 5.32s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_GT-] | 2.25s | 5.86s | 8.26s | 4.89s | 5.32s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP14] | 2.01s | 6.30s | 7.91s | 5.04s | 5.31s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP13] | 1.97s | 6.26s | 8.01s | 5.00s | 5.31s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP4] | 1.92s | 6.33s | 7.93s | 5.04s | 5.30s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP10] | 1.97s | 6.21s | 7.96s | 5.05s | 5.30s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP1] | 2.05s | 6.22s | 7.97s | 4.93s | 5.29s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP6] | 2.00s | 6.17s | 7.90s | 5.08s | 5.29s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP16] | 2.02s | 6.19s | 7.91s | 4.98s | 5.27s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP3] | 1.98s | 6.18s | 7.90s | 5.04s | 5.27s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP9] | 1.93s | 6.19s | 7.87s | 5.09s | 5.27s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP2] | 2.09s | 6.16s | 7.84s | 4.98s | 5.26s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP12] | 1.93s | 6.08s | 7.96s | 5.08s | 5.26s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP15] | 1.96s | 6.19s | 7.96s | 4.91s | 5.25s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-calldata_length_0] | 2.11s | 5.74s | 7.67s | 5.41s | 5.23s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP11] | 1.95s | 6.15s | 7.85s | 4.96s | 5.23s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1.96s | 5.37s | 7.15s | 6.40s | 5.22s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-calldata_length_10000] | 2.12s | 5.74s | 7.59s | 5.36s | 5.20s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-1MiB] | 1.27s | 10.48s | 6.03s | 3.01s | 5.20s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_OR-] | 2.20s | 5.61s | 8.06s | 4.89s | 5.19s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_True-100 bytes] | 1.97s | 5.66s | 7.59s | 5.35s | 5.14s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_XOR-] | 2.22s | 5.60s | 7.93s | 4.75s | 5.12s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 2.09s | 5.53s | 8.08s | 4.69s | 5.10s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH2] | 1.87s | 5.99s | 7.47s | 5.02s | 5.09s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-100 bytes] | 2.27s | 5.60s | 7.49s | 4.91s | 5.07s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 1.93s | 5.28s | 7.36s | 5.24s | 4.95s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-from_origin_True-non_zero_value_True] | 1.99s | 5.32s | 7.34s | 5.08s | 4.93s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-from_origin_False-non_zero_value_False] | 2.02s | 5.37s | 7.32s | 4.89s | 4.90s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH1] | 1.86s | 5.64s | 7.05s | 5.00s | 4.89s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-from_origin_True-non_zero_value_False] | 1.96s | 5.28s | 7.27s | 4.91s | 4.86s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 1.89s | 5.18s | 7.08s | 5.16s | 4.83s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-from_origin_False-non_zero_value_True] | 2.03s | 5.26s | 7.12s | 4.88s | 4.82s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 1.91s | 5.53s | 6.92s | 4.88s | 4.81s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 1.94s | 5.17s | 6.64s | 4.91s | 4.67s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 1.83s | 4.93s | 6.95s | 4.94s | 4.66s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 1.84s | 5.23s | 6.68s | 4.81s | 4.64s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 1.88s | 5.23s | 6.59s | 4.86s | 4.64s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODEHASH] | 1.68s | 4.84s | 5.92s | 6.08s | 4.63s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_NOT] | 1.88s | 4.96s | 7.26s | 4.40s | 4.62s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 1.90s | 5.05s | 6.76s | 4.75s | 4.62s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 1.87s | 5.13s | 6.59s | 4.84s | 4.61s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 1.86s | 5.05s | 6.65s | 4.78s | 4.58s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-00] | 1.22s | 6.99s | 5.36s | 4.28s | 4.46s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 1.75s | 4.80s | 6.46s | 4.59s | 4.40s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-605b5b] | 1.23s | 6.46s | 4.78s | 4.35s | 4.20s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 1.66s | 4.60s | 6.22s | 4.28s | 4.19s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0.25x max code size] | 1.48s | 4.06s | 5.53s | 5.36s | 4.11s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_False-1MiB] | 0.95s | 8.16s | 3.60s | 3.49s | 4.05s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_False-10KiB] | 1.50s | 4.17s | 5.48s | 4.99s | 4.04s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODEHASH] | 1.50s | 4.17s | 5.06s | 5.26s | 4.00s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0.75x max code size] | 1.45s | 4.00s | 4.88s | 5.37s | 3.92s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 0.88s | 7.84s | 3.35s | 3.59s | 3.91s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-615b5b5b] | 1.17s | 6.31s | 4.12s | 3.95s | 3.89s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0.50x max code size] | 1.44s | 3.87s | 4.80s | 5.39s | 3.88s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 1.46s | 4.00s | 4.66s | 5.35s | 3.87s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 1.46s | 3.86s | 4.62s | 5.51s | 3.86s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_True] | 1.48s | 4.07s | 5.14s | 4.67s | 3.84s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_False] | 1.47s | 4.15s | 5.15s | 4.57s | 3.83s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-max code size] | 1.43s | 3.99s | 4.55s | 5.35s | 3.83s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 1.46s | 3.85s | 4.70s | 5.29s | 3.82s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 0.92s | 6.66s | 3.63s | 3.77s | 3.75s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-10KiB] | 1.62s | 4.40s | 5.39s | 3.51s | 3.73s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 0.91s | 6.14s | 4.00s | 3.85s | 3.73s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SLOAD] | 1.43s | 3.93s | 5.00s | 4.42s | 3.69s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_2_scalar] | 2.36s | 1.88s | 7.59s | 2.68s | 3.63s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 0.99s | 5.64s | 4.05s | 3.77s | 3.61s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value] | 0.95s | 5.94s | 3.84s | 3.67s | 3.60s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-605b] | 0.90s | 5.37s | 4.38s | 3.31s | 3.49s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODESIZE] | 1.34s | 3.46s | 4.28s | 4.82s | 3.48s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-512] | 1.34s | 3.61s | 4.62s | 4.30s | 3.47s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSLOAD] | 0.85s | 5.62s | 3.82s | 3.45s | 3.43s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 1.27s | 4.09s | 4.43s | 3.74s | 3.38s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODESIZE] | 1.27s | 3.40s | 4.14s | 4.66s | 3.36s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_True-1MiB] | 0.68s | 7.50s | 2.64s | 2.46s | 3.32s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 0.52s | 8.57s | 1.85s | 2.32s | 3.31s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 0.53s | 8.73s | 1.74s | 2.21s | 3.31s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 0.67s | 7.46s | 2.66s | 2.40s | 3.29s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB] | 1.27s | 3.42s | 4.29s | 3.97s | 3.24s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-RIPEMD-160] | 1.21s | 3.04s | 4.02s | 4.16s | 3.11s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-615b5b] | 0.78s | 5.30s | 3.07s | 2.97s | 3.03s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-val_mut_True-key_mut_True] | 1.15s | 3.29s | 3.65s | 3.77s | 2.97s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-val_mut_True-key_mut_False] | 1.12s | 3.18s | 3.67s | 3.90s | 2.97s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_BALANCE] | 1.08s | 3.12s | 3.50s | 4.00s | 2.92s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_BALANCE] | 1.06s | 3.02s | 3.52s | 4.01s | 2.90s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-5KiB] | 1.10s | 3.14s | 3.88s | 3.39s | 2.88s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value] | 0.69s | 4.25s | 2.98s | 2.95s | 2.72s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_10M-blockchain_test-value_bearing_True] | 0.82s | 3.17s | 3.29s | 3.53s | 2.70s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_True-10KiB] | 1.00s | 2.92s | 3.66s | 3.08s | 2.67s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0.25x max code size] | 1.01s | 2.89s | 3.54s | 3.22s | 2.66s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0.75x max code size] | 0.96s | 2.94s | 3.54s | 3.21s | 2.66s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 0.96s | 2.91s | 3.48s | 3.26s | 2.65s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-max code size] | 0.98s | 2.87s | 3.49s | 3.17s | 2.63s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 1.02s | 2.95s | 3.44s | 3.09s | 2.63s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0.50x max code size] | 1.02s | 2.85s | 3.48s | 3.07s | 2.61s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 1.01s | 2.81s | 3.42s | 3.09s | 2.58s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_10M-blockchain_test-value_bearing_False] | 0.75s | 3.47s | 2.43s | 2.95s | 2.40s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_1_2_2_scalar] | 2.66s | 1.86s | 2.14s | 2.68s | 2.33s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSLOAD] | 0.54s | 3.20s | 2.11s | 2.50s | 2.09s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 0.60s | 3.00s | 2.00s | 2.60s | 2.05s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 0.61s | 2.98s | 1.98s | 2.60s | 2.04s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 0.70s | 2.09s | 2.09s | 2.85s | 1.93s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 0.50s | 3.14s | 1.58s | 2.45s | 1.92s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 0.64s | 1.92s | 1.91s | 2.48s | 1.74s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-zero_byte_True] | 0.33s | 2.74s | 1.27s | 2.18s | 1.63s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_infinities_2_scalar] | 0.58s | 1.68s | 1.65s | 2.32s | 1.56s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 0.38s | 2.39s | 1.20s | 2.18s | 1.54s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-val_mut_False-key_mut_False] | 0.52s | 1.41s | 1.46s | 2.36s | 1.44s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-val_mut_False-key_mut_True] | 0.54s | 1.45s | 1.38s | 2.21s | 1.40s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_RETURN] | 0.34s | 1.90s | 0.56s | 1.71s | 1.13s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_REVERT] | 0.29s | 1.90s | 0.56s | 1.70s | 1.11s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 0.41s | 1.26s | 0.90s | 1.82s | 1.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 0.40s | 1.20s | 0.97s | 1.82s | 1.09s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CREATE] | 0.35s | 1.20s | 0.67s | 1.90s | 1.03s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1MiB of zero data-opcode_RETURN] | 0.32s | 1.60s | 0.47s | 1.70s | 1.02s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 0.36s | 1.24s | 0.75s | 1.73s | 1.02s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 0.33s | 1.17s | 0.75s | 1.78s | 1.01s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1MiB of zero data-opcode_REVERT] | 0.30s | 1.51s | 0.50s | 1.71s | 1.00s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value] | 0.30s | 1.17s | 0.62s | 1.88s | 0.99s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_2_sets] | 0.37s | 1.08s | 0.56s | 1.93s | 0.98s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value] | 0.31s | 1.12s | 0.71s | 1.76s | 0.98s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 0.30s | 1.16s | 0.61s | 1.78s | 0.96s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 0.47s | 0.91s | 0.69s | 1.76s | 0.96s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_True] | 0.30s | 1.23s | 0.53s | 1.76s | 0.95s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 0.31s | 1.12s | 0.63s | 1.73s | 0.95s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 0.33s | 1.02s | 0.61s | 1.76s | 0.93s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 0.32s | 1.00s | 0.58s | 1.78s | 0.92s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 0.30s | 0.99s | 0.55s | 1.83s | 0.92s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 0.33s | 0.92s | 0.66s | 1.77s | 0.92s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 0.34s | 0.97s | 0.53s | 1.82s | 0.92s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 0.31s | 0.98s | 0.62s | 1.75s | 0.92s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-zero_byte_False] | 0.26s | 1.23s | 0.49s | 1.67s | 0.91s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_False] | 0.31s | 1.01s | 0.54s | 1.74s | 0.90s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 0.30s | 0.98s | 0.58s | 1.72s | 0.89s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE] | 0.30s | 0.97s | 0.45s | 1.85s | 0.89s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_True] | 0.27s | 0.91s | 0.45s | 1.90s | 0.88s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE2] | 0.30s | 0.95s | 0.47s | 1.81s | 0.88s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 0.30s | 1.01s | 0.50s | 1.72s | 0.88s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_False] | 0.33s | 0.92s | 0.50s | 1.73s | 0.87s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE2] | 0.32s | 0.98s | 0.47s | 1.69s | 0.86s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 0.27s | 0.91s | 0.44s | 1.84s | 0.86s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 0.29s | 0.96s | 0.48s | 1.69s | 0.85s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 0.29s | 0.92s | 0.47s | 1.72s | 0.85s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 0.30s | 0.87s | 0.50s | 1.71s | 0.85s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 0.32s | 0.91s | 0.46s | 1.68s | 0.84s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 0.28s | 0.91s | 0.43s | 1.76s | 0.84s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 0.32s | 0.92s | 0.44s | 1.69s | 0.84s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 0.31s | 0.96s | 0.48s | 1.61s | 0.84s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE] | 0.29s | 0.95s | 0.45s | 1.65s | 0.83s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 0.26s | 0.88s | 0.43s | 1.66s | 0.81s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CREATE2] | 0.29s | 0.83s | 0.39s | 1.71s | 0.80s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE2] | 0.29s | 0.75s | 0.27s | 1.80s | 0.78s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 0.26s | 0.93s | 0.20s | 1.62s | 0.75s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE2] | 0.26s | 0.74s | 0.26s | 1.72s | 0.74s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE] | 0.24s | 0.71s | 0.25s | 1.74s | 0.73s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE2] | 0.23s | 0.81s | 0.28s | 1.58s | 0.73s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE] | 0.26s | 0.74s | 0.30s | 1.60s | 0.72s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE2] | 0.26s | 0.72s | 0.26s | 1.66s | 0.72s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE] | 0.23s | 0.65s | 0.24s | 1.75s | 0.72s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE2] | 0.24s | 0.75s | 0.26s | 1.62s | 0.71s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 0.26s | 0.79s | 0.20s | 1.61s | 0.71s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE] | 0.28s | 0.74s | 0.25s | 1.55s | 0.71s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE2] | 0.23s | 0.75s | 0.26s | 1.58s | 0.70s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE] | 0.30s | 0.69s | 0.25s | 1.58s | 0.70s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 0.24s | 0.70s | 0.21s | 1.65s | 0.70s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_zero_input] | 0.25s | 0.64s | 0.27s | 1.62s | 0.70s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE] | 0.24s | 0.72s | 0.25s | 1.55s | 0.69s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE2] | 0.25s | 0.73s | 0.27s | 1.52s | 0.69s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 0.22s | 0.75s | 0.20s | 1.59s | 0.69s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE2] | 0.25s | 0.72s | 0.25s | 1.53s | 0.69s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 0.24s | 0.64s | 0.19s | 1.67s | 0.69s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 0.26s | 0.64s | 0.20s | 1.64s | 0.68s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 0.24s | 0.63s | 0.20s | 1.67s | 0.68s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 0.23s | 0.62s | 0.19s | 1.68s | 0.68s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE] | 0.24s | 0.67s | 0.24s | 1.56s | 0.68s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 0.25s | 0.64s | 0.19s | 1.62s | 0.68s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_1_pair] | 0.25s | 0.67s | 0.26s | 1.53s | 0.68s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 0.24s | 0.63s | 0.19s | 1.63s | 0.68s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 0.23s | 0.67s | 0.19s | 1.61s | 0.67s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 0.22s | 0.66s | 0.20s | 1.60s | 0.67s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 0.24s | 0.70s | 0.20s | 1.54s | 0.67s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_3_pair] | 0.24s | 0.67s | 0.21s | 1.56s | 0.67s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 0.22s | 0.62s | 0.21s | 1.63s | 0.67s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE] | 0.23s | 0.69s | 0.25s | 1.51s | 0.67s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 0.25s | 0.68s | 0.20s | 1.54s | 0.67s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 0.24s | 0.61s | 0.20s | 1.61s | 0.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 0.24s | 0.59s | 0.19s | 1.64s | 0.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 0.25s | 0.61s | 0.20s | 1.59s | 0.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 0.23s | 0.64s | 0.20s | 1.58s | 0.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 0.23s | 0.60s | 0.21s | 1.60s | 0.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 0.25s | 0.58s | 0.20s | 1.60s | 0.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 0.28s | 0.58s | 0.20s | 1.58s | 0.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 0.21s | 0.63s | 0.19s | 1.60s | 0.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 0.22s | 0.63s | 0.19s | 1.59s | 0.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 0.24s | 0.65s | 0.20s | 1.54s | 0.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 0.23s | 0.65s | 0.19s | 1.56s | 0.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 0.22s | 0.61s | 0.21s | 1.57s | 0.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 0.23s | 0.68s | 0.19s | 1.51s | 0.65s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 0.21s | 0.64s | 0.19s | 1.55s | 0.65s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 0.24s | 0.67s | 0.19s | 1.49s | 0.65s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 0.23s | 0.62s | 0.20s | 1.53s | 0.65s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 0.26s | 0.61s | 0.21s | 1.50s | 0.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 0.25s | 0.67s | 0.20s | 1.46s | 0.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 0.22s | 0.64s | 0.19s | 1.51s | 0.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 0.24s | 0.63s | 0.19s | 1.51s | 0.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 0.23s | 0.60s | 0.19s | 1.53s | 0.64s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_1_pair_empty] | 0.23s | 0.59s | 0.19s | 1.53s | 0.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 0.22s | 0.61s | 0.19s | 1.51s | 0.63s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 0.23s | 0.59s | 0.19s | 1.52s | 0.63s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 0.23s | 0.60s | 0.20s | 1.50s | 0.63s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 0.24s | 0.57s | 0.19s | 1.50s | 0.62s |
| test_worst_compute.py::test_empty_block[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 0.17s | 0.56s | 0.09s | 1.58s | 0.60s |

## Summary

**Total unique test cases:** 528

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| openvm-v1.4.0 | 528 | 528 | 0 | 0 |
| risc0-v3.0.3 | 528 | 526 | 2 | 0 |
| sp1-v5.2.1 | 528 | 528 | 0 | 0 |
| zisk-v0.12.0 | 528 | 493 | 35 | 0 |

---

