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

| Test Case | risc0-v3.0.4 | sp1-v5.2.3 | zisk-v0.14.0 | Avg |
|-----------|-----------|-----------|-----------|----------|
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_8b_exp_896] | 33m 4.92s | 55m 6.33s | ❌ SDK Crash | 44m 5.62s |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_60M-blockchain_test-point_evaluation] | 1h 3m 56.06s | 21m 13.18s | ❌ SDK Crash | 42m 34.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_2_even] | 24m 5.96s | 38m 15.47s | ❌ SDK Crash | 31m 10.72s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_marius_1_even] | 23m 21.92s | 37m 22.93s | ❌ SDK Crash | 30m 22.42s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_600_gas_exp_heavy] | ❌ SDK Crash | 28m 38.85s | ❌ SDK Crash | 28m 38.85s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_800_gas_base_heavy] | 22m 0.11s | 35m 7.50s | ❌ SDK Crash | 28m 33.80s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g1add] | 21m 50.69s | 35m 10.54s | ❌ SDK Crash | 28m 30.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_867_gas_base_heavy] | 21m 47.70s | 34m 37.80s | ❌ SDK Crash | 28m 12.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_408_gas_base_heavy] | 21m 16.15s | 34m 35.66s | ❌ SDK Crash | 27m 55.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1045_gas_base_heavy] | 21m 17.68s | 34m 27.14s | ❌ SDK Crash | 27m 52.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_616_gas_base_heavy] | 21m 7.99s | 34m 31.09s | ❌ SDK Crash | 27m 49.54s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_qube] | 21m 2.49s | 34m 27.39s | ❌ SDK Crash | 27m 44.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_16b_exp_320] | 21m 6.03s | 34m 21.11s | ❌ SDK Crash | 27m 43.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_qube] | 21m 55.55s | 33m 11.64s | ❌ SDK Crash | 27m 33.60s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_127] | 32m 56.43s | 47m 48.63s | 1m 36.40s | 27m 27.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_264_exp_2] | 21m 7.93s | 33m 35.58s | ❌ SDK Crash | 27m 21.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_256_exp_2] | 19m 44.16s | 33m 9.04s | ❌ SDK Crash | 26m 26.60s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_127] | 21m 41.16s | 31m 7.83s | ❌ SDK Crash | 26m 24.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_1_even] | 20m 7.44s | 32m 30.59s | ❌ SDK Crash | 26m 19.01s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_127] | 21m 35.23s | 31m 1.99s | ❌ SDK Crash | 26m 18.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_298_gas_exp_heavy] | 18m 21.50s | 30m 32.39s | ❌ SDK Crash | 24m 26.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_8_exp_896] | 18m 3.63s | 30m 34.62s | ❌ SDK Crash | 24m 19.12s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_191] | 28m 50.66s | 41m 56.05s | 1m 36.02s | 24m 7.58s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_852_gas_exp_heavy] | 18m 9.13s | 29m 28.45s | ❌ SDK Crash | 23m 48.79s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_base_heavy] | 18m 4.19s | 29m 16.26s | ❌ SDK Crash | 23m 40.22s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_800_gas_exp_heavy] | 18m 8.82s | 29m 5.48s | ❌ SDK Crash | 23m 37.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_8_exp_648] | 18m 1.48s | 28m 35.45s | ❌ SDK Crash | 23m 18.46s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_215_gas_exp_heavy] | 17m 15.11s | 28m 52.41s | ❌ SDK Crash | 23m 3.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_exp_heavy] | 16m 50.96s | 28m 46.77s | ❌ SDK Crash | 22m 48.87s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g2add] | 17m 34.05s | 27m 23.53s | ❌ SDK Crash | 22m 28.79s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_qube] | 17m 17.54s | 26m 43.82s | ❌ SDK Crash | 22m 0.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_400_gas_exp_heavy] | 16m 43.32s | 27m 16.58s | ❌ SDK Crash | 21m 59.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_square] | 16m 51.65s | 27m 8.12s | ❌ SDK Crash | 21m 59.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_2] | 16m 51.04s | 27m 4.22s | ❌ SDK Crash | 21m 57.63s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_square] | 16m 8.82s | 25m 56.57s | ❌ SDK Crash | 21m 2.70s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1024_exp_2] | 15m 52.08s | 26m 3.11s | ❌ SDK Crash | 20m 57.59s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_255] | 24m 38.36s | 35m 55.29s | 1m 35.61s | 20m 43.09s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_pairing_check] | 32m 51.92s | 8m 26.87s | ❌ SDK Crash | 20m 39.40s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_127] | 16m 48.95s | 24m 19.44s | ❌ SDK Crash | 20m 34.19s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SDIV-1] | 16m 28.22s | 23m 40.90s | ❌ SDK Crash | 20m 4.56s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_24b_exp_168] | 14m 57.66s | 23m 47.81s | ❌ SDK Crash | 19m 22.73s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODESIZE] | 31m 56.16s | 6m 10.12s | ❌ SDK Crash | 19m 3.14s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_60M-blockchain_test-blake2f] | 16m 37.79s | 21m 15.56s | ❌ SDK Crash | 18m 56.67s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add_1_2] | 15m 29.43s | 22m 11.49s | ❌ SDK Crash | 18m 50.45s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALL] | 31m 10.22s | 6m 10.90s | ❌ SDK Crash | 18m 40.56s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DELEGATECALL] | 31m 6.83s | 6m 10.59s | ❌ SDK Crash | 18m 38.71s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLCODE] | 31m 3.42s | 6m 11.15s | ❌ SDK Crash | 18m 37.29s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_STATICCALL] | 30m 54.58s | 6m 10.18s | ❌ SDK Crash | 18m 32.38s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODEHASH] | 30m 46.21s | 6m 0.26s | ❌ SDK Crash | 18m 23.24s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_191] | 15m 18.16s | 21m 18.39s | ❌ SDK Crash | 18m 18.27s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SDIV-0] | 15m 12.42s | 20m 50.51s | ❌ SDK Crash | 18m 1.47s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_63] | 21m 38.82s | 30m 34.90s | 1m 35.76s | 17m 56.49s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_191] | 14m 39.19s | 21m 11.96s | ❌ SDK Crash | 17m 55.58s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DIV-1] | 14m 28.92s | 21m 20.94s | ❌ SDK Crash | 17m 54.93s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODECOPY] | 29m 31.67s | 5m 52.23s | ❌ SDK Crash | 17m 41.95s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add] | 14m 18.17s | 20m 31.60s | ❌ SDK Crash | 17m 24.88s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DIV-0] | 14m 3.78s | 20m 18.04s | ❌ SDK Crash | 17m 10.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_square] | 13m 17.03s | 21m 3.74s | ❌ SDK Crash | 17m 10.38s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_63] | 13m 39.21s | 20m 11.46s | ❌ SDK Crash | 16m 55.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_8] | 12m 59.66s | 20m 45.66s | ❌ SDK Crash | 16m 52.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_765_gas_exp_heavy] | 12m 57.88s | 20m 42.94s | ❌ SDK Crash | 16m 50.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_3] | 12m 56.41s | 20m 42.70s | ❌ SDK Crash | 16m 49.55s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_63] | 13m 34.27s | 20m 2.55s | ❌ SDK Crash | 16m 48.41s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_fp_to_g2] | 25m 50.78s | 6m 48.47s | ❌ SDK Crash | 16m 19.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_256] | 12m 5.62s | 19m 14.89s | ❌ SDK Crash | 15m 40.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_96] | 11m 42.07s | 18m 52.01s | ❌ SDK Crash | 15m 17.04s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_191] | 12m 6.77s | 18m 15.76s | ❌ SDK Crash | 15m 11.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_128] | 10m 56.94s | 17m 45.95s | ❌ SDK Crash | 14m 21.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_40] | 10m 54.21s | 17m 40.73s | ❌ SDK Crash | 14m 17.47s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_fp_to_g1] | 23m 34.47s | 4m 57.30s | ❌ SDK Crash | 14m 15.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_96] | 11m 24.31s | 16m 58.61s | ❌ SDK Crash | 14m 11.46s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_256] | 10m 58.38s | 17m 21.86s | ❌ SDK Crash | 14m 10.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1360_gas_balanced] | 11m 5.70s | 17m 13.16s | ❌ SDK Crash | 14m 9.43s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_example_1] | 10m 48.34s | 17m 19.48s | ❌ SDK Crash | 14m 3.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_cover_windows] | 10m 39.51s | 17m 18.31s | ❌ SDK Crash | 13m 58.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_4] | 10m 45.57s | 17m 5.59s | ❌ SDK Crash | 13m 55.58s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_677_gas_base_heavy] | 10m 39.40s | 17m 2.30s | ❌ SDK Crash | 13m 50.85s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1360n1] | 10m 38.20s | 16m 52.84s | ❌ SDK Crash | 13m 45.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1349n1] | 10m 41.13s | 16m 47.06s | ❌ SDK Crash | 13m 44.09s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_64] | 10m 25.72s | 16m 58.53s | ❌ SDK Crash | 13m 42.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_65] | 10m 28.19s | 16m 42.92s | ❌ SDK Crash | 13m 35.55s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1360n2] | 10m 27.20s | 16m 21.37s | ❌ SDK Crash | 13m 24.28s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_balanced] | 10m 14.37s | 16m 0.35s | ❌ SDK Crash | 13m 7.36s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_qube] | 10m 11.76s | 15m 49.07s | ❌ SDK Crash | 13m 0.41s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_63] | 10m 11.79s | 15m 30.97s | ❌ SDK Crash | 12m 51.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_40] | 9m 49.09s | 15m 44.17s | ❌ SDK Crash | 12m 46.63s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_208_gas_balanced] | 9m 46.50s | 15m 45.42s | ❌ SDK Crash | 12m 45.96s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_36] | 9m 35.57s | 15m 10.91s | ❌ SDK Crash | 12m 23.24s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_600_gas_balanced] | 9m 21.17s | 14m 51.44s | ❌ SDK Crash | 12m 6.30s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_408_gas_balanced] | 9m 27.24s | 14m 44.63s | ❌ SDK Crash | 12m 5.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_767_gas_balanced] | 9m 26.07s | 14m 35.55s | ❌ SDK Crash | 12m 0.81s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1152n1] | 9m 13.80s | 14m 33.76s | ❌ SDK Crash | 11m 53.78s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_60M-blockchain_test-ecrecover] | 8m 34.36s | 25m 24.90s | 1m 21.74s | 11m 47.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_996_gas_balanced] | 8m 42.41s | 14m 29.35s | ❌ SDK Crash | 11m 35.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_32] | 8m 43.11s | 14m 4.00s | ❌ SDK Crash | 11m 23.56s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_64b_exp_512] | 8m 21.40s | 13m 19.37s | ❌ SDK Crash | 10m 50.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_square] | 8m 8.27s | 13m 15.67s | ❌ SDK Crash | 10m 41.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_64b_exp_512] | 8m 0.17s | 12m 57.70s | ❌ SDK Crash | 10m 28.94s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_255] | 8m 1.49s | 12m 14.61s | ❌ SDK Crash | 10m 8.05s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 7m 50.31s | 12m 21.88s | ❌ SDK Crash | 10m 6.10s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g1msm] | 15m 24.30s | 4m 34.14s | ❌ SDK Crash | 9m 59.22s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n3] | 7m 36.36s | 11m 39.47s | ❌ SDK Crash | 9m 37.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n2] | 7m 26.26s | 11m 48.35s | ❌ SDK Crash | 9m 37.31s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_255] | 7m 41.64s | 11m 23.85s | ❌ SDK Crash | 9m 32.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 7m 15.61s | 11m 36.69s | ❌ SDK Crash | 9m 26.15s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_255] | 7m 32.18s | 11m 12.45s | ❌ SDK Crash | 9m 22.32s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_128b_exp_1024] | 6m 45.65s | 10m 57.81s | ❌ SDK Crash | 8m 51.73s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 19m 21.02s | 6m 29.28s | 42.82s | 8m 51.04s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul] | 19m 11.72s | 6m 22.17s | 39.84s | 8m 44.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_128b_exp_1024] | 6m 37.95s | 10m 39.20s | ❌ SDK Crash | 8m 38.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 6m 36.06s | 10m 38.37s | ❌ SDK Crash | 8m 37.21s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 18m 34.43s | 6m 13.87s | 39.79s | 8m 29.36s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n1] | 6m 13.33s | 9m 56.09s | ❌ SDK Crash | 8m 4.71s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_256b_exp_1024] | 6m 16.61s | 9m 45.45s | ❌ SDK Crash | 8m 1.03s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 6m 2.40s | 9m 55.40s | ❌ SDK Crash | 7m 58.90s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_256b_exp_1024] | 6m 1.47s | 9m 45.71s | ❌ SDK Crash | 7m 53.59s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g2msm] | 13m 56.60s | 1m 40.77s | ❌ SDK Crash | 7m 48.69s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_512b_exp_1024] | 5m 35.09s | 8m 43.24s | ❌ SDK Crash | 7m 9.16s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_512b_exp_1024] | 5m 28.30s | 8m 46.24s | ❌ SDK Crash | 7m 7.27s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 15m 58.15s | 2m 6.40s | 2m 14.58s | 6m 46.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_qube] | ❌ SDK Crash | 6m 38.75s | ❌ SDK Crash | 6m 38.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_square] | 3m 40.50s | 5m 59.88s | ❌ SDK Crash | 4m 50.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 4m 18.97s | 6m 36.88s | 3m 28.82s | 4m 48.22s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 7m 53.16s | 5m 30.99s | 58.01s | 4m 47.38s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXP-] | 4m 35.17s | 7m 13.86s | 2m 28.76s | 4m 45.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_two_pairings] | 7m 17.85s | 5m 10.54s | 1m 18.44s | 4m 35.61s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_5_pair] | 7m 25.48s | 5m 6.99s | 1m 9.25s | 4m 33.90s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_4_pair] | 7m 25.89s | 5m 4.78s | 1m 9.05s | 4m 33.24s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_2_pair] | 7m 3.24s | 5m 4.96s | 1m 26.96s | 4m 31.72s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_one_pairing] | 6m 52.89s | 5m 3.30s | 1m 36.33s | 4m 30.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_3_even] | 3m 50.28s | 5m 50.12s | 2m 59.77s | 4m 13.39s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_1024b_exp_1024] | 3m 33.10s | 5m 35.70s | 2m 45.34s | 3m 58.04s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_1024b_exp_1024] | 3m 31.42s | 5m 30.41s | 2m 45.96s | 3m 55.93s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_STATICCALL] | 2m 43.64s | 4m 39.28s | ❌ SDK Crash | 3m 41.46s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_STATICCALL] | 2m 44.14s | 4m 37.37s | ❌ SDK Crash | 3m 40.75s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_CALLCODE] | 2m 40.29s | 4m 34.79s | ❌ SDK Crash | 3m 37.54s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_CALL] | 2m 37.29s | 4m 36.32s | ❌ SDK Crash | 3m 36.80s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test-contract_balance_1] | 2m 50.01s | 4m 21.39s | ❌ SDK Crash | 3m 35.70s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_CALL] | 2m 36.54s | 4m 34.24s | ❌ SDK Crash | 3m 35.39s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PREVRANDAO] | 2m 32.35s | 4m 37.65s | ❌ SDK Crash | 3m 35.00s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty-opcode_REVERT] | 2m 50.03s | 4m 19.13s | ❌ SDK Crash | 3m 34.58s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 2m 34.22s | 4m 30.96s | ❌ SDK Crash | 3m 32.59s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_CALLCODE] | 2m 32.37s | 4m 28.12s | ❌ SDK Crash | 3m 30.24s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test-contract_balance_0] | 2m 38.02s | 4m 20.72s | ❌ SDK Crash | 3m 29.37s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty-opcode_RETURN] | 2m 32.45s | 4m 22.82s | ❌ SDK Crash | 3m 27.63s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 2m 30.20s | 4m 24.87s | ❌ SDK Crash | 3m 27.53s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SIGNEXTEND-] | 2m 40.60s | 4m 11.12s | 2m 56.41s | 3m 16.04s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero-loop] | 2m 24.43s | 4m 6.10s | ❌ SDK Crash | 3m 15.26s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 2m 18.33s | 3m 51.94s | 3m 31.16s | 3m 13.81s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add_infinities] | 2m 20.58s | 3m 51.10s | 3m 25.07s | 3m 12.25s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 2m 18.28s | 3m 51.30s | 3m 25.24s | 3m 11.61s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0 bytes] | 2m 17.94s | 3m 45.30s | 3m 22.23s | 3m 8.49s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0 bytes] | 2m 15.13s | 3m 43.65s | 3m 24.15s | 3m 7.64s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SAR-] | 2m 27.27s | 3m 49.11s | 3m 1.18s | 3m 5.85s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-one-loop] | 2m 7.75s | 3m 56.10s | ❌ SDK Crash | 3m 1.92s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of zero data-opcode_RETURN] | 2m 34.02s | 3m 28.35s | ❌ SDK Crash | 3m 1.18s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of zero data-opcode_REVERT] | 2m 33.92s | 3m 25.84s | ❌ SDK Crash | 2m 59.88s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 1m 52.35s | 3m 24.83s | 3m 32.82s | 2m 56.66s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty] | 1m 51.59s | 3m 30.35s | 3m 27.24s | 2m 56.40s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 1m 53.24s | 3m 15.79s | 3m 11.99s | 2m 47.01s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 1m 52.67s | 3m 11.43s | 3m 12.77s | 2m 45.62s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test-shift_right_SAR] | 2m 7.50s | 3m 24.47s | 2m 36.83s | 2m 42.93s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-0 bytes] | 1m 53.52s | 3m 12.72s | 2m 48.49s | 2m 38.24s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-100 bytes] | 1m 48.20s | 2m 57.77s | 2m 52.51s | 2m 32.82s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SHL-] | 1m 48.96s | 2m 59.80s | 2m 26.03s | 2m 24.93s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH26] | 1m 10.01s | 2m 20.79s | 3m 38.86s | 2m 23.22s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 1m 39.31s | 2m 43.57s | 2m 33.02s | 2m 18.63s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH25] | 1m 7.30s | 2m 20.43s | 3m 27.65s | 2m 18.46s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EQ-] | 1m 23.31s | 2m 33.79s | 2m 57.31s | 2m 18.14s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test-shift_right_SHR] | 1m 44.08s | 2m 46.89s | 2m 15.79s | 2m 15.59s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH24] | 1m 8.12s | 2m 7.53s | 3m 28.70s | 2m 14.78s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH23] | 1m 3.70s | 2m 18.14s | 3m 18.91s | 2m 13.58s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_diff_acc] | 1m 56.41s | 3m 59.00s | 38.80s | 2m 11.40s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH22] | 1m 3.45s | 2m 12.83s | 3m 16.02s | 2m 10.77s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLER] | 1m 20.74s | 2m 8.61s | 2m 58.02s | 2m 9.12s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 1m 45.03s | 2m 29.10s | ❌ SDK Crash | 2m 7.06s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ORIGIN] | 1m 20.16s | 2m 7.17s | 2m 48.54s | 2m 5.29s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_COINBASE] | 1m 19.84s | 2m 7.13s | 2m 48.71s | 2m 5.23s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH21] | 1m 0.23s | 2m 0.24s | 3m 15.00s | 2m 5.16s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SHR-] | 1m 38.53s | 2m 29.90s | 2m 4.63s | 2m 4.35s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 1m 40.61s | 2m 28.05s | ❌ SDK Crash | 2m 4.33s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_b] | 1m 45.02s | 3m 48.62s | 38.03s | 2m 3.89s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ADDRESS] | 1m 19.81s | 2m 5.83s | 2m 45.60s | 2m 3.75s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_diff_acc] | 1m 39.07s | 3m 46.21s | 32.07s | 1m 59.11s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH20] | 1m 0.44s | 1m 53.80s | 3m 2.32s | 1m 58.86s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE new value] | 1m 14.91s | 1m 58.00s | 2m 42.34s | 1m 58.42s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH31] | 1m 17.68s | 2m 39.04s | ❌ SDK Crash | 1m 58.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH30] | 1m 18.30s | 2m 37.73s | ❌ SDK Crash | 1m 58.01s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH19] | 59.78s | 1m 55.78s | 2m 51.53s | 1m 55.70s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_a] | 1m 31.59s | 3m 46.59s | 28.39s | 1m 55.52s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH32] | 1m 16.59s | 2m 34.29s | ❌ SDK Crash | 1m 55.44s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-100 bytes] | 1m 18.81s | 2m 13.89s | 2m 11.24s | 1m 54.65s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_b] | 1m 33.51s | 3m 42.75s | 26.82s | 1m 54.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH29] | 1m 16.50s | 2m 32.23s | ❌ SDK Crash | 1m 54.36s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_1_exp_heavy] | 1m 12.40s | 2m 15.47s | 2m 13.01s | 1m 53.63s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH27] | 1m 18.13s | 2m 27.83s | ❌ SDK Crash | 1m 52.98s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH18] | 59.43s | 1m 45.49s | 2m 49.57s | 1m 51.49s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-six blobs, access latest] | 58.33s | 1m 43.52s | 2m 50.52s | 1m 50.79s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH16] | 57.09s | 1m 52.07s | 2m 42.53s | 1m 50.56s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH28] | 1m 13.91s | 2m 22.01s | ❌ SDK Crash | 1m 47.96s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH15] | 55.54s | 1m 45.88s | 2m 39.50s | 1m 46.97s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 8.53s | 1m 45.73s | 2m 26.16s | 1m 46.81s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-one blob and accessed] | 58.01s | 1m 42.62s | 2m 39.58s | 1m 46.74s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH17] | 56.74s | 1m 40.18s | 2m 42.87s | 1m 46.60s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 9.10s | 1m 44.40s | 2m 20.30s | 1m 44.60s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 1.75s | 1m 46.51s | 2m 22.03s | 1m 43.43s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 1.90s | 1m 44.51s | 2m 23.53s | 1m 43.31s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 4.56s | 1m 44.89s | 2m 19.42s | 1m 42.96s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 3.80s | 1m 44.89s | 2m 19.59s | 1m 42.76s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 2.11s | 1m 45.16s | 2m 20.03s | 1m 42.44s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 3.81s | 1m 44.77s | 2m 18.72s | 1m 42.43s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 7.01s | 1m 46.62s | 2m 13.09s | 1m 42.24s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 3.44s | 1m 44.97s | 2m 17.78s | 1m 42.06s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 2.63s | 1m 44.81s | 2m 18.21s | 1m 41.88s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 1.25s | 1m 44.25s | 2m 20.07s | 1m 41.86s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH14] | 55.32s | 1m 43.50s | 2m 26.68s | 1m 41.83s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 2.54s | 1m 44.75s | 2m 16.71s | 1m 41.33s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 4.00s | 1m 57.60s | 2m 2.15s | 1m 41.25s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH13] | 53.06s | 1m 36.36s | 2m 32.84s | 1m 40.75s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MUL-] | 1m 20.15s | 2m 40.57s | 1m 1.53s | 1m 40.75s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_False] | 1m 17.98s | 3m 21.75s | 20.67s | 1m 40.13s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_False] | 1m 14.45s | 3m 21.33s | 21.65s | 1m 39.14s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_True] | 1m 12.30s | 3m 13.98s | 18.59s | 1m 34.96s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_True] | 1m 12.20s | 3m 12.67s | 18.39s | 1m 34.42s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH12] | 51.61s | 1m 31.89s | 2m 18.00s | 1m 33.83s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 1m 49.33s | 1m 33.71s | 1m 16.47s | 1m 33.17s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-5b] | 1m 35.04s | 1m 29.63s | ❌ SDK Crash | 1m 32.33s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH11] | 50.49s | 1m 29.24s | 2m 13.76s | 1m 31.16s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH8] | 53.41s | 1m 33.18s | 2m 0.32s | 1m 28.97s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH9] | 47.37s | 1m 23.93s | 2m 8.59s | 1m 26.63s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH10] | 48.56s | 1m 26.07s | 2m 2.27s | 1m 25.64s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH7] | 48.76s | 1m 26.35s | 1m 56.24s | 1m 23.78s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | 1m 32.45s | 1m 22.02s | 1m 16.02s | 1m 23.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 49.84s | 1m 39.05s | 1m 38.49s | 1m 22.46s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH6] | 47.41s | 1m 25.05s | 1m 52.28s | 1m 21.58s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 54.87s | 1m 23.50s | 1m 40.26s | 1m 19.54s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 52.49s | 1m 27.18s | 1m 37.95s | 1m 19.20s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | 1m 27.36s | 1m 18.81s | 1m 10.94s | 1m 19.04s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 54.08s | 1m 29.61s | 1m 32.79s | 1m 18.83s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 54.59s | 1m 24.08s | 1m 33.53s | 1m 17.40s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 53.00s | 1m 29.22s | 1m 29.73s | 1m 17.31s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH5] | 46.03s | 1m 22.05s | 1m 43.72s | 1m 17.27s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH4] | 46.41s | 1m 21.73s | 1m 43.64s | 1m 17.26s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 53.33s | 1m 27.92s | 1m 29.75s | 1m 17.00s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 53.94s | 1m 27.69s | 1m 29.28s | 1m 16.97s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 54.44s | 1m 29.11s | 1m 27.01s | 1m 16.85s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 53.62s | 1m 27.20s | 1m 27.85s | 1m 16.22s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 52.65s | 1m 27.20s | 1m 28.62s | 1m 16.16s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 52.14s | 1m 26.47s | 1m 28.37s | 1m 15.66s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 51.71s | 1m 26.46s | 1m 28.75s | 1m 15.64s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BASEFEE] | 47.84s | 1m 28.91s | 1m 29.33s | 1m 15.36s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 51.15s | 1m 26.67s | 1m 28.05s | 1m 15.29s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 50.94s | 1m 26.87s | 1m 27.41s | 1m 15.07s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASPRICE] | 47.04s | 1m 30.55s | 1m 25.19s | 1m 14.26s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 54.49s | 1m 22.49s | 1m 25.48s | 1m 14.15s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BLOBBASEFEE] | 48.49s | 1m 29.17s | 1m 23.08s | 1m 13.58s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_TIMESTAMP] | 47.34s | 1m 28.92s | 1m 24.17s | 1m 13.47s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CHAINID] | 46.68s | 1m 30.02s | 1m 23.52s | 1m 13.41s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH3] | 46.32s | 1m 21.33s | 1m 31.09s | 1m 12.92s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_NUMBER] | 46.88s | 1m 28.09s | 1m 22.52s | 1m 12.49s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_LT-] | 49.38s | 1m 29.29s | 1m 14.89s | 1m 11.18s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GT-] | 47.99s | 1m 28.42s | 1m 16.79s | 1m 11.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 41.33s | 1m 26.03s | 1m 25.17s | 1m 10.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 41.57s | 1m 25.17s | 1m 24.63s | 1m 10.45s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 42.63s | 1m 18.56s | 1m 29.58s | 1m 10.25s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MOD-] | 52.12s | 1m 25.89s | 1m 7.19s | 1m 8.40s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 43.05s | 1m 6.30s | 1m 31.50s | 1m 6.95s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 42.80s | 1m 14.24s | 1m 23.68s | 1m 6.91s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-max code size] | 58.86s | 1m 14.82s | ❌ SDK Crash | 1m 6.84s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP14] | 48.72s | 1m 30.68s | 59.70s | 1m 6.37s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000] | 44.28s | 1m 15.58s | 1m 18.70s | 1m 6.19s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1] | 42.18s | 1m 15.13s | 1m 20.70s | 1m 6.00s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_0] | 42.85s | 1m 15.87s | 1m 19.21s | 1m 5.98s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-0 bytes] | 46.70s | 1m 17.85s | 1m 12.77s | 1m 5.77s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP6] | 47.39s | 1m 29.63s | 59.94s | 1m 5.65s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP5] | 47.86s | 1m 30.71s | 58.25s | 1m 5.61s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP3] | 47.73s | 1m 28.95s | 59.89s | 1m 5.52s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP7] | 48.39s | 1m 29.73s | 58.16s | 1m 5.42s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 43.49s | 1m 15.18s | 1m 17.53s | 1m 5.40s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 45.02s | 1m 16.88s | 1m 14.08s | 1m 5.32s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP11] | 47.40s | 1m 30.39s | 58.16s | 1m 5.31s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SGT-] | 43.24s | 1m 22.30s | 1m 9.93s | 1m 5.15s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 42.16s | 1m 5.64s | 1m 27.66s | 1m 5.15s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP13] | 48.47s | 1m 29.20s | 57.41s | 1m 5.03s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SLT-] | 43.77s | 1m 22.48s | 1m 8.36s | 1m 4.87s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH1] | 44.07s | 1m 15.85s | 1m 14.19s | 1m 4.71s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP12] | 48.45s | 1m 28.95s | 56.47s | 1m 4.62s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP8] | 47.50s | 1m 28.45s | 57.68s | 1m 4.55s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP16] | 47.50s | 1m 29.18s | 56.92s | 1m 4.53s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP1] | 47.08s | 1m 28.81s | 57.72s | 1m 4.53s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP4] | 47.47s | 1m 28.68s | 57.36s | 1m 4.50s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP10] | 47.79s | 1m 28.46s | 57.00s | 1m 4.42s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP2] | 47.49s | 1m 28.53s | 57.18s | 1m 4.40s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP15] | 48.05s | 1m 28.90s | 56.12s | 1m 4.36s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASLIMIT] | 40.57s | 1m 15.52s | 1m 16.56s | 1m 4.22s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH2] | 40.74s | 1m 16.44s | 1m 15.32s | 1m 4.16s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 43.45s | 1m 15.17s | 1m 13.61s | 1m 4.08s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP9] | 47.47s | 1m 28.50s | 55.33s | 1m 3.76s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SUB-] | 47.23s | 1m 23.04s | 1m 0.67s | 1m 3.65s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH0] | 41.50s | 1m 12.65s | 1m 16.61s | 1m 3.59s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | 43.53s | 1m 11.79s | 1m 15.10s | 1m 3.47s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE same value] | 38.48s | 1m 4.69s | 1m 24.99s | 1m 2.72s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ADD-] | 44.91s | 1m 15.16s | 1m 4.12s | 1m 1.40s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value] | 1m 11.04s | 49.30s | 1m 2.12s | 1m 0.82s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | 41.22s | 1m 10.92s | 1m 8.98s | 1m 0.37s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 41.05s | 1m 5.36s | 1m 12.44s | 59.62s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BYTE-] | 42.32s | 1m 11.28s | 1m 4.42s | 59.34s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 1.45s | 56.95s | ❌ SDK Crash | 59.20s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 41.06s | 1m 7.52s | 1m 8.09s | 58.89s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 40.81s | 1m 6.71s | 1m 9.15s | 58.88s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 41.19s | 1m 6.82s | 1m 8.43s | 58.81s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 41.11s | 1m 6.56s | 1m 8.27s | 58.64s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 41.74s | 1m 5.40s | 1m 7.63s | 58.26s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 40.52s | 1m 5.33s | 1m 8.89s | 58.25s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 40.89s | 1m 5.30s | 1m 7.64s | 57.94s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 41.64s | 1m 3.51s | 1m 7.67s | 57.60s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 42.18s | 1m 4.46s | 1m 6.17s | 57.60s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 40.62s | 1m 3.47s | 1m 8.68s | 57.59s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 40.00s | 1m 3.52s | 1m 6.24s | 56.59s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 33.81s | 56.62s | 1m 16.86s | 55.76s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSLOAD] | 1m 11.44s | 43.69s | 51.90s | 55.68s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP7] | 36.04s | 1m 2.98s | 1m 7.59s | 55.53s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-no blobs] | 35.97s | 1m 4.96s | 1m 3.91s | 54.94s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP11] | 35.41s | 1m 4.24s | 1m 5.07s | 54.91s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 36.81s | 55.71s | 1m 11.99s | 54.84s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP2] | 36.35s | 1m 3.12s | 1m 4.87s | 54.78s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-one blob but access non-existent index] | 35.84s | 1m 5.07s | 1m 3.43s | 54.78s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-100 bytes] | 37.16s | 1m 3.02s | 1m 3.91s | 54.69s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP6] | 35.80s | 1m 2.28s | 1m 6.00s | 54.69s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP15] | 36.15s | 1m 3.51s | 1m 2.93s | 54.20s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP4] | 35.92s | 1m 3.69s | 1m 2.68s | 54.09s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP10] | 35.57s | 1m 2.69s | 1m 3.87s | 54.04s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP13] | 35.68s | 1m 2.14s | 1m 4.27s | 54.03s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 37.08s | 1m 6.36s | 58.16s | 53.87s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP16] | 35.57s | 1m 2.31s | 1m 3.50s | 53.79s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 1m 7.13s | 41.30s | 52.64s | 53.69s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP12] | 36.54s | 1m 2.18s | 1m 2.26s | 53.66s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP3] | 35.52s | 1m 1.80s | 1m 3.46s | 53.59s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP5] | 35.80s | 1m 2.34s | 1m 2.55s | 53.56s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 32.99s | 55.36s | 1m 12.00s | 53.45s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP8] | 35.66s | 1m 2.01s | 1m 2.43s | 53.37s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP9] | 35.83s | 1m 2.33s | 1m 1.60s | 53.26s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP14] | 35.62s | 1m 1.90s | 1m 2.16s | 53.23s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 1m 9.18s | 42.67s | 47.32s | 53.06s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-1MiB] | 58.13s | 55.17s | 44.68s | 52.66s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 32.49s | 54.53s | 1m 10.12s | 52.38s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-512] | 32.54s | 51.34s | 1m 12.02s | 51.97s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_OR-] | 35.83s | 1m 4.89s | 55.02s | 51.91s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP1] | 33.45s | 1m 0.33s | 1m 1.65s | 51.81s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 34.61s | 51.81s | 1m 6.54s | 50.99s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_AND-] | 34.78s | 1m 3.39s | 53.08s | 50.41s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_XOR-] | 34.90s | 1m 3.78s | 51.76s | 50.14s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB] | 28.07s | 54.29s | 1m 8.06s | 50.14s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_True] | 32.79s | 56.77s | 1m 0.78s | 50.12s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_BALANCE] | 33.55s | 51.65s | 1m 4.99s | 50.06s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_False] | 33.08s | 57.77s | 59.31s | 50.05s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_BALANCE] | 33.73s | 51.11s | 1m 4.95s | 49.93s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b5b] | 52.07s | 47.62s | ❌ SDK Crash | 49.84s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_True] | 33.23s | 56.82s | 59.03s | 49.70s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_False] | 32.68s | 56.64s | 59.52s | 49.61s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-100 bytes] | 32.77s | 55.80s | 57.57s | 48.71s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 31.34s | 52.82s | 57.93s | 47.36s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 16.93s | 1m 25.34s | 39.24s | 47.17s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-1MiB] | 58.97s | 42.95s | 39.57s | 47.16s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 31.28s | 52.08s | 57.70s | 47.02s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 31.68s | 52.00s | 57.34s | 47.01s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_10000] | 30.65s | 51.28s | 58.69s | 46.87s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 30.47s | 51.53s | 57.87s | 46.63s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 30.33s | 51.33s | 58.04s | 46.56s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_0] | 30.63s | 53.44s | 55.60s | 46.55s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 30.30s | 51.31s | 57.51s | 46.37s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_1000] | 30.44s | 51.41s | 56.80s | 46.21s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-10KiB] | 28.89s | 55.62s | 53.10s | 45.87s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-1MiB] | 55.93s | 52.44s | 26.61s | 44.99s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 28.88s | 51.40s | 52.30s | 44.20s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 58.87s | 31.72s | 41.60s | 44.06s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SMOD-] | 29.08s | 55.55s | 46.45s | 43.69s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 31.16s | 49.87s | 49.87s | 43.63s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 1m 0.01s | 31.17s | 35.05s | 42.08s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value] | 52.44s | 33.30s | 39.03s | 41.59s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 22.04s | 44.30s | 56.28s | 40.87s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_True] | 25.83s | 37.29s | 58.78s | 40.63s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_True] | 24.89s | 37.04s | 56.58s | 39.51s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SLOAD] | 23.63s | 40.51s | 53.46s | 39.20s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 19.28s | 42.49s | 51.91s | 37.90s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-1MiB] | 59.99s | 31.39s | 21.96s | 37.78s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_False] | 26.17s | 37.43s | 45.52s | 36.37s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 14.06s | 47.64s | 47.40s | 36.37s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 19.38s | 34.63s | 54.31s | 36.11s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_True] | 41.56s | 30.35s | 36.00s | 35.97s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 12.61s | 44.40s | 48.80s | 35.27s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_False] | 25.41s | 37.86s | 42.54s | 35.27s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_False] | 25.04s | 36.17s | 43.69s | 34.96s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_True] | 25.26s | 36.80s | 42.68s | 34.91s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b5b] | 35.44s | 33.34s | 35.95s | 34.91s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-max code size] | 12.65s | 44.66s | 46.47s | 34.59s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 44.37s | 24.96s | 33.48s | 34.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_zkevm_worst_case] | 20.42s | 40.07s | 41.08s | 33.86s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-10KiB] | 20.06s | 34.37s | 45.59s | 33.34s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 49.30s | 26.96s | 18.47s | 31.57s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSLOAD] | 28.26s | 27.66s | 36.83s | 30.92s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 20.83s | 35.88s | 34.86s | 30.52s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_100000] | 42.47s | 25.74s | 22.25s | 30.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_example_2] | 17.71s | 34.17s | 35.27s | 29.05s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-5KiB] | 18.33s | 30.02s | 37.05s | 28.46s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 13.88s | 23.64s | 47.19s | 28.23s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-10KiB] | 17.98s | 38.64s | 27.34s | 27.99s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 56.96s | 13.29s | 13.25s | 27.83s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 12.87s | 23.13s | 46.69s | 27.56s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 55.20s | 13.32s | 13.67s | 27.39s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 19.21s | 32.00s | 29.94s | 27.05s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 33.19s | 21.82s | 25.42s | 26.81s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 31.02s | 21.49s | 27.67s | 26.73s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-00] | 20.17s | 28.89s | 29.28s | 26.11s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 17.53s | 27.47s | 31.16s | 25.39s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 15.05s | 21.71s | 38.12s | 24.96s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_2_scalar] | 39.42s | 10.18s | 13.94s | 21.18s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b] | 15.57s | 19.95s | 27.02s | 20.84s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_False] | 23.43s | 17.25s | 21.59s | 20.76s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-10KiB] | 12.86s | 23.74s | 23.11s | 19.90s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 35.97s | 9.85s | 13.29s | 19.71s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 12.77s | 23.00s | 23.27s | 19.68s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_True] | 27.75s | 15.98s | 14.30s | 19.34s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 13.03s | 22.69s | 21.93s | 19.22s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b] | 14.40s | 15.45s | 20.95s | 16.93s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 19.50s | 13.89s | 17.00s | 16.80s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 19.34s | 11.50s | 15.79s | 15.54s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 9.88s | 15.94s | 17.73s | 14.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 8.66s | 12.44s | 17.56s | 12.89s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 8.72s | 12.56s | 15.97s | 12.42s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_True] | 7.25s | 12.02s | 15.07s | 11.45s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_False] | 6.82s | 11.28s | 15.37s | 11.16s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 6.87s | 11.41s | 13.48s | 10.59s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 14.66s | 6.62s | 7.24s | 9.51s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 14.44s | 6.64s | 7.10s | 9.40s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value] | 7.94s | 5.64s | 10.18s | 7.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 5.25s | 7.33s | 10.84s | 7.81s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 5.19s | 7.33s | 10.85s | 7.79s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_RETURN] | 12.15s | 4.84s | 5.89s | 7.63s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_REVERT] | 12.06s | 5.00s | 5.66s | 7.58s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value] | 7.81s | 5.58s | 9.25s | 7.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 4.50s | 5.54s | 11.68s | 7.24s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 4.58s | 5.56s | 10.91s | 7.02s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE] | 6.80s | 5.57s | 8.46s | 6.94s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 5.72s | 4.87s | 9.78s | 6.79s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 4.06s | 5.19s | 9.93s | 6.39s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 5.21s | 4.39s | 8.77s | 6.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 4.00s | 5.22s | 8.97s | 6.06s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_False] | 7.83s | 4.06s | 6.24s | 6.04s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000000] | 9.56s | 3.14s | 5.24s | 5.98s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_2_scalar] | 5.47s | 3.73s | 8.00s | 5.73s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 5.04s | 3.70s | 7.92s | 5.55s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE2] | 5.94s | 3.48s | 7.12s | 5.52s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 5.01s | 3.87s | 7.37s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 3.49s | 4.38s | 8.21s | 5.36s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 3.43s | 4.38s | 8.00s | 5.27s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE] | 5.31s | 3.47s | 6.99s | 5.26s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE2] | 5.84s | 3.19s | 6.66s | 5.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 3.41s | 3.85s | 8.20s | 5.16s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 3.36s | 3.87s | 8.11s | 5.11s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 4.71s | 3.32s | 7.11s | 5.05s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 3.81s | 3.17s | 8.15s | 5.04s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 3.13s | 3.83s | 7.84s | 4.93s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 3.00s | 3.86s | 7.84s | 4.90s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE] | 4.95s | 3.08s | 6.28s | 4.77s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 3.69s | 3.20s | 6.92s | 4.61s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 3.76s | 3.22s | 6.67s | 4.55s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 3.71s | 3.16s | 6.49s | 4.45s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 2.71s | 2.95s | 7.17s | 4.28s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 2.91s | 2.49s | 7.22s | 4.20s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 2.65s | 2.92s | 6.72s | 4.10s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 2.54s | 2.68s | 6.96s | 4.06s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 2.52s | 2.73s | 6.48s | 3.91s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 2.47s | 2.49s | 6.61s | 3.86s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE2] | 3.45s | 1.99s | 5.24s | 3.56s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 2.99s | 0.66s | 4.92s | 2.86s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 2.96s | 0.68s | 4.56s | 2.73s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 1.77s | 0.74s | 5.04s | 2.52s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 3.00s | 0.69s | 3.82s | 2.50s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 3.06s | 0.63s | 3.72s | 2.47s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 3.04s | 0.69s | 3.58s | 2.44s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 2.88s | 0.73s | 3.67s | 2.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE2] | 3.12s | 0.66s | 3.41s | 2.40s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 1.76s | 0.74s | 4.69s | 2.40s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 2.99s | 0.67s | 3.52s | 2.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 1.69s | 0.71s | 4.61s | 2.34s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 2.08s | 0.54s | 4.33s | 2.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 1.67s | 0.71s | 4.55s | 2.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 1.70s | 0.59s | 4.54s | 2.27s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 2.08s | 0.59s | 3.87s | 2.18s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 1.66s | 0.57s | 4.28s | 2.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 1.81s | 0.73s | 3.98s | 2.17s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 2.02s | 0.60s | 3.89s | 2.17s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE] | 1.98s | 0.57s | 3.95s | 2.17s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 2.10s | 0.55s | 3.81s | 2.15s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 2.01s | 0.54s | 3.89s | 2.15s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 1.76s | 0.74s | 3.90s | 2.13s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 2.11s | 0.54s | 3.71s | 2.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 2.10s | 0.65s | 3.60s | 2.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 1.78s | 0.73s | 3.78s | 2.10s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 1.66s | 0.73s | 3.89s | 2.09s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 1.71s | 0.55s | 4.01s | 2.09s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 1.68s | 0.55s | 4.04s | 2.09s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 1.68s | 0.54s | 4.03s | 2.09s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 1.70s | 0.72s | 3.78s | 2.07s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 1.70s | 0.64s | 3.80s | 2.05s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 1.67s | 0.54s | 3.93s | 2.05s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 1.69s | 0.58s | 3.82s | 2.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 1.74s | 0.58s | 3.77s | 2.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 1.71s | 0.72s | 3.67s | 2.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 1.67s | 0.55s | 3.87s | 2.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 1.65s | 0.74s | 3.56s | 1.98s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 1.69s | 0.71s | 3.53s | 1.98s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 1.67s | 0.71s | 3.47s | 1.95s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 1.65s | 0.72s | 3.46s | 1.94s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 1.66s | 0.69s | 3.46s | 1.94s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 1.67s | 0.55s | 3.57s | 1.93s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 1.71s | 0.56s | 3.52s | 1.93s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 1.70s | 0.54s | 3.55s | 1.93s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 1.66s | 0.55s | 3.54s | 1.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 1.66s | 0.54s | 3.54s | 1.91s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair] | 1.23s | 0.71s | 3.79s | 1.91s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 1.65s | 0.54s | 3.47s | 1.89s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 1.66s | 0.55s | 3.44s | 1.88s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 1.67s | 0.54s | 3.41s | 1.87s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_zero_input] | 1.20s | 0.68s | 3.69s | 1.85s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 1.65s | 0.55s | 3.34s | 1.85s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 1.68s | 0.54s | 3.29s | 1.84s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 1.66s | 0.55s | 3.31s | 1.84s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 1.73s | 0.55s | 3.22s | 1.84s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 1.68s | 0.54s | 3.27s | 1.83s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 1.65s | 0.55s | 3.27s | 1.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 1.66s | 0.55s | 3.24s | 1.81s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair_empty] | 0.95s | 0.21s | 3.74s | 1.63s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 0.87s | 0.09s | 3.61s | 1.52s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_3_pair] | 0.98s | 0.18s | 3.15s | 1.44s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_2_sets] | 0.95s | 0.19s | 3.15s | 1.43s |

