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

| Test Case | zisk-v0.15.0<br/>(237.91KiB) | Avg |
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
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_1024b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_128b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_16b_exp_320] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_24b_exp_168] | ❌ SDK Crash | — |
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
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_marius_1_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_1_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_8] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_zkevm_worst_case] | ❌ SDK Crash | — |
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
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 2m 33.10s | 2m 33.10s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH26] | 2m 23.60s | 2m 23.60s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH24] | 2m 12.25s | 2m 12.25s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH25] | 2m 3.05s | 2m 3.05s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH22] | 2m 2.85s | 2m 2.85s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH23] | 2m 0.27s | 2m 0.27s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_square] | 1m 59.66s | 1m 59.66s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALLER] | 1m 54.66s | 1m 54.66s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH18] | 1m 54.45s | 1m 54.45s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH21] | 1m 52.94s | 1m 52.94s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ORIGIN] | 1m 50.74s | 1m 50.74s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EQ-] | 1m 50.02s | 1m 50.02s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty] | 1m 49.75s | 1m 49.75s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 1m 49.45s | 1m 49.45s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob and accessed] | 1m 48.74s | 1m 48.74s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 1m 47.48s | 1m 47.48s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 1m 47.05s | 1m 47.05s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_COINBASE] | 1m 44.84s | 1m 44.84s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_256b_exp_1024] | 1m 44.84s | 1m 44.84s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADDRESS] | 1m 43.56s | 1m 43.56s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH20] | 1m 42.85s | 1m 42.85s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 1m 41.85s | 1m 41.85s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 1m 41.55s | 1m 41.55s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH19] | 1m 39.74s | 1m 39.74s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-six blobs, access latest] | 1m 39.73s | 1m 39.73s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_odd_256b_exp_1024] | 1m 39.35s | 1m 39.35s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 1m 37.45s | 1m 37.45s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 37.44s | 1m 37.44s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SAR-] | 1m 37.31s | 1m 37.31s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH16] | 1m 35.13s | 1m 35.13s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 1m 34.63s | 1m 34.63s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 34.12s | 1m 34.12s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH17] | 1m 33.82s | 1m 33.82s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 1m 33.64s | 1m 33.64s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 31.21s | 1m 31.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 1m 30.91s | 1m 30.91s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-0 bytes] | 1m 30.47s | 1m 30.47s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE new value] | 1m 28.80s | 1m 28.80s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH15] | 1m 26.07s | 1m 26.07s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_3_even] | 1m 22.55s | 1m 22.55s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-100 bytes] | 1m 22.16s | 1m 22.16s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH9] | 1m 21.12s | 1m 21.12s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 19.60s | 1m 19.60s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH14] | 1m 17.80s | 1m 17.80s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 17.60s | 1m 17.60s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 17.56s | 1m 17.56s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SIGNEXTEND-] | 1m 17.51s | 1m 17.51s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_63] | 1m 17.13s | 1m 17.13s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 16.27s | 1m 16.27s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 1m 16.10s | 1m 16.10s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 15.42s | 1m 15.42s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXP-] | 1m 15.05s | 1m 15.05s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 14.80s | 1m 14.80s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 14.72s | 1m 14.72s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SAR] | 1m 13.72s | 1m 13.72s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 13.55s | 1m 13.55s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_127] | 1m 13.32s | 1m 13.32s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SHR] | 1m 13.32s | 1m 13.32s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 12.61s | 1m 12.61s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 1m 11.44s | 1m 11.44s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 11.40s | 1m 11.40s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH12] | 1m 10.10s | 1m 10.10s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH11] | 1m 8.80s | 1m 8.80s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH13] | 1m 8.69s | 1m 8.69s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 1m 7.89s | 1m 7.89s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_one_pairing] | 1m 7.00s | 1m 7.00s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_255] | 1m 6.79s | 1m 6.79s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 5.88s | 1m 5.88s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH8] | 1m 5.48s | 1m 5.48s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MULMOD-mod_bits_191] | 1m 4.62s | 1m 4.62s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-100 bytes] | 1m 4.42s | 1m 4.42s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHL-] | 1m 4.25s | 1m 4.25s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 3.50s | 1m 3.50s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 1m 2.90s | 1m 2.90s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH10] | 1m 2.35s | 1m 2.35s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH7] | 1m 1.40s | 1m 1.40s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 0.50s | 1m 0.50s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 59.77s | 59.77s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_pair] | 59.69s | 59.69s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH6] | 59.39s | 59.39s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 59.32s | 59.32s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_two_pairings] | 59.20s | 59.20s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 58.86s | 58.86s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 57.78s | 57.78s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add_infinities] | 57.22s | 57.22s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 57.09s | 57.09s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 57.00s | 57.00s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH5] | 56.68s | 56.68s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 56.50s | 56.50s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE same value] | 55.88s | 55.88s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 55.21s | 55.21s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_NUMBER] | 55.17s | 55.17s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHR-] | 54.92s | 54.92s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 54.88s | 54.88s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 53.89s | 53.89s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 53.29s | 53.29s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH4] | 53.08s | 53.08s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASLIMIT] | 52.90s | 52.90s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASPRICE] | 52.47s | 52.47s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 51.08s | 51.08s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BLOBBASEFEE] | 50.86s | 50.86s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CHAINID] | 50.49s | 50.49s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000] | 50.09s | 50.09s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 48.47s | 48.47s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH3] | 48.07s | 48.07s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH1] | 47.83s | 47.83s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_LT-] | 47.52s | 47.52s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_TIMESTAMP] | 46.18s | 46.18s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MOD-] | 45.97s | 45.97s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MUL-] | 45.56s | 45.56s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_4_pair] | 45.07s | 45.07s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 44.56s | 44.56s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 44.39s | 44.39s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 44.36s | 44.36s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 44.36s | 44.36s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1] | 43.97s | 43.97s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BASEFEE] | 43.68s | 43.68s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_5_pair] | 43.67s | 43.67s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_0] | 42.76s | 42.76s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 42.58s | 42.58s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 42.57s | 42.57s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP4] | 42.55s | 42.55s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob but access non-existent index] | 42.36s | 42.36s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 42.36s | 42.36s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 41.48s | 41.48s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SGT-] | 41.45s | 41.45s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 41.29s | 41.29s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP11] | 40.76s | 40.76s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP15] | 40.59s | 40.59s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH0] | 40.06s | 40.06s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-no blobs] | 39.45s | 39.45s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 39.08s | 39.08s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB] | 39.05s | 39.05s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GT-] | 38.98s | 38.98s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value] | 38.97s | 38.97s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP9] | 38.77s | 38.77s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH2] | 38.56s | 38.56s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 38.17s | 38.17s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SUB-] | 38.15s | 38.15s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b5b] | 38.06s | 38.06s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SLT-] | 37.88s | 37.88s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-512] | 37.87s | 37.87s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_True] | 37.65s | 37.65s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 37.30s | 37.30s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_False] | 37.15s | 37.15s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 36.98s | 36.98s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_BALANCE] | 36.96s | 36.96s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 36.89s | 36.89s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 36.88s | 36.88s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP12] | 36.74s | 36.74s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 36.37s | 36.37s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP6] | 36.27s | 36.27s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-0 bytes] | 36.26s | 36.26s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP6] | 36.26s | 36.26s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 36.08s | 36.08s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 36.06s | 36.06s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 35.77s | 35.77s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 35.70s | 35.70s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 35.55s | 35.55s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_BALANCE] | 35.50s | 35.50s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 35.25s | 35.25s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP2] | 35.16s | 35.16s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_True] | 34.97s | 34.97s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP3] | 34.97s | 34.97s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 34.77s | 34.77s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP14] | 34.48s | 34.48s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 34.18s | 34.18s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 33.96s | 33.96s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP11] | 33.77s | 33.77s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 33.65s | 33.65s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 33.65s | 33.65s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP13] | 33.55s | 33.55s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP16] | 33.46s | 33.46s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BYTE-] | 33.45s | 33.45s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP4] | 33.37s | 33.37s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP8] | 33.26s | 33.26s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 33.26s | 33.26s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 33.20s | 33.20s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP15] | 33.07s | 33.07s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP3] | 33.07s | 33.07s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP7] | 32.98s | 32.98s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP5] | 32.67s | 32.67s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP12] | 32.66s | 32.66s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP9] | 32.65s | 32.65s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP5] | 32.55s | 32.55s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP2] | 32.35s | 32.35s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_0] | 32.35s | 32.35s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 32.28s | 32.28s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP16] | 32.16s | 32.16s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP10] | 32.07s | 32.07s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_False] | 32.06s | 32.06s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP10] | 31.96s | 31.96s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-100 bytes] | 31.54s | 31.54s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP1] | 31.47s | 31.47s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_10000] | 31.46s | 31.46s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 31.45s | 31.45s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_1000] | 31.25s | 31.25s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP7] | 31.25s | 31.25s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 30.84s | 30.84s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADD-] | 30.68s | 30.68s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-5KiB] | 30.44s | 30.44s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SMOD-] | 30.44s | 30.44s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 30.34s | 30.34s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP8] | 29.96s | 29.96s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_AND-] | 29.45s | 29.45s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 29.38s | 29.38s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_OR-] | 29.35s | 29.35s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP1] | 29.34s | 29.34s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP13] | 29.17s | 29.17s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SWAP14] | 29.07s | 29.07s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_XOR-] | 28.94s | 28.94s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSLOAD] | 28.85s | 28.85s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 28.76s | 28.76s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SLOAD] | 28.75s | 28.75s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_True] | 28.67s | 28.67s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 28.65s | 28.65s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-100 bytes] | 28.45s | 28.45s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 27.36s | 27.36s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 26.66s | 26.66s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_diff_acc] | 26.58s | 26.58s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 26.14s | 26.14s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_b] | 25.77s | 25.77s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 25.65s | 25.65s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 25.64s | 25.64s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-1MiB] | 25.35s | 25.35s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_True] | 25.34s | 25.34s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-00] | 25.24s | 25.24s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 25.05s | 25.05s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-10KiB] | 25.04s | 25.04s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_False] | 24.54s | 24.54s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b5b] | 24.44s | 24.44s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_True] | 24.27s | 24.27s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_False] | 24.15s | 24.15s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 23.75s | 23.75s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 23.55s | 23.55s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value] | 23.24s | 23.24s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 23.14s | 23.14s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_False] | 22.70s | 22.70s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-10KiB] | 22.35s | 22.35s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSLOAD] | 22.14s | 22.14s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 21.84s | 21.84s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_diff_acc] | 21.35s | 21.35s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-1MiB] | 21.28s | 21.28s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 21.03s | 21.03s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 20.94s | 20.94s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_b] | 20.14s | 20.14s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul] | 19.83s | 19.83s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_a] | 19.23s | 19.23s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 19.04s | 19.04s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 18.56s | 18.56s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_100000] | 17.85s | 17.85s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_True] | 17.74s | 17.74s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-10KiB] | 17.24s | 17.24s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_False] | 16.94s | 16.94s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 16.73s | 16.73s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-1MiB] | 16.44s | 16.44s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b] | 16.36s | 16.36s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_False] | 15.83s | 15.83s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 15.34s | 15.34s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_True] | 15.24s | 15.24s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 15.13s | 15.13s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_True] | 14.23s | 14.23s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-1MiB] | 13.93s | 13.93s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-10KiB] | 13.83s | 13.83s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-max code size] | 13.73s | 13.73s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b] | 13.72s | 13.72s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 13.63s | 13.63s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 13.33s | 13.33s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_True] | 13.33s | 13.33s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 12.53s | 12.53s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 12.43s | 12.43s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_False] | 11.93s | 11.93s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 11.82s | 11.82s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 11.53s | 11.53s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 11.42s | 11.42s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 10.77s | 10.77s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_True] | 10.03s | 10.03s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 9.43s | 9.43s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 9.34s | 9.34s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 9.23s | 9.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 8.53s | 8.53s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_False] | 8.33s | 8.33s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 8.03s | 8.03s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 7.92s | 7.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 7.82s | 7.82s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value] | 7.62s | 7.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 7.62s | 7.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 7.62s | 7.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 7.52s | 7.52s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_2_scalar] | 7.12s | 7.12s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 7.02s | 7.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 7.01s | 7.01s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 6.92s | 6.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 6.82s | 6.82s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 6.72s | 6.72s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 6.72s | 6.72s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_2_scalar] | 6.72s | 6.72s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000000] | 6.62s | 6.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 6.55s | 6.55s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 6.42s | 6.42s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE] | 6.22s | 6.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 6.12s | 6.12s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_REVERT] | 6.12s | 6.12s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value] | 6.02s | 6.02s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_RETURN] | 6.02s | 6.02s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 6.02s | 6.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 5.92s | 5.92s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 5.92s | 5.92s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 5.92s | 5.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 5.82s | 5.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 5.82s | 5.82s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_False] | 5.82s | 5.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 5.82s | 5.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 5.72s | 5.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 5.72s | 5.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 5.72s | 5.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 5.72s | 5.72s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 5.62s | 5.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 5.62s | 5.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE2] | 5.62s | 5.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 5.53s | 5.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 5.52s | 5.52s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 5.52s | 5.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 5.52s | 5.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 5.52s | 5.52s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 5.52s | 5.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 5.52s | 5.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 5.52s | 5.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 5.51s | 5.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 5.51s | 5.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 5.42s | 5.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 5.42s | 5.42s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE2] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 5.41s | 5.41s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 5.41s | 5.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 5.32s | 5.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE] | 5.32s | 5.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE2] | 5.32s | 5.32s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 5.32s | 5.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 5.32s | 5.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 5.31s | 5.31s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_zero_input] | 5.31s | 5.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 5.25s | 5.25s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 5.24s | 5.24s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 5.22s | 5.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 5.22s | 5.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 5.22s | 5.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 5.22s | 5.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 5.22s | 5.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 5.22s | 5.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 5.22s | 5.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 5.11s | 5.11s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 5.11s | 5.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 5.02s | 5.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 5.01s | 5.01s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair] | 5.01s | 5.01s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 5.01s | 5.01s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 4.92s | 4.92s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE2] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 4.92s | 4.92s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 4.92s | 4.92s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 4.82s | 4.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 4.82s | 4.82s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_3_pair] | 4.82s | 4.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 4.82s | 4.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 4.72s | 4.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 4.72s | 4.72s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_sets] | 4.62s | 4.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 4.62s | 4.62s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair_empty] | 4.62s | 4.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 4.62s | 4.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 4.62s | 4.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 4.61s | 4.61s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 4.61s | 4.61s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.15.0 | 533 | 386 | 147 | 0 |

