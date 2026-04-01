# 8x5090 - 10M-gas-limit

## Gas Limit Configuration - Proving

EEST benchmarks with 10M-gas-limit gas limit (fixtures: eest-365433e) (proving results) on **8x5090** hardware.

## Available EL Clients

- [ethrex-v9.0.0](#ethrex-v9.0.0)
- [reth-v1.11.0](#reth-v1.11.0)

---

## ethrex-v9.0.0


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | zisk-v0.15.0<br/>(237.91KiB) | Avg |
|-----------|-----------|----------|
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_127-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_127-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f[fork_Osaka-blockchain_test-blake2f-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_fp_to_g1-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_fp_to_g2-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g1add-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g2add-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_pairing_check-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_1-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_12-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_24-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_3-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_6-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_example_2-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify_modular_comp_x_coordinate_exceeds_n-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_point_evaluation.py::test_point_evaluation[fork_Osaka-blockchain_test-point_evaluation-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_CALL-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_CALLCODE-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_DELEGATECALL-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODECOPY-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODESIZE-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_STATICCALL-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 5m 10.29s | 5m 10.29s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_24-benchmark-gas-value_10M] | 3m 11.47s | 3m 11.47s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_CALL-benchmark-gas-value_10M] | 3m 10.85s | 3m 10.85s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_STATICCALL-benchmark-gas-value_10M] | 3m 10.22s | 3m 10.22s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_64-benchmark-gas-value_10M] | 3m 6.53s | 3m 6.53s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_3-benchmark-gas-value_10M] | 3m 4.69s | 3m 4.69s |
| test_tx_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_ORIGIN-benchmark-gas-value_10M] | 2m 58.23s | 2m 58.23s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_10M] | 2m 55.25s | 2m 55.25s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_32-benchmark-gas-value_10M] | 2m 52.63s | 2m 52.63s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b'ff'-benchmark-gas-value_10M] | 2m 52.25s | 2m 52.25s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b'ff'-benchmark-gas-value_10M] | 2m 51.14s | 2m 51.14s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 2m 50.53s | 2m 50.53s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 2m 49.93s | 2m 49.93s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 2m 49.71s | 2m 49.71s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_1048576-benchmark-gas-value_10M] | 2m 49.33s | 2m 49.33s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_10M] | 2m 48.87s | 2m 48.87s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_2_even-benchmark-gas-value_10M] | 2m 48.06s | 2m 48.06s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_4_pair-benchmark-gas-value_10M] | 2m 47.21s | 2m 47.21s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n1-benchmark-gas-value_10M] | 2m 46.92s | 2m 46.92s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 2m 46.83s | 2m 46.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_10M] | 2m 46.25s | 2m 46.25s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_256-benchmark-gas-value_10M] | 2m 45.43s | 2m 45.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_qube-benchmark-gas-value_10M] | 2m 43.42s | 2m 43.42s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 2m 42.33s | 2m 42.33s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000100-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 2m 42.12s | 2m 42.12s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_0-benchmark-gas-value_10M] | 2m 42.01s | 2m 42.01s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_256-benchmark-gas-value_10M] | 2m 41.81s | 2m 41.81s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 2m 41.46s | 2m 41.46s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP9-benchmark-gas-value_10M] | 2m 41.42s | 2m 41.42s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 2m 41.24s | 2m 41.24s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_10240-benchmark-gas-value_10M] | 2m 41.09s | 2m 41.09s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 2m 40.83s | 2m 40.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 2m 40.72s | 2m 40.72s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.75x max code size-benchmark-gas-value_10M] | 2m 40.70s | 2m 40.70s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP14-benchmark-gas-value_10M] | 2m 40.55s | 2m 40.55s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 2m 39.91s | 2m 39.91s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_10M] | 2m 39.82s | 2m 39.82s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_10M] | 2m 39.31s | 2m 39.31s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_0-benchmark-gas-value_10M] | 2m 39.22s | 2m 39.22s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_10M] | 2m 39.05s | 2m 39.05s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000001-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 2m 39.00s | 2m 39.00s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_256-benchmark-gas-value_10M] | 2m 38.48s | 2m 38.48s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_False-empty_authority_True-benchmark-gas-value_10M] | 2m 38.43s | 2m 38.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_1024-benchmark-gas-value_10M] | 2m 38.34s | 2m 38.34s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_1_2_2_scalar-benchmark-gas-value_10M] | 2m 37.90s | 2m 37.90s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_10M] | 2m 37.49s | 2m 37.49s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG0-benchmark-gas-value_10M] | 2m 37.40s | 2m 37.40s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_5-benchmark-gas-value_10M] | 2m 37.26s | 2m 37.26s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_7-benchmark-gas-value_10M] | 2m 37.11s | 2m 37.11s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1000000-benchmark-gas-value_10M] | 2m 37.11s | 2m 37.11s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG2-benchmark-gas-value_10M] | 2m 37.10s | 2m 37.10s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG2-benchmark-gas-value_10M] | 2m 36.99s | 2m 36.99s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value, revert-benchmark-gas-value_10M] | 2m 36.44s | 2m 36.44s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_10M] | 2m 35.70s | 2m 35.70s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_10M] | 2m 35.24s | 2m 35.24s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG3-benchmark-gas-value_10M] | 2m 35.22s | 2m 35.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_10M] | 2m 34.91s | 2m 34.91s |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g1msm-benchmark-gas-value_10M] | 1m 7.89s | 1m 7.89s |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_128-benchmark-gas-value_10M] | 1m 3.59s | 1m 3.59s |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_64-benchmark-gas-value_10M] | 1m 1.48s | 1m 1.48s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_127-benchmark-gas-value_10M] | 1m 0.67s | 1m 0.67s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SDIV-1-benchmark-gas-value_10M] | 59.89s | 59.89s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_DIV-1-benchmark-gas-value_10M] | 57.08s | 57.08s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_191-benchmark-gas-value_10M] | 57.08s | 57.08s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SDIV-0-benchmark-gas-value_10M] | 56.79s | 56.79s |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_128-benchmark-gas-value_10M] | 56.28s | 56.28s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_DIV-0-benchmark-gas-value_10M] | 55.28s | 55.28s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_191-benchmark-gas-value_10M] | 53.07s | 53.07s |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_16-benchmark-gas-value_10M] | 52.89s | 52.89s |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g2msm-benchmark-gas-value_10M] | 51.07s | 51.07s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_191-benchmark-gas-value_10M] | 49.97s | 49.97s |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_64-benchmark-gas-value_10M] | 48.54s | 48.54s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_PREVRANDAO-benchmark-gas-value_10M] | 44.56s | 44.56s |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_16-benchmark-gas-value_10M] | 43.46s | 43.46s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_63-benchmark-gas-value_10M] | 43.27s | 43.27s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_63-benchmark-gas-value_10M] | 42.76s | 42.76s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_255-benchmark-gas-value_10M] | 40.47s | 40.47s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_255-benchmark-gas-value_10M] | 37.97s | 37.97s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_255-benchmark-gas-value_10M] | 37.66s | 37.66s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-empty-opcode_REVERT-benchmark-gas-value_10M] | 37.36s | 37.36s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_CALLCODE-benchmark-gas-value_10M] | 36.97s | 36.97s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_CALL-benchmark-gas-value_10M] | 36.26s | 36.26s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_CALLCODE-benchmark-gas-value_10M] | 36.05s | 36.05s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_10M] | 36.05s | 36.05s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_12-benchmark-gas-value_10M] | 36.05s | 36.05s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_STATICCALL-benchmark-gas-value_10M] | 35.76s | 35.76s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_10M] | 35.66s | 35.66s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_10M] | 35.65s | 35.65s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_CALL-benchmark-gas-value_10M] | 35.45s | 35.45s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_CALLCODE-benchmark-gas-value_10M] | 35.45s | 35.45s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_STATICCALL-benchmark-gas-value_10M] | 35.35s | 35.35s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_STATICCALL-benchmark-gas-value_10M] | 35.26s | 35.26s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_CALL-benchmark-gas-value_10M] | 35.26s | 35.26s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_STATICCALL-benchmark-gas-value_10M] | 35.06s | 35.06s |
| test_keccak.py::test_keccak_max_permutations[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 35.06s | 35.06s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_CALLCODE-benchmark-gas-value_10M] | 34.96s | 34.96s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_CALL-benchmark-gas-value_10M] | 34.86s | 34.86s |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_1-benchmark-gas-value_10M] | 34.85s | 34.85s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_CALLCODE-benchmark-gas-value_10M] | 34.66s | 34.66s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_63-benchmark-gas-value_10M] | 34.56s | 34.56s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_STATICCALL-benchmark-gas-value_10M] | 34.25s | 34.25s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_STATICCALL-benchmark-gas-value_10M] | 34.15s | 34.15s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_CALL-benchmark-gas-value_10M] | 33.85s | 33.85s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_10M] | 33.76s | 33.76s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_CALLCODE-benchmark-gas-value_10M] | 33.66s | 33.66s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_CALL-benchmark-gas-value_10M] | 33.55s | 33.55s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_STATICCALL-benchmark-gas-value_10M] | 33.55s | 33.55s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_10M] | 33.55s | 33.55s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-empty-opcode_RETURN-benchmark-gas-value_10M] | 33.45s | 33.45s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_10M] | 33.35s | 33.35s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_CALL-benchmark-gas-value_10M] | 33.35s | 33.35s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_10M] | 33.25s | 33.25s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_CALLCODE-benchmark-gas-value_10M] | 33.06s | 33.06s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_1024-benchmark-gas-value_10M] | 33.05s | 33.05s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_CALLCODE-benchmark-gas-value_10M] | 32.85s | 32.85s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_400_gas_exp_heavy-benchmark-gas-value_10M] | 32.75s | 32.75s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_10M] | 32.45s | 32.45s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_32-benchmark-gas-value_10M] | 32.15s | 32.15s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH31-benchmark-gas-value_10M] | 32.15s | 32.15s |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_1-benchmark-gas-value_10M] | 31.96s | 31.96s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_32-benchmark-gas-value_10M] | 31.35s | 31.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_765_gas_exp_heavy-benchmark-gas-value_10M] | 30.95s | 30.95s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH32-benchmark-gas-value_10M] | 30.45s | 30.45s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_677_gas_base_heavy-benchmark-gas-value_10M] | 30.05s | 30.05s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH30-benchmark-gas-value_10M] | 29.84s | 29.84s |
| test_account_query.py::test_selfbalance[fork_Osaka-blockchain_test-contract_balance_0-benchmark-gas-value_10M] | 29.75s | 29.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_208_gas_balanced-benchmark-gas-value_10M] | 29.45s | 29.45s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_0-benchmark-gas-value_10M] | 29.25s | 29.25s |
| test_account_query.py::test_selfbalance[fork_Osaka-blockchain_test-contract_balance_1-benchmark-gas-value_10M] | 29.15s | 29.15s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_36-benchmark-gas-value_10M] | 28.95s | 28.95s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_65-benchmark-gas-value_10M] | 28.95s | 28.95s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_256-benchmark-gas-value_10M] | 28.75s | 28.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_4-benchmark-gas-value_10M] | 28.75s | 28.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_16b_exp_320-benchmark-gas-value_10M] | 28.75s | 28.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_40-benchmark-gas-value_10M] | 28.65s | 28.65s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1360_gas_balanced-benchmark-gas-value_10M] | 28.36s | 28.36s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_128-benchmark-gas-value_10M] | 28.15s | 28.15s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_2-benchmark-gas-value_10M] | 28.14s | 28.14s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_1-benchmark-gas-value_10M] | 27.95s | 27.95s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_32-benchmark-gas-value_10M] | 27.95s | 27.95s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_EQ--benchmark-gas-value_10M] | 27.75s | 27.75s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH28-benchmark-gas-value_10M] | 27.64s | 27.64s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH29-benchmark-gas-value_10M] | 27.55s | 27.55s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_0-benchmark-gas-value_10M] | 27.45s | 27.45s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_6-benchmark-gas-value_10M] | 27.35s | 27.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_24b_exp_168-benchmark-gas-value_10M] | 27.25s | 27.25s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_256-benchmark-gas-value_10M] | 27.05s | 27.05s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH27-benchmark-gas-value_10M] | 26.74s | 26.74s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add-benchmark-gas-value_10M] | 26.55s | 26.55s |
| test_call_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_CALLER-benchmark-gas-value_10M] | 26.24s | 26.24s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH25-benchmark-gas-value_10M] | 26.24s | 26.24s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH26-benchmark-gas-value_10M] | 26.05s | 26.05s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_COINBASE-benchmark-gas-value_10M] | 26.05s | 26.05s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of zero data-opcode_REVERT-benchmark-gas-value_10M] | 25.95s | 25.95s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_1024-benchmark-gas-value_10M] | 25.25s | 25.25s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add_1_2-benchmark-gas-value_10M] | 25.24s | 25.24s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_40-benchmark-gas-value_10M] | 25.16s | 25.16s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_8_exp_648-benchmark-gas-value_10M] | 25.04s | 25.04s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_215_gas_exp_heavy-benchmark-gas-value_10M] | 24.75s | 24.75s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH23-benchmark-gas-value_10M] | 24.75s | 24.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_600_gas_exp_heavy-benchmark-gas-value_10M] | 24.65s | 24.65s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_96-benchmark-gas-value_10M] | 24.64s | 24.64s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_exp_heavy-benchmark-gas-value_10M] | 24.64s | 24.64s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of zero data-opcode_RETURN-benchmark-gas-value_10M] | 24.54s | 24.54s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH24-benchmark-gas-value_10M] | 24.24s | 24.24s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_96-benchmark-gas-value_10M] | 24.05s | 24.05s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_256-benchmark-gas-value_10M] | 23.95s | 23.95s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_256-benchmark-gas-value_10M] | 23.65s | 23.65s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH22-benchmark-gas-value_10M] | 23.64s | 23.64s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_8b_exp_896-benchmark-gas-value_10M] | 23.54s | 23.54s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_3_exp_8-benchmark-gas-value_10M] | 23.45s | 23.45s |
| test_call_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_ADDRESS-benchmark-gas-value_10M] | 23.15s | 23.15s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_zkevm_worst_case-benchmark-gas-value_10M] | 23.04s | 23.04s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_example_1-benchmark-gas-value_10M] | 22.95s | 22.95s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH19-benchmark-gas-value_10M] | 22.75s | 22.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_852_gas_exp_heavy-benchmark-gas-value_10M] | 22.65s | 22.65s |
| test_tx_context.py::test_blobhash[fork_Osaka-blockchain_test-one_blob-benchmark-gas-value_10M] | 22.54s | 22.54s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_10M] | 22.35s | 22.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_800_gas_exp_heavy-benchmark-gas-value_10M] | 22.34s | 22.34s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b''-benchmark-gas-value_10M] | 22.25s | 22.25s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b''-benchmark-gas-value_10M] | 21.94s | 21.94s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_10M] | 21.94s | 21.94s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH20-benchmark-gas-value_10M] | 21.94s | 21.94s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b''-benchmark-gas-value_10M] | 21.94s | 21.94s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_10M] | 21.94s | 21.94s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH21-benchmark-gas-value_10M] | 21.94s | 21.94s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_10M] | 21.75s | 21.75s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_0-benchmark-gas-value_10M] | 21.74s | 21.74s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_32-benchmark-gas-value_10M] | 21.64s | 21.64s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_10M] | 21.55s | 21.55s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_256-benchmark-gas-value_10M] | 21.35s | 21.35s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_1024-benchmark-gas-value_10M] | 21.35s | 21.35s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_256-benchmark-gas-value_10M] | 21.34s | 21.34s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_8_exp_896-benchmark-gas-value_10M] | 21.14s | 21.14s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_0-benchmark-gas-value_10M] | 21.14s | 21.14s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b''-benchmark-gas-value_10M] | 21.05s | 21.05s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b''-benchmark-gas-value_10M] | 20.94s | 20.94s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_298_gas_exp_heavy-benchmark-gas-value_10M] | 20.75s | 20.75s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_1024-benchmark-gas-value_10M] | 20.74s | 20.74s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b''-benchmark-gas-value_10M] | 20.55s | 20.55s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_32-benchmark-gas-value_10M] | 20.44s | 20.44s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n2-benchmark-gas-value_10M] | 20.24s | 20.24s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH15-benchmark-gas-value_10M] | 20.24s | 20.24s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n3-benchmark-gas-value_10M] | 20.14s | 20.14s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_10240-benchmark-gas-value_10M] | 20.04s | 20.04s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_0-benchmark-gas-value_10M] | 20.04s | 20.04s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_1024-benchmark-gas-value_10M] | 19.94s | 19.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_32-benchmark-gas-value_10M] | 19.94s | 19.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_256-benchmark-gas-value_10M] | 19.84s | 19.84s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b'ff'-benchmark-gas-value_10M] | 19.66s | 19.66s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b'ff'-benchmark-gas-value_10M] | 19.64s | 19.64s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1360n1-benchmark-gas-value_10M] | 19.64s | 19.64s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_256-benchmark-gas-value_10M] | 19.55s | 19.55s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_1024-benchmark-gas-value_10M] | 19.54s | 19.54s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH18-benchmark-gas-value_10M] | 19.44s | 19.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 19.34s | 19.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 19.34s | 19.34s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_0-benchmark-gas-value_10M] | 19.34s | 19.34s |
| test_sha256.py::test_sha256[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 19.24s | 19.24s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b'ff'-benchmark-gas-value_10M] | 19.24s | 19.24s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_balanced-benchmark-gas-value_10M] | 19.14s | 19.14s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b'ff'-benchmark-gas-value_10M] | 19.14s | 19.14s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of non-zero data-opcode_REVERT-benchmark-gas-value_10M] | 19.04s | 19.04s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH16-benchmark-gas-value_10M] | 18.94s | 18.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_10240-benchmark-gas-value_10M] | 18.84s | 18.84s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of non-zero data-opcode_RETURN-benchmark-gas-value_10M] | 18.84s | 18.84s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0 bytes-benchmark-gas-value_10M] | 18.74s | 18.74s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_10M] | 18.54s | 18.54s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH17-benchmark-gas-value_10M] | 18.44s | 18.44s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_10M] | 18.44s | 18.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 18.34s | 18.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 18.03s | 18.03s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 17.93s | 17.93s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 17.93s | 17.93s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 17.93s | 17.93s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH12-benchmark-gas-value_10M] | 17.84s | 17.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 17.84s | 17.84s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH14-benchmark-gas-value_10M] | 17.84s | 17.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 17.54s | 17.54s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 17.44s | 17.44s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_1024-benchmark-gas-value_10M] | 17.44s | 17.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 17.44s | 17.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 17.44s | 17.44s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_10M] | 17.34s | 17.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 17.24s | 17.24s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1349n1-benchmark-gas-value_10M] | 17.14s | 17.14s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 17.14s | 17.14s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_0-benchmark-gas-value_10M] | 17.14s | 17.14s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_32-benchmark-gas-value_10M] | 17.13s | 17.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_32-benchmark-gas-value_10M] | 17.04s | 17.04s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_1024-benchmark-gas-value_10M] | 17.04s | 17.04s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_0-benchmark-gas-value_10M] | 17.04s | 17.04s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_256-benchmark-gas-value_10M] | 17.04s | 17.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 16.94s | 16.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 16.94s | 16.94s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_1_even-benchmark-gas-value_10M] | 16.94s | 16.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 16.93s | 16.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_one_pairing-benchmark-gas-value_10M] | 16.84s | 16.84s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_256-benchmark-gas-value_10M] | 16.84s | 16.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 16.83s | 16.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 16.83s | 16.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 16.74s | 16.74s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH13-benchmark-gas-value_10M] | 16.73s | 16.73s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 16.73s | 16.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1360n2-benchmark-gas-value_10M] | 16.64s | 16.64s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_1-benchmark-gas-value_10M] | 16.64s | 16.64s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 16.64s | 16.64s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 16.64s | 16.64s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 16.54s | 16.54s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 16.54s | 16.54s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 16.53s | 16.53s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_cover_windows-benchmark-gas-value_10M] | 16.44s | 16.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 16.44s | 16.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 16.43s | 16.43s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 16.43s | 16.43s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 16.43s | 16.43s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 16.43s | 16.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_qube-benchmark-gas-value_10M] | 16.34s | 16.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 16.34s | 16.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 16.33s | 16.33s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 16.23s | 16.23s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 16.23s | 16.23s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 16.14s | 16.14s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 16.04s | 16.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 16.04s | 16.04s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_63-benchmark-gas-value_10M] | 15.94s | 15.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 15.94s | 15.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 15.94s | 15.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 15.93s | 15.93s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 15.84s | 15.84s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_1048576-benchmark-gas-value_10M] | 15.83s | 15.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 15.83s | 15.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 15.74s | 15.74s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH11-benchmark-gas-value_10M] | 15.73s | 15.73s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SSTORE new value-benchmark-gas-value_10M] | 15.73s | 15.73s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_255-benchmark-gas-value_10M] | 15.64s | 15.64s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 15.63s | 15.63s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SAR--benchmark-gas-value_10M] | 15.54s | 15.54s |
| test_ecrecover.py::test_ecrecover[fork_Osaka-blockchain_test-ecrecover-benchmark-gas-value_10M] | 15.54s | 15.54s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_191-benchmark-gas-value_10M] | 15.24s | 15.24s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_10M] | 15.14s | 15.14s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_marius_1_even-benchmark-gas-value_10M] | 15.13s | 15.13s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH10-benchmark-gas-value_10M] | 15.13s | 15.13s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_two_pairings-benchmark-gas-value_10M] | 15.04s | 15.04s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH8-benchmark-gas-value_10M] | 14.94s | 14.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 14.84s | 14.84s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_408_gas_balanced-benchmark-gas-value_10M] | 14.84s | 14.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 14.83s | 14.83s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_256-benchmark-gas-value_10M] | 14.74s | 14.74s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_600_gas_balanced-benchmark-gas-value_10M] | 14.64s | 14.64s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_10M] | 14.63s | 14.63s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_2_pair-benchmark-gas-value_10M] | 14.63s | 14.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 14.63s | 14.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 14.63s | 14.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_1024-benchmark-gas-value_10M] | 14.63s | 14.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_32-benchmark-gas-value_10M] | 14.54s | 14.54s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_127-benchmark-gas-value_10M] | 14.54s | 14.54s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 14.44s | 14.44s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_0-benchmark-gas-value_10M] | 14.43s | 14.43s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 14.33s | 14.33s |
| test_bitwise.py::test_shifts[fork_Osaka-blockchain_test-opcode_SAR-benchmark-gas-value_10M] | 14.24s | 14.24s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SIGNEXTEND--benchmark-gas-value_10M] | 14.23s | 14.23s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 14.13s | 14.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_base_heavy-benchmark-gas-value_10M] | 13.95s | 13.95s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_10240-benchmark-gas-value_10M] | 13.93s | 13.93s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_10M] | 13.93s | 13.93s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH6-benchmark-gas-value_10M] | 13.84s | 13.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 13.83s | 13.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 13.83s | 13.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 13.83s | 13.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 13.63s | 13.63s |
| test_bitwise.py::test_clz_diff[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 13.60s | 13.60s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-5b-benchmark-gas-value_10M] | 13.53s | 13.53s |
| test_control_flow.py::test_jumpdests[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 13.53s | 13.53s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_256-benchmark-gas-value_10M] | 13.44s | 13.44s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH9-benchmark-gas-value_10M] | 13.44s | 13.44s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SHL--benchmark-gas-value_10M] | 13.43s | 13.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_10M] | 13.43s | 13.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_32-benchmark-gas-value_10M] | 13.34s | 13.34s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_square-benchmark-gas-value_10M] | 13.23s | 13.23s |
| test_transaction_types.py::test_block_full_data[fork_Osaka-blockchain_test-zero_byte_True-benchmark-gas-value_10M] | 13.23s | 13.23s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_10M] | 13.13s | 13.13s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH7-benchmark-gas-value_10M] | 13.13s | 13.13s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_3-benchmark-gas-value_10M] | 13.03s | 13.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_10M] | 12.93s | 12.93s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_32-benchmark-gas-value_10M] | 12.83s | 12.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_10M] | 12.73s | 12.73s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-max code size-benchmark-gas-value_10M] | 12.63s | 12.63s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_10M] | 12.63s | 12.63s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_0-benchmark-gas-value_10M] | 12.63s | 12.63s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_10M] | 12.63s | 12.63s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_10M] | 12.63s | 12.63s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_256-benchmark-gas-value_10M] | 12.33s | 12.33s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_0-benchmark-gas-value_10M] | 12.33s | 12.33s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_10M] | 12.23s | 12.23s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_32-benchmark-gas-value_10M] | 12.23s | 12.23s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH4-benchmark-gas-value_10M] | 12.13s | 12.13s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_5_pair-benchmark-gas-value_10M] | 12.13s | 12.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1152n1-benchmark-gas-value_10M] | 12.13s | 12.13s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH5-benchmark-gas-value_10M] | 12.04s | 12.04s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_256_exp_2-benchmark-gas-value_10M] | 12.03s | 12.03s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_264_exp_2-benchmark-gas-value_10M] | 11.84s | 11.84s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_256-benchmark-gas-value_10M] | 11.83s | 11.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_10M] | 11.83s | 11.83s |
| test_bitwise.py::test_shifts[fork_Osaka-blockchain_test-opcode_SHR-benchmark-gas-value_10M] | 11.73s | 11.73s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_10M] | 11.73s | 11.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_0-benchmark-gas-value_10M] | 11.73s | 11.73s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_1048576-benchmark-gas-value_10M] | 11.63s | 11.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_32-benchmark-gas-value_10M] | 11.63s | 11.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_256-benchmark-gas-value_10M] | 11.63s | 11.63s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_10M] | 11.53s | 11.53s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SHR--benchmark-gas-value_10M] | 11.43s | 11.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_1024-benchmark-gas-value_10M] | 11.43s | 11.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_qube-benchmark-gas-value_10M] | 11.43s | 11.43s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_6-benchmark-gas-value_10M] | 11.33s | 11.33s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_408_gas_base_heavy-benchmark-gas-value_10M] | 11.33s | 11.33s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_10M] | 11.13s | 11.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_616_gas_base_heavy-benchmark-gas-value_10M] | 11.03s | 11.03s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_767_gas_balanced-benchmark-gas-value_10M] | 10.83s | 10.83s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_32-benchmark-gas-value_10M] | 10.73s | 10.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_867_gas_base_heavy-benchmark-gas-value_10M] | 10.63s | 10.63s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SSTORE same value-benchmark-gas-value_10M] | 10.63s | 10.63s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_0-benchmark-gas-value_10M] | 10.53s | 10.53s |
| test_account_query.py::test_codesize[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 10.53s | 10.53s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_1024-benchmark-gas-value_10M] | 10.43s | 10.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_qube-benchmark-gas-value_10M] | 10.43s | 10.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_0-benchmark-gas-value_10M] | 10.43s | 10.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1045_gas_base_heavy-benchmark-gas-value_10M] | 10.43s | 10.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_996_gas_balanced-benchmark-gas-value_10M] | 10.43s | 10.43s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH3-benchmark-gas-value_10M] | 10.43s | 10.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_800_gas_base_heavy-benchmark-gas-value_10M] | 10.43s | 10.43s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_BASEFEE-benchmark-gas-value_10M] | 10.33s | 10.33s |
| test_call_context.py::test_callvalue_from_call[fork_Osaka-blockchain_test-non_zero_value_False-benchmark-gas-value_10M] | 10.33s | 10.33s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add_infinities-benchmark-gas-value_10M] | 10.33s | 10.33s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_TIMESTAMP-benchmark-gas-value_10M] | 10.23s | 10.23s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_NUMBER-benchmark-gas-value_10M] | 10.13s | 10.13s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_CHAINID-benchmark-gas-value_10M] | 10.13s | 10.13s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_12-benchmark-gas-value_10M] | 10.03s | 10.03s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_BLOBBASEFEE-benchmark-gas-value_10M] | 10.03s | 10.03s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_32-benchmark-gas-value_10M] | 10.03s | 10.03s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_1024-benchmark-gas-value_10M] | 9.94s | 9.94s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 9.93s | 9.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_1024-benchmark-gas-value_10M] | 9.93s | 9.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_10240-benchmark-gas-value_10M] | 9.83s | 9.83s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1024_exp_2-benchmark-gas-value_10M] | 9.83s | 9.83s |
| test_tx_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_GASPRICE-benchmark-gas-value_10M] | 9.83s | 9.83s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 9.73s | 9.73s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1-benchmark-gas-value_10M] | 9.73s | 9.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_square-benchmark-gas-value_10M] | 9.73s | 9.73s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_1024-benchmark-gas-value_10M] | 9.73s | 9.73s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 9.73s | 9.73s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 9.63s | 9.63s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_1024-benchmark-gas-value_10M] | 9.63s | 9.63s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_32-benchmark-gas-value_10M] | 9.63s | 9.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_256-benchmark-gas-value_10M] | 9.54s | 9.54s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_0-benchmark-gas-value_10M] | 9.53s | 9.53s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_0-benchmark-gas-value_10M] | 9.53s | 9.53s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1000-benchmark-gas-value_10M] | 9.53s | 9.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 9.53s | 9.53s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_GASLIMIT-benchmark-gas-value_10M] | 9.43s | 9.43s |
| test_call_context.py::test_returndatasize_zero[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 9.43s | 9.43s |
| test_control_flow.py::test_pc_op[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 9.43s | 9.43s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_32-benchmark-gas-value_10M] | 9.43s | 9.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_0-benchmark-gas-value_10M] | 9.43s | 9.43s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH1-benchmark-gas-value_10M] | 9.43s | 9.43s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_256-benchmark-gas-value_10M] | 9.43s | 9.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_256-benchmark-gas-value_10M] | 9.43s | 9.43s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_0-benchmark-gas-value_10M] | 9.43s | 9.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_10M] | 9.33s | 9.33s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_0-benchmark-gas-value_10M] | 9.33s | 9.33s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_256-benchmark-gas-value_10M] | 9.33s | 9.33s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 9.33s | 9.33s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-605b5b-benchmark-gas-value_10M] | 9.23s | 9.23s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH0-benchmark-gas-value_10M] | 9.23s | 9.23s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 9.23s | 9.23s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_1024-benchmark-gas-value_10M] | 9.23s | 9.23s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_256-benchmark-gas-value_10M] | 9.23s | 9.23s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH2-benchmark-gas-value_10M] | 9.23s | 9.23s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_BYTE--benchmark-gas-value_10M] | 9.13s | 9.13s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_24-benchmark-gas-value_10M] | 9.13s | 9.13s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 9.13s | 9.13s |
| test_control_flow.py::test_gas_op[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 9.13s | 9.13s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_1024-benchmark-gas-value_10M] | 9.13s | 9.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_256-benchmark-gas-value_10M] | 9.03s | 9.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_10M] | 9.03s | 9.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_0-benchmark-gas-value_10M] | 9.03s | 9.03s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_10M] | 9.03s | 9.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_10240-benchmark-gas-value_10M] | 9.03s | 9.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_32-benchmark-gas-value_10M] | 9.03s | 9.03s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 8.93s | 8.93s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_32-benchmark-gas-value_10M] | 8.93s | 8.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_32-benchmark-gas-value_10M] | 8.93s | 8.93s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_32-benchmark-gas-value_10M] | 8.93s | 8.93s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_10M] | 8.83s | 8.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_10M] | 8.83s | 8.83s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_32-benchmark-gas-value_10M] | 8.83s | 8.83s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_256-benchmark-gas-value_10M] | 8.82s | 8.82s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_0-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_10M] | 8.82s | 8.82s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_10M] | 8.73s | 8.73s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 8.73s | 8.73s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 8.73s | 8.73s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_10M] | 8.73s | 8.73s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 8.73s | 8.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 8.72s | 8.72s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_10M] | 8.63s | 8.63s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_0-benchmark-gas-value_10M] | 8.63s | 8.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_32-benchmark-gas-value_10M] | 8.63s | 8.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 8.63s | 8.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_0-benchmark-gas-value_10M] | 8.62s | 8.62s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 8.62s | 8.62s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_0-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_10M] | 8.53s | 8.53s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP15-benchmark-gas-value_10M] | 8.53s | 8.53s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_10M] | 8.53s | 8.53s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_512-benchmark-gas-value_10M] | 8.53s | 8.53s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_10M] | 8.53s | 8.53s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_10M] | 8.53s | 8.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 8.53s | 8.53s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000006-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 8.53s | 8.53s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_10M] | 8.53s | 8.53s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_1024-benchmark-gas-value_10M] | 8.47s | 8.47s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 8.43s | 8.43s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_256-benchmark-gas-value_10M] | 8.43s | 8.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_32-benchmark-gas-value_10M] | 8.43s | 8.43s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 8.43s | 8.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 8.43s | 8.43s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 8.43s | 8.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_256-benchmark-gas-value_10M] | 8.43s | 8.43s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-max code size-benchmark-gas-value_10M] | 8.43s | 8.43s |
| test_call_context.py::test_callvalue_from_origin[fork_Osaka-blockchain_test-non_zero_value_True-benchmark-gas-value_10M] | 8.43s | 8.43s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 8.43s | 8.43s |
| test_tx_context.py::test_blobhash[fork_Osaka-blockchain_test-no_blobs-benchmark-gas-value_10M] | 8.43s | 8.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP8-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_32-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_32-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 8.32s | 8.32s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000011-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_0-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP3-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP11-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP7-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_0-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_square-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000008-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_1024-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000010-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_1024-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_256-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.25x max code size-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_1024-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_qube-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SUB--benchmark-gas-value_10M] | 8.12s | 8.12s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 8.12s | 8.12s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_10M] | 8.12s | 8.12s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000f-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 8.04s | 8.04s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP3-benchmark-gas-value_10M] | 8.04s | 8.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_32-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP11-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_256-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_1024-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_0-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-00-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000b-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_0-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000003-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000009-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000e-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP4-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_1024-benchmark-gas-value_10M] | 7.95s | 7.95s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000007-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_call_context.py::test_callvalue_from_origin[fork_Osaka-blockchain_test-non_zero_value_False-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP6-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000001-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MUL--benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_256-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000002-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_BALANCE-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_control_flow.py::test_jump_benchmark[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP5-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 7.92s | 7.92s |
| test_comparison.py::test_iszero[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000005-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_ADD--benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000011-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP7-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000003-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000c-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000d-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000100-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_32-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_32-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000002-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000c-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_0-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000006-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000a-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_pow_0x10001-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_256-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_BALANCE-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000e-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP12-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP4-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000004-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000005-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000f-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_BALANCE-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000d-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_256-benchmark-gas-value_10M] | 7.72s | 7.72s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP9-benchmark-gas-value_10M] | 7.72s | 7.72s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_BALANCE-benchmark-gas-value_10M] | 7.68s | 7.68s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP1-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000004-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000007-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MOD--benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_1048576-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP10-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP16-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000009-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0 bytes-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP12-benchmark-gas-value_10M] | 7.62s | 7.62s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 7.62s | 7.62s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_1024-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_BALANCE-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_1048576-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP14-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_32-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP5-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000008-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP13-benchmark-gas-value_10M] | 7.52s | 7.52s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP13-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_OR--benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP15-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP2-benchmark-gas-value_10M] | 7.42s | 7.42s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 7.42s | 7.42s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_10M] | 7.41s | 7.41s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_32-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_BALANCE-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_LT--benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000a-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP2-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP10-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000010-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-615b5b5b-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP16-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_bitwise.py::test_clz_same[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_SGT--benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP6-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000b-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_10M] | 7.22s | 7.22s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 7.22s | 7.22s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_10M] | 7.14s | 7.14s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSLOAD-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_BALANCE-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_GT--benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_BALANCE-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP8-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_XOR--benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_SLT--benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP1-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_10240-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_bitwise.py::test_not_op[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_10M] | 6.96s | 6.96s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.50x max code size-benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_1024-benchmark-gas-value_10M] | 6.92s | 6.92s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_32-benchmark-gas-value_10M] | 6.92s | 6.92s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 6.92s | 6.92s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_10M] | 6.92s | 6.92s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value, revert-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_1048576-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_identity.py::test_identity[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 6.82s | 6.82s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_10M] | 6.82s | 6.82s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 6.77s | 6.77s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_256-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_AND--benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_10M] | 6.72s | 6.72s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_10M] | 6.72s | 6.72s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.25x max code size-benchmark-gas-value_10M] | 6.64s | 6.64s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_0-benchmark-gas-value_10M] | 6.63s | 6.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_1024-benchmark-gas-value_10M] | 6.63s | 6.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_0-benchmark-gas-value_10M] | 6.62s | 6.62s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_0-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value, out of gas-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_100000-benchmark-gas-value_10M] | 6.52s | 6.52s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_0-benchmark-gas-value_10M] | 6.52s | 6.52s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_0-benchmark-gas-value_10M] | 6.43s | 6.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_10M] | 6.42s | 6.42s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_32-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD--benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_256-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_256-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_pow_0x10001-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_True-empty_authority_True-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-605b-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_256-benchmark-gas-value_10M] | 6.32s | 6.32s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_256-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_136279841-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_64b_exp_512-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_32_byte_coord_and_scalar-benchmark-gas-value_10M] | 6.22s | 6.22s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_10M] | 6.22s | 6.22s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_square-benchmark-gas-value_10M] | 6.22s | 6.22s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_1024-benchmark-gas-value_10M] | 6.22s | 6.22s |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_EXP--benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_32-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.75x max code size-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_1048576-benchmark-gas-value_10M] | 6.12s | 6.12s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value-benchmark-gas-value_10M] | 6.12s | 6.12s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_10M] | 6.12s | 6.12s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_10M] | 6.12s | 6.12s |
| test_ripemd160.py::test_ripemd160[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 6.12s | 6.12s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_11-benchmark-gas-value_10M] | 6.05s | 6.05s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_True-empty_authority_False-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_7-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_11-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_10240-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_False-empty_authority_False-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD--benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_False-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_0-benchmark-gas-value_10M] | 6.02s | 6.02s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_256-benchmark-gas-value_10M] | 6.02s | 6.02s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_True-benchmark-gas-value_10M] | 6.02s | 6.02s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_13-benchmark-gas-value_10M] | 6.02s | 6.02s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_64b_exp_512-benchmark-gas-value_10M] | 6.02s | 6.02s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_136279841-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_13-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_False-empty_authority_False-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SMOD--benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_1024-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_square-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_False-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_5-benchmark-gas-value_10M] | 5.92s | 5.92s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_136279841-benchmark-gas-value_10M] | 5.92s | 5.92s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_0-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_account_query.py::test_ext_account_query_cold[fork_Osaka-blockchain_test-absent_accounts_False-opcode_BALANCE-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_13-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_0-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_3-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_136279841-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_1024-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_True-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_True-empty_authority_False-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_True-empty_authority_True-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_13-benchmark-gas-value_10M] | 5.82s | 5.82s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_False-empty_authority_False-benchmark-gas-value_10M] | 5.82s | 5.82s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_5-benchmark-gas-value_10M] | 5.82s | 5.82s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_7-benchmark-gas-value_10M] | 5.82s | 5.82s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_1_2_32_byte_scalar-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_7-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_32-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_13-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_False-empty_authority_True-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_11-benchmark-gas-value_10M] | 5.72s | 5.72s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_3-benchmark-gas-value_10M] | 5.72s | 5.72s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_136279841-benchmark-gas-value_10M] | 5.72s | 5.72s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_32-benchmark-gas-value_10M] | 5.72s | 5.72s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_False-empty_authority_False-benchmark-gas-value_10M] | 5.72s | 5.72s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_5-benchmark-gas-value_10M] | 5.72s | 5.72s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_32-benchmark-gas-value_10M] | 5.72s | 5.72s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_pow_0x10001-benchmark-gas-value_10M] | 5.72s | 5.72s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSLOAD-benchmark-gas-value_10M] | 5.72s | 5.72s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_5-benchmark-gas-value_10M] | 5.72s | 5.72s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_11-benchmark-gas-value_10M] | 5.62s | 5.62s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_32-benchmark-gas-value_10M] | 5.62s | 5.62s |
| test_system.py::test_selfdestruct_existing[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_10M] | 5.62s | 5.62s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_5-benchmark-gas-value_10M] | 5.62s | 5.62s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALLCODE-transfer_amount_0-benchmark-gas-value_10M] | 5.62s | 5.62s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_10M] | 5.62s | 5.62s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_3-benchmark-gas-value_10M] | 5.54s | 5.54s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_7-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_3-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_256-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_0-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_True-empty_authority_True-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_13-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_7-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_True-empty_authority_False-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_False-empty_authority_True-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_True-empty_authority_False-benchmark-gas-value_10M] | 5.52s | 5.52s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_136279841-benchmark-gas-value_10M] | 5.52s | 5.52s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_1024-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_32-benchmark-gas-value_10M] | 5.42s | 5.42s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_10M] | 5.42s | 5.42s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_3-benchmark-gas-value_10M] | 5.42s | 5.42s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_pow_0x10001-benchmark-gas-value_10M] | 5.42s | 5.42s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_11-benchmark-gas-value_10M] | 5.42s | 5.42s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_0-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_256-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-615b5b-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_pow_0x10001-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALL-transfer_amount_0-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_False-empty_authority_True-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_True-empty_authority_True-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_3-benchmark-gas-value_10M] | 5.32s | 5.32s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_0-transfer_amount_0-benchmark-gas-value_10M] | 5.23s | 5.23s |
| test_control_flow.py::test_jumpis[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 5.23s | 5.23s |
| test_transaction_types.py::test_block_full_data[fork_Osaka-blockchain_test-zero_byte_False-benchmark-gas-value_10M] | 5.23s | 5.23s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.50x max code size-benchmark-gas-value_10M] | 5.22s | 5.22s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_0-benchmark-gas-value_10M] | 5.22s | 5.22s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_1-transfer_amount_0-benchmark-gas-value_10M] | 5.22s | 5.22s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_0-transfer_amount_1-benchmark-gas-value_10M] | 5.14s | 5.14s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_32-benchmark-gas-value_10M] | 5.13s | 5.13s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value, out of gas-benchmark-gas-value_10M] | 5.13s | 5.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_0-benchmark-gas-value_10M] | 5.12s | 5.12s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_256-benchmark-gas-value_10M] | 5.12s | 5.12s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_1024-benchmark-gas-value_10M] | 5.12s | 5.12s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_256-benchmark-gas-value_10M] | 5.12s | 5.12s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_1-transfer_amount_1-benchmark-gas-value_10M] | 5.12s | 5.12s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_11-benchmark-gas-value_10M] | 5.12s | 5.12s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 5.12s | 5.12s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALL-transfer_amount_0-benchmark-gas-value_10M] | 5.05s | 5.05s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_1048576-benchmark-gas-value_10M] | 5.03s | 5.03s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_128b_exp_1024-benchmark-gas-value_10M] | 5.03s | 5.03s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value, revert-benchmark-gas-value_10M] | 4.93s | 4.93s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_3_even-benchmark-gas-value_10M] | 4.93s | 4.93s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_128b_exp_1024-benchmark-gas-value_10M] | 4.92s | 4.92s |
| test_control_flow.py::test_jumps[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 4.83s | 4.83s |
| test_system.py::test_selfdestruct_existing[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_10M] | 4.83s | 4.83s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG3-benchmark-gas-value_10M] | 4.74s | 4.74s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_True-benchmark-gas-value_10M] | 4.73s | 4.73s |
| test_call_context.py::test_callvalue_from_call[fork_Osaka-blockchain_test-non_zero_value_True-benchmark-gas-value_10M] | 4.73s | 4.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_4_exp_heavy-benchmark-gas-value_10M] | 4.72s | 4.72s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_False-benchmark-gas-value_10M] | 4.72s | 4.72s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG3-benchmark-gas-value_10M] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_10M] | 4.67s | 4.67s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_10M] | 4.62s | 4.62s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_10M] | 4.62s | 4.62s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_256b_exp_1024-benchmark-gas-value_10M] | 4.62s | 4.62s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_10M] | 4.62s | 4.62s |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify_wrong_endianness-benchmark-gas-value_10M] | 4.53s | 4.53s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_10M] | 4.52s | 4.52s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG4-benchmark-gas-value_10M] | 4.43s | 4.43s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_32-benchmark-gas-value_10M] | 4.43s | 4.43s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG4-benchmark-gas-value_10M] | 4.42s | 4.42s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG0-benchmark-gas-value_10M] | 4.42s | 4.42s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of zero data-opcode_RETURN-benchmark-gas-value_10M] | 4.42s | 4.42s |
| test_account_query.py::test_ext_account_query_cold[fork_Osaka-blockchain_test-absent_accounts_True-opcode_BALANCE-benchmark-gas-value_10M] | 4.42s | 4.42s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_False-benchmark-gas-value_10M] | 4.42s | 4.42s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of non-zero data-opcode_REVERT-benchmark-gas-value_10M] | 4.42s | 4.42s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG4-benchmark-gas-value_10M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG0-benchmark-gas-value_10M] | 4.33s | 4.33s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_256b_exp_1024-benchmark-gas-value_10M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_10M] | 4.32s | 4.32s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_1_exp_heavy-benchmark-gas-value_10M] | 4.32s | 4.32s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_3_exp_heavy-benchmark-gas-value_10M] | 4.32s | 4.32s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of zero data-opcode_REVERT-benchmark-gas-value_10M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG0-benchmark-gas-value_10M] | 4.32s | 4.32s |
| test_system.py::test_selfdestruct_created[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_10M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG0-benchmark-gas-value_10M] | 4.32s | 4.32s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_512b_exp_1024-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_infinities_2_scalar-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG4-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG4-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG0-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value, out of gas-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_system.py::test_creates_collisions[fork_Osaka-blockchain_test-opcode_CREATE-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG1-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALLCODE-transfer_amount_1-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes without value-opcode_CREATE2-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_0-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG1-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG2-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG0-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG3-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALLCODE-transfer_amount_0-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG1-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_system.py::test_selfdestruct_initcode[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG1-benchmark-gas-value_10M] | 4.14s | 4.14s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG2-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_1024b_exp_1024-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value, out of gas-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_infinities_32_byte_scalar-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG2-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG4-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG0-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG3-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG3-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG0-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_512b_exp_1024-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG3-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG2-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG3-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG1-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SSTORE same value-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with zero data-opcode_CREATE-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_creates_collisions[fork_Osaka-blockchain_test-opcode_CREATE2-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_selfdestruct_created[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_zero_input-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_1024-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG1-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG2-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG2-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG3-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG1-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG1-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALLCODE-transfer_amount_1-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALL-transfer_amount_1-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with zero data-opcode_CREATE-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG1-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes with value-opcode_CREATE-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes with value-opcode_CREATE2-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG2-benchmark-gas-value_10M] | 4.04s | 4.04s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG4-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG0-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_max-transfer_amount_0-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes without value-opcode_CREATE-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_1_pair-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG1-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG1-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG2-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG4-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG2-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_1_pair_empty-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_256-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG0-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG1-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG0-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG1-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG4-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_2_exp_heavy-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_True-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALL-transfer_amount_1-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with zero data-opcode_CREATE-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with zero data-opcode_CREATE2-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of non-zero data-opcode_RETURN-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_transaction_types.py::test_empty_block[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG4-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG2-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG1-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG3-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG3-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG3-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG0-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG0-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG2-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG4-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG3-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG4-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG1-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_1024b_exp_1024-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG0-benchmark-gas-value_10M] | 3.96s | 3.96s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG2-benchmark-gas-value_10M] | 3.94s | 3.94s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG3-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_3_pair-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_2_sets-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG3-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SSTORE_new-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with zero data-opcode_CREATE-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG2-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SSTORE_same-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with zero data-opcode_CREATE2-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_256-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_0-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG4-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG4-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG2-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG4-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value, revert-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with non-zero data-opcode_CREATE-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_32-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG3-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG1-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with zero data-opcode_CREATE2-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_system.py::test_selfdestruct_initcode[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_max-transfer_amount_1-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG4-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG0-benchmark-gas-value_10M] | 3.83s | 3.83s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_10M] | 3.82s | 3.82s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_10M] | 3.82s | 3.82s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_10M] | 3.82s | 3.82s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SSTORE new value-benchmark-gas-value_10M] | 3.82s | 3.82s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_10M] | 3.82s | 3.82s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with zero data-opcode_CREATE2-benchmark-gas-value_10M] | 3.82s | 3.82s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_10M] | 3.82s | 3.82s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_10M] | 3.82s | 3.82s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_1024-benchmark-gas-value_10M] | 3.82s | 3.82s |

