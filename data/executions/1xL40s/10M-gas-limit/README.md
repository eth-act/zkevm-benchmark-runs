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

| Test Case | risc0-v3.0.4 | sp1-v5.2.3 | zisk-v0.14.0 | Avg |
|-----------|-----------|-----------|-----------|----------|
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_8b_exp_896] | 5m 33.20s | 9m 4.89s | ❌ SDK Crash | 7m 19.04s |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_10M-blockchain_test-point_evaluation] | 10m 31.67s | 3m 38.16s | 2m 45.27s | 5m 38.37s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_guido_2_even] | 4m 4.04s | 6m 28.63s | ❌ SDK Crash | 5m 16.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_marius_1_even] | 3m 55.90s | 6m 6.29s | ❌ SDK Crash | 5m 1.10s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g1add] | 3m 34.70s | 5m 40.27s | ❌ SDK Crash | 4m 37.48s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_16b_exp_320] | 3m 31.86s | 5m 39.11s | ❌ SDK Crash | 4m 35.49s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_127] | 5m 25.79s | 7m 51.68s | 18.41s | 4m 31.96s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_guido_1_even] | 3m 21.19s | 5m 21.33s | ❌ SDK Crash | 4m 21.26s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_8_exp_896] | 3m 9.56s | 5m 7.11s | ❌ SDK Crash | 4m 8.34s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_191] | 4m 48.24s | 7m 2.10s | 19.99s | 4m 3.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_264_exp_2] | 3m 27.25s | 5m 32.94s | 3m 8.37s | 4m 2.85s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_exp_298_gas_exp_heavy] | 3m 6.10s | 4m 59.13s | ❌ SDK Crash | 4m 2.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_1045_gas_base_heavy] | 3m 28.12s | 5m 48.85s | 2m 49.25s | 4m 2.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_867_gas_base_heavy] | 3m 32.35s | 5m 45.58s | 2m 46.59s | 4m 1.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_800_gas_base_heavy] | 3m 32.72s | 5m 45.32s | 2m 45.12s | 4m 1.05s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_408_gas_base_heavy] | 3m 25.77s | 5m 42.12s | 2m 54.53s | 4m 0.81s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_852_gas_exp_heavy] | 3m 7.75s | 4m 52.14s | ❌ SDK Crash | 3m 59.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_616_gas_base_heavy] | 3m 31.26s | 5m 36.76s | 2m 48.20s | 3m 58.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_4_qube] | 3m 32.23s | 5m 38.20s | 2m 44.31s | 3m 58.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_3_qube] | 3m 31.32s | 5m 31.42s | 2m 51.24s | 3m 57.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_800_gas_exp_heavy] | 3m 0.68s | 4m 52.60s | ❌ SDK Crash | 3m 56.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_256_exp_2] | 3m 26.54s | 5m 26.33s | 2m 53.37s | 3m 55.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_exp_215_gas_exp_heavy] | 2m 53.60s | 4m 43.85s | ❌ SDK Crash | 3m 48.72s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_600_gas_exp_heavy] | 2m 55.82s | 4m 40.58s | ❌ SDK Crash | 3m 48.20s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_8_exp_648] | 2m 51.69s | 4m 44.09s | ❌ SDK Crash | 3m 47.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_min_gas_exp_heavy] | 2m 49.24s | 4m 39.12s | 3m 42.19s | 3m 43.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_400_gas_exp_heavy] | 2m 49.33s | 4m 35.41s | ❌ SDK Crash | 3m 42.37s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g2add] | 2m 59.59s | 4m 33.77s | 3m 29.23s | 3m 40.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_pawel_2] | 2m 50.16s | 4m 30.55s | ❌ SDK Crash | 3m 40.36s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_127] | 3m 42.77s | 5m 9.20s | 1m 58.87s | 3m 36.95s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_pairing_check] | 5m 34.30s | 1m 24.84s | 3m 49.02s | 3m 36.06s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_127] | 3m 37.00s | 5m 8.24s | 2m 1.86s | 3m 35.70s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_min_gas_base_heavy] | 2m 58.59s | 4m 44.11s | 2m 50.59s | 3m 31.10s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_255] | 4m 16.08s | 5m 55.71s | 18.79s | 3m 30.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_4_square] | 2m 43.81s | 4m 25.80s | 2m 25.22s | 3m 11.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_24b_exp_168] | 2m 29.88s | 3m 57.83s | 3m 3.36s | 3m 10.36s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_3_square] | 2m 47.39s | 4m 16.95s | 2m 26.60s | 3m 10.31s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_5_qube] | 2m 46.69s | 4m 20.12s | 2m 17.59s | 3m 8.13s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_1024_exp_2] | 2m 41.51s | 4m 16.93s | 2m 11.94s | 3m 3.46s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_10M-blockchain_test-blake2f] | 2m 46.68s | 3m 28.89s | 2m 40.84s | 2m 58.81s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_63] | 3m 25.87s | 5m 0.40s | 18.90s | 2m 55.06s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SDIV-1] | 2m 50.64s | 4m 1.35s | 1m 47.49s | 2m 53.16s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_127] | 2m 42.49s | 3m 59.95s | 1m 52.04s | 2m 51.49s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_add_1_2] | 2m 39.22s | 3m 47.13s | 2m 1.86s | 2m 49.40s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_3_exp_8] | 2m 7.93s | 3m 27.89s | 2m 50.16s | 2m 48.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_765_gas_exp_heavy] | 2m 9.90s | 3m 33.73s | 2m 30.70s | 2m 44.78s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_fp_to_g2] | 4m 18.92s | 1m 7.06s | 2m 43.03s | 2m 43.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_pawel_3] | 2m 7.06s | 3m 23.29s | 2m 25.39s | 2m 38.58s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_add] | 2m 23.68s | 3m 25.23s | 1m 57.41s | 2m 35.44s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SDIV-0] | 2m 24.42s | 3m 32.28s | 1m 43.80s | 2m 33.50s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_fp_to_g1] | 4m 12.08s | 51.55s | 2m 34.62s | 2m 32.75s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_191] | 2m 26.42s | 3m 36.89s | 1m 33.78s | 2m 32.36s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_191] | 2m 27.54s | 3m 33.41s | 1m 34.87s | 2m 31.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_5_square] | 2m 13.12s | 3m 35.31s | 1m 45.71s | 2m 31.38s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DIV-1] | 2m 26.43s | 3m 30.59s | 1m 34.09s | 2m 30.37s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_32b_exp_256] | 2m 2.35s | 3m 13.29s | 2m 14.85s | 2m 30.16s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_32b_exp_96] | 2m 0.27s | 3m 12.38s | 2m 17.73s | 2m 30.13s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DIV-0] | 2m 19.98s | 3m 25.41s | 1m 36.72s | 2m 27.37s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DELEGATECALL] | 5m 12.42s | 1m 2.83s | 1m 4.72s | 2m 26.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_65] | ❌ SDK Crash | 2m 50.10s | 2m 2.72s | 2m 26.41s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_STATICCALL] | 5m 9.10s | 1m 1.96s | 1m 2.91s | 2m 24.66s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODEHASH] | 5m 10.35s | 1m 0.91s | 1m 0.18s | 2m 23.81s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALL] | 5m 7.06s | 1m 1.82s | 59.96s | 2m 22.94s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODESIZE] | 5m 0.59s | 1m 1.53s | 1m 4.10s | 2m 22.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_32b_exp_40] | 1m 50.00s | 2m 57.89s | 2m 13.61s | 2m 20.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_32b_exp_256] | 1m 54.40s | 3m 0.47s | 2m 2.96s | 2m 19.28s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODECOPY] | 4m 51.99s | 58.31s | 1m 0.02s | 2m 16.77s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_example_1] | 1m 50.44s | 2m 57.89s | 1m 59.23s | 2m 15.85s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_63] | 2m 21.49s | 3m 21.85s | 1m 1.27s | 2m 14.87s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_191] | 2m 1.86s | 3m 2.83s | 1m 38.79s | 2m 14.49s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_63] | 2m 16.41s | 3m 23.59s | 1m 2.92s | 2m 14.31s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_677_gas_base_heavy] | 1m 47.00s | 2m 54.63s | 2m 0.19s | 2m 13.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_1360_gas_balanced] | 1m 52.00s | 2m 53.00s | 1m 55.31s | 2m 13.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_128] | 1m 47.62s | 2m 51.56s | 1m 59.14s | 2m 12.77s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_32b_exp_96] | 1m 46.09s | 2m 50.20s | 1m 59.45s | 2m 11.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1349n1] | 1m 49.88s | 2m 50.24s | 1m 54.93s | 2m 11.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1360n1] | 1m 47.30s | 2m 50.94s | 1m 56.26s | 2m 11.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_64] | 1m 44.64s | 2m 48.96s | 1m 58.72s | 2m 10.77s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_32b_exp_cover_windows] | 1m 46.51s | 2m 50.66s | 1m 53.26s | 2m 10.14s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_pawel_4] | 1m 44.85s | 2m 51.21s | 1m 52.39s | 2m 9.48s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_40] | 1m 41.31s | 2m 41.25s | 1m 57.12s | 2m 6.56s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_exp_208_gas_balanced] | 1m 38.51s | 2m 38.74s | 2m 1.17s | 2m 6.14s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1360n2] | 1m 42.16s | 2m 42.26s | 1m 49.08s | 2m 4.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_min_gas_balanced] | 1m 39.78s | 2m 39.27s | 1m 52.55s | 2m 3.87s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_2_qube] | 1m 41.36s | 2m 41.86s | 1m 43.92s | 2m 2.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_36] | 1m 34.75s | 2m 33.15s | 1m 58.23s | 2m 2.05s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_10M-blockchain_test-ecrecover] | 1m 31.76s | 4m 10.65s | 16.79s | 1m 59.73s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_600_gas_balanced] | 1m 33.68s | 2m 30.31s | 1m 36.11s | 1m 53.36s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_408_gas_balanced] | 1m 32.18s | 2m 28.54s | 1m 35.42s | 1m 52.05s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1152n1] | 1m 31.38s | 2m 26.28s | 1m 37.48s | 1m 51.71s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_63] | 1m 43.23s | 2m 37.97s | 1m 11.96s | 1m 51.05s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_996_gas_balanced] | 1m 31.16s | 2m 27.32s | 1m 29.74s | 1m 49.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_767_gas_balanced] | 1m 33.60s | 2m 28.71s | 1m 24.93s | 1m 49.08s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_32] | 1m 24.09s | 2m 16.50s | 1m 44.81s | 1m 48.47s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g1msm] | 2m 32.03s | 44.59s | 1m 49.60s | 1m 42.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_2_square] | 1m 22.27s | 2m 11.61s | 1m 31.38s | 1m 41.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_64b_exp_512] | 1m 26.40s | 2m 14.38s | 1m 12.49s | 1m 37.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 1m 20.43s | 2m 7.46s | 1m 24.68s | 1m 37.52s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_255] | 1m 23.46s | 2m 4.49s | 1m 17.41s | 1m 35.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_200n3] | 1m 15.09s | 1m 58.94s | 1m 30.72s | 1m 34.92s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_200n2] | 1m 13.97s | 1m 58.04s | 1m 29.50s | 1m 33.83s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_64b_exp_512] | 1m 20.52s | 2m 9.32s | 1m 8.00s | 1m 32.61s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_255] | 1m 20.04s | 2m 1.86s | 1m 8.73s | 1m 30.21s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul] | 3m 12.06s | 1m 3.72s | 9.18s | 1m 28.32s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 3m 8.17s | 1m 2.64s | 9.84s | 1m 26.88s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_255] | 1m 16.15s | 1m 55.06s | 1m 8.81s | 1m 26.67s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 3m 5.87s | 1m 2.18s | 9.30s | 1m 25.78s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 1m 15.08s | 1m 57.33s | 1m 2.28s | 1m 24.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_200n1] | 1m 3.56s | 1m 38.76s | 1m 25.76s | 1m 22.69s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 1m 6.52s | 1m 49.51s | 53.13s | 1m 16.39s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_128b_exp_1024] | 1m 6.64s | 1m 47.72s | 53.73s | 1m 16.03s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g2msm] | 2m 9.76s | 15.82s | 1m 21.47s | 1m 15.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_128b_exp_1024] | 1m 7.25s | 1m 48.45s | 51.24s | 1m 15.64s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 2m 47.23s | 22.90s | 25.52s | 1m 11.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 1m 0.50s | 1m 37.15s | 44.85s | 1m 7.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_256b_exp_1024] | 1m 0.94s | 1m 37.24s | 44.31s | 1m 7.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_256b_exp_1024] | 1m 1.18s | 1m 37.26s | 42.37s | 1m 6.94s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALLCODE] | ❌ SDK Crash | 1m 2.20s | 1m 4.57s | 1m 3.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_512b_exp_1024] | 56.64s | 1m 29.28s | 42.05s | 1m 2.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_512b_exp_1024] | 55.33s | 1m 28.16s | 39.41s | 1m 0.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_1_qube] | 42.52s | 1m 10.98s | 55.30s | 56.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_1_square] | 40.02s | 59.41s | 51.46s | 50.30s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXP-] | 46.58s | 1m 13.43s | 27.02s | 49.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 43.41s | 1m 6.35s | 36.24s | 48.67s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1m 16.14s | 51.40s | 12.32s | 46.62s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_4_pair] | 1m 13.71s | 51.45s | 14.50s | 46.55s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PREVRANDAO] | 27.18s | 46.52s | 1m 5.33s | 46.34s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_5_pair] | 1m 13.41s | 50.77s | 14.38s | 46.19s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_STATICCALL] | 27.38s | 46.73s | 1m 3.78s | 45.96s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_2_pair] | 1m 10.39s | 50.61s | 16.21s | 45.73s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_two_pairings] | 1m 10.24s | 50.57s | 15.91s | 45.57s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_CALL] | 27.57s | 46.04s | 1m 2.85s | 45.49s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_CALL] | 26.37s | 45.04s | 1m 5.06s | 45.49s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_STATICCALL] | 27.45s | 45.76s | 1m 3.21s | 45.47s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_CALLCODE] | 26.57s | 45.55s | 1m 3.69s | 45.27s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_one_pairing] | 1m 6.76s | 50.21s | 18.54s | 45.17s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 27.70s | 46.08s | 1m 0.84s | 44.87s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-empty-opcode_RETURN] | 25.93s | 44.09s | 1m 3.09s | 44.37s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 26.37s | 44.27s | 1m 1.96s | 44.20s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_CALLCODE] | 26.17s | 44.79s | 59.07s | 43.34s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-empty-opcode_REVERT] | 26.47s | 43.45s | 58.47s | 42.80s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_10M-blockchain_test-contract_balance_1] | 27.36s | 42.76s | 57.82s | 42.65s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_10M-blockchain_test-contract_balance_0] | 28.01s | 42.66s | 57.26s | 42.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_guido_3_even] | 36.95s | 58.29s | 32.52s | 42.59s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero-loop] | 22.83s | 43.14s | 46.35s | 37.44s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test-one-loop] | 22.06s | 39.76s | 44.88s | 35.57s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 25.64s | 38.86s | 39.54s | 34.68s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_add_infinities] | 24.30s | 40.09s | 38.70s | 34.36s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of zero data-opcode_RETURN] | 26.20s | 33.57s | 42.25s | 34.01s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SIGNEXTEND-] | 27.52s | 42.14s | 31.79s | 33.81s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 23.94s | 38.96s | 36.61s | 33.17s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of zero data-opcode_REVERT] | 24.28s | 33.47s | 40.74s | 32.83s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SAR-] | 25.48s | 39.02s | 33.79s | 32.76s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0 bytes] | 23.60s | 37.76s | 36.57s | 32.64s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0 bytes] | 23.06s | 37.62s | 35.78s | 32.15s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test-empty] | 19.07s | 35.01s | 37.74s | 30.61s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 20.38s | 32.97s | 36.07s | 29.81s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 19.77s | 33.75s | 35.14s | 29.55s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH31] | 14.00s | 26.79s | 47.05s | 29.28s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_10M-blockchain_test-shift_right_SAR] | 22.23s | 34.67s | 28.08s | 28.33s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 19.48s | 31.81s | 33.55s | 28.28s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH32] | 14.06s | 25.34s | 45.12s | 28.18s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH29] | 13.79s | 24.78s | 45.83s | 28.13s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH30] | 13.69s | 26.32s | 42.54s | 27.52s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-0 bytes] | 19.75s | 32.18s | 30.52s | 27.48s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-100 bytes] | 18.74s | 29.54s | 32.13s | 26.80s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SHL-] | 19.16s | 29.94s | 29.82s | 26.31s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH27] | 13.74s | 24.70s | 40.45s | 26.30s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH28] | 13.87s | 23.51s | 41.12s | 26.16s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH25] | 12.83s | 22.81s | 40.98s | 25.54s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_1024b_exp_1024] | 21.65s | 33.39s | 20.05s | 25.03s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH26] | 12.37s | 23.49s | 38.10s | 24.65s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_1024b_exp_1024] | 21.94s | 33.33s | 18.70s | 24.65s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 17.67s | 27.23s | 28.10s | 24.33s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EQ-] | 14.88s | 25.90s | 31.38s | 24.05s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH23] | 12.12s | 23.47s | 36.05s | 23.88s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 15.86s | 24.04s | 31.71s | 23.87s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_10M-blockchain_test-shift_right_SHR] | 18.12s | 27.89s | 24.90s | 23.64s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 15.95s | 23.77s | 30.39s | 23.37s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH22] | 11.48s | 22.21s | 35.39s | 23.02s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH24] | 11.56s | 21.29s | 35.38s | 22.75s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_ORIGIN] | 14.12s | 21.95s | 32.15s | 22.74s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_COINBASE] | 14.52s | 21.42s | 30.91s | 22.28s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_diff_acc_to_diff_acc] | 18.49s | 39.23s | 8.94s | 22.22s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALLER] | 14.34s | 21.10s | 31.18s | 22.21s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_ADDRESS] | 14.09s | 21.12s | 31.34s | 22.18s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SHR-] | 16.83s | 26.62s | 22.57s | 22.01s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_diff_acc_to_b] | 17.47s | 39.57s | 8.33s | 21.79s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH21] | 10.98s | 20.15s | 34.04s | 21.72s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_diff_acc] | 17.31s | 38.80s | 8.60s | 21.57s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH20] | 11.18s | 18.95s | 33.20s | 21.11s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SSTORE new value] | 13.48s | 19.76s | 28.69s | 20.64s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH19] | 10.74s | 19.41s | 31.21s | 20.45s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-100 bytes] | 13.97s | 22.16s | 25.17s | 20.43s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_1_exp_heavy] | 12.73s | 22.72s | 25.32s | 20.26s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_a] | 16.12s | 37.24s | 7.02s | 20.12s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_b] | 15.97s | 37.13s | 7.23s | 20.11s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-six blobs, access latest] | 10.36s | 17.64s | 31.49s | 19.83s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH16] | 10.39s | 18.57s | 29.86s | 19.61s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH17] | 10.98s | 17.11s | 30.49s | 19.52s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH18] | 10.64s | 17.72s | 29.42s | 19.26s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 11.58s | 17.57s | 28.38s | 19.18s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-one blob and accessed] | 10.69s | 17.19s | 29.13s | 19.00s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH15] | 9.93s | 17.70s | 28.89s | 18.84s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 12.62s | 18.16s | 25.13s | 18.63s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 11.19s | 17.80s | 26.75s | 18.58s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 11.15s | 17.57s | 26.66s | 18.46s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 11.52s | 17.93s | 25.92s | 18.46s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 11.41s | 17.79s | 25.97s | 18.39s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 11.14s | 17.60s | 26.28s | 18.34s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 11.15s | 17.68s | 25.99s | 18.27s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 11.05s | 17.52s | 26.14s | 18.23s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 10.90s | 17.50s | 26.21s | 18.20s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH13] | 9.83s | 16.07s | 28.48s | 18.12s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 11.17s | 17.57s | 25.43s | 18.06s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH14] | 10.45s | 17.07s | 26.60s | 18.04s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 11.64s | 19.71s | 22.66s | 18.00s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 11.40s | 17.60s | 24.91s | 17.97s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 10.95s | 17.48s | 25.37s | 17.93s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_MUL-] | 14.31s | 26.74s | 12.49s | 17.84s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_False-empty_authority_False] | 13.63s | 32.92s | 6.17s | 17.57s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_True-empty_authority_False] | 13.13s | 32.95s | 5.99s | 17.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH8] | 9.09s | 14.63s | 27.26s | 16.99s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH12] | 9.34s | 15.52s | 25.41s | 16.76s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_False-empty_authority_True] | 12.69s | 31.66s | 5.65s | 16.67s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_True-empty_authority_True] | 12.60s | 31.65s | 5.56s | 16.60s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH11] | 9.21s | 15.23s | 24.12s | 16.19s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-5b] | 16.25s | 14.84s | 16.56s | 15.88s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH10] | 9.35s | 14.60s | 23.17s | 15.70s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH6] | 8.85s | 14.32s | 23.28s | 15.48s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH7] | 9.14s | 15.01s | 22.23s | 15.46s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH9] | 8.96s | 14.15s | 22.15s | 15.08s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_MOD-] | ❌ SDK Crash | 14.67s | 14.23s | 14.45s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 9.88s | 14.74s | 18.73s | 14.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 8.65s | 16.59s | 18.06s | 14.43s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 9.66s | 14.65s | 18.94s | 14.42s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 10.00s | 13.42s | 19.78s | 14.40s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 9.70s | 15.20s | 18.18s | 14.36s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 9.45s | 16.27s | 17.16s | 14.29s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH4] | 8.35s | 13.40s | 20.78s | 14.17s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 9.53s | 14.56s | 18.42s | 14.17s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 9.63s | 14.70s | 18.05s | 14.12s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 9.16s | 14.55s | 18.60s | 14.10s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 9.70s | 14.64s | 17.97s | 14.10s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 9.68s | 14.91s | 17.60s | 14.06s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 9.73s | 13.84s | 18.35s | 13.97s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CHAINID] | 8.54s | 14.73s | 18.54s | 13.94s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH5] | 8.43s | 13.77s | 19.55s | 13.92s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 9.54s | 14.75s | 17.37s | 13.88s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 9.75s | 14.71s | 17.09s | 13.85s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 9.21s | 14.55s | 17.72s | 13.83s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_BASEFEE] | 8.48s | 14.80s | 17.97s | 13.75s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_LT-] | 9.00s | 14.83s | 17.28s | 13.70s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP4] | 8.78s | 15.26s | 17.04s | 13.69s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_GASPRICE] | 8.54s | 14.76s | 17.76s | 13.69s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 8.27s | 13.55s | 19.16s | 13.66s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 9.99s | 13.59s | 16.72s | 13.43s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-max code size] | 10.44s | 12.57s | 17.18s | 13.39s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_NUMBER] | 8.68s | 14.78s | 16.55s | 13.34s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_GT-] | 9.51s | 15.07s | 15.42s | 13.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 7.80s | 14.41s | 17.55s | 13.25s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH3] | 8.27s | 13.43s | 17.90s | 13.20s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_BLOBBASEFEE] | 8.69s | 14.79s | 16.07s | 13.18s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_TIMESTAMP] | 8.65s | 14.74s | 16.15s | 13.18s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 7.82s | 14.28s | 17.27s | 13.12s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_0] | 8.05s | 12.74s | 17.33s | 12.71s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP10] | 8.78s | 14.86s | 13.84s | 12.49s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP13] | 9.19s | 15.19s | 12.62s | 12.33s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH2] | 7.71s | 13.11s | 16.09s | 12.30s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 7.82s | 10.92s | 18.16s | 12.30s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 7.83s | 12.70s | 16.34s | 12.29s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP9] | 8.96s | 14.95s | 12.91s | 12.27s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP15] | 9.67s | 14.93s | 12.10s | 12.23s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP2] | 8.91s | 15.29s | 12.48s | 12.22s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-0 bytes] | 8.62s | 13.03s | 14.99s | 12.21s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_1000] | 8.13s | 12.77s | 15.67s | 12.19s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP11] | 8.85s | 14.91s | 12.78s | 12.18s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 7.95s | 11.33s | 17.25s | 12.18s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_1] | 7.85s | 12.67s | 16.01s | 12.18s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH1] | 7.45s | 12.41s | 16.63s | 12.16s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 7.63s | 12.48s | 16.30s | 12.14s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_GASLIMIT] | 7.61s | 12.63s | 16.15s | 12.13s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP7] | 8.73s | 15.07s | 12.55s | 12.12s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP5] | 9.14s | 14.89s | 12.31s | 12.11s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SGT-] | 8.09s | 13.91s | 14.34s | 12.11s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP12] | 8.70s | 15.26s | 12.38s | 12.11s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP6] | 8.70s | 15.45s | 12.07s | 12.07s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 8.26s | 12.66s | 15.13s | 12.02s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH0] | 7.62s | 12.33s | 16.04s | 12.00s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP8] | 8.93s | 14.93s | 12.09s | 11.98s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP3] | 8.85s | 14.96s | 12.04s | 11.95s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SSTORE same value] | 7.00s | 10.97s | 17.69s | 11.88s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP16] | 8.70s | 14.93s | 11.98s | 11.87s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP14] | 8.86s | 14.89s | 11.84s | 11.86s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP1] | 8.87s | 14.89s | 11.82s | 11.86s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0 bytes] | 8.23s | 12.23s | 14.91s | 11.79s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 8.17s | 12.63s | 14.52s | 11.77s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SLT-] | 7.81s | 13.73s | 13.65s | 11.73s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SUB-] | 8.51s | 13.03s | 12.97s | 11.50s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_BYTE-] | 7.87s | 11.98s | 14.49s | 11.45s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP10] | 6.90s | 10.80s | 16.38s | 11.36s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 7.63s | 11.02s | 15.29s | 11.31s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 8.04s | 10.70s | 15.20s | 11.31s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_ADD-] | 8.27s | 12.77s | 12.56s | 11.20s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 13.35s | 9.54s | 10.58s | 11.16s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_OR-] | ❌ SDK Crash | 10.75s | 11.53s | 11.14s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 7.60s | 11.03s | 14.58s | 11.07s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0 bytes] | 7.70s | 11.96s | 13.53s | 11.06s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 7.85s | 11.08s | 14.16s | 11.03s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 7.50s | 11.09s | 14.23s | 10.94s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 7.63s | 11.09s | 14.02s | 10.91s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 7.50s | 11.04s | 14.14s | 10.89s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 7.56s | 11.04s | 14.04s | 10.88s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 7.52s | 11.32s | 13.72s | 10.85s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 7.57s | 11.03s | 13.92s | 10.84s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 7.44s | 10.69s | 14.25s | 10.79s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 10.85s | 9.50s | 11.91s | 10.75s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-100 bytes] | 7.26s | 10.61s | 14.13s | 10.67s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 7.65s | 10.80s | 13.54s | 10.67s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP13] | 6.84s | 10.62s | 14.47s | 10.64s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP4] | 6.73s | 11.83s | 13.27s | 10.61s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP14] | 6.95s | 10.79s | 14.05s | 10.60s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP11] | 6.72s | 10.63s | 14.20s | 10.52s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 6.27s | 9.23s | 15.73s | 10.41s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 6.45s | 9.71s | 15.02s | 10.39s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP5] | 6.82s | 10.74s | 13.47s | 10.35s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP16] | 6.87s | 10.73s | 13.35s | 10.32s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP2] | 6.90s | 10.42s | 13.59s | 10.30s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP9] | 6.77s | 10.64s | 13.44s | 10.28s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 7.11s | 9.48s | 14.19s | 10.26s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP3] | 7.01s | 10.44s | 13.19s | 10.21s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-512] | 6.21s | 9.62s | 14.75s | 10.19s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 7.05s | 11.20s | 12.29s | 10.18s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP6] | 6.72s | 10.47s | 13.33s | 10.17s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP8] | 6.81s | 10.53s | 13.16s | 10.16s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP12] | 6.70s | 10.64s | 13.11s | 10.15s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-one blob but access non-existent index] | 6.72s | 11.01s | 12.70s | 10.14s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP1] | 6.37s | 10.17s | 13.85s | 10.13s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-no blobs] | 6.70s | 10.92s | 12.73s | 10.12s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP15] | 6.77s | 10.45s | 13.10s | 10.11s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value] | 10.40s | 7.96s | 11.90s | 10.09s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP7] | 6.75s | 10.40s | 12.77s | 9.97s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 6.29s | 9.34s | 14.26s | 9.96s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_XOR-] | 6.58s | 10.67s | 12.35s | 9.87s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_False-non_zero_value_False] | 6.42s | 9.57s | 13.52s | 9.84s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_True-non_zero_value_False] | 6.38s | 9.60s | 13.26s | 9.74s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 6.62s | 8.91s | 13.68s | 9.74s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB] | 5.50s | 9.07s | 14.50s | 9.69s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_BALANCE] | 6.44s | 8.67s | 13.76s | 9.62s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_AND-] | 6.50s | 10.66s | 11.68s | 9.62s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_True-non_zero_value_True] | 6.30s | 9.60s | 12.67s | 9.52s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_False-non_zero_value_True] | 6.27s | 10.15s | 12.07s | 9.50s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_BALANCE] | 6.38s | 8.74s | 13.29s | 9.47s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-605b5b] | 9.26s | 7.98s | 11.16s | 9.47s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSLOAD] | 10.29s | 7.52s | 10.51s | 9.44s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 5.88s | 8.70s | 13.35s | 9.31s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 5.98s | 8.88s | 12.89s | 9.25s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 5.83s | 8.68s | 13.10s | 9.20s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 5.84s | 8.82s | 12.89s | 9.18s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test-calldata_length_10000] | 6.02s | 8.77s | 12.53s | 9.11s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 3.55s | 14.68s | 9.06s | 9.10s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test-calldata_length_1000] | 5.99s | 8.70s | 12.59s | 9.09s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-100 bytes] | 6.20s | 9.29s | 11.74s | 9.08s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 9.87s | 6.88s | 10.35s | 9.04s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test-calldata_length_0] | 5.77s | 8.77s | 12.55s | 9.03s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 9.74s | 6.90s | 10.28s | 8.97s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 5.87s | 8.89s | 12.04s | 8.93s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 5.89s | 8.72s | 12.18s | 8.93s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-10KiB] | 5.53s | 9.41s | 11.23s | 8.72s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 5.68s | 8.91s | 10.97s | 8.52s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 5.87s | 8.45s | 11.16s | 8.49s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SMOD-] | 5.67s | 9.18s | 10.45s | 8.43s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-1MiB] | 8.26s | 7.64s | 8.76s | 8.22s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 4.47s | 6.25s | 13.15s | 7.96s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 8.60s | 5.42s | 9.45s | 7.82s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 4.07s | 6.80s | 12.43s | 7.77s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value] | 8.14s | 5.49s | 9.65s | 7.76s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 3.04s | 7.83s | 12.30s | 7.72s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SLOAD] | 4.83s | 6.76s | 11.56s | 7.72s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_100000] | 9.82s | 5.51s | 7.70s | 7.67s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-1MiB] | 8.56s | 7.48s | 6.40s | 7.48s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 3.12s | 7.51s | 11.55s | 7.39s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_True-key_mut_True] | 5.04s | 6.65s | 10.07s | 7.25s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 3.87s | 7.50s | 10.37s | 7.25s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-max code size] | 3.01s | 7.58s | 10.67s | 7.09s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_True-key_mut_False] | 5.01s | 6.32s | 9.83s | 7.05s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-615b5b5b] | 6.51s | 5.69s | 8.65s | 6.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_zkevm_worst_case] | 4.36s | 6.81s | 9.66s | 6.94s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_False-key_mut_True] | 5.15s | 6.27s | 9.41s | 6.94s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 2.90s | 7.48s | 10.38s | 6.92s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_False-key_mut_False] | 5.03s | 6.16s | 9.53s | 6.91s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_True-key_mut_True] | 4.87s | 5.88s | 9.48s | 6.74s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-10KiB] | 4.40s | 5.83s | 9.95s | 6.73s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_True-key_mut_False] | 4.68s | 5.95s | 8.99s | 6.54s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_10M-blockchain_test-value_bearing_True] | 6.08s | 4.87s | 8.06s | 6.34s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 4.23s | 6.01s | 8.68s | 6.30s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-1MiB] | 7.06s | 4.30s | 7.56s | 6.30s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_example_2] | 3.69s | 5.93s | 8.87s | 6.17s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 3.09s | 4.23s | 10.98s | 6.10s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-5KiB] | 3.78s | 5.17s | 9.13s | 6.03s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 7.28s | 3.65s | 7.09s | 6.00s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-10KiB] | 3.73s | 6.50s | 7.61s | 5.94s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSLOAD] | 5.13s | 4.38s | 8.24s | 5.92s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 3.05s | 4.03s | 10.50s | 5.86s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 4.01s | 5.46s | 7.44s | 5.64s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 3.31s | 3.78s | 9.77s | 5.62s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 3.60s | 4.75s | 7.86s | 5.40s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-00] | 3.55s | 4.92s | 7.17s | 5.21s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 4.96s | 3.66s | 6.97s | 5.19s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 8.66s | 2.09s | 4.70s | 5.15s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 8.62s | 1.96s | 4.82s | 5.13s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 4.88s | 3.55s | 6.80s | 5.07s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-1MiB] | 6.99s | 3.14s | 5.02s | 5.05s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-605b] | 3.80s | 3.42s | 7.26s | 4.83s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_byte_True] | 5.37s | 2.88s | 6.10s | 4.78s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 2.98s | 3.94s | 7.23s | 4.72s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_1_2_2_scalar] | 7.28s | 1.77s | 5.10s | 4.72s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 6.66s | 1.78s | 5.50s | 4.65s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-10KiB] | 3.00s | 4.08s | 6.74s | 4.61s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_10M-blockchain_test-value_bearing_False] | 4.20s | 2.93s | 5.95s | 4.36s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | ❌ SDK Crash | 2.23s | 5.88s | 4.06s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-615b5b] | 3.12s | 2.73s | 6.28s | 4.04s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 3.67s | 2.15s | 5.57s | 3.80s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 3.76s | 2.28s | 5.26s | 3.77s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 2.42s | 2.81s | 5.43s | 3.55s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_False-key_mut_True] | 1.99s | 2.12s | 6.06s | 3.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 2.16s | 2.21s | 5.80s | 3.39s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of zero data-opcode_REVERT] | 2.48s | 0.78s | 6.21s | 3.16s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 2.93s | 1.15s | 5.12s | 3.07s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_False-key_mut_False] | 1.95s | 2.02s | 4.87s | 2.95s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 1.90s | 2.05s | 4.80s | 2.92s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_True] | 1.81s | 0.97s | 5.50s | 2.76s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CREATE] | 2.03s | 1.08s | 5.01s | 2.71s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 3.01s | 1.15s | 3.83s | 2.66s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 1.67s | 1.51s | 4.54s | 2.57s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes with value-opcode_CREATE2] | 1.72s | 0.70s | 5.09s | 2.50s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 1.53s | 1.04s | 4.94s | 2.50s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 1.64s | 1.36s | 4.49s | 2.50s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value] | 2.16s | 1.03s | 4.01s | 2.40s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 1.65s | 0.78s | 4.77s | 2.40s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 1.48s | 1.04s | 4.65s | 2.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 1.47s | 1.08s | 4.57s | 2.37s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value] | 1.98s | 1.06s | 4.03s | 2.36s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 1.40s | 0.87s | 4.68s | 2.32s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of zero data-opcode_RETURN] | 2.43s | 0.78s | 3.68s | 2.30s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 1.38s | 0.89s | 4.56s | 2.28s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 1.46s | 1.07s | 4.26s | 2.26s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_False] | 1.67s | 0.88s | 4.21s | 2.26s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 1.34s | 0.77s | 4.65s | 2.25s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 1.25s | 0.67s | 4.81s | 2.24s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes with value-opcode_CREATE] | 1.81s | 0.69s | 4.07s | 2.19s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_infinities_2_scalar] | 1.71s | 0.83s | 4.01s | 2.18s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_byte_False] | 1.93s | 0.83s | 3.75s | 2.17s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_False] | 1.54s | 0.70s | 4.26s | 2.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 1.43s | 0.84s | 4.17s | 2.15s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_1000000] | 2.20s | 0.55s | 3.61s | 2.12s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_True] | 1.55s | 0.80s | 3.94s | 2.10s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 1.32s | 0.78s | 4.19s | 2.10s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 1.36s | 0.68s | 4.20s | 2.08s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes without value-opcode_CREATE2] | 1.74s | 0.65s | 3.84s | 2.08s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 1.33s | 0.79s | 4.09s | 2.06s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 1.28s | 0.27s | 4.64s | 2.06s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes without value-opcode_CREATE] | 1.68s | 0.64s | 3.73s | 2.02s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 1.39s | 0.66s | 3.93s | 1.99s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 1.39s | 0.59s | 3.96s | 1.98s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 1.41s | 0.67s | 3.80s | 1.96s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 1.37s | 0.67s | 3.77s | 1.94s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 1.23s | 0.55s | 4.01s | 1.93s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 1.19s | 0.57s | 3.99s | 1.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 1.29s | 0.68s | 3.75s | 1.91s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 0.96s | 0.25s | 4.43s | 1.88s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 0.99s | 0.19s | 4.37s | 1.85s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 1.27s | 0.60s | 3.65s | 1.84s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 0.97s | 0.20s | 4.27s | 1.81s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CREATE2] | 1.36s | 0.49s | 3.58s | 1.81s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 1.00s | 0.19s | 4.12s | 1.77s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 0.88s | 0.09s | 4.29s | 1.75s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_3_pair] | 1.03s | 0.20s | 4.02s | 1.75s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 0.96s | 0.18s | 4.03s | 1.73s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_2_sets] | 0.97s | 0.19s | 3.96s | 1.70s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 0.96s | 0.18s | 3.97s | 1.70s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 1.33s | 0.27s | 3.49s | 1.70s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 1.41s | 0.28s | 3.39s | 1.70s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 1.37s | 0.28s | 3.43s | 1.69s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 0.95s | 0.18s | 3.90s | 1.68s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_1_pair] | 1.02s | 0.25s | 3.74s | 1.67s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 1.17s | 0.18s | 3.61s | 1.66s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 0.97s | 0.19s | 3.77s | 1.64s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 1.28s | 0.33s | 3.32s | 1.64s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 1.10s | 0.25s | 3.54s | 1.63s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_1_pair_empty] | 0.96s | 0.18s | 3.73s | 1.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 0.98s | 0.24s | 3.64s | 1.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 1.37s | 0.27s | 3.22s | 1.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 1.19s | 0.26s | 3.40s | 1.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 0.97s | 0.18s | 3.70s | 1.61s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 1.37s | 0.28s | 3.19s | 1.61s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 1.17s | 0.25s | 3.41s | 1.61s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 0.96s | 0.18s | 3.61s | 1.58s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 1.16s | 0.28s | 3.32s | 1.58s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 1.00s | 0.20s | 3.54s | 1.58s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with zero data-opcode_CREATE2] | 1.29s | 0.26s | 3.17s | 1.57s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 1.21s | 0.28s | 3.22s | 1.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 0.96s | 0.21s | 3.50s | 1.56s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 1.14s | 0.25s | 3.21s | 1.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 0.96s | 0.18s | 3.42s | 1.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 0.96s | 0.20s | 3.38s | 1.51s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with zero data-opcode_CREATE] | 1.12s | 0.25s | 3.16s | 1.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 1.03s | 0.18s | 3.30s | 1.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 0.96s | 0.18s | 3.35s | 1.50s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_zero_input] | 0.98s | 0.25s | 3.25s | 1.50s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 1.14s | 0.26s | 3.09s | 1.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 1.00s | 0.20s | 3.28s | 1.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 0.96s | 0.24s | 3.27s | 1.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 0.98s | 0.19s | 3.29s | 1.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 0.96s | 0.20s | 3.30s | 1.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 0.95s | 0.19s | 3.32s | 1.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 0.97s | 0.19s | 3.29s | 1.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 0.96s | 0.18s | 3.31s | 1.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 0.95s | 0.18s | 3.30s | 1.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 0.96s | 0.18s | 3.29s | 1.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 0.94s | 0.19s | 3.29s | 1.47s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 1.07s | 0.18s | 3.16s | 1.47s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 0.98s | 0.21s | 3.18s | 1.45s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 1.00s | 0.18s | 3.11s | 1.43s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 0.97s | 0.20s | 3.12s | 1.43s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 0.96s | 0.19s | 3.11s | 1.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 1.01s | 0.19s | 3.04s | 1.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 0.97s | 0.19s | 3.09s | 1.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 0.98s | 0.18s | 3.07s | 1.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 0.97s | 0.19s | 3.08s | 1.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 1.01s | 0.19s | 3.03s | 1.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 0.95s | 0.20s | 3.04s | 1.40s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 0.96s | 0.18s | 3.01s | 1.38s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| risc0-v3.0.4 | 533 | 528 | 5 | 0 |
| sp1-v5.2.3 | 533 | 533 | 0 | 0 |
| zisk-v0.14.0 | 533 | 518 | 15 | 0 |

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

