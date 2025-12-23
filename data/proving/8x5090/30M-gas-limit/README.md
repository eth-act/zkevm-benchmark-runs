# 8x5090 - 30M-gas-limit

## Gas Limit Configuration - Proving

EEST benchmarks with 30M-gas-limit gas limit (proving results) on **8x5090** hardware.

## Available EL Clients

- [ethrex](#ethrex)
- [reth](#reth)

---

## ethrex


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | zisk-v0.14.0<br/>(244.02KiB) | Avg |
|-----------|-----------|----------|
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-max code size] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_CALLCODE] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_CALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_STATICCALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_CALLCODE] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_CALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_STATICCALL] | ❌ SDK Crash | — |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODECOPY] | ❌ SDK Crash | — |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODEHASH] | ❌ SDK Crash | — |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODESIZE] | ❌ SDK Crash | — |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_30M-blockchain_test-contract_balance_0] | ❌ SDK Crash | — |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_30M-blockchain_test-contract_balance_1] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add_1_2] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DIV-0] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DIV-1] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SDIV-0] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SDIV-1] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_127] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_191] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_255] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_63] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_127] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_191] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_255] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_63] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_127] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_191] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_255] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_63] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_30M-blockchain_test-blake2f] | ❌ SDK Crash | — |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PREVRANDAO] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_fp_to_g1] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_fp_to_g2] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g1add] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g1msm] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g2add] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g2msm] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_pairing_check] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | ❌ SDK Crash | — |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-one-loop] | ❌ SDK Crash | — |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero-loop] | ❌ SDK Crash | — |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_30M-blockchain_test-ecrecover] | ❌ SDK Crash | — |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_30M-blockchain_test] | ❌ SDK Crash | — |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-5b] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1024_exp_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1045_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1360_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_256_exp_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_264_exp_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_128] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_32] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_36] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_40] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_64] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_65] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_400_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_408_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_408_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_600_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_600_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_616_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_677_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_765_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_767_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_800_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_800_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_852_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_867_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_8_exp_648] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_8_exp_896] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_996_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_128b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_16b_exp_320] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_24b_exp_168] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_256b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_256] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_40] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_96] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_512b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_64b_exp_512] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_8b_exp_896] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_208_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_215_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_298_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_128b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_256b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_256] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_96] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_cover_windows] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_512b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_64b_exp_512] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_3] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_4] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1152n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1349n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1360n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1360n2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n3] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_example_1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_1_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_2_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_marius_1_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_8] | ❌ SDK Crash | — |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_30M-blockchain_test-point_evaluation] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH27] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH28] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH29] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH30] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH31] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH32] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of zero data-opcode_RETURN] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of zero data-opcode_REVERT] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty-opcode_RETURN] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty-opcode_REVERT] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALLCODE] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALL] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DELEGATECALL] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_STATICCALL] | ❌ SDK Crash | — |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 3m 42.98s | 3m 42.98s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH26] | 2m 7.99s | 2m 7.99s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EQ-] | 1m 59.89s | 1m 59.89s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ORIGIN] | 1m 55.66s | 1m 55.66s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add_infinities] | 1m 55.58s | 1m 55.58s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 1m 52.47s | 1m 52.47s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH23] | 1m 50.86s | 1m 50.86s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALLER] | 1m 50.29s | 1m 50.29s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-six blobs, access latest] | 1m 48.61s | 1m 48.61s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH25] | 1m 48.11s | 1m 48.11s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH21] | 1m 47.58s | 1m 47.58s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty] | 1m 45.55s | 1m 45.55s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH24] | 1m 45.31s | 1m 45.31s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_3_even] | 1m 42.63s | 1m 42.63s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADDRESS] | 1m 41.48s | 1m 41.48s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 1m 41.28s | 1m 41.28s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_COINBASE] | 1m 40.24s | 1m 40.24s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH22] | 1m 39.37s | 1m 39.37s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH20] | 1m 37.75s | 1m 37.75s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 1m 37.56s | 1m 37.56s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 1m 36.48s | 1m 36.48s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_1024b_exp_1024] | 1m 36.39s | 1m 36.39s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 1m 36.17s | 1m 36.17s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 1m 32.74s | 1m 32.74s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 1m 31.68s | 1m 31.68s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH17] | 1m 31.34s | 1m 31.34s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH16] | 1m 29.67s | 1m 29.67s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob and accessed] | 1m 29.64s | 1m 29.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_1024b_exp_1024] | 1m 28.14s | 1m 28.14s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH18] | 1m 28.13s | 1m 28.13s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 1m 26.35s | 1m 26.35s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-100 bytes] | 1m 21.26s | 1m 21.26s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 21.11s | 1m 21.11s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH14] | 1m 20.87s | 1m 20.87s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH15] | 1m 20.57s | 1m 20.57s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH19] | 1m 19.55s | 1m 19.55s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 18.95s | 1m 18.95s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-0 bytes] | 1m 17.78s | 1m 17.78s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE new value] | 1m 17.32s | 1m 17.32s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 16.76s | 1m 16.76s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 16.42s | 1m 16.42s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SAR-] | 1m 16.40s | 1m 16.40s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 16.01s | 1m 16.01s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 15.92s | 1m 15.92s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SIGNEXTEND-] | 1m 15.71s | 1m 15.71s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 15.11s | 1m 15.11s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 14.58s | 1m 14.58s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH13] | 1m 13.65s | 1m 13.65s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 13.41s | 1m 13.41s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 12.13s | 1m 12.13s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 11.15s | 1m 11.15s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SAR] | 1m 10.35s | 1m 10.35s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 1m 10.30s | 1m 10.30s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH12] | 1m 9.91s | 1m 9.91s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 8.95s | 1m 8.95s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH11] | 1m 8.24s | 1m 8.24s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 1m 8.08s | 1m 8.08s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 6.62s | 1m 6.62s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_one_pairing] | 1m 6.62s | 1m 6.62s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH10] | 1m 5.44s | 1m 5.44s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 5.31s | 1m 5.31s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-100 bytes] | 1m 4.71s | 1m 4.71s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_255] | 1m 4.60s | 1m 4.60s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 4.19s | 1m 4.19s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_63] | 1m 3.51s | 1m 3.51s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_1_exp_heavy] | 1m 2.83s | 1m 2.83s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_191] | 1m 2.41s | 1m 2.41s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXP-] | 1m 2.05s | 1m 2.05s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 1.63s | 1m 1.63s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_127] | 1m 1.55s | 1m 1.55s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 1.18s | 1m 1.18s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 0.93s | 1m 0.93s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 0.93s | 1m 0.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_two_pairings] | 1m 0.72s | 1m 0.72s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 0.52s | 1m 0.52s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 0.29s | 1m 0.29s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH9] | 59.61s | 59.61s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHL-] | 59.18s | 59.18s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 59.14s | 59.14s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 58.91s | 58.91s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH7] | 58.59s | 58.59s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 58.50s | 58.50s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SHR] | 58.01s | 58.01s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH8] | 57.74s | 57.74s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_pair] | 56.62s | 56.62s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 53.92s | 53.92s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH6] | 53.85s | 53.85s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE same value] | 53.19s | 53.19s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH5] | 53.08s | 53.08s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 53.05s | 53.05s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHR-] | 52.29s | 52.29s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 51.48s | 51.48s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 49.89s | 49.89s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_4_pair] | 49.60s | 49.60s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH4] | 49.59s | 49.59s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 49.38s | 49.38s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_5_pair] | 48.60s | 48.60s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH3] | 48.00s | 48.00s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1] | 46.25s | 46.25s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CHAINID] | 43.97s | 43.97s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_TIMESTAMP] | 43.97s | 43.97s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_NUMBER] | 43.87s | 43.87s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_0] | 43.60s | 43.60s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASLIMIT] | 42.48s | 42.48s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 42.23s | 42.23s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BASEFEE] | 42.20s | 42.20s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value] | 42.03s | 42.03s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 42.02s | 42.02s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BLOBBASEFEE] | 40.91s | 40.91s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH0] | 40.37s | 40.37s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000] | 40.27s | 40.27s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASPRICE] | 40.09s | 40.09s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 39.81s | 39.81s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 38.83s | 38.83s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 38.81s | 38.81s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH2] | 38.56s | 38.56s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 38.29s | 38.29s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 37.88s | 37.88s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-512] | 37.66s | 37.66s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GT-] | 37.41s | 37.41s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 36.88s | 36.88s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 36.86s | 36.86s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH1] | 36.60s | 36.60s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-0 bytes] | 36.29s | 36.29s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 36.17s | 36.17s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_BALANCE] | 36.16s | 36.16s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 36.06s | 36.06s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MOD-] | 35.56s | 35.56s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 35.46s | 35.46s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 35.40s | 35.40s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 35.18s | 35.18s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 35.16s | 35.16s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 35.07s | 35.07s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_LT-] | 35.06s | 35.06s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP2] | 34.97s | 34.97s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 34.77s | 34.77s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP3] | 34.67s | 34.67s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB] | 34.67s | 34.67s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 34.57s | 34.57s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SGT-] | 34.57s | 34.57s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 34.56s | 34.56s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP16] | 34.56s | 34.56s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP14] | 34.51s | 34.51s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MUL-] | 34.46s | 34.46s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 34.38s | 34.38s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 34.20s | 34.20s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 34.16s | 34.16s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_BALANCE] | 34.07s | 34.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 33.99s | 33.99s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 33.87s | 33.87s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP4] | 33.86s | 33.86s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP5] | 33.77s | 33.77s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP15] | 33.67s | 33.67s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP7] | 33.61s | 33.61s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADD-] | 33.56s | 33.56s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP10] | 33.17s | 33.17s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSLOAD] | 33.16s | 33.16s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_False] | 33.11s | 33.11s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b5b] | 33.08s | 33.08s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP13] | 32.85s | 32.85s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP6] | 32.79s | 32.79s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 32.79s | 32.79s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP6] | 32.67s | 32.67s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP8] | 32.67s | 32.67s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 32.57s | 32.57s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-no blobs] | 32.40s | 32.40s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP16] | 32.39s | 32.39s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP3] | 32.38s | 32.38s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SLT-] | 32.36s | 32.36s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SUB-] | 32.26s | 32.26s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 32.24s | 32.24s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP11] | 32.09s | 32.09s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob but access non-existent index] | 32.07s | 32.07s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 32.06s | 32.06s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP8] | 32.06s | 32.06s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_True] | 31.95s | 31.95s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_10000] | 31.77s | 31.77s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_0] | 31.76s | 31.76s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP9] | 31.76s | 31.76s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-100 bytes] | 31.75s | 31.75s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BYTE-] | 31.59s | 31.59s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 31.57s | 31.57s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 31.47s | 31.47s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP14] | 31.29s | 31.29s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP1] | 31.05s | 31.05s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP2] | 31.05s | 31.05s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP4] | 30.98s | 30.98s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 30.66s | 30.66s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP7] | 30.56s | 30.56s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_OR-] | 30.46s | 30.46s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP11] | 30.46s | 30.46s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 30.46s | 30.46s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-5KiB] | 30.36s | 30.36s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_1000] | 30.09s | 30.09s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP12] | 30.06s | 30.06s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP13] | 30.05s | 30.05s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 29.99s | 29.99s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP15] | 29.86s | 29.86s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP1] | 29.78s | 29.78s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 29.67s | 29.67s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP9] | 29.58s | 29.58s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_False] | 29.56s | 29.56s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 29.16s | 29.16s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP10] | 29.15s | 29.15s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP5] | 29.07s | 29.07s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_True] | 29.06s | 29.06s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_XOR-] | 28.76s | 28.76s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 28.66s | 28.66s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SLOAD] | 28.08s | 28.08s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP12] | 27.75s | 27.75s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 27.67s | 27.67s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_AND-] | 27.47s | 27.47s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 27.14s | 27.14s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 26.95s | 26.95s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 26.85s | 26.85s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 26.65s | 26.65s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-100 bytes] | 26.05s | 26.05s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-10KiB] | 25.95s | 25.95s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value] | 25.76s | 25.76s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 25.66s | 25.66s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_False] | 25.35s | 25.35s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_True] | 24.75s | 24.75s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 24.56s | 24.56s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SMOD-] | 24.44s | 24.44s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b5b] | 24.37s | 24.37s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 24.05s | 24.05s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_False] | 23.96s | 23.96s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-00] | 23.86s | 23.86s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSLOAD] | 23.74s | 23.74s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 23.65s | 23.65s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_True] | 23.24s | 23.24s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_False] | 23.18s | 23.18s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_diff_acc] | 23.14s | 23.14s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_b] | 22.74s | 22.74s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 22.44s | 22.44s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-1MiB] | 22.16s | 22.16s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 21.75s | 21.75s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-10KiB] | 21.40s | 21.40s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_diff_acc] | 20.74s | 20.74s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_b] | 20.74s | 20.74s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 20.70s | 20.70s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_True] | 19.65s | 19.65s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-1MiB] | 19.33s | 19.33s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_True] | 18.85s | 18.85s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 18.53s | 18.53s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 17.74s | 17.74s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_zkevm_worst_case] | 17.66s | 17.66s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_a] | 16.83s | 16.83s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b] | 16.74s | 16.74s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 16.43s | 16.43s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-10KiB] | 16.33s | 16.33s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_False] | 16.04s | 16.04s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 16.03s | 16.03s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_example_2] | 15.85s | 15.85s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 15.74s | 15.74s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul] | 15.66s | 15.66s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 15.34s | 15.34s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-1MiB] | 15.14s | 15.14s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_100000] | 14.75s | 14.75s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_False] | 14.75s | 14.75s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 14.53s | 14.53s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 13.54s | 13.54s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-1MiB] | 13.44s | 13.44s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b] | 13.44s | 13.44s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_True] | 13.23s | 13.23s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 13.13s | 13.13s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 13.03s | 13.03s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-max code size] | 12.93s | 12.93s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 12.83s | 12.83s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_False] | 12.64s | 12.64s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_True] | 12.35s | 12.35s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_True] | 12.24s | 12.24s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-10KiB] | 11.73s | 11.73s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 11.42s | 11.42s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 10.62s | 10.62s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 9.92s | 9.92s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 9.62s | 9.62s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_True] | 8.63s | 8.63s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 8.12s | 8.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 7.94s | 7.94s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_False] | 7.33s | 7.33s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 7.32s | 7.32s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value] | 6.42s | 6.42s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 6.12s | 6.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 6.12s | 6.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 5.92s | 5.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_2_scalar] | 5.92s | 5.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 5.83s | 5.83s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 5.82s | 5.82s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE] | 5.72s | 5.72s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 5.72s | 5.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 5.62s | 5.62s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_False] | 5.56s | 5.56s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 4.92s | 4.92s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 4.81s | 4.81s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 4.72s | 4.72s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_2_scalar] | 4.72s | 4.72s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 4.62s | 4.62s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 4.62s | 4.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 4.61s | 4.61s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE2] | 4.52s | 4.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 4.52s | 4.52s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_REVERT] | 4.52s | 4.52s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 4.52s | 4.52s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000000] | 4.52s | 4.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 4.42s | 4.42s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_RETURN] | 4.32s | 4.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE] | 4.32s | 4.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 4.32s | 4.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE2] | 4.32s | 4.32s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 4.32s | 4.32s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 4.13s | 4.13s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 4.02s | 4.02s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 4.02s | 4.02s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 4.02s | 4.02s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE2] | 3.92s | 3.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE2] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 3.82s | 3.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 3.82s | 3.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 3.81s | 3.81s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 3.72s | 3.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 3.72s | 3.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 3.72s | 3.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 3.72s | 3.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 3.62s | 3.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 3.62s | 3.62s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_zero_input] | 3.62s | 3.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 3.62s | 3.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 3.62s | 3.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 3.62s | 3.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 3.61s | 3.61s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 3.61s | 3.61s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 3.54s | 3.54s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 3.54s | 3.54s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 3.53s | 3.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 3.52s | 3.52s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 3.42s | 3.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 3.42s | 3.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 3.42s | 3.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 3.41s | 3.41s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 3.41s | 3.41s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE] | 3.41s | 3.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 3.32s | 3.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 3.32s | 3.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 3.32s | 3.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 3.32s | 3.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 3.32s | 3.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 3.32s | 3.32s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair] | 3.31s | 3.31s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 3.31s | 3.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 3.31s | 3.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 3.31s | 3.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 3.31s | 3.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 3.22s | 3.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 3.22s | 3.22s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_sets] | 3.22s | 3.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 3.22s | 3.22s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_3_pair] | 3.21s | 3.21s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 3.21s | 3.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 3.21s | 3.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 3.14s | 3.14s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 3.12s | 3.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair_empty] | 3.12s | 3.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 3.12s | 3.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 3.12s | 3.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 3.11s | 3.11s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.14.0 | 533 | 387 | 146 | 0 |

