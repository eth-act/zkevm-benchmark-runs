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

| Test Case | sp1-v5.2.2<br/>(1.41MiB) | zisk-v0.13.0<br/>(244.02KiB) | Avg |
|-----------|-----------|-----------|----------|
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODECOPY] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODEHASH] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXTCODESIZE] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_10M-blockchain_test-blake2f] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_fp_to_g1] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g1add] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_pairing_check] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_1024_exp_2] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_1045_gas_base_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_1360_gas_balanced] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_256_exp_2] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_264_exp_2] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_128] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_32] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_36] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_64] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_65] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_400_gas_exp_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_408_gas_balanced] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_408_gas_base_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_616_gas_base_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_677_gas_base_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_765_gas_exp_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_767_gas_balanced] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_800_gas_base_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_800_gas_exp_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_852_gas_exp_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_867_gas_base_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_8_exp_648] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_8_exp_896] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_128b_exp_1024] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_16b_exp_320] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_24b_exp_168] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_256b_exp_1024] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_32b_exp_256] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_32b_exp_40] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_32b_exp_96] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_64b_exp_512] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_exp_208_gas_balanced] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_exp_215_gas_exp_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_exp_298_gas_exp_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_min_gas_balanced] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_min_gas_base_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_min_gas_exp_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_128b_exp_1024] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_32b_exp_96] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_32b_exp_cover_windows] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_64b_exp_512] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_pawel_2] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_pawel_3] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_pawel_4] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1360n1] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1360n2] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_200n1] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_example_2] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_guido_1_even] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_guido_3_even] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_marius_1_even] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_2_qube] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_2_square] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_3_qube] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_3_square] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_4_qube] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_4_square] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_5_qube] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_5_square] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_1_exp_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_2_exp_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_3_exp_8] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_3_exp_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_pawel_4_exp_heavy] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_zkevm_worst_case] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_10M-blockchain_test-point_evaluation] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes with value-opcode_CREATE2] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes with value-opcode_CREATE] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALL] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DELEGATECALL] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_STATICCALL] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_8b_exp_896] | 1h 47m 53.36s | ❌ SDK Crash | 1h 47m 53.36s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_600_gas_exp_heavy] | 1h 4m 1.15s | ❌ SDK Crash | 1h 4m 1.15s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_guido_2_even] | 58m 40.96s | ❌ SDK Crash | 58m 40.96s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_32b_exp_256] | 50m 5.00s | ❌ SDK Crash | 50m 5.00s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_example_1] | 48m 53.48s | ❌ SDK Crash | 48m 53.48s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g2add] | 45m 8.66s | ❌ SDK Crash | 45m 8.66s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_600_gas_balanced] | 43m 46.76s | ❌ SDK Crash | 43m 46.76s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_996_gas_balanced] | 42m 45.41s | ❌ SDK Crash | 42m 45.41s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_256b_exp_1024] | 40m 44.43s | ❌ SDK Crash | 40m 44.43s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1349n1] | 39m 11.38s | ❌ SDK Crash | 39m 11.38s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_32_exp_40] | 37m 51.47s | ❌ SDK Crash | 37m 51.47s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_200n3] | 27m 36.31s | 9m 16.14s | 18m 26.22s |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALLCODE] | 14m 41.45s | ❌ SDK Crash | 14m 41.45s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_1024b_exp_1024] | 23m 0.47s | 5m 50.15s | 14m 25.31s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_10M-blockchain_test-contract_balance_1] | ❌ SDK Crash | 12m 16.49s | 12m 16.49s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_fp_to_g2] | ❌ SDK Crash | 11m 57.54s | 11m 57.54s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul] | 22m 22.77s | 25.28s | 11m 24.02s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_1152n1] | ❌ SDK Crash | 11m 8.99s | 11m 8.99s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 21m 37.46s | 24.81s | 11m 1.14s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | ❌ SDK Crash | 10m 28.85s | 10m 28.85s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_512b_exp_1024] | ❌ SDK Crash | 10m 16.23s | 10m 16.23s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_odd_512b_exp_1024] | ❌ SDK Crash | 10m 13.91s | 10m 13.91s |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_10M-blockchain_test-contract_balance_0] | ❌ SDK Crash | 10m 8.42s | 10m 8.42s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | ❌ SDK Crash | 9m 56.44s | 9m 56.44s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | ❌ SDK Crash | 9m 37.43s | 9m 37.43s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | ❌ SDK Crash | 9m 17.10s | 9m 17.10s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_common_200n2] | ❌ SDK Crash | 9m 11.57s | 9m 11.57s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g1msm] | ❌ SDK Crash | 7m 54.35s | 7m 54.35s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_1_qube] | ❌ SDK Crash | 7m 41.97s | 7m 41.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_vul_nagydani_1_square] | ❌ SDK Crash | 7m 17.03s | 7m 17.03s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_191] | 9m 31.86s | 3m 46.92s | 6m 39.39s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_191] | ❌ SDK Crash | 6m 21.87s | 6m 21.87s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_255] | ❌ SDK Crash | 6m 12.19s | 6m 12.19s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test-mod_even_1024b_exp_1024] | ❌ SDK Crash | 5m 50.23s | 5m 50.23s |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_10M-blockchain_test-bls12_g2msm] | ❌ SDK Crash | 5m 47.13s | 5m 47.13s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PREVRANDAO] | 5m 33.05s | 5m 33.62s | 5m 33.33s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP8] | ❌ SDK Crash | 5m 18.95s | 5m 18.95s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_127] | ❌ SDK Crash | 4m 43.50s | 4m 43.50s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_191] | ❌ SDK Crash | 4m 38.44s | 4m 38.44s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 4m 36.00s | 4m 36.00s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_191] | ❌ SDK Crash | 4m 25.89s | 4m 25.89s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP3] | ❌ SDK Crash | 4m 24.05s | 4m 24.05s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_add] | ❌ SDK Crash | 4m 16.39s | 4m 16.39s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP5] | ❌ SDK Crash | 4m 9.73s | 4m 9.73s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SDIV-1] | ❌ SDK Crash | 4m 6.69s | 4m 6.69s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP11] | ❌ SDK Crash | 4m 2.67s | 4m 2.67s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MULMOD-mod_bits_63] | ❌ SDK Crash | 4m 0.69s | 4m 0.69s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SDIV-0] | ❌ SDK Crash | 3m 59.60s | 3m 59.60s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP14] | ❌ SDK Crash | 3m 58.92s | 3m 58.92s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP9] | ❌ SDK Crash | 3m 58.17s | 3m 58.17s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP2] | 4m 5.03s | 3m 51.27s | 3m 58.15s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_add_1_2] | ❌ SDK Crash | 3m 57.94s | 3m 57.94s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP7] | ❌ SDK Crash | 3m 57.08s | 3m 57.08s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP12] | ❌ SDK Crash | 3m 56.36s | 3m 56.36s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP10] | ❌ SDK Crash | 3m 56.15s | 3m 56.15s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP1] | ❌ SDK Crash | 3m 55.47s | 3m 55.47s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP13] | ❌ SDK Crash | 3m 53.37s | 3m 53.37s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP6] | ❌ SDK Crash | 3m 52.08s | 3m 52.08s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP15] | ❌ SDK Crash | 3m 46.52s | 3m 46.52s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP16] | ❌ SDK Crash | 3m 45.54s | 3m 45.54s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SWAP4] | ❌ SDK Crash | 3m 45.35s | 3m 45.35s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_255] | ❌ SDK Crash | 3m 45.27s | 3m 45.27s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DIV-0] | ❌ SDK Crash | 3m 34.71s | 3m 34.71s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_255] | ❌ SDK Crash | 3m 32.80s | 3m 32.80s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DIV-1] | ❌ SDK Crash | 3m 26.59s | 3m 26.59s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_255] | ❌ SDK Crash | 3m 24.28s | 3m 24.28s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH32] | 3m 9.72s | 3m 37.35s | 3m 23.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_CALLCODE] | 4m 2.32s | 2m 43.75s | 3m 23.04s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_CALL] | 4m 0.09s | 2m 45.15s | 3m 22.62s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_ORIGIN] | ❌ SDK Crash | 3m 21.31s | 3m 21.31s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_COINBASE] | ❌ SDK Crash | 3m 20.57s | 3m 20.57s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_ADDRESS] | ❌ SDK Crash | 3m 20.54s | 3m 20.54s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_127] | ❌ SDK Crash | 3m 20.23s | 3m 20.23s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH31] | ❌ SDK Crash | 3m 20.17s | 3m 20.17s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH30] | ❌ SDK Crash | 3m 16.97s | 3m 16.97s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH29] | ❌ SDK Crash | 3m 10.85s | 3m 10.85s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_127] | ❌ SDK Crash | 3m 8.00s | 3m 8.00s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH28] | ❌ SDK Crash | 3m 5.85s | 3m 5.85s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CALLER] | ❌ SDK Crash | 3m 4.85s | 3m 4.85s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-empty-opcode_REVERT] | ❌ SDK Crash | 3m 2.69s | 3m 2.69s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH27] | ❌ SDK Crash | 3m 2.46s | 3m 2.46s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_127] | ❌ SDK Crash | 3m 0.16s | 3m 0.16s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH26] | ❌ SDK Crash | 2m 54.47s | 2m 54.47s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH25] | ❌ SDK Crash | 2m 51.81s | 2m 51.81s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH24] | ❌ SDK Crash | 2m 49.92s | 2m 49.92s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test-one-loop] | ❌ SDK Crash | 2m 47.16s | 2m 47.16s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero-loop] | ❌ SDK Crash | 2m 45.68s | 2m 45.68s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_STATICCALL] | ❌ SDK Crash | 2m 45.60s | 2m 45.60s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-empty-opcode_RETURN] | ❌ SDK Crash | 2m 42.48s | 2m 42.48s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SGT-] | ❌ SDK Crash | 2m 39.42s | 2m 39.42s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-six blobs, access latest] | 2m 32.96s | 2m 38.76s | 2m 35.86s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_SMOD-mod_bits_63] | ❌ SDK Crash | 2m 35.66s | 2m 35.66s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH23] | ❌ SDK Crash | 2m 35.15s | 2m 35.15s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 2m 35.12s | 2m 35.12s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 3m 5.19s | 2m 4.13s | 2m 34.66s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH22] | ❌ SDK Crash | 2m 32.51s | 2m 32.51s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_ADDMOD-mod_bits_63] | ❌ SDK Crash | 2m 31.18s | 2m 31.18s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EQ-] | ❌ SDK Crash | 2m 28.34s | 2m 28.34s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_add_infinities] | 2m 30.45s | 2m 21.37s | 2m 25.91s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH21] | ❌ SDK Crash | 2m 25.26s | 2m 25.26s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_10M-blockchain_test-empty] | ❌ SDK Crash | 2m 24.21s | 2m 24.21s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_10M-blockchain_test-op_MOD-mod_bits_63] | ❌ SDK Crash | 2m 23.28s | 2m 23.28s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_STATICCALL] | ❌ SDK Crash | 2m 23.15s | 2m 23.15s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | ❌ SDK Crash | 2m 22.94s | 2m 22.94s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_CALLCODE] | ❌ SDK Crash | 2m 22.19s | 2m 22.19s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_CALL] | ❌ SDK Crash | 2m 21.94s | 2m 21.94s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH20] | ❌ SDK Crash | 2m 20.50s | 2m 20.50s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH19] | ❌ SDK Crash | 2m 16.99s | 2m 16.99s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-one blob and accessed] | ❌ SDK Crash | 2m 13.69s | 2m 13.69s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH18] | ❌ SDK Crash | 2m 8.38s | 2m 8.38s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH17] | ❌ SDK Crash | 2m 7.70s | 2m 7.70s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SMOD-] | ❌ SDK Crash | 2m 6.26s | 2m 6.26s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH16] | ❌ SDK Crash | 2m 3.71s | 2m 3.71s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 2m 35.05s | 1m 28.93s | 2m 1.99s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 2m 35.96s | 1m 26.30s | 2m 1.13s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of zero data-opcode_REVERT] | ❌ SDK Crash | 1m 59.70s | 1m 59.70s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 2m 9.61s | 1m 49.46s | 1m 59.54s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_True-key_mut_True] | 2m 27.61s | 1m 30.55s | 1m 59.08s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH15] | ❌ SDK Crash | 1m 56.66s | 1m 56.66s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SSTORE new value] | ❌ SDK Crash | 1m 56.51s | 1m 56.51s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH13] | 2m 5.29s | 1m 47.03s | 1m 56.16s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_1] | 2m 33.40s | 1m 18.57s | 1m 55.98s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH14] | ❌ SDK Crash | 1m 52.25s | 1m 52.25s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_MOD-] | ❌ SDK Crash | 1m 51.73s | 1m 51.73s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | ❌ SDK Crash | 1m 49.94s | 1m 49.94s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | ❌ SDK Crash | 1m 49.89s | 1m 49.89s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of zero data-opcode_RETURN] | ❌ SDK Crash | 1m 49.43s | 1m 49.43s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH11] | 2m 1.71s | 1m 36.94s | 1m 49.33s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | ❌ SDK Crash | 1m 49.03s | 1m 49.03s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | ❌ SDK Crash | 1m 48.68s | 1m 48.68s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | ❌ SDK Crash | 1m 48.66s | 1m 48.66s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | ❌ SDK Crash | 1m 48.55s | 1m 48.55s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | ❌ SDK Crash | 1m 47.61s | 1m 47.61s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | ❌ SDK Crash | 1m 47.53s | 1m 47.53s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | ❌ SDK Crash | 1m 47.44s | 1m 47.44s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | ❌ SDK Crash | 1m 47.14s | 1m 47.14s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | ❌ SDK Crash | 1m 46.98s | 1m 46.98s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-0 bytes] | 2m 17.57s | 1m 2.87s | 1m 40.22s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH12] | ❌ SDK Crash | 1m 40.14s | 1m 40.14s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_GASPRICE] | ❌ SDK Crash | 1m 39.76s | 1m 39.76s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH9] | 1m 43.66s | 1m 26.45s | 1m 35.06s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_one_pairing] | ❌ SDK Crash | 1m 34.78s | 1m 34.78s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_BLOBBASEFEE] | ❌ SDK Crash | 1m 31.99s | 1m 31.99s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | ❌ SDK Crash | 1m 31.31s | 1m 31.31s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_True-key_mut_False] | ❌ SDK Crash | 1m 30.32s | 1m 30.32s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH10] | ❌ SDK Crash | 1m 28.56s | 1m 28.56s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | ❌ SDK Crash | 1m 27.65s | 1m 27.65s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | ❌ SDK Crash | 1m 27.58s | 1m 27.58s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | ❌ SDK Crash | 1m 27.40s | 1m 27.40s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | ❌ SDK Crash | 1m 27.38s | 1m 27.38s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | ❌ SDK Crash | 1m 27.13s | 1m 27.13s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | ❌ SDK Crash | 1m 27.06s | 1m 27.06s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | ❌ SDK Crash | 1m 26.76s | 1m 26.76s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | ❌ SDK Crash | 1m 26.50s | 1m 26.50s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SAR-] | ❌ SDK Crash | 1m 26.37s | 1m 26.37s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | ❌ SDK Crash | 1m 26.03s | 1m 26.03s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | ❌ SDK Crash | 1m 26.02s | 1m 26.02s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH8] | ❌ SDK Crash | 1m 24.34s | 1m 24.34s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | ❌ SDK Crash | 1m 23.83s | 1m 23.83s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_NUMBER] | ❌ SDK Crash | 1m 22.95s | 1m 22.95s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH5] | 1m 33.36s | 1m 10.06s | 1m 21.71s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SSTORE same value] | ❌ SDK Crash | 1m 21.62s | 1m 21.62s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_two_pairings] | ❌ SDK Crash | 1m 20.95s | 1m 20.95s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 1m 20.91s | 1m 20.91s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_2_pair] | ❌ SDK Crash | 1m 20.81s | 1m 20.81s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 1m 20.39s | 1m 20.39s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH7] | ❌ SDK Crash | 1m 20.08s | 1m 20.08s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_TIMESTAMP] | ❌ SDK Crash | 1m 19.70s | 1m 19.70s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_0] | ❌ SDK Crash | 1m 19.33s | 1m 19.33s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 1m 18.25s | 1m 18.25s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CHAINID] | ❌ SDK Crash | 1m 18.02s | 1m 18.02s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_BASEFEE] | ❌ SDK Crash | 1m 17.59s | 1m 17.59s |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_10M-blockchain_test-ecrecover] | ❌ SDK Crash | 1m 17.26s | 1m 17.26s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_10M-blockchain_test-shift_right_SAR] | ❌ SDK Crash | 1m 17.19s | 1m 17.19s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_1000] | ❌ SDK Crash | 1m 16.75s | 1m 16.75s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH6] | ❌ SDK Crash | 1m 16.53s | 1m 16.53s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 1m 16.13s | 1m 16.13s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH0] | ❌ SDK Crash | 1m 15.65s | 1m 15.65s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_GASLIMIT] | ❌ SDK Crash | 1m 15.48s | 1m 15.48s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 1m 15.36s | 1m 15.36s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 1m 43.35s | 46.00s | 1m 14.68s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 1m 13.99s | 1m 13.99s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0 bytes] | 1m 43.06s | 44.74s | 1m 13.90s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | ❌ SDK Crash | 1m 12.31s | 1m 12.31s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_4_pair] | ❌ SDK Crash | 1m 11.47s | 1m 11.47s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-0 bytes] | ❌ SDK Crash | 1m 11.25s | 1m 11.25s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | ❌ SDK Crash | 1m 11.00s | 1m 11.00s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SHR-] | ❌ SDK Crash | 1m 10.97s | 1m 10.97s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_True-opcode_BALANCE] | 1m 23.95s | 57.16s | 1m 10.56s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | ❌ SDK Crash | 1m 10.42s | 1m 10.42s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-5b] | ❌ SDK Crash | 1m 10.11s | 1m 10.11s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_10M-blockchain_test-shift_right_SHR] | ❌ SDK Crash | 1m 10.10s | 1m 10.10s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP14] | 1m 37.07s | 43.03s | 1m 10.05s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP16] | 1m 35.26s | 43.87s | 1m 9.56s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP11] | 1m 34.84s | 43.93s | 1m 9.39s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | ❌ SDK Crash | 1m 9.09s | 1m 9.09s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | ❌ SDK Crash | 1m 8.30s | 1m 8.30s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-100 bytes] | ❌ SDK Crash | 1m 8.11s | 1m 8.11s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SHL-] | ❌ SDK Crash | 1m 8.03s | 1m 8.03s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-100 bytes] | ❌ SDK Crash | 1m 6.88s | 1m 6.88s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_diff_acc] | 1m 49.31s | 22.85s | 1m 6.08s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0 bytes] | ❌ SDK Crash | 1m 5.65s | 1m 5.65s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0 bytes] | ❌ SDK Crash | 1m 5.59s | 1m 5.59s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_5_pair] | ❌ SDK Crash | 1m 5.40s | 1m 5.40s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH4] | ❌ SDK Crash | 1m 4.25s | 1m 4.25s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_EXP-] | ❌ SDK Crash | 1m 2.29s | 1m 2.29s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SIGNEXTEND-] | ❌ SDK Crash | 1m 0.08s | 1m 0.08s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH3] | ❌ SDK Crash | 59.60s | 59.60s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 1m 8.71s | 50.25s | 59.48s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_True-non_zero_value_True] | ❌ SDK Crash | 58.62s | 58.62s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_True-non_zero_value_False] | ❌ SDK Crash | 58.39s | 58.39s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_False-non_zero_value_True] | ❌ SDK Crash | 58.09s | 58.09s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-one blob but access non-existent index] | ❌ SDK Crash | 58.01s | 58.01s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SLT-] | ❌ SDK Crash | 57.59s | 57.59s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_10M-blockchain_test-from_origin_False-non_zero_value_False] | ❌ SDK Crash | 57.38s | 57.38s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | ❌ SDK Crash | 55.65s | 55.65s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 55.48s | 55.48s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test-calldata_length_0] | ❌ SDK Crash | 55.04s | 55.04s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 1m 3.62s | 45.83s | 54.73s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test-calldata_length_1000] | ❌ SDK Crash | 54.61s | 54.61s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0.25x max code size] | ❌ SDK Crash | 54.20s | 54.20s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | ❌ SDK Crash | 54.20s | 54.20s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_10M-blockchain_test-no blobs] | ❌ SDK Crash | 54.09s | 54.09s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0.50x max code size] | ❌ SDK Crash | 54.05s | 54.05s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | ❌ SDK Crash | 54.00s | 54.00s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_10M-blockchain_test-calldata_length_10000] | ❌ SDK Crash | 53.95s | 53.95s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | ❌ SDK Crash | 53.87s | 53.87s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | ❌ SDK Crash | 53.60s | 53.60s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | ❌ SDK Crash | 53.58s | 53.58s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | ❌ SDK Crash | 53.57s | 53.57s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | ❌ SDK Crash | 53.49s | 53.49s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-max code size] | ❌ SDK Crash | 53.49s | 53.49s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-0.75x max code size] | ❌ SDK Crash | 53.48s | 53.48s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | ❌ SDK Crash | 53.47s | 53.47s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_10M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | ❌ SDK Crash | 53.36s | 53.36s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-1MiB] | 1m 19.49s | 26.44s | 52.96s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 52.94s | 52.94s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_MUL-] | ❌ SDK Crash | 52.92s | 52.92s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | ❌ SDK Crash | 52.83s | 52.83s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | ❌ SDK Crash | 50.80s | 50.80s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-100 bytes] | ❌ SDK Crash | 49.97s | 49.97s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-10KiB] | ❌ SDK Crash | 48.66s | 48.66s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | ❌ SDK Crash | 48.61s | 48.61s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_ADD-] | ❌ SDK Crash | 47.40s | 47.40s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_SUB-] | ❌ SDK Crash | 47.27s | 47.27s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | ❌ SDK Crash | 46.98s | 46.98s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_10M-blockchain_test-value_bearing_False] | ❌ SDK Crash | 46.87s | 46.87s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | ❌ SDK Crash | 46.51s | 46.51s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | ❌ SDK Crash | 46.40s | 46.40s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_BYTE-] | ❌ SDK Crash | 46.32s | 46.32s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | ❌ SDK Crash | 46.27s | 46.27s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0 bytes] | ❌ SDK Crash | 46.19s | 46.19s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | ❌ SDK Crash | 46.19s | 46.19s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | ❌ SDK Crash | 46.14s | 46.14s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | ❌ SDK Crash | 46.09s | 46.09s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | ❌ SDK Crash | 46.07s | 46.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | ❌ SDK Crash | 46.05s | 46.05s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_False-key_mut_True] | ❌ SDK Crash | 46.04s | 46.04s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | ❌ SDK Crash | 46.00s | 46.00s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | ❌ SDK Crash | 45.98s | 45.98s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH2] | ❌ SDK Crash | 45.97s | 45.97s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | ❌ SDK Crash | 45.93s | 45.93s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_10M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | ❌ SDK Crash | 45.73s | 45.73s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_target_False-opcode_BALANCE] | ❌ SDK Crash | 45.70s | 45.70s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_10M-blockchain_test-dense_val_mut_False-key_mut_False] | ❌ SDK Crash | 45.33s | 45.33s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-100 bytes] | ❌ SDK Crash | 44.90s | 44.90s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-10KiB] | ❌ SDK Crash | 44.32s | 44.32s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP12] | ❌ SDK Crash | 44.17s | 44.17s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP10] | ❌ SDK Crash | 44.08s | 44.08s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP15] | ❌ SDK Crash | 43.93s | 43.93s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP13] | ❌ SDK Crash | 43.89s | 43.89s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP8] | ❌ SDK Crash | 43.22s | 43.22s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP9] | ❌ SDK Crash | 43.17s | 43.17s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-605b5b] | ❌ SDK Crash | 43.08s | 43.08s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | ❌ SDK Crash | 42.88s | 42.88s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_PUSH1] | ❌ SDK Crash | 42.75s | 42.75s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP1] | ❌ SDK Crash | 42.67s | 42.67s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP7] | ❌ SDK Crash | 42.65s | 42.65s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP5] | ❌ SDK Crash | 42.45s | 42.45s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP3] | ❌ SDK Crash | 42.30s | 42.30s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP2] | ❌ SDK Crash | 42.20s | 42.20s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_LT-] | ❌ SDK Crash | 42.17s | 42.17s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP6] | ❌ SDK Crash | 42.11s | 42.11s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_DUP4] | ❌ SDK Crash | 41.89s | 41.89s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 41.84s | 41.84s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_OR-] | ❌ SDK Crash | 41.70s | 41.70s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_XOR-] | ❌ SDK Crash | 41.66s | 41.66s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_AND-] | ❌ SDK Crash | 41.66s | 41.66s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_GT-] | ❌ SDK Crash | 41.55s | 41.55s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 41.53s | 41.53s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_False-1MiB] | ❌ SDK Crash | 41.43s | 41.43s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-00] | ❌ SDK Crash | 41.24s | 41.24s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-SLOAD] | ❌ SDK Crash | 41.12s | 41.12s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | ❌ SDK Crash | 39.87s | 39.87s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 39.33s | 39.33s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-512] | ❌ SDK Crash | 38.41s | 38.41s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | ❌ SDK Crash | 38.23s | 38.23s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value, revert] | ❌ SDK Crash | 37.78s | 37.78s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 47.63s | 26.64s | 37.13s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE same value] | ❌ SDK Crash | 36.43s | 36.43s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-615b5b5b] | ❌ SDK Crash | 36.13s | 36.13s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSLOAD] | ❌ SDK Crash | 35.86s | 35.86s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-1KiB] | ❌ SDK Crash | 35.79s | 35.79s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_accounts_False-opcode_BALANCE] | ❌ SDK Crash | 35.21s | 35.21s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 34.97s | 34.97s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_True-key_mut_False] | ❌ SDK Crash | 32.71s | 32.71s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 32.52s | 32.52s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_True-key_mut_True] | ❌ SDK Crash | 31.52s | 31.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | ❌ SDK Crash | 31.16s | 31.16s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-10KiB] | ❌ SDK Crash | 30.89s | 30.89s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | ❌ SDK Crash | 30.70s | 30.70s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-605b] | ❌ SDK Crash | 30.29s | 30.29s |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 29.85s | 29.85s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_10M-blockchain_test-5KiB] | ❌ SDK Crash | 29.68s | 29.68s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_False-1MiB] | ❌ SDK Crash | 29.64s | 29.64s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value] | ❌ SDK Crash | 28.31s | 28.31s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_10M-blockchain_test-value_bearing_True] | ❌ SDK Crash | 28.14s | 28.14s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_diff_acc_to_diff_acc] | ❌ SDK Crash | 27.98s | 27.98s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | ❌ SDK Crash | 26.74s | 26.74s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | ❌ SDK Crash | 26.40s | 26.40s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-10KiB] | ❌ SDK Crash | 26.29s | 26.29s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-max code size] | ❌ SDK Crash | 26.27s | 26.27s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0.25x max code size] | ❌ SDK Crash | 26.09s | 26.09s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | ❌ SDK Crash | 26.01s | 26.01s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_src_dst_True-0.50x max code size] | ❌ SDK Crash | 25.95s | 25.95s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_10M-blockchain_test-615b5b] | ❌ SDK Crash | 25.66s | 25.66s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_byte_True] | ❌ SDK Crash | 25.65s | 25.65s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_diff_acc_to_b] | ❌ SDK Crash | 25.09s | 25.09s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | ❌ SDK Crash | 24.71s | 24.71s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 30.96s | 17.63s | 24.30s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 29.19s | 17.05s | 23.12s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSLOAD] | ❌ SDK Crash | 23.03s | 23.03s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_False-empty_authority_False] | ❌ SDK Crash | 22.58s | 22.58s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | ❌ SDK Crash | 22.29s | 22.29s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_True-empty_authority_False] | ❌ SDK Crash | 21.96s | 21.96s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_False-SSTORE new value, revert] | ❌ SDK Crash | 21.89s | 21.89s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | ❌ SDK Crash | 21.02s | 21.02s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | ❌ SDK Crash | 20.54s | 20.54s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_True-empty_authority_True] | ❌ SDK Crash | 20.41s | 20.41s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_delegation_False-empty_authority_True] | ❌ SDK Crash | 20.17s | 20.17s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_dst_True-1MiB] | ❌ SDK Crash | 19.24s | 19.24s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | ❌ SDK Crash | 19.17s | 19.17s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_b] | ❌ SDK Crash | 18.88s | 18.88s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_10M-blockchain_test] | ❌ SDK Crash | 18.35s | 18.35s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_10M-blockchain_test-case_id_a_to_a] | ❌ SDK Crash | 18.03s | 18.03s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_10M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | ❌ SDK Crash | 16.86s | 16.86s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | ❌ SDK Crash | 16.19s | 16.19s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_100000] | ❌ SDK Crash | 15.79s | 15.79s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_1_2_2_scalar] | ❌ SDK Crash | 15.30s | 15.30s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CREATE] | 16.50s | 10.86s | 13.68s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_infinities_2_scalar] | ❌ SDK Crash | 12.31s | 12.31s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 16.12s | 7.92s | 12.02s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_10M-blockchain_test-zero_byte_False] | ❌ SDK Crash | 11.97s | 11.97s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 14.83s | 8.92s | 11.88s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | ❌ SDK Crash | 11.82s | 11.82s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_False-key_mut_False] | ❌ SDK Crash | 11.34s | 11.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 13.75s | 8.06s | 10.90s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 13.66s | 8.08s | 10.87s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value] | ❌ SDK Crash | 10.79s | 10.79s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_10M-blockchain_test-val_mut_False-key_mut_True] | ❌ SDK Crash | 10.79s | 10.79s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 13.22s | 7.96s | 10.59s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | ❌ SDK Crash | 10.57s | 10.57s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 13.15s | 7.85s | 10.50s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 13.08s | 7.74s | 10.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 12.38s | 7.95s | 10.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 12.42s | 7.87s | 10.15s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | ❌ SDK Crash | 10.14s | 10.14s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 12.18s | 7.93s | 10.06s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | ❌ SDK Crash | 10.05s | 10.05s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 12.28s | 7.73s | 10.00s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | ❌ SDK Crash | 9.86s | 9.86s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | ❌ SDK Crash | 9.85s | 9.85s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | ❌ SDK Crash | 9.78s | 9.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | ❌ SDK Crash | 9.44s | 9.44s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | ❌ SDK Crash | 9.38s | 9.38s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | ❌ SDK Crash | 9.29s | 9.29s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes without value-opcode_CREATE] | ❌ SDK Crash | 9.26s | 9.26s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | ❌ SDK Crash | 9.21s | 9.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | ❌ SDK Crash | 9.20s | 9.20s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | ❌ SDK Crash | 9.19s | 9.19s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | ❌ SDK Crash | 9.19s | 9.19s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_True] | ❌ SDK Crash | 9.19s | 9.19s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | ❌ SDK Crash | 9.17s | 9.17s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | ❌ SDK Crash | 9.11s | 9.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | ❌ SDK Crash | 9.11s | 9.11s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_False] | ❌ SDK Crash | 9.10s | 9.10s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | ❌ SDK Crash | 9.10s | 9.10s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | ❌ SDK Crash | 9.10s | 9.10s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | ❌ SDK Crash | 9.07s | 9.07s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_10M-blockchain_test-absent_slots_True-SSTORE new value, revert] | ❌ SDK Crash | 9.00s | 9.00s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | ❌ SDK Crash | 8.97s | 8.97s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | ❌ SDK Crash | 8.95s | 8.95s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0 bytes without value-opcode_CREATE2] | ❌ SDK Crash | 8.93s | 8.93s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | ❌ SDK Crash | 8.82s | 8.82s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of zero data-opcode_REVERT] | ❌ SDK Crash | 8.78s | 8.78s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | ❌ SDK Crash | 8.75s | 8.75s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_10M-blockchain_test-opcode_CREATE2] | ❌ SDK Crash | 8.71s | 8.71s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_True] | ❌ SDK Crash | 8.64s | 8.64s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-value_bearing_False] | ❌ SDK Crash | 8.59s | 8.59s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | ❌ SDK Crash | 8.52s | 8.52s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_10M-blockchain_test-1MiB of zero data-opcode_RETURN] | ❌ SDK Crash | 8.48s | 8.48s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | ❌ SDK Crash | 8.23s | 8.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | ❌ SDK Crash | 8.15s | 8.15s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with zero data-opcode_CREATE2] | ❌ SDK Crash | 8.05s | 8.05s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | ❌ SDK Crash | 8.03s | 8.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | ❌ SDK Crash | 8.02s | 8.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | ❌ SDK Crash | 8.01s | 8.01s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_zero_input] | ❌ SDK Crash | 8.00s | 8.00s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | ❌ SDK Crash | 7.99s | 7.99s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | ❌ SDK Crash | 7.98s | 7.98s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | ❌ SDK Crash | 7.97s | 7.97s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | ❌ SDK Crash | 7.97s | 7.97s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | ❌ SDK Crash | 7.96s | 7.96s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_1_pair_empty] | ❌ SDK Crash | 7.93s | 7.93s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | ❌ SDK Crash | 7.92s | 7.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | ❌ SDK Crash | 7.92s | 7.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_2_sets] | ❌ SDK Crash | 7.91s | 7.91s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with zero data-opcode_CREATE] | ❌ SDK Crash | 7.90s | 7.90s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | ❌ SDK Crash | 7.89s | 7.89s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | ❌ SDK Crash | 7.88s | 7.88s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | ❌ SDK Crash | 7.88s | 7.88s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | ❌ SDK Crash | 7.85s | 7.85s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | ❌ SDK Crash | 7.85s | 7.85s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | ❌ SDK Crash | 7.84s | 7.84s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | ❌ SDK Crash | 7.82s | 7.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | ❌ SDK Crash | 7.82s | 7.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | ❌ SDK Crash | 7.82s | 7.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | ❌ SDK Crash | 7.79s | 7.79s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | ❌ SDK Crash | 7.78s | 7.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | ❌ SDK Crash | 7.78s | 7.78s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | ❌ SDK Crash | 7.78s | 7.78s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | ❌ SDK Crash | 7.76s | 7.76s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | ❌ SDK Crash | 7.76s | 7.76s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | ❌ SDK Crash | 7.76s | 7.76s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_3_pair] | ❌ SDK Crash | 7.75s | 7.75s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | ❌ SDK Crash | 7.75s | 7.75s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | ❌ SDK Crash | 7.74s | 7.74s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | ❌ SDK Crash | 7.74s | 7.74s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_10M-blockchain_test-mem_size_1000000] | ❌ SDK Crash | 7.72s | 7.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | ❌ SDK Crash | 7.72s | 7.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | ❌ SDK Crash | 7.71s | 7.71s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | ❌ SDK Crash | 7.70s | 7.70s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_10M-blockchain_test-ec_pairing_1_pair] | ❌ SDK Crash | 7.70s | 7.70s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | ❌ SDK Crash | 7.70s | 7.70s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | ❌ SDK Crash | 7.70s | 7.70s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-max code size with non-zero data-opcode_CREATE] | ❌ SDK Crash | 7.68s | 7.68s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | ❌ SDK Crash | 7.64s | 7.64s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | ❌ SDK Crash | 7.63s | 7.63s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_10M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | ❌ SDK Crash | 7.62s | 7.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | ❌ SDK Crash | 7.62s | 7.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_10M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | ❌ SDK Crash | 7.56s | 7.56s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| sp1-v5.2.2 | 533 | 60 | 473 | 0 |
| zisk-v0.13.0 | 533 | 439 | 94 | 0 |

---

