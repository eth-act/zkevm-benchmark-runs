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

| Test Case | openvm-v1.4.1 | sp1-v5.2.3 | Avg |
|-----------|-----------|-----------|----------|
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_qube] | 9m 6.49s | 1h 5m 44.55s | 37m 25.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_qube] | 8m 27.13s | 1h 3m 3.24s | 35m 45.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1024_exp_2] | 8m 34.35s | 58m 54.40s | 33m 44.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_square] | 7m 59.04s | 59m 4.41s | 33m 31.73s |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_30M-blockchain_test-point_evaluation] | 9m 33.57s | 55m 20.26s | 32m 26.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1045_gas_base_heavy] | 7m 44.86s | 56m 47.13s | 32m 15.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_square] | 7m 47.48s | 56m 42.34s | 32m 14.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_800_gas_base_heavy] | 7m 37.36s | 56m 22.58s | 31m 59.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_867_gas_base_heavy] | 8m 3.45s | 55m 24.47s | 31m 43.96s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_616_gas_base_heavy] | 7m 25.23s | 54m 50.15s | 31m 7.69s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_qube] | 7m 21.70s | 53m 49.62s | 30m 35.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_408_gas_base_heavy] | 6m 59.46s | 51m 0.74s | 29m 0.10s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_264_exp_2] | 6m 50.52s | 50m 18.61s | 28m 34.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_256_exp_2] | 6m 40.39s | 49m 41.90s | 28m 11.14s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_square] | 6m 44.05s | 49m 14.64s | 27m 59.34s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_base_heavy] | 5m 39.71s | 40m 27.24s | 23m 3.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_8b_exp_896] | 5m 32.97s | 34m 46.20s | 20m 9.59s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_8_exp_896] | 5m 27.22s | 33m 35.47s | 19m 31.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_298_gas_exp_heavy] | 5m 3.70s | 33m 58.59s | 19m 31.14s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_1_exp_heavy] | 4m 50.87s | 32m 51.00s | 18m 50.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_8_exp_648] | 4m 38.57s | 31m 6.78s | 17m 52.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_215_gas_exp_heavy] | 4m 43.07s | 30m 48.62s | 17m 45.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_exp_heavy] | 4m 51.74s | 30m 4.18s | 17m 27.96s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_3_even] | 3m 51.96s | 27m 25.27s | 15m 38.61s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_fp_to_g1] | 4m 28.86s | 21m 31.30s | 13m 0.08s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_qube] | 3m 3.92s | 21m 55.99s | 12m 29.96s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_30M-blockchain_test-ecrecover] | 12m 17.63s | 12m 39.97s | 12m 28.80s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_800_gas_exp_heavy] | 3m 18.99s | 20m 42.07s | 12m 0.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_852_gas_exp_heavy] | 3m 18.87s | 20m 26.62s | 11m 52.74s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_pairing_check] | 3m 20.53s | 19m 58.51s | 11m 39.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_600_gas_exp_heavy] | 3m 13.34s | 20m 4.57s | 11m 38.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_square] | 2m 52.71s | 20m 19.33s | 11m 36.02s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_16b_exp_320] | 3m 7.79s | 19m 17.17s | 11m 12.48s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_400_gas_exp_heavy] | 3m 12.71s | 18m 52.22s | 11m 2.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_2] | 3m 0.80s | 18m 56.36s | 10m 58.58s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_2_even] | 2m 52.74s | 18m 10.03s | 10m 31.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 2m 51.51s | 17m 51.02s | 10m 21.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_marius_1_even] | 2m 31.72s | 15m 55.89s | 9m 13.81s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_fp_to_g2] | 3m 5.26s | 15m 18.92s | 9m 12.09s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_765_gas_exp_heavy] | 2m 35.98s | 15m 39.96s | 9m 7.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_24b_exp_168] | 2m 23.52s | 15m 24.27s | 8m 53.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_3] | 2m 27.10s | 14m 48.65s | 8m 37.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_256] | 2m 16.92s | 14m 45.55s | 8m 31.23s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1360_gas_balanced] | 2m 8.68s | 14m 35.64s | 8m 22.16s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_256] | 2m 10.23s | 14m 27.68s | 8m 18.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 2m 12.16s | 14m 18.15s | 8m 15.16s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_example_1] | 2m 8.61s | 14m 13.47s | 8m 11.04s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_96] | 2m 3.19s | 13m 55.86s | 7m 59.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_example_2] | 1m 59.53s | 13m 55.14s | 7m 57.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_zkevm_worst_case] | 2m 7.56s | 13m 47.04s | 7m 57.30s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_128] | 2m 2.65s | 13m 38.83s | 7m 50.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_677_gas_base_heavy] | 2m 1.22s | 13m 33.78s | 7m 47.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_8] | 2m 1.61s | 13m 29.11s | 7m 45.36s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_96] | 1m 59.18s | 13m 10.18s | 7m 34.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_4] | 1m 57.70s | 13m 9.05s | 7m 33.37s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_65] | 1m 56.13s | 13m 6.41s | 7m 31.27s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g2add] | 2m 18.66s | 12m 41.36s | 7m 30.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 1m 56.63s | 12m 43.02s | 7m 19.82s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1360n1] | 1m 53.96s | 12m 28.25s | 7m 11.11s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g1add] | 2m 17.80s | 12m 4.36s | 7m 11.08s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_64] | 1m 57.85s | 12m 22.22s | 7m 10.04s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_600_gas_balanced] | 1m 54.94s | 12m 25.07s | 7m 10.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_408_gas_balanced] | 1m 45.68s | 12m 14.74s | 7m 0.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_64b_exp_512] | 1m 46.77s | 12m 13.61s | 7m 0.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1360n2] | 1m 43.95s | 12m 9.05s | 6m 56.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_64b_exp_512] | 1m 43.28s | 11m 59.78s | 6m 51.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_996_gas_balanced] | 1m 42.20s | 11m 59.26s | 6m 50.73s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_767_gas_balanced] | 1m 40.83s | 11m 58.92s | 6m 49.87s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_40] | 1m 46.87s | 11m 48.33s | 6m 47.60s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_balanced] | 1m 43.60s | 11m 41.10s | 6m 42.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_40] | 1m 40.60s | 11m 12.24s | 6m 26.42s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g1msm] | 2m 11.50s | 10m 40.32s | 6m 25.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1349n1] | 1m 46.08s | 11m 2.93s | 6m 24.51s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_30M-blockchain_test-blake2f] | 2m 12.64s | 10m 33.04s | 6m 22.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_208_gas_balanced] | 1m 40.43s | 11m 4.16s | 6m 22.30s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_128b_exp_1024] | 1m 32.11s | 11m 9.52s | 6m 20.82s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_128b_exp_1024] | 1m 32.54s | 11m 7.91s | 6m 20.22s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_36] | 1m 36.81s | 10m 53.19s | 6m 15.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_256b_exp_1024] | 1m 27.57s | 10m 49.18s | 6m 8.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_1_even] | 1m 35.27s | 10m 35.86s | 6m 5.56s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_256b_exp_1024] | 1m 31.49s | 10m 35.08s | 6m 3.29s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_cover_windows] | 1m 39.13s | 10m 14.48s | 5m 56.81s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_512b_exp_1024] | 1m 29.25s | 10m 20.51s | 5m 54.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_512b_exp_1024] | 1m 25.56s | 10m 21.56s | 5m 53.56s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 1m 23.22s | 9m 53.64s | 5m 38.43s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add] | 1m 43.82s | 9m 26.27s | 5m 35.04s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_1024b_exp_1024] | 1m 23.09s | 9m 39.21s | 5m 31.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_1024b_exp_1024] | 1m 19.29s | 9m 37.95s | 5m 28.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 1m 21.81s | 9m 33.36s | 5m 27.59s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_32] | 1m 24.62s | 9m 22.57s | 5m 23.59s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 1m 18.33s | 9m 5.21s | 5m 11.77s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 1m 15.90s | 8m 55.48s | 5m 5.69s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 1m 15.72s | 8m 46.90s | 5m 1.31s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n2] | 1m 17.10s | 7m 59.80s | 4m 38.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n3] | 1m 13.41s | 7m 58.10s | 4m 35.75s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul] | 3m 11.48s | 5m 45.89s | 4m 28.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1152n1] | 1m 12.94s | 7m 38.80s | 4m 25.87s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 3m 5.48s | 5m 40.70s | 4m 23.09s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 3m 6.78s | 5m 34.49s | 4m 20.64s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g2msm] | 1m 14.71s | 7m 3.41s | 4m 9.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_qube] | 1m 1.92s | 7m 1.51s | 4m 1.71s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_square] | 58.21s | 6m 39.82s | 3m 49.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n1] | 54.60s | 6m 9.56s | 3m 32.08s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_191] | 54.02s | 5m 29.85s | 3m 11.93s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_255] | 53.55s | 5m 27.96s | 3m 10.75s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_30M-blockchain_test-contract_balance_0] | 46.24s | 4m 43.50s | 2m 44.87s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_30M-blockchain_test-contract_balance_1] | 49.16s | 4m 39.88s | 2m 44.52s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODESIZE] | ❌ SDK Crash | 2m 40.42s | 2m 40.42s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALLCODE] | ❌ SDK Crash | 2m 37.33s | 2m 37.33s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DELEGATECALL] | ❌ SDK Crash | 2m 36.60s | 2m 36.60s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_STATICCALL] | ❌ SDK Crash | 2m 35.81s | 2m 35.81s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODEHASH] | ❌ SDK Crash | 2m 31.13s | 2m 31.13s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 2m 10.49s | 2m 45.37s | 2m 27.93s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALL] | ❌ SDK Crash | 2m 23.17s | 2m 23.17s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_5_pair] | 1m 59.61s | 2m 39.02s | 2m 19.32s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODECOPY] | ❌ SDK Crash | 2m 17.48s | 2m 17.47s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_4_pair] | 1m 53.67s | 2m 40.59s | 2m 17.13s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_191] | 41.53s | 3m 52.38s | 2m 16.96s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_127] | 39.03s | 3m 51.63s | 2m 15.33s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_two_pairings] | 1m 51.09s | 2m 38.54s | 2m 14.81s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_pair] | 1m 51.46s | 2m 37.50s | 2m 14.48s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_one_pairing] | 1m 48.62s | 2m 37.07s | 2m 12.84s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_191] | 40.23s | 3m 43.65s | 2m 11.94s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SDIV-1] | 44.73s | 3m 33.34s | 2m 9.04s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SDIV-0] | 42.99s | 3m 32.87s | 2m 7.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add_1_2] | 1m 58.23s | 1m 53.24s | 1m 55.74s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DIV-0] | 36.54s | 3m 5.13s | 1m 50.83s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_63] | 28.09s | 2m 58.98s | 1m 43.53s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_127] | 31.72s | 2m 54.02s | 1m 42.87s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_255] | 31.86s | 2m 53.86s | 1m 42.86s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DIV-1] | 34.78s | 2m 49.65s | 1m 42.21s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 2.63s | 3m 19.20s | 1m 40.91s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_255] | 32.96s | 2m 45.84s | 1m 39.40s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_127] | 31.37s | 2m 46.51s | 1m 38.94s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_191] | 29.28s | 2m 44.25s | 1m 36.77s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_diff_acc] | 53.40s | 1m 58.35s | 1m 25.87s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_b] | 56.26s | 1m 53.44s | 1m 24.85s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_b] | 56.08s | 1m 51.19s | 1m 23.63s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_diff_acc] | 53.15s | 1m 52.54s | 1m 22.84s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_a] | 53.01s | 1m 51.97s | 1m 22.49s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_255] | 24.78s | 2m 15.04s | 1m 19.91s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_127] | 23.58s | 2m 6.65s | 1m 15.12s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PREVRANDAO] | 13.38s | 2m 6.79s | 1m 10.09s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_63] | 18.93s | 1m 58.74s | 1m 8.83s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_63] | 17.33s | 1m 51.23s | 1m 4.28s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXP-] | 17.22s | 1m 37.83s | 57.52s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero-loop] | 10.65s | 1m 34.96s | 52.80s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-one-loop] | 10.57s | 1m 34.01s | 52.29s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_63] | 14.61s | 1m 29.85s | 52.23s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty-opcode_REVERT] | 14.72s | 1m 27.72s | 51.22s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP16] | 9.69s | 1m 28.25s | 48.97s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP3] | 9.85s | 1m 28.05s | 48.95s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP15] | 9.75s | 1m 28.14s | 48.95s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP13] | 10.04s | 1m 27.66s | 48.85s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP4] | 9.67s | 1m 27.83s | 48.75s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP8] | 9.73s | 1m 27.25s | 48.49s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP2] | 9.72s | 1m 27.11s | 48.41s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP12] | 10.45s | 1m 26.36s | 48.41s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP6] | 9.66s | 1m 27.00s | 48.33s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP7] | 10.42s | 1m 26.17s | 48.29s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP10] | 10.16s | 1m 26.40s | 48.28s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP14] | 10.31s | 1m 26.20s | 48.25s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP11] | 9.66s | 1m 26.74s | 48.20s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP9] | 9.70s | 1m 26.56s | 48.13s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP5] | 9.65s | 1m 26.34s | 47.99s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_STATICCALL] | 13.40s | 1m 21.74s | 47.57s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP1] | 9.65s | 1m 25.43s | 47.54s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_CALL] | 13.03s | 1m 20.29s | 46.66s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_CALLCODE] | 13.52s | 1m 19.68s | 46.60s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ORIGIN] | 9.92s | 1m 22.59s | 46.26s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADDRESS] | 9.77s | 1m 22.47s | 46.12s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty] | 9.18s | 1m 22.87s | 46.02s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty-opcode_RETURN] | 13.11s | 1m 18.59s | 45.85s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH31] | 8.05s | 1m 23.60s | 45.82s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_False] | 2.09s | 1m 29.54s | 45.81s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH32] | 8.55s | 1m 22.41s | 45.48s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALLER] | 9.82s | 1m 20.88s | 45.35s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_COINBASE] | 10.41s | 1m 19.64s | 45.02s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_True] | 1.86s | 1m 28.08s | 44.97s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_True] | 2.02s | 1m 27.51s | 44.77s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_False] | 1.92s | 1m 27.55s | 44.73s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH30] | 8.12s | 1m 20.04s | 44.08s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SGT-] | 9.93s | 1m 17.87s | 43.90s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 11.93s | 1m 10.31s | 41.12s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH29] | 7.45s | 1m 13.91s | 40.68s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_CALLCODE] | 11.32s | 1m 9.13s | 40.22s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH27] | 7.42s | 1m 12.98s | 40.20s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_CALL] | 11.11s | 1m 8.97s | 40.04s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_STATICCALL] | 11.37s | 1m 8.57s | 39.97s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH28] | 7.38s | 1m 12.52s | 39.95s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EQ-] | 8.61s | 1m 11.04s | 39.83s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SAR-] | 9.44s | 1m 7.62s | 38.53s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SMOD-] | 8.90s | 1m 7.71s | 38.31s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH23] | 6.58s | 1m 8.77s | 37.67s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH26] | 7.40s | 1m 7.14s | 37.27s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 8.12s | 1m 6.18s | 37.15s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SAR] | 8.51s | 1m 5.53s | 37.02s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH22] | 6.01s | 1m 7.44s | 36.72s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH24] | 6.84s | 1m 6.52s | 36.68s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH25] | 7.38s | 1m 5.81s | 36.59s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BLOBBASEFEE] | 7.71s | 1m 4.58s | 36.15s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASPRICE] | 7.63s | 1m 3.86s | 35.75s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 10.39s | 1m 0.16s | 35.27s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of zero data-opcode_REVERT] | 9.67s | 1m 0.75s | 35.21s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 31.00s | 37.54s | 34.27s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH21] | 5.96s | 1m 1.78s | 33.87s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE new value] | 9.31s | 57.75s | 33.53s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SHR] | 8.66s | 57.81s | 33.24s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MUL-] | 7.74s | 57.94s | 32.84s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH19] | 5.90s | 59.45s | 32.67s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHL-] | 7.58s | 56.58s | 32.08s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of zero data-opcode_RETURN] | 8.76s | 55.23s | 31.99s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH20] | 5.57s | 58.24s | 31.91s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHR-] | 7.50s | 55.49s | 31.50s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH15] | 5.48s | 55.54s | 30.51s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MOD-] | 6.89s | 52.39s | 29.64s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-0 bytes] | 7.36s | 51.41s | 29.38s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 7.02s | 51.10s | 29.06s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH18] | 5.11s | 52.95s | 29.03s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 7.40s | 50.39s | 28.90s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob and accessed] | 6.41s | 51.01s | 28.71s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-six blobs, access latest] | 6.79s | 50.58s | 28.68s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH14] | 4.84s | 52.34s | 28.59s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 5.99s | 51.06s | 28.52s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SIGNEXTEND-] | 6.73s | 50.28s | 28.51s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 6.25s | 50.13s | 28.19s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 6.41s | 49.66s | 28.03s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 6.38s | 49.33s | 27.86s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 5.98s | 49.70s | 27.84s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH17] | 5.26s | 50.38s | 27.82s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 6.52s | 49.09s | 27.80s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 6.58s | 48.98s | 27.78s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_TIMESTAMP] | 5.87s | 49.66s | 27.77s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 5.99s | 49.47s | 27.73s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 6.42s | 48.74s | 27.58s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 6.33s | 48.77s | 27.55s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_NUMBER] | 5.91s | 49.15s | 27.53s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 6.32s | 48.70s | 27.51s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 6.03s | 48.94s | 27.48s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 6.64s | 48.16s | 27.40s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 6.74s | 48.00s | 27.37s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH16] | 4.99s | 49.61s | 27.30s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BASEFEE] | 5.69s | 47.75s | 26.72s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CHAINID] | 5.67s | 47.58s | 26.62s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1] | 5.63s | 47.18s | 26.41s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_0] | 5.97s | 46.49s | 26.23s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 7.19s | 45.07s | 26.13s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add_infinities] | 8.03s | 44.23s | 26.13s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 5.52s | 45.60s | 25.56s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 5.78s | 45.09s | 25.43s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASLIMIT] | 5.51s | 44.85s | 25.18s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 5.51s | 44.48s | 24.99s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000] | 5.55s | 44.30s | 24.93s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-100 bytes] | 6.18s | 43.48s | 24.83s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH13] | 4.60s | 45.04s | 24.82s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 6.15s | 43.10s | 24.62s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 6.18s | 42.80s | 24.49s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 6.63s | 41.58s | 24.10s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 6.01s | 41.88s | 23.94s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_False] | 6.64s | 40.89s | 23.76s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_True] | 6.50s | 40.82s | 23.66s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH0] | 5.30s | 41.98s | 23.64s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE same value] | 6.65s | 39.08s | 22.86s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH11] | 4.54s | 41.05s | 22.79s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 5.53s | 39.83s | 22.68s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH12] | 4.47s | 40.85s | 22.66s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 5.47s | 39.54s | 22.50s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 5.88s | 39.06s | 22.47s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 5.53s | 39.27s | 22.39s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 5.47s | 38.91s | 22.19s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 5.52s | 38.78s | 22.15s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-0 bytes] | 5.49s | 38.72s | 22.11s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_False] | 4.96s | 38.93s | 21.94s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 5.52s | 38.35s | 21.93s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 4.70s | 39.09s | 21.89s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 5.49s | 38.27s | 21.88s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 5.50s | 38.15s | 21.82s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 5.48s | 38.08s | 21.78s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-100 bytes] | 5.44s | 38.11s | 21.78s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 5.47s | 37.91s | 21.69s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 5.46s | 37.91s | 21.68s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_False] | 5.05s | 37.95s | 21.50s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_True] | 4.86s | 37.70s | 21.28s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_True] | 4.78s | 37.75s | 21.27s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 5.42s | 37.00s | 21.21s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SLT-] | 4.74s | 35.38s | 20.06s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SUB-] | 4.58s | 33.66s | 19.12s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 4.33s | 33.21s | 18.77s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-5b] | 3.11s | 34.07s | 18.59s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH7] | 4.24s | 32.71s | 18.48s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH10] | 4.16s | 32.76s | 18.46s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 4.22s | 32.43s | 18.32s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 0.59s | 35.77s | 18.18s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADD-] | 4.63s | 31.62s | 18.12s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH9] | 4.14s | 31.72s | 17.93s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH8] | 4.00s | 31.05s | 17.52s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH6] | 3.92s | 30.48s | 17.20s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 4.27s | 29.84s | 17.05s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BYTE-] | 3.84s | 29.69s | 16.77s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 3.82s | 29.63s | 16.73s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 3.60s | 29.77s | 16.68s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_1000] | 3.87s | 29.36s | 16.61s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH5] | 3.64s | 29.50s | 16.57s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_0] | 3.76s | 29.05s | 16.40s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 3.79s | 29.00s | 16.39s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 3.76s | 29.02s | 16.39s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 3.75s | 28.98s | 16.36s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 3.58s | 29.11s | 16.34s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 4.18s | 28.45s | 16.31s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_10000] | 3.74s | 28.80s | 16.27s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 3.80s | 28.20s | 16.00s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_LT-] | 3.67s | 28.23s | 15.95s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob but access non-existent index] | 3.82s | 28.05s | 15.94s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_AND-] | 3.86s | 27.90s | 15.88s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GT-] | 3.72s | 27.93s | 15.83s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-1MiB] | 3.88s | 27.74s | 15.81s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_XOR-] | 3.78s | 27.81s | 15.80s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 3.63s | 27.93s | 15.78s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH4] | 3.54s | 28.02s | 15.78s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_OR-] | 3.56s | 27.82s | 15.69s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 3.48s | 27.85s | 15.66s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP9] | 3.34s | 27.50s | 15.42s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP15] | 3.56s | 27.10s | 15.33s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-no blobs] | 3.81s | 26.85s | 15.33s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-10KiB] | 4.09s | 26.35s | 15.22s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP16] | 3.39s | 26.98s | 15.19s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH3] | 3.69s | 26.68s | 15.18s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 3.36s | 26.99s | 15.17s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP13] | 3.37s | 26.97s | 15.17s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 4.87s | 25.42s | 15.14s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP7] | 3.54s | 26.74s | 15.14s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 3.59s | 26.65s | 15.12s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 3.84s | 26.36s | 15.10s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 3.34s | 26.84s | 15.09s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 3.33s | 26.82s | 15.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 3.32s | 26.78s | 15.05s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 3.36s | 26.73s | 15.04s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 3.35s | 26.72s | 15.03s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP5] | 3.54s | 26.49s | 15.01s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP10] | 3.47s | 26.55s | 15.01s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP4] | 3.50s | 26.52s | 15.01s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 3.32s | 26.66s | 14.99s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP11] | 3.39s | 26.56s | 14.97s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP14] | 3.31s | 26.63s | 14.97s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP12] | 3.47s | 26.40s | 14.94s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP2] | 3.30s | 26.55s | 14.93s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP6] | 3.32s | 26.52s | 14.92s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 3.39s | 26.36s | 14.88s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP1] | 3.31s | 26.40s | 14.85s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 3.35s | 26.34s | 14.84s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP8] | 3.30s | 26.35s | 14.82s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP3] | 3.31s | 26.27s | 14.79s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-100 bytes] | 3.47s | 26.10s | 14.79s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 3.96s | 25.53s | 14.75s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 3.08s | 26.25s | 14.66s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-100 bytes] | 3.40s | 25.03s | 14.21s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-1MiB] | 2.67s | 25.56s | 14.12s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH2] | 3.25s | 24.58s | 13.91s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 3.52s | 24.10s | 13.81s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 3.19s | 24.03s | 13.61s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 3.18s | 23.53s | 13.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH1] | 3.07s | 23.61s | 13.34s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 3.44s | 22.42s | 12.93s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_BALANCE] | 3.55s | 22.12s | 12.84s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 3.06s | 22.53s | 12.79s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 2.99s | 20.91s | 11.95s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_False] | 3.46s | 19.39s | 11.42s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SLOAD] | 3.39s | 19.21s | 11.30s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 2.60s | 19.80s | 11.20s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-10KiB] | 2.75s | 19.64s | 11.19s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_True] | 3.26s | 18.98s | 11.12s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-1MiB] | 2.17s | 19.82s | 10.99s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 1.95s | 19.27s | 10.61s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 3.23s | 17.89s | 10.56s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-10KiB] | 2.74s | 17.93s | 10.34s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-00] | 1.99s | 18.54s | 10.27s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-512] | 2.84s | 17.20s | 10.02s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 2.90s | 16.92s | 9.91s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_BALANCE] | 2.83s | 16.83s | 9.83s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 1.82s | 17.60s | 9.71s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 2.23s | 17.02s | 9.62s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_False] | 2.84s | 16.31s | 9.57s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB] | 2.75s | 16.00s | 9.37s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_True] | 2.75s | 15.85s | 9.30s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 2.56s | 15.53s | 9.04s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b5b] | 2.07s | 16.00s | 9.03s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 2.45s | 15.62s | 9.03s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 2.46s | 15.39s | 8.93s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 2.41s | 15.23s | 8.81s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 2.46s | 15.14s | 8.80s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-max code size] | 2.40s | 14.85s | 8.62s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 1.40s | 15.19s | 8.30s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-1MiB] | 1.36s | 14.28s | 7.82s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 1.63s | 13.88s | 7.75s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-5KiB] | 1.91s | 13.59s | 7.75s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b5b] | 1.68s | 13.39s | 7.54s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 1.71s | 13.32s | 7.51s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value] | 1.53s | 12.74s | 7.14s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSLOAD] | 1.43s | 12.64s | 7.03s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 2.27s | 11.73s | 7.00s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 1.61s | 12.08s | 6.84s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 1.62s | 11.95s | 6.78s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b] | 1.48s | 12.03s | 6.75s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 1.60s | 11.80s | 6.70s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-10KiB] | 1.58s | 11.78s | 6.68s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 1.66s | 11.69s | 6.67s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-max code size] | 1.57s | 11.64s | 6.60s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 1.60s | 11.60s | 6.60s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 1.57s | 11.58s | 6.57s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 1.48s | 11.59s | 6.54s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b] | 1.16s | 10.29s | 5.72s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_True] | 1.37s | 9.99s | 5.68s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_2_scalar] | 5.47s | 5.84s | 5.65s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value] | 1.26s | 9.75s | 5.51s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_False] | 1.17s | 7.73s | 4.45s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 0.93s | 7.20s | 4.06s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 0.93s | 6.89s | 3.90s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 0.84s | 6.92s | 3.88s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSLOAD] | 0.91s | 6.64s | 3.77s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 1.12s | 6.40s | 3.76s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 0.96s | 6.45s | 3.71s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 0.96s | 5.89s | 3.42s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_100000] | 0.81s | 5.78s | 3.29s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 0.82s | 5.06s | 2.94s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_False] | 0.81s | 5.01s | 2.91s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_2_scalar] | 0.84s | 4.96s | 2.90s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_True] | 0.79s | 4.67s | 2.73s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_True] | 0.52s | 4.28s | 2.40s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 0.46s | 2.93s | 1.69s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 0.52s | 2.77s | 1.65s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 0.52s | 2.77s | 1.65s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 0.43s | 2.03s | 1.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 0.42s | 2.03s | 1.22s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value] | 0.41s | 1.99s | 1.20s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value] | 0.37s | 1.84s | 1.10s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE] | 0.41s | 1.63s | 1.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 0.37s | 1.62s | 1.00s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 0.38s | 1.61s | 1.00s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 0.37s | 1.61s | 0.99s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 0.38s | 1.56s | 0.97s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 0.35s | 1.59s | 0.97s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 0.36s | 1.53s | 0.95s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 0.38s | 1.48s | 0.93s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 0.35s | 1.50s | 0.93s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 0.34s | 1.47s | 0.91s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 0.38s | 1.35s | 0.87s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 0.37s | 1.36s | 0.86s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 0.34s | 1.37s | 0.86s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 0.40s | 1.30s | 0.85s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 0.32s | 1.38s | 0.85s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_REVERT] | 0.31s | 1.32s | 0.81s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 0.36s | 1.24s | 0.80s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 0.33s | 1.25s | 0.79s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_RETURN] | 0.30s | 1.27s | 0.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 0.36s | 1.20s | 0.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 0.35s | 1.20s | 0.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 0.34s | 1.21s | 0.77s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE2] | 0.35s | 1.18s | 0.77s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_False] | 0.26s | 1.25s | 0.75s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE] | 0.34s | 1.14s | 0.74s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE2] | 0.33s | 1.14s | 0.73s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 0.35s | 1.11s | 0.73s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE] | 0.35s | 1.10s | 0.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 0.30s | 1.11s | 0.71s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 0.35s | 1.06s | 0.70s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 0.32s | 1.06s | 0.69s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 0.31s | 1.06s | 0.69s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 0.32s | 0.91s | 0.62s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 0.32s | 0.91s | 0.61s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE2] | 0.30s | 0.81s | 0.55s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_sets] | 0.31s | 0.52s | 0.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 0.25s | 0.50s | 0.37s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 0.23s | 0.50s | 0.36s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 0.22s | 0.50s | 0.36s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 0.24s | 0.48s | 0.36s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000000] | 0.24s | 0.48s | 0.36s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 0.26s | 0.44s | 0.35s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 0.26s | 0.44s | 0.35s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 0.26s | 0.44s | 0.35s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 0.24s | 0.44s | 0.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 0.25s | 0.44s | 0.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 0.23s | 0.45s | 0.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 0.24s | 0.44s | 0.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 0.23s | 0.45s | 0.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 0.23s | 0.44s | 0.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 0.23s | 0.42s | 0.33s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 0.26s | 0.39s | 0.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 0.26s | 0.38s | 0.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 0.24s | 0.40s | 0.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 0.25s | 0.39s | 0.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 0.23s | 0.40s | 0.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 0.23s | 0.40s | 0.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 0.26s | 0.36s | 0.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 0.24s | 0.39s | 0.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 0.27s | 0.36s | 0.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 0.24s | 0.38s | 0.31s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE2] | 0.23s | 0.39s | 0.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 0.24s | 0.38s | 0.31s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 0.24s | 0.38s | 0.31s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair] | 0.26s | 0.36s | 0.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 0.24s | 0.37s | 0.30s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 0.22s | 0.39s | 0.30s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 0.22s | 0.38s | 0.30s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 0.25s | 0.35s | 0.30s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_zero_input] | 0.26s | 0.34s | 0.30s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 0.23s | 0.37s | 0.30s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 0.24s | 0.36s | 0.30s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 0.24s | 0.36s | 0.30s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 0.22s | 0.38s | 0.30s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 0.23s | 0.37s | 0.30s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 0.23s | 0.37s | 0.30s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 0.21s | 0.38s | 0.30s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 0.23s | 0.37s | 0.30s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 0.22s | 0.37s | 0.30s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 0.25s | 0.34s | 0.29s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 0.21s | 0.38s | 0.29s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 0.21s | 0.37s | 0.29s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 0.24s | 0.34s | 0.29s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 0.22s | 0.36s | 0.29s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 0.22s | 0.36s | 0.29s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 0.22s | 0.36s | 0.29s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 0.22s | 0.36s | 0.29s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE] | 0.24s | 0.32s | 0.28s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 0.23s | 0.33s | 0.28s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 0.21s | 0.34s | 0.28s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 0.21s | 0.34s | 0.28s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 0.23s | 0.32s | 0.28s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 0.22s | 0.33s | 0.28s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 0.23s | 0.32s | 0.27s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 0.22s | 0.33s | 0.27s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_3_pair] | 0.24s | 0.18s | 0.21s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair_empty] | 0.20s | 0.18s | 0.19s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 0.18s | 0.06s | 0.12s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| openvm-v1.4.1 | 533 | 526 | 7 | 0 |
| sp1-v5.2.3 | 533 | 533 | 0 | 0 |

---

