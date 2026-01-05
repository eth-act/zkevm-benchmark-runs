# 8x5090 - 60M-gas-limit

## Gas Limit Configuration - Proving

EEST benchmarks with 60M-gas-limit gas limit (proving results) on **8x5090** hardware.

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
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0 bytes] | ❌ SDK Crash | — |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-max code size] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_CALLCODE] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_CALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_STATICCALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_CALLCODE] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_CALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_STATICCALL] | ❌ SDK Crash | — |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODECOPY] | ❌ SDK Crash | — |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODEHASH] | ❌ SDK Crash | — |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODESIZE] | ❌ SDK Crash | — |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test-contract_balance_0] | ❌ SDK Crash | — |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test-contract_balance_1] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add_1_2] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_one_pairing] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_two_pairings] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_2_pair] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DIV-0] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DIV-1] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXP-] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SDIV-0] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SDIV-1] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SIGNEXTEND-] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_127] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_191] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_255] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_63] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_127] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_191] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_255] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_63] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_127] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_191] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_255] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_63] | ❌ SDK Crash | — |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SAR-] | ❌ SDK Crash | — |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SHL-] | ❌ SDK Crash | — |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SHR-] | ❌ SDK Crash | — |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test-shift_right_SAR] | ❌ SDK Crash | — |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test-shift_right_SHR] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_60M-blockchain_test-blake2f] | ❌ SDK Crash | — |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_COINBASE] | ❌ SDK Crash | — |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PREVRANDAO] | ❌ SDK Crash | — |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_60M-blockchain_test] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_fp_to_g1] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_fp_to_g2] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g1add] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g1msm] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g2add] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g2msm] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_pairing_check] | ❌ SDK Crash | — |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ADDRESS] | ❌ SDK Crash | — |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLER] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | ❌ SDK Crash | — |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | ❌ SDK Crash | — |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty] | ❌ SDK Crash | — |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-one-loop] | ❌ SDK Crash | — |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero-loop] | ❌ SDK Crash | — |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-0 bytes] | ❌ SDK Crash | — |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-100 bytes] | ❌ SDK Crash | — |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EQ-] | ❌ SDK Crash | — |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_60M-blockchain_test-ecrecover] | ❌ SDK Crash | — |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_60M-blockchain_test] | ❌ SDK Crash | — |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_60M-blockchain_test] | ❌ SDK Crash | — |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0 bytes] | ❌ SDK Crash | — |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-100 bytes] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_100000] | ❌ SDK Crash | — |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-5b] | ❌ SDK Crash | — |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b5b] | ❌ SDK Crash | — |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b5b] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1024_exp_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1045_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1360_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_256_exp_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_264_exp_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_128] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_32] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_36] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_40] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_64] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_65] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_400_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_408_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_408_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_600_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_600_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_616_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_677_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_765_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_767_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_800_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_800_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_852_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_867_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_8_exp_648] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_8_exp_896] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_996_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_1024b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_128b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_16b_exp_320] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_24b_exp_168] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_256b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_256] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_40] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_96] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_512b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_64b_exp_512] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_8b_exp_896] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_208_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_215_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_298_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_1024b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_128b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_256b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_256] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_96] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_cover_windows] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_512b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_64b_exp_512] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_3] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_4] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1152n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1349n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1360n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1360n2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n3] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_example_1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_example_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_1_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_2_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_3_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_marius_1_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_1_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_2_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_8] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_zkevm_worst_case] | ❌ SDK Crash | — |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_60M-blockchain_test-point_evaluation] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH10] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH11] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH12] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH13] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH14] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH15] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH16] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH17] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH18] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH19] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH20] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH21] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH22] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH23] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH24] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH25] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH26] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH27] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH28] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH29] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH30] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH31] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH32] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH8] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH9] | ❌ SDK Crash | — |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE new value] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of zero data-opcode_RETURN] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of zero data-opcode_REVERT] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty-opcode_RETURN] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty-opcode_REVERT] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLCODE] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALL] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DELEGATECALL] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_STATICCALL] | ❌ SDK Crash | — |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-one blob and accessed] | ❌ SDK Crash | — |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-six blobs, access latest] | ❌ SDK Crash | — |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ORIGIN] | ❌ SDK Crash | — |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 2m 34.02s | 2m 34.02s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_63] | 2m 17.36s | 2m 17.36s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_255] | 2m 17.14s | 2m 17.14s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_191] | 2m 16.45s | 2m 16.45s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_127] | 2m 15.78s | 2m 15.78s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 2m 8.49s | 2m 8.49s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 2m 7.56s | 2m 7.56s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH7] | 2m 7.36s | 2m 7.36s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH6] | 2m 5.56s | 2m 5.56s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 2m 4.64s | 2m 4.64s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 2m 3.27s | 2m 3.27s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 2m 3.25s | 2m 3.25s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 2m 3.03s | 2m 3.03s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 2m 2.84s | 2m 2.84s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 2m 1.44s | 2m 1.44s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 2m 0.74s | 2m 0.74s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 59.61s | 1m 59.61s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 59.44s | 1m 59.44s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add_infinities] | 1m 58.45s | 1m 58.45s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 58.25s | 1m 58.25s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH5] | 1m 54.16s | 1m 54.16s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH4] | 1m 49.07s | 1m 49.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 48.42s | 1m 48.42s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_4_pair] | 1m 44.32s | 1m 44.32s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 1m 43.32s | 1m 43.32s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE same value] | 1m 42.13s | 1m 42.13s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH3] | 1m 41.53s | 1m 41.53s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 1m 39.13s | 1m 39.13s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_5_pair] | 1m 36.43s | 1m 36.43s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BASEFEE] | 1m 35.94s | 1m 35.94s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CHAINID] | 1m 34.72s | 1m 34.72s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASPRICE] | 1m 32.96s | 1m 32.96s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 32.85s | 1m 32.85s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 1m 32.63s | 1m 32.63s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_TIMESTAMP] | 1m 31.15s | 1m 31.15s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000] | 1m 30.77s | 1m 30.77s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BLOBBASEFEE] | 1m 30.72s | 1m 30.72s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 1m 27.72s | 1m 27.72s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_0] | 1m 25.65s | 1m 25.65s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASLIMIT] | 1m 25.36s | 1m 25.36s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1] | 1m 24.92s | 1m 24.92s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH0] | 1m 24.91s | 1m 24.91s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH2] | 1m 21.52s | 1m 21.52s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 21.32s | 1m 21.32s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 1m 21.19s | 1m 21.19s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 1m 20.66s | 1m 20.66s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH1] | 1m 20.22s | 1m 20.22s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_NUMBER] | 1m 20.12s | 1m 20.12s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-512] | 1m 19.71s | 1m 19.71s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_LT-] | 1m 18.21s | 1m 18.21s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GT-] | 1m 17.60s | 1m 17.60s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value] | 1m 16.64s | 1m 16.64s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 1m 15.90s | 1m 15.90s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 1m 15.83s | 1m 15.83s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SGT-] | 1m 15.32s | 1m 15.32s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 1m 14.80s | 1m 14.80s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 1m 14.49s | 1m 14.49s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_BALANCE] | 1m 14.33s | 1m 14.33s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_BALANCE] | 1m 14.01s | 1m 14.01s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB] | 1m 13.97s | 1m 13.97s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 1m 13.70s | 1m 13.70s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 1m 13.20s | 1m 13.20s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 1m 13.09s | 1m 13.09s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP14] | 1m 12.62s | 1m 12.62s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 12.29s | 1m 12.29s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 1m 12.11s | 1m 12.11s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-0 bytes] | 1m 12.10s | 1m 12.10s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | 1m 12.03s | 1m 12.03s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MUL-] | 1m 12.00s | 1m 12.00s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 1m 11.89s | 1m 11.89s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 1m 11.31s | 1m 11.31s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 1m 11.10s | 1m 11.10s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP13] | 1m 10.81s | 1m 10.81s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP2] | 1m 10.71s | 1m 10.71s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP11] | 1m 10.70s | 1m 10.70s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 1m 10.69s | 1m 10.69s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-one blob but access non-existent index] | 1m 10.11s | 1m 10.11s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 1m 10.10s | 1m 10.10s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP14] | 1m 9.51s | 1m 9.51s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP9] | 1m 9.39s | 1m 9.39s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | 1m 9.35s | 1m 9.35s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP10] | 1m 9.31s | 1m 9.31s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP16] | 1m 9.31s | 1m 9.31s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-no blobs] | 1m 9.18s | 1m 9.18s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP3] | 1m 9.12s | 1m 9.12s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP7] | 1m 9.09s | 1m 9.09s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP1] | 1m 9.09s | 1m 9.09s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP12] | 1m 9.02s | 1m 9.02s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 1m 8.29s | 1m 8.29s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 1m 8.26s | 1m 8.26s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP15] | 1m 8.00s | 1m 8.00s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSLOAD] | 1m 7.91s | 1m 7.91s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MOD-] | 1m 7.79s | 1m 7.79s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP8] | 1m 7.78s | 1m 7.78s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_0] | 1m 7.62s | 1m 7.62s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP5] | 1m 7.51s | 1m 7.51s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-100 bytes] | 1m 7.41s | 1m 7.41s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 1m 7.20s | 1m 7.20s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP6] | 1m 7.19s | 1m 7.19s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 1m 6.59s | 1m 6.59s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_True] | 1m 6.50s | 1m 6.50s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP10] | 1m 6.11s | 1m 6.11s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP7] | 1m 6.10s | 1m 6.10s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP8] | 1m 6.03s | 1m 6.03s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SLT-] | 1m 5.79s | 1m 5.79s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP4] | 1m 5.78s | 1m 5.78s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP11] | 1m 5.71s | 1m 5.71s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP12] | 1m 5.71s | 1m 5.71s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP3] | 1m 5.50s | 1m 5.50s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP1] | 1m 5.10s | 1m 5.10s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ADD-] | 1m 4.83s | 1m 4.83s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP15] | 1m 4.80s | 1m 4.80s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_False] | 1m 4.59s | 1m 4.59s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP6] | 1m 4.13s | 1m 4.13s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 1m 4.01s | 1m 4.01s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 1m 3.79s | 1m 3.79s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_False] | 1m 3.74s | 1m 3.74s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_True] | 1m 3.70s | 1m 3.70s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP2] | 1m 3.51s | 1m 3.51s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP16] | 1m 3.48s | 1m 3.48s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 1m 3.30s | 1m 3.30s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 1m 3.13s | 1m 3.13s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 1m 3.11s | 1m 3.11s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP13] | 1m 3.09s | 1m 3.09s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SUB-] | 1m 2.99s | 1m 2.99s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BYTE-] | 1m 2.69s | 1m 2.69s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP5] | 1m 2.40s | 1m 2.40s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP9] | 1m 2.28s | 1m 2.28s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP4] | 1m 2.11s | 1m 2.11s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 1m 2.10s | 1m 2.10s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 1m 1.90s | 1m 1.90s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 1m 1.20s | 1m 1.20s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_1000] | 1m 1.09s | 1m 1.09s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 1.09s | 1m 1.09s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_10000] | 1m 1.08s | 1m 1.08s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SLOAD] | 1m 0.38s | 1m 0.38s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 1m 0.07s | 1m 0.07s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 60.00s | 60.00s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 59.47s | 59.47s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_AND-] | 59.28s | 59.28s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 59.19s | 59.19s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_OR-] | 58.71s | 58.71s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 58.40s | 58.40s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_XOR-] | 58.20s | 58.20s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 57.79s | 57.79s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 57.22s | 57.22s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-100 bytes] | 56.40s | 56.40s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-max code size] | 56.10s | 56.10s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 53.39s | 53.39s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 51.37s | 51.37s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_True] | 51.10s | 51.10s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_diff_acc] | 51.07s | 51.07s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value] | 50.69s | 50.69s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_True] | 50.17s | 50.17s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_False] | 49.37s | 49.37s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SMOD-] | 48.78s | 48.78s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-00] | 48.27s | 48.27s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_True] | 47.99s | 47.99s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSLOAD] | 47.37s | 47.37s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-10KiB] | 47.28s | 47.28s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-1MiB] | 47.27s | 47.27s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_False] | 46.90s | 46.90s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_False] | 46.68s | 46.68s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 45.96s | 45.96s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-10KiB] | 45.28s | 45.28s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 44.59s | 44.59s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-1MiB] | 44.58s | 44.58s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 43.77s | 43.77s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 43.18s | 43.18s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 42.48s | 42.48s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_diff_acc] | 42.38s | 42.38s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_True] | 41.97s | 41.97s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_b] | 40.36s | 40.36s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_a] | 38.56s | 38.56s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_b] | 38.26s | 38.26s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-5KiB] | 36.76s | 36.76s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b] | 35.45s | 35.45s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 34.85s | 34.85s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-1MiB] | 34.06s | 34.06s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 33.58s | 33.58s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-10KiB] | 33.55s | 33.55s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 33.25s | 33.25s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-1MiB] | 32.95s | 32.95s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul] | 32.45s | 32.45s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 32.16s | 32.16s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 31.15s | 31.15s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 31.06s | 31.06s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_False] | 30.15s | 30.15s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 30.05s | 30.05s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b] | 29.27s | 29.27s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-10KiB] | 29.05s | 29.05s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 28.66s | 28.66s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 27.44s | 27.44s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_False] | 26.95s | 26.95s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_False] | 25.35s | 25.35s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 25.23s | 25.23s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_True] | 25.23s | 25.23s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_True] | 24.54s | 24.54s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_True] | 23.04s | 23.04s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 22.95s | 22.95s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 22.73s | 22.73s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 21.23s | 21.23s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 21.14s | 21.14s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 18.43s | 18.43s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 18.23s | 18.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 17.53s | 17.53s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_True] | 16.73s | 16.73s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_False] | 16.43s | 16.43s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 12.63s | 12.63s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 12.53s | 12.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 11.53s | 11.53s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_2_scalar] | 11.43s | 11.43s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 11.14s | 11.14s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value] | 11.13s | 11.13s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 10.82s | 10.82s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value] | 10.02s | 10.02s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 9.82s | 9.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 9.73s | 9.73s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 9.43s | 9.43s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE] | 9.32s | 9.32s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 9.22s | 9.22s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 9.02s | 9.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 8.92s | 8.92s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_False] | 8.92s | 8.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 8.83s | 8.83s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_REVERT] | 8.82s | 8.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 8.82s | 8.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 8.53s | 8.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 8.42s | 8.42s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 8.32s | 8.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 8.22s | 8.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 8.22s | 8.22s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_RETURN] | 8.22s | 8.22s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 8.22s | 8.22s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000000] | 7.92s | 7.92s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE] | 7.82s | 7.82s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 7.72s | 7.72s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 7.72s | 7.72s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 7.72s | 7.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE] | 7.62s | 7.62s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 7.42s | 7.42s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 7.42s | 7.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 7.32s | 7.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE2] | 7.32s | 7.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE2] | 7.32s | 7.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 7.12s | 7.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 7.12s | 7.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_2_scalar] | 7.05s | 7.05s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 7.02s | 7.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 7.00s | 7.00s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE2] | 6.82s | 6.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 6.72s | 6.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 6.62s | 6.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 6.62s | 6.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 6.32s | 6.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 5.92s | 5.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 5.92s | 5.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 5.92s | 5.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 5.92s | 5.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 5.92s | 5.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 5.82s | 5.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 5.82s | 5.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 5.72s | 5.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE] | 5.72s | 5.72s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair] | 5.72s | 5.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 5.72s | 5.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 5.72s | 5.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 5.72s | 5.72s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_2_sets] | 5.72s | 5.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 5.62s | 5.62s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair_empty] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 5.62s | 5.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 5.62s | 5.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 5.62s | 5.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 5.62s | 5.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 5.52s | 5.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 5.52s | 5.52s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 5.52s | 5.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 5.52s | 5.52s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 5.52s | 5.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 5.52s | 5.52s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_zero_input] | 5.52s | 5.52s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 5.42s | 5.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 5.32s | 5.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 5.32s | 5.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 5.32s | 5.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 5.22s | 5.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 5.22s | 5.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE2] | 5.22s | 5.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 5.21s | 5.21s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 5.12s | 5.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_3_pair] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 5.11s | 5.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 5.02s | 5.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 5.02s | 5.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 5.02s | 5.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 5.02s | 5.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 4.95s | 4.95s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 4.81s | 4.81s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 4.62s | 4.62s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 4.61s | 4.61s |

