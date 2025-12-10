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

| Test Case | openvm-v1.4.0 | risc0-v3.0.3 | sp1-v5.2.3 | zisk-v0.12.0 | Avg |
|-----------|-----------|-----------|-----------|-----------|----------|
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_qube] | — | — | 2h 18m 11.94s | — | 2h 18m 11.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_qube] | — | — | 2h 10m 2.18s | — | 2h 10m 2.18s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_square] | — | — | 2h 4m 35.36s | — | 2h 4m 35.36s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1024_exp_2] | — | — | 2h 2m 43.22s | — | 2h 2m 43.22s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_square] | — | — | 1h 59m 59.22s | — | 1h 59m 59.22s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1045_gas_base_heavy] | — | — | 1h 58m 57.68s | — | 1h 58m 57.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_800_gas_base_heavy] | — | — | 1h 57m 51.64s | — | 1h 57m 51.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_867_gas_base_heavy] | — | — | 1h 56m 58.81s | — | 1h 56m 58.81s |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_60M-blockchain_test-point_evaluation] | — | — | 1h 55m 48.79s | — | 1h 55m 48.79s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_qube] | — | — | 1h 54m 45.47s | — | 1h 54m 45.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_616_gas_base_heavy] | — | — | 1h 51m 23.95s | — | 1h 51m 23.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_408_gas_base_heavy] | — | — | 1h 47m 17.57s | — | 1h 47m 17.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_264_exp_2] | — | — | 1h 44m 48.58s | — | 1h 44m 48.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_square] | — | — | 1h 42m 23.19s | — | 1h 42m 23.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_256_exp_2] | — | — | 1h 40m 53.76s | — | 1h 40m 53.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_base_heavy] | — | — | 1h 24m 37.46s | — | 1h 24m 37.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_8b_exp_896] | — | — | 1h 10m 32.24s | — | 1h 10m 32.24s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_8_exp_896] | — | — | 1h 9m 12.25s | — | 1h 9m 12.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_298_gas_exp_heavy] | — | — | 1h 8m 54.72s | — | 1h 8m 54.72s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_1_exp_heavy] | — | — | 1h 6m 26.41s | — | 1h 6m 26.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_8_exp_648] | — | — | 1h 2m 56.63s | — | 1h 2m 56.63s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_215_gas_exp_heavy] | — | — | 1h 2m 37.00s | — | 1h 2m 37.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_exp_heavy] | — | — | 1h 2m 34.80s | — | 1h 2m 34.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_5_qube] | 31m 9.76s | 1h 25m 2.33s | — | ❌ SDK Crash | 58m 6.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_4_qube] | 30m 7.90s | 1h 23m 42.84s | — | ❌ SDK Crash | 56m 55.37s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_3_even] | — | — | 56m 6.24s | — | 56m 6.24s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-point_evaluation] | 28m 35.14s | 1h 18m 10.41s | — | ❌ SDK Crash | 53m 22.77s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_5_square] | 28m 30.43s | 1h 17m 50.59s | — | ❌ SDK Crash | 53m 10.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_1024_exp_2] | 28m 14.54s | 1h 17m 20.71s | — | ❌ SDK Crash | 52m 47.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_4_square] | 27m 31.44s | 1h 16m 36.99s | — | ❌ SDK Crash | 52m 4.21s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_1045_gas_base_heavy] | 26m 39.95s | 1h 15m 24.35s | — | ❌ SDK Crash | 51m 2.15s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_3_qube] | 25m 44.39s | 1h 16m 9.43s | — | ❌ SDK Crash | 50m 56.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_800_gas_base_heavy] | 26m 18.51s | 1h 14m 14.59s | — | ❌ SDK Crash | 50m 16.55s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_867_gas_base_heavy] | 26m 25.27s | 1h 11m 20.34s | — | ❌ SDK Crash | 48m 52.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_616_gas_base_heavy] | 25m 27.63s | 1h 8m 58.27s | — | ❌ SDK Crash | 47m 12.95s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_3_square] | 23m 45.08s | 1h 10m 39.43s | — | ❌ SDK Crash | 47m 12.26s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_408_gas_base_heavy] | 23m 54.09s | 1h 9m 49.74s | — | ❌ SDK Crash | 46m 51.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_264_exp_2] | 23m 24.78s | 1h 9m 3.30s | — | ❌ SDK Crash | 46m 14.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_256_exp_2] | 22m 50.08s | 1h 8m 23.00s | — | ❌ SDK Crash | 45m 36.54s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_qube] | — | — | 44m 1.39s | — | 44m 1.39s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_fp_to_g1] | — | — | 43m 35.25s | — | 43m 35.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_800_gas_exp_heavy] | — | — | 42m 7.04s | — | 42m 7.03s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_square] | — | — | 41m 14.62s | — | 41m 14.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_852_gas_exp_heavy] | — | — | 41m 11.76s | — | 41m 11.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_600_gas_exp_heavy] | — | — | 40m 35.67s | — | 40m 35.67s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_pairing_check] | — | — | 40m 15.00s | — | 40m 15.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_16b_exp_320] | — | — | 39m 36.68s | — | 39m 36.68s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_min_gas_base_heavy] | 19m 19.35s | 57m 26.50s | — | ❌ SDK Crash | 38m 22.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_2] | — | — | 37m 40.25s | — | 37m 40.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_400_gas_exp_heavy] | — | — | 37m 29.43s | — | 37m 29.43s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_2_exp_heavy] | — | — | 36m 17.70s | — | 36m 17.70s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_2_even] | — | — | 36m 9.61s | — | 36m 9.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_8b_exp_896] | 15m 52.34s | 49m 34.91s | — | ❌ SDK Crash | 32m 43.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_marius_1_even] | — | — | 32m 16.95s | — | 32m 16.95s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_8_exp_896] | 15m 27.93s | 48m 26.10s | — | ❌ SDK Crash | 31m 57.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_exp_298_gas_exp_heavy] | 15m 47.27s | 47m 58.65s | — | ❌ SDK Crash | 31m 52.96s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_765_gas_exp_heavy] | — | — | 31m 43.66s | — | 31m 43.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_24b_exp_168] | — | — | 31m 22.97s | — | 31m 22.96s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_fp_to_g2] | — | — | 30m 56.04s | — | 30m 56.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_1_exp_heavy] | 15m 8.55s | 46m 8.48s | — | ❌ SDK Crash | 30m 38.51s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_3] | — | — | 30m 28.27s | — | 30m 28.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_256] | — | — | 29m 31.58s | — | 29m 31.58s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_8_exp_648] | 14m 9.31s | 44m 4.40s | — | ❌ SDK Crash | 29m 6.86s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_exp_215_gas_exp_heavy] | 14m 9.97s | 44m 0.53s | — | ❌ SDK Crash | 29m 5.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_256] | — | — | 28m 55.57s | — | 28m 55.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1360_gas_balanced] | — | — | 28m 54.38s | — | 28m 54.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_example_1] | — | — | 28m 47.43s | — | 28m 47.43s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_heavy] | — | — | 28m 41.19s | — | 28m 41.19s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_min_gas_exp_heavy] | 14m 1.00s | 42m 50.84s | — | ❌ SDK Crash | 28m 25.92s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_96] | — | — | 27m 52.45s | — | 27m 52.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_zkevm_worst_case] | — | — | 27m 46.50s | — | 27m 46.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_677_gas_base_heavy] | — | — | 27m 34.75s | — | 27m 34.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_128] | — | — | 27m 34.60s | — | 27m 34.60s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_example_2] | — | — | 27m 10.86s | — | 27m 10.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_8] | — | — | 26m 48.76s | — | 26m 48.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_96] | — | — | 26m 48.33s | — | 26m 48.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_4] | — | — | 26m 18.11s | — | 26m 18.11s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_65] | — | — | 25m 57.33s | — | 25m 57.33s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g2add] | — | — | 25m 41.93s | — | 25m 41.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_408_gas_balanced] | — | — | 25m 30.14s | — | 25m 30.14s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_60M-blockchain_test-ecrecover] | — | — | 25m 22.26s | — | 25m 22.26s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_600_gas_balanced] | — | — | 25m 8.74s | — | 25m 8.74s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g1add] | — | — | 25m 5.91s | — | 25m 5.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_4_exp_heavy] | — | — | 24m 54.87s | — | 24m 54.87s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_64] | — | — | 24m 41.79s | — | 24m 41.79s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_64b_exp_512] | — | — | 24m 36.44s | — | 24m 36.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1360n1] | — | — | 24m 33.20s | — | 24m 33.19s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_guido_3_even] | 13m 24.85s | 35m 30.26s | — | ❌ SDK Crash | 24m 27.56s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_767_gas_balanced] | — | — | 24m 18.31s | — | 24m 18.31s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_64b_exp_512] | — | — | 24m 16.37s | — | 24m 16.37s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_996_gas_balanced] | — | — | 23m 59.94s | — | 23m 59.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_40] | — | — | 23m 58.37s | — | 23m 58.37s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ecrecover] | 38m 0.08s | 9m 38.52s | — | ❌ SDK Crash | 23m 49.30s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_balanced] | — | — | 23m 47.13s | — | 23m 47.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1360n2] | — | — | 23m 30.89s | — | 23m 30.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_128b_exp_1024] | — | — | 22m 26.99s | — | 22m 26.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_208_gas_balanced] | — | — | 22m 23.55s | — | 22m 23.55s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_128b_exp_1024] | — | — | 22m 17.39s | — | 22m 17.39s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1349n1] | — | — | 22m 10.84s | — | 22m 10.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_40] | — | — | 22m 9.19s | — | 22m 9.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_36] | — | — | 21m 52.66s | — | 21m 52.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_256b_exp_1024] | — | — | 21m 32.76s | — | 21m 32.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_1_even] | — | — | 21m 29.88s | — | 21m 29.88s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g1msm] | — | — | 21m 26.39s | — | 21m 26.39s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_256b_exp_1024] | — | — | 21m 24.47s | — | 21m 24.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_2_qube] | 10m 32.00s | 32m 0.47s | — | ❌ SDK Crash | 21m 16.23s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_60M-blockchain_test-blake2f] | — | — | 21m 11.75s | — | 21m 11.75s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_pairing_check] | 10m 15.19s | 31m 56.03s | — | ❌ SDK Crash | 21m 5.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_cover_windows] | — | — | 20m 35.80s | — | 20m 35.80s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_512b_exp_1024] | — | — | 20m 35.01s | — | 20m 35.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_512b_exp_1024] | — | — | 20m 32.33s | — | 20m 32.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_2_square] | 9m 48.88s | 29m 45.25s | — | ❌ SDK Crash | 19m 47.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | — | — | 19m 35.74s | — | 19m 35.73s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_1024b_exp_1024] | — | — | 19m 34.73s | — | 19m 34.72s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_1024b_exp_1024] | — | — | 19m 34.21s | — | 19m 34.21s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_852_gas_exp_heavy] | 9m 18.69s | 29m 9.43s | — | ❌ SDK Crash | 19m 14.06s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_800_gas_exp_heavy] | 9m 26.05s | 28m 53.43s | — | ❌ SDK Crash | 19m 9.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | — | — | 19m 7.91s | — | 19m 7.90s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add] | — | — | 19m 0.09s | — | 19m 0.09s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_32] | — | — | 18m 45.94s | — | 18m 45.94s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_600_gas_exp_heavy] | 9m 1.60s | 28m 1.57s | — | ❌ SDK Crash | 18m 31.58s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | — | — | 18m 27.79s | — | 18m 27.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_16b_exp_320] | 8m 51.13s | 27m 40.28s | — | ❌ SDK Crash | 18m 15.71s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | — | — | 17m 52.33s | — | 17m 52.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | — | — | 17m 51.64s | — | 17m 51.64s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_pawel_2] | 8m 30.53s | 26m 32.80s | — | ❌ SDK Crash | 17m 31.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_400_gas_exp_heavy] | 8m 25.50s | 26m 5.90s | — | ❌ SDK Crash | 17m 15.70s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_fp_to_g1] | 12m 28.46s | 21m 54.13s | — | ❌ SDK Crash | 17m 11.29s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_2_exp_heavy] | 8m 15.91s | 25m 7.22s | — | ❌ SDK Crash | 16m 41.56s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n3] | — | — | 16m 7.13s | — | 16m 7.13s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_guido_2_even] | 8m 12.31s | 24m 1.27s | — | ❌ SDK Crash | 16m 6.79s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n2] | — | — | 15m 44.24s | — | 15m 44.24s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1152n1] | — | — | 15m 31.53s | — | 15m 31.53s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_765_gas_exp_heavy] | 7m 7.65s | 21m 58.12s | — | ❌ SDK Crash | 14m 32.89s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_marius_1_even] | 7m 19.85s | 21m 43.37s | — | ❌ SDK Crash | 14m 31.61s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g2msm] | — | — | 14m 22.72s | — | 14m 22.72s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_qube] | — | — | 14m 14.17s | — | 14m 14.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_pawel_3] | 6m 44.71s | 21m 10.91s | — | ❌ SDK Crash | 13m 57.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_1360_gas_balanced] | 6m 30.25s | 20m 45.00s | — | ❌ SDK Crash | 13m 37.62s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_fp_to_g2] | 8m 20.01s | 18m 41.94s | — | ❌ SDK Crash | 13m 30.98s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_32b_exp_256] | 6m 40.34s | 20m 9.26s | — | ❌ SDK Crash | 13m 24.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_32b_exp_256] | 6m 40.20s | 20m 9.22s | — | ❌ SDK Crash | 13m 24.71s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_24b_exp_168] | 7m 3.06s | 19m 32.90s | — | ❌ SDK Crash | 13m 17.98s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_example_1] | 6m 32.75s | 19m 58.40s | — | ❌ SDK Crash | 13m 15.58s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_heavy] | 6m 31.85s | 19m 49.92s | — | ❌ SDK Crash | 13m 10.89s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g2add] | 6m 54.03s | 19m 25.08s | — | ❌ SDK Crash | 13m 9.56s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_square] | — | — | 13m 4.84s | — | 13m 4.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_zkevm_worst_case] | 6m 25.86s | 19m 24.95s | — | ❌ SDK Crash | 12m 55.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_32b_exp_96] | 6m 19.05s | 19m 17.21s | — | ❌ SDK Crash | 12m 48.13s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-blake2f] | 7m 31.98s | 17m 43.02s | — | ❌ SDK Crash | 12m 37.50s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_128] | 6m 12.19s | 18m 59.87s | — | ❌ SDK Crash | 12m 36.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_677_gas_base_heavy] | 6m 11.63s | 18m 55.09s | — | ❌ SDK Crash | 12m 33.36s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_example_2] | 6m 13.66s | 18m 52.09s | — | ❌ SDK Crash | 12m 32.88s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_8] | 6m 8.11s | 18m 50.27s | — | ❌ SDK Crash | 12m 29.19s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_32b_exp_96] | 6m 4.60s | 18m 45.95s | — | ❌ SDK Crash | 12m 25.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n1] | — | — | 12m 22.79s | — | 12m 22.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_pawel_4] | 5m 59.91s | 18m 21.28s | — | ❌ SDK Crash | 12m 10.59s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_65] | 5m 56.19s | 18m 4.23s | — | ❌ SDK Crash | 12m 0.21s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_600_gas_balanced] | 5m 48.18s | 17m 36.25s | — | ❌ SDK Crash | 11m 42.21s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1360n1] | 5m 39.50s | 17m 39.48s | — | ❌ SDK Crash | 11m 39.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_4_exp_heavy] | 5m 48.04s | 17m 26.45s | — | ❌ SDK Crash | 11m 37.24s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_64] | 5m 38.42s | 17m 13.59s | — | ❌ SDK Crash | 11m 26.00s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul] | — | — | 11m 20.43s | — | 11m 20.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_996_gas_balanced] | 5m 35.68s | 16m 58.99s | — | ❌ SDK Crash | 11m 17.34s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | — | — | 11m 16.88s | — | 11m 16.88s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | — | — | 11m 16.42s | — | 11m 16.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_32b_exp_40] | 5m 30.88s | 16m 53.86s | — | ❌ SDK Crash | 11m 12.37s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_767_gas_balanced] | 5m 32.42s | 16m 45.52s | — | ❌ SDK Crash | 11m 8.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_min_gas_balanced] | 5m 31.52s | 16m 42.49s | — | ❌ SDK Crash | 11m 7.00s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_191] | — | — | 11m 3.83s | — | 11m 3.83s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g1add] | 6m 44.90s | 15m 19.63s | — | ❌ SDK Crash | 11m 2.27s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_64b_exp_512] | 5m 47.83s | 16m 2.84s | — | ❌ SDK Crash | 10m 55.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_64b_exp_512] | 5m 42.99s | 16m 4.31s | — | ❌ SDK Crash | 10m 53.65s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_408_gas_balanced] | 5m 40.32s | 15m 52.13s | — | ❌ SDK Crash | 10m 46.22s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_255] | — | — | 10m 41.30s | — | 10m 41.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1360n2] | 5m 10.71s | 15m 57.41s | — | ❌ SDK Crash | 10m 34.06s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1349n1] | 5m 7.80s | 15m 49.01s | — | ❌ SDK Crash | 10m 28.40s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_40] | 5m 12.14s | 15m 39.04s | — | ❌ SDK Crash | 10m 25.59s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_128b_exp_1024] | 5m 20.40s | 15m 26.72s | — | ❌ SDK Crash | 10m 23.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_36] | 5m 1.32s | 15m 12.90s | — | ❌ SDK Crash | 10m 7.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_128b_exp_1024] | 5m 18.70s | 14m 29.53s | — | ❌ SDK Crash | 9m 54.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_guido_1_even] | 4m 56.69s | 14m 38.17s | — | ❌ SDK Crash | 9m 47.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_32b_exp_cover_windows] | 4m 45.70s | 14m 45.25s | — | ❌ SDK Crash | 9m 45.48s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_exp_208_gas_balanced] | 5m 9.55s | 14m 7.17s | — | ❌ SDK Crash | 9m 38.36s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_256b_exp_1024] | 5m 6.56s | 14m 9.23s | — | ❌ SDK Crash | 9m 37.90s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test-contract_balance_1] | — | — | 9m 30.65s | — | 9m 30.65s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_256b_exp_1024] | 5m 6.71s | 13m 51.25s | — | ❌ SDK Crash | 9m 28.98s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test-contract_balance_0] | — | — | 9m 28.85s | — | 9m 28.85s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_2_pow_0x10001] | 4m 42.09s | 14m 14.95s | — | ❌ SDK Crash | 9m 28.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_1_pow_0x10001] | 4m 36.39s | 13m 57.52s | — | ❌ SDK Crash | 9m 16.95s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_512b_exp_1024] | 4m 58.16s | 13m 28.96s | — | ❌ SDK Crash | 9m 13.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_512b_exp_1024] | 4m 56.16s | 13m 28.50s | — | ❌ SDK Crash | 9m 12.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_3_pow_0x10001] | 4m 35.80s | 12m 56.65s | — | ❌ SDK Crash | 8m 46.23s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_32] | 4m 21.69s | 13m 8.12s | — | ❌ SDK Crash | 8m 44.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_1024b_exp_1024] | 4m 43.74s | 12m 40.37s | — | ❌ SDK Crash | 8m 42.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_1024b_exp_1024] | 4m 42.21s | 12m 14.76s | — | ❌ SDK Crash | 8m 28.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_4_pow_0x10001] | 4m 31.15s | 12m 24.41s | — | ❌ SDK Crash | 8m 27.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_5_pow_0x10001] | 4m 25.95s | 12m 7.88s | — | ❌ SDK Crash | 8m 16.92s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_STATICCALL] | ❌ SDK Crash | 7m 52.18s | — | ❌ SDK Crash | 7m 52.18s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DELEGATECALL] | ❌ SDK Crash | 7m 49.76s | — | ❌ SDK Crash | 7m 49.76s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALL] | ❌ SDK Crash | 7m 49.70s | — | ❌ SDK Crash | 7m 49.70s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLCODE] | ❌ SDK Crash | 7m 49.26s | — | ❌ SDK Crash | 7m 49.26s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODESIZE] | ❌ SDK Crash | 7m 42.24s | — | ❌ SDK Crash | 7m 42.24s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_191] | — | — | 7m 41.18s | — | 7m 41.18s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_127] | — | — | 7m 40.66s | — | 7m 40.66s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODEHASH] | ❌ SDK Crash | 7m 39.61s | — | ❌ SDK Crash | 7m 39.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_200n3] | 3m 45.67s | 11m 26.93s | — | ❌ SDK Crash | 7m 36.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_200n2] | 3m 47.21s | 11m 23.91s | — | ❌ SDK Crash | 7m 35.56s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODECOPY] | ❌ SDK Crash | 7m 24.41s | — | ❌ SDK Crash | 7m 24.41s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_191] | — | — | 7m 22.52s | — | 7m 22.52s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 5m 38.31s | 8m 46.64s | — | ❌ SDK Crash | 7m 12.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1152n1] | 3m 31.86s | 10m 50.84s | — | ❌ SDK Crash | 7m 11.35s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SDIV-1] | — | — | 7m 9.50s | — | 7m 9.50s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SDIV-0] | — | — | 7m 6.51s | — | 7m 6.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_1_qube] | 3m 27.89s | 10m 23.77s | — | ❌ SDK Crash | 6m 55.83s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_5_pair] | 5m 24.80s | 8m 18.63s | — | ❌ SDK Crash | 6m 51.71s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_4_pair] | 5m 12.27s | 8m 13.97s | — | ❌ SDK Crash | 6m 43.12s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_2_pair] | 5m 10.07s | 7m 55.89s | — | ❌ SDK Crash | 6m 32.98s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_1_square] | 3m 14.91s | 9m 50.92s | — | ❌ SDK Crash | 6m 32.91s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | — | — | 6m 32.89s | — | 6m 32.89s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_two_pairings] | 5m 7.91s | 7m 54.82s | — | ❌ SDK Crash | 6m 31.37s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g1msm] | 6m 21.26s | ❌ SDK Crash | — | ❌ SDK Crash | 6m 21.25s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_one_pairing] | 4m 59.44s | 7m 35.81s | — | ❌ SDK Crash | 6m 17.63s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DIV-0] | — | — | 6m 7.80s | — | 6m 7.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_200n1] | 3m 4.27s | 8m 51.00s | — | ❌ SDK Crash | 5m 57.63s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_63] | — | — | 5m 54.88s | — | 5m 54.88s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_127] | — | — | 5m 52.99s | — | 5m 52.99s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 5m 46.51s | — | 5m 46.51s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul] | 8m 31.73s | 8m 14.89s | — | 29.20s | 5m 45.28s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_255] | — | — | 5m 44.50s | — | 5m 44.50s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DIV-1] | — | — | 5m 42.03s | — | 5m 42.03s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_scalar] | 8m 6.15s | 7m 59.65s | — | 28.57s | 5m 31.46s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_255] | — | — | 5m 30.83s | — | 5m 30.83s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_1_2_32_byte_scalar] | 8m 6.45s | 7m 57.07s | — | 28.89s | 5m 30.81s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_127] | — | — | 5m 26.86s | — | 5m 26.86s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_191] | — | — | 5m 21.98s | — | 5m 21.98s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_2_pair] | — | — | 5m 19.52s | — | 5m 19.51s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODEHASH] | — | — | 5m 18.51s | — | 5m 18.51s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_5_pair] | — | — | 5m 18.37s | — | 5m 18.37s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DELEGATECALL] | — | — | 5m 18.10s | — | 5m 18.10s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_4_pair] | — | — | 5m 17.76s | — | 5m 17.76s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_one_pairing] | — | — | 5m 16.90s | — | 5m 16.90s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_two_pairings] | — | — | 5m 16.58s | — | 5m 16.58s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLCODE] | — | — | 5m 15.03s | — | 5m 15.03s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALL] | — | — | 5m 3.91s | — | 5m 3.91s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_STATICCALL] | — | — | 5m 0.73s | — | 5m 0.73s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_191] | 2m 34.54s | 7m 20.93s | — | ❌ SDK Crash | 4m 57.74s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODESIZE] | — | — | 4m 55.27s | — | 4m 55.26s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODECOPY] | — | — | 4m 45.06s | — | 4m 45.06s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_255] | 2m 29.38s | 6m 59.78s | — | ❌ SDK Crash | 4m 44.58s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_255] | — | — | 4m 29.60s | — | 4m 29.60s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PREVRANDAO] | — | — | 4m 12.96s | — | 4m 12.96s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_127] | — | — | 4m 12.30s | — | 4m 12.30s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_diff_acc] | — | — | 3m 56.43s | — | 3m 56.43s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_63] | — | — | 3m 53.51s | — | 3m 53.51s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_b] | — | — | 3m 49.61s | — | 3m 49.61s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_add_1_2] | 5m 27.55s | 2m 9.80s | — | ❌ SDK Crash | 3m 48.68s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add_1_2] | — | — | 3m 46.62s | — | 3m 46.62s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_b] | — | — | 3m 46.55s | — | 3m 46.55s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_diff_acc] | — | — | 3m 45.24s | — | 3m 45.24s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g2msm] | 3m 44.99s | ❌ SDK Crash | — | ❌ SDK Crash | 3m 44.99s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_a] | — | — | 3m 42.93s | — | 3m 42.93s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_63] | — | — | 3m 35.59s | — | 3m 35.59s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_add] | 4m 59.41s | 2m 8.94s | — | ❌ SDK Crash | 3m 34.17s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_127] | 1m 51.60s | 5m 16.46s | — | ❌ SDK Crash | 3m 34.03s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_191] | 1m 43.78s | 5m 11.97s | — | ❌ SDK Crash | 3m 27.87s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_191] | 1m 41.29s | 5m 8.35s | — | ❌ SDK Crash | 3m 24.82s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SDIV-1] | 1m 41.78s | 5m 5.21s | — | ❌ SDK Crash | 3m 23.49s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SDIV-0] | 1m 41.32s | 4m 58.37s | — | ❌ SDK Crash | 3m 19.85s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXP-] | — | — | 3m 15.36s | — | 3m 15.36s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero-loop] | — | — | 3m 6.90s | — | 3m 6.90s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_False] | — | — | 2m 59.70s | — | 2m 59.70s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP13] | — | — | 2m 58.03s | — | 2m 58.03s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP15] | — | — | 2m 57.38s | — | 2m 57.38s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_True] | — | — | 2m 57.33s | — | 2m 57.33s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP14] | — | — | 2m 57.17s | — | 2m 57.17s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_63] | — | — | 2m 57.00s | — | 2m 57.00s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP12] | — | — | 2m 56.89s | — | 2m 56.89s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-one-loop] | — | — | 2m 56.55s | — | 2m 56.55s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_False] | — | — | 2m 56.37s | — | 2m 56.37s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP10] | — | — | 2m 56.09s | — | 2m 56.09s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP7] | — | — | 2m 55.84s | — | 2m 55.84s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP16] | — | — | 2m 55.62s | — | 2m 55.62s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty-opcode_REVERT] | — | — | 2m 55.56s | — | 2m 55.56s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_True] | — | — | 2m 54.44s | — | 2m 54.44s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP5] | — | — | 2m 53.59s | — | 2m 53.59s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP2] | — | — | 2m 53.19s | — | 2m 53.19s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP8] | — | — | 2m 53.07s | — | 2m 53.07s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP3] | — | — | 2m 52.66s | — | 2m 52.66s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP6] | — | — | 2m 52.47s | — | 2m 52.47s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP4] | — | — | 2m 52.25s | — | 2m 52.25s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP11] | — | — | 2m 52.18s | — | 2m 52.18s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP9] | — | — | 2m 52.17s | — | 2m 52.17s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DIV-0] | 1m 25.40s | 4m 15.79s | — | ❌ SDK Crash | 2m 50.59s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP1] | — | — | 2m 50.22s | — | 2m 50.22s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH31] | — | — | 2m 45.24s | — | 2m 45.24s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty] | — | — | 2m 45.15s | — | 2m 45.15s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_CALL] | — | — | 2m 43.28s | — | 2m 43.28s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLER] | — | — | 2m 42.98s | — | 2m 42.98s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_STATICCALL] | — | — | 2m 42.20s | — | 2m 42.20s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_COINBASE] | — | — | 2m 41.94s | — | 2m 41.94s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ADDRESS] | — | — | 2m 41.90s | — | 2m 41.90s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_63] | 1m 24.99s | 3m 58.26s | — | ❌ SDK Crash | 2m 41.62s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH30] | — | — | 2m 40.92s | — | 2m 40.92s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ORIGIN] | — | — | 2m 40.40s | — | 2m 40.40s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH32] | — | — | 2m 39.96s | — | 2m 39.96s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_255] | 1m 18.19s | 4m 1.29s | — | ❌ SDK Crash | 2m 39.74s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_CALLCODE] | — | — | 2m 38.89s | — | 2m 38.89s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty-opcode_RETURN] | — | — | 2m 38.37s | — | 2m 38.37s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 1m 14.05s | 4m 0.34s | — | ❌ SDK Crash | 2m 37.20s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SGT-] | — | — | 2m 37.13s | — | 2m 37.13s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH29] | — | — | 2m 31.38s | — | 2m 31.38s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_191] | 1m 14.42s | 3m 43.95s | — | ❌ SDK Crash | 2m 29.19s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH28] | — | — | 2m 29.11s | — | 2m 29.11s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DIV-1] | 1m 19.84s | 4m 1.28s | — | 1m 55.30s | 2m 25.47s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH27] | — | — | 2m 24.92s | — | 2m 24.92s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_CALL] | — | — | 2m 22.90s | — | 2m 22.90s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_255] | 1m 17.97s | 3m 53.44s | — | 1m 50.72s | 2m 20.71s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | — | — | 2m 19.87s | — | 2m 19.87s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EQ-] | — | — | 2m 19.86s | — | 2m 19.86s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_127] | 1m 21.99s | 3m 53.95s | — | 1m 37.93s | 2m 17.96s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH23] | — | — | 2m 17.25s | — | 2m 17.25s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_CALLCODE] | — | — | 2m 16.70s | — | 2m 16.70s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_STATICCALL] | — | — | 2m 16.32s | — | 2m 16.32s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH26] | — | — | 2m 15.80s | — | 2m 15.79s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SAR-] | — | — | 2m 14.56s | — | 2m 14.56s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH22] | — | — | 2m 14.21s | — | 2m 14.21s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH25] | — | — | 2m 13.31s | — | 2m 13.31s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SMOD-] | — | — | 2m 12.98s | — | 2m 12.98s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH24] | — | — | 2m 12.71s | — | 2m 12.71s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 2m 12.24s | — | 2m 12.24s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BLOBBASEFEE] | — | — | 2m 11.87s | — | 2m 11.87s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_127] | 1m 19.12s | 3m 43.89s | — | 1m 31.90s | 2m 11.64s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test-shift_right_SAR] | — | — | 2m 8.37s | — | 2m 8.37s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASPRICE] | — | — | 2m 5.74s | — | 2m 5.74s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PREVRANDAO] | 1m 6.81s | 2m 59.85s | — | ❌ SDK Crash | 2m 3.33s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | — | — | 2m 3.06s | — | 2m 3.06s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH21] | — | — | 2m 0.73s | — | 2m 0.73s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of zero data-opcode_REVERT] | — | — | 2m 0.72s | — | 2m 0.72s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | — | — | 1m 59.67s | — | 1m 59.67s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_255] | 1m 2.17s | 3m 5.70s | — | 1m 50.64s | 1m 59.50s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH19] | — | — | 1m 58.65s | — | 1m 58.65s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH20] | — | — | 1m 57.43s | — | 1m 57.43s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test-shift_right_SHR] | — | — | 1m 55.76s | — | 1m 55.76s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE new value] | — | — | 1m 55.39s | — | 1m 55.39s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MUL-] | — | — | 1m 54.84s | — | 1m 54.84s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SHR-] | — | — | 1m 53.56s | — | 1m 53.56s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SHL-] | — | — | 1m 52.20s | — | 1m 52.20s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_127] | 1m 4.94s | 2m 54.28s | — | 1m 30.06s | 1m 49.76s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of zero data-opcode_RETURN] | — | — | 1m 49.29s | — | 1m 49.29s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH15] | — | — | 1m 48.75s | — | 1m 48.75s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH18] | — | — | 1m 46.41s | — | 1m 46.41s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_CALLCODE] | ❌ SDK Crash | 1m 50.09s | — | 1m 41.36s | 1m 45.72s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MOD-] | — | — | 1m 45.55s | — | 1m 45.55s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SIGNEXTEND-] | — | — | 1m 44.77s | — | 1m 44.77s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-six blobs, access latest] | — | — | 1m 44.22s | — | 1m 44.22s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH14] | — | — | 1m 43.67s | — | 1m 43.67s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH16] | — | — | 1m 43.50s | — | 1m 43.50s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | — | — | 1m 42.91s | — | 1m 42.91s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH17] | — | — | 1m 42.38s | — | 1m 42.38s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-one blob and accessed] | — | — | 1m 42.18s | — | 1m 42.18s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | — | — | 1m 42.14s | — | 1m 42.14s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | — | — | 1m 40.46s | — | 1m 40.46s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | — | — | 1m 40.34s | — | 1m 40.33s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | — | — | 1m 40.02s | — | 1m 40.02s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_TIMESTAMP] | — | — | 1m 40.01s | — | 1m 40.01s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-0 bytes] | — | — | 1m 39.92s | — | 1m 39.92s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | — | — | 1m 39.72s | — | 1m 39.72s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | — | — | 1m 39.40s | — | 1m 39.39s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | — | — | 1m 39.32s | — | 1m 39.31s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | — | — | 1m 38.92s | — | 1m 38.92s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_NUMBER] | — | — | 1m 38.50s | — | 1m 38.50s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | — | — | 1m 37.78s | — | 1m 37.78s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | — | — | 1m 37.69s | — | 1m 37.69s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | — | — | 1m 37.68s | — | 1m 37.68s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | — | — | 1m 37.32s | — | 1m 37.32s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_63] | 57.14s | 2m 37.77s | — | 1m 16.40s | 1m 37.10s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_infinities_32_byte_scalar] | 8.20s | 4m 34.00s | — | 4.90s | 1m 35.70s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BASEFEE] | — | — | 1m 35.63s | — | 1m 35.63s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0 bytes] | — | — | 1m 35.51s | — | 1m 35.51s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-empty-opcode_REVERT] | 42.96s | 2m 7.68s | — | 1m 55.38s | 1m 35.34s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CHAINID] | — | — | 1m 34.78s | — | 1m 34.78s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0 bytes] | — | — | 1m 34.56s | — | 1m 34.56s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_0] | — | — | 1m 32.44s | — | 1m 32.44s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 1m 31.97s | — | 1m 31.97s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1] | — | — | 1m 31.15s | — | 1m 31.15s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASLIMIT] | — | — | 1m 30.62s | — | 1m 30.61s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 1m 30.20s | — | 1m 30.20s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_63] | 52.54s | 2m 26.83s | — | 1m 9.50s | 1m 29.62s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | — | — | 1m 29.44s | — | 1m 29.44s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 1m 29.39s | — | 1m 29.39s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_CALLCODE] | 40.17s | 1m 59.28s | — | 1m 47.61s | 1m 29.02s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add_infinities] | — | — | 1m 28.90s | — | 1m 28.90s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_STATICCALL] | 39.45s | 1m 59.26s | — | 1m 47.12s | 1m 28.61s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_diff_acc] | 2m 54.50s | 1m 0.30s | — | 30.67s | 1m 28.49s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_CALL] | 40.20s | 1m 58.31s | — | 1m 46.57s | 1m 28.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH13] | — | — | 1m 27.97s | — | 1m 27.97s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000] | — | — | 1m 27.59s | — | 1m 27.59s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-100 bytes] | — | — | 1m 27.28s | — | 1m 27.28s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-empty-opcode_RETURN] | 38.80s | 1m 57.48s | — | 1m 44.11s | 1m 26.80s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_True] | — | — | 1m 24.89s | — | 1m 24.89s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | — | — | 1m 24.54s | — | 1m 24.54s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | — | — | 1m 23.89s | — | 1m 23.89s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH0] | — | — | 1m 23.84s | — | 1m 23.84s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | — | — | 1m 23.64s | — | 1m 23.64s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_b] | 2m 45.57s | 54.51s | — | 28.88s | 1m 22.99s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_diff_acc] | 2m 47.80s | 52.13s | — | 28.26s | 1m 22.73s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_STATICCALL] | 36.57s | 1m 49.96s | — | 1m 41.27s | 1m 22.60s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_False] | — | — | 1m 22.26s | — | 1m 22.26s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH12] | — | — | 1m 22.08s | — | 1m 22.08s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH11] | — | — | 1m 22.07s | — | 1m 22.07s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_CALL] | 35.67s | 1m 49.11s | — | 1m 40.55s | 1m 21.78s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | — | — | 1m 21.54s | — | 1m 21.54s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | — | — | 1m 20.55s | — | 1m 20.55s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_b] | 2m 46.70s | 47.07s | — | 26.55s | 1m 20.11s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_a] | 2m 46.66s | 46.72s | — | 26.55s | 1m 19.98s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-0 bytes] | — | — | 1m 19.45s | — | 1m 19.45s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE same value] | — | — | 1m 18.80s | — | 1m 18.80s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_False] | — | — | 1m 17.75s | — | 1m 17.75s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | — | — | 1m 17.46s | — | 1m 17.46s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_63] | 41.19s | 1m 56.17s | — | 1m 14.38s | 1m 17.25s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | — | — | 1m 17.05s | — | 1m 17.05s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | — | — | 1m 16.97s | — | 1m 16.97s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | — | — | 1m 16.90s | — | 1m 16.90s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | — | — | 1m 16.88s | — | 1m 16.88s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | — | — | 1m 16.83s | — | 1m 16.83s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 1m 16.81s | — | 1m 16.81s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | — | — | 1m 16.64s | — | 1m 16.64s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | — | — | 1m 16.58s | — | 1m 16.58s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | — | — | 1m 16.52s | — | 1m 16.52s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | — | — | 1m 16.24s | — | 1m 16.24s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_DELEGATECALL] | 33.54s | 1m 43.34s | — | 1m 31.44s | 1m 16.11s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-100 bytes] | — | — | 1m 16.06s | — | 1m 16.06s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_True] | — | — | 1m 16.04s | — | 1m 16.04s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_True] | — | — | 1m 16.00s | — | 1m 16.00s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | — | — | 1m 15.92s | — | 1m 15.92s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-zero-loop] | 36.53s | 1m 37.16s | — | 1m 33.04s | 1m 15.58s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_False] | — | — | 1m 15.38s | — | 1m 15.38s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-one-loop] | 37.34s | 1m 34.40s | — | 1m 33.92s | 1m 15.22s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 1m 14.53s | — | 1m 14.53s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | — | — | 1m 13.37s | — | 1m 13.37s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SLT-] | — | — | 1m 12.44s | — | 1m 12.44s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of zero data-opcode_REVERT] | 28.75s | 1m 52.87s | — | 1m 15.42s | 1m 12.35s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH30] | 24.80s | 1m 19.40s | — | 1m 51.09s | 1m 11.76s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_EXP-] | 48.69s | 2m 12.31s | — | 33.14s | 1m 11.38s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-IDENTITY] | ❌ SDK Crash | 1m 10.94s | — | ❌ SDK Crash | 1m 10.94s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 1m 10.48s | — | 1m 10.48s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH29] | 23.33s | 1m 16.29s | — | 1m 49.01s | 1m 9.54s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_DELEGATECALL] | 29.40s | 1m 32.22s | — | 1m 25.54s | 1m 9.06s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SUB-] | — | — | 1m 8.87s | — | 1m 8.87s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH27] | 23.38s | 1m 15.52s | — | 1m 45.62s | 1m 8.17s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH28] | 22.99s | 1m 16.35s | — | 1m 42.91s | 1m 7.42s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH10] | — | — | 1m 6.58s | — | 1m 6.58s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | — | — | 1m 6.35s | — | 1m 6.35s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-5b] | — | — | 1m 6.01s | — | 1m 6.01s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | — | — | 1m 6.00s | — | 1m 6.00s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SGT-] | 30.97s | 1m 29.25s | — | 1m 17.64s | 1m 5.95s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of zero data-opcode_RETURN] | 27.47s | 1m 40.38s | — | 1m 8.85s | 1m 5.57s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH7] | — | — | 1m 4.38s | — | 1m 4.38s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH26] | 22.65s | 1m 13.05s | — | 1m 36.64s | 1m 4.11s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CALLER] | 26.91s | 1m 28.23s | — | 1m 15.91s | 1m 3.68s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-empty] | 30.42s | 1m 19.75s | — | 1m 20.56s | 1m 3.58s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ADDRESS] | 26.76s | 1m 24.93s | — | 1m 18.80s | 1m 3.50s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_COINBASE] | 27.89s | 1m 23.48s | — | 1m 18.89s | 1m 3.42s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ADD-] | — | — | 1m 3.31s | — | 1m 3.30s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ORIGIN] | 26.92s | 1m 24.15s | — | 1m 18.09s | 1m 3.05s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH25] | 21.77s | 1m 12.03s | — | 1m 35.24s | 1m 3.01s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH9] | — | — | 1m 2.85s | — | 1m 2.85s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH8] | — | — | 1m 2.67s | — | 1m 2.67s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH24] | 21.79s | 1m 7.79s | — | 1m 33.29s | 1m 0.95s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH6] | — | — | 1m 0.79s | — | 1m 0.79s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 1m 0.38s | — | 1m 0.38s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_EQ-] | 28.69s | 1m 21.40s | — | 1m 10.72s | 1m 0.27s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BYTE-] | — | — | 59.64s | — | 59.64s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | — | — | 59.30s | — | 59.30s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | — | — | 59.26s | — | 59.26s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_10000] | — | — | 58.79s | — | 58.79s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | — | — | 58.77s | — | 58.77s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | — | — | 58.67s | — | 58.66s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | — | — | 58.53s | — | 58.53s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ISZERO] | 26.44s | 1m 18.30s | — | 1m 10.31s | 58.35s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_1000] | — | — | 58.21s | — | 58.21s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_OR-] | — | — | 58.03s | — | 58.03s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_0] | — | — | 57.85s | — | 57.85s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | — | — | 57.84s | — | 57.84s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-1MiB] | — | — | 57.68s | — | 57.68s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | — | — | 57.51s | — | 57.51s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH5] | — | — | 56.95s | — | 56.95s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH32] | 27.14s | 1m 26.64s | — | ❌ SDK Crash | 56.89s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_add_infinities] | 26.78s | 1m 8.55s | — | 1m 15.15s | 56.83s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | — | — | 56.59s | — | 56.59s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_LT-] | — | — | 56.43s | — | 56.43s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | — | — | 56.06s | — | 56.06s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GT-] | — | — | 56.02s | — | 56.02s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH23] | 20.86s | 1m 3.09s | — | 1m 23.64s | 55.86s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 0.93s | 2m 10.20s | — | 36.43s | 55.85s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SMOD-] | 27.32s | 1m 17.23s | — | 1m 2.90s | 55.82s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_AND-] | — | — | 55.56s | — | 55.56s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_XOR-] | — | — | 55.40s | — | 55.40s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-one blob but access non-existent index] | — | — | 55.22s | — | 55.22s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | — | — | 55.05s | — | 55.05s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH4] | — | — | 54.93s | — | 54.93s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | — | — | 54.40s | — | 54.40s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | — | — | 54.38s | — | 54.38s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH22] | 19.72s | 1m 2.34s | — | 1m 20.91s | 54.32s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 27.39s | 1m 9.08s | — | 1m 6.28s | 54.25s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 26.36s | 1m 9.42s | — | 1m 6.82s | 54.20s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-one blob and accessed] | 20.06s | 1m 4.09s | — | 1m 17.89s | 54.02s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | — | — | 54.00s | — | 54.00s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP13] | — | — | 53.99s | — | 53.99s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP7] | — | — | 53.93s | — | 53.93s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP3] | — | — | 53.92s | — | 53.92s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 27.03s | 1m 8.02s | — | 1m 6.26s | 53.77s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH31] | 25.39s | 1m 22.06s | — | ❌ SDK Crash | 53.72s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP15] | — | — | 53.64s | — | 53.64s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-six blobs, access latest] | 19.12s | 1m 3.91s | — | 1m 17.86s | 53.63s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | — | — | 53.61s | — | 53.61s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 26.64s | 1m 7.39s | — | 1m 6.74s | 53.59s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | — | — | 53.57s | — | 53.57s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP11] | — | — | 53.56s | — | 53.56s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 26.99s | 1m 7.29s | — | 1m 6.40s | 53.56s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | — | — | 53.56s | — | 53.56s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 26.68s | 1m 7.39s | — | 1m 6.56s | 53.54s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | — | — | 53.45s | — | 53.45s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-no blobs] | — | — | 53.39s | — | 53.39s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 26.98s | 1m 6.99s | — | 1m 6.18s | 53.39s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | — | — | 53.34s | — | 53.34s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 26.24s | 1m 7.08s | — | 1m 6.53s | 53.28s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP5] | — | — | 53.25s | — | 53.25s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP2] | — | — | 53.19s | — | 53.19s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | — | — | 53.15s | — | 53.15s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP12] | — | — | 53.01s | — | 53.01s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH3] | — | — | 52.90s | — | 52.90s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-1MiB] | — | — | 52.83s | — | 52.83s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | — | — | 52.81s | — | 52.81s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP4] | — | — | 52.77s | — | 52.77s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP16] | — | — | 52.75s | — | 52.75s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP9] | — | — | 52.74s | — | 52.74s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP10] | — | — | 52.69s | — | 52.69s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | — | — | 52.67s | — | 52.67s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP14] | — | — | 52.55s | — | 52.55s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP6] | — | — | 52.54s | — | 52.54s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP8] | — | — | 52.52s | — | 52.52s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP1] | — | — | 52.48s | — | 52.48s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH21] | 18.36s | 1m 0.37s | — | 1m 18.33s | 52.35s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 52.24s | — | 52.24s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-100 bytes] | — | — | 52.15s | — | 52.15s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-10KiB] | — | — | 52.08s | — | 52.08s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 51.72s | — | 51.72s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_REVERT] | 21.53s | 1m 17.65s | — | 55.55s | 51.57s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | — | — | 51.06s | — | 51.06s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SAR-] | 29.59s | 1m 19.38s | — | 44.04s | 51.00s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-100 bytes] | — | — | 50.56s | — | 50.56s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH19] | 17.79s | 58.14s | — | 1m 15.07s | 50.33s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH20] | 17.97s | 57.70s | — | 1m 14.26s | 49.98s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH1] | — | — | 49.52s | — | 49.52s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH2] | — | — | 49.23s | — | 49.23s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-SHA2-256] | 2m 7.02s | 4.69s | — | 15.44s | 49.05s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-shift_right_SAR] | 30.78s | 1m 14.38s | — | 40.93s | 48.70s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_RETURN] | 20.08s | 1m 14.21s | — | 51.36s | 48.55s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | — | — | 47.65s | — | 47.65s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | — | — | 47.63s | — | 47.63s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE new value] | 19.82s | 1m 5.74s | — | 55.67s | 47.08s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 46.76s | — | 46.76s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH18] | 17.14s | 54.73s | — | 1m 7.95s | 46.60s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | — | — | 46.24s | — | 46.24s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH17] | 16.68s | 53.57s | — | 1m 7.02s | 45.76s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_MOD-] | 21.17s | 1m 1.49s | — | 54.37s | 45.67s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 19.69s | 52.19s | — | 1m 5.09s | 45.66s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 19.92s | 49.32s | — | 1m 6.72s | 45.32s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 19.89s | 49.36s | — | 1m 5.15s | 44.80s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-shift_right_SHR] | 28.58s | 1m 8.00s | — | 37.60s | 44.73s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | — | — | 44.68s | — | 44.68s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 19.91s | 48.80s | — | 1m 5.24s | 44.65s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 18.13s | 49.82s | — | 1m 5.97s | 44.64s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 18.82s | 50.02s | — | 1m 4.99s | 44.61s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH16] | 16.35s | 52.28s | — | 1m 5.18s | 44.60s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 19.19s | 49.46s | — | 1m 5.05s | 44.57s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 18.48s | 49.81s | — | 1m 4.98s | 44.42s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 19.03s | 49.43s | — | 1m 4.49s | 44.31s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 23.29s | 59.78s | — | 49.86s | 44.31s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 23.94s | 58.82s | — | 50.13s | 44.30s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 19.13s | 48.71s | — | 1m 5.03s | 44.29s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_BALANCE] | — | — | 44.28s | — | 44.27s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 19.06s | 48.97s | — | 1m 4.77s | 44.27s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 23.44s | 59.08s | — | 50.21s | 44.24s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 23.03s | 59.43s | — | 50.05s | 44.17s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 18.31s | 48.79s | — | 1m 4.86s | 43.99s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SHR-] | 26.94s | 1m 6.71s | — | 37.07s | 43.57s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP1] | 22.23s | 53.52s | — | 54.10s | 43.28s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SHL-] | 26.66s | 1m 6.32s | — | 36.51s | 43.16s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH15] | 16.23s | 51.24s | — | 1m 1.85s | 43.11s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-1MiB] | — | — | 43.08s | — | 43.08s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CODESIZE] | 19.42s | 1m 3.05s | — | 44.10s | 42.19s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH14] | 16.08s | 50.20s | — | 58.77s | 41.68s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | — | — | 41.55s | — | 41.55s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | — | — | 41.01s | — | 41.01s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_BLOBBASEFEE] | 19.74s | 1m 3.57s | — | 37.78s | 40.36s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_MUL-] | 25.22s | 1m 10.86s | — | 24.88s | 40.32s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH13] | 15.60s | 48.32s | — | 56.39s | 40.10s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-10KiB] | — | — | 39.22s | — | 39.22s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-1MiB] | 12.59s | 1m 20.69s | — | 23.16s | 38.81s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SLOAD] | — | — | 38.45s | — | 38.45s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_True] | 15.95s | 57.10s | — | 41.70s | 38.25s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_False] | 15.54s | 57.68s | — | 41.37s | 38.20s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.25x max code size] | — | — | 38.16s | — | 38.16s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GASPRICE] | 18.30s | 1m 0.79s | — | 35.08s | 38.05s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | — | — | 38.03s | — | 38.03s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_True] | — | — | 37.99s | — | 37.99s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SIGNEXTEND-] | 22.83s | 59.27s | — | 31.70s | 37.93s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH12] | 14.57s | 47.44s | — | 51.66s | 37.89s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-00] | — | — | 37.74s | — | 37.74s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_False] | — | — | 37.74s | — | 37.74s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 20.57s | 56.38s | — | 35.91s | 37.62s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 20.29s | 56.33s | — | 35.50s | 37.37s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH11] | 14.55s | 45.94s | — | 50.58s | 37.02s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_0] | 16.91s | 54.80s | — | 37.00s | 36.24s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_100000] | 16.58s | 54.67s | — | 36.98s | 36.08s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_1] | 16.59s | 54.28s | — | 36.95s | 35.94s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-0 bytes] | 20.02s | 53.07s | — | 34.49s | 35.86s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | — | — | 35.82s | — | 35.82s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_1000] | 16.81s | 53.88s | — | 36.78s | 35.82s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_1000000] | 16.70s | 54.03s | — | 36.67s | 35.80s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 19.35s | 53.86s | — | 33.68s | 35.63s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-10KiB] | — | — | 35.36s | — | 35.36s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 17.99s | 50.19s | — | 37.52s | 35.23s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 19.11s | 53.68s | — | 32.56s | 35.12s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-100 bytes] | 18.57s | 51.36s | — | 35.37s | 35.10s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 17.99s | 49.62s | — | 37.42s | 35.01s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-512] | — | — | 34.76s | — | 34.76s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE same value] | 15.70s | 44.54s | — | 43.60s | 34.62s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 34.29s | — | 34.28s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 33.97s | — | 33.97s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-1MiB] | 7.22s | 1m 13.75s | — | 20.49s | 33.82s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 17.10s | 48.46s | — | 35.86s | 33.80s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | — | — | 33.77s | — | 33.77s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH10] | 13.70s | 43.15s | — | 44.21s | 33.69s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_BALANCE] | — | — | 33.67s | — | 33.67s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 6.62s | 1m 11.32s | — | 21.89s | 33.28s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_False] | — | — | 33.26s | — | 33.26s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH9] | 13.09s | 42.85s | — | 42.91s | 32.95s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | — | — | 32.62s | — | 32.62s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-1MiB] | — | — | 32.50s | — | 32.50s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_True] | — | — | 32.47s | — | 32.47s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-100 bytes] | 15.61s | 46.23s | — | 35.29s | 32.38s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH8] | 13.10s | 41.72s | — | 41.97s | 32.26s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB] | — | — | 32.20s | — | 32.20s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_NUMBER] | 15.45s | 49.67s | — | 31.18s | 32.10s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b5b] | — | — | 31.90s | — | 31.90s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_TIMESTAMP] | 15.23s | 49.36s | — | 30.93s | 31.84s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | — | — | 31.83s | — | 31.83s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH7] | 12.99s | 41.77s | — | 40.40s | 31.72s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-1MiB] | 8.01s | 1m 14.14s | — | 12.20s | 31.45s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | — | — | 30.42s | — | 30.42s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.50x max code size] | — | — | 30.32s | — | 30.32s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH6] | 13.09s | 39.73s | — | 37.82s | 30.21s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.75x max code size] | — | — | 30.16s | — | 30.16s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 14.25s | 40.23s | — | 35.76s | 30.08s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | — | — | 30.07s | — | 30.07s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CHAINID] | 14.31s | 46.07s | — | 29.81s | 30.06s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_BASEFEE] | 14.30s | 45.59s | — | 29.78s | 29.89s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 15.71s | 44.37s | — | 29.40s | 29.83s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-max code size] | — | — | 29.73s | — | 29.73s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-5b] | 10.07s | 50.24s | — | 28.57s | 29.62s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH0] | 13.80s | 45.76s | — | 29.20s | 29.59s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP2] | 15.27s | 35.72s | — | 36.65s | 29.21s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SLT-] | 15.28s | 41.15s | — | 30.05s | 28.83s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GASLIMIT] | 13.87s | 43.77s | — | 28.43s | 28.69s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GAS] | 13.57s | 43.73s | — | 27.95s | 28.42s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-5KiB] | — | — | 28.20s | — | 28.20s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH5] | 11.85s | 38.23s | — | 34.14s | 28.07s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-one blob but access non-existent index] | 12.19s | 40.61s | — | 30.67s | 27.82s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-0 bytes] | 14.70s | 39.68s | — | 27.73s | 27.37s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-1MiB] | 4.38s | 1m 7.50s | — | 10.20s | 27.36s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | 6.23s | 57.79s | — | 17.90s | 27.31s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b5b] | — | — | 27.02s | — | 27.02s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | ❌ SDK Crash | 30.99s | — | 23.02s | 27.00s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, revert] | — | — | 26.86s | — | 26.86s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 14.09s | 38.14s | — | 28.34s | 26.86s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-no blobs] | 12.13s | 40.55s | — | 27.84s | 26.84s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 14.87s | 37.31s | — | 28.32s | 26.83s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 14.08s | 37.90s | — | 28.45s | 26.81s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 4.65s | 1m 5.77s | — | 9.97s | 26.80s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 14.20s | 37.88s | — | 28.28s | 26.78s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 14.07s | 37.93s | — | 28.27s | 26.75s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 13.97s | 37.82s | — | 28.46s | 26.75s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 14.01s | 37.66s | — | 28.26s | 26.64s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 13.51s | 39.41s | — | 26.89s | 26.60s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 14.12s | 37.28s | — | 28.38s | 26.59s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 13.85s | 37.67s | — | 28.21s | 26.57s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 13.70s | 37.49s | — | 28.42s | 26.54s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 13.93s | 36.84s | — | 28.65s | 26.47s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | — | — | 26.47s | — | 26.47s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SUB-] | 14.74s | 41.15s | — | 23.44s | 26.44s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 13.84s | 36.99s | — | 28.28s | 26.37s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value] | — | — | 25.91s | — | 25.91s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH4] | 11.27s | 35.97s | — | 30.24s | 25.83s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | 5.90s | 54.04s | — | 16.64s | 25.53s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSLOAD] | — | — | 25.13s | — | 25.13s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | — | — | 25.01s | — | 25.01s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ADD-] | 13.45s | 38.06s | — | 23.18s | 24.90s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH3] | 11.01s | 35.15s | — | 28.53s | 24.90s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 13.27s | 34.87s | — | 26.37s | 24.84s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 13.71s | 34.37s | — | 25.88s | 24.65s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-10KiB] | 13.17s | 35.53s | — | 24.59s | 24.43s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | — | — | 24.26s | — | 24.25s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | — | — | 24.22s | — | 24.22s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b] | — | — | 24.12s | — | 24.11s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.25x max code size] | — | — | 23.76s | — | 23.76s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-10KiB] | — | — | 23.43s | — | 23.43s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_BYTE-] | 12.92s | 34.37s | — | 22.94s | 23.41s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 23.36s | — | 23.36s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_False-opcode_BALANCE] | — | — | 23.28s | — | 23.28s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | — | — | 23.25s | — | 23.25s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | — | — | 23.23s | — | 23.23s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.75x max code size] | — | — | 23.23s | — | 23.23s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.50x max code size] | — | — | 23.08s | — | 23.08s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 10.34s | 28.77s | — | 29.94s | 23.01s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP11] | 10.43s | 35.80s | — | 22.63s | 22.95s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | — | — | 22.90s | — | 22.90s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 2.44s | 59.43s | — | 6.84s | 22.90s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 2.43s | 59.33s | — | 6.80s | 22.85s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP8] | 10.54s | 35.51s | — | 22.20s | 22.75s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP3] | 10.86s | 34.90s | — | 22.42s | 22.73s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-max code size] | — | — | 22.72s | — | 22.72s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-calldata_length_10000] | 11.74s | 31.44s | — | 24.80s | 22.66s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP16] | 10.43s | 35.03s | — | 22.11s | 22.52s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP14] | 10.73s | 34.83s | — | 21.94s | 22.50s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP10] | 11.34s | 33.83s | — | 22.19s | 22.45s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP2] | 10.74s | 33.97s | — | 22.41s | 22.38s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP5] | 10.69s | 34.10s | — | 22.26s | 22.35s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP6] | 10.83s | 34.04s | — | 22.08s | 22.32s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-calldata_length_1000] | 11.40s | 30.93s | — | 24.58s | 22.30s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP15] | 10.64s | 34.12s | — | 22.14s | 22.30s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP12] | 10.69s | 33.84s | — | 22.34s | 22.29s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-calldata_length_0] | 11.58s | 30.74s | — | 24.43s | 22.25s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP4] | 10.50s | 33.80s | — | 22.43s | 22.24s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP7] | 10.67s | 33.82s | — | 22.12s | 22.20s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP9] | 10.58s | 34.06s | — | 21.93s | 22.19s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP13] | 10.46s | 34.00s | — | 22.08s | 22.18s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP1] | 10.63s | 33.82s | — | 21.94s | 22.13s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP3] | 11.53s | 26.91s | — | 27.65s | 22.03s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH2] | 10.39s | 33.26s | — | 22.27s | 21.98s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GT-] | 12.07s | 32.19s | — | 21.47s | 21.91s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_LT-] | 11.86s | 32.43s | — | 21.40s | 21.90s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-100 bytes] | 10.38s | 30.46s | — | 23.94s | 21.59s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 3.41s | 52.22s | — | 8.62s | 21.41s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_XOR-] | 12.47s | 30.51s | — | 20.73s | 21.24s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 10.82s | 28.77s | — | 24.09s | 21.23s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_AND-] | 12.01s | 30.73s | — | 20.75s | 21.16s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_OR-] | 11.77s | 30.35s | — | 21.12s | 21.08s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-100 bytes] | 11.44s | 30.02s | — | 21.63s | 21.03s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODEHASH] | 9.01s | 25.35s | — | 28.54s | 20.96s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-605b5b] | 6.13s | 38.45s | — | 18.27s | 20.95s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_False-non_zero_value_True] | 10.75s | 28.51s | — | 23.23s | 20.83s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 11.61s | 30.25s | — | 20.47s | 20.78s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH1] | 9.88s | 31.36s | — | 20.91s | 20.72s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 10.52s | 28.07s | — | 23.37s | 20.65s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b] | — | — | 20.57s | — | 20.57s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-00] | 6.07s | 37.79s | — | 17.58s | 20.48s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_True-non_zero_value_True] | 11.46s | 28.45s | — | 21.35s | 20.42s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_True] | — | — | 20.40s | — | 20.40s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_False-non_zero_value_False] | 10.80s | 28.51s | — | 21.62s | 20.31s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_True-non_zero_value_False] | 10.61s | 28.34s | — | 21.43s | 20.12s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 3.31s | 48.76s | — | 8.30s | 20.12s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 10.56s | 26.85s | — | 22.15s | 19.85s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 4.15s | 41.12s | — | 14.27s | 19.85s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 10.09s | 27.96s | — | 20.90s | 19.65s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 10.31s | 27.42s | — | 21.04s | 19.59s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 10.02s | 27.65s | — | 21.08s | 19.58s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value] | — | — | 19.55s | — | 19.55s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 10.27s | 27.19s | — | 21.18s | 19.55s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 4.54s | 39.60s | — | 14.10s | 19.41s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 10.06s | 27.02s | — | 21.07s | 19.39s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 4.24s | 39.70s | — | 14.21s | 19.38s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 10.04s | 27.02s | — | 21.08s | 19.38s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 10.13s | 27.13s | — | 20.89s | 19.38s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 9.60s | 25.67s | — | 20.05s | 18.44s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value] | 4.12s | 37.01s | — | 13.76s | 18.30s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_NOT] | 9.93s | 26.03s | — | 18.72s | 18.23s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-615b5b5b] | 5.08s | 34.46s | — | 14.75s | 18.10s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP4] | 9.09s | 21.62s | — | 22.60s | 17.77s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0.25x max code size] | 7.71s | 20.70s | — | 24.64s | 17.69s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-max code size] | 7.23s | 21.59s | — | 24.20s | 17.67s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 7.54s | 20.56s | — | 24.61s | 17.57s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODEHASH] | 7.43s | 20.56s | — | 24.51s | 17.50s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0.50x max code size] | 7.54s | 20.42s | — | 24.54s | 17.50s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSLOAD] | 3.63s | 36.04s | — | 12.74s | 17.47s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 7.50s | 20.45s | — | 24.37s | 17.44s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0.75x max code size] | 7.35s | 20.43s | — | 24.46s | 17.41s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 7.43s | 20.34s | — | 24.38s | 17.38s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-10KiB] | 7.82s | 21.25s | — | 22.25s | 17.11s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 8.77s | 24.15s | — | 18.12s | 17.01s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_False] | 7.69s | 22.82s | — | 20.15s | 16.88s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_True] | 7.83s | 22.03s | — | 20.38s | 16.75s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-605b] | 4.16s | 30.91s | — | 12.43s | 15.83s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SLOAD] | 7.41s | 20.66s | — | 18.47s | 15.52s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_True] | 4.06s | 29.80s | — | 12.54s | 15.47s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_False] | — | — | 15.40s | — | 15.39s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODESIZE] | 6.37s | 17.80s | — | 21.28s | 15.15s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP5] | 7.60s | 18.26s | — | 19.11s | 14.99s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODESIZE] | 6.03s | 17.44s | — | 20.69s | 14.72s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-10KiB] | 8.49s | 22.74s | — | 12.79s | 14.68s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-512] | 6.47s | 18.95s | — | 17.77s | 14.39s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-615b5b] | 3.50s | 28.99s | — | 10.05s | 14.18s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | — | — | 14.11s | — | 14.11s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | — | — | 14.08s | — | 14.08s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value] | 2.91s | 28.62s | — | 9.97s | 13.84s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSLOAD] | — | — | 13.44s | — | 13.44s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB] | 6.39s | 17.78s | — | 16.14s | 13.44s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-RIPEMD-160] | 6.06s | 15.49s | — | 17.88s | 13.14s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | — | — | 13.03s | — | 13.03s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP6] | 6.56s | 15.73s | — | 16.61s | 12.97s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, revert] | — | — | 12.90s | — | 12.90s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 6.47s | 17.33s | — | 14.19s | 12.66s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_True-key_mut_True] | 5.87s | 16.36s | — | 15.71s | 12.65s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_True-key_mut_False] | 5.83s | 15.93s | — | 16.18s | 12.65s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | — | — | 12.60s | — | 12.60s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_BALANCE] | 5.36s | 15.38s | — | 16.03s | 12.26s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_BALANCE] | 5.50s | 14.73s | — | 16.49s | 12.24s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_False] | 3.38s | 21.34s | — | 10.23s | 11.65s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_2_scalar] | — | — | 11.58s | — | 11.57s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | — | — | 11.41s | — | 11.41s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-5KiB] | 5.48s | 15.97s | — | 12.76s | 11.40s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP7] | 5.64s | 13.90s | — | 14.63s | 11.39s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0.50x max code size] | 4.98s | 16.06s | — | 10.75s | 10.60s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP8] | 5.08s | 12.76s | — | 13.10s | 10.31s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_True-opcode_BALANCE] | — | — | 9.98s | — | 9.98s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0.25x max code size] | 4.89s | 13.97s | — | 11.08s | 9.98s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-10KiB] | 4.85s | 13.97s | — | 11.11s | 9.97s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 4.81s | 14.19s | — | 10.89s | 9.96s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_100000] | — | — | 9.95s | — | 9.95s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0.75x max code size] | 4.80s | 13.98s | — | 10.95s | 9.91s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_False] | — | — | 9.90s | — | 9.90s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-max code size] | 4.73s | 14.27s | — | 10.70s | 9.90s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_1_2_2_scalar] | 14.11s | 7.57s | — | 7.95s | 9.87s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 4.83s | 13.76s | — | 10.95s | 9.85s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 4.84s | 13.64s | — | 10.99s | 9.82s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_2_scalar] | — | — | 9.82s | — | 9.82s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_2_scalar] | 12.65s | 7.61s | — | 7.98s | 9.41s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP9] | 4.75s | 11.16s | — | 12.10s | 9.34s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_True] | — | — | 9.18s | — | 9.18s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 2.33s | 17.22s | — | 7.74s | 9.09s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSLOAD] | 1.95s | 17.78s | — | 7.21s | 8.98s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 2.10s | 16.86s | — | 7.75s | 8.90s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP10] | 4.13s | 10.29s | — | 11.21s | 8.54s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_True] | — | — | 8.34s | — | 8.34s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP11] | 3.87s | 9.42s | — | 10.37s | 7.88s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 1.67s | 15.58s | — | 6.30s | 7.85s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP12] | 3.44s | 8.98s | — | 9.62s | 7.34s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP13] | 3.30s | 8.29s | — | 8.91s | 6.83s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-zero_byte_True] | 0.96s | 13.49s | — | 5.79s | 6.75s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP14] | 3.22s | 7.73s | — | 8.43s | 6.46s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 1.12s | 12.41s | — | 5.30s | 6.28s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP15] | 2.76s | 7.28s | — | 8.04s | 6.03s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 2.70s | 7.99s | — | 7.23s | 5.97s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP16] | 2.92s | 7.08s | — | 7.80s | 5.93s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 5.70s | — | 5.70s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 3.10s | ❌ SDK Crash | — | 7.94s | 5.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | — | — | 5.16s | — | 5.16s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | — | — | 5.14s | — | 5.14s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_infinities_2_scalar] | 2.33s | 6.71s | — | 4.69s | 4.57s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_False-key_mut_True] | 2.13s | 5.57s | — | 5.52s | 4.41s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_False-key_mut_False] | 2.04s | 5.38s | — | 5.52s | 4.31s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_REVERT] | 0.62s | 9.10s | — | 2.47s | 4.06s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_RETURN] | 0.64s | 8.96s | — | 2.36s | 3.99s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | — | — | 3.81s | — | 3.81s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | — | — | 3.78s | — | 3.78s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value] | — | — | 3.76s | — | 3.76s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value] | — | — | 3.42s | — | 3.42s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 1.14s | 5.03s | — | 3.55s | 3.24s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 1.18s | 5.01s | — | 3.34s | 3.18s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE] | — | — | 3.15s | — | 3.15s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of zero data-opcode_REVERT] | 0.54s | 6.51s | — | 2.31s | 3.12s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of zero data-opcode_RETURN] | 0.56s | 6.49s | — | 2.26s | 3.10s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | — | — | 3.01s | — | 3.01s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | — | — | 3.00s | — | 3.00s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | — | — | 2.95s | — | 2.95s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CREATE] | 0.83s | 4.70s | — | 3.26s | 2.93s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | — | — | 2.90s | — | 2.90s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | — | — | 2.88s | — | 2.88s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | — | — | 2.86s | — | 2.86s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | — | — | 2.85s | — | 2.85s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | — | — | 2.81s | — | 2.81s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value] | 0.70s | 4.54s | — | 3.01s | 2.75s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value] | 0.83s | 4.36s | — | 2.93s | 2.71s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 0.98s | 3.67s | — | 3.39s | 2.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | — | — | 2.60s | — | 2.60s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | — | — | 2.59s | — | 2.59s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 0.92s | 3.66s | — | 3.11s | 2.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | — | — | 2.52s | — | 2.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | — | — | 2.51s | — | 2.51s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_REVERT] | — | — | 2.40s | — | 2.40s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | — | — | 2.39s | — | 2.39s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 0.68s | 3.67s | — | 2.70s | 2.35s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_False] | — | — | 2.34s | — | 2.34s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 0.70s | 3.69s | — | 2.62s | 2.34s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | — | — | 2.33s | — | 2.33s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_RETURN] | — | — | 2.31s | — | 2.31s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-zero_byte_False] | 0.40s | 3.75s | — | 2.73s | 2.29s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 0.70s | 3.30s | — | 2.85s | 2.28s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | — | — | 2.27s | — | 2.27s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 0.69s | 3.26s | — | 2.84s | 2.26s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | — | — | 2.26s | — | 2.26s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | — | — | 2.25s | — | 2.25s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | — | — | 2.25s | — | 2.25s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 0.81s | 3.00s | — | 2.83s | 2.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | — | — | 2.21s | — | 2.21s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE2] | — | — | 2.19s | — | 2.19s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE2] | — | — | 2.18s | — | 2.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 0.71s | 3.02s | — | 2.63s | 2.12s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE2] | 0.54s | 3.11s | — | 2.64s | 2.09s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | — | — | 2.08s | — | 2.08s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE2] | 0.56s | 3.01s | — | 2.65s | 2.07s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE] | — | — | 2.07s | — | 2.07s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 0.71s | 2.81s | — | 2.62s | 2.05s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE] | — | — | 2.05s | — | 2.05s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 0.79s | 2.71s | — | 2.63s | 2.04s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | — | — | 1.98s | — | 1.98s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, revert] | — | — | 1.98s | — | 1.98s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | — | — | 1.98s | — | 1.98s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, revert] | — | — | 1.98s | — | 1.98s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 0.73s | 2.59s | — | 2.58s | 1.97s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE] | 0.55s | 2.85s | — | 2.47s | 1.96s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 0.72s | 2.51s | — | 2.64s | 1.96s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 0.72s | 2.58s | — | 2.49s | 1.93s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 0.73s | 2.54s | — | 2.43s | 1.90s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE] | 0.56s | 2.58s | — | 2.52s | 1.89s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 0.54s | 2.61s | — | 2.50s | 1.88s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 0.71s | 2.37s | — | 2.56s | 1.88s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 0.52s | 2.72s | — | 2.39s | 1.88s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 0.54s | 2.41s | — | 2.68s | 1.87s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 0.52s | 2.69s | — | 2.35s | 1.85s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 0.64s | 2.53s | — | 2.38s | 1.85s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 0.67s | 2.40s | — | 2.39s | 1.82s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 0.57s | 2.48s | — | 2.37s | 1.81s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 0.69s | 2.21s | — | 2.42s | 1.77s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 0.64s | 2.23s | — | 2.31s | 1.72s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | — | — | 1.72s | — | 1.72s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 0.61s | 2.20s | — | 2.28s | 1.70s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | — | — | 1.69s | — | 1.69s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 0.52s | 2.19s | — | 2.36s | 1.69s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CREATE2] | 0.50s | 1.68s | — | 2.32s | 1.50s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE2] | — | — | 1.41s | — | 1.41s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 0.35s | 1.61s | — | 1.90s | 1.29s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 0.32s | 1.82s | — | 1.67s | 1.27s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 0.36s | 1.58s | — | 1.86s | 1.27s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 0.33s | 1.61s | — | 1.85s | 1.26s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 0.32s | 1.56s | — | 1.84s | 1.24s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 0.33s | 1.53s | — | 1.83s | 1.23s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 0.31s | 1.51s | — | 1.85s | 1.23s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 0.33s | 1.59s | — | 1.75s | 1.22s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 0.33s | 1.53s | — | 1.79s | 1.22s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 0.34s | 1.52s | — | 1.77s | 1.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 0.33s | 1.42s | — | 1.87s | 1.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 0.34s | 1.52s | — | 1.76s | 1.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 0.33s | 1.50s | — | 1.79s | 1.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 0.33s | 1.52s | — | 1.75s | 1.20s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 0.31s | 1.54s | — | 1.74s | 1.20s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 0.32s | 1.48s | — | 1.78s | 1.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 0.30s | 1.50s | — | 1.78s | 1.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 0.29s | 1.44s | — | 1.85s | 1.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 0.32s | 1.45s | — | 1.81s | 1.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 0.32s | 1.50s | — | 1.70s | 1.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 0.30s | 1.49s | — | 1.73s | 1.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 0.30s | 1.48s | — | 1.74s | 1.17s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 0.28s | 1.50s | — | 1.74s | 1.17s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 0.30s | 1.47s | — | 1.74s | 1.17s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 0.30s | 1.51s | — | 1.68s | 1.16s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 0.32s | 1.42s | — | 1.73s | 1.16s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 0.29s | 1.47s | — | 1.71s | 1.16s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 0.29s | 1.44s | — | 1.73s | 1.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 0.28s | 1.43s | — | 1.73s | 1.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 0.29s | 1.43s | — | 1.71s | 1.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 0.32s | 1.42s | — | 1.69s | 1.14s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 0.34s | 1.37s | — | 1.72s | 1.14s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE2] | 0.28s | 1.43s | — | 1.70s | 1.13s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 0.28s | 1.45s | — | 1.66s | 1.13s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 0.28s | 1.41s | — | 1.70s | 1.13s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 0.27s | 1.50s | — | 1.63s | 1.13s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 0.30s | 1.46s | — | 1.63s | 1.13s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 0.28s | 1.46s | — | 1.63s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 0.27s | 1.43s | — | 1.66s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 0.26s | 1.45s | — | 1.64s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 0.28s | 1.40s | — | 1.66s | 1.11s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_2_sets] | 0.37s | 1.05s | — | 1.93s | 1.11s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE2] | 0.30s | 1.24s | — | 1.78s | 1.11s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE2] | 0.28s | 1.25s | — | 1.78s | 1.10s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE2] | 0.28s | 1.25s | — | 1.78s | 1.10s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_1_pair] | 0.34s | 0.99s | — | 1.97s | 1.10s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE2] | 0.27s | 1.22s | — | 1.80s | 1.10s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE2] | 0.28s | 1.24s | — | 1.73s | 1.08s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_zero_input] | 0.35s | 0.96s | — | 1.91s | 1.07s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE2] | 0.27s | 1.24s | — | 1.66s | 1.05s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE] | 0.27s | 1.03s | — | 1.86s | 1.05s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE] | 0.30s | 1.05s | — | 1.80s | 1.05s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE2] | 0.28s | 1.14s | — | 1.71s | 1.04s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE] | 0.29s | 1.04s | — | 1.75s | 1.02s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE] | 0.28s | 1.11s | — | 1.66s | 1.02s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE] | 0.27s | 1.05s | — | 1.70s | 1.01s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE] | 0.31s | 1.06s | — | 1.66s | 1.01s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE] | 0.26s | 1.02s | — | 1.65s | 0.98s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE] | 0.27s | 0.92s | — | 1.71s | 0.96s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | — | — | 0.88s | — | 0.88s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_3_pair] | 0.22s | 0.60s | — | 1.71s | 0.84s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_1_pair_empty] | 0.30s | 0.63s | — | 1.56s | 0.83s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000000] | — | — | 0.81s | — | 0.81s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | — | — | 0.78s | — | 0.78s |
| test_worst_compute.py::test_empty_block[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 0.17s | 0.60s | — | 1.46s | 0.75s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | — | — | 0.75s | — | 0.74s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | — | — | 0.73s | — | 0.73s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | — | — | 0.72s | — | 0.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | — | — | 0.71s | — | 0.71s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | — | — | 0.70s | — | 0.70s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | — | — | 0.70s | — | 0.70s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | — | — | 0.70s | — | 0.70s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | — | — | 0.70s | — | 0.70s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | — | — | 0.70s | — | 0.70s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | — | — | 0.70s | — | 0.70s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | — | — | 0.69s | — | 0.69s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | — | — | 0.69s | — | 0.69s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | — | — | 0.68s | — | 0.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | — | — | 0.68s | — | 0.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | — | — | 0.64s | — | 0.64s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | — | — | 0.59s | — | 0.59s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | — | — | 0.58s | — | 0.58s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | — | — | 0.57s | — | 0.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | — | — | 0.57s | — | 0.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | — | — | 0.57s | — | 0.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | — | — | 0.56s | — | 0.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | — | — | 0.56s | — | 0.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | — | — | 0.55s | — | 0.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | — | — | 0.55s | — | 0.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | — | — | 0.55s | — | 0.55s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | — | — | 0.55s | — | 0.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | — | — | 0.54s | — | 0.54s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | — | — | 0.54s | — | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | — | — | 0.54s | — | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | — | — | 0.54s | — | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | — | — | 0.54s | — | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | — | — | 0.54s | — | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | — | — | 0.54s | — | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | — | — | 0.54s | — | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | — | — | 0.54s | — | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | — | — | 0.54s | — | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | — | — | 0.54s | — | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | — | — | 0.54s | — | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | — | — | 0.54s | — | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | — | — | 0.54s | — | 0.54s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_zero_input] | — | — | 0.53s | — | 0.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | — | — | 0.53s | — | 0.53s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE2] | — | — | 0.53s | — | 0.53s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | — | — | 0.53s | — | 0.53s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | — | — | 0.53s | — | 0.53s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair] | — | — | 0.52s | — | 0.52s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_2_sets] | — | — | 0.52s | — | 0.52s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | — | — | 0.52s | — | 0.52s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | — | — | 0.51s | — | 0.51s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | — | — | 0.50s | — | 0.50s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | — | — | 0.49s | — | 0.49s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | — | — | 0.48s | — | 0.48s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | — | — | 0.47s | — | 0.47s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | — | — | 0.47s | — | 0.47s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | — | — | 0.47s | — | 0.47s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE] | — | — | 0.47s | — | 0.47s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE] | — | — | 0.46s | — | 0.46s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair_empty] | — | — | 0.16s | — | 0.16s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_3_pair] | — | — | 0.16s | — | 0.16s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_60M-blockchain_test] | — | — | 0.06s | — | 0.06s |

## Summary

**Total unique test cases:** 1069

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| openvm-v1.4.0 | 532 | 522 | 10 | 0 |
| risc0-v3.0.3 | 532 | 529 | 3 | 0 |
| sp1-v5.2.3 | 537 | 537 | 0 | 0 |
| zisk-v0.12.0 | 532 | 402 | 130 | 0 |

---

