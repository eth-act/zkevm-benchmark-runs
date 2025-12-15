# 1xL40s - 30M-gas-limit

## Gas Limit Configuration - Execution

EEST benchmarks with 30M-gas-limit gas limit (execution results) on **1xL40s** hardware.

## Available EL Clients

- [ethrex](#ethrex)
- [reth](#reth)

---

## ethrex


## Execution Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | risc0-v3.0.4 | sp1-v5.2.3 | zisk-v0.14.0 | Avg |
|-----------|-----------|-----------|-----------|----------|
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_8b_exp_896] | 16m 34.84s | 27m 37.82s | ❌ SDK Crash | 22m 6.33s |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_30M-blockchain_test-point_evaluation] | 31m 32.13s | 10m 36.18s | ❌ SDK Crash | 21m 4.16s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_2_even] | 12m 18.78s | 19m 6.30s | ❌ SDK Crash | 15m 42.54s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_marius_1_even] | 11m 51.27s | 18m 31.53s | ❌ SDK Crash | 15m 11.40s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g1add] | 11m 11.43s | 17m 9.27s | ❌ SDK Crash | 14m 10.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_800_gas_base_heavy] | 11m 3.75s | 17m 10.50s | ❌ SDK Crash | 14m 7.13s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_16b_exp_320] | 10m 35.08s | 17m 22.13s | ❌ SDK Crash | 13m 58.60s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_qube] | 10m 42.81s | 17m 1.35s | ❌ SDK Crash | 13m 52.08s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_867_gas_base_heavy] | 10m 36.43s | 17m 2.92s | ❌ SDK Crash | 13m 49.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_616_gas_base_heavy] | 10m 29.61s | 17m 0.79s | ❌ SDK Crash | 13m 45.20s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_408_gas_base_heavy] | 10m 21.66s | 17m 3.23s | ❌ SDK Crash | 13m 42.44s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_127] | 16m 46.43s | 23m 27.15s | 52.23s | 13m 41.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1045_gas_base_heavy] | 10m 23.30s | 16m 49.77s | ❌ SDK Crash | 13m 36.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_264_exp_2] | 10m 19.79s | 16m 29.69s | ❌ SDK Crash | 13m 24.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_qube] | 10m 15.66s | 16m 19.43s | ❌ SDK Crash | 13m 17.54s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_1_even] | 10m 11.23s | 16m 13.15s | ❌ SDK Crash | 13m 12.19s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_127] | 10m 52.36s | 15m 21.90s | ❌ SDK Crash | 13m 7.13s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_127] | 10m 47.26s | 15m 21.70s | ❌ SDK Crash | 13m 4.48s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_256_exp_2] | 10m 0.60s | 16m 3.68s | ❌ SDK Crash | 13m 2.14s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_298_gas_exp_heavy] | 9m 11.12s | 15m 16.43s | ❌ SDK Crash | 12m 13.77s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_191] | 14m 46.40s | 20m 31.84s | 50.81s | 12m 3.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_8_exp_896] | 9m 1.91s | 14m 52.75s | ❌ SDK Crash | 11m 57.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_800_gas_exp_heavy] | 9m 12.19s | 14m 26.90s | ❌ SDK Crash | 11m 49.54s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_852_gas_exp_heavy] | 9m 3.03s | 14m 28.57s | ❌ SDK Crash | 11m 45.80s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_base_heavy] | 9m 11.35s | 14m 15.21s | ❌ SDK Crash | 11m 43.28s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_600_gas_exp_heavy] | 9m 2.34s | 14m 15.04s | ❌ SDK Crash | 11m 38.69s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_215_gas_exp_heavy] | 8m 36.63s | 14m 18.74s | ❌ SDK Crash | 11m 27.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_8_exp_648] | 8m 36.76s | 14m 11.44s | ❌ SDK Crash | 11m 24.10s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_exp_heavy] | 8m 23.67s | 14m 1.44s | ❌ SDK Crash | 11m 12.55s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_qube] | 8m 43.40s | 13m 32.51s | ❌ SDK Crash | 11m 7.96s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g2add] | 8m 46.77s | 13m 28.80s | ❌ SDK Crash | 11m 7.78s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_400_gas_exp_heavy] | 8m 35.78s | 13m 26.91s | ❌ SDK Crash | 11m 1.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_square] | 8m 29.72s | 13m 27.93s | ❌ SDK Crash | 10m 58.82s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_2] | 8m 23.92s | 13m 26.74s | ❌ SDK Crash | 10m 55.33s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_pairing_check] | 17m 23.07s | 4m 12.58s | ❌ SDK Crash | 10m 47.83s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1024_exp_2] | 7m 57.25s | 12m 57.42s | ❌ SDK Crash | 10m 27.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_square] | 8m 2.08s | 12m 46.96s | ❌ SDK Crash | 10m 24.52s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DIV-0] | ❌ SDK Crash | 10m 11.88s | ❌ SDK Crash | 10m 11.88s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SDIV-1] | 8m 15.60s | 11m 51.07s | ❌ SDK Crash | 10m 3.34s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_127] | 8m 6.92s | 11m 51.95s | ❌ SDK Crash | 9m 59.43s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_24b_exp_168] | 7m 26.33s | 12m 4.47s | ❌ SDK Crash | 9m 45.40s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DELEGATECALL] | 16m 3.95s | 3m 8.31s | ❌ SDK Crash | 9m 36.13s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add_1_2] | 7m 59.28s | 11m 7.21s | ❌ SDK Crash | 9m 33.25s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_255] | ❌ SDK Crash | 18m 1.72s | 54.59s | 9m 28.15s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALLCODE] | 15m 39.47s | 3m 8.55s | ❌ SDK Crash | 9m 24.01s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_30M-blockchain_test-blake2f] | 8m 13.40s | 10m 27.93s | ❌ SDK Crash | 9m 20.67s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODESIZE] | 15m 33.61s | 3m 6.77s | ❌ SDK Crash | 9m 20.19s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_STATICCALL] | 15m 33.06s | 3m 6.69s | ❌ SDK Crash | 9m 19.87s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALL] | 15m 8.67s | 3m 6.10s | ❌ SDK Crash | 9m 7.39s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_191] | 7m 26.00s | 10m 41.34s | ❌ SDK Crash | 9m 3.67s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODEHASH] | 15m 3.36s | 3m 0.50s | ❌ SDK Crash | 9m 1.93s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_191] | 7m 22.33s | 10m 35.90s | ❌ SDK Crash | 8m 59.12s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODECOPY] | 14m 57.86s | 2m 58.55s | ❌ SDK Crash | 8m 58.20s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DIV-1] | 7m 20.32s | 10m 32.67s | ❌ SDK Crash | 8m 56.49s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SDIV-0] | 7m 14.63s | 10m 18.76s | ❌ SDK Crash | 8m 46.70s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_63] | 10m 29.02s | 14m 58.28s | 49.67s | 8m 45.65s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add] | 7m 8.93s | 10m 15.41s | ❌ SDK Crash | 8m 42.16s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_square] | 6m 42.41s | 10m 24.67s | ❌ SDK Crash | 8m 33.54s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_128] | ❌ SDK Crash | 8m 31.12s | ❌ SDK Crash | 8m 31.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_765_gas_exp_heavy] | 6m 24.40s | 10m 17.71s | ❌ SDK Crash | 8m 21.05s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_8] | 6m 17.94s | 10m 6.57s | ❌ SDK Crash | 8m 12.26s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_3] | 6m 16.84s | 10m 5.67s | ❌ SDK Crash | 8m 11.26s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_fp_to_g2] | 12m 51.88s | 3m 17.22s | ❌ SDK Crash | 8m 4.55s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_256] | 6m 2.33s | 9m 41.36s | ❌ SDK Crash | 7m 51.85s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_96] | 5m 54.01s | 9m 23.65s | ❌ SDK Crash | 7m 38.83s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_191] | 6m 4.07s | 8m 57.40s | ❌ SDK Crash | 7m 30.73s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_fp_to_g1] | 12m 5.91s | 2m 29.38s | ❌ SDK Crash | 7m 17.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1360_gas_balanced] | 5m 23.46s | 8m 50.67s | ❌ SDK Crash | 7m 7.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_40] | 5m 24.94s | 8m 47.79s | ❌ SDK Crash | 7m 6.37s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_256] | 5m 28.86s | 8m 39.37s | ❌ SDK Crash | 7m 4.11s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1360n1] | 5m 38.59s | 8m 28.60s | ❌ SDK Crash | 7m 3.60s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_example_1] | 5m 27.43s | 8m 34.05s | ❌ SDK Crash | 7m 0.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_4] | 5m 24.26s | 8m 32.28s | ❌ SDK Crash | 6m 58.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_677_gas_base_heavy] | 5m 26.89s | 8m 27.09s | ❌ SDK Crash | 6m 56.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1349n1] | 5m 19.39s | 8m 34.49s | ❌ SDK Crash | 6m 56.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_cover_windows] | 5m 18.69s | 8m 33.49s | ❌ SDK Crash | 6m 56.09s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_96] | 5m 23.30s | 8m 26.35s | ❌ SDK Crash | 6m 54.82s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_64] | 5m 19.88s | 8m 26.97s | ❌ SDK Crash | 6m 53.42s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_65] | 5m 21.80s | 8m 20.53s | ❌ SDK Crash | 6m 51.17s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_63] | 6m 57.67s | 10m 9.65s | 3m 1.74s | 6m 43.02s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1360n2] | 5m 17.42s | 8m 5.07s | ❌ SDK Crash | 6m 41.24s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_63] | 6m 53.88s | 9m 54.61s | 3m 7.44s | 6m 38.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_40] | 5m 9.52s | 7m 56.73s | ❌ SDK Crash | 6m 33.13s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_qube] | 5m 1.00s | 7m 54.29s | ❌ SDK Crash | 6m 27.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_208_gas_balanced] | 4m 58.42s | 7m 54.16s | ❌ SDK Crash | 6m 26.29s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_balanced] | 4m 56.10s | 7m 51.87s | ❌ SDK Crash | 6m 23.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_36] | 4m 41.05s | 7m 27.83s | ❌ SDK Crash | 6m 4.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_600_gas_balanced] | 4m 37.39s | 7m 24.83s | ❌ SDK Crash | 6m 1.11s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_408_gas_balanced] | 4m 37.91s | 7m 20.32s | ❌ SDK Crash | 5m 59.12s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_30M-blockchain_test-ecrecover] | 4m 20.95s | 12m 49.29s | 45.26s | 5m 58.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1152n1] | 4m 42.78s | 7m 13.49s | ❌ SDK Crash | 5m 58.13s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_767_gas_balanced] | 4m 36.57s | 7m 9.11s | ❌ SDK Crash | 5m 52.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_996_gas_balanced] | 4m 31.13s | 7m 13.97s | ❌ SDK Crash | 5m 52.55s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_32] | 4m 15.48s | 6m 47.61s | ❌ SDK Crash | 5m 31.54s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_63] | 5m 21.59s | 7m 45.18s | 3m 22.44s | 5m 29.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_square] | 4m 12.20s | 6m 38.50s | ❌ SDK Crash | 5m 25.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_64b_exp_512] | 4m 6.86s | 6m 33.41s | ❌ SDK Crash | 5m 20.13s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 3m 58.85s | 6m 9.89s | ❌ SDK Crash | 5m 4.37s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g1msm] | 7m 41.98s | 2m 17.21s | ❌ SDK Crash | 4m 59.60s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n2] | 3m 49.42s | 5m 56.40s | ❌ SDK Crash | 4m 52.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n3] | 3m 44.06s | 5m 50.60s | ❌ SDK Crash | 4m 47.33s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_255] | 4m 4.88s | 6m 8.49s | 3m 53.61s | 4m 42.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_64b_exp_512] | 4m 7.84s | 6m 26.15s | 3m 23.06s | 4m 39.02s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul] | 9m 50.66s | 3m 12.84s | 21.10s | 4m 28.20s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 9m 18.16s | 3m 8.16s | 20.28s | 4m 15.53s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_255] | 3m 52.00s | 5m 42.91s | 3m 10.70s | 4m 15.20s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 3m 38.49s | 5m 59.45s | 3m 2.10s | 4m 13.35s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_255] | 3m 46.12s | 5m 38.64s | 3m 10.84s | 4m 11.87s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n1] | 3m 4.32s | 4m 51.39s | ❌ SDK Crash | 3m 57.86s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g2msm] | 7m 4.23s | 50.11s | ❌ SDK Crash | 3m 57.17s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_128b_exp_1024] | 3m 25.79s | 5m 22.54s | 2m 30.41s | 3m 46.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_128b_exp_1024] | 3m 24.04s | 5m 20.30s | 2m 27.18s | 3m 43.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 3m 20.28s | 5m 21.13s | 2m 20.99s | 3m 40.80s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_256b_exp_1024] | 3m 6.30s | 5m 0.13s | 2m 6.98s | 3m 24.47s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 8m 1.88s | 1m 3.17s | 1m 6.59s | 3m 23.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_256b_exp_1024] | 3m 1.76s | 4m 53.12s | 2m 6.32s | 3m 20.40s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 3m 0.45s | 4m 49.78s | 2m 7.07s | 3m 19.10s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_512b_exp_1024] | 2m 43.86s | 4m 25.37s | 1m 53.46s | 3m 0.90s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_512b_exp_1024] | 2m 43.01s | 4m 22.67s | 1m 53.71s | 2m 59.80s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_qube] | 2m 3.40s | 3m 20.22s | 2m 44.97s | 2m 42.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_square] | 1m 50.66s | 2m 57.30s | 2m 34.34s | 2m 27.43s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXP-] | 2m 17.97s | 3m 38.40s | 1m 16.23s | 2m 24.20s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 3m 50.62s | 2m 41.49s | 31.66s | 2m 21.26s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 2m 7.93s | 3m 17.74s | 1m 37.18s | 2m 20.95s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_4_pair] | 3m 47.06s | 2m 33.84s | 36.45s | 2m 19.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_two_pairings] | 3m 38.98s | 2m 37.30s | 39.99s | 2m 18.76s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_5_pair] | 3m 41.59s | 2m 33.46s | 34.61s | 2m 16.55s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_pair] | 3m 33.53s | 2m 31.77s | 40.82s | 2m 15.37s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PREVRANDAO] | 1m 23.62s | 2m 20.58s | 3m 0.31s | 2m 14.84s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_one_pairing] | 3m 20.06s | 2m 30.56s | 46.52s | 2m 12.38s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_STATICCALL] | 1m 20.74s | 2m 19.73s | 2m 56.31s | 2m 12.26s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_STATICCALL] | 1m 18.79s | 2m 16.90s | 2m 59.04s | 2m 11.58s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 1m 18.47s | 2m 15.91s | 2m 59.59s | 2m 11.32s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_CALL] | 1m 18.99s | 2m 17.85s | 2m 55.08s | 2m 10.64s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_CALL] | 1m 19.66s | 2m 17.28s | 2m 54.63s | 2m 10.52s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_CALLCODE] | 1m 19.71s | 2m 19.84s | 2m 51.58s | 2m 10.38s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_CALLCODE] | 1m 17.10s | 2m 14.96s | 2m 53.20s | 2m 8.42s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty-opcode_RETURN] | 1m 16.36s | 2m 11.96s | 2m 53.24s | 2m 7.19s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty-opcode_REVERT] | 1m 17.31s | 2m 11.38s | 2m 52.44s | 2m 7.04s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 1m 16.95s | 2m 12.97s | 2m 47.46s | 2m 5.79s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_3_even] | 1m 50.41s | 2m 53.97s | 1m 32.02s | 2m 5.47s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_30M-blockchain_test-contract_balance_1] | 1m 19.71s | 2m 7.33s | 2m 43.75s | 2m 3.59s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_30M-blockchain_test-contract_balance_0] | 1m 18.85s | 2m 7.34s | 2m 43.28s | 2m 3.16s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_1024b_exp_1024] | 1m 44.56s | 2m 46.95s | 1m 32.82s | 2m 1.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_1024b_exp_1024] | 1m 44.52s | 2m 45.74s | 1m 25.37s | 1m 58.55s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero-loop] | 1m 5.86s | 2m 4.21s | 2m 6.96s | 1m 45.67s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | ❌ SDK Crash | 3m 9.92s | 20.55s | 1m 45.24s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-one-loop] | 1m 4.35s | 1m 58.90s | 2m 3.31s | 1m 42.19s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SIGNEXTEND-] | 1m 21.08s | 2m 8.04s | 1m 32.52s | 1m 40.54s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 1m 9.97s | 1m 58.35s | 1m 47.43s | 1m 38.58s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add_infinities] | 1m 11.86s | 1m 54.30s | 1m 48.57s | 1m 38.24s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 1m 9.70s | 1m 56.39s | 1m 47.00s | 1m 37.70s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 1m 7.20s | 1m 53.45s | 1m 44.80s | 1m 35.15s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 1m 8.08s | 1m 52.86s | 1m 42.84s | 1m 34.59s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SAR-] | 1m 12.86s | 1m 55.52s | 1m 33.41s | 1m 33.93s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of zero data-opcode_REVERT] | 1m 18.83s | 1m 43.88s | ❌ SDK Crash | 1m 31.36s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty] | 55.17s | 1m 45.38s | 1m 53.00s | 1m 31.18s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of zero data-opcode_RETURN] | 1m 17.77s | 1m 43.73s | ❌ SDK Crash | 1m 30.75s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 59.25s | 1m 38.07s | 1m 40.87s | 1m 26.06s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-0 bytes] | 58.18s | 1m 37.07s | 1m 40.81s | 1m 25.35s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH31] | 40.67s | 1m 20.86s | 2m 13.35s | 1m 24.96s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 57.38s | 1m 37.42s | 1m 38.57s | 1m 24.46s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SAR] | 1m 5.94s | 1m 43.27s | 1m 23.59s | 1m 24.27s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH32] | 39.47s | 1m 17.44s | 2m 10.45s | 1m 22.45s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 56.07s | 1m 35.17s | 1m 35.99s | 1m 22.41s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH30] | 39.78s | 1m 20.00s | 2m 7.31s | 1m 22.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH29] | 37.92s | 1m 14.12s | 2m 1.05s | 1m 17.70s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-100 bytes] | 52.94s | 1m 29.09s | 1m 27.65s | 1m 16.56s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH27] | 38.97s | 1m 13.76s | 1m 53.65s | 1m 15.46s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH28] | 37.08s | 1m 9.57s | 1m 59.04s | 1m 15.23s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHL-] | 1m 0.78s | 1m 29.34s | 1m 12.12s | 1m 14.08s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 51.05s | 1m 17.84s | 1m 28.71s | 1m 12.53s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH26] | 35.02s | 1m 10.34s | 1m 51.41s | 1m 12.26s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 49.95s | 1m 14.98s | 1m 29.34s | 1m 11.42s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EQ-] | 42.65s | 1m 19.48s | 1m 31.22s | 1m 11.12s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH25] | 34.63s | 1m 7.50s | 1m 48.30s | 1m 10.14s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SHR] | 52.53s | 1m 23.70s | 1m 10.13s | 1m 8.79s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 49.78s | 1m 21.44s | 1m 14.83s | 1m 8.68s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH23] | 32.48s | 1m 9.30s | 1m 43.36s | 1m 8.38s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH24] | 32.82s | 1m 5.80s | 1m 42.88s | 1m 7.17s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ORIGIN] | 41.07s | 1m 5.23s | 1m 30.84s | 1m 5.71s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH22] | 33.23s | 1m 6.73s | 1m 37.02s | 1m 5.66s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_diff_acc] | 55.52s | 1m 56.95s | 21.42s | 1m 4.63s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALLER] | 42.06s | 1m 2.99s | 1m 27.67s | 1m 4.24s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH21] | 31.09s | 59.73s | 1m 39.99s | 1m 3.60s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHR-] | 48.97s | 1m 14.77s | 1m 6.37s | 1m 3.37s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_b] | 50.98s | 1m 55.92s | 22.02s | 1m 2.97s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_COINBASE] | 40.70s | 1m 3.70s | 1m 23.94s | 1m 2.78s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADDRESS] | 39.99s | 1m 3.20s | 1m 25.13s | 1m 2.77s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH20] | 31.66s | 56.72s | 1m 32.31s | 1m 0.23s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE new value] | 38.01s | 59.69s | 1m 22.16s | 59.95s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_diff_acc] | 48.91s | 1m 52.43s | 16.82s | 59.39s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH19] | 30.01s | 57.76s | 1m 28.68s | 58.82s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-100 bytes] | 40.90s | 1m 5.78s | 1m 8.40s | 58.36s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_b] | 46.78s | 1m 50.37s | 16.92s | 58.02s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_1_exp_heavy] | 37.47s | 1m 7.54s | 1m 7.33s | 57.45s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH16] | 28.56s | 55.90s | 1m 27.82s | 57.43s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_a] | 46.02s | 1m 50.89s | 14.82s | 57.24s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH18] | 29.22s | 52.98s | 1m 27.21s | 56.47s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-six blobs, access latest] | 29.59s | 52.32s | 1m 25.74s | 55.88s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob and accessed] | 29.91s | 51.53s | 1m 25.95s | 55.80s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH15] | 29.62s | 53.37s | 1m 23.16s | 55.38s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 32.36s | 53.18s | 1m 15.85s | 53.80s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 35.30s | 53.55s | 1m 10.41s | 53.08s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 32.86s | 52.45s | 1m 13.62s | 52.98s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 31.36s | 52.82s | 1m 14.74s | 52.97s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 32.81s | 54.02s | 1m 11.77s | 52.87s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH17] | 28.43s | 50.03s | 1m 19.52s | 52.66s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 32.51s | 52.83s | 1m 11.98s | 52.44s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 32.83s | 52.97s | 1m 10.87s | 52.22s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 31.38s | 53.45s | 1m 11.11s | 51.98s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 31.44s | 52.25s | 1m 11.74s | 51.81s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 30.86s | 53.28s | 1m 10.58s | 51.57s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 31.91s | 52.42s | 1m 10.26s | 51.53s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 31.70s | 52.67s | 1m 9.90s | 51.42s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 31.02s | 52.10s | 1m 10.16s | 51.09s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MUL-] | 40.57s | 1m 20.37s | 32.14s | 51.03s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH14] | 28.83s | 51.14s | 1m 13.07s | 51.01s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_False] | 38.10s | 1m 40.15s | 12.57s | 50.27s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_False] | 37.29s | 1m 39.86s | 12.67s | 49.94s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 32.71s | 58.65s | 57.28s | 49.55s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH13] | 26.57s | 48.12s | 1m 12.52s | 49.07s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_True] | 36.82s | 1m 35.67s | 10.84s | 47.78s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH12] | 26.18s | 46.01s | 1m 11.00s | 47.73s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_True] | 36.16s | 1m 35.78s | 10.58s | 47.51s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH11] | 26.37s | 44.88s | 1m 6.13s | 45.79s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH10] | 24.80s | 43.13s | 1m 8.80s | 45.57s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-5b] | 48.00s | 44.76s | 41.88s | 44.88s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH8] | 24.81s | 43.58s | 1m 5.07s | 44.49s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 51.73s | 42.34s | 36.40s | 43.49s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH7] | 25.71s | 43.99s | 58.97s | 42.89s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH6] | 25.16s | 42.80s | 1m 0.61s | 42.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 24.24s | 51.01s | 51.92s | 42.39s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH9] | 24.25s | 42.17s | 1m 0.30s | 42.24s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 27.54s | 45.04s | 49.64s | 40.74s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 28.98s | 44.46s | 47.12s | 40.19s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 27.49s | 43.65s | 48.24s | 39.79s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 27.35s | 40.71s | 50.38s | 39.48s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 28.05s | 43.60s | 46.65s | 39.43s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH5] | 23.43s | 41.19s | 53.66s | 39.42s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 26.88s | 43.63s | 47.42s | 39.31s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 26.94s | 43.65s | 47.24s | 39.27s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 26.78s | 43.77s | 46.85s | 39.13s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 26.38s | 43.95s | 46.88s | 39.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 26.82s | 44.06s | 46.08s | 38.99s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 26.22s | 43.22s | 46.82s | 38.75s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 28.05s | 40.37s | 47.63s | 38.68s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 26.18s | 43.36s | 46.49s | 38.68s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 26.51s | 43.34s | 45.74s | 38.53s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CHAINID] | 23.97s | 44.16s | 47.37s | 38.50s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_NUMBER] | 23.80s | 45.05s | 46.61s | 38.48s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BLOBBASEFEE] | 23.59s | 45.24s | 46.55s | 38.46s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-max code size] | 30.17s | 37.46s | 47.30s | 38.31s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH3] | 22.99s | 39.99s | 50.90s | 37.96s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GT-] | 24.80s | 45.00s | 43.60s | 37.80s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH4] | 25.36s | 39.96s | 47.77s | 37.70s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BASEFEE] | 24.45s | 44.13s | 44.50s | 37.69s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASPRICE] | 24.04s | 44.87s | 43.69s | 37.53s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 27.95s | 40.44s | 43.88s | 37.42s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_TIMESTAMP] | 24.04s | 45.23s | 42.83s | 37.37s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 21.28s | 43.25s | 46.21s | 36.91s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_LT-] | 24.88s | 44.28s | 41.12s | 36.76s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_0] | 25.52s | 38.85s | 44.73s | 36.37s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 21.98s | 38.92s | 46.87s | 35.92s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 21.17s | 42.69s | 43.12s | 35.66s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MOD-] | 26.68s | 43.90s | 36.13s | 35.57s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1] | 24.57s | 37.80s | 42.72s | 35.03s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP2] | 24.28s | 45.51s | 34.27s | 34.69s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-0 bytes] | 22.89s | 38.39s | 41.61s | 34.30s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASLIMIT] | 20.86s | 37.54s | 44.21s | 34.20s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP13] | 24.40s | 45.44s | 32.15s | 33.99s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP14] | 24.17s | 45.46s | 32.26s | 33.96s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 22.24s | 37.71s | 41.17s | 33.70s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP11] | 24.37s | 44.51s | 32.18s | 33.68s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SGT-] | 21.85s | 41.30s | 37.65s | 33.60s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH2] | 20.95s | 38.27s | 41.45s | 33.55s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH0] | 21.01s | 36.37s | 43.19s | 33.52s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 22.43s | 38.58s | 39.39s | 33.47s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000] | 22.46s | 37.54s | 40.19s | 33.39s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 21.30s | 33.44s | 45.24s | 33.33s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP3] | 24.78s | 44.74s | 30.30s | 33.27s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 21.23s | 37.12s | 41.45s | 33.27s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 21.33s | 32.61s | 45.69s | 33.21s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP15] | 24.50s | 44.60s | 30.36s | 33.15s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP4] | 24.88s | 45.21s | 29.30s | 33.13s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 22.91s | 37.63s | 38.81s | 33.12s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP7] | 24.36s | 44.33s | 30.60s | 33.09s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP16] | 24.67s | 44.72s | 29.66s | 33.02s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP5] | 24.15s | 44.62s | 30.15s | 32.97s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP8] | 24.99s | 44.24s | 29.66s | 32.96s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP10] | 24.58s | 44.52s | 29.65s | 32.92s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP6] | 24.82s | 44.56s | 29.30s | 32.89s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP1] | 24.63s | 44.04s | 29.78s | 32.81s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SLT-] | 21.46s | 41.85s | 34.84s | 32.72s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP9] | 24.25s | 44.58s | 29.30s | 32.71s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP12] | 24.07s | 44.31s | 29.37s | 32.58s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 21.67s | 35.84s | 39.45s | 32.32s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADD-] | 24.01s | 38.00s | 33.74s | 31.91s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH1] | 20.93s | 37.22s | 36.82s | 31.66s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BYTE-] | 22.04s | 36.96s | 34.59s | 31.20s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SUB-] | 23.71s | 38.30s | 31.13s | 31.05s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE same value] | 18.43s | 31.84s | 42.37s | 30.88s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 21.13s | 32.84s | 37.95s | 30.64s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 20.94s | 35.49s | 35.33s | 30.58s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 21.27s | 33.66s | 36.27s | 30.40s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 21.22s | 32.87s | 36.64s | 30.24s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 20.96s | 34.33s | 35.30s | 30.20s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 20.82s | 32.80s | 36.55s | 30.06s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 20.85s | 32.74s | 36.09s | 29.89s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 21.37s | 32.28s | 35.85s | 29.83s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 20.99s | 33.20s | 35.27s | 29.82s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 21.14s | 32.10s | 36.12s | 29.79s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 20.80s | 32.82s | 35.51s | 29.71s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value] | 33.20s | 24.82s | 31.01s | 29.68s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 20.52s | 31.81s | 36.46s | 29.60s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 20.56s | 31.84s | 35.32s | 29.24s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_False] | 17.37s | 28.50s | 41.38s | 29.08s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP13] | 19.49s | 31.50s | 35.38s | 28.79s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 18.57s | 28.20s | 38.61s | 28.46s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-100 bytes] | 18.57s | 31.59s | 35.16s | 28.44s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP11] | 18.68s | 31.79s | 34.80s | 28.42s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-no blobs] | 19.16s | 32.61s | 33.16s | 28.31s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP9] | 18.39s | 32.25s | 33.91s | 28.18s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob but access non-existent index] | 18.65s | 33.13s | 32.63s | 28.14s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP10] | 19.67s | 31.67s | 32.84s | 28.06s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP14] | 18.49s | 31.07s | 34.45s | 28.00s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 18.97s | 33.47s | 31.56s | 28.00s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-512] | 16.73s | 28.58s | 38.61s | 27.97s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 30.55s | 27.54s | 25.81s | 27.97s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSLOAD] | 32.73s | 21.72s | 29.18s | 27.88s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP16] | 18.12s | 31.68s | 33.81s | 27.87s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP4] | 18.64s | 31.73s | 33.02s | 27.80s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP8] | 18.58s | 30.94s | 33.73s | 27.75s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP2] | 18.31s | 31.01s | 33.83s | 27.71s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP6] | 18.37s | 31.36s | 33.04s | 27.59s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP1] | 17.17s | 30.23s | 35.28s | 27.56s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 17.12s | 28.12s | 36.89s | 27.38s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP15] | 18.44s | 31.07s | 32.43s | 27.31s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP12] | 18.20s | 31.03s | 32.35s | 27.19s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP7] | 18.15s | 31.10s | 32.30s | 27.18s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 17.04s | 27.36s | 37.10s | 27.17s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP5] | 18.33s | 31.10s | 31.93s | 27.12s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP3] | 18.25s | 30.87s | 31.79s | 26.97s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 16.69s | 27.06s | 35.93s | 26.56s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_BALANCE] | 17.41s | 25.60s | 36.51s | 26.50s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_AND-] | 18.01s | 32.21s | 28.90s | 26.37s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_XOR-] | 17.84s | 31.72s | 29.41s | 26.32s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_True] | 17.01s | 28.38s | 33.39s | 26.26s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 31.21s | 20.93s | 26.42s | 26.19s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 17.68s | 26.07s | 34.78s | 26.18s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_OR-] | 17.74s | 31.84s | 28.24s | 25.94s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_BALANCE] | 17.40s | 26.30s | 34.06s | 25.92s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 31.28s | 21.24s | 24.23s | 25.58s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_False] | 16.92s | 28.41s | 31.20s | 25.51s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-1MiB] | 26.90s | 26.56s | 23.01s | 25.49s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_True] | 17.21s | 28.46s | 30.78s | 25.48s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 19.09s | 25.91s | 31.04s | 25.35s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b5b] | 25.74s | 23.24s | 25.25s | 24.74s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 8.93s | 43.20s | 21.84s | 24.66s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-100 bytes] | 16.48s | 27.50s | 29.79s | 24.59s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 16.10s | 25.73s | 31.75s | 24.52s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_10000] | 15.60s | 25.76s | 31.97s | 24.45s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 15.96s | 26.44s | 30.63s | 24.34s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 15.80s | 25.71s | 30.84s | 24.12s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_1000] | 15.62s | 26.11s | 30.60s | 24.11s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 16.01s | 26.21s | 29.61s | 23.94s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 15.89s | 25.77s | 29.89s | 23.85s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_0] | 15.58s | 25.79s | 30.03s | 23.80s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-10KiB] | 15.01s | 28.37s | 27.42s | 23.60s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-1MiB] | 27.79s | 19.78s | 20.85s | 22.80s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-1MiB] | 27.47s | 25.83s | 13.70s | 22.33s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 15.16s | 25.79s | 25.87s | 22.27s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SMOD-] | 14.89s | 27.05s | 24.79s | 22.25s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 15.48s | 24.86s | 25.64s | 21.99s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB] | 14.64s | 22.29s | 28.61s | 21.84s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 27.98s | 14.97s | 20.24s | 21.06s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 27.80s | 15.95s | 18.87s | 20.87s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value] | 24.27s | 16.34s | 21.82s | 20.81s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-5KiB] | 9.62s | 23.42s | 29.05s | 20.69s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SLOAD] | 12.13s | 19.84s | 29.02s | 20.33s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 12.15s | 20.19s | 28.23s | 20.19s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 10.38s | 21.48s | 27.98s | 19.95s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 10.31s | 17.56s | 29.93s | 19.27s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 6.90s | 22.21s | 28.14s | 19.09s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_True] | 12.94s | 18.41s | 25.85s | 19.06s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 7.21s | 22.19s | 26.63s | 18.67s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_True] | 13.33s | 18.93s | 23.34s | 18.53s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-max code size] | 6.95s | 22.32s | 26.11s | 18.46s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_False] | 13.07s | 19.04s | 23.11s | 18.41s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_False] | 13.64s | 18.38s | 22.91s | 18.31s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_False] | 12.97s | 18.18s | 23.76s | 18.30s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_True] | 13.22s | 18.57s | 22.59s | 18.13s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-1MiB] | 28.11s | 14.48s | 11.56s | 18.05s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 6.87s | 22.21s | 25.05s | 18.04s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b5b] | 18.49s | 16.72s | 18.85s | 18.02s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 7.07s | 11.70s | 35.23s | 18.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_zkevm_worst_case] | 10.81s | 20.26s | 22.04s | 17.70s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_True] | 18.68s | 14.72s | 18.69s | 17.37s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-10KiB] | 10.57s | 17.22s | 23.42s | 17.07s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_100000] | 22.41s | 12.92s | 15.37s | 16.90s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 11.20s | 17.77s | 18.68s | 15.88s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSLOAD] | 14.07s | 13.44s | 19.93s | 15.81s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_example_2] | 8.91s | 17.00s | 19.19s | 15.03s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-10KiB] | 9.66s | 19.07s | 15.54s | 14.76s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 7.08s | 11.67s | 24.97s | 14.57s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 10.04s | 16.09s | 17.40s | 14.51s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 8.08s | 10.95s | 23.40s | 14.15s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_False] | 11.68s | 8.50s | 21.89s | 14.02s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 27.25s | 6.53s | 7.94s | 13.90s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 27.52s | 6.44s | 7.32s | 13.76s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 9.07s | 14.06s | 17.62s | 13.58s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 15.06s | 10.80s | 13.65s | 13.17s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-00] | 8.75s | 14.49s | 16.17s | 13.14s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 14.35s | 10.58s | 14.28s | 13.07s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_2_scalar] | 20.01s | 4.99s | 10.13s | 11.71s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b] | 8.00s | 9.87s | 15.45s | 11.10s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_True] | 14.15s | 8.02s | 9.89s | 10.69s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-10KiB] | 7.23s | 11.70s | 12.88s | 10.60s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 17.93s | 4.98s | 8.64s | 10.51s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 6.93s | 11.60s | 12.98s | 10.50s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b] | 8.03s | 7.86s | 11.59s | 9.16s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 9.65s | 6.85s | 10.49s | 9.00s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 5.26s | 8.05s | 11.64s | 8.31s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 9.42s | 5.82s | 8.97s | 8.07s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 4.59s | 6.35s | 11.62s | 7.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 4.58s | 6.33s | 9.72s | 6.88s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_True] | 4.38s | 6.09s | 9.10s | 6.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 2.08s | 2.06s | 14.51s | 6.21s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_False] | 4.03s | 5.78s | 8.38s | 6.06s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 3.81s | 5.82s | 8.15s | 5.93s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 7.66s | 3.46s | 5.02s | 5.38s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 7.72s | 3.46s | 4.90s | 5.36s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 3.21s | 3.83s | 7.65s | 4.90s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value] | ❌ SDK Crash | 2.81s | 6.63s | 4.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 3.07s | 3.84s | 7.23s | 4.71s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_REVERT] | 6.55s | 2.49s | 4.95s | 4.66s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_RETURN] | 6.27s | 2.42s | 4.85s | 4.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 2.67s | 2.87s | 7.99s | 4.51s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value] | 4.27s | 2.85s | 6.14s | 4.42s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE] | 3.86s | 2.74s | 5.76s | 4.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 2.56s | 2.82s | 6.94s | 4.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 2.61s | 2.84s | 6.81s | 4.09s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 2.45s | 2.74s | 6.96s | 4.05s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_False] | 4.50s | 2.11s | 5.50s | 4.04s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000000] | 4.99s | 1.61s | 5.19s | 3.93s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | ❌ SDK Crash | 2.05s | 5.76s | 3.90s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 3.34s | 2.51s | 5.73s | 3.85s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 2.19s | 2.31s | 6.96s | 3.82s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 3.17s | 2.38s | 5.84s | 3.79s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 2.29s | 2.29s | 6.75s | 3.78s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE2] | 3.43s | 1.81s | 5.47s | 3.57s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE2] | 3.32s | 1.69s | 5.35s | 3.46s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 3.00s | 1.97s | 5.34s | 3.44s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_2_scalar] | 2.97s | 2.07s | 5.27s | 3.44s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE] | 3.10s | 1.78s | 5.23s | 3.37s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 2.09s | 2.05s | 5.69s | 3.27s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 2.06s | 2.03s | 5.58s | 3.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 2.02s | 2.10s | 5.47s | 3.20s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE] | 3.02s | 1.64s | 4.90s | 3.19s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 1.78s | 1.57s | 6.21s | 3.18s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 2.87s | 1.80s | 4.87s | 3.18s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 1.63s | 1.30s | 6.32s | 3.08s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 1.81s | 1.43s | 5.94s | 3.06s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 2.28s | 1.69s | 5.11s | 3.02s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 2.38s | 1.65s | 4.99s | 3.01s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 2.28s | 1.64s | 5.11s | 3.00s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 2.31s | 1.72s | 4.90s | 2.97s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE2] | 2.32s | 1.12s | 5.40s | 2.94s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 1.86s | 1.57s | 5.26s | 2.90s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 1.78s | 1.44s | 5.00s | 2.74s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 1.74s | 1.29s | 4.91s | 2.65s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 1.42s | 0.38s | 4.82s | 2.20s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 1.36s | 0.47s | 4.71s | 2.18s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 1.99s | 0.43s | 4.11s | 2.18s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 1.44s | 0.41s | 4.62s | 2.15s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 1.56s | 0.37s | 4.40s | 2.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 1.35s | 0.46s | 4.49s | 2.10s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 2.02s | 0.43s | 3.85s | 2.10s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 2.12s | 0.45s | 3.55s | 2.04s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE2] | 2.00s | 0.44s | 3.60s | 2.01s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 1.49s | 0.38s | 4.13s | 2.00s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 1.38s | 0.46s | 4.15s | 2.00s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 1.37s | 0.46s | 4.15s | 1.99s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 2.06s | 0.45s | 3.45s | 1.98s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 1.35s | 0.40s | 4.09s | 1.95s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 2.10s | 0.42s | 3.31s | 1.95s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 1.40s | 0.37s | 4.06s | 1.94s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 1.96s | 0.42s | 3.42s | 1.93s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 1.51s | 0.37s | 3.89s | 1.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 1.47s | 0.49s | 3.74s | 1.90s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 1.54s | 0.37s | 3.75s | 1.89s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 1.34s | 0.38s | 3.89s | 1.87s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 1.49s | 0.49s | 3.61s | 1.86s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_zero_input] | 1.10s | 0.40s | 4.08s | 1.85s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 1.93s | 0.41s | 3.21s | 1.85s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 1.38s | 0.48s | 3.66s | 1.84s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 1.37s | 0.47s | 3.68s | 1.84s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 1.35s | 0.46s | 3.68s | 1.83s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 1.37s | 0.49s | 3.61s | 1.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 1.37s | 0.38s | 3.69s | 1.81s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 1.41s | 0.39s | 3.61s | 1.80s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 1.44s | 0.38s | 3.58s | 1.80s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 1.41s | 0.46s | 3.51s | 1.80s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 1.49s | 0.36s | 3.50s | 1.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 1.37s | 0.38s | 3.59s | 1.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 1.43s | 0.38s | 3.53s | 1.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 1.41s | 0.46s | 3.43s | 1.77s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 1.44s | 0.41s | 3.42s | 1.76s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 1.36s | 0.41s | 3.49s | 1.75s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 1.37s | 0.47s | 3.40s | 1.75s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 1.56s | 0.39s | 3.29s | 1.75s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 1.40s | 0.39s | 3.45s | 1.75s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 1.40s | 0.38s | 3.46s | 1.74s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 1.51s | 0.36s | 3.35s | 1.74s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 1.53s | 0.50s | 3.20s | 1.74s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 1.39s | 0.38s | 3.42s | 1.73s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 1.38s | 0.38s | 3.40s | 1.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 1.34s | 0.38s | 3.42s | 1.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 1.34s | 0.41s | 3.39s | 1.71s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 1.34s | 0.40s | 3.38s | 1.71s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE] | 1.52s | 0.36s | 3.21s | 1.70s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 1.37s | 0.44s | 3.24s | 1.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 1.42s | 0.40s | 3.23s | 1.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 1.43s | 0.41s | 3.20s | 1.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 1.36s | 0.38s | 3.29s | 1.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 1.36s | 0.38s | 3.26s | 1.67s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 1.35s | 0.40s | 3.21s | 1.65s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair_empty] | 0.95s | 0.19s | 3.75s | 1.63s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair] | 1.10s | 0.40s | 3.38s | 1.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 1.36s | 0.39s | 3.11s | 1.62s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_3_pair] | 0.96s | 0.20s | 3.68s | 1.61s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_sets] | 0.98s | 0.19s | 3.36s | 1.51s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 0.87s | 0.10s | 3.20s | 1.39s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| risc0-v3.0.4 | 533 | 527 | 6 | 0 |
| sp1-v5.2.3 | 533 | 533 | 0 | 0 |
| zisk-v0.14.0 | 533 | 436 | 97 | 0 |