---

## reth


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | zisk-v0.14.0<br/>(244.02KiB) | Avg |
|-----------|-----------|----------|
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODECOPY] | ❌ SDK Crash | — |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODEHASH] | ❌ SDK Crash | — |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXTCODESIZE] | ❌ SDK Crash | — |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_30M-blockchain_test-contract_balance_0] | ❌ SDK Crash | — |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_30M-blockchain_test-contract_balance_1] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add_1_2] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DIV-0] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SDIV-0] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SDIV-1] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_191] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_191] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_255] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_127] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_191] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_255] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_63] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_30M-blockchain_test-blake2f] | ❌ SDK Crash | — |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PREVRANDAO] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_fp_to_g1] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_fp_to_g2] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g1add] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g1msm] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g2add] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g2msm] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_pairing_check] | ❌ SDK Crash | — |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_30M-blockchain_test-ecrecover] | ❌ SDK Crash | — |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_30M-blockchain_test] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1024_exp_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1045_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_1360_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_256_exp_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_264_exp_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_128] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_32] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_36] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_40] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_64] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_32_exp_65] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_400_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_408_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_408_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_600_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_600_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_616_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_677_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_765_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_767_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_800_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_800_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_852_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_867_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_8_exp_648] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_8_exp_896] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_996_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_1024b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_128b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_16b_exp_320] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_24b_exp_168] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_256b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_256] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_40] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_96] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_512b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_64b_exp_512] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_8b_exp_896] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_208_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_215_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_exp_298_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_min_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_1024b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_128b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_256b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_256] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_96] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_32b_exp_cover_windows] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_512b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_64b_exp_512] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_3] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_pawel_4] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1152n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1349n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1360n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_1360n2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n3] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_example_1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_example_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_1_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_2_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_3_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_marius_1_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_1_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_2_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_8] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_4_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_zkevm_worst_case] | ❌ SDK Crash | — |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_30M-blockchain_test-point_evaluation] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH31] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH32] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP10] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP11] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP12] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP13] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP14] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP15] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP16] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP1] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP2] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP3] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP4] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP5] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP6] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP7] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP8] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP9] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALLCODE] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALL] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DELEGATECALL] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_STATICCALL] | ❌ SDK Crash | — |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 2m 33.38s | 2m 33.38s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH30] | 2m 15.00s | 2m 15.00s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH28] | 1m 55.87s | 1m 55.87s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH29] | 1m 55.09s | 1m 55.09s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty-opcode_REVERT] | 1m 49.87s | 1m 49.87s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_COINBASE] | 1m 47.79s | 1m 47.79s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SGT-] | 1m 47.71s | 1m 47.71s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_255] | 1m 47.36s | 1m 47.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH27] | 1m 47.05s | 1m 47.05s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH24] | 1m 44.55s | 1m 44.55s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_CALL] | 1m 44.48s | 1m 44.48s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_191] | 1m 44.46s | 1m 44.46s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ORIGIN] | 1m 41.64s | 1m 41.64s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add_infinities] | 1m 41.17s | 1m 41.17s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH26] | 1m 41.14s | 1m 41.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_STATICCALL] | 1m 40.61s | 1m 40.61s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_127] | 1m 40.19s | 1m 40.19s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-one-loop] | 1m 38.88s | 1m 38.88s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_255] | 1m 38.54s | 1m 38.54s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 1m 38.42s | 1m 38.42s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALLER] | 1m 37.37s | 1m 37.37s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_CALLCODE] | 1m 36.63s | 1m 36.63s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty-opcode_RETURN] | 1m 36.38s | 1m 36.38s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADDRESS] | 1m 36.25s | 1m 36.25s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DIV-1] | 1m 35.68s | 1m 35.68s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_127] | 1m 34.95s | 1m 34.95s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EQ-] | 1m 32.78s | 1m 32.78s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_127] | 1m 32.17s | 1m 32.17s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH23] | 1m 31.64s | 1m 31.64s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH25] | 1m 31.25s | 1m 31.25s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_CALL] | 1m 31.03s | 1m 31.03s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_STATICCALL] | 1m 30.19s | 1m 30.19s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero-loop] | 1m 28.15s | 1m 28.15s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-six blobs, access latest] | 1m 27.73s | 1m 27.73s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH22] | 1m 27.31s | 1m 27.31s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH20] | 1m 25.24s | 1m 25.24s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SMOD-] | 1m 24.74s | 1m 24.74s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 1m 24.65s | 1m 24.65s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty] | 1m 23.44s | 1m 23.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_CALLCODE] | 1m 23.43s | 1m 23.43s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob and accessed] | 1m 23.07s | 1m 23.07s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH21] | 1m 22.85s | 1m 22.85s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH19] | 1m 20.19s | 1m 20.19s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH17] | 1m 16.71s | 1m 16.71s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE new value] | 1m 15.88s | 1m 15.88s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MOD-] | 1m 15.43s | 1m 15.43s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 1m 15.25s | 1m 15.25s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 13.06s | 1m 13.06s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 12.74s | 1m 12.74s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 12.54s | 1m 12.54s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_63] | 1m 12.07s | 1m 12.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 12.04s | 1m 12.04s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH16] | 1m 11.93s | 1m 11.93s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_63] | 1m 11.42s | 1m 11.42s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 11.10s | 1m 11.10s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_63] | 1m 10.95s | 1m 10.95s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 10.81s | 1m 10.81s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 9.42s | 1m 9.42s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 9.32s | 1m 9.32s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH18] | 1m 8.84s | 1m 8.84s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 8.18s | 1m 8.18s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 8.11s | 1m 8.11s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 8.00s | 1m 8.00s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 7.96s | 1m 7.96s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 6.20s | 1m 6.20s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 5.76s | 1m 5.76s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH14] | 1m 5.23s | 1m 5.23s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 4.28s | 1m 4.28s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH15] | 1m 3.22s | 1m 3.22s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 2.81s | 1m 2.81s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_one_pairing] | 1m 2.38s | 1m 2.38s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 2.11s | 1m 2.11s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 1.81s | 1m 1.81s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of zero data-opcode_REVERT] | 1m 1.31s | 1m 1.31s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 0.91s | 1m 0.91s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 0.40s | 1m 0.40s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of zero data-opcode_RETURN] | 1m 0.01s | 1m 0.01s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 59.66s | 59.66s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 59.32s | 59.32s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 58.39s | 58.39s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 58.31s | 58.31s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH13] | 58.14s | 58.14s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 57.40s | 57.40s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH12] | 57.10s | 57.10s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_two_pairings] | 55.10s | 55.10s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_pair] | 54.50s | 54.50s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH11] | 53.59s | 53.59s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH10] | 52.71s | 52.71s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_False] | 51.20s | 51.20s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE same value] | 49.79s | 49.79s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_True] | 49.17s | 49.17s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 48.31s | 48.31s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH9] | 46.98s | 46.98s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 46.49s | 46.49s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASPRICE] | 46.18s | 46.18s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BLOBBASEFEE] | 46.00s | 46.00s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH8] | 45.92s | 45.92s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BASEFEE] | 44.93s | 44.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_5_pair] | 44.78s | 44.78s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_4_pair] | 43.28s | 43.28s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1] | 43.16s | 43.16s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-5b] | 42.98s | 42.98s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH6] | 41.88s | 41.88s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 41.67s | 41.67s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH7] | 41.60s | 41.60s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_0] | 41.39s | 41.39s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SAR-] | 41.08s | 41.08s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 40.40s | 40.40s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 40.19s | 40.19s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 39.96s | 39.96s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_TIMESTAMP] | 39.89s | 39.89s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 39.67s | 39.67s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_NUMBER] | 39.58s | 39.58s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000] | 39.48s | 39.48s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH0] | 38.10s | 38.10s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-0 bytes] | 37.47s | 37.47s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CHAINID] | 37.37s | 37.37s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SAR] | 37.28s | 37.28s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASLIMIT] | 37.27s | 37.27s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH5] | 37.00s | 37.00s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 36.37s | 36.37s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 35.88s | 35.88s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SHR] | 35.56s | 35.56s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 35.17s | 35.17s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-100 bytes] | 35.06s | 35.06s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH4] | 34.85s | 34.85s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 34.57s | 34.57s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 34.22s | 34.22s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 33.98s | 33.98s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-100 bytes] | 33.68s | 33.68s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 33.65s | 33.65s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 33.18s | 33.18s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH3] | 32.96s | 32.96s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHR-] | 32.78s | 32.78s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_False] | 32.47s | 32.47s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SLT-] | 32.46s | 32.46s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 31.91s | 31.91s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 31.69s | 31.69s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_True] | 31.48s | 31.48s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 31.18s | 31.18s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob but access non-existent index] | 31.15s | 31.15s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 30.97s | 30.97s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 30.65s | 30.65s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_BALANCE] | 30.38s | 30.38s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHL-] | 30.26s | 30.26s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 29.55s | 29.55s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_True] | 29.35s | 29.35s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-no blobs] | 29.25s | 29.25s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-0 bytes] | 29.15s | 29.15s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SIGNEXTEND-] | 29.07s | 29.07s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 28.87s | 28.87s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 28.76s | 28.76s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP10] | 28.58s | 28.58s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_0] | 28.55s | 28.55s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_1000] | 28.35s | 28.35s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 28.09s | 28.09s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 28.05s | 28.05s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 27.95s | 27.95s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 27.78s | 27.78s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-1MiB] | 27.37s | 27.37s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP2] | 27.25s | 27.25s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 26.96s | 26.96s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MUL-] | 26.86s | 26.86s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_False] | 26.55s | 26.55s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_False] | 26.45s | 26.45s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_True] | 26.18s | 26.18s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 26.05s | 26.05s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 25.95s | 25.95s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 25.95s | 25.95s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_10000] | 25.65s | 25.65s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 25.65s | 25.65s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-max code size] | 25.35s | 25.35s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 25.19s | 25.19s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 24.97s | 24.97s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 24.96s | 24.96s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 24.57s | 24.57s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 24.45s | 24.45s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP14] | 24.35s | 24.35s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP15] | 24.34s | 24.34s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXP-] | 24.28s | 24.28s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 24.27s | 24.27s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 24.24s | 24.24s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-100 bytes] | 24.16s | 24.16s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 24.07s | 24.07s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP11] | 23.94s | 23.94s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP12] | 23.94s | 23.94s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 23.85s | 23.85s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP16] | 23.85s | 23.85s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 23.76s | 23.76s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SUB-] | 23.75s | 23.75s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 23.66s | 23.66s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 23.65s | 23.65s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADD-] | 23.45s | 23.45s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-100 bytes] | 23.44s | 23.44s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-10KiB] | 23.31s | 23.31s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP5] | 23.25s | 23.25s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH2] | 23.17s | 23.17s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 23.14s | 23.14s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP6] | 23.08s | 23.08s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP4] | 22.65s | 22.65s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_BALANCE] | 22.45s | 22.45s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 22.37s | 22.37s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SLOAD] | 22.28s | 22.28s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-00] | 21.74s | 21.74s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 21.58s | 21.58s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH1] | 21.57s | 21.57s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_AND-] | 21.46s | 21.46s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP1] | 21.45s | 21.45s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 21.35s | 21.35s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_XOR-] | 21.34s | 21.34s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP3] | 21.27s | 21.27s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BYTE-] | 21.24s | 21.24s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP7] | 21.14s | 21.14s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 21.06s | 21.06s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b5b] | 21.06s | 21.06s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_OR-] | 20.96s | 20.96s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 20.95s | 20.95s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 20.94s | 20.94s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 20.58s | 20.58s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 20.55s | 20.55s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-512] | 20.54s | 20.54s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP8] | 20.25s | 20.25s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 20.16s | 20.16s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 20.15s | 20.15s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP9] | 20.05s | 20.05s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP13] | 20.04s | 20.04s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-10KiB] | 19.96s | 19.96s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b5b] | 19.85s | 19.85s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GT-] | 19.77s | 19.77s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 19.24s | 19.24s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value] | 19.04s | 19.04s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_diff_acc] | 18.74s | 18.74s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 18.64s | 18.64s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB] | 18.63s | 18.63s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-1MiB] | 18.54s | 18.54s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_LT-] | 18.45s | 18.45s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSLOAD] | 18.38s | 18.38s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 18.34s | 18.34s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_True] | 18.25s | 18.25s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_True] | 18.03s | 18.03s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 17.54s | 17.54s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 17.53s | 17.53s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_False] | 16.64s | 16.64s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-10KiB] | 15.65s | 15.65s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 15.54s | 15.54s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b] | 15.44s | 15.44s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul] | 15.33s | 15.33s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 15.15s | 15.15s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 14.83s | 14.83s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 14.74s | 14.74s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-10KiB] | 14.64s | 14.64s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 14.62s | 14.62s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-5KiB] | 14.44s | 14.44s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_False] | 14.43s | 14.43s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 14.43s | 14.43s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_True] | 14.24s | 14.24s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 14.23s | 14.23s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value] | 14.13s | 14.13s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-1MiB] | 13.94s | 13.94s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_True] | 13.63s | 13.63s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_b] | 13.13s | 13.13s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_False] | 12.93s | 12.93s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-max code size] | 12.74s | 12.74s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 12.63s | 12.63s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_diff_acc] | 12.63s | 12.63s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-1MiB] | 12.62s | 12.62s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b] | 12.53s | 12.53s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 12.13s | 12.13s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 12.12s | 12.12s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 12.05s | 12.05s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_False] | 11.93s | 11.93s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_True] | 11.43s | 11.43s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 11.33s | 11.33s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 11.24s | 11.24s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_b] | 11.13s | 11.13s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 11.13s | 11.13s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 10.53s | 10.53s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSLOAD] | 10.53s | 10.53s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 10.12s | 10.12s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_a] | 9.62s | 9.62s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 9.42s | 9.42s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 9.02s | 9.02s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_True] | 8.03s | 8.03s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_False] | 7.33s | 7.33s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_2_scalar] | 6.72s | 6.72s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_100000] | 6.62s | 6.62s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 6.45s | 6.45s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 6.12s | 6.12s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_False] | 5.72s | 5.72s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_2_scalar] | 5.42s | 5.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE] | 5.12s | 5.12s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 4.62s | 4.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 4.62s | 4.62s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 4.62s | 4.62s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value] | 4.53s | 4.53s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE] | 4.52s | 4.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 4.42s | 4.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 4.32s | 4.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 4.23s | 4.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 4.16s | 4.16s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 4.12s | 4.12s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 4.12s | 4.12s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 4.01s | 4.01s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 3.92s | 3.92s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 3.92s | 3.92s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 3.92s | 3.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 3.82s | 3.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 3.82s | 3.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE2] | 3.82s | 3.82s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE2] | 3.82s | 3.82s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 3.81s | 3.81s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 3.73s | 3.73s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 3.72s | 3.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE2] | 3.72s | 3.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE] | 3.72s | 3.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 3.72s | 3.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 3.71s | 3.71s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 3.64s | 3.64s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 3.62s | 3.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 3.62s | 3.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 3.62s | 3.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 3.62s | 3.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 3.62s | 3.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 3.62s | 3.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 3.62s | 3.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 3.53s | 3.53s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_REVERT] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 3.52s | 3.52s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 3.52s | 3.52s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_3_pair] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 3.51s | 3.51s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 3.51s | 3.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 3.43s | 3.43s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 3.42s | 3.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 3.41s | 3.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 3.41s | 3.41s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair] | 3.32s | 3.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 3.32s | 3.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 3.32s | 3.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 3.32s | 3.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 3.31s | 3.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 3.31s | 3.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 3.31s | 3.31s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_zero_input] | 3.31s | 3.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 3.31s | 3.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 3.31s | 3.31s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000000] | 3.23s | 3.23s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_RETURN] | 3.22s | 3.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 3.22s | 3.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 3.22s | 3.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 3.22s | 3.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 3.22s | 3.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 3.22s | 3.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 3.22s | 3.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 3.22s | 3.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 3.21s | 3.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 3.21s | 3.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 3.21s | 3.21s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 3.21s | 3.21s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE2] | 3.21s | 3.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 3.21s | 3.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 3.19s | 3.19s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 3.12s | 3.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 3.12s | 3.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 3.12s | 3.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 3.12s | 3.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 3.12s | 3.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 3.12s | 3.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 3.11s | 3.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 3.11s | 3.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 3.11s | 3.11s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE] | 3.11s | 3.11s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 3.04s | 3.04s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 3.02s | 3.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 3.02s | 3.02s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 3.02s | 3.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 3.02s | 3.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 3.02s | 3.02s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 3.02s | 3.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 3.01s | 3.01s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair_empty] | 3.01s | 3.01s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 2.93s | 2.93s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 2.92s | 2.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 2.92s | 2.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_sets] | 2.91s | 2.91s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 2.72s | 2.72s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.14.0 | 533 | 393 | 140 | 0 |

---

