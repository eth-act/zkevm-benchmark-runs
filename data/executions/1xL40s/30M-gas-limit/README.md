# 1xL40s - 30M-gas-limit

## Gas Limit Configuration - Execution

EEST benchmarks with 30M-gas-limit gas limit (execution results) on **1xL40s** hardware.

## Available EL Clients

- [reth](#reth)

---

## reth


## Execution Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | openvm-v1.4.1 | risc0-v3.0.4 | sp1-v5.2.3 | Avg |
|-----------|-----------|-----------|-----------|----------|
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_qube] | 9m 6.49s | 39m 35.83s | 1h 5m 44.55s | 38m 8.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_qube] | 8m 27.13s | 38m 34.77s | 1h 3m 3.24s | 36m 41.71s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_square] | 7m 59.04s | 36m 20.51s | 59m 4.41s | 34m 27.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1024_exp_2] | 8m 34.35s | 35m 51.63s | 58m 54.40s | 34m 26.79s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_square] | 7m 47.48s | 35m 39.62s | 56m 42.34s | 33m 23.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1045_gas_base_heavy] | 7m 44.86s | 33m 59.65s | 56m 47.13s | 32m 50.55s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_867_gas_base_heavy] | 8m 3.45s | 34m 38.86s | 55m 24.47s | 32m 42.26s |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_30M-blockchain_test-point_evaluation] | 9m 33.57s | 32m 58.88s | 55m 20.26s | 32m 37.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_800_gas_base_heavy] | 7m 37.36s | 33m 22.10s | 56m 22.58s | 32m 27.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_qube] | 7m 21.70s | 34m 5.65s | 53m 49.62s | 31m 45.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_616_gas_base_heavy] | 7m 25.23s | 32m 40.88s | 54m 50.15s | 31m 38.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_408_gas_base_heavy] | 6m 59.46s | 31m 1.75s | 51m 0.74s | 29m 40.65s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_264_exp_2] | 6m 50.52s | 30m 37.20s | 50m 18.61s | 29m 15.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_square] | 6m 44.05s | 30m 44.80s | 49m 14.64s | 28m 54.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_256_exp_2] | 6m 40.39s | 30m 8.73s | 49m 41.90s | 28m 50.34s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_base_heavy] | 5m 39.71s | 24m 44.40s | 40m 27.24s | 23m 37.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_8b_exp_896] | 5m 32.97s | 22m 10.70s | 34m 46.20s | 20m 49.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_8_exp_896] | 5m 27.22s | 21m 45.94s | 33m 35.47s | 20m 16.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_298_gas_exp_heavy] | 5m 3.70s | 21m 36.47s | 33m 58.59s | 20m 12.92s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_1_exp_heavy] | 4m 50.87s | 20m 48.51s | 32m 51.00s | 19m 30.13s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_8_exp_648] | 4m 38.57s | 19m 43.24s | 31m 6.78s | 18m 29.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_215_gas_exp_heavy] | 4m 43.07s | 19m 35.50s | 30m 48.62s | 18m 22.39s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_exp_heavy] | 4m 51.74s | 19m 12.32s | 30m 4.18s | 18m 2.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_3_even] | 3m 51.96s | 15m 9.50s | 27m 25.27s | 15m 28.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_qube] | 3m 3.92s | 13m 50.09s | 21m 55.99s | 12m 56.67s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_800_gas_exp_heavy] | 3m 18.99s | 13m 11.71s | 20m 42.07s | 12m 24.26s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_852_gas_exp_heavy] | 3m 18.87s | 13m 11.75s | 20m 26.62s | 12m 19.08s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_pairing_check] | 3m 20.53s | 13m 11.77s | 19m 58.51s | 12m 10.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_square] | 2m 52.71s | 13m 11.47s | 20m 19.33s | 12m 7.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_600_gas_exp_heavy] | 3m 13.34s | 12m 41.03s | 20m 4.57s | 11m 59.65s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_fp_to_g1] | 4m 28.86s | 9m 6.47s | 21m 31.30s | 11m 42.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_16b_exp_320] | 3m 7.79s | 12m 33.92s | 19m 17.17s | 11m 39.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_400_gas_exp_heavy] | 3m 12.71s | 11m 51.31s | 18m 52.22s | 11m 18.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_2] | 3m 0.80s | 11m 58.44s | 18m 56.36s | 11m 18.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_2_even] | 2m 52.74s | 11m 29.17s | 18m 10.03s | 10m 50.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 2m 51.51s | 11m 38.57s | 17m 51.02s | 10m 47.04s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_30M-blockchain_test-ecrecover] | 12m 17.63s | 4m 10.44s | 12m 39.97s | 9m 42.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_marius_1_even] | 2m 31.72s | 10m 17.18s | 15m 55.89s | 9m 34.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_765_gas_exp_heavy] | 2m 35.98s | 10m 2.43s | 15m 39.96s | 9m 26.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_24b_exp_168] | 2m 23.52s | 9m 46.98s | 15m 24.27s | 9m 11.59s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_3] | 2m 27.10s | 9m 35.93s | 14m 48.65s | 8m 57.23s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_256] | 2m 16.92s | 9m 20.89s | 14m 45.55s | 8m 47.78s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_fp_to_g2] | 3m 5.26s | 7m 47.52s | 15m 18.92s | 8m 43.90s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_256] | 2m 10.23s | 9m 12.06s | 14m 27.68s | 8m 36.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1360_gas_balanced] | 2m 8.68s | 8m 53.47s | 14m 35.64s | 8m 32.60s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_example_1] | 2m 8.61s | 9m 0.81s | 14m 13.47s | 8m 27.63s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 2m 12.16s | 8m 52.09s | 14m 18.15s | 8m 27.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_zkevm_worst_case] | 2m 7.56s | 8m 54.16s | 13m 47.04s | 8m 16.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_96] | 2m 3.19s | 8m 39.94s | 13m 55.86s | 8m 13.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_example_2] | 1m 59.53s | 8m 25.90s | 13m 55.14s | 8m 6.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_128] | 2m 2.65s | 8m 29.36s | 13m 38.83s | 8m 3.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_677_gas_base_heavy] | 2m 1.22s | 8m 29.95s | 13m 33.78s | 8m 1.65s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_8] | 2m 1.61s | 8m 18.70s | 13m 29.11s | 7m 56.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_96] | 1m 59.18s | 8m 18.06s | 13m 10.18s | 7m 49.14s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_65] | 1m 56.13s | 8m 18.06s | 13m 6.41s | 7m 46.87s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_4] | 1m 57.70s | 8m 12.32s | 13m 9.05s | 7m 46.36s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g2add] | 2m 18.66s | 7m 33.98s | 12m 41.36s | 7m 31.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 1m 56.63s | 7m 43.15s | 12m 43.02s | 7m 27.60s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1360n1] | 1m 53.96s | 7m 48.24s | 12m 28.25s | 7m 23.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_600_gas_balanced] | 1m 54.94s | 7m 45.25s | 12m 25.07s | 7m 21.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_64] | 1m 57.85s | 7m 38.65s | 12m 22.22s | 7m 19.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_64b_exp_512] | 1m 46.77s | 7m 38.48s | 12m 13.61s | 7m 12.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_408_gas_balanced] | 1m 45.68s | 7m 29.35s | 12m 14.74s | 7m 9.92s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_64b_exp_512] | 1m 43.28s | 7m 35.08s | 11m 59.78s | 7m 6.05s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_996_gas_balanced] | 1m 42.20s | 7m 28.96s | 11m 59.26s | 7m 3.47s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_30M-blockchain_test-blake2f] | 2m 12.64s | 8m 21.12s | 10m 33.04s | 7m 2.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1360n2] | 1m 43.95s | 7m 13.18s | 12m 9.05s | 7m 2.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_767_gas_balanced] | 1m 40.83s | 7m 23.80s | 11m 58.92s | 7m 1.18s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_40] | 1m 46.87s | 7m 22.83s | 11m 48.33s | 6m 59.34s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_balanced] | 1m 43.60s | 7m 13.72s | 11m 41.10s | 6m 52.81s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g1add] | 2m 17.80s | 6m 4.42s | 12m 4.36s | 6m 48.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1349n1] | 1m 46.08s | 7m 1.68s | 11m 2.93s | 6m 36.90s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_40] | 1m 40.60s | 6m 54.54s | 11m 12.24s | 6m 35.80s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_208_gas_balanced] | 1m 40.43s | 6m 51.27s | 11m 4.16s | 6m 31.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_128b_exp_1024] | 1m 32.54s | 6m 55.23s | 11m 7.91s | 6m 31.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_128b_exp_1024] | 1m 32.11s | 6m 52.57s | 11m 9.52s | 6m 31.40s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g1msm] | 2m 11.50s | ❌ SDK Crash | 10m 40.32s | 6m 25.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_36] | 1m 36.81s | 6m 42.29s | 10m 53.19s | 6m 24.10s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_1_even] | 1m 35.27s | 6m 47.69s | 10m 35.86s | 6m 19.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_256b_exp_1024] | 1m 27.57s | 6m 34.73s | 10m 49.18s | 6m 17.16s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_256b_exp_1024] | 1m 31.49s | 6m 34.64s | 10m 35.08s | 6m 13.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_cover_windows] | 1m 39.13s | 6m 30.80s | 10m 14.48s | 6m 8.14s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_512b_exp_1024] | 1m 29.25s | 6m 21.99s | 10m 20.51s | 6m 3.92s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_512b_exp_1024] | 1m 25.56s | 6m 15.43s | 10m 21.56s | 6m 0.85s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 1m 23.22s | 6m 13.35s | 9m 53.64s | 5m 50.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 1m 21.81s | 6m 5.96s | 9m 33.36s | 5m 40.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_1024b_exp_1024] | 1m 23.09s | 5m 57.32s | 9m 39.21s | 5m 39.87s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_1024b_exp_1024] | 1m 19.29s | 5m 55.18s | 9m 37.95s | 5m 37.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_32] | 1m 24.62s | 5m 47.81s | 9m 22.57s | 5m 31.67s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 1m 18.33s | 6m 6.69s | 9m 5.21s | 5m 30.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 1m 15.90s | 5m 41.27s | 8m 55.48s | 5m 17.55s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 1m 15.72s | 5m 44.97s | 8m 46.90s | 5m 15.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n3] | 1m 13.41s | 5m 7.30s | 7m 58.10s | 4m 46.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n2] | 1m 17.10s | 4m 57.51s | 7m 59.80s | 4m 44.81s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1152n1] | 1m 12.94s | 4m 56.48s | 7m 38.80s | 4m 36.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_qube] | 1m 1.92s | 4m 28.98s | 7m 1.51s | 4m 10.80s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g2msm] | 1m 14.71s | ❌ SDK Crash | 7m 3.41s | 4m 9.06s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul] | 3m 11.48s | 3m 17.22s | 5m 45.89s | 4m 4.86s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add] | 1m 43.82s | 50.41s | 9m 26.27s | 4m 0.17s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 3m 5.48s | 3m 11.57s | 5m 40.70s | 3m 59.25s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 3m 6.78s | 3m 12.28s | 5m 34.49s | 3m 57.85s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_square] | 58.21s | 4m 11.13s | 6m 39.82s | 3m 56.39s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n1] | 54.60s | 3m 48.50s | 6m 9.56s | 3m 37.55s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_191] | 54.02s | 3m 40.45s | 5m 29.85s | 3m 21.44s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_255] | 53.55s | 3m 33.10s | 5m 27.96s | 3m 18.20s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALLCODE] | ❌ SDK Crash | 3m 27.47s | 2m 37.33s | 3m 2.40s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DELEGATECALL] | ❌ SDK Crash | 3m 25.15s | 2m 36.60s | 3m 0.87s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODESIZE] | ❌ SDK Crash | 3m 18.68s | 2m 40.42s | 2m 59.55s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_STATICCALL] | ❌ SDK Crash | 3m 21.80s | 2m 35.81s | 2m 58.81s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODEHASH] | ❌ SDK Crash | 3m 18.76s | 2m 31.13s | 2m 54.95s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALL] | ❌ SDK Crash | 3m 21.53s | 2m 23.17s | 2m 52.35s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_30M-blockchain_test-contract_balance_1] | 49.16s | 3m 3.24s | 4m 39.88s | 2m 50.76s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_30M-blockchain_test-contract_balance_0] | 46.24s | 2m 58.54s | 4m 43.50s | 2m 49.43s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 2m 10.49s | 3m 32.31s | 2m 45.37s | 2m 49.39s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODECOPY] | ❌ SDK Crash | 3m 13.53s | 2m 17.48s | 2m 45.50s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_5_pair] | 1m 59.61s | 3m 29.11s | 2m 39.02s | 2m 42.58s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_4_pair] | 1m 53.67s | 3m 22.41s | 2m 40.59s | 2m 38.89s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_two_pairings] | 1m 51.09s | 3m 14.05s | 2m 38.54s | 2m 34.56s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_pair] | 1m 51.46s | 3m 13.63s | 2m 37.50s | 2m 34.20s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_one_pairing] | 1m 48.62s | 3m 13.62s | 2m 37.07s | 2m 33.10s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_191] | 41.53s | 2m 39.31s | 3m 52.38s | 2m 24.41s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_127] | 39.03s | 2m 33.37s | 3m 51.63s | 2m 21.34s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_191] | 40.23s | 2m 31.70s | 3m 43.65s | 2m 18.53s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SDIV-1] | 44.73s | 2m 26.23s | 3m 33.34s | 2m 14.77s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SDIV-0] | 42.99s | 2m 27.15s | 3m 32.87s | 2m 14.33s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DIV-0] | 36.54s | 2m 6.60s | 3m 5.13s | 1m 56.09s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_255] | 31.86s | 1m 59.53s | 2m 53.86s | 1m 48.42s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_127] | 31.72s | 1m 58.39s | 2m 54.02s | 1m 48.04s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_63] | 28.09s | 1m 56.86s | 2m 58.98s | 1m 47.98s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DIV-1] | 34.78s | 1m 57.30s | 2m 49.65s | 1m 47.24s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_255] | 32.96s | 1m 56.90s | 2m 45.84s | 1m 45.23s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_127] | 31.37s | 1m 54.05s | 2m 46.51s | 1m 43.98s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 2.63s | 1m 49.23s | 3m 19.20s | 1m 43.68s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_191] | 29.28s | 1m 49.36s | 2m 44.25s | 1m 40.96s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add_1_2] | 1m 58.23s | 49.12s | 1m 53.24s | 1m 33.53s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_255] | 24.78s | 1m 32.05s | 2m 15.04s | 1m 23.95s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_127] | 23.58s | 1m 29.72s | 2m 6.65s | 1m 19.98s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_63] | 18.93s | 1m 21.30s | 1m 58.74s | 1m 12.99s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_63] | 17.33s | 1m 15.40s | 1m 51.23s | 1m 7.99s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PREVRANDAO] | 13.38s | 57.70s | 2m 6.79s | 1m 5.96s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_diff_acc] | 53.40s | 23.38s | 1m 58.35s | 1m 5.04s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_b] | 56.26s | 21.17s | 1m 53.44s | 1m 3.62s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_b] | 56.08s | 19.74s | 1m 51.19s | 1m 2.34s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_diff_acc] | 53.15s | 20.66s | 1m 52.54s | 1m 2.12s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_a] | 53.01s | 19.36s | 1m 51.97s | 1m 1.45s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXP-] | 17.22s | 1m 7.05s | 1m 37.83s | 1m 0.70s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_63] | 14.61s | 59.26s | 1m 29.85s | 54.57s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty-opcode_REVERT] | 14.72s | 52.56s | 1m 27.72s | 51.67s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero-loop] | 10.65s | 48.52s | 1m 34.96s | 51.37s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-one-loop] | 10.57s | 47.34s | 1m 34.01s | 50.64s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP9] | 9.70s | 49.37s | 1m 26.56s | 48.54s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP3] | 9.85s | 47.63s | 1m 28.05s | 48.51s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP16] | 9.69s | 47.09s | 1m 28.25s | 48.35s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP2] | 9.72s | 48.21s | 1m 27.11s | 48.34s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP15] | 9.75s | 47.03s | 1m 28.14s | 48.31s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP13] | 10.04s | 47.12s | 1m 27.66s | 48.27s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP4] | 9.67s | 47.29s | 1m 27.83s | 48.26s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_STATICCALL] | 13.40s | 49.59s | 1m 21.74s | 48.24s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP6] | 9.66s | 47.93s | 1m 27.00s | 48.19s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP11] | 9.66s | 47.75s | 1m 26.74s | 48.05s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP7] | 10.42s | 47.19s | 1m 26.17s | 47.92s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP14] | 10.31s | 46.92s | 1m 26.20s | 47.80s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP12] | 10.45s | 46.30s | 1m 26.36s | 47.70s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP8] | 9.73s | 46.13s | 1m 27.25s | 47.70s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP10] | 10.16s | 46.16s | 1m 26.40s | 47.57s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP5] | 9.65s | 46.57s | 1m 26.34s | 47.52s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP1] | 9.65s | 46.86s | 1m 25.43s | 47.31s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_CALLCODE] | 13.52s | 47.36s | 1m 19.68s | 46.85s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_CALL] | 13.03s | 46.66s | 1m 20.29s | 46.66s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty-opcode_RETURN] | 13.11s | 46.54s | 1m 18.59s | 46.08s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ORIGIN] | 9.92s | 45.67s | 1m 22.59s | 46.06s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADDRESS] | 9.77s | 44.26s | 1m 22.47s | 45.50s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALLER] | 9.82s | 44.40s | 1m 20.88s | 45.03s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_COINBASE] | 10.41s | 44.17s | 1m 19.64s | 44.74s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty] | 9.18s | 39.64s | 1m 22.87s | 43.90s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SGT-] | 9.93s | 40.21s | 1m 17.87s | 42.67s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH32] | 8.55s | 36.00s | 1m 22.41s | 42.32s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH31] | 8.05s | 34.45s | 1m 23.60s | 42.03s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_False] | 2.09s | 32.90s | 1m 29.54s | 41.51s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 11.93s | 42.10s | 1m 10.31s | 41.44s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH30] | 8.12s | 34.62s | 1m 20.04s | 40.92s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_True] | 1.86s | 32.24s | 1m 28.08s | 40.73s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_False] | 1.92s | 32.38s | 1m 27.55s | 40.62s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_True] | 2.02s | 32.17s | 1m 27.51s | 40.57s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_CALLCODE] | 11.32s | 40.35s | 1m 9.13s | 40.27s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_STATICCALL] | 11.37s | 40.53s | 1m 8.57s | 40.16s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_CALL] | 11.11s | 40.02s | 1m 8.97s | 40.03s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EQ-] | 8.61s | 38.06s | 1m 11.04s | 39.24s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SAR-] | 9.44s | 39.02s | 1m 7.62s | 38.69s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH29] | 7.45s | 33.74s | 1m 13.91s | 38.37s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SMOD-] | 8.90s | 36.80s | 1m 7.71s | 37.81s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH27] | 7.42s | 33.02s | 1m 12.98s | 37.81s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH28] | 7.38s | 33.14s | 1m 12.52s | 37.68s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 8.12s | 37.79s | 1m 6.18s | 37.36s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SAR] | 8.51s | 36.76s | 1m 5.53s | 36.93s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH26] | 7.40s | 32.60s | 1m 7.14s | 35.71s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BLOBBASEFEE] | 7.71s | 34.45s | 1m 4.58s | 35.58s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 10.39s | 35.52s | 1m 0.16s | 35.36s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of zero data-opcode_REVERT] | 9.67s | 34.55s | 1m 0.75s | 34.99s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASPRICE] | 7.63s | 33.20s | 1m 3.86s | 34.90s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH25] | 7.38s | 30.58s | 1m 5.81s | 34.59s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH24] | 6.84s | 29.84s | 1m 6.52s | 34.40s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH23] | 6.58s | 27.79s | 1m 8.77s | 34.38s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SHR] | 8.66s | 35.93s | 57.81s | 34.13s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE new value] | 9.31s | 34.87s | 57.75s | 33.98s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH22] | 6.01s | 27.76s | 1m 7.44s | 33.73s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHL-] | 7.58s | 33.44s | 56.58s | 32.54s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of zero data-opcode_RETURN] | 8.76s | 32.65s | 55.23s | 32.21s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHR-] | 7.50s | 33.48s | 55.49s | 32.16s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MUL-] | 7.74s | 29.72s | 57.94s | 31.80s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH21] | 5.96s | 27.38s | 1m 1.78s | 31.70s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 0.59s | 56.74s | 35.77s | 31.03s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH19] | 5.90s | 25.56s | 59.45s | 30.30s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH20] | 5.57s | 26.04s | 58.24s | 29.95s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 7.40s | 31.78s | 50.39s | 29.86s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-0 bytes] | 7.36s | 30.48s | 51.41s | 29.75s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 7.02s | 30.02s | 51.10s | 29.38s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MOD-] | 6.89s | 28.40s | 52.39s | 29.23s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SIGNEXTEND-] | 6.73s | 29.73s | 50.28s | 28.91s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob and accessed] | 6.41s | 27.42s | 51.01s | 28.28s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-six blobs, access latest] | 6.79s | 27.11s | 50.58s | 28.16s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH15] | 5.48s | 23.45s | 55.54s | 28.15s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_TIMESTAMP] | 5.87s | 28.76s | 49.66s | 28.10s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 6.74s | 29.15s | 48.00s | 27.96s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 6.64s | 29.08s | 48.16s | 27.96s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH18] | 5.11s | 24.47s | 52.95s | 27.51s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_NUMBER] | 5.91s | 27.30s | 49.15s | 27.45s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 6.25s | 25.96s | 50.13s | 27.45s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 6.58s | 26.44s | 48.98s | 27.33s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 5.99s | 24.81s | 51.06s | 27.29s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 6.41s | 24.50s | 49.66s | 26.85s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 6.38s | 24.71s | 49.33s | 26.81s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 6.52s | 24.73s | 49.09s | 26.78s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 5.98s | 24.58s | 49.70s | 26.75s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 5.99s | 24.70s | 49.47s | 26.72s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 6.33s | 24.81s | 48.77s | 26.64s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 6.32s | 24.63s | 48.70s | 26.55s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 6.42s | 24.44s | 48.74s | 26.53s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH14] | 4.84s | 22.39s | 52.34s | 26.52s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 6.03s | 24.60s | 48.94s | 26.52s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 7.19s | 27.09s | 45.07s | 26.45s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH17] | 5.26s | 23.32s | 50.38s | 26.32s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CHAINID] | 5.67s | 25.48s | 47.58s | 26.24s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BASEFEE] | 5.69s | 25.04s | 47.75s | 26.16s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1] | 5.63s | 25.61s | 47.18s | 26.14s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_0] | 5.97s | 25.70s | 46.49s | 26.05s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add_infinities] | 8.03s | 25.78s | 44.23s | 26.01s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH16] | 4.99s | 23.19s | 49.61s | 25.93s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-100 bytes] | 6.18s | 26.71s | 43.48s | 25.46s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 5.52s | 25.16s | 45.60s | 25.43s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 5.78s | 25.06s | 45.09s | 25.31s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_False] | 6.64s | 27.87s | 40.89s | 25.13s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 6.15s | 26.11s | 43.10s | 25.12s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 6.18s | 26.13s | 42.80s | 25.04s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASLIMIT] | 5.51s | 24.61s | 44.85s | 24.99s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000] | 5.55s | 25.09s | 44.30s | 24.98s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_True] | 6.50s | 27.59s | 40.82s | 24.97s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 5.51s | 24.82s | 44.48s | 24.94s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 6.01s | 25.29s | 41.88s | 24.39s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 6.63s | 24.20s | 41.58s | 24.14s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH13] | 4.60s | 22.09s | 45.04s | 23.91s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH0] | 5.30s | 24.09s | 41.98s | 23.79s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 31.00s | 2.27s | 37.54s | 23.60s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE same value] | 6.65s | 24.26s | 39.08s | 23.33s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 5.53s | 24.26s | 39.83s | 23.21s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 5.47s | 24.57s | 39.54s | 23.19s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 5.53s | 24.27s | 39.27s | 23.02s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 5.88s | 24.00s | 39.06s | 22.98s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 5.50s | 25.12s | 38.15s | 22.92s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 5.47s | 24.33s | 38.91s | 22.90s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 5.52s | 24.13s | 38.78s | 22.81s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 5.52s | 24.21s | 38.35s | 22.69s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 5.46s | 24.53s | 37.91s | 22.63s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 5.49s | 23.93s | 38.27s | 22.56s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 5.47s | 24.29s | 37.91s | 22.56s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 5.48s | 23.85s | 38.08s | 22.47s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-100 bytes] | 5.44s | 23.28s | 38.11s | 22.28s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH11] | 4.54s | 20.85s | 41.05s | 22.14s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH12] | 4.47s | 20.82s | 40.85s | 22.05s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_False] | 4.96s | 22.22s | 38.93s | 22.04s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-0 bytes] | 5.49s | 21.89s | 38.72s | 22.03s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 5.42s | 22.74s | 37.00s | 21.72s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_False] | 5.05s | 21.59s | 37.95s | 21.53s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_True] | 4.86s | 21.74s | 37.70s | 21.43s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 4.70s | 20.42s | 39.09s | 21.40s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_True] | 4.78s | 21.60s | 37.75s | 21.38s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SLT-] | 4.74s | 21.31s | 35.38s | 20.48s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SUB-] | 4.58s | 21.14s | 33.66s | 19.79s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-1MiB] | 3.88s | 27.26s | 27.74s | 19.63s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH10] | 4.16s | 19.98s | 32.76s | 18.96s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADD-] | 4.63s | 19.99s | 31.62s | 18.74s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-1MiB] | 2.67s | 27.89s | 25.56s | 18.71s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 4.33s | 18.30s | 33.21s | 18.61s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH7] | 4.24s | 18.27s | 32.71s | 18.41s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 4.22s | 17.99s | 32.43s | 18.21s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH9] | 4.14s | 17.61s | 31.72s | 17.82s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH8] | 4.00s | 18.01s | 31.05s | 17.68s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH6] | 3.92s | 18.12s | 30.48s | 17.50s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 4.27s | 18.25s | 29.84s | 17.45s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 3.82s | 17.88s | 29.63s | 17.11s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BYTE-] | 3.84s | 17.70s | 29.69s | 17.08s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-5b] | 3.11s | 13.91s | 34.07s | 17.03s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_1000] | 3.87s | 17.84s | 29.36s | 17.02s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 1.82s | 31.64s | 17.60s | 17.02s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 3.60s | 17.59s | 29.77s | 16.98s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_0] | 3.76s | 18.06s | 29.05s | 16.95s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 3.79s | 17.87s | 29.00s | 16.89s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 3.76s | 17.79s | 29.02s | 16.86s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 3.75s | 17.82s | 28.98s | 16.85s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_10000] | 3.74s | 18.01s | 28.80s | 16.85s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH5] | 3.64s | 17.27s | 29.50s | 16.80s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 3.58s | 17.51s | 29.11s | 16.73s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-1MiB] | 2.17s | 27.83s | 19.82s | 16.61s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob but access non-existent index] | 3.82s | 17.12s | 28.05s | 16.33s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_LT-] | 3.67s | 16.57s | 28.23s | 16.16s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 4.18s | 15.84s | 28.45s | 16.15s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 1.95s | 27.22s | 19.27s | 16.15s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH4] | 3.54s | 16.87s | 28.02s | 16.14s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GT-] | 3.72s | 16.59s | 27.93s | 16.08s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 3.80s | 16.00s | 28.20s | 16.00s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_AND-] | 3.86s | 16.17s | 27.90s | 15.98s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-no blobs] | 3.81s | 17.18s | 26.85s | 15.95s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 3.48s | 16.40s | 27.85s | 15.91s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_XOR-] | 3.78s | 15.78s | 27.81s | 15.79s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_OR-] | 3.56s | 15.98s | 27.82s | 15.78s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 3.63s | 15.44s | 27.93s | 15.67s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 3.35s | 16.92s | 26.72s | 15.66s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 3.59s | 16.57s | 26.65s | 15.60s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 3.84s | 16.51s | 26.36s | 15.57s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 3.33s | 16.54s | 26.82s | 15.56s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 3.36s | 16.29s | 26.99s | 15.55s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 3.36s | 16.55s | 26.73s | 15.54s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 3.34s | 16.38s | 26.84s | 15.52s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 3.32s | 16.40s | 26.78s | 15.50s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 3.35s | 16.54s | 26.34s | 15.41s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH3] | 3.69s | 15.80s | 26.68s | 15.39s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 3.32s | 16.13s | 26.66s | 15.37s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP9] | 3.34s | 15.26s | 27.50s | 15.37s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 3.39s | 16.26s | 26.36s | 15.34s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP16] | 3.39s | 15.58s | 26.98s | 15.32s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP15] | 3.56s | 15.18s | 27.10s | 15.28s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP13] | 3.37s | 15.46s | 26.97s | 15.27s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 3.96s | 16.30s | 25.53s | 15.26s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP6] | 3.32s | 15.94s | 26.52s | 15.26s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP7] | 3.54s | 15.45s | 26.74s | 15.24s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP11] | 3.39s | 15.77s | 26.56s | 15.24s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP5] | 3.54s | 15.66s | 26.49s | 15.23s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP4] | 3.50s | 15.41s | 26.52s | 15.14s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP10] | 3.47s | 15.33s | 26.55s | 15.12s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP12] | 3.47s | 15.41s | 26.40s | 15.10s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP2] | 3.30s | 15.35s | 26.55s | 15.07s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP8] | 3.30s | 15.52s | 26.35s | 15.05s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP3] | 3.31s | 15.56s | 26.27s | 15.05s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP14] | 3.31s | 15.17s | 26.63s | 15.04s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-100 bytes] | 3.47s | 15.42s | 26.10s | 15.00s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP1] | 3.31s | 15.24s | 26.40s | 14.98s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 1.40s | 27.66s | 15.19s | 14.75s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-10KiB] | 4.09s | 13.36s | 26.35s | 14.60s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-1MiB] | 1.36s | 27.58s | 14.28s | 14.41s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 3.08s | 13.63s | 26.25s | 14.32s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 3.52s | 15.34s | 24.10s | 14.32s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-100 bytes] | 3.40s | 14.37s | 25.03s | 14.27s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH2] | 3.25s | 14.54s | 24.58s | 14.12s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 3.19s | 14.26s | 24.03s | 13.82s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 3.18s | 14.39s | 23.53s | 13.70s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH1] | 3.07s | 12.59s | 23.61s | 13.09s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 3.06s | 13.41s | 22.53s | 13.00s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 3.44s | 13.09s | 22.42s | 12.98s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_BALANCE] | 3.55s | 12.97s | 22.12s | 12.88s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 2.99s | 12.94s | 20.91s | 12.28s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 0.93s | 27.42s | 6.89s | 11.74s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_False] | 3.46s | 12.30s | 19.39s | 11.72s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 0.84s | 27.28s | 6.92s | 11.68s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SLOAD] | 3.39s | 12.18s | 19.21s | 11.59s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_True] | 3.26s | 12.43s | 18.98s | 11.56s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 4.87s | 3.49s | 25.42s | 11.26s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 3.23s | 11.53s | 17.89s | 10.88s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-00] | 1.99s | 11.98s | 18.54s | 10.84s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 2.90s | 12.46s | 16.92s | 10.76s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 2.60s | 9.86s | 19.80s | 10.75s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-10KiB] | 2.75s | 8.82s | 19.64s | 10.40s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-512] | 2.84s | 10.74s | 17.20s | 10.26s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_BALANCE] | 2.83s | 10.92s | 16.83s | 10.19s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-10KiB] | 2.74s | 9.75s | 17.93s | 10.14s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b5b] | 2.07s | 11.88s | 16.00s | 9.98s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 2.23s | 10.41s | 17.02s | 9.89s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_False] | 2.84s | 10.17s | 16.31s | 9.77s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_True] | 2.75s | 9.98s | 15.85s | 9.53s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB] | 2.75s | 9.75s | 16.00s | 9.50s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 1.63s | 12.35s | 13.88s | 9.29s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 2.45s | 9.78s | 15.62s | 9.28s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 1.71s | 12.72s | 13.32s | 9.25s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 1.48s | 14.14s | 11.59s | 9.07s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 2.56s | 9.10s | 15.53s | 9.06s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 2.46s | 9.32s | 15.39s | 9.05s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b5b] | 1.68s | 11.96s | 13.39s | 9.01s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 2.46s | 9.08s | 15.14s | 8.89s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 2.41s | 8.96s | 15.23s | 8.86s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-max code size] | 2.40s | 8.97s | 14.85s | 8.74s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSLOAD] | 1.43s | 11.29s | 12.64s | 8.45s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value] | 1.53s | 11.09s | 12.74s | 8.45s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b] | 1.48s | 11.51s | 12.03s | 8.34s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-5KiB] | 1.91s | 7.96s | 13.59s | 7.82s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b] | 1.16s | 10.77s | 10.29s | 7.41s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 2.27s | 7.34s | 11.73s | 7.11s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_True] | 1.37s | 9.42s | 9.99s | 6.92s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 1.61s | 6.72s | 12.08s | 6.80s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value] | 1.26s | 9.32s | 9.75s | 6.78s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 1.62s | 6.66s | 11.95s | 6.74s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 1.60s | 6.79s | 11.80s | 6.73s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-10KiB] | 1.58s | 6.55s | 11.78s | 6.64s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 1.66s | 6.53s | 11.69s | 6.62s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 1.60s | 6.59s | 11.60s | 6.60s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-max code size] | 1.57s | 6.56s | 11.64s | 6.59s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 1.57s | 6.54s | 11.58s | 6.56s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_False] | 1.17s | 6.91s | 7.73s | 5.27s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_2_scalar] | 5.47s | 3.33s | 5.84s | 4.88s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 0.93s | 5.38s | 7.20s | 4.50s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSLOAD] | 0.91s | 5.58s | 6.64s | 4.38s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 0.96s | 5.54s | 6.45s | 4.32s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 0.82s | 6.40s | 5.06s | 4.09s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 1.12s | 4.06s | 6.40s | 3.86s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_True] | 0.52s | 6.13s | 4.28s | 3.64s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 0.96s | 3.61s | 5.89s | 3.49s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_100000] | 0.81s | 3.29s | 5.78s | 3.29s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_False] | 0.81s | 3.27s | 5.01s | 3.03s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_2_scalar] | 0.84s | 3.12s | 4.96s | 2.97s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_True] | 0.79s | 3.09s | 4.67s | 2.85s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 0.46s | 4.01s | 2.93s | 2.47s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 0.34s | 4.65s | 1.47s | 2.15s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 0.38s | 4.54s | 1.48s | 2.13s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 0.52s | 2.19s | 2.77s | 1.83s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 0.52s | 2.08s | 2.77s | 1.79s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_REVERT] | 0.31s | 3.31s | 1.32s | 1.64s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_RETURN] | 0.30s | 3.23s | 1.27s | 1.60s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value] | 0.41s | 1.71s | 1.99s | 1.37s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 0.42s | 1.59s | 2.03s | 1.35s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 0.43s | 1.57s | 2.03s | 1.34s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value] | 0.37s | 1.62s | 1.84s | 1.28s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE] | 0.41s | 1.74s | 1.63s | 1.26s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 0.35s | 1.71s | 1.59s | 1.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 0.38s | 1.70s | 1.56s | 1.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 0.37s | 1.35s | 1.61s | 1.11s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_False] | 0.26s | 1.82s | 1.25s | 1.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 0.37s | 1.31s | 1.62s | 1.10s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 0.36s | 1.33s | 1.53s | 1.07s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 0.38s | 1.21s | 1.61s | 1.07s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 0.35s | 1.26s | 1.50s | 1.04s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 0.40s | 1.40s | 1.30s | 1.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 0.37s | 1.29s | 1.36s | 1.00s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 0.34s | 1.29s | 1.37s | 1.00s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 0.36s | 1.33s | 1.24s | 0.97s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 0.38s | 1.13s | 1.35s | 0.95s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 0.32s | 1.14s | 1.38s | 0.94s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE2] | 0.35s | 1.30s | 1.18s | 0.94s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE2] | 0.33s | 1.26s | 1.14s | 0.91s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000000] | 0.24s | 2.00s | 0.48s | 0.90s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 0.33s | 1.13s | 1.25s | 0.90s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE] | 0.35s | 1.23s | 1.10s | 0.89s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE] | 0.34s | 1.20s | 1.14s | 0.89s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 0.35s | 1.12s | 1.20s | 0.89s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 0.36s | 1.09s | 1.20s | 0.88s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 0.34s | 1.09s | 1.21s | 0.88s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 0.31s | 1.21s | 1.06s | 0.86s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 0.35s | 1.16s | 1.06s | 0.86s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 0.32s | 1.16s | 1.06s | 0.85s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 0.35s | 1.05s | 1.11s | 0.83s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 0.30s | 1.07s | 1.11s | 0.83s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 0.32s | 1.09s | 0.91s | 0.77s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 0.32s | 1.04s | 0.91s | 0.76s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE2] | 0.30s | 0.97s | 0.81s | 0.69s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 0.24s | 1.19s | 0.48s | 0.64s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 0.22s | 1.16s | 0.50s | 0.63s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 0.25s | 1.13s | 0.50s | 0.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 0.23s | 1.07s | 0.50s | 0.60s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 0.24s | 1.09s | 0.44s | 0.59s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 0.23s | 1.09s | 0.45s | 0.59s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 0.26s | 1.06s | 0.44s | 0.59s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_sets] | 0.31s | 0.92s | 0.52s | 0.58s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 0.23s | 1.10s | 0.42s | 0.58s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 0.26s | 1.05s | 0.44s | 0.58s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 0.26s | 1.03s | 0.44s | 0.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 0.23s | 1.04s | 0.45s | 0.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 0.24s | 1.04s | 0.44s | 0.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 0.25s | 1.03s | 0.44s | 0.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 0.23s | 1.08s | 0.40s | 0.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 0.23s | 1.10s | 0.37s | 0.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 0.23s | 1.03s | 0.44s | 0.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 0.24s | 1.08s | 0.38s | 0.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 0.23s | 1.10s | 0.37s | 0.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 0.24s | 1.05s | 0.40s | 0.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 0.26s | 1.04s | 0.38s | 0.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 0.25s | 1.03s | 0.39s | 0.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 0.24s | 1.04s | 0.38s | 0.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 0.23s | 1.04s | 0.40s | 0.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 0.26s | 1.02s | 0.39s | 0.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 0.24s | 1.03s | 0.39s | 0.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 0.27s | 1.03s | 0.36s | 0.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 0.22s | 1.04s | 0.38s | 0.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 0.24s | 1.04s | 0.37s | 0.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 0.22s | 1.04s | 0.38s | 0.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 0.26s | 1.01s | 0.36s | 0.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 0.22s | 1.05s | 0.37s | 0.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 0.23s | 1.04s | 0.37s | 0.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 0.21s | 1.04s | 0.38s | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 0.21s | 1.04s | 0.38s | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 0.21s | 1.04s | 0.37s | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 0.24s | 1.02s | 0.36s | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 0.22s | 1.05s | 0.36s | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 0.22s | 1.05s | 0.36s | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 0.22s | 1.05s | 0.36s | 0.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 0.22s | 1.04s | 0.36s | 0.54s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 0.23s | 0.82s | 0.37s | 0.47s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE2] | 0.23s | 0.79s | 0.39s | 0.47s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 0.22s | 0.78s | 0.39s | 0.46s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 0.25s | 0.78s | 0.35s | 0.46s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 0.24s | 0.78s | 0.36s | 0.46s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 0.24s | 0.76s | 0.38s | 0.46s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 0.25s | 0.76s | 0.34s | 0.45s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 0.23s | 0.78s | 0.33s | 0.45s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 0.24s | 0.76s | 0.34s | 0.45s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 0.21s | 0.77s | 0.34s | 0.44s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 0.22s | 0.78s | 0.33s | 0.44s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_zero_input] | 0.26s | 0.71s | 0.34s | 0.44s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair] | 0.26s | 0.69s | 0.36s | 0.44s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 0.21s | 0.75s | 0.34s | 0.43s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 0.23s | 0.74s | 0.32s | 0.43s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 0.23s | 0.75s | 0.32s | 0.43s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE] | 0.24s | 0.73s | 0.32s | 0.43s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 0.22s | 0.71s | 0.33s | 0.42s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_3_pair] | 0.24s | 0.66s | 0.18s | 0.36s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair_empty] | 0.20s | 0.61s | 0.18s | 0.33s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 0.18s | 0.55s | 0.06s | 0.27s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| openvm-v1.4.1 | 533 | 526 | 7 | 0 |
| risc0-v3.0.4 | 533 | 531 | 2 | 0 |
| sp1-v5.2.3 | 533 | 533 | 0 | 0 |

---

