# 1xL40s - 1M-gas-limit

## Gas Limit Configuration - Proving

EEST benchmarks with 1M-gas-limit gas limit (proving results) on **1xL40s** hardware.

## Available EL Clients

- [ethrex](#ethrex)
- [reth](#reth)

---

## ethrex


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | sp1-v5.2.3<br/>(1.41MiB) | zisk-v0.14.0<br/>(244.02KiB) | Avg |
|-----------|-----------|-----------|----------|
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_8b_exp_896] | 8m 54.10s | 3m 49.07s | 6m 21.58s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_127] | 11m 4.33s | 14.04s | 5m 39.18s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_191] | 9m 44.86s | 13.94s | 4m 59.40s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_guido_2_even] | 6m 32.96s | 2m 42.02s | 4m 37.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_marius_1_even] | 6m 18.32s | 2m 40.11s | 4m 29.21s |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_1M-blockchain_test-point_evaluation] | 7m 17.00s | 1m 28.53s | 4m 22.76s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_255] | 8m 27.15s | 13.94s | 4m 20.54s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_63] | 8m 23.25s | 13.94s | 4m 18.59s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_127] | 7m 21.71s | 58.80s | 4m 10.26s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_127] | 7m 20.23s | 59.48s | 4m 9.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_16b_exp_320] | 5m 52.45s | 2m 22.88s | 4m 7.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_800_gas_base_heavy] | 6m 38.05s | 1m 31.62s | 4m 4.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_4_qube] | 6m 40.24s | 1m 29.42s | 4m 4.83s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g1add] | 6m 12.47s | 1m 55.76s | 4m 4.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_867_gas_base_heavy] | 6m 34.04s | 1m 31.83s | 4m 2.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_616_gas_base_heavy] | 6m 32.95s | 1m 32.83s | 4m 2.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_3_qube] | 6m 22.97s | 1m 31.92s | 3m 57.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_408_gas_base_heavy] | 6m 24.15s | 1m 30.72s | 3m 57.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_264_exp_2] | 6m 23.01s | 1m 31.22s | 3m 57.12s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_1045_gas_base_heavy] | 6m 25.63s | 1m 27.41s | 3m 56.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_guido_1_even] | 5m 19.71s | 2m 24.19s | 3m 51.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_256_exp_2] | 6m 5.33s | 1m 26.31s | 3m 45.82s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_852_gas_exp_heavy] | 5m 7.85s | 1m 55.34s | 3m 31.59s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_800_gas_exp_heavy] | 5m 5.83s | 1m 55.65s | 3m 30.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_600_gas_exp_heavy] | 4m 59.89s | 1m 51.05s | 3m 25.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_min_gas_base_heavy] | 5m 27.16s | 1m 22.62s | 3m 24.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_8_exp_896] | 5m 2.40s | 1m 42.03s | 3m 22.22s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_exp_298_gas_exp_heavy] | 5m 2.03s | 1m 41.76s | 3m 21.90s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_pawel_2] | 4m 46.65s | 1m 48.06s | 3m 17.36s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_exp_215_gas_exp_heavy] | 4m 52.85s | 1m 37.88s | 3m 15.36s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_8_exp_648] | 4m 52.60s | 1m 37.86s | 3m 15.23s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_400_gas_exp_heavy] | 4m 43.48s | 1m 46.55s | 3m 15.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_min_gas_exp_heavy] | 4m 51.78s | 1m 35.63s | 3m 13.70s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_4_square] | 5m 10.76s | 1m 10.91s | 3m 10.83s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g2add] | 4m 50.93s | 1m 29.13s | 3m 10.03s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_5_qube] | 5m 5.94s | 1m 13.11s | 3m 9.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_3_square] | 5m 1.46s | 1m 15.23s | 3m 8.34s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_63] | 5m 27.44s | 36.37s | 3m 1.90s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SDIV-1] | 5m 9.68s | 52.69s | 3m 1.18s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_127] | 5m 8.53s | 53.00s | 3m 0.76s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_63] | 5m 23.04s | 37.08s | 3m 0.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_1024_exp_2] | 4m 52.43s | 1m 6.59s | 2m 59.51s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_24b_exp_168] | 4m 13.17s | 1m 30.46s | 2m 51.81s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_191] | 4m 47.97s | 46.98s | 2m 47.48s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_191] | 4m 43.00s | 47.28s | 2m 45.14s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DIV-1] | 4m 30.48s | 48.39s | 2m 39.44s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_1M-blockchain_test-blake2f] | 3m 59.39s | 1m 19.22s | 2m 39.30s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SDIV-0] | 4m 25.31s | 48.30s | 2m 36.80s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DIV-0] | 4m 21.19s | 47.69s | 2m 34.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_5_square] | 4m 9.09s | 58.78s | 2m 33.94s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_add_1_2] | 4m 4.33s | 1m 1.00s | 2m 32.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_765_gas_exp_heavy] | 3m 45.14s | 1m 14.32s | 2m 29.73s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_3_exp_8] | 3m 39.01s | 1m 17.73s | 2m 28.37s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_pawel_3] | 3m 41.61s | 1m 12.81s | 2m 27.21s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_add] | 3m 55.12s | 56.39s | 2m 25.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_32b_exp_256] | 3m 34.88s | 1m 9.70s | 2m 22.29s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_32b_exp_96] | 3m 29.25s | 1m 8.69s | 2m 18.97s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_191] | 3m 47.09s | 45.08s | 2m 16.08s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_32b_exp_40] | 3m 14.41s | 1m 6.20s | 2m 10.30s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_pairing_check] | 2m 34.10s | 1m 44.74s | 2m 9.42s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_32b_exp_256] | 3m 11.96s | 1m 0.38s | 2m 6.17s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_example_1] | 3m 8.99s | 59.49s | 2m 4.24s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_1360_gas_balanced] | 3m 8.82s | 59.33s | 2m 4.08s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_63] | 3m 29.07s | 38.57s | 2m 3.82s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1360n1] | 3m 7.66s | 59.19s | 2m 3.42s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1349n1] | 3m 7.25s | 59.29s | 2m 3.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_64] | 3m 4.71s | 59.42s | 2m 2.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_128] | 3m 4.92s | 59.19s | 2m 2.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_677_gas_base_heavy] | 3m 4.40s | 58.93s | 2m 1.67s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_32b_exp_cover_windows] | 3m 4.49s | 58.49s | 2m 1.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_pawel_4] | 3m 3.49s | 58.88s | 2m 1.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_32b_exp_96] | 3m 3.47s | 58.29s | 2m 0.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_65] | 3m 1.32s | 59.89s | 2m 0.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_2_qube] | 3m 3.31s | 52.21s | 1m 57.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1360n2] | 2m 57.97s | 56.98s | 1m 57.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_exp_208_gas_balanced] | 2m 53.39s | 57.29s | 1m 55.34s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_min_gas_balanced] | 2m 54.81s | 55.58s | 1m 55.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_40] | 2m 52.15s | 57.09s | 1m 54.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_36] | 2m 44.01s | 55.30s | 1m 49.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1152n1] | 2m 45.47s | 52.87s | 1m 49.17s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_996_gas_balanced] | 2m 51.62s | 46.09s | 1m 48.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_767_gas_balanced] | 2m 50.15s | 45.97s | 1m 48.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_408_gas_balanced] | 2m 45.53s | 49.70s | 1m 47.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_600_gas_balanced] | 2m 45.61s | 48.19s | 1m 46.90s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_2_square] | 2m 32.26s | 46.88s | 1m 39.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_32] | 2m 28.80s | 50.17s | 1m 39.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_64b_exp_512] | 2m 36.75s | 41.47s | 1m 39.11s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_64b_exp_512] | 2m 32.78s | 38.98s | 1m 35.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 2m 22.82s | 42.58s | 1m 32.70s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 2m 22.50s | 36.27s | 1m 29.39s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_200n3] | 2m 13.23s | 44.78s | 1m 29.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_200n2] | 2m 12.97s | 44.87s | 1m 28.92s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_255] | 2m 17.27s | 36.98s | 1m 27.12s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_255] | 2m 17.96s | 34.57s | 1m 26.27s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_fp_to_g2] | 1m 29.77s | 1m 22.63s | 1m 26.20s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_255] | 2m 16.45s | 33.46s | 1m 24.95s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CALL] | 1m 38.16s | 1m 10.40s | 1m 24.28s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_STATICCALL] | 1m 38.05s | 1m 10.02s | 1m 24.04s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DELEGATECALL] | 1m 37.48s | 1m 10.10s | 1m 23.79s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXTCODESIZE] | 1m 37.37s | 1m 9.82s | 1m 23.60s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXTCODEHASH] | 1m 36.64s | 1m 9.74s | 1m 23.19s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CALLCODE] | 1m 36.20s | 1m 10.01s | 1m 23.10s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 2m 13.34s | 30.96s | 1m 22.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_128b_exp_1024] | 2m 12.42s | 31.26s | 1m 21.84s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXTCODECOPY] | 1m 34.31s | 1m 7.81s | 1m 21.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_128b_exp_1024] | 2m 10.19s | 30.78s | 1m 20.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_200n1] | 1m 56.97s | 40.37s | 1m 18.67s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 2m 1.04s | 28.45s | 1m 14.75s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_fp_to_g1] | 50.49s | 1m 19.52s | 1m 5.01s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_4_pair] | 1m 46.24s | 11.13s | 58.68s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_one_pairing] | 1m 41.49s | 13.43s | 57.46s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_2_pair] | 1m 42.75s | 12.04s | 57.39s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_256b_exp_1024] | 1m 31.82s | 22.16s | 56.99s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 1m 40.74s | 13.04s | 56.89s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_two_pairings] | 1m 41.72s | 11.94s | 56.83s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_256b_exp_1024] | 1m 30.92s | 21.85s | 56.39s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_5_pair] | 1m 41.01s | 11.03s | 56.02s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_1_qube] | 1m 20.25s | 28.86s | 54.55s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXP-] | 1m 30.36s | 16.98s | 53.67s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 1m 36.30s | 10.03s | 53.16s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 1m 21.00s | 21.55s | 51.28s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_1_square] | 1m 12.54s | 27.15s | 49.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_guido_3_even] | 1m 17.86s | 20.86s | 49.36s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PREVRANDAO] | 1m 3.77s | 31.35s | 47.56s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 50.56s | 36.47s | 43.52s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_STATICCALL] | 54.81s | 31.56s | 43.19s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_1M-blockchain_test-contract_balance_0] | 53.32s | 31.65s | 42.48s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_CALL] | 54.06s | 30.45s | 42.26s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_1M-blockchain_test-contract_balance_1] | 53.09s | 31.35s | 42.22s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 53.03s | 31.15s | 42.09s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_CALLCODE] | 53.11s | 30.66s | 41.88s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-empty-opcode_REVERT] | 52.19s | 31.26s | 41.72s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_CALL] | 52.79s | 30.45s | 41.62s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_STATICCALL] | 51.65s | 31.15s | 41.40s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_CALLCODE] | 52.08s | 30.57s | 41.32s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 50.87s | 30.77s | 40.82s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-empty-opcode_RETURN] | 50.05s | 30.46s | 40.26s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of zero data-opcode_REVERT] | 51.79s | 23.55s | 37.67s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of zero data-opcode_RETURN] | 51.38s | 23.55s | 37.47s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_add_infinities] | 51.22s | 20.74s | 35.98s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero-loop] | 48.90s | 22.75s | 35.82s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 49.11s | 21.55s | 35.33s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 48.80s | 21.45s | 35.13s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_1M-blockchain_test-one-loop] | 47.05s | 22.94s | 35.00s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_1M-blockchain_test-ecrecover] | 55.80s | 12.93s | 34.36s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0 bytes] | 48.09s | 20.45s | 34.27s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SIGNEXTEND-] | 50.92s | 17.44s | 34.18s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0 bytes] | 47.31s | 20.95s | 34.13s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SAR-] | 47.25s | 17.35s | 32.30s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_1M-blockchain_test-empty] | 43.62s | 20.25s | 31.94s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 41.23s | 19.84s | 30.53s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 40.68s | 19.94s | 30.31s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-0 bytes] | 42.00s | 18.44s | 30.22s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 40.49s | 19.16s | 29.82s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 39.56s | 19.35s | 29.45s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EQ-] | 40.19s | 18.14s | 29.17s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_1M-blockchain_test-shift_right_SAR] | 41.59s | 16.64s | 29.11s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 39.19s | 18.54s | 28.86s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH27] | 35.13s | 22.15s | 28.64s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH25] | 34.77s | 21.25s | 28.01s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH24] | 34.84s | 21.15s | 27.99s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SHL-] | 39.73s | 15.64s | 27.69s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH26] | 34.45s | 20.85s | 27.65s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-100 bytes] | 37.34s | 17.74s | 27.54s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH31] | 31.20s | 23.54s | 27.37s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH32] | 30.23s | 24.45s | 27.34s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH30] | 30.86s | 23.54s | 27.20s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 37.22s | 17.15s | 27.18s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH29] | 29.99s | 22.94s | 26.46s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH23] | 32.51s | 20.25s | 26.38s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_ORIGIN] | 31.22s | 20.73s | 25.98s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH28] | 29.52s | 22.36s | 25.94s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 33.26s | 18.54s | 25.90s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CALLER] | 30.60s | 20.75s | 25.68s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_1M-blockchain_test-shift_right_SHR] | 35.69s | 15.03s | 25.36s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_COINBASE] | 30.91s | 19.74s | 25.33s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH22] | 30.55s | 19.95s | 25.25s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH20] | 31.09s | 19.35s | 25.22s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-5b] | 38.19s | 12.24s | 25.22s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_ADDRESS] | 30.64s | 19.75s | 25.19s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH21] | 30.82s | 19.24s | 25.03s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SHR-] | 34.22s | 15.13s | 24.67s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_1_exp_heavy] | 33.07s | 15.65s | 24.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH19] | 29.12s | 18.74s | 23.93s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-SSTORE new value] | 31.02s | 16.54s | 23.78s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH18] | 29.76s | 17.65s | 23.70s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-100 bytes] | 30.75s | 16.14s | 23.45s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 30.86s | 15.84s | 23.35s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH16] | 28.80s | 17.64s | 23.22s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 30.58s | 15.84s | 23.21s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH17] | 28.58s | 17.76s | 23.17s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 30.60s | 15.74s | 23.17s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 30.47s | 15.74s | 23.11s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 30.06s | 16.04s | 23.05s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH15] | 28.82s | 17.14s | 22.98s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 30.20s | 15.73s | 22.97s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 30.34s | 15.54s | 22.94s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 29.91s | 15.84s | 22.87s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 29.69s | 15.94s | 22.81s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 29.91s | 15.64s | 22.77s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 29.50s | 15.95s | 22.72s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-six blobs, access latest] | 26.59s | 18.74s | 22.66s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-one blob and accessed] | 27.54s | 17.75s | 22.64s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 29.26s | 15.84s | 22.55s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH14] | 27.73s | 16.64s | 22.19s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH13] | 26.48s | 16.23s | 21.36s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul] | 34.80s | 7.82s | 21.31s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 28.53s | 13.93s | 21.23s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-max code size] | 28.41s | 13.64s | 21.02s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_MUL-] | 31.39s | 10.53s | 20.96s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 34.03s | 7.83s | 20.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 33.96s | 7.83s | 20.89s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH12] | 25.62s | 16.05s | 20.84s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 27.26s | 13.14s | 20.20s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH11] | 23.72s | 15.44s | 19.58s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH7] | 25.41s | 13.75s | 19.58s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH10] | 25.14s | 13.83s | 19.49s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH8] | 25.22s | 13.74s | 19.48s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH6] | 24.82s | 14.05s | 19.43s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 25.75s | 13.04s | 19.40s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 25.80s | 12.93s | 19.36s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 25.70s | 12.84s | 19.27s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 25.57s | 12.94s | 19.25s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH9] | 24.69s | 13.73s | 19.21s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-605b5b] | 28.65s | 9.63s | 19.14s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 25.28s | 12.93s | 19.11s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 25.16s | 13.05s | 19.11s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 25.30s | 12.83s | 19.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 25.11s | 12.93s | 19.02s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 24.98s | 13.04s | 19.01s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 25.14s | 12.84s | 18.99s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 25.01s | 12.94s | 18.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 25.79s | 12.04s | 18.92s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 24.85s | 12.94s | 18.89s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 25.40s | 12.34s | 18.87s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_GT-] | 26.04s | 11.54s | 18.79s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 24.02s | 13.54s | 18.78s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 24.88s | 12.64s | 18.76s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_BLOBBASEFEE] | 25.46s | 11.93s | 18.70s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH5] | 24.32s | 12.94s | 18.63s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_NUMBER] | 24.80s | 12.23s | 18.52s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CHAINID] | 24.68s | 12.34s | 18.51s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH3] | 24.34s | 12.24s | 18.29s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_BASEFEE] | 24.45s | 12.04s | 18.24s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH4] | 24.28s | 12.13s | 18.21s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_1000] | 24.76s | 11.43s | 18.10s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_GASPRICE] | 23.65s | 12.44s | 18.04s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 24.24s | 11.84s | 18.04s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP4] | 25.40s | 10.66s | 18.03s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 24.32s | 11.64s | 17.98s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_MOD-] | 24.36s | 11.44s | 17.90s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_TIMESTAMP] | 23.61s | 12.14s | 17.88s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_LT-] | 24.45s | 11.23s | 17.84s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 24.13s | 11.23s | 17.68s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_GASLIMIT] | 24.01s | 11.33s | 17.67s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-0 bytes] | 24.28s | 11.03s | 17.65s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-615b5b5b] | 26.19s | 8.92s | 17.56s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 22.25s | 12.84s | 17.55s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP10] | 24.74s | 10.33s | 17.53s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP9] | 24.41s | 10.63s | 17.52s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 22.26s | 12.74s | 17.50s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP6] | 24.51s | 10.44s | 17.47s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP8] | 24.39s | 10.53s | 17.46s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP2] | 24.46s | 10.43s | 17.45s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP14] | 24.53s | 10.32s | 17.43s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP13] | 24.20s | 10.63s | 17.42s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP7] | 24.29s | 10.53s | 17.41s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP3] | 24.18s | 10.53s | 17.36s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP1] | 24.18s | 10.53s | 17.35s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP5] | 24.25s | 10.43s | 17.34s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0 bytes] | 23.45s | 11.13s | 17.29s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 23.30s | 11.23s | 17.27s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP11] | 24.09s | 10.43s | 17.26s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 22.72s | 11.76s | 17.24s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP16] | 24.09s | 10.33s | 17.21s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0 bytes] | 23.09s | 11.25s | 17.17s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP12] | 23.99s | 10.33s | 17.16s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP15] | 23.88s | 10.44s | 17.16s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SLT-] | 23.09s | 11.14s | 17.12s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH2] | 22.97s | 11.23s | 17.10s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-SSTORE same value] | 21.70s | 12.44s | 17.07s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH0] | 23.08s | 11.03s | 17.05s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_0] | 22.64s | 11.43s | 17.03s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SGT-] | 22.71s | 11.33s | 17.02s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_1] | 22.81s | 11.23s | 17.02s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH1] | 22.65s | 11.23s | 16.94s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 22.44s | 11.44s | 16.94s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-00] | 25.13s | 8.62s | 16.88s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_diff_acc_to_diff_acc] | 24.63s | 9.03s | 16.83s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 22.24s | 11.36s | 16.80s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 23.44s | 10.13s | 16.78s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SUB-] | 23.03s | 10.43s | 16.73s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_BYTE-] | 22.93s | 10.53s | 16.73s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 21.92s | 11.23s | 16.57s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 22.01s | 11.13s | 16.57s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_ADD-] | 22.69s | 10.43s | 16.56s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 21.79s | 11.22s | 16.51s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 21.97s | 11.03s | 16.50s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 21.57s | 11.33s | 16.45s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 21.62s | 11.24s | 16.43s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-no blobs] | 22.18s | 10.64s | 16.41s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-one blob but access non-existent index] | 22.09s | 10.63s | 16.36s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_OR-] | 22.21s | 10.44s | 16.33s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-605b] | 24.06s | 8.53s | 16.30s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_XOR-] | 22.00s | 10.53s | 16.27s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_diff_acc_to_b] | 24.09s | 8.43s | 16.26s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_AND-] | 21.82s | 10.43s | 16.12s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 21.53s | 10.63s | 16.08s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 21.63s | 10.53s | 16.08s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP9] | 21.31s | 10.73s | 16.02s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-10KiB] | 22.00s | 9.93s | 15.96s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP6] | 21.30s | 10.63s | 15.96s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-100 bytes] | 21.36s | 10.54s | 15.95s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP15] | 21.36s | 10.54s | 15.95s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 21.42s | 10.35s | 15.89s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 20.08s | 11.64s | 15.86s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP3] | 20.95s | 10.74s | 15.85s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP8] | 21.13s | 10.53s | 15.83s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP7] | 21.10s | 10.53s | 15.82s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 20.38s | 11.23s | 15.80s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP14] | 21.03s | 10.53s | 15.78s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP12] | 20.77s | 10.74s | 15.75s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP1] | 20.92s | 10.53s | 15.72s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP13] | 20.76s | 10.63s | 15.70s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP10] | 20.81s | 10.54s | 15.67s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 20.82s | 10.43s | 15.62s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 20.01s | 11.23s | 15.62s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP11] | 20.44s | 10.65s | 15.54s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP4] | 20.31s | 10.73s | 15.52s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP2] | 20.45s | 10.54s | 15.49s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP5] | 20.33s | 10.63s | 15.48s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 20.62s | 10.33s | 15.48s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP16] | 20.23s | 10.63s | 15.43s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 20.43s | 10.43s | 15.43s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_a_to_diff_acc] | 22.81s | 7.92s | 15.37s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 19.27s | 11.23s | 15.25s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 19.24s | 11.14s | 15.19s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-615b5b] | 22.73s | 7.62s | 15.18s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB] | 19.84s | 10.43s | 15.14s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_True-non_zero_value_False] | 19.84s | 10.43s | 15.14s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_a_to_a] | 22.42s | 7.82s | 15.12s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-512] | 19.57s | 10.63s | 15.10s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_a_to_b] | 22.35s | 7.82s | 15.09s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 20.43s | 9.53s | 14.98s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_False-non_zero_value_True] | 19.33s | 10.53s | 14.93s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_BALANCE] | 19.62s | 10.13s | 14.88s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_1M-blockchain_test-calldata_length_10000] | 19.04s | 10.63s | 14.83s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_BALANCE] | 19.68s | 9.94s | 14.81s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_False-non_zero_value_False] | 19.16s | 10.44s | 14.80s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-100 bytes] | 19.25s | 10.33s | 14.79s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_1M-blockchain_test-calldata_length_0] | 18.95s | 10.54s | 14.74s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 19.08s | 10.33s | 14.71s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 18.99s | 10.43s | 14.71s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_True-non_zero_value_True] | 18.66s | 10.73s | 14.69s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 18.80s | 10.53s | 14.66s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 18.68s | 10.63s | 14.66s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SMOD-] | 19.78s | 9.52s | 14.65s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_1M-blockchain_test-calldata_length_1000] | 18.85s | 10.43s | 14.64s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 18.66s | 10.34s | 14.50s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-5KiB] | 19.21s | 9.72s | 14.47s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 19.04s | 9.73s | 14.38s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 18.84s | 9.84s | 14.34s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 19.14s | 9.53s | 14.34s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 18.61s | 9.93s | 14.27s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 18.16s | 10.33s | 14.24s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 18.39s | 9.83s | 14.11s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE same value] | 18.57s | 9.63s | 14.10s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 18.37s | 9.82s | 14.10s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSLOAD] | 18.50s | 9.42s | 13.96s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-SLOAD] | 17.79s | 9.43s | 13.61s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_True-empty_authority_False] | 19.34s | 7.83s | 13.58s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_True-key_mut_False] | 17.64s | 9.42s | 13.53s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_False-key_mut_True] | 17.37s | 9.62s | 13.50s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_False-key_mut_False] | 17.30s | 9.44s | 13.37s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_False-empty_authority_False] | 18.76s | 7.73s | 13.25s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_True-key_mut_True] | 17.07s | 9.33s | 13.20s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 16.70s | 9.62s | 13.16s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 16.83s | 9.42s | 13.12s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_100000] | 18.28s | 7.93s | 13.11s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_zkevm_worst_case] | 16.68s | 9.43s | 13.06s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 15.89s | 10.16s | 13.03s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-10KiB] | 16.75s | 9.22s | 12.98s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-10KiB] | 17.24s | 8.42s | 12.83s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 16.32s | 8.83s | 12.58s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_True-empty_authority_True] | 18.11s | 7.02s | 12.56s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_example_2] | 16.54s | 8.52s | 12.53s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_False-empty_authority_True] | 18.04s | 7.02s | 12.53s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 16.04s | 8.93s | 12.48s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSLOAD] | 15.92s | 8.92s | 12.42s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 16.18s | 8.62s | 12.40s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 14.82s | 9.73s | 12.27s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE new value] | 15.46s | 9.03s | 12.25s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-max code size] | 14.73s | 9.72s | 12.23s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_1M-blockchain_test-value_bearing_True] | 15.15s | 8.83s | 11.99s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 14.49s | 9.43s | 11.96s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 15.38s | 8.43s | 11.90s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 15.27s | 8.22s | 11.74s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_1_2_2_scalar] | 15.72s | 7.73s | 11.73s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-10KiB] | 15.45s | 7.73s | 11.59s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 15.18s | 7.62s | 11.40s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 14.94s | 7.62s | 11.28s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 14.37s | 7.62s | 11.00s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_byte_True] | 14.12s | 7.62s | 10.87s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 13.74s | 7.92s | 10.83s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 13.11s | 8.03s | 10.57s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_True-key_mut_True] | 13.14s | 7.82s | 10.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 13.09s | 7.75s | 10.42s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_True-key_mut_False] | 13.09s | 7.73s | 10.41s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_False-key_mut_False] | 12.90s | 7.62s | 10.26s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_False-key_mut_True] | 12.64s | 7.62s | 10.13s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 12.61s | 7.62s | 10.11s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 12.43s | 7.62s | 10.03s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_1M-blockchain_test-value_bearing_False] | 12.52s | 7.52s | 10.02s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 12.12s | 7.63s | 9.87s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 12.01s | 7.73s | 9.87s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CREATE] | 12.34s | 6.72s | 9.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 11.93s | 7.02s | 9.48s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 11.76s | 7.12s | 9.44s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 11.79s | 7.04s | 9.42s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-1MiB] | 11.91s | 6.92s | 9.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 11.60s | 7.22s | 9.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 11.49s | 7.32s | 9.41s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 11.68s | 7.12s | 9.40s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 11.87s | 6.92s | 9.40s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 11.64s | 7.12s | 9.38s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 11.83s | 6.92s | 9.37s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 11.69s | 7.03s | 9.36s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE new value] | 11.57s | 7.12s | 9.35s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 11.64s | 7.03s | 9.33s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 11.74s | 6.92s | 9.33s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 11.91s | 6.72s | 9.32s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_1024b_exp_1024] | 11.91s | 6.72s | 9.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 11.70s | 6.92s | 9.31s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-1MiB] | 11.76s | 6.82s | 9.29s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 11.60s | 6.95s | 9.27s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_2_sets] | 11.42s | 7.12s | 9.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_1024b_exp_1024] | 11.61s | 6.92s | 9.27s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-1MiB] | 11.71s | 6.82s | 9.27s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g1msm] | 11.64s | 6.82s | 9.23s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-1MiB] | 11.64s | 6.82s | 9.23s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_3_pair] | 11.43s | 7.03s | 9.23s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_1_pair] | 11.53s | 6.92s | 9.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 11.33s | 7.12s | 9.23s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_1000000] | 11.62s | 6.82s | 9.22s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 11.52s | 6.92s | 9.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 11.40s | 7.02s | 9.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 11.48s | 6.92s | 9.20s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 11.26s | 7.13s | 9.20s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 11.57s | 6.82s | 9.19s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 11.36s | 7.02s | 9.19s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 11.44s | 6.95s | 9.19s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 11.66s | 6.72s | 9.19s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 11.55s | 6.82s | 9.19s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 11.22s | 7.12s | 9.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 11.42s | 6.92s | 9.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 11.31s | 7.03s | 9.17s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g2msm] | 11.50s | 6.82s | 9.16s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 11.59s | 6.72s | 9.15s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_1_pair_empty] | 11.39s | 6.92s | 9.15s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 11.38s | 6.93s | 9.15s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 11.38s | 6.92s | 9.15s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 11.34s | 6.92s | 9.13s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 11.54s | 6.72s | 9.13s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 11.54s | 6.72s | 9.13s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 11.43s | 6.83s | 9.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 11.43s | 6.82s | 9.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 11.32s | 6.93s | 9.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 11.40s | 6.83s | 9.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes with value-opcode_CREATE] | 11.30s | 6.92s | 9.11s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_byte_False] | 11.38s | 6.82s | 9.10s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 10.88s | 7.32s | 9.10s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 11.37s | 6.83s | 9.10s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 11.43s | 6.76s | 9.09s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_True] | 11.43s | 6.73s | 9.08s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with zero data-opcode_CREATE] | 11.14s | 7.02s | 9.08s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 11.23s | 6.92s | 9.08s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 11.33s | 6.82s | 9.08s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 11.22s | 6.92s | 9.07s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 11.32s | 6.82s | 9.07s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 11.41s | 6.72s | 9.07s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 11.01s | 7.12s | 9.07s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_zero_input] | 11.10s | 7.03s | 9.06s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of zero data-opcode_RETURN] | 11.19s | 6.92s | 9.06s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_False] | 11.18s | 6.92s | 9.05s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 11.18s | 6.92s | 9.05s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 11.38s | 6.72s | 9.05s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 11.18s | 6.92s | 9.05s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 11.28s | 6.82s | 9.05s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 11.26s | 6.82s | 9.04s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 11.04s | 7.03s | 9.04s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 11.34s | 6.72s | 9.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 11.34s | 6.72s | 9.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 11.14s | 6.92s | 9.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 11.23s | 6.82s | 9.03s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of zero data-opcode_REVERT] | 11.20s | 6.83s | 9.01s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 11.09s | 6.92s | 9.00s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE same value] | 11.18s | 6.82s | 9.00s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 11.18s | 6.82s | 9.00s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 11.18s | 6.82s | 9.00s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CREATE2] | 11.27s | 6.72s | 8.99s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 11.24s | 6.72s | 8.98s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_512b_exp_1024] | 11.14s | 6.82s | 8.98s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 10.85s | 7.12s | 8.98s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 11.03s | 6.92s | 8.98s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 11.03s | 6.92s | 8.98s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 11.02s | 6.92s | 8.97s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 11.00s | 6.93s | 8.96s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes without value-opcode_CREATE] | 11.09s | 6.82s | 8.96s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes without value-opcode_CREATE2] | 10.98s | 6.93s | 8.96s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 11.18s | 6.72s | 8.95s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 11.18s | 6.72s | 8.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_512b_exp_1024] | 11.05s | 6.82s | 8.94s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 11.15s | 6.72s | 8.94s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 11.04s | 6.83s | 8.93s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 11.00s | 6.83s | 8.91s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_True] | 11.10s | 6.72s | 8.91s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 10.97s | 6.82s | 8.89s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 10.96s | 6.82s | 8.89s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 10.95s | 6.82s | 8.88s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 10.98s | 6.72s | 8.85s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 10.83s | 6.82s | 8.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 11.02s | 6.62s | 8.82s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_False] | 10.81s | 6.82s | 8.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes with value-opcode_CREATE2] | 10.81s | 6.83s | 8.81s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 10.76s | 6.82s | 8.79s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_infinities_2_scalar] | 10.75s | 6.82s | 8.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 10.72s | 6.82s | 8.77s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with zero data-opcode_CREATE2] | 10.81s | 6.72s | 8.77s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 10.68s | 6.82s | 8.75s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 10.66s | 6.82s | 8.74s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 10.49s | 6.83s | 8.66s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 10.18s | 6.92s | 8.55s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 7.70s | 6.22s | 6.96s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| sp1-v5.2.3 | 533 | 533 | 0 | 0 |
| zisk-v0.14.0 | 533 | 533 | 0 | 0 |