---

## reth


## Execution Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | openvm-v1.4.1 | risc0-v3.0.4 | sp1-v5.2.3 | zisk-v0.14.0 | Avg |
|-----------|-----------|-----------|-----------|-----------|----------|
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_qube] | 9m 6.49s | 39m 35.83s | 1h 5m 44.55s | ❌ SDK Crash | 38m 8.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_qube] | 8m 27.13s | 38m 34.77s | 1h 3m 3.24s | ❌ SDK Crash | 36m 41.71s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_square] | 7m 59.04s | 36m 20.51s | 59m 4.41s | ❌ SDK Crash | 34m 27.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1024_exp_2] | 8m 34.35s | 35m 51.63s | 58m 54.40s | ❌ SDK Crash | 34m 26.79s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_square] | 7m 47.48s | 35m 39.62s | 56m 42.34s | ❌ SDK Crash | 33m 23.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1045_gas_base_heavy] | 7m 44.86s | 33m 59.65s | 56m 47.13s | ❌ SDK Crash | 32m 50.55s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_867_gas_base_heavy] | 8m 3.45s | 34m 38.86s | 55m 24.47s | ❌ SDK Crash | 32m 42.26s |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_30M-blockchain_test-point_evaluation] | 9m 33.57s | 32m 58.88s | 55m 20.26s | ❌ SDK Crash | 32m 37.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_800_gas_base_heavy] | 7m 37.36s | 33m 22.10s | 56m 22.58s | ❌ SDK Crash | 32m 27.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_qube] | 7m 21.70s | 34m 5.65s | 53m 49.62s | ❌ SDK Crash | 31m 45.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_616_gas_base_heavy] | 7m 25.23s | 32m 40.88s | 54m 50.15s | ❌ SDK Crash | 31m 38.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_408_gas_base_heavy] | 6m 59.46s | 31m 1.75s | 51m 0.74s | ❌ SDK Crash | 29m 40.65s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_264_exp_2] | 6m 50.52s | 30m 37.20s | 50m 18.61s | ❌ SDK Crash | 29m 15.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_square] | 6m 44.05s | 30m 44.80s | 49m 14.64s | ❌ SDK Crash | 28m 54.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_256_exp_2] | 6m 40.39s | 30m 8.73s | 49m 41.90s | ❌ SDK Crash | 28m 50.34s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_base_heavy] | 5m 39.71s | 24m 44.40s | 40m 27.24s | ❌ SDK Crash | 23m 37.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_8b_exp_896] | 5m 32.97s | 22m 10.70s | 34m 46.20s | ❌ SDK Crash | 20m 49.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_8_exp_896] | 5m 27.22s | 21m 45.94s | 33m 35.47s | ❌ SDK Crash | 20m 16.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_298_gas_exp_heavy] | 5m 3.70s | 21m 36.47s | 33m 58.59s | ❌ SDK Crash | 20m 12.92s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_1_exp_heavy] | 4m 50.87s | 20m 48.51s | 32m 51.00s | ❌ SDK Crash | 19m 30.13s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_8_exp_648] | 4m 38.57s | 19m 43.24s | 31m 6.78s | ❌ SDK Crash | 18m 29.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_215_gas_exp_heavy] | 4m 43.07s | 19m 35.50s | 30m 48.62s | ❌ SDK Crash | 18m 22.39s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_exp_heavy] | 4m 51.74s | 19m 12.32s | 30m 4.18s | ❌ SDK Crash | 18m 2.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_3_even] | 3m 51.96s | 15m 9.50s | 27m 25.27s | ❌ SDK Crash | 15m 28.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_qube] | 3m 3.92s | 13m 50.09s | 21m 55.99s | ❌ SDK Crash | 12m 56.67s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_800_gas_exp_heavy] | 3m 18.99s | 13m 11.71s | 20m 42.07s | ❌ SDK Crash | 12m 24.26s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_852_gas_exp_heavy] | 3m 18.87s | 13m 11.75s | 20m 26.62s | ❌ SDK Crash | 12m 19.08s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_pairing_check] | 3m 20.53s | 13m 11.77s | 19m 58.51s | ❌ SDK Crash | 12m 10.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_square] | 2m 52.71s | 13m 11.47s | 20m 19.33s | ❌ SDK Crash | 12m 7.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_600_gas_exp_heavy] | 3m 13.34s | 12m 41.03s | 20m 4.57s | ❌ SDK Crash | 11m 59.65s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_fp_to_g1] | 4m 28.86s | 9m 6.47s | 21m 31.30s | ❌ SDK Crash | 11m 42.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_16b_exp_320] | 3m 7.79s | 12m 33.92s | 19m 17.17s | ❌ SDK Crash | 11m 39.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_400_gas_exp_heavy] | 3m 12.71s | 11m 51.31s | 18m 52.22s | ❌ SDK Crash | 11m 18.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_2] | 3m 0.80s | 11m 58.44s | 18m 56.36s | ❌ SDK Crash | 11m 18.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_2_even] | 2m 52.74s | 11m 29.17s | 18m 10.03s | ❌ SDK Crash | 10m 50.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 2m 51.51s | 11m 38.57s | 17m 51.02s | ❌ SDK Crash | 10m 47.04s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_marius_1_even] | 2m 31.72s | 10m 17.18s | 15m 55.89s | ❌ SDK Crash | 9m 34.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_765_gas_exp_heavy] | 2m 35.98s | 10m 2.43s | 15m 39.96s | ❌ SDK Crash | 9m 26.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_24b_exp_168] | 2m 23.52s | 9m 46.98s | 15m 24.27s | ❌ SDK Crash | 9m 11.59s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_3] | 2m 27.10s | 9m 35.93s | 14m 48.65s | ❌ SDK Crash | 8m 57.23s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_256] | 2m 16.92s | 9m 20.89s | 14m 45.55s | ❌ SDK Crash | 8m 47.78s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_fp_to_g2] | 3m 5.26s | 7m 47.52s | 15m 18.92s | ❌ SDK Crash | 8m 43.90s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_256] | 2m 10.23s | 9m 12.06s | 14m 27.68s | ❌ SDK Crash | 8m 36.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1360_gas_balanced] | 2m 8.68s | 8m 53.47s | 14m 35.64s | ❌ SDK Crash | 8m 32.60s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_example_1] | 2m 8.61s | 9m 0.81s | 14m 13.47s | ❌ SDK Crash | 8m 27.63s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 2m 12.16s | 8m 52.09s | 14m 18.15s | ❌ SDK Crash | 8m 27.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_zkevm_worst_case] | 2m 7.56s | 8m 54.16s | 13m 47.04s | ❌ SDK Crash | 8m 16.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_96] | 2m 3.19s | 8m 39.94s | 13m 55.86s | ❌ SDK Crash | 8m 13.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_example_2] | 1m 59.53s | 8m 25.90s | 13m 55.14s | ❌ SDK Crash | 8m 6.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_128] | 2m 2.65s | 8m 29.36s | 13m 38.83s | ❌ SDK Crash | 8m 3.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_677_gas_base_heavy] | 2m 1.22s | 8m 29.95s | 13m 33.78s | ❌ SDK Crash | 8m 1.65s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_8] | 2m 1.61s | 8m 18.70s | 13m 29.11s | ❌ SDK Crash | 7m 56.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_96] | 1m 59.18s | 8m 18.06s | 13m 10.18s | ❌ SDK Crash | 7m 49.14s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_65] | 1m 56.13s | 8m 18.06s | 13m 6.41s | ❌ SDK Crash | 7m 46.87s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_4] | 1m 57.70s | 8m 12.32s | 13m 9.05s | ❌ SDK Crash | 7m 46.36s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g2add] | 2m 18.66s | 7m 33.98s | 12m 41.36s | ❌ SDK Crash | 7m 31.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 1m 56.63s | 7m 43.15s | 12m 43.02s | ❌ SDK Crash | 7m 27.60s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_30M-blockchain_test-ecrecover] | 12m 17.63s | 4m 10.44s | 12m 39.97s | 39.77s | 7m 26.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1360n1] | 1m 53.96s | 7m 48.24s | 12m 28.25s | ❌ SDK Crash | 7m 23.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_600_gas_balanced] | 1m 54.94s | 7m 45.25s | 12m 25.07s | ❌ SDK Crash | 7m 21.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_64] | 1m 57.85s | 7m 38.65s | 12m 22.22s | ❌ SDK Crash | 7m 19.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_64b_exp_512] | 1m 46.77s | 7m 38.48s | 12m 13.61s | ❌ SDK Crash | 7m 12.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_408_gas_balanced] | 1m 45.68s | 7m 29.35s | 12m 14.74s | ❌ SDK Crash | 7m 9.92s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_64b_exp_512] | 1m 43.28s | 7m 35.08s | 11m 59.78s | ❌ SDK Crash | 7m 6.05s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_996_gas_balanced] | 1m 42.20s | 7m 28.96s | 11m 59.26s | ❌ SDK Crash | 7m 3.47s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_30M-blockchain_test-blake2f] | 2m 12.64s | 8m 21.12s | 10m 33.04s | ❌ SDK Crash | 7m 2.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1360n2] | 1m 43.95s | 7m 13.18s | 12m 9.05s | ❌ SDK Crash | 7m 2.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_767_gas_balanced] | 1m 40.83s | 7m 23.80s | 11m 58.92s | ❌ SDK Crash | 7m 1.18s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_40] | 1m 46.87s | 7m 22.83s | 11m 48.33s | ❌ SDK Crash | 6m 59.34s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_balanced] | 1m 43.60s | 7m 13.72s | 11m 41.10s | ❌ SDK Crash | 6m 52.81s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g1add] | 2m 17.80s | 6m 4.42s | 12m 4.36s | ❌ SDK Crash | 6m 48.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1349n1] | 1m 46.08s | 7m 1.68s | 11m 2.93s | ❌ SDK Crash | 6m 36.90s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_40] | 1m 40.60s | 6m 54.54s | 11m 12.24s | ❌ SDK Crash | 6m 35.80s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_208_gas_balanced] | 1m 40.43s | 6m 51.27s | 11m 4.16s | ❌ SDK Crash | 6m 31.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_128b_exp_1024] | 1m 32.54s | 6m 55.23s | 11m 7.91s | ❌ SDK Crash | 6m 31.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_128b_exp_1024] | 1m 32.11s | 6m 52.57s | 11m 9.52s | ❌ SDK Crash | 6m 31.40s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g1msm] | 2m 11.50s | ❌ SDK Crash | 10m 40.32s | ❌ SDK Crash | 6m 25.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_36] | 1m 36.81s | 6m 42.29s | 10m 53.19s | ❌ SDK Crash | 6m 24.10s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_1_even] | 1m 35.27s | 6m 47.69s | 10m 35.86s | ❌ SDK Crash | 6m 19.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_256b_exp_1024] | 1m 27.57s | 6m 34.73s | 10m 49.18s | ❌ SDK Crash | 6m 17.16s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_256b_exp_1024] | 1m 31.49s | 6m 34.64s | 10m 35.08s | ❌ SDK Crash | 6m 13.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_cover_windows] | 1m 39.13s | 6m 30.80s | 10m 14.48s | ❌ SDK Crash | 6m 8.14s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_512b_exp_1024] | 1m 29.25s | 6m 21.99s | 10m 20.51s | ❌ SDK Crash | 6m 3.92s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_512b_exp_1024] | 1m 25.56s | 6m 15.43s | 10m 21.56s | ❌ SDK Crash | 6m 0.85s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 1m 23.22s | 6m 13.35s | 9m 53.64s | ❌ SDK Crash | 5m 50.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 1m 21.81s | 6m 5.96s | 9m 33.36s | ❌ SDK Crash | 5m 40.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_1024b_exp_1024] | 1m 23.09s | 5m 57.32s | 9m 39.21s | ❌ SDK Crash | 5m 39.87s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_1024b_exp_1024] | 1m 19.29s | 5m 55.18s | 9m 37.95s | ❌ SDK Crash | 5m 37.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_32] | 1m 24.62s | 5m 47.81s | 9m 22.57s | ❌ SDK Crash | 5m 31.67s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 1m 18.33s | 6m 6.69s | 9m 5.21s | ❌ SDK Crash | 5m 30.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 1m 15.90s | 5m 41.27s | 8m 55.48s | ❌ SDK Crash | 5m 17.55s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 1m 15.72s | 5m 44.97s | 8m 46.90s | ❌ SDK Crash | 5m 15.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n3] | 1m 13.41s | 5m 7.30s | 7m 58.10s | ❌ SDK Crash | 4m 46.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n2] | 1m 17.10s | 4m 57.51s | 7m 59.80s | ❌ SDK Crash | 4m 44.81s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1152n1] | 1m 12.94s | 4m 56.48s | 7m 38.80s | ❌ SDK Crash | 4m 36.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_qube] | 1m 1.92s | 4m 28.98s | 7m 1.51s | ❌ SDK Crash | 4m 10.80s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_square] | 58.21s | 4m 11.13s | 6m 39.82s | ❌ SDK Crash | 3m 56.39s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g2msm] | 1m 14.71s | ❌ SDK Crash | 7m 3.41s | 2m 53.95s | 3m 44.02s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n1] | 54.60s | 3m 48.50s | 6m 9.56s | ❌ SDK Crash | 3m 37.55s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add] | 1m 43.82s | 50.41s | 9m 26.27s | 2m 15.44s | 3m 33.99s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_191] | 54.02s | 3m 40.45s | 5m 29.85s | 3m 2.86s | 3m 16.79s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_255] | 53.55s | 3m 33.10s | 5m 27.96s | 2m 55.89s | 3m 12.62s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul] | 3m 11.48s | 3m 17.22s | 5m 45.89s | 20.00s | 3m 8.65s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 3m 5.48s | 3m 11.57s | 5m 40.70s | 20.19s | 3m 4.48s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 3m 6.78s | 3m 12.28s | 5m 34.49s | 19.25s | 3m 3.20s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALLCODE] | ❌ SDK Crash | 3m 27.47s | 2m 37.33s | ❌ SDK Crash | 3m 2.40s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DELEGATECALL] | ❌ SDK Crash | 3m 25.15s | 2m 36.60s | ❌ SDK Crash | 3m 0.87s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODESIZE] | ❌ SDK Crash | 3m 18.68s | 2m 40.42s | ❌ SDK Crash | 2m 59.55s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_STATICCALL] | ❌ SDK Crash | 3m 21.80s | 2m 35.81s | ❌ SDK Crash | 2m 58.81s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODEHASH] | ❌ SDK Crash | 3m 18.76s | 2m 31.13s | ❌ SDK Crash | 2m 54.95s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALL] | ❌ SDK Crash | 3m 21.53s | 2m 23.17s | ❌ SDK Crash | 2m 52.35s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_30M-blockchain_test-contract_balance_1] | 49.16s | 3m 3.24s | 4m 39.88s | ❌ SDK Crash | 2m 50.76s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_30M-blockchain_test-contract_balance_0] | 46.24s | 2m 58.54s | 4m 43.50s | ❌ SDK Crash | 2m 49.43s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODECOPY] | ❌ SDK Crash | 3m 13.53s | 2m 17.48s | ❌ SDK Crash | 2m 45.50s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_191] | 41.53s | 2m 39.31s | 3m 52.38s | 2m 28.11s | 2m 25.33s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_127] | 39.03s | 2m 33.37s | 3m 51.63s | 2m 11.96s | 2m 19.00s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_191] | 40.23s | 2m 31.70s | 3m 43.65s | 2m 15.86s | 2m 17.86s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 2m 10.49s | 3m 32.31s | 2m 45.37s | 29.73s | 2m 14.47s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SDIV-1] | 44.73s | 2m 26.23s | 3m 33.34s | 2m 7.63s | 2m 12.98s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SDIV-0] | 42.99s | 2m 27.15s | 3m 32.87s | 2m 8.82s | 2m 12.96s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_5_pair] | 1m 59.61s | 3m 29.11s | 2m 39.02s | 34.59s | 2m 10.59s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_4_pair] | 1m 53.67s | 3m 22.41s | 2m 40.59s | 36.05s | 2m 8.18s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_pair] | 1m 51.46s | 3m 13.63s | 2m 37.50s | 41.31s | 2m 5.98s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_one_pairing] | 1m 48.62s | 3m 13.62s | 2m 37.07s | 41.36s | 2m 5.17s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_two_pairings] | 1m 51.09s | 3m 14.05s | 2m 38.54s | 36.43s | 2m 5.03s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DIV-0] | 36.54s | 2m 6.60s | 3m 5.13s | 2m 4.76s | 1m 58.26s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_255] | 31.86s | 1m 59.53s | 2m 53.86s | 1m 58.46s | 1m 50.93s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_63] | 28.09s | 1m 56.86s | 2m 58.98s | 1m 55.05s | 1m 49.75s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DIV-1] | 34.78s | 1m 57.30s | 2m 49.65s | 1m 50.74s | 1m 48.12s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_255] | 32.96s | 1m 56.90s | 2m 45.84s | 1m 52.61s | 1m 47.08s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_127] | 31.72s | 1m 58.39s | 2m 54.02s | 1m 38.18s | 1m 45.58s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_191] | 29.28s | 1m 49.36s | 2m 44.25s | 1m 53.30s | 1m 44.05s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add_1_2] | 1m 58.23s | 49.12s | 1m 53.24s | 2m 1.55s | 1m 40.54s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_127] | 31.37s | 1m 54.05s | 2m 46.51s | 1m 29.71s | 1m 40.41s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PREVRANDAO] | 13.38s | 57.70s | 2m 6.79s | 2m 54.61s | 1m 33.12s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_255] | 24.78s | 1m 32.05s | 2m 15.04s | 1m 40.73s | 1m 28.15s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_127] | 23.58s | 1m 29.72s | 2m 6.65s | 1m 22.62s | 1m 20.64s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 2.63s | 1m 49.23s | 3m 19.20s | 6.30s | 1m 19.34s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_63] | 18.93s | 1m 21.30s | 1m 58.74s | 1m 20.84s | 1m 14.95s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_63] | 17.33s | 1m 15.40s | 1m 51.23s | 1m 11.63s | 1m 8.90s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty-opcode_REVERT] | 14.72s | 52.56s | 1m 27.72s | 1m 41.77s | 1m 4.19s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP2] | 9.72s | 48.21s | 1m 27.11s | 1m 39.63s | 1m 1.17s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-one-loop] | 10.57s | 47.34s | 1m 34.01s | 1m 30.61s | 1m 0.63s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero-loop] | 10.65s | 48.52s | 1m 34.96s | 1m 27.55s | 1m 0.42s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH32] | 8.55s | 36.00s | 1m 22.41s | 1m 53.76s | 1m 0.18s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_STATICCALL] | 13.40s | 49.59s | 1m 21.74s | 1m 34.98s | 59.93s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty-opcode_RETURN] | 13.11s | 46.54s | 1m 18.59s | 1m 38.66s | 59.23s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_CALL] | 13.03s | 46.66s | 1m 20.29s | 1m 36.67s | 59.16s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_63] | 14.61s | 59.26s | 1m 29.85s | 1m 12.68s | 59.10s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP15] | 9.75s | 47.03s | 1m 28.14s | 1m 29.16s | 58.52s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP9] | 9.70s | 49.37s | 1m 26.56s | 1m 27.87s | 58.37s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH31] | 8.05s | 34.45s | 1m 23.60s | 1m 46.98s | 58.27s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP6] | 9.66s | 47.93s | 1m 27.00s | 1m 28.45s | 58.26s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_CALLCODE] | 13.52s | 47.36s | 1m 19.68s | 1m 32.36s | 58.23s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP3] | 9.85s | 47.63s | 1m 28.05s | 1m 27.14s | 58.17s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP14] | 10.31s | 46.92s | 1m 26.20s | 1m 28.33s | 57.94s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP4] | 9.67s | 47.29s | 1m 27.83s | 1m 26.49s | 57.82s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP8] | 9.73s | 46.13s | 1m 27.25s | 1m 28.07s | 57.79s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP11] | 9.66s | 47.75s | 1m 26.74s | 1m 26.86s | 57.75s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP13] | 10.04s | 47.12s | 1m 27.66s | 1m 26.11s | 57.73s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP16] | 9.69s | 47.09s | 1m 28.25s | 1m 25.33s | 57.59s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP12] | 10.45s | 46.30s | 1m 26.36s | 1m 27.11s | 57.55s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP7] | 10.42s | 47.19s | 1m 26.17s | 1m 26.09s | 57.47s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP10] | 10.16s | 46.16s | 1m 26.40s | 1m 26.19s | 57.23s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP5] | 9.65s | 46.57s | 1m 26.34s | 1m 25.85s | 57.10s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP1] | 9.65s | 46.86s | 1m 25.43s | 1m 25.82s | 56.94s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADDRESS] | 9.77s | 44.26s | 1m 22.47s | 1m 30.47s | 56.74s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH30] | 8.12s | 34.62s | 1m 20.04s | 1m 43.66s | 56.61s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ORIGIN] | 9.92s | 45.67s | 1m 22.59s | 1m 26.34s | 56.13s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_COINBASE] | 10.41s | 44.17s | 1m 19.64s | 1m 28.80s | 55.76s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALLER] | 9.82s | 44.40s | 1m 20.88s | 1m 27.23s | 55.58s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH29] | 7.45s | 33.74s | 1m 13.91s | 1m 42.65s | 54.44s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH27] | 7.42s | 33.02s | 1m 12.98s | 1m 41.68s | 53.77s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SGT-] | 9.93s | 40.21s | 1m 17.87s | 1m 25.69s | 53.42s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXP-] | 17.22s | 1m 7.05s | 1m 37.83s | 31.42s | 53.38s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH28] | 7.38s | 33.14s | 1m 12.52s | 1m 36.77s | 52.45s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_diff_acc] | 53.40s | 23.38s | 1m 58.35s | 12.60s | 51.93s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 11.93s | 42.10s | 1m 10.31s | 1m 22.70s | 51.76s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty] | 9.18s | 39.64s | 1m 22.87s | 1m 14.12s | 51.45s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_CALLCODE] | 11.32s | 40.35s | 1m 9.13s | 1m 22.92s | 50.93s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_STATICCALL] | 11.37s | 40.53s | 1m 8.57s | 1m 21.20s | 50.42s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_b] | 56.26s | 21.17s | 1m 53.44s | 10.68s | 50.39s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_CALL] | 11.11s | 40.02s | 1m 8.97s | 1m 21.06s | 50.29s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH26] | 7.40s | 32.60s | 1m 7.14s | 1m 33.16s | 50.08s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_diff_acc] | 53.15s | 20.66s | 1m 52.54s | 10.41s | 49.19s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_b] | 56.08s | 19.74s | 1m 51.19s | 9.13s | 49.03s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH25] | 7.38s | 30.58s | 1m 5.81s | 1m 31.55s | 48.83s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EQ-] | 8.61s | 38.06s | 1m 11.04s | 1m 16.39s | 48.52s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 8.12s | 37.79s | 1m 6.18s | 1m 20.63s | 48.18s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_a] | 53.01s | 19.36s | 1m 51.97s | 8.28s | 48.15s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH24] | 6.84s | 29.84s | 1m 6.52s | 1m 27.50s | 47.68s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH23] | 6.58s | 27.79s | 1m 8.77s | 1m 21.25s | 46.10s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SMOD-] | 8.90s | 36.80s | 1m 7.71s | 1m 8.35s | 45.44s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH22] | 6.01s | 27.76s | 1m 7.44s | 1m 19.56s | 45.19s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 10.39s | 35.52s | 1m 0.16s | 1m 10.99s | 44.27s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH21] | 5.96s | 27.38s | 1m 1.78s | 1m 21.82s | 44.23s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of zero data-opcode_REVERT] | 9.67s | 34.55s | 1m 0.75s | 1m 6.25s | 42.81s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH19] | 5.90s | 25.56s | 59.45s | 1m 15.67s | 41.65s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE new value] | 9.31s | 34.87s | 57.75s | 1m 3.56s | 41.37s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SAR-] | 9.44s | 39.02s | 1m 7.62s | 49.31s | 41.35s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH20] | 5.57s | 26.04s | 58.24s | 1m 14.87s | 41.18s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add_infinities] | 8.03s | 25.78s | 44.23s | 1m 22.73s | 40.19s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-six blobs, access latest] | 6.79s | 27.11s | 50.58s | 1m 16.00s | 40.12s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BLOBBASEFEE] | 7.71s | 34.45s | 1m 4.58s | 53.65s | 40.10s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob and accessed] | 6.41s | 27.42s | 51.01s | 1m 12.47s | 39.33s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of zero data-opcode_RETURN] | 8.76s | 32.65s | 55.23s | 59.64s | 39.07s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SAR] | 8.51s | 36.76s | 1m 5.53s | 44.45s | 38.81s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASPRICE] | 7.63s | 33.20s | 1m 3.86s | 49.55s | 38.56s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH18] | 5.11s | 24.47s | 52.95s | 1m 10.09s | 38.16s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH15] | 5.48s | 23.45s | 55.54s | 1m 5.19s | 37.41s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MOD-] | 6.89s | 28.40s | 52.39s | 1m 1.34s | 37.26s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH16] | 4.99s | 23.19s | 49.61s | 1m 10.33s | 37.03s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH17] | 5.26s | 23.32s | 50.38s | 1m 7.01s | 36.49s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SHR] | 8.66s | 35.93s | 57.81s | 43.16s | 36.39s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH14] | 4.84s | 22.39s | 52.34s | 1m 1.08s | 35.16s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHR-] | 7.50s | 33.48s | 55.49s | 42.39s | 34.72s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHL-] | 7.58s | 33.44s | 56.58s | 38.69s | 34.07s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_False] | 2.09s | 32.90s | 1m 29.54s | 10.92s | 33.86s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-0 bytes] | 7.36s | 30.48s | 51.41s | 43.53s | 33.19s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_False] | 1.92s | 32.38s | 1m 27.55s | 10.90s | 33.19s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 7.40s | 31.78s | 50.39s | 42.76s | 33.09s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_True] | 2.02s | 32.17s | 1m 27.51s | 10.05s | 32.94s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_True] | 1.86s | 32.24s | 1m 28.08s | 9.52s | 32.92s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 5.50s | 25.12s | 38.15s | 1m 0.86s | 32.41s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 5.47s | 24.57s | 39.54s | 59.72s | 32.32s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 0.59s | 56.74s | 35.77s | 35.95s | 32.26s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 5.53s | 24.26s | 39.83s | 59.37s | 32.25s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 7.19s | 27.09s | 45.07s | 49.43s | 32.20s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_NUMBER] | 5.91s | 27.30s | 49.15s | 46.26s | 32.16s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_TIMESTAMP] | 5.87s | 28.76s | 49.66s | 44.05s | 32.09s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 7.02s | 30.02s | 51.10s | 40.16s | 32.07s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH13] | 4.60s | 22.09s | 45.04s | 56.37s | 32.02s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 5.47s | 24.33s | 38.91s | 58.96s | 31.92s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 5.88s | 24.00s | 39.06s | 58.52s | 31.86s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 5.53s | 24.27s | 39.27s | 57.51s | 31.64s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 5.98s | 24.58s | 49.70s | 46.23s | 31.62s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 5.52s | 24.13s | 38.78s | 57.96s | 31.59s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 5.46s | 24.53s | 37.91s | 58.00s | 31.47s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 5.47s | 24.29s | 37.91s | 58.05s | 31.43s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 5.52s | 24.21s | 38.35s | 57.56s | 31.41s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 5.49s | 23.93s | 38.27s | 57.95s | 31.41s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 5.99s | 24.81s | 51.06s | 43.55s | 31.35s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 6.52s | 24.73s | 49.09s | 44.99s | 31.33s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 6.25s | 25.96s | 50.13s | 42.11s | 31.11s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 5.48s | 23.85s | 38.08s | 56.90s | 31.08s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 6.03s | 24.60s | 48.94s | 44.66s | 31.05s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_0] | 5.97s | 25.70s | 46.49s | 45.90s | 31.02s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1] | 5.63s | 25.61s | 47.18s | 45.61s | 31.01s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 6.74s | 29.15s | 48.00s | 40.09s | 31.00s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 6.32s | 24.63s | 48.70s | 44.25s | 30.98s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 5.99s | 24.70s | 49.47s | 43.68s | 30.96s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 6.41s | 24.50s | 49.66s | 43.23s | 30.95s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 6.58s | 26.44s | 48.98s | 41.74s | 30.93s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 6.42s | 24.44s | 48.74s | 43.71s | 30.83s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 6.38s | 24.71s | 49.33s | 42.67s | 30.77s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_False] | 6.64s | 27.87s | 40.89s | 47.66s | 30.76s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 6.33s | 24.81s | 48.77s | 42.94s | 30.71s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 6.64s | 29.08s | 48.16s | 38.66s | 30.63s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CHAINID] | 5.67s | 25.48s | 47.58s | 43.75s | 30.62s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BASEFEE] | 5.69s | 25.04s | 47.75s | 43.60s | 30.52s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_True] | 6.50s | 27.59s | 40.82s | 46.79s | 30.42s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH12] | 4.47s | 20.82s | 40.85s | 54.65s | 30.20s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MUL-] | 7.74s | 29.72s | 57.94s | 25.31s | 30.18s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 5.78s | 25.06s | 45.09s | 44.65s | 30.14s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 5.52s | 25.16s | 45.60s | 44.16s | 30.11s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SIGNEXTEND-] | 6.73s | 29.73s | 50.28s | 33.00s | 29.93s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000] | 5.55s | 25.09s | 44.30s | 44.65s | 29.90s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASLIMIT] | 5.51s | 24.61s | 44.85s | 44.36s | 29.83s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH11] | 4.54s | 20.85s | 41.05s | 52.17s | 29.65s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 5.51s | 24.82s | 44.48s | 42.88s | 29.42s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 6.63s | 24.20s | 41.58s | 45.06s | 29.36s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE same value] | 6.65s | 24.26s | 39.08s | 47.27s | 29.31s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 6.15s | 26.11s | 43.10s | 41.58s | 29.24s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-100 bytes] | 6.18s | 26.71s | 43.48s | 39.64s | 29.00s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 6.18s | 26.13s | 42.80s | 40.31s | 28.86s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 6.01s | 25.29s | 41.88s | 40.68s | 28.46s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH0] | 5.30s | 24.09s | 41.98s | 41.73s | 28.28s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-100 bytes] | 5.44s | 23.28s | 38.11s | 40.72s | 26.89s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 4.70s | 20.42s | 39.09s | 43.32s | 26.88s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH10] | 4.16s | 19.98s | 32.76s | 48.40s | 26.32s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-0 bytes] | 5.49s | 21.89s | 38.72s | 37.23s | 25.83s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_False] | 4.96s | 22.22s | 38.93s | 36.19s | 25.57s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH9] | 4.14s | 17.61s | 31.72s | 47.28s | 25.19s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_False] | 5.05s | 21.59s | 37.95s | 33.96s | 24.64s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH7] | 4.24s | 18.27s | 32.71s | 42.95s | 24.55s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH8] | 4.00s | 18.01s | 31.05s | 44.47s | 24.38s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 5.42s | 22.74s | 37.00s | 32.15s | 24.33s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_True] | 4.78s | 21.60s | 37.75s | 32.73s | 24.21s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_True] | 4.86s | 21.74s | 37.70s | 32.28s | 24.14s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SLT-] | 4.74s | 21.31s | 35.38s | 34.35s | 23.94s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH6] | 3.92s | 18.12s | 30.48s | 39.68s | 23.05s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 4.18s | 15.84s | 28.45s | 38.76s | 21.80s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH5] | 3.64s | 17.27s | 29.50s | 36.29s | 21.68s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 31.00s | 2.27s | 37.54s | 15.80s | 21.65s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 4.33s | 18.30s | 33.21s | 30.10s | 21.48s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 4.22s | 17.99s | 32.43s | 30.25s | 21.22s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SUB-] | 4.58s | 21.14s | 33.66s | 25.47s | 21.21s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 3.96s | 16.30s | 25.53s | 37.79s | 20.89s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 4.27s | 18.25s | 29.84s | 30.73s | 20.77s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-1MiB] | 3.88s | 27.26s | 27.74s | 23.41s | 20.57s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob but access non-existent index] | 3.82s | 17.12s | 28.05s | 33.26s | 20.56s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADD-] | 4.63s | 19.99s | 31.62s | 25.43s | 20.41s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH4] | 3.54s | 16.87s | 28.02s | 33.12s | 20.39s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 3.76s | 17.79s | 29.02s | 30.85s | 20.36s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 3.58s | 17.51s | 29.11s | 31.23s | 20.36s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 3.75s | 17.82s | 28.98s | 30.81s | 20.34s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 3.82s | 17.88s | 29.63s | 29.99s | 20.33s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 3.60s | 17.59s | 29.77s | 30.33s | 20.32s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-5b] | 3.11s | 13.91s | 34.07s | 29.78s | 20.22s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_1000] | 3.87s | 17.84s | 29.36s | 29.78s | 20.21s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 3.79s | 17.87s | 29.00s | 30.13s | 20.20s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_0] | 3.76s | 18.06s | 29.05s | 29.91s | 20.19s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_10000] | 3.74s | 18.01s | 28.80s | 30.00s | 20.14s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-no blobs] | 3.81s | 17.18s | 26.85s | 31.55s | 19.85s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BYTE-] | 3.84s | 17.70s | 29.69s | 25.82s | 19.26s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH3] | 3.69s | 15.80s | 26.68s | 30.76s | 19.23s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 3.36s | 16.55s | 26.73s | 28.19s | 18.71s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 3.80s | 16.00s | 28.20s | 26.30s | 18.57s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 3.48s | 16.40s | 27.85s | 26.19s | 18.48s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-100 bytes] | 3.47s | 15.42s | 26.10s | 28.80s | 18.45s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 3.84s | 16.51s | 26.36s | 26.41s | 18.28s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 3.35s | 16.92s | 26.72s | 25.90s | 18.22s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 3.35s | 16.54s | 26.34s | 26.47s | 18.17s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 3.36s | 16.29s | 26.99s | 25.99s | 18.16s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 3.59s | 16.57s | 26.65s | 25.64s | 18.11s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 3.34s | 16.38s | 26.84s | 25.89s | 18.11s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 3.52s | 15.34s | 24.10s | 29.45s | 18.10s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_LT-] | 3.67s | 16.57s | 28.23s | 23.80s | 18.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 3.39s | 16.26s | 26.36s | 26.21s | 18.05s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 3.33s | 16.54s | 26.82s | 25.53s | 18.05s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 3.32s | 16.13s | 26.66s | 25.99s | 18.02s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP16] | 3.39s | 15.58s | 26.98s | 25.99s | 17.98s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 3.63s | 15.44s | 27.93s | 24.93s | 17.98s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 3.32s | 16.40s | 26.78s | 25.35s | 17.96s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP2] | 3.30s | 15.35s | 26.55s | 26.03s | 17.81s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GT-] | 3.72s | 16.59s | 27.93s | 22.73s | 17.75s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP8] | 3.30s | 15.52s | 26.35s | 25.78s | 17.74s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_OR-] | 3.56s | 15.98s | 27.82s | 23.09s | 17.61s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 3.44s | 13.09s | 22.42s | 31.18s | 17.53s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-1MiB] | 2.67s | 27.89s | 25.56s | 13.70s | 17.46s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_AND-] | 3.86s | 16.17s | 27.90s | 21.89s | 17.46s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP6] | 3.32s | 15.94s | 26.52s | 23.88s | 17.41s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_XOR-] | 3.78s | 15.78s | 27.81s | 22.13s | 17.38s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP7] | 3.54s | 15.45s | 26.74s | 23.76s | 17.37s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP14] | 3.31s | 15.17s | 26.63s | 24.28s | 17.35s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP11] | 3.39s | 15.77s | 26.56s | 23.64s | 17.34s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP5] | 3.54s | 15.66s | 26.49s | 23.67s | 17.34s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP12] | 3.47s | 15.41s | 26.40s | 24.02s | 17.33s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP13] | 3.37s | 15.46s | 26.97s | 23.47s | 17.32s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP15] | 3.56s | 15.18s | 27.10s | 23.39s | 17.31s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-1MiB] | 2.17s | 27.83s | 19.82s | 19.39s | 17.30s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP3] | 3.31s | 15.56s | 26.27s | 23.84s | 17.25s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP10] | 3.47s | 15.33s | 26.55s | 23.32s | 17.17s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP9] | 3.34s | 15.26s | 27.50s | 22.56s | 17.16s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-100 bytes] | 3.40s | 14.37s | 25.03s | 25.72s | 17.13s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-10KiB] | 4.09s | 13.36s | 26.35s | 24.68s | 17.12s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 1.95s | 27.22s | 19.27s | 19.83s | 17.07s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP1] | 3.31s | 15.24s | 26.40s | 23.29s | 17.06s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP4] | 3.50s | 15.41s | 26.52s | 22.79s | 17.05s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_BALANCE] | 3.55s | 12.97s | 22.12s | 29.15s | 16.95s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 3.19s | 14.26s | 24.03s | 25.68s | 16.79s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH2] | 3.25s | 14.54s | 24.58s | 24.35s | 16.68s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 1.82s | 31.64s | 17.60s | 14.27s | 16.33s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 3.06s | 13.41s | 22.53s | 26.31s | 16.33s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 3.18s | 14.39s | 23.53s | 23.30s | 16.10s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 3.08s | 13.63s | 26.25s | 20.83s | 15.95s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH1] | 3.07s | 12.59s | 23.61s | 23.49s | 15.69s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_True] | 3.26s | 12.43s | 18.98s | 25.60s | 15.07s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_False] | 3.46s | 12.30s | 19.39s | 24.46s | 14.90s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 3.23s | 11.53s | 17.89s | 26.11s | 14.69s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SLOAD] | 3.39s | 12.18s | 19.21s | 23.93s | 14.68s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 2.60s | 9.86s | 19.80s | 25.89s | 14.54s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 2.99s | 12.94s | 20.91s | 20.83s | 14.42s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 2.90s | 12.46s | 16.92s | 24.07s | 14.09s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 1.40s | 27.66s | 15.19s | 11.01s | 13.81s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_BALANCE] | 2.83s | 10.92s | 16.83s | 24.05s | 13.66s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-1MiB] | 1.36s | 27.58s | 14.28s | 11.29s | 13.63s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-max code size] | 2.40s | 8.97s | 14.85s | 26.78s | 13.25s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-10KiB] | 2.74s | 9.75s | 17.93s | 22.55s | 13.24s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 2.41s | 8.96s | 15.23s | 26.04s | 13.16s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 2.45s | 9.78s | 15.62s | 24.66s | 13.13s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-512] | 2.84s | 10.74s | 17.20s | 21.04s | 12.95s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 2.56s | 9.10s | 15.53s | 24.59s | 12.94s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 2.46s | 9.08s | 15.14s | 24.84s | 12.88s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 2.23s | 10.41s | 17.02s | 21.67s | 12.83s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 2.46s | 9.32s | 15.39s | 23.50s | 12.67s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-00] | 1.99s | 11.98s | 18.54s | 17.52s | 12.51s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b5b] | 2.07s | 11.88s | 16.00s | 19.34s | 12.32s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_True] | 2.75s | 9.98s | 15.85s | 20.68s | 12.31s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_False] | 2.84s | 10.17s | 16.31s | 19.37s | 12.17s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB] | 2.75s | 9.75s | 16.00s | 18.96s | 11.86s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-10KiB] | 2.75s | 8.82s | 19.64s | 14.36s | 11.39s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 1.71s | 12.72s | 13.32s | 15.73s | 10.87s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b5b] | 1.68s | 11.96s | 13.39s | 15.90s | 10.73s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 1.63s | 12.35s | 13.88s | 14.95s | 10.70s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 4.87s | 3.49s | 25.42s | 8.93s | 10.68s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 0.93s | 27.42s | 6.89s | 7.39s | 10.65s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 0.84s | 27.28s | 6.92s | 6.93s | 10.49s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 2.27s | 7.34s | 11.73s | 20.35s | 10.42s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 1.48s | 14.14s | 11.59s | 13.65s | 10.21s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value] | 1.53s | 11.09s | 12.74s | 14.64s | 10.00s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSLOAD] | 1.43s | 11.29s | 12.64s | 13.56s | 9.73s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b] | 1.48s | 11.51s | 12.03s | 13.34s | 9.59s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-5KiB] | 1.91s | 7.96s | 13.59s | 14.59s | 9.51s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_True] | 1.37s | 9.42s | 9.99s | 13.58s | 8.59s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b] | 1.16s | 10.77s | 10.29s | 10.98s | 8.30s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value] | 1.26s | 9.32s | 9.75s | 12.79s | 8.28s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 1.61s | 6.72s | 12.08s | 12.64s | 8.26s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 1.60s | 6.59s | 11.60s | 13.12s | 8.23s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 1.60s | 6.79s | 11.80s | 12.71s | 8.23s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-max code size] | 1.57s | 6.56s | 11.64s | 12.84s | 8.15s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 1.62s | 6.66s | 11.95s | 12.36s | 8.15s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-10KiB] | 1.58s | 6.55s | 11.78s | 12.56s | 8.12s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 1.66s | 6.53s | 11.69s | 12.38s | 8.06s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 1.57s | 6.54s | 11.58s | 12.18s | 7.97s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_False] | 1.17s | 6.91s | 7.73s | 10.59s | 6.60s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_2_scalar] | 5.47s | 3.33s | 5.84s | 8.80s | 5.86s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 0.93s | 5.38s | 7.20s | 9.33s | 5.71s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 0.96s | 5.54s | 6.45s | 9.84s | 5.70s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSLOAD] | 0.91s | 5.58s | 6.64s | 9.06s | 5.55s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 1.12s | 4.06s | 6.40s | 8.40s | 4.99s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 0.82s | 6.40s | 5.06s | 7.70s | 4.99s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 0.96s | 3.61s | 5.89s | 7.75s | 4.55s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_True] | 0.52s | 6.13s | 4.28s | 6.73s | 4.42s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_100000] | 0.81s | 3.29s | 5.78s | 6.97s | 4.21s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_False] | 0.81s | 3.27s | 5.01s | 7.14s | 4.06s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_True] | 0.79s | 3.09s | 4.67s | 6.74s | 3.82s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_2_scalar] | 0.84s | 3.12s | 4.96s | 5.78s | 3.67s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 0.46s | 4.01s | 2.93s | 5.84s | 3.31s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 0.38s | 4.54s | 1.48s | 4.69s | 2.77s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 0.34s | 4.65s | 1.47s | 4.38s | 2.71s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 0.52s | 2.19s | 2.77s | 4.95s | 2.61s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 0.52s | 2.08s | 2.77s | 4.78s | 2.54s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_REVERT] | 0.31s | 3.31s | 1.32s | 4.66s | 2.40s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value] | 0.41s | 1.71s | 1.99s | 4.65s | 2.19s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 0.42s | 1.59s | 2.03s | 4.38s | 2.10s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_RETURN] | 0.30s | 3.23s | 1.27s | 3.49s | 2.07s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value] | 0.37s | 1.62s | 1.84s | 4.39s | 2.06s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE] | 0.41s | 1.74s | 1.63s | 4.38s | 2.04s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 0.43s | 1.57s | 2.03s | 4.10s | 2.03s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 0.40s | 1.40s | 1.30s | 5.00s | 2.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 0.38s | 1.70s | 1.56s | 4.20s | 1.96s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 0.34s | 1.29s | 1.37s | 4.80s | 1.95s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 0.37s | 1.35s | 1.61s | 4.29s | 1.90s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 0.35s | 1.71s | 1.59s | 3.95s | 1.90s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 0.36s | 1.33s | 1.53s | 4.36s | 1.90s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 0.36s | 1.33s | 1.24s | 4.35s | 1.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 0.37s | 1.31s | 1.62s | 3.95s | 1.81s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 0.32s | 1.04s | 0.91s | 4.85s | 1.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 0.38s | 1.21s | 1.61s | 3.90s | 1.78s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_False] | 0.26s | 1.82s | 1.25s | 3.65s | 1.75s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 0.35s | 1.26s | 1.50s | 3.84s | 1.74s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 0.37s | 1.29s | 1.36s | 3.94s | 1.74s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 0.38s | 1.13s | 1.35s | 4.08s | 1.74s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 0.31s | 1.21s | 1.06s | 4.30s | 1.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 0.34s | 1.09s | 1.21s | 4.24s | 1.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE2] | 0.35s | 1.30s | 1.18s | 3.99s | 1.71s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 0.32s | 1.14s | 1.38s | 3.98s | 1.71s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 0.33s | 1.13s | 1.25s | 4.10s | 1.70s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE] | 0.34s | 1.20s | 1.14s | 4.12s | 1.70s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 0.35s | 1.16s | 1.06s | 4.22s | 1.70s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE2] | 0.33s | 1.26s | 1.14s | 3.97s | 1.67s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE] | 0.35s | 1.23s | 1.10s | 3.94s | 1.65s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 0.32s | 1.16s | 1.06s | 3.94s | 1.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 0.30s | 1.07s | 1.11s | 3.90s | 1.59s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 0.36s | 1.09s | 1.20s | 3.62s | 1.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 0.35s | 1.12s | 1.20s | 3.57s | 1.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 0.35s | 1.05s | 1.11s | 3.72s | 1.55s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 0.32s | 1.09s | 0.91s | 3.86s | 1.55s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE2] | 0.30s | 0.97s | 0.81s | 3.97s | 1.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 0.26s | 1.01s | 0.36s | 4.40s | 1.51s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000000] | 0.24s | 2.00s | 0.48s | 3.24s | 1.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 0.22s | 1.16s | 0.50s | 4.05s | 1.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 0.25s | 1.13s | 0.50s | 3.88s | 1.44s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 0.22s | 0.78s | 0.33s | 4.24s | 1.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 0.23s | 1.07s | 0.50s | 3.62s | 1.35s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 0.22s | 1.05s | 0.37s | 3.71s | 1.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 0.23s | 1.04s | 0.45s | 3.48s | 1.30s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 0.23s | 1.09s | 0.45s | 3.41s | 1.29s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 0.21s | 1.04s | 0.37s | 3.53s | 1.29s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 0.24s | 1.19s | 0.48s | 3.20s | 1.28s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 0.23s | 1.03s | 0.44s | 3.36s | 1.27s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 0.22s | 1.04s | 0.38s | 3.37s | 1.25s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE] | 0.24s | 0.73s | 0.32s | 3.69s | 1.24s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 0.24s | 1.04s | 0.44s | 3.24s | 1.24s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 0.23s | 1.04s | 0.40s | 3.29s | 1.24s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 0.23s | 1.10s | 0.42s | 3.19s | 1.24s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 0.21s | 1.04s | 0.38s | 3.30s | 1.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 0.22s | 1.05s | 0.36s | 3.30s | 1.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 0.23s | 1.10s | 0.37s | 3.22s | 1.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 0.26s | 1.05s | 0.44s | 3.16s | 1.23s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 0.23s | 0.82s | 0.37s | 3.47s | 1.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 0.24s | 1.09s | 0.44s | 3.07s | 1.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 0.22s | 1.04s | 0.36s | 3.19s | 1.20s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 0.23s | 1.08s | 0.40s | 3.09s | 1.20s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 0.25s | 1.03s | 0.44s | 3.07s | 1.19s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 0.26s | 1.02s | 0.39s | 3.09s | 1.19s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 0.23s | 1.10s | 0.37s | 3.06s | 1.19s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 0.24s | 1.05s | 0.40s | 3.06s | 1.19s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 0.22s | 1.05s | 0.36s | 3.06s | 1.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 0.25s | 1.03s | 0.39s | 3.01s | 1.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 0.26s | 1.06s | 0.44s | 2.93s | 1.17s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 0.24s | 0.76s | 0.38s | 3.30s | 1.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 0.26s | 1.04s | 0.38s | 3.00s | 1.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 0.26s | 1.03s | 0.44s | 2.94s | 1.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 0.22s | 1.04s | 0.38s | 3.01s | 1.16s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 0.23s | 1.04s | 0.37s | 3.01s | 1.16s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_sets] | 0.31s | 0.92s | 0.52s | 2.90s | 1.16s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 0.27s | 1.03s | 0.36s | 2.99s | 1.16s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 0.24s | 1.04s | 0.38s | 2.97s | 1.16s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 0.21s | 0.77s | 0.34s | 3.28s | 1.15s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 0.22s | 0.71s | 0.33s | 3.33s | 1.15s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE2] | 0.23s | 0.79s | 0.39s | 3.17s | 1.15s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 0.24s | 1.03s | 0.39s | 2.92s | 1.14s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 0.24s | 1.04s | 0.37s | 2.91s | 1.14s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 0.21s | 1.04s | 0.38s | 2.90s | 1.13s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 0.24s | 0.76s | 0.34s | 3.19s | 1.13s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_zero_input] | 0.26s | 0.71s | 0.34s | 3.20s | 1.13s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 0.22s | 1.05s | 0.36s | 2.88s | 1.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 0.23s | 0.78s | 0.33s | 3.16s | 1.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair] | 0.26s | 0.69s | 0.36s | 3.18s | 1.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 0.24s | 1.08s | 0.38s | 2.76s | 1.11s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 0.25s | 0.78s | 0.35s | 3.07s | 1.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 0.24s | 1.02s | 0.36s | 2.81s | 1.11s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 0.22s | 0.78s | 0.39s | 3.03s | 1.10s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 0.24s | 0.78s | 0.36s | 2.91s | 1.07s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 0.23s | 0.74s | 0.32s | 3.00s | 1.07s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 0.21s | 0.75s | 0.34s | 2.95s | 1.06s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 0.25s | 0.76s | 0.34s | 2.86s | 1.05s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 0.23s | 0.75s | 0.32s | 2.83s | 1.03s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair_empty] | 0.20s | 0.61s | 0.18s | 2.95s | 0.98s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_3_pair] | 0.24s | 0.66s | 0.18s | 2.67s | 0.94s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 0.18s | 0.55s | 0.06s | 2.91s | 0.93s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| openvm-v1.4.1 | 533 | 526 | 7 | 0 |
| risc0-v3.0.4 | 533 | 531 | 2 | 0 |
| sp1-v5.2.3 | 533 | 533 | 0 | 0 |
| zisk-v0.14.0 | 533 | 427 | 106 | 0 |

---

