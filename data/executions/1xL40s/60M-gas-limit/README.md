# 1xL40s - 60M-gas-limit

## Gas Limit Configuration - Execution

EEST benchmarks with 60M-gas-limit gas limit (execution results) on **1xL40s** hardware.

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
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-point_evaluation] | 1h 18m 14.37s | 19m 8.07s | 48m 41.22s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_127] | 38m 58.56s | 56m 29.97s | 47m 44.27s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 36m 26.06s | 56m 30.40s | 46m 28.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_8b_exp_896] | 38m 14.29s | 53m 23.87s | 45m 49.08s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_5_pair] | 33m 36.23s | 51m 57.37s | 42m 46.80s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_191] | 34m 29.14s | 50m 11.21s | 42m 20.17s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_4_pair] | 33m 6.47s | 50m 30.45s | 41m 48.46s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_2_pair] | 30m 20.55s | 46m 50.32s | 38m 35.43s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_two_pairings] | 30m 20.44s | 46m 48.87s | 38m 34.66s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_255] | 31m 28.66s | 43m 39.57s | 37m 34.12s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_one_pairing] | 27m 33.25s | 41m 40.63s | 34m 36.94s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_63] | 25m 14.11s | 39m 38.11s | 32m 26.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_867_gas_base_heavy] | 26m 32.84s | 35m 54.91s | 31m 13.87s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_800_gas_base_heavy] | 26m 23.40s | 35m 59.70s | 31m 11.55s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_guido_2_even] | 24m 44.90s | 37m 29.53s | 31m 7.21s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_marius_1_even] | 25m 28.61s | 36m 25.57s | 30m 57.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_616_gas_base_heavy] | 26m 17.18s | 35m 10.36s | 30m 43.77s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_408_gas_base_heavy] | 25m 39.60s | 35m 4.26s | 30m 21.93s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g1add] | 24m 33.56s | 35m 21.45s | 29m 57.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_264_exp_2] | 25m 27.50s | 34m 13.92s | 29m 50.71s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_3_qube] | 25m 12.93s | 33m 45.11s | 29m 29.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_16b_exp_320] | 24m 51.71s | 33m 30.09s | 29m 10.90s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_127] | 23m 43.44s | 34m 28.00s | 29m 5.72s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_256_exp_2] | 24m 31.58s | 33m 34.61s | 29m 3.09s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_127] | 23m 40.96s | 34m 16.96s | 28m 58.96s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_guido_1_even] | 22m 35.58s | 31m 35.22s | 27m 5.40s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_scalar] | 21m 57.69s | 30m 7.67s | 26m 2.68s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul] | 20m 52.20s | 31m 6.51s | 25m 59.36s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_min_gas_base_heavy] | 22m 18.88s | 29m 33.44s | 25m 56.16s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ecrecover] | 25m 42.42s | 25m 59.92s | 25m 51.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_1045_gas_base_heavy] | 25m 26.14s | ❌ SDK Crash | 25m 26.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_4_qube] | 25m 21.29s | ❌ SDK Crash | 25m 21.29s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_1_2_32_byte_scalar] | 20m 18.87s | 30m 18.53s | 25m 18.70s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_800_gas_exp_heavy] | 21m 8.16s | 28m 35.42s | 24m 51.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_852_gas_exp_heavy] | 21m 3.51s | 28m 38.48s | 24m 51.00s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_exp_298_gas_exp_heavy] | 20m 16.65s | 28m 45.47s | 24m 31.06s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_8_exp_896] | 19m 43.99s | 28m 28.03s | 24m 6.01s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_600_gas_exp_heavy] | 20m 18.37s | 27m 48.71s | 24m 3.54s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g2add] | 20m 0.41s | 27m 53.23s | 23m 56.82s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_4_square] | 19m 57.91s | 27m 36.34s | 23m 47.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_5_qube] | 19m 42.28s | 27m 47.02s | 23m 44.65s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_8_exp_648] | 19m 16.75s | 27m 20.96s | 23m 18.85s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_3_square] | 19m 59.31s | 26m 25.94s | 23m 12.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_exp_215_gas_exp_heavy] | 19m 12.22s | 27m 12.80s | 23m 12.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_1024_exp_2] | 19m 16.10s | 27m 4.44s | 23m 10.27s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_pawel_2] | 19m 39.19s | 26m 33.61s | 23m 6.40s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_400_gas_exp_heavy] | 19m 28.17s | 26m 24.97s | 22m 56.57s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_min_gas_exp_heavy] | 18m 46.77s | 26m 52.62s | 22m 49.70s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_127] | 18m 6.39s | 26m 15.13s | 22m 10.76s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SDIV-1] | 18m 7.54s | 26m 1.31s | 22m 4.42s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_pairing_check] | 34m 49.99s | 7m 32.50s | 21m 11.24s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALL] | 36m 18.17s | 5m 36.29s | 20m 57.23s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_STATICCALL] | 36m 22.00s | 5m 29.45s | 20m 55.72s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLCODE] | 36m 25.49s | 5m 24.35s | 20m 54.92s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_24b_exp_168] | 17m 23.41s | 23m 40.86s | 20m 32.14s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_add_1_2] | 17m 6.56s | 23m 34.98s | 20m 20.77s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODECOPY] | 35m 0.33s | 5m 14.49s | 20m 7.41s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODEHASH] | 34m 46.92s | 4m 41.36s | 19m 44.14s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_191] | 16m 11.66s | 23m 9.26s | 19m 40.46s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODESIZE] | 33m 54.45s | 5m 24.57s | 19m 39.51s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-blake2f] | 17m 30.11s | 21m 35.04s | 19m 32.57s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_191] | 16m 11.40s | 22m 49.23s | 19m 30.31s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DIV-1] | 15m 35.74s | 22m 47.20s | 19m 11.47s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SDIV-0] | 15m 34.60s | 22m 21.46s | 18m 58.03s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_add] | 15m 44.26s | 22m 4.85s | 18m 54.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_5_square] | 15m 53.40s | 21m 51.33s | 18m 52.36s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DIV-0] | 15m 23.09s | 21m 59.02s | 18m 41.06s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_63] | 14m 53.92s | 21m 50.63s | 18m 22.28s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_63] | 14m 38.65s | 21m 43.96s | 18m 11.31s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_765_gas_exp_heavy] | 14m 54.67s | 20m 48.33s | 17m 51.50s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_8] | 14m 46.89s | 20m 16.64s | 17m 31.77s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_pawel_3] | 14m 46.25s | 20m 0.88s | 17m 23.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_example_1] | ❌ SDK Crash | 17m 22.91s | 17m 22.91s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_fp_to_g2] | 28m 0.20s | 5m 58.23s | 16m 59.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_32b_exp_256] | 14m 13.77s | 19m 19.22s | 16m 46.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_32b_exp_96] | 13m 55.31s | 19m 36.34s | 16m 45.82s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_191] | 13m 24.95s | 19m 21.88s | 16m 23.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_32b_exp_40] | 13m 5.74s | 17m 41.66s | 15m 23.70s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_fp_to_g1] | 25m 50.40s | 4m 41.03s | 15m 15.72s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_32b_exp_256] | 12m 53.54s | 17m 35.61s | 15m 14.57s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_1360_gas_balanced] | 12m 37.22s | 17m 11.72s | 14m 54.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_677_gas_base_heavy] | 12m 29.96s | 17m 10.93s | 14m 50.45s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_128] | 12m 25.12s | 17m 14.14s | 14m 49.63s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1360n1] | 12m 31.83s | 17m 2.25s | 14m 47.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_32b_exp_96] | 12m 25.24s | 17m 3.78s | 14m 44.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_32b_exp_cover_windows] | 12m 30.41s | 16m 55.33s | 14m 42.87s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1349n1] | 12m 22.49s | 17m 0.40s | 14m 41.45s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_65] | 12m 27.53s | 16m 54.71s | 14m 41.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_64] | 12m 26.90s | 16m 45.15s | 14m 36.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_pawel_4] | 12m 13.17s | 16m 51.30s | 14m 32.24s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1360n2] | 11m 59.08s | 16m 31.49s | 14m 15.28s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_2_qube] | 12m 14.36s | 15m 55.53s | 14m 4.95s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_63] | 11m 10.04s | 16m 47.08s | 13m 58.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_min_gas_balanced] | 11m 51.26s | 15m 54.71s | 13m 52.99s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_exp_208_gas_balanced] | 11m 44.44s | 15m 48.55s | 13m 46.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_40] | 11m 41.15s | 15m 50.45s | 13m 45.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_600_gas_balanced] | 11m 1.38s | 15m 10.51s | 13m 5.94s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_36] | 11m 8.02s | 15m 2.84s | 13m 5.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_408_gas_balanced] | 10m 57.63s | 14m 56.43s | 12m 57.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_996_gas_balanced] | 10m 43.64s | 14m 52.58s | 12m 48.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_767_gas_balanced] | 10m 39.20s | 14m 39.97s | 12m 39.58s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1152n1] | 10m 39.92s | 14m 38.40s | 12m 39.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_32] | 9m 59.03s | 13m 28.66s | 11m 43.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_2_square] | 10m 2.93s | 12m 54.57s | 11m 28.75s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_64b_exp_512] | 8m 54.96s | 13m 34.01s | 11m 14.49s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g1msm] | 17m 25.75s | 4m 35.64s | 11m 0.70s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_1_pow_0x10001] | 9m 23.69s | 12m 22.19s | 10m 52.94s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_64b_exp_512] | 8m 40.74s | 12m 58.97s | 10m 49.86s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_255] | 8m 57.09s | 12m 40.09s | 10m 48.59s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_200n3] | 8m 51.96s | 11m 57.29s | 10m 24.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_200n2] | 8m 58.42s | 11m 35.27s | 10m 16.85s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_255] | 8m 20.31s | 11m 56.16s | 10m 8.24s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_2_pow_0x10001] | 8m 34.71s | 11m 39.25s | 10m 6.98s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_255] | 8m 18.18s | 11m 39.14s | 9m 58.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_3_pow_0x10001] | 7m 33.54s | 10m 54.96s | 9m 14.25s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 16m 48.67s | 1m 28.85s | 9m 8.76s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_128b_exp_1024] | 7m 4.40s | 11m 9.42s | 9m 6.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_128b_exp_1024] | 7m 6.75s | 10m 44.11s | 8m 55.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_200n1] | 7m 25.65s | 9m 33.21s | 8m 29.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_4_pow_0x10001] | 6m 46.44s | 9m 56.13s | 8m 21.29s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_256b_exp_1024] | 6m 39.40s | 10m 2.66s | 8m 21.03s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g2msm] | 15m 9.23s | 1m 26.90s | 8m 18.06s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_256b_exp_1024] | 6m 31.74s | 9m 57.84s | 8m 14.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_512b_exp_1024] | 5m 57.28s | 8m 59.40s | 7m 28.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_512b_exp_1024] | 5m 56.75s | 8m 52.70s | 7m 24.72s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_EXP-] | 4m 56.03s | 8m 12.23s | 6m 34.13s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_5_pow_0x10001] | 4m 58.88s | 6m 46.66s | 5m 52.77s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_1_qube] | 5m 7.72s | 6m 21.75s | 5m 44.73s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_BLOBBASEFEE] | 5m 6.54s | 6m 17.39s | 5m 41.96s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DELEGATECALL] | ❌ SDK Crash | 5m 26.34s | 5m 26.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_guido_3_even] | 4m 39.48s | 5m 46.17s | 5m 12.82s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_1024b_exp_1024] | 4m 6.29s | 5m 38.29s | 4m 52.29s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_1024b_exp_1024] | 4m 5.03s | 5m 35.73s | 4m 50.38s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_1_square] | 4m 28.73s | ❌ SDK Crash | 4m 28.73s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_diff_acc] | 4m 22.75s | 4m 22.26s | 4m 22.50s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_b] | 3m 46.86s | 4m 12.58s | 3m 59.72s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_STATICCALL] | 3m 19.83s | 4m 25.57s | 3m 52.70s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PREVRANDAO] | 3m 16.31s | 4m 23.62s | 3m 49.97s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_CALL] | 3m 17.17s | 4m 21.25s | 3m 49.21s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_CALLCODE] | 3m 15.74s | 4m 16.84s | 3m 46.29s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_diff_acc] | 3m 27.18s | 3m 59.90s | 3m 43.54s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_DELEGATECALL] | 3m 15.04s | 4m 11.06s | 3m 43.05s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_b] | 3m 6.62s | 3m 53.37s | 3m 29.99s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_a] | 3m 6.95s | 3m 51.89s | 3m 29.42s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SIGNEXTEND-] | 2m 47.72s | 4m 6.00s | 3m 26.86s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_add_infinities] | 2m 46.36s | 3m 40.43s | 3m 13.40s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of zero data-opcode_RETURN] | 3m 36.44s | 2m 50.01s | 3m 13.22s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of zero data-opcode_REVERT] | 3m 33.19s | 2m 46.98s | 3m 10.08s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-zero-loop] | 2m 23.58s | 3m 55.97s | 3m 9.77s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_STATICCALL] | 2m 45.09s | 3m 30.49s | 3m 7.79s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 2m 47.49s | 3m 27.26s | 3m 7.37s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SAR-] | 2m 30.10s | 3m 44.59s | 3m 7.34s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-one-loop] | 2m 20.40s | 3m 52.77s | 3m 6.59s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_CALL] | 2m 41.86s | 3m 30.38s | 3m 6.12s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-empty-opcode_RETURN] | 2m 43.31s | 3m 26.16s | 3m 4.73s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-empty-opcode_REVERT] | 2m 39.32s | 3m 28.19s | 3m 3.75s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_CALLCODE] | 2m 40.36s | 3m 25.08s | 3m 2.72s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_DELEGATECALL] | 2m 40.67s | 3m 22.11s | 3m 1.39s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 2m 24.88s | 3m 37.84s | 3m 1.36s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 2m 25.38s | 3m 36.80s | 3m 1.09s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 2m 20.98s | 3m 26.47s | 2m 53.73s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 2m 28.47s | 3m 10.19s | 2m 49.33s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-shift_right_SAR] | 2m 12.27s | 3m 17.40s | 2m 44.84s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-empty] | 2m 3.04s | 3m 14.21s | 2m 38.62s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 2m 12.94s | 3m 2.43s | 2m 37.69s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 2m 14.15s | 3m 0.30s | 2m 37.22s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 2m 10.41s | 2m 56.58s | 2m 33.50s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-0 bytes] | 2m 1.11s | 3m 0.98s | 2m 31.04s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value] | 3m 30.73s | 1m 25.07s | 2m 27.90s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSLOAD] | 3m 31.36s | 1m 20.43s | 2m 25.89s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 3m 29.24s | 1m 18.96s | 2m 24.10s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 3m 30.04s | 1m 16.71s | 2m 23.38s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 3m 27.54s | 1m 16.15s | 2m 21.85s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-100 bytes] | 1m 52.99s | 2m 44.35s | 2m 18.67s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SHL-] | 1m 47.87s | 2m 44.67s | 2m 16.27s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_RETURN] | 2m 25.28s | 2m 0.88s | 2m 13.08s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_REVERT] | 2m 20.54s | 2m 5.38s | 2m 12.96s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-shift_right_SHR] | 1m 45.44s | 2m 37.58s | 2m 11.51s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 1m 43.62s | 2m 31.19s | 2m 7.40s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH27] | 1m 38.35s | 2m 35.09s | 2m 6.72s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SHR-] | 1m 38.33s | 2m 29.24s | 2m 3.78s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_MUL-] | 1m 26.06s | 2m 38.30s | 2m 2.18s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value] | 2m 55.07s | 1m 7.93s | 2m 1.50s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_EQ-] | 1m 35.90s | 2m 25.63s | 2m 0.77s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH31] | 1m 35.96s | 2m 21.23s | 1m 58.60s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH23] | 1m 45.33s | 2m 8.14s | 1m 56.73s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH30] | 1m 32.56s | 2m 19.25s | 1m 55.91s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH32] | 1m 35.47s | 2m 14.98s | 1m 55.23s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CALLER] | 1m 36.15s | 2m 7.21s | 1m 51.68s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ORIGIN] | 1m 35.66s | 2m 7.51s | 1m 51.59s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH29] | 1m 30.58s | 2m 12.37s | 1m 51.47s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_COINBASE] | 1m 35.40s | 2m 6.26s | 1m 50.83s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ADDRESS] | 1m 34.97s | 2m 6.35s | 1m 50.66s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH26] | 1m 36.43s | 2m 4.10s | 1m 50.27s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH28] | 1m 30.56s | 2m 6.02s | 1m 48.29s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 2m 16.35s | 1m 18.86s | 1m 47.60s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-615b5b] | 1m 52.36s | 1m 42.10s | 1m 47.23s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH25] | 1m 31.04s | 2m 2.96s | 1m 47.00s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-100 bytes] | 1m 25.80s | 2m 6.87s | 1m 46.34s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH24] | 1m 30.73s | 2m 1.17s | 1m 45.95s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH22] | 1m 26.20s | 2m 5.45s | 1m 45.82s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_1_exp_heavy] | 1m 28.50s | 1m 56.78s | 1m 42.64s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_True] | 2m 22.55s | 1m 1.42s | 1m 41.98s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-605b] | 1m 47.70s | 1m 34.35s | 1m 41.03s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-615b5b5b] | 1m 44.45s | 1m 36.36s | 1m 40.40s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH21] | 1m 20.35s | 1m 47.97s | 1m 34.16s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE new value] | 1m 18.66s | 1m 47.53s | 1m 33.09s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH20] | 1m 20.64s | 1m 45.29s | 1m 32.96s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | 1m 56.02s | 1m 9.82s | 1m 32.92s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH19] | 1m 18.52s | 1m 44.03s | 1m 31.27s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 8.99s | 1m 49.12s | 1m 29.05s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 10.46s | 1m 47.42s | 1m 28.94s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 9.50s | 1m 47.79s | 1m 28.64s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 8.93s | 1m 48.34s | 1m 28.64s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 9.44s | 1m 47.80s | 1m 28.62s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 9.68s | 1m 47.47s | 1m 28.58s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 9.19s | 1m 47.60s | 1m 28.39s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 9.26s | 1m 47.48s | 1m 28.37s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-605b5b] | 1m 30.68s | 1m 25.55s | 1m 28.12s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 8.33s | 1m 47.75s | 1m 28.04s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 7.55s | 1m 47.99s | 1m 27.77s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 7.53s | 1m 47.35s | 1m 27.44s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 7.10s | 1m 46.50s | 1m 26.80s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH16] | 1m 13.59s | 1m 38.55s | 1m 26.07s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH18] | 1m 14.31s | 1m 37.17s | 1m 25.74s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH15] | 1m 12.51s | 1m 37.06s | 1m 24.78s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-six blobs, access latest] | 1m 15.38s | 1m 33.66s | 1m 24.52s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-one blob and accessed] | 1m 15.40s | 1m 33.31s | 1m 24.36s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH17] | 1m 11.09s | 1m 33.91s | 1m 22.50s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 1m 28.27s | 1m 14.46s | 1m 21.36s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 1m 29.42s | 1m 13.13s | 1m 21.27s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH14] | 1m 9.23s | 1m 32.39s | 1m 20.81s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | 1m 43.18s | 56.55s | 1m 19.86s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 1m 27.05s | 1m 12.14s | 1m 19.59s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-max code size] | 1m 30.30s | 1m 8.05s | 1m 19.17s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH13] | 1m 6.38s | 1m 28.02s | 1m 17.20s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH12] | 1m 5.23s | 1m 26.13s | 1m 15.68s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_BASEFEE] | 1m 4.03s | 1m 24.29s | 1m 14.16s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH11] | 1m 5.08s | 1m 23.09s | 1m 14.08s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CHAINID] | 1m 4.98s | 1m 22.56s | 1m 13.77s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_TIMESTAMP] | 1m 4.00s | 1m 22.54s | 1m 13.27s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GASPRICE] | 1m 3.53s | 1m 22.80s | 1m 13.16s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_NUMBER] | 1m 3.69s | 1m 22.03s | 1m 12.86s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH8] | 1m 3.42s | 1m 21.64s | 1m 12.53s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH7] | 1m 3.47s | 1m 21.42s | 1m 12.44s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH10] | 1m 1.90s | 1m 20.82s | 1m 11.36s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH9] | 59.67s | 1m 19.90s | 1m 9.78s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH6] | 1m 2.17s | 1m 17.05s | 1m 9.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_2_exp_heavy] | 57.85s | 1m 20.71s | 1m 9.28s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH5] | 59.30s | 1m 17.12s | 1m 8.21s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 54.42s | 1m 21.85s | 1m 8.14s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 54.77s | 1m 21.25s | 1m 8.01s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_MOD-] | 54.31s | 1m 21.43s | 1m 7.87s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 55.36s | 1m 20.38s | 1m 7.87s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_1000000] | 58.14s | 1m 17.13s | 1m 7.63s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 54.58s | 1m 20.38s | 1m 7.48s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GT-] | 53.15s | 1m 21.65s | 1m 7.40s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 54.24s | 1m 20.43s | 1m 7.34s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 54.16s | 1m 20.20s | 1m 7.18s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 54.27s | 1m 20.02s | 1m 7.15s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 56.17s | 1m 18.08s | 1m 7.12s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_1] | 58.22s | 1m 15.93s | 1m 7.07s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 54.38s | 1m 19.68s | 1m 7.03s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_100000] | 59.30s | 1m 14.20s | 1m 6.75s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_0] | 58.48s | 1m 14.89s | 1m 6.68s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH4] | 57.81s | 1m 15.35s | 1m 6.58s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_1000] | 58.87s | 1m 14.09s | 1m 6.48s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 53.52s | 1m 19.45s | 1m 6.48s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_LT-] | 53.08s | 1m 19.86s | 1m 6.47s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH3] | 59.33s | 1m 13.41s | 1m 6.37s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 53.26s | 1m 18.53s | 1m 5.89s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 52.92s | 1m 18.81s | 1m 5.86s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 1m 33.96s | 37.61s | 1m 5.78s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GASLIMIT] | 57.81s | 1m 13.68s | 1m 5.75s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CODESIZE] | 57.07s | 1m 14.24s | 1m 5.65s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 1m 33.35s | 37.34s | 1m 5.34s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GAS] | 57.68s | 1m 9.60s | 1m 3.64s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH0] | 56.49s | 1m 9.85s | 1m 3.17s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH2] | 53.66s | 1m 12.05s | 1m 2.85s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-1MiB] | 1m 17.89s | 46.49s | 1m 2.19s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 51.07s | 1m 12.82s | 1m 1.95s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-5b] | 59.22s | 1m 4.45s | 1m 1.83s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-0 bytes] | 49.83s | 1m 13.46s | 1m 1.64s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-00] | 58.54s | 1m 4.42s | 1m 1.48s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SGT-] | 47.82s | 1m 13.44s | 1m 0.63s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SUB-] | 48.55s | 1m 12.28s | 1m 0.41s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH1] | 52.65s | 1m 8.15s | 1m 0.40s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SLT-] | 47.72s | 1m 12.27s | 60.00s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-IDENTITY] | 1m 11.66s | 48.06s | 59.86s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 46.81s | 1m 12.06s | 59.44s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 46.55s | 1m 11.93s | 59.24s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ADD-] | 47.37s | 1m 10.70s | 59.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_heavy] | 50.64s | 1m 5.85s | 58.24s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-one blob but access non-existent index] | 51.29s | 1m 4.94s | 58.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_4_exp_heavy] | 50.51s | 1m 4.48s | 57.49s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-1MiB] | 1m 12.78s | 42.07s | 57.42s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_BYTE-] | 44.79s | 1m 8.40s | 56.59s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 44.58s | 1m 8.30s | 56.44s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-no blobs] | 48.85s | 1m 3.63s | 56.24s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 44.93s | 1m 6.19s | 55.56s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-1MiB] | 1m 13.00s | 36.01s | 54.51s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 41.85s | 1m 4.80s | 53.32s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_False] | 1m 15.08s | 31.18s | 53.12s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 53.09s | ❌ SDK Crash | 53.09s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ISZERO] | 42.50s | 1m 3.44s | 52.97s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP1] | 45.78s | 58.58s | 52.18s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 42.11s | 1m 2.03s | 52.07s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 41.00s | 1m 3.03s | 52.01s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 40.88s | 1m 2.76s | 51.82s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 41.12s | 1m 2.34s | 51.73s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 40.71s | 1m 2.67s | 51.69s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP14] | 44.48s | 58.72s | 51.60s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP11] | 44.74s | 58.30s | 51.52s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 41.47s | 1m 1.51s | 51.49s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP8] | 44.26s | 58.69s | 51.48s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP16] | 43.81s | 59.02s | 51.41s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP5] | 44.46s | 58.28s | 51.37s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-SHA2-256] | 22.61s | 1m 20.11s | 51.36s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP10] | 43.81s | 58.90s | 51.35s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP4] | 44.21s | 58.35s | 51.28s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP13] | 44.12s | 58.37s | 51.25s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP2] | 44.17s | 58.27s | 51.22s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP6] | 44.04s | 58.31s | 51.17s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP7] | 44.45s | 57.85s | 51.15s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP9] | 44.25s | 57.99s | 51.12s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP3] | 44.05s | 58.05s | 51.05s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP12] | 44.10s | 57.85s | 50.97s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP15] | 43.98s | 57.67s | 50.82s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 40.02s | 1m 1.52s | 50.77s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 40.75s | 1m 0.19s | 50.47s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_False-non_zero_value_True] | 40.68s | 1m 0.04s | 50.36s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 40.38s | 1m 0.34s | 50.36s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_1_2_2_scalar] | 42.72s | 57.21s | 49.96s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_XOR-] | 39.36s | 1m 0.53s | 49.95s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 40.42s | 59.20s | 49.81s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_True-non_zero_value_False] | 40.71s | 58.82s | 49.77s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_OR-] | 39.05s | 1m 0.33s | 49.69s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_True-non_zero_value_True] | 40.18s | 59.03s | 49.60s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_False-non_zero_value_False] | 40.21s | 58.95s | 49.58s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_AND-] | 38.92s | 1m 0.08s | 49.50s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODESIZE] | 41.27s | 57.39s | 49.33s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-100 bytes] | 38.57s | 59.43s | 49.00s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE same value] | 38.17s | 56.80s | 47.48s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-1MiB] | 1m 7.38s | 27.13s | 47.26s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-calldata_length_10000] | 36.98s | 57.44s | 47.21s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODESIZE] | 38.63s | 55.69s | 47.16s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-calldata_length_0] | 37.70s | 56.33s | 47.01s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 37.53s | 55.62s | 46.58s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 37.63s | 55.46s | 46.55s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 37.88s | 55.19s | 46.53s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-calldata_length_1000] | 37.63s | 55.20s | 46.41s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 37.75s | 54.99s | 46.37s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 37.52s | 54.67s | 46.10s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 37.34s | 54.11s | 45.72s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 1m 6.30s | 25.14s | 45.72s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_2_scalar] | 38.45s | 52.70s | 45.57s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 36.81s | 54.05s | 45.43s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 35.29s | 54.34s | 44.81s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-100 bytes] | 35.83s | 53.77s | 44.80s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODEHASH] | 36.21s | 51.68s | 43.95s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 35.14s | 52.56s | 43.85s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 34.65s | 51.97s | 43.31s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-10KiB] | 38.62s | 47.63s | 43.12s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SMOD-] | 33.36s | 51.07s | 42.22s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_NOT] | 33.80s | 50.44s | 42.12s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODEHASH] | 34.18s | 49.74s | 41.96s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 41.59s | ❌ SDK Crash | 41.59s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP1] | 32.59s | 50.13s | 41.36s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_BALANCE] | 33.42s | 46.69s | 40.05s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-512] | 33.83s | 46.02s | 39.92s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSLOAD] | 37.41s | 42.17s | 39.79s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_BALANCE] | 32.94s | 46.35s | 39.64s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 31.84s | 47.01s | 39.42s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 56.03s | 22.37s | 39.20s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 52.42s | 21.89s | 37.15s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 1m 0.51s | 12.04s | 36.27s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 59.38s | 11.75s | 35.56s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB] | 29.54s | 39.09s | 34.31s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 27.77s | 40.60s | 34.18s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 26.68s | 39.41s | 33.04s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_True-key_mut_False] | 25.45s | 35.50s | 30.48s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_True-key_mut_True] | 25.37s | 35.25s | 30.30s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0.75x max code size] | 21.78s | 38.71s | 30.25s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_True] | 24.86s | 34.79s | 29.82s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0.25x max code size] | 24.68s | 34.73s | 29.71s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_False] | 24.90s | 34.46s | 29.68s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_True] | 24.77s | 34.54s | 29.65s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SLOAD] | 23.95s | 34.69s | 29.32s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_False] | 24.88s | 33.54s | 29.21s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_zkevm_worst_case] | 24.47s | 33.10s | 28.79s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-10KiB] | 23.31s | 32.61s | 27.96s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP2] | 22.12s | 33.76s | 27.94s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-10KiB] | 23.23s | 31.62s | 27.43s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0.50x max code size] | 14.29s | 39.45s | 26.87s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0.50x max code size] | 22.75s | 30.85s | 26.80s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-max code size] | 14.38s | 39.05s | 26.71s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 33.48s | 19.36s | 26.42s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0.75x max code size] | 14.00s | 38.74s | 26.37s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 21.34s | 31.28s | 26.31s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_example_2] | 19.59s | 27.49s | 23.54s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-5KiB] | 19.26s | 26.78s | 23.02s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-zero_byte_True] | 30.79s | 13.26s | 22.02s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP3] | 16.90s | 25.27s | 21.08s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-RIPEMD-160] | 17.71s | 24.43s | 21.07s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 23.13s | 12.29s | 17.71s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-10KiB] | 14.25s | 20.95s | 17.60s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0.25x max code size] | 14.38s | 20.67s | 17.52s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 14.18s | 20.75s | 17.46s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 13.94s | 20.63s | 17.28s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 14.21s | 20.34s | 17.27s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP4] | 13.50s | 20.40s | 16.95s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP5] | 11.50s | 16.59s | 14.04s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CREATE] | 18.80s | 8.16s | 13.48s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 11.64s | 15.20s | 13.42s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value] | 15.81s | 9.17s | 12.49s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value] | 15.84s | 9.07s | 12.46s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP6] | 9.99s | 14.35s | 12.17s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_RETURN] | 16.31s | 5.90s | 11.10s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_REVERT] | 16.08s | 5.84s | 10.96s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP7] | 8.95s | 12.85s | 10.90s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 10.01s | 11.50s | 10.75s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 10.00s | 11.36s | 10.68s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP8] | 7.94s | 11.19s | 9.56s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 8.32s | 10.54s | 9.43s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of zero data-opcode_REVERT] | 13.59s | 4.58s | 9.09s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of zero data-opcode_RETURN] | 13.22s | 4.44s | 8.83s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_False-key_mut_False] | 7.40s | 10.25s | 8.82s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP9] | 7.26s | 10.19s | 8.72s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_False-key_mut_True] | 7.21s | 9.73s | 8.47s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP10] | 6.86s | 9.38s | 8.12s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP11] | 6.21s | 8.57s | 7.39s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 9.37s | 5.05s | 7.21s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP12] | 5.65s | 7.77s | 6.71s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 6.35s | 6.97s | 6.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 6.37s | 6.94s | 6.65s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE2] | 9.27s | 3.66s | 6.46s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE2] | 9.28s | 3.49s | 6.38s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP13] | 5.37s | 7.31s | 6.34s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 8.35s | 4.22s | 6.29s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 7.97s | 4.55s | 6.26s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_infinities_2_scalar] | 5.76s | 6.58s | 6.17s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_infinities_32_byte_scalar] | 5.73s | 6.52s | 6.12s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-zero_byte_False] | 8.48s | 3.72s | 6.10s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP14] | 5.02s | 6.98s | 6.00s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE] | 8.05s | 3.57s | 5.81s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 7.77s | 3.74s | 5.76s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE] | 8.11s | 3.37s | 5.74s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP15] | 4.84s | 6.49s | 5.67s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 5.73s | 5.12s | 5.43s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 5.96s | 4.88s | 5.42s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 5.50s | 5.30s | 5.40s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP16] | 4.68s | 6.05s | 5.37s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 5.74s | 4.71s | 5.23s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 5.59s | 4.70s | 5.14s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 4.92s | 5.04s | 4.98s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 4.80s | 4.92s | 4.86s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 4.81s | 3.95s | 4.38s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 4.31s | 4.07s | 4.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 4.34s | 4.01s | 4.17s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 4.09s | 3.62s | 3.86s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 4.11s | 3.57s | 3.84s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 3.78s | 3.49s | 3.63s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 3.70s | 3.49s | 3.60s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 3.35s | 2.78s | 3.06s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 3.30s | 2.80s | 3.05s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 3.24s | 2.49s | 2.86s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 3.22s | 2.46s | 2.84s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CREATE2] | 3.90s | 1.76s | 2.83s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 2.87s | 2.27s | 2.57s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 2.88s | 2.23s | 2.56s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE2] | 3.36s | 0.54s | 1.95s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE2] | 3.35s | 0.53s | 1.94s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE2] | 3.24s | 0.52s | 1.88s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE2] | 3.22s | 0.52s | 1.87s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE2] | 3.19s | 0.54s | 1.87s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE2] | 3.19s | 0.52s | 1.86s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE2] | 3.14s | 0.51s | 1.83s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE2] | 3.07s | 0.50s | 1.78s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE] | 2.39s | 0.45s | 1.42s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE] | 2.28s | 0.43s | 1.35s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE] | 2.26s | 0.41s | 1.33s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE] | 2.21s | 0.41s | 1.31s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE] | 2.17s | 0.43s | 1.30s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 1.91s | 0.65s | 1.28s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 1.89s | 0.66s | 1.27s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE] | 2.14s | 0.39s | 1.26s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 1.84s | 0.68s | 1.26s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE] | 2.10s | 0.42s | 1.26s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 1.85s | 0.65s | 1.25s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 1.84s | 0.64s | 1.24s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 1.84s | 0.64s | 1.24s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE] | 2.07s | 0.38s | 1.23s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 1.76s | 0.69s | 1.22s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 1.80s | 0.64s | 1.22s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 1.79s | 0.65s | 1.22s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 1.78s | 0.66s | 1.22s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 1.78s | 0.65s | 1.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 1.77s | 0.65s | 1.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 1.75s | 0.66s | 1.20s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 1.72s | 0.65s | 1.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 1.72s | 0.62s | 1.17s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 1.78s | 0.54s | 1.16s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 1.75s | 0.56s | 1.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 1.73s | 0.56s | 1.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 1.74s | 0.54s | 1.14s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 1.72s | 0.55s | 1.13s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 1.75s | 0.52s | 1.13s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 1.74s | 0.52s | 1.13s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 1.74s | 0.51s | 1.13s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 1.72s | 0.52s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 1.64s | 0.60s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 1.72s | 0.52s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 1.71s | 0.52s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 1.69s | 0.53s | 1.11s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 1.69s | 0.54s | 1.11s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 1.69s | 0.53s | 1.11s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 1.69s | 0.51s | 1.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 1.69s | 0.52s | 1.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 1.67s | 0.53s | 1.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 1.67s | 0.53s | 1.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 1.68s | 0.51s | 1.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 1.67s | 0.52s | 1.09s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 1.67s | 0.52s | 1.09s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 1.67s | 0.52s | 1.09s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 1.64s | 0.53s | 1.08s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_2_sets] | 1.28s | 0.88s | 1.08s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 1.64s | 0.51s | 1.07s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_zero_input] | 1.29s | 0.73s | 1.01s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_1_pair] | 1.21s | 0.75s | 0.98s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_1_pair_empty] | 1.02s | 0.20s | 0.61s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_3_pair] | 0.89s | 0.21s | 0.55s |
| test_worst_compute.py::test_empty_block[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 0.67s | 0.10s | 0.38s |

## Summary

**Total unique test cases:** 532

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| risc0-v3.0.3 | 532 | 530 | 2 | 0 |
| sp1-v5.2.1 | 532 | 527 | 5 | 0 |

---

## reth


## Execution Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | openvm-v1.4.1 | risc0-v3.0.3 | sp1-v5.2.3 | zisk-v0.12.0 | Avg |
|-----------|-----------|-----------|-----------|-----------|----------|
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g1msm] | — | ❌ SDK Crash | — | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g2msm] | — | ❌ SDK Crash | — | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_5_qube] | — | 1h 25m 2.33s | — | ❌ SDK Crash | 1h 25m 2.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_4_qube] | — | 1h 23m 42.84s | — | ❌ SDK Crash | 1h 23m 42.84s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-point_evaluation] | — | 1h 18m 10.41s | — | ❌ SDK Crash | 1h 18m 10.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_qube] | 17m 33.94s | — | 2h 18m 11.94s | — | 1h 17m 52.94s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_5_square] | — | 1h 17m 50.59s | — | ❌ SDK Crash | 1h 17m 50.59s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_1024_exp_2] | — | 1h 17m 20.71s | — | ❌ SDK Crash | 1h 17m 20.71s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_4_square] | — | 1h 16m 36.99s | — | ❌ SDK Crash | 1h 16m 36.98s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_3_qube] | — | 1h 16m 9.43s | — | ❌ SDK Crash | 1h 16m 9.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_1045_gas_base_heavy] | — | 1h 15m 24.35s | — | ❌ SDK Crash | 1h 15m 24.35s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_800_gas_base_heavy] | — | 1h 14m 14.59s | — | ❌ SDK Crash | 1h 14m 14.59s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_qube] | 17m 30.11s | — | 2h 10m 2.18s | — | 1h 13m 46.15s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_867_gas_base_heavy] | — | 1h 11m 20.34s | — | ❌ SDK Crash | 1h 11m 20.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_3_square] | — | 1h 10m 39.43s | — | ❌ SDK Crash | 1h 10m 39.43s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_square] | 15m 58.65s | — | 2h 4m 35.36s | — | 1h 10m 17.00s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_408_gas_base_heavy] | — | 1h 9m 49.74s | — | ❌ SDK Crash | 1h 9m 49.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1024_exp_2] | 16m 32.38s | — | 2h 2m 43.22s | — | 1h 9m 37.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_264_exp_2] | — | 1h 9m 3.30s | — | ❌ SDK Crash | 1h 9m 3.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_616_gas_base_heavy] | — | 1h 8m 58.27s | — | ❌ SDK Crash | 1h 8m 58.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_square] | 16m 51.13s | — | 1h 59m 59.22s | — | 1h 8m 25.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_256_exp_2] | — | 1h 8m 23.00s | — | ❌ SDK Crash | 1h 8m 23.00s |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_60M-blockchain_test-point_evaluation] | 19m 28.68s | — | 1h 55m 48.79s | — | 1h 7m 38.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1045_gas_base_heavy] | 15m 54.85s | — | 1h 58m 57.68s | — | 1h 7m 26.26s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_867_gas_base_heavy] | 16m 14.82s | — | 1h 56m 58.81s | — | 1h 6m 36.82s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_800_gas_base_heavy] | 15m 17.09s | — | 1h 57m 51.64s | — | 1h 6m 34.36s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_qube] | 14m 35.44s | — | 1h 54m 45.47s | — | 1h 4m 40.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_616_gas_base_heavy] | 14m 45.79s | — | 1h 51m 23.95s | — | 1h 3m 4.87s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_408_gas_base_heavy] | 13m 57.91s | — | 1h 47m 17.57s | — | 1h 0m 37.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_264_exp_2] | 13m 35.83s | — | 1h 44m 48.58s | — | 59m 12.20s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_square] | 13m 28.02s | — | 1h 42m 23.19s | — | 57m 55.60s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_min_gas_base_heavy] | — | 57m 26.50s | — | ❌ SDK Crash | 57m 26.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_256_exp_2] | 13m 26.89s | — | 1h 40m 53.76s | — | 57m 10.32s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_8b_exp_896] | — | 49m 34.91s | — | ❌ SDK Crash | 49m 34.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_8_exp_896] | — | 48m 26.10s | — | ❌ SDK Crash | 48m 26.10s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_exp_298_gas_exp_heavy] | — | 47m 58.65s | — | ❌ SDK Crash | 47m 58.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_base_heavy] | 11m 17.17s | — | 1h 24m 37.46s | — | 47m 57.31s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_1_exp_heavy] | — | 46m 8.48s | — | ❌ SDK Crash | 46m 8.48s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_8_exp_648] | — | 44m 4.40s | — | ❌ SDK Crash | 44m 4.40s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_exp_215_gas_exp_heavy] | — | 44m 0.53s | — | ❌ SDK Crash | 44m 0.53s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_min_gas_exp_heavy] | — | 42m 50.84s | — | ❌ SDK Crash | 42m 50.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_8b_exp_896] | 10m 26.98s | — | 1h 10m 32.24s | — | 40m 29.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_8_exp_896] | 10m 13.49s | — | 1h 9m 12.25s | — | 39m 42.87s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_298_gas_exp_heavy] | 10m 15.26s | — | 1h 8m 54.72s | — | 39m 34.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_1_exp_heavy] | 9m 36.74s | — | 1h 6m 26.41s | — | 38m 1.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_215_gas_exp_heavy] | 9m 57.45s | — | 1h 2m 37.00s | — | 36m 17.23s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_8_exp_648] | 9m 19.78s | — | 1h 2m 56.63s | — | 36m 8.20s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_exp_heavy] | 9m 4.66s | — | 1h 2m 34.80s | — | 35m 49.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_guido_3_even] | — | 35m 30.26s | — | ❌ SDK Crash | 35m 30.26s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_3_even] | 8m 1.59s | — | 56m 6.24s | — | 32m 3.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_2_qube] | — | 32m 0.47s | — | ❌ SDK Crash | 32m 0.47s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_pairing_check] | — | 31m 56.03s | — | ❌ SDK Crash | 31m 56.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_2_square] | — | 29m 45.25s | — | ❌ SDK Crash | 29m 45.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_852_gas_exp_heavy] | — | 29m 9.43s | — | ❌ SDK Crash | 29m 9.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_800_gas_exp_heavy] | — | 28m 53.43s | — | ❌ SDK Crash | 28m 53.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_600_gas_exp_heavy] | — | 28m 1.57s | — | ❌ SDK Crash | 28m 1.57s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_16b_exp_320] | — | 27m 40.28s | — | ❌ SDK Crash | 27m 40.28s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_pawel_2] | — | 26m 32.80s | — | ❌ SDK Crash | 26m 32.80s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_fp_to_g1] | 8m 53.39s | — | 43m 35.25s | — | 26m 14.32s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_400_gas_exp_heavy] | — | 26m 5.90s | — | ❌ SDK Crash | 26m 5.90s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_60M-blockchain_test-ecrecover] | 25m 46.14s | — | 25m 22.26s | — | 25m 34.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_2_exp_heavy] | — | 25m 7.22s | — | ❌ SDK Crash | 25m 7.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_qube] | 6m 6.71s | — | 44m 1.39s | — | 25m 4.05s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_800_gas_exp_heavy] | 6m 37.90s | — | 42m 7.04s | — | 24m 22.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_guido_2_even] | — | 24m 1.27s | — | ❌ SDK Crash | 24m 1.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_852_gas_exp_heavy] | 6m 44.21s | — | 41m 11.76s | — | 23m 57.98s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_600_gas_exp_heavy] | 6m 50.28s | — | 40m 35.67s | — | 23m 42.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_square] | 5m 43.76s | — | 41m 14.62s | — | 23m 29.19s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_pairing_check] | 6m 40.47s | — | 40m 15.00s | — | 23m 27.73s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_16b_exp_320] | 6m 14.78s | — | 39m 36.68s | — | 22m 55.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_765_gas_exp_heavy] | — | 21m 58.12s | — | ❌ SDK Crash | 21m 58.12s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_fp_to_g1] | — | 21m 54.13s | — | ❌ SDK Crash | 21m 54.13s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_2] | 6m 6.18s | — | 37m 40.25s | — | 21m 53.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_400_gas_exp_heavy] | 6m 0.70s | — | 37m 29.43s | — | 21m 45.06s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_marius_1_even] | — | 21m 43.37s | — | ❌ SDK Crash | 21m 43.37s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_pawel_3] | — | 21m 10.91s | — | ❌ SDK Crash | 21m 10.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 5m 40.72s | — | 36m 17.70s | — | 20m 59.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_2_even] | 5m 43.40s | — | 36m 9.61s | — | 20m 56.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_1360_gas_balanced] | — | 20m 45.00s | — | ❌ SDK Crash | 20m 45.00s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_32b_exp_256] | — | 20m 9.26s | — | ❌ SDK Crash | 20m 9.26s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_32b_exp_256] | — | 20m 9.22s | — | ❌ SDK Crash | 20m 9.21s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_example_1] | — | 19m 58.40s | — | ❌ SDK Crash | 19m 58.40s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_heavy] | — | 19m 49.92s | — | ❌ SDK Crash | 19m 49.92s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_24b_exp_168] | — | 19m 32.90s | — | ❌ SDK Crash | 19m 32.90s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g2add] | — | 19m 25.08s | — | ❌ SDK Crash | 19m 25.08s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_zkevm_worst_case] | — | 19m 24.95s | — | ❌ SDK Crash | 19m 24.95s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_32b_exp_96] | — | 19m 17.21s | — | ❌ SDK Crash | 19m 17.21s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_128] | — | 18m 59.87s | — | ❌ SDK Crash | 18m 59.87s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_677_gas_base_heavy] | — | 18m 55.09s | — | ❌ SDK Crash | 18m 55.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_example_2] | — | 18m 52.09s | — | ❌ SDK Crash | 18m 52.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_8] | — | 18m 50.27s | — | ❌ SDK Crash | 18m 50.27s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_32b_exp_96] | — | 18m 45.95s | — | ❌ SDK Crash | 18m 45.95s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_fp_to_g2] | — | 18m 41.94s | — | ❌ SDK Crash | 18m 41.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_marius_1_even] | 4m 59.03s | — | 32m 16.95s | — | 18m 37.99s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_fp_to_g2] | 5m 49.48s | — | 30m 56.04s | — | 18m 22.76s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_pawel_4] | — | 18m 21.28s | — | ❌ SDK Crash | 18m 21.28s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_765_gas_exp_heavy] | 4m 50.63s | — | 31m 43.66s | — | 18m 17.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_24b_exp_168] | 4m 45.96s | — | 31m 22.97s | — | 18m 4.46s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_65] | — | 18m 4.23s | — | ❌ SDK Crash | 18m 4.23s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-blake2f] | — | 17m 43.02s | — | ❌ SDK Crash | 17m 43.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1360n1] | — | 17m 39.48s | — | ❌ SDK Crash | 17m 39.48s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_600_gas_balanced] | — | 17m 36.25s | — | ❌ SDK Crash | 17m 36.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_3] | 4m 37.78s | — | 30m 28.27s | — | 17m 33.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_4_exp_heavy] | — | 17m 26.45s | — | ❌ SDK Crash | 17m 26.45s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_64] | — | 17m 13.59s | — | ❌ SDK Crash | 17m 13.59s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_256] | 4m 36.83s | — | 29m 31.58s | — | 17m 4.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_996_gas_balanced] | — | 16m 58.99s | — | ❌ SDK Crash | 16m 58.99s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_32b_exp_40] | — | 16m 53.86s | — | ❌ SDK Crash | 16m 53.86s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_767_gas_balanced] | — | 16m 45.52s | — | ❌ SDK Crash | 16m 45.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_min_gas_balanced] | — | 16m 42.49s | — | ❌ SDK Crash | 16m 42.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_256] | 4m 20.15s | — | 28m 55.57s | — | 16m 37.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1360_gas_balanced] | 4m 15.47s | — | 28m 54.38s | — | 16m 34.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_example_1] | 4m 19.22s | — | 28m 47.43s | — | 16m 33.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 4m 23.44s | — | 28m 41.19s | — | 16m 32.32s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_zkevm_worst_case] | 4m 28.43s | — | 27m 46.50s | — | 16m 7.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_64b_exp_512] | — | 16m 4.31s | — | ❌ SDK Crash | 16m 4.31s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_64b_exp_512] | — | 16m 2.84s | — | ❌ SDK Crash | 16m 2.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_96] | 4m 3.84s | — | 27m 52.45s | — | 15m 58.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1360n2] | — | 15m 57.41s | — | ❌ SDK Crash | 15m 57.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_408_gas_balanced] | — | 15m 52.13s | — | ❌ SDK Crash | 15m 52.13s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1349n1] | — | 15m 49.01s | — | ❌ SDK Crash | 15m 49.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_677_gas_base_heavy] | 4m 1.95s | — | 27m 34.75s | — | 15m 48.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_128] | 4m 1.95s | — | 27m 34.60s | — | 15m 48.27s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_40] | — | 15m 39.04s | — | ❌ SDK Crash | 15m 39.03s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_example_2] | 3m 59.84s | — | 27m 10.86s | — | 15m 35.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_8] | 4m 10.77s | — | 26m 48.76s | — | 15m 29.76s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_128b_exp_1024] | — | 15m 26.72s | — | ❌ SDK Crash | 15m 26.72s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_96] | 4m 2.52s | — | 26m 48.33s | — | 15m 25.42s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g1add] | — | 15m 19.63s | — | ❌ SDK Crash | 15m 19.63s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g2add] | 4m 44.66s | — | 25m 41.93s | — | 15m 13.29s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_36] | — | 15m 12.90s | — | ❌ SDK Crash | 15m 12.90s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_4] | 3m 58.31s | — | 26m 18.11s | — | 15m 8.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_65] | 4m 0.56s | — | 25m 57.33s | — | 14m 58.94s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g1add] | 4m 34.19s | — | 25m 5.91s | — | 14m 50.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_32b_exp_cover_windows] | — | 14m 45.25s | — | ❌ SDK Crash | 14m 45.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_guido_1_even] | — | 14m 38.17s | — | ❌ SDK Crash | 14m 38.17s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_408_gas_balanced] | 3m 29.51s | — | 25m 30.14s | — | 14m 29.83s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_128b_exp_1024] | — | 14m 29.53s | — | ❌ SDK Crash | 14m 29.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 3m 59.27s | — | 24m 54.87s | — | 14m 27.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_600_gas_balanced] | 3m 34.00s | — | 25m 8.74s | — | 14m 21.37s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_2_pow_0x10001] | — | 14m 14.95s | — | ❌ SDK Crash | 14m 14.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_64] | 3m 39.89s | — | 24m 41.79s | — | 14m 10.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_256b_exp_1024] | — | 14m 9.23s | — | ❌ SDK Crash | 14m 9.23s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_exp_208_gas_balanced] | — | 14m 7.17s | — | ❌ SDK Crash | 14m 7.17s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1360n1] | 3m 40.30s | — | 24m 33.20s | — | 14m 6.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_64b_exp_512] | 3m 28.51s | — | 24m 36.44s | — | 14m 2.48s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_1_pow_0x10001] | — | 13m 57.52s | — | ❌ SDK Crash | 13m 57.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_767_gas_balanced] | 3m 29.74s | — | 24m 18.31s | — | 13m 54.03s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_40] | 3m 49.51s | — | 23m 58.37s | — | 13m 53.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_64b_exp_512] | 3m 28.44s | — | 24m 16.37s | — | 13m 52.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_256b_exp_1024] | — | 13m 51.25s | — | ❌ SDK Crash | 13m 51.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_balanced] | 3m 41.00s | — | 23m 47.13s | — | 13m 44.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_996_gas_balanced] | 3m 24.53s | — | 23m 59.94s | — | 13m 42.23s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_512b_exp_1024] | — | 13m 28.96s | — | ❌ SDK Crash | 13m 28.96s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_512b_exp_1024] | — | 13m 28.50s | — | ❌ SDK Crash | 13m 28.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1360n2] | 3m 23.07s | — | 23m 30.89s | — | 13m 26.98s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_32] | — | 13m 8.12s | — | ❌ SDK Crash | 13m 8.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_3_pow_0x10001] | — | 12m 56.65s | — | ❌ SDK Crash | 12m 56.65s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g1msm] | 4m 26.31s | — | 21m 26.39s | — | 12m 56.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_208_gas_balanced] | 3m 19.98s | — | 22m 23.55s | — | 12m 51.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_128b_exp_1024] | 3m 16.43s | — | 22m 26.99s | — | 12m 51.71s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_40] | 3m 33.57s | — | 22m 9.19s | — | 12m 51.38s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_60M-blockchain_test-blake2f] | 4m 24.82s | — | 21m 11.75s | — | 12m 48.28s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_128b_exp_1024] | 3m 14.20s | — | 22m 17.39s | — | 12m 45.79s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1349n1] | 3m 20.39s | — | 22m 10.84s | — | 12m 45.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_1024b_exp_1024] | — | 12m 40.37s | — | ❌ SDK Crash | 12m 40.37s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_36] | 3m 16.10s | — | 21m 52.66s | — | 12m 34.38s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_4_pow_0x10001] | — | 12m 24.41s | — | ❌ SDK Crash | 12m 24.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_1_even] | 3m 12.29s | — | 21m 29.88s | — | 12m 21.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_1024b_exp_1024] | — | 12m 14.76s | — | ❌ SDK Crash | 12m 14.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_256b_exp_1024] | 2m 54.69s | — | 21m 32.76s | — | 12m 13.72s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_256b_exp_1024] | 2m 55.31s | — | 21m 24.47s | — | 12m 9.89s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_5_pow_0x10001] | — | 12m 7.88s | — | ❌ SDK Crash | 12m 7.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_cover_windows] | 3m 18.04s | — | 20m 35.80s | — | 11m 56.92s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_512b_exp_1024] | 2m 48.48s | — | 20m 35.01s | — | 11m 41.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_512b_exp_1024] | 2m 48.05s | — | 20m 32.33s | — | 11m 40.19s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_200n3] | — | 11m 26.93s | — | ❌ SDK Crash | 11m 26.93s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_200n2] | — | 11m 23.91s | — | ❌ SDK Crash | 11m 23.91s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add] | 3m 27.90s | — | 19m 0.09s | — | 11m 14.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 2m 42.38s | — | 19m 35.74s | — | 11m 9.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_1024b_exp_1024] | 2m 39.15s | — | 19m 34.73s | — | 11m 6.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_1024b_exp_1024] | 2m 38.32s | — | 19m 34.21s | — | 11m 6.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 2m 54.96s | — | 19m 7.91s | — | 11m 1.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1152n1] | — | 10m 50.84s | — | ❌ SDK Crash | 10m 50.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_32] | 2m 50.74s | — | 18m 45.94s | — | 10m 48.34s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 2m 35.94s | — | 18m 27.79s | — | 10m 31.86s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_1_qube] | — | 10m 23.77s | — | ❌ SDK Crash | 10m 23.77s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 2m 34.61s | — | 17m 51.64s | — | 10m 13.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 2m 30.88s | — | 17m 52.33s | — | 10m 11.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_1_square] | — | 9m 50.92s | — | ❌ SDK Crash | 9m 50.92s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ecrecover] | — | 9m 38.52s | — | ❌ SDK Crash | 9m 38.51s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n3] | 2m 24.10s | — | 16m 7.13s | — | 9m 15.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n2] | 2m 33.27s | — | 15m 44.24s | — | 9m 8.75s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul] | 6m 44.87s | — | 11m 20.43s | — | 9m 2.65s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1152n1] | 2m 15.81s | — | 15m 31.53s | — | 8m 53.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_200n1] | — | 8m 51.00s | — | ❌ SDK Crash | 8m 51.00s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 6m 16.50s | — | 11m 16.88s | — | 8m 46.69s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | — | 8m 46.64s | — | ❌ SDK Crash | 8m 46.64s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 6m 10.60s | — | 11m 16.42s | — | 8m 43.51s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g2msm] | 2m 32.09s | — | 14m 22.72s | — | 8m 27.40s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_5_pair] | — | 8m 18.63s | — | ❌ SDK Crash | 8m 18.63s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_4_pair] | — | 8m 13.97s | — | ❌ SDK Crash | 8m 13.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_qube] | 2m 4.44s | — | 14m 14.17s | — | 8m 9.31s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_2_pair] | — | 7m 55.89s | — | ❌ SDK Crash | 7m 55.89s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_two_pairings] | — | 7m 54.82s | — | ❌ SDK Crash | 7m 54.82s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_STATICCALL] | — | 7m 52.18s | — | ❌ SDK Crash | 7m 52.18s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DELEGATECALL] | — | 7m 49.76s | — | ❌ SDK Crash | 7m 49.76s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALL] | — | 7m 49.70s | — | ❌ SDK Crash | 7m 49.70s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLCODE] | — | 7m 49.26s | — | ❌ SDK Crash | 7m 49.26s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODESIZE] | — | 7m 42.24s | — | ❌ SDK Crash | 7m 42.24s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODEHASH] | — | 7m 39.61s | — | ❌ SDK Crash | 7m 39.61s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_one_pairing] | — | 7m 35.81s | — | ❌ SDK Crash | 7m 35.81s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_square] | 1m 58.25s | — | 13m 4.84s | — | 7m 31.55s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODECOPY] | — | 7m 24.41s | — | ❌ SDK Crash | 7m 24.41s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_191] | — | 7m 20.93s | — | ❌ SDK Crash | 7m 20.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n1] | 1m 49.79s | — | 12m 22.79s | — | 7m 6.29s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_255] | — | 6m 59.78s | — | ❌ SDK Crash | 6m 59.78s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_191] | 1m 47.95s | — | 11m 3.83s | — | 6m 25.89s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_255] | 1m 50.84s | — | 10m 41.30s | — | 6m 16.07s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test-contract_balance_1] | 1m 34.60s | — | 9m 30.65s | — | 5m 32.62s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test-contract_balance_0] | 1m 33.47s | — | 9m 28.85s | — | 5m 31.16s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODEHASH] | ❌ SDK Crash | — | 5m 18.51s | — | 5m 18.51s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DELEGATECALL] | ❌ SDK Crash | — | 5m 18.10s | — | 5m 18.10s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_127] | — | 5m 16.46s | — | ❌ SDK Crash | 5m 16.46s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLCODE] | ❌ SDK Crash | — | 5m 15.03s | — | 5m 15.03s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_191] | — | 5m 11.97s | — | ❌ SDK Crash | 5m 11.96s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_191] | — | 5m 8.35s | — | ❌ SDK Crash | 5m 8.35s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SDIV-1] | — | 5m 5.21s | — | ❌ SDK Crash | 5m 5.21s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALL] | ❌ SDK Crash | — | 5m 3.91s | — | 5m 3.91s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_STATICCALL] | ❌ SDK Crash | — | 5m 0.73s | — | 5m 0.73s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SDIV-0] | — | 4m 58.37s | — | ❌ SDK Crash | 4m 58.37s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 4m 4.27s | — | 5m 46.51s | — | 4m 55.39s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODESIZE] | ❌ SDK Crash | — | 4m 55.27s | — | 4m 55.26s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_5_pair] | 4m 13.47s | — | 5m 18.37s | — | 4m 45.92s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODECOPY] | ❌ SDK Crash | — | 4m 45.06s | — | 4m 45.06s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_one_pairing] | 3m 53.67s | — | 5m 16.90s | — | 4m 35.28s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_2_pair] | 3m 45.32s | — | 5m 19.52s | — | 4m 32.42s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_191] | 1m 23.09s | — | 7m 41.18s | — | 4m 32.14s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_4_pair] | 3m 46.03s | — | 5m 17.76s | — | 4m 31.90s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_two_pairings] | 3m 44.93s | — | 5m 16.58s | — | 4m 30.75s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_127] | 1m 17.82s | — | 7m 40.66s | — | 4m 29.24s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul] | — | 8m 14.89s | — | 29.20s | 4m 22.05s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_191] | 1m 20.00s | — | 7m 22.52s | — | 4m 21.26s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SDIV-1] | 1m 25.73s | — | 7m 9.50s | — | 4m 17.62s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SDIV-0] | 1m 25.62s | — | 7m 6.51s | — | 4m 16.06s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DIV-0] | — | 4m 15.79s | — | ❌ SDK Crash | 4m 15.79s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_scalar] | — | 7m 59.65s | — | 28.57s | 4m 14.11s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_1_2_32_byte_scalar] | — | 7m 57.07s | — | 28.89s | 4m 12.98s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_255] | — | 4m 1.29s | — | ❌ SDK Crash | 4m 1.29s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | — | 4m 0.34s | — | ❌ SDK Crash | 4m 0.34s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add_1_2] | 4m 11.14s | — | 3m 46.62s | — | 3m 58.88s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_63] | — | 3m 58.26s | — | ❌ SDK Crash | 3m 58.26s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_191] | — | 3m 43.95s | — | ❌ SDK Crash | 3m 43.95s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DIV-0] | 1m 11.25s | — | 6m 7.80s | — | 3m 39.53s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_127] | 1m 4.17s | — | 5m 52.99s | — | 3m 28.58s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_255] | 1m 7.48s | — | 5m 44.50s | — | 3m 25.99s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_63] | 55.90s | — | 5m 54.88s | — | 3m 25.39s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DIV-1] | 1m 8.70s | — | 5m 42.03s | — | 3m 25.36s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 5.01s | — | 6m 32.89s | — | 3m 18.95s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_255] | 1m 1.20s | — | 5m 30.83s | — | 3m 16.01s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_127] | 59.23s | — | 5m 26.86s | — | 3m 13.05s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_191] | 58.46s | — | 5m 21.98s | — | 3m 10.22s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PREVRANDAO] | — | 2m 59.85s | — | ❌ SDK Crash | 2m 59.85s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DIV-1] | — | 4m 1.28s | — | 1m 55.30s | 2m 58.29s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_diff_acc] | 1m 53.14s | — | 3m 56.43s | — | 2m 54.79s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_255] | — | 3m 53.44s | — | 1m 50.72s | 2m 52.08s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_diff_acc] | 1m 52.26s | — | 3m 45.24s | — | 2m 48.75s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_b] | 1m 46.35s | — | 3m 49.61s | — | 2m 47.98s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_b] | 1m 47.45s | — | 3m 46.55s | — | 2m 47.00s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_127] | — | 3m 53.95s | — | 1m 37.93s | 2m 45.94s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_a] | 1m 45.70s | — | 3m 42.93s | — | 2m 44.31s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_255] | 52.05s | — | 4m 29.60s | — | 2m 40.82s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_127] | — | 3m 43.89s | — | 1m 31.90s | 2m 37.90s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_127] | 47.19s | — | 4m 12.30s | — | 2m 29.75s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_255] | — | 3m 5.70s | — | 1m 50.64s | 2m 28.17s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PREVRANDAO] | 28.19s | — | 4m 12.96s | — | 2m 20.58s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_infinities_32_byte_scalar] | — | 4m 34.00s | — | 4.90s | 2m 19.45s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_63] | 37.73s | — | 3m 53.51s | — | 2m 15.62s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_127] | — | 2m 54.28s | — | 1m 30.06s | 2m 12.17s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_add_1_2] | — | 2m 9.80s | — | ❌ SDK Crash | 2m 9.80s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_add] | — | 2m 8.94s | — | ❌ SDK Crash | 2m 8.94s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_63] | 34.55s | — | 3m 35.59s | — | 2m 5.07s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-empty-opcode_REVERT] | — | 2m 7.68s | — | 1m 55.38s | 2m 1.53s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_63] | — | 2m 37.77s | — | 1m 16.40s | 1m 57.08s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXP-] | 33.50s | — | 3m 15.36s | — | 1m 54.43s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_CALLCODE] | — | 1m 59.28s | — | 1m 47.61s | 1m 53.44s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_STATICCALL] | — | 1m 59.26s | — | 1m 47.12s | 1m 53.19s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_CALL] | — | 1m 58.31s | — | 1m 46.57s | 1m 52.44s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-empty-opcode_RETURN] | — | 1m 57.48s | — | 1m 44.11s | 1m 50.80s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_63] | — | 2m 26.83s | — | 1m 9.50s | 1m 48.16s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_CALLCODE] | — | 1m 50.09s | — | 1m 41.36s | 1m 45.72s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_STATICCALL] | — | 1m 49.96s | — | 1m 41.27s | 1m 45.61s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_CALL] | — | 1m 49.11s | — | 1m 40.55s | 1m 44.83s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero-loop] | 21.11s | — | 3m 6.90s | — | 1m 44.00s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_63] | 29.01s | — | 2m 57.00s | — | 1m 43.00s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty-opcode_REVERT] | 29.37s | — | 2m 55.56s | — | 1m 42.47s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-one-loop] | 21.14s | — | 2m 56.55s | — | 1m 38.84s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP12] | 20.52s | — | 2m 56.89s | — | 1m 38.70s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP13] | 19.38s | — | 2m 58.03s | — | 1m 38.70s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP14] | 19.45s | — | 2m 57.17s | — | 1m 38.31s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP15] | 19.18s | — | 2m 57.38s | — | 1m 38.28s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP7] | 19.38s | — | 2m 55.84s | — | 1m 37.61s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP10] | 19.08s | — | 2m 56.09s | — | 1m 37.58s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_DELEGATECALL] | — | 1m 43.34s | — | 1m 31.44s | 1m 37.39s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP16] | 19.09s | — | 2m 55.62s | — | 1m 37.35s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP6] | 20.29s | — | 2m 52.47s | — | 1m 36.38s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP5] | 19.18s | — | 2m 53.59s | — | 1m 36.38s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP4] | 20.47s | — | 2m 52.25s | — | 1m 36.36s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP11] | 20.37s | — | 2m 52.18s | — | 1m 36.28s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP2] | 19.18s | — | 2m 53.19s | — | 1m 36.18s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP8] | 19.29s | — | 2m 53.07s | — | 1m 36.18s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP3] | 19.35s | — | 2m 52.66s | — | 1m 36.00s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP9] | 19.20s | — | 2m 52.17s | — | 1m 35.69s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_63] | — | 1m 56.17s | — | 1m 14.38s | 1m 35.28s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH30] | — | 1m 19.40s | — | 1m 51.09s | 1m 35.25s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-zero-loop] | — | 1m 37.16s | — | 1m 33.04s | 1m 35.10s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_CALL] | 26.15s | — | 2m 43.28s | — | 1m 34.72s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP1] | 19.20s | — | 2m 50.22s | — | 1m 34.71s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_STATICCALL] | 26.54s | — | 2m 42.20s | — | 1m 34.37s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-one-loop] | — | 1m 34.40s | — | 1m 33.92s | 1m 34.16s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of zero data-opcode_REVERT] | — | 1m 52.87s | — | 1m 15.42s | 1m 34.15s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty-opcode_RETURN] | 27.57s | — | 2m 38.37s | — | 1m 32.97s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH29] | — | 1m 16.29s | — | 1m 49.01s | 1m 32.65s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_CALLCODE] | 26.00s | — | 2m 38.89s | — | 1m 32.44s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_False] | 3.72s | — | 2m 59.70s | — | 1m 31.71s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty] | 18.12s | — | 2m 45.15s | — | 1m 31.63s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLER] | 19.48s | — | 2m 42.98s | — | 1m 31.23s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_COINBASE] | 20.42s | — | 2m 41.94s | — | 1m 31.18s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ADDRESS] | 19.50s | — | 2m 41.90s | — | 1m 30.70s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH27] | — | 1m 15.52s | — | 1m 45.62s | 1m 30.57s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH31] | 15.68s | — | 2m 45.24s | — | 1m 30.46s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_True] | 3.50s | — | 2m 57.33s | — | 1m 30.41s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_False] | 3.64s | — | 2m 56.37s | — | 1m 30.00s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ORIGIN] | 19.51s | — | 2m 40.40s | — | 1m 29.96s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH28] | — | 1m 16.35s | — | 1m 42.91s | 1m 29.63s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_True] | 3.74s | — | 2m 54.44s | — | 1m 29.09s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_DELEGATECALL] | — | 1m 32.22s | — | 1m 25.54s | 1m 28.88s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH32] | 17.00s | — | 2m 39.96s | — | 1m 28.48s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH30] | 15.21s | — | 2m 40.92s | — | 1m 28.07s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SGT-] | 18.88s | — | 2m 37.13s | — | 1m 28.00s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH32] | — | 1m 26.64s | — | ❌ SDK Crash | 1m 26.64s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH26] | — | 1m 13.05s | — | 1m 36.64s | 1m 24.84s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of zero data-opcode_RETURN] | — | 1m 40.38s | — | 1m 8.85s | 1m 24.62s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH25] | — | 1m 12.03s | — | 1m 35.24s | 1m 23.63s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SGT-] | — | 1m 29.25s | — | 1m 17.64s | 1m 23.45s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | — | 2m 10.20s | — | 36.43s | 1m 23.31s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH29] | 14.96s | — | 2m 31.38s | — | 1m 23.17s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_EXP-] | — | 2m 12.31s | — | 33.14s | 1m 22.72s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_CALL] | 21.99s | — | 2m 22.90s | — | 1m 22.45s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH28] | 15.43s | — | 2m 29.11s | — | 1m 22.27s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CALLER] | — | 1m 28.23s | — | 1m 15.91s | 1m 22.07s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH31] | — | 1m 22.06s | — | ❌ SDK Crash | 1m 22.06s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ADDRESS] | — | 1m 24.93s | — | 1m 18.80s | 1m 21.87s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 23.20s | — | 2m 19.87s | — | 1m 21.53s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_COINBASE] | — | 1m 23.48s | — | 1m 18.89s | 1m 21.19s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ORIGIN] | — | 1m 24.15s | — | 1m 18.09s | 1m 21.12s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH24] | — | 1m 7.79s | — | 1m 33.29s | 1m 20.54s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-empty] | — | 1m 19.75s | — | 1m 20.56s | 1m 20.15s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH27] | 14.59s | — | 2m 24.92s | — | 1m 19.75s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_CALLCODE] | 22.70s | — | 2m 16.70s | — | 1m 19.70s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_STATICCALL] | 23.03s | — | 2m 16.32s | — | 1m 19.67s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EQ-] | 17.08s | — | 2m 19.86s | — | 1m 18.47s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SAR-] | 18.60s | — | 2m 14.56s | — | 1m 16.58s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_EQ-] | — | 1m 21.40s | — | 1m 10.72s | 1m 16.06s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH26] | 15.35s | — | 2m 15.80s | — | 1m 15.57s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SMOD-] | 17.74s | — | 2m 12.98s | — | 1m 15.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH23] | 12.89s | — | 2m 17.25s | — | 1m 15.07s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ISZERO] | — | 1m 18.30s | — | 1m 10.31s | 1m 14.31s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 15.87s | — | 2m 12.24s | — | 1m 14.05s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH25] | 13.82s | — | 2m 13.31s | — | 1m 13.57s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH23] | — | 1m 3.09s | — | 1m 23.64s | 1m 13.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH22] | 12.30s | — | 2m 14.21s | — | 1m 13.25s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BLOBBASEFEE] | 14.30s | — | 2m 11.87s | — | 1m 13.08s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH24] | 13.41s | — | 2m 12.71s | — | 1m 13.06s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test-shift_right_SAR] | 16.62s | — | 2m 8.37s | — | 1m 12.49s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_add_infinities] | — | 1m 8.55s | — | 1m 15.15s | 1m 11.85s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH22] | — | 1m 2.34s | — | 1m 20.91s | 1m 11.63s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-one blob and accessed] | — | 1m 4.09s | — | 1m 17.89s | 1m 10.99s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-IDENTITY] | — | 1m 10.94s | — | ❌ SDK Crash | 1m 10.94s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-six blobs, access latest] | — | 1m 3.91s | — | 1m 17.86s | 1m 10.89s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASPRICE] | 14.56s | — | 2m 5.74s | — | 1m 10.15s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SMOD-] | — | 1m 17.23s | — | 1m 2.90s | 1m 10.06s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of zero data-opcode_REVERT] | 19.20s | — | 2m 0.72s | — | 1m 9.96s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 19.65s | — | 1m 59.67s | — | 1m 9.66s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH21] | — | 1m 0.37s | — | 1m 18.33s | 1m 9.35s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 2.40s | — | 1m 14.53s | — | 1m 8.46s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | — | 1m 9.42s | — | 1m 6.82s | 1m 8.12s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | — | 1m 9.08s | — | 1m 6.28s | 1m 7.68s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 11.80s | — | 2m 3.06s | — | 1m 7.43s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | — | 1m 8.02s | — | 1m 6.26s | 1m 7.14s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | — | 1m 7.39s | — | 1m 6.74s | 1m 7.07s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | — | 1m 7.39s | — | 1m 6.56s | 1m 6.97s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE new value] | 18.30s | — | 1m 55.39s | — | 1m 6.84s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | — | 1m 7.29s | — | 1m 6.40s | 1m 6.84s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | — | 1m 7.08s | — | 1m 6.53s | 1m 6.81s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH19] | — | 58.14s | — | 1m 15.07s | 1m 6.60s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_REVERT] | — | 1m 17.65s | — | 55.55s | 1m 6.60s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | — | 1m 6.99s | — | 1m 6.18s | 1m 6.59s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH21] | 11.88s | — | 2m 0.73s | — | 1m 6.31s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH20] | — | 57.70s | — | 1m 14.26s | 1m 5.98s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test-shift_right_SHR] | 15.40s | — | 1m 55.76s | — | 1m 5.58s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MUL-] | 15.15s | — | 1m 54.84s | — | 1m 5.00s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH19] | 10.96s | — | 1m 58.65s | — | 1m 4.80s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SHR-] | 15.03s | — | 1m 53.56s | — | 1m 4.29s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH20] | 11.01s | — | 1m 57.43s | — | 1m 4.22s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SHL-] | 15.00s | — | 1m 52.20s | — | 1m 3.60s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of zero data-opcode_RETURN] | 17.29s | — | 1m 49.29s | — | 1m 3.29s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_RETURN] | — | 1m 14.21s | — | 51.36s | 1m 2.78s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SAR-] | — | 1m 19.38s | — | 44.04s | 1m 1.71s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH18] | — | 54.73s | — | 1m 7.95s | 1m 1.34s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE new value] | — | 1m 5.74s | — | 55.67s | 1m 0.71s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH17] | — | 53.57s | — | 1m 7.02s | 1m 0.30s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH15] | 10.68s | — | 1m 48.75s | — | 59.72s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MOD-] | 13.00s | — | 1m 45.55s | — | 59.27s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SIGNEXTEND-] | 13.42s | — | 1m 44.77s | — | 59.09s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH16] | — | 52.28s | — | 1m 5.18s | 58.73s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | — | 52.19s | — | 1m 5.09s | 58.64s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-six blobs, access latest] | 12.77s | — | 1m 44.22s | — | 58.49s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 14.68s | — | 1m 42.14s | — | 58.41s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH18] | 10.01s | — | 1m 46.41s | — | 58.21s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | — | 49.32s | — | 1m 6.72s | 58.02s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_MOD-] | — | 1m 1.49s | — | 54.37s | 57.93s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | — | 49.82s | — | 1m 5.97s | 57.90s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-shift_right_SAR] | — | 1m 14.38s | — | 40.93s | 57.66s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | — | 50.02s | — | 1m 4.99s | 57.50s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-one blob and accessed] | 12.70s | — | 1m 42.18s | — | 57.44s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | — | 49.81s | — | 1m 4.98s | 57.40s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 14.71s | — | 1m 40.02s | — | 57.36s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 11.78s | — | 1m 42.91s | — | 57.34s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | — | 49.36s | — | 1m 5.15s | 57.26s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | — | 49.46s | — | 1m 5.05s | 57.26s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | — | 48.80s | — | 1m 5.24s | 57.02s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | — | 49.43s | — | 1m 4.49s | 56.96s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH16] | 10.37s | — | 1m 43.50s | — | 56.93s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | — | 48.71s | — | 1m 5.03s | 56.87s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | — | 48.97s | — | 1m 4.77s | 56.87s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | — | 48.79s | — | 1m 4.86s | 56.83s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-0 bytes] | 13.64s | — | 1m 39.92s | — | 56.78s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH14] | 9.50s | — | 1m 43.67s | — | 56.59s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH15] | — | 51.24s | — | 1m 1.85s | 56.54s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH17] | 10.21s | — | 1m 42.38s | — | 56.29s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 11.85s | — | 1m 40.46s | — | 56.15s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 12.43s | — | 1m 39.72s | — | 56.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 11.77s | — | 1m 40.34s | — | 56.05s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_TIMESTAMP] | 11.83s | — | 1m 40.01s | — | 55.92s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 11.81s | — | 1m 39.40s | — | 55.60s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 11.75s | — | 1m 39.32s | — | 55.53s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 11.91s | — | 1m 38.92s | — | 55.42s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_NUMBER] | 11.69s | — | 1m 38.50s | — | 55.09s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 12.01s | — | 1m 37.69s | — | 54.85s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | — | 59.78s | — | 49.86s | 54.82s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 11.78s | — | 1m 37.78s | — | 54.78s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | — | 59.43s | — | 50.05s | 54.74s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 11.79s | — | 1m 37.68s | — | 54.73s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | — | 59.08s | — | 50.21s | 54.65s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 11.79s | — | 1m 37.32s | — | 54.56s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH14] | — | 50.20s | — | 58.77s | 54.48s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | — | 58.82s | — | 50.13s | 54.48s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0 bytes] | 13.30s | — | 1m 35.51s | — | 54.41s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP1] | — | 53.52s | — | 54.10s | 53.81s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0 bytes] | 13.05s | — | 1m 34.56s | — | 53.80s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CODESIZE] | — | 1m 3.05s | — | 44.10s | 53.57s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BASEFEE] | 11.51s | — | 1m 35.63s | — | 53.57s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CHAINID] | 11.22s | — | 1m 34.78s | — | 53.00s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-shift_right_SHR] | — | 1m 8.00s | — | 37.60s | 52.80s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add_infinities] | 15.83s | — | 1m 28.90s | — | 52.37s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH13] | — | 48.32s | — | 56.39s | 52.35s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-1MiB] | — | 1m 20.69s | — | 23.16s | 51.92s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SHR-] | — | 1m 6.71s | — | 37.07s | 51.89s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 14.29s | — | 1m 29.44s | — | 51.87s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_0] | 11.10s | — | 1m 32.44s | — | 51.77s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SHL-] | — | 1m 6.32s | — | 36.51s | 51.41s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 10.82s | — | 1m 31.97s | — | 51.39s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASLIMIT] | 11.71s | — | 1m 30.62s | — | 51.16s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1] | 11.09s | — | 1m 31.15s | — | 51.12s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 11.30s | — | 1m 30.20s | — | 50.75s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_BLOBBASEFEE] | — | 1m 3.57s | — | 37.78s | 50.67s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 10.78s | — | 1m 29.39s | — | 50.09s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-100 bytes] | 12.25s | — | 1m 27.28s | — | 49.77s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH12] | — | 47.44s | — | 51.66s | 49.55s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_False] | — | 57.68s | — | 41.37s | 49.52s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_True] | — | 57.10s | — | 41.70s | 49.40s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000] | 10.66s | — | 1m 27.59s | — | 49.12s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_True] | 12.92s | — | 1m 24.89s | — | 48.90s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH13] | 9.45s | — | 1m 27.97s | — | 48.71s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 13.49s | — | 1m 23.89s | — | 48.69s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 12.18s | — | 1m 24.54s | — | 48.36s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH11] | — | 45.94s | — | 50.58s | 48.26s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 12.71s | — | 1m 23.64s | — | 48.18s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GASPRICE] | — | 1m 0.79s | — | 35.08s | 47.93s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_MUL-] | — | 1m 10.86s | — | 24.88s | 47.87s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_False] | 13.18s | — | 1m 22.26s | — | 47.72s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-1MiB] | — | 1m 13.75s | — | 20.49s | 47.12s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH0] | 10.20s | — | 1m 23.84s | — | 47.02s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 11.70s | — | 1m 21.54s | — | 46.62s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | — | 1m 11.32s | — | 21.89s | 46.61s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE same value] | 13.86s | — | 1m 18.80s | — | 46.33s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | — | 56.38s | — | 35.91s | 46.14s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | — | 56.33s | — | 35.50s | 45.92s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_0] | — | 54.80s | — | 37.00s | 45.90s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_100000] | — | 54.67s | — | 36.98s | 45.83s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 10.93s | — | 1m 20.55s | — | 45.74s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_1] | — | 54.28s | — | 36.95s | 45.62s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH11] | 8.97s | — | 1m 22.07s | — | 45.52s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_diff_acc] | — | 1m 0.30s | — | 30.67s | 45.49s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SIGNEXTEND-] | — | 59.27s | — | 31.70s | 45.48s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH12] | 8.71s | — | 1m 22.08s | — | 45.40s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_1000000] | — | 54.03s | — | 36.67s | 45.35s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_1000] | — | 53.88s | — | 36.78s | 45.33s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-0 bytes] | 10.29s | — | 1m 19.45s | — | 44.87s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 11.53s | — | 1m 16.83s | — | 44.18s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 11.37s | — | 1m 16.97s | — | 44.17s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 10.82s | — | 1m 17.46s | — | 44.14s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE same value] | — | 44.54s | — | 43.60s | 44.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 11.47s | — | 1m 16.58s | — | 44.03s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 11.03s | — | 1m 16.90s | — | 43.97s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 10.72s | — | 1m 17.05s | — | 43.89s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | — | 50.19s | — | 37.52s | 43.85s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 10.78s | — | 1m 16.88s | — | 43.83s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-0 bytes] | — | 53.07s | — | 34.49s | 43.78s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | — | 53.86s | — | 33.68s | 43.77s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 10.84s | — | 1m 16.64s | — | 43.74s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_False] | 9.62s | — | 1m 17.75s | — | 43.68s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH10] | — | 43.15s | — | 44.21s | 43.68s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-100 bytes] | 11.22s | — | 1m 16.06s | — | 43.64s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 11.36s | — | 1m 15.92s | — | 43.64s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 10.71s | — | 1m 16.52s | — | 43.62s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 10.90s | — | 1m 16.24s | — | 43.57s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | — | 49.62s | — | 37.42s | 43.52s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-100 bytes] | — | 51.36s | — | 35.37s | 43.36s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-1MiB] | — | 1m 14.14s | — | 12.20s | 43.17s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | — | 53.68s | — | 32.56s | 43.12s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 9.20s | — | 1m 16.81s | — | 43.01s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_True] | 9.80s | — | 1m 16.04s | — | 42.92s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH9] | — | 42.85s | — | 42.91s | 42.88s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_True] | 9.50s | — | 1m 16.00s | — | 42.75s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_False] | 9.90s | — | 1m 15.38s | — | 42.64s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | — | 48.46s | — | 35.86s | 42.16s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 10.66s | — | 1m 13.37s | — | 42.02s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH8] | — | 41.72s | — | 41.97s | 41.84s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_b] | — | 54.51s | — | 28.88s | 41.69s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH7] | — | 41.77s | — | 40.40s | 41.09s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-100 bytes] | — | 46.23s | — | 35.29s | 40.76s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SLT-] | 8.93s | — | 1m 12.44s | — | 40.68s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_NUMBER] | — | 49.67s | — | 31.18s | 40.43s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_diff_acc] | — | 52.13s | — | 28.26s | 40.19s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_TIMESTAMP] | — | 49.36s | — | 30.93s | 40.14s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-5b] | — | 50.24s | — | 28.57s | 39.40s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SUB-] | 9.06s | — | 1m 8.87s | — | 38.96s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-1MiB] | — | 1m 7.50s | — | 10.20s | 38.85s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH6] | — | 39.73s | — | 37.82s | 38.78s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | — | 40.23s | — | 35.76s | 38.00s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CHAINID] | — | 46.07s | — | 29.81s | 37.94s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | — | 1m 5.77s | — | 9.97s | 37.87s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | — | 57.79s | — | 17.90s | 37.84s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_BASEFEE] | — | 45.59s | — | 29.78s | 37.69s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH0] | — | 45.76s | — | 29.20s | 37.48s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 8.82s | — | 1m 6.00s | — | 37.41s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 8.38s | — | 1m 6.35s | — | 37.37s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH10] | 8.14s | — | 1m 6.58s | — | 37.36s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | — | 44.37s | — | 29.40s | 36.89s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_b] | — | 47.07s | — | 26.55s | 36.81s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_a] | — | 46.72s | — | 26.55s | 36.64s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH7] | 8.32s | — | 1m 4.38s | — | 36.35s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH5] | — | 38.23s | — | 34.14s | 36.19s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP2] | — | 35.72s | — | 36.65s | 36.19s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-5b] | 6.33s | — | 1m 6.01s | — | 36.17s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GASLIMIT] | — | 43.77s | — | 28.43s | 36.10s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ADD-] | 8.57s | — | 1m 3.31s | — | 35.94s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GAS] | — | 43.73s | — | 27.95s | 35.84s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 0.95s | — | 1m 10.48s | — | 35.71s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-one blob but access non-existent index] | — | 40.61s | — | 30.67s | 35.64s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SLT-] | — | 41.15s | — | 30.05s | 35.60s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH9] | 8.05s | — | 1m 2.85s | — | 35.45s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | — | 54.04s | — | 16.64s | 35.34s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH8] | 7.80s | — | 1m 2.67s | — | 35.24s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH6] | 7.99s | — | 1m 0.79s | — | 34.39s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_60M-blockchain_test] | ❌ SDK Crash | — | 34.29s | — | 34.28s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 8.17s | — | 1m 0.38s | — | 34.27s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-no blobs] | — | 40.55s | — | 27.84s | 34.19s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BYTE-] | 7.79s | — | 59.64s | — | 33.72s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-0 bytes] | — | 39.68s | — | 27.73s | 33.71s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 7.62s | — | 59.30s | — | 33.46s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | 7.40s | — | 59.26s | — | 33.33s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | — | 38.14s | — | 28.34s | 33.24s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | — | 37.90s | — | 28.45s | 33.17s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 7.64s | — | 58.67s | — | 33.15s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | — | 39.41s | — | 26.89s | 33.15s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | — | 37.82s | — | 28.46s | 33.14s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_10000] | 7.48s | — | 58.79s | — | 33.13s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | — | 59.43s | — | 6.84s | 33.13s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH4] | — | 35.97s | — | 30.24s | 33.11s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | — | 37.93s | — | 28.27s | 33.10s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | — | 37.88s | — | 28.28s | 33.08s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | — | 59.33s | — | 6.80s | 33.06s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 7.53s | — | 58.53s | — | 33.03s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_1000] | 7.78s | — | 58.21s | — | 32.99s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | — | 37.66s | — | 28.26s | 32.96s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | — | 37.49s | — | 28.42s | 32.95s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 7.12s | — | 58.77s | — | 32.94s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | — | 37.67s | — | 28.21s | 32.94s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | — | 37.28s | — | 28.38s | 32.83s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | — | 37.31s | — | 28.32s | 32.81s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | — | 36.84s | — | 28.65s | 32.74s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | — | 36.99s | — | 28.28s | 32.64s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-1MiB] | 7.48s | — | 57.68s | — | 32.58s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 7.32s | — | 57.84s | — | 32.58s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_0] | 7.27s | — | 57.85s | — | 32.56s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_OR-] | 6.95s | — | 58.03s | — | 32.49s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 7.19s | — | 57.51s | — | 32.35s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 8.11s | — | 56.59s | — | 32.35s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SUB-] | — | 41.15s | — | 23.44s | 32.29s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH5] | 7.14s | — | 56.95s | — | 32.04s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH3] | — | 35.15s | — | 28.53s | 31.84s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_LT-] | 7.16s | — | 56.43s | — | 31.80s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GT-] | 7.27s | — | 56.02s | — | 31.65s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | 7.18s | — | 56.06s | — | 31.62s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-one blob but access non-existent index] | 7.96s | — | 55.22s | — | 31.59s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_AND-] | 7.02s | — | 55.56s | — | 31.29s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_XOR-] | 7.17s | — | 55.40s | — | 31.29s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH4] | 6.88s | — | 54.93s | — | 30.90s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 6.68s | — | 55.05s | — | 30.87s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ADD-] | — | 38.06s | — | 23.18s | 30.62s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | — | 34.87s | — | 26.37s | 30.62s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-no blobs] | 7.49s | — | 53.39s | — | 30.44s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 6.47s | — | 54.40s | — | 30.44s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 6.48s | — | 54.38s | — | 30.43s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | — | 52.22s | — | 8.62s | 30.42s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 6.50s | — | 54.00s | — | 30.25s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP7] | 6.50s | — | 53.93s | — | 30.22s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP13] | 6.43s | — | 53.99s | — | 30.21s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP15] | 6.78s | — | 53.64s | — | 30.21s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP11] | 6.85s | — | 53.56s | — | 30.20s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP3] | 6.46s | — | 53.92s | — | 30.19s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | — | 34.37s | — | 25.88s | 30.13s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 6.74s | — | 53.45s | — | 30.09s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-10KiB] | — | 35.53s | — | 24.59s | 30.06s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 6.48s | — | 53.61s | — | 30.04s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 9.02s | — | 51.06s | — | 30.04s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 6.49s | — | 53.57s | — | 30.03s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-10KiB] | 7.96s | — | 52.08s | — | 30.02s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 6.48s | — | 53.56s | — | 30.02s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 6.54s | — | 53.34s | — | 29.94s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP5] | 6.41s | — | 53.25s | — | 29.83s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP2] | 6.46s | — | 53.19s | — | 29.83s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 6.47s | — | 53.15s | — | 29.81s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH3] | 6.70s | — | 52.90s | — | 29.80s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 7.75s | — | 51.72s | — | 29.73s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP10] | 6.77s | — | 52.69s | — | 29.73s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP12] | 6.41s | — | 53.01s | — | 29.71s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-100 bytes] | 7.23s | — | 52.15s | — | 29.69s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP14] | 6.81s | — | 52.55s | — | 29.68s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP8] | 6.77s | — | 52.52s | — | 29.64s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 6.46s | — | 52.81s | — | 29.64s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP1] | 6.72s | — | 52.48s | — | 29.60s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP9] | 6.44s | — | 52.74s | — | 29.59s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP4] | 6.40s | — | 52.77s | — | 29.59s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP16] | 6.43s | — | 52.75s | — | 29.59s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 6.46s | — | 52.67s | — | 29.56s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP6] | 6.40s | — | 52.54s | — | 29.47s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | 28.77s | — | 29.94s | 29.35s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP11] | — | 35.80s | — | 22.63s | 29.21s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 5.87s | — | 52.24s | — | 29.06s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-1MiB] | 5.19s | — | 52.83s | — | 29.01s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP8] | — | 35.51s | — | 22.20s | 28.86s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP3] | — | 34.90s | — | 22.42s | 28.66s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_BYTE-] | — | 34.37s | — | 22.94s | 28.65s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-100 bytes] | 6.67s | — | 50.56s | — | 28.61s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP16] | — | 35.03s | — | 22.11s | 28.57s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | — | 48.76s | — | 8.30s | 28.53s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP14] | — | 34.83s | — | 21.94s | 28.39s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-605b5b] | — | 38.45s | — | 18.27s | 28.36s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP2] | — | 33.97s | — | 22.41s | 28.19s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP5] | — | 34.10s | — | 22.26s | 28.18s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP15] | — | 34.12s | — | 22.14s | 28.13s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-calldata_length_10000] | — | 31.44s | — | 24.80s | 28.12s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP4] | — | 33.80s | — | 22.43s | 28.11s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP12] | — | 33.84s | — | 22.34s | 28.09s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP6] | — | 34.04s | — | 22.08s | 28.06s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP13] | — | 34.00s | — | 22.08s | 28.04s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP10] | — | 33.83s | — | 22.19s | 28.01s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP9] | — | 34.06s | — | 21.93s | 27.99s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP7] | — | 33.82s | — | 22.12s | 27.97s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP1] | — | 33.82s | — | 21.94s | 27.88s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH2] | — | 33.26s | — | 22.27s | 27.77s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-calldata_length_1000] | — | 30.93s | — | 24.58s | 27.76s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH1] | 5.97s | — | 49.52s | — | 27.74s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH2] | 6.23s | — | 49.23s | — | 27.73s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_False-opcode_BALANCE] | — | 41.12s | — | 14.27s | 27.70s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-00] | — | 37.79s | — | 17.58s | 27.68s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-calldata_length_0] | — | 30.74s | — | 24.43s | 27.58s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP3] | — | 26.91s | — | 27.65s | 27.28s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-100 bytes] | — | 30.46s | — | 23.94s | 27.20s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 6.71s | — | 47.63s | — | 27.17s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | — | 30.99s | — | 23.02s | 27.00s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | — | 39.70s | — | 14.21s | 26.95s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODEHASH] | — | 25.35s | — | 28.54s | 26.94s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 6.22s | — | 47.65s | — | 26.93s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_LT-] | — | 32.43s | — | 21.40s | 26.92s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, revert] | — | 39.60s | — | 14.10s | 26.85s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GT-] | — | 32.19s | — | 21.47s | 26.83s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 6.32s | — | 46.76s | — | 26.54s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | — | 28.77s | — | 24.09s | 26.43s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 6.29s | — | 46.24s | — | 26.26s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH1] | — | 31.36s | — | 20.91s | 26.14s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_False-non_zero_value_True] | — | 28.51s | — | 23.23s | 25.87s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-100 bytes] | — | 30.02s | — | 21.63s | 25.82s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_AND-] | — | 30.73s | — | 20.75s | 25.74s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_OR-] | — | 30.35s | — | 21.12s | 25.73s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | — | 28.07s | — | 23.37s | 25.71s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 6.70s | — | 44.68s | — | 25.69s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_XOR-] | — | 30.51s | — | 20.73s | 25.62s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_BALANCE] | 6.59s | — | 44.28s | — | 25.43s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value] | — | 37.01s | — | 13.76s | 25.38s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | — | 30.25s | — | 20.47s | 25.36s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_False-non_zero_value_False] | — | 28.51s | — | 21.62s | 25.06s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_True-non_zero_value_True] | — | 28.45s | — | 21.35s | 24.90s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_True-non_zero_value_False] | — | 28.34s | — | 21.43s | 24.88s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-615b5b5b] | — | 34.46s | — | 14.75s | 24.61s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | — | 26.85s | — | 22.15s | 24.50s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | — | 27.96s | — | 20.90s | 24.43s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSLOAD] | — | 36.04s | — | 12.74s | 24.39s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | — | 27.65s | — | 21.08s | 24.36s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | — | 27.42s | — | 21.04s | 24.23s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | — | 27.19s | — | 21.18s | 24.19s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | — | 27.02s | — | 21.08s | 24.05s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | — | 27.02s | — | 21.07s | 24.05s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | — | 27.13s | — | 20.89s | 24.01s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-1MiB] | 4.33s | — | 43.08s | — | 23.70s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 5.57s | — | 41.55s | — | 23.56s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-max code size] | — | 21.59s | — | 24.20s | 22.90s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | — | 25.67s | — | 20.05s | 22.86s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0.25x max code size] | — | 20.70s | — | 24.64s | 22.67s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | — | 20.56s | — | 24.61s | 22.59s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 4.11s | — | 41.01s | — | 22.56s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODEHASH] | — | 20.56s | — | 24.51s | 22.53s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SLOAD] | 6.61s | — | 38.45s | — | 22.53s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0.50x max code size] | — | 20.42s | — | 24.54s | 22.48s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0.75x max code size] | — | 20.43s | — | 24.46s | 22.44s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | — | 20.45s | — | 24.37s | 22.41s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_NOT] | — | 26.03s | — | 18.72s | 22.37s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | — | 20.34s | — | 24.38s | 22.36s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_True] | 6.63s | — | 37.99s | — | 22.31s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-10KiB] | 5.26s | — | 39.22s | — | 22.24s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP4] | — | 21.62s | — | 22.60s | 22.11s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_False] | 6.30s | — | 37.74s | — | 22.02s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-10KiB] | — | 21.25s | — | 22.25s | 21.75s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-605b] | — | 30.91s | — | 12.43s | 21.67s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 4.93s | — | 38.16s | — | 21.55s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_False] | — | 22.82s | — | 20.15s | 21.48s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_True] | — | 22.03s | — | 20.38s | 21.21s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_True] | — | 29.80s | — | 12.54s | 21.17s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | — | 24.15s | — | 18.12s | 21.13s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | 3.67s | — | 38.03s | — | 20.85s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 5.86s | — | 35.82s | — | 20.84s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-00] | 3.78s | — | 37.74s | — | 20.76s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-10KiB] | 5.05s | — | 35.36s | — | 20.20s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-512] | 5.48s | — | 34.76s | — | 20.12s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 5.64s | — | 33.77s | — | 19.70s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_BALANCE] | 5.48s | — | 33.67s | — | 19.57s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SLOAD] | — | 20.66s | — | 18.47s | 19.57s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODESIZE] | — | 17.80s | — | 21.28s | 19.54s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-615b5b] | — | 28.99s | — | 10.05s | 19.52s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_False] | 5.49s | — | 33.26s | — | 19.37s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value] | — | 28.62s | — | 9.97s | 19.30s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 4.20s | — | 33.97s | — | 19.08s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODESIZE] | — | 17.44s | — | 20.69s | 19.07s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_True] | 5.24s | — | 32.47s | — | 18.85s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP5] | — | 18.26s | — | 19.11s | 18.69s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB] | 4.92s | — | 32.20s | — | 18.56s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 4.95s | — | 31.83s | — | 18.39s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-512] | — | 18.95s | — | 17.77s | 18.36s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b5b] | 4.03s | — | 31.90s | — | 17.97s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-10KiB] | — | 22.74s | — | 12.79s | 17.77s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 2.69s | — | 32.62s | — | 17.66s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-1MiB] | 2.72s | — | 32.50s | — | 17.61s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 4.76s | — | 30.42s | — | 17.59s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 4.72s | — | 30.32s | — | 17.52s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 4.94s | — | 30.07s | — | 17.51s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 4.61s | — | 30.16s | — | 17.38s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-max code size] | 4.54s | — | 29.73s | — | 17.13s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB] | — | 17.78s | — | 16.14s | 16.96s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-RIPEMD-160] | — | 15.49s | — | 17.88s | 16.68s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP6] | — | 15.73s | — | 16.61s | 16.17s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_True-key_mut_False] | — | 15.93s | — | 16.18s | 16.05s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_True-key_mut_True] | — | 16.36s | — | 15.71s | 16.04s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-5KiB] | 3.67s | — | 28.20s | — | 15.94s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_False] | — | 21.34s | — | 10.23s | 15.78s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | — | 17.33s | — | 14.19s | 15.76s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_BALANCE] | — | 15.38s | — | 16.03s | 15.70s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_BALANCE] | — | 14.73s | — | 16.49s | 15.61s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b5b] | 3.38s | — | 27.02s | — | 15.20s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 3.02s | — | 26.86s | — | 14.94s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 3.01s | — | 26.47s | — | 14.74s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value] | 2.86s | — | 25.91s | — | 14.38s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-5KiB] | — | 15.97s | — | 12.76s | 14.37s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP7] | — | 13.90s | — | 14.63s | 14.27s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSLOAD] | 2.76s | — | 25.13s | — | 13.94s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 4.15s | — | 23.36s | — | 13.76s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 2.15s | — | 25.01s | — | 13.58s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0.50x max code size] | — | 16.06s | — | 10.75s | 13.40s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 3.05s | — | 23.76s | — | 13.40s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b] | 2.53s | — | 24.12s | — | 13.32s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-10KiB] | 2.98s | — | 23.43s | — | 13.20s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 2.08s | — | 24.26s | — | 13.17s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 3.06s | — | 23.23s | — | 13.14s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | 2.01s | — | 24.22s | — | 13.11s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 2.94s | — | 23.28s | — | 13.11s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 2.96s | — | 23.25s | — | 13.10s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 2.94s | — | 23.23s | — | 13.09s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 2.96s | — | 23.08s | — | 13.02s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 2.97s | — | 22.90s | — | 12.94s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP8] | — | 12.76s | — | 13.10s | 12.93s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-max code size] | 2.94s | — | 22.72s | — | 12.83s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-10KiB] | — | 13.97s | — | 11.11s | 12.54s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | — | 14.19s | — | 10.89s | 12.54s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0.25x max code size] | — | 13.97s | — | 11.08s | 12.52s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSLOAD] | — | 17.78s | — | 7.21s | 12.50s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-max code size] | — | 14.27s | — | 10.70s | 12.49s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, revert] | — | 17.22s | — | 7.74s | 12.48s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0.75x max code size] | — | 13.98s | — | 10.95s | 12.47s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | — | 13.76s | — | 10.95s | 12.35s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | — | 13.64s | — | 10.99s | 12.31s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | — | 16.86s | — | 7.75s | 12.30s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP9] | — | 11.16s | — | 12.10s | 11.63s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_True] | 2.55s | — | 20.40s | — | 11.47s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b] | 2.14s | — | 20.57s | — | 11.35s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_True-opcode_BALANCE] | — | 15.58s | — | 6.30s | 10.94s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value] | 2.28s | — | 19.55s | — | 10.91s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_2_scalar] | 10.03s | — | 11.58s | — | 10.80s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP10] | — | 10.29s | — | 11.21s | 10.75s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-SHA2-256] | — | 4.69s | — | 15.44s | 10.06s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP11] | — | 9.42s | — | 10.37s | 9.89s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-zero_byte_True] | — | 13.49s | — | 5.79s | 9.64s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP12] | — | 8.98s | — | 9.62s | 9.30s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | — | 12.41s | — | 5.30s | 8.86s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_False] | 2.15s | — | 15.40s | — | 8.77s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP13] | — | 8.29s | — | 8.91s | 8.60s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP14] | — | 7.73s | — | 8.43s | 8.08s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | — | ❌ SDK Crash | — | 7.94s | 7.94s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 1.60s | — | 14.08s | — | 7.84s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 1.54s | — | 14.11s | — | 7.83s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_2_scalar] | — | 7.61s | — | 7.98s | 7.79s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_1_2_2_scalar] | — | 7.57s | — | 7.95s | 7.76s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP15] | — | 7.28s | — | 8.04s | 7.66s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | — | 7.99s | — | 7.23s | 7.61s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSLOAD] | 1.64s | — | 13.44s | — | 7.54s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP16] | — | 7.08s | — | 7.80s | 7.44s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 1.59s | — | 13.03s | — | 7.31s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 1.94s | — | 12.60s | — | 7.27s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 1.60s | — | 12.90s | — | 7.25s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 1.69s | — | 11.41s | — | 6.55s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_REVERT] | — | 9.10s | — | 2.47s | 5.78s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_False] | 1.51s | — | 9.90s | — | 5.70s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_infinities_2_scalar] | — | 6.71s | — | 4.69s | 5.70s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 1.41s | — | 9.98s | — | 5.69s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_100000] | 1.39s | — | 9.95s | — | 5.67s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_RETURN] | — | 8.96s | — | 2.36s | 5.66s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_2_scalar] | 1.43s | — | 9.82s | — | 5.62s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_False-key_mut_True] | — | 5.57s | — | 5.52s | 5.54s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_False-key_mut_False] | — | 5.38s | — | 5.52s | 5.45s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_True] | 1.38s | — | 9.18s | — | 5.28s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_True] | 0.71s | — | 8.34s | — | 4.53s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of zero data-opcode_REVERT] | — | 6.51s | — | 2.31s | 4.41s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of zero data-opcode_RETURN] | — | 6.49s | — | 2.26s | 4.38s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | — | 5.03s | — | 3.55s | 4.29s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | — | 5.01s | — | 3.34s | 4.17s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CREATE] | — | 4.70s | — | 3.26s | 3.98s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value] | — | 4.54s | — | 3.01s | 3.78s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value] | — | 4.36s | — | 2.93s | 3.65s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | — | 3.67s | — | 3.39s | 3.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | — | 3.66s | — | 3.11s | 3.39s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-zero_byte_False] | — | 3.75s | — | 2.73s | 3.24s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | — | 3.67s | — | 2.70s | 3.19s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 0.62s | — | 5.70s | — | 3.16s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | — | 3.69s | — | 2.62s | 3.15s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | — | 3.30s | — | 2.85s | 3.08s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | — | 3.26s | — | 2.84s | 3.05s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 0.87s | — | 5.16s | — | 3.01s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 0.82s | — | 5.14s | — | 2.98s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | — | 3.00s | — | 2.83s | 2.91s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE2] | — | 3.11s | — | 2.64s | 2.87s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE2] | — | 3.01s | — | 2.65s | 2.83s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | — | 3.02s | — | 2.63s | 2.83s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | — | 2.81s | — | 2.62s | 2.71s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | — | 2.71s | — | 2.63s | 2.67s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE] | — | 2.85s | — | 2.47s | 2.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | — | 2.59s | — | 2.58s | 2.59s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | — | 2.51s | — | 2.64s | 2.58s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | — | 2.61s | — | 2.50s | 2.56s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, revert] | — | 2.72s | — | 2.39s | 2.55s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE] | — | 2.58s | — | 2.52s | 2.55s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | — | 2.41s | — | 2.68s | 2.54s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | — | 2.58s | — | 2.49s | 2.54s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, revert] | — | 2.69s | — | 2.35s | 2.52s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | — | 2.54s | — | 2.43s | 2.48s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | — | 2.37s | — | 2.56s | 2.47s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | — | 2.53s | — | 2.38s | 2.46s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | — | 2.48s | — | 2.37s | 2.42s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | — | 2.40s | — | 2.39s | 2.40s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | — | 2.21s | — | 2.42s | 2.31s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | — | 2.19s | — | 2.36s | 2.27s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | — | 2.23s | — | 2.31s | 2.27s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 0.71s | — | 3.81s | — | 2.26s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | — | 2.20s | — | 2.28s | 2.24s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 0.65s | — | 3.78s | — | 2.21s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value] | 0.55s | — | 3.76s | — | 2.15s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CREATE2] | — | 1.68s | — | 2.32s | 2.00s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value] | 0.55s | — | 3.42s | — | 1.99s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE] | 0.57s | — | 3.15s | — | 1.86s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 0.60s | — | 3.00s | — | 1.80s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 0.56s | — | 3.01s | — | 1.78s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | — | 1.61s | — | 1.90s | 1.76s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | — | 1.82s | — | 1.67s | 1.74s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | — | 1.61s | — | 1.85s | 1.73s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | — | 1.58s | — | 1.86s | 1.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 0.54s | — | 2.90s | — | 1.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 0.57s | — | 2.85s | — | 1.71s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 0.45s | — | 2.95s | — | 1.70s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | — | 1.56s | — | 1.84s | 1.70s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | — | 1.53s | — | 1.83s | 1.68s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | — | 1.51s | — | 1.85s | 1.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 0.56s | — | 2.81s | — | 1.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 0.50s | — | 2.86s | — | 1.68s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | — | 1.59s | — | 1.75s | 1.67s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 0.46s | — | 2.88s | — | 1.67s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | — | 1.53s | — | 1.79s | 1.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | — | 1.42s | — | 1.87s | 1.65s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | — | 1.50s | — | 1.79s | 1.65s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | — | 1.52s | — | 1.77s | 1.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | — | 1.44s | — | 1.85s | 1.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | — | 1.52s | — | 1.76s | 1.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | — | 1.54s | — | 1.74s | 1.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | — | 1.50s | — | 1.78s | 1.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | — | 1.52s | — | 1.75s | 1.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | — | 1.48s | — | 1.78s | 1.63s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | — | 1.45s | — | 1.81s | 1.63s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | — | 1.50s | — | 1.74s | 1.62s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | — | 1.49s | — | 1.73s | 1.61s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | — | 1.48s | — | 1.74s | 1.61s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | — | 1.50s | — | 1.70s | 1.60s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | — | 1.47s | — | 1.74s | 1.60s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | — | 1.51s | — | 1.68s | 1.59s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | — | 1.47s | — | 1.71s | 1.59s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | — | 1.44s | — | 1.73s | 1.58s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | — | 1.43s | — | 1.73s | 1.58s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | — | 1.43s | — | 1.71s | 1.57s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | — | 1.42s | — | 1.73s | 1.57s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE2] | — | 1.43s | — | 1.70s | 1.56s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | — | 1.50s | — | 1.63s | 1.56s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | — | 1.42s | — | 1.69s | 1.56s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | — | 1.45s | — | 1.66s | 1.55s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | — | 1.41s | — | 1.70s | 1.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 0.50s | — | 2.60s | — | 1.55s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | — | 1.37s | — | 1.72s | 1.55s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | — | 1.46s | — | 1.63s | 1.54s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | — | 1.43s | — | 1.66s | 1.54s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | — | 1.46s | — | 1.63s | 1.54s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | — | 1.45s | — | 1.64s | 1.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 0.49s | — | 2.59s | — | 1.54s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | — | 1.40s | — | 1.66s | 1.53s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE2] | — | 1.25s | — | 1.78s | 1.52s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE2] | — | 1.25s | — | 1.78s | 1.51s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE2] | — | 1.24s | — | 1.78s | 1.51s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE2] | — | 1.22s | — | 1.80s | 1.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 0.50s | — | 2.52s | — | 1.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 0.48s | — | 2.51s | — | 1.50s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE2] | — | 1.24s | — | 1.73s | 1.49s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_2_sets] | — | 1.05s | — | 1.93s | 1.49s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_1_pair] | — | 0.99s | — | 1.97s | 1.48s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 0.52s | — | 2.39s | — | 1.46s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE2] | — | 1.24s | — | 1.66s | 1.45s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE] | — | 1.03s | — | 1.86s | 1.44s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_zero_input] | — | 0.96s | — | 1.91s | 1.44s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE2] | — | 1.14s | — | 1.71s | 1.43s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 0.52s | — | 2.33s | — | 1.43s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE] | — | 1.05s | — | 1.80s | 1.42s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_REVERT] | 0.43s | — | 2.40s | — | 1.41s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE] | — | 1.04s | — | 1.75s | 1.40s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_False] | 0.44s | — | 2.34s | — | 1.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 0.51s | — | 2.27s | — | 1.39s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE] | — | 1.11s | — | 1.66s | 1.39s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE] | — | 1.05s | — | 1.70s | 1.38s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_RETURN] | 0.44s | — | 2.31s | — | 1.38s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE] | — | 1.06s | — | 1.66s | 1.36s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 0.44s | — | 2.26s | — | 1.35s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 0.45s | — | 2.25s | — | 1.35s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 0.44s | — | 2.25s | — | 1.34s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE] | — | 1.02s | — | 1.65s | 1.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 0.44s | — | 2.21s | — | 1.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE2] | 0.46s | — | 2.19s | — | 1.32s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE] | — | 0.92s | — | 1.71s | 1.31s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE2] | 0.44s | — | 2.18s | — | 1.31s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE] | 0.52s | — | 2.05s | — | 1.28s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE] | 0.47s | — | 2.07s | — | 1.27s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 0.41s | — | 2.08s | — | 1.25s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 0.48s | — | 1.98s | — | 1.23s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 0.44s | — | 1.98s | — | 1.21s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 0.43s | — | 1.98s | — | 1.21s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 0.43s | — | 1.98s | — | 1.20s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_3_pair] | — | 0.60s | — | 1.71s | 1.15s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_1_pair_empty] | — | 0.63s | — | 1.56s | 1.09s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 0.41s | — | 1.72s | — | 1.07s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 0.41s | — | 1.69s | — | 1.05s |
| test_worst_compute.py::test_empty_block[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | 0.60s | — | 1.46s | 1.03s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE2] | 0.37s | — | 1.41s | — | 0.89s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000000] | 0.31s | — | 0.81s | — | 0.56s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 0.24s | — | 0.88s | — | 0.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 0.28s | — | 0.78s | — | 0.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 0.33s | — | 0.70s | — | 0.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 0.28s | — | 0.75s | — | 0.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 0.28s | — | 0.72s | — | 0.50s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 0.26s | — | 0.73s | — | 0.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 0.28s | — | 0.70s | — | 0.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 0.29s | — | 0.69s | — | 0.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 0.28s | — | 0.70s | — | 0.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 0.27s | — | 0.71s | — | 0.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 0.27s | — | 0.70s | — | 0.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 0.26s | — | 0.70s | — | 0.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 0.27s | — | 0.68s | — | 0.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 0.25s | — | 0.70s | — | 0.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 0.26s | — | 0.69s | — | 0.47s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 0.27s | — | 0.68s | — | 0.47s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 0.25s | — | 0.64s | — | 0.44s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 0.32s | — | 0.56s | — | 0.44s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 0.26s | — | 0.58s | — | 0.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 0.24s | — | 0.59s | — | 0.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 0.25s | — | 0.57s | — | 0.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 0.27s | — | 0.55s | — | 0.41s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_2_sets] | 0.30s | — | 0.52s | — | 0.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 0.28s | — | 0.54s | — | 0.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 0.27s | — | 0.54s | — | 0.40s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 0.23s | — | 0.57s | — | 0.40s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 0.23s | — | 0.57s | — | 0.40s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 0.26s | — | 0.54s | — | 0.40s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 0.25s | — | 0.55s | — | 0.40s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_zero_input] | 0.26s | — | 0.53s | — | 0.40s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 0.23s | — | 0.56s | — | 0.40s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 0.25s | — | 0.54s | — | 0.39s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 0.24s | — | 0.55s | — | 0.39s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 0.26s | — | 0.53s | — | 0.39s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair] | 0.26s | — | 0.52s | — | 0.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 0.25s | — | 0.54s | — | 0.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 0.24s | — | 0.54s | — | 0.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 0.24s | — | 0.54s | — | 0.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 0.23s | — | 0.55s | — | 0.39s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 0.25s | — | 0.53s | — | 0.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 0.23s | — | 0.54s | — | 0.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 0.23s | — | 0.54s | — | 0.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 0.24s | — | 0.54s | — | 0.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 0.23s | — | 0.54s | — | 0.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 0.23s | — | 0.54s | — | 0.38s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE2] | 0.23s | — | 0.53s | — | 0.38s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 0.22s | — | 0.54s | — | 0.38s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 0.23s | — | 0.53s | — | 0.38s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 0.23s | — | 0.54s | — | 0.38s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 0.24s | — | 0.52s | — | 0.38s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 0.25s | — | 0.51s | — | 0.38s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 0.26s | — | 0.47s | — | 0.37s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 0.24s | — | 0.49s | — | 0.37s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 0.22s | — | 0.50s | — | 0.36s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 0.24s | — | 0.48s | — | 0.36s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 0.24s | — | 0.47s | — | 0.35s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 0.23s | — | 0.47s | — | 0.35s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 0.23s | — | 0.47s | — | 0.35s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE] | 0.23s | — | 0.46s | — | 0.35s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair_empty] | 0.23s | — | 0.16s | — | 0.20s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_3_pair] | 0.20s | — | 0.16s | — | 0.18s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 0.18s | — | 0.06s | — | 0.12s |

## Summary

**Total unique test cases:** 1069

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| openvm-v1.4.1 | 537 | 529 | 8 | 0 |
| risc0-v3.0.3 | 532 | 529 | 3 | 0 |
| sp1-v5.2.3 | 537 | 537 | 0 | 0 |
| zisk-v0.12.0 | 532 | 402 | 130 | 0 |

---