## Summary

**Total unique test cases:** 1097

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.15.0 | 1097 | 1074 | 23 | 0 |

---

## reth-v1.11.0


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | zisk-v0.15.0<br/>(237.91KiB) | Avg |
|-----------|-----------|----------|
| test_blake2f.py::test_blake2f[fork_Osaka-blockchain_test-blake2f-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_fp_to_g1-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_pairing_check-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_1-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_12-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_24-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_3-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_6-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify_modular_comp_x_coordinate_exceeds_n-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_point_evaluation.py::test_point_evaluation[fork_Osaka-blockchain_test-point_evaluation-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_CALL-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_CALLCODE-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_DELEGATECALL-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODECOPY-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODESIZE-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_STATICCALL-benchmark-gas-value_10M] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_one_pairing-benchmark-gas-value_10M] | 2m 50.54s | 2m 50.54s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_32-benchmark-gas-value_10M] | 2m 40.69s | 2m 40.69s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_square-benchmark-gas-value_10M] | 2m 40.41s | 2m 40.41s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_32-benchmark-gas-value_10M] | 2m 39.25s | 2m 39.25s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000100-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 2m 38.97s | 2m 38.97s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 2m 38.91s | 2m 38.91s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 2m 38.48s | 2m 38.48s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 2m 38.42s | 2m 38.42s |
| test_call_context.py::test_callvalue_from_origin[fork_Osaka-blockchain_test-non_zero_value_False-benchmark-gas-value_10M] | 2m 38.41s | 2m 38.41s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH2-benchmark-gas-value_10M] | 2m 38.39s | 2m 38.39s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_11-benchmark-gas-value_10M] | 2m 38.34s | 2m 38.34s |
| test_call_context.py::test_callvalue_from_origin[fork_Osaka-blockchain_test-non_zero_value_True-benchmark-gas-value_10M] | 2m 38.28s | 2m 38.28s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_10M] | 2m 37.86s | 2m 37.86s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_10M] | 2m 37.79s | 2m 37.79s |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 2m 37.77s | 2m 37.77s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_10M] | 2m 37.75s | 2m 37.75s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 2m 37.68s | 2m 37.68s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_10M] | 2m 37.67s | 2m 37.67s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_10M] | 2m 37.66s | 2m 37.66s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_32_byte_coord_and_scalar-benchmark-gas-value_10M] | 2m 37.59s | 2m 37.59s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_10240-benchmark-gas-value_10M] | 2m 37.57s | 2m 37.57s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_10M] | 2m 37.49s | 2m 37.49s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_128b_exp_1024-benchmark-gas-value_10M] | 2m 37.09s | 2m 37.09s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_256-benchmark-gas-value_10M] | 2m 36.90s | 2m 36.90s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALL-transfer_amount_0-benchmark-gas-value_10M] | 2m 36.58s | 2m 36.58s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_128b_exp_1024-benchmark-gas-value_10M] | 2m 36.32s | 2m 36.32s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_False-benchmark-gas-value_10M] | 2m 35.68s | 2m 35.68s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG0-benchmark-gas-value_10M] | 2m 35.26s | 2m 35.26s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value, out of gas-benchmark-gas-value_10M] | 2m 35.25s | 2m 35.25s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG1-benchmark-gas-value_10M] | 2m 35.18s | 2m 35.18s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG2-benchmark-gas-value_10M] | 2m 35.07s | 2m 35.07s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_10M] | 2m 35.05s | 2m 35.05s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP7-benchmark-gas-value_10M] | 1m 14.41s | 1m 14.41s |
| test_account_query.py::test_selfbalance[fork_Osaka-blockchain_test-contract_balance_0-benchmark-gas-value_10M] | 1m 14.30s | 1m 14.30s |
| test_account_query.py::test_selfbalance[fork_Osaka-blockchain_test-contract_balance_1-benchmark-gas-value_10M] | 1m 13.99s | 1m 13.99s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP3-benchmark-gas-value_10M] | 1m 13.90s | 1m 13.90s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP1-benchmark-gas-value_10M] | 1m 12.79s | 1m 12.79s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP15-benchmark-gas-value_10M] | 1m 11.49s | 1m 11.49s |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_fp_to_g2-benchmark-gas-value_10M] | 1m 10.59s | 1m 10.59s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP14-benchmark-gas-value_10M] | 1m 10.00s | 1m 10.00s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP4-benchmark-gas-value_10M] | 1m 4.29s | 1m 4.29s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP8-benchmark-gas-value_10M] | 1m 0.29s | 1m 0.29s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP13-benchmark-gas-value_10M] | 59.49s | 59.49s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP5-benchmark-gas-value_10M] | 58.78s | 58.78s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP11-benchmark-gas-value_10M] | 56.58s | 56.58s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP9-benchmark-gas-value_10M] | 54.88s | 54.88s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP12-benchmark-gas-value_10M] | 54.77s | 54.77s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP16-benchmark-gas-value_10M] | 54.67s | 54.67s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP6-benchmark-gas-value_10M] | 54.07s | 54.07s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP2-benchmark-gas-value_10M] | 53.77s | 53.77s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP10-benchmark-gas-value_10M] | 52.08s | 52.08s |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g1msm-benchmark-gas-value_10M] | 48.27s | 48.27s |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_128-benchmark-gas-value_10M] | 45.66s | 45.66s |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_64-benchmark-gas-value_10M] | 44.37s | 44.37s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_PREVRANDAO-benchmark-gas-value_10M] | 42.66s | 42.66s |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g2add-benchmark-gas-value_10M] | 41.16s | 41.16s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_191-benchmark-gas-value_10M] | 41.06s | 41.06s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_255-benchmark-gas-value_10M] | 39.37s | 39.37s |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_16-benchmark-gas-value_10M] | 37.77s | 37.77s |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_128-benchmark-gas-value_10M] | 36.16s | 36.16s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_24-benchmark-gas-value_10M] | 34.66s | 34.66s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_400_gas_exp_heavy-benchmark-gas-value_10M] | 34.06s | 34.06s |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g2msm-benchmark-gas-value_10M] | 33.56s | 33.56s |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_64-benchmark-gas-value_10M] | 33.36s | 33.36s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_2-benchmark-gas-value_10M] | 31.35s | 31.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_128-benchmark-gas-value_10M] | 31.06s | 31.06s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_16b_exp_320-benchmark-gas-value_10M] | 30.96s | 30.96s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_208_gas_balanced-benchmark-gas-value_10M] | 30.65s | 30.65s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_127-benchmark-gas-value_10M] | 30.45s | 30.45s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_12-benchmark-gas-value_10M] | 30.25s | 30.25s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_65-benchmark-gas-value_10M] | 29.75s | 29.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_3-benchmark-gas-value_10M] | 29.75s | 29.75s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_191-benchmark-gas-value_10M] | 29.45s | 29.45s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH31-benchmark-gas-value_10M] | 29.45s | 29.45s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_765_gas_exp_heavy-benchmark-gas-value_10M] | 29.35s | 29.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1360_gas_balanced-benchmark-gas-value_10M] | 29.05s | 29.05s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_32-benchmark-gas-value_10M] | 28.95s | 28.95s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add-benchmark-gas-value_10M] | 28.85s | 28.85s |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_16-benchmark-gas-value_10M] | 28.83s | 28.83s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_24b_exp_168-benchmark-gas-value_10M] | 28.65s | 28.65s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_64-benchmark-gas-value_10M] | 28.65s | 28.65s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_63-benchmark-gas-value_10M] | 28.45s | 28.45s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_677_gas_base_heavy-benchmark-gas-value_10M] | 28.25s | 28.25s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_4-benchmark-gas-value_10M] | 28.25s | 28.25s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_40-benchmark-gas-value_10M] | 27.75s | 27.75s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_191-benchmark-gas-value_10M] | 27.75s | 27.75s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH32-benchmark-gas-value_10M] | 27.75s | 27.75s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add_1_2-benchmark-gas-value_10M] | 27.55s | 27.55s |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_1-benchmark-gas-value_10M] | 27.25s | 27.25s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH30-benchmark-gas-value_10M] | 26.65s | 26.65s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_36-benchmark-gas-value_10M] | 26.35s | 26.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_600_gas_exp_heavy-benchmark-gas-value_10M] | 26.25s | 26.25s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SDIV-1-benchmark-gas-value_10M] | 26.05s | 26.05s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_zkevm_worst_case-benchmark-gas-value_10M] | 25.95s | 25.95s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_191-benchmark-gas-value_10M] | 25.85s | 25.85s |
| test_keccak.py::test_keccak_max_permutations[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 25.75s | 25.75s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_COINBASE-benchmark-gas-value_10M] | 25.75s | 25.75s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_6-benchmark-gas-value_10M] | 25.65s | 25.65s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_exp_heavy-benchmark-gas-value_10M] | 25.25s | 25.25s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_8_exp_648-benchmark-gas-value_10M] | 25.05s | 25.05s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SDIV-0-benchmark-gas-value_10M] | 25.05s | 25.05s |
| test_call_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_ADDRESS-benchmark-gas-value_10M] | 24.95s | 24.95s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_255-benchmark-gas-value_10M] | 24.95s | 24.95s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH29-benchmark-gas-value_10M] | 24.85s | 24.85s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add_infinities-benchmark-gas-value_10M] | 24.75s | 24.75s |
| test_call_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_CALLER-benchmark-gas-value_10M] | 24.75s | 24.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_40-benchmark-gas-value_10M] | 24.45s | 24.45s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH28-benchmark-gas-value_10M] | 24.44s | 24.44s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_800_gas_exp_heavy-benchmark-gas-value_10M] | 24.35s | 24.35s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_32-benchmark-gas-value_10M] | 24.35s | 24.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_215_gas_exp_heavy-benchmark-gas-value_10M] | 24.15s | 24.15s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH27-benchmark-gas-value_10M] | 23.94s | 23.94s |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g1add-benchmark-gas-value_10M] | 23.84s | 23.84s |
| test_comparison.py::test_iszero[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 23.84s | 23.84s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_256-benchmark-gas-value_10M] | 23.64s | 23.64s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_SGT--benchmark-gas-value_10M] | 23.64s | 23.64s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_1024-benchmark-gas-value_10M] | 23.55s | 23.55s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_256-benchmark-gas-value_10M] | 23.55s | 23.55s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_255-benchmark-gas-value_10M] | 23.44s | 23.44s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_96-benchmark-gas-value_10M] | 23.35s | 23.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_96-benchmark-gas-value_10M] | 23.15s | 23.15s |
| test_tx_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_ORIGIN-benchmark-gas-value_10M] | 23.15s | 23.15s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_256-benchmark-gas-value_10M] | 23.15s | 23.15s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_8b_exp_896-benchmark-gas-value_10M] | 23.14s | 23.14s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_example_1-benchmark-gas-value_10M] | 22.94s | 22.94s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_3_exp_8-benchmark-gas-value_10M] | 22.64s | 22.64s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_127-benchmark-gas-value_10M] | 22.55s | 22.55s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH25-benchmark-gas-value_10M] | 22.45s | 22.45s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_DIV-0-benchmark-gas-value_10M] | 22.45s | 22.45s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_1-benchmark-gas-value_10M] | 22.44s | 22.44s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_EQ--benchmark-gas-value_10M] | 22.34s | 22.34s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH23-benchmark-gas-value_10M] | 22.24s | 22.24s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_852_gas_exp_heavy-benchmark-gas-value_10M] | 22.24s | 22.24s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH26-benchmark-gas-value_10M] | 22.24s | 22.24s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MOD--benchmark-gas-value_10M] | 22.24s | 22.24s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_DIV-1-benchmark-gas-value_10M] | 22.15s | 22.15s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_255-benchmark-gas-value_10M] | 22.04s | 22.04s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-empty-opcode_RETURN-benchmark-gas-value_10M] | 22.04s | 22.04s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_0-benchmark-gas-value_10M] | 21.95s | 21.95s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_298_gas_exp_heavy-benchmark-gas-value_10M] | 21.95s | 21.95s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH21-benchmark-gas-value_10M] | 21.84s | 21.84s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH24-benchmark-gas-value_10M] | 21.74s | 21.74s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-empty-opcode_REVERT-benchmark-gas-value_10M] | 21.54s | 21.54s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_127-benchmark-gas-value_10M] | 21.44s | 21.44s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH20-benchmark-gas-value_10M] | 21.34s | 21.34s |
| test_tx_context.py::test_blobhash[fork_Osaka-blockchain_test-one_blob-benchmark-gas-value_10M] | 21.06s | 21.06s |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_1-benchmark-gas-value_10M] | 20.94s | 20.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 20.94s | 20.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 20.74s | 20.74s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_8_exp_896-benchmark-gas-value_10M] | 20.64s | 20.64s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_STATICCALL-benchmark-gas-value_10M] | 20.54s | 20.54s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 20.54s | 20.54s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 20.45s | 20.45s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_STATICCALL-benchmark-gas-value_10M] | 20.44s | 20.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_STATICCALL-benchmark-gas-value_10M] | 20.35s | 20.35s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_63-benchmark-gas-value_10M] | 20.34s | 20.34s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_CALL-benchmark-gas-value_10M] | 20.34s | 20.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 20.24s | 20.24s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_CALL-benchmark-gas-value_10M] | 20.24s | 20.24s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b'ff'-benchmark-gas-value_10M] | 20.14s | 20.14s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH22-benchmark-gas-value_10M] | 20.14s | 20.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_CALL-benchmark-gas-value_10M] | 20.04s | 20.04s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_10M] | 20.04s | 20.04s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH19-benchmark-gas-value_10M] | 20.04s | 20.04s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_STATICCALL-benchmark-gas-value_10M] | 20.04s | 20.04s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_10M] | 19.94s | 19.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 19.94s | 19.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 19.84s | 19.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 19.75s | 19.75s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_127-benchmark-gas-value_10M] | 19.74s | 19.74s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 19.64s | 19.64s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 19.44s | 19.44s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SMOD--benchmark-gas-value_10M] | 19.44s | 19.44s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_32-benchmark-gas-value_10M] | 19.34s | 19.34s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n2-benchmark-gas-value_10M] | 19.34s | 19.34s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_CALL-benchmark-gas-value_10M] | 19.24s | 19.24s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_CALLCODE-benchmark-gas-value_10M] | 19.15s | 19.15s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_balanced-benchmark-gas-value_10M] | 19.04s | 19.04s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b'ff'-benchmark-gas-value_10M] | 18.94s | 18.94s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_CALL-benchmark-gas-value_10M] | 18.94s | 18.94s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_CALLCODE-benchmark-gas-value_10M] | 18.94s | 18.94s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH16-benchmark-gas-value_10M] | 18.74s | 18.74s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_CALLCODE-benchmark-gas-value_10M] | 18.64s | 18.64s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_256-benchmark-gas-value_10M] | 18.64s | 18.64s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_0-benchmark-gas-value_10M] | 18.44s | 18.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_STATICCALL-benchmark-gas-value_10M] | 18.44s | 18.44s |
| test_sha256.py::test_sha256[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 18.44s | 18.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_CALLCODE-benchmark-gas-value_10M] | 18.34s | 18.34s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b'ff'-benchmark-gas-value_10M] | 18.34s | 18.34s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b'ff'-benchmark-gas-value_10M] | 18.24s | 18.24s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1360n1-benchmark-gas-value_10M] | 18.24s | 18.24s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_1024-benchmark-gas-value_10M] | 18.14s | 18.14s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 18.04s | 18.04s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_10M] | 18.04s | 18.04s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_10M] | 18.04s | 18.04s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b'ff'-benchmark-gas-value_10M] | 17.94s | 17.94s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_10M] | 17.94s | 17.94s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n3-benchmark-gas-value_10M] | 17.74s | 17.74s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_256-benchmark-gas-value_10M] | 17.74s | 17.74s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 17.64s | 17.64s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_63-benchmark-gas-value_10M] | 17.64s | 17.64s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_32-benchmark-gas-value_10M] | 17.64s | 17.64s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_10M] | 17.54s | 17.54s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH18-benchmark-gas-value_10M] | 17.54s | 17.54s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b'ff'-benchmark-gas-value_10M] | 17.53s | 17.53s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_1024-benchmark-gas-value_10M] | 17.44s | 17.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 17.44s | 17.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 17.44s | 17.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_CALLCODE-benchmark-gas-value_10M] | 17.44s | 17.44s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1360n2-benchmark-gas-value_10M] | 17.24s | 17.24s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 17.24s | 17.24s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1349n1-benchmark-gas-value_10M] | 17.24s | 17.24s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_CALL-benchmark-gas-value_10M] | 17.24s | 17.24s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_1-benchmark-gas-value_10M] | 17.14s | 17.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_CALL-benchmark-gas-value_10M] | 17.14s | 17.14s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_10M] | 17.14s | 17.14s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 17.04s | 17.04s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_STATICCALL-benchmark-gas-value_10M] | 17.04s | 17.04s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH15-benchmark-gas-value_10M] | 17.04s | 17.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 17.04s | 17.04s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_10M] | 16.94s | 16.94s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_10M] | 16.94s | 16.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 16.94s | 16.94s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_1_even-benchmark-gas-value_10M] | 16.84s | 16.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 16.84s | 16.84s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_CALL-benchmark-gas-value_10M] | 16.74s | 16.74s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 16.74s | 16.74s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_10M] | 16.74s | 16.74s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_10M] | 16.64s | 16.64s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 16.64s | 16.64s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_STATICCALL-benchmark-gas-value_10M] | 16.64s | 16.64s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_10M] | 16.44s | 16.44s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_63-benchmark-gas-value_10M] | 16.34s | 16.34s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_cover_windows-benchmark-gas-value_10M] | 16.34s | 16.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 16.34s | 16.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 16.34s | 16.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 16.34s | 16.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 16.34s | 16.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 16.34s | 16.34s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_CALLCODE-benchmark-gas-value_10M] | 16.34s | 16.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 16.33s | 16.33s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH14-benchmark-gas-value_10M] | 16.24s | 16.24s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_10M] | 16.23s | 16.23s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_0-benchmark-gas-value_10M] | 16.14s | 16.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_10M] | 16.14s | 16.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_CALLCODE-benchmark-gas-value_10M] | 16.14s | 16.14s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_10M] | 16.14s | 16.14s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH17-benchmark-gas-value_10M] | 16.04s | 16.04s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_10M] | 15.94s | 15.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 15.94s | 15.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 15.94s | 15.94s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_10M] | 15.94s | 15.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 15.94s | 15.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 15.84s | 15.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 15.84s | 15.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 15.84s | 15.84s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_2_even-benchmark-gas-value_10M] | 15.84s | 15.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 15.74s | 15.74s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_CALLCODE-benchmark-gas-value_10M] | 15.74s | 15.74s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_10M] | 15.64s | 15.64s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH13-benchmark-gas-value_10M] | 15.64s | 15.64s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 15.63s | 15.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_10M] | 15.54s | 15.54s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_10M] | 15.44s | 15.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 15.44s | 15.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_STATICCALL-benchmark-gas-value_10M] | 15.34s | 15.34s |
| test_ecrecover.py::test_ecrecover[fork_Osaka-blockchain_test-ecrecover-benchmark-gas-value_10M] | 15.34s | 15.34s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_10M] | 15.34s | 15.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 15.24s | 15.24s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 15.13s | 15.13s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 15.04s | 15.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 15.04s | 15.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 14.94s | 14.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 14.94s | 14.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 14.94s | 14.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 14.93s | 14.93s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 14.84s | 14.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 14.84s | 14.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 14.74s | 14.74s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 14.74s | 14.74s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 14.64s | 14.64s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 14.63s | 14.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 14.63s | 14.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 14.60s | 14.60s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 14.54s | 14.54s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_10M] | 14.54s | 14.54s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 14.54s | 14.54s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 14.53s | 14.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_10M] | 14.44s | 14.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_10M] | 14.44s | 14.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_10M] | 14.44s | 14.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_10M] | 14.43s | 14.43s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_3-benchmark-gas-value_10M] | 14.35s | 14.35s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of zero data-opcode_REVERT-benchmark-gas-value_10M] | 14.34s | 14.34s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_two_pairings-benchmark-gas-value_10M] | 14.24s | 14.24s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_2_pair-benchmark-gas-value_10M] | 14.14s | 14.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_10M] | 14.04s | 14.04s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_408_gas_balanced-benchmark-gas-value_10M] | 14.03s | 14.03s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH12-benchmark-gas-value_10M] | 13.75s | 13.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_marius_1_even-benchmark-gas-value_10M] | 13.73s | 13.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_600_gas_balanced-benchmark-gas-value_10M] | 13.64s | 13.64s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of zero data-opcode_RETURN-benchmark-gas-value_10M] | 13.63s | 13.63s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_qube-benchmark-gas-value_10M] | 13.34s | 13.34s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD--benchmark-gas-value_10M] | 13.24s | 13.24s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n1-benchmark-gas-value_10M] | 13.04s | 13.04s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SSTORE new value-benchmark-gas-value_10M] | 13.03s | 13.03s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH11-benchmark-gas-value_10M] | 12.94s | 12.94s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD--benchmark-gas-value_10M] | 12.93s | 12.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_4_pair-benchmark-gas-value_10M] | 12.54s | 12.54s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1152n1-benchmark-gas-value_10M] | 12.14s | 12.14s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_base_heavy-benchmark-gas-value_10M] | 11.83s | 11.83s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_True-benchmark-gas-value_10M] | 11.83s | 11.83s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_5_pair-benchmark-gas-value_10M] | 11.73s | 11.73s |
| test_transaction_types.py::test_block_full_data[fork_Osaka-blockchain_test-zero_byte_True-benchmark-gas-value_10M] | 11.73s | 11.73s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH8-benchmark-gas-value_10M] | 11.63s | 11.63s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH9-benchmark-gas-value_10M] | 11.63s | 11.63s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH10-benchmark-gas-value_10M] | 11.63s | 11.63s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_False-benchmark-gas-value_10M] | 11.53s | 11.53s |
| test_bitwise.py::test_clz_diff[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 11.53s | 11.53s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_264_exp_2-benchmark-gas-value_10M] | 11.43s | 11.43s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH7-benchmark-gas-value_10M] | 11.23s | 11.23s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_10M] | 11.23s | 11.23s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SAR--benchmark-gas-value_10M] | 11.13s | 11.13s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_6-benchmark-gas-value_10M] | 10.94s | 10.94s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_767_gas_balanced-benchmark-gas-value_10M] | 10.93s | 10.93s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_square-benchmark-gas-value_10M] | 10.93s | 10.93s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of non-zero data-opcode_REVERT-benchmark-gas-value_10M] | 10.83s | 10.83s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_32-benchmark-gas-value_10M] | 10.73s | 10.73s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH6-benchmark-gas-value_10M] | 10.73s | 10.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_996_gas_balanced-benchmark-gas-value_10M] | 10.63s | 10.63s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_12-benchmark-gas-value_10M] | 10.43s | 10.43s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-5b-benchmark-gas-value_10M] | 10.33s | 10.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_0-benchmark-gas-value_10M] | 10.23s | 10.23s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_256-benchmark-gas-value_10M] | 10.23s | 10.23s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_1024-benchmark-gas-value_10M] | 10.23s | 10.23s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_256_exp_2-benchmark-gas-value_10M] | 10.13s | 10.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_800_gas_base_heavy-benchmark-gas-value_10M] | 10.13s | 10.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_408_gas_base_heavy-benchmark-gas-value_10M] | 9.93s | 9.93s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of non-zero data-opcode_RETURN-benchmark-gas-value_10M] | 9.93s | 9.93s |
| test_bitwise.py::test_shifts[fork_Osaka-blockchain_test-opcode_SAR-benchmark-gas-value_10M] | 9.83s | 9.83s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_32-benchmark-gas-value_10M] | 9.83s | 9.83s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_qube-benchmark-gas-value_10M] | 9.83s | 9.83s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_1024-benchmark-gas-value_10M] | 9.83s | 9.83s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1045_gas_base_heavy-benchmark-gas-value_10M] | 9.73s | 9.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_867_gas_base_heavy-benchmark-gas-value_10M] | 9.53s | 9.53s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_616_gas_base_heavy-benchmark-gas-value_10M] | 9.46s | 9.46s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_24-benchmark-gas-value_10M] | 9.43s | 9.43s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_BLOBBASEFEE-benchmark-gas-value_10M] | 9.43s | 9.43s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_0-benchmark-gas-value_10M] | 9.43s | 9.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_0-benchmark-gas-value_10M] | 9.33s | 9.33s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH4-benchmark-gas-value_10M] | 9.23s | 9.23s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_256-benchmark-gas-value_10M] | 9.13s | 9.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_1024-benchmark-gas-value_10M] | 9.13s | 9.13s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 9.13s | 9.13s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH5-benchmark-gas-value_10M] | 9.13s | 9.13s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_0-benchmark-gas-value_10M] | 9.03s | 9.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_256-benchmark-gas-value_10M] | 9.03s | 9.03s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SHR--benchmark-gas-value_10M] | 9.03s | 9.03s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_1024-benchmark-gas-value_10M] | 9.03s | 9.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_1024-benchmark-gas-value_10M] | 9.03s | 9.03s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_256-benchmark-gas-value_10M] | 9.03s | 9.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_32-benchmark-gas-value_10M] | 9.03s | 9.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_10240-benchmark-gas-value_10M] | 8.93s | 8.93s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_256-benchmark-gas-value_10M] | 8.93s | 8.93s |
| test_tx_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_GASPRICE-benchmark-gas-value_10M] | 8.93s | 8.93s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_0-benchmark-gas-value_10M] | 8.83s | 8.83s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1-benchmark-gas-value_10M] | 8.83s | 8.83s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_0-benchmark-gas-value_10M] | 8.83s | 8.83s |
| test_bitwise.py::test_shifts[fork_Osaka-blockchain_test-opcode_SHR-benchmark-gas-value_10M] | 8.73s | 8.73s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_256-benchmark-gas-value_10M] | 8.73s | 8.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_32-benchmark-gas-value_10M] | 8.73s | 8.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_32-benchmark-gas-value_10M] | 8.73s | 8.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_32-benchmark-gas-value_10M] | 8.73s | 8.73s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_256-benchmark-gas-value_10M] | 8.73s | 8.73s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_1024-benchmark-gas-value_10M] | 8.64s | 8.64s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SHL--benchmark-gas-value_10M] | 8.63s | 8.63s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_qube-benchmark-gas-value_10M] | 8.63s | 8.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_1024-benchmark-gas-value_10M] | 8.63s | 8.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_1024-benchmark-gas-value_10M] | 8.63s | 8.63s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_0-benchmark-gas-value_10M] | 8.63s | 8.63s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 8.53s | 8.53s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.25x max code size-benchmark-gas-value_10M] | 8.53s | 8.53s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_32-benchmark-gas-value_10M] | 8.53s | 8.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 8.43s | 8.43s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_10M] | 8.43s | 8.43s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0 bytes-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_10240-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_1048576-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_qube-benchmark-gas-value_10M] | 8.33s | 8.33s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_0-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_qube-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_CHAINID-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_256-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_32-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_0-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_256-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_0-benchmark-gas-value_10M] | 8.23s | 8.23s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_256-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_call_context.py::test_callvalue_from_call[fork_Osaka-blockchain_test-non_zero_value_False-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_10240-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH3-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_256-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_32-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_account_query.py::test_codesize[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1024_exp_2-benchmark-gas-value_10M] | 8.13s | 8.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_32-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH0-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_control_flow.py::test_jumpdests[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_tx_context.py::test_blobhash[fork_Osaka-blockchain_test-no_blobs-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_0-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_32-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_1024-benchmark-gas-value_10M] | 8.03s | 8.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_0-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_0-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_1024-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_256-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_32-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_BASEFEE-benchmark-gas-value_10M] | 7.93s | 7.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_1024-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_call_context.py::test_returndatasize_zero[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_SLT--benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_0-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-00-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-max code size-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SIGNEXTEND--benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_256-benchmark-gas-value_10M] | 7.83s | 7.83s |
| test_control_flow.py::test_pc_op[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_0-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_256-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_32-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_NUMBER-benchmark-gas-value_10M] | 7.73s | 7.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_256-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_10240-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 7.63s | 7.63s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_11-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_32-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_0-benchmark-gas-value_10M] | 7.53s | 7.53s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_EXP--benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_256-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_0-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_256-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_256-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-605b5b-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_pow_0x10001-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-max code size-benchmark-gas-value_10M] | 7.43s | 7.43s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_136279841-benchmark-gas-value_10M] | 7.35s | 7.35s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_TIMESTAMP-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_0-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_0-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_10M] | 7.33s | 7.33s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_32-benchmark-gas-value_10M] | 7.24s | 7.24s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_11-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP7-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_bitwise.py::test_clz_same[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SSTORE same value-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_GASLIMIT-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000007-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_5-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_control_flow.py::test_gas_op[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1000-benchmark-gas-value_10M] | 7.23s | 7.23s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_BALANCE-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SUB--benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_1024-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_0-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_5-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.75x max code size-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_32-benchmark-gas-value_10M] | 7.13s | 7.13s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_11-benchmark-gas-value_10M] | 7.04s | 7.04s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_7-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_13-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.50x max code size-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_11-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_False-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_BALANCE-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_1024-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_11-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_136279841-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_13-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_10M] | 7.03s | 7.03s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MUL--benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_1024-benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0 bytes-benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_3-benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_13-benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_3-benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_5-benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_0-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_LT--benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_5-benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_256-benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_10240-benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 6.93s | 6.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_3-benchmark-gas-value_10M] | 6.92s | 6.92s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_0-benchmark-gas-value_10M] | 6.92s | 6.92s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_10M] | 6.92s | 6.92s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_7-benchmark-gas-value_10M] | 6.88s | 6.88s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_square-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_7-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_256-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_256-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_BALANCE-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_7-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_32-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_5-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_0-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_True-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 6.83s | 6.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_136279841-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_13-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_13-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_136279841-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_0-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_1048576-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.25x max code size-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_136279841-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_5-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_1024-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_7-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_bitwise.py::test_not_op[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 6.73s | 6.73s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_10M] | 6.65s | 6.65s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_7-benchmark-gas-value_10M] | 6.63s | 6.63s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_3-benchmark-gas-value_10M] | 6.63s | 6.63s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_136279841-benchmark-gas-value_10M] | 6.63s | 6.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_1024-benchmark-gas-value_10M] | 6.63s | 6.63s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_0-benchmark-gas-value_10M] | 6.63s | 6.63s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_13-benchmark-gas-value_10M] | 6.63s | 6.63s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_10M] | 6.63s | 6.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_0-benchmark-gas-value_10M] | 6.63s | 6.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 6.63s | 6.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 6.63s | 6.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 6.63s | 6.63s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_3-benchmark-gas-value_10M] | 6.63s | 6.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_1048576-benchmark-gas-value_10M] | 6.62s | 6.62s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_64b_exp_512-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_256-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_1024-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_256-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_BALANCE-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_256-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_32-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_32-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_1048576-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 6.53s | 6.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_0-benchmark-gas-value_10M] | 6.47s | 6.47s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_GT--benchmark-gas-value_10M] | 6.44s | 6.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 6.43s | 6.43s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_1024-benchmark-gas-value_10M] | 6.43s | 6.43s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_3-benchmark-gas-value_10M] | 6.43s | 6.43s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_10M] | 6.43s | 6.43s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 6.43s | 6.43s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_ADD--benchmark-gas-value_10M] | 6.43s | 6.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 6.43s | 6.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 6.43s | 6.43s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 6.43s | 6.43s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP13-benchmark-gas-value_10M] | 6.43s | 6.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 6.43s | 6.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 6.42s | 6.42s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_10M] | 6.42s | 6.42s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000010-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 6.35s | 6.35s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000005-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_OR--benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_1024-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_0-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_64b_exp_512-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000100-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_256-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_1048576-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_32-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_BALANCE-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_32-benchmark-gas-value_10M] | 6.33s | 6.33s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_BALANCE-benchmark-gas-value_10M] | 6.31s | 6.31s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP1-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000f-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_1048576-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP2-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP3-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_32-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP11-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP5-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000a-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_1_2_32_byte_scalar-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_AND--benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP4-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000a-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 6.23s | 6.23s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_10M] | 6.22s | 6.22s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 6.22s | 6.22s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 6.22s | 6.22s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000009-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 6.22s | 6.22s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 6.15s | 6.15s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_10M] | 6.15s | 6.15s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 6.14s | 6.14s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_256-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_1024-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000d-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000011-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_32-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-605b-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP12-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000c-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_32-benchmark-gas-value_10M] | 6.13s | 6.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_256-benchmark-gas-value_10M] | 6.12s | 6.12s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 6.12s | 6.12s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 6.06s | 6.06s |
| test_identity.py::test_identity[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP8-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000001-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-615b5b5b-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000002-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000005-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000009-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_10240-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_32-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP10-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP16-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP9-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000f-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_32-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_BYTE--benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_0-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000e-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000010-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_32-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b''-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_256-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000008-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000008-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 6.03s | 6.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000b-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000e-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_BALANCE-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_square-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b''-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000004-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000007-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_1024-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000006-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_0-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_0-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_256-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_0-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP14-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000003-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000004-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000b-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 5.93s | 5.93s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.50x max code size-benchmark-gas-value_10M] | 5.92s | 5.92s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_XOR--benchmark-gas-value_10M] | 5.92s | 5.92s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_1048576-benchmark-gas-value_10M] | 5.92s | 5.92s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000002-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 5.92s | 5.92s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_True-empty_authority_False-benchmark-gas-value_10M] | 5.91s | 5.91s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_BALANCE-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_1024-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP6-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_0-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_1024-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_True-empty_authority_True-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000006-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000c-blockchain_test-transfer_amount_1-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_256-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP15-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH1-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000001-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000d-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_32-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b''-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_10M] | 5.83s | 5.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000003-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 5.82s | 5.82s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_10M] | 5.78s | 5.78s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_32-benchmark-gas-value_10M] | 5.75s | 5.75s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_pow_0x10001-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_False-empty_authority_True-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_True-empty_authority_False-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_account_query.py::test_ext_account_query_cold[fork_Osaka-blockchain_test-absent_accounts_False-opcode_BALANCE-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_pow_0x10001-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_False-empty_authority_False-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b''-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_0-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_256-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_ripemd160.py::test_ripemd160[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value, revert-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_10M] | 5.73s | 5.73s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_10M] | 5.72s | 5.72s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_32-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_256-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_32-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_False-empty_authority_False-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000011-blockchain_test-transfer_amount_0-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_0-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_0-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_32-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_control_flow.py::test_jump_benchmark[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_False-empty_authority_True-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_10M] | 5.63s | 5.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_10M] | 5.62s | 5.62s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_False-empty_authority_True-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_1024-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_True-empty_authority_True-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_True-empty_authority_True-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_False-empty_authority_True-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_32-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_control_flow.py::test_jumpis[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value, out of gas-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_True-empty_authority_False-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_True-empty_authority_False-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_10M] | 5.53s | 5.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_False-empty_authority_False-benchmark-gas-value_10M] | 5.52s | 5.52s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_10240-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_1024-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_0-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_False-empty_authority_False-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_1024-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSLOAD-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_256-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_True-empty_authority_True-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_10M] | 5.43s | 5.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_32-benchmark-gas-value_10M] | 5.42s | 5.42s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_pow_0x10001-benchmark-gas-value_10M] | 5.42s | 5.42s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-615b5b-benchmark-gas-value_10M] | 5.34s | 5.34s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_256-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_256-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_0-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_1024-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b''-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_1048576-benchmark-gas-value_10M] | 5.33s | 5.33s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_512-benchmark-gas-value_10M] | 5.32s | 5.32s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.75x max code size-benchmark-gas-value_10M] | 5.23s | 5.23s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b''-benchmark-gas-value_10M] | 5.23s | 5.23s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_1024-benchmark-gas-value_10M] | 5.23s | 5.23s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_10M] | 5.23s | 5.23s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_square-benchmark-gas-value_10M] | 5.23s | 5.23s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_10M] | 5.23s | 5.23s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value-benchmark-gas-value_10M] | 5.23s | 5.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_10M] | 5.22s | 5.22s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_0-benchmark-gas-value_10M] | 5.22s | 5.22s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_256-benchmark-gas-value_10M] | 5.22s | 5.22s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_0-benchmark-gas-value_10M] | 5.13s | 5.13s |
| test_control_flow.py::test_jumps[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 5.13s | 5.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_pow_0x10001-benchmark-gas-value_10M] | 5.13s | 5.13s |
| test_transaction_types.py::test_block_full_data[fork_Osaka-blockchain_test-zero_byte_False-benchmark-gas-value_10M] | 5.13s | 5.13s |
| test_call_context.py::test_callvalue_from_call[fork_Osaka-blockchain_test-non_zero_value_True-benchmark-gas-value_10M] | 5.03s | 5.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_1024-benchmark-gas-value_10M] | 5.03s | 5.03s |
| test_system.py::test_selfdestruct_existing[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_10M] | 4.93s | 4.93s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_3_even-benchmark-gas-value_10M] | 4.93s | 4.93s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_4_exp_heavy-benchmark-gas-value_10M] | 4.83s | 4.83s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_1-transfer_amount_0-benchmark-gas-value_10M] | 4.73s | 4.73s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_1_2_2_scalar-benchmark-gas-value_10M] | 4.72s | 4.72s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_32-benchmark-gas-value_10M] | 4.63s | 4.63s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSLOAD-benchmark-gas-value_10M] | 4.63s | 4.63s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_0-transfer_amount_1-benchmark-gas-value_10M] | 4.63s | 4.63s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_256b_exp_1024-benchmark-gas-value_10M] | 4.63s | 4.63s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_10M] | 4.63s | 4.63s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_1-transfer_amount_1-benchmark-gas-value_10M] | 4.63s | 4.63s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_0-transfer_amount_0-benchmark-gas-value_10M] | 4.62s | 4.62s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_256b_exp_1024-benchmark-gas-value_10M] | 4.53s | 4.53s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value, out of gas-benchmark-gas-value_10M] | 4.53s | 4.53s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value, revert-benchmark-gas-value_10M] | 4.53s | 4.53s |
| test_system.py::test_selfdestruct_existing[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_10M] | 4.53s | 4.53s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG2-benchmark-gas-value_10M] | 4.43s | 4.43s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALLCODE-transfer_amount_0-benchmark-gas-value_10M] | 4.43s | 4.43s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value-benchmark-gas-value_10M] | 4.42s | 4.42s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_10M] | 4.33s | 4.33s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_infinities_32_byte_scalar-benchmark-gas-value_10M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_10M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_10M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_10M] | 4.33s | 4.33s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_100000-benchmark-gas-value_10M] | 4.33s | 4.33s |
| test_account_query.py::test_ext_account_query_cold[fork_Osaka-blockchain_test-absent_accounts_True-opcode_BALANCE-benchmark-gas-value_10M] | 4.33s | 4.33s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_32-benchmark-gas-value_10M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_10M] | 4.26s | 4.26s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value, out of gas-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG2-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG3-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALLCODE-transfer_amount_0-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_1024-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG2-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG1-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG2-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG3-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_1024b_exp_1024-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_True-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALLCODE-transfer_amount_1-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes without value-opcode_CREATE2-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of non-zero data-opcode_RETURN-benchmark-gas-value_10M] | 4.23s | 4.23s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_1_pair_empty-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG4-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG4-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_2_exp_heavy-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_True-benchmark-gas-value_10M] | 4.22s | 4.22s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes without value-opcode_CREATE-benchmark-gas-value_10M] | 4.15s | 4.15s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG4-benchmark-gas-value_10M] | 4.15s | 4.15s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG0-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG2-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALL-transfer_amount_1-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with zero data-opcode_CREATE-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG1-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG0-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG3-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG1-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG3-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG0-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_example_2-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value, revert-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALL-transfer_amount_0-benchmark-gas-value_10M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG3-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG4-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_3_exp_heavy-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of non-zero data-opcode_REVERT-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of zero data-opcode_RETURN-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_max-transfer_amount_0-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_infinities_2_scalar-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG4-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG0-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG3-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG4-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALLCODE-transfer_amount_1-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG2-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with zero data-opcode_CREATE2-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of zero data-opcode_REVERT-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_system.py::test_selfdestruct_initcode[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG4-benchmark-gas-value_10M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG3-benchmark-gas-value_10M] | 4.06s | 4.06s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_2_sets-benchmark-gas-value_10M] | 4.04s | 4.04s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG3-benchmark-gas-value_10M] | 4.04s | 4.04s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG0-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_256-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG3-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG3-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG2-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG0-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG3-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SSTORE_new-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with non-zero data-opcode_CREATE-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_system.py::test_creates_collisions[fork_Osaka-blockchain_test-opcode_CREATE-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_1_pair-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_0-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG3-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG1-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG3-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG1-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG1-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG0-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG1-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_512b_exp_1024-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_512b_exp_1024-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_1_exp_heavy-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes with value-opcode_CREATE-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with zero data-opcode_CREATE-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_system.py::test_creates_collisions[fork_Osaka-blockchain_test-opcode_CREATE2-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_system.py::test_selfdestruct_initcode[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_transaction_types.py::test_empty_block[fork_Osaka-blockchain_test-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG2-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG1-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG2-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG4-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SSTORE_same-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_system.py::test_selfdestruct_created[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_10M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG0-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG4-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG4-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG3-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with zero data-opcode_CREATE-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG1-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_system.py::test_selfdestruct_created[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_10M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG3-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_1024-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG0-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG1-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_32-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG2-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG4-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG2-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG4-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG4-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG2-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1000000-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALL-transfer_amount_1-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_256-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG2-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG1-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG0-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG0-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG4-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG0-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_1024b_exp_1024-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value, revert-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes with value-opcode_CREATE2-benchmark-gas-value_10M] | 3.93s | 3.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_3_pair-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_zero_input-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG0-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG1-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG0-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG1-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SSTORE same value-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with zero data-opcode_CREATE-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG4-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG2-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify_wrong_endianness-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with zero data-opcode_CREATE2-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG1-benchmark-gas-value_10M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_10M] | 3.83s | 3.83s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG3-benchmark-gas-value_10M] | 3.83s | 3.83s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_max-transfer_amount_1-benchmark-gas-value_10M] | 3.83s | 3.83s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG1-benchmark-gas-value_10M] | 3.83s | 3.83s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SSTORE new value-benchmark-gas-value_10M] | 3.83s | 3.83s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_10M] | 3.83s | 3.83s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with zero data-opcode_CREATE2-benchmark-gas-value_10M] | 3.83s | 3.83s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_0-benchmark-gas-value_10M] | 3.83s | 3.83s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with zero data-opcode_CREATE2-benchmark-gas-value_10M] | 3.83s | 3.83s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_10M] | 3.82s | 3.82s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG4-benchmark-gas-value_10M] | 3.82s | 3.82s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG2-benchmark-gas-value_10M] | 3.82s | 3.82s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_10M] | 3.82s | 3.82s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG0-benchmark-gas-value_10M] | 3.82s | 3.82s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_10M] | 3.73s | 3.73s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_False-benchmark-gas-value_10M] | 3.73s | 3.73s |

## Summary

**Total unique test cases:** 1097

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.15.0 | 1097 | 1080 | 17 | 0 |

---

