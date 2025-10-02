# 1xL40s - 10M-gas-limit

## Gas Limit Configuration - Execution

EEST benchmarks with 10M-gas-limit gas limit (execution results) on **1xL40s** hardware.

## Available EL Clients

- [reth](#reth)

---

## reth


## Execution Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | risc0-v3.0.3 | sp1-v5.2.1 | zisk-v0.11.0 | Avg |
|-----------|-----------|-----------|-----------|----------|
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_5_qube] | 14m 9.42s | 21m 52.56s | ❌ SDK Crash | 18m 0.99s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_4_qube] | 13m 54.72s | 21m 25.51s | ❌ SDK Crash | 17m 40.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_1024_exp_2] | 12m 50.77s | 20m 15.67s | ❌ SDK Crash | 16m 33.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_5_square] | 12m 57.34s | 20m 0.61s | ❌ SDK Crash | 16m 28.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_4_square] | 12m 47.10s | 19m 34.06s | ❌ SDK Crash | 16m 10.58s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_1045_gas_base_heavy] | 12m 23.81s | 19m 23.29s | ❌ SDK Crash | 15m 53.55s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_867_gas_base_heavy] | 12m 21.23s | 19m 14.29s | ❌ SDK Crash | 15m 47.76s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_800_gas_base_heavy] | 12m 17.04s | 19m 3.79s | ❌ SDK Crash | 15m 40.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_3_qube] | 12m 35.89s | 18m 32.54s | ❌ SDK Crash | 15m 34.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_616_gas_base_heavy] | 12m 3.22s | 18m 27.60s | ❌ SDK Crash | 15m 15.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_3_square] | 12m 49.46s | 17m 10.73s | ❌ SDK Crash | 15m 0.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_408_gas_base_heavy] | 11m 34.98s | 17m 24.41s | ❌ SDK Crash | 14m 29.69s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_264_exp_2] | 11m 24.18s | 16m 58.42s | ❌ SDK Crash | 14m 11.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_256_exp_2] | 11m 6.73s | 16m 49.29s | ❌ SDK Crash | 13m 58.01s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_min_gas_base_heavy] | 9m 37.58s | 14m 2.45s | ❌ SDK Crash | 11m 50.01s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_8b_exp_896] | 8m 11.87s | 11m 30.21s | ❌ SDK Crash | 9m 51.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_exp_298_gas_exp_heavy] | 7m 57.17s | 11m 25.65s | ❌ SDK Crash | 9m 41.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_8_exp_896] | 8m 0.24s | 11m 14.35s | ❌ SDK Crash | 9m 37.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_1_exp_heavy] | 7m 41.62s | 10m 50.77s | ❌ SDK Crash | 9m 16.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_8_exp_648] | 7m 19.78s | 10m 14.96s | ❌ SDK Crash | 8m 47.37s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_exp_215_gas_exp_heavy] | 7m 12.37s | 10m 12.01s | ❌ SDK Crash | 8m 42.19s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_min_gas_exp_heavy] | 7m 8.13s | 10m 2.75s | ❌ SDK Crash | 8m 35.44s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-point_evaluation] | 12m 59.63s | 3m 10.16s | ❌ SDK Crash | 8m 4.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_guido_3_even] | 5m 47.58s | 8m 44.36s | ❌ SDK Crash | 7m 15.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_2_qube] | 5m 18.96s | 7m 33.26s | ❌ SDK Crash | 6m 26.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_800_gas_exp_heavy] | 4m 49.52s | 6m 45.90s | ❌ SDK Crash | 5m 47.71s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_852_gas_exp_heavy] | 4m 47.57s | 6m 46.72s | ❌ SDK Crash | 5m 47.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_600_gas_exp_heavy] | 4m 40.96s | 6m 35.98s | ❌ SDK Crash | 5m 38.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_16b_exp_320] | 4m 35.09s | 6m 27.15s | ❌ SDK Crash | 5m 31.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_pawel_2] | 4m 24.16s | 6m 12.17s | ❌ SDK Crash | 5m 18.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_400_gas_exp_heavy] | 4m 23.37s | 6m 10.34s | ❌ SDK Crash | 5m 16.86s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_2_exp_heavy] | 4m 12.83s | 5m 48.46s | ❌ SDK Crash | 5m 0.64s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_guido_2_even] | 4m 7.73s | 5m 49.91s | ❌ SDK Crash | 4m 58.82s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_2_square] | 4m 55.13s | 6m 59.94s | 1m 41.69s | 4m 32.25s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_pairing_check] | 5m 17.19s | 6m 36.31s | 1m 25.94s | 4m 26.48s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_marius_1_even] | 3m 36.19s | 5m 13.88s | ❌ SDK Crash | 4m 25.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_24b_exp_168] | 3m 38.40s | 5m 8.69s | ❌ SDK Crash | 4m 23.54s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_fp_to_g1] | 3m 30.01s | 7m 18.42s | 1m 16.54s | 4m 1.66s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_fp_to_g2] | 4m 32.16s | 5m 10.38s | 58.75s | 3m 33.76s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_765_gas_exp_heavy] | 3m 39.79s | 5m 6.82s | 1m 40.12s | 3m 28.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_pawel_3] | 3m 27.81s | 4m 54.54s | 1m 36.29s | 3m 19.55s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_1360_gas_balanced] | 3m 36.10s | 4m 43.32s | 1m 25.11s | 3m 14.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_32b_exp_256] | 3m 26.51s | 4m 46.48s | 1m 26.76s | 3m 13.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_32b_exp_256] | 3m 20.44s | 4m 49.10s | 1m 28.86s | 3m 12.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_heavy] | 3m 19.26s | 4m 39.69s | 1m 33.59s | 3m 10.85s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_example_1] | 3m 21.33s | 4m 44.86s | 1m 21.09s | 3m 9.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_zkevm_worst_case] | 3m 13.84s | 4m 37.58s | 1m 25.85s | 3m 5.76s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_32b_exp_96] | 3m 15.06s | 4m 32.30s | 1m 26.62s | 3m 4.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_8] | 3m 7.62s | 4m 19.77s | 1m 34.61s | 3m 0.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_128] | 3m 9.67s | 4m 29.02s | 1m 22.60s | 3m 0.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_677_gas_base_heavy] | 3m 10.20s | 4m 28.64s | 1m 21.64s | 3m 0.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_guido_1_even] | 2m 28.80s | 3m 28.39s | ❌ SDK Crash | 2m 58.60s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_example_2] | 3m 9.43s | 4m 26.53s | 1m 16.37s | 2m 57.44s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_32b_exp_96] | 3m 5.77s | 4m 24.26s | 1m 21.30s | 2m 57.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_pawel_4] | 3m 10.87s | 4m 19.21s | 1m 19.99s | 2m 56.69s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_65] | 3m 1.56s | 4m 17.01s | 1m 19.57s | 2m 52.71s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_g2add] | 3m 14.23s | 4m 12.03s | 1m 0.90s | 2m 49.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_pawel_4_exp_heavy] | 2m 58.16s | 4m 6.84s | 1m 16.73s | 2m 47.24s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_600_gas_balanced] | 2m 58.68s | 4m 6.09s | 1m 10.13s | 2m 44.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_64] | 2m 54.15s | 4m 4.07s | 1m 15.62s | 2m 44.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_1360n1] | 2m 54.49s | 4m 2.41s | 1m 14.53s | 2m 43.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_32b_exp_40] | 2m 47.67s | 3m 58.56s | 1m 20.11s | 2m 42.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_408_gas_balanced] | 2m 51.97s | 4m 4.64s | 1m 9.59s | 2m 42.06s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_996_gas_balanced] | 2m 51.92s | 4m 5.17s | 1m 5.89s | 2m 41.00s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_64b_exp_512] | 2m 42.12s | 4m 6.02s | 1m 5.52s | 2m 37.88s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_767_gas_balanced] | 2m 48.12s | 3m 59.81s | 1m 4.97s | 2m 37.63s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_min_gas_balanced] | 2m 45.95s | 3m 54.85s | 1m 11.38s | 2m 37.39s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_64b_exp_512] | 2m 39.02s | 4m 7.37s | 1m 5.05s | 2m 37.15s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-blake2f] | 2m 56.03s | 3m 32.55s | 1m 13.77s | 2m 34.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_1360n2] | 2m 39.34s | 3m 43.61s | 1m 8.47s | 2m 30.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_40] | 2m 38.34s | 3m 41.75s | 1m 10.59s | 2m 30.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_exp_208_gas_balanced] | 2m 37.48s | 3m 40.65s | 1m 11.04s | 2m 29.72s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_g1add] | 2m 35.07s | 3m 55.86s | 58.21s | 2m 29.71s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_1349n1] | 2m 39.52s | 3m 41.65s | 1m 7.87s | 2m 29.68s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_36] | 2m 31.72s | 3m 36.14s | 1m 8.70s | 2m 25.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_128b_exp_1024] | 2m 29.25s | 3m 46.90s | 56.19s | 2m 24.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_128b_exp_1024] | 2m 23.41s | 3m 46.90s | 56.81s | 2m 22.37s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_32b_exp_cover_windows] | 2m 28.49s | 3m 26.37s | 1m 4.18s | 2m 19.68s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_256b_exp_1024] | 2m 17.34s | 3m 35.67s | 51.80s | 2m 14.94s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_256b_exp_1024] | 2m 18.30s | 3m 33.77s | 51.77s | 2m 14.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_512b_exp_1024] | 2m 15.79s | 3m 32.59s | 50.41s | 2m 12.93s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_512b_exp_1024] | 2m 15.69s | 3m 30.87s | 50.34s | 2m 12.30s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ecrecover] | 1m 37.67s | 4m 19.55s | 39.13s | 2m 12.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_2_pow_0x10001] | 2m 23.08s | 3m 21.53s | 50.46s | 2m 11.69s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_1_pow_0x10001] | 2m 20.31s | 3m 14.87s | 53.44s | 2m 9.54s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_32_exp_32] | 2m 13.22s | 3m 5.34s | 59.75s | 2m 6.10s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_g1msm] | ❌ SDK Crash | 3m 32.05s | 39.17s | 2m 5.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_3_pow_0x10001] | 2m 9.41s | 3m 14.03s | 47.11s | 2m 3.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_4_pow_0x10001] | 2m 3.19s | 3m 8.31s | 45.30s | 1m 58.94s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_5_pow_0x10001] | 1m 59.32s | 3m 2.89s | 44.54s | 1m 55.58s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_200n2] | 2m 13.65s | 2m 37.94s | 50.16s | 1m 53.92s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_200n3] | 1m 55.01s | 2m 39.93s | 50.02s | 1m 48.32s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_1152n1] | 1m 48.52s | 2m 34.49s | 48.36s | 1m 43.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_1_qube] | 1m 44.32s | 2m 23.67s | 40.34s | 1m 36.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_nagydani_1_square] | 1m 38.53s | 2m 15.34s | 38.14s | 1m 30.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_vul_common_200n1] | 1m 29.81s | 2m 2.80s | 40.31s | 1m 24.30s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bls12_g2msm] | ❌ SDK Crash | 2m 14.58s | 28.88s | 1m 21.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_even_1024b_exp_1024] | 1m 17.66s | 2m 1.24s | 30.55s | 1m 16.48s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_odd_1024b_exp_1024] | 1m 17.13s | 1m 57.50s | 29.70s | 1m 14.77s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_add] | 22.26s | 2m 49.27s | 27.60s | 1m 13.04s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MULMOD-mod_bits_191] | 1m 11.56s | 1m 50.86s | 31.87s | 1m 11.43s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MULMOD-mod_bits_255] | 1m 11.07s | 1m 46.74s | 31.12s | 1m 9.64s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul] | 1m 23.11s | 1m 44.06s | 6.15s | 1m 4.44s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 1m 23.98s | 44.02s | 1m 1.75s | 1m 3.25s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_1_2_32_byte_scalar] | 1m 19.93s | 1m 42.48s | 6.20s | 1m 2.87s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_scalar] | 1m 20.92s | 1m 40.97s | 5.84s | 1m 2.57s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_5_pair] | 1m 22.53s | 42.67s | 53.30s | 59.50s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_4_pair] | 1m 21.95s | 42.97s | 51.79s | 58.90s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_2_pair] | 1m 19.59s | 43.70s | 43.22s | 55.50s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_two_pairings] | 1m 18.74s | 43.04s | 42.84s | 54.88s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MULMOD-mod_bits_127] | 52.61s | 1m 17.85s | 23.66s | 51.37s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_SMOD-mod_bits_191] | 53.02s | 1m 16.24s | 24.15s | 51.13s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_one_pairing] | 1m 15.40s | 43.65s | 33.36s | 50.80s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_STATICCALL] | 1m 16.39s | 44.24s | 26.28s | 48.97s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DELEGATECALL] | 1m 15.89s | 44.82s | 25.64s | 48.78s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MOD-mod_bits_191] | 50.25s | 1m 12.44s | 23.34s | 48.68s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODESIZE] | 1m 14.61s | 44.85s | 25.82s | 48.43s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALL] | 1m 15.29s | 44.45s | 24.75s | 48.16s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALLCODE] | 1m 15.82s | 42.67s | 25.90s | 48.13s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SDIV-1] | 50.53s | 1m 9.96s | 22.77s | 47.76s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SDIV-0] | 50.00s | 1m 8.78s | 22.53s | 47.10s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODEHASH] | 1m 14.73s | 39.69s | 24.30s | 46.24s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODECOPY] | 1m 11.30s | 42.30s | 24.12s | 45.91s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DIV-0] | 43.60s | 1m 0.19s | 20.74s | 41.51s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 39.85s | 50.66s | 32.31s | 40.94s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MULMOD-mod_bits_63] | 40.31s | 58.21s | 20.54s | 39.69s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_SMOD-mod_bits_255] | 40.25s | 57.82s | 20.39s | 39.48s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DIV-1] | 40.38s | 56.11s | 19.42s | 38.64s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_SMOD-mod_bits_127] | 40.04s | 58.33s | 17.33s | 38.57s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MOD-mod_bits_255] | 39.10s | 54.86s | 18.82s | 37.59s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_191] | 37.35s | 53.88s | 20.32s | 37.18s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MOD-mod_bits_127] | 37.55s | 56.41s | 16.04s | 36.67s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_infinities_32_byte_scalar] | 46.70s | 58.54s | 1.89s | 35.71s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PREVRANDAO] | 30.97s | 40.76s | 28.36s | 33.37s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_255] | 31.71s | 45.13s | 18.78s | 31.87s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_127] | 29.57s | 42.08s | 15.69s | 29.11s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_add_1_2] | 22.00s | 36.01s | 27.01s | 28.34s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_SMOD-mod_bits_63] | 26.61s | 39.16s | 13.94s | 26.57s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_MOD-mod_bits_63] | 24.56s | 36.85s | 12.76s | 24.72s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-empty-opcode_REVERT] | 21.54s | 28.99s | 18.83s | 23.12s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_CALLCODE] | 20.44s | 26.38s | 17.49s | 21.44s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_STATICCALL] | 20.75s | 25.73s | 17.56s | 21.34s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_CALL] | 20.04s | 26.03s | 17.54s | 21.20s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_EXP-] | 22.63s | 34.61s | 6.26s | 21.17s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-empty-opcode_RETURN] | 20.18s | 25.93s | 17.07s | 21.06s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_63] | 20.47s | 28.64s | 13.22s | 20.78s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_CALLCODE] | 19.11s | 24.53s | 16.69s | 20.11s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_CALL] | 18.58s | 24.18s | 16.53s | 19.76s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_STATICCALL] | 18.51s | 24.21s | 16.34s | 19.68s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-zero-loop] | 16.41s | 25.24s | 15.57s | 19.07s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_diff_acc_to_diff_acc] | 10.24s | 40.08s | 6.37s | 18.89s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_DELEGATECALL] | 17.60s | 22.95s | 15.62s | 18.72s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-one-loop] | 16.17s | 24.05s | 15.93s | 18.72s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH32] | 14.77s | 20.75s | 20.04s | 18.52s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_diff_acc_to_b] | 9.36s | 40.27s | 5.83s | 18.49s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH31] | 14.14s | 21.60s | 19.07s | 18.27s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_diff_acc] | 9.32s | 39.53s | 5.76s | 18.20s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_a] | 8.32s | 39.97s | 5.48s | 17.93s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP3] | 14.98s | 23.84s | 14.68s | 17.83s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH30] | 13.66s | 20.84s | 18.93s | 17.81s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP2] | 14.58s | 24.36s | 14.19s | 17.71s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP5] | 14.72s | 24.16s | 14.15s | 17.67s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_b] | 8.31s | 38.94s | 5.57s | 17.61s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP4] | 14.63s | 23.63s | 14.52s | 17.60s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP1] | 14.74s | 23.70s | 14.22s | 17.55s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP6] | 14.76s | 23.59s | 14.19s | 17.51s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB of zero data-opcode_REVERT] | 18.56s | 19.81s | 12.88s | 17.08s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH29] | 13.30s | 19.55s | 17.92s | 16.92s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH28] | 13.21s | 19.39s | 17.84s | 16.81s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP7] | 14.03s | 22.51s | 13.81s | 16.78s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-empty] | 13.78s | 22.63s | 13.79s | 16.73s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SGT-] | 15.25s | 21.87s | 13.02s | 16.71s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_DELEGATECALL] | 15.74s | 19.85s | 14.29s | 16.63s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH27] | 13.14s | 18.81s | 17.51s | 16.49s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_ADDRESS] | 14.59s | 19.26s | 14.25s | 16.03s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB of zero data-opcode_RETURN] | 17.54s | 18.53s | 11.68s | 15.92s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_COINBASE] | 14.61s | 18.84s | 14.29s | 15.91s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_ORIGIN] | 14.44s | 18.78s | 14.13s | 15.78s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH26] | 12.75s | 18.13s | 16.31s | 15.73s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CALLER] | 14.93s | 18.49s | 12.94s | 15.45s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_EQ-] | 13.73s | 20.39s | 12.02s | 15.38s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH25] | 12.46s | 17.18s | 15.94s | 15.19s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SMOD-] | 13.36s | 19.19s | 12.48s | 15.01s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP8] | 12.59s | 19.94s | 12.37s | 14.97s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH24] | 11.88s | 17.29s | 15.72s | 14.96s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_ISZERO] | 13.49s | 19.13s | 11.96s | 14.86s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH23] | 11.17s | 18.56s | 14.34s | 14.69s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH22] | 11.07s | 17.57s | 13.96s | 14.20s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 11.87s | 18.26s | 12.00s | 14.04s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 11.64s | 18.47s | 11.92s | 14.01s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 11.72s | 18.30s | 11.98s | 14.00s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 11.74s | 18.16s | 12.09s | 13.99s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 11.92s | 18.26s | 11.79s | 13.99s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 11.78s | 18.36s | 11.73s | 13.96s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 11.81s | 18.15s | 11.89s | 13.95s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 11.84s | 18.26s | 11.70s | 13.94s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SAR-] | 13.72s | 20.07s | 7.83s | 13.87s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP9] | 11.43s | 18.23s | 11.32s | 13.66s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH19] | 10.21s | 16.72s | 13.25s | 13.39s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_add_infinities] | 11.89s | 15.38s | 12.73s | 13.33s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH21] | 10.48s | 15.88s | 13.24s | 13.20s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-six blobs, access latest] | 11.04s | 14.68s | 13.27s | 12.99s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-shift_right_SAR] | 12.86s | 18.60s | 7.50s | 12.99s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH20] | 10.13s | 15.71s | 13.00s | 12.95s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 22.03s | 9.81s | 6.74s | 12.86s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-one blob and accessed] | 11.13s | 14.24s | 12.99s | 12.78s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_REVERT] | 13.25s | 14.79s | 9.90s | 12.65s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_MUL-] | 11.61s | 20.83s | 5.35s | 12.60s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP10] | 10.15s | 16.61s | 10.20s | 12.32s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-shift_right_SHR] | 11.81s | 17.06s | 7.32s | 12.06s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_MOD-] | 10.71s | 15.75s | 9.56s | 12.01s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SSTORE new value] | 11.85s | 14.03s | 9.98s | 11.96s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH18] | 9.73s | 14.27s | 11.75s | 11.91s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 10.34s | 16.19s | 9.20s | 11.91s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 10.33s | 16.32s | 9.08s | 11.91s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SHR-] | 11.92s | 16.56s | 6.91s | 11.80s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 10.33s | 16.00s | 9.06s | 11.79s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_RETURN] | 12.98s | 13.23s | 9.03s | 11.74s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 10.19s | 16.04s | 8.95s | 11.73s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP11] | 9.82s | 15.35s | 9.76s | 11.64s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH15] | 9.49s | 14.54s | 10.73s | 11.59s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SHL-] | 11.47s | 16.08s | 7.02s | 11.53s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH17] | 9.39s | 13.71s | 11.44s | 11.51s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH16] | 9.42s | 13.41s | 11.27s | 11.37s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH14] | 8.89s | 13.79s | 10.55s | 11.08s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CODESIZE] | 11.02s | 13.81s | 7.80s | 10.87s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_BLOBBASEFEE] | 11.25s | 14.02s | 7.02s | 10.77s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 9.44s | 11.77s | 10.97s | 10.73s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 9.13s | 11.79s | 11.21s | 10.71s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 8.84s | 12.04s | 11.17s | 10.69s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 8.87s | 11.82s | 11.29s | 10.66s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP12] | 8.73s | 13.88s | 9.37s | 10.66s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 8.57s | 11.97s | 11.33s | 10.62s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 8.59s | 11.94s | 11.17s | 10.56s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 8.61s | 11.78s | 11.28s | 10.56s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 8.67s | 11.89s | 11.10s | 10.55s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 8.63s | 11.81s | 11.20s | 10.55s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 8.59s | 11.73s | 11.28s | 10.53s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 10.29s | 14.53s | 6.66s | 10.49s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SIGNEXTEND-] | 10.25s | 15.15s | 6.04s | 10.48s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 8.66s | 11.76s | 11.00s | 10.47s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 8.67s | 11.86s | 10.90s | 10.47s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 10.01s | 14.66s | 6.70s | 10.45s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH13] | 8.64s | 12.16s | 9.72s | 10.17s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_GASPRICE] | 10.44s | 13.51s | 6.47s | 10.14s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 9.50s | 14.02s | 6.75s | 10.09s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_False-0 bytes] | 9.55s | 14.03s | 6.53s | 10.04s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH12] | 8.25s | 12.03s | 9.74s | 10.01s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 9.40s | 13.94s | 6.08s | 9.81s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP13] | 8.10s | 12.70s | 8.47s | 9.76s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 9.13s | 12.88s | 7.08s | 9.70s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH11] | 8.16s | 11.83s | 8.86s | 9.62s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 8.75s | 12.94s | 7.14s | 9.61s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-100 bytes] | 9.21s | 12.76s | 6.73s | 9.57s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP14] | 7.65s | 12.30s | 8.06s | 9.34s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_0] | 9.52s | 11.60s | 6.80s | 9.30s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_1000000] | 9.51s | 11.54s | 6.86s | 9.30s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_100000] | 9.32s | 11.61s | 6.98s | 9.30s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 8.54s | 12.24s | 7.09s | 9.29s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_1] | 9.46s | 11.55s | 6.73s | 9.25s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mem_size_1000] | 9.46s | 11.48s | 6.78s | 9.24s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_True] | 9.65s | 10.37s | 7.63s | 9.22s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_False] | 9.48s | 10.38s | 7.54s | 9.13s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SSTORE same value] | 7.95s | 10.67s | 8.14s | 8.92s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP15] | 7.26s | 11.50s | 7.80s | 8.85s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_TIMESTAMP] | 8.73s | 11.75s | 5.91s | 8.79s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_NUMBER] | 8.78s | 11.77s | 5.74s | 8.76s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_False-100 bytes] | 8.14s | 11.10s | 6.91s | 8.71s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH10] | 7.62s | 10.05s | 8.29s | 8.65s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 7.80s | 11.24s | 5.92s | 8.32s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH9] | 7.43s | 9.35s | 7.93s | 8.23s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SWAP16] | 6.79s | 10.60s | 7.28s | 8.23s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_BASEFEE] | 8.19s | 10.49s | 5.97s | 8.22s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CHAINID] | 8.02s | 10.88s | 5.68s | 8.19s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH7] | 7.51s | 9.53s | 7.31s | 8.12s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 7.43s | 10.28s | 6.62s | 8.11s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH8] | 7.42s | 9.06s | 7.49s | 7.99s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SLT-] | 7.45s | 10.49s | 5.65s | 7.86s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH0] | 8.10s | 9.75s | 5.72s | 7.85s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_GAS] | 7.88s | 10.00s | 5.60s | 7.83s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_GASLIMIT] | 7.94s | 9.68s | 5.69s | 7.77s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH6] | 7.15s | 9.10s | 6.90s | 7.72s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_SUB-] | 7.35s | 10.12s | 5.17s | 7.54s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_True-0 bytes] | 6.99s | 10.19s | 5.40s | 7.53s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-1MiB] | 11.68s | 6.45s | 4.09s | 7.40s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-5b] | 7.90s | 8.81s | 5.48s | 7.40s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 7.18s | 9.33s | 5.47s | 7.33s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 6.78s | 9.41s | 5.74s | 7.31s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 6.77s | 9.35s | 5.80s | 7.30s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 7.05s | 9.29s | 5.50s | 7.28s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH5] | 6.85s | 8.35s | 6.59s | 7.26s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 6.65s | 9.34s | 5.79s | 7.26s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 6.71s | 9.39s | 5.62s | 7.24s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 6.79s | 9.37s | 5.54s | 7.23s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 6.74s | 9.50s | 5.43s | 7.22s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 6.74s | 9.28s | 5.55s | 7.19s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 6.67s | 9.24s | 5.57s | 7.16s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 6.72s | 9.32s | 5.42s | 7.16s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 6.71s | 9.23s | 5.45s | 7.13s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-one blob but access non-existent index] | 7.33s | 8.20s | 5.69s | 7.07s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 6.44s | 9.25s | 5.36s | 7.02s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_ADD-] | 6.65s | 9.39s | 4.92s | 6.99s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-IDENTITY] | 12.37s | 5.53s | 3.02s | 6.97s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 6.26s | 9.02s | 5.52s | 6.93s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH4] | 6.44s | 8.22s | 5.96s | 6.87s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-no blobs] | 7.31s | 7.90s | 5.38s | 6.86s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH3] | 6.27s | 8.10s | 5.63s | 6.67s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 6.33s | 8.47s | 5.13s | 6.64s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP7] | 7.11s | 8.01s | 4.63s | 6.58s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_BYTE-] | 6.22s | 8.73s | 4.62s | 6.52s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP8] | 6.17s | 8.64s | 4.60s | 6.47s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_AND-] | 6.70s | 8.14s | 4.52s | 6.46s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-1MiB] | 10.48s | 6.03s | 2.75s | 6.42s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP16] | 6.19s | 7.91s | 5.07s | 6.39s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP4] | 6.33s | 7.93s | 4.86s | 6.37s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-10KiB] | 6.43s | 7.36s | 5.22s | 6.34s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP5] | 6.18s | 8.23s | 4.59s | 6.33s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP14] | 6.30s | 7.91s | 4.78s | 6.33s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP13] | 6.26s | 8.01s | 4.71s | 6.33s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP9] | 6.19s | 7.87s | 4.85s | 6.30s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP11] | 6.15s | 7.85s | 4.90s | 6.30s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP1] | 6.22s | 7.97s | 4.55s | 6.25s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP15] | 6.19s | 7.96s | 4.56s | 6.24s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP10] | 6.21s | 7.96s | 4.52s | 6.23s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP12] | 6.08s | 7.96s | 4.62s | 6.22s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP6] | 6.17s | 7.90s | 4.58s | 6.22s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-calldata_length_1000] | 5.79s | 7.93s | 4.90s | 6.21s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP3] | 6.18s | 7.90s | 4.55s | 6.21s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_LT-] | 5.90s | 8.28s | 4.44s | 6.20s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_DUP2] | 6.16s | 7.84s | 4.55s | 6.18s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 5.37s | 7.15s | 5.99s | 6.17s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 5.60s | 8.28s | 4.63s | 6.17s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_GT-] | 5.86s | 8.26s | 4.33s | 6.15s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-calldata_length_0] | 5.74s | 7.67s | 5.00s | 6.13s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_True-100 bytes] | 5.66s | 7.59s | 5.07s | 6.11s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_OR-] | 5.61s | 8.06s | 4.64s | 6.10s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_XOR-] | 5.60s | 7.93s | 4.68s | 6.07s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-calldata_length_10000] | 5.74s | 7.59s | 4.82s | 6.05s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH2] | 5.99s | 7.47s | 4.57s | 6.01s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 5.53s | 8.08s | 4.21s | 5.94s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-100 bytes] | 5.60s | 7.49s | 4.63s | 5.91s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 5.28s | 7.36s | 4.98s | 5.87s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-SHA2-256] | 1.31s | 11.95s | 4.12s | 5.79s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-from_origin_True-non_zero_value_True] | 5.32s | 7.34s | 4.65s | 5.77s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 5.18s | 7.08s | 5.01s | 5.75s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_PUSH1] | 5.64s | 7.05s | 4.40s | 5.70s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-from_origin_True-non_zero_value_False] | 5.28s | 7.27s | 4.51s | 5.69s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-from_origin_False-non_zero_value_False] | 5.37s | 7.32s | 4.37s | 5.68s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 5.53s | 6.92s | 4.52s | 5.66s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 4.93s | 6.95s | 5.05s | 5.64s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-from_origin_False-non_zero_value_True] | 5.26s | 7.12s | 4.42s | 5.60s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 5.23s | 6.68s | 4.72s | 5.54s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODEHASH] | 4.84s | 5.92s | 5.84s | 5.54s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 5.23s | 6.59s | 4.65s | 5.49s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-00] | 6.99s | 5.36s | 4.10s | 5.48s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_NOT] | 4.96s | 7.26s | 4.08s | 5.43s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 5.05s | 6.76s | 4.42s | 5.41s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 5.17s | 6.64s | 4.35s | 5.39s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 5.13s | 6.59s | 4.37s | 5.36s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 5.05s | 6.65s | 4.38s | 5.36s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 4.80s | 6.46s | 4.57s | 5.27s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-605b5b] | 6.46s | 4.78s | 4.14s | 5.12s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_False-1MiB] | 8.16s | 3.60s | 3.20s | 4.98s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 4.60s | 6.22s | 3.94s | 4.92s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 7.84s | 3.35s | 3.51s | 4.90s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0.25x max code size] | 4.06s | 5.53s | 4.96s | 4.85s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_False-10KiB] | 4.17s | 5.48s | 4.86s | 4.84s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODEHASH] | 4.17s | 5.06s | 5.14s | 4.79s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-615b5b5b] | 6.31s | 4.12s | 3.53s | 4.66s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 6.66s | 3.63s | 3.63s | 4.64s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_False] | 4.15s | 5.15s | 4.51s | 4.60s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0.75x max code size] | 4.00s | 4.88s | 4.91s | 4.59s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 6.14s | 4.00s | 3.59s | 4.58s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-0.50x max code size] | 3.87s | 4.80s | 4.98s | 4.55s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 4.00s | 4.66s | 4.97s | 4.55s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_False-max code size] | 3.99s | 4.55s | 5.09s | 4.54s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 3.85s | 4.70s | 4.95s | 4.50s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_True] | 4.07s | 5.14s | 4.29s | 4.50s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 3.86s | 4.62s | 4.99s | 4.49s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value] | 5.94s | 3.84s | 3.36s | 4.38s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 5.64s | 4.05s | 3.29s | 4.32s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SLOAD] | 3.93s | 5.00s | 4.03s | 4.32s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-10KiB] | 4.40s | 5.39s | 3.15s | 4.31s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSLOAD] | 5.62s | 3.82s | 3.44s | 4.29s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-605b] | 5.37s | 4.38s | 3.09s | 4.28s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 8.73s | 1.74s | 2.29s | 4.25s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODESIZE] | 3.46s | 4.28s | 4.88s | 4.21s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 7.46s | 2.66s | 2.49s | 4.20s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 8.57s | 1.85s | 2.13s | 4.18s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_True-1MiB] | 7.50s | 2.64s | 2.25s | 4.13s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODESIZE] | 3.40s | 4.14s | 4.84s | 4.12s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-512] | 3.61s | 4.62s | 3.91s | 4.04s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 4.09s | 4.43s | 3.54s | 4.02s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_2_scalar] | 1.88s | 7.59s | 2.43s | 3.97s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-615b5b] | 5.30s | 3.07s | 3.07s | 3.81s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1KiB] | 3.42s | 4.29s | 3.70s | 3.80s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-RIPEMD-160] | 3.04s | 4.02s | 4.09s | 3.72s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_False-opcode_BALANCE] | 3.02s | 3.52s | 4.09s | 3.55s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-5KiB] | 3.14s | 3.88s | 3.50s | 3.51s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-absent_target_True-opcode_BALANCE] | 3.12s | 3.50s | 3.83s | 3.49s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-val_mut_True-key_mut_True] | 3.29s | 3.65s | 3.46s | 3.46s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-val_mut_True-key_mut_False] | 3.18s | 3.67s | 3.48s | 3.44s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value] | 4.25s | 2.98s | 2.76s | 3.33s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_10M-blockchain_test-value_bearing_True] | 3.17s | 3.29s | 3.30s | 3.25s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0.25x max code size] | 2.89s | 3.54s | 3.13s | 3.19s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0.75x max code size] | 2.94s | 3.54s | 3.05s | 3.18s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_dst_True-10KiB] | 2.92s | 3.66s | 2.89s | 3.16s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-0.50x max code size] | 2.85s | 3.48s | 3.06s | 3.13s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 2.95s | 3.44s | 2.90s | 3.10s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 2.91s | 3.48s | 2.87s | 3.08s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_src_dst_True-max code size] | 2.87s | 3.49s | 2.79s | 3.05s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 2.81s | 3.42s | 2.89s | 3.04s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_10M-blockchain_test-value_bearing_False] | 3.47s | 2.43s | 3.06s | 2.99s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSLOAD] | 3.20s | 2.11s | 2.71s | 2.67s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 3.00s | 2.00s | 2.69s | 2.57s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_1_2_2_scalar] | 1.86s | 2.14s | 3.48s | 2.49s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 2.98s | 1.98s | 2.42s | 2.46s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 3.14s | 1.58s | 2.23s | 2.31s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 2.09s | 2.09s | 2.46s | 2.21s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-zero_byte_True] | 2.74s | 1.27s | 2.44s | 2.15s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 1.92s | 1.91s | 2.42s | 2.08s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test] | 2.39s | 1.20s | 2.38s | 1.99s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-val_mut_False-key_mut_False] | 1.41s | 1.46s | 2.41s | 1.76s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-bn128_mul_infinities_2_scalar] | 1.68s | 1.65s | 1.93s | 1.75s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-val_mut_False-key_mut_True] | 1.45s | 1.38s | 2.36s | 1.73s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CREATE] | 1.20s | 0.67s | 2.20s | 1.36s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_RETURN] | 1.90s | 0.56s | 1.60s | 1.35s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_REVERT] | 1.90s | 0.56s | 1.56s | 1.34s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 1.26s | 0.90s | 1.80s | 1.32s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 1.17s | 0.75s | 2.01s | 1.31s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 1.20s | 0.97s | 1.66s | 1.27s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_True] | 1.23s | 0.53s | 2.03s | 1.26s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value] | 1.17s | 0.62s | 1.99s | 1.26s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 1.16s | 0.61s | 2.00s | 1.25s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 1.24s | 0.75s | 1.70s | 1.23s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1MiB of zero data-opcode_RETURN] | 1.60s | 0.47s | 1.58s | 1.22s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_2_sets] | 1.08s | 0.56s | 2.01s | 1.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 0.91s | 0.69s | 1.97s | 1.19s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-1MiB of zero data-opcode_REVERT] | 1.51s | 0.50s | 1.54s | 1.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 0.98s | 0.62s | 1.93s | 1.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 1.02s | 0.61s | 1.85s | 1.16s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE2] | 0.98s | 0.47s | 1.97s | 1.14s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value] | 1.12s | 0.71s | 1.55s | 1.13s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE2] | 0.95s | 0.47s | 1.83s | 1.08s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 1.12s | 0.63s | 1.50s | 1.08s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 0.99s | 0.55s | 1.71s | 1.08s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 0.92s | 0.66s | 1.66s | 1.08s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-zero_byte_False] | 1.23s | 0.49s | 1.51s | 1.08s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_False] | 1.01s | 0.54s | 1.67s | 1.07s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 0.98s | 0.58s | 1.65s | 1.07s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 1.00s | 0.58s | 1.60s | 1.06s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE] | 0.97s | 0.45s | 1.73s | 1.05s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 0.91s | 0.46s | 1.76s | 1.04s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 1.01s | 0.50s | 1.59s | 1.03s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE] | 0.95s | 0.45s | 1.69s | 1.03s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 0.97s | 0.53s | 1.58s | 1.03s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 0.96s | 0.48s | 1.57s | 1.00s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_False] | 0.92s | 0.50s | 1.60s | 1.00s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 0.96s | 0.48s | 1.57s | 1.00s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 0.91s | 0.43s | 1.64s | 0.99s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 0.91s | 0.44s | 1.63s | 0.99s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 0.87s | 0.50s | 1.59s | 0.99s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 0.92s | 0.44s | 1.58s | 0.98s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_1_pair] | 0.67s | 0.26s | 2.01s | 0.98s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_True] | 0.91s | 0.45s | 1.55s | 0.97s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 0.92s | 0.47s | 1.52s | 0.97s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 0.88s | 0.43s | 1.59s | 0.97s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-opcode_CREATE2] | 0.83s | 0.39s | 1.67s | 0.96s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE2] | 0.75s | 0.27s | 1.79s | 0.94s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 0.65s | 0.20s | 1.92s | 0.93s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE2] | 0.81s | 0.28s | 1.66s | 0.92s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE2] | 0.75s | 0.26s | 1.69s | 0.90s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_3_pair] | 0.67s | 0.21s | 1.79s | 0.89s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 0.64s | 0.19s | 1.83s | 0.89s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 0.64s | 0.19s | 1.82s | 0.88s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE] | 0.65s | 0.24s | 1.75s | 0.88s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 0.75s | 0.20s | 1.68s | 0.88s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE2] | 0.74s | 0.26s | 1.62s | 0.87s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 0.63s | 0.19s | 1.79s | 0.87s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 0.67s | 0.20s | 1.73s | 0.87s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 0.65s | 0.19s | 1.75s | 0.86s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE] | 0.74s | 0.30s | 1.55s | 0.86s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 0.93s | 0.20s | 1.45s | 0.86s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 0.59s | 0.19s | 1.79s | 0.85s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE] | 0.71s | 0.25s | 1.60s | 0.85s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 0.67s | 0.19s | 1.70s | 0.85s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 0.70s | 0.21s | 1.65s | 0.85s |
| test_worst_compute.py::test_empty_block[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 0.56s | 0.09s | 1.89s | 0.85s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 0.61s | 0.20s | 1.72s | 0.85s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE] | 0.74s | 0.25s | 1.52s | 0.84s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE2] | 0.72s | 0.26s | 1.53s | 0.83s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE2] | 0.72s | 0.25s | 1.52s | 0.83s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE2] | 0.73s | 0.27s | 1.47s | 0.82s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_zero_input] | 0.64s | 0.27s | 1.53s | 0.82s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE2] | 0.75s | 0.26s | 1.43s | 0.81s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 0.79s | 0.20s | 1.43s | 0.81s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 0.63s | 0.20s | 1.58s | 0.80s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE] | 0.69s | 0.25s | 1.45s | 0.80s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE] | 0.67s | 0.24s | 1.49s | 0.80s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE] | 0.72s | 0.25s | 1.42s | 0.80s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 0.58s | 0.20s | 1.58s | 0.79s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 0.61s | 0.21s | 1.54s | 0.79s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 0.68s | 0.20s | 1.49s | 0.79s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 0.64s | 0.19s | 1.52s | 0.78s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 0.60s | 0.19s | 1.56s | 0.78s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 0.68s | 0.19s | 1.46s | 0.78s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 0.64s | 0.20s | 1.49s | 0.78s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 0.60s | 0.21s | 1.52s | 0.78s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 0.60s | 0.20s | 1.52s | 0.77s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE] | 0.69s | 0.25s | 1.39s | 0.77s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 0.62s | 0.20s | 1.50s | 0.77s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 0.62s | 0.19s | 1.49s | 0.77s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 0.67s | 0.19s | 1.44s | 0.77s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 0.70s | 0.20s | 1.39s | 0.77s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 0.66s | 0.20s | 1.43s | 0.76s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 0.64s | 0.19s | 1.46s | 0.76s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 0.61s | 0.19s | 1.47s | 0.76s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 0.63s | 0.19s | 1.45s | 0.76s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 0.63s | 0.19s | 1.44s | 0.76s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 0.64s | 0.20s | 1.43s | 0.76s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 0.62s | 0.21s | 1.44s | 0.75s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 0.61s | 0.20s | 1.44s | 0.75s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 0.59s | 0.19s | 1.43s | 0.74s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 0.58s | 0.20s | 1.42s | 0.73s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 0.63s | 0.19s | 1.38s | 0.73s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 0.57s | 0.19s | 1.43s | 0.73s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 0.61s | 0.21s | 1.37s | 0.73s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-ec_pairing_1_pair_empty] | 0.59s | 0.19s | 1.33s | 0.71s |

## Summary

**Total unique test cases:** 528

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| risc0-v3.0.3 | 528 | 526 | 2 | 0 |
| sp1-v5.2.1 | 528 | 528 | 0 | 0 |
| zisk-v0.11.0 | 528 | 492 | 36 | 0 |

---

