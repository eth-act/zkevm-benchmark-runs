# 1xL40s - 45M-gas-limit

## Gas Limit Configuration - Execution

EEST benchmarks with 45M-gas-limit gas limit (execution results) on **1xL40s** hardware.

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
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_5_qube] | 1h 3m 56.91s | 1h 46m 37.17s | ❌ SDK Crash | 1h 25m 17.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_4_qube] | 1h 2m 54.06s | 1h 41m 33.40s | ❌ SDK Crash | 1h 22m 13.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_1024_exp_2] | 58m 20.21s | 1h 36m 15.94s | ❌ SDK Crash | 1h 17m 18.08s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_5_square] | 58m 29.64s | 1h 34m 40.90s | ❌ SDK Crash | 1h 16m 35.27s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_4_square] | 58m 9.88s | 1h 34m 41.86s | ❌ SDK Crash | 1h 16m 25.87s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_1045_gas_base_heavy] | 56m 18.48s | 1h 31m 39.09s | ❌ SDK Crash | 1h 13m 58.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_867_gas_base_heavy] | 55m 57.68s | 1h 30m 41.96s | ❌ SDK Crash | 1h 13m 19.82s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_800_gas_base_heavy] | 55m 47.58s | 1h 30m 19.30s | ❌ SDK Crash | 1h 13m 3.44s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_3_qube] | 56m 59.69s | 1h 26m 31.34s | ❌ SDK Crash | 1h 11m 45.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_616_gas_base_heavy] | 54m 28.37s | 1h 27m 30.08s | ❌ SDK Crash | 1h 10m 59.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_3_square] | 53m 3.71s | 1h 20m 58.51s | ❌ SDK Crash | 1h 7m 1.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_408_gas_base_heavy] | 52m 27.62s | 1h 20m 54.51s | ❌ SDK Crash | 1h 6m 41.07s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_264_exp_2] | 51m 35.44s | 1h 20m 46.46s | ❌ SDK Crash | 1h 6m 10.95s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_256_exp_2] | 50m 50.07s | 1h 18m 45.82s | ❌ SDK Crash | 1h 4m 47.95s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_min_gas_base_heavy] | 43m 6.57s | 1h 5m 40.22s | ❌ SDK Crash | 54m 23.39s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_8b_exp_896] | 36m 43.39s | 53m 54.21s | ❌ SDK Crash | 45m 18.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_8_exp_896] | 36m 19.26s | 51m 47.70s | ❌ SDK Crash | 44m 3.48s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_exp_298_gas_exp_heavy] | 35m 55.25s | 52m 2.52s | ❌ SDK Crash | 43m 58.88s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_1_exp_heavy] | 34m 23.54s | 50m 31.12s | ❌ SDK Crash | 42m 27.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_exp_215_gas_exp_heavy] | 32m 59.66s | 47m 11.28s | ❌ SDK Crash | 40m 5.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_8_exp_648] | 32m 44.56s | 47m 13.53s | ❌ SDK Crash | 39m 59.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_min_gas_exp_heavy] | 32m 20.04s | 46m 17.08s | ❌ SDK Crash | 39m 18.56s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-point_evaluation] | 58m 31.84s | 14m 19.85s | ❌ SDK Crash | 36m 25.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_guido_3_even] | 26m 15.82s | 40m 25.13s | ❌ SDK Crash | 33m 20.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_2_qube] | 23m 57.12s | 34m 48.43s | ❌ SDK Crash | 29m 22.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_2_square] | 23m 26.42s | 32m 14.80s | ❌ SDK Crash | 27m 50.61s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_pairing_check] | 23m 51.29s | 30m 43.02s | ❌ SDK Crash | 27m 17.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_800_gas_exp_heavy] | 22m 2.32s | 31m 15.87s | ❌ SDK Crash | 26m 39.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_600_gas_exp_heavy] | 21m 19.56s | 30m 18.93s | ❌ SDK Crash | 25m 49.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_852_gas_exp_heavy] | 20m 13.01s | 31m 10.21s | ❌ SDK Crash | 25m 41.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_16b_exp_320] | 20m 29.20s | 29m 42.77s | ❌ SDK Crash | 25m 5.99s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_fp_to_g1] | 15m 29.44s | 33m 33.57s | ❌ SDK Crash | 24m 31.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_pawel_2] | 19m 56.39s | 28m 28.44s | ❌ SDK Crash | 24m 12.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_400_gas_exp_heavy] | 19m 49.01s | 28m 10.49s | ❌ SDK Crash | 23m 59.75s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_2_exp_heavy] | 18m 58.74s | 26m 55.51s | ❌ SDK Crash | 22m 57.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_guido_2_even] | 18m 5.71s | 26m 53.79s | ❌ SDK Crash | 22m 29.75s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_marius_1_even] | 16m 36.95s | 24m 1.48s | ❌ SDK Crash | 20m 19.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_765_gas_exp_heavy] | 16m 24.51s | 23m 43.32s | ❌ SDK Crash | 20m 3.92s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_24b_exp_168] | 16m 18.41s | 23m 28.62s | ❌ SDK Crash | 19m 53.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_pawel_3] | 15m 43.03s | 22m 40.89s | ❌ SDK Crash | 19m 11.96s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_fp_to_g2] | 14m 2.93s | 23m 43.24s | ❌ SDK Crash | 18m 53.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_32b_exp_256] | 15m 13.07s | 22m 13.78s | ❌ SDK Crash | 18m 43.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_256] | 15m 2.14s | 22m 3.36s | ❌ SDK Crash | 18m 32.75s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_example_1] | 15m 7.33s | 21m 36.10s | ❌ SDK Crash | 18m 21.71s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_1360_gas_balanced] | 14m 54.20s | 21m 43.95s | ❌ SDK Crash | 18m 19.07s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_heavy] | 15m 1.62s | 21m 27.13s | ❌ SDK Crash | 18m 14.37s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_zkevm_worst_case] | 14m 44.72s | 21m 11.23s | ❌ SDK Crash | 17m 57.98s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_32b_exp_96] | 14m 25.17s | 21m 0.48s | ❌ SDK Crash | 17m 42.82s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_677_gas_base_heavy] | 14m 16.25s | 20m 36.82s | ❌ SDK Crash | 17m 26.54s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_128] | 14m 10.13s | 20m 32.35s | ❌ SDK Crash | 17m 21.24s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_example_2] | 14m 6.54s | 20m 32.17s | ❌ SDK Crash | 17m 19.36s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_8] | 14m 9.79s | 20m 8.08s | ❌ SDK Crash | 17m 8.93s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_96] | 13m 54.64s | 20m 6.12s | ❌ SDK Crash | 17m 0.38s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g2add] | 14m 37.64s | 19m 21.22s | ❌ SDK Crash | 16m 59.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_pawel_4] | 13m 49.41s | 19m 54.05s | ❌ SDK Crash | 16m 51.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_65] | 13m 45.17s | 19m 45.31s | ❌ SDK Crash | 16m 45.24s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g1msm] | ❌ SDK Crash | 16m 44.30s | ❌ SDK Crash | 16m 44.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_600_gas_balanced] | 13m 15.48s | 19m 11.23s | ❌ SDK Crash | 16m 13.36s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_4_exp_heavy] | 13m 5.82s | 18m 54.46s | ❌ SDK Crash | 16m 0.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_64] | 13m 0.39s | 18m 51.67s | ❌ SDK Crash | 15m 56.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_1360n1] | 13m 4.24s | 18m 47.56s | ❌ SDK Crash | 15m 55.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_408_gas_balanced] | 12m 52.63s | 18m 48.23s | ❌ SDK Crash | 15m 50.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_996_gas_balanced] | 12m 48.63s | 18m 33.34s | ❌ SDK Crash | 15m 40.99s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_64b_exp_512] | 12m 9.87s | 18m 48.55s | ❌ SDK Crash | 15m 29.21s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_767_gas_balanced] | 12m 35.37s | 18m 16.19s | ❌ SDK Crash | 15m 25.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_32b_exp_40] | 12m 39.08s | 18m 7.77s | ❌ SDK Crash | 15m 23.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_64b_exp_512] | 11m 58.94s | 18m 40.58s | ❌ SDK Crash | 15m 19.76s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_min_gas_balanced] | 12m 28.43s | 18m 0.78s | ❌ SDK Crash | 15m 14.60s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g1add] | 11m 27.80s | 18m 1.71s | ❌ SDK Crash | 14m 44.76s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-blake2f] | 13m 18.76s | 16m 9.23s | ❌ SDK Crash | 14m 43.99s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_1360n2] | 11m 54.16s | 17m 10.30s | ❌ SDK Crash | 14m 32.23s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_40] | 11m 45.27s | 17m 11.90s | ❌ SDK Crash | 14m 28.59s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_1349n1] | 11m 54.67s | 16m 50.84s | ❌ SDK Crash | 14m 22.75s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_exp_208_gas_balanced] | 11m 49.20s | 16m 56.24s | ❌ SDK Crash | 14m 22.72s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_128b_exp_1024] | 10m 57.34s | 17m 23.06s | ❌ SDK Crash | 14m 10.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_128b_exp_1024] | 10m 52.78s | 17m 21.49s | ❌ SDK Crash | 14m 7.13s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_36] | 11m 21.61s | 16m 23.33s | ❌ SDK Crash | 13m 52.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_256b_exp_1024] | 10m 40.23s | 16m 39.83s | ❌ SDK Crash | 13m 40.03s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ecrecover] | 7m 10.78s | 20m 8.72s | ❌ SDK Crash | 13m 39.75s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_256b_exp_1024] | 10m 26.51s | 16m 39.85s | ❌ SDK Crash | 13m 33.18s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_guido_1_even] | 10m 59.77s | 16m 5.83s | ❌ SDK Crash | 13m 32.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_512b_exp_1024] | 10m 20.15s | 16m 19.98s | ❌ SDK Crash | 13m 20.07s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_512b_exp_1024] | 10m 18.92s | 16m 20.31s | ❌ SDK Crash | 13m 19.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_cover_windows] | 10m 58.06s | 15m 38.24s | ❌ SDK Crash | 13m 18.15s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_1024b_exp_1024] | 10m 16.64s | 15m 54.50s | ❌ SDK Crash | 13m 5.57s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_1024b_exp_1024] | 10m 13.52s | 15m 51.71s | ❌ SDK Crash | 13m 2.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_2_pow_0x10001] | 10m 45.47s | 15m 19.39s | ❌ SDK Crash | 13m 2.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_1_pow_0x10001] | 10m 27.15s | 14m 53.74s | ❌ SDK Crash | 12m 40.44s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_3_pow_0x10001] | 9m 44.87s | 14m 41.10s | ❌ SDK Crash | 12m 12.98s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_32] | 9m 56.53s | 14m 12.61s | ❌ SDK Crash | 12m 4.57s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_4_pow_0x10001] | 9m 16.60s | 14m 17.93s | ❌ SDK Crash | 11m 47.27s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_5_pow_0x10001] | 9m 4.36s | 13m 59.77s | ❌ SDK Crash | 11m 32.06s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g2msm] | ❌ SDK Crash | 10m 53.62s | ❌ SDK Crash | 10m 53.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_200n2] | 8m 33.28s | 12m 12.22s | ❌ SDK Crash | 10m 22.75s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_200n3] | 8m 34.73s | 12m 7.56s | ❌ SDK Crash | 10m 21.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_1152n1] | 8m 26.81s | 11m 48.18s | ❌ SDK Crash | 10m 7.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_1_qube] | 7m 48.21s | 10m 50.72s | ❌ SDK Crash | 9m 19.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_1_square] | 7m 23.45s | 10m 14.24s | ❌ SDK Crash | 8m 48.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_200n1] | 6m 41.54s | 9m 15.63s | ❌ SDK Crash | 7m 58.58s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_add] | 1m 37.39s | 12m 27.33s | ❌ SDK Crash | 7m 2.36s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_191] | 5m 28.59s | 8m 27.40s | ❌ SDK Crash | 6m 57.99s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_255] | 5m 16.94s | 8m 3.96s | ❌ SDK Crash | 6m 40.45s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 6m 30.60s | 3m 29.39s | ❌ SDK Crash | 4m 59.99s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_5_pair] | 6m 16.81s | 3m 16.72s | ❌ SDK Crash | 4m 46.76s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul] | 6m 6.56s | 7m 49.20s | 21.80s | 4m 45.85s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_4_pair] | 6m 12.03s | 3m 18.23s | ❌ SDK Crash | 4m 45.13s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_scalar] | 6m 0.19s | 7m 37.94s | 21.37s | 4m 39.83s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_1_2_32_byte_scalar] | 5m 59.78s | 7m 37.89s | 21.41s | 4m 39.69s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_2_pair] | 5m 56.83s | 3m 19.74s | ❌ SDK Crash | 4m 38.29s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_STATICCALL] | 5m 51.20s | 3m 24.94s | ❌ SDK Crash | 4m 38.07s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_DELEGATECALL] | 5m 51.78s | 3m 23.97s | ❌ SDK Crash | 4m 37.87s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_CALLCODE] | 5m 52.18s | 3m 23.38s | ❌ SDK Crash | 4m 37.78s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_two_pairings] | 5m 52.46s | 3m 14.47s | ❌ SDK Crash | 4m 33.46s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_CALL] | 5m 51.40s | 3m 12.83s | ❌ SDK Crash | 4m 32.11s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODESIZE] | 5m 47.72s | 3m 16.06s | ❌ SDK Crash | 4m 31.89s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODEHASH] | 5m 45.31s | 3m 17.10s | ❌ SDK Crash | 4m 31.21s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_one_pairing] | 5m 40.11s | 3m 13.00s | ❌ SDK Crash | 4m 26.56s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODECOPY] | 5m 31.28s | 3m 6.47s | ❌ SDK Crash | 4m 18.88s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_127] | 3m 57.04s | 5m 51.88s | 1m 40.91s | 3m 49.95s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_191] | 3m 56.68s | 5m 39.30s | 1m 44.16s | 3m 46.72s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_191] | 3m 44.97s | 5m 26.52s | 1m 38.94s | 3m 36.81s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SDIV-1] | 3m 45.30s | 5m 18.53s | 1m 37.64s | 3m 33.83s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SDIV-0] | 3m 42.26s | 5m 12.03s | 1m 37.09s | 3m 30.46s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 3m 0.07s | 3m 48.43s | ❌ SDK Crash | 3m 24.25s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DIV-0] | 3m 14.45s | 4m 37.33s | 1m 25.90s | 3m 5.90s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_63] | 2m 58.57s | 4m 22.46s | 1m 26.45s | 2m 55.82s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_255] | 3m 2.48s | 4m 13.42s | 1m 25.30s | 2m 53.73s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DIV-1] | 3m 0.99s | 4m 11.30s | 1m 21.81s | 2m 51.36s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_127] | 2m 54.93s | 4m 25.86s | 1m 12.69s | 2m 51.16s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_255] | 2m 54.96s | 4m 5.45s | 1m 19.61s | 2m 46.67s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_191] | 2m 46.42s | 4m 7.46s | 1m 25.97s | 2m 46.62s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_127] | 2m 46.66s | 4m 14.46s | 1m 7.46s | 2m 42.86s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PREVRANDAO] | 2m 16.48s | 3m 4.89s | ❌ SDK Crash | 2m 40.68s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_infinities_32_byte_scalar] | 3m 30.51s | 4m 21.49s | 3.56s | 2m 38.52s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_255] | 2m 20.71s | 3m 21.93s | 1m 18.77s | 2m 20.47s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_add_1_2] | 1m 36.83s | 2m 44.98s | ❌ SDK Crash | 2m 10.90s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_127] | 2m 11.63s | 3m 11.08s | 1m 4.72s | 2m 9.14s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_63] | 1m 57.52s | 2m 57.37s | 57.09s | 1m 57.33s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_63] | 1m 50.11s | 2m 44.71s | 51.87s | 1m 48.89s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty-opcode_REVERT] | 1m 36.12s | 2m 7.27s | 1m 19.04s | 1m 40.81s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_CALLCODE] | 1m 30.23s | 1m 59.76s | 1m 14.54s | 1m 34.84s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_STATICCALL] | 1m 29.59s | 2m 1.27s | 1m 13.59s | 1m 34.81s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_CALL] | 1m 29.65s | 1m 56.10s | 1m 13.53s | 1m 33.09s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_EXP-] | 1m 40.12s | 2m 34.16s | 23.17s | 1m 32.48s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty-opcode_RETURN] | 1m 27.34s | 1m 56.60s | 1m 11.76s | 1m 31.90s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_63] | 1m 27.90s | 2m 11.10s | 54.67s | 1m 31.22s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_CALLCODE] | 1m 24.02s | 1m 50.43s | 1m 9.49s | 1m 27.98s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_STATICCALL] | 1m 22.94s | 1m 49.76s | 1m 10.44s | 1m 27.71s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_CALL] | 1m 20.96s | 1m 48.51s | 1m 9.06s | 1m 26.18s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero-loop] | 1m 11.79s | 1m 54.63s | 1m 5.13s | 1m 23.85s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_diff_acc_to_diff_acc] | 44.95s | 3m 0.46s | 22.39s | 1m 22.60s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-one-loop] | 1m 11.98s | 1m 46.25s | 1m 6.37s | 1m 21.53s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH32] | 1m 5.38s | 1m 33.42s | 1m 23.84s | 1m 20.88s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_diff_acc_to_b] | 40.84s | 2m 59.33s | 21.28s | 1m 20.48s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_DELEGATECALL] | 1m 16.22s | 1m 40.97s | 1m 3.56s | 1m 20.25s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH31] | 1m 1.13s | 1m 36.90s | 1m 20.63s | 1m 19.55s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_a_to_diff_acc] | 39.05s | 2m 59.05s | 20.51s | 1m 19.53s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_a_to_b] | 36.27s | 3m 0.65s | 19.37s | 1m 18.76s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH30] | 58.53s | 1m 33.53s | 1m 20.37s | 1m 17.47s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_a_to_a] | 35.82s | 2m 57.24s | 19.07s | 1m 17.38s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH29] | 56.57s | 1m 27.83s | 1m 15.39s | 1m 13.26s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of zero data-opcode_REVERT] | 1m 21.28s | 1m 26.59s | 51.53s | 1m 13.14s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SGT-] | 1m 6.06s | 1m 39.88s | 53.02s | 1m 12.99s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty] | 1m 0.65s | 1m 41.01s | 57.12s | 1m 12.92s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_DELEGATECALL] | 1m 9.24s | 1m 29.32s | 59.49s | 1m 12.69s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH28] | 57.75s | 1m 26.18s | 1m 13.21s | 1m 12.38s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH27] | 56.44s | 1m 26.24s | 1m 12.33s | 1m 11.67s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_COINBASE] | 1m 3.75s | 1m 24.11s | 57.91s | 1m 8.59s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ADDRESS] | 1m 3.63s | 1m 23.55s | 58.46s | 1m 8.55s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ORIGIN] | 1m 4.10s | 1m 22.47s | 57.96s | 1m 8.18s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of zero data-opcode_RETURN] | 1m 15.50s | 1m 21.31s | 47.69s | 1m 8.17s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH26] | 54.44s | 1m 22.09s | 1m 7.95s | 1m 8.16s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CALLER] | 1m 4.87s | 1m 22.65s | 54.35s | 1m 7.29s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_EQ-] | 1m 0.64s | 1m 31.29s | 48.77s | 1m 6.90s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH25] | 53.70s | 1m 17.92s | 1m 7.05s | 1m 6.22s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH24] | 52.02s | 1m 18.13s | 1m 5.75s | 1m 5.30s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ISZERO] | 58.33s | 1m 26.87s | 48.62s | 1m 4.60s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP1] | 54.13s | 1m 29.10s | 49.92s | 1m 4.38s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH23] | 48.03s | 1m 21.29s | 59.50s | 1m 2.94s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SMOD-] | 57.95s | 1m 25.72s | 43.37s | 1m 2.35s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH22] | 46.74s | 1m 19.31s | 58.37s | 1m 1.47s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 52.69s | 1m 22.63s | 48.10s | 1m 1.14s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 50.24s | 1m 24.18s | 48.42s | 1m 0.95s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 52.38s | 1m 21.69s | 48.04s | 1m 0.70s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SAR-] | 59.89s | 1m 30.48s | 30.73s | 1m 0.36s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 50.54s | 1m 22.22s | 47.87s | 1m 0.21s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 50.80s | 1m 22.09s | 47.63s | 1m 0.17s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 50.01s | 1m 23.05s | 47.39s | 1m 0.15s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 51.05s | 1m 21.70s | 47.22s | 59.99s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 50.36s | 1m 21.70s | 47.86s | 59.98s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_add_infinities] | 51.24s | 1m 8.68s | 51.26s | 57.06s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH21] | 44.54s | 1m 11.35s | 54.79s | 56.89s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-shift_right_SAR] | 55.27s | 1m 25.16s | 29.24s | 56.56s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-six blobs, access latest] | 47.56s | 1m 5.58s | 55.02s | 56.05s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 1m 36.54s | 44.21s | 25.32s | 55.36s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-one blob and accessed] | 47.46s | 1m 4.13s | 54.08s | 55.22s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH19] | 43.80s | 1m 9.26s | 52.18s | 55.08s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH20] | 43.59s | 1m 8.66s | 51.85s | 54.70s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_REVERT] | 59.64s | 1m 4.29s | 38.09s | 54.01s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_MUL-] | 50.84s | 1m 33.24s | 17.92s | 54.00s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 44.93s | 1m 12.83s | 37.20s | 51.65s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-shift_right_SHR] | 52.33s | 1m 15.96s | 26.42s | 51.57s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_MOD-] | 45.74s | 1m 9.43s | 37.42s | 50.86s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH18] | 40.64s | 1m 4.02s | 47.70s | 50.79s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 45.13s | 1m 11.63s | 35.50s | 50.76s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test-SSTORE new value] | 50.74s | 1m 2.04s | 39.41s | 50.73s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 45.59s | 1m 11.14s | 35.28s | 50.67s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SHR-] | 51.72s | 1m 13.70s | 26.21s | 50.54s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 44.40s | 1m 11.58s | 35.38s | 50.45s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_RETURN] | 55.63s | 59.08s | 36.26s | 50.32s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH17] | 39.97s | 1m 2.28s | 48.41s | 50.22s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH15] | 39.33s | 1m 6.43s | 43.34s | 49.70s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SHL-] | 50.59s | 1m 12.00s | 25.52s | 49.37s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH16] | 40.10s | 1m 0.82s | 45.11s | 48.68s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH14] | 38.06s | 1m 3.67s | 40.94s | 47.56s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CODESIZE] | 46.58s | 1m 1.43s | 29.85s | 45.95s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BLOBBASEFEE] | 47.76s | 1m 3.23s | 26.55s | 45.84s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 36.77s | 54.20s | 44.51s | 45.16s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 37.27s | 53.13s | 44.93s | 45.11s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 37.26s | 53.26s | 44.73s | 45.08s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 37.13s | 53.26s | 44.82s | 45.07s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 36.86s | 53.38s | 44.83s | 45.02s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 36.75s | 53.14s | 44.63s | 44.84s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 42.88s | 1m 6.58s | 25.00s | 44.82s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 36.75s | 52.61s | 45.01s | 44.79s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 36.66s | 52.75s | 44.82s | 44.74s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 36.68s | 53.02s | 44.44s | 44.72s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 36.76s | 52.46s | 44.69s | 44.63s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 36.47s | 52.54s | 44.87s | 44.62s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 36.92s | 52.22s | 44.36s | 44.50s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SIGNEXTEND-] | 43.97s | 1m 7.84s | 21.52s | 44.45s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 42.40s | 1m 4.24s | 24.64s | 43.76s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH13] | 36.24s | 55.47s | 39.22s | 43.65s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GASPRICE] | 44.79s | 1m 0.57s | 24.21s | 43.19s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP2] | 35.96s | 59.43s | 33.95s | 43.12s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 41.06s | 1m 2.82s | 23.43s | 42.44s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-0 bytes] | 40.71s | 1m 2.13s | 23.60s | 42.15s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 40.73s | 1m 2.55s | 22.18s | 41.82s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH12] | 35.56s | 51.57s | 36.70s | 41.28s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test-SSTORE same value] | ❌ SDK Crash | 50.90s | 30.66s | 40.78s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH11] | 34.91s | 52.64s | 34.39s | 40.64s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 38.27s | 56.16s | 26.08s | 40.17s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-100 bytes] | 38.78s | 56.85s | 24.72s | 40.12s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_100000] | 41.34s | 51.86s | 25.82s | 39.67s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 37.33s | 55.58s | 26.01s | 39.64s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_True] | 41.39s | 47.96s | 29.44s | 39.60s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1000000] | 41.15s | 51.47s | 25.41s | 39.34s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1] | 40.96s | 51.77s | 25.23s | 39.32s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 36.66s | 55.25s | 25.60s | 39.17s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1000] | 40.35s | 51.43s | 25.37s | 39.05s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_0] | 40.37s | 51.10s | 25.36s | 38.95s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_False] | 39.98s | 47.57s | 29.16s | 38.90s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-1MiB] | 1m 0.09s | 34.72s | 16.00s | 36.93s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_TIMESTAMP] | 36.95s | 51.96s | 21.70s | 36.87s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_NUMBER] | 37.26s | 51.16s | 21.60s | 36.67s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-100 bytes] | 34.17s | 49.67s | 24.91s | 36.25s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH10] | 33.12s | 44.52s | 30.51s | 36.05s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH9] | 31.50s | 42.48s | 29.83s | 34.60s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BASEFEE] | 35.23s | 47.61s | 20.33s | 34.39s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 33.38s | 49.43s | 20.25s | 34.36s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH7] | 31.43s | 43.10s | 27.93s | 34.15s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH8] | 31.66s | 40.98s | 29.19s | 33.94s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CHAINID] | 34.42s | 46.10s | 20.39s | 33.64s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 30.48s | 45.26s | 24.68s | 33.47s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH0] | 33.58s | 44.31s | 20.28s | 32.72s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SLT-] | 31.43s | 45.94s | 20.64s | 32.67s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP3] | 26.95s | 44.72s | 25.97s | 32.55s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-5b] | 37.11s | 39.31s | 20.20s | 32.20s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH6] | 30.58s | 39.61s | 26.22s | 32.13s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GASLIMIT] | 33.00s | 43.46s | 19.25s | 31.91s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GAS] | 32.40s | 43.13s | 19.45s | 31.66s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-1MiB] | 54.08s | 32.11s | 8.50s | 31.56s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-0 bytes] | 29.68s | 45.86s | 19.02s | 31.52s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-1MiB] | 53.99s | 25.36s | 14.17s | 31.17s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SUB-] | 31.00s | 45.55s | 16.35s | 30.97s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 28.43s | 43.10s | 19.62s | 30.38s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 28.56s | 42.30s | 19.98s | 30.28s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 52.38s | 23.14s | 15.11s | 30.21s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 28.12s | 41.85s | 20.30s | 30.09s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 28.61s | 41.74s | 19.75s | 30.03s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 28.72s | 41.60s | 19.56s | 29.96s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 28.31s | 41.66s | 19.86s | 29.94s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 28.17s | 41.88s | 19.67s | 29.91s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 28.14s | 41.57s | 19.75s | 29.82s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 28.56s | 41.32s | 19.52s | 29.80s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH5] | 28.19s | 37.36s | 23.79s | 29.78s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 28.08s | 41.60s | 19.57s | 29.75s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 28.10s | 41.61s | 19.48s | 29.73s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 27.89s | 41.29s | 19.69s | 29.62s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-one blob but access non-existent index] | 30.68s | 35.75s | 20.79s | 29.08s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 26.72s | 41.31s | 18.62s | 28.88s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ADD-] | 28.04s | 41.97s | 16.46s | 28.82s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-IDENTITY] | 54.78s | 22.97s | 8.59s | 28.78s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-no blobs] | 30.61s | 34.67s | 19.01s | 28.10s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP5] | 25.43s | 43.35s | 15.46s | 28.08s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 26.00s | 39.97s | 18.27s | 28.08s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH4] | 26.82s | 35.41s | 21.09s | 27.77s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 26.05s | 38.17s | 18.32s | 27.51s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH3] | 26.67s | 35.58s | 19.46s | 27.23s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BYTE-] | 25.62s | 38.64s | 16.20s | 26.82s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP4] | 21.86s | 35.66s | 20.75s | 26.09s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP2] | 25.69s | 36.55s | 15.54s | 25.93s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP13] | 25.91s | 35.98s | 15.52s | 25.80s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP15] | 25.98s | 35.52s | 15.79s | 25.77s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP9] | 26.24s | 35.47s | 15.52s | 25.74s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP1] | 25.83s | 35.50s | 15.87s | 25.73s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP14] | 26.05s | 35.11s | 15.74s | 25.63s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP12] | 25.58s | 35.33s | 15.96s | 25.62s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP16] | 25.69s | 35.45s | 15.70s | 25.61s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP4] | 25.55s | 35.50s | 15.76s | 25.60s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP10] | 25.86s | 35.15s | 15.80s | 25.60s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-10KiB] | 26.68s | 32.81s | 17.29s | 25.59s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 23.19s | 37.33s | 16.23s | 25.58s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP6] | 25.92s | 34.85s | 15.89s | 25.55s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_LT-] | 24.32s | 36.88s | 15.39s | 25.53s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP11] | 25.86s | 35.07s | 15.57s | 25.50s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP3] | 25.66s | 35.13s | 15.56s | 25.45s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GT-] | 24.22s | 37.12s | 14.71s | 25.35s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP7] | 25.95s | 34.60s | 15.32s | 25.29s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP8] | 25.49s | 34.93s | 15.44s | 25.29s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-1MiB] | 49.04s | 19.01s | 7.15s | 25.07s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_OR-] | 23.27s | 36.98s | 14.35s | 24.87s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_10000] | 23.89s | 33.48s | 16.92s | 24.76s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-benchmark-gas-value_45M-blockchain_test] | 21.82s | 30.78s | 21.56s | 24.72s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_0] | 23.86s | 33.46s | 16.79s | 24.70s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-100 bytes] | 23.02s | 33.75s | 17.32s | 24.70s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 48.81s | 17.49s | 7.33s | 24.54s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_1000] | 23.15s | 33.27s | 16.84s | 24.42s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_XOR-] | 23.11s | 35.42s | 14.68s | 24.40s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_AND-] | 23.22s | 35.41s | 14.33s | 24.32s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 23.32s | 35.62s | 13.98s | 24.30s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH2] | 24.70s | 32.68s | 15.27s | 24.21s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-100 bytes] | 23.23s | 33.40s | 15.02s | 23.88s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 21.70s | 32.54s | 17.03s | 23.76s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | 38.05s | 20.04s | 11.45s | 23.18s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 21.40s | 31.02s | 16.90s | 23.11s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH1] | 23.29s | 31.34s | 14.43s | 23.02s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_True-non_zero_value_True] | 21.85s | 32.27s | 14.81s | 22.98s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_True-non_zero_value_False] | 21.42s | 32.23s | 14.87s | 22.84s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_False-non_zero_value_False] | 21.70s | 31.49s | 15.10s | 22.76s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_False-non_zero_value_True] | 21.28s | 31.54s | 14.81s | 22.54s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 20.56s | 30.96s | 16.08s | 22.53s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-SHA2-256] | 3.75s | 52.12s | 11.37s | 22.41s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP5] | 18.53s | 29.87s | 17.73s | 22.04s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_NOT] | 20.02s | 32.31s | 13.45s | 21.93s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 21.24s | 29.81s | 14.62s | 21.89s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 21.61s | 29.56s | 14.48s | 21.88s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 21.37s | 29.48s | 14.65s | 21.83s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 20.62s | 30.02s | 14.82s | 21.82s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODEHASH] | 18.99s | 26.03s | 20.24s | 21.75s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 20.91s | 29.53s | 14.57s | 21.67s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 20.30s | 29.58s | 14.81s | 21.56s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 20.44s | 29.34s | 14.84s | 21.54s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-00] | 26.89s | 24.05s | 12.71s | 21.22s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | 34.27s | 18.88s | 10.29s | 21.14s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-605b5b] | 28.04s | 20.84s | 13.20s | 20.69s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 19.21s | 28.27s | 14.05s | 20.51s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 18.39s | 27.46s | 13.09s | 19.64s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 30.98s | 16.98s | 10.47s | 19.48s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 44.38s | 8.81s | 5.01s | 19.40s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 44.31s | 8.69s | 4.98s | 19.32s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 29.14s | 17.77s | 10.19s | 19.03s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.25x max code size] | 15.72s | 23.95s | 17.35s | 19.01s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 28.05s | 18.26s | 10.62s | 18.97s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP6] | 15.70s | 25.88s | 15.26s | 18.95s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-10KiB] | 18.10s | 22.86s | 15.78s | 18.91s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODEHASH] | 15.74s | 21.88s | 17.58s | 18.40s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-615b5b5b] | 26.29s | 17.65s | 10.53s | 18.16s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 15.91s | 21.07s | 17.47s | 18.15s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_True] | 16.51s | 22.83s | 14.56s | 17.97s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE same value] | 26.39s | 17.58s | 9.91s | 17.96s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.50x max code size] | 15.58s | 21.17s | 16.98s | 17.91s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 33.12s | 14.36s | 5.82s | 17.77s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSLOAD] | 26.54s | 17.20s | 9.54s | 17.76s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 15.43s | 20.66s | 17.16s | 17.75s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_False] | 16.32s | 22.31s | 14.35s | 17.66s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.75x max code size] | 15.67s | 20.59s | 16.68s | 17.64s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 15.34s | 20.28s | 17.02s | 17.54s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-max code size] | 15.66s | 19.93s | 16.80s | 17.46s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-10KiB] | 17.51s | 24.04s | 9.12s | 16.89s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test-SLOAD] | 15.32s | 21.50s | 13.49s | 16.77s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP7] | 13.92s | 22.33s | 13.85s | 16.70s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-605b] | 24.11s | 16.02s | 9.07s | 16.40s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 30.80s | 12.61s | 5.77s | 16.39s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODESIZE] | 13.65s | 18.25s | 15.26s | 15.72s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODESIZE] | 13.13s | 17.80s | 15.20s | 15.38s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-512] | 14.06s | 19.68s | 12.38s | 15.37s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_2_scalar] | 5.98s | 33.30s | 5.98s | 15.09s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_45M-blockchain_test-value_bearing_True] | 21.08s | 14.37s | 8.98s | 14.81s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP8] | 12.35s | 19.75s | 12.22s | 14.77s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB] | 13.55s | 18.96s | 11.39s | 14.63s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-RIPEMD-160] | 11.91s | 17.61s | 13.57s | 14.36s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 13.19s | 19.36s | 9.92s | 14.16s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-615b5b] | 21.10s | 13.67s | 7.46s | 14.08s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_True-key_mut_True] | 12.97s | 17.06s | 11.80s | 13.94s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE new value] | 20.64s | 13.36s | 7.54s | 13.85s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_True-key_mut_False] | 12.08s | 17.02s | 11.44s | 13.51s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP9] | 11.15s | 17.88s | 11.24s | 13.43s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_BALANCE] | 11.39s | 15.62s | 12.00s | 13.00s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_BALANCE] | 11.10s | 15.20s | 11.67s | 12.66s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP10] | 10.50s | 16.37s | 10.61s | 12.49s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-5KiB] | 11.47s | 16.19s | 9.32s | 12.33s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-max code size] | 12.21s | 15.86s | 7.68s | 11.91s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0.25x max code size] | 10.53s | 15.78s | 8.01s | 11.44s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP11] | 9.45s | 15.16s | 9.61s | 11.40s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-10KiB] | 10.69s | 14.96s | 8.01s | 11.22s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 10.44s | 14.98s | 8.18s | 11.20s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 10.62s | 14.81s | 8.13s | 11.19s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0.50x max code size] | 10.43s | 14.99s | 8.05s | 11.16s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0.75x max code size] | 10.62s | 14.93s | 7.80s | 11.12s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 10.45s | 14.82s | 7.86s | 11.04s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_45M-blockchain_test-value_bearing_False] | 15.22s | 10.56s | 7.26s | 11.01s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP12] | 8.66s | 13.90s | 9.54s | 10.70s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP13] | 8.17s | 13.18s | 8.45s | 9.93s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP14] | 7.75s | 11.92s | 8.16s | 9.28s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 12.92s | 8.82s | 5.83s | 9.19s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSLOAD] | 13.62s | 8.34s | 5.52s | 9.16s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 12.76s | 8.56s | 5.85s | 9.06s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP15] | 7.31s | 11.29s | 7.43s | 8.68s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 13.74s | 6.85s | 4.98s | 8.52s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP16] | 7.03s | 10.70s | 7.30s | 8.34s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 6.97s | 8.75s | 5.81s | 7.18s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_1_2_2_scalar] | 5.80s | 8.27s | 6.03s | 6.70s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero_byte_True] | 10.07s | 5.37s | 4.39s | 6.61s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 6.20s | 8.03s | 5.31s | 6.51s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 8.88s | 4.73s | 4.10s | 5.90s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_infinities_2_scalar] | 5.19s | 6.96s | 3.51s | 5.22s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_False-key_mut_True] | 4.22s | 5.46s | 4.52s | 4.73s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_False-key_mut_False] | 4.15s | 5.68s | 4.31s | 4.71s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_RETURN] | 6.70s | 1.86s | 2.17s | 3.58s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_REVERT] | 6.70s | 1.91s | 2.09s | 3.56s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 3.57s | 3.38s | 2.81s | 3.25s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 3.58s | 3.28s | 2.56s | 3.14s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of zero data-opcode_RETURN] | 5.00s | 1.62s | 1.94s | 2.85s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CREATE] | 3.40s | 2.32s | 2.73s | 2.81s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of zero data-opcode_REVERT] | 4.94s | 1.59s | 1.88s | 2.80s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE same value] | 3.42s | 2.31s | 2.40s | 2.71s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 2.78s | 2.61s | 2.73s | 2.71s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE new value] | 2.87s | 2.44s | 2.71s | 2.67s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 2.90s | 2.55s | 2.55s | 2.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 2.55s | 2.24s | 2.45s | 2.42s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 2.53s | 2.30s | 2.20s | 2.34s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_True] | 2.77s | 1.80s | 2.32s | 2.30s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_False] | 2.62s | 1.88s | 2.32s | 2.27s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero_byte_False] | 2.93s | 1.48s | 2.34s | 2.25s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 2.57s | 1.82s | 2.09s | 2.16s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 2.16s | 1.98s | 2.33s | 2.16s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE2] | 2.32s | 1.52s | 2.60s | 2.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 2.17s | 1.96s | 2.18s | 2.10s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE] | 2.22s | 1.51s | 2.57s | 2.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 2.25s | 1.85s | 2.19s | 2.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 2.25s | 1.82s | 2.20s | 2.09s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE2] | 2.32s | 1.49s | 2.44s | 2.08s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 2.21s | 1.87s | 2.12s | 2.06s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 2.12s | 1.81s | 2.14s | 2.02s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 2.07s | 1.83s | 2.14s | 2.01s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 2.11s | 1.37s | 2.43s | 1.97s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 2.12s | 1.64s | 2.11s | 1.96s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 2.16s | 1.65s | 2.06s | 1.96s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_False] | 2.04s | 1.36s | 2.41s | 1.93s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 2.15s | 1.33s | 2.23s | 1.90s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE] | 2.20s | 1.44s | 2.06s | 1.90s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 1.65s | 1.48s | 2.37s | 1.83s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 1.91s | 1.37s | 2.21s | 1.83s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 1.90s | 1.49s | 2.08s | 1.82s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_True] | 2.14s | 1.27s | 2.01s | 1.80s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 1.86s | 1.41s | 1.96s | 1.74s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 1.77s | 1.36s | 2.08s | 1.74s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 1.77s | 1.33s | 2.01s | 1.70s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CREATE2] | 1.48s | 1.10s | 2.35s | 1.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 1.65s | 0.63s | 1.85s | 1.37s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 1.43s | 0.57s | 2.00s | 1.33s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 1.50s | 0.60s | 1.84s | 1.31s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 1.47s | 0.57s | 1.82s | 1.29s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 1.52s | 0.64s | 1.70s | 1.29s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 1.36s | 0.48s | 2.00s | 1.28s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 1.49s | 0.62s | 1.64s | 1.25s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 1.32s | 0.47s | 1.95s | 1.25s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 1.42s | 0.57s | 1.74s | 1.24s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 1.40s | 0.56s | 1.70s | 1.22s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 1.39s | 0.46s | 1.81s | 1.22s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 1.31s | 0.47s | 1.87s | 1.22s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 1.38s | 0.56s | 1.71s | 1.22s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 1.44s | 0.57s | 1.61s | 1.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 1.40s | 0.57s | 1.65s | 1.20s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 1.39s | 0.60s | 1.61s | 1.20s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 1.39s | 0.58s | 1.63s | 1.20s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 1.46s | 0.55s | 1.57s | 1.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 1.31s | 0.47s | 1.77s | 1.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 1.32s | 0.49s | 1.73s | 1.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 1.33s | 0.48s | 1.73s | 1.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 1.33s | 0.47s | 1.73s | 1.18s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_2_sets] | 1.06s | 0.58s | 1.89s | 1.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 1.35s | 0.48s | 1.70s | 1.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 1.34s | 0.48s | 1.68s | 1.16s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 1.32s | 0.45s | 1.72s | 1.16s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 1.39s | 0.46s | 1.61s | 1.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 1.31s | 0.48s | 1.67s | 1.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 1.33s | 0.47s | 1.66s | 1.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 1.39s | 0.46s | 1.56s | 1.14s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 1.32s | 0.48s | 1.61s | 1.14s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 1.34s | 0.55s | 1.52s | 1.14s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE] | 1.01s | 0.42s | 1.94s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 1.40s | 0.46s | 1.52s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 1.31s | 0.46s | 1.61s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 1.37s | 0.50s | 1.50s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 1.36s | 0.47s | 1.53s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 1.32s | 0.46s | 1.58s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 1.33s | 0.46s | 1.57s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 1.36s | 0.47s | 1.52s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 1.32s | 0.46s | 1.55s | 1.11s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_zero_input] | 0.84s | 0.47s | 1.97s | 1.09s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE2] | 1.15s | 0.45s | 1.63s | 1.07s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE] | 0.98s | 0.40s | 1.84s | 1.07s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 1.28s | 0.46s | 1.48s | 1.07s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE2] | 1.08s | 0.43s | 1.70s | 1.07s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_1_pair] | 0.84s | 0.47s | 1.90s | 1.07s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE2] | 1.12s | 0.45s | 1.63s | 1.06s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE2] | 1.06s | 0.45s | 1.64s | 1.05s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE2] | 1.09s | 0.45s | 1.60s | 1.04s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE2] | 1.01s | 0.43s | 1.61s | 1.02s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE2] | 1.04s | 0.42s | 1.57s | 1.01s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE] | 0.98s | 0.43s | 1.60s | 1.00s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE2] | 1.01s | 0.45s | 1.54s | 1.00s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE] | 0.94s | 0.41s | 1.66s | 1.00s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE] | 0.89s | 0.46s | 1.56s | 0.97s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE] | 0.92s | 0.40s | 1.58s | 0.97s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE] | 0.97s | 0.40s | 1.49s | 0.96s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE] | 0.89s | 0.42s | 1.56s | 0.95s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_1_pair_empty] | 0.72s | 0.19s | 1.46s | 0.79s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_3_pair] | 0.66s | 0.20s | 1.46s | 0.77s |
| test_worst_compute.py::test_empty_block[fork_Prague-benchmark-gas-value_45M-blockchain_test] | 0.64s | 0.09s | 1.44s | 0.72s |

## Summary

**Total unique test cases:** 532

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| risc0-v3.0.3 | 532 | 529 | 3 | 0 |
| sp1-v5.2.1 | 532 | 532 | 0 | 0 |
| zisk-v0.11.0 | 532 | 414 | 118 | 0 |

---

