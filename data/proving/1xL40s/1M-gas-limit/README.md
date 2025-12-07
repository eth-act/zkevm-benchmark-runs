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

| Test Case | sp1-v5.2.3<br/>(1.41MiB) | Avg |
|-----------|-----------|----------|
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_127] | 11m 4.33s | 11m 4.33s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_191] | 9m 44.86s | 9m 44.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_8b_exp_896] | 8m 54.10s | 8m 54.10s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_255] | 8m 27.15s | 8m 27.15s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_63] | 8m 23.25s | 8m 23.25s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_127] | 7m 21.71s | 7m 21.71s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_127] | 7m 20.23s | 7m 20.23s |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_1M-blockchain_test-point_evaluation] | 7m 17.00s | 7m 17.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_4_qube] | 6m 40.24s | 6m 40.24s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_800_gas_base_heavy] | 6m 38.05s | 6m 38.05s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_867_gas_base_heavy] | 6m 34.04s | 6m 34.04s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_guido_2_even] | 6m 32.96s | 6m 32.96s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_616_gas_base_heavy] | 6m 32.95s | 6m 32.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_1045_gas_base_heavy] | 6m 25.63s | 6m 25.63s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_408_gas_base_heavy] | 6m 24.15s | 6m 24.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_264_exp_2] | 6m 23.01s | 6m 23.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_3_qube] | 6m 22.97s | 6m 22.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_marius_1_even] | 6m 18.32s | 6m 18.32s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g1add] | 6m 12.47s | 6m 12.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_256_exp_2] | 6m 5.33s | 6m 5.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_16b_exp_320] | 5m 52.45s | 5m 52.45s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_63] | 5m 27.44s | 5m 27.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_min_gas_base_heavy] | 5m 27.16s | 5m 27.16s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_63] | 5m 23.04s | 5m 23.04s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_guido_1_even] | 5m 19.71s | 5m 19.71s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_4_square] | 5m 10.76s | 5m 10.76s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SDIV-1] | 5m 9.68s | 5m 9.68s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_127] | 5m 8.53s | 5m 8.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_852_gas_exp_heavy] | 5m 7.85s | 5m 7.85s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_5_qube] | 5m 5.94s | 5m 5.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_800_gas_exp_heavy] | 5m 5.83s | 5m 5.83s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_8_exp_896] | 5m 2.40s | 5m 2.40s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_exp_298_gas_exp_heavy] | 5m 2.03s | 5m 2.03s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_3_square] | 5m 1.46s | 5m 1.46s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_600_gas_exp_heavy] | 4m 59.89s | 4m 59.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_exp_215_gas_exp_heavy] | 4m 52.85s | 4m 52.85s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_8_exp_648] | 4m 52.60s | 4m 52.60s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_1024_exp_2] | 4m 52.43s | 4m 52.43s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_min_gas_exp_heavy] | 4m 51.78s | 4m 51.78s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g2add] | 4m 50.93s | 4m 50.93s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_191] | 4m 47.97s | 4m 47.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_pawel_2] | 4m 46.65s | 4m 46.65s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_400_gas_exp_heavy] | 4m 43.48s | 4m 43.48s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_191] | 4m 43.00s | 4m 43.00s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DIV-1] | 4m 30.48s | 4m 30.48s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SDIV-0] | 4m 25.31s | 4m 25.31s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DIV-0] | 4m 21.19s | 4m 21.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_24b_exp_168] | 4m 13.17s | 4m 13.17s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_5_square] | 4m 9.09s | 4m 9.09s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_add_1_2] | 4m 4.33s | 4m 4.33s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_1M-blockchain_test-blake2f] | 3m 59.39s | 3m 59.39s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_add] | 3m 55.12s | 3m 55.12s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_191] | 3m 47.09s | 3m 47.09s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_765_gas_exp_heavy] | 3m 45.14s | 3m 45.14s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_pawel_3] | 3m 41.61s | 3m 41.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_3_exp_8] | 3m 39.01s | 3m 39.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_32b_exp_256] | 3m 34.88s | 3m 34.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_32b_exp_96] | 3m 29.25s | 3m 29.25s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_63] | 3m 29.07s | 3m 29.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_32b_exp_40] | 3m 14.41s | 3m 14.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_32b_exp_256] | 3m 11.96s | 3m 11.96s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_example_1] | 3m 8.99s | 3m 8.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_1360_gas_balanced] | 3m 8.82s | 3m 8.82s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1360n1] | 3m 7.66s | 3m 7.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1349n1] | 3m 7.25s | 3m 7.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_128] | 3m 4.92s | 3m 4.92s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_64] | 3m 4.71s | 3m 4.71s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_32b_exp_cover_windows] | 3m 4.49s | 3m 4.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_677_gas_base_heavy] | 3m 4.40s | 3m 4.40s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_pawel_4] | 3m 3.49s | 3m 3.49s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_32b_exp_96] | 3m 3.47s | 3m 3.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_2_qube] | 3m 3.31s | 3m 3.31s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_65] | 3m 1.32s | 3m 1.32s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1360n2] | 2m 57.97s | 2m 57.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_min_gas_balanced] | 2m 54.81s | 2m 54.81s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_exp_208_gas_balanced] | 2m 53.39s | 2m 53.39s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_40] | 2m 52.15s | 2m 52.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_996_gas_balanced] | 2m 51.62s | 2m 51.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_767_gas_balanced] | 2m 50.15s | 2m 50.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_600_gas_balanced] | 2m 45.61s | 2m 45.61s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_408_gas_balanced] | 2m 45.53s | 2m 45.53s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1152n1] | 2m 45.47s | 2m 45.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_36] | 2m 44.01s | 2m 44.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_64b_exp_512] | 2m 36.75s | 2m 36.75s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_pairing_check] | 2m 34.10s | 2m 34.10s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_64b_exp_512] | 2m 32.78s | 2m 32.78s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_2_square] | 2m 32.26s | 2m 32.26s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_32] | 2m 28.80s | 2m 28.80s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 2m 22.82s | 2m 22.82s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 2m 22.50s | 2m 22.50s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_255] | 2m 17.96s | 2m 17.96s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_255] | 2m 17.27s | 2m 17.27s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_255] | 2m 16.45s | 2m 16.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 2m 13.34s | 2m 13.34s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_200n3] | 2m 13.23s | 2m 13.23s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_200n2] | 2m 12.97s | 2m 12.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_128b_exp_1024] | 2m 12.42s | 2m 12.42s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_128b_exp_1024] | 2m 10.19s | 2m 10.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 2m 1.04s | 2m 1.04s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_200n1] | 1m 56.97s | 1m 56.97s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_4_pair] | 1m 46.24s | 1m 46.24s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_2_pair] | 1m 42.75s | 1m 42.75s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_two_pairings] | 1m 41.72s | 1m 41.72s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_one_pairing] | 1m 41.49s | 1m 41.49s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_5_pair] | 1m 41.01s | 1m 41.01s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 1m 40.74s | 1m 40.74s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CALL] | 1m 38.16s | 1m 38.16s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_STATICCALL] | 1m 38.05s | 1m 38.05s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DELEGATECALL] | 1m 37.48s | 1m 37.48s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXTCODESIZE] | 1m 37.37s | 1m 37.37s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXTCODEHASH] | 1m 36.64s | 1m 36.64s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 1m 36.30s | 1m 36.30s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CALLCODE] | 1m 36.20s | 1m 36.20s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXTCODECOPY] | 1m 34.31s | 1m 34.31s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_256b_exp_1024] | 1m 31.82s | 1m 31.82s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_256b_exp_1024] | 1m 30.92s | 1m 30.92s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXP-] | 1m 30.36s | 1m 30.36s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_fp_to_g2] | 1m 29.77s | 1m 29.77s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 1m 21.00s | 1m 21.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_1_qube] | 1m 20.25s | 1m 20.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_guido_3_even] | 1m 17.86s | 1m 17.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_1_square] | 1m 12.54s | 1m 12.54s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PREVRANDAO] | 1m 3.77s | 1m 3.77s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_1M-blockchain_test-ecrecover] | 55.80s | 55.80s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_STATICCALL] | 54.81s | 54.81s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_CALL] | 54.06s | 54.06s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_1M-blockchain_test-contract_balance_0] | 53.32s | 53.32s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_CALLCODE] | 53.11s | 53.11s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_1M-blockchain_test-contract_balance_1] | 53.09s | 53.09s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 53.03s | 53.03s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_CALL] | 52.79s | 52.79s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-empty-opcode_REVERT] | 52.19s | 52.19s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_CALLCODE] | 52.08s | 52.08s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of zero data-opcode_REVERT] | 51.79s | 51.79s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_STATICCALL] | 51.65s | 51.65s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of zero data-opcode_RETURN] | 51.38s | 51.38s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_add_infinities] | 51.22s | 51.22s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SIGNEXTEND-] | 50.92s | 50.92s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 50.87s | 50.87s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 50.56s | 50.56s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_fp_to_g1] | 50.49s | 50.49s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-empty-opcode_RETURN] | 50.05s | 50.05s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 49.11s | 49.11s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero-loop] | 48.90s | 48.90s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 48.80s | 48.80s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0 bytes] | 48.09s | 48.09s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0 bytes] | 47.31s | 47.31s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SAR-] | 47.25s | 47.25s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_1M-blockchain_test-one-loop] | 47.05s | 47.05s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_1M-blockchain_test-empty] | 43.62s | 43.62s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-0 bytes] | 42.00s | 42.00s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_1M-blockchain_test-shift_right_SAR] | 41.59s | 41.59s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 41.23s | 41.23s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 40.68s | 40.68s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 40.49s | 40.49s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EQ-] | 40.19s | 40.19s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SHL-] | 39.73s | 39.73s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 39.56s | 39.56s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 39.19s | 39.19s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-5b] | 38.19s | 38.19s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-100 bytes] | 37.34s | 37.34s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 37.22s | 37.22s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_1M-blockchain_test-shift_right_SHR] | 35.69s | 35.69s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH27] | 35.13s | 35.13s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH24] | 34.84s | 34.84s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul] | 34.80s | 34.80s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH25] | 34.77s | 34.77s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH26] | 34.45s | 34.45s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SHR-] | 34.22s | 34.22s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 34.03s | 34.03s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 33.96s | 33.96s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 33.26s | 33.26s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_1_exp_heavy] | 33.07s | 33.07s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH23] | 32.51s | 32.51s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_MUL-] | 31.39s | 31.39s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_ORIGIN] | 31.22s | 31.22s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH31] | 31.20s | 31.20s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH20] | 31.09s | 31.09s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-SSTORE new value] | 31.02s | 31.02s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_COINBASE] | 30.91s | 30.91s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH30] | 30.86s | 30.86s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 30.86s | 30.86s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH21] | 30.82s | 30.82s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-100 bytes] | 30.75s | 30.75s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_ADDRESS] | 30.64s | 30.64s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CALLER] | 30.60s | 30.60s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 30.60s | 30.60s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 30.58s | 30.58s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH22] | 30.55s | 30.55s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 30.47s | 30.47s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 30.34s | 30.34s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH32] | 30.23s | 30.23s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 30.20s | 30.20s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 30.06s | 30.06s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH29] | 29.99s | 29.99s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 29.91s | 29.91s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 29.91s | 29.91s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH18] | 29.76s | 29.76s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 29.69s | 29.69s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH28] | 29.52s | 29.52s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 29.50s | 29.50s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 29.26s | 29.26s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH19] | 29.12s | 29.12s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH15] | 28.82s | 28.82s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH16] | 28.80s | 28.80s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-605b5b] | 28.65s | 28.65s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH17] | 28.58s | 28.58s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 28.53s | 28.53s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-max code size] | 28.41s | 28.41s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH14] | 27.73s | 27.73s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-one blob and accessed] | 27.54s | 27.54s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 27.26s | 27.26s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-six blobs, access latest] | 26.59s | 26.59s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH13] | 26.48s | 26.48s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-615b5b5b] | 26.19s | 26.19s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_GT-] | 26.04s | 26.04s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 25.80s | 25.80s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 25.79s | 25.79s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 25.75s | 25.75s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 25.70s | 25.70s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH12] | 25.62s | 25.62s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 25.57s | 25.57s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_BLOBBASEFEE] | 25.46s | 25.46s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH7] | 25.41s | 25.41s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP4] | 25.40s | 25.40s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 25.40s | 25.40s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 25.30s | 25.30s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 25.28s | 25.28s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH8] | 25.22s | 25.22s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 25.16s | 25.16s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH10] | 25.14s | 25.14s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 25.14s | 25.14s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-00] | 25.13s | 25.13s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 25.11s | 25.11s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 25.01s | 25.01s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 24.98s | 24.98s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 24.88s | 24.88s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 24.85s | 24.85s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH6] | 24.82s | 24.82s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_NUMBER] | 24.80s | 24.80s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_1000] | 24.76s | 24.76s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP10] | 24.74s | 24.74s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH9] | 24.69s | 24.69s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CHAINID] | 24.68s | 24.68s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_diff_acc_to_diff_acc] | 24.63s | 24.63s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP14] | 24.53s | 24.53s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP6] | 24.51s | 24.51s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP2] | 24.46s | 24.46s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_BASEFEE] | 24.45s | 24.45s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_LT-] | 24.45s | 24.45s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP9] | 24.41s | 24.41s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP8] | 24.39s | 24.39s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_MOD-] | 24.36s | 24.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH3] | 24.34s | 24.34s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH5] | 24.32s | 24.32s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 24.32s | 24.32s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP7] | 24.29s | 24.29s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH4] | 24.28s | 24.28s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-0 bytes] | 24.28s | 24.28s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP5] | 24.25s | 24.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 24.24s | 24.24s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP13] | 24.20s | 24.20s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP3] | 24.18s | 24.18s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP1] | 24.18s | 24.18s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 24.13s | 24.13s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_diff_acc_to_b] | 24.09s | 24.09s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP11] | 24.09s | 24.09s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP16] | 24.09s | 24.09s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-605b] | 24.06s | 24.06s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 24.02s | 24.02s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_GASLIMIT] | 24.01s | 24.01s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP12] | 23.99s | 23.99s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP15] | 23.88s | 23.88s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH11] | 23.72s | 23.72s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_GASPRICE] | 23.65s | 23.65s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_TIMESTAMP] | 23.61s | 23.61s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0 bytes] | 23.45s | 23.45s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 23.44s | 23.44s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 23.30s | 23.30s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0 bytes] | 23.09s | 23.09s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SLT-] | 23.09s | 23.09s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH0] | 23.08s | 23.08s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SUB-] | 23.03s | 23.03s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH2] | 22.97s | 22.97s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_BYTE-] | 22.93s | 22.93s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_a_to_diff_acc] | 22.81s | 22.81s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_1] | 22.81s | 22.81s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-615b5b] | 22.73s | 22.73s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 22.72s | 22.72s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SGT-] | 22.71s | 22.71s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_ADD-] | 22.69s | 22.69s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH1] | 22.65s | 22.65s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_0] | 22.64s | 22.64s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 22.44s | 22.44s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_a_to_a] | 22.42s | 22.42s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_a_to_b] | 22.35s | 22.35s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 22.26s | 22.26s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 22.25s | 22.25s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 22.24s | 22.24s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_OR-] | 22.21s | 22.21s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-no blobs] | 22.18s | 22.18s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-one blob but access non-existent index] | 22.09s | 22.09s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 22.01s | 22.01s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_XOR-] | 22.00s | 22.00s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-10KiB] | 22.00s | 22.00s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 21.97s | 21.97s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 21.92s | 21.92s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_AND-] | 21.82s | 21.82s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 21.79s | 21.79s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-SSTORE same value] | 21.70s | 21.70s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 21.63s | 21.63s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 21.62s | 21.62s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 21.57s | 21.57s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 21.53s | 21.53s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 21.42s | 21.42s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-100 bytes] | 21.36s | 21.36s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP15] | 21.36s | 21.36s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP9] | 21.31s | 21.31s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP6] | 21.30s | 21.30s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP8] | 21.13s | 21.13s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP7] | 21.10s | 21.10s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP14] | 21.03s | 21.03s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP3] | 20.95s | 20.95s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP1] | 20.92s | 20.92s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 20.82s | 20.82s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP10] | 20.81s | 20.81s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP12] | 20.77s | 20.77s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP13] | 20.76s | 20.76s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 20.62s | 20.62s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP2] | 20.45s | 20.45s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP11] | 20.44s | 20.44s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 20.43s | 20.43s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 20.43s | 20.43s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 20.38s | 20.38s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP5] | 20.33s | 20.33s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP4] | 20.31s | 20.31s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP16] | 20.23s | 20.23s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 20.08s | 20.08s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 20.01s | 20.01s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_True-non_zero_value_False] | 19.84s | 19.84s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB] | 19.84s | 19.84s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SMOD-] | 19.78s | 19.78s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_BALANCE] | 19.68s | 19.68s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_BALANCE] | 19.62s | 19.62s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-512] | 19.57s | 19.57s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_True-empty_authority_False] | 19.34s | 19.34s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_False-non_zero_value_True] | 19.33s | 19.33s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 19.27s | 19.27s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-100 bytes] | 19.25s | 19.25s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 19.24s | 19.24s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-5KiB] | 19.21s | 19.21s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_False-non_zero_value_False] | 19.16s | 19.16s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 19.14s | 19.14s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 19.08s | 19.08s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 19.04s | 19.04s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_1M-blockchain_test-calldata_length_10000] | 19.04s | 19.04s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 18.99s | 18.99s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_1M-blockchain_test-calldata_length_0] | 18.95s | 18.95s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_1M-blockchain_test-calldata_length_1000] | 18.85s | 18.85s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 18.84s | 18.84s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 18.80s | 18.80s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_False-empty_authority_False] | 18.76s | 18.76s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 18.68s | 18.68s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 18.66s | 18.66s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_True-non_zero_value_True] | 18.66s | 18.66s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 18.61s | 18.61s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE same value] | 18.57s | 18.57s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSLOAD] | 18.50s | 18.50s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 18.39s | 18.39s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 18.37s | 18.37s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_100000] | 18.28s | 18.28s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 18.16s | 18.16s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_True-empty_authority_True] | 18.11s | 18.11s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_False-empty_authority_True] | 18.04s | 18.04s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-SLOAD] | 17.79s | 17.79s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_True-key_mut_False] | 17.64s | 17.64s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_False-key_mut_True] | 17.37s | 17.37s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_False-key_mut_False] | 17.30s | 17.30s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-10KiB] | 17.24s | 17.24s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_True-key_mut_True] | 17.07s | 17.07s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 16.83s | 16.83s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-10KiB] | 16.75s | 16.75s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 16.70s | 16.70s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_zkevm_worst_case] | 16.68s | 16.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_example_2] | 16.54s | 16.54s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 16.32s | 16.32s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 16.18s | 16.18s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 16.04s | 16.04s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSLOAD] | 15.92s | 15.92s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 15.89s | 15.89s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_1_2_2_scalar] | 15.72s | 15.72s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE new value] | 15.46s | 15.46s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-10KiB] | 15.45s | 15.45s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 15.38s | 15.38s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 15.27s | 15.27s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 15.18s | 15.18s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_1M-blockchain_test-value_bearing_True] | 15.15s | 15.15s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 14.94s | 14.94s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 14.82s | 14.82s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-max code size] | 14.73s | 14.73s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 14.49s | 14.49s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 14.37s | 14.37s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_byte_True] | 14.12s | 14.12s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 13.74s | 13.74s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_True-key_mut_True] | 13.14s | 13.14s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 13.11s | 13.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 13.09s | 13.09s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_True-key_mut_False] | 13.09s | 13.09s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_False-key_mut_False] | 12.90s | 12.90s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_False-key_mut_True] | 12.64s | 12.64s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 12.61s | 12.61s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_1M-blockchain_test-value_bearing_False] | 12.52s | 12.52s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 12.43s | 12.43s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CREATE] | 12.34s | 12.34s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 12.12s | 12.12s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 12.01s | 12.01s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 11.93s | 11.93s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 11.91s | 11.91s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_1024b_exp_1024] | 11.91s | 11.91s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-1MiB] | 11.91s | 11.91s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 11.87s | 11.87s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 11.83s | 11.83s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 11.79s | 11.79s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 11.76s | 11.76s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-1MiB] | 11.76s | 11.76s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 11.74s | 11.74s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-1MiB] | 11.71s | 11.71s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 11.70s | 11.70s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 11.69s | 11.69s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 11.68s | 11.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 11.66s | 11.66s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 11.64s | 11.64s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g1msm] | 11.64s | 11.64s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 11.64s | 11.64s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-1MiB] | 11.64s | 11.64s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_1000000] | 11.62s | 11.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_1024b_exp_1024] | 11.61s | 11.61s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 11.60s | 11.60s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 11.60s | 11.60s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 11.59s | 11.59s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE new value] | 11.57s | 11.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 11.57s | 11.57s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 11.55s | 11.55s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 11.54s | 11.54s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 11.54s | 11.54s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_1_pair] | 11.53s | 11.53s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 11.52s | 11.52s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g2msm] | 11.50s | 11.50s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 11.49s | 11.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 11.48s | 11.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 11.44s | 11.44s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_True] | 11.43s | 11.43s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 11.43s | 11.43s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 11.43s | 11.43s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_3_pair] | 11.43s | 11.43s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 11.43s | 11.43s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_2_sets] | 11.42s | 11.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 11.42s | 11.42s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 11.41s | 11.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 11.40s | 11.40s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 11.40s | 11.40s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_1_pair_empty] | 11.39s | 11.39s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_byte_False] | 11.38s | 11.38s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 11.38s | 11.38s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 11.38s | 11.38s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 11.38s | 11.38s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 11.37s | 11.37s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 11.36s | 11.36s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 11.34s | 11.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 11.34s | 11.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 11.34s | 11.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 11.33s | 11.33s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 11.33s | 11.33s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 11.32s | 11.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 11.32s | 11.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 11.31s | 11.31s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes with value-opcode_CREATE] | 11.30s | 11.30s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 11.28s | 11.28s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CREATE2] | 11.27s | 11.27s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 11.26s | 11.26s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 11.26s | 11.26s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 11.24s | 11.24s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 11.23s | 11.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 11.23s | 11.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 11.22s | 11.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 11.22s | 11.22s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of zero data-opcode_REVERT] | 11.20s | 11.20s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of zero data-opcode_RETURN] | 11.19s | 11.19s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE same value] | 11.18s | 11.18s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 11.18s | 11.18s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_False] | 11.18s | 11.18s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 11.18s | 11.18s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 11.18s | 11.18s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 11.18s | 11.18s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 11.18s | 11.18s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 11.18s | 11.18s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 11.15s | 11.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_512b_exp_1024] | 11.14s | 11.14s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 11.14s | 11.14s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with zero data-opcode_CREATE] | 11.14s | 11.14s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_True] | 11.10s | 11.10s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_zero_input] | 11.10s | 11.10s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes without value-opcode_CREATE] | 11.09s | 11.09s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 11.09s | 11.09s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_512b_exp_1024] | 11.05s | 11.05s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 11.04s | 11.04s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 11.04s | 11.04s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 11.03s | 11.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 11.03s | 11.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 11.02s | 11.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 11.02s | 11.02s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 11.01s | 11.01s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 11.00s | 11.00s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 11.00s | 11.00s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes without value-opcode_CREATE2] | 10.98s | 10.98s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 10.98s | 10.98s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 10.97s | 10.97s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 10.96s | 10.96s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 10.95s | 10.95s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 10.88s | 10.88s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 10.85s | 10.85s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 10.83s | 10.83s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_False] | 10.81s | 10.81s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with zero data-opcode_CREATE2] | 10.81s | 10.81s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes with value-opcode_CREATE2] | 10.81s | 10.81s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 10.76s | 10.76s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_infinities_2_scalar] | 10.75s | 10.75s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 10.72s | 10.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 10.68s | 10.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 10.66s | 10.66s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 10.49s | 10.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 10.18s | 10.18s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 7.70s | 7.70s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| sp1-v5.2.3 | 533 | 533 | 0 | 0 |