## Summary

**Total unique test cases:** 536

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.15.0 | 536 | 314 | 222 | 0 |

---

## reth


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | zisk-v0.15.0<br/>(237.91KiB) | Avg |
|-----------|-----------|----------|
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_CALLCODE] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_CALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_DELEGATECALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_STATICCALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_CALLCODE] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_CALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_DELEGATECALL] | ❌ SDK Crash | — |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_STATICCALL] | ❌ SDK Crash | — |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODECOPY] | ❌ SDK Crash | — |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODEHASH] | ❌ SDK Crash | — |
| test_account_query.py::test_extcode_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXTCODESIZE] | ❌ SDK Crash | — |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test-contract_balance_0] | ❌ SDK Crash | — |
| test_account_query.py::test_selfbalance[fork_Prague-benchmark-gas-value_60M-blockchain_test-contract_balance_1] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add_1_2] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add_infinities] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_one_pairing] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_two_pairings] | ❌ SDK Crash | — |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_2_pair] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DIV-0] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DIV-1] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MOD-] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SDIV-0] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SDIV-1] | ❌ SDK Crash | — |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SMOD-] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_127] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_191] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_255] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MOD-mod_bits_63] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_127] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_191] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_255] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_SMOD-mod_bits_63] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_127] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_191] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_255] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_ADDMOD-mod_bits_63] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_127] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_191] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_255] | ❌ SDK Crash | — |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_63] | ❌ SDK Crash | — |
| test_blake2f.py::test_blake2f[fork_Prague-benchmark-gas-value_60M-blockchain_test-blake2f] | ❌ SDK Crash | — |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_COINBASE] | ❌ SDK Crash | — |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PREVRANDAO] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_fp_to_g1] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_fp_to_g2] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g1add] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g1msm] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g2add] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_g2msm] | ❌ SDK Crash | — |
| test_bls12_381.py::test_bls12_381[fork_Prague-benchmark-gas-value_60M-blockchain_test-bls12_pairing_check] | ❌ SDK Crash | — |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ADDRESS] | ❌ SDK Crash | — |
| test_call_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLER] | ❌ SDK Crash | — |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty] | ❌ SDK Crash | — |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-one-loop] | ❌ SDK Crash | — |
| test_call_context.py::test_calldataload[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero-loop] | ❌ SDK Crash | — |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EQ-] | ❌ SDK Crash | — |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SGT-] | ❌ SDK Crash | — |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | ❌ SDK Crash | — |
| test_ecrecover.py::test_ecrecover[fork_Prague-benchmark-gas-value_60M-blockchain_test-ecrecover] | ❌ SDK Crash | — |
| test_identity.py::test_identity[fork_Prague-benchmark-gas-value_60M-blockchain_test] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1024_exp_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1045_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_1360_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_256_exp_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_264_exp_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_128] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_32] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_36] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_40] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_64] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_32_exp_65] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_400_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_408_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_408_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_600_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_600_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_616_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_677_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_765_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_767_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_800_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_800_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_852_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_867_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_8_exp_648] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_8_exp_896] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_996_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_1024b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_128b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_16b_exp_320] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_24b_exp_168] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_256b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_256] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_40] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_32b_exp_96] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_512b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_64b_exp_512] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_even_8b_exp_896] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_208_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_215_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_exp_298_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_balanced] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_base_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_min_gas_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_1024b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_128b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_256b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_256] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_96] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_32b_exp_cover_windows] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_512b_exp_1024] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_odd_64b_exp_512] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_3] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_pawel_4] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1152n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1349n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1360n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_1360n2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n2] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_common_200n3] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_example_1] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_1_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_2_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_guido_3_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_marius_1_even] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_1_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_2_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_3_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_4_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_qube] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_nagydani_5_square] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_1_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_2_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_8] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_zkevm_worst_case] | ❌ SDK Crash | — |
| test_point_evaluation.py::test_point_evaluation[fork_Prague-benchmark-gas-value_60M-blockchain_test-point_evaluation] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH13] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH14] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH15] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH16] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH17] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH18] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH19] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH20] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH21] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH22] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH23] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH24] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH25] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH26] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH27] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH28] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH29] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH30] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH31] | ❌ SDK Crash | — |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH32] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP10] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP11] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP12] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP13] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP14] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP15] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP16] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP1] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP2] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP3] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP4] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP5] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP6] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP7] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP8] | ❌ SDK Crash | — |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP9] | ❌ SDK Crash | — |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE new value] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of zero data-opcode_RETURN] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of zero data-opcode_REVERT] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty-opcode_RETURN] | ❌ SDK Crash | — |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-empty-opcode_REVERT] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALLCODE] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CALL] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DELEGATECALL] | ❌ SDK Crash | — |
| test_system.py::test_xcall[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_STATICCALL] | ❌ SDK Crash | — |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-one blob and accessed] | ❌ SDK Crash | — |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-six blobs, access latest] | ❌ SDK Crash | — |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ORIGIN] | ❌ SDK Crash | — |
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 3m 23.72s | 3m 23.72s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 2m 36.29s | 2m 36.29s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 2m 22.56s | 2m 22.56s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 2m 17.59s | 2m 17.59s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 2m 16.47s | 2m 16.47s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 2m 14.84s | 2m 14.84s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_True] | 2m 3.94s | 2m 3.94s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH11] | 2m 2.14s | 2m 2.14s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH12] | 1m 56.25s | 1m 56.25s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH9] | 1m 50.63s | 1m 50.63s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 1m 50.62s | 1m 50.62s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_False] | 1m 49.84s | 1m 49.84s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH10] | 1m 48.53s | 1m 48.53s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE same value] | 1m 48.11s | 1m 48.11s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BLOBBASEFEE] | 1m 47.46s | 1m 47.46s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 1m 47.34s | 1m 47.34s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASPRICE] | 1m 47.23s | 1m 47.23s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 44.32s | 1m 44.32s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH8] | 1m 43.42s | 1m 43.42s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_4_pair] | 1m 40.42s | 1m 40.42s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 38.91s | 1m 38.91s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SAR-] | 1m 37.72s | 1m 37.72s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 36.51s | 1m 36.51s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH7] | 1m 36.48s | 1m 36.48s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH6] | 1m 36.33s | 1m 36.33s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_0] | 1m 36.27s | 1m 36.27s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1] | 1m 35.41s | 1m 35.41s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_NUMBER] | 1m 34.63s | 1m 34.63s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000] | 1m 33.22s | 1m 33.22s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_5_pair] | 1m 32.34s | 1m 32.34s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BASEFEE] | 1m 30.93s | 1m 30.93s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CHAINID] | 1m 29.30s | 1m 29.30s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-5b] | 1m 28.43s | 1m 28.43s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 1m 28.31s | 1m 28.31s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH5] | 1m 27.39s | 1m 27.39s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH0] | 1m 26.41s | 1m 26.41s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test-shift_right_SAR] | 1m 26.41s | 1m 26.41s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_TIMESTAMP] | 1m 26.32s | 1m 26.32s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-0 bytes] | 1m 25.91s | 1m 25.91s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 1m 23.93s | 1m 23.93s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 1m 23.89s | 1m 23.89s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 23.71s | 1m 23.71s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 1m 23.70s | 1m 23.70s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 23.23s | 1m 23.23s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 1m 20.09s | 1m 20.09s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASLIMIT] | 1m 20.06s | 1m 20.06s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH4] | 1m 19.19s | 1m 19.19s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 1m 16.36s | 1m 16.36s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-100 bytes] | 1m 15.89s | 1m 15.89s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SHR-] | 1m 15.30s | 1m 15.30s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test-shift_right_SHR] | 1m 15.25s | 1m 15.25s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 14.42s | 1m 14.42s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-100 bytes] | 1m 13.63s | 1m 13.63s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0 bytes] | 1m 13.01s | 1m 13.01s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SHL-] | 1m 12.33s | 1m 12.33s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-0 bytes] | 1m 11.90s | 1m 11.90s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH3] | 1m 11.73s | 1m 11.73s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0 bytes] | 1m 8.31s | 1m 8.31s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_BALANCE] | 1m 6.81s | 1m 6.81s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_True] | 1m 6.63s | 1m 6.63s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-one blob but access non-existent index] | 1m 6.61s | 1m 6.61s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 1m 6.58s | 1m 6.58s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_False] | 1m 5.50s | 1m 5.50s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_True] | 1m 4.89s | 1m 4.89s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 1m 4.58s | 1m 4.58s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXP-] | 1m 4.28s | 1m 4.28s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 1m 4.22s | 1m 4.22s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SLT-] | 1m 1.89s | 1m 1.89s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 1.43s | 1m 1.43s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MUL-] | 1m 1.22s | 1m 1.22s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-no blobs] | 1m 0.58s | 1m 0.58s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_10000] | 1m 0.48s | 1m 0.48s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 1m 0.48s | 1m 0.48s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 1m 0.17s | 1m 0.17s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_0] | 59.68s | 59.68s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 59.49s | 59.49s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 59.21s | 59.21s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 59.18s | 59.18s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_False] | 59.00s | 59.00s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 58.37s | 58.37s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SIGNEXTEND-] | 57.78s | 57.78s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 57.40s | 57.40s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 57.30s | 57.30s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 57.30s | 57.30s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 57.08s | 57.08s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 56.99s | 56.99s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-max code size] | 56.79s | 56.79s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_1000] | 56.58s | 56.58s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_OR-] | 55.97s | 55.97s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 55.80s | 55.80s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 55.79s | 55.79s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-100 bytes] | 55.70s | 55.70s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_False] | 55.68s | 55.68s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 54.38s | 54.38s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 53.97s | 53.97s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_True] | 53.61s | 53.61s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 53.47s | 53.47s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b5b] | 52.87s | 52.87s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH2] | 52.69s | 52.69s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 52.34s | 52.34s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 52.32s | 52.32s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 51.97s | 51.97s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SUB-] | 51.57s | 51.57s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-1MiB] | 51.57s | 51.57s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 51.27s | 51.27s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP13] | 50.81s | 50.81s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SLOAD] | 50.78s | 50.78s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_BALANCE] | 50.49s | 50.49s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 50.41s | 50.41s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 50.37s | 50.37s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP6] | 49.91s | 49.91s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 49.76s | 49.76s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BYTE-] | 49.59s | 49.59s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 49.47s | 49.47s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP14] | 49.37s | 49.37s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP16] | 49.30s | 49.30s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP15] | 49.20s | 49.20s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP7] | 48.96s | 48.96s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 48.92s | 48.92s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | 48.87s | 48.87s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP1] | 48.87s | 48.87s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-00] | 48.86s | 48.86s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | 48.81s | 48.81s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 48.77s | 48.77s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP8] | 48.67s | 48.67s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-10KiB] | 48.63s | 48.63s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 48.46s | 48.46s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 48.37s | 48.37s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP9] | 48.28s | 48.28s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-100 bytes] | 47.97s | 47.97s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP3] | 47.49s | 47.49s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP11] | 47.48s | 47.48s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP12] | 47.27s | 47.27s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-10KiB] | 47.20s | 47.20s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 47.09s | 47.09s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 47.06s | 47.06s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 46.86s | 46.86s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-1MiB] | 46.67s | 46.67s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ADD-] | 46.38s | 46.38s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP10] | 46.16s | 46.16s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP2] | 45.88s | 45.88s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP5] | 45.86s | 45.86s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH1] | 45.81s | 45.81s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP4] | 45.77s | 45.77s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 45.57s | 45.57s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 45.38s | 45.38s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 45.12s | 45.12s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_True] | 45.07s | 45.07s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 44.68s | 44.68s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | 44.42s | 44.42s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_False] | 44.38s | 44.38s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GT-] | 44.37s | 44.37s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_AND-] | 44.35s | 44.35s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | 43.86s | 43.86s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_LT-] | 43.85s | 43.85s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b5b] | 42.06s | 42.06s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-512] | 41.66s | 41.66s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_XOR-] | 41.45s | 41.45s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 40.77s | 40.77s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 39.27s | 39.27s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 39.16s | 39.16s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 37.27s | 37.27s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB] | 36.86s | 36.86s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b] | 35.96s | 35.96s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-10KiB] | 35.55s | 35.55s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value] | 34.65s | 34.65s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSLOAD] | 34.27s | 34.27s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 34.16s | 34.16s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-1MiB] | 33.96s | 33.96s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 33.95s | 33.95s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_diff_acc] | 33.36s | 33.36s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul] | 33.16s | 33.16s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 32.54s | 32.54s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-1MiB] | 32.35s | 32.35s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-5KiB] | 30.98s | 30.98s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 30.15s | 30.15s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 30.05s | 30.05s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 29.87s | 29.87s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_True] | 29.04s | 29.04s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value] | 28.66s | 28.66s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 28.64s | 28.64s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 28.14s | 28.14s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_False] | 27.95s | 27.95s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 27.55s | 27.55s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 27.25s | 27.25s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 27.18s | 27.18s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-max code size] | 27.05s | 27.05s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 26.96s | 26.96s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-10KiB] | 26.47s | 26.47s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b] | 26.46s | 26.46s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_True] | 26.24s | 26.24s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_b] | 26.16s | 26.16s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_False] | 25.94s | 25.94s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_True] | 25.85s | 25.85s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_diff_acc] | 25.76s | 25.76s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 24.96s | 24.96s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_False] | 24.64s | 24.64s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_example_2] | 22.74s | 22.74s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 21.85s | 21.85s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 21.74s | 21.74s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 21.73s | 21.73s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 21.63s | 21.63s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSLOAD] | 21.44s | 21.44s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_a] | 21.33s | 21.33s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_b] | 20.73s | 20.73s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 20.34s | 20.34s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 20.05s | 20.05s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_True] | 18.67s | 18.67s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 16.53s | 16.53s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_100000] | 15.12s | 15.12s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 14.23s | 14.23s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_False] | 14.04s | 14.04s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 13.63s | 13.63s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_True] | 13.43s | 13.43s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_2_scalar] | 12.04s | 12.04s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_2_scalar] | 11.12s | 11.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 11.12s | 11.12s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_False] | 9.92s | 9.92s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value] | 9.62s | 9.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 8.63s | 8.63s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value] | 8.52s | 8.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 8.52s | 8.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 8.42s | 8.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 8.42s | 8.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 8.22s | 8.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 8.03s | 8.03s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 7.92s | 7.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 7.92s | 7.92s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_RETURN] | 7.84s | 7.84s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 7.72s | 7.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 7.72s | 7.72s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE] | 7.72s | 7.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 7.63s | 7.63s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 7.62s | 7.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 7.52s | 7.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 7.44s | 7.44s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 7.42s | 7.42s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 7.42s | 7.42s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 7.12s | 7.12s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 7.12s | 7.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE2] | 7.03s | 7.03s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 7.02s | 7.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 6.92s | 6.92s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE] | 6.92s | 6.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 6.82s | 6.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE2] | 6.82s | 6.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 6.72s | 6.72s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 6.72s | 6.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 6.62s | 6.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 6.62s | 6.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 6.53s | 6.53s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 6.52s | 6.52s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE2] | 6.51s | 6.51s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 6.42s | 6.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 6.42s | 6.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 6.42s | 6.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 6.42s | 6.42s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_REVERT] | 6.33s | 6.33s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 6.32s | 6.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 6.23s | 6.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 6.22s | 6.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 6.22s | 6.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 6.22s | 6.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 6.13s | 6.13s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_2_sets] | 6.12s | 6.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 6.12s | 6.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 6.12s | 6.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 6.12s | 6.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 6.12s | 6.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 6.12s | 6.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 6.02s | 6.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 6.02s | 6.02s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE] | 6.02s | 6.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 6.02s | 6.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 6.02s | 6.02s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 6.02s | 6.02s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE] | 6.01s | 6.01s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 5.92s | 5.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 5.92s | 5.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair] | 5.92s | 5.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 5.92s | 5.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 5.82s | 5.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 5.82s | 5.82s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000000] | 5.82s | 5.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 5.81s | 5.81s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 5.72s | 5.72s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 5.71s | 5.71s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 5.62s | 5.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 5.62s | 5.62s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair_empty] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 5.52s | 5.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 5.52s | 5.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 5.51s | 5.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 5.51s | 5.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 5.42s | 5.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE2] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 5.41s | 5.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 5.32s | 5.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 5.32s | 5.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 5.32s | 5.32s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_zero_input] | 5.31s | 5.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 5.22s | 5.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 5.22s | 5.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 5.22s | 5.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 5.22s | 5.22s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_3_pair] | 5.22s | 5.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 5.21s | 5.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 5.12s | 5.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 5.12s | 5.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 5.02s | 5.02s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 4.91s | 4.91s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 4.91s | 4.91s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 4.82s | 4.82s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 4.52s | 4.52s |

## Summary

**Total unique test cases:** 536

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.15.0 | 536 | 321 | 215 | 0 |

---

