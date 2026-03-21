# 8x5090 - 30M-gas-limit

## Gas Limit Configuration - Proving

EEST benchmarks with 30M-gas-limit gas limit (proving results) on **8x5090** hardware.

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
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-max code size-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_CALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_CALLCODE-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_STATICCALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_CALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_CALLCODE-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_STATICCALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_CALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_CALLCODE-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_STATICCALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_CALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_CALLCODE-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_STATICCALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_CALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_CALLCODE-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_STATICCALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_CALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_CALLCODE-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_STATICCALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_CALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_CALLCODE-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_STATICCALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_CALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_CALLCODE-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_STATICCALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_selfbalance[fork_Osaka-blockchain_test-contract_balance_0-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_selfbalance[fork_Osaka-blockchain_test-contract_balance_1-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_DIV-0-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_DIV-1-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SDIV-0-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SDIV-1-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_127-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_191-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_255-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_63-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_127-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_191-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_255-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_63-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_127-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_191-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_255-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_63-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f[fork_Osaka-blockchain_test-blake2f-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_12-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_24-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_6-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_PREVRANDAO-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_fp_to_g1-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_fp_to_g2-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g1add-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g1msm-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g2add-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g2msm-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_pairing_check-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_1-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_128-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_16-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_64-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_1-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_128-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_16-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_64-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_1-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_12-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_24-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_3-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_6-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_ecrecover.py::test_ecrecover[fork_Osaka-blockchain_test-ecrecover-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_identity.py::test_identity[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-5b-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_example_2-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify_modular_comp_x_coordinate_exceeds_n-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_point_evaluation.py::test_point_evaluation[fork_Osaka-blockchain_test-point_evaluation-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH27-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH28-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH29-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH30-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH31-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH32-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of non-zero data-opcode_RETURN-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of non-zero data-opcode_REVERT-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of zero data-opcode_RETURN-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of zero data-opcode_REVERT-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-empty-opcode_RETURN-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-empty-opcode_REVERT-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_CALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_CALLCODE-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_DELEGATECALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODECOPY-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODESIZE-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_STATICCALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_False-empty_authority_False-benchmark-gas-value_30M] | 5m 12.68s | 5m 12.68s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG2-benchmark-gas-value_30M] | 5m 7.47s | 5m 7.47s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_208_gas_balanced-benchmark-gas-value_30M] | 4m 3.63s | 4m 3.63s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_40-benchmark-gas-value_30M] | 4m 1.87s | 4m 1.87s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_10240-benchmark-gas-value_30M] | 3m 36.89s | 3m 36.89s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_1024-benchmark-gas-value_30M] | 3m 36.40s | 3m 36.40s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_256-benchmark-gas-value_30M] | 3m 35.85s | 3m 35.85s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_30M] | 3m 33.97s | 3m 33.97s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_256-benchmark-gas-value_30M] | 3m 26.64s | 3m 26.64s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_1024-benchmark-gas-value_30M] | 3m 26.59s | 3m 26.59s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 3m 23.84s | 3m 23.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 3m 22.44s | 3m 22.44s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_2_even-benchmark-gas-value_30M] | 3m 18.99s | 3m 18.99s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_30M] | 3m 16.97s | 3m 16.97s |
| test_bitwise.py::test_shifts[fork_Osaka-blockchain_test-opcode_SAR-benchmark-gas-value_30M] | 3m 15.45s | 3m 15.45s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_32-benchmark-gas-value_30M] | 3m 10.97s | 3m 10.97s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 3m 8.95s | 3m 8.95s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 3m 8.77s | 3m 8.77s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_800_gas_base_heavy-benchmark-gas-value_30M] | 3m 3.65s | 3m 3.65s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_0-benchmark-gas-value_30M] | 2m 59.44s | 2m 59.44s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1-benchmark-gas-value_30M] | 2m 58.47s | 2m 58.47s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 2m 55.86s | 2m 55.86s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_256-benchmark-gas-value_30M] | 2m 55.53s | 2m 55.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_32-benchmark-gas-value_30M] | 2m 55.02s | 2m 55.02s |
| test_control_flow.py::test_jump_benchmark[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 2m 54.66s | 2m 54.66s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000a-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 2m 54.51s | 2m 54.51s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_30M] | 2m 54.43s | 2m 54.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_pow_0x10001-benchmark-gas-value_30M] | 2m 54.05s | 2m 54.05s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_0-benchmark-gas-value_30M] | 2m 53.59s | 2m 53.59s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP9-benchmark-gas-value_30M] | 2m 52.98s | 2m 52.98s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP8-benchmark-gas-value_30M] | 2m 52.93s | 2m 52.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 2m 52.44s | 2m 52.44s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_0-benchmark-gas-value_30M] | 2m 52.28s | 2m 52.28s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_BALANCE-benchmark-gas-value_30M] | 2m 52.02s | 2m 52.02s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 2m 50.14s | 2m 50.14s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 2m 49.64s | 2m 49.64s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_32-benchmark-gas-value_30M] | 2m 48.41s | 2m 48.41s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value, out of gas-benchmark-gas-value_30M] | 2m 48.22s | 2m 48.22s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_1024-benchmark-gas-value_30M] | 2m 48.12s | 2m 48.12s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_11-benchmark-gas-value_30M] | 2m 46.72s | 2m 46.72s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_0-benchmark-gas-value_30M] | 2m 46.51s | 2m 46.51s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_30M] | 2m 46.50s | 2m 46.50s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value-benchmark-gas-value_30M] | 2m 46.12s | 2m 46.12s |
| test_ripemd160.py::test_ripemd160[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 2m 44.84s | 2m 44.84s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_pow_0x10001-benchmark-gas-value_30M] | 2m 44.11s | 2m 44.11s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_False-empty_authority_True-benchmark-gas-value_30M] | 2m 43.82s | 2m 43.82s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_False-empty_authority_True-benchmark-gas-value_30M] | 2m 43.54s | 2m 43.54s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_30M] | 2m 43.22s | 2m 43.22s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_0-transfer_amount_0-benchmark-gas-value_30M] | 2m 40.22s | 2m 40.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG0-benchmark-gas-value_30M] | 2m 38.21s | 2m 38.21s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value-benchmark-gas-value_30M] | 2m 37.92s | 2m 37.92s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of non-zero data-opcode_RETURN-benchmark-gas-value_30M] | 2m 37.52s | 2m 37.52s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG1-benchmark-gas-value_30M] | 2m 37.10s | 2m 37.10s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG3-benchmark-gas-value_30M] | 2m 37.03s | 2m 37.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_30M] | 2m 36.92s | 2m 36.92s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of zero data-opcode_RETURN-benchmark-gas-value_30M] | 2m 36.34s | 2m 36.34s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG2-benchmark-gas-value_30M] | 2m 36.22s | 2m 36.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_30M] | 2m 36.13s | 2m 36.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_30M] | 2m 36.12s | 2m 36.12s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_32-benchmark-gas-value_30M] | 2m 36.03s | 2m 36.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_30M] | 2m 36.01s | 2m 36.01s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG4-benchmark-gas-value_30M] | 2m 35.82s | 2m 35.82s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG4-benchmark-gas-value_30M] | 2m 35.43s | 2m 35.43s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_max-transfer_amount_0-benchmark-gas-value_30M] | 2m 35.31s | 2m 35.31s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG4-benchmark-gas-value_30M] | 2m 35.01s | 2m 35.01s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_30M] | 2m 35.00s | 2m 35.00s |
| test_keccak.py::test_keccak_max_permutations[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 1m 36.33s | 1m 36.33s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_1024-benchmark-gas-value_30M] | 1m 31.81s | 1m 31.81s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_128-benchmark-gas-value_30M] | 1m 31.81s | 1m 31.81s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_256-benchmark-gas-value_30M] | 1m 30.51s | 1m 30.51s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_0-benchmark-gas-value_30M] | 1m 30.42s | 1m 30.42s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_2-benchmark-gas-value_30M] | 1m 29.82s | 1m 29.82s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_32-benchmark-gas-value_30M] | 1m 29.51s | 1m 29.51s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_16b_exp_320-benchmark-gas-value_30M] | 1m 29.51s | 1m 29.51s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_765_gas_exp_heavy-benchmark-gas-value_30M] | 1m 29.11s | 1m 29.11s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_4-benchmark-gas-value_30M] | 1m 28.61s | 1m 28.61s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_32-benchmark-gas-value_30M] | 1m 27.90s | 1m 27.90s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_1-benchmark-gas-value_30M] | 1m 27.70s | 1m 27.70s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1360_gas_balanced-benchmark-gas-value_30M] | 1m 27.12s | 1m 27.12s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_400_gas_exp_heavy-benchmark-gas-value_30M] | 1m 27.00s | 1m 27.00s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_65-benchmark-gas-value_30M] | 1m 26.61s | 1m 26.61s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_677_gas_base_heavy-benchmark-gas-value_30M] | 1m 26.61s | 1m 26.61s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_36-benchmark-gas-value_30M] | 1m 25.44s | 1m 25.44s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_64-benchmark-gas-value_30M] | 1m 25.41s | 1m 25.41s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_24b_exp_168-benchmark-gas-value_30M] | 1m 24.31s | 1m 24.31s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_3-benchmark-gas-value_30M] | 1m 23.21s | 1m 23.21s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH26-benchmark-gas-value_30M] | 1m 20.70s | 1m 20.70s |
| test_tx_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_ORIGIN-benchmark-gas-value_30M] | 1m 20.10s | 1m 20.10s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH24-benchmark-gas-value_30M] | 1m 19.30s | 1m 19.30s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH23-benchmark-gas-value_30M] | 1m 19.00s | 1m 19.00s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_32-benchmark-gas-value_30M] | 1m 18.62s | 1m 18.62s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_256-benchmark-gas-value_30M] | 1m 17.80s | 1m 17.80s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH25-benchmark-gas-value_30M] | 1m 17.69s | 1m 17.69s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_256-benchmark-gas-value_30M] | 1m 17.00s | 1m 17.00s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_96-benchmark-gas-value_30M] | 1m 16.70s | 1m 16.70s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_40-benchmark-gas-value_30M] | 1m 16.10s | 1m 16.10s |
| test_call_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_ADDRESS-benchmark-gas-value_30M] | 1m 16.00s | 1m 16.00s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_3_exp_8-benchmark-gas-value_30M] | 1m 15.30s | 1m 15.30s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add_1_2-benchmark-gas-value_30M] | 1m 14.00s | 1m 14.00s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_96-benchmark-gas-value_30M] | 1m 13.79s | 1m 13.79s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_1024-benchmark-gas-value_30M] | 1m 13.70s | 1m 13.70s |
| test_call_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_CALLER-benchmark-gas-value_30M] | 1m 13.60s | 1m 13.60s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_0-benchmark-gas-value_30M] | 1m 13.01s | 1m 13.01s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_256-benchmark-gas-value_30M] | 1m 10.92s | 1m 10.92s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH22-benchmark-gas-value_30M] | 1m 10.20s | 1m 10.20s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_COINBASE-benchmark-gas-value_30M] | 1m 9.79s | 1m 9.79s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_600_gas_exp_heavy-benchmark-gas-value_30M] | 1m 9.18s | 1m 9.18s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_example_1-benchmark-gas-value_30M] | 1m 8.79s | 1m 8.79s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_EQ--benchmark-gas-value_30M] | 1m 8.48s | 1m 8.48s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH21-benchmark-gas-value_30M] | 1m 8.18s | 1m 8.18s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_exp_heavy-benchmark-gas-value_30M] | 1m 7.80s | 1m 7.80s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH19-benchmark-gas-value_30M] | 1m 7.49s | 1m 7.49s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_800_gas_exp_heavy-benchmark-gas-value_30M] | 1m 4.60s | 1m 4.60s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b''-benchmark-gas-value_30M] | 1m 4.40s | 1m 4.40s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0 bytes-benchmark-gas-value_30M] | 1m 4.09s | 1m 4.09s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_0-benchmark-gas-value_30M] | 1m 3.89s | 1m 3.89s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_30M] | 1m 3.79s | 1m 3.79s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_30M] | 1m 3.78s | 1m 3.78s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_1024-benchmark-gas-value_30M] | 1m 3.20s | 1m 3.20s |
| test_tx_context.py::test_blobhash[fork_Osaka-blockchain_test-one_blob-benchmark-gas-value_30M] | 1m 3.17s | 1m 3.17s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_zkevm_worst_case-benchmark-gas-value_30M] | 1m 2.78s | 1m 2.78s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_852_gas_exp_heavy-benchmark-gas-value_30M] | 1m 2.78s | 1m 2.78s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b''-benchmark-gas-value_30M] | 1m 2.70s | 1m 2.70s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_8_exp_648-benchmark-gas-value_30M] | 1m 2.59s | 1m 2.59s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_215_gas_exp_heavy-benchmark-gas-value_30M] | 1m 2.59s | 1m 2.59s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b''-benchmark-gas-value_30M] | 1m 2.49s | 1m 2.49s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n2-benchmark-gas-value_30M] | 1m 2.38s | 1m 2.38s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_1024-benchmark-gas-value_30M] | 1m 2.10s | 1m 2.10s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_10240-benchmark-gas-value_30M] | 1m 1.99s | 1m 1.99s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_32-benchmark-gas-value_30M] | 1m 1.79s | 1m 1.79s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_30M] | 1m 1.09s | 1m 1.09s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH20-benchmark-gas-value_30M] | 1m 0.98s | 1m 0.98s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b''-benchmark-gas-value_30M] | 1m 0.79s | 1m 0.79s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_32-benchmark-gas-value_30M] | 59.99s | 59.99s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_256-benchmark-gas-value_30M] | 59.99s | 59.99s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_0-benchmark-gas-value_30M] | 59.98s | 59.98s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_0-benchmark-gas-value_30M] | 59.88s | 59.88s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_32-benchmark-gas-value_30M] | 59.78s | 59.78s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b''-benchmark-gas-value_30M] | 59.69s | 59.69s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_256-benchmark-gas-value_30M] | 59.48s | 59.48s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_256-benchmark-gas-value_30M] | 59.18s | 59.18s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b''-benchmark-gas-value_30M] | 58.58s | 58.58s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_30M] | 58.48s | 58.48s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1349n1-benchmark-gas-value_30M] | 58.28s | 58.28s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_298_gas_exp_heavy-benchmark-gas-value_30M] | 58.28s | 58.28s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_0-benchmark-gas-value_30M] | 58.18s | 58.18s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n3-benchmark-gas-value_30M] | 57.87s | 57.87s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_8_exp_896-benchmark-gas-value_30M] | 57.78s | 57.78s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_30M] | 57.38s | 57.38s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_8b_exp_896-benchmark-gas-value_30M] | 57.09s | 57.09s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH18-benchmark-gas-value_30M] | 56.97s | 56.97s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_1024-benchmark-gas-value_30M] | 56.89s | 56.89s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b'ff'-benchmark-gas-value_30M] | 56.89s | 56.89s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_32-benchmark-gas-value_30M] | 56.08s | 56.08s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_balanced-benchmark-gas-value_30M] | 55.88s | 55.88s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b'ff'-benchmark-gas-value_30M] | 55.68s | 55.68s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH17-benchmark-gas-value_30M] | 55.18s | 55.18s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_1-benchmark-gas-value_30M] | 54.88s | 54.88s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b'ff'-benchmark-gas-value_30M] | 54.78s | 54.78s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b'ff'-benchmark-gas-value_30M] | 54.59s | 54.59s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1360n2-benchmark-gas-value_30M] | 54.48s | 54.48s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH16-benchmark-gas-value_30M] | 54.37s | 54.37s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 54.36s | 54.36s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 53.67s | 53.67s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b'ff'-benchmark-gas-value_30M] | 53.08s | 53.08s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1360n1-benchmark-gas-value_30M] | 53.08s | 53.08s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH15-benchmark-gas-value_30M] | 52.97s | 52.97s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b'ff'-benchmark-gas-value_30M] | 52.88s | 52.88s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 52.87s | 52.87s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_1024-benchmark-gas-value_30M] | 52.58s | 52.58s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_1048576-benchmark-gas-value_30M] | 52.57s | 52.57s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 52.48s | 52.48s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_256-benchmark-gas-value_30M] | 52.28s | 52.28s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 52.27s | 52.27s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 52.27s | 52.27s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_0-benchmark-gas-value_30M] | 52.27s | 52.27s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH13-benchmark-gas-value_30M] | 52.27s | 52.27s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_30M] | 51.57s | 51.57s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 51.56s | 51.56s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 51.28s | 51.28s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_one_pairing-benchmark-gas-value_30M] | 51.27s | 51.27s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 50.87s | 50.87s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 50.87s | 50.87s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 50.77s | 50.77s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_1048576-benchmark-gas-value_30M] | 50.27s | 50.27s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 49.98s | 49.98s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 49.86s | 49.86s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_0-benchmark-gas-value_30M] | 49.68s | 49.68s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 49.57s | 49.57s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 49.27s | 49.27s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 49.06s | 49.06s |
| test_sha256.py::test_sha256[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 48.98s | 48.98s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH14-benchmark-gas-value_30M] | 48.96s | 48.96s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 48.77s | 48.77s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_30M] | 48.67s | 48.67s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 48.43s | 48.43s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 48.37s | 48.37s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 47.96s | 47.96s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 47.78s | 47.78s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 47.77s | 47.77s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_cover_windows-benchmark-gas-value_30M] | 47.67s | 47.67s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_32-benchmark-gas-value_30M] | 47.37s | 47.37s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH12-benchmark-gas-value_30M] | 47.37s | 47.37s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SSTORE new value-benchmark-gas-value_30M] | 47.37s | 47.37s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_30M] | 47.27s | 47.27s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 47.17s | 47.17s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH11-benchmark-gas-value_30M] | 47.07s | 47.07s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 46.37s | 46.37s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_qube-benchmark-gas-value_30M] | 46.37s | 46.37s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 46.36s | 46.36s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_1_even-benchmark-gas-value_30M] | 46.27s | 46.27s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 46.27s | 46.27s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_32-benchmark-gas-value_30M] | 46.07s | 46.07s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 46.07s | 46.07s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_30M] | 45.87s | 45.87s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_255-benchmark-gas-value_30M] | 44.88s | 44.88s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 44.36s | 44.36s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 44.08s | 44.08s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 43.56s | 43.56s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_600_gas_balanced-benchmark-gas-value_30M] | 43.47s | 43.47s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_63-benchmark-gas-value_30M] | 43.37s | 43.37s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 43.16s | 43.16s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_marius_1_even-benchmark-gas-value_30M] | 42.77s | 42.77s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 42.66s | 42.66s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_127-benchmark-gas-value_30M] | 42.57s | 42.57s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 42.57s | 42.57s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SAR--benchmark-gas-value_30M] | 42.55s | 42.55s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_30M] | 42.06s | 42.06s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 41.87s | 41.87s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_408_gas_balanced-benchmark-gas-value_30M] | 41.77s | 41.77s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 41.76s | 41.76s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n1-benchmark-gas-value_30M] | 41.17s | 41.17s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 41.07s | 41.07s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 41.05s | 41.05s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 40.86s | 40.86s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_two_pairings-benchmark-gas-value_30M] | 40.77s | 40.77s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_2_pair-benchmark-gas-value_30M] | 40.76s | 40.76s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_191-benchmark-gas-value_30M] | 40.56s | 40.56s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 40.26s | 40.26s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 39.36s | 39.36s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_32-benchmark-gas-value_30M] | 39.27s | 39.27s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_base_heavy-benchmark-gas-value_30M] | 39.26s | 39.26s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH10-benchmark-gas-value_30M] | 39.25s | 39.25s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_10240-benchmark-gas-value_30M] | 39.16s | 39.16s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 39.16s | 39.16s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_1024-benchmark-gas-value_30M] | 39.07s | 39.07s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 39.06s | 39.06s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 38.86s | 38.86s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 38.77s | 38.77s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 38.76s | 38.76s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 38.66s | 38.66s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_3-benchmark-gas-value_30M] | 38.56s | 38.56s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_256-benchmark-gas-value_30M] | 38.36s | 38.36s |
| test_control_flow.py::test_jumpdests[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 38.35s | 38.35s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 38.26s | 38.26s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 38.17s | 38.17s |
| test_bitwise.py::test_clz_diff[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 38.06s | 38.06s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 38.05s | 38.05s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 37.96s | 37.96s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH7-benchmark-gas-value_30M] | 37.95s | 37.95s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 37.86s | 37.86s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH9-benchmark-gas-value_30M] | 37.85s | 37.85s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH8-benchmark-gas-value_30M] | 37.76s | 37.76s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 37.36s | 37.36s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_30M] | 37.36s | 37.36s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 37.16s | 37.16s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_0-benchmark-gas-value_30M] | 37.06s | 37.06s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_square-benchmark-gas-value_30M] | 36.95s | 36.95s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 36.76s | 36.76s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_30M] | 36.65s | 36.65s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 36.35s | 36.35s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_30M] | 35.86s | 35.86s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_4_pair-benchmark-gas-value_30M] | 35.76s | 35.76s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 35.75s | 35.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1152n1-benchmark-gas-value_30M] | 35.56s | 35.56s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_256-benchmark-gas-value_30M] | 35.26s | 35.26s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_30M] | 35.16s | 35.16s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_32-benchmark-gas-value_30M] | 35.15s | 35.15s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SIGNEXTEND--benchmark-gas-value_30M] | 35.15s | 35.15s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_30M] | 35.15s | 35.15s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH6-benchmark-gas-value_30M] | 35.06s | 35.06s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_264_exp_2-benchmark-gas-value_30M] | 35.05s | 35.05s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_30M] | 34.75s | 34.75s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_30M] | 34.66s | 34.66s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_30M] | 34.66s | 34.66s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_0-benchmark-gas-value_30M] | 34.56s | 34.56s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_30M] | 34.55s | 34.55s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_256_exp_2-benchmark-gas-value_30M] | 34.06s | 34.06s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_0-benchmark-gas-value_30M] | 34.06s | 34.06s |
| test_bitwise.py::test_shifts[fork_Osaka-blockchain_test-opcode_SHR-benchmark-gas-value_30M] | 33.66s | 33.66s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_30M] | 33.46s | 33.46s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_616_gas_base_heavy-benchmark-gas-value_30M] | 32.96s | 32.96s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_1048576-benchmark-gas-value_30M] | 32.86s | 32.86s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_30M] | 32.85s | 32.85s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_5_pair-benchmark-gas-value_30M] | 32.76s | 32.76s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_256-benchmark-gas-value_30M] | 32.65s | 32.65s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_256-benchmark-gas-value_30M] | 32.46s | 32.46s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_6-benchmark-gas-value_30M] | 32.35s | 32.35s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_32-benchmark-gas-value_30M] | 32.35s | 32.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_qube-benchmark-gas-value_30M] | 32.16s | 32.16s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_408_gas_base_heavy-benchmark-gas-value_30M] | 32.15s | 32.15s |
| test_transaction_types.py::test_block_full_data[fork_Osaka-blockchain_test-zero_byte_True-benchmark-gas-value_30M] | 32.15s | 32.15s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH4-benchmark-gas-value_30M] | 31.75s | 31.75s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_30M] | 31.65s | 31.65s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_996_gas_balanced-benchmark-gas-value_30M] | 31.55s | 31.55s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_767_gas_balanced-benchmark-gas-value_30M] | 31.45s | 31.45s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH5-benchmark-gas-value_30M] | 31.06s | 31.06s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_30M] | 30.85s | 30.85s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SHL--benchmark-gas-value_30M] | 30.75s | 30.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1045_gas_base_heavy-benchmark-gas-value_30M] | 30.25s | 30.25s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_256-benchmark-gas-value_30M] | 30.15s | 30.15s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_30M] | 30.05s | 30.05s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_867_gas_base_heavy-benchmark-gas-value_30M] | 29.95s | 29.95s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_32-benchmark-gas-value_30M] | 29.46s | 29.46s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_1024-benchmark-gas-value_30M] | 29.45s | 29.45s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_0-benchmark-gas-value_30M] | 29.35s | 29.35s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add_infinities-benchmark-gas-value_30M] | 29.34s | 29.34s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_1024-benchmark-gas-value_30M] | 29.06s | 29.06s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SHR--benchmark-gas-value_30M] | 28.94s | 28.94s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SSTORE same value-benchmark-gas-value_30M] | 28.85s | 28.85s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_12-benchmark-gas-value_30M] | 28.05s | 28.05s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_TIMESTAMP-benchmark-gas-value_30M] | 27.75s | 27.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_qube-benchmark-gas-value_30M] | 27.65s | 27.65s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_0-benchmark-gas-value_30M] | 27.55s | 27.55s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_BASEFEE-benchmark-gas-value_30M] | 27.54s | 27.54s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH3-benchmark-gas-value_30M] | 27.25s | 27.25s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_CHAINID-benchmark-gas-value_30M] | 27.24s | 27.24s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_NUMBER-benchmark-gas-value_30M] | 26.95s | 26.95s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_32-benchmark-gas-value_30M] | 26.54s | 26.54s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_0-benchmark-gas-value_30M] | 26.15s | 26.15s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 26.05s | 26.05s |
| test_tx_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_GASPRICE-benchmark-gas-value_30M] | 25.94s | 25.94s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 25.85s | 25.85s |
| test_control_flow.py::test_pc_op[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 25.84s | 25.84s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 25.80s | 25.80s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1024_exp_2-benchmark-gas-value_30M] | 25.75s | 25.75s |
| test_call_context.py::test_callvalue_from_call[fork_Osaka-blockchain_test-non_zero_value_False-benchmark-gas-value_30M] | 25.64s | 25.64s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 25.45s | 25.45s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_256-benchmark-gas-value_30M] | 25.45s | 25.45s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_24-benchmark-gas-value_30M] | 25.45s | 25.45s |
| test_control_flow.py::test_gas_op[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 25.45s | 25.45s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_GASLIMIT-benchmark-gas-value_30M] | 25.45s | 25.45s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 25.35s | 25.35s |
| test_account_query.py::test_codesize[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 25.34s | 25.34s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1000-benchmark-gas-value_30M] | 25.25s | 25.25s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH0-benchmark-gas-value_30M] | 25.24s | 25.24s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 25.15s | 25.15s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 25.15s | 25.15s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_1024-benchmark-gas-value_30M] | 25.14s | 25.14s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_BLOBBASEFEE-benchmark-gas-value_30M] | 25.04s | 25.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_30M] | 24.95s | 24.95s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_1024-benchmark-gas-value_30M] | 24.94s | 24.94s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 24.85s | 24.85s |
| test_call_context.py::test_returndatasize_zero[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 24.84s | 24.84s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 24.75s | 24.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_qube-benchmark-gas-value_30M] | 24.75s | 24.75s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_0-benchmark-gas-value_30M] | 24.64s | 24.64s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_0-benchmark-gas-value_30M] | 24.64s | 24.64s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_32-benchmark-gas-value_30M] | 24.54s | 24.54s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_10240-benchmark-gas-value_30M] | 24.54s | 24.54s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_square-benchmark-gas-value_30M] | 24.54s | 24.54s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_1024-benchmark-gas-value_30M] | 23.94s | 23.94s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_256-benchmark-gas-value_30M] | 23.85s | 23.85s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_256-benchmark-gas-value_30M] | 23.75s | 23.75s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_32-benchmark-gas-value_30M] | 23.75s | 23.75s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_256-benchmark-gas-value_30M] | 23.64s | 23.64s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_256-benchmark-gas-value_30M] | 23.54s | 23.54s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_qube-benchmark-gas-value_30M] | 23.54s | 23.54s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_0-benchmark-gas-value_30M] | 23.44s | 23.44s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_1024-benchmark-gas-value_30M] | 23.34s | 23.34s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_0-benchmark-gas-value_30M] | 23.34s | 23.34s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_1024-benchmark-gas-value_30M] | 23.34s | 23.34s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_256-benchmark-gas-value_30M] | 23.16s | 23.16s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_0-benchmark-gas-value_30M] | 23.05s | 23.05s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH2-benchmark-gas-value_30M] | 23.04s | 23.04s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_0-benchmark-gas-value_30M] | 23.04s | 23.04s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_32-benchmark-gas-value_30M] | 22.94s | 22.94s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_32-benchmark-gas-value_30M] | 22.84s | 22.84s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_10240-benchmark-gas-value_30M] | 22.84s | 22.84s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_30M] | 22.75s | 22.75s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_256-benchmark-gas-value_30M] | 22.74s | 22.74s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_256-benchmark-gas-value_30M] | 22.64s | 22.64s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_30M] | 22.64s | 22.64s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH1-benchmark-gas-value_30M] | 22.64s | 22.64s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-605b5b-benchmark-gas-value_30M] | 22.64s | 22.64s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_32-benchmark-gas-value_30M] | 22.55s | 22.55s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_32-benchmark-gas-value_30M] | 22.54s | 22.54s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_32-benchmark-gas-value_30M] | 22.54s | 22.54s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_1024-benchmark-gas-value_30M] | 22.44s | 22.44s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_0-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_30M] | 22.34s | 22.34s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_256-benchmark-gas-value_30M] | 22.34s | 22.34s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_30M] | 22.14s | 22.14s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_32-benchmark-gas-value_30M] | 22.14s | 22.14s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_32-benchmark-gas-value_30M] | 22.04s | 22.04s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_0-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_30M] | 22.04s | 22.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 22.04s | 22.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 22.04s | 22.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_30M] | 21.94s | 21.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 21.84s | 21.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 21.84s | 21.84s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 21.74s | 21.74s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_square-benchmark-gas-value_30M] | 21.74s | 21.74s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_256-benchmark-gas-value_30M] | 21.74s | 21.74s |
| test_call_context.py::test_callvalue_from_origin[fork_Osaka-blockchain_test-non_zero_value_False-benchmark-gas-value_30M] | 21.74s | 21.74s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_0-benchmark-gas-value_30M] | 21.55s | 21.55s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_30M] | 21.54s | 21.54s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 21.54s | 21.54s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 21.54s | 21.54s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 21.45s | 21.45s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_10240-benchmark-gas-value_30M] | 21.44s | 21.44s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_32-benchmark-gas-value_30M] | 21.44s | 21.44s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 21.44s | 21.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 21.35s | 21.35s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP12-benchmark-gas-value_30M] | 21.34s | 21.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 21.34s | 21.34s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 21.24s | 21.24s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_1048576-benchmark-gas-value_30M] | 21.24s | 21.24s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 21.15s | 21.15s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP15-benchmark-gas-value_30M] | 21.15s | 21.15s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 21.15s | 21.15s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_0-benchmark-gas-value_30M] | 21.14s | 21.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 21.05s | 21.05s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 21.04s | 21.04s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_0-benchmark-gas-value_30M] | 21.04s | 21.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 21.04s | 21.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 21.04s | 21.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 21.04s | 21.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 20.94s | 20.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_1024-benchmark-gas-value_30M] | 20.94s | 20.94s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_30M] | 20.94s | 20.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 20.94s | 20.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 20.84s | 20.84s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_30M] | 20.84s | 20.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 20.84s | 20.84s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_30M] | 20.84s | 20.84s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 20.84s | 20.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 20.84s | 20.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 20.75s | 20.75s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_1024-benchmark-gas-value_30M] | 20.74s | 20.74s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 20.74s | 20.74s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_1024-benchmark-gas-value_30M] | 20.74s | 20.74s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_30M] | 20.74s | 20.74s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 20.74s | 20.74s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP4-benchmark-gas-value_30M] | 20.74s | 20.74s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 20.74s | 20.74s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_32-benchmark-gas-value_30M] | 20.64s | 20.64s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_32-benchmark-gas-value_30M] | 20.64s | 20.64s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000100-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 20.64s | 20.64s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 20.64s | 20.64s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 20.64s | 20.64s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 20.64s | 20.64s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_32-benchmark-gas-value_30M] | 20.64s | 20.64s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_1024-benchmark-gas-value_30M] | 20.64s | 20.64s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_0-benchmark-gas-value_30M] | 20.64s | 20.64s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 20.64s | 20.64s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSLOAD-benchmark-gas-value_30M] | 20.55s | 20.55s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_256-benchmark-gas-value_30M] | 20.55s | 20.55s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_512-benchmark-gas-value_30M] | 20.54s | 20.54s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_256-benchmark-gas-value_30M] | 20.54s | 20.54s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.75x max code size-benchmark-gas-value_30M] | 20.44s | 20.44s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_30M] | 20.44s | 20.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 20.44s | 20.44s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP7-benchmark-gas-value_30M] | 20.44s | 20.44s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP8-benchmark-gas-value_30M] | 20.44s | 20.44s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.25x max code size-benchmark-gas-value_30M] | 20.39s | 20.39s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.50x max code size-benchmark-gas-value_30M] | 20.34s | 20.34s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MUL--benchmark-gas-value_30M] | 20.34s | 20.34s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 20.34s | 20.34s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 20.34s | 20.34s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_256-benchmark-gas-value_30M] | 20.34s | 20.34s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP5-benchmark-gas-value_30M] | 20.34s | 20.34s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0 bytes-benchmark-gas-value_30M] | 20.34s | 20.34s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 20.25s | 20.25s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_1024-benchmark-gas-value_30M] | 20.25s | 20.25s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000008-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 20.24s | 20.24s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_30M] | 20.24s | 20.24s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 20.24s | 20.24s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 20.24s | 20.24s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_256-benchmark-gas-value_30M] | 20.24s | 20.24s |
| test_tx_context.py::test_blobhash[fork_Osaka-blockchain_test-no_blobs-benchmark-gas-value_30M] | 20.24s | 20.24s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000008-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 20.15s | 20.15s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 20.14s | 20.14s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 20.14s | 20.14s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000c-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 20.14s | 20.14s |
| test_call_context.py::test_callvalue_from_origin[fork_Osaka-blockchain_test-non_zero_value_True-benchmark-gas-value_30M] | 20.14s | 20.14s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_1048576-benchmark-gas-value_30M] | 20.14s | 20.14s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP1-benchmark-gas-value_30M] | 20.14s | 20.14s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_0-benchmark-gas-value_30M] | 20.05s | 20.05s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 20.05s | 20.05s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000e-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 20.04s | 20.04s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_BALANCE-benchmark-gas-value_30M] | 20.04s | 20.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 20.04s | 20.04s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000006-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 20.04s | 20.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_30M] | 20.04s | 20.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 19.94s | 19.94s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000010-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.94s | 19.94s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000011-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.94s | 19.94s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000e-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 19.94s | 19.94s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_30M] | 19.94s | 19.94s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_256-benchmark-gas-value_30M] | 19.85s | 19.85s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.50x max code size-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000002-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000003-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.25x max code size-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SUB--benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_BYTE--benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_BALANCE-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP9-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000b-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000010-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000007-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 19.75s | 19.75s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000f-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.75s | 19.75s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_BALANCE-benchmark-gas-value_30M] | 19.74s | 19.74s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_30M] | 19.74s | 19.74s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 19.74s | 19.74s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000005-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 19.74s | 19.74s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-max code size-benchmark-gas-value_30M] | 19.74s | 19.74s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_30M] | 19.74s | 19.74s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000d-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.74s | 19.74s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_30M] | 19.74s | 19.74s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000004-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 19.65s | 19.65s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 19.64s | 19.64s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000007-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 19.64s | 19.64s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000003-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.64s | 19.64s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_0-benchmark-gas-value_30M] | 19.64s | 19.64s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000009-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.64s | 19.64s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_30M] | 19.55s | 19.55s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 19.55s | 19.55s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.75x max code size-benchmark-gas-value_30M] | 19.54s | 19.54s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000f-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 19.54s | 19.54s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP4-benchmark-gas-value_30M] | 19.54s | 19.54s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000004-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.54s | 19.54s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP10-benchmark-gas-value_30M] | 19.54s | 19.54s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000100-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.54s | 19.54s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP11-benchmark-gas-value_30M] | 19.54s | 19.54s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000c-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.54s | 19.54s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_LT--benchmark-gas-value_30M] | 19.54s | 19.54s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP14-benchmark-gas-value_30M] | 19.54s | 19.54s |
| test_comparison.py::test_iszero[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 19.54s | 19.54s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000001-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 19.45s | 19.45s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 19.44s | 19.44s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000b-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 19.44s | 19.44s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_32-benchmark-gas-value_30M] | 19.44s | 19.44s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP14-benchmark-gas-value_30M] | 19.44s | 19.44s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 19.43s | 19.43s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000001-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.34s | 19.34s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP13-benchmark-gas-value_30M] | 19.34s | 19.34s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_BALANCE-benchmark-gas-value_30M] | 19.34s | 19.34s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP12-benchmark-gas-value_30M] | 19.34s | 19.34s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP6-benchmark-gas-value_30M] | 19.34s | 19.34s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP13-benchmark-gas-value_30M] | 19.34s | 19.34s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000009-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 19.24s | 19.24s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_0-benchmark-gas-value_30M] | 19.24s | 19.24s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000005-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.24s | 19.24s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000a-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 19.24s | 19.24s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 19.24s | 19.24s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000006-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.24s | 19.24s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_BALANCE-benchmark-gas-value_30M] | 19.15s | 19.15s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_30M] | 19.14s | 19.14s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000011-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 19.14s | 19.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_BALANCE-benchmark-gas-value_30M] | 19.14s | 19.14s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP3-benchmark-gas-value_30M] | 19.14s | 19.14s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_30M] | 19.14s | 19.14s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP3-benchmark-gas-value_30M] | 19.13s | 19.13s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_30M] | 19.04s | 19.04s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-00-benchmark-gas-value_30M] | 19.04s | 19.04s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000002-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 19.04s | 19.04s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_30M] | 19.04s | 19.04s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP15-benchmark-gas-value_30M] | 19.04s | 19.04s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP2-benchmark-gas-value_30M] | 19.04s | 19.04s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 19.04s | 19.04s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_BALANCE-benchmark-gas-value_30M] | 18.94s | 18.94s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000d-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 18.94s | 18.94s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 18.94s | 18.94s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP16-benchmark-gas-value_30M] | 18.94s | 18.94s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_SGT--benchmark-gas-value_30M] | 18.84s | 18.84s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MOD--benchmark-gas-value_30M] | 18.84s | 18.84s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP6-benchmark-gas-value_30M] | 18.83s | 18.83s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_SLT--benchmark-gas-value_30M] | 18.74s | 18.74s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 18.74s | 18.74s |
| test_bitwise.py::test_clz_same[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 18.74s | 18.74s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_1024-benchmark-gas-value_30M] | 18.74s | 18.74s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP2-benchmark-gas-value_30M] | 18.73s | 18.73s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_30M] | 18.64s | 18.64s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP16-benchmark-gas-value_30M] | 18.64s | 18.64s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_GT--benchmark-gas-value_30M] | 18.64s | 18.64s |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP10-benchmark-gas-value_30M] | 18.64s | 18.64s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_1048576-benchmark-gas-value_30M] | 18.64s | 18.64s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_256-benchmark-gas-value_30M] | 18.54s | 18.54s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 18.54s | 18.54s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 18.54s | 18.54s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 18.54s | 18.54s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP7-benchmark-gas-value_30M] | 18.54s | 18.54s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP11-benchmark-gas-value_30M] | 18.44s | 18.44s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 18.34s | 18.34s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 18.34s | 18.34s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_ADD--benchmark-gas-value_30M] | 18.34s | 18.34s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP5-benchmark-gas-value_30M] | 18.33s | 18.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 18.24s | 18.24s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_30M] | 18.23s | 18.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_30M] | 18.14s | 18.14s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_30M] | 18.04s | 18.04s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 18.04s | 18.04s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_AND--benchmark-gas-value_30M] | 18.04s | 18.04s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP1-benchmark-gas-value_30M] | 18.04s | 18.04s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_30M] | 18.04s | 18.04s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_30M] | 17.95s | 17.95s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_OR--benchmark-gas-value_30M] | 17.94s | 17.94s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 17.84s | 17.84s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_30M] | 17.84s | 17.84s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_30M] | 17.84s | 17.84s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 17.74s | 17.74s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 17.74s | 17.74s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 17.64s | 17.64s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_30M] | 17.64s | 17.64s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_30M] | 17.64s | 17.64s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_30M] | 17.54s | 17.54s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_30M] | 17.34s | 17.34s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 17.34s | 17.34s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_30M] | 17.24s | 17.24s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_30M] | 17.24s | 17.24s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_30M] | 17.24s | 17.24s |
| test_bitwise.py::test_not_op[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 17.23s | 17.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_30M] | 17.14s | 17.14s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_30M] | 17.14s | 17.14s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_30M] | 17.04s | 17.04s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_XOR--benchmark-gas-value_30M] | 16.95s | 16.95s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_30M] | 16.84s | 16.84s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_30M] | 16.84s | 16.84s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_10240-benchmark-gas-value_30M] | 16.74s | 16.74s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_30M] | 16.73s | 16.73s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value-benchmark-gas-value_30M] | 16.54s | 16.54s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_30M] | 16.54s | 16.54s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_30M] | 16.54s | 16.54s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 16.53s | 16.53s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-615b5b5b-benchmark-gas-value_30M] | 16.44s | 16.44s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_32-benchmark-gas-value_30M] | 16.43s | 16.43s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_30M] | 16.43s | 16.43s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_1024-benchmark-gas-value_30M] | 16.43s | 16.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_30M] | 16.43s | 16.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_64b_exp_512-benchmark-gas-value_30M] | 16.34s | 16.34s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_30M] | 16.24s | 16.24s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_64b_exp_512-benchmark-gas-value_30M] | 16.24s | 16.24s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_30M] | 16.23s | 16.23s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_256-benchmark-gas-value_30M] | 15.84s | 15.84s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_30M] | 15.83s | 15.83s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_0-benchmark-gas-value_30M] | 15.73s | 15.73s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_0-benchmark-gas-value_30M] | 15.44s | 15.44s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value, revert-benchmark-gas-value_30M] | 15.44s | 15.44s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_False-benchmark-gas-value_30M] | 15.44s | 15.44s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_square-benchmark-gas-value_30M] | 15.24s | 15.24s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_32-benchmark-gas-value_30M] | 15.13s | 15.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_1024-benchmark-gas-value_30M] | 15.04s | 15.04s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_32-benchmark-gas-value_30M] | 15.04s | 15.04s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SMOD--benchmark-gas-value_30M] | 15.03s | 15.03s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD--benchmark-gas-value_30M] | 15.03s | 15.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_256-benchmark-gas-value_30M] | 15.03s | 15.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_30M] | 15.03s | 15.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_0-benchmark-gas-value_30M] | 14.93s | 14.93s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_30M] | 14.93s | 14.93s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_256-benchmark-gas-value_30M] | 14.63s | 14.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_1048576-benchmark-gas-value_30M] | 14.63s | 14.63s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_30M] | 14.53s | 14.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_0-benchmark-gas-value_30M] | 14.53s | 14.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_256-benchmark-gas-value_30M] | 14.43s | 14.43s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_EXP--benchmark-gas-value_30M] | 14.43s | 14.43s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_0-benchmark-gas-value_30M] | 14.34s | 14.34s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_30M] | 14.34s | 14.34s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-605b-benchmark-gas-value_30M] | 14.33s | 14.33s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_pow_0x10001-benchmark-gas-value_30M] | 14.14s | 14.14s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_True-benchmark-gas-value_30M] | 14.13s | 14.13s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_False-benchmark-gas-value_30M] | 13.93s | 13.93s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_True-benchmark-gas-value_30M] | 13.84s | 13.84s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_5-benchmark-gas-value_30M] | 13.73s | 13.73s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD--benchmark-gas-value_30M] | 13.73s | 13.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_5-benchmark-gas-value_30M] | 13.73s | 13.73s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_136279841-benchmark-gas-value_30M] | 13.64s | 13.64s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_136279841-benchmark-gas-value_30M] | 13.64s | 13.64s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_136279841-benchmark-gas-value_30M] | 13.63s | 13.63s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_5-benchmark-gas-value_30M] | 13.53s | 13.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_11-benchmark-gas-value_30M] | 13.36s | 13.36s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_30M] | 13.34s | 13.34s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_11-benchmark-gas-value_30M] | 13.33s | 13.33s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_13-benchmark-gas-value_30M] | 13.33s | 13.33s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_30M] | 13.24s | 13.24s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_7-benchmark-gas-value_30M] | 13.23s | 13.23s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_11-benchmark-gas-value_30M] | 13.23s | 13.23s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_13-benchmark-gas-value_30M] | 13.14s | 13.14s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_11-benchmark-gas-value_30M] | 13.13s | 13.13s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_136279841-benchmark-gas-value_30M] | 13.13s | 13.13s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_3-benchmark-gas-value_30M] | 13.13s | 13.13s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_5-benchmark-gas-value_30M] | 13.03s | 13.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_3-benchmark-gas-value_30M] | 13.03s | 13.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_5-benchmark-gas-value_30M] | 13.03s | 13.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_13-benchmark-gas-value_30M] | 13.03s | 13.03s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_3-benchmark-gas-value_30M] | 12.93s | 12.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_7-benchmark-gas-value_30M] | 12.93s | 12.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_5-benchmark-gas-value_30M] | 12.93s | 12.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_11-benchmark-gas-value_30M] | 12.93s | 12.93s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_7-benchmark-gas-value_30M] | 12.85s | 12.85s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_13-benchmark-gas-value_30M] | 12.83s | 12.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_7-benchmark-gas-value_30M] | 12.83s | 12.83s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_10240-benchmark-gas-value_30M] | 12.83s | 12.83s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_3-benchmark-gas-value_30M] | 12.83s | 12.83s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_30M] | 12.83s | 12.83s |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 12.74s | 12.74s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_1024-benchmark-gas-value_30M] | 12.73s | 12.73s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_30M] | 12.73s | 12.73s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_32-benchmark-gas-value_30M] | 12.63s | 12.63s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_7-benchmark-gas-value_30M] | 12.63s | 12.63s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_pow_0x10001-benchmark-gas-value_30M] | 12.63s | 12.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_256-benchmark-gas-value_30M] | 12.63s | 12.63s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_7-benchmark-gas-value_30M] | 12.58s | 12.58s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_3-benchmark-gas-value_30M] | 12.53s | 12.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_136279841-benchmark-gas-value_30M] | 12.53s | 12.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_136279841-benchmark-gas-value_30M] | 12.53s | 12.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_0-benchmark-gas-value_30M] | 12.53s | 12.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_3-benchmark-gas-value_30M] | 12.53s | 12.53s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_100000-benchmark-gas-value_30M] | 12.53s | 12.53s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_13-benchmark-gas-value_30M] | 12.24s | 12.24s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_square-benchmark-gas-value_30M] | 12.23s | 12.23s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_13-benchmark-gas-value_30M] | 12.23s | 12.23s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul-benchmark-gas-value_30M] | 12.13s | 12.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_30M] | 12.13s | 12.13s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSLOAD-benchmark-gas-value_30M] | 12.03s | 12.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_32-benchmark-gas-value_30M] | 12.03s | 12.03s |
| test_account_query.py::test_ext_account_query_cold[fork_Osaka-blockchain_test-absent_accounts_False-opcode_BALANCE-benchmark-gas-value_30M] | 11.94s | 11.94s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_256-benchmark-gas-value_30M] | 11.93s | 11.93s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_1024-benchmark-gas-value_30M] | 11.83s | 11.83s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_30M] | 11.73s | 11.73s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_1_2_32_byte_scalar-benchmark-gas-value_30M] | 11.63s | 11.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_1048576-benchmark-gas-value_30M] | 11.63s | 11.63s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_32_byte_coord_and_scalar-benchmark-gas-value_30M] | 11.53s | 11.53s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_30M] | 11.53s | 11.53s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_pow_0x10001-benchmark-gas-value_30M] | 11.33s | 11.33s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_0-benchmark-gas-value_30M] | 11.33s | 11.33s |
| test_control_flow.py::test_jumpis[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 11.23s | 11.23s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_256-benchmark-gas-value_30M] | 11.23s | 11.23s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_0-benchmark-gas-value_30M] | 11.15s | 11.15s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_256-benchmark-gas-value_30M] | 11.13s | 11.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_1024-benchmark-gas-value_30M] | 11.13s | 11.13s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_30M] | 11.13s | 11.13s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_False-empty_authority_False-benchmark-gas-value_30M] | 11.03s | 11.03s |
| test_control_flow.py::test_jumps[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 11.03s | 11.03s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 10.93s | 10.93s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_32-benchmark-gas-value_30M] | 10.93s | 10.93s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_False-empty_authority_False-benchmark-gas-value_30M] | 10.73s | 10.73s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-615b5b-benchmark-gas-value_30M] | 10.73s | 10.73s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_True-empty_authority_False-benchmark-gas-value_30M] | 10.63s | 10.63s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_False-empty_authority_False-benchmark-gas-value_30M] | 10.63s | 10.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_32-benchmark-gas-value_30M] | 10.53s | 10.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_True-empty_authority_False-benchmark-gas-value_30M] | 10.53s | 10.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_True-empty_authority_False-benchmark-gas-value_30M] | 10.43s | 10.43s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_True-empty_authority_False-benchmark-gas-value_30M] | 10.43s | 10.43s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_False-empty_authority_True-benchmark-gas-value_30M] | 10.33s | 10.33s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALL-transfer_amount_0-benchmark-gas-value_30M] | 10.23s | 10.23s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_30M] | 10.23s | 10.23s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_False-empty_authority_True-benchmark-gas-value_30M] | 10.13s | 10.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_256-benchmark-gas-value_30M] | 10.13s | 10.13s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_True-empty_authority_True-benchmark-gas-value_30M] | 10.13s | 10.13s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_True-empty_authority_True-benchmark-gas-value_30M] | 10.03s | 10.03s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_True-empty_authority_True-benchmark-gas-value_30M] | 10.03s | 10.03s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_True-empty_authority_True-benchmark-gas-value_30M] | 10.03s | 10.03s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALLCODE-transfer_amount_0-benchmark-gas-value_30M] | 10.03s | 10.03s |
| test_system.py::test_selfdestruct_existing[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_30M] | 9.83s | 9.83s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_3_even-benchmark-gas-value_30M] | 9.73s | 9.73s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_30M] | 9.73s | 9.73s |
| test_transaction_types.py::test_block_full_data[fork_Osaka-blockchain_test-zero_byte_False-benchmark-gas-value_30M] | 9.63s | 9.63s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_128b_exp_1024-benchmark-gas-value_30M] | 9.63s | 9.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_32-benchmark-gas-value_30M] | 9.63s | 9.63s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value, revert-benchmark-gas-value_30M] | 9.43s | 9.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_1024-benchmark-gas-value_30M] | 9.43s | 9.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_128b_exp_1024-benchmark-gas-value_30M] | 9.43s | 9.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_0-benchmark-gas-value_30M] | 9.43s | 9.43s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_32-benchmark-gas-value_30M] | 9.33s | 9.33s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value, out of gas-benchmark-gas-value_30M] | 9.13s | 9.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_256-benchmark-gas-value_30M] | 8.93s | 8.93s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_1-transfer_amount_1-benchmark-gas-value_30M] | 8.84s | 8.84s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_0-transfer_amount_1-benchmark-gas-value_30M] | 8.83s | 8.83s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_1024-benchmark-gas-value_30M] | 8.73s | 8.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_32-benchmark-gas-value_30M] | 8.62s | 8.62s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_1-transfer_amount_0-benchmark-gas-value_30M] | 8.53s | 8.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_0-benchmark-gas-value_30M] | 8.43s | 8.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_4_exp_heavy-benchmark-gas-value_30M] | 8.23s | 8.23s |
| test_call_context.py::test_callvalue_from_call[fork_Osaka-blockchain_test-non_zero_value_True-benchmark-gas-value_30M] | 8.03s | 8.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_1024-benchmark-gas-value_30M] | 7.93s | 7.93s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_256b_exp_1024-benchmark-gas-value_30M] | 7.43s | 7.43s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_False-benchmark-gas-value_30M] | 7.33s | 7.33s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_256b_exp_1024-benchmark-gas-value_30M] | 7.23s | 7.23s |
| test_system.py::test_selfdestruct_existing[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_30M] | 7.03s | 7.03s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_True-benchmark-gas-value_30M] | 6.93s | 6.93s |
| test_account_query.py::test_ext_account_query_cold[fork_Osaka-blockchain_test-absent_accounts_True-opcode_BALANCE-benchmark-gas-value_30M] | 6.52s | 6.52s |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify_wrong_endianness-benchmark-gas-value_30M] | 6.42s | 6.42s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_512b_exp_1024-benchmark-gas-value_30M] | 6.12s | 6.12s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALLCODE-transfer_amount_1-benchmark-gas-value_30M] | 6.12s | 6.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_30M] | 5.93s | 5.93s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALL-transfer_amount_0-benchmark-gas-value_30M] | 5.92s | 5.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_30M] | 5.72s | 5.72s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_3_exp_heavy-benchmark-gas-value_30M] | 5.72s | 5.72s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_512b_exp_1024-benchmark-gas-value_30M] | 5.53s | 5.53s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG0-benchmark-gas-value_30M] | 5.22s | 5.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG0-benchmark-gas-value_30M] | 5.22s | 5.22s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value-benchmark-gas-value_30M] | 5.22s | 5.22s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALLCODE-transfer_amount_1-benchmark-gas-value_30M] | 5.22s | 5.22s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of non-zero data-opcode_REVERT-benchmark-gas-value_30M] | 5.22s | 5.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_30M] | 5.13s | 5.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_30M] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_30M] | 5.03s | 5.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG0-benchmark-gas-value_30M] | 5.02s | 5.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG0-benchmark-gas-value_30M] | 5.02s | 5.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_30M] | 4.93s | 4.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG1-benchmark-gas-value_30M] | 4.93s | 4.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_30M] | 4.92s | 4.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG0-benchmark-gas-value_30M] | 4.92s | 4.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG2-benchmark-gas-value_30M] | 4.92s | 4.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar-benchmark-gas-value_30M] | 4.92s | 4.92s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALLCODE-transfer_amount_0-benchmark-gas-value_30M] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_30M] | 4.92s | 4.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG4-benchmark-gas-value_30M] | 4.92s | 4.92s |
| test_system.py::test_selfdestruct_created[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_30M] | 4.83s | 4.83s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG0-benchmark-gas-value_30M] | 4.83s | 4.83s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_30M] | 4.82s | 4.82s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG0-benchmark-gas-value_30M] | 4.82s | 4.82s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG1-benchmark-gas-value_30M] | 4.82s | 4.82s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG2-benchmark-gas-value_30M] | 4.77s | 4.77s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_30M] | 4.73s | 4.73s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_1_2_2_scalar-benchmark-gas-value_30M] | 4.72s | 4.72s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG2-benchmark-gas-value_30M] | 4.72s | 4.72s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG1-benchmark-gas-value_30M] | 4.72s | 4.72s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_2_exp_heavy-benchmark-gas-value_30M] | 4.72s | 4.72s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALL-transfer_amount_1-benchmark-gas-value_30M] | 4.72s | 4.72s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes with value-opcode_CREATE-benchmark-gas-value_30M] | 4.72s | 4.72s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG1-benchmark-gas-value_30M] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_30M] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_30M] | 4.63s | 4.63s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG0-benchmark-gas-value_30M] | 4.62s | 4.62s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1000000-benchmark-gas-value_30M] | 4.62s | 4.62s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_30M] | 4.62s | 4.62s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG4-benchmark-gas-value_30M] | 4.62s | 4.62s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of zero data-opcode_REVERT-benchmark-gas-value_30M] | 4.62s | 4.62s |
| test_system.py::test_creates_collisions[fork_Osaka-blockchain_test-opcode_CREATE-benchmark-gas-value_30M] | 4.62s | 4.62s |
| test_system.py::test_selfdestruct_created[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_30M] | 4.62s | 4.62s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_30M] | 4.53s | 4.53s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG3-benchmark-gas-value_30M] | 4.53s | 4.53s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_30M] | 4.52s | 4.52s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG1-benchmark-gas-value_30M] | 4.52s | 4.52s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG3-benchmark-gas-value_30M] | 4.43s | 4.43s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG1-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes without value-opcode_CREATE2-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG3-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG2-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG3-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG1-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_system.py::test_selfdestruct_initcode[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG2-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_1_exp_heavy-benchmark-gas-value_30M] | 4.41s | 4.41s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_30M] | 4.37s | 4.37s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value, revert-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG2-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_infinities_32_byte_scalar-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG3-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG1-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG4-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG1-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG4-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALL-transfer_amount_1-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes with value-opcode_CREATE2-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes without value-opcode_CREATE-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG4-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG3-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG4-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG4-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG3-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_system.py::test_selfdestruct_initcode[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG2-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG4-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG0-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_1024b_exp_1024-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value, out of gas-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with zero data-opcode_CREATE-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG3-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG2-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG3-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG3-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG2-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SSTORE new value-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_system.py::test_creates_collisions[fork_Osaka-blockchain_test-opcode_CREATE2-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_1024-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG4-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG0-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG3-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SSTORE_new-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_transaction_types.py::test_empty_block[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG4-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value, revert-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_infinities_2_scalar-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG3-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG3-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG1-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG0-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG3-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_256-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG1-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG3-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG0-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value, out of gas-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with non-zero data-opcode_CREATE-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_1_pair-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_2_sets-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG2-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG2-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG4-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SSTORE_same-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_zero_input-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG1-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG4-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG2-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SSTORE same value-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with zero data-opcode_CREATE2-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with zero data-opcode_CREATE2-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG0-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_True-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG0-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG1-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG4-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG1-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_False-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_3_pair-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with zero data-opcode_CREATE-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_max-transfer_amount_1-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_0-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG2-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with zero data-opcode_CREATE2-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_1024-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_256-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_1_pair_empty-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_32-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_0-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG2-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with zero data-opcode_CREATE-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with zero data-opcode_CREATE-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_1024b_exp_1024-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG0-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG1-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_30M] | 3.82s | 3.82s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with zero data-opcode_CREATE2-benchmark-gas-value_30M] | 3.82s | 3.82s |

## Summary

**Total unique test cases:** 1097

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.15.0 | 1097 | 995 | 102 | 0 |

---

## reth-v1.11.0


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | zisk-v0.15.0<br/>(237.91KiB) | Avg |
|-----------|-----------|----------|
| test_account_query.py::test_selfbalance[fork_Osaka-blockchain_test-contract_balance_0-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_account_query.py::test_selfbalance[fork_Osaka-blockchain_test-contract_balance_1-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add_1_2-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_DIV-0-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SDIV-0-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SDIV-1-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_191-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_191-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_255-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_127-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_191-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_255-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD-mod_bits_63-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f[fork_Osaka-blockchain_test-blake2f-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_12-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_24-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_PREVRANDAO-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_fp_to_g1-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_fp_to_g2-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g1msm-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g2add-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g2msm-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_pairing_check-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_128-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_16-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_64-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_128-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_16-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_64-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_1-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_12-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_24-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_3-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_pairing[fork_Osaka-blockchain_test-num_pairs_6-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_ecrecover.py::test_ecrecover[fork_Osaka-blockchain_test-ecrecover-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_identity.py::test_identity[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify_modular_comp_x_coordinate_exceeds_n-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_point_evaluation.py::test_point_evaluation[fork_Osaka-blockchain_test-point_evaluation-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH31-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH32-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP1-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP10-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP11-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP12-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP13-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP14-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP15-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP16-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP2-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP3-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP4-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP5-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP6-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP7-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP8-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Osaka-blockchain_test-opcode_SWAP9-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_CALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_CALLCODE-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_DELEGATECALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODECOPY-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODESIZE-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_STATICCALL-benchmark-gas-value_30M] | ❌ SDK Crash | — |
| test_transaction_types.py::test_block_full_data[fork_Osaka-blockchain_test-zero_byte_False-benchmark-gas-value_30M] | 5m 11.42s | 5m 11.42s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_24b_exp_168-benchmark-gas-value_30M] | 3m 56.01s | 3m 56.01s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH17-benchmark-gas-value_30M] | 3m 24.72s | 3m 24.72s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 3m 12.15s | 3m 12.15s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH6-benchmark-gas-value_30M] | 3m 1.42s | 3m 1.42s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_32-benchmark-gas-value_30M] | 2m 56.58s | 2m 56.58s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_256-benchmark-gas-value_30M] | 2m 54.70s | 2m 54.70s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-max code size-benchmark-gas-value_30M] | 2m 53.76s | 2m 53.76s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_0-benchmark-gas-value_30M] | 2m 52.27s | 2m 52.27s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 2m 52.20s | 2m 52.20s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_0-benchmark-gas-value_30M] | 2m 51.19s | 2m 51.19s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.25x max code size-benchmark-gas-value_30M] | 2m 51.00s | 2m 51.00s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_pow_0x10001-benchmark-gas-value_30M] | 2m 50.47s | 2m 50.47s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_256-benchmark-gas-value_30M] | 2m 50.29s | 2m 50.29s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_256-benchmark-gas-value_30M] | 2m 49.28s | 2m 49.28s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_3-benchmark-gas-value_30M] | 2m 48.57s | 2m 48.57s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_3-benchmark-gas-value_30M] | 2m 48.19s | 2m 48.19s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 2m 47.79s | 2m 47.79s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 2m 47.18s | 2m 47.18s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_10240-benchmark-gas-value_30M] | 2m 46.99s | 2m 46.99s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000008-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 2m 45.87s | 2m 45.87s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000c-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 2m 45.49s | 2m 45.49s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 2m 44.58s | 2m 44.58s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_30M] | 2m 42.11s | 2m 42.11s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_3_even-benchmark-gas-value_30M] | 2m 41.36s | 2m 41.36s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_False-benchmark-gas-value_30M] | 2m 37.88s | 2m 37.88s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG1-benchmark-gas-value_30M] | 2m 36.74s | 2m 36.74s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_30M] | 2m 35.80s | 2m 35.80s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_30M] | 2m 35.66s | 2m 35.66s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG2-benchmark-gas-value_30M] | 2m 35.08s | 2m 35.08s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG1-benchmark-gas-value_30M] | 2m 34.36s | 2m 34.36s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_6-benchmark-gas-value_30M] | 1m 28.72s | 1m 28.72s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_2-benchmark-gas-value_30M] | 1m 28.42s | 1m 28.42s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_765_gas_exp_heavy-benchmark-gas-value_30M] | 1m 27.50s | 1m 27.50s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_400_gas_exp_heavy-benchmark-gas-value_30M] | 1m 27.03s | 1m 27.03s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_64-benchmark-gas-value_30M] | 1m 26.21s | 1m 26.21s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_65-benchmark-gas-value_30M] | 1m 26.01s | 1m 26.01s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_128-benchmark-gas-value_30M] | 1m 25.91s | 1m 25.91s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1360_gas_balanced-benchmark-gas-value_30M] | 1m 25.91s | 1m 25.91s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH28-benchmark-gas-value_30M] | 1m 25.81s | 1m 25.81s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_3-benchmark-gas-value_30M] | 1m 25.70s | 1m 25.70s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_677_gas_base_heavy-benchmark-gas-value_30M] | 1m 25.01s | 1m 25.01s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_pawel_4-benchmark-gas-value_30M] | 1m 24.52s | 1m 24.52s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_191-benchmark-gas-value_30M] | 1m 23.22s | 1m 23.22s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_32-benchmark-gas-value_30M] | 1m 23.20s | 1m 23.20s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH27-benchmark-gas-value_30M] | 1m 23.10s | 1m 23.10s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_208_gas_balanced-benchmark-gas-value_30M] | 1m 22.70s | 1m 22.70s |
| test_comparison.py::test_iszero[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 1m 21.10s | 1m 21.10s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_16b_exp_320-benchmark-gas-value_30M] | 1m 21.00s | 1m 21.00s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH29-benchmark-gas-value_30M] | 1m 19.10s | 1m 19.10s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_36-benchmark-gas-value_30M] | 1m 18.80s | 1m 18.80s |
| test_tx_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_ORIGIN-benchmark-gas-value_30M] | 1m 18.50s | 1m 18.50s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH30-benchmark-gas-value_30M] | 1m 18.49s | 1m 18.49s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_32_exp_40-benchmark-gas-value_30M] | 1m 18.41s | 1m 18.41s |
| test_bls12_381.py::test_bls12_g1_msm[fork_Osaka-blockchain_test-k_1-benchmark-gas-value_30M] | 1m 18.30s | 1m 18.30s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_96-benchmark-gas-value_30M] | 1m 17.81s | 1m 17.81s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_256-benchmark-gas-value_30M] | 1m 15.31s | 1m 15.31s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH25-benchmark-gas-value_30M] | 1m 14.80s | 1m 14.80s |
| test_bls12_381.py::test_bls12_381[fork_Osaka-blockchain_test-bls12_g1add-benchmark-gas-value_30M] | 1m 14.01s | 1m 14.01s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_3_exp_8-benchmark-gas-value_30M] | 1m 13.19s | 1m 13.19s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_32b_exp_40-benchmark-gas-value_30M] | 1m 12.50s | 1m 12.50s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_256-benchmark-gas-value_30M] | 1m 12.39s | 1m 12.39s |
| test_keccak.py::test_keccak_max_permutations[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 1m 11.80s | 1m 11.80s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH26-benchmark-gas-value_30M] | 1m 11.30s | 1m 11.30s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_96-benchmark-gas-value_30M] | 1m 10.89s | 1m 10.89s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_255-benchmark-gas-value_30M] | 1m 10.30s | 1m 10.30s |
| test_call_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_ADDRESS-benchmark-gas-value_30M] | 1m 9.99s | 1m 9.99s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_COINBASE-benchmark-gas-value_30M] | 1m 9.89s | 1m 9.89s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-empty-opcode_REVERT-benchmark-gas-value_30M] | 1m 9.69s | 1m 9.69s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_zkevm_worst_case-benchmark-gas-value_30M] | 1m 9.39s | 1m 9.39s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH24-benchmark-gas-value_30M] | 1m 8.99s | 1m 8.99s |
| test_blake2f.py::test_blake2f_benchmark[fork_Osaka-blockchain_test-num_rounds_1-benchmark-gas-value_30M] | 1m 8.89s | 1m 8.89s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_600_gas_exp_heavy-benchmark-gas-value_30M] | 1m 7.69s | 1m 7.69s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_example_1-benchmark-gas-value_30M] | 1m 7.59s | 1m 7.59s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_SGT--benchmark-gas-value_30M] | 1m 7.39s | 1m 7.39s |
| test_call_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_CALLER-benchmark-gas-value_30M] | 1m 7.09s | 1m 7.09s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_127-benchmark-gas-value_30M] | 1m 6.99s | 1m 6.99s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_8_exp_648-benchmark-gas-value_30M] | 1m 6.61s | 1m 6.61s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_add_infinities-benchmark-gas-value_30M] | 1m 6.58s | 1m 6.58s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_32-benchmark-gas-value_30M] | 1m 6.31s | 1m 6.31s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_CALL-benchmark-gas-value_30M] | 1m 6.19s | 1m 6.19s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH23-benchmark-gas-value_30M] | 1m 6.19s | 1m 6.19s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_255-benchmark-gas-value_30M] | 1m 4.28s | 1m 4.28s |
| test_tx_context.py::test_blobhash[fork_Osaka-blockchain_test-one_blob-benchmark-gas-value_30M] | 1m 3.99s | 1m 3.99s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_1024-benchmark-gas-value_30M] | 1m 3.99s | 1m 3.99s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_800_gas_exp_heavy-benchmark-gas-value_30M] | 1m 3.90s | 1m 3.90s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_256-benchmark-gas-value_30M] | 1m 3.70s | 1m 3.70s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH21-benchmark-gas-value_30M] | 1m 3.68s | 1m 3.68s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_127-benchmark-gas-value_30M] | 1m 3.19s | 1m 3.19s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_STATICCALL-benchmark-gas-value_30M] | 1m 2.99s | 1m 2.99s |
| test_bls12_381.py::test_bls12_g2_msm[fork_Osaka-blockchain_test-k_1-benchmark-gas-value_30M] | 1m 2.68s | 1m 2.68s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH22-benchmark-gas-value_30M] | 1m 2.48s | 1m 2.48s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_852_gas_exp_heavy-benchmark-gas-value_30M] | 1m 2.48s | 1m 2.48s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_1024-mem_size_0-benchmark-gas-value_30M] | 1m 2.40s | 1m 2.40s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_CALLCODE-benchmark-gas-value_30M] | 1m 2.29s | 1m 2.29s |
| test_arithmetic.py::test_mod_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD-mod_bits_63-benchmark-gas-value_30M] | 1m 2.18s | 1m 2.18s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_EQ--benchmark-gas-value_30M] | 1m 1.88s | 1m 1.88s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_DIV-1-benchmark-gas-value_30M] | 1m 1.68s | 1m 1.68s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_STATICCALL-benchmark-gas-value_30M] | 1m 1.59s | 1m 1.59s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SMOD--benchmark-gas-value_30M] | 1m 1.39s | 1m 1.39s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_215_gas_exp_heavy-benchmark-gas-value_30M] | 1m 1.38s | 1m 1.38s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_CALL-benchmark-gas-value_30M] | 1m 1.18s | 1m 1.18s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_exp_298_gas_exp_heavy-benchmark-gas-value_30M] | 1m 1.09s | 1m 1.09s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_CALL-benchmark-gas-value_30M] | 1m 0.89s | 1m 0.89s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_STATICCALL-benchmark-gas-value_30M] | 1m 0.69s | 1m 0.69s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_8b_exp_896-benchmark-gas-value_30M] | 1m 0.19s | 1m 0.19s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_balanced-benchmark-gas-value_30M] | 59.98s | 59.98s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-empty-opcode_RETURN-benchmark-gas-value_30M] | 59.98s | 59.98s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_CALLCODE-benchmark-gas-value_30M] | 59.58s | 59.58s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_exp_heavy-benchmark-gas-value_30M] | 59.39s | 59.39s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_STATICCALL-benchmark-gas-value_30M] | 58.68s | 58.68s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n3-benchmark-gas-value_30M] | 57.88s | 57.88s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1360n1-benchmark-gas-value_30M] | 56.40s | 56.40s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_127-benchmark-gas-value_30M] | 55.87s | 55.87s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_STATICCALL-benchmark-gas-value_30M] | 55.48s | 55.48s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_CALL-benchmark-gas-value_30M] | 55.48s | 55.48s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_CALLCODE-benchmark-gas-value_30M] | 55.48s | 55.48s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_CALLCODE-benchmark-gas-value_30M] | 55.47s | 55.47s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH19-benchmark-gas-value_30M] | 54.88s | 54.88s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_CALL-benchmark-gas-value_30M] | 54.87s | 54.87s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_one_pairing-benchmark-gas-value_30M] | 54.48s | 54.48s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_32b_exp_cover_windows-benchmark-gas-value_30M] | 54.07s | 54.07s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1360n2-benchmark-gas-value_30M] | 53.88s | 53.88s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_8_exp_896-benchmark-gas-value_30M] | 53.79s | 53.79s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 53.78s | 53.78s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n2-benchmark-gas-value_30M] | 53.77s | 53.77s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1349n1-benchmark-gas-value_30M] | 53.48s | 53.48s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_30M] | 53.48s | 53.48s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH20-benchmark-gas-value_30M] | 53.29s | 53.29s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_30M] | 52.97s | 52.97s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_CALLCODE-benchmark-gas-value_30M] | 52.58s | 52.58s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_STATICCALL-benchmark-gas-value_30M] | 52.58s | 52.58s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_1024-benchmark-gas-value_30M] | 52.38s | 52.38s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 52.37s | 52.37s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_CALL-benchmark-gas-value_30M] | 52.18s | 52.18s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_CALL-benchmark-gas-value_30M] | 51.38s | 51.38s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b'ff'-benchmark-gas-value_30M] | 50.97s | 50.97s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 50.97s | 50.97s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH18-benchmark-gas-value_30M] | 50.87s | 50.87s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_CALL-benchmark-gas-value_30M] | 50.77s | 50.77s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_STATICCALL-benchmark-gas-value_30M] | 50.77s | 50.77s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_CALLCODE-benchmark-gas-value_30M] | 50.67s | 50.67s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 50.58s | 50.58s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b'ff'-benchmark-gas-value_30M] | 50.57s | 50.57s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 50.47s | 50.47s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b'ff'-benchmark-gas-value_30M] | 50.38s | 50.38s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 50.37s | 50.37s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 50.17s | 50.17s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_1-benchmark-gas-value_30M] | 50.08s | 50.08s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b'ff'-benchmark-gas-value_30M] | 50.07s | 50.07s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 50.07s | 50.07s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_30M] | 49.98s | 49.98s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 49.77s | 49.77s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 49.67s | 49.67s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 49.58s | 49.58s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_CALLCODE-benchmark-gas-value_30M] | 49.57s | 49.57s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_32-benchmark-gas-value_30M] | 49.27s | 49.27s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_256-benchmark-gas-value_30M] | 49.17s | 49.17s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 48.97s | 48.97s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_30M] | 48.97s | 48.97s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_DELEGATECALL-benchmark-gas-value_30M] | 48.88s | 48.88s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_32-mem_size_0-benchmark-gas-value_30M] | 48.88s | 48.88s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_STATICCALL-benchmark-gas-value_30M] | 48.77s | 48.77s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MOD--benchmark-gas-value_30M] | 48.77s | 48.77s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_CALLCODE-benchmark-gas-value_30M] | 48.57s | 48.57s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b'ff'-benchmark-gas-value_30M] | 48.48s | 48.48s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b'ff'-benchmark-gas-value_30M] | 48.26s | 48.26s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 48.17s | 48.17s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_30M] | 47.68s | 47.68s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_SMOD-mod_bits_63-benchmark-gas-value_30M] | 47.67s | 47.67s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 47.47s | 47.47s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_30M] | 46.77s | 46.77s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 46.47s | 46.47s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_1_even-benchmark-gas-value_30M] | 46.47s | 46.47s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 46.47s | 46.47s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 46.27s | 46.27s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 45.76s | 45.76s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 45.67s | 45.67s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_guido_2_even-benchmark-gas-value_30M] | 45.56s | 45.56s |
| test_arithmetic.py::test_mod[fork_Osaka-blockchain_test-opcode_MOD-mod_bits_63-benchmark-gas-value_30M] | 45.48s | 45.48s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MSTORE-benchmark-gas-value_30M] | 45.47s | 45.47s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_30M] | 45.46s | 45.46s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_0-benchmark-gas-value_30M] | 45.38s | 45.38s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 45.27s | 45.27s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 45.07s | 45.07s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 45.06s | 45.06s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH15-benchmark-gas-value_30M] | 44.67s | 44.67s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_30M] | 44.67s | 44.67s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_30M] | 44.58s | 44.58s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_256-benchmark-gas-value_30M] | 44.57s | 44.57s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_30M] | 44.47s | 44.47s |
| test_sha256.py::test_sha256[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 44.47s | 44.47s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_30M] | 44.46s | 44.46s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 44.27s | 44.27s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_30M] | 44.27s | 44.27s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 44.17s | 44.17s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 43.97s | 43.97s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_32-benchmark-gas-value_30M] | 43.97s | 43.97s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 43.96s | 43.96s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 43.88s | 43.88s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_30M] | 43.87s | 43.87s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 43.86s | 43.86s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH14-benchmark-gas-value_30M] | 43.67s | 43.67s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_256-mem_size_1024-benchmark-gas-value_30M] | 43.66s | 43.66s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 43.66s | 43.66s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 43.57s | 43.57s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_30M] | 43.48s | 43.48s |
| test_sha256.py::test_sha256_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_30M] | 43.47s | 43.47s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 43.26s | 43.26s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 43.17s | 43.17s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 43.16s | 43.16s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 43.16s | 43.16s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MSTORE-benchmark-gas-value_30M] | 42.87s | 42.87s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH16-benchmark-gas-value_30M] | 42.76s | 42.76s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_30M] | 42.66s | 42.66s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'-benchmark-gas-value_30M] | 42.47s | 42.47s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_two_pairings-benchmark-gas-value_30M] | 42.47s | 42.47s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_30M] | 42.37s | 42.37s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_2_pair-benchmark-gas-value_30M] | 42.36s | 42.36s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 42.26s | 42.26s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 41.87s | 41.87s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 41.46s | 41.46s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MSTORE-benchmark-gas-value_30M] | 41.36s | 41.36s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_408_gas_balanced-benchmark-gas-value_30M] | 41.36s | 41.36s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 41.16s | 41.16s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 40.86s | 40.86s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of zero data-opcode_REVERT-benchmark-gas-value_30M] | 40.66s | 40.66s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_30M] | 40.66s | 40.66s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 40.46s | 40.46s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_600_gas_balanced-benchmark-gas-value_30M] | 40.27s | 40.27s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 40.16s | 40.16s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 40.16s | 40.16s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_DELEGATECALL-benchmark-gas-value_30M] | 39.57s | 39.57s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 39.56s | 39.56s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 39.26s | 39.26s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 39.16s | 39.16s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_qube-benchmark-gas-value_30M] | 39.16s | 39.16s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 39.06s | 39.06s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 39.06s | 39.06s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_marius_1_even-benchmark-gas-value_30M] | 38.96s | 38.96s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 38.96s | 38.96s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 38.47s | 38.47s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 38.35s | 38.35s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MLOAD-benchmark-gas-value_30M] | 38.17s | 38.17s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 38.15s | 38.15s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_3-benchmark-gas-value_30M] | 37.98s | 37.98s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 37.96s | 37.96s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 37.76s | 37.76s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MLOAD-benchmark-gas-value_30M] | 37.76s | 37.76s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MLOAD-benchmark-gas-value_30M] | 37.16s | 37.16s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH12-benchmark-gas-value_30M] | 36.96s | 36.96s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH13-benchmark-gas-value_30M] | 36.66s | 36.66s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of zero data-opcode_RETURN-benchmark-gas-value_30M] | 36.56s | 36.56s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MULMOD--benchmark-gas-value_30M] | 36.06s | 36.06s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_4_pair-benchmark-gas-value_30M] | 35.86s | 35.86s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_200n1-benchmark-gas-value_30M] | 34.77s | 34.77s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_common_1152n1-benchmark-gas-value_30M] | 34.76s | 34.76s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_False-benchmark-gas-value_30M] | 33.46s | 33.46s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_min_gas_base_heavy-benchmark-gas-value_30M] | 33.26s | 33.26s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH10-benchmark-gas-value_30M] | 33.06s | 33.06s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_5_pair-benchmark-gas-value_30M] | 33.06s | 33.06s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH11-benchmark-gas-value_30M] | 32.95s | 32.95s |
| test_identity.py::test_identity_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_30M] | 32.45s | 32.45s |
| test_bitwise.py::test_clz_diff[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 32.37s | 32.37s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_ADDMOD--benchmark-gas-value_30M] | 31.86s | 31.86s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_6-benchmark-gas-value_30M] | 31.35s | 31.35s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 30.95s | 30.95s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_True-benchmark-gas-value_30M] | 30.95s | 30.95s |
| test_transaction_types.py::test_block_full_data[fork_Osaka-blockchain_test-zero_byte_True-benchmark-gas-value_30M] | 30.95s | 30.95s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of non-zero data-opcode_REVERT-benchmark-gas-value_30M] | 30.86s | 30.86s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_256_exp_2-benchmark-gas-value_30M] | 30.86s | 30.86s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH9-benchmark-gas-value_30M] | 30.85s | 30.85s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SSTORE new value-benchmark-gas-value_30M] | 30.85s | 30.85s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_767_gas_balanced-benchmark-gas-value_30M] | 30.55s | 30.55s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_square-benchmark-gas-value_30M] | 28.85s | 28.85s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_996_gas_balanced-benchmark-gas-value_30M] | 28.66s | 28.66s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH8-benchmark-gas-value_30M] | 28.65s | 28.65s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_12-benchmark-gas-value_30M] | 28.35s | 28.35s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH7-benchmark-gas-value_30M] | 28.25s | 28.25s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_264_exp_2-benchmark-gas-value_30M] | 27.95s | 27.95s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-5b-benchmark-gas-value_30M] | 27.95s | 27.95s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_BLOBBASEFEE-benchmark-gas-value_30M] | 27.85s | 27.85s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SAR--benchmark-gas-value_30M] | 27.75s | 27.75s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_800_gas_base_heavy-benchmark-gas-value_30M] | 27.66s | 27.66s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_616_gas_base_heavy-benchmark-gas-value_30M] | 27.45s | 27.45s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1KiB of non-zero data-opcode_RETURN-benchmark-gas-value_30M] | 27.35s | 27.35s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_qube-benchmark-gas-value_30M] | 26.95s | 26.95s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_0-benchmark-gas-value_30M] | 26.85s | 26.85s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_867_gas_base_heavy-benchmark-gas-value_30M] | 26.85s | 26.85s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_32-benchmark-gas-value_30M] | 26.75s | 26.75s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_256-benchmark-gas-value_30M] | 26.55s | 26.55s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_408_gas_base_heavy-benchmark-gas-value_30M] | 26.45s | 26.45s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_32-mem_size_1024-benchmark-gas-value_30M] | 26.05s | 26.05s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 25.65s | 25.65s |
| test_alt_bn128.py::test_alt_bn128_benchmark[fork_Osaka-blockchain_test-num_pairs_24-benchmark-gas-value_30M] | 25.35s | 25.35s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_1024-benchmark-gas-value_30M] | 25.05s | 25.05s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1045_gas_base_heavy-benchmark-gas-value_30M] | 24.74s | 24.74s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_256-benchmark-gas-value_30M] | 24.54s | 24.54s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_256-benchmark-gas-value_30M] | 24.45s | 24.45s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_32-benchmark-gas-value_30M] | 24.45s | 24.45s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_1024_exp_2-benchmark-gas-value_30M] | 24.25s | 24.25s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_qube-benchmark-gas-value_30M] | 24.15s | 24.15s |
| test_bitwise.py::test_shifts[fork_Osaka-blockchain_test-opcode_SAR-benchmark-gas-value_30M] | 24.05s | 24.05s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_qube-benchmark-gas-value_30M] | 23.95s | 23.95s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH5-benchmark-gas-value_30M] | 23.85s | 23.85s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_1024-benchmark-gas-value_30M] | 23.74s | 23.74s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_10240-benchmark-gas-value_30M] | 23.55s | 23.55s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_256-benchmark-gas-value_30M] | 23.14s | 23.14s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_0-benchmark-gas-value_30M] | 22.94s | 22.94s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_32-benchmark-gas-value_30M] | 22.94s | 22.94s |
| test_account_query.py::test_codesize[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 22.94s | 22.94s |
| test_tx_context.py::test_call_frame_context_ops[fork_Osaka-blockchain_test-opcode_GASPRICE-benchmark-gas-value_30M] | 22.94s | 22.94s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_1024-benchmark-gas-value_30M] | 22.85s | 22.85s |
| test_bitwise.py::test_shifts[fork_Osaka-blockchain_test-opcode_SHR-benchmark-gas-value_30M] | 22.85s | 22.85s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_1024-benchmark-gas-value_30M] | 22.74s | 22.74s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH4-benchmark-gas-value_30M] | 22.64s | 22.64s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_1_square-benchmark-gas-value_30M] | 22.55s | 22.55s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_32-mem_size_1048576-benchmark-gas-value_30M] | 22.54s | 22.54s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SHL--benchmark-gas-value_30M] | 22.54s | 22.54s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_0-benchmark-gas-value_30M] | 22.35s | 22.35s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 22.34s | 22.34s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_30M] | 22.25s | 22.25s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_30M] | 22.25s | 22.25s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_32-benchmark-gas-value_30M] | 22.24s | 22.24s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_0-benchmark-gas-value_30M] | 22.24s | 22.24s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_256-benchmark-gas-value_30M] | 22.24s | 22.24s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_32-benchmark-gas-value_30M] | 22.14s | 22.14s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_32-benchmark-gas-value_30M] | 21.94s | 21.94s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.25x max code size-benchmark-gas-value_30M] | 21.75s | 21.75s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_30M] | 21.74s | 21.74s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_0-mem_size_0-benchmark-gas-value_30M] | 21.74s | 21.74s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_0-benchmark-gas-value_30M] | 21.64s | 21.64s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SSTORE same value-benchmark-gas-value_30M] | 21.64s | 21.64s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_30M] | 21.55s | 21.55s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_qube-benchmark-gas-value_30M] | 21.45s | 21.45s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_0-benchmark-gas-value_30M] | 21.44s | 21.44s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_32-benchmark-gas-value_30M] | 21.44s | 21.44s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_SHR--benchmark-gas-value_30M] | 21.44s | 21.44s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_False-calldata_size_0-benchmark-gas-value_30M] | 21.44s | 21.44s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH3-benchmark-gas-value_30M] | 21.34s | 21.34s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_256-benchmark-gas-value_30M] | 21.34s | 21.34s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.75x max code size-benchmark-gas-value_30M] | 21.26s | 21.26s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_CHAINID-benchmark-gas-value_30M] | 21.14s | 21.14s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_256-benchmark-gas-value_30M] | 21.14s | 21.14s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_32-benchmark-gas-value_30M] | 21.14s | 21.14s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_32-mem_size_1024-benchmark-gas-value_30M] | 20.95s | 20.95s |
| test_call_context.py::test_calldatasize[fork_Osaka-blockchain_test-zero_data_True-calldata_size_0-benchmark-gas-value_30M] | 20.94s | 20.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_256-benchmark-gas-value_30M] | 20.84s | 20.84s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_1024-benchmark-gas-value_30M] | 20.84s | 20.84s |
| test_call_context.py::test_returndatasize_zero[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 20.75s | 20.75s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1-benchmark-gas-value_30M] | 20.74s | 20.74s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_30M] | 20.74s | 20.74s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_32-benchmark-gas-value_30M] | 20.64s | 20.64s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0 bytes-benchmark-gas-value_30M] | 20.64s | 20.64s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0.50x max code size-benchmark-gas-value_30M] | 20.55s | 20.55s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_1024-benchmark-gas-value_30M] | 20.54s | 20.54s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_30M] | 20.54s | 20.54s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_0-benchmark-gas-value_30M] | 20.45s | 20.45s |
| test_tx_context.py::test_blobhash[fork_Osaka-blockchain_test-no_blobs-benchmark-gas-value_30M] | 20.44s | 20.44s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_0-benchmark-gas-value_30M] | 20.25s | 20.25s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_10240-benchmark-gas-value_30M] | 20.25s | 20.25s |
| test_call_context.py::test_callvalue_from_call[fork_Osaka-blockchain_test-non_zero_value_False-benchmark-gas-value_30M] | 20.24s | 20.24s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1000-benchmark-gas-value_30M] | 20.24s | 20.24s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_32-mem_size_1024-benchmark-gas-value_30M] | 20.24s | 20.24s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_30M] | 20.24s | 20.24s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_10240-benchmark-gas-value_30M] | 20.24s | 20.24s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_256-benchmark-gas-value_30M] | 20.14s | 20.14s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_32-benchmark-gas-value_30M] | 20.14s | 20.14s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_32-fixed_src_dst_False-mem_size_256-benchmark-gas-value_30M] | 20.14s | 20.14s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_1024-benchmark-gas-value_30M] | 20.14s | 20.14s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_BASEFEE-benchmark-gas-value_30M] | 19.94s | 19.94s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH0-benchmark-gas-value_30M] | 19.94s | 19.94s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-max code size-benchmark-gas-value_30M] | 19.94s | 19.94s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_256-benchmark-gas-value_30M] | 19.94s | 19.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_256-benchmark-gas-value_30M] | 19.94s | 19.94s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_256-benchmark-gas-value_30M] | 19.94s | 19.94s |
| test_control_flow.py::test_jumpdests[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_0-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_TIMESTAMP-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_1024-benchmark-gas-value_30M] | 19.84s | 19.84s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_SLT--benchmark-gas-value_30M] | 19.74s | 19.74s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_1024-benchmark-gas-value_30M] | 19.74s | 19.74s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 19.64s | 19.64s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_0-mem_size_32-benchmark-gas-value_30M] | 19.64s | 19.64s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_0-benchmark-gas-value_30M] | 19.54s | 19.54s |
| test_control_flow.py::test_pc_op[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 19.45s | 19.45s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_256-mem_size_32-benchmark-gas-value_30M] | 19.44s | 19.44s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.75x max code size-benchmark-gas-value_30M] | 19.34s | 19.34s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_0-benchmark-gas-value_30M] | 19.34s | 19.34s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_0-mem_size_32-benchmark-gas-value_30M] | 19.24s | 19.24s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_256-benchmark-gas-value_30M] | 19.15s | 19.15s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_NUMBER-benchmark-gas-value_30M] | 19.14s | 19.14s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_True-benchmark-gas-value_30M] | 19.14s | 19.14s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SIGNEXTEND--benchmark-gas-value_30M] | 19.04s | 19.04s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 18.94s | 18.94s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-00-benchmark-gas-value_30M] | 18.94s | 18.94s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_0-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_30M] | 18.84s | 18.84s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_EXP--benchmark-gas-value_30M] | 18.84s | 18.84s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_30M] | 18.74s | 18.74s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_False-0.50x max code size-benchmark-gas-value_30M] | 18.64s | 18.64s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_30M] | 18.64s | 18.64s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_0-benchmark-gas-value_30M] | 18.54s | 18.54s |
| test_control_flow.py::test_gas_op[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 18.54s | 18.54s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_0-benchmark-gas-value_30M] | 18.54s | 18.54s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_1024-benchmark-gas-value_30M] | 18.44s | 18.44s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_256-mem_size_1048576-benchmark-gas-value_30M] | 18.35s | 18.35s |
| test_storage.py::test_tstore[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_False-benchmark-gas-value_30M] | 18.24s | 18.24s |
| test_block_context.py::test_block_context_ops[fork_Osaka-blockchain_test-opcode_GASLIMIT-benchmark-gas-value_30M] | 18.24s | 18.24s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_32-benchmark-gas-value_30M] | 18.23s | 18.23s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_BALANCE-benchmark-gas-value_30M] | 18.04s | 18.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_30M] | 18.04s | 18.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_30M] | 17.94s | 17.94s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_30M] | 17.94s | 17.94s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_32-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_30M] | 17.74s | 17.74s |
| test_account_query.py::test_codecopy[fork_Osaka-blockchain_test-fixed_src_dst_True-0 bytes-benchmark-gas-value_30M] | 17.74s | 17.74s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_10240-benchmark-gas-value_30M] | 17.74s | 17.74s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_136279841-benchmark-gas-value_30M] | 17.54s | 17.54s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_136279841-benchmark-gas-value_30M] | 17.54s | 17.54s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_30M] | 17.54s | 17.54s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_32-benchmark-gas-value_30M] | 17.45s | 17.45s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_7-benchmark-gas-value_30M] | 17.44s | 17.44s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_136279841-benchmark-gas-value_30M] | 17.44s | 17.44s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_0-mem_size_1048576-benchmark-gas-value_30M] | 17.44s | 17.44s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_30M] | 17.34s | 17.34s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_square-benchmark-gas-value_30M] | 17.34s | 17.34s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_136279841-benchmark-gas-value_30M] | 17.34s | 17.34s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_0-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_30M] | 17.24s | 17.24s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_5-benchmark-gas-value_30M] | 17.24s | 17.24s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_0-benchmark-gas-value_30M] | 17.24s | 17.24s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_11-benchmark-gas-value_30M] | 17.24s | 17.24s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_11-benchmark-gas-value_30M] | 17.24s | 17.24s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_30M] | 17.14s | 17.14s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_30M] | 17.14s | 17.14s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_10240-benchmark-gas-value_30M] | 17.04s | 17.04s |
| test_call_context.py::test_callvalue_from_origin[fork_Osaka-blockchain_test-non_zero_value_True-benchmark-gas-value_30M] | 17.04s | 17.04s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH2-benchmark-gas-value_30M] | 17.04s | 17.04s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_5-benchmark-gas-value_30M] | 17.04s | 17.04s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_5-benchmark-gas-value_30M] | 17.04s | 17.04s |
| test_bitwise.py::test_clz_same[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 17.04s | 17.04s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_32-benchmark-gas-value_30M] | 17.04s | 17.04s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_11-benchmark-gas-value_30M] | 17.03s | 17.03s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_256-benchmark-gas-value_30M] | 16.94s | 16.94s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_7-benchmark-gas-value_30M] | 16.84s | 16.84s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_30M] | 16.84s | 16.84s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_30M] | 16.84s | 16.84s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_0-benchmark-gas-value_30M] | 16.84s | 16.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 16.84s | 16.84s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_30M] | 16.84s | 16.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 16.84s | 16.84s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_0-benchmark-gas-value_30M] | 16.84s | 16.84s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_136279841-benchmark-gas-value_30M] | 16.74s | 16.74s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_11-benchmark-gas-value_30M] | 16.74s | 16.74s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_5-benchmark-gas-value_30M] | 16.74s | 16.74s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_32-benchmark-gas-value_30M] | 16.74s | 16.74s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_32-benchmark-gas-value_30M] | 16.74s | 16.74s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_7-benchmark-gas-value_30M] | 16.64s | 16.64s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_3-benchmark-gas-value_30M] | 16.64s | 16.64s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_13-benchmark-gas-value_30M] | 16.64s | 16.64s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 16.64s | 16.64s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_11-base_13-benchmark-gas-value_30M] | 16.64s | 16.64s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_13-benchmark-gas-value_30M] | 16.64s | 16.64s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_3-benchmark-gas-value_30M] | 16.64s | 16.64s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_30M] | 16.54s | 16.54s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 16.54s | 16.54s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_30M] | 16.54s | 16.54s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_1024-benchmark-gas-value_30M] | 16.54s | 16.54s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_256-benchmark-gas-value_30M] | 16.54s | 16.54s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 16.44s | 16.44s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_7-benchmark-gas-value_30M] | 16.44s | 16.44s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_3-benchmark-gas-value_30M] | 16.44s | 16.44s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_30M] | 16.44s | 16.44s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_13-benchmark-gas-value_30M] | 16.44s | 16.44s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_7-benchmark-gas-value_30M] | 16.44s | 16.44s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_11-benchmark-gas-value_30M] | 16.44s | 16.44s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_13-base_136279841-benchmark-gas-value_30M] | 16.44s | 16.44s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_7-benchmark-gas-value_30M] | 16.44s | 16.44s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_7-base_5-benchmark-gas-value_30M] | 16.43s | 16.43s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_30M] | 16.34s | 16.34s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_1048576-benchmark-gas-value_30M] | 16.34s | 16.34s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_False-mem_size_10240-benchmark-gas-value_30M] | 16.34s | 16.34s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_256-benchmark-gas-value_30M] | 16.29s | 16.29s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_256-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_30M] | 16.24s | 16.24s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 16.24s | 16.24s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 16.24s | 16.24s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_136279841-base_11-benchmark-gas-value_30M] | 16.24s | 16.24s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_5-benchmark-gas-value_30M] | 16.23s | 16.23s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 16.23s | 16.23s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_3-benchmark-gas-value_30M] | 16.14s | 16.14s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_64b_exp_512-benchmark-gas-value_30M] | 16.14s | 16.14s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 16.14s | 16.14s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_0-benchmark-gas-value_30M] | 16.14s | 16.14s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_ADD--benchmark-gas-value_30M] | 16.14s | 16.14s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_0-fixed_src_dst_False-mem_size_32-benchmark-gas-value_30M] | 16.14s | 16.14s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 16.13s | 16.13s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_1024-benchmark-gas-value_30M] | 16.04s | 16.04s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_BALANCE-benchmark-gas-value_30M] | 16.04s | 16.04s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_0-benchmark-gas-value_30M] | 16.04s | 16.04s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_MUL--benchmark-gas-value_30M] | 16.04s | 16.04s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_1024-benchmark-gas-value_30M] | 16.04s | 16.04s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_3-base_13-benchmark-gas-value_30M] | 15.94s | 15.94s |
| test_arithmetic.py::test_arithmetic[fork_Osaka-blockchain_test-opcode_SUB--benchmark-gas-value_30M] | 15.94s | 15.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 15.94s | 15.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 15.94s | 15.94s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 15.94s | 15.94s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_30M] | 15.94s | 15.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 15.94s | 15.94s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_False-copy_size_1024-mem_size_1048576-benchmark-gas-value_30M] | 15.84s | 15.84s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 15.84s | 15.84s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_30M] | 15.84s | 15.84s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_30M] | 15.84s | 15.84s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_30M] | 15.84s | 15.84s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_30M] | 15.74s | 15.74s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_0-benchmark-gas-value_30M] | 15.74s | 15.74s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 15.74s | 15.74s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 15.74s | 15.74s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_BYTE--benchmark-gas-value_30M] | 15.73s | 15.73s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_1024-benchmark-gas-value_30M] | 15.73s | 15.73s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_256-benchmark-gas-value_30M] | 15.64s | 15.64s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.RETURN-benchmark-gas-value_30M] | 15.64s | 15.64s |
| test_arithmetic.py::test_exp_bench_arithmetic[fork_Osaka-blockchain_test-exp_5-base_13-benchmark-gas-value_30M] | 15.64s | 15.64s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 15.64s | 15.64s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 15.63s | 15.63s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_1024-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_30M] | 15.54s | 15.54s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_256-benchmark-gas-value_30M] | 15.54s | 15.54s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT-benchmark-gas-value_30M] | 15.54s | 15.54s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 15.54s | 15.54s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 15.53s | 15.53s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 15.44s | 15.44s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_32-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_30M] | 15.44s | 15.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 15.44s | 15.44s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_32-benchmark-gas-value_30M] | 15.44s | 15.44s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1024-mem_size_32-benchmark-gas-value_30M] | 15.44s | 15.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_10240-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 15.44s | 15.44s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_32-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 15.44s | 15.44s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_32-mem_size_1048576-benchmark-gas-value_30M] | 15.44s | 15.44s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-605b5b-benchmark-gas-value_30M] | 15.34s | 15.34s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_256-benchmark-gas-value_30M] | 15.34s | 15.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 15.34s | 15.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 15.34s | 15.34s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 15.34s | 15.34s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 15.24s | 15.24s |
| test_call_context.py::test_returndatasize_nonzero[fork_Osaka-blockchain_test-returned_size_256-return_data_style_ReturnDataStyle.IDENTITY-benchmark-gas-value_30M] | 15.24s | 15.24s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_False-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 15.23s | 15.23s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_True-opcode_BALANCE-benchmark-gas-value_30M] | 15.15s | 15.15s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_32-benchmark-gas-value_30M] | 15.14s | 15.14s |
| test_storage.py::test_storage_access_warm[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_30M] | 15.14s | 15.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 15.14s | 15.14s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_False-offset_1-opcode_MSTORE8-benchmark-gas-value_30M] | 15.14s | 15.14s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_32-benchmark-gas-value_30M] | 15.14s | 15.14s |
| test_call_context.py::test_callvalue_from_origin[fork_Osaka-blockchain_test-non_zero_value_False-benchmark-gas-value_30M] | 15.14s | 15.14s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_0-opcode_MSTORE8-benchmark-gas-value_30M] | 15.04s | 15.04s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_64b_exp_512-benchmark-gas-value_30M] | 15.04s | 15.04s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_0-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 15.04s | 15.04s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP10-benchmark-gas-value_30M] | 15.04s | 15.04s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 14.94s | 14.94s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_True-opcode_BALANCE-benchmark-gas-value_30M] | 14.94s | 14.94s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 14.94s | 14.94s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_1024-benchmark-gas-value_30M] | 14.94s | 14.94s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_1024-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 14.93s | 14.93s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_0-benchmark-gas-value_30M] | 14.93s | 14.93s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_256-benchmark-gas-value_30M] | 14.85s | 14.85s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_1048576-benchmark-gas-value_30M] | 14.84s | 14.84s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 14.84s | 14.84s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_False-mem_size_256-benchmark-gas-value_30M] | 14.84s | 14.84s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP16-benchmark-gas-value_30M] | 14.83s | 14.83s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_1024-benchmark-gas-value_30M] | 14.76s | 14.76s |
| test_stack.py::test_push[fork_Osaka-blockchain_test-opcode_PUSH1-benchmark-gas-value_30M] | 14.74s | 14.74s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_256-benchmark-gas-value_30M] | 14.74s | 14.74s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP5-benchmark-gas-value_30M] | 14.74s | 14.74s |
| test_memory.py::test_memory_access[fork_Osaka-blockchain_test-mem_size_256-offset_initialized_True-offset_31-opcode_MSTORE8-benchmark-gas-value_30M] | 14.64s | 14.64s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 14.63s | 14.63s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP14-benchmark-gas-value_30M] | 14.63s | 14.63s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_32-benchmark-gas-value_30M] | 14.63s | 14.63s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP15-benchmark-gas-value_30M] | 14.54s | 14.54s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_0-benchmark-gas-value_30M] | 14.54s | 14.54s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP2-benchmark-gas-value_30M] | 14.54s | 14.54s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP4-benchmark-gas-value_30M] | 14.54s | 14.54s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000f-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 14.54s | 14.54s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP13-benchmark-gas-value_30M] | 14.53s | 14.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 14.44s | 14.44s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP8-benchmark-gas-value_30M] | 14.44s | 14.44s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP9-benchmark-gas-value_30M] | 14.44s | 14.44s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 14.44s | 14.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_BALANCE-benchmark-gas-value_30M] | 14.44s | 14.44s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_30M] | 14.44s | 14.44s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_0-benchmark-gas-value_30M] | 14.43s | 14.43s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP12-benchmark-gas-value_30M] | 14.34s | 14.34s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP6-benchmark-gas-value_30M] | 14.34s | 14.34s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_OR--benchmark-gas-value_30M] | 14.33s | 14.33s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP3-benchmark-gas-value_30M] | 14.24s | 14.24s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_GT--benchmark-gas-value_30M] | 14.24s | 14.24s |
| test_call_context.py::test_calldatacopy_from_origin[fork_Osaka-blockchain_test-calldata_size_1024-fixed_src_dst_True-mem_size_10240-benchmark-gas-value_30M] | 14.14s | 14.14s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_0-benchmark-gas-value_30M] | 14.13s | 14.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_256-benchmark-gas-value_30M] | 14.13s | 14.13s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP1-benchmark-gas-value_30M] | 14.13s | 14.13s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_XOR--benchmark-gas-value_30M] | 14.04s | 14.04s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000004-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 14.04s | 14.04s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 14.04s | 14.04s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_256-benchmark-gas-value_30M] | 14.04s | 14.04s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_32-benchmark-gas-value_30M] | 13.94s | 13.94s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_BALANCE-benchmark-gas-value_30M] | 13.94s | 13.94s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000006-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.94s | 13.94s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_30M] | 13.94s | 13.94s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 13.94s | 13.94s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 13.94s | 13.94s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP11-benchmark-gas-value_30M] | 13.93s | 13.93s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_32-benchmark-gas-value_30M] | 13.93s | 13.93s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000e-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.93s | 13.93s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_BALANCE-benchmark-gas-value_30M] | 13.84s | 13.84s |
| test_stack.py::test_dup[fork_Osaka-blockchain_test-opcode_DUP7-benchmark-gas-value_30M] | 13.84s | 13.84s |
| test_bitwise.py::test_not_op[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 13.84s | 13.84s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_1024-benchmark-gas-value_30M] | 13.84s | 13.84s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_10240-mem_size_32-benchmark-gas-value_30M] | 13.83s | 13.83s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 13.80s | 13.80s |
| test_comparison.py::test_comparison[fork_Osaka-blockchain_test-opcode_LT--benchmark-gas-value_30M] | 13.74s | 13.74s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_0-benchmark-gas-value_30M] | 13.74s | 13.74s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-615b5b5b-benchmark-gas-value_30M] | 13.74s | 13.74s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000100-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.73s | 13.73s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_True-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 13.73s | 13.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_1024-benchmark-gas-value_30M] | 13.73s | 13.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 13.64s | 13.64s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000005-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.64s | 13.64s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_0-benchmark-gas-value_30M] | 13.64s | 13.64s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_0-mem_alloc_b''-benchmark-gas-value_30M] | 13.63s | 13.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 13.63s | 13.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 13.63s | 13.63s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_256-benchmark-gas-value_30M] | 13.63s | 13.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_0-benchmark-gas-value_30M] | 13.63s | 13.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 13.63s | 13.63s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_True-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 13.63s | 13.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 13.63s | 13.63s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000003-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 13.56s | 13.56s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_2_pow_0x10001-benchmark-gas-value_30M] | 13.54s | 13.54s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 13.54s | 13.54s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000006-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 13.54s | 13.54s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 13.53s | 13.53s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000b-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 13.53s | 13.53s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000001-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.53s | 13.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_BALANCE-benchmark-gas-value_30M] | 13.53s | 13.53s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000e-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 13.53s | 13.53s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000c-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.53s | 13.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 13.44s | 13.44s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 13.44s | 13.44s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_31-mem_alloc_b''-benchmark-gas-value_30M] | 13.44s | 13.44s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000011-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.44s | 13.44s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000a-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 13.44s | 13.44s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000d-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 13.44s | 13.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_True-initial_balance_False-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 13.44s | 13.44s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_1024-benchmark-gas-value_30M] | 13.44s | 13.44s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000f-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.44s | 13.44s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000100-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 13.44s | 13.44s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_1024-benchmark-gas-value_30M] | 13.43s | 13.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 13.43s | 13.43s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000007-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 13.43s | 13.43s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000d-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.34s | 13.34s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000009-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.34s | 13.34s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000007-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.34s | 13.34s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000a-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.34s | 13.34s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x000000000000000000000000000000000000000b-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.34s | 13.34s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_256-mem_size_32-benchmark-gas-value_30M] | 13.34s | 13.34s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_256-benchmark-gas-value_30M] | 13.34s | 13.34s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000001-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 13.34s | 13.34s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000003-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.34s | 13.34s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_0-mem_size_1048576-benchmark-gas-value_30M] | 13.33s | 13.33s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000008-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 13.33s | 13.33s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000009-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 13.33s | 13.33s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000005-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 13.33s | 13.33s |
| test_keccak.py::test_keccak_diff_mem_msg_sizes[fork_Osaka-blockchain_test-msg_size_0-mem_size_1024-benchmark-gas-value_30M] | 13.33s | 13.33s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000010-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.24s | 13.24s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 13.24s | 13.24s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_False-fixed_src_dst_False-benchmark-gas-value_30M] | 13.23s | 13.23s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000002-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.23s | 13.23s |
| test_bitwise.py::test_bitwise[fork_Osaka-blockchain_test-opcode_AND--benchmark-gas-value_30M] | 13.23s | 13.23s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_256-mem_size_0-benchmark-gas-value_30M] | 13.23s | 13.23s |
| test_control_flow.py::test_jumpis[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 13.23s | 13.23s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_True-offset_1024-mem_alloc_b''-benchmark-gas-value_30M] | 13.23s | 13.23s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_0-benchmark-gas-value_30M] | 13.14s | 13.14s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000004-blockchain_test-transfer_amount_0-benchmark-gas-value_30M] | 13.14s | 13.14s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 13.13s | 13.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_10240-benchmark-gas-value_30M] | 13.13s | 13.13s |
| test_account_query.py::test_ext_account_query_warm[fork_Osaka-blockchain_test-initial_storage_False-initial_balance_False-empty_code_False-opcode_EXTCODESIZE-benchmark-gas-value_30M] | 13.04s | 13.04s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_30M] | 13.04s | 13.04s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 13.04s | 13.04s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000002-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 13.03s | 13.03s |
| test_ripemd160.py::test_ripemd160[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 12.94s | 12.94s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_square-benchmark-gas-value_30M] | 12.94s | 12.94s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 12.94s | 12.94s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000010-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 12.84s | 12.84s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 12.84s | 12.84s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_32-benchmark-gas-value_30M] | 12.84s | 12.84s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 12.84s | 12.84s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 12.74s | 12.74s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_diff_acc_to_diff_acc-benchmark-gas-value_30M] | 12.73s | 12.73s |
| test_transaction_types.py::test_ether_transfers_to_precompile[fork_Osaka-precompile_0x0000000000000000000000000000000000000011-blockchain_test-transfer_amount_1-benchmark-gas-value_30M] | 12.64s | 12.64s |
| test_control_flow.py::test_jump_benchmark[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 12.63s | 12.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_30M] | 12.54s | 12.54s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 12.53s | 12.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 12.53s | 12.53s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_256-mem_size_1048576-benchmark-gas-value_30M] | 12.53s | 12.53s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-605b-benchmark-gas-value_30M] | 12.44s | 12.44s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_30M] | 12.44s | 12.44s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_30M] | 12.44s | 12.44s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 12.43s | 12.43s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 12.34s | 12.34s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_30M] | 12.34s | 12.34s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_30M] | 12.33s | 12.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_30M] | 12.24s | 12.24s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_32-benchmark-gas-value_30M] | 12.23s | 12.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_30M] | 12.14s | 12.14s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-non_empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_30M] | 12.14s | 12.14s |
| test_ripemd160.py::test_ripemd160_fixed_size[fork_Osaka-blockchain_test-size_32-benchmark-gas-value_30M] | 12.13s | 12.13s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_1024-benchmark-gas-value_30M] | 12.13s | 12.13s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_1024-benchmark-gas-value_30M] | 12.13s | 12.13s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_30M] | 12.03s | 12.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_diff_acc_to_b-benchmark-gas-value_30M] | 12.03s | 12.03s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_256-benchmark-gas-value_30M] | 12.03s | 12.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_256-benchmark-gas-value_30M] | 12.03s | 12.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 11.94s | 11.94s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_32_byte_coord_and_scalar-benchmark-gas-value_30M] | 11.93s | 11.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_1_2_32_byte_scalar-benchmark-gas-value_30M] | 11.93s | 11.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_30M] | 11.83s | 11.83s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_256-benchmark-gas-value_30M] | 11.83s | 11.83s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_32-benchmark-gas-value_30M] | 11.73s | 11.73s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_30M] | 11.73s | 11.73s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_512-benchmark-gas-value_30M] | 11.73s | 11.73s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_0-benchmark-gas-value_30M] | 11.73s | 11.73s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul-benchmark-gas-value_30M] | 11.63s | 11.63s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_10240-benchmark-gas-value_30M] | 11.63s | 11.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_False-return_size_1048576-mem_size_1024-benchmark-gas-value_30M] | 11.53s | 11.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_0-benchmark-gas-value_30M] | 11.53s | 11.53s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_32-benchmark-gas-value_30M] | 11.53s | 11.53s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_256-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_30M] | 11.44s | 11.44s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_True-fixed_src_dst_False-benchmark-gas-value_30M] | 11.44s | 11.44s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-delegated_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_30M] | 11.44s | 11.44s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_256-benchmark-gas-value_30M] | 11.43s | 11.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_3_pow_0x10001-benchmark-gas-value_30M] | 11.33s | 11.33s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_square-benchmark-gas-value_30M] | 11.33s | 11.33s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_diff_acc-benchmark-gas-value_30M] | 11.23s | 11.23s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_True-fixed_src_dst_True-benchmark-gas-value_30M] | 11.23s | 11.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_30M] | 11.23s | 11.23s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_0-benchmark-gas-value_30M] | 11.23s | 11.23s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_False-empty_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_30M] | 11.13s | 11.13s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_30M] | 11.13s | 11.13s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_30M] | 11.13s | 11.13s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_1024-mem_size_1024-benchmark-gas-value_30M] | 11.04s | 11.04s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_30M] | 11.03s | 11.03s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_30M] | 11.03s | 11.03s |
| test_control_flow.py::test_jumps[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 10.93s | 10.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-delegated_account-transfer_amount_1-case_id_a_to_a-benchmark-gas-value_30M] | 10.93s | 10.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_30M] | 10.93s | 10.93s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-empty_account-transfer_amount_1-case_id_a_to_b-benchmark-gas-value_30M] | 10.93s | 10.93s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_5_pow_0x10001-benchmark-gas-value_30M] | 10.83s | 10.83s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value, revert-benchmark-gas-value_30M] | 10.73s | 10.73s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_32-benchmark-gas-value_30M] | 10.73s | 10.73s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_nagydani_4_pow_0x10001-benchmark-gas-value_30M] | 10.64s | 10.64s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_256-benchmark-gas-value_30M] | 10.63s | 10.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_0-benchmark-gas-value_30M] | 10.63s | 10.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1024-mem_size_32-benchmark-gas-value_30M] | 10.63s | 10.63s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_a-benchmark-gas-value_30M] | 10.54s | 10.54s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value-benchmark-gas-value_30M] | 10.53s | 10.53s |
| test_transaction_types.py::test_ether_transfers[fork_Osaka-blockchain_test-warm_access_True-non_empty_account-transfer_amount_0-case_id_a_to_b-benchmark-gas-value_30M] | 10.53s | 10.53s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSLOAD-benchmark-gas-value_30M] | 10.34s | 10.34s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Osaka-blockchain_test-615b5b-benchmark-gas-value_30M] | 10.23s | 10.23s |
| test_account_query.py::test_extcodecopy_warm[fork_Osaka-blockchain_test-copy_size_1024-benchmark-gas-value_30M] | 10.23s | 10.23s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE same value, out of gas-benchmark-gas-value_30M] | 10.04s | 10.04s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_0-mem_alloc_b''-benchmark-gas-value_30M] | 10.03s | 10.03s |
| test_memory.py::test_mcopy[fork_Osaka-blockchain_test-fixed_src_dst_True-copy_size_1024-mem_size_1048576-benchmark-gas-value_30M] | 10.03s | 10.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_256-benchmark-gas-value_30M] | 10.03s | 10.03s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_1024-mem_alloc_b''-benchmark-gas-value_30M] | 9.93s | 9.93s |
| test_unchunkified_bytecode.py::test_unchunkified_bytecode[fork_Osaka-blockchain_test-opcode_EXTCODEHASH-benchmark-gas-value_30M] | 9.84s | 9.84s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_True-empty_authority_False-benchmark-gas-value_30M] | 9.73s | 9.73s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_True-empty_authority_False-benchmark-gas-value_30M] | 9.63s | 9.63s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_1024-benchmark-gas-value_30M] | 9.63s | 9.63s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_False-empty_authority_False-benchmark-gas-value_30M] | 9.63s | 9.63s |
| test_keccak.py::test_keccak[fork_Osaka-blockchain_test-mem_update_False-offset_31-mem_alloc_b''-benchmark-gas-value_30M] | 9.63s | 9.63s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_True-empty_authority_True-benchmark-gas-value_30M] | 9.53s | 9.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_False-empty_authority_False-benchmark-gas-value_30M] | 9.53s | 9.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_False-empty_authority_True-benchmark-gas-value_30M] | 9.53s | 9.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_True-empty_authority_False-benchmark-gas-value_30M] | 9.53s | 9.53s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_0-benchmark-gas-value_30M] | 9.53s | 9.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_False-empty_authority_False-benchmark-gas-value_30M] | 9.43s | 9.43s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_False-empty_authority_True-benchmark-gas-value_30M] | 9.43s | 9.43s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_True-empty_authority_False-benchmark-gas-value_30M] | 9.43s | 9.43s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_1024-benchmark-gas-value_30M] | 9.34s | 9.34s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_128b_exp_1024-benchmark-gas-value_30M] | 9.33s | 9.33s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_256-benchmark-gas-value_30M] | 9.33s | 9.33s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_False-zero_delegation_False-empty_authority_False-benchmark-gas-value_30M] | 9.33s | 9.33s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_False-empty_authority_True-benchmark-gas-value_30M] | 9.23s | 9.23s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_128b_exp_1024-benchmark-gas-value_30M] | 9.23s | 9.23s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_False-empty_authority_True-benchmark-gas-value_30M] | 9.23s | 9.23s |
| test_account_query.py::test_codecopy_benchmark[fork_Osaka-blockchain_test-code_size_24576-mem_size_1024-benchmark-gas-value_30M] | 9.13s | 9.13s |
| test_account_query.py::test_ext_account_query_cold[fork_Osaka-blockchain_test-absent_accounts_False-opcode_BALANCE-benchmark-gas-value_30M] | 9.03s | 9.03s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_10240-mem_size_32-benchmark-gas-value_30M] | 9.03s | 9.03s |
| test_call_context.py::test_calldatacopy_from_call[fork_Osaka-blockchain_test-calldata_size_1024-non_zero_data_False-fixed_src_dst_True-benchmark-gas-value_30M] | 8.84s | 8.84s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_True-zero_delegation_True-empty_authority_True-benchmark-gas-value_30M] | 8.83s | 8.83s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_0-benchmark-gas-value_30M] | 8.63s | 8.63s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_True-empty_account_False-zero_delegation_True-empty_authority_True-benchmark-gas-value_30M] | 8.53s | 8.53s |
| test_transaction_types.py::test_auth_transaction[fork_Osaka-blockchain_test-transfer_amount_False-empty_account_True-zero_delegation_True-empty_authority_True-benchmark-gas-value_30M] | 8.53s | 8.53s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_256-benchmark-gas-value_30M] | 8.23s | 8.23s |
| test_call_context.py::test_returndatacopy[fork_Osaka-blockchain_test-fixed_dst_True-return_size_1048576-mem_size_32-benchmark-gas-value_30M] | 8.13s | 8.13s |
| test_system.py::test_selfdestruct_existing[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_30M] | 8.13s | 8.13s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value-benchmark-gas-value_30M] | 7.93s | 7.93s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSLOAD-benchmark-gas-value_30M] | 7.63s | 7.63s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SLOAD-benchmark-gas-value_30M] | 7.13s | 7.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_256b_exp_1024-benchmark-gas-value_30M] | 7.03s | 7.03s |
| test_system.py::test_selfdestruct_existing[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_30M] | 7.03s | 7.03s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_256b_exp_1024-benchmark-gas-value_30M] | 6.93s | 6.93s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value, out of gas-benchmark-gas-value_30M] | 6.83s | 6.83s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_4_exp_heavy-benchmark-gas-value_30M] | 6.83s | 6.83s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALL-transfer_amount_0-benchmark-gas-value_30M] | 6.63s | 6.63s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_False-SSTORE new value, revert-benchmark-gas-value_30M] | 6.63s | 6.63s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_0-transfer_amount_0-benchmark-gas-value_30M] | 6.53s | 6.53s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_1-transfer_amount_0-benchmark-gas-value_30M] | 6.43s | 6.43s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALLCODE-transfer_amount_0-benchmark-gas-value_30M] | 6.33s | 6.33s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_0-transfer_amount_1-benchmark-gas-value_30M] | 6.33s | 6.33s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_1-transfer_amount_1-benchmark-gas-value_30M] | 6.33s | 6.33s |
| test_account_query.py::test_ext_account_query_cold[fork_Osaka-blockchain_test-absent_accounts_True-opcode_BALANCE-benchmark-gas-value_30M] | 6.13s | 6.13s |
| test_call_context.py::test_callvalue_from_call[fork_Osaka-blockchain_test-non_zero_value_True-benchmark-gas-value_30M] | 6.03s | 6.03s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_100000-benchmark-gas-value_30M] | 5.63s | 5.63s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_512b_exp_1024-benchmark-gas-value_30M] | 5.53s | 5.53s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_3_exp_heavy-benchmark-gas-value_30M] | 5.53s | 5.53s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_1_2_2_scalar-benchmark-gas-value_30M] | 5.43s | 5.43s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_True-fixed_key_True-benchmark-gas-value_30M] | 5.43s | 5.43s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar-benchmark-gas-value_30M] | 5.23s | 5.23s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_512b_exp_1024-benchmark-gas-value_30M] | 5.13s | 5.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_2_exp_heavy-benchmark-gas-value_30M] | 5.13s | 5.13s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_example_2-benchmark-gas-value_30M] | 5.03s | 5.03s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALL-transfer_amount_1-benchmark-gas-value_30M] | 5.03s | 5.03s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_infinities_32_byte_scalar-benchmark-gas-value_30M] | 4.93s | 4.93s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALL-transfer_amount_0-benchmark-gas-value_30M] | 4.83s | 4.83s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-bn128_mul_infinities_2_scalar-benchmark-gas-value_30M] | 4.73s | 4.73s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALLCODE-transfer_amount_1-benchmark-gas-value_30M] | 4.73s | 4.73s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG3-benchmark-gas-value_30M] | 4.73s | 4.73s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_True-opcode_CALLCODE-transfer_amount_0-benchmark-gas-value_30M] | 4.63s | 4.63s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_30M] | 4.63s | 4.63s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_30M] | 4.63s | 4.63s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG4-benchmark-gas-value_30M] | 4.62s | 4.62s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_30M] | 4.53s | 4.53s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value-benchmark-gas-value_30M] | 4.52s | 4.52s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_30M] | 4.43s | 4.43s |
| test_p256verify.py::test_p256verify[fork_Osaka-blockchain_test-p256verify_wrong_endianness-benchmark-gas-value_30M] | 4.43s | 4.43s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG0-benchmark-gas-value_30M] | 4.43s | 4.43s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG4-benchmark-gas-value_30M] | 4.43s | 4.43s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG4-benchmark-gas-value_30M] | 4.43s | 4.43s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_vul_pawel_1_exp_heavy-benchmark-gas-value_30M] | 4.43s | 4.43s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG0-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG1-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of zero data-opcode_RETURN-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG0-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of non-zero data-opcode_REVERT-benchmark-gas-value_30M] | 4.42s | 4.42s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value, out of gas-benchmark-gas-value_30M] | 4.34s | 4.34s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG4-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG2-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG0-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG3-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALLCODE-transfer_amount_1-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG3-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG2-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG4-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG3-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of non-zero data-opcode_RETURN-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG1-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_1024-opcode_LOG3-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG0-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG3-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG0-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG0-benchmark-gas-value_30M] | 4.33s | 4.33s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_30M] | 4.32s | 4.32s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_30M] | 4.25s | 4.25s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG4-benchmark-gas-value_30M] | 4.25s | 4.25s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with zero data-opcode_CREATE-benchmark-gas-value_30M] | 4.24s | 4.24s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_256-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with zero data-opcode_CREATE-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_system.py::test_creates_collisions[fork_Osaka-blockchain_test-opcode_CREATE2-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG4-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG0-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG2-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG1-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value, revert-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes with value-opcode_CREATE2-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes without value-opcode_CREATE2-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with non-zero data-opcode_CREATE-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG1-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG1-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG3-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG1-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG2-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG1-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG3-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with zero data-opcode_CREATE2-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_system.py::test_return_revert[fork_Osaka-blockchain_test-1MiB of zero data-opcode_REVERT-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_system.py::test_selfdestruct_created[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_30M] | 4.23s | 4.23s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG0-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG4-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE new value, out of gas-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_storage.py::test_storage_access_cold[fork_Osaka-blockchain_test-absent_slots_True-SSTORE same value, revert-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_system.py::test_creates_collisions[fork_Osaka-blockchain_test-opcode_CREATE-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_0-opcode_LOG3-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG2-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG3-benchmark-gas-value_30M] | 4.22s | 4.22s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes without value-opcode_CREATE-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-opcode_LOG1-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_system.py::test_selfdestruct_created[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_1_pair-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG1-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with zero data-opcode_CREATE-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_0-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_32-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG0-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG0-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG2-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_True-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_2_sets-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_3_pair-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG1-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_32-opcode_LOG1-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SSTORE same value-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with zero data-opcode_CREATE-benchmark-gas-value_30M] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG1-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG2-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG4-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_0-opcode_LOG3-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG4-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG1-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG3-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG4-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_even_1024b_exp_1024-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with zero data-opcode_CREATE2-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_system.py::test_selfdestruct_initcode[fork_Osaka-blockchain_test-value_bearing_False-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_system.py::test_selfdestruct_initcode[fork_Osaka-blockchain_test-value_bearing_True-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_32-opcode_LOG2-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG2-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG2-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG4-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG0-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0 bytes with value-opcode_CREATE-benchmark-gas-value_30M] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_30M] | 4.05s | 4.05s |
| test_modexp.py::test_modexp[fork_Osaka-blockchain_test-mod_odd_1024b_exp_1024-benchmark-gas-value_30M] | 4.05s | 4.05s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_30M] | 4.04s | 4.04s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_transaction_types.py::test_empty_block[fork_Osaka-blockchain_test-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_1_pair_empty-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-opcode_LOG4-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG1-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SSTORE_same-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_storage.py::test_tload[fork_Osaka-blockchain_test-fixed_value_False-fixed_key_False-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with zero data-opcode_CREATE2-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_1024-opcode_LOG4-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG0-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG3-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG0-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_1024-opcode_LOG2-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_256-opcode_LOG2-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_32-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG3-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_0-opcode_LOG4-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_max-transfer_amount_0-benchmark-gas-value_30M] | 4.03s | 4.03s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_256-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG0-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG1-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG2-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG0-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Osaka-blockchain_test-max code size with zero data-opcode_CREATE2-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_transaction_types.py::test_contract_creation[fork_Osaka-blockchain_test-contract_size_max-transfer_amount_1-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-opcode_LOG2-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_memory.py::test_msize[fork_Osaka-blockchain_test-mem_size_1000000-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_256-opcode_LOG3-benchmark-gas-value_30M] | 4.02s | 4.02s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_1024-opcode_LOG0-benchmark-gas-value_30M] | 3.94s | 3.94s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG0-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_False-calldata_size_1024-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG4-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG4-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_32-mem_size_0-opcode_LOG0-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Osaka-blockchain_test-ec_pairing_zero_input-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_1024-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_0-mem_size_256-opcode_LOG2-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG1-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG2-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_256-mem_size_32-opcode_LOG4-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_system.py::test_create[fork_Osaka-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE-benchmark-gas-value_30M] | 3.93s | 3.93s |
| test_call_context.py::test_calldataload[fork_Osaka-blockchain_test-zero_data_True-calldata_size_0-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-opcode_LOG2-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-opcode_LOG3-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG2-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_256-opcode_LOG3-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log_benchmark[fork_Osaka-blockchain_test-log_size_1024-mem_size_32-opcode_LOG3-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-opcode_LOG4-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_storage.py::test_storage_access_warm_benchmark[fork_Osaka-blockchain_test-SSTORE new value-benchmark-gas-value_30M] | 3.92s | 3.92s |
| test_storage.py::test_storage_access_cold_benchmark[fork_Osaka-blockchain_test-SSTORE_new-benchmark-gas-value_30M] | 3.83s | 3.83s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-opcode_LOG1-benchmark-gas-value_30M] | 3.83s | 3.83s |
| test_log.py::test_log[fork_Osaka-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-opcode_LOG3-benchmark-gas-value_30M] | 3.83s | 3.83s |
| test_system.py::test_contract_calling_many_addresses[fork_Osaka-blockchain_test-access_warm_False-opcode_CALL-transfer_amount_1-benchmark-gas-value_30M] | 3.82s | 3.82s |

## Summary

**Total unique test cases:** 1097

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.15.0 | 1097 | 1033 | 64 | 0 |

---

