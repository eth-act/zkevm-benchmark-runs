# 8x5090 - 20M-gas-limit

## Gas Limit Configuration - Proving

EEST benchmarks with 20M-gas-limit gas limit (fixtures: eest-365433e) (proving results) on **8x5090** hardware.

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
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_DIV-0-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_DIV-1-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SDIV-0-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SDIV-1-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_127-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_191-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_255-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_63-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_127-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_191-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_255-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_63-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_127-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_191-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_255-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f[fork_Osaka-blockchain_test-blake2f-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_24-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_PREVRANDAO-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_fp_to_g1-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_fp_to_g2-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g1add-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g1msm-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g2add-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g2msm-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_pairing_check-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_128-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_16-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_64-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_128-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_16-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_64-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_1-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_12-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_24-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_3-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_6-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_ecrecover.py::test_ecrecover[fork_Osaka-blockchain_test-ecrecover-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-5b-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_example_2-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify_modular_comp_x_coordinate_exceeds_n-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_point_evaluation.py::test_point_evaluation[fork_Osaka-blockchain_test-point_evaluation-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of zero data-opcode_RETURN-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of zero data-opcode_REVERT-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_CALL-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_CALLCODE-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_DELEGATECALL-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODECOPY-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODESIZE-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_STATICCALL-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_STATICCALL-benchmark-gas-value_20M] | 3m 46.89s | 3m 46.89s |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_1-benchmark-gas-value_20M] | 3m 37.09s | 3m 37.09s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH28-benchmark-gas-value_20M] | 3m 37.05s | 3m 37.05s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_0-benchmark-gas-value_20M] | 3m 33.75s | 3m 33.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_exp_heavy-benchmark-gas-value_20M] | 3m 18.15s | 3m 18.15s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_20M] | 3m 15.64s | 3m 15.64s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0 bytes-benchmark-gas-value_20M] | 3m 12.34s | 3m 12.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 3m 7.94s | 3m 7.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 3m 7.45s | 3m 7.45s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 2m 59.10s | 2m 59.10s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SHL--benchmark-gas-value_20M] | 2m 56.85s | 2m 56.85s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add_infinities-benchmark-gas-value_20M] | 2m 55.85s | 2m 55.85s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_32-benchmark-gas-value_20M] | 2m 49.34s | 2m 49.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 2m 49.32s | 2m 49.32s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_256-benchmark-gas-value_20M] | 2m 49.22s | 2m 49.22s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 2m 47.69s | 2m 47.69s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 2m 47.63s | 2m 47.63s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP14-benchmark-gas-value_20M] | 2m 47.50s | 2m 47.50s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_1024-benchmark-gas-value_20M] | 2m 47.35s | 2m 47.35s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 2m 47.34s | 2m 47.34s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP2-benchmark-gas-value_20M] | 2m 47.03s | 2m 47.03s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP9-benchmark-gas-value_20M] | 2m 46.74s | 2m 46.74s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP15-benchmark-gas-value_20M] | 2m 46.63s | 2m 46.63s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.75x max code size-benchmark-gas-value_20M] | 2m 46.22s | 2m 46.22s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_20M] | 2m 45.34s | 2m 45.34s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_20M] | 2m 45.06s | 2m 45.06s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_20M] | 2m 44.78s | 2m 44.78s |
| test_bitwise.py::test_not_op[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 2m 44.58s | 2m 44.58s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_20M] | 2m 44.53s | 2m 44.53s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_20M] | 2m 44.28s | 2m 44.28s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_0-benchmark-gas-value_20M] | 2m 43.13s | 2m 43.13s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_1024-benchmark-gas-value_20M] | 2m 42.43s | 2m 42.43s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_7-benchmark-gas-value_20M] | 2m 41.69s | 2m 41.69s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_20M] | 2m 41.62s | 2m 41.62s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_1_2_32_byte_scalar-benchmark-gas-value_20M] | 2m 40.82s | 2m 40.82s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_256-benchmark-gas-value_20M] | 2m 40.45s | 2m 40.45s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_infinities_2_scalar-benchmark-gas-value_20M] | 2m 38.51s | 2m 38.51s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALLCODE-transfer_amount_1-benchmark-gas-value_20M] | 2m 38.30s | 2m 38.30s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG0-benchmark-gas-value_20M] | 2m 36.61s | 2m 36.61s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG3-benchmark-gas-value_20M] | 2m 36.51s | 2m 36.51s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_20M] | 2m 36.40s | 2m 36.40s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_20M] | 2m 36.39s | 2m 36.39s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with non-zero data-opcode_CREATE-benchmark-gas-value_20M] | 2m 36.22s | 2m 36.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG0-benchmark-gas-value_20M] | 2m 36.17s | 2m 36.17s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG0-benchmark-gas-value_20M] | 2m 35.98s | 2m 35.98s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG1-benchmark-gas-value_20M] | 2m 35.72s | 2m 35.72s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_CALL-benchmark-gas-value_20M] | 1m 17.91s | 1m 17.91s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_STATICCALL-benchmark-gas-value_20M] | 1m 17.70s | 1m 17.70s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_CALL-benchmark-gas-value_20M] | 1m 16.79s | 1m 16.79s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_CALL-benchmark-gas-value_20M] | 1m 16.29s | 1m 16.29s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_STATICCALL-benchmark-gas-value_20M] | 1m 16.00s | 1m 16.00s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_20M] | 1m 15.60s | 1m 15.60s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_20M] | 1m 15.19s | 1m 15.19s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_20M] | 1m 15.11s | 1m 15.11s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_CALLCODE-benchmark-gas-value_20M] | 1m 14.59s | 1m 14.59s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_STATICCALL-benchmark-gas-value_20M] | 1m 14.40s | 1m 14.40s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_STATICCALL-benchmark-gas-value_20M] | 1m 14.39s | 1m 14.39s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-empty-opcode_RETURN-benchmark-gas-value_20M] | 1m 14.29s | 1m 14.29s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_STATICCALL-benchmark-gas-value_20M] | 1m 13.99s | 1m 13.99s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_CALLCODE-benchmark-gas-value_20M] | 1m 13.90s | 1m 13.90s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-empty-opcode_REVERT-benchmark-gas-value_20M] | 1m 13.81s | 1m 13.81s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_CALLCODE-benchmark-gas-value_20M] | 1m 13.80s | 1m 13.80s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_CALL-benchmark-gas-value_20M] | 1m 13.29s | 1m 13.29s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_CALLCODE-benchmark-gas-value_20M] | 1m 13.20s | 1m 13.20s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_CALL-benchmark-gas-value_20M] | 1m 13.09s | 1m 13.09s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_CALLCODE-benchmark-gas-value_20M] | 1m 12.80s | 1m 12.80s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_CALLCODE-benchmark-gas-value_20M] | 1m 12.70s | 1m 12.70s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_63-benchmark-gas-value_20M] | 1m 12.50s | 1m 12.50s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_CALLCODE-benchmark-gas-value_20M] | 1m 12.41s | 1m 12.41s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_STATICCALL-benchmark-gas-value_20M] | 1m 12.20s | 1m 12.20s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_20M] | 1m 12.10s | 1m 12.10s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_CALLCODE-benchmark-gas-value_20M] | 1m 11.59s | 1m 11.59s |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_1-benchmark-gas-value_20M] | 1m 11.52s | 1m 11.52s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_20M] | 1m 11.49s | 1m 11.49s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_CALL-benchmark-gas-value_20M] | 1m 11.00s | 1m 11.00s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_20M] | 1m 9.80s | 1m 9.80s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_STATICCALL-benchmark-gas-value_20M] | 1m 9.29s | 1m 9.29s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_CALL-benchmark-gas-value_20M] | 1m 9.20s | 1m 9.20s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_20M] | 1m 7.89s | 1m 7.89s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_CALL-benchmark-gas-value_20M] | 1m 7.79s | 1m 7.79s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_20M] | 1m 7.59s | 1m 7.59s |
| test_keccak.py::test_keccak_max_permutations[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 1m 5.18s | 1m 5.18s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH32-benchmark-gas-value_20M] | 1m 4.68s | 1m 4.68s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_256-benchmark-gas-value_20M] | 1m 2.28s | 1m 2.28s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_12-benchmark-gas-value_20M] | 1m 1.80s | 1m 1.80s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_128-benchmark-gas-value_20M] | 1m 1.68s | 1m 1.68s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_400_gas_exp_heavy-benchmark-gas-value_20M] | 1m 1.58s | 1m 1.58s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_3-benchmark-gas-value_20M] | 1m 1.18s | 1m 1.18s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_65-benchmark-gas-value_20M] | 1m 1.10s | 1m 1.10s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH31-benchmark-gas-value_20M] | 1m 0.39s | 1m 0.39s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_4-benchmark-gas-value_20M] | 59.98s | 59.98s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_32-benchmark-gas-value_20M] | 59.98s | 59.98s |
| test_account_query.py::test_selfbalance[fork_Osaka-blockchain_test-contract_balance_1-benchmark-gas-value_20M] | 59.28s | 59.28s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH26-benchmark-gas-value_20M] | 59.08s | 59.08s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_1024-benchmark-gas-value_20M] | 59.07s | 59.07s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_765_gas_exp_heavy-benchmark-gas-value_20M] | 58.18s | 58.18s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1360_gas_balanced-benchmark-gas-value_20M] | 58.08s | 58.08s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_EQ--benchmark-gas-value_20M] | 57.99s | 57.99s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH30-benchmark-gas-value_20M] | 57.38s | 57.38s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH29-benchmark-gas-value_20M] | 57.28s | 57.28s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH27-benchmark-gas-value_20M] | 57.08s | 57.08s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_2-benchmark-gas-value_20M] | 56.78s | 56.78s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_677_gas_base_heavy-benchmark-gas-value_20M] | 56.68s | 56.68s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_32-benchmark-gas-value_20M] | 56.48s | 56.48s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_208_gas_balanced-benchmark-gas-value_20M] | 55.98s | 55.98s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_6-benchmark-gas-value_20M] | 55.59s | 55.59s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH25-benchmark-gas-value_20M] | 55.08s | 55.08s |
| test_account_query.py::test_selfbalance[fork_Osaka-blockchain_test-contract_balance_0-benchmark-gas-value_20M] | 55.07s | 55.07s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_24b_exp_168-benchmark-gas-value_20M] | 54.87s | 54.87s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_36-benchmark-gas-value_20M] | 54.58s | 54.58s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_64-benchmark-gas-value_20M] | 54.57s | 54.57s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_96-benchmark-gas-value_20M] | 54.29s | 54.29s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_40-benchmark-gas-value_20M] | 54.27s | 54.27s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_16b_exp_320-benchmark-gas-value_20M] | 53.99s | 53.99s |
| test_call_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_CALLER-benchmark-gas-value_20M] | 53.18s | 53.18s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_0-benchmark-gas-value_20M] | 52.67s | 52.67s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add-benchmark-gas-value_20M] | 51.58s | 51.58s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_256-benchmark-gas-value_20M] | 51.57s | 51.57s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_COINBASE-benchmark-gas-value_20M] | 50.77s | 50.77s |
| test_tx_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_ORIGIN-benchmark-gas-value_20M] | 50.37s | 50.37s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_1-benchmark-gas-value_20M] | 50.17s | 50.17s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_40-benchmark-gas-value_20M] | 49.38s | 49.38s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_1024-benchmark-gas-value_20M] | 49.17s | 49.17s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH23-benchmark-gas-value_20M] | 49.16s | 49.16s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_96-benchmark-gas-value_20M] | 48.87s | 48.87s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH22-benchmark-gas-value_20M] | 48.77s | 48.77s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH24-benchmark-gas-value_20M] | 48.77s | 48.77s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_32-benchmark-gas-value_20M] | 48.57s | 48.57s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH21-benchmark-gas-value_20M] | 48.16s | 48.16s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add_1_2-benchmark-gas-value_20M] | 47.87s | 47.87s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_256-benchmark-gas-value_20M] | 47.37s | 47.37s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_256-benchmark-gas-value_20M] | 47.27s | 47.27s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_3_exp_8-benchmark-gas-value_20M] | 46.97s | 46.97s |
| test_call_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_ADDRESS-benchmark-gas-value_20M] | 46.27s | 46.27s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_example_1-benchmark-gas-value_20M] | 45.97s | 45.97s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_852_gas_exp_heavy-benchmark-gas-value_20M] | 45.06s | 45.06s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_600_gas_exp_heavy-benchmark-gas-value_20M] | 44.76s | 44.76s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_298_gas_exp_heavy-benchmark-gas-value_20M] | 44.76s | 44.76s |
| test_tx_context.py::test_blobhash[fork_Osaka-blockchain_test-one_blob-benchmark-gas-value_20M] | 43.76s | 43.76s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_8_exp_648-benchmark-gas-value_20M] | 42.37s | 42.37s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_20M] | 42.27s | 42.27s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_zkevm_worst_case-benchmark-gas-value_20M] | 42.16s | 42.16s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH19-benchmark-gas-value_20M] | 42.08s | 42.08s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_20M] | 41.57s | 41.57s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_20M] | 41.36s | 41.36s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b''-benchmark-gas-value_20M] | 41.26s | 41.26s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_8b_exp_896-benchmark-gas-value_20M] | 41.06s | 41.06s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_256-benchmark-gas-value_20M] | 40.97s | 40.97s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_32-benchmark-gas-value_20M] | 40.68s | 40.68s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_1024-benchmark-gas-value_20M] | 40.68s | 40.68s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_32-benchmark-gas-value_20M] | 40.67s | 40.67s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_20M] | 40.66s | 40.66s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b''-benchmark-gas-value_20M] | 40.58s | 40.58s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b''-benchmark-gas-value_20M] | 40.56s | 40.56s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b''-benchmark-gas-value_20M] | 40.56s | 40.56s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_215_gas_exp_heavy-benchmark-gas-value_20M] | 40.47s | 40.47s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_256-benchmark-gas-value_20M] | 40.37s | 40.37s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_32-benchmark-gas-value_20M] | 40.37s | 40.37s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH18-benchmark-gas-value_20M] | 40.36s | 40.36s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_0-benchmark-gas-value_20M] | 40.16s | 40.16s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH20-benchmark-gas-value_20M] | 40.16s | 40.16s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b''-benchmark-gas-value_20M] | 39.96s | 39.96s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b''-benchmark-gas-value_20M] | 39.96s | 39.96s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1360n1-benchmark-gas-value_20M] | 39.76s | 39.76s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_800_gas_exp_heavy-benchmark-gas-value_20M] | 39.76s | 39.76s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_256-benchmark-gas-value_20M] | 39.76s | 39.76s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_0-benchmark-gas-value_20M] | 39.66s | 39.66s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_1024-benchmark-gas-value_20M] | 39.66s | 39.66s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_0-benchmark-gas-value_20M] | 39.56s | 39.56s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_0-benchmark-gas-value_20M] | 39.47s | 39.47s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n2-benchmark-gas-value_20M] | 39.25s | 39.25s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_balanced-benchmark-gas-value_20M] | 39.16s | 39.16s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_10240-benchmark-gas-value_20M] | 38.97s | 38.97s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_32-benchmark-gas-value_20M] | 38.77s | 38.77s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_10240-benchmark-gas-value_20M] | 38.77s | 38.77s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH16-benchmark-gas-value_20M] | 38.56s | 38.56s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_8_exp_896-benchmark-gas-value_20M] | 38.36s | 38.36s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_1024-benchmark-gas-value_20M] | 38.27s | 38.27s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_20M] | 38.17s | 38.17s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n3-benchmark-gas-value_20M] | 38.16s | 38.16s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_1024-benchmark-gas-value_20M] | 37.57s | 37.57s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_256-benchmark-gas-value_20M] | 37.36s | 37.36s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of non-zero data-opcode_RETURN-benchmark-gas-value_20M] | 36.76s | 36.76s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b'ff'-benchmark-gas-value_20M] | 36.66s | 36.66s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_20M] | 36.55s | 36.55s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b'ff'-benchmark-gas-value_20M] | 36.26s | 36.26s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b'ff'-benchmark-gas-value_20M] | 35.86s | 35.86s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b'ff'-benchmark-gas-value_20M] | 35.86s | 35.86s |
| test_sha256.py::test_sha256[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 35.85s | 35.85s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_1_even-benchmark-gas-value_20M] | 35.45s | 35.45s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b'ff'-benchmark-gas-value_20M] | 35.37s | 35.37s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH17-benchmark-gas-value_20M] | 35.25s | 35.25s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1360n2-benchmark-gas-value_20M] | 35.05s | 35.05s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 34.45s | 34.45s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b'ff'-benchmark-gas-value_20M] | 34.36s | 34.36s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of non-zero data-opcode_REVERT-benchmark-gas-value_20M] | 34.35s | 34.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1349n1-benchmark-gas-value_20M] | 34.26s | 34.26s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 34.15s | 34.15s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 33.95s | 33.95s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH15-benchmark-gas-value_20M] | 33.85s | 33.85s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_32-benchmark-gas-value_20M] | 33.85s | 33.85s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_1-benchmark-gas-value_20M] | 33.66s | 33.66s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_1024-benchmark-gas-value_20M] | 33.55s | 33.55s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 33.26s | 33.26s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_256-benchmark-gas-value_20M] | 33.25s | 33.25s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_0-benchmark-gas-value_20M] | 33.15s | 33.15s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 33.15s | 33.15s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_1024-benchmark-gas-value_20M] | 33.06s | 33.06s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_256-benchmark-gas-value_20M] | 33.05s | 33.05s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_32-benchmark-gas-value_20M] | 32.85s | 32.85s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 32.85s | 32.85s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_20M] | 32.75s | 32.75s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 32.65s | 32.65s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 32.65s | 32.65s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH14-benchmark-gas-value_20M] | 32.57s | 32.57s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_one_pairing-benchmark-gas-value_20M] | 32.56s | 32.56s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 32.45s | 32.45s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 32.45s | 32.45s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 32.35s | 32.35s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 32.35s | 32.35s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 32.05s | 32.05s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 31.96s | 31.96s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_cover_windows-benchmark-gas-value_20M] | 31.85s | 31.85s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 31.85s | 31.85s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_0-benchmark-gas-value_20M] | 31.66s | 31.66s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 31.65s | 31.65s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 31.65s | 31.65s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 31.45s | 31.45s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 31.44s | 31.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 31.35s | 31.35s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 31.35s | 31.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_2_even-benchmark-gas-value_20M] | 31.25s | 31.25s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 31.15s | 31.15s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 31.15s | 31.15s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_20M] | 31.15s | 31.15s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 31.15s | 31.15s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 31.15s | 31.15s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 31.05s | 31.05s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 31.05s | 31.05s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_1048576-benchmark-gas-value_20M] | 30.96s | 30.96s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SSTORE new value-benchmark-gas-value_20M] | 30.95s | 30.95s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH13-benchmark-gas-value_20M] | 30.94s | 30.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 30.85s | 30.85s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 30.75s | 30.75s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 30.55s | 30.55s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 30.45s | 30.45s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 30.45s | 30.45s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_1048576-benchmark-gas-value_20M] | 30.35s | 30.35s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 30.34s | 30.34s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_20M] | 30.25s | 30.25s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 30.05s | 30.05s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 29.85s | 29.85s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_20M] | 29.85s | 29.85s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH11-benchmark-gas-value_20M] | 29.84s | 29.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 29.75s | 29.75s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 29.65s | 29.65s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 29.55s | 29.55s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_127-benchmark-gas-value_20M] | 29.55s | 29.55s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 29.45s | 29.45s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 29.35s | 29.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_600_gas_balanced-benchmark-gas-value_20M] | 29.05s | 29.05s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 29.05s | 29.05s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_408_gas_balanced-benchmark-gas-value_20M] | 28.65s | 28.65s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH12-benchmark-gas-value_20M] | 28.44s | 28.44s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_63-benchmark-gas-value_20M] | 28.35s | 28.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_qube-benchmark-gas-value_20M] | 28.26s | 28.26s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 28.25s | 28.25s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SAR--benchmark-gas-value_20M] | 28.14s | 28.14s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_base_heavy-benchmark-gas-value_20M] | 27.94s | 27.94s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_255-benchmark-gas-value_20M] | 27.76s | 27.76s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_two_pairings-benchmark-gas-value_20M] | 27.45s | 27.45s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_20M] | 27.45s | 27.45s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 27.45s | 27.45s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 27.44s | 27.44s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_2_pair-benchmark-gas-value_20M] | 27.14s | 27.14s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_191-benchmark-gas-value_20M] | 26.95s | 26.95s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_marius_1_even-benchmark-gas-value_20M] | 26.94s | 26.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 26.84s | 26.84s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_1024-benchmark-gas-value_20M] | 26.45s | 26.45s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 26.25s | 26.25s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 26.24s | 26.24s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 26.24s | 26.24s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_32-benchmark-gas-value_20M] | 26.15s | 26.15s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH9-benchmark-gas-value_20M] | 26.15s | 26.15s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 26.04s | 26.04s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_0-benchmark-gas-value_20M] | 25.95s | 25.95s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 25.95s | 25.95s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 25.85s | 25.85s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 25.84s | 25.84s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH8-benchmark-gas-value_20M] | 25.84s | 25.84s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_0-benchmark-gas-value_20M] | 25.74s | 25.74s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 25.64s | 25.64s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_20M] | 25.64s | 25.64s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_20M] | 25.55s | 25.55s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_10240-benchmark-gas-value_20M] | 25.54s | 25.54s |
| test_bitwise.py::test_shifts[fork_Osaka-blockchain_test-opcode_SAR-benchmark-gas-value_20M] | 25.54s | 25.54s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_256-benchmark-gas-value_20M] | 25.44s | 25.44s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH10-benchmark-gas-value_20M] | 25.35s | 25.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_264_exp_2-benchmark-gas-value_20M] | 25.35s | 25.35s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 25.34s | 25.34s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n1-benchmark-gas-value_20M] | 25.24s | 25.24s |
| test_bitwise.py::test_clz_diff[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 25.05s | 25.05s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_3-benchmark-gas-value_20M] | 25.05s | 25.05s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_square-benchmark-gas-value_20M] | 24.95s | 24.95s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH7-benchmark-gas-value_20M] | 24.66s | 24.66s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 24.65s | 24.65s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 24.64s | 24.64s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-max code size-benchmark-gas-value_20M] | 24.55s | 24.55s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 24.55s | 24.55s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_20M] | 24.45s | 24.45s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_4_pair-benchmark-gas-value_20M] | 24.35s | 24.35s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_256-benchmark-gas-value_20M] | 24.34s | 24.34s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_20M] | 24.34s | 24.34s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_256_exp_2-benchmark-gas-value_20M] | 24.24s | 24.24s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_256-benchmark-gas-value_20M] | 24.15s | 24.15s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_20M] | 24.15s | 24.15s |
| test_control_flow.py::test_jumpdests[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 24.14s | 24.14s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH6-benchmark-gas-value_20M] | 24.05s | 24.05s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_408_gas_base_heavy-benchmark-gas-value_20M] | 23.84s | 23.84s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1152n1-benchmark-gas-value_20M] | 23.75s | 23.75s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SIGNEXTEND--benchmark-gas-value_20M] | 23.54s | 23.54s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_32-benchmark-gas-value_20M] | 23.34s | 23.34s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_20M] | 23.14s | 23.14s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_20M] | 23.04s | 23.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_20M] | 22.84s | 22.84s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_20M] | 22.84s | 22.84s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_32-benchmark-gas-value_20M] | 22.84s | 22.84s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_20M] | 22.54s | 22.54s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_32-benchmark-gas-value_20M] | 22.45s | 22.45s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_20M] | 22.44s | 22.44s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_20M] | 22.14s | 22.14s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_616_gas_base_heavy-benchmark-gas-value_20M] | 21.95s | 21.95s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_256-benchmark-gas-value_20M] | 21.94s | 21.94s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_20M] | 21.84s | 21.84s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_qube-benchmark-gas-value_20M] | 21.75s | 21.75s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_5_pair-benchmark-gas-value_20M] | 21.64s | 21.64s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_0-benchmark-gas-value_20M] | 21.64s | 21.64s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_20M] | 21.64s | 21.64s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_767_gas_balanced-benchmark-gas-value_20M] | 21.35s | 21.35s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_6-benchmark-gas-value_20M] | 21.34s | 21.34s |
| test_transaction_types.py::test_block_full_data[fork_Osaka-blockchain_test-zero_byte_True-benchmark-gas-value_20M] | 21.31s | 21.31s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_1048576-benchmark-gas-value_20M] | 21.04s | 21.04s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_1024-benchmark-gas-value_20M] | 21.04s | 21.04s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH5-benchmark-gas-value_20M] | 21.04s | 21.04s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_996_gas_balanced-benchmark-gas-value_20M] | 20.94s | 20.94s |
| test_bitwise.py::test_shifts[fork_Osaka-blockchain_test-opcode_SHR-benchmark-gas-value_20M] | 20.94s | 20.94s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_256-benchmark-gas-value_20M] | 20.94s | 20.94s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_0-benchmark-gas-value_20M] | 20.84s | 20.84s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SHR--benchmark-gas-value_20M] | 20.74s | 20.74s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_32-benchmark-gas-value_20M] | 20.54s | 20.54s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_0-benchmark-gas-value_20M] | 20.54s | 20.54s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1045_gas_base_heavy-benchmark-gas-value_20M] | 20.45s | 20.45s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_800_gas_base_heavy-benchmark-gas-value_20M] | 20.35s | 20.35s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_256-benchmark-gas-value_20M] | 20.34s | 20.34s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_867_gas_base_heavy-benchmark-gas-value_20M] | 20.25s | 20.25s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH4-benchmark-gas-value_20M] | 20.24s | 20.24s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_1024-benchmark-gas-value_20M] | 20.04s | 20.04s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_qube-benchmark-gas-value_20M] | 19.64s | 19.64s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SSTORE same value-benchmark-gas-value_20M] | 19.44s | 19.44s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_32-benchmark-gas-value_20M] | 19.44s | 19.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 18.84s | 18.84s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH3-benchmark-gas-value_20M] | 18.84s | 18.84s |
| test_tx_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_GASPRICE-benchmark-gas-value_20M] | 18.53s | 18.53s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_12-benchmark-gas-value_20M] | 18.34s | 18.34s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_BASEFEE-benchmark-gas-value_20M] | 18.24s | 18.24s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 18.24s | 18.24s |
| test_control_flow.py::test_pc_op[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 18.23s | 18.23s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1-benchmark-gas-value_20M] | 18.14s | 18.14s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_32-benchmark-gas-value_20M] | 18.04s | 18.04s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_CHAINID-benchmark-gas-value_20M] | 18.04s | 18.04s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_1024-benchmark-gas-value_20M] | 17.84s | 17.84s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_TIMESTAMP-benchmark-gas-value_20M] | 17.84s | 17.84s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_0-benchmark-gas-value_20M] | 17.83s | 17.83s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 17.74s | 17.74s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_32-benchmark-gas-value_20M] | 17.64s | 17.64s |
| test_call_context.py::test_callvalue_from_call[fork_Osaka-blockchain_test-non_zero_value_False-benchmark-gas-value_20M] | 17.54s | 17.54s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_256-benchmark-gas-value_20M] | 17.54s | 17.54s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 17.54s | 17.54s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 17.54s | 17.54s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_1024-benchmark-gas-value_20M] | 17.54s | 17.54s |
| test_call_context.py::test_returndatasize_zero[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 17.54s | 17.54s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 17.44s | 17.44s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_32-benchmark-gas-value_20M] | 17.43s | 17.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_qube-benchmark-gas-value_20M] | 17.43s | 17.43s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH0-benchmark-gas-value_20M] | 17.34s | 17.34s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_256-benchmark-gas-value_20M] | 17.34s | 17.34s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_1024-benchmark-gas-value_20M] | 17.33s | 17.33s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_GASLIMIT-benchmark-gas-value_20M] | 17.33s | 17.33s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_0-benchmark-gas-value_20M] | 17.24s | 17.24s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1000-benchmark-gas-value_20M] | 17.24s | 17.24s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_0-benchmark-gas-value_20M] | 17.24s | 17.24s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_256-benchmark-gas-value_20M] | 17.23s | 17.23s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_0-benchmark-gas-value_20M] | 17.14s | 17.14s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_32-benchmark-gas-value_20M] | 17.14s | 17.14s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_10240-benchmark-gas-value_20M] | 17.14s | 17.14s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_0-benchmark-gas-value_20M] | 17.14s | 17.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 17.04s | 17.04s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_BLOBBASEFEE-benchmark-gas-value_20M] | 17.04s | 17.04s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_24-benchmark-gas-value_20M] | 16.94s | 16.94s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 16.94s | 16.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_32-benchmark-gas-value_20M] | 16.94s | 16.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_1024-benchmark-gas-value_20M] | 16.93s | 16.93s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_NUMBER-benchmark-gas-value_20M] | 16.93s | 16.93s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_square-benchmark-gas-value_20M] | 16.84s | 16.84s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 16.84s | 16.84s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1024_exp_2-benchmark-gas-value_20M] | 16.84s | 16.84s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_10240-benchmark-gas-value_20M] | 16.83s | 16.83s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_256-benchmark-gas-value_20M] | 16.74s | 16.74s |
| test_account_query.py::test_codesize[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 16.65s | 16.65s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_20M] | 16.64s | 16.64s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_20M] | 16.54s | 16.54s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_32-benchmark-gas-value_20M] | 16.54s | 16.54s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_0-benchmark-gas-value_20M] | 16.47s | 16.47s |
| test_control_flow.py::test_gas_op[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 16.44s | 16.44s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH2-benchmark-gas-value_20M] | 16.34s | 16.34s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_256-benchmark-gas-value_20M] | 16.33s | 16.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_0-benchmark-gas-value_20M] | 16.24s | 16.24s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_1024-benchmark-gas-value_20M] | 16.24s | 16.24s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 16.13s | 16.13s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 15.94s | 15.94s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_0-benchmark-gas-value_20M] | 15.94s | 15.94s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_32-benchmark-gas-value_20M] | 15.93s | 15.93s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_20M] | 15.93s | 15.93s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_32-benchmark-gas-value_20M] | 15.84s | 15.84s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0 bytes-benchmark-gas-value_20M] | 15.75s | 15.75s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_256-benchmark-gas-value_20M] | 15.73s | 15.73s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 15.64s | 15.64s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_0-benchmark-gas-value_20M] | 15.63s | 15.63s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_0-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_20M] | 15.63s | 15.63s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_20M] | 15.63s | 15.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_1024-benchmark-gas-value_20M] | 15.55s | 15.55s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 15.54s | 15.54s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_0-benchmark-gas-value_20M] | 15.54s | 15.54s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_256-benchmark-gas-value_20M] | 15.54s | 15.54s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_256-benchmark-gas-value_20M] | 15.48s | 15.48s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.50x max code size-benchmark-gas-value_20M] | 15.44s | 15.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 15.44s | 15.44s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_32-benchmark-gas-value_20M] | 15.44s | 15.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 15.44s | 15.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 15.43s | 15.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_20M] | 15.43s | 15.43s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MUL--benchmark-gas-value_20M] | 15.34s | 15.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 15.33s | 15.33s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_32-benchmark-gas-value_20M] | 15.33s | 15.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_0-benchmark-gas-value_20M] | 15.24s | 15.24s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 15.24s | 15.24s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_256-benchmark-gas-value_20M] | 15.23s | 15.23s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 15.23s | 15.23s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_256-benchmark-gas-value_20M] | 15.23s | 15.23s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_0-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_20M] | 15.14s | 15.14s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_20M] | 15.14s | 15.14s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 15.14s | 15.14s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_qube-benchmark-gas-value_20M] | 15.13s | 15.13s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.25x max code size-benchmark-gas-value_20M] | 15.13s | 15.13s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_1024-benchmark-gas-value_20M] | 15.13s | 15.13s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 15.04s | 15.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 15.04s | 15.04s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_512-benchmark-gas-value_20M] | 15.04s | 15.04s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_20M] | 15.04s | 15.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_20M] | 15.04s | 15.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_0-benchmark-gas-value_20M] | 15.04s | 15.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 15.04s | 15.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 15.03s | 15.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 15.03s | 15.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_20M] | 15.03s | 15.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 15.03s | 15.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000b-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 14.94s | 14.94s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 14.94s | 14.94s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH1-benchmark-gas-value_20M] | 14.93s | 14.93s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 14.86s | 14.86s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_0-benchmark-gas-value_20M] | 14.84s | 14.84s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000002-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 14.84s | 14.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 14.84s | 14.84s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-605b5b-benchmark-gas-value_20M] | 14.84s | 14.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 14.84s | 14.84s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 14.83s | 14.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 14.83s | 14.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 14.83s | 14.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_20M] | 14.83s | 14.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 14.83s | 14.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 14.83s | 14.83s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 14.74s | 14.74s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 14.74s | 14.74s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 14.74s | 14.74s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_20M] | 14.73s | 14.73s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_20M] | 14.73s | 14.73s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_0-benchmark-gas-value_20M] | 14.73s | 14.73s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_20M] | 14.73s | 14.73s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 14.73s | 14.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_square-benchmark-gas-value_20M] | 14.73s | 14.73s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_256-benchmark-gas-value_20M] | 14.73s | 14.73s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 14.64s | 14.64s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.25x max code size-benchmark-gas-value_20M] | 14.63s | 14.63s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000009-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 14.63s | 14.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_10240-benchmark-gas-value_20M] | 14.63s | 14.63s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_BYTE--benchmark-gas-value_20M] | 14.54s | 14.54s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_256-benchmark-gas-value_20M] | 14.54s | 14.54s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 14.54s | 14.54s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000e-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 14.53s | 14.53s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_pow_0x10001-benchmark-gas-value_20M] | 14.53s | 14.53s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_32-benchmark-gas-value_20M] | 14.44s | 14.44s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 14.44s | 14.44s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_32-benchmark-gas-value_20M] | 14.43s | 14.43s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP4-benchmark-gas-value_20M] | 14.43s | 14.43s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000003-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 14.43s | 14.43s |
| test_tx_context.py::test_blobhash[fork_Osaka-blockchain_test-no_blobs-benchmark-gas-value_20M] | 14.43s | 14.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_20M] | 14.43s | 14.43s |
| test_control_flow.py::test_jump_benchmark[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 14.43s | 14.43s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000f-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 14.43s | 14.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 14.34s | 14.34s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_BALANCE-benchmark-gas-value_20M] | 14.34s | 14.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 14.34s | 14.34s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_0-benchmark-gas-value_20M] | 14.33s | 14.33s |
| test_call_context.py::test_callvalue_from_origin[fork_Osaka-blockchain_test-non_zero_value_False-benchmark-gas-value_20M] | 14.33s | 14.33s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP12-benchmark-gas-value_20M] | 14.33s | 14.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 14.33s | 14.33s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 14.33s | 14.33s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000e-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 14.33s | 14.33s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_20M] | 14.33s | 14.33s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_32-benchmark-gas-value_20M] | 14.33s | 14.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 14.24s | 14.24s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 14.24s | 14.24s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP11-benchmark-gas-value_20M] | 14.24s | 14.24s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000001-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 14.24s | 14.24s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP10-benchmark-gas-value_20M] | 14.23s | 14.23s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_20M] | 14.23s | 14.23s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP7-benchmark-gas-value_20M] | 14.23s | 14.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000007-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 14.23s | 14.23s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_1024-benchmark-gas-value_20M] | 14.23s | 14.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000100-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 14.14s | 14.14s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 14.14s | 14.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 14.14s | 14.14s |
| test_comparison.py::test_iszero[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 14.14s | 14.14s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 14.13s | 14.13s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_20M] | 14.13s | 14.13s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000010-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 14.09s | 14.09s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000004-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 14.04s | 14.04s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000002-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 14.04s | 14.04s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_20M] | 14.03s | 14.03s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_32-benchmark-gas-value_20M] | 14.03s | 14.03s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_BALANCE-benchmark-gas-value_20M] | 14.03s | 14.03s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_20M] | 14.03s | 14.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 14.03s | 14.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000004-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 14.03s | 14.03s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_20M] | 14.03s | 14.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000c-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 14.03s | 14.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000d-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 14.03s | 14.03s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_1024-benchmark-gas-value_20M] | 14.03s | 14.03s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_0-benchmark-gas-value_20M] | 13.93s | 13.93s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP9-benchmark-gas-value_20M] | 13.93s | 13.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 13.93s | 13.93s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_20M] | 13.93s | 13.93s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP1-benchmark-gas-value_20M] | 13.93s | 13.93s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP12-benchmark-gas-value_20M] | 13.93s | 13.93s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP8-benchmark-gas-value_20M] | 13.93s | 13.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 13.93s | 13.93s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000d-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 13.93s | 13.93s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_32-benchmark-gas-value_20M] | 13.93s | 13.93s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000005-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 13.93s | 13.93s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000011-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 13.93s | 13.93s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_BALANCE-benchmark-gas-value_20M] | 13.90s | 13.90s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000001-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 13.84s | 13.84s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000011-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 13.84s | 13.84s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_BALANCE-benchmark-gas-value_20M] | 13.84s | 13.84s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP11-benchmark-gas-value_20M] | 13.83s | 13.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000f-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 13.83s | 13.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000100-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 13.83s | 13.83s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP8-benchmark-gas-value_20M] | 13.83s | 13.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000c-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 13.83s | 13.83s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_BALANCE-benchmark-gas-value_20M] | 13.83s | 13.83s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_0-benchmark-gas-value_20M] | 13.83s | 13.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000005-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 13.83s | 13.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000006-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 13.83s | 13.83s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_1024-benchmark-gas-value_20M] | 13.83s | 13.83s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP6-benchmark-gas-value_20M] | 13.83s | 13.83s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP3-benchmark-gas-value_20M] | 13.83s | 13.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000007-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 13.74s | 13.74s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 13.74s | 13.74s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_20M] | 13.73s | 13.73s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000a-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 13.73s | 13.73s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_ADD--benchmark-gas-value_20M] | 13.73s | 13.73s |
| test_call_context.py::test_callvalue_from_origin[fork_Osaka-blockchain_test-non_zero_value_True-benchmark-gas-value_20M] | 13.73s | 13.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 13.73s | 13.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 13.73s | 13.73s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000010-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 13.73s | 13.73s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP13-benchmark-gas-value_20M] | 13.73s | 13.73s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_BALANCE-benchmark-gas-value_20M] | 13.63s | 13.63s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_AND--benchmark-gas-value_20M] | 13.63s | 13.63s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_20M] | 13.63s | 13.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 13.63s | 13.63s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_256-benchmark-gas-value_20M] | 13.63s | 13.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 13.63s | 13.63s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP10-benchmark-gas-value_20M] | 13.63s | 13.63s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000b-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 13.54s | 13.54s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 13.54s | 13.54s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_20M] | 13.53s | 13.53s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000009-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 13.53s | 13.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 13.53s | 13.53s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000a-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 13.53s | 13.53s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SUB--benchmark-gas-value_20M] | 13.53s | 13.53s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP5-benchmark-gas-value_20M] | 13.44s | 13.44s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.50x max code size-benchmark-gas-value_20M] | 13.44s | 13.44s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_20M] | 13.43s | 13.43s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP3-benchmark-gas-value_20M] | 13.43s | 13.43s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP16-benchmark-gas-value_20M] | 13.43s | 13.43s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_OR--benchmark-gas-value_20M] | 13.43s | 13.43s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP5-benchmark-gas-value_20M] | 13.43s | 13.43s |
| test_bitwise.py::test_clz_same[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 13.43s | 13.43s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_BALANCE-benchmark-gas-value_20M] | 13.43s | 13.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 13.43s | 13.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 13.34s | 13.34s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.75x max code size-benchmark-gas-value_20M] | 13.34s | 13.34s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP6-benchmark-gas-value_20M] | 13.34s | 13.34s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000006-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 13.34s | 13.34s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_LT--benchmark-gas-value_20M] | 13.33s | 13.33s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP14-benchmark-gas-value_20M] | 13.28s | 13.28s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 13.23s | 13.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000003-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 13.23s | 13.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000008-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 13.23s | 13.23s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP7-benchmark-gas-value_20M] | 13.23s | 13.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 13.23s | 13.23s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_1048576-benchmark-gas-value_20M] | 13.23s | 13.23s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP13-benchmark-gas-value_20M] | 13.23s | 13.23s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP2-benchmark-gas-value_20M] | 13.13s | 13.13s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_BALANCE-benchmark-gas-value_20M] | 13.13s | 13.13s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP4-benchmark-gas-value_20M] | 13.13s | 13.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_1048576-benchmark-gas-value_20M] | 13.13s | 13.13s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP16-benchmark-gas-value_20M] | 13.13s | 13.13s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000008-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 13.13s | 13.13s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 13.04s | 13.04s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 13.03s | 13.03s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP1-benchmark-gas-value_20M] | 13.03s | 13.03s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_SGT--benchmark-gas-value_20M] | 12.94s | 12.94s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_256-benchmark-gas-value_20M] | 12.93s | 12.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 12.93s | 12.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_20M] | 12.93s | 12.93s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MOD--benchmark-gas-value_20M] | 12.93s | 12.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_20M] | 12.89s | 12.89s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 12.83s | 12.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 12.83s | 12.83s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_SLT--benchmark-gas-value_20M] | 12.83s | 12.83s |
| test_identity.py::test_identity[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 12.83s | 12.83s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_GT--benchmark-gas-value_20M] | 12.83s | 12.83s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP15-benchmark-gas-value_20M] | 12.83s | 12.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 12.73s | 12.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 12.73s | 12.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 12.73s | 12.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 12.73s | 12.73s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSLOAD-benchmark-gas-value_20M] | 12.64s | 12.64s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_20M] | 12.64s | 12.64s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value, revert-benchmark-gas-value_20M] | 12.64s | 12.64s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_20M] | 12.63s | 12.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_20M] | 12.63s | 12.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_20M] | 12.63s | 12.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 12.63s | 12.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_20M] | 12.63s | 12.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 12.54s | 12.54s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_20M] | 12.53s | 12.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 12.53s | 12.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_20M] | 12.43s | 12.43s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_XOR--benchmark-gas-value_20M] | 12.34s | 12.34s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_256-benchmark-gas-value_20M] | 12.33s | 12.33s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-00-benchmark-gas-value_20M] | 12.33s | 12.33s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_20M] | 12.33s | 12.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_20M] | 12.24s | 12.24s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 12.23s | 12.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_20M] | 12.23s | 12.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_20M] | 12.13s | 12.13s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 12.13s | 12.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_32-benchmark-gas-value_20M] | 12.03s | 12.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_1048576-benchmark-gas-value_20M] | 11.93s | 11.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_20M] | 11.93s | 11.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_20M] | 11.83s | 11.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_20M] | 11.83s | 11.83s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value-benchmark-gas-value_20M] | 11.73s | 11.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_20M] | 11.63s | 11.63s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-615b5b5b-benchmark-gas-value_20M] | 11.63s | 11.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_20M] | 11.53s | 11.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_20M] | 11.53s | 11.53s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_32-benchmark-gas-value_20M] | 11.43s | 11.43s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_0-benchmark-gas-value_20M] | 11.43s | 11.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_20M] | 11.43s | 11.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_20M] | 11.43s | 11.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_32-benchmark-gas-value_20M] | 11.33s | 11.33s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_10240-benchmark-gas-value_20M] | 11.23s | 11.23s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value, out of gas-benchmark-gas-value_20M] | 11.23s | 11.23s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_256-benchmark-gas-value_20M] | 11.23s | 11.23s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_64b_exp_512-benchmark-gas-value_20M] | 11.13s | 11.13s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SMOD--benchmark-gas-value_20M] | 11.13s | 11.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_20M] | 11.03s | 11.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_1024-benchmark-gas-value_20M] | 11.03s | 11.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_256-benchmark-gas-value_20M] | 11.03s | 11.03s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_20M] | 10.93s | 10.93s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-605b-benchmark-gas-value_20M] | 10.77s | 10.77s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_False-benchmark-gas-value_20M] | 10.63s | 10.63s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD--benchmark-gas-value_20M] | 10.63s | 10.63s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_0-benchmark-gas-value_20M] | 10.63s | 10.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_0-benchmark-gas-value_20M] | 10.63s | 10.63s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_square-benchmark-gas-value_20M] | 10.63s | 10.63s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_256-benchmark-gas-value_20M] | 10.63s | 10.63s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_20M] | 10.63s | 10.63s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_20M] | 10.53s | 10.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_32-benchmark-gas-value_20M] | 10.43s | 10.43s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_EXP--benchmark-gas-value_20M] | 10.43s | 10.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_1024-benchmark-gas-value_20M] | 10.43s | 10.43s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_True-benchmark-gas-value_20M] | 10.33s | 10.33s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_64b_exp_512-benchmark-gas-value_20M] | 10.33s | 10.33s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_136279841-benchmark-gas-value_20M] | 10.23s | 10.23s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_256-benchmark-gas-value_20M] | 10.23s | 10.23s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_3-benchmark-gas-value_20M] | 10.03s | 10.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_11-benchmark-gas-value_20M] | 10.03s | 10.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_136279841-benchmark-gas-value_20M] | 10.03s | 10.03s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD--benchmark-gas-value_20M] | 9.93s | 9.93s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_1024-benchmark-gas-value_20M] | 9.93s | 9.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_11-benchmark-gas-value_20M] | 9.83s | 9.83s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_1048576-benchmark-gas-value_20M] | 9.83s | 9.83s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_20M] | 9.73s | 9.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_11-benchmark-gas-value_20M] | 9.73s | 9.73s |
| test_ripemd160.py::test_ripemd160[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_False-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_10240-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_pow_0x10001-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_5-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_0-benchmark-gas-value_20M] | 9.53s | 9.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_11-benchmark-gas-value_20M] | 9.53s | 9.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_11-benchmark-gas-value_20M] | 9.53s | 9.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_5-benchmark-gas-value_20M] | 9.53s | 9.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_13-benchmark-gas-value_20M] | 9.53s | 9.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_136279841-benchmark-gas-value_20M] | 9.53s | 9.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_5-benchmark-gas-value_20M] | 9.53s | 9.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_3-benchmark-gas-value_20M] | 9.48s | 9.48s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_5-benchmark-gas-value_20M] | 9.43s | 9.43s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_13-benchmark-gas-value_20M] | 9.43s | 9.43s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSLOAD-benchmark-gas-value_20M] | 9.43s | 9.43s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value-benchmark-gas-value_20M] | 9.43s | 9.43s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_5-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_136279841-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_136279841-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_5-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_100000-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_11-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_13-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_13-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_True-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_3-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_3-benchmark-gas-value_20M] | 9.13s | 9.13s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_3-benchmark-gas-value_20M] | 9.13s | 9.13s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_20M] | 9.13s | 9.13s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_7-benchmark-gas-value_20M] | 9.12s | 9.12s |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 9.03s | 9.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_7-benchmark-gas-value_20M] | 9.03s | 9.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_7-benchmark-gas-value_20M] | 9.03s | 9.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_7-benchmark-gas-value_20M] | 9.03s | 9.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_136279841-benchmark-gas-value_20M] | 9.03s | 9.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_0-benchmark-gas-value_20M] | 9.03s | 9.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_256-benchmark-gas-value_20M] | 8.93s | 8.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_13-benchmark-gas-value_20M] | 8.93s | 8.93s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_20M] | 8.93s | 8.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_3-benchmark-gas-value_20M] | 8.93s | 8.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_1024-benchmark-gas-value_20M] | 8.93s | 8.93s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_20M] | 8.93s | 8.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_32-benchmark-gas-value_20M] | 8.83s | 8.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_7-benchmark-gas-value_20M] | 8.73s | 8.73s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_20M] | 8.73s | 8.73s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_20M] | 8.63s | 8.63s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_32_byte_coord_and_scalar-benchmark-gas-value_20M] | 8.63s | 8.63s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_square-benchmark-gas-value_20M] | 8.63s | 8.63s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_13-benchmark-gas-value_20M] | 8.53s | 8.53s |
| test_account_query.py::test_ext_account_query_cold[fork_Osaka-blockchain_test-absent_accounts_False-opcode_BALANCE-benchmark-gas-value_20M] | 8.43s | 8.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_pow_0x10001-benchmark-gas-value_20M] | 8.43s | 8.43s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_20M] | 8.43s | 8.43s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_False-empty_authority_False-benchmark-gas-value_20M] | 8.33s | 8.33s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_20M] | 8.33s | 8.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_0-benchmark-gas-value_20M] | 8.33s | 8.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_0-benchmark-gas-value_20M] | 8.23s | 8.23s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_pow_0x10001-benchmark-gas-value_20M] | 8.23s | 8.23s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_True-empty_authority_False-benchmark-gas-value_20M] | 8.23s | 8.23s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul-benchmark-gas-value_20M] | 8.23s | 8.23s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_20M] | 8.16s | 8.16s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_32-benchmark-gas-value_20M] | 8.13s | 8.13s |
| test_control_flow.py::test_jumps[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 8.13s | 8.13s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-615b5b-benchmark-gas-value_20M] | 8.13s | 8.13s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_True-empty_authority_False-benchmark-gas-value_20M] | 8.13s | 8.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_256-benchmark-gas-value_20M] | 8.03s | 8.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_0-benchmark-gas-value_20M] | 8.03s | 8.03s |
| test_system.py::test_selfdestruct_existing[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_20M] | 7.93s | 7.93s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_False-empty_authority_False-benchmark-gas-value_20M] | 7.93s | 7.93s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_True-empty_authority_False-benchmark-gas-value_20M] | 7.93s | 7.93s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_32-benchmark-gas-value_20M] | 7.83s | 7.83s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_True-empty_authority_True-benchmark-gas-value_20M] | 7.83s | 7.83s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_False-empty_authority_True-benchmark-gas-value_20M] | 7.83s | 7.83s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_pow_0x10001-benchmark-gas-value_20M] | 7.73s | 7.73s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_False-empty_authority_False-benchmark-gas-value_20M] | 7.73s | 7.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_1024-benchmark-gas-value_20M] | 7.73s | 7.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_32-benchmark-gas-value_20M] | 7.73s | 7.73s |
| test_control_flow.py::test_jumpis[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 7.73s | 7.73s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_True-empty_authority_False-benchmark-gas-value_20M] | 7.73s | 7.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_32-benchmark-gas-value_20M] | 7.72s | 7.72s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_20M] | 7.63s | 7.63s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_False-empty_authority_False-benchmark-gas-value_20M] | 7.63s | 7.63s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 7.63s | 7.63s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_True-empty_authority_True-benchmark-gas-value_20M] | 7.63s | 7.63s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_20M] | 7.57s | 7.57s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALLCODE-transfer_amount_0-benchmark-gas-value_20M] | 7.53s | 7.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_1024-benchmark-gas-value_20M] | 7.53s | 7.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_True-empty_authority_True-benchmark-gas-value_20M] | 7.53s | 7.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_0-benchmark-gas-value_20M] | 7.53s | 7.53s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALL-transfer_amount_0-benchmark-gas-value_20M] | 7.53s | 7.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_True-empty_authority_True-benchmark-gas-value_20M] | 7.53s | 7.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_256-benchmark-gas-value_20M] | 7.53s | 7.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_False-empty_authority_True-benchmark-gas-value_20M] | 7.52s | 7.52s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_False-empty_authority_True-benchmark-gas-value_20M] | 7.43s | 7.43s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_False-empty_authority_True-benchmark-gas-value_20M] | 7.22s | 7.22s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_1024-benchmark-gas-value_20M] | 7.13s | 7.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_3_even-benchmark-gas-value_20M] | 7.13s | 7.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_1048576-benchmark-gas-value_20M] | 7.12s | 7.12s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value, revert-benchmark-gas-value_20M] | 7.03s | 7.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_0-benchmark-gas-value_20M] | 7.03s | 7.03s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_128b_exp_1024-benchmark-gas-value_20M] | 7.03s | 7.03s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-max code size-benchmark-gas-value_20M] | 7.03s | 7.03s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_1024-benchmark-gas-value_20M] | 6.93s | 6.93s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_256-benchmark-gas-value_20M] | 6.93s | 6.93s |
| test_transaction_types.py::test_block_full_data[fork_Osaka-blockchain_test-zero_byte_False-benchmark-gas-value_20M] | 6.93s | 6.93s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_0-transfer_amount_1-benchmark-gas-value_20M] | 6.83s | 6.83s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value, out of gas-benchmark-gas-value_20M] | 6.73s | 6.73s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_0-transfer_amount_0-benchmark-gas-value_20M] | 6.73s | 6.73s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_1-transfer_amount_1-benchmark-gas-value_20M] | 6.73s | 6.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_128b_exp_1024-benchmark-gas-value_20M] | 6.72s | 6.72s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_True-benchmark-gas-value_20M] | 6.62s | 6.62s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_1-transfer_amount_0-benchmark-gas-value_20M] | 6.42s | 6.42s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_256-benchmark-gas-value_20M] | 6.33s | 6.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_32-benchmark-gas-value_20M] | 6.23s | 6.23s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_4_exp_heavy-benchmark-gas-value_20M] | 6.22s | 6.22s |
| test_call_context.py::test_callvalue_from_call[fork_Osaka-blockchain_test-non_zero_value_True-benchmark-gas-value_20M] | 6.03s | 6.03s |
| test_system.py::test_selfdestruct_existing[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_20M] | 5.83s | 5.83s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_False-benchmark-gas-value_20M] | 5.83s | 5.83s |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify_wrong_endianness-benchmark-gas-value_20M] | 5.53s | 5.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_1024-benchmark-gas-value_20M] | 5.52s | 5.52s |
| test_account_query.py::test_ext_account_query_cold[fork_Osaka-blockchain_test-absent_accounts_True-opcode_BALANCE-benchmark-gas-value_20M] | 5.43s | 5.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_256b_exp_1024-benchmark-gas-value_20M] | 5.32s | 5.32s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_256b_exp_1024-benchmark-gas-value_20M] | 5.23s | 5.23s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_512b_exp_1024-benchmark-gas-value_20M] | 5.12s | 5.12s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_512b_exp_1024-benchmark-gas-value_20M] | 5.12s | 5.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar-benchmark-gas-value_20M] | 5.12s | 5.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG0-benchmark-gas-value_20M] | 5.03s | 5.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_20M] | 4.93s | 4.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_20M] | 4.92s | 4.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_1_2_2_scalar-benchmark-gas-value_20M] | 4.92s | 4.92s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of non-zero data-opcode_REVERT-benchmark-gas-value_20M] | 4.83s | 4.83s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_20M] | 4.82s | 4.82s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG0-benchmark-gas-value_20M] | 4.82s | 4.82s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG2-benchmark-gas-value_20M] | 4.82s | 4.82s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_20M] | 4.82s | 4.82s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_20M] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_20M] | 4.72s | 4.72s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG2-benchmark-gas-value_20M] | 4.72s | 4.72s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_3_exp_heavy-benchmark-gas-value_20M] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_20M] | 4.63s | 4.63s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG3-benchmark-gas-value_20M] | 4.63s | 4.63s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALL-transfer_amount_1-benchmark-gas-value_20M] | 4.62s | 4.62s |
| test_system.py::test_selfdestruct_created[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_20M] | 4.62s | 4.62s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_20M] | 4.62s | 4.62s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_20M] | 4.62s | 4.62s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of non-zero data-opcode_RETURN-benchmark-gas-value_20M] | 4.62s | 4.62s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_2_exp_heavy-benchmark-gas-value_20M] | 4.62s | 4.62s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALL-transfer_amount_0-benchmark-gas-value_20M] | 4.62s | 4.62s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG0-benchmark-gas-value_20M] | 4.62s | 4.62s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALLCODE-transfer_amount_0-benchmark-gas-value_20M] | 4.53s | 4.53s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_20M] | 4.53s | 4.53s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_20M] | 4.53s | 4.53s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG0-benchmark-gas-value_20M] | 4.53s | 4.53s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value-benchmark-gas-value_20M] | 4.52s | 4.52s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of zero data-opcode_REVERT-benchmark-gas-value_20M] | 4.52s | 4.52s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_20M] | 4.52s | 4.52s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG1-benchmark-gas-value_20M] | 4.52s | 4.52s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG4-benchmark-gas-value_20M] | 4.43s | 4.43s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_20M] | 4.42s | 4.42s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes with value-opcode_CREATE-benchmark-gas-value_20M] | 4.42s | 4.42s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG1-benchmark-gas-value_20M] | 4.42s | 4.42s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG1-benchmark-gas-value_20M] | 4.42s | 4.42s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALLCODE-transfer_amount_1-benchmark-gas-value_20M] | 4.42s | 4.42s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG4-benchmark-gas-value_20M] | 4.42s | 4.42s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value-benchmark-gas-value_20M] | 4.42s | 4.42s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_max-transfer_amount_1-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_0-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_3_pair-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG4-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG3-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG1-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG4-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG0-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes with value-opcode_CREATE2-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG2-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG2-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG2-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG1-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1000000-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_system.py::test_selfdestruct_initcode[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_transaction_types.py::test_empty_block[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG1-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG3-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG1-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG2-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value, revert-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes without value-opcode_CREATE2-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_system.py::test_selfdestruct_created[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG1-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG2-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of zero data-opcode_RETURN-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with zero data-opcode_CREATE2-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG4-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG0-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG2-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_infinities_32_byte_scalar-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG3-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG2-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG0-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG3-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG1-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG3-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG2-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with zero data-opcode_CREATE2-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_system.py::test_creates_collisions[fork_Osaka-blockchain_test-opcode_CREATE-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_32-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_32-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG3-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG3-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG3-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG3-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG3-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_1024b_exp_1024-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value, out of gas-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_system.py::test_selfdestruct_initcode[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG4-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG0-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG1-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with zero data-opcode_CREATE-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG2-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value, revert-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_1024-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG1-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG0-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG1-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SSTORE same value-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALL-transfer_amount_1-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with zero data-opcode_CREATE-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_max-transfer_amount_0-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG3-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG4-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG4-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with zero data-opcode_CREATE-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_1024-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG2-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_1024b_exp_1024-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_1_exp_heavy-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value, out of gas-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG3-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG0-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG4-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes without value-opcode_CREATE-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG2-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_0-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG0-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG1-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG4-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG1-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG4-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG1-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG3-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SSTORE_new-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_False-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with zero data-opcode_CREATE-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_1_pair_empty-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG2-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG0-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG4-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SSTORE new value-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with zero data-opcode_CREATE2-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG4-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG3-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG2-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_True-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG0-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_20M] | 3.95s | 3.95s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_zero_input-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG4-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG4-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_system.py::test_creates_collisions[fork_Osaka-blockchain_test-opcode_CREATE2-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_2_sets-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SSTORE_same-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with zero data-opcode_CREATE2-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_1_pair-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_256-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG4-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_20M] | 3.82s | 3.82s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG2-benchmark-gas-value_20M] | 3.82s | 3.82s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_256-benchmark-gas-value_20M] | 3.72s | 3.72s |

## Summary

**Total unique test cases:** 1097

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.15.0 | 1097 | 1047 | 50 | 0 |

---

## reth-v1.11.0


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | zisk-v0.15.0<br/>(237.91KiB) | Avg |
|-----------|-----------|----------|
| test_account_query.py::test_selfbalance[fork_Osaka-blockchain_test-contract_balance_0-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_account_query.py::test_selfbalance[fork_Osaka-blockchain_test-contract_balance_1-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_191-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_255-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f[fork_Osaka-blockchain_test-blake2f-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_PREVRANDAO-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_fp_to_g1-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_fp_to_g2-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g1msm-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g2add-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_pairing_check-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_128-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_64-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_1-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_12-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_24-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_3-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_6-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_ecrecover.py::test_ecrecover[fork_Osaka-blockchain_test-ecrecover-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify_modular_comp_x_coordinate_exceeds_n-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_point_evaluation.py::test_point_evaluation[fork_Osaka-blockchain_test-point_evaluation-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_CALL-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_CALLCODE-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_DELEGATECALL-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODECOPY-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODESIZE-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_STATICCALL-benchmark-gas-value_20M] | ❌ SDK Crash | — |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_256-benchmark-gas-value_20M] | 5m 11.80s | 5m 11.80s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP16-benchmark-gas-value_20M] | 4m 24.80s | 4m 24.80s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_255-benchmark-gas-value_20M] | 3m 15.91s | 3m 15.91s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-empty-opcode_RETURN-benchmark-gas-value_20M] | 3m 12.70s | 3m 12.70s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_20M] | 3m 3.83s | 3m 3.83s |
| test_sha256.py::test_sha256[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 3m 3.36s | 3m 3.36s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_20M] | 3m 2.31s | 3m 2.31s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of zero data-opcode_REVERT-benchmark-gas-value_20M] | 3m 1.23s | 3m 1.23s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 3m 0.40s | 3m 0.40s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SAR--benchmark-gas-value_20M] | 2m 53.50s | 2m 53.50s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_False-benchmark-gas-value_20M] | 2m 52.96s | 2m 52.96s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_1024-benchmark-gas-value_20M] | 2m 48.19s | 2m 48.19s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_0-benchmark-gas-value_20M] | 2m 48.19s | 2m 48.19s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_32-benchmark-gas-value_20M] | 2m 46.40s | 2m 46.40s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_0-benchmark-gas-value_20M] | 2m 45.75s | 2m 45.75s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_20M] | 2m 45.73s | 2m 45.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_136279841-benchmark-gas-value_20M] | 2m 44.37s | 2m 44.37s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_7-benchmark-gas-value_20M] | 2m 43.78s | 2m 43.78s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_5-benchmark-gas-value_20M] | 2m 43.56s | 2m 43.56s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SUB--benchmark-gas-value_20M] | 2m 43.18s | 2m 43.18s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_10240-benchmark-gas-value_20M] | 2m 43.00s | 2m 43.00s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 2m 42.04s | 2m 42.04s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_32-benchmark-gas-value_20M] | 2m 42.00s | 2m 42.00s |
| test_call_context.py::test_callvalue_from_origin[fork_Osaka-blockchain_test-non_zero_value_True-benchmark-gas-value_20M] | 2m 41.53s | 2m 41.53s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_10240-benchmark-gas-value_20M] | 2m 41.36s | 2m 41.36s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_256-benchmark-gas-value_20M] | 2m 40.87s | 2m 40.87s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_1048576-benchmark-gas-value_20M] | 2m 40.18s | 2m 40.18s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_True-empty_authority_False-benchmark-gas-value_20M] | 2m 40.04s | 2m 40.04s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_0-benchmark-gas-value_20M] | 2m 39.51s | 2m 39.51s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value-benchmark-gas-value_20M] | 2m 38.87s | 2m 38.87s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_1-transfer_amount_0-benchmark-gas-value_20M] | 2m 37.56s | 2m 37.56s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_True-benchmark-gas-value_20M] | 2m 36.71s | 2m 36.71s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG0-benchmark-gas-value_20M] | 2m 35.49s | 2m 35.49s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG3-benchmark-gas-value_20M] | 2m 35.34s | 2m 35.34s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG2-benchmark-gas-value_20M] | 2m 35.27s | 2m 35.27s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG0-benchmark-gas-value_20M] | 2m 35.06s | 2m 35.06s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG0-benchmark-gas-value_20M] | 2m 34.73s | 2m 34.73s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_20M] | 2m 34.42s | 2m 34.42s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP13-benchmark-gas-value_20M] | 2m 30.56s | 2m 30.56s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP10-benchmark-gas-value_20M] | 2m 28.28s | 2m 28.28s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP4-benchmark-gas-value_20M] | 2m 28.25s | 2m 28.25s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP12-benchmark-gas-value_20M] | 2m 24.38s | 2m 24.38s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP1-benchmark-gas-value_20M] | 2m 24.30s | 2m 24.30s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP5-benchmark-gas-value_20M] | 2m 22.15s | 2m 22.15s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP9-benchmark-gas-value_20M] | 2m 20.26s | 2m 20.26s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP7-benchmark-gas-value_20M] | 2m 2.46s | 2m 2.46s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP8-benchmark-gas-value_20M] | 1m 59.75s | 1m 59.75s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP6-benchmark-gas-value_20M] | 1m 57.75s | 1m 57.75s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP2-benchmark-gas-value_20M] | 1m 55.84s | 1m 55.84s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP15-benchmark-gas-value_20M] | 1m 54.04s | 1m 54.04s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP11-benchmark-gas-value_20M] | 1m 51.93s | 1m 51.93s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP14-benchmark-gas-value_20M] | 1m 50.43s | 1m 50.43s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP3-benchmark-gas-value_20M] | 1m 48.83s | 1m 48.83s |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_16-benchmark-gas-value_20M] | 1m 16.80s | 1m 16.80s |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g2msm-benchmark-gas-value_20M] | 1m 7.49s | 1m 7.49s |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_64-benchmark-gas-value_20M] | 1m 6.69s | 1m 6.69s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_24-benchmark-gas-value_20M] | 1m 6.09s | 1m 6.09s |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_128-benchmark-gas-value_20M] | 1m 5.09s | 1m 5.09s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_127-benchmark-gas-value_20M] | 1m 4.49s | 1m 4.49s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1360_gas_balanced-benchmark-gas-value_20M] | 59.79s | 59.79s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_32-benchmark-gas-value_20M] | 59.08s | 59.08s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH32-benchmark-gas-value_20M] | 58.97s | 58.97s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_40-benchmark-gas-value_20M] | 58.79s | 58.79s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH31-benchmark-gas-value_20M] | 58.29s | 58.29s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_4-benchmark-gas-value_20M] | 58.17s | 58.17s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_24b_exp_168-benchmark-gas-value_20M] | 57.89s | 57.89s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_64-benchmark-gas-value_20M] | 57.88s | 57.88s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_208_gas_balanced-benchmark-gas-value_20M] | 57.88s | 57.88s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_400_gas_exp_heavy-benchmark-gas-value_20M] | 57.69s | 57.69s |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_16-benchmark-gas-value_20M] | 57.58s | 57.58s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_12-benchmark-gas-value_20M] | 57.18s | 57.18s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_191-benchmark-gas-value_20M] | 56.98s | 56.98s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH30-benchmark-gas-value_20M] | 56.77s | 56.77s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_2-benchmark-gas-value_20M] | 56.67s | 56.67s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_765_gas_exp_heavy-benchmark-gas-value_20M] | 56.08s | 56.08s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_SGT--benchmark-gas-value_20M] | 55.58s | 55.58s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add-benchmark-gas-value_20M] | 55.49s | 55.49s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add_1_2-benchmark-gas-value_20M] | 55.28s | 55.28s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_3-benchmark-gas-value_20M] | 55.19s | 55.19s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_677_gas_base_heavy-benchmark-gas-value_20M] | 55.18s | 55.18s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH29-benchmark-gas-value_20M] | 55.08s | 55.08s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_65-benchmark-gas-value_20M] | 53.87s | 53.87s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_63-benchmark-gas-value_20M] | 53.59s | 53.59s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_128-benchmark-gas-value_20M] | 53.37s | 53.37s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_36-benchmark-gas-value_20M] | 52.98s | 52.98s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_16b_exp_320-benchmark-gas-value_20M] | 52.57s | 52.57s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SDIV-1-benchmark-gas-value_20M] | 51.88s | 51.88s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_191-benchmark-gas-value_20M] | 51.48s | 51.48s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_191-benchmark-gas-value_20M] | 50.59s | 50.59s |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_1-benchmark-gas-value_20M] | 50.58s | 50.58s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_256-benchmark-gas-value_20M] | 49.71s | 49.71s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_6-benchmark-gas-value_20M] | 49.67s | 49.67s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SDIV-0-benchmark-gas-value_20M] | 49.16s | 49.16s |
| test_call_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_ADDRESS-benchmark-gas-value_20M] | 48.88s | 48.88s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_96-benchmark-gas-value_20M] | 48.58s | 48.58s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH27-benchmark-gas-value_20M] | 47.98s | 47.98s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_COINBASE-benchmark-gas-value_20M] | 47.97s | 47.97s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_zkevm_worst_case-benchmark-gas-value_20M] | 47.88s | 47.88s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_255-benchmark-gas-value_20M] | 47.88s | 47.88s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_800_gas_exp_heavy-benchmark-gas-value_20M] | 47.67s | 47.67s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_256-benchmark-gas-value_20M] | 47.37s | 47.37s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH28-benchmark-gas-value_20M] | 47.37s | 47.37s |
| test_keccak.py::test_keccak_max_permutations[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 47.27s | 47.27s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_96-benchmark-gas-value_20M] | 47.08s | 47.08s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH24-benchmark-gas-value_20M] | 46.77s | 46.77s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_3_exp_8-benchmark-gas-value_20M] | 46.66s | 46.66s |
| test_tx_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_ORIGIN-benchmark-gas-value_20M] | 46.37s | 46.37s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_1-benchmark-gas-value_20M] | 46.27s | 46.27s |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g1add-benchmark-gas-value_20M] | 46.18s | 46.18s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_40-benchmark-gas-value_20M] | 45.87s | 45.87s |
| test_call_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_CALLER-benchmark-gas-value_20M] | 45.56s | 45.56s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_600_gas_exp_heavy-benchmark-gas-value_20M] | 45.47s | 45.47s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_127-benchmark-gas-value_20M] | 45.46s | 45.46s |
| test_comparison.py::test_iszero[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 45.17s | 45.17s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH25-benchmark-gas-value_20M] | 45.17s | 45.17s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_exp_heavy-benchmark-gas-value_20M] | 45.08s | 45.08s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_255-benchmark-gas-value_20M] | 44.97s | 44.97s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_DIV-0-benchmark-gas-value_20M] | 43.97s | 43.97s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_8b_exp_896-benchmark-gas-value_20M] | 43.58s | 43.58s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-empty-opcode_REVERT-benchmark-gas-value_20M] | 43.46s | 43.46s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_256-benchmark-gas-value_20M] | 43.26s | 43.26s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_215_gas_exp_heavy-benchmark-gas-value_20M] | 43.17s | 43.17s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_DIV-1-benchmark-gas-value_20M] | 43.08s | 43.08s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH26-benchmark-gas-value_20M] | 42.96s | 42.96s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_1024-benchmark-gas-value_20M] | 42.67s | 42.67s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_0-benchmark-gas-value_20M] | 42.57s | 42.57s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_EQ--benchmark-gas-value_20M] | 42.46s | 42.46s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH22-benchmark-gas-value_20M] | 42.36s | 42.36s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_STATICCALL-benchmark-gas-value_20M] | 42.27s | 42.27s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_32-benchmark-gas-value_20M] | 42.06s | 42.06s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_example_1-benchmark-gas-value_20M] | 41.87s | 41.87s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH23-benchmark-gas-value_20M] | 41.66s | 41.66s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_127-benchmark-gas-value_20M] | 41.47s | 41.47s |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_1-benchmark-gas-value_20M] | 41.46s | 41.46s |
| test_tx_context.py::test_blobhash[fork_Osaka-blockchain_test-one_blob-benchmark-gas-value_20M] | 40.86s | 40.86s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_STATICCALL-benchmark-gas-value_20M] | 40.36s | 40.36s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_298_gas_exp_heavy-benchmark-gas-value_20M] | 40.16s | 40.16s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_8_exp_648-benchmark-gas-value_20M] | 39.97s | 39.97s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_852_gas_exp_heavy-benchmark-gas-value_20M] | 39.85s | 39.85s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_127-benchmark-gas-value_20M] | 39.66s | 39.66s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_STATICCALL-benchmark-gas-value_20M] | 39.36s | 39.36s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_8_exp_896-benchmark-gas-value_20M] | 39.06s | 39.06s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add_infinities-benchmark-gas-value_20M] | 38.77s | 38.77s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_CALLCODE-benchmark-gas-value_20M] | 38.76s | 38.76s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_CALL-benchmark-gas-value_20M] | 38.76s | 38.76s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_CALLCODE-benchmark-gas-value_20M] | 38.67s | 38.67s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_CALLCODE-benchmark-gas-value_20M] | 38.66s | 38.66s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_CALL-benchmark-gas-value_20M] | 38.58s | 38.58s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_CALLCODE-benchmark-gas-value_20M] | 38.56s | 38.56s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_CALL-benchmark-gas-value_20M] | 38.37s | 38.37s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1360n1-benchmark-gas-value_20M] | 38.26s | 38.26s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_CALL-benchmark-gas-value_20M] | 38.17s | 38.17s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_STATICCALL-benchmark-gas-value_20M] | 38.16s | 38.16s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH19-benchmark-gas-value_20M] | 38.06s | 38.06s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SMOD--benchmark-gas-value_20M] | 37.96s | 37.96s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_63-benchmark-gas-value_20M] | 37.66s | 37.66s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 37.05s | 37.05s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH21-benchmark-gas-value_20M] | 36.26s | 36.26s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 35.96s | 35.96s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n2-benchmark-gas-value_20M] | 35.87s | 35.87s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_1_even-benchmark-gas-value_20M] | 35.76s | 35.76s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1360n2-benchmark-gas-value_20M] | 35.65s | 35.65s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_CALL-benchmark-gas-value_20M] | 35.47s | 35.47s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_balanced-benchmark-gas-value_20M] | 35.36s | 35.36s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 35.25s | 35.25s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_20M] | 34.96s | 34.96s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH20-benchmark-gas-value_20M] | 34.95s | 34.95s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 34.66s | 34.66s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 34.66s | 34.66s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 34.65s | 34.65s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1349n1-benchmark-gas-value_20M] | 34.35s | 34.35s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_0-benchmark-gas-value_20M] | 34.35s | 34.35s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_20M] | 34.26s | 34.26s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_STATICCALL-benchmark-gas-value_20M] | 34.26s | 34.26s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n3-benchmark-gas-value_20M] | 34.16s | 34.16s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 34.06s | 34.06s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 33.95s | 33.95s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_CALL-benchmark-gas-value_20M] | 33.85s | 33.85s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b'ff'-benchmark-gas-value_20M] | 33.76s | 33.76s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_20M] | 33.75s | 33.75s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 33.66s | 33.66s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b'ff'-benchmark-gas-value_20M] | 33.66s | 33.66s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_256-benchmark-gas-value_20M] | 33.66s | 33.66s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b'ff'-benchmark-gas-value_20M] | 33.56s | 33.56s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MOD--benchmark-gas-value_20M] | 33.55s | 33.55s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b'ff'-benchmark-gas-value_20M] | 33.46s | 33.46s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_1024-benchmark-gas-value_20M] | 33.46s | 33.46s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_CALLCODE-benchmark-gas-value_20M] | 33.36s | 33.36s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_32-benchmark-gas-value_20M] | 33.16s | 33.16s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_1-benchmark-gas-value_20M] | 33.16s | 33.16s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_63-benchmark-gas-value_20M] | 33.16s | 33.16s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_one_pairing-benchmark-gas-value_20M] | 33.16s | 33.16s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_CALL-benchmark-gas-value_20M] | 32.96s | 32.96s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_CALLCODE-benchmark-gas-value_20M] | 32.86s | 32.86s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_cover_windows-benchmark-gas-value_20M] | 32.76s | 32.76s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_20M] | 32.66s | 32.66s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_20M] | 32.46s | 32.46s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b'ff'-benchmark-gas-value_20M] | 32.36s | 32.36s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_20M] | 32.36s | 32.36s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_STATICCALL-benchmark-gas-value_20M] | 32.35s | 32.35s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH18-benchmark-gas-value_20M] | 32.26s | 32.26s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_CALLCODE-benchmark-gas-value_20M] | 32.16s | 32.16s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b'ff'-benchmark-gas-value_20M] | 32.15s | 32.15s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_STATICCALL-benchmark-gas-value_20M] | 31.86s | 31.86s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_CALLCODE-benchmark-gas-value_20M] | 31.76s | 31.76s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 31.55s | 31.55s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_20M] | 31.45s | 31.45s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 31.36s | 31.36s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 31.25s | 31.25s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_20M] | 31.16s | 31.16s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 30.95s | 30.95s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH16-benchmark-gas-value_20M] | 30.95s | 30.95s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH17-benchmark-gas-value_20M] | 30.75s | 30.75s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_STATICCALL-benchmark-gas-value_20M] | 30.56s | 30.56s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_20M] | 30.56s | 30.56s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_20M] | 30.55s | 30.55s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_1024-benchmark-gas-value_20M] | 30.46s | 30.46s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 30.45s | 30.45s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_CALL-benchmark-gas-value_20M] | 30.45s | 30.45s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 30.25s | 30.25s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 30.25s | 30.25s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_256-benchmark-gas-value_20M] | 30.25s | 30.25s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_20M] | 30.16s | 30.16s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_0-benchmark-gas-value_20M] | 30.15s | 30.15s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 30.05s | 30.05s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 30.05s | 30.05s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 30.05s | 30.05s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 29.95s | 29.95s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_20M] | 29.95s | 29.95s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 29.95s | 29.95s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 29.85s | 29.85s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_20M] | 29.85s | 29.85s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 29.75s | 29.75s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH15-benchmark-gas-value_20M] | 29.65s | 29.65s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH14-benchmark-gas-value_20M] | 29.65s | 29.65s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_32-benchmark-gas-value_20M] | 29.45s | 29.45s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 29.45s | 29.45s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_20M] | 29.35s | 29.35s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_20M] | 29.25s | 29.25s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_20M] | 29.16s | 29.16s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_20M] | 29.15s | 29.15s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_63-benchmark-gas-value_20M] | 29.15s | 29.15s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 29.05s | 29.05s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 28.95s | 28.95s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 28.66s | 28.66s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 28.65s | 28.65s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 28.64s | 28.64s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_2_even-benchmark-gas-value_20M] | 28.55s | 28.55s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_20M] | 28.45s | 28.45s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_20M] | 28.45s | 28.45s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_20M] | 28.35s | 28.35s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 28.35s | 28.35s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD--benchmark-gas-value_20M] | 28.25s | 28.25s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_2_pair-benchmark-gas-value_20M] | 28.05s | 28.05s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_20M] | 27.95s | 27.95s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 27.95s | 27.95s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_two_pairings-benchmark-gas-value_20M] | 27.85s | 27.85s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 27.84s | 27.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 27.84s | 27.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 27.55s | 27.55s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 27.45s | 27.45s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_20M] | 27.35s | 27.35s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 27.35s | 27.35s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 27.14s | 27.14s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 26.95s | 26.95s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 26.95s | 26.95s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 26.85s | 26.85s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 26.84s | 26.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 26.75s | 26.75s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 26.75s | 26.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_qube-benchmark-gas-value_20M] | 26.65s | 26.65s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 26.65s | 26.65s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 26.65s | 26.65s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 26.55s | 26.55s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 26.45s | 26.45s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 26.34s | 26.34s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_408_gas_balanced-benchmark-gas-value_20M] | 26.25s | 26.25s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 26.25s | 26.25s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_marius_1_even-benchmark-gas-value_20M] | 26.25s | 26.25s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 26.15s | 26.15s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 26.05s | 26.05s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 26.05s | 26.05s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_600_gas_balanced-benchmark-gas-value_20M] | 26.05s | 26.05s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 26.04s | 26.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_20M] | 25.95s | 25.95s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_20M] | 25.84s | 25.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_20M] | 25.75s | 25.75s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_3-benchmark-gas-value_20M] | 25.44s | 25.44s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH13-benchmark-gas-value_20M] | 25.25s | 25.25s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of zero data-opcode_RETURN-benchmark-gas-value_20M] | 24.94s | 24.94s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH12-benchmark-gas-value_20M] | 24.35s | 24.35s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_20M] | 24.35s | 24.35s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_4_pair-benchmark-gas-value_20M] | 23.85s | 23.85s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH11-benchmark-gas-value_20M] | 23.75s | 23.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n1-benchmark-gas-value_20M] | 23.54s | 23.54s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1152n1-benchmark-gas-value_20M] | 23.45s | 23.45s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_base_heavy-benchmark-gas-value_20M] | 23.25s | 23.25s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD--benchmark-gas-value_20M] | 23.16s | 23.16s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH10-benchmark-gas-value_20M] | 22.94s | 22.94s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_6-benchmark-gas-value_20M] | 22.75s | 22.75s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SSTORE new value-benchmark-gas-value_20M] | 22.44s | 22.44s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_5_pair-benchmark-gas-value_20M] | 22.35s | 22.35s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_True-benchmark-gas-value_20M] | 21.84s | 21.84s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 21.55s | 21.55s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_256_exp_2-benchmark-gas-value_20M] | 21.55s | 21.55s |
| test_bitwise.py::test_clz_diff[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 21.54s | 21.54s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH9-benchmark-gas-value_20M] | 21.45s | 21.45s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_264_exp_2-benchmark-gas-value_20M] | 21.44s | 21.44s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_996_gas_balanced-benchmark-gas-value_20M] | 20.64s | 20.64s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of non-zero data-opcode_REVERT-benchmark-gas-value_20M] | 20.64s | 20.64s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_767_gas_balanced-benchmark-gas-value_20M] | 20.34s | 20.34s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH8-benchmark-gas-value_20M] | 20.14s | 20.14s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_408_gas_base_heavy-benchmark-gas-value_20M] | 19.84s | 19.84s |
| test_transaction_types.py::test_block_full_data[fork_Osaka-blockchain_test-zero_byte_True-benchmark-gas-value_20M] | 19.74s | 19.74s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_square-benchmark-gas-value_20M] | 19.34s | 19.34s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH7-benchmark-gas-value_20M] | 19.24s | 19.24s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of non-zero data-opcode_RETURN-benchmark-gas-value_20M] | 19.24s | 19.24s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH6-benchmark-gas-value_20M] | 19.14s | 19.14s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_qube-benchmark-gas-value_20M] | 19.14s | 19.14s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_256-benchmark-gas-value_20M] | 19.14s | 19.14s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_32-benchmark-gas-value_20M] | 19.04s | 19.04s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_616_gas_base_heavy-benchmark-gas-value_20M] | 19.04s | 19.04s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_10240-benchmark-gas-value_20M] | 18.94s | 18.94s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_800_gas_base_heavy-benchmark-gas-value_20M] | 18.84s | 18.84s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_867_gas_base_heavy-benchmark-gas-value_20M] | 18.74s | 18.74s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 18.45s | 18.45s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_0-benchmark-gas-value_20M] | 18.44s | 18.44s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1045_gas_base_heavy-benchmark-gas-value_20M] | 18.44s | 18.44s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-5b-benchmark-gas-value_20M] | 18.24s | 18.24s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_1024-benchmark-gas-value_20M] | 18.14s | 18.14s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_1024-benchmark-gas-value_20M] | 18.04s | 18.04s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_12-benchmark-gas-value_20M] | 18.04s | 18.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_20M] | 17.84s | 17.84s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_BLOBBASEFEE-benchmark-gas-value_20M] | 17.54s | 17.54s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH5-benchmark-gas-value_20M] | 17.04s | 17.04s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_24-benchmark-gas-value_20M] | 17.04s | 17.04s |
| test_bitwise.py::test_shifts[fork_Osaka-blockchain_test-opcode_SAR-benchmark-gas-value_20M] | 16.94s | 16.94s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_0-benchmark-gas-value_20M] | 16.94s | 16.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_32-benchmark-gas-value_20M] | 16.94s | 16.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_256-benchmark-gas-value_20M] | 16.74s | 16.74s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_0-benchmark-gas-value_20M] | 16.74s | 16.74s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_256-benchmark-gas-value_20M] | 16.64s | 16.64s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_20M] | 16.64s | 16.64s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_32-benchmark-gas-value_20M] | 16.64s | 16.64s |
| test_control_flow.py::test_jumpdests[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 16.54s | 16.54s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_1024-benchmark-gas-value_20M] | 16.54s | 16.54s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_20M] | 16.44s | 16.44s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_32-benchmark-gas-value_20M] | 16.44s | 16.44s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_256-benchmark-gas-value_20M] | 16.24s | 16.24s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_1024-benchmark-gas-value_20M] | 16.14s | 16.14s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1024_exp_2-benchmark-gas-value_20M] | 16.14s | 16.14s |
| test_bitwise.py::test_shifts[fork_Osaka-blockchain_test-opcode_SHR-benchmark-gas-value_20M] | 16.14s | 16.14s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_256-benchmark-gas-value_20M] | 16.04s | 16.04s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH4-benchmark-gas-value_20M] | 16.04s | 16.04s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_qube-benchmark-gas-value_20M] | 16.04s | 16.04s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_256-benchmark-gas-value_20M] | 16.04s | 16.04s |
| test_tx_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_GASPRICE-benchmark-gas-value_20M] | 15.84s | 15.84s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_32-benchmark-gas-value_20M] | 15.84s | 15.84s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SHR--benchmark-gas-value_20M] | 15.84s | 15.84s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_0-benchmark-gas-value_20M] | 15.84s | 15.84s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_32-benchmark-gas-value_20M] | 15.73s | 15.73s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 15.73s | 15.73s |
| test_account_query.py::test_codesize[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 15.54s | 15.54s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_256-benchmark-gas-value_20M] | 15.54s | 15.54s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_32-benchmark-gas-value_20M] | 15.54s | 15.54s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_qube-benchmark-gas-value_20M] | 15.54s | 15.54s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_0-benchmark-gas-value_20M] | 15.44s | 15.44s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_256-benchmark-gas-value_20M] | 15.44s | 15.44s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_256-benchmark-gas-value_20M] | 15.44s | 15.44s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_20M] | 15.43s | 15.43s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_32-benchmark-gas-value_20M] | 15.34s | 15.34s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_20M] | 15.23s | 15.23s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_1024-benchmark-gas-value_20M] | 15.23s | 15.23s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1000-benchmark-gas-value_20M] | 15.15s | 15.15s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_1024-benchmark-gas-value_20M] | 15.13s | 15.13s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_0-benchmark-gas-value_20M] | 15.04s | 15.04s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SHL--benchmark-gas-value_20M] | 15.04s | 15.04s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_0-benchmark-gas-value_20M] | 14.94s | 14.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_1024-benchmark-gas-value_20M] | 14.94s | 14.94s |
| test_tx_context.py::test_blobhash[fork_Osaka-blockchain_test-no_blobs-benchmark-gas-value_20M] | 14.93s | 14.93s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_20M] | 14.84s | 14.84s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_32-benchmark-gas-value_20M] | 14.83s | 14.83s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0 bytes-benchmark-gas-value_20M] | 14.74s | 14.74s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_0-benchmark-gas-value_20M] | 14.73s | 14.73s |
| test_control_flow.py::test_pc_op[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 14.73s | 14.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_1024-benchmark-gas-value_20M] | 14.73s | 14.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_32-benchmark-gas-value_20M] | 14.64s | 14.64s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_256-benchmark-gas-value_20M] | 14.64s | 14.64s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_256-benchmark-gas-value_20M] | 14.63s | 14.63s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.75x max code size-benchmark-gas-value_20M] | 14.54s | 14.54s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1-benchmark-gas-value_20M] | 14.54s | 14.54s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_20M] | 14.44s | 14.44s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_qube-benchmark-gas-value_20M] | 14.44s | 14.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 14.44s | 14.44s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_10240-benchmark-gas-value_20M] | 14.44s | 14.44s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_0-benchmark-gas-value_20M] | 14.43s | 14.43s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.50x max code size-benchmark-gas-value_20M] | 14.34s | 14.34s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.25x max code size-benchmark-gas-value_20M] | 14.34s | 14.34s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_20M] | 14.34s | 14.34s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_0-benchmark-gas-value_20M] | 14.34s | 14.34s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_20M] | 14.33s | 14.33s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_1024-benchmark-gas-value_20M] | 14.33s | 14.33s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_256-benchmark-gas-value_20M] | 14.24s | 14.24s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH3-benchmark-gas-value_20M] | 14.24s | 14.24s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_32-benchmark-gas-value_20M] | 14.24s | 14.24s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_1024-benchmark-gas-value_20M] | 14.23s | 14.23s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_CHAINID-benchmark-gas-value_20M] | 14.14s | 14.14s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_20M] | 14.14s | 14.14s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_256-benchmark-gas-value_20M] | 14.14s | 14.14s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_10240-benchmark-gas-value_20M] | 14.14s | 14.14s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_1048576-benchmark-gas-value_20M] | 14.14s | 14.14s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_32-benchmark-gas-value_20M] | 14.13s | 14.13s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_0-benchmark-gas-value_20M] | 14.04s | 14.04s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_1024-benchmark-gas-value_20M] | 14.04s | 14.04s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_BASEFEE-benchmark-gas-value_20M] | 14.04s | 14.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_256-benchmark-gas-value_20M] | 13.94s | 13.94s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_32-benchmark-gas-value_20M] | 13.94s | 13.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_256-benchmark-gas-value_20M] | 13.93s | 13.93s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_SLT--benchmark-gas-value_20M] | 13.84s | 13.84s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_0-benchmark-gas-value_20M] | 13.84s | 13.84s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_square-benchmark-gas-value_20M] | 13.83s | 13.83s |
| test_call_context.py::test_returndatasize_zero[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 13.83s | 13.83s |
| test_call_context.py::test_callvalue_from_call[fork_Osaka-blockchain_test-non_zero_value_False-benchmark-gas-value_20M] | 13.74s | 13.74s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_TIMESTAMP-benchmark-gas-value_20M] | 13.74s | 13.74s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-max code size-benchmark-gas-value_20M] | 13.73s | 13.73s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_0-benchmark-gas-value_20M] | 13.64s | 13.64s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH0-benchmark-gas-value_20M] | 13.64s | 13.64s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-00-benchmark-gas-value_20M] | 13.63s | 13.63s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_EXP--benchmark-gas-value_20M] | 13.63s | 13.63s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_20M] | 13.63s | 13.63s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 13.54s | 13.54s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.25x max code size-benchmark-gas-value_20M] | 13.54s | 13.54s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_GASLIMIT-benchmark-gas-value_20M] | 13.54s | 13.54s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.75x max code size-benchmark-gas-value_20M] | 13.54s | 13.54s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_20M] | 13.44s | 13.44s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_NUMBER-benchmark-gas-value_20M] | 13.44s | 13.44s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_0-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_20M] | 13.44s | 13.44s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_20M] | 13.44s | 13.44s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_20M] | 13.44s | 13.44s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_0-benchmark-gas-value_20M] | 13.44s | 13.44s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.50x max code size-benchmark-gas-value_20M] | 13.34s | 13.34s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_20M] | 13.24s | 13.24s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SIGNEXTEND--benchmark-gas-value_20M] | 13.14s | 13.14s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SSTORE same value-benchmark-gas-value_20M] | 13.14s | 13.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 13.13s | 13.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_20M] | 13.13s | 13.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_256-benchmark-gas-value_20M] | 13.04s | 13.04s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_0-benchmark-gas-value_20M] | 13.04s | 13.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_20M] | 13.03s | 13.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_1024-benchmark-gas-value_20M] | 12.94s | 12.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_1024-benchmark-gas-value_20M] | 12.94s | 12.94s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_0-benchmark-gas-value_20M] | 12.93s | 12.93s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0 bytes-benchmark-gas-value_20M] | 12.93s | 12.93s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_256-benchmark-gas-value_20M] | 12.93s | 12.93s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_20M] | 12.83s | 12.83s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_256-benchmark-gas-value_20M] | 12.83s | 12.83s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_pow_0x10001-benchmark-gas-value_20M] | 12.74s | 12.74s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_20M] | 12.73s | 12.73s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_256-benchmark-gas-value_20M] | 12.73s | 12.73s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_32-benchmark-gas-value_20M] | 12.73s | 12.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_136279841-benchmark-gas-value_20M] | 12.64s | 12.64s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_20M] | 12.64s | 12.64s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_32-benchmark-gas-value_20M] | 12.64s | 12.64s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_10240-benchmark-gas-value_20M] | 12.64s | 12.64s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_32-benchmark-gas-value_20M] | 12.63s | 12.63s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_32-benchmark-gas-value_20M] | 12.63s | 12.63s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_square-benchmark-gas-value_20M] | 12.63s | 12.63s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 12.63s | 12.63s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_11-benchmark-gas-value_20M] | 12.63s | 12.63s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_20M] | 12.63s | 12.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_256-benchmark-gas-value_20M] | 12.54s | 12.54s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_7-benchmark-gas-value_20M] | 12.54s | 12.54s |
| test_control_flow.py::test_gas_op[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 12.54s | 12.54s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_32-benchmark-gas-value_20M] | 12.53s | 12.53s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_0-benchmark-gas-value_20M] | 12.53s | 12.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_136279841-benchmark-gas-value_20M] | 12.43s | 12.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_1024-benchmark-gas-value_20M] | 12.43s | 12.43s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_11-benchmark-gas-value_20M] | 12.35s | 12.35s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_3-benchmark-gas-value_20M] | 12.34s | 12.34s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_3-benchmark-gas-value_20M] | 12.33s | 12.33s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_False-benchmark-gas-value_20M] | 12.33s | 12.33s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_32-benchmark-gas-value_20M] | 12.33s | 12.33s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_20M] | 12.33s | 12.33s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_7-benchmark-gas-value_20M] | 12.24s | 12.24s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_11-benchmark-gas-value_20M] | 12.23s | 12.23s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_1048576-benchmark-gas-value_20M] | 12.23s | 12.23s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 12.23s | 12.23s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_BALANCE-benchmark-gas-value_20M] | 12.14s | 12.14s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_20M] | 12.13s | 12.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_0-benchmark-gas-value_20M] | 12.04s | 12.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_32-benchmark-gas-value_20M] | 12.04s | 12.04s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_11-benchmark-gas-value_20M] | 12.04s | 12.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_20M] | 12.04s | 12.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_0-benchmark-gas-value_20M] | 12.04s | 12.04s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_13-benchmark-gas-value_20M] | 12.03s | 12.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_13-benchmark-gas-value_20M] | 12.03s | 12.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_0-benchmark-gas-value_20M] | 12.03s | 12.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_7-benchmark-gas-value_20M] | 12.03s | 12.03s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 12.03s | 12.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_20M] | 12.03s | 12.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_256-benchmark-gas-value_20M] | 12.03s | 12.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_5-benchmark-gas-value_20M] | 11.94s | 11.94s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_11-benchmark-gas-value_20M] | 11.94s | 11.94s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_32-benchmark-gas-value_20M] | 11.94s | 11.94s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_0-benchmark-gas-value_20M] | 11.93s | 11.93s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_256-benchmark-gas-value_20M] | 11.93s | 11.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_3-benchmark-gas-value_20M] | 11.93s | 11.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_13-benchmark-gas-value_20M] | 11.93s | 11.93s |
| test_bitwise.py::test_clz_same[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 11.93s | 11.93s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_256-benchmark-gas-value_20M] | 11.93s | 11.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_13-benchmark-gas-value_20M] | 11.93s | 11.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_5-benchmark-gas-value_20M] | 11.93s | 11.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_10240-benchmark-gas-value_20M] | 11.84s | 11.84s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_11-benchmark-gas-value_20M] | 11.84s | 11.84s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_3-benchmark-gas-value_20M] | 11.83s | 11.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_13-benchmark-gas-value_20M] | 11.83s | 11.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_136279841-benchmark-gas-value_20M] | 11.83s | 11.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_5-benchmark-gas-value_20M] | 11.83s | 11.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 11.83s | 11.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_3-benchmark-gas-value_20M] | 11.73s | 11.73s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_20M] | 11.73s | 11.73s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_20M] | 11.73s | 11.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_5-benchmark-gas-value_20M] | 11.73s | 11.73s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_32-benchmark-gas-value_20M] | 11.73s | 11.73s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_1048576-benchmark-gas-value_20M] | 11.73s | 11.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_136279841-benchmark-gas-value_20M] | 11.73s | 11.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_5-benchmark-gas-value_20M] | 11.73s | 11.73s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_0-benchmark-gas-value_20M] | 11.73s | 11.73s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_True-benchmark-gas-value_20M] | 11.64s | 11.64s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_7-benchmark-gas-value_20M] | 11.63s | 11.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 11.63s | 11.63s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_20M] | 11.63s | 11.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_0-benchmark-gas-value_20M] | 11.63s | 11.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 11.63s | 11.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 11.63s | 11.63s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_3-benchmark-gas-value_20M] | 11.61s | 11.61s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 11.54s | 11.54s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 11.53s | 11.53s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MUL--benchmark-gas-value_20M] | 11.53s | 11.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 11.53s | 11.53s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 11.53s | 11.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_BALANCE-benchmark-gas-value_20M] | 11.53s | 11.53s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_20M] | 11.53s | 11.53s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 11.53s | 11.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_136279841-benchmark-gas-value_20M] | 11.44s | 11.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 11.43s | 11.43s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 11.43s | 11.43s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_0-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_20M] | 11.43s | 11.43s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_13-benchmark-gas-value_20M] | 11.43s | 11.43s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 11.43s | 11.43s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_20M] | 11.43s | 11.43s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_32-benchmark-gas-value_20M] | 11.43s | 11.43s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 11.34s | 11.34s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-605b5b-benchmark-gas-value_20M] | 11.34s | 11.34s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_20M] | 11.33s | 11.33s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_20M] | 11.33s | 11.33s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 11.33s | 11.33s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 11.33s | 11.33s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_20M] | 11.33s | 11.33s |
| test_call_context.py::test_callvalue_from_origin[fork_Osaka-blockchain_test-non_zero_value_False-benchmark-gas-value_20M] | 11.33s | 11.33s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_LT--benchmark-gas-value_20M] | 11.33s | 11.33s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_64b_exp_512-benchmark-gas-value_20M] | 11.33s | 11.33s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_BALANCE-benchmark-gas-value_20M] | 11.33s | 11.33s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 11.23s | 11.23s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 11.23s | 11.23s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 11.23s | 11.23s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 11.23s | 11.23s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_20M] | 11.23s | 11.23s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_1024-benchmark-gas-value_20M] | 11.13s | 11.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_256-benchmark-gas-value_20M] | 11.13s | 11.13s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_ADD--benchmark-gas-value_20M] | 11.13s | 11.13s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 11.13s | 11.13s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 11.13s | 11.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_64b_exp_512-benchmark-gas-value_20M] | 11.13s | 11.13s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 11.13s | 11.13s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 11.13s | 11.13s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH2-benchmark-gas-value_20M] | 11.13s | 11.13s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 11.13s | 11.13s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_20M] | 11.13s | 11.13s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_20M] | 11.03s | 11.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_7-benchmark-gas-value_20M] | 11.03s | 11.03s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 11.03s | 11.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_1048576-benchmark-gas-value_20M] | 11.02s | 11.02s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_BALANCE-benchmark-gas-value_20M] | 10.94s | 10.94s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_20M] | 10.93s | 10.93s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 10.93s | 10.93s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_20M] | 10.93s | 10.93s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 10.93s | 10.93s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 10.83s | 10.83s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_20M] | 10.83s | 10.83s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 10.79s | 10.79s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_BYTE--benchmark-gas-value_20M] | 10.74s | 10.74s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 10.73s | 10.73s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 10.73s | 10.73s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP2-benchmark-gas-value_20M] | 10.73s | 10.73s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH1-benchmark-gas-value_20M] | 10.73s | 10.73s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_0-benchmark-gas-value_20M] | 10.73s | 10.73s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_1048576-benchmark-gas-value_20M] | 10.73s | 10.73s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP16-benchmark-gas-value_20M] | 10.73s | 10.73s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 10.73s | 10.73s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP4-benchmark-gas-value_20M] | 10.64s | 10.64s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_20M] | 10.64s | 10.64s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP1-benchmark-gas-value_20M] | 10.63s | 10.63s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP12-benchmark-gas-value_20M] | 10.63s | 10.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_20M] | 10.63s | 10.63s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 10.63s | 10.63s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP6-benchmark-gas-value_20M] | 10.63s | 10.63s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP10-benchmark-gas-value_20M] | 10.57s | 10.57s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_20M] | 10.54s | 10.54s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_20M] | 10.53s | 10.53s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP15-benchmark-gas-value_20M] | 10.53s | 10.53s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP5-benchmark-gas-value_20M] | 10.44s | 10.44s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_32-benchmark-gas-value_20M] | 10.43s | 10.43s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_20M] | 10.43s | 10.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 10.43s | 10.43s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_20M] | 10.34s | 10.34s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000001-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 10.33s | 10.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_0-benchmark-gas-value_20M] | 10.33s | 10.33s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_20M] | 10.33s | 10.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 10.33s | 10.33s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_OR--benchmark-gas-value_20M] | 10.33s | 10.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_32-benchmark-gas-value_20M] | 10.23s | 10.23s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_GT--benchmark-gas-value_20M] | 10.23s | 10.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000007-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 10.23s | 10.23s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_0-benchmark-gas-value_20M] | 10.23s | 10.23s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_1024-benchmark-gas-value_20M] | 10.23s | 10.23s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_AND--benchmark-gas-value_20M] | 10.23s | 10.23s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_0-benchmark-gas-value_20M] | 10.23s | 10.23s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_1024-benchmark-gas-value_20M] | 10.13s | 10.13s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP3-benchmark-gas-value_20M] | 10.13s | 10.13s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP9-benchmark-gas-value_20M] | 10.13s | 10.13s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_XOR--benchmark-gas-value_20M] | 10.13s | 10.13s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 10.13s | 10.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_256-benchmark-gas-value_20M] | 10.13s | 10.13s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b''-benchmark-gas-value_20M] | 10.13s | 10.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_10240-benchmark-gas-value_20M] | 10.13s | 10.13s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000a-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 10.13s | 10.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_32-benchmark-gas-value_20M] | 10.03s | 10.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000e-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 10.03s | 10.03s |
| test_ripemd160.py::test_ripemd160[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 10.03s | 10.03s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP14-benchmark-gas-value_20M] | 10.03s | 10.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 10.03s | 10.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_1024-benchmark-gas-value_20M] | 10.03s | 10.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_256-benchmark-gas-value_20M] | 10.03s | 10.03s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP7-benchmark-gas-value_20M] | 9.94s | 9.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_0-benchmark-gas-value_20M] | 9.94s | 9.94s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_1024-benchmark-gas-value_20M] | 9.93s | 9.93s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_20M] | 9.93s | 9.93s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP13-benchmark-gas-value_20M] | 9.93s | 9.93s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 9.93s | 9.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 9.88s | 9.88s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP8-benchmark-gas-value_20M] | 9.83s | 9.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000100-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.83s | 9.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000003-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.83s | 9.83s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_1024-benchmark-gas-value_20M] | 9.83s | 9.83s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000a-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.83s | 9.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 9.74s | 9.74s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000b-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.73s | 9.73s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000e-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.73s | 9.73s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 9.73s | 9.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_pow_0x10001-benchmark-gas-value_20M] | 9.73s | 9.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 9.73s | 9.73s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000c-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.73s | 9.73s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP11-benchmark-gas-value_20M] | 9.73s | 9.73s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000004-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.73s | 9.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 9.73s | 9.73s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000011-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.64s | 9.64s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_BALANCE-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_BALANCE-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000010-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000009-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_256-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_BALANCE-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000100-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_32-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000f-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.63s | 9.63s |
| test_bitwise.py::test_not_op[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 9.54s | 9.54s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 9.53s | 9.53s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000c-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.53s | 9.53s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b''-benchmark-gas-value_20M] | 9.53s | 9.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 9.53s | 9.53s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000008-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.53s | 9.53s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000009-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.53s | 9.53s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_20M] | 9.53s | 9.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 9.43s | 9.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 9.43s | 9.43s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000005-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.43s | 9.43s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000006-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.43s | 9.43s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b''-benchmark-gas-value_20M] | 9.43s | 9.43s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000003-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.43s | 9.43s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000d-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.43s | 9.43s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000002-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.43s | 9.43s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_256-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_0-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-615b5b5b-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000006-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000011-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000002-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000d-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_20M] | 9.33s | 9.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000008-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_BALANCE-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000005-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_32-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000f-blockchain_test-transfer_amount_1-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000010-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 9.23s | 9.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 9.14s | 9.14s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_20M] | 9.13s | 9.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_1048576-benchmark-gas-value_20M] | 9.13s | 9.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_1024-benchmark-gas-value_20M] | 9.13s | 9.13s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000007-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.13s | 9.13s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000b-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.13s | 9.13s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 9.13s | 9.13s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_20M] | 9.03s | 9.03s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000001-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 9.03s | 9.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_0-benchmark-gas-value_20M] | 8.93s | 8.93s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_20M] | 8.93s | 8.93s |
| test_control_flow.py::test_jumpis[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 8.93s | 8.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 8.93s | 8.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 8.93s | 8.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_32_byte_coord_and_scalar-benchmark-gas-value_20M] | 8.93s | 8.93s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_20M] | 8.93s | 8.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_20M] | 8.93s | 8.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 8.86s | 8.86s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 8.84s | 8.84s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000004-blockchain_test-transfer_amount_0-benchmark-gas-value_20M] | 8.83s | 8.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_20M] | 8.83s | 8.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 8.83s | 8.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_20M] | 8.83s | 8.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_20M] | 8.83s | 8.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_20M] | 8.73s | 8.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_20M] | 8.73s | 8.73s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_1_2_32_byte_scalar-benchmark-gas-value_20M] | 8.73s | 8.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_square-benchmark-gas-value_20M] | 8.73s | 8.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_20M] | 8.73s | 8.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 8.73s | 8.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_20M] | 8.73s | 8.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_1024-benchmark-gas-value_20M] | 8.73s | 8.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_20M] | 8.73s | 8.73s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul-benchmark-gas-value_20M] | 8.63s | 8.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 8.63s | 8.63s |
| test_control_flow.py::test_jump_benchmark[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 8.63s | 8.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_20M] | 8.63s | 8.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_20M] | 8.53s | 8.53s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_512-benchmark-gas-value_20M] | 8.53s | 8.53s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_pow_0x10001-benchmark-gas-value_20M] | 8.53s | 8.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_20M] | 8.53s | 8.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_20M] | 8.53s | 8.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_1024-benchmark-gas-value_20M] | 8.53s | 8.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_20M] | 8.43s | 8.43s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_32-benchmark-gas-value_20M] | 8.43s | 8.43s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-605b-benchmark-gas-value_20M] | 8.43s | 8.43s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_1024-benchmark-gas-value_20M] | 8.43s | 8.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_20M] | 8.43s | 8.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_20M] | 8.43s | 8.43s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_20M] | 8.43s | 8.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_20M] | 8.43s | 8.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_20M] | 8.33s | 8.33s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_256-benchmark-gas-value_20M] | 8.33s | 8.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_20M] | 8.23s | 8.23s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_True-empty_authority_True-benchmark-gas-value_20M] | 8.23s | 8.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_20M] | 8.23s | 8.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_20M] | 8.23s | 8.23s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_1024-benchmark-gas-value_20M] | 8.23s | 8.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_20M] | 8.23s | 8.23s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value-benchmark-gas-value_20M] | 8.14s | 8.14s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_20M] | 8.13s | 8.13s |
| test_identity.py::test_identity[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 8.13s | 8.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_square-benchmark-gas-value_20M] | 8.13s | 8.13s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_20M] | 8.13s | 8.13s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_20M] | 8.13s | 8.13s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_20M] | 8.13s | 8.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_256-benchmark-gas-value_20M] | 8.03s | 8.03s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_0-benchmark-gas-value_20M] | 8.03s | 8.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_32-benchmark-gas-value_20M] | 7.93s | 7.93s |
| test_control_flow.py::test_jumps[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 7.93s | 7.93s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_pow_0x10001-benchmark-gas-value_20M] | 7.74s | 7.74s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_32-benchmark-gas-value_20M] | 7.73s | 7.73s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value, revert-benchmark-gas-value_20M] | 7.63s | 7.63s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSLOAD-benchmark-gas-value_20M] | 7.63s | 7.63s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_32-benchmark-gas-value_20M] | 7.63s | 7.63s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_1024-benchmark-gas-value_20M] | 7.63s | 7.63s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_20M] | 7.63s | 7.63s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_256-benchmark-gas-value_20M] | 7.63s | 7.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_256-benchmark-gas-value_20M] | 7.53s | 7.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_32-benchmark-gas-value_20M] | 7.53s | 7.53s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_20M] | 7.53s | 7.53s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value, out of gas-benchmark-gas-value_20M] | 7.53s | 7.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_False-empty_authority_False-benchmark-gas-value_20M] | 7.47s | 7.47s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_True-empty_authority_False-benchmark-gas-value_20M] | 7.43s | 7.43s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b''-benchmark-gas-value_20M] | 7.43s | 7.43s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_1048576-benchmark-gas-value_20M] | 7.43s | 7.43s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_False-empty_authority_False-benchmark-gas-value_20M] | 7.43s | 7.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_0-benchmark-gas-value_20M] | 7.43s | 7.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_pow_0x10001-benchmark-gas-value_20M] | 7.43s | 7.43s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_True-empty_authority_False-benchmark-gas-value_20M] | 7.33s | 7.33s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_False-empty_authority_True-benchmark-gas-value_20M] | 7.33s | 7.33s |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODEHASH-benchmark-gas-value_20M] | 7.33s | 7.33s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-615b5b-benchmark-gas-value_20M] | 7.33s | 7.33s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_True-empty_authority_True-benchmark-gas-value_20M] | 7.33s | 7.33s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_False-empty_authority_False-benchmark-gas-value_20M] | 7.33s | 7.33s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_True-empty_authority_True-benchmark-gas-value_20M] | 7.23s | 7.23s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b''-benchmark-gas-value_20M] | 7.23s | 7.23s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_False-empty_authority_False-benchmark-gas-value_20M] | 7.23s | 7.23s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_False-empty_authority_True-benchmark-gas-value_20M] | 7.23s | 7.23s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_False-empty_authority_True-benchmark-gas-value_20M] | 7.16s | 7.16s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_3_even-benchmark-gas-value_20M] | 7.13s | 7.13s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_True-empty_authority_False-benchmark-gas-value_20M] | 7.13s | 7.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_128b_exp_1024-benchmark-gas-value_20M] | 7.13s | 7.13s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_1024-benchmark-gas-value_20M] | 7.03s | 7.03s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_False-empty_authority_True-benchmark-gas-value_20M] | 7.03s | 7.03s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_256-benchmark-gas-value_20M] | 7.03s | 7.03s |
| test_account_query.py::test_ext_account_query_cold[fork_Osaka-blockchain_test-absent_accounts_False-opcode_BALANCE-benchmark-gas-value_20M] | 6.93s | 6.93s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_32-benchmark-gas-value_20M] | 6.93s | 6.93s |
| test_transaction_types.py::test_block_full_data[fork_Osaka-blockchain_test-zero_byte_False-benchmark-gas-value_20M] | 6.93s | 6.93s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_0-benchmark-gas-value_20M] | 6.93s | 6.93s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_True-empty_authority_True-benchmark-gas-value_20M] | 6.93s | 6.93s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_0-benchmark-gas-value_20M] | 6.83s | 6.83s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_20M] | 6.83s | 6.83s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_32-benchmark-gas-value_20M] | 6.73s | 6.73s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b''-benchmark-gas-value_20M] | 6.73s | 6.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_128b_exp_1024-benchmark-gas-value_20M] | 6.63s | 6.63s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-max code size-benchmark-gas-value_20M] | 6.63s | 6.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_256-benchmark-gas-value_20M] | 6.63s | 6.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_256-benchmark-gas-value_20M] | 6.43s | 6.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_0-benchmark-gas-value_20M] | 6.33s | 6.33s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_1024-benchmark-gas-value_20M] | 6.03s | 6.03s |
| test_system.py::test_selfdestruct_existing[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_20M] | 6.03s | 6.03s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSLOAD-benchmark-gas-value_20M] | 5.83s | 5.83s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_0-transfer_amount_1-benchmark-gas-value_20M] | 5.83s | 5.83s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALL-transfer_amount_0-benchmark-gas-value_20M] | 5.83s | 5.83s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value, revert-benchmark-gas-value_20M] | 5.73s | 5.73s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_20M] | 5.73s | 5.73s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALLCODE-transfer_amount_0-benchmark-gas-value_20M] | 5.72s | 5.72s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_512b_exp_1024-benchmark-gas-value_20M] | 5.53s | 5.53s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_4_exp_heavy-benchmark-gas-value_20M] | 5.53s | 5.53s |
| test_call_context.py::test_callvalue_from_call[fork_Osaka-blockchain_test-non_zero_value_True-benchmark-gas-value_20M] | 5.53s | 5.53s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_0-transfer_amount_0-benchmark-gas-value_20M] | 5.53s | 5.53s |
| test_system.py::test_selfdestruct_existing[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_20M] | 5.43s | 5.43s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value, out of gas-benchmark-gas-value_20M] | 5.43s | 5.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_3_exp_heavy-benchmark-gas-value_20M] | 5.34s | 5.34s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_256b_exp_1024-benchmark-gas-value_20M] | 5.23s | 5.23s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_256b_exp_1024-benchmark-gas-value_20M] | 5.23s | 5.23s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_1-transfer_amount_1-benchmark-gas-value_20M] | 5.13s | 5.13s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_100000-benchmark-gas-value_20M] | 5.06s | 5.06s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_False-benchmark-gas-value_20M] | 5.03s | 5.03s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_1_2_2_scalar-benchmark-gas-value_20M] | 5.02s | 5.02s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar-benchmark-gas-value_20M] | 5.02s | 5.02s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_512b_exp_1024-benchmark-gas-value_20M] | 4.93s | 4.93s |
| test_account_query.py::test_ext_account_query_cold[fork_Osaka-blockchain_test-absent_accounts_True-opcode_BALANCE-benchmark-gas-value_20M] | 4.93s | 4.93s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALLCODE-transfer_amount_1-benchmark-gas-value_20M] | 4.83s | 4.83s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of non-zero data-opcode_RETURN-benchmark-gas-value_20M] | 4.53s | 4.53s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_example_2-benchmark-gas-value_20M] | 4.53s | 4.53s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of zero data-opcode_RETURN-benchmark-gas-value_20M] | 4.52s | 4.52s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_infinities_2_scalar-benchmark-gas-value_20M] | 4.43s | 4.43s |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify_wrong_endianness-benchmark-gas-value_20M] | 4.43s | 4.43s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG4-benchmark-gas-value_20M] | 4.43s | 4.43s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_20M] | 4.43s | 4.43s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALLCODE-transfer_amount_1-benchmark-gas-value_20M] | 4.42s | 4.42s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG3-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG3-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG3-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG2-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_2_exp_heavy-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with zero data-opcode_CREATE2-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALL-transfer_amount_0-benchmark-gas-value_20M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG1-benchmark-gas-value_20M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG3-benchmark-gas-value_20M] | 4.29s | 4.29s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_max-transfer_amount_0-benchmark-gas-value_20M] | 4.24s | 4.24s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_infinities_32_byte_scalar-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG1-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG3-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value, out of gas-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG1-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_system.py::test_selfdestruct_created[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_256-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG4-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value-benchmark-gas-value_20M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG2-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALL-transfer_amount_1-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes without value-opcode_CREATE2-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_system.py::test_creates_collisions[fork_Osaka-blockchain_test-opcode_CREATE-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG4-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALLCODE-transfer_amount_0-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes without value-opcode_CREATE-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_system.py::test_selfdestruct_initcode[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_20M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG1-benchmark-gas-value_20M] | 4.17s | 4.17s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SSTORE_new-benchmark-gas-value_20M] | 4.14s | 4.14s |
| test_system.py::test_creates_collisions[fork_Osaka-blockchain_test-opcode_CREATE2-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG0-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG4-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG1-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG0-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG1-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG1-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG1-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG3-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG3-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of zero data-opcode_REVERT-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG2-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG2-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG1-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG0-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1000000-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_system.py::test_selfdestruct_created[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_20M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG0-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG1-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG0-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG4-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG4-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG2-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value, out of gas-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value, revert-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG1-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG2-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG3-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes with value-opcode_CREATE2-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_max-transfer_amount_1-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG0-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of non-zero data-opcode_REVERT-benchmark-gas-value_20M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG0-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG1-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG2-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_1024-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG2-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG1-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG4-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG1-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG4-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG0-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALL-transfer_amount_1-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_32-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG3-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG4-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG3-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG1-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG4-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG2-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value, revert-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with zero data-opcode_CREATE-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_1_pair_empty-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG2-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG3-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG0-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG2-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG4-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG4-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes with value-opcode_CREATE-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with zero data-opcode_CREATE2-benchmark-gas-value_20M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG4-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG0-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG4-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_1024b_exp_1024-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_1_exp_heavy-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SSTORE_same-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SSTORE new value-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_True-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG3-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_20M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_1024b_exp_1024-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG3-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG2-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_system.py::test_selfdestruct_initcode[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_256-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG2-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG0-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG1-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with zero data-opcode_CREATE-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_transaction_types.py::test_empty_block[fork_Osaka-blockchain_test-benchmark-gas-value_20M] | 3.93s | 3.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_2_sets-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_3_pair-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_32-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG0-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with zero data-opcode_CREATE-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with zero data-opcode_CREATE2-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with zero data-opcode_CREATE2-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_1_pair-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_0-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG0-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG2-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG3-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG3-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with zero data-opcode_CREATE-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_zero_input-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_20M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_20M] | 3.83s | 3.83s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_False-benchmark-gas-value_20M] | 3.83s | 3.83s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_20M] | 3.83s | 3.83s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_20M] | 3.83s | 3.83s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG2-benchmark-gas-value_20M] | 3.83s | 3.83s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG4-benchmark-gas-value_20M] | 3.83s | 3.83s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_20M] | 3.83s | 3.83s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_0-benchmark-gas-value_20M] | 3.83s | 3.83s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_20M] | 3.83s | 3.83s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_20M] | 3.83s | 3.83s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_20M] | 3.83s | 3.83s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SSTORE same value-benchmark-gas-value_20M] | 3.83s | 3.83s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_20M] | 3.83s | 3.83s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with non-zero data-opcode_CREATE-benchmark-gas-value_20M] | 3.83s | 3.83s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_1024-benchmark-gas-value_20M] | 3.82s | 3.82s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_20M] | 3.82s | 3.82s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG4-benchmark-gas-value_20M] | 3.82s | 3.82s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_20M] | 3.73s | 3.73s |

## Summary

**Total unique test cases:** 1097

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.15.0 | 1097 | 1069 | 28 | 0 |

---