---

## reth


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | zisk-v0.15.0<br/>(237.91KiB) | Avg |
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
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_128b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_16b_exp_320] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_24b_exp_168] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_256b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_256] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_40] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_32b_exp_96] | ❌ SDK Crash | — |
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
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n3] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_example_1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_1_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_2_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_marius_1_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_3_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_4_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_1_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_8] | ❌ SDK Crash | — |
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
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_30M-blockchain_test-bls12_g1add] | 2m 16.69s | 2m 16.69s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH27] | 2m 10.18s | 2m 10.18s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_191] | 2m 7.99s | 2m 7.99s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_qube] | 2m 7.47s | 2m 7.47s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty-opcode_REVERT] | 2m 6.88s | 2m 6.88s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_common_200n1] | 2m 6.26s | 2m 6.26s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH30] | 2m 5.66s | 2m 5.66s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SGT-] | 2m 5.56s | 2m 5.56s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH28] | 2m 2.62s | 2m 2.62s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADDRESS] | 2m 2.16s | 2m 2.16s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ORIGIN] | 2m 0.45s | 2m 0.45s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH29] | 2m 0.04s | 2m 0.04s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_COINBASE] | 1m 59.24s | 1m 59.24s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_255] | 1m 57.95s | 1m 57.95s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_255] | 1m 57.15s | 1m 57.15s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_add_infinities] | 1m 56.60s | 1m 56.60s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH26] | 1m 56.34s | 1m 56.34s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EQ-] | 1m 55.73s | 1m 55.73s |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CALLER] | 1m 55.67s | 1m 55.67s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_CALLCODE] | 1m 52.84s | 1m 52.84s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 1m 52.26s | 1m 52.26s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH24] | 1m 52.14s | 1m 52.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_CALL] | 1m 51.67s | 1m 51.67s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_127] | 1m 50.34s | 1m 50.34s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty-opcode_RETURN] | 1m 49.84s | 1m 49.84s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH25] | 1m 49.83s | 1m 49.83s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DIV-1] | 1m 48.23s | 1m 48.23s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_STATICCALL] | 1m 47.76s | 1m 47.76s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_127] | 1m 43.48s | 1m 43.48s |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 1m 43.17s | 1m 43.17s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-one-loop] | 1m 43.11s | 1m 43.11s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_2_square] | 1m 42.61s | 1m 42.61s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_127] | 1m 41.44s | 1m 41.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_CALL] | 1m 41.34s | 1m 41.34s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH23] | 1m 39.50s | 1m 39.50s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_CALLCODE] | 1m 37.83s | 1m 37.83s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_512b_exp_1024] | 1m 37.50s | 1m 37.50s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 1m 35.03s | 1m 35.03s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 1m 34.63s | 1m 34.63s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH22] | 1m 34.07s | 1m 34.07s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero-loop] | 1m 33.14s | 1m 33.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_STATICCALL] | 1m 32.95s | 1m 32.95s |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_30M-blockchain_test-empty] | 1m 31.10s | 1m 31.10s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-six blobs, access latest] | 1m 31.03s | 1m 31.03s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH19] | 1m 29.02s | 1m 29.02s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SMOD-] | 1m 28.00s | 1m 28.00s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 1m 27.61s | 1m 27.61s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_ADDMOD-mod_bits_63] | 1m 27.23s | 1m 27.23s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_even_1024b_exp_1024] | 1m 26.95s | 1m 26.95s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob and accessed] | 1m 26.42s | 1m 26.42s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MOD-] | 1m 25.81s | 1m 25.81s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH21] | 1m 24.95s | 1m 24.95s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH20] | 1m 23.77s | 1m 23.77s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH18] | 1m 22.55s | 1m 22.55s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_SMOD-mod_bits_63] | 1m 22.07s | 1m 22.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 20.01s | 1m 20.01s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH17] | 1m 19.91s | 1m 19.91s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 19.29s | 1m 19.29s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH16] | 1m 18.60s | 1m 18.60s |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_30M-blockchain_test-op_MOD-mod_bits_63] | 1m 17.52s | 1m 17.52s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 17.39s | 1m 17.39s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 16.85s | 1m 16.85s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of zero data-opcode_REVERT] | 1m 16.69s | 1m 16.69s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 16.59s | 1m 16.59s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 16.33s | 1m 16.33s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_qube] | 1m 16.11s | 1m 16.11s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 15.38s | 1m 15.38s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 14.36s | 1m 14.36s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 14.08s | 1m 14.08s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_guido_3_even] | 1m 13.92s | 1m 13.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_one_pairing] | 1m 13.70s | 1m 13.70s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 12.90s | 1m 12.90s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 1m 11.72s | 1m 11.72s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 10.88s | 1m 10.88s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 10.52s | 1m 10.52s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 9.02s | 1m 9.02s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_nagydani_1_square] | 1m 8.96s | 1m 8.96s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 8.91s | 1m 8.91s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH15] | 1m 8.39s | 1m 8.39s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 7.98s | 1m 7.98s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 7.50s | 1m 7.50s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH14] | 1m 7.22s | 1m 7.22s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 6.89s | 1m 6.89s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE new value] | 1m 6.80s | 1m 6.80s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 6.71s | 1m 6.71s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of zero data-opcode_RETURN] | 1m 6.63s | 1m 6.63s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 6.29s | 1m 6.29s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 6.20s | 1m 6.20s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 5.50s | 1m 5.50s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 5.39s | 1m 5.39s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH13] | 1m 5.00s | 1m 5.00s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 4.58s | 1m 4.58s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 4.55s | 1m 4.55s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_pair] | 1m 3.49s | 1m 3.49s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH11] | 1m 1.10s | 1m 1.10s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_two_pairings] | 59.87s | 59.87s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH12] | 59.77s | 59.77s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 57.39s | 57.39s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH10] | 56.27s | 56.27s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_True] | 56.13s | 56.13s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 54.58s | 54.58s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH9] | 54.17s | 54.17s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SSTORE same value] | 54.17s | 54.17s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_True-key_mut_False] | 54.06s | 54.06s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASPRICE] | 51.15s | 51.15s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 50.48s | 50.48s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1] | 49.97s | 49.97s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BASEFEE] | 49.80s | 49.80s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 48.87s | 48.87s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BLOBBASEFEE] | 48.48s | 48.48s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH7] | 48.39s | 48.39s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH8] | 47.86s | 47.86s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_TIMESTAMP] | 47.65s | 47.65s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_4_pair] | 46.60s | 46.60s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SAR-] | 45.48s | 45.48s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_5_pair] | 45.26s | 45.26s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000] | 44.86s | 44.86s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-5b] | 44.69s | 44.69s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 44.67s | 44.67s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_NUMBER] | 44.36s | 44.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH6] | 44.06s | 44.06s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 44.02s | 44.02s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CHAINID] | 43.89s | 43.89s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 43.78s | 43.78s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH0] | 43.56s | 43.56s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_0] | 42.97s | 42.97s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GASLIMIT] | 42.87s | 42.87s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 42.66s | 42.66s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH5] | 42.47s | 42.47s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 42.35s | 42.35s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 41.87s | 41.87s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHR-] | 40.98s | 40.98s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-0 bytes] | 40.59s | 40.59s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SHR] | 40.46s | 40.46s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 40.45s | 40.45s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 39.47s | 39.47s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-100 bytes] | 39.16s | 39.16s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 38.77s | 38.77s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH4] | 38.77s | 38.77s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_30M-blockchain_test-shift_right_SAR] | 38.76s | 38.76s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 38.67s | 38.67s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0 bytes] | 38.47s | 38.47s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-100 bytes] | 37.97s | 37.97s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 37.46s | 37.46s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SHL-] | 36.88s | 36.88s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-one blob but access non-existent index] | 35.86s | 35.86s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 35.38s | 35.38s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-0 bytes] | 35.26s | 35.26s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 34.76s | 34.76s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH3] | 34.06s | 34.06s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 33.75s | 33.75s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SIGNEXTEND-] | 32.46s | 32.46s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_False] | 32.45s | 32.45s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 32.16s | 32.16s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 31.96s | 31.96s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_1000] | 31.86s | 31.86s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_True-non_zero_value_True] | 31.86s | 31.86s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SLT-] | 31.46s | 31.46s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 31.44s | 31.44s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 31.16s | 31.16s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 30.95s | 30.95s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_False] | 30.87s | 30.87s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_30M-blockchain_test-from_origin_False-non_zero_value_True] | 30.77s | 30.77s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 30.66s | 30.66s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 30.56s | 30.56s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 30.45s | 30.45s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 30.35s | 30.35s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_10000] | 29.97s | 29.97s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_30M-blockchain_test-calldata_length_0] | 29.95s | 29.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 29.85s | 29.85s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 29.77s | 29.77s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_False] | 29.57s | 29.57s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 29.55s | 29.55s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 29.46s | 29.46s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_30M-blockchain_test-no blobs] | 29.37s | 29.37s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_30M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 29.26s | 29.26s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_True-opcode_BALANCE] | 29.25s | 29.25s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_30M-blockchain_test-dense_val_mut_False-key_mut_True] | 29.25s | 29.25s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 29.24s | 29.24s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-max code size] | 28.95s | 28.95s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 28.76s | 28.76s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_MUL-] | 28.46s | 28.46s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_EXP-] | 28.39s | 28.39s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 27.94s | 27.94s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 27.75s | 27.75s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_SUB-] | 27.64s | 27.64s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 27.57s | 27.57s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP3] | 27.55s | 27.55s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 27.54s | 27.54s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP7] | 27.24s | 27.24s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 27.16s | 27.16s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP12] | 27.15s | 27.15s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP10] | 26.94s | 26.94s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 26.86s | 26.86s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 26.84s | 26.84s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP15] | 26.75s | 26.75s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_target_False-opcode_BALANCE] | 26.74s | 26.74s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 26.74s | 26.74s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_BYTE-] | 26.74s | 26.74s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 26.64s | 26.64s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-10KiB] | 26.45s | 26.45s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_False-1MiB] | 26.44s | 26.44s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 26.35s | 26.35s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP16] | 26.25s | 26.25s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH2] | 26.24s | 26.24s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 26.24s | 26.24s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_ADD-] | 25.95s | 25.95s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 25.57s | 25.57s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 25.57s | 25.57s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 25.34s | 25.34s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_PUSH1] | 25.25s | 25.25s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP1] | 25.24s | 25.24s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP4] | 25.24s | 25.24s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-SLOAD] | 25.24s | 25.24s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP5] | 25.14s | 25.14s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP11] | 25.06s | 25.06s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 25.04s | 25.04s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0 bytes] | 24.95s | 24.95s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP13] | 24.94s | 24.94s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-00] | 24.94s | 24.94s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 24.68s | 24.68s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-100 bytes] | 24.64s | 24.64s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_30M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 24.64s | 24.64s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP14] | 24.56s | 24.56s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP2] | 24.35s | 24.35s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP9] | 24.35s | 24.35s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 24.34s | 24.34s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-100 bytes] | 24.04s | 24.04s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b5b] | 23.84s | 23.84s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 23.64s | 23.64s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 23.45s | 23.45s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP6] | 23.34s | 23.34s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_GT-] | 23.34s | 23.34s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-10KiB] | 23.23s | 23.23s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_False-1MiB] | 22.94s | 22.94s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_False] | 22.73s | 22.73s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 22.64s | 22.64s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_DUP8] | 22.34s | 22.34s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 22.24s | 22.24s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_LT-] | 22.23s | 22.23s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_OR-] | 21.93s | 21.93s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_True-key_mut_True] | 21.85s | 21.85s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_XOR-] | 21.74s | 21.74s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_AND-] | 21.44s | 21.44s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-512] | 21.43s | 21.43s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 21.24s | 21.24s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 20.93s | 20.93s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b5b] | 20.53s | 20.53s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-1KiB] | 20.33s | 20.33s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 20.04s | 20.04s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-605b] | 19.04s | 19.04s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value] | 19.03s | 19.03s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 18.93s | 18.93s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul] | 18.73s | 18.73s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 18.03s | 18.03s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSLOAD] | 17.54s | 17.54s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-10KiB] | 17.44s | 17.44s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 17.43s | 17.43s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 17.33s | 17.33s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-1MiB] | 17.13s | 17.13s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_False] | 16.93s | 16.93s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 16.93s | 16.93s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-1MiB] | 16.83s | 16.83s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 16.73s | 16.73s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 16.64s | 16.64s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_True] | 16.43s | 16.43s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_diff_acc] | 16.04s | 16.04s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 15.64s | 15.64s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_False-empty_authority_True] | 15.43s | 15.43s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_30M-blockchain_test-615b5b] | 15.43s | 15.43s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 15.13s | 15.13s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_30M-blockchain_test-5KiB] | 14.73s | 14.73s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_dst_True-10KiB] | 14.54s | 14.54s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 14.44s | 14.44s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 14.13s | 14.13s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 14.03s | 14.03s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_False] | 13.73s | 13.73s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_diff_acc_to_b] | 13.63s | 13.63s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_delegation_True-empty_authority_True] | 13.55s | 13.55s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_src_dst_True-max code size] | 13.43s | 13.43s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_diff_acc] | 13.03s | 13.03s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value] | 12.93s | 12.93s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_30M-blockchain_test-value_bearing_False] | 12.83s | 12.83s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 12.82s | 12.82s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_b] | 12.32s | 12.32s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 12.23s | 12.23s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 11.72s | 11.72s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_30M-blockchain_test-mod_vul_example_2] | 11.43s | 11.43s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 11.13s | 11.13s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_30M-blockchain_test-case_id_a_to_a] | 11.03s | 11.03s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_True] | 11.03s | 11.03s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_30M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 10.93s | 10.93s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 10.84s | 10.84s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSLOAD] | 10.22s | 10.22s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 10.22s | 10.22s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 8.93s | 8.93s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_True] | 8.22s | 8.22s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_100000] | 8.13s | 8.13s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 8.03s | 8.03s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_1_2_2_scalar] | 8.02s | 8.02s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_30M-blockchain_test-val_mut_False-key_mut_False] | 7.73s | 7.73s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_2_scalar] | 7.52s | 7.52s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE] | 7.32s | 7.32s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_30M-blockchain_test-zero_byte_False] | 7.12s | 7.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 6.86s | 6.86s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 6.82s | 6.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 6.52s | 6.52s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 6.51s | 6.51s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 6.32s | 6.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 6.23s | 6.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 6.22s | 6.22s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value] | 6.22s | 6.22s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 6.12s | 6.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 6.11s | 6.11s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_True] | 6.02s | 6.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 5.92s | 5.92s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_30M-blockchain_test-opcode_CREATE2] | 5.92s | 5.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 5.92s | 5.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 5.92s | 5.92s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 5.92s | 5.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 5.82s | 5.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 5.82s | 5.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 5.82s | 5.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 5.82s | 5.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE2] | 5.82s | 5.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 5.82s | 5.82s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair] | 5.81s | 5.81s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_zero_input] | 5.72s | 5.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 5.72s | 5.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes with value-opcode_CREATE] | 5.72s | 5.72s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 5.72s | 5.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 5.72s | 5.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 5.71s | 5.71s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 5.62s | 5.62s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 5.62s | 5.62s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 5.62s | 5.62s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_30M-blockchain_test_from_state_test-value_bearing_False] | 5.53s | 5.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 5.52s | 5.52s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE2] | 5.52s | 5.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 5.52s | 5.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 5.42s | 5.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 5.42s | 5.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 5.32s | 5.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 5.32s | 5.32s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_30M-blockchain_test-mem_size_1000000] | 5.32s | 5.32s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 5.32s | 5.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 5.32s | 5.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 5.32s | 5.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 5.32s | 5.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 5.22s | 5.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 5.22s | 5.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 5.22s | 5.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 5.22s | 5.22s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_30M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 5.22s | 5.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 5.21s | 5.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 5.12s | 5.12s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_RETURN] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 5.12s | 5.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 5.12s | 5.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 5.12s | 5.12s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_30M-blockchain_test-1MiB of zero data-opcode_REVERT] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 5.02s | 5.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 5.02s | 5.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 5.02s | 5.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 5.01s | 5.01s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0 bytes without value-opcode_CREATE] | 5.01s | 5.01s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_30M-blockchain_test] | 5.01s | 5.01s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 4.92s | 4.92s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 4.92s | 4.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_2_sets] | 4.92s | 4.92s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 4.91s | 4.91s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 4.91s | 4.91s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 4.83s | 4.83s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 4.82s | 4.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE] | 4.82s | 4.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 4.82s | 4.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 4.82s | 4.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 4.81s | 4.81s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 4.72s | 4.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-max code size with zero data-opcode_CREATE2] | 4.72s | 4.72s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_1_pair_empty] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 4.72s | 4.72s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_30M-blockchain_test-ec_pairing_3_pair] | 4.72s | 4.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 4.72s | 4.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 4.71s | 4.71s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 4.71s | 4.71s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 4.61s | 4.61s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 4.61s | 4.61s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 4.52s | 4.52s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_30M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 4.52s | 4.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_30M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 4.42s | 4.42s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.15.0 | 533 | 407 | 126 | 0 |

---