---

## reth


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | sp1-v5.2.3<br/>(1.41MiB) | zisk-v0.14.0<br/>(244.02KiB) | Avg |
|-----------|-----------|-----------|----------|
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_5_qube] | 23m 19.85s | 5m 13.15s | 14m 16.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_4_qube] | 23m 1.39s | 5m 9.13s | 14m 5.26s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_5_square] | 21m 15.96s | 4m 42.85s | 12m 59.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_4_square] | 21m 0.94s | 4m 39.86s | 12m 50.40s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_1024_exp_2] | 20m 59.64s | 4m 18.56s | 12m 39.10s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_1045_gas_base_heavy] | 20m 23.19s | 4m 16.61s | 12m 19.90s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_800_gas_base_heavy] | 20m 13.75s | 4m 12.28s | 12m 13.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_867_gas_base_heavy] | 20m 3.32s | 4m 19.74s | 12m 11.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_3_qube] | 19m 42.56s | 4m 30.07s | 12m 6.31s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_616_gas_base_heavy] | 19m 37.55s | 4m 11.24s | 11m 54.39s |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_1M-blockchain_test-point_evaluation] | 19m 31.25s | 3m 35.80s | 11m 33.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_408_gas_base_heavy] | 18m 19.08s | 3m 57.41s | 11m 8.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_3_square] | 18m 0.19s | 4m 5.15s | 11m 2.67s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_264_exp_2] | 17m 51.32s | 3m 53.25s | 10m 52.28s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_256_exp_2] | 17m 39.06s | 3m 45.82s | 10m 42.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_min_gas_base_heavy] | 14m 49.52s | 3m 9.35s | 8m 59.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_8b_exp_896] | 10m 53.50s | 5m 4.07s | 7m 58.79s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_exp_298_gas_exp_heavy] | 10m 35.27s | 4m 46.26s | 7m 40.77s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_8_exp_896] | 10m 30.98s | 4m 50.43s | 7m 40.70s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_1_exp_heavy] | 10m 9.48s | 4m 41.17s | 7m 25.32s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_guido_3_even] | 11m 17.76s | 3m 7.37s | 7m 12.56s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_exp_215_gas_exp_heavy] | 9m 38.40s | 4m 27.16s | 7m 2.78s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_8_exp_648] | 9m 40.50s | 4m 22.41s | 7m 1.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_min_gas_exp_heavy] | 9m 27.84s | 4m 22.45s | 6m 55.14s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_2_qube] | 7m 58.07s | 1m 54.20s | 4m 56.13s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_fp_to_g1] | 7m 52.81s | 1m 22.25s | 4m 37.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_2_square] | 7m 22.94s | 1m 48.14s | 4m 35.54s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_800_gas_exp_heavy] | 6m 42.79s | 2m 12.27s | 4m 27.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_852_gas_exp_heavy] | 6m 41.73s | 2m 11.79s | 4m 26.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_600_gas_exp_heavy] | 6m 26.04s | 2m 8.49s | 4m 17.26s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_16b_exp_320] | 6m 20.97s | 2m 9.47s | 4m 15.22s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_pairing_check] | 7m 2.00s | 1m 21.72s | 4m 11.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_pawel_2] | 6m 8.01s | 2m 0.98s | 4m 4.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_400_gas_exp_heavy] | 6m 0.69s | 1m 59.14s | 3m 59.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_guido_2_even] | 5m 54.01s | 1m 53.29s | 3m 53.65s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 5m 49.15s | 1m 52.30s | 3m 50.72s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_marius_1_even] | 5m 15.79s | 1m 44.54s | 3m 30.17s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_765_gas_exp_heavy] | 5m 16.86s | 1m 34.63s | 3m 25.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_24b_exp_168] | 5m 11.22s | 1m 38.66s | 3m 24.94s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_fp_to_g2] | 5m 37.31s | 1m 3.11s | 3m 20.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_pawel_3] | 5m 0.57s | 1m 31.86s | 3m 16.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_32b_exp_256] | 4m 59.40s | 1m 26.12s | 3m 12.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_32b_exp_256] | 4m 58.02s | 1m 23.83s | 3m 10.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_example_1] | 4m 53.81s | 1m 24.62s | 3m 9.22s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_1360_gas_balanced] | 4m 54.88s | 1m 22.31s | 3m 8.59s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_32b_exp_96] | 4m 42.95s | 1m 27.22s | 3m 5.09s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 4m 46.13s | 1m 22.91s | 3m 4.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_zkevm_worst_case] | 4m 51.04s | 1m 15.71s | 3m 3.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_677_gas_base_heavy] | 4m 41.45s | 1m 20.91s | 3m 1.18s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_3_exp_8] | 4m 31.62s | 1m 30.54s | 3m 1.08s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_128] | 4m 41.14s | 1m 20.42s | 3m 0.78s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_32b_exp_96] | 4m 33.35s | 1m 20.02s | 2m 56.69s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_example_2] | 4m 39.89s | 1m 12.81s | 2m 56.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_pawel_4] | 4m 32.43s | 1m 17.58s | 2m 55.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_64b_exp_512] | 4m 39.96s | 1m 7.40s | 2m 53.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_65] | 4m 26.82s | 1m 17.81s | 2m 52.31s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_64b_exp_512] | 4m 35.65s | 1m 7.91s | 2m 51.78s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g2add] | 4m 35.50s | 1m 4.69s | 2m 50.10s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_996_gas_balanced] | 4m 30.27s | 1m 8.90s | 2m 49.58s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_600_gas_balanced] | 4m 24.29s | 1m 12.01s | 2m 48.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1360n1] | 4m 20.34s | 1m 14.33s | 2m 47.34s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_767_gas_balanced] | 4m 25.87s | 1m 7.69s | 2m 46.78s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_64] | 4m 15.30s | 1m 13.21s | 2m 44.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_408_gas_balanced] | 4m 17.28s | 1m 10.71s | 2m 43.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_32b_exp_40] | 4m 8.78s | 1m 18.61s | 2m 43.70s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 4m 18.58s | 1m 8.50s | 2m 43.54s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g1add] | 4m 19.99s | 1m 1.60s | 2m 40.80s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_1M-blockchain_test-blake2f] | 4m 0.55s | 1m 19.12s | 2m 39.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_min_gas_balanced] | 4m 7.06s | 1m 10.02s | 2m 38.54s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_128b_exp_1024] | 4m 16.70s | 1m 0.30s | 2m 38.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_128b_exp_1024] | 4m 14.95s | 59.49s | 2m 37.22s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1349n1] | 3m 57.84s | 1m 8.21s | 2m 33.03s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1360n2] | 3m 56.20s | 1m 8.61s | 2m 32.40s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_40] | 3m 51.63s | 1m 8.51s | 2m 30.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_guido_1_even] | 3m 27.63s | 1m 32.25s | 2m 29.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_exp_208_gas_balanced] | 3m 50.41s | 1m 8.61s | 2m 29.51s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_36] | 3m 44.62s | 1m 6.13s | 2m 25.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_32b_exp_cover_windows] | 3m 37.57s | 1m 3.00s | 2m 20.29s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 3m 41.06s | 55.79s | 2m 18.43s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 3m 40.80s | 52.10s | 2m 16.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 3m 32.87s | 57.11s | 2m 14.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 3m 33.85s | 49.11s | 2m 11.48s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_32] | 3m 17.57s | 58.79s | 2m 8.18s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 3m 14.52s | 45.48s | 2m 0.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_256b_exp_1024] | 3m 3.55s | 43.88s | 1m 53.72s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_256b_exp_1024] | 3m 2.98s | 42.89s | 1m 52.93s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_200n2] | 2m 51.30s | 50.09s | 1m 50.70s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_200n3] | 2m 50.16s | 50.28s | 1m 50.22s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1152n1] | 2m 44.68s | 49.48s | 1m 47.08s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_1_qube] | 2m 40.28s | 43.11s | 1m 41.69s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_1_square] | 2m 33.41s | 41.27s | 1m 37.34s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_200n1] | 2m 14.75s | 40.87s | 1m 27.81s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SDIV-1] | 1m 23.00s | ❌ SDK Crash | 1m 23.00s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CALLCODE] | 1m 40.04s | 1m 5.52s | 1m 22.78s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CALL] | 1m 38.57s | 1m 6.30s | 1m 22.44s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DELEGATECALL] | 1m 38.15s | 1m 5.91s | 1m 22.03s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_191] | 2m 5.44s | 36.27s | 1m 20.85s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXTCODEHASH] | 1m 36.12s | 1m 4.91s | 1m 20.51s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_STATICCALL] | 1m 37.11s | 1m 3.81s | 1m 20.46s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXTCODESIZE] | 1m 35.88s | 1m 2.71s | 1m 19.29s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXTCODECOPY] | 1m 35.74s | 1m 2.51s | 1m 19.13s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_255] | 2m 1.83s | 35.36s | 1m 18.59s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul] | 2m 23.61s | 7.82s | 1m 15.72s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_1M-blockchain_test-contract_balance_0] | 1m 37.58s | 53.58s | 1m 15.58s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_1M-blockchain_test-contract_balance_1] | 1m 37.47s | 53.28s | 1m 15.37s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 2m 19.96s | 7.52s | 1m 13.74s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 2m 18.50s | 7.93s | 1m 13.22s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_127] | 1m 32.94s | 28.05s | 1m 0.49s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_191] | 1m 31.24s | 27.55s | 59.40s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_2_pair] | 1m 45.83s | 11.93s | 58.88s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_4_pair] | 1m 46.28s | 11.23s | 58.76s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_one_pairing] | 1m 43.02s | 13.73s | 58.37s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_two_pairings] | 1m 43.64s | 12.04s | 57.84s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_191] | 1m 25.93s | 26.55s | 56.24s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_5_pair] | 1m 41.48s | 10.53s | 56.01s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 1m 37.87s | 10.33s | 54.10s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SDIV-0] | 1m 22.38s | 24.45s | 53.41s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_63] | 1m 13.08s | 24.75s | 48.91s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DIV-0] | 1m 14.60s | 23.04s | 48.82s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_127] | 1m 13.08s | 22.05s | 47.56s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_255] | 1m 8.50s | 24.05s | 46.28s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 1m 25.18s | 7.33s | 46.25s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_127] | 1m 10.19s | 20.35s | 45.27s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DIV-1] | 1m 8.70s | 21.66s | 45.18s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_255] | 1m 6.75s | 22.85s | 44.80s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_191] | 1m 6.03s | 23.45s | 44.74s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_255] | 54.89s | 22.55s | 38.72s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_127] | 55.43s | 20.74s | 38.09s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PREVRANDAO] | 43.56s | 32.45s | 38.00s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_1M-blockchain_test-ecrecover] | 57.15s | 12.63s | 34.89s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_63] | 51.50s | 18.14s | 34.82s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_add] | 41.73s | 26.06s | 33.90s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_63] | 49.76s | 17.15s | 33.45s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 35.80s | 30.36s | 33.08s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_add_1_2] | 39.83s | 23.85s | 31.84s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 50.95s | 12.23s | 31.59s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP14] | 35.85s | 24.34s | 30.10s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP8] | 36.54s | 23.65s | 30.09s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SGT-] | 41.43s | 18.64s | 30.03s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP9] | 36.17s | 23.65s | 29.91s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP2] | 36.64s | 23.15s | 29.90s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP3] | 36.07s | 23.67s | 29.87s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP10] | 36.39s | 23.15s | 29.77s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP5] | 36.18s | 23.35s | 29.77s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP13] | 36.07s | 23.45s | 29.76s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP6] | 36.08s | 23.05s | 29.57s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP7] | 36.68s | 22.45s | 29.57s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_63] | 41.37s | 17.75s | 29.56s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP16] | 35.74s | 23.35s | 29.55s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP11] | 35.14s | 23.95s | 29.54s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP15] | 35.91s | 22.84s | 29.38s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP4] | 36.42s | 22.24s | 29.33s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP12] | 36.20s | 22.03s | 29.11s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXP-] | 47.92s | 10.24s | 29.08s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_ADDRESS] | 35.56s | 22.14s | 28.85s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP1] | 35.58s | 22.04s | 28.81s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_ORIGIN] | 35.51s | 21.94s | 28.72s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EQ-] | 39.17s | 17.94s | 28.56s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-empty-opcode_REVERT] | 36.48s | 20.25s | 28.36s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_COINBASE] | 34.59s | 22.04s | 28.32s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 38.15s | 18.34s | 28.25s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero-loop] | 38.05s | 18.04s | 28.05s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_1M-blockchain_test-one-loop] | 37.34s | 18.44s | 27.89s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CALLER] | 35.02s | 20.05s | 27.54s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_STATICCALL] | 35.69s | 19.34s | 27.52s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_CALL] | 35.36s | 19.04s | 27.20s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH32] | 30.43s | 23.35s | 26.89s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_CALLCODE] | 34.63s | 19.04s | 26.84s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-empty-opcode_RETURN] | 34.02s | 18.54s | 26.28s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SMOD-] | 36.07s | 16.34s | 26.20s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH31] | 29.95s | 22.25s | 26.10s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH30] | 29.97s | 21.44s | 25.71s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_CALLCODE] | 32.70s | 17.64s | 25.17s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH29] | 28.82s | 21.04s | 24.93s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH28] | 29.06s | 20.64s | 24.85s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 31.80s | 17.64s | 24.72s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_CALL] | 31.94s | 17.25s | 24.59s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH27] | 28.49s | 20.46s | 24.48s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_STATICCALL] | 31.24s | 17.63s | 24.43s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_MOD-] | 33.14s | 15.63s | 24.39s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_1M-blockchain_test-empty] | 32.21s | 16.34s | 24.27s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH25] | 28.03s | 19.54s | 23.79s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH24] | 27.89s | 19.64s | 23.77s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of zero data-opcode_REVERT] | 30.08s | 16.04s | 23.06s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH23] | 27.55s | 18.55s | 23.05s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH26] | 26.91s | 19.05s | 22.98s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SAR-] | 33.06s | 12.04s | 22.55s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH22] | 27.30s | 17.64s | 22.47s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_BLOBBASEFEE] | 31.27s | 13.43s | 22.35s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-six blobs, access latest] | 25.99s | 18.54s | 22.26s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of zero data-opcode_RETURN] | 28.78s | 15.24s | 22.01s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-SSTORE new value] | 29.26s | 14.73s | 22.00s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 28.64s | 15.35s | 22.00s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH21] | 26.23s | 17.54s | 21.89s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-one blob and accessed] | 26.92s | 16.84s | 21.88s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_1M-blockchain_test-shift_right_SAR] | 31.91s | 11.84s | 21.87s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_GASPRICE] | 29.91s | 13.53s | 21.72s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH20] | 25.30s | 17.05s | 21.17s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_add_infinities] | 25.61s | 16.55s | 21.08s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH19] | 25.16s | 16.95s | 21.05s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_1M-blockchain_test-shift_right_SHR] | 30.53s | 10.93s | 20.73s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SHR-] | 30.04s | 11.03s | 20.53s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH17] | 24.61s | 16.45s | 20.53s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH18] | 24.54s | 16.44s | 20.49s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH16] | 24.57s | 16.34s | 20.45s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SHL-] | 29.66s | 11.04s | 20.35s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_NUMBER] | 28.01s | 12.64s | 20.33s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_TIMESTAMP] | 27.80s | 12.54s | 20.17s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_MUL-] | 30.83s | 9.43s | 20.13s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 27.12s | 13.04s | 20.08s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 26.86s | 13.23s | 20.05s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 26.92s | 13.14s | 20.03s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH15] | 24.48s | 15.54s | 20.02s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 26.98s | 13.04s | 20.01s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 26.71s | 13.23s | 19.97s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH14] | 24.18s | 15.54s | 19.86s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 26.62s | 13.04s | 19.83s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 26.48s | 13.14s | 19.81s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 26.41s | 13.14s | 19.77s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 26.39s | 13.14s | 19.77s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 26.61s | 12.83s | 19.72s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 26.49s | 12.94s | 19.71s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 26.02s | 13.33s | 19.68s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_True-key_mut_False] | 25.92s | 13.43s | 19.68s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 28.11s | 11.23s | 19.67s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_True-key_mut_True] | 26.09s | 13.23s | 19.66s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 26.44s | 12.64s | 19.54s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_1] | 26.34s | 12.64s | 19.49s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 26.45s | 12.53s | 19.49s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-0 bytes] | 27.67s | 11.24s | 19.46s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 26.12s | 12.63s | 19.38s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_BASEFEE] | 26.37s | 12.34s | 19.36s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 24.19s | 14.45s | 19.32s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 27.55s | 11.04s | 19.29s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 23.74s | 14.84s | 19.29s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 26.09s | 12.44s | 19.27s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SIGNEXTEND-] | 28.60s | 9.93s | 19.26s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 23.66s | 14.63s | 19.15s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 25.83s | 12.44s | 19.13s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0 bytes] | 27.07s | 11.14s | 19.10s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 23.60s | 14.53s | 19.07s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH13] | 23.74s | 14.34s | 19.04s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 23.70s | 14.33s | 19.01s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 23.16s | 14.85s | 19.00s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CHAINID] | 25.99s | 11.93s | 18.96s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_0] | 25.87s | 12.04s | 18.95s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 23.45s | 14.45s | 18.95s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 23.32s | 14.53s | 18.93s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0 bytes] | 26.89s | 10.94s | 18.91s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 23.44s | 14.25s | 18.84s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 23.02s | 14.64s | 18.83s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 23.29s | 14.34s | 18.82s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 23.46s | 14.13s | 18.80s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH0] | 25.69s | 11.54s | 18.61s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_GASLIMIT] | 25.62s | 11.54s | 18.58s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 25.45s | 11.64s | 18.55s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH12] | 23.34s | 13.74s | 18.54s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_1000] | 24.79s | 11.94s | 18.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH11] | 23.40s | 13.24s | 18.32s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 24.76s | 11.63s | 18.20s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-100 bytes] | 24.72s | 11.64s | 18.18s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-100 bytes] | 24.47s | 11.55s | 18.01s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-SSTORE same value] | 23.46s | 12.23s | 17.85s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 22.23s | 13.44s | 17.83s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_True-non_zero_value_False] | 24.87s | 10.73s | 17.80s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-0 bytes] | 24.19s | 11.34s | 17.76s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_False-non_zero_value_False] | 24.51s | 10.93s | 17.72s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 23.83s | 11.23s | 17.53s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 23.77s | 11.14s | 17.46s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_False-non_zero_value_True] | 23.80s | 10.94s | 17.36s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_True-non_zero_value_True] | 24.03s | 10.62s | 17.33s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH7] | 22.13s | 12.13s | 17.13s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH10] | 21.32s | 12.94s | 17.13s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 23.71s | 10.43s | 17.07s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 23.43s | 10.53s | 16.98s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH8] | 21.49s | 12.33s | 16.91s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH9] | 21.00s | 12.64s | 16.82s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 22.13s | 11.33s | 16.73s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH6] | 21.02s | 12.43s | 16.72s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SLT-] | 23.20s | 10.22s | 16.71s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_1M-blockchain_test-calldata_length_0] | 23.00s | 10.33s | 16.66s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_1M-blockchain_test-calldata_length_10000] | 22.14s | 11.03s | 16.59s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 22.92s | 10.24s | 16.58s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 22.26s | 10.83s | 16.54s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 22.45s | 10.53s | 16.49s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 22.30s | 10.33s | 16.31s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 21.66s | 10.94s | 16.30s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 22.07s | 10.53s | 16.30s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 21.92s | 10.63s | 16.27s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-10KiB] | 22.53s | 9.93s | 16.23s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-5b] | 21.52s | 10.84s | 16.18s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_1M-blockchain_test-calldata_length_1000] | 21.65s | 10.65s | 16.15s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 21.46s | 10.83s | 16.14s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SUB-] | 23.04s | 9.22s | 16.13s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_diff_acc_to_diff_acc] | 24.04s | 8.12s | 16.08s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 21.94s | 10.03s | 15.99s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_diff_acc_to_b] | 24.18s | 7.72s | 15.95s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 21.62s | 10.22s | 15.92s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH4] | 20.86s | 10.84s | 15.85s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_GT-] | 22.04s | 9.43s | 15.73s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 21.21s | 10.24s | 15.72s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 21.45s | 9.93s | 15.69s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_ADD-] | 22.54s | 8.82s | 15.68s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_a_to_diff_acc] | 23.42s | 7.92s | 15.67s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH5] | 20.06s | 11.24s | 15.65s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 21.43s | 9.82s | 15.63s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 21.25s | 9.93s | 15.59s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 21.17s | 9.93s | 15.55s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_BYTE-] | 21.73s | 9.33s | 15.53s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 22.23s | 8.83s | 15.53s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_AND-] | 21.86s | 9.12s | 15.49s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP14] | 21.33s | 9.63s | 15.48s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 20.89s | 10.03s | 15.46s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-no blobs] | 20.14s | 10.73s | 15.43s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH3] | 19.90s | 10.94s | 15.42s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_OR-] | 21.35s | 9.42s | 15.38s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 20.73s | 10.03s | 15.38s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_LT-] | 21.33s | 9.43s | 15.38s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 21.01s | 9.73s | 15.37s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP15] | 21.00s | 9.62s | 15.31s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP16] | 20.87s | 9.73s | 15.30s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP13] | 20.95s | 9.62s | 15.29s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP3] | 20.80s | 9.73s | 15.27s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 20.72s | 9.72s | 15.22s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0 bytes] | 20.99s | 9.44s | 15.21s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0 bytes] | 20.96s | 9.43s | 15.20s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_XOR-] | 20.96s | 9.43s | 15.20s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP10] | 20.71s | 9.63s | 15.17s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-one blob but access non-existent index] | 19.58s | 10.74s | 15.16s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP12] | 20.73s | 9.52s | 15.12s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP11] | 20.70s | 9.53s | 15.11s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_a_to_b] | 22.97s | 7.22s | 15.10s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_a_to_a] | 23.05s | 7.12s | 15.09s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP5] | 20.41s | 9.73s | 15.07s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 20.10s | 10.04s | 15.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 20.47s | 9.62s | 15.04s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP6] | 20.61s | 9.43s | 15.02s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP4] | 20.16s | 9.73s | 14.95s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP8] | 20.23s | 9.63s | 14.93s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP2] | 20.20s | 9.53s | 14.86s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP7] | 20.13s | 9.53s | 14.83s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-100 bytes] | 19.61s | 9.93s | 14.77s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP9] | 20.08s | 9.43s | 14.75s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 21.24s | 8.22s | 14.73s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH2] | 19.48s | 9.92s | 14.70s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 19.24s | 10.14s | 14.69s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_BALANCE] | 19.03s | 10.34s | 14.68s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 19.90s | 9.33s | 14.62s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-100 bytes] | 20.17s | 9.03s | 14.60s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP1] | 19.72s | 9.32s | 14.52s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 19.68s | 9.32s | 14.50s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 19.52s | 9.23s | 14.38s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 19.48s | 9.23s | 14.36s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_False-empty_authority_False] | 21.09s | 7.32s | 14.20s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 19.02s | 9.35s | 14.18s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_True-empty_authority_False] | 20.79s | 7.52s | 14.15s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH1] | 18.57s | 9.72s | 14.14s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_True-empty_authority_True] | 20.89s | 7.35s | 14.12s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-10KiB] | 19.19s | 9.03s | 14.11s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_False-key_mut_True] | 18.72s | 9.43s | 14.07s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_False-empty_authority_True] | 20.88s | 7.14s | 14.01s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-10KiB] | 19.21s | 8.32s | 13.77s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_False-key_mut_False] | 17.99s | 9.53s | 13.76s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-00] | 18.29s | 9.13s | 13.71s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-max code size] | 17.27s | 10.13s | 13.70s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-605b5b] | 18.46s | 8.73s | 13.60s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-SLOAD] | 17.24s | 9.74s | 13.49s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 17.54s | 9.42s | 13.48s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 17.21s | 9.74s | 13.47s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 16.91s | 10.03s | 13.47s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 16.67s | 10.23s | 13.45s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_BALANCE] | 17.01s | 9.73s | 13.37s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-615b5b5b] | 17.88s | 8.82s | 13.35s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 16.72s | 9.83s | 13.28s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 16.81s | 9.73s | 13.27s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 16.55s | 9.72s | 13.14s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 16.77s | 9.32s | 13.05s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB] | 17.23s | 8.62s | 12.93s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-605b] | 17.01s | 8.82s | 12.92s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-512] | 16.67s | 8.78s | 12.72s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 17.04s | 8.32s | 12.68s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSLOAD] | 16.37s | 8.82s | 12.60s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE same value] | 16.24s | 8.82s | 12.53s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 16.62s | 8.43s | 12.53s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 15.59s | 9.22s | 12.40s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-615b5b] | 16.90s | 7.73s | 12.31s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-5KiB] | 15.60s | 8.83s | 12.21s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 15.99s | 7.92s | 11.96s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-max code size] | 15.99s | 7.72s | 11.86s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 15.62s | 7.92s | 11.77s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 15.69s | 7.83s | 11.76s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_2_sets] | 16.14s | 7.23s | 11.69s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-10KiB] | 15.72s | 7.52s | 11.62s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 15.29s | 7.93s | 11.61s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 15.22s | 7.93s | 11.57s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 15.26s | 7.72s | 11.49s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_1M-blockchain_test-value_bearing_True] | 15.03s | 7.92s | 11.48s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 15.04s | 7.83s | 11.43s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 14.73s | 7.93s | 11.33s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE new value] | 15.14s | 7.52s | 11.33s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 15.38s | 7.22s | 11.30s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSLOAD] | 14.72s | 7.62s | 11.17s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_infinities_2_scalar] | 15.22s | 7.02s | 11.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_1_2_2_scalar] | 14.71s | 7.12s | 10.91s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_True-key_mut_True] | 14.07s | 7.63s | 10.85s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_byte_True] | 13.79s | 7.82s | 10.80s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 13.81s | 7.62s | 10.72s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_1M-blockchain_test-value_bearing_False] | 14.00s | 7.33s | 10.66s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_True-key_mut_False] | 13.55s | 7.72s | 10.64s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 13.53s | 7.72s | 10.63s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_False-key_mut_True] | 14.13s | 7.12s | 10.62s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 13.86s | 7.12s | 10.49s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 13.12s | 7.73s | 10.42s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_100000] | 13.56s | 7.23s | 10.39s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_False-key_mut_False] | 13.55s | 7.13s | 10.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 13.36s | 7.12s | 10.24s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE new value] | 13.02s | 7.32s | 10.17s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 13.15s | 7.12s | 10.13s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 12.99s | 7.22s | 10.10s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 12.98s | 7.22s | 10.10s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 13.06s | 7.12s | 10.09s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes with value-opcode_CREATE] | 12.87s | 7.22s | 10.04s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_1024b_exp_1024] | 12.90s | 7.14s | 10.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 12.95s | 7.02s | 9.98s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 12.70s | 7.23s | 9.96s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 12.80s | 7.12s | 9.96s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 12.69s | 7.22s | 9.96s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_1_pair] | 12.68s | 7.23s | 9.95s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 12.96s | 6.93s | 9.94s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 12.42s | 7.42s | 9.92s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-1MiB] | 12.70s | 7.13s | 9.92s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes without value-opcode_CREATE] | 12.70s | 7.12s | 9.91s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 12.68s | 7.12s | 9.90s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-1MiB] | 12.66s | 7.12s | 9.89s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 12.52s | 7.26s | 9.89s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 12.65s | 7.12s | 9.89s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 12.63s | 7.12s | 9.87s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 12.52s | 7.22s | 9.87s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-1MiB] | 12.71s | 7.02s | 9.87s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_3_pair] | 12.57s | 7.12s | 9.85s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 12.52s | 7.12s | 9.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 12.59s | 7.02s | 9.80s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 12.37s | 7.22s | 9.79s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE same value] | 12.36s | 7.23s | 9.79s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 12.34s | 7.23s | 9.79s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 12.45s | 7.12s | 9.78s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_zero_input] | 12.44s | 7.12s | 9.78s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 12.44s | 7.12s | 9.78s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 12.24s | 7.32s | 9.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 12.44s | 7.12s | 9.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 12.53s | 7.02s | 9.78s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 12.33s | 7.22s | 9.77s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CREATE2] | 12.51s | 7.02s | 9.77s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 12.40s | 7.12s | 9.76s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 12.51s | 7.02s | 9.76s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes with value-opcode_CREATE2] | 12.39s | 7.12s | 9.76s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g1msm] | 12.19s | 7.32s | 9.76s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 12.48s | 7.02s | 9.75s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 12.37s | 7.12s | 9.75s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 12.37s | 7.12s | 9.74s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 12.46s | 7.03s | 9.74s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 12.36s | 7.12s | 9.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_1024b_exp_1024] | 12.36s | 7.12s | 9.74s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 12.45s | 7.02s | 9.74s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 12.34s | 7.13s | 9.73s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g2msm] | 12.33s | 7.12s | 9.72s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 12.22s | 7.22s | 9.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 12.42s | 7.03s | 9.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 12.21s | 7.22s | 9.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 12.31s | 7.12s | 9.71s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 12.40s | 7.02s | 9.71s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-1MiB] | 12.49s | 6.92s | 9.70s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 12.18s | 7.22s | 9.70s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with zero data-opcode_CREATE] | 12.38s | 7.02s | 9.70s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 12.28s | 7.12s | 9.70s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CREATE] | 12.15s | 7.23s | 9.69s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 12.35s | 7.02s | 9.69s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 12.35s | 7.02s | 9.69s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with zero data-opcode_CREATE2] | 12.15s | 7.22s | 9.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 12.25s | 7.12s | 9.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 12.24s | 7.12s | 9.68s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 12.13s | 7.23s | 9.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 12.21s | 7.12s | 9.66s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 12.19s | 7.12s | 9.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_512b_exp_1024] | 12.17s | 7.12s | 9.65s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 12.47s | 6.82s | 9.64s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 12.06s | 7.22s | 9.64s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 12.07s | 7.22s | 9.64s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 12.37s | 6.92s | 9.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_512b_exp_1024] | 12.45s | 6.83s | 9.64s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 12.24s | 7.03s | 9.63s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_1_pair_empty] | 12.14s | 7.12s | 9.63s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_True] | 12.42s | 6.82s | 9.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes without value-opcode_CREATE2] | 12.41s | 6.82s | 9.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 12.18s | 7.04s | 9.61s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 12.19s | 7.02s | 9.61s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 12.07s | 7.12s | 9.59s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 12.13s | 7.02s | 9.58s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 12.23s | 6.92s | 9.58s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 11.88s | 7.22s | 9.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 11.87s | 7.23s | 9.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 12.16s | 6.93s | 9.54s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 11.96s | 7.12s | 9.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 11.86s | 7.22s | 9.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 12.06s | 7.02s | 9.54s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of zero data-opcode_RETURN] | 12.14s | 6.92s | 9.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 12.02s | 7.02s | 9.52s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 11.72s | 7.32s | 9.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 12.11s | 6.92s | 9.51s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of zero data-opcode_REVERT] | 11.97s | 7.02s | 9.50s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 11.76s | 7.22s | 9.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 11.96s | 7.02s | 9.49s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_byte_False] | 12.04s | 6.92s | 9.48s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 11.73s | 7.23s | 9.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 11.88s | 7.02s | 9.45s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 11.98s | 6.92s | 9.45s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 11.89s | 6.92s | 9.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 11.76s | 7.02s | 9.39s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_False] | 11.85s | 6.93s | 9.39s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 11.56s | 7.22s | 9.39s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 11.75s | 7.02s | 9.39s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_False] | 11.73s | 7.02s | 9.38s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 11.73s | 7.02s | 9.37s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 11.51s | 7.23s | 9.37s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 11.67s | 7.02s | 9.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 11.56s | 7.13s | 9.34s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_1000000] | 11.75s | 6.92s | 9.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 11.50s | 7.12s | 9.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 11.68s | 6.92s | 9.30s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_True] | 11.86s | 6.62s | 9.24s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 11.81s | 6.62s | 9.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 11.19s | 7.13s | 9.16s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 8.96s | 6.23s | 7.59s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| sp1-v5.2.3 | 533 | 533 | 0 | 0 |
| zisk-v0.14.0 | 533 | 532 | 1 | 0 |

---

