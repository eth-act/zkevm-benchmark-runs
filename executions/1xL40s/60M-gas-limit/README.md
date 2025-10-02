# 1xL40s - 60M-gas-limit

## Gas Limit Configuration - Execution

EEST benchmarks with 60M-gas-limit gas limit (execution results) on **1xL40s** hardware.

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
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_5_qube] | 1h 25m 2.33s | 2h 22m 13.34s | ❌ SDK Crash | 1h 53m 37.83s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_4_qube] | 1h 23m 42.84s | 2h 17m 51.61s | ❌ SDK Crash | 1h 50m 47.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_5_square] | 1h 17m 50.59s | 2h 9m 32.87s | ❌ SDK Crash | 1h 43m 41.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_1024_exp_2] | 1h 17m 20.71s | 2h 9m 40.33s | ❌ SDK Crash | 1h 43m 30.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_4_square] | 1h 16m 36.99s | 2h 6m 48.07s | ❌ SDK Crash | 1h 41m 42.53s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_1045_gas_base_heavy] | 1h 15m 24.35s | 2h 4m 5.70s | ❌ SDK Crash | 1h 39m 45.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_867_gas_base_heavy] | 1h 11m 20.34s | 2h 3m 9.85s | ❌ SDK Crash | 1h 37m 15.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_800_gas_base_heavy] | 1h 14m 14.59s | 2h 0m 7.91s | ❌ SDK Crash | 1h 37m 11.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_3_qube] | 1h 16m 9.43s | 1h 58m 8.81s | ❌ SDK Crash | 1h 37m 9.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_616_gas_base_heavy] | 1h 8m 58.27s | 1h 57m 57.82s | ❌ SDK Crash | 1h 33m 28.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_408_gas_base_heavy] | 1h 9m 49.74s | 1h 52m 42.61s | ❌ SDK Crash | 1h 31m 16.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_264_exp_2] | 1h 9m 3.30s | 1h 49m 11.05s | ❌ SDK Crash | 1h 29m 7.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_3_square] | 1h 10m 39.43s | 1h 47m 16.37s | ❌ SDK Crash | 1h 28m 57.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_256_exp_2] | 1h 8m 23.00s | 1h 46m 59.84s | ❌ SDK Crash | 1h 27m 41.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_min_gas_base_heavy] | 57m 26.50s | 1h 28m 41.39s | ❌ SDK Crash | 1h 13m 3.95s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_8b_exp_896] | 49m 34.91s | 1h 11m 29.60s | ❌ SDK Crash | 1h 0m 32.26s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_8_exp_896] | 48m 26.10s | 1h 9m 45.29s | ❌ SDK Crash | 59m 5.70s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_exp_298_gas_exp_heavy] | 47m 58.65s | 1h 9m 47.43s | ❌ SDK Crash | 58m 53.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_1_exp_heavy] | 46m 8.48s | 1h 7m 21.63s | ❌ SDK Crash | 56m 45.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_exp_215_gas_exp_heavy] | 44m 0.53s | 1h 3m 30.49s | ❌ SDK Crash | 53m 45.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_8_exp_648] | 44m 4.40s | 1h 3m 21.21s | ❌ SDK Crash | 53m 42.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_min_gas_exp_heavy] | 42m 50.84s | 1h 2m 11.21s | ❌ SDK Crash | 52m 31.02s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-point_evaluation] | 1h 18m 10.41s | 19m 13.91s | ❌ SDK Crash | 48m 42.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_guido_3_even] | 35m 30.26s | 54m 43.70s | ❌ SDK Crash | 45m 6.98s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_2_qube] | 32m 0.47s | 48m 3.73s | ❌ SDK Crash | 40m 2.10s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_pairing_check] | 31m 56.03s | 41m 25.84s | ❌ SDK Crash | 36m 40.93s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_2_square] | 29m 45.25s | 43m 29.29s | ❌ SDK Crash | 36m 37.27s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_852_gas_exp_heavy] | 29m 9.43s | 41m 47.75s | ❌ SDK Crash | 35m 28.59s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_800_gas_exp_heavy] | 28m 53.43s | 42m 2.61s | ❌ SDK Crash | 35m 28.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_600_gas_exp_heavy] | 28m 1.57s | 40m 47.03s | ❌ SDK Crash | 34m 24.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_16b_exp_320] | 27m 40.28s | 39m 44.79s | ❌ SDK Crash | 33m 42.53s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_fp_to_g1] | 21m 54.13s | 45m 1.47s | ❌ SDK Crash | 33m 27.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_pawel_2] | 26m 32.80s | 38m 7.38s | ❌ SDK Crash | 32m 20.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_400_gas_exp_heavy] | 26m 5.90s | 37m 58.33s | ❌ SDK Crash | 32m 2.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_2_exp_heavy] | 25m 7.22s | 36m 2.51s | ❌ SDK Crash | 30m 34.86s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_guido_2_even] | 24m 1.27s | 36m 14.28s | ❌ SDK Crash | 30m 7.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_marius_1_even] | 21m 43.37s | 32m 19.66s | ❌ SDK Crash | 27m 1.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_765_gas_exp_heavy] | 21m 58.12s | 31m 37.11s | ❌ SDK Crash | 26m 47.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_pawel_3] | 21m 10.91s | 30m 7.34s | ❌ SDK Crash | 25m 39.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_24b_exp_168] | 19m 32.90s | 31m 23.49s | ❌ SDK Crash | 25m 28.20s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_fp_to_g2] | 18m 41.94s | 31m 54.38s | ❌ SDK Crash | 25m 18.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_32b_exp_256] | 20m 9.22s | 29m 42.92s | ❌ SDK Crash | 24m 56.07s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_32b_exp_256] | 20m 9.26s | 29m 27.82s | ❌ SDK Crash | 24m 48.54s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_1360_gas_balanced] | 20m 45.00s | 28m 33.22s | ❌ SDK Crash | 24m 39.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_heavy] | 19m 49.92s | 29m 13.03s | ❌ SDK Crash | 24m 31.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_example_1] | 19m 58.40s | 28m 58.72s | ❌ SDK Crash | 24m 28.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_zkevm_worst_case] | 19m 24.95s | 28m 40.97s | ❌ SDK Crash | 24m 2.96s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_32b_exp_96] | 19m 17.21s | 28m 1.78s | ❌ SDK Crash | 23m 39.50s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_128] | 18m 59.87s | 27m 38.21s | ❌ SDK Crash | 23m 19.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_677_gas_base_heavy] | 18m 55.09s | 27m 35.32s | ❌ SDK Crash | 23m 15.21s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_example_2] | 18m 52.09s | 27m 8.88s | ❌ SDK Crash | 23m 0.48s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_8] | 18m 50.27s | 26m 58.84s | ❌ SDK Crash | 22m 54.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_32b_exp_96] | 18m 45.95s | 26m 58.87s | ❌ SDK Crash | 22m 52.41s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g2add] | 19m 25.08s | 26m 4.49s | ❌ SDK Crash | 22m 44.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_pawel_4] | 18m 21.28s | 26m 49.20s | ❌ SDK Crash | 22m 35.24s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g1msm] | ❌ SDK Crash | 22m 28.85s | ❌ SDK Crash | 22m 28.85s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_65] | 18m 4.23s | 26m 28.66s | ❌ SDK Crash | 22m 16.44s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_600_gas_balanced] | 17m 36.25s | 25m 40.10s | ❌ SDK Crash | 21m 38.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_pawel_4_exp_heavy] | 17m 26.45s | 25m 29.91s | ❌ SDK Crash | 21m 28.18s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1360n1] | 17m 39.48s | 25m 7.00s | ❌ SDK Crash | 21m 23.24s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_64] | 17m 13.59s | 25m 0.35s | ❌ SDK Crash | 21m 6.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_64b_exp_512] | 16m 4.31s | 25m 42.28s | ❌ SDK Crash | 20m 53.29s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_996_gas_balanced] | 16m 58.99s | 24m 43.48s | ❌ SDK Crash | 20m 51.24s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_64b_exp_512] | 16m 2.84s | 25m 20.24s | ❌ SDK Crash | 20m 41.54s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_767_gas_balanced] | 16m 45.52s | 24m 29.60s | ❌ SDK Crash | 20m 37.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_408_gas_balanced] | 15m 52.13s | 25m 21.10s | ❌ SDK Crash | 20m 36.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_32b_exp_40] | 16m 53.86s | 24m 18.74s | ❌ SDK Crash | 20m 36.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_min_gas_balanced] | 16m 42.49s | 24m 13.09s | ❌ SDK Crash | 20m 27.79s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g1add] | 15m 19.63s | 24m 9.47s | ❌ SDK Crash | 19m 44.55s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-blake2f] | 17m 43.02s | 21m 29.81s | ❌ SDK Crash | 19m 36.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1360n2] | 15m 57.41s | 22m 57.83s | ❌ SDK Crash | 19m 27.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_128b_exp_1024] | 15m 26.72s | 23m 17.68s | ❌ SDK Crash | 19m 22.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1349n1] | 15m 49.01s | 22m 39.02s | ❌ SDK Crash | 19m 14.01s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_40] | 15m 39.04s | 22m 42.43s | ❌ SDK Crash | 19m 10.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_128b_exp_1024] | 14m 29.53s | 23m 12.78s | ❌ SDK Crash | 18m 51.15s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_36] | 15m 12.90s | 21m 54.15s | ❌ SDK Crash | 18m 33.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_exp_208_gas_balanced] | 14m 7.17s | 22m 46.24s | ❌ SDK Crash | 18m 26.71s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_256b_exp_1024] | 14m 9.23s | 22m 24.92s | ❌ SDK Crash | 18m 17.08s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_guido_1_even] | 14m 38.17s | 21m 39.58s | ❌ SDK Crash | 18m 8.87s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_256b_exp_1024] | 13m 51.25s | 22m 17.83s | ❌ SDK Crash | 18m 4.54s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_32b_exp_cover_windows] | 14m 45.25s | 21m 12.53s | ❌ SDK Crash | 17m 58.89s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ecrecover] | 9m 38.52s | 26m 18.30s | ❌ SDK Crash | 17m 58.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_512b_exp_1024] | 13m 28.50s | 21m 55.03s | ❌ SDK Crash | 17m 41.76s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_512b_exp_1024] | 13m 28.96s | 21m 30.53s | ❌ SDK Crash | 17m 29.74s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_2_pow_0x10001] | 14m 14.95s | 20m 26.13s | ❌ SDK Crash | 17m 20.54s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_1_pow_0x10001] | 13m 57.52s | 19m 56.34s | ❌ SDK Crash | 16m 56.93s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_odd_1024b_exp_1024] | 12m 40.37s | 20m 3.68s | ❌ SDK Crash | 16m 22.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_3_pow_0x10001] | 12m 56.65s | 19m 43.49s | ❌ SDK Crash | 16m 20.07s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_even_1024b_exp_1024] | 12m 14.76s | 20m 7.13s | ❌ SDK Crash | 16m 10.95s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_32_exp_32] | 13m 8.12s | 19m 2.13s | ❌ SDK Crash | 16m 5.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_4_pow_0x10001] | 12m 24.41s | 19m 8.30s | ❌ SDK Crash | 15m 46.36s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_5_pow_0x10001] | 12m 7.88s | 18m 33.27s | ❌ SDK Crash | 15m 20.57s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bls12_g2msm] | ❌ SDK Crash | 14m 39.79s | ❌ SDK Crash | 14m 39.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_200n2] | 11m 23.91s | 16m 18.46s | ❌ SDK Crash | 13m 51.18s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_200n3] | 11m 26.93s | 16m 14.33s | ❌ SDK Crash | 13m 50.63s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_1152n1] | 10m 50.84s | 15m 36.65s | ❌ SDK Crash | 13m 13.75s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_1_qube] | 10m 23.77s | 14m 40.34s | ❌ SDK Crash | 12m 32.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_nagydani_1_square] | 9m 50.92s | 13m 48.90s | ❌ SDK Crash | 11m 49.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mod_vul_common_200n1] | 8m 51.00s | 12m 26.37s | ❌ SDK Crash | 10m 38.68s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_191] | 7m 20.93s | 11m 20.71s | ❌ SDK Crash | 9m 20.82s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_add] | 2m 8.94s | 16m 32.57s | ❌ SDK Crash | 9m 20.75s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_255] | 6m 59.78s | 10m 50.79s | ❌ SDK Crash | 8m 55.28s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 8m 46.64s | 4m 48.67s | ❌ SDK Crash | 6m 47.66s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_127] | 5m 16.46s | 7m 51.99s | ❌ SDK Crash | 6m 34.23s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_191] | 5m 11.97s | 7m 36.33s | ❌ SDK Crash | 6m 24.15s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul] | 8m 14.89s | 10m 22.93s | 28.25s | 6m 22.02s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_5_pair] | 8m 18.63s | 4m 20.45s | ❌ SDK Crash | 6m 19.54s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_4_pair] | 8m 13.97s | 4m 22.45s | ❌ SDK Crash | 6m 18.21s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_191] | 5m 8.35s | 7m 20.93s | ❌ SDK Crash | 6m 14.64s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DELEGATECALL] | 7m 49.76s | 4m 34.59s | ❌ SDK Crash | 6m 12.17s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_1_2_32_byte_scalar] | 7m 57.07s | 10m 11.10s | 27.96s | 6m 12.04s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLCODE] | 7m 49.26s | 4m 31.68s | ❌ SDK Crash | 6m 10.47s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_scalar] | 7m 59.65s | 10m 3.22s | 27.84s | 6m 10.24s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_2_pair] | 7m 55.89s | 4m 21.23s | ❌ SDK Crash | 6m 8.56s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALL] | 7m 49.70s | 4m 26.16s | ❌ SDK Crash | 6m 7.93s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_STATICCALL] | 7m 52.18s | 4m 22.51s | ❌ SDK Crash | 6m 7.35s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_two_pairings] | 7m 54.82s | 4m 19.23s | ❌ SDK Crash | 6m 7.03s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SDIV-1] | 5m 5.21s | 7m 5.30s | ❌ SDK Crash | 6m 5.25s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SDIV-0] | 4m 58.37s | 7m 1.50s | ❌ SDK Crash | 5m 59.94s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODESIZE] | 7m 42.24s | 4m 16.03s | ❌ SDK Crash | 5m 59.13s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_one_pairing] | 7m 35.81s | 4m 16.52s | ❌ SDK Crash | 5m 56.16s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODECOPY] | 7m 24.41s | 4m 26.53s | ❌ SDK Crash | 5m 55.47s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODEHASH] | 7m 39.61s | 4m 3.90s | ❌ SDK Crash | 5m 51.76s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DIV-0] | 4m 15.79s | 6m 11.99s | ❌ SDK Crash | 5m 13.89s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MULMOD-mod_bits_63] | 3m 58.26s | 5m 54.98s | ❌ SDK Crash | 4m 56.62s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_255] | 4m 1.29s | 5m 41.87s | ❌ SDK Crash | 4m 51.58s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_191] | 3m 43.95s | 5m 29.37s | ❌ SDK Crash | 4m 36.66s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 4m 0.34s | 5m 1.93s | ❌ SDK Crash | 4m 31.14s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DIV-1] | 4m 1.28s | 5m 38.14s | 1m 48.91s | 3m 49.44s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_127] | 3m 53.95s | 5m 56.80s | 1m 35.98s | 3m 48.91s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_255] | 3m 53.44s | 5m 34.10s | 1m 46.84s | 3m 44.79s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_127] | 3m 43.89s | 5m 38.41s | 1m 29.43s | 3m 37.24s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PREVRANDAO] | 2m 59.85s | 4m 6.69s | ❌ SDK Crash | 3m 33.27s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_infinities_32_byte_scalar] | 4m 34.00s | 5m 50.18s | 4.52s | 3m 29.57s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_255] | 3m 5.70s | 4m 33.87s | 1m 44.42s | 3m 8.00s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_add_1_2] | 2m 9.80s | 3m 37.22s | ❌ SDK Crash | 2m 53.51s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_127] | 2m 54.28s | 4m 14.85s | 1m 26.30s | 2m 51.81s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_SMOD-mod_bits_63] | 2m 37.77s | 3m 56.01s | 1m 14.64s | 2m 36.14s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_MOD-mod_bits_63] | 2m 26.83s | 3m 40.99s | 1m 8.09s | 2m 25.30s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-empty-opcode_REVERT] | 2m 7.68s | 2m 49.29s | 1m 44.52s | 2m 13.83s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_CALLCODE] | 1m 59.28s | 2m 40.91s | 1m 38.73s | 2m 6.30s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_STATICCALL] | 1m 59.26s | 2m 35.09s | 1m 37.29s | 2m 3.88s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_CALL] | 1m 58.31s | 2m 34.71s | 1m 37.34s | 2m 3.45s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-empty-opcode_RETURN] | 1m 57.48s | 2m 37.43s | 1m 35.01s | 2m 3.31s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_EXP-] | 2m 12.31s | 3m 25.72s | 30.69s | 2m 2.91s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_63] | 1m 56.17s | 2m 53.35s | 1m 11.66s | 2m 0.39s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_STATICCALL] | 1m 49.96s | 2m 29.05s | 1m 33.29s | 1m 57.43s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_CALLCODE] | 1m 50.09s | 2m 27.92s | 1m 32.27s | 1m 56.76s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_CALL] | 1m 49.11s | 2m 25.43s | 1m 30.69s | 1m 55.08s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-zero-loop] | 1m 37.16s | 2m 32.64s | 1m 26.81s | 1m 52.21s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_diff_acc] | 1m 0.30s | 4m 2.24s | 28.75s | 1m 50.43s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-one-loop] | 1m 34.40s | 2m 25.25s | 1m 27.58s | 1m 49.08s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_b] | 54.51s | 4m 0.26s | 27.44s | 1m 47.40s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_diff_acc] | 52.13s | 4m 2.35s | 27.14s | 1m 47.20s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_DELEGATECALL] | 1m 43.34s | 2m 14.56s | 1m 23.58s | 1m 47.16s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH32] | 1m 26.64s | 2m 6.40s | ❌ SDK Crash | 1m 46.52s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH31] | 1m 22.06s | 2m 9.41s | ❌ SDK Crash | 1m 45.73s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_a] | 46.72s | 3m 58.38s | 24.83s | 1m 43.31s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH30] | 1m 19.40s | 2m 5.57s | 1m 44.49s | 1m 43.16s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_b] | 47.07s | 3m 55.86s | 25.59s | 1m 42.84s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of zero data-opcode_REVERT] | 1m 52.87s | 1m 54.90s | 1m 8.41s | 1m 38.73s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH29] | 1m 16.29s | 1m 58.38s | 1m 40.04s | 1m 38.24s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SGT-] | 1m 29.25s | 2m 13.47s | 1m 10.58s | 1m 37.77s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH28] | 1m 16.35s | 1m 58.94s | 1m 36.89s | 1m 37.39s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_DELEGATECALL] | 1m 32.22s | 2m 0.08s | 1m 19.12s | 1m 37.14s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-empty] | 1m 19.75s | 2m 15.37s | 1m 16.02s | 1m 37.05s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH27] | 1m 15.52s | 1m 55.34s | 1m 35.07s | 1m 35.31s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ADDRESS] | 1m 24.93s | 1m 51.82s | 1m 16.79s | 1m 31.18s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ORIGIN] | 1m 24.15s | 1m 52.09s | 1m 16.86s | 1m 31.03s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH26] | 1m 13.05s | 1m 49.25s | 1m 30.47s | 1m 30.92s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CALLER] | 1m 28.23s | 1m 51.76s | 1m 11.66s | 1m 30.55s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of zero data-opcode_RETURN] | 1m 40.38s | 1m 48.02s | 1m 2.70s | 1m 30.37s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_COINBASE] | 1m 23.48s | 1m 50.94s | 1m 16.29s | 1m 30.23s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_EQ-] | 1m 21.40s | 2m 3.19s | 1m 4.47s | 1m 29.69s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH25] | 1m 12.03s | 1m 46.29s | 1m 29.25s | 1m 29.19s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ISZERO] | 1m 18.30s | 1m 55.62s | 1m 4.61s | 1m 26.17s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH24] | 1m 7.79s | 1m 43.27s | 1m 26.99s | 1m 26.01s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH23] | 1m 3.09s | 1m 48.73s | 1m 19.14s | 1m 23.65s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SMOD-] | 1m 17.23s | 1m 55.71s | 57.12s | 1m 23.35s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 7.39s | 1m 53.18s | 1m 3.22s | 1m 21.26s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH22] | 1m 2.34s | 1m 43.31s | 1m 17.55s | 1m 21.06s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 9.08s | 1m 49.45s | 1m 3.40s | 1m 20.64s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 9.42s | 1m 48.10s | 1m 3.61s | 1m 20.38s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 6.99s | 1m 49.77s | 1m 3.99s | 1m 20.25s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 8.02s | 1m 49.34s | 1m 2.94s | 1m 20.10s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 7.29s | 1m 49.66s | 1m 3.30s | 1m 20.08s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SAR-] | 1m 19.38s | 2m 0.02s | 40.45s | 1m 19.95s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 7.39s | 1m 48.92s | 1m 2.94s | 1m 19.75s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 7.08s | 1m 48.05s | 1m 3.89s | 1m 19.67s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_add_infinities] | 1m 8.55s | 1m 32.68s | 1m 8.21s | 1m 16.48s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH21] | 1m 0.37s | 1m 34.82s | 1m 12.40s | 1m 15.86s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-shift_right_SAR] | 1m 14.38s | 1m 51.54s | 37.78s | 1m 14.57s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 2m 10.20s | 59.55s | 33.69s | 1m 14.48s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-six blobs, access latest] | 1m 3.91s | 1m 26.09s | 1m 12.17s | 1m 14.06s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH19] | 58.14s | 1m 34.70s | 1m 9.09s | 1m 13.97s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-one blob and accessed] | 1m 4.09s | 1m 25.50s | 1m 11.75s | 1m 13.78s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH20] | 57.70s | 1m 32.49s | 1m 10.54s | 1m 13.57s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_MUL-] | 1m 10.86s | 2m 6.26s | 22.97s | 1m 13.36s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_REVERT] | 1m 17.65s | 1m 27.01s | 50.33s | 1m 11.66s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-shift_right_SHR] | 1m 8.00s | 1m 41.38s | 34.91s | 1m 8.10s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 59.78s | 1m 37.52s | 46.78s | 1m 8.03s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_MOD-] | 1m 1.49s | 1m 32.62s | 49.43s | 1m 7.85s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 58.82s | 1m 37.61s | 46.87s | 1m 7.77s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 59.08s | 1m 37.21s | 46.70s | 1m 7.66s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH18] | 54.73s | 1m 25.19s | 1m 2.81s | 1m 7.58s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 59.43s | 1m 36.46s | 46.61s | 1m 7.50s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SHR-] | 1m 6.71s | 1m 40.44s | 34.51s | 1m 7.22s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_RETURN] | 1m 14.21s | 1m 19.73s | 46.73s | 1m 6.89s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE new value] | 1m 5.74s | 1m 22.04s | 52.01s | 1m 6.60s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH17] | 53.57s | 1m 20.96s | 1m 1.90s | 1m 5.48s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SHL-] | 1m 6.32s | 1m 35.88s | 33.40s | 1m 5.20s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH15] | 51.24s | 1m 27.34s | 56.99s | 1m 5.19s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH16] | 52.28s | 1m 21.64s | 1m 0.21s | 1m 4.71s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP1] | 53.52s | 1m 28.70s | 49.87s | 1m 4.03s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH14] | 50.20s | 1m 24.28s | 53.96s | 1m 2.81s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CODESIZE] | 1m 3.05s | 1m 20.85s | 39.17s | 1m 1.02s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 52.19s | 1m 10.22s | 59.35s | 1m 0.59s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_BLOBBASEFEE] | 1m 3.57s | 1m 23.37s | 34.52s | 1m 0.48s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 48.71s | 1m 13.20s | 59.10s | 1m 0.34s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 50.02s | 1m 11.59s | 59.21s | 1m 0.27s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 49.36s | 1m 10.81s | 1m 0.13s | 1m 0.10s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 49.82s | 1m 10.31s | 59.75s | 59.96s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 49.46s | 1m 10.96s | 59.33s | 59.91s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 49.81s | 1m 10.62s | 59.11s | 59.85s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 49.43s | 1m 10.50s | 59.25s | 59.73s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SIGNEXTEND-] | 59.27s | 1m 31.11s | 28.70s | 59.69s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 48.97s | 1m 10.93s | 59.01s | 59.63s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 49.32s | 1m 9.98s | 59.30s | 59.53s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 48.80s | 1m 10.30s | 59.07s | 59.39s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 48.79s | 1m 10.69s | 58.65s | 59.38s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 56.38s | 1m 28.89s | 32.72s | 59.33s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 56.33s | 1m 25.68s | 32.02s | 58.01s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH13] | 48.32s | 1m 13.95s | 51.53s | 57.93s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GASPRICE] | 1m 0.79s | 1m 20.94s | 31.69s | 57.81s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 53.86s | 1m 23.65s | 31.05s | 56.19s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-0 bytes] | 53.07s | 1m 22.96s | 31.05s | 55.70s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 53.68s | 1m 23.11s | 29.36s | 55.38s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH12] | 47.44s | 1m 8.45s | 48.28s | 54.73s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-100 bytes] | 51.36s | 1m 16.91s | 32.56s | 53.61s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH11] | 45.94s | 1m 9.36s | 45.24s | 53.51s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 50.19s | 1m 15.45s | 34.60s | 53.41s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_False] | 57.68s | 1m 2.78s | 38.56s | 53.00s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_True] | 57.10s | 1m 3.18s | 38.52s | 52.93s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 49.62s | 1m 14.11s | 34.23s | 52.65s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_100000] | 54.67s | 1m 9.06s | 33.86s | 52.53s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_1] | 54.28s | 1m 9.32s | 33.31s | 52.30s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_0] | 54.80s | 1m 8.07s | 33.91s | 52.26s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_1000000] | 54.03s | 1m 8.57s | 33.46s | 52.02s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-mem_size_1000] | 53.88s | 1m 8.57s | 33.56s | 52.00s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 48.46s | 1m 12.79s | 33.20s | 51.48s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-IDENTITY] | 1m 10.94s | 30.32s | ❌ SDK Crash | 50.63s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE same value] | 44.54s | 1m 4.48s | 40.28s | 49.77s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-1MiB] | 1m 20.69s | 46.87s | 21.15s | 49.57s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_NUMBER] | 49.67s | 1m 8.44s | 29.25s | 49.12s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_TIMESTAMP] | 49.36s | 1m 8.60s | 28.22s | 48.73s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-100 bytes] | 46.23s | 1m 6.24s | 33.34s | 48.60s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH10] | 43.15s | 59.50s | 40.27s | 47.64s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH9] | 42.85s | 55.60s | 39.54s | 45.99s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 44.37s | 1m 6.07s | 26.88s | 45.77s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH8] | 41.72s | 54.96s | 38.75s | 45.14s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CHAINID] | 46.07s | 1m 2.20s | 27.06s | 45.11s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_BASEFEE] | 45.59s | 1m 2.12s | 27.30s | 45.00s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH7] | 41.77s | 56.00s | 36.53s | 44.77s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 40.23s | 1m 1.01s | 32.58s | 44.61s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH0] | 45.76s | 58.72s | 26.35s | 43.61s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-1MiB] | 1m 14.14s | 44.22s | 11.23s | 43.20s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SLT-] | 41.15s | 1m 1.50s | 26.90s | 43.18s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP2] | 35.72s | 59.08s | 34.01s | 42.93s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH6] | 39.73s | 53.41s | 34.64s | 42.59s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GASLIMIT] | 43.77s | 58.87s | 25.13s | 42.59s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-5b] | 50.24s | 51.21s | 26.03s | 42.49s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-1MiB] | 1m 13.75s | 34.86s | 18.82s | 42.48s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GAS] | 43.73s | 57.80s | 25.50s | 42.34s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-0 bytes] | 39.68s | 1m 0.64s | 25.41s | 41.91s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 37.66s | 1m 0.65s | 25.57s | 41.30s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 1m 11.32s | 32.39s | 20.09s | 41.27s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SUB-] | 41.15s | 59.28s | 21.35s | 40.59s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 38.14s | 56.22s | 25.80s | 40.05s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 37.88s | 55.64s | 25.99s | 39.84s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 37.28s | 56.10s | 26.09s | 39.82s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 37.93s | 55.90s | 25.61s | 39.81s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 37.49s | 56.32s | 25.52s | 39.77s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH5] | 38.23s | 49.84s | 31.25s | 39.77s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 37.67s | 55.42s | 26.06s | 39.72s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 37.82s | 55.55s | 25.65s | 39.67s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 36.99s | 55.60s | 26.35s | 39.65s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 37.31s | 55.89s | 25.74s | 39.65s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 37.90s | 54.63s | 26.06s | 39.53s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 39.41s | 55.41s | 23.77s | 39.53s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 36.84s | 55.96s | 25.62s | 39.47s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_ADD-] | 38.06s | 55.91s | 21.68s | 38.55s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-one blob but access non-existent index] | 40.61s | 47.42s | 26.95s | 38.33s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-no blobs] | 40.55s | 47.31s | 24.78s | 37.55s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 34.37s | 54.12s | 23.19s | 37.23s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH4] | 35.97s | 48.18s | 27.53s | 37.23s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 34.87s | 50.35s | 23.93s | 36.38s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_BYTE-] | 34.37s | 51.38s | 21.05s | 35.60s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH3] | 35.15s | 45.57s | 25.85s | 35.52s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | 57.79s | 31.26s | 16.48s | 35.18s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP8] | 35.51s | 47.58s | 20.15s | 34.41s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-1MiB] | 1m 7.50s | 26.20s | 9.29s | 34.33s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP3] | 34.90s | 46.87s | 20.99s | 34.25s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP11] | 35.80s | 46.37s | 20.46s | 34.21s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP4] | 33.80s | 48.24s | 20.28s | 34.11s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP16] | 35.03s | 47.09s | 20.08s | 34.07s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP1] | 33.82s | 47.69s | 20.29s | 33.94s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP10] | 33.83s | 47.72s | 20.18s | 33.91s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP14] | 34.83s | 46.21s | 20.42s | 33.82s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-10KiB] | 35.53s | 43.50s | 22.40s | 33.81s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP9] | 34.06s | 46.95s | 20.42s | 33.81s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP7] | 33.82s | 46.84s | 20.40s | 33.68s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP6] | 34.04s | 46.73s | 20.27s | 33.68s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP13] | 34.00s | 46.46s | 20.57s | 33.68s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP15] | 34.12s | 46.54s | 20.34s | 33.66s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP12] | 33.84s | 46.65s | 20.42s | 33.64s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP2] | 33.97s | 46.47s | 20.35s | 33.60s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_DUP5] | 34.10s | 46.59s | 20.09s | 33.59s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_LT-] | 32.43s | 48.84s | 19.46s | 33.58s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 30.99s | 48.75s | 20.72s | 33.48s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_GT-] | 32.19s | 49.01s | 18.90s | 33.37s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 1m 5.77s | 24.75s | 8.89s | 33.13s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-calldata_length_10000] | 31.44s | 45.15s | 22.18s | 32.93s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 28.77s | 41.21s | 27.89s | 32.62s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-calldata_length_1000] | 30.93s | 44.95s | 21.96s | 32.61s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | 54.04s | 28.15s | 15.62s | 32.60s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP3] | 26.91s | 45.12s | 25.73s | 32.58s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_AND-] | 30.73s | 48.05s | 18.85s | 32.54s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-calldata_length_0] | 30.74s | 44.94s | 21.91s | 32.53s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-100 bytes] | 30.46s | 44.80s | 22.25s | 32.50s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_OR-] | 30.35s | 47.81s | 18.87s | 32.34s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH2] | 33.26s | 43.25s | 20.51s | 32.34s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_XOR-] | 30.51s | 46.93s | 18.82s | 32.09s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 30.25s | 47.93s | 18.02s | 32.07s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-100 bytes] | 30.02s | 44.43s | 19.81s | 31.42s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 28.77s | 42.53s | 22.50s | 31.26s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_PUSH1] | 31.36s | 41.65s | 18.66s | 30.56s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 28.07s | 41.15s | 21.46s | 30.23s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_False-non_zero_value_False] | 28.51s | 41.96s | 19.85s | 30.11s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_True-non_zero_value_True] | 28.45s | 42.26s | 19.55s | 30.09s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_False-non_zero_value_True] | 28.51s | 42.36s | 19.27s | 30.05s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-from_origin_True-non_zero_value_False] | 28.34s | 41.64s | 19.74s | 29.91s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-SHA2-256] | 4.69s | 1m 10.33s | 14.01s | 29.67s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 26.85s | 40.25s | 21.11s | 29.40s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODEHASH] | 25.35s | 34.71s | 26.72s | 28.93s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_NOT] | 26.03s | 43.77s | 16.98s | 28.93s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 27.02s | 40.19s | 19.04s | 28.75s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 27.65s | 39.60s | 18.95s | 28.73s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 27.96s | 39.28s | 18.81s | 28.68s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-00] | 37.79s | 32.11s | 16.10s | 28.66s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 27.42s | 39.20s | 19.23s | 28.62s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 27.19s | 38.72s | 19.32s | 28.41s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 27.02s | 39.21s | 18.69s | 28.31s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 27.13s | 38.84s | 18.70s | 28.22s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-605b5b] | 38.45s | 27.92s | 16.49s | 27.62s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 25.67s | 37.43s | 18.11s | 27.07s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 52.22s | 20.17s | 7.98s | 26.79s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP4] | 21.62s | 36.00s | 20.98s | 26.20s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 59.33s | 11.67s | 6.39s | 25.80s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 59.43s | 11.65s | 6.19s | 25.76s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 39.70s | 24.07s | 13.19s | 25.65s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 39.60s | 23.93s | 13.26s | 25.60s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 24.15s | 35.85s | 16.54s | 25.51s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 48.76s | 19.27s | 7.74s | 25.26s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 41.12s | 20.83s | 13.21s | 25.05s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0.25x max code size] | 20.70s | 31.69s | 22.58s | 24.99s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value] | 37.01s | 23.60s | 12.59s | 24.40s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODEHASH] | 20.56s | 28.97s | 22.96s | 24.16s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_False-10KiB] | 21.25s | 30.50s | 20.46s | 24.07s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_True] | 22.03s | 29.86s | 19.93s | 23.94s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-615b5b5b] | 34.46s | 23.56s | 13.76s | 23.93s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_False] | 22.82s | 30.27s | 18.60s | 23.89s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 20.45s | 27.47s | 22.60s | 23.51s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0.50x max code size] | 20.42s | 27.74s | 22.23s | 23.46s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSLOAD] | 36.04s | 22.21s | 12.06s | 23.44s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-max code size] | 21.59s | 26.61s | 22.05s | 23.42s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 20.34s | 27.47s | 22.41s | 23.41s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 20.56s | 27.12s | 22.29s | 23.32s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_False-0.75x max code size] | 20.43s | 26.66s | 22.25s | 23.11s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-605b] | 30.91s | 25.48s | 11.33s | 22.57s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SLOAD] | 20.66s | 28.29s | 17.28s | 22.08s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-10KiB] | 22.74s | 31.50s | 11.58s | 21.94s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP5] | 18.26s | 29.94s | 17.58s | 21.93s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODESIZE] | 17.80s | 24.10s | 20.00s | 20.63s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-512] | 18.95s | 26.31s | 16.21s | 20.49s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_True] | 29.80s | 19.16s | 11.79s | 20.25s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODESIZE] | 17.44s | 23.54s | 19.16s | 20.05s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_2_scalar] | 7.61s | 44.56s | 7.41s | 19.86s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1KiB] | 17.78s | 24.59s | 14.87s | 19.08s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP6] | 15.73s | 25.38s | 15.26s | 18.79s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-615b5b] | 28.99s | 17.83s | 9.32s | 18.72s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 17.33s | 25.75s | 12.94s | 18.67s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-RIPEMD-160] | 15.49s | 23.28s | 17.21s | 18.66s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value] | 28.62s | 17.86s | 9.21s | 18.56s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_True-key_mut_True] | 16.36s | 22.50s | 14.78s | 17.88s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_True-key_mut_False] | 15.93s | 22.43s | 15.20s | 17.85s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_False-opcode_BALANCE] | 15.38s | 21.01s | 15.23s | 17.21s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-absent_target_True-opcode_BALANCE] | 14.73s | 20.65s | 15.39s | 16.93s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP7] | 13.90s | 22.72s | 13.79s | 16.80s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-5KiB] | 15.97s | 21.72s | 11.68s | 16.46s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0.50x max code size] | 16.06s | 19.93s | 9.85s | 15.28s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_False] | 21.34s | 14.47s | 9.61s | 15.14s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP8] | 12.76s | 19.71s | 12.37s | 14.95s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0.25x max code size] | 13.97s | 20.47s | 10.18s | 14.87s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-0.75x max code size] | 13.98s | 20.50s | 9.88s | 14.79s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 13.76s | 20.17s | 10.25s | 14.73s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_src_dst_True-max code size] | 14.27s | 19.91s | 9.82s | 14.67s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 14.19s | 19.56s | 10.26s | 14.67s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_dst_True-10KiB] | 13.97s | 19.88s | 10.07s | 14.64s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 13.64s | 19.97s | 9.96s | 14.52s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP9] | 11.16s | 18.10s | 11.41s | 13.56s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP10] | 10.29s | 16.30s | 10.48s | 12.36s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 17.22s | 11.49s | 7.19s | 11.96s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 16.86s | 11.43s | 7.20s | 11.83s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSLOAD] | 17.78s | 10.83s | 6.82s | 11.81s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP11] | 9.42s | 14.91s | 9.79s | 11.38s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP12] | 8.98s | 14.03s | 9.12s | 10.71s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 15.58s | 8.40s | 5.97s | 9.98s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP13] | 8.29s | 13.02s | 8.50s | 9.94s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | ❌ SDK Crash | 11.62s | 7.49s | 9.55s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP14] | 7.73s | 12.26s | 7.89s | 9.29s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_1_2_2_scalar] | 7.57s | 11.25s | 7.70s | 8.84s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP15] | 7.28s | 11.30s | 7.75s | 8.78s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-zero_byte_True] | 13.49s | 7.07s | 5.25s | 8.60s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 7.99s | 10.43s | 6.72s | 8.38s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_SWAP16] | 7.08s | 10.57s | 7.05s | 8.23s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test] | 12.41s | 6.22s | 5.25s | 7.96s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-bn128_mul_infinities_2_scalar] | 6.71s | 9.09s | 4.32s | 6.71s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_False-key_mut_True] | 5.57s | 8.06s | 5.47s | 6.37s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-val_mut_False-key_mut_False] | 5.38s | 7.48s | 5.28s | 6.04s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_REVERT] | 9.10s | 2.53s | 2.18s | 4.60s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_RETURN] | 8.96s | 2.54s | 2.29s | 4.60s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 5.01s | 4.78s | 3.11s | 4.30s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 5.03s | 4.67s | 3.04s | 4.24s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of zero data-opcode_REVERT] | 6.51s | 2.06s | 2.64s | 3.73s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CREATE] | 4.70s | 3.09s | 3.25s | 3.68s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value] | 4.36s | 2.91s | 3.28s | 3.52s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-1MiB of zero data-opcode_RETURN] | 6.49s | 2.05s | 2.00s | 3.52s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value] | 4.54s | 3.07s | 2.75s | 3.45s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 3.67s | 3.43s | 2.79s | 3.30s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 3.66s | 3.44s | 2.77s | 3.29s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 3.69s | 2.53s | 2.52s | 2.91s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 3.67s | 2.56s | 2.34s | 2.86s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 3.30s | 2.39s | 2.69s | 2.79s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 3.00s | 2.84s | 2.53s | 2.79s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 3.02s | 2.40s | 2.82s | 2.75s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 3.26s | 2.36s | 2.61s | 2.74s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-zero_byte_False] | 3.75s | 1.88s | 2.57s | 2.73s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 2.71s | 2.85s | 2.49s | 2.68s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 2.81s | 2.62s | 2.49s | 2.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 2.59s | 2.48s | 2.68s | 2.58s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE2] | 3.01s | 2.04s | 2.40s | 2.48s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE2] | 3.11s | 1.96s | 2.38s | 2.48s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 2.51s | 2.44s | 2.42s | 2.46s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 2.58s | 2.24s | 2.41s | 2.41s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 2.37s | 2.30s | 2.53s | 2.40s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE] | 2.85s | 1.87s | 2.36s | 2.36s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 2.69s | 1.72s | 2.67s | 2.36s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 2.53s | 1.97s | 2.53s | 2.34s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE] | 2.58s | 1.86s | 2.34s | 2.26s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 2.54s | 2.05s | 2.17s | 2.25s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 2.61s | 1.68s | 2.45s | 2.25s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 2.40s | 2.04s | 2.29s | 2.24s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 2.21s | 2.03s | 2.48s | 2.24s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 2.72s | 1.73s | 2.16s | 2.20s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 2.48s | 1.64s | 2.38s | 2.17s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 2.20s | 1.76s | 2.52s | 2.16s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 2.41s | 1.75s | 2.21s | 2.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 2.23s | 1.71s | 2.28s | 2.08s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 2.19s | 1.72s | 2.16s | 2.02s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-opcode_CREATE2] | 1.68s | 1.36s | 2.03s | 1.69s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 1.61s | 0.63s | 2.16s | 1.47s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 1.45s | 0.56s | 2.08s | 1.36s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 1.58s | 0.63s | 1.87s | 1.36s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 1.51s | 0.65s | 1.88s | 1.35s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 1.52s | 0.66s | 1.79s | 1.32s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 1.61s | 0.67s | 1.68s | 1.32s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 1.53s | 0.63s | 1.80s | 1.32s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 1.50s | 0.64s | 1.79s | 1.31s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 1.59s | 0.68s | 1.66s | 1.31s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 1.82s | 0.53s | 1.54s | 1.30s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 1.45s | 0.53s | 1.92s | 1.30s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 1.52s | 0.64s | 1.74s | 1.30s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 1.48s | 0.69s | 1.71s | 1.29s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 1.51s | 0.53s | 1.83s | 1.29s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 1.53s | 0.63s | 1.68s | 1.28s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 1.56s | 0.63s | 1.64s | 1.28s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 1.48s | 0.52s | 1.81s | 1.27s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 1.52s | 0.65s | 1.64s | 1.27s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 1.50s | 0.62s | 1.67s | 1.26s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 1.42s | 0.65s | 1.70s | 1.26s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 1.49s | 0.52s | 1.72s | 1.25s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 1.44s | 0.54s | 1.73s | 1.24s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 1.43s | 0.51s | 1.76s | 1.23s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 1.50s | 0.56s | 1.59s | 1.22s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE2] | 1.43s | 0.51s | 1.71s | 1.22s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_2_sets] | 1.05s | 0.58s | 2.01s | 1.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 1.47s | 0.52s | 1.65s | 1.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 1.43s | 0.53s | 1.68s | 1.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 1.46s | 0.54s | 1.62s | 1.20s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 1.47s | 0.51s | 1.63s | 1.20s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 1.54s | 0.53s | 1.51s | 1.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 1.50s | 0.51s | 1.57s | 1.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 1.44s | 0.52s | 1.60s | 1.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 1.50s | 0.51s | 1.55s | 1.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 1.45s | 0.51s | 1.58s | 1.18s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE2] | 1.22s | 0.51s | 1.79s | 1.17s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 1.46s | 0.51s | 1.54s | 1.17s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 1.42s | 0.50s | 1.57s | 1.16s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 1.42s | 0.52s | 1.55s | 1.16s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 1.40s | 0.51s | 1.58s | 1.16s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 1.43s | 0.54s | 1.52s | 1.16s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 1.37s | 0.50s | 1.61s | 1.16s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE2] | 1.24s | 0.54s | 1.68s | 1.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 1.41s | 0.51s | 1.52s | 1.15s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE2] | 1.24s | 0.55s | 1.64s | 1.14s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE2] | 1.25s | 0.53s | 1.62s | 1.14s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE] | 1.05s | 0.46s | 1.87s | 1.13s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE2] | 1.24s | 0.52s | 1.61s | 1.12s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE2] | 1.14s | 0.54s | 1.66s | 1.11s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_zero_input] | 0.96s | 0.55s | 1.83s | 1.11s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE] | 1.11s | 0.46s | 1.76s | 1.11s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE2] | 1.25s | 0.54s | 1.55s | 1.11s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE] | 1.02s | 0.51s | 1.80s | 1.11s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_1_pair] | 0.99s | 0.57s | 1.63s | 1.06s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE] | 1.04s | 0.48s | 1.56s | 1.03s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE] | 1.06s | 0.45s | 1.58s | 1.03s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE] | 1.03s | 0.44s | 1.61s | 1.03s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE] | 1.05s | 0.45s | 1.57s | 1.02s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE] | 0.92s | 0.47s | 1.60s | 0.99s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_1_pair_empty] | 0.63s | 0.19s | 1.47s | 0.76s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-ec_pairing_3_pair] | 0.60s | 0.19s | 1.50s | 0.76s |
| test_worst_compute.py::test_empty_block[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 0.60s | 0.09s | 1.39s | 0.69s |

## Summary

**Total unique test cases:** 532

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| risc0-v3.0.3 | 532 | 529 | 3 | 0 |
| sp1-v5.2.1 | 532 | 532 | 0 | 0 |
| zisk-v0.11.0 | 532 | 402 | 130 | 0 |

---