---

## reth


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | sp1-v5.2.3<br/>(1.41MiB) | Avg |
|-----------|-----------|----------|
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_5_qube] | 23m 19.85s | 23m 19.85s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_4_qube] | 23m 1.39s | 23m 1.39s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_5_square] | 21m 15.96s | 21m 15.96s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_4_square] | 21m 0.94s | 21m 0.94s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_1024_exp_2] | 20m 59.64s | 20m 59.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_1045_gas_base_heavy] | 20m 23.19s | 20m 23.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_800_gas_base_heavy] | 20m 13.75s | 20m 13.75s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_867_gas_base_heavy] | 20m 3.32s | 20m 3.32s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_3_qube] | 19m 42.56s | 19m 42.56s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_616_gas_base_heavy] | 19m 37.55s | 19m 37.55s |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_1M-blockchain_test-point_evaluation] | 19m 31.25s | 19m 31.25s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_408_gas_base_heavy] | 18m 19.08s | 18m 19.08s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_3_square] | 18m 0.19s | 18m 0.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_264_exp_2] | 17m 51.32s | 17m 51.32s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_256_exp_2] | 17m 39.06s | 17m 39.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_min_gas_base_heavy] | 14m 49.52s | 14m 49.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_guido_3_even] | 11m 17.76s | 11m 17.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_8b_exp_896] | 10m 53.50s | 10m 53.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_exp_298_gas_exp_heavy] | 10m 35.27s | 10m 35.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_8_exp_896] | 10m 30.98s | 10m 30.98s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_1_exp_heavy] | 10m 9.48s | 10m 9.48s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_8_exp_648] | 9m 40.50s | 9m 40.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_exp_215_gas_exp_heavy] | 9m 38.40s | 9m 38.40s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_min_gas_exp_heavy] | 9m 27.84s | 9m 27.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_2_qube] | 7m 58.07s | 7m 58.07s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_fp_to_g1] | 7m 52.81s | 7m 52.81s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_2_square] | 7m 22.94s | 7m 22.94s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_pairing_check] | 7m 2.00s | 7m 2.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_800_gas_exp_heavy] | 6m 42.79s | 6m 42.79s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_852_gas_exp_heavy] | 6m 41.73s | 6m 41.73s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_600_gas_exp_heavy] | 6m 26.04s | 6m 26.04s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_16b_exp_320] | 6m 20.97s | 6m 20.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_pawel_2] | 6m 8.01s | 6m 8.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_400_gas_exp_heavy] | 6m 0.69s | 6m 0.69s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_guido_2_even] | 5m 54.01s | 5m 54.01s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 5m 49.15s | 5m 49.15s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_fp_to_g2] | 5m 37.31s | 5m 37.31s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_765_gas_exp_heavy] | 5m 16.86s | 5m 16.86s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_marius_1_even] | 5m 15.79s | 5m 15.79s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_24b_exp_168] | 5m 11.22s | 5m 11.22s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_pawel_3] | 5m 0.57s | 5m 0.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_32b_exp_256] | 4m 59.40s | 4m 59.40s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_32b_exp_256] | 4m 58.02s | 4m 58.02s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_1360_gas_balanced] | 4m 54.88s | 4m 54.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_example_1] | 4m 53.81s | 4m 53.81s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_zkevm_worst_case] | 4m 51.04s | 4m 51.04s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 4m 46.13s | 4m 46.13s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_32b_exp_96] | 4m 42.95s | 4m 42.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_677_gas_base_heavy] | 4m 41.45s | 4m 41.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_128] | 4m 41.14s | 4m 41.14s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_64b_exp_512] | 4m 39.96s | 4m 39.96s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_example_2] | 4m 39.89s | 4m 39.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_64b_exp_512] | 4m 35.65s | 4m 35.65s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g2add] | 4m 35.50s | 4m 35.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_32b_exp_96] | 4m 33.35s | 4m 33.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_pawel_4] | 4m 32.43s | 4m 32.43s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_3_exp_8] | 4m 31.62s | 4m 31.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_996_gas_balanced] | 4m 30.27s | 4m 30.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_65] | 4m 26.82s | 4m 26.82s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_767_gas_balanced] | 4m 25.87s | 4m 25.87s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_600_gas_balanced] | 4m 24.29s | 4m 24.29s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1360n1] | 4m 20.34s | 4m 20.34s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g1add] | 4m 19.99s | 4m 19.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 4m 18.58s | 4m 18.58s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_408_gas_balanced] | 4m 17.28s | 4m 17.28s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_128b_exp_1024] | 4m 16.70s | 4m 16.70s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_64] | 4m 15.30s | 4m 15.30s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_128b_exp_1024] | 4m 14.95s | 4m 14.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_32b_exp_40] | 4m 8.78s | 4m 8.78s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_min_gas_balanced] | 4m 7.06s | 4m 7.06s |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_1M-blockchain_test-blake2f] | 4m 0.55s | 4m 0.55s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1349n1] | 3m 57.84s | 3m 57.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1360n2] | 3m 56.20s | 3m 56.20s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_40] | 3m 51.63s | 3m 51.63s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_exp_208_gas_balanced] | 3m 50.41s | 3m 50.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_36] | 3m 44.62s | 3m 44.62s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 3m 41.06s | 3m 41.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 3m 40.80s | 3m 40.80s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_32b_exp_cover_windows] | 3m 37.57s | 3m 37.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 3m 33.85s | 3m 33.85s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 3m 32.87s | 3m 32.87s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_guido_1_even] | 3m 27.63s | 3m 27.63s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_32_exp_32] | 3m 17.57s | 3m 17.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 3m 14.52s | 3m 14.52s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_256b_exp_1024] | 3m 3.55s | 3m 3.55s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_256b_exp_1024] | 3m 2.98s | 3m 2.98s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_200n2] | 2m 51.30s | 2m 51.30s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_200n3] | 2m 50.16s | 2m 50.16s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_1152n1] | 2m 44.68s | 2m 44.68s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_1_qube] | 2m 40.28s | 2m 40.28s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_nagydani_1_square] | 2m 33.41s | 2m 33.41s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul] | 2m 23.61s | 2m 23.61s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 2m 19.96s | 2m 19.96s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 2m 18.50s | 2m 18.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_vul_common_200n1] | 2m 14.75s | 2m 14.75s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_191] | 2m 5.44s | 2m 5.44s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_255] | 2m 1.83s | 2m 1.83s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_4_pair] | 1m 46.28s | 1m 46.28s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_2_pair] | 1m 45.83s | 1m 45.83s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_two_pairings] | 1m 43.64s | 1m 43.64s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_one_pairing] | 1m 43.02s | 1m 43.02s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_5_pair] | 1m 41.48s | 1m 41.48s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CALLCODE] | 1m 40.04s | 1m 40.04s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CALL] | 1m 38.57s | 1m 38.57s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DELEGATECALL] | 1m 38.15s | 1m 38.15s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 1m 37.87s | 1m 37.87s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_1M-blockchain_test-contract_balance_0] | 1m 37.58s | 1m 37.58s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_1M-blockchain_test-contract_balance_1] | 1m 37.47s | 1m 37.47s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_STATICCALL] | 1m 37.11s | 1m 37.11s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXTCODEHASH] | 1m 36.12s | 1m 36.12s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXTCODESIZE] | 1m 35.88s | 1m 35.88s |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXTCODECOPY] | 1m 35.74s | 1m 35.74s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_127] | 1m 32.94s | 1m 32.94s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_191] | 1m 31.24s | 1m 31.24s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_191] | 1m 25.93s | 1m 25.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 1m 25.18s | 1m 25.18s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SDIV-1] | 1m 23.00s | 1m 23.00s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SDIV-0] | 1m 22.38s | 1m 22.38s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DIV-0] | 1m 14.60s | 1m 14.60s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MULMOD-mod_bits_63] | 1m 13.08s | 1m 13.08s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_127] | 1m 13.08s | 1m 13.08s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_127] | 1m 10.19s | 1m 10.19s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DIV-1] | 1m 8.70s | 1m 8.70s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_255] | 1m 8.50s | 1m 8.50s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_255] | 1m 6.75s | 1m 6.75s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_191] | 1m 6.03s | 1m 6.03s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_1M-blockchain_test-ecrecover] | 57.15s | 57.15s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_127] | 55.43s | 55.43s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_255] | 54.89s | 54.89s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_SMOD-mod_bits_63] | 51.50s | 51.50s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 50.95s | 50.95s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_MOD-mod_bits_63] | 49.76s | 49.76s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EXP-] | 47.92s | 47.92s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PREVRANDAO] | 43.56s | 43.56s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_add] | 41.73s | 41.73s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SGT-] | 41.43s | 41.43s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-op_ADDMOD-mod_bits_63] | 41.37s | 41.37s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_add_1_2] | 39.83s | 39.83s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_EQ-] | 39.17s | 39.17s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 38.15s | 38.15s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero-loop] | 38.05s | 38.05s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_1M-blockchain_test-one-loop] | 37.34s | 37.34s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP7] | 36.68s | 36.68s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP2] | 36.64s | 36.64s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP8] | 36.54s | 36.54s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-empty-opcode_REVERT] | 36.48s | 36.48s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP4] | 36.42s | 36.42s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP10] | 36.39s | 36.39s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP12] | 36.20s | 36.20s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP5] | 36.18s | 36.18s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP9] | 36.17s | 36.17s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP6] | 36.08s | 36.08s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP13] | 36.07s | 36.07s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SMOD-] | 36.07s | 36.07s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP3] | 36.07s | 36.07s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP15] | 35.91s | 35.91s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP14] | 35.85s | 35.85s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 35.80s | 35.80s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP16] | 35.74s | 35.74s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_STATICCALL] | 35.69s | 35.69s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP1] | 35.58s | 35.58s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_ADDRESS] | 35.56s | 35.56s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_ORIGIN] | 35.51s | 35.51s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_CALL] | 35.36s | 35.36s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SWAP11] | 35.14s | 35.14s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CALLER] | 35.02s | 35.02s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_CALLCODE] | 34.63s | 34.63s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_COINBASE] | 34.59s | 34.59s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-empty-opcode_RETURN] | 34.02s | 34.02s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_MOD-] | 33.14s | 33.14s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SAR-] | 33.06s | 33.06s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_CALLCODE] | 32.70s | 32.70s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_1M-blockchain_test-empty] | 32.21s | 32.21s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_CALL] | 31.94s | 31.94s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_1M-blockchain_test-shift_right_SAR] | 31.91s | 31.91s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 31.80s | 31.80s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_BLOBBASEFEE] | 31.27s | 31.27s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_STATICCALL] | 31.24s | 31.24s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_MUL-] | 30.83s | 30.83s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_1M-blockchain_test-shift_right_SHR] | 30.53s | 30.53s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH32] | 30.43s | 30.43s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of zero data-opcode_REVERT] | 30.08s | 30.08s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SHR-] | 30.04s | 30.04s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH30] | 29.97s | 29.97s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH31] | 29.95s | 29.95s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_GASPRICE] | 29.91s | 29.91s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SHL-] | 29.66s | 29.66s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-SSTORE new value] | 29.26s | 29.26s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH28] | 29.06s | 29.06s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH29] | 28.82s | 28.82s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of zero data-opcode_RETURN] | 28.78s | 28.78s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 28.64s | 28.64s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SIGNEXTEND-] | 28.60s | 28.60s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH27] | 28.49s | 28.49s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 28.11s | 28.11s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH25] | 28.03s | 28.03s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_NUMBER] | 28.01s | 28.01s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH24] | 27.89s | 27.89s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_TIMESTAMP] | 27.80s | 27.80s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-0 bytes] | 27.67s | 27.67s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH23] | 27.55s | 27.55s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 27.55s | 27.55s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH22] | 27.30s | 27.30s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 27.12s | 27.12s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0 bytes] | 27.07s | 27.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 26.98s | 26.98s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 26.92s | 26.92s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-one blob and accessed] | 26.92s | 26.92s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH26] | 26.91s | 26.91s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0 bytes] | 26.89s | 26.89s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 26.86s | 26.86s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 26.71s | 26.71s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 26.62s | 26.62s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 26.61s | 26.61s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 26.49s | 26.49s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 26.48s | 26.48s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 26.45s | 26.45s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 26.44s | 26.44s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 26.41s | 26.41s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 26.39s | 26.39s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_BASEFEE] | 26.37s | 26.37s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_1] | 26.34s | 26.34s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH21] | 26.23s | 26.23s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 26.12s | 26.12s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 26.09s | 26.09s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_True-key_mut_True] | 26.09s | 26.09s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 26.02s | 26.02s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CHAINID] | 25.99s | 25.99s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-six blobs, access latest] | 25.99s | 25.99s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_True-key_mut_False] | 25.92s | 25.92s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_0] | 25.87s | 25.87s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 25.83s | 25.83s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH0] | 25.69s | 25.69s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_GASLIMIT] | 25.62s | 25.62s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_add_infinities] | 25.61s | 25.61s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 25.45s | 25.45s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH20] | 25.30s | 25.30s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH19] | 25.16s | 25.16s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_True-non_zero_value_False] | 24.87s | 24.87s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_1000] | 24.79s | 24.79s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 24.76s | 24.76s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-100 bytes] | 24.72s | 24.72s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH17] | 24.61s | 24.61s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH16] | 24.57s | 24.57s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH18] | 24.54s | 24.54s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_False-non_zero_value_False] | 24.51s | 24.51s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH15] | 24.48s | 24.48s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-100 bytes] | 24.47s | 24.47s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 24.19s | 24.19s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-0 bytes] | 24.19s | 24.19s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH14] | 24.18s | 24.18s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_diff_acc_to_b] | 24.18s | 24.18s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_diff_acc_to_diff_acc] | 24.04s | 24.04s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_True-non_zero_value_True] | 24.03s | 24.03s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 23.83s | 23.83s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_1M-blockchain_test-from_origin_False-non_zero_value_True] | 23.80s | 23.80s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 23.77s | 23.77s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 23.74s | 23.74s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH13] | 23.74s | 23.74s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 23.71s | 23.71s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 23.70s | 23.70s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 23.66s | 23.66s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 23.60s | 23.60s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 23.46s | 23.46s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-SSTORE same value] | 23.46s | 23.46s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 23.45s | 23.45s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 23.44s | 23.44s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 23.43s | 23.43s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_a_to_diff_acc] | 23.42s | 23.42s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH11] | 23.40s | 23.40s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH12] | 23.34s | 23.34s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 23.32s | 23.32s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 23.29s | 23.29s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SLT-] | 23.20s | 23.20s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 23.16s | 23.16s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_a_to_a] | 23.05s | 23.05s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_SUB-] | 23.04s | 23.04s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 23.02s | 23.02s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_1M-blockchain_test-calldata_length_0] | 23.00s | 23.00s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_1M-blockchain_test-case_id_a_to_b] | 22.97s | 22.97s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 22.92s | 22.92s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_ADD-] | 22.54s | 22.54s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-10KiB] | 22.53s | 22.53s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 22.45s | 22.45s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 22.30s | 22.30s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 22.26s | 22.26s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 22.23s | 22.23s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 22.23s | 22.23s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_1M-blockchain_test-calldata_length_10000] | 22.14s | 22.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 22.13s | 22.13s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH7] | 22.13s | 22.13s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 22.07s | 22.07s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_GT-] | 22.04s | 22.04s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 21.94s | 21.94s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 21.92s | 21.92s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_AND-] | 21.86s | 21.86s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_BYTE-] | 21.73s | 21.73s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 21.66s | 21.66s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_1M-blockchain_test-calldata_length_1000] | 21.65s | 21.65s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 21.62s | 21.62s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-5b] | 21.52s | 21.52s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH8] | 21.49s | 21.49s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_1M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 21.46s | 21.46s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 21.45s | 21.45s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 21.43s | 21.43s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_OR-] | 21.35s | 21.35s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP14] | 21.33s | 21.33s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_LT-] | 21.33s | 21.33s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH10] | 21.32s | 21.32s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 21.25s | 21.25s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 21.24s | 21.24s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 21.21s | 21.21s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 21.17s | 21.17s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_False-empty_authority_False] | 21.09s | 21.09s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH6] | 21.02s | 21.02s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 21.01s | 21.01s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP15] | 21.00s | 21.00s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH9] | 21.00s | 21.00s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0 bytes] | 20.99s | 20.99s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0 bytes] | 20.96s | 20.96s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_XOR-] | 20.96s | 20.96s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP13] | 20.95s | 20.95s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 20.89s | 20.89s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_True-empty_authority_True] | 20.89s | 20.89s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_False-empty_authority_True] | 20.88s | 20.88s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP16] | 20.87s | 20.87s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH4] | 20.86s | 20.86s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP3] | 20.80s | 20.80s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_delegation_True-empty_authority_False] | 20.79s | 20.79s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 20.73s | 20.73s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP12] | 20.73s | 20.73s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 20.72s | 20.72s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP10] | 20.71s | 20.71s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP11] | 20.70s | 20.70s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP6] | 20.61s | 20.61s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_1M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 20.47s | 20.47s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP5] | 20.41s | 20.41s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP8] | 20.23s | 20.23s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP2] | 20.20s | 20.20s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-100 bytes] | 20.17s | 20.17s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP4] | 20.16s | 20.16s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-no blobs] | 20.14s | 20.14s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP7] | 20.13s | 20.13s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 20.10s | 20.10s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP9] | 20.08s | 20.08s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH5] | 20.06s | 20.06s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 19.90s | 19.90s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH3] | 19.90s | 19.90s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_DUP1] | 19.72s | 19.72s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 19.68s | 19.68s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-100 bytes] | 19.61s | 19.61s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_1M-blockchain_test-one blob but access non-existent index] | 19.58s | 19.58s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 19.52s | 19.52s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 19.48s | 19.48s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH2] | 19.48s | 19.48s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 19.24s | 19.24s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-10KiB] | 19.21s | 19.21s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-10KiB] | 19.19s | 19.19s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_True-opcode_BALANCE] | 19.03s | 19.03s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 19.02s | 19.02s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_False-key_mut_True] | 18.72s | 18.72s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_PUSH1] | 18.57s | 18.57s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-605b5b] | 18.46s | 18.46s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-00] | 18.29s | 18.29s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_1M-blockchain_test-dense_val_mut_False-key_mut_False] | 17.99s | 17.99s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-615b5b5b] | 17.88s | 17.88s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 17.54s | 17.54s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-max code size] | 17.27s | 17.27s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-SLOAD] | 17.24s | 17.24s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-1KiB] | 17.23s | 17.23s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 17.21s | 17.21s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 17.04s | 17.04s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-605b] | 17.01s | 17.01s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_BALANCE] | 17.01s | 17.01s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 16.91s | 16.91s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_1M-blockchain_test-615b5b] | 16.90s | 16.90s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 16.81s | 16.81s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 16.77s | 16.77s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 16.72s | 16.72s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 16.67s | 16.67s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-512] | 16.67s | 16.67s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 16.62s | 16.62s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 16.55s | 16.55s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSLOAD] | 16.37s | 16.37s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE same value] | 16.24s | 16.24s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_2_sets] | 16.14s | 16.14s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 15.99s | 15.99s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-max code size] | 15.99s | 15.99s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-10KiB] | 15.72s | 15.72s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 15.69s | 15.69s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 15.62s | 15.62s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_1M-blockchain_test-5KiB] | 15.60s | 15.60s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 15.59s | 15.59s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 15.38s | 15.38s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 15.29s | 15.29s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 15.26s | 15.26s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 15.22s | 15.22s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_infinities_2_scalar] | 15.22s | 15.22s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE new value] | 15.14s | 15.14s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 15.04s | 15.04s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_1M-blockchain_test-value_bearing_True] | 15.03s | 15.03s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 14.73s | 14.73s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSLOAD] | 14.72s | 14.72s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-bn128_mul_1_2_2_scalar] | 14.71s | 14.71s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_False-key_mut_True] | 14.13s | 14.13s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_True-key_mut_True] | 14.07s | 14.07s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_1M-blockchain_test-value_bearing_False] | 14.00s | 14.00s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 13.86s | 13.86s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 13.81s | 13.81s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_byte_True] | 13.79s | 13.79s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_100000] | 13.56s | 13.56s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_True-key_mut_False] | 13.55s | 13.55s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_1M-blockchain_test-val_mut_False-key_mut_False] | 13.55s | 13.55s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 13.53s | 13.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 13.36s | 13.36s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 13.15s | 13.15s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 13.12s | 13.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 13.06s | 13.06s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE new value] | 13.02s | 13.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 12.99s | 12.99s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 12.98s | 12.98s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 12.96s | 12.96s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 12.95s | 12.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_1024b_exp_1024] | 12.90s | 12.90s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes with value-opcode_CREATE] | 12.87s | 12.87s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 12.80s | 12.80s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_True-1MiB] | 12.71s | 12.71s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_True-1MiB] | 12.70s | 12.70s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes without value-opcode_CREATE] | 12.70s | 12.70s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 12.70s | 12.70s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 12.69s | 12.69s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_1_pair] | 12.68s | 12.68s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 12.68s | 12.68s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_src_dst_False-1MiB] | 12.66s | 12.66s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 12.65s | 12.65s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 12.63s | 12.63s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 12.59s | 12.59s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_3_pair] | 12.57s | 12.57s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 12.53s | 12.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 12.52s | 12.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 12.52s | 12.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 12.52s | 12.52s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CREATE2] | 12.51s | 12.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 12.51s | 12.51s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_dst_False-1MiB] | 12.49s | 12.49s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 12.48s | 12.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 12.47s | 12.47s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 12.46s | 12.46s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 12.45s | 12.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_even_512b_exp_1024] | 12.45s | 12.45s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 12.45s | 12.45s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_zero_input] | 12.44s | 12.44s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 12.44s | 12.44s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 12.44s | 12.44s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 12.42s | 12.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 12.42s | 12.42s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_True] | 12.42s | 12.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes without value-opcode_CREATE2] | 12.41s | 12.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 12.40s | 12.40s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 12.40s | 12.40s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0 bytes with value-opcode_CREATE2] | 12.39s | 12.39s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with zero data-opcode_CREATE] | 12.38s | 12.38s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 12.37s | 12.37s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 12.37s | 12.37s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 12.37s | 12.37s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 12.37s | 12.37s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 12.36s | 12.36s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE same value] | 12.36s | 12.36s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_1024b_exp_1024] | 12.36s | 12.36s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 12.35s | 12.35s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 12.35s | 12.35s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 12.34s | 12.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 12.34s | 12.34s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g2msm] | 12.33s | 12.33s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 12.33s | 12.33s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 12.31s | 12.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 12.28s | 12.28s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 12.25s | 12.25s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 12.24s | 12.24s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 12.24s | 12.24s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 12.24s | 12.24s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 12.23s | 12.23s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 12.22s | 12.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 12.21s | 12.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 12.21s | 12.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 12.19s | 12.19s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 12.19s | 12.19s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_1M-blockchain_test-bls12_g1msm] | 12.19s | 12.19s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 12.18s | 12.18s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 12.18s | 12.18s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_1M-blockchain_test-mod_odd_512b_exp_1024] | 12.17s | 12.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 12.16s | 12.16s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_1M-blockchain_test-opcode_CREATE] | 12.15s | 12.15s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with zero data-opcode_CREATE2] | 12.15s | 12.15s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_1M-blockchain_test-ec_pairing_1_pair_empty] | 12.14s | 12.14s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of zero data-opcode_RETURN] | 12.14s | 12.14s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 12.13s | 12.13s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 12.13s | 12.13s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 12.11s | 12.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 12.07s | 12.07s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 12.07s | 12.07s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 12.06s | 12.06s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 12.06s | 12.06s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_1M-blockchain_test-zero_byte_False] | 12.04s | 12.04s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 12.02s | 12.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 11.98s | 11.98s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of zero data-opcode_REVERT] | 11.97s | 11.97s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 11.96s | 11.96s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 11.96s | 11.96s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 11.89s | 11.89s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 11.88s | 11.88s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 11.88s | 11.88s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 11.87s | 11.87s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_True] | 11.86s | 11.86s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 11.86s | 11.86s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_False] | 11.85s | 11.85s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_1M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 11.81s | 11.81s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 11.76s | 11.76s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 11.76s | 11.76s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 11.75s | 11.75s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_1M-blockchain_test-mem_size_1000000] | 11.75s | 11.75s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_1M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 11.73s | 11.73s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_1M-blockchain_test_from_state_test-value_bearing_False] | 11.73s | 11.73s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 11.73s | 11.73s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_1M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 11.72s | 11.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 11.68s | 11.68s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_1M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 11.67s | 11.67s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 11.56s | 11.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 11.56s | 11.56s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 11.51s | 11.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 11.50s | 11.50s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_1M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 11.19s | 11.19s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_1M-blockchain_test] | 8.96s | 8.96s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| sp1-v5.2.3 | 533 | 533 | 0 | 0 |

---