## Summary

**Total unique test cases:** 537

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| risc0-v3.0.4 | 537 | 535 | 2 | 0 |
| sp1-v5.2.3 | 537 | 537 | 0 | 0 |
| zisk-v0.14.0 | 537 | 395 | 142 | 0 |

---

## reth


## Execution Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | openvm-v1.4.1 | risc0-v3.0.4 | sp1-v5.2.3 | zisk-v0.14.0 | Avg |
|-----------|-----------|-----------|-----------|-----------|----------|
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_qube] | 17m 33.94s | 1h 19m 8.92s | 2h 18m 11.94s | ❌ SDK Crash | 1h 18m 18.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_qube] | 17m 30.11s | 1h 17m 6.54s | 2h 10m 2.18s | ❌ SDK Crash | 1h 14m 52.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_square] | 15m 58.65s | 1h 12m 59.11s | 2h 4m 35.36s | ❌ SDK Crash | 1h 11m 11.04s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1024_exp_2] | 16m 32.38s | 1h 11m 52.43s | 2h 2m 43.22s | ❌ SDK Crash | 1h 10m 22.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_square] | 16m 51.13s | 1h 11m 6.19s | 1h 59m 59.22s | ❌ SDK Crash | 1h 9m 18.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1045_gas_base_heavy] | 15m 54.85s | 1h 9m 26.19s | 1h 58m 57.68s | ❌ SDK Crash | 1h 8m 6.24s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_867_gas_base_heavy] | 16m 14.82s | 1h 9m 22.66s | 1h 56m 58.81s | ❌ SDK Crash | 1h 7m 32.10s |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_60M-blockchain_test-point_evaluation] | 19m 28.68s | 1h 5m 51.75s | 1h 55m 48.79s | ❌ SDK Crash | 1h 7m 3.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_800_gas_base_heavy] | 15m 17.09s | 1h 7m 4.15s | 1h 57m 51.64s | ❌ SDK Crash | 1h 6m 44.29s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_qube] | 14m 35.44s | 1h 6m 42.48s | 1h 54m 45.47s | ❌ SDK Crash | 1h 5m 21.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_616_gas_base_heavy] | 14m 45.79s | 1h 4m 49.84s | 1h 51m 23.95s | ❌ SDK Crash | 1h 3m 39.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_408_gas_base_heavy] | 13m 57.91s | 1h 2m 10.69s | 1h 47m 17.57s | ❌ SDK Crash | 1h 1m 8.72s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_264_exp_2] | 13m 35.83s | 1h 0m 4.38s | 1h 44m 48.58s | ❌ SDK Crash | 59m 29.59s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_square] | 13m 28.02s | 1h 1m 59.38s | 1h 42m 23.19s | ❌ SDK Crash | 59m 16.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_256_exp_2] | 13m 26.89s | 59m 3.83s | 1h 40m 53.76s | ❌ SDK Crash | 57m 48.16s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_base_heavy] | 11m 17.17s | 49m 44.18s | 1h 24m 37.46s | ❌ SDK Crash | 48m 32.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_8b_exp_896] | 10m 26.98s | 44m 23.28s | 1h 10m 32.24s | ❌ SDK Crash | 41m 47.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_8_exp_896] | 10m 13.49s | 43m 47.41s | 1h 9m 12.25s | ❌ SDK Crash | 41m 4.39s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_298_gas_exp_heavy] | 10m 15.26s | 43m 26.65s | 1h 8m 54.72s | ❌ SDK Crash | 40m 52.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_1_exp_heavy] | 9m 36.74s | 41m 19.73s | 1h 6m 26.41s | ❌ SDK Crash | 39m 7.63s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_215_gas_exp_heavy] | 9m 57.45s | 39m 35.79s | 1h 2m 37.00s | ❌ SDK Crash | 37m 23.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_8_exp_648] | 9m 19.78s | 39m 36.34s | 1h 2m 56.63s | ❌ SDK Crash | 37m 17.58s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_exp_heavy] | 9m 4.66s | 39m 25.52s | 1h 2m 34.80s | ❌ SDK Crash | 37m 1.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_3_even] | 8m 1.59s | 30m 22.68s | 56m 6.24s | ❌ SDK Crash | 31m 30.17s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_qube] | 6m 6.71s | 27m 32.90s | 44m 1.39s | ❌ SDK Crash | 25m 53.67s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_800_gas_exp_heavy] | 6m 37.90s | 26m 30.17s | 42m 7.04s | ❌ SDK Crash | 25m 5.03s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_852_gas_exp_heavy] | 6m 44.21s | 26m 23.36s | 41m 11.76s | ❌ SDK Crash | 24m 46.44s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_pairing_check] | 6m 40.47s | 26m 47.94s | 40m 15.00s | ❌ SDK Crash | 24m 34.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_600_gas_exp_heavy] | 6m 50.28s | 25m 24.79s | 40m 35.67s | ❌ SDK Crash | 24m 16.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_square] | 5m 43.76s | 25m 29.24s | 41m 14.62s | ❌ SDK Crash | 24m 9.20s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_16b_exp_320] | 6m 14.78s | 25m 19.18s | 39m 36.68s | ❌ SDK Crash | 23m 43.54s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_fp_to_g1] | 8m 53.39s | 18m 10.25s | 43m 35.25s | ❌ SDK Crash | 23m 32.96s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_2] | 6m 6.18s | 23m 49.62s | 37m 40.25s | ❌ SDK Crash | 22m 32.02s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_400_gas_exp_heavy] | 6m 0.70s | 23m 48.22s | 37m 29.43s | ❌ SDK Crash | 22m 26.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_2_even] | 5m 43.40s | 22m 52.62s | 36m 9.61s | ❌ SDK Crash | 21m 35.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 5m 40.72s | 22m 44.63s | 36m 17.70s | ❌ SDK Crash | 21m 34.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_marius_1_even] | 4m 59.03s | 20m 5.37s | 32m 16.95s | ❌ SDK Crash | 19m 7.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_765_gas_exp_heavy] | 4m 50.63s | 20m 12.07s | 31m 43.66s | ❌ SDK Crash | 18m 55.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_24b_exp_168] | 4m 45.96s | 19m 29.57s | 31m 22.97s | ❌ SDK Crash | 18m 32.83s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_3] | 4m 37.78s | 18m 42.27s | 30m 28.27s | ❌ SDK Crash | 17m 56.11s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_256] | 4m 36.83s | 18m 37.97s | 29m 31.58s | ❌ SDK Crash | 17m 35.46s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_fp_to_g2] | 5m 49.48s | 15m 24.84s | 30m 56.04s | ❌ SDK Crash | 17m 23.46s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_256] | 4m 20.15s | 18m 26.44s | 28m 55.57s | ❌ SDK Crash | 17m 14.05s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_example_1] | 4m 19.22s | 18m 13.49s | 28m 47.43s | ❌ SDK Crash | 17m 6.71s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1360_gas_balanced] | 4m 15.47s | 17m 59.41s | 28m 54.38s | ❌ SDK Crash | 17m 3.09s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 4m 23.44s | 17m 39.19s | 28m 41.19s | ❌ SDK Crash | 16m 54.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_zkevm_worst_case] | 4m 28.43s | 17m 17.25s | 27m 46.50s | ❌ SDK Crash | 16m 30.73s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_96] | 4m 3.84s | 17m 8.69s | 27m 52.45s | ❌ SDK Crash | 16m 21.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_128] | 4m 1.95s | 17m 26.65s | 27m 34.60s | ❌ SDK Crash | 16m 21.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_677_gas_base_heavy] | 4m 1.95s | 16m 58.39s | 27m 34.75s | ❌ SDK Crash | 16m 11.70s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_example_2] | 3m 59.84s | 16m 44.89s | 27m 10.86s | ❌ SDK Crash | 15m 58.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_8] | 4m 10.77s | 16m 43.07s | 26m 48.76s | ❌ SDK Crash | 15m 54.20s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_96] | 4m 2.52s | 16m 45.02s | 26m 48.33s | ❌ SDK Crash | 15m 51.96s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_4] | 3m 58.31s | 16m 31.70s | 26m 18.11s | ❌ SDK Crash | 15m 36.04s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_65] | 4m 0.56s | 16m 5.08s | 25m 57.33s | ❌ SDK Crash | 15m 20.99s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g2add] | 4m 44.66s | 15m 2.79s | 25m 41.93s | ❌ SDK Crash | 15m 9.79s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_60M-blockchain_test-ecrecover] | 25m 46.14s | 8m 7.80s | 25m 22.26s | 1m 17.43s | 15m 8.40s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 3m 59.27s | 15m 48.27s | 24m 54.87s | ❌ SDK Crash | 14m 54.14s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_600_gas_balanced] | 3m 34.00s | 15m 24.29s | 25m 8.74s | ❌ SDK Crash | 14m 42.34s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_408_gas_balanced] | 3m 29.51s | 15m 3.49s | 25m 30.14s | ❌ SDK Crash | 14m 41.05s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1360n1] | 3m 40.30s | 15m 36.78s | 24m 33.20s | ❌ SDK Crash | 14m 36.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_64] | 3m 39.89s | 15m 28.02s | 24m 41.79s | ❌ SDK Crash | 14m 36.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_64b_exp_512] | 3m 28.51s | 15m 6.55s | 24m 36.44s | ❌ SDK Crash | 14m 23.83s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_64b_exp_512] | 3m 28.44s | 15m 20.85s | 24m 16.37s | ❌ SDK Crash | 14m 21.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_767_gas_balanced] | 3m 29.74s | 14m 44.34s | 24m 18.31s | ❌ SDK Crash | 14m 10.80s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_996_gas_balanced] | 3m 24.53s | 15m 7.66s | 23m 59.94s | ❌ SDK Crash | 14m 10.71s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_40] | 3m 49.51s | 14m 43.36s | 23m 58.37s | ❌ SDK Crash | 14m 10.41s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_60M-blockchain_test-blake2f] | 4m 24.82s | 16m 46.04s | 21m 11.75s | ❌ SDK Crash | 14m 7.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_balanced] | 3m 41.00s | 14m 28.82s | 23m 47.13s | ❌ SDK Crash | 13m 58.98s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g1add] | 4m 34.19s | 12m 13.72s | 25m 5.91s | ❌ SDK Crash | 13m 57.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1360n2] | 3m 23.07s | 14m 20.71s | 23m 30.89s | ❌ SDK Crash | 13m 44.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_128b_exp_1024] | 3m 16.43s | 14m 2.91s | 22m 26.99s | ❌ SDK Crash | 13m 15.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1349n1] | 3m 20.39s | 14m 4.00s | 22m 10.84s | ❌ SDK Crash | 13m 11.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_208_gas_balanced] | 3m 19.98s | 13m 49.52s | 22m 23.55s | ❌ SDK Crash | 13m 11.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_40] | 3m 33.57s | 13m 48.13s | 22m 9.19s | ❌ SDK Crash | 13m 10.30s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_128b_exp_1024] | 3m 14.20s | 13m 44.17s | 22m 17.39s | ❌ SDK Crash | 13m 5.25s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g1msm] | 4m 26.31s | ❌ SDK Crash | 21m 26.39s | ❌ SDK Crash | 12m 56.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_36] | 3m 16.10s | 13m 24.79s | 21m 52.66s | ❌ SDK Crash | 12m 51.18s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_1_even] | 3m 12.29s | 13m 38.52s | 21m 29.88s | ❌ SDK Crash | 12m 46.90s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_256b_exp_1024] | 2m 54.69s | 13m 5.18s | 21m 32.76s | ❌ SDK Crash | 12m 30.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_256b_exp_1024] | 2m 55.31s | 13m 10.72s | 21m 24.47s | ❌ SDK Crash | 12m 30.17s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_cover_windows] | 3m 18.04s | 13m 5.80s | 20m 35.80s | ❌ SDK Crash | 12m 19.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_512b_exp_1024] | 2m 48.48s | 12m 35.68s | 20m 35.01s | ❌ SDK Crash | 11m 59.73s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_512b_exp_1024] | 2m 48.05s | 12m 30.35s | 20m 32.33s | ❌ SDK Crash | 11m 56.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 2m 42.38s | 12m 49.34s | 19m 35.74s | ❌ SDK Crash | 11m 42.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 2m 54.96s | 12m 19.24s | 19m 7.91s | ❌ SDK Crash | 11m 27.37s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_1024b_exp_1024] | 2m 39.15s | 11m 59.13s | 19m 34.73s | ❌ SDK Crash | 11m 24.34s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_1024b_exp_1024] | 2m 38.32s | 11m 57.52s | 19m 34.21s | ❌ SDK Crash | 11m 23.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 2m 35.94s | 12m 12.83s | 18m 27.79s | ❌ SDK Crash | 11m 5.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_32] | 2m 50.74s | 11m 32.30s | 18m 45.94s | ❌ SDK Crash | 11m 3.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 2m 34.61s | 11m 40.86s | 17m 51.64s | ❌ SDK Crash | 10m 42.37s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 2m 30.88s | 11m 19.27s | 17m 52.33s | ❌ SDK Crash | 10m 34.16s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n3] | 2m 24.10s | 9m 54.02s | 16m 7.13s | ❌ SDK Crash | 9m 28.42s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n2] | 2m 33.27s | 9m 52.81s | 15m 44.24s | ❌ SDK Crash | 9m 23.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1152n1] | 2m 15.81s | 9m 43.77s | 15m 31.53s | ❌ SDK Crash | 9m 10.37s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g2msm] | 2m 32.09s | ❌ SDK Crash | 14m 22.72s | ❌ SDK Crash | 8m 27.40s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_qube] | 2m 4.44s | 8m 51.63s | 14m 14.17s | ❌ SDK Crash | 8m 23.42s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add] | 3m 27.90s | 1m 40.05s | 19m 0.09s | ❌ SDK Crash | 8m 2.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_square] | 1m 58.25s | 8m 24.24s | 13m 4.84s | ❌ SDK Crash | 7m 49.11s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n1] | 1m 49.79s | 7m 37.01s | 12m 22.79s | ❌ SDK Crash | 7m 16.53s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_191] | 1m 47.95s | 7m 20.41s | 11m 3.83s | ❌ SDK Crash | 6m 44.06s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_255] | 1m 50.84s | 7m 9.34s | 10m 41.30s | ❌ SDK Crash | 6m 33.82s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul] | 6m 44.87s | 6m 34.01s | 11m 20.43s | 37.02s | 6m 19.08s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLCODE] | ❌ SDK Crash | 7m 14.24s | 5m 15.03s | ❌ SDK Crash | 6m 14.64s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODEHASH] | ❌ SDK Crash | 7m 2.69s | 5m 18.51s | ❌ SDK Crash | 6m 10.60s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 6m 16.50s | 6m 30.62s | 11m 16.88s | 36.28s | 6m 10.07s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 6m 10.60s | 6m 32.07s | 11m 16.42s | 37.25s | 6m 9.09s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DELEGATECALL] | ❌ SDK Crash | 6m 52.36s | 5m 18.10s | ❌ SDK Crash | 6m 5.23s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALL] | ❌ SDK Crash | 7m 4.15s | 5m 3.91s | ❌ SDK Crash | 6m 4.03s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_STATICCALL] | ❌ SDK Crash | 7m 0.38s | 5m 0.73s | ❌ SDK Crash | 6m 0.55s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODESIZE] | ❌ SDK Crash | 6m 43.46s | 4m 55.27s | ❌ SDK Crash | 5m 49.36s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test-contract_balance_0] | 1m 33.47s | 6m 6.16s | 9m 28.85s | ❌ SDK Crash | 5m 42.82s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test-contract_balance_1] | 1m 34.60s | 5m 57.75s | 9m 30.65s | ❌ SDK Crash | 5m 41.00s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODECOPY] | ❌ SDK Crash | 6m 33.99s | 4m 45.06s | ❌ SDK Crash | 5m 39.53s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_191] | 1m 23.09s | 5m 21.18s | 7m 41.18s | ❌ SDK Crash | 4m 48.48s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_127] | 1m 17.82s | 5m 3.60s | 7m 40.66s | ❌ SDK Crash | 4m 40.69s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_191] | 1m 20.00s | 5m 5.93s | 7m 22.52s | ❌ SDK Crash | 4m 36.15s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SDIV-1] | 1m 25.73s | 4m 53.94s | 7m 9.50s | ❌ SDK Crash | 4m 29.73s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SDIV-0] | 1m 25.62s | 4m 55.18s | 7m 6.51s | ❌ SDK Crash | 4m 29.10s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 4m 4.27s | 7m 8.13s | 5m 46.51s | 57.46s | 4m 29.09s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_5_pair] | 4m 13.47s | 6m 47.27s | 5m 18.37s | 1m 5.27s | 4m 21.10s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_4_pair] | 3m 46.03s | 7m 4.78s | 5m 17.76s | 1m 8.18s | 4m 19.19s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_2_pair] | 3m 45.32s | 6m 32.33s | 5m 19.52s | 1m 16.57s | 4m 13.43s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_two_pairings] | 3m 44.93s | 6m 29.86s | 5m 16.58s | 1m 15.81s | 4m 11.79s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_one_pairing] | 3m 53.67s | 6m 9.83s | 5m 16.90s | 1m 23.45s | 4m 10.96s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DIV-0] | 1m 11.25s | 4m 16.64s | 6m 7.80s | ❌ SDK Crash | 3m 51.90s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_255] | 1m 7.48s | 4m 0.39s | 5m 44.50s | ❌ SDK Crash | 3m 37.46s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DIV-1] | 1m 8.70s | 4m 0.31s | 5m 42.03s | 3m 37.44s | 3m 37.12s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_63] | 55.90s | 3m 51.68s | 5m 54.88s | ❌ SDK Crash | 3m 34.15s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_255] | 1m 1.20s | 3m 51.26s | 5m 30.83s | 3m 44.99s | 3m 32.07s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_127] | 1m 4.17s | 3m 50.54s | 5m 52.99s | 3m 15.01s | 3m 30.68s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_191] | 58.46s | 3m 37.66s | 5m 21.98s | 3m 38.14s | 3m 24.06s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_127] | 59.23s | 3m 43.47s | 5m 26.86s | 3m 0.41s | 3m 17.49s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add_1_2] | 4m 11.14s | 1m 39.98s | 3m 46.62s | ❌ SDK Crash | 3m 12.58s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_255] | 52.05s | 3m 4.08s | 4m 29.60s | 3m 25.25s | 2m 57.74s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_127] | 47.19s | 2m 57.93s | 4m 12.30s | 2m 47.70s | 2m 41.28s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 5.01s | 3m 36.66s | 6m 32.89s | 8.68s | 2m 35.81s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_63] | 37.73s | 2m 40.51s | 3m 53.51s | 2m 38.64s | 2m 27.60s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_63] | 34.55s | 2m 28.67s | 3m 35.59s | 2m 25.06s | 2m 15.97s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PREVRANDAO] | 28.19s | 1m 58.50s | 4m 12.96s | ❌ SDK Crash | 2m 13.22s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty-opcode_REVERT] | 29.37s | 1m 43.67s | 2m 55.56s | 3m 23.82s | 2m 8.11s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero-loop] | 21.11s | 1m 36.85s | 3m 6.90s | 2m 55.22s | 2m 0.02s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_STATICCALL] | 26.54s | 1m 35.84s | 2m 42.20s | 3m 8.99s | 1m 58.39s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_63] | 29.01s | 1m 57.25s | 2m 57.00s | 2m 26.22s | 1m 57.37s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-one-loop] | 21.14s | 1m 34.03s | 2m 56.55s | 2m 57.27s | 1m 57.25s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_CALL] | 26.15s | 1m 34.22s | 2m 43.28s | 3m 4.85s | 1m 57.13s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP5] | 19.18s | 1m 39.09s | 2m 53.59s | 2m 55.37s | 1m 56.81s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP12] | 20.52s | 1m 34.05s | 2m 56.89s | 2m 54.46s | 1m 56.48s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty-opcode_RETURN] | 27.57s | 1m 35.04s | 2m 38.37s | 3m 2.91s | 1m 55.97s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP7] | 19.38s | 1m 33.76s | 2m 55.84s | 2m 53.90s | 1m 55.72s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP16] | 19.09s | 1m 33.71s | 2m 55.62s | 2m 54.01s | 1m 55.61s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP10] | 19.08s | 1m 33.40s | 2m 56.09s | 2m 53.63s | 1m 55.55s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP13] | 19.38s | 1m 33.27s | 2m 58.03s | 2m 51.11s | 1m 55.44s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP15] | 19.18s | 1m 33.89s | 2m 57.38s | 2m 51.08s | 1m 55.38s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP4] | 20.47s | 1m 32.11s | 2m 52.25s | 2m 56.52s | 1m 55.34s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_CALLCODE] | 26.00s | 1m 32.82s | 2m 38.89s | 3m 2.83s | 1m 55.14s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP2] | 19.18s | 1m 32.85s | 2m 53.19s | 2m 52.53s | 1m 54.44s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP11] | 20.37s | 1m 33.26s | 2m 52.18s | 2m 51.51s | 1m 54.33s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP14] | 19.45s | 1m 30.88s | 2m 57.17s | 2m 49.45s | 1m 54.24s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP6] | 20.29s | 1m 32.80s | 2m 52.47s | 2m 50.42s | 1m 54.00s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP8] | 19.29s | 1m 32.21s | 2m 53.07s | 2m 50.34s | 1m 53.73s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP9] | 19.20s | 1m 32.32s | 2m 52.17s | 2m 50.62s | 1m 53.58s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP1] | 19.20s | 1m 33.47s | 2m 50.22s | 2m 51.38s | 1m 53.57s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ADDRESS] | 19.50s | 1m 32.34s | 2m 41.90s | 3m 0.23s | 1m 53.49s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP3] | 19.35s | 1m 31.38s | 2m 52.66s | 2m 50.09s | 1m 53.37s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH30] | 15.21s | 1m 9.72s | 2m 40.92s | 3m 26.55s | 1m 53.10s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ORIGIN] | 19.51s | 1m 27.88s | 2m 40.40s | 2m 57.15s | 1m 51.24s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_COINBASE] | 20.42s | 1m 26.80s | 2m 41.94s | 2m 54.80s | 1m 50.99s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLER] | 19.48s | 1m 28.25s | 2m 42.98s | 2m 51.19s | 1m 50.48s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH28] | 15.43s | 1m 5.42s | 2m 29.11s | 3m 28.15s | 1m 49.53s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH29] | 14.96s | 1m 6.59s | 2m 31.38s | 3m 19.23s | 1m 48.04s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SGT-] | 18.88s | 1m 19.55s | 2m 37.13s | 2m 47.64s | 1m 45.80s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXP-] | 33.50s | 2m 15.58s | 3m 15.36s | 57.61s | 1m 45.51s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH27] | 14.59s | 1m 5.35s | 2m 24.92s | 3m 16.92s | 1m 45.45s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_diff_acc] | 1m 53.14s | 46.58s | 3m 56.43s | 22.25s | 1m 44.60s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 23.20s | 1m 22.44s | 2m 19.87s | 2m 47.16s | 1m 43.17s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_CALL] | 21.99s | 1m 20.38s | 2m 22.90s | 2m 41.70s | 1m 41.74s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty] | 18.12s | 1m 19.98s | 2m 45.15s | 2m 22.63s | 1m 41.47s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_STATICCALL] | 23.03s | 1m 20.12s | 2m 16.32s | 2m 45.54s | 1m 41.25s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH26] | 15.35s | 1m 2.53s | 2m 15.80s | 3m 9.72s | 1m 40.85s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_diff_acc] | 1m 52.26s | 41.34s | 3m 45.24s | 18.94s | 1m 39.44s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_b] | 1m 46.35s | 42.75s | 3m 49.61s | 18.70s | 1m 39.35s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_CALLCODE] | 22.70s | 1m 19.12s | 2m 16.70s | 2m 36.55s | 1m 38.77s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH25] | 13.82s | 1m 4.08s | 2m 13.31s | 3m 0.40s | 1m 37.90s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EQ-] | 17.08s | 1m 15.35s | 2m 19.86s | 2m 36.41s | 1m 37.18s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_b] | 1m 47.45s | 39.04s | 3m 46.55s | 14.65s | 1m 36.92s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH24] | 13.41s | 59.06s | 2m 12.71s | 2m 58.06s | 1m 35.81s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_a] | 1m 45.70s | 38.33s | 3m 42.93s | 14.40s | 1m 35.34s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 15.87s | 1m 11.96s | 2m 12.24s | 2m 36.46s | 1m 34.13s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH23] | 12.89s | 55.26s | 2m 17.25s | 2m 45.84s | 1m 32.81s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH22] | 12.30s | 55.98s | 2m 14.21s | 2m 36.50s | 1m 29.75s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SMOD-] | 17.74s | 1m 12.28s | 2m 12.98s | 2m 13.25s | 1m 29.06s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of zero data-opcode_REVERT] | 19.20s | 1m 9.21s | 2m 0.72s | 2m 21.94s | 1m 27.77s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 19.65s | 1m 10.92s | 1m 59.67s | 2m 18.17s | 1m 27.10s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH21] | 11.88s | 53.99s | 2m 0.73s | 2m 34.52s | 1m 25.28s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH31] | 15.68s | 1m 8.04s | 2m 45.24s | ❌ SDK Crash | 1m 22.99s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH20] | 11.01s | 51.90s | 1m 57.43s | 2m 31.19s | 1m 22.88s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH32] | 17.00s | 1m 10.73s | 2m 39.96s | ❌ SDK Crash | 1m 22.56s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE new value] | 18.30s | 1m 9.28s | 1m 55.39s | 2m 3.44s | 1m 21.60s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH19] | 10.96s | 50.06s | 1m 58.65s | 2m 26.18s | 1m 21.46s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SAR-] | 18.60s | 1m 18.22s | 2m 14.56s | 1m 32.72s | 1m 21.02s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add_infinities] | 15.83s | 50.64s | 1m 28.90s | 2m 44.28s | 1m 19.91s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BLOBBASEFEE] | 14.30s | 1m 7.03s | 2m 11.87s | 1m 45.93s | 1m 19.78s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-six blobs, access latest] | 12.77s | 54.38s | 1m 44.22s | 2m 27.31s | 1m 19.67s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-one blob and accessed] | 12.70s | 53.46s | 1m 42.18s | 2m 22.80s | 1m 17.78s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of zero data-opcode_RETURN] | 17.29s | 1m 3.07s | 1m 49.29s | 1m 59.98s | 1m 17.41s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASPRICE] | 14.56s | 1m 5.20s | 2m 5.74s | 1m 40.30s | 1m 16.45s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test-shift_right_SAR] | 16.62s | 1m 14.47s | 2m 8.37s | 1m 26.22s | 1m 16.42s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH18] | 10.01s | 48.40s | 1m 46.41s | 2m 16.55s | 1m 15.34s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MOD-] | 13.00s | 56.31s | 1m 45.55s | 1m 58.86s | 1m 13.43s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH17] | 10.21s | 46.63s | 1m 42.38s | 2m 11.92s | 1m 12.78s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH16] | 10.37s | 46.45s | 1m 43.50s | 2m 7.37s | 1m 11.92s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH15] | 10.68s | 44.94s | 1m 48.75s | 2m 0.12s | 1m 11.12s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH14] | 9.50s | 45.11s | 1m 43.67s | 2m 5.97s | 1m 11.06s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test-shift_right_SHR] | 15.40s | 1m 6.94s | 1m 55.76s | 1m 16.91s | 1m 8.75s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SHR-] | 15.03s | 1m 7.67s | 1m 53.56s | 1m 17.32s | 1m 8.39s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SHL-] | 15.00s | 1m 7.00s | 1m 52.20s | 1m 14.95s | 1m 7.29s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 11.80s | 48.96s | 2m 3.06s | 1m 24.74s | 1m 7.14s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_False] | 3.72s | 1m 5.96s | 2m 59.70s | 19.03s | 1m 7.10s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_True] | 3.50s | 1m 4.30s | 2m 57.33s | 17.71s | 1m 5.71s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_False] | 3.64s | 1m 4.58s | 2m 56.37s | 17.21s | 1m 5.45s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 14.29s | 53.04s | 1m 29.44s | 1m 42.77s | 1m 4.88s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_True] | 3.74s | 1m 3.12s | 2m 54.44s | 16.41s | 1m 4.42s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 14.71s | 59.99s | 1m 40.02s | 1m 22.26s | 1m 4.24s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-0 bytes] | 13.64s | 58.86s | 1m 39.92s | 1m 23.82s | 1m 4.06s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH13] | 9.45s | 43.65s | 1m 27.97s | 1m 55.11s | 1m 4.05s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_False] | 13.18s | 57.37s | 1m 22.26s | 1m 41.47s | 1m 3.57s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 14.68s | 59.36s | 1m 42.14s | 1m 17.82s | 1m 3.50s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 10.72s | 48.93s | 1m 17.05s | 1m 56.86s | 1m 3.39s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 10.71s | 48.28s | 1m 16.52s | 1m 57.07s | 1m 3.15s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 11.53s | 48.63s | 1m 16.83s | 1m 54.69s | 1m 2.92s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 10.93s | 48.37s | 1m 20.55s | 1m 51.73s | 1m 2.90s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 11.47s | 47.87s | 1m 16.58s | 1m 55.49s | 1m 2.85s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 11.37s | 48.33s | 1m 16.97s | 1m 54.66s | 1m 2.83s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_TIMESTAMP] | 11.83s | 54.42s | 1m 40.01s | 1m 24.79s | 1m 2.76s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 11.03s | 47.88s | 1m 16.90s | 1m 55.12s | 1m 2.73s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 10.82s | 47.70s | 1m 17.46s | 1m 54.29s | 1m 2.57s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 11.36s | 48.22s | 1m 15.92s | 1m 54.60s | 1m 2.52s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 10.84s | 47.75s | 1m 16.64s | 1m 54.63s | 1m 2.47s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 0.95s | 1m 51.09s | 1m 10.48s | 1m 7.25s | 1m 2.44s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 10.90s | 47.86s | 1m 16.24s | 1m 54.32s | 1m 2.33s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_True] | 12.92s | 56.69s | 1m 24.89s | 1m 34.78s | 1m 2.32s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_NUMBER] | 11.69s | 54.46s | 1m 38.50s | 1m 24.36s | 1m 2.25s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 10.78s | 47.84s | 1m 16.88s | 1m 53.41s | 1m 2.23s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 11.77s | 49.68s | 1m 40.34s | 1m 25.29s | 1m 1.77s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 11.30s | 47.89s | 1m 30.20s | 1m 36.07s | 1m 1.36s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 11.78s | 48.26s | 1m 42.91s | 1m 21.71s | 1m 1.16s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 11.75s | 48.80s | 1m 39.32s | 1m 24.74s | 1m 1.15s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BASEFEE] | 11.51s | 49.79s | 1m 35.63s | 1m 27.42s | 1m 1.09s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 11.81s | 48.57s | 1m 39.40s | 1m 24.31s | 1m 1.02s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 11.91s | 48.65s | 1m 38.92s | 1m 24.09s | 1m 0.89s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 12.43s | 48.94s | 1m 39.72s | 1m 21.84s | 1m 0.73s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 11.79s | 48.76s | 1m 37.32s | 1m 25.03s | 1m 0.73s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1] | 11.09s | 52.58s | 1m 31.15s | 1m 27.83s | 1m 0.66s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 11.79s | 49.07s | 1m 37.68s | 1m 23.98s | 1m 0.63s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_0] | 11.10s | 51.64s | 1m 32.44s | 1m 26.71s | 1m 0.47s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 11.85s | 48.33s | 1m 40.46s | 1m 20.87s | 1m 0.38s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SIGNEXTEND-] | 13.42s | 57.59s | 1m 44.77s | 1m 5.51s | 1m 0.32s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 12.01s | 48.90s | 1m 37.69s | 1m 21.52s | 1m 0.03s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MUL-] | 15.15s | 1m 2.49s | 1m 54.84s | 47.58s | 1m 0.02s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 11.78s | 48.10s | 1m 37.78s | 1m 21.89s | 59.88s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CHAINID] | 11.22s | 49.61s | 1m 34.78s | 1m 23.45s | 59.77s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0 bytes] | 13.30s | 56.38s | 1m 35.51s | 1m 13.16s | 59.59s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0 bytes] | 13.05s | 57.38s | 1m 34.56s | 1m 12.58s | 59.39s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH12] | 8.71s | 42.06s | 1m 22.08s | 1m 44.36s | 59.30s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 10.82s | 48.94s | 1m 31.97s | 1m 24.68s | 59.10s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 13.49s | 47.83s | 1m 23.89s | 1m 29.47s | 58.67s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH11] | 8.97s | 42.05s | 1m 22.07s | 1m 41.27s | 58.59s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000] | 10.66s | 49.60s | 1m 27.59s | 1m 24.92s | 58.19s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASLIMIT] | 11.71s | 49.90s | 1m 30.62s | 1m 20.39s | 58.15s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 10.78s | 48.38s | 1m 29.39s | 1m 21.70s | 57.56s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 12.18s | 51.18s | 1m 24.54s | 1m 22.24s | 57.53s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE same value] | 13.86s | 47.14s | 1m 18.80s | 1m 28.14s | 56.99s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 12.71s | 51.20s | 1m 23.64s | 1m 19.27s | 56.70s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-100 bytes] | 12.25s | 51.29s | 1m 27.28s | 1m 12.91s | 55.93s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH0] | 10.20s | 46.68s | 1m 23.84s | 1m 22.76s | 55.87s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 11.70s | 48.86s | 1m 21.54s | 1m 14.42s | 54.13s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 9.20s | 40.15s | 1m 16.81s | 1m 24.01s | 52.54s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-100 bytes] | 11.22s | 45.13s | 1m 16.06s | 1m 16.10s | 52.13s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH10] | 8.14s | 39.47s | 1m 6.58s | 1m 31.93s | 51.53s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-0 bytes] | 10.29s | 43.41s | 1m 19.45s | 1m 9.59s | 50.68s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH9] | 8.05s | 35.16s | 1m 2.85s | 1m 33.39s | 49.86s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_60M-blockchain_test] | ❌ SDK Crash | 1m 3.87s | 34.29s | ❌ SDK Crash | 49.08s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH8] | 7.80s | 35.53s | 1m 2.67s | 1m 28.42s | 48.61s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_False] | 9.90s | 43.41s | 1m 15.38s | 1m 4.19s | 48.22s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_False] | 9.62s | 42.55s | 1m 17.75s | 1m 2.74s | 48.16s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_True] | 9.50s | 42.49s | 1m 16.00s | 1m 4.32s | 48.08s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_True] | 9.80s | 43.22s | 1m 16.04s | 1m 2.82s | 47.97s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH7] | 8.32s | 35.93s | 1m 4.38s | 1m 23.06s | 47.92s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 10.66s | 45.13s | 1m 13.37s | 1m 1.30s | 47.62s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SLT-] | 8.93s | 41.84s | 1m 12.44s | 1m 4.93s | 47.03s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH6] | 7.99s | 35.33s | 1m 0.79s | 1m 17.51s | 45.40s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 8.11s | 31.11s | 56.59s | 1m 15.72s | 42.88s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH5] | 7.14s | 33.24s | 56.95s | 1m 13.01s | 42.58s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 2.40s | 3.82s | 1m 14.53s | 29.22s | 42.49s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 8.38s | 35.62s | 1m 6.35s | 58.68s | 42.26s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 8.82s | 34.84s | 1m 6.00s | 57.83s | 41.87s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-1MiB] | 7.48s | 56.17s | 57.68s | 44.91s | 41.56s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SUB-] | 9.06s | 41.04s | 1m 8.87s | 46.38s | 41.34s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 7.75s | 32.09s | 51.72s | 1m 13.06s | 41.15s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 7.64s | 34.35s | 58.67s | 1m 3.13s | 40.95s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-one blob but access non-existent index] | 7.96s | 33.96s | 55.22s | 1m 6.44s | 40.89s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH4] | 6.88s | 32.57s | 54.93s | 1m 8.89s | 40.82s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 7.19s | 34.68s | 57.51s | 1m 2.95s | 40.58s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 8.17s | 35.95s | 1m 0.38s | 56.08s | 40.15s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 7.62s | 35.41s | 59.30s | 57.91s | 40.06s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 7.53s | 34.95s | 58.53s | 58.29s | 39.83s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 7.12s | 35.27s | 58.77s | 57.80s | 39.74s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ADD-] | 8.57s | 39.89s | 1m 3.31s | 47.17s | 39.73s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_1000] | 7.78s | 35.60s | 58.21s | 57.36s | 39.73s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 7.32s | 35.73s | 57.84s | 58.02s | 39.73s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_10000] | 7.48s | 35.48s | 58.79s | 56.22s | 39.49s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-5b] | 6.33s | 26.49s | 1m 6.01s | 58.55s | 39.34s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_0] | 7.27s | 35.68s | 57.85s | 55.57s | 39.09s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-no blobs] | 7.49s | 34.11s | 53.39s | 57.48s | 38.12s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH3] | 6.70s | 31.28s | 52.90s | 1m 0.66s | 37.88s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BYTE-] | 7.79s | 34.64s | 59.64s | 49.43s | 37.87s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | 7.40s | 31.95s | 59.26s | 48.75s | 36.84s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 6.68s | 33.60s | 55.05s | 50.62s | 36.49s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-1MiB] | 4.33s | 59.00s | 43.08s | 38.50s | 36.23s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 4.11s | 58.12s | 41.01s | 41.05s | 36.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 6.54s | 32.10s | 53.34s | 52.17s | 36.04s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 6.74s | 32.74s | 53.45s | 50.04s | 35.74s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 6.47s | 32.23s | 53.15s | 50.85s | 35.68s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 6.50s | 32.02s | 54.00s | 49.84s | 35.59s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 6.48s | 32.15s | 54.38s | 49.22s | 35.56s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-100 bytes] | 7.23s | 30.35s | 52.15s | 52.31s | 35.51s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 6.48s | 32.40s | 53.61s | 49.36s | 35.46s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 6.48s | 32.56s | 53.56s | 49.24s | 35.46s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 6.47s | 31.99s | 54.40s | 48.69s | 35.39s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-1MiB] | 5.19s | 58.74s | 52.83s | 24.54s | 35.33s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | 7.18s | 30.22s | 56.06s | 47.81s | 35.31s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_LT-] | 7.16s | 33.10s | 56.43s | 44.26s | 35.24s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 6.49s | 32.13s | 53.57s | 48.37s | 35.14s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 6.46s | 32.21s | 52.81s | 48.80s | 35.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 6.46s | 32.30s | 52.67s | 48.64s | 35.02s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GT-] | 7.27s | 33.41s | 56.02s | 43.24s | 34.98s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP11] | 6.85s | 30.67s | 53.56s | 47.75s | 34.71s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_OR-] | 6.95s | 31.45s | 58.03s | 41.18s | 34.40s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP5] | 6.41s | 30.74s | 53.25s | 46.11s | 34.12s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP3] | 6.46s | 29.92s | 53.92s | 45.98s | 34.07s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_AND-] | 7.02s | 31.22s | 55.56s | 42.08s | 33.97s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP6] | 6.40s | 30.22s | 52.54s | 46.54s | 33.92s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP13] | 6.43s | 30.52s | 53.99s | 44.15s | 33.77s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP16] | 6.43s | 30.09s | 52.75s | 45.74s | 33.75s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP1] | 6.72s | 30.39s | 52.48s | 45.13s | 33.68s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_XOR-] | 7.17s | 31.07s | 55.40s | 40.86s | 33.63s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP14] | 6.81s | 30.42s | 52.55s | 44.52s | 33.58s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-10KiB] | 7.96s | 26.50s | 52.08s | 47.38s | 33.48s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP10] | 6.77s | 30.18s | 52.69s | 44.27s | 33.48s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP4] | 6.40s | 30.23s | 52.77s | 44.32s | 33.43s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP8] | 6.77s | 30.41s | 52.52s | 43.88s | 33.39s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP9] | 6.44s | 30.30s | 52.74s | 43.88s | 33.34s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP15] | 6.78s | 29.94s | 53.64s | 43.00s | 33.34s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP12] | 6.41s | 30.38s | 53.01s | 43.33s | 33.28s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 6.71s | 28.72s | 47.63s | 49.94s | 33.25s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP7] | 6.50s | 29.87s | 53.93s | 42.59s | 33.22s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 6.70s | 25.54s | 44.68s | 55.83s | 33.19s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_BALANCE] | 6.59s | 25.71s | 44.28s | 55.91s | 33.12s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP2] | 6.46s | 29.90s | 53.19s | 42.46s | 33.01s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-100 bytes] | 6.67s | 28.20s | 50.56s | 46.47s | 32.97s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 6.22s | 27.82s | 47.65s | 49.58s | 32.82s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH2] | 6.23s | 28.05s | 49.23s | 45.91s | 32.35s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 6.32s | 28.70s | 46.76s | 43.97s | 31.44s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 6.29s | 26.76s | 46.24s | 46.38s | 31.42s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH1] | 5.97s | 25.19s | 49.52s | 44.57s | 31.31s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | 3.67s | 45.25s | 38.03s | 35.23s | 30.54s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 5.87s | 25.70s | 52.24s | 37.71s | 30.38s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_True] | 6.63s | 24.08s | 37.99s | 48.36s | 29.27s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SLOAD] | 6.61s | 24.99s | 38.45s | 45.94s | 29.00s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 5.86s | 23.11s | 35.82s | 49.32s | 28.53s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-1MiB] | 2.72s | 58.47s | 32.50s | 19.89s | 28.39s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 2.69s | 57.92s | 32.62s | 20.31s | 28.39s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 5.57s | 24.97s | 41.55s | 41.37s | 28.36s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_False] | 6.30s | 23.81s | 37.74s | 45.01s | 28.21s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 4.93s | 19.09s | 38.16s | 47.76s | 27.49s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 5.64s | 21.39s | 33.77s | 46.86s | 26.91s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_BALANCE] | 5.48s | 21.38s | 33.67s | 46.85s | 26.84s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-512] | 5.48s | 21.81s | 34.76s | 42.25s | 26.07s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-10KiB] | 5.05s | 18.54s | 35.36s | 42.70s | 25.41s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 4.95s | 17.84s | 31.83s | 47.00s | 25.41s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | 2.01s | 43.10s | 24.22s | 32.10s | 25.36s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 4.94s | 17.73s | 30.07s | 47.28s | 25.00s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 4.61s | 17.30s | 30.16s | 47.86s | 24.98s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 4.72s | 17.78s | 30.32s | 46.85s | 24.92s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 4.76s | 18.36s | 30.42s | 46.04s | 24.90s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-max code size] | 4.54s | 17.53s | 29.73s | 46.89s | 24.67s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-00] | 3.78s | 23.90s | 37.74s | 32.21s | 24.41s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b5b] | 4.03s | 23.96s | 31.90s | 36.40s | 24.07s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_False] | 5.49s | 19.68s | 33.26s | 37.66s | 24.02s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_True] | 5.24s | 19.50s | 32.47s | 35.82s | 23.26s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB] | 4.92s | 18.87s | 32.20s | 36.65s | 23.16s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 4.20s | 20.03s | 33.97s | 33.80s | 23.00s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 2.15s | 45.26s | 25.01s | 16.86s | 22.32s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-10KiB] | 5.26s | 17.16s | 39.22s | 27.29s | 22.23s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 2.08s | 43.16s | 24.26s | 16.38s | 21.47s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 3.01s | 26.91s | 26.47s | 28.01s | 21.10s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 3.02s | 26.99s | 26.86s | 27.39s | 21.07s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 1.60s | 56.49s | 14.08s | 11.78s | 20.99s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b5b] | 3.38s | 23.19s | 27.02s | 30.21s | 20.95s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 1.54s | 55.82s | 14.11s | 11.60s | 20.77s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 2.94s | 30.99s | 23.28s | 25.33s | 20.63s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value] | 2.86s | 25.60s | 25.91s | 25.38s | 19.94s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 9.02s | 6.62s | 51.06s | 11.75s | 19.61s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSLOAD] | 2.76s | 24.91s | 25.13s | 23.96s | 19.19s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 4.15s | 14.08s | 23.36s | 33.65s | 18.81s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-5KiB] | 3.67s | 14.85s | 28.20s | 26.57s | 18.32s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b] | 2.53s | 22.26s | 24.12s | 24.25s | 18.29s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_True] | 2.55s | 20.64s | 20.40s | 22.42s | 16.50s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b] | 2.14s | 21.45s | 20.57s | 19.90s | 16.01s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 3.06s | 12.70s | 23.23s | 23.11s | 15.53s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 3.05s | 13.04s | 23.76s | 22.19s | 15.51s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value] | 2.28s | 19.85s | 19.55s | 19.90s | 15.39s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-10KiB] | 2.98s | 12.60s | 23.43s | 22.43s | 15.36s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 2.96s | 12.52s | 23.08s | 22.72s | 15.32s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 2.96s | 12.51s | 23.25s | 22.12s | 15.21s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 2.97s | 12.59s | 22.90s | 22.10s | 15.14s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 2.94s | 12.60s | 23.23s | 21.75s | 15.13s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-max code size] | 2.94s | 12.36s | 22.72s | 21.78s | 14.95s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_False] | 2.15s | 14.48s | 15.40s | 20.13s | 13.04s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSLOAD] | 1.64s | 11.96s | 13.44s | 14.41s | 10.37s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 1.59s | 11.51s | 13.03s | 14.76s | 10.22s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 1.60s | 11.48s | 12.90s | 14.59s | 10.14s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_2_scalar] | 10.03s | 6.23s | 11.58s | 11.55s | 9.85s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 1.41s | 13.48s | 9.98s | 12.47s | 9.33s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 1.94s | 7.31s | 12.60s | 13.97s | 8.96s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 1.69s | 6.41s | 11.41s | 12.27s | 7.94s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_True] | 0.71s | 11.93s | 8.34s | 10.68s | 7.92s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_100000] | 1.39s | 5.91s | 9.95s | 13.38s | 7.66s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_False] | 1.51s | 6.06s | 9.90s | 11.89s | 7.34s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_True] | 1.38s | 5.46s | 9.18s | 11.11s | 6.78s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_2_scalar] | 1.43s | 5.58s | 9.82s | 9.19s | 6.50s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 0.62s | 8.07s | 5.70s | 8.54s | 5.73s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 0.45s | 8.27s | 2.95s | 6.03s | 4.43s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 0.87s | 3.87s | 5.16s | 6.93s | 4.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 0.82s | 3.93s | 5.14s | 6.63s | 4.13s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 0.46s | 8.27s | 2.88s | 4.33s | 3.98s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 0.65s | 2.68s | 3.78s | 7.75s | 3.71s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_REVERT] | 0.43s | 6.08s | 2.40s | 4.41s | 3.33s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE] | 0.57s | 2.96s | 3.15s | 6.46s | 3.28s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value] | 0.55s | 3.00s | 3.76s | 5.80s | 3.28s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_RETURN] | 0.44s | 6.12s | 2.31s | 4.00s | 3.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 0.71s | 2.62s | 3.81s | 5.62s | 3.19s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value] | 0.55s | 2.89s | 3.42s | 5.71s | 3.14s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 0.57s | 2.79s | 2.85s | 5.30s | 2.88s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 0.50s | 2.73s | 2.86s | 5.19s | 2.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 0.60s | 2.17s | 3.00s | 5.35s | 2.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 0.56s | 2.10s | 3.01s | 5.24s | 2.73s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 0.54s | 1.91s | 2.90s | 5.34s | 2.67s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 0.56s | 1.97s | 2.81s | 5.32s | 2.66s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_False] | 0.44s | 3.21s | 2.34s | 4.63s | 2.65s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 0.49s | 2.05s | 2.59s | 5.14s | 2.57s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 0.52s | 2.34s | 2.39s | 5.00s | 2.56s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 0.52s | 2.25s | 2.33s | 5.09s | 2.55s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 0.44s | 1.75s | 1.98s | 5.93s | 2.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 0.50s | 2.08s | 2.60s | 4.61s | 2.44s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE2] | 0.46s | 1.94s | 2.19s | 5.19s | 2.44s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE2] | 0.44s | 2.09s | 2.18s | 4.98s | 2.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE] | 0.47s | 1.94s | 2.07s | 5.16s | 2.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 0.48s | 1.70s | 2.51s | 4.94s | 2.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 0.50s | 1.78s | 2.52s | 4.83s | 2.41s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE] | 0.52s | 1.94s | 2.05s | 5.01s | 2.38s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 0.44s | 1.61s | 2.25s | 4.99s | 2.32s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 0.43s | 1.86s | 1.98s | 4.81s | 2.27s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 0.44s | 1.69s | 2.26s | 4.61s | 2.25s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 0.51s | 1.66s | 2.27s | 4.51s | 2.24s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 0.45s | 1.58s | 2.25s | 4.66s | 2.23s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 0.48s | 1.77s | 1.98s | 4.69s | 2.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 0.44s | 1.42s | 2.21s | 4.79s | 2.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 0.41s | 1.46s | 2.08s | 4.89s | 2.21s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 0.43s | 1.75s | 1.98s | 4.66s | 2.21s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 0.41s | 1.64s | 1.69s | 4.51s | 2.06s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 0.41s | 1.64s | 1.72s | 4.31s | 2.02s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE2] | 0.37s | 1.41s | 1.41s | 4.79s | 2.00s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000000] | 0.31s | 3.38s | 0.81s | 3.31s | 1.95s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 0.27s | 1.49s | 0.68s | 4.53s | 1.74s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 0.26s | 1.43s | 0.73s | 4.23s | 1.66s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 0.24s | 0.94s | 0.52s | 4.67s | 1.59s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 0.28s | 1.39s | 0.70s | 3.84s | 1.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 0.28s | 1.35s | 0.70s | 3.82s | 1.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 0.28s | 1.39s | 0.75s | 3.50s | 1.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 0.29s | 1.37s | 0.69s | 3.51s | 1.47s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 0.33s | 1.33s | 0.70s | 3.51s | 1.47s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 0.27s | 1.39s | 0.70s | 3.45s | 1.45s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 0.28s | 1.43s | 0.72s | 3.32s | 1.44s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 0.24s | 0.98s | 0.88s | 3.66s | 1.44s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 0.26s | 1.37s | 0.69s | 3.44s | 1.44s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 0.28s | 1.37s | 0.78s | 3.32s | 1.44s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 0.27s | 1.35s | 0.68s | 3.42s | 1.43s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 0.27s | 1.36s | 0.71s | 3.37s | 1.43s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 0.26s | 1.39s | 0.54s | 3.45s | 1.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 0.23s | 1.37s | 0.54s | 3.42s | 1.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 0.28s | 1.40s | 0.54s | 3.32s | 1.38s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 0.32s | 1.38s | 0.56s | 3.27s | 1.38s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 0.24s | 1.37s | 0.54s | 3.38s | 1.38s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 0.23s | 1.41s | 0.54s | 3.32s | 1.37s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 0.25s | 1.38s | 0.70s | 3.15s | 1.37s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 0.25s | 1.39s | 0.64s | 3.20s | 1.37s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 0.26s | 1.35s | 0.70s | 3.16s | 1.37s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 0.25s | 1.38s | 0.55s | 3.28s | 1.36s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 0.23s | 1.38s | 0.56s | 3.27s | 1.36s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 0.23s | 1.35s | 0.54s | 3.29s | 1.35s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 0.26s | 1.35s | 0.58s | 3.22s | 1.35s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 0.24s | 1.53s | 0.59s | 3.03s | 1.35s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 0.24s | 1.35s | 0.54s | 3.24s | 1.34s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_zero_input] | 0.26s | 0.85s | 0.53s | 3.73s | 1.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 0.27s | 1.37s | 0.55s | 3.17s | 1.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 0.23s | 1.35s | 0.57s | 3.20s | 1.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 0.25s | 1.41s | 0.54s | 3.15s | 1.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 0.24s | 1.38s | 0.54s | 3.17s | 1.33s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE] | 0.23s | 0.81s | 0.46s | 3.81s | 1.33s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 0.26s | 0.85s | 0.47s | 3.71s | 1.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 0.25s | 1.36s | 0.54s | 3.13s | 1.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 0.25s | 0.95s | 0.53s | 3.53s | 1.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 0.23s | 1.38s | 0.53s | 3.10s | 1.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 0.23s | 1.36s | 0.57s | 3.08s | 1.31s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 0.26s | 0.99s | 0.53s | 3.38s | 1.29s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 0.23s | 1.38s | 0.54s | 2.99s | 1.29s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 0.24s | 0.96s | 0.55s | 3.39s | 1.28s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 0.25s | 0.95s | 0.51s | 3.40s | 1.28s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 0.25s | 1.34s | 0.57s | 2.95s | 1.28s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 0.27s | 1.36s | 0.54s | 2.92s | 1.27s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 0.23s | 0.88s | 0.47s | 3.51s | 1.27s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 0.23s | 1.32s | 0.55s | 2.96s | 1.26s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 0.23s | 0.83s | 0.47s | 3.53s | 1.26s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 0.23s | 1.34s | 0.54s | 2.94s | 1.26s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 0.22s | 0.93s | 0.54s | 3.21s | 1.23s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE2] | 0.23s | 0.93s | 0.53s | 3.18s | 1.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 0.24s | 0.85s | 0.49s | 3.30s | 1.22s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair] | 0.26s | 0.81s | 0.52s | 3.22s | 1.20s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_2_sets] | 0.30s | 0.89s | 0.52s | 3.07s | 1.20s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 0.24s | 0.86s | 0.48s | 3.18s | 1.19s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 0.24s | 0.84s | 0.47s | 3.13s | 1.17s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 0.22s | 0.81s | 0.50s | 3.12s | 1.16s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_3_pair] | 0.20s | 0.61s | 0.16s | 3.29s | 1.06s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair_empty] | 0.23s | 0.64s | 0.16s | 2.72s | 0.94s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 0.18s | 0.59s | 0.06s | 2.89s | 0.93s |

## Summary

**Total unique test cases:** 537

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| openvm-v1.4.1 | 537 | 529 | 8 | 0 |
| risc0-v3.0.4 | 537 | 535 | 2 | 0 |
| sp1-v5.2.3 | 537 | 537 | 0 | 0 |
| zisk-v0.14.0 | 537 | 414 | 123 | 0 |

---

