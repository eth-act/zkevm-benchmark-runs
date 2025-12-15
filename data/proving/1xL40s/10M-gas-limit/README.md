# 1xL40s - 10M-gas-limit

## Gas Limit Configuration - Proving

EEST benchmarks with 10M-gas-limit gas limit (proving results) on **1xL40s** hardware.

## Available EL Clients

- [reth](#reth)

---

## reth


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | sp1-v5.2.2<br/>(1.41MiB) | zisk-v0.14.0<br/>(244.02KiB) | Avg |
|-----------|-----------|-----------|----------|
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_1024_exp_2] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_1045_gas_base_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_256_exp_2] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_264_exp_2] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_408_gas_base_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_616_gas_base_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_800_gas_base_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_867_gas_base_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_exp_298_gas_exp_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_min_gas_base_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_guido_3_even] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_3_qube] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_3_square] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_4_qube] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_4_square] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_5_qube] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_5_square] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_1_exp_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_10M-blockchain_test-point_evaluation] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_8b_exp_896] | 1h 47m 56.89s | ❌ SDK Crash | 1h 47m 56.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_8_exp_896] | 1h 45m 8.50s | ❌ SDK Crash | 1h 45m 8.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_exp_215_gas_exp_heavy] | 1h 36m 19.45s | ❌ SDK Crash | 1h 36m 19.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_8_exp_648] | 1h 36m 3.01s | ❌ SDK Crash | 1h 36m 3.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_min_gas_exp_heavy] | 1h 34m 7.50s | ❌ SDK Crash | 1h 34m 7.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_2_qube] | 1h 21m 33.92s | ❌ SDK Crash | 1h 21m 33.92s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_fp_to_g1] | 1h 18m 51.69s | ❌ SDK Crash | 1h 18m 51.69s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_2_square] | 1h 15m 40.36s | ❌ SDK Crash | 1h 15m 40.36s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_pairing_check] | 1h 13m 32.87s | ❌ SDK Crash | 1h 13m 32.87s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_800_gas_exp_heavy] | 1h 6m 51.51s | ❌ SDK Crash | 1h 6m 51.51s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_852_gas_exp_heavy] | 1h 6m 31.98s | ❌ SDK Crash | 1h 6m 31.98s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_600_gas_exp_heavy] | 1h 4m 1.93s | ❌ SDK Crash | 1h 4m 1.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_16b_exp_320] | 1h 2m 57.57s | ❌ SDK Crash | 1h 2m 57.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_pawel_2] | 1h 0m 21.43s | ❌ SDK Crash | 1h 0m 21.43s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_400_gas_exp_heavy] | 1h 0m 16.54s | ❌ SDK Crash | 1h 0m 16.54s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_guido_2_even] | 58m 22.51s | ❌ SDK Crash | 58m 22.51s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 57m 53.38s | ❌ SDK Crash | 57m 53.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_765_gas_exp_heavy] | 52m 36.15s | ❌ SDK Crash | 52m 36.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_marius_1_even] | 52m 11.19s | ❌ SDK Crash | 52m 11.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_24b_exp_168] | 51m 36.49s | ❌ SDK Crash | 51m 36.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_32b_exp_256] | 50m 2.83s | ❌ SDK Crash | 50m 2.83s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_pawel_3] | 49m 51.67s | ❌ SDK Crash | 49m 51.67s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_32b_exp_256] | 49m 34.62s | ❌ SDK Crash | 49m 34.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_1360_gas_balanced] | 49m 11.99s | ❌ SDK Crash | 49m 11.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_example_1] | 49m 3.52s | ❌ SDK Crash | 49m 3.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_zkevm_worst_case] | 48m 2.93s | ❌ SDK Crash | 48m 2.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 47m 30.02s | ❌ SDK Crash | 47m 30.02s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_32b_exp_96] | 47m 7.24s | ❌ SDK Crash | 47m 7.24s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_64b_exp_512] | 46m 34.97s | ❌ SDK Crash | 46m 34.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_128] | 46m 24.74s | ❌ SDK Crash | 46m 24.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_677_gas_base_heavy] | 46m 21.26s | ❌ SDK Crash | 46m 21.26s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_example_2] | 46m 10.55s | ❌ SDK Crash | 46m 10.55s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_64b_exp_512] | 46m 3.59s | ❌ SDK Crash | 46m 3.59s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_32b_exp_96] | 45m 16.65s | ❌ SDK Crash | 45m 16.65s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g2add] | 45m 14.45s | ❌ SDK Crash | 45m 14.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_pawel_4] | 45m 0.12s | ❌ SDK Crash | 45m 0.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_3_exp_8] | 44m 52.52s | ❌ SDK Crash | 44m 52.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_65] | 44m 0.32s | ❌ SDK Crash | 44m 0.32s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_600_gas_balanced] | 43m 26.76s | ❌ SDK Crash | 43m 26.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_128b_exp_1024] | 43m 19.84s | ❌ SDK Crash | 43m 19.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1360n1] | 43m 0.91s | ❌ SDK Crash | 43m 0.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_128b_exp_1024] | 42m 59.83s | ❌ SDK Crash | 42m 59.83s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_408_gas_balanced] | 42m 46.82s | ❌ SDK Crash | 42m 46.82s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 42m 42.64s | ❌ SDK Crash | 42m 42.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_996_gas_balanced] | 42m 34.24s | ❌ SDK Crash | 42m 34.24s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g1add] | 42m 26.53s | ❌ SDK Crash | 42m 26.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_64] | 42m 4.63s | ❌ SDK Crash | 42m 4.63s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_767_gas_balanced] | 42m 1.98s | ❌ SDK Crash | 42m 1.98s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_10M-blockchain_test-blake2f] | 41m 16.32s | ❌ SDK Crash | 41m 16.32s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_min_gas_balanced] | 40m 43.71s | ❌ SDK Crash | 40m 43.71s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_32b_exp_40] | 40m 30.08s | ❌ SDK Crash | 40m 30.08s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1349n1] | 39m 3.47s | ❌ SDK Crash | 39m 3.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1360n2] | 38m 58.48s | ❌ SDK Crash | 38m 58.48s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_exp_208_gas_balanced] | 38m 8.45s | ❌ SDK Crash | 38m 8.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_40] | 37m 44.68s | ❌ SDK Crash | 37m 44.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_36] | 36m 40.17s | ❌ SDK Crash | 36m 40.17s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_32b_exp_cover_windows] | 35m 56.30s | ❌ SDK Crash | 35m 56.30s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 35m 5.53s | ❌ SDK Crash | 35m 5.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_guido_1_even] | 33m 36.61s | ❌ SDK Crash | 33m 36.61s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_fp_to_g2] | 56m 47.23s | 9m 53.35s | 33m 20.29s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_32] | 31m 51.64s | ❌ SDK Crash | 31m 51.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_256b_exp_1024] | 40m 52.61s | 8m 40.19s | 24m 46.40s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_256b_exp_1024] | 40m 46.69s | 8m 44.40s | 24m 45.54s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_512b_exp_1024] | 40m 21.68s | 8m 27.49s | 24m 24.58s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_512b_exp_1024] | 40m 16.77s | 8m 26.39s | 24m 21.58s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 36m 49.53s | 8m 38.54s | 22m 44.03s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g1msm] | 37m 59.36s | 6m 35.19s | 22m 17.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 36m 3.53s | 8m 15.69s | 22m 9.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 35m 44.98s | 7m 56.06s | 21m 50.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 35m 23.14s | 7m 42.26s | 21m 32.70s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_200n2] | 27m 25.04s | 7m 38.46s | 17m 31.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_200n3] | 27m 24.67s | 7m 38.61s | 17m 31.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1152n1] | 26m 45.55s | 7m 53.94s | 17m 19.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_1_qube] | 26m 7.73s | 6m 24.53s | 16m 16.13s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_1_square] | 24m 39.77s | 6m 3.40s | 15m 21.59s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_10M-blockchain_test-contract_balance_1] | 15m 5.50s | ❌ SDK Crash | 15m 5.50s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g2msm] | 25m 21.26s | 4m 47.74s | 15m 4.50s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_STATICCALL] | 14m 56.89s | ❌ SDK Crash | 14m 56.89s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODESIZE] | 14m 52.70s | ❌ SDK Crash | 14m 52.70s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALLCODE] | 14m 41.90s | ❌ SDK Crash | 14m 41.90s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODEHASH] | 14m 41.54s | ❌ SDK Crash | 14m 41.54s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALL] | 14m 37.95s | ❌ SDK Crash | 14m 37.95s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DELEGATECALL] | 14m 33.67s | ❌ SDK Crash | 14m 33.67s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODECOPY] | 14m 18.15s | ❌ SDK Crash | 14m 18.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_1024b_exp_1024] | 22m 58.09s | 4m 47.90s | 13m 52.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_1024b_exp_1024] | 22m 55.12s | 4m 48.47s | 13m 51.80s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_200n1] | 21m 22.50s | 6m 5.47s | 13m 43.99s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_191] | 19m 38.52s | 5m 11.32s | 12m 24.92s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_255] | 18m 57.29s | 5m 4.07s | 12m 0.68s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_10M-blockchain_test-contract_balance_0] | 15m 7.95s | 8m 22.34s | 11m 45.14s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul] | 22m 18.45s | 22.66s | 11m 20.56s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 21m 40.62s | 22.40s | 11m 1.51s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 21m 40.17s | 22.16s | 11m 1.17s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_4_pair] | 16m 58.01s | 1m 3.61s | 9m 0.81s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_5_pair] | 16m 54.63s | 1m 0.45s | 8m 57.54s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_127] | 13m 59.36s | 3m 52.39s | 8m 55.88s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_2_pair] | 16m 32.83s | 1m 13.93s | 8m 53.38s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_two_pairings] | 16m 29.91s | 1m 11.80s | 8m 50.86s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_191] | 13m 29.28s | 3m 51.18s | 8m 40.23s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_one_pairing] | 15m 30.99s | 1m 25.92s | 8m 28.45s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 15m 50.14s | 47.69s | 8m 18.92s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_191] | 12m 43.68s | 3m 40.26s | 8m 11.97s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SDIV-1] | 12m 5.29s | 3m 20.93s | 7m 43.11s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SDIV-0] | 11m 56.55s | 3m 16.38s | 7m 36.46s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_63] | 10m 32.03s | 3m 15.78s | 6m 53.90s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DIV-0] | 10m 36.77s | 2m 56.22s | 6m 46.50s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_127] | 10m 22.98s | 2m 44.94s | 6m 33.96s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_255] | 9m 55.56s | 3m 3.41s | 6m 29.48s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 12m 37.86s | 10.33s | 6m 24.09s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_127] | 10m 3.06s | 2m 34.43s | 6m 18.75s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DIV-1] | 9m 43.13s | 2m 49.73s | 6m 16.43s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_191] | 9m 27.34s | 3m 5.21s | 6m 16.27s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_255] | 9m 36.38s | 2m 54.23s | 6m 15.31s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_255] | 7m 38.51s | 2m 47.76s | 5m 13.13s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PREVRANDAO] | 5m 32.34s | 4m 41.66s | 5m 7.00s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_127] | 7m 29.78s | 2m 28.03s | 4m 58.90s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_63] | 7m 1.27s | 2m 8.78s | 4m 35.03s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 7m 31.96s | 1m 8.80s | 4m 20.38s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP8] | 4m 5.65s | 4m 28.97s | 4m 17.31s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_63] | 6m 31.69s | 1m 58.77s | 4m 15.23s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP11] | 4m 5.99s | 4m 21.05s | 4m 13.52s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_add] | 4m 47.29s | 3m 33.50s | 4m 10.40s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_10M-blockchain_test-ecrecover] | 7m 8.87s | 1m 11.92s | 4m 10.39s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 4m 12.23s | 4m 7.83s | 4m 10.03s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_add_1_2] | 4m 38.76s | 3m 19.41s | 3m 59.08s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP6] | 4m 6.95s | 3m 34.66s | 3m 50.80s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP9] | 4m 5.53s | 3m 32.02s | 3m 48.78s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP16] | 4m 6.56s | 3m 30.57s | 3m 48.56s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP15] | 4m 6.19s | 3m 30.69s | 3m 48.44s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP10] | 4m 4.82s | 3m 31.84s | 3m 48.33s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP12] | 4m 3.82s | 3m 31.28s | 3m 47.55s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP2] | 4m 3.36s | 3m 29.16s | 3m 46.26s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP14] | 4m 6.63s | 3m 24.87s | 3m 45.75s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP5] | 4m 4.56s | 3m 26.40s | 3m 45.48s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP1] | 4m 5.80s | 3m 24.25s | 3m 45.02s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP3] | 4m 4.32s | 3m 24.74s | 3m 44.53s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP4] | 4m 3.96s | 3m 23.56s | 3m 43.76s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP13] | 4m 6.56s | 3m 20.66s | 3m 43.61s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP7] | 4m 5.16s | 3m 20.95s | 3m 43.06s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SGT-] | 5m 4.97s | 2m 19.37s | 3m 42.17s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_63] | 5m 9.91s | 2m 6.36s | 3m 38.14s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-empty-opcode_REVERT] | 4m 26.67s | 2m 41.64s | 3m 34.15s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXP-] | 6m 13.11s | 51.78s | 3m 32.44s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 4m 41.12s | 2m 11.47s | 3m 26.29s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EQ-] | 4m 46.01s | 2m 5.37s | 3m 25.69s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero-loop] | 4m 26.42s | 2m 19.14s | 3m 22.78s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_ADDRESS] | 3m 59.17s | 2m 45.73s | 3m 22.45s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_COINBASE] | 3m 59.32s | 2m 45.11s | 3m 22.21s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_ORIGIN] | 3m 59.12s | 2m 44.36s | 3m 21.74s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test-one-loop] | 4m 20.91s | 2m 20.22s | 3m 20.56s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALLER] | 4m 1.45s | 2m 33.52s | 3m 17.48s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_STATICCALL] | 4m 4.52s | 2m 19.51s | 3m 12.01s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_CALL] | 4m 0.97s | 2m 17.50s | 3m 9.24s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_CALLCODE] | 4m 1.78s | 2m 15.64s | 3m 8.71s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-empty-opcode_RETURN] | 4m 0.07s | 2m 16.10s | 3m 8.09s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH32] | 3m 8.91s | 3m 2.45s | 3m 5.68s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SMOD-] | 4m 15.83s | 1m 47.54s | 3m 1.68s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH31] | 3m 12.17s | 2m 50.94s | 3m 1.56s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH30] | 3m 8.52s | 2m 47.93s | 2m 58.22s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH29] | 3m 7.08s | 2m 42.09s | 2m 54.59s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test-empty] | 3m 36.12s | 2m 3.96s | 2m 50.04s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_STATICCALL] | 3m 33.97s | 2m 1.77s | 2m 47.87s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_CALLCODE] | 3m 35.24s | 2m 0.30s | 2m 47.77s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 3m 34.17s | 2m 1.07s | 2m 47.62s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH28] | 2m 55.66s | 2m 38.33s | 2m 46.99s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH27] | 2m 55.26s | 2m 33.60s | 2m 44.43s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_CALL] | 3m 29.46s | 1m 59.29s | 2m 44.37s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_MOD-] | 3m 44.48s | 1m 37.12s | 2m 40.80s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH26] | 2m 47.21s | 2m 27.50s | 2m 37.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH25] | 2m 44.89s | 2m 25.14s | 2m 35.01s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH24] | 2m 41.84s | 2m 23.18s | 2m 32.51s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of zero data-opcode_REVERT] | 3m 16.47s | 1m 40.64s | 2m 28.56s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH23] | 2m 44.70s | 2m 11.08s | 2m 27.89s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SSTORE new value] | 3m 16.88s | 1m 37.73s | 2m 27.31s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SAR-] | 3m 41.22s | 1m 11.21s | 2m 26.21s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH22] | 2m 40.18s | 2m 9.27s | 2m 24.73s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 3m 3.30s | 1m 43.74s | 2m 23.52s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-six blobs, access latest] | 2m 31.96s | 2m 14.05s | 2m 23.00s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of zero data-opcode_RETURN] | 3m 3.27s | 1m 31.53s | 2m 17.40s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH21] | 2m 31.50s | 2m 3.23s | 2m 17.36s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_10M-blockchain_test-shift_right_SAR] | 3m 28.88s | 1m 4.22s | 2m 16.55s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_BLOBBASEFEE] | 3m 16.38s | 1m 16.12s | 2m 16.25s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_add_infinities] | 2m 30.65s | 1m 59.02s | 2m 14.84s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-one blob and accessed] | 2m 33.53s | 1m 53.26s | 2m 13.39s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_GASPRICE] | 3m 9.15s | 1m 15.60s | 2m 12.38s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH20] | 2m 28.83s | 1m 55.28s | 2m 12.05s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH19] | 2m 27.14s | 1m 55.45s | 2m 11.29s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SHR-] | 3m 10.38s | 59.70s | 2m 5.04s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_10M-blockchain_test-shift_right_SHR] | 3m 10.78s | 58.70s | 2m 4.74s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH18] | 2m 20.72s | 1m 47.95s | 2m 4.33s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SHL-] | 3m 10.55s | 56.70s | 2m 3.62s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_MUL-] | 3m 20.38s | 44.30s | 2m 2.34s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH17] | 2m 16.21s | 1m 46.95s | 2m 1.58s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH16] | 2m 15.46s | 1m 42.29s | 1m 58.87s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 2m 59.19s | 58.39s | 1m 58.79s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 2m 58.47s | 58.39s | 1m 58.43s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH15] | 2m 16.73s | 1m 38.46s | 1m 57.59s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_NUMBER] | 2m 45.65s | 1m 6.89s | 1m 56.27s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 2m 36.69s | 1m 15.73s | 1m 56.21s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 2m 36.19s | 1m 16.12s | 1m 56.16s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 2m 36.22s | 1m 15.43s | 1m 55.83s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 2m 36.11s | 1m 15.20s | 1m 55.66s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_TIMESTAMP] | 2m 44.66s | 1m 6.49s | 1m 55.57s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 2m 35.68s | 1m 15.42s | 1m 55.55s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 2m 35.15s | 1m 15.55s | 1m 55.35s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 2m 34.94s | 1m 15.10s | 1m 55.02s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-0 bytes] | 2m 50.78s | 59.18s | 1m 54.98s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 2m 35.42s | 1m 14.50s | 1m 54.96s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 2m 34.31s | 1m 15.54s | 1m 54.92s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 2m 35.18s | 1m 13.06s | 1m 54.12s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 2m 34.57s | 1m 12.89s | 1m 53.73s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH14] | 2m 11.95s | 1m 35.40s | 1m 53.68s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 2m 34.86s | 1m 12.20s | 1m 53.53s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0 bytes] | 2m 51.24s | 55.60s | 1m 53.42s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 2m 26.39s | 1m 19.63s | 1m 53.01s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SIGNEXTEND-] | 2m 55.41s | 50.09s | 1m 52.75s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_True-key_mut_True] | 2m 29.49s | 1m 15.33s | 1m 52.41s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 2m 33.36s | 1m 10.22s | 1m 51.79s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0 bytes] | 2m 48.40s | 55.09s | 1m 51.75s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 2m 35.65s | 1m 7.62s | 1m 51.63s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_True-key_mut_False] | 2m 27.93s | 1m 14.61s | 1m 51.27s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 2m 9.21s | 1m 32.83s | 1m 51.02s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 2m 9.98s | 1m 31.83s | 1m 50.91s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_BASEFEE] | 2m 36.65s | 1m 5.10s | 1m 50.88s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 2m 9.98s | 1m 31.64s | 1m 50.81s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 2m 9.03s | 1m 32.32s | 1m 50.68s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 2m 9.99s | 1m 31.24s | 1m 50.61s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 2m 8.66s | 1m 32.28s | 1m 50.47s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 2m 8.57s | 1m 32.37s | 1m 50.47s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 2m 9.96s | 1m 30.43s | 1m 50.19s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 2m 9.06s | 1m 30.92s | 1m 49.99s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 2m 8.18s | 1m 30.85s | 1m 49.52s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 2m 7.33s | 1m 30.83s | 1m 49.08s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 2m 7.31s | 1m 30.22s | 1m 48.77s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CHAINID] | 2m 32.42s | 1m 5.11s | 1m 48.77s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_0] | 2m 30.87s | 1m 6.31s | 1m 48.59s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_1] | 2m 31.45s | 1m 5.70s | 1m 48.58s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 2m 29.29s | 1m 7.31s | 1m 48.30s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 2m 27.25s | 1m 4.99s | 1m 46.12s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH13] | 2m 3.11s | 1m 28.57s | 1m 45.84s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_GASLIMIT] | 2m 27.12s | 1m 2.85s | 1m 44.98s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_1000] | 2m 25.43s | 1m 4.50s | 1m 44.97s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 2m 27.34s | 1m 2.33s | 1m 44.84s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 1m 44.39s | ❌ SDK Crash | 1m 44.39s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH12] | 2m 3.18s | 1m 23.63s | 1m 43.41s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SSTORE same value] | 2m 15.28s | 1m 8.50s | 1m 41.89s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-100 bytes] | 2m 27.66s | 55.60s | 1m 41.63s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH0] | 2m 20.36s | 1m 2.62s | 1m 41.49s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH11] | 2m 2.26s | 1m 19.72s | 1m 40.99s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 2m 19.77s | 1m 0.50s | 1m 40.14s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 2m 19.52s | 59.24s | 1m 39.38s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 2m 17.37s | 56.79s | 1m 37.08s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-0 bytes] | 2m 17.81s | 52.28s | 1m 35.04s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-100 bytes] | 2m 8.89s | 56.69s | 1m 32.79s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_False-non_zero_value_False] | 2m 16.35s | 48.48s | 1m 32.42s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_True-non_zero_value_False] | 2m 15.23s | 48.18s | 1m 31.71s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_True-non_zero_value_True] | 2m 14.61s | 48.48s | 1m 31.55s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_False-non_zero_value_True] | 2m 13.89s | 48.88s | 1m 31.38s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH10] | 1m 47.65s | 1m 13.41s | 1m 30.53s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH7] | 1m 52.98s | 1m 6.80s | 1m 29.89s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 2m 10.32s | 47.00s | 1m 28.66s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 2m 2.60s | 53.09s | 1m 27.84s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SLT-] | 2m 6.96s | 48.40s | 1m 27.68s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH9] | 1m 42.88s | 1m 11.61s | 1m 27.25s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH8] | 1m 40.35s | 1m 10.32s | 1m 25.34s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-5b] | 1m 46.67s | 58.80s | 1m 22.73s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH6] | 1m 40.81s | 1m 3.90s | 1m 22.36s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 1m 58.73s | 45.42s | 1m 22.08s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 12.12s | 2m 27.98s | 1m 20.05s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 1m 55.42s | 43.90s | 1m 19.66s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1m 32.47s | 1m 2.90s | 1m 17.69s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 1m 50.05s | 44.59s | 1m 17.32s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 1m 49.85s | 44.47s | 1m 17.16s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SUB-] | 1m 54.45s | 39.58s | 1m 17.01s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 1m 49.08s | 44.89s | 1m 16.98s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 1m 49.01s | 44.78s | 1m 16.90s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 1m 48.59s | 45.09s | 1m 16.84s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test-calldata_length_1000] | 1m 48.42s | 45.19s | 1m 16.80s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test-calldata_length_0] | 1m 48.14s | 45.28s | 1m 16.71s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 1m 48.14s | 45.20s | 1m 16.67s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test-calldata_length_10000] | 1m 47.77s | 44.90s | 1m 16.33s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH4] | 1m 38.16s | 53.08s | 1m 15.62s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-10KiB] | 1m 48.72s | 41.47s | 1m 15.09s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH5] | 1m 31.77s | 57.80s | 1m 14.79s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_ADD-] | 1m 49.25s | 38.88s | 1m 14.06s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_BYTE-] | 1m 47.24s | 38.57s | 1m 12.90s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0 bytes] | 1m 46.69s | 38.46s | 1m 12.57s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_diff_acc_to_diff_acc] | 1m 59.59s | 25.16s | 1m 12.38s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 1m 45.54s | 38.69s | 1m 12.11s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 1m 44.98s | 38.68s | 1m 11.83s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 1m 44.45s | 38.77s | 1m 11.61s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 1m 44.51s | 38.67s | 1m 11.59s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 1m 44.56s | 38.58s | 1m 11.57s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 1m 44.13s | 38.99s | 1m 11.56s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_GT-] | 1m 48.40s | 34.66s | 1m 11.53s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 1m 44.37s | 38.67s | 1m 11.52s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 1m 44.43s | 38.56s | 1m 11.49s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 1m 44.29s | 38.56s | 1m 11.42s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_LT-] | 1m 46.99s | 35.67s | 1m 11.33s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 1m 44.28s | 38.16s | 1m 11.22s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 1m 43.31s | 38.77s | 1m 11.04s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 1m 43.37s | 38.67s | 1m 11.02s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0 bytes] | 1m 44.22s | 37.30s | 1m 10.76s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-one blob but access non-existent index] | 1m 31.39s | 48.49s | 1m 9.94s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_OR-] | 1m 44.98s | 34.87s | 1m 9.92s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_XOR-] | 1m 44.51s | 34.85s | 1m 9.68s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-1MiB] | 1m 44.32s | 34.97s | 1m 9.64s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_AND-] | 1m 44.10s | 34.77s | 1m 9.43s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_diff_acc_to_b] | 1m 55.57s | 21.94s | 1m 8.76s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-100 bytes] | 1m 35.49s | 42.01s | 1m 8.75s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP12] | 1m 35.73s | 41.08s | 1m 8.41s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH3] | 1m 26.86s | 49.88s | 1m 8.37s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP14] | 1m 38.76s | 37.17s | 1m 7.96s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1m 50.31s | 25.16s | 1m 7.74s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP13] | 1m 36.43s | 36.87s | 1m 6.65s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP8] | 1m 36.52s | 36.59s | 1m 6.55s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP16] | 1m 35.85s | 36.97s | 1m 6.41s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP10] | 1m 36.12s | 36.48s | 1m 6.30s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP15] | 1m 35.64s | 36.88s | 1m 6.26s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP7] | 1m 35.66s | 36.61s | 1m 6.14s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP6] | 1m 35.66s | 36.60s | 1m 6.12s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP1] | 1m 36.05s | 35.96s | 1m 6.01s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-no blobs] | 1m 26.15s | 45.70s | 1m 5.92s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_BALANCE] | 1m 24.08s | 47.68s | 1m 5.88s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP4] | 1m 36.02s | 35.66s | 1m 5.84s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP11] | 1m 34.91s | 36.56s | 1m 5.73s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP3] | 1m 35.78s | 35.66s | 1m 5.72s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP5] | 1m 34.92s | 36.49s | 1m 5.70s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-100 bytes] | 1m 33.00s | 37.86s | 1m 5.43s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP2] | 1m 35.16s | 35.47s | 1m 5.31s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH2] | 1m 32.03s | 38.48s | 1m 5.26s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP9] | 1m 33.91s | 36.28s | 1m 5.09s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 1m 21.94s | 47.69s | 1m 4.81s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_diff_acc] | 1m 49.20s | 20.05s | 1m 4.63s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1m 36.21s | 32.74s | 1m 4.47s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 1m 30.22s | 38.57s | 1m 4.39s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1m 32.68s | 35.36s | 1m 4.02s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 1m 23.67s | 39.27s | 1m 1.47s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 1m 26.59s | 35.88s | 1m 1.23s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH1] | 1m 24.91s | 36.49s | 1m 0.70s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 1m 15.53s | 45.27s | 1m 0.40s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_b] | 1m 44.12s | 16.54s | 1m 0.33s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-00] | 1m 23.79s | 34.41s | 59.10s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_a] | 1m 42.18s | 15.85s | 59.01s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-605b5b] | 1m 18.46s | 36.28s | 57.37s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-10KiB] | 1m 17.02s | 36.95s | 56.99s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 1m 19.95s | 33.77s | 56.86s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_False-key_mut_True] | 1m 15.23s | 37.88s | 56.55s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_False-key_mut_False] | 1m 13.82s | 38.39s | 56.10s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 1m 4.55s | 45.79s | 55.17s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 1m 8.78s | 41.49s | 55.13s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-1MiB] | 1m 24.07s | 25.35s | 54.71s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 1m 3.72s | 44.49s | 54.10s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SLOAD] | 1m 12.99s | 34.86s | 53.93s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 1m 2.85s | 45.00s | 53.92s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-max code size] | 1m 2.75s | 44.41s | 53.58s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 1m 2.88s | 44.18s | 53.53s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 1m 4.09s | 40.46s | 52.28s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-1MiB] | 1m 21.70s | 22.14s | 51.92s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-10KiB] | 1m 17.49s | 25.57s | 51.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_BALANCE] | 1m 4.44s | 37.78s | 51.11s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 1m 3.42s | 37.96s | 50.69s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 1m 14.88s | 26.05s | 50.46s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1m 3.21s | 34.48s | 48.85s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-615b5b5b] | 1m 6.39s | 30.38s | 48.38s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_False-empty_authority_False] | 1m 16.51s | 19.95s | 48.23s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-512] | 1m 2.47s | 32.16s | 47.31s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB] | 1m 4.22s | 30.27s | 47.24s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_True-empty_authority_False] | 1m 14.61s | 19.35s | 46.98s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 1m 6.35s | 27.45s | 46.90s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 59.99s | 32.87s | 46.43s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-605b] | 1m 6.79s | 25.36s | 46.08s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_False-empty_authority_True] | 1m 13.97s | 18.07s | 46.02s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 59.20s | 32.36s | 45.78s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_True-empty_authority_True] | 1m 13.10s | 17.94s | 45.52s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 1m 13.42s | 16.84s | 45.13s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value] | 57.91s | 31.36s | 44.63s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_True-key_mut_False] | 56.82s | 31.08s | 43.95s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_True-key_mut_True] | 56.71s | 31.17s | 43.94s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSLOAD] | 56.73s | 30.55s | 43.64s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 56.81s | 28.57s | 42.69s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-1MiB] | 1m 8.57s | 16.56s | 42.56s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-615b5b] | 58.08s | 21.75s | 39.91s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-5KiB] | 52.78s | 24.76s | 38.77s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value] | 49.45s | 24.45s | 36.95s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 49.22s | 21.64s | 35.43s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 48.33s | 22.06s | 35.20s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-10KiB] | 48.28s | 22.04s | 35.16s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 48.09s | 22.05s | 35.07s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-max code size] | 47.72s | 22.18s | 34.95s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 48.12s | 21.74s | 34.93s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 47.58s | 22.17s | 34.87s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_10M-blockchain_test-value_bearing_True] | 45.63s | 24.06s | 34.84s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 47.12s | 22.35s | 34.74s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_byte_True] | 41.04s | 22.96s | 32.00s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_10M-blockchain_test-value_bearing_False] | 38.76s | 19.86s | 29.31s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSLOAD] | 38.44s | 20.14s | 29.29s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 36.43s | 19.25s | 27.84s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 36.52s | 19.05s | 27.78s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 36.60s | 18.14s | 27.37s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 29.64s | 17.43s | 23.53s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 28.93s | 16.95s | 22.94s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 30.87s | 14.93s | 22.90s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 30.05s | 14.66s | 22.35s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 29.37s | 15.24s | 22.30s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 29.97s | 13.85s | 21.91s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_1_2_2_scalar] | 28.54s | 13.14s | 20.84s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_100000] | 27.08s | 14.13s | 20.61s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_infinities_2_scalar] | 27.07s | 10.43s | 18.75s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 27.34s | 8.93s | 18.13s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_False-key_mut_False] | 21.15s | 12.63s | 16.89s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_False-key_mut_True] | 20.21s | 12.13s | 16.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 22.42s | 9.23s | 15.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 21.80s | 9.23s | 15.51s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_2_sets] | 22.82s | 6.93s | 14.88s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_byte_False] | 18.66s | 10.63s | 14.64s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 20.26s | 8.44s | 14.35s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 20.55s | 7.73s | 14.14s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 18.83s | 8.84s | 13.83s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 18.72s | 8.93s | 13.82s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value] | 18.07s | 9.53s | 13.80s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value] | 17.36s | 9.72s | 13.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 18.10s | 8.92s | 13.51s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 18.88s | 7.92s | 13.40s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of zero data-opcode_REVERT] | 18.80s | 7.83s | 13.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 17.94s | 8.62s | 13.28s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 18.30s | 8.24s | 13.27s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of zero data-opcode_RETURN] | 18.77s | 7.62s | 13.20s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CREATE] | 16.42s | 9.43s | 12.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 17.69s | 8.13s | 12.91s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 17.95s | 7.63s | 12.79s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 17.54s | 8.03s | 12.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 17.50s | 8.03s | 12.77s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 17.12s | 8.34s | 12.73s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 17.16s | 7.72s | 12.44s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 16.70s | 8.13s | 12.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 16.54s | 8.13s | 12.33s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CREATE2] | 16.75s | 7.63s | 12.19s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 15.78s | 8.23s | 12.01s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 15.52s | 8.13s | 11.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 15.41s | 8.23s | 11.82s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 15.30s | 8.33s | 11.81s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 15.45s | 8.13s | 11.79s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_False] | 15.42s | 8.13s | 11.77s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_True] | 15.45s | 7.93s | 11.69s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes with value-opcode_CREATE] | 15.21s | 7.93s | 11.57s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 16.09s | 7.03s | 11.56s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes with value-opcode_CREATE2] | 14.99s | 8.03s | 11.51s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 15.78s | 7.12s | 11.45s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes without value-opcode_CREATE2] | 14.73s | 8.03s | 11.38s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 14.89s | 7.83s | 11.36s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes without value-opcode_CREATE] | 14.54s | 8.13s | 11.33s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 14.59s | 8.03s | 11.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 14.74s | 7.33s | 11.03s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_False] | 14.01s | 7.83s | 10.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 14.66s | 7.03s | 10.85s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 14.06s | 7.12s | 10.59s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_True] | 13.63s | 7.52s | 10.58s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_1000000] | 14.00s | 6.92s | 10.46s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 13.91s | 6.92s | 10.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 13.40s | 7.22s | 10.31s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 13.77s | 6.82s | 10.29s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 13.68s | 6.72s | 10.20s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with zero data-opcode_CREATE2] | 13.18s | 7.21s | 10.19s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 13.47s | 6.82s | 10.15s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 13.35s | 6.92s | 10.14s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 13.23s | 7.03s | 10.13s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 13.09s | 7.12s | 10.10s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 13.30s | 6.82s | 10.06s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 12.95s | 7.13s | 10.04s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 13.11s | 6.84s | 9.97s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 12.81s | 7.03s | 9.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 12.78s | 7.03s | 9.91s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 12.77s | 7.03s | 9.90s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_1_pair] | 12.83s | 6.93s | 9.88s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_zero_input] | 12.71s | 7.02s | 9.87s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 12.79s | 6.92s | 9.86s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 12.23s | 7.43s | 9.83s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 12.64s | 6.92s | 9.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 12.35s | 7.13s | 9.74s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with zero data-opcode_CREATE] | 12.44s | 6.92s | 9.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 12.52s | 6.83s | 9.67s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 12.37s | 6.93s | 9.65s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 12.46s | 6.83s | 9.64s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 12.23s | 7.02s | 9.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 12.42s | 6.82s | 9.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 12.16s | 7.05s | 9.61s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 12.46s | 6.73s | 9.59s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 12.25s | 6.92s | 9.59s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 12.23s | 6.94s | 9.58s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 12.24s | 6.92s | 9.58s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 11.99s | 7.13s | 9.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 12.29s | 6.82s | 9.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 12.07s | 7.04s | 9.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 12.08s | 7.03s | 9.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 12.02s | 7.02s | 9.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 12.32s | 6.72s | 9.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 12.06s | 6.93s | 9.50s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 12.16s | 6.82s | 9.49s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_1_pair_empty] | 12.03s | 6.92s | 9.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 12.02s | 6.93s | 9.47s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 11.98s | 6.92s | 9.45s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 11.95s | 6.93s | 9.44s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 11.84s | 7.03s | 9.44s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 12.02s | 6.82s | 9.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 11.70s | 7.13s | 9.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 11.99s | 6.82s | 9.40s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 11.98s | 6.82s | 9.40s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 11.70s | 7.03s | 9.37s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 11.56s | 6.92s | 9.24s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 11.66s | 6.83s | 9.24s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_3_pair] | 11.46s | 7.02s | 9.24s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 11.65s | 6.82s | 9.24s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_10M-blockchain_test] | 9.61s | 6.32s | 7.96s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| sp1-v5.2.2 | 533 | 514 | 19 | 0 |
| zisk-v0.14.0 | 533 | 445 | 88 | 0 |

---

