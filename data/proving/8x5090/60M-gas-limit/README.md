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

| Test Case | zisk-v0.14.0<br/>(244.02KiB) | Avg |
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
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_add_infinities] | ❌ SDK Crash | — |
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
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_8] | ❌ SDK Crash | — |
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
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_63] | 2m 17.24s | 2m 17.24s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 2m 15.50s | 2m 15.50s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_191] | 2m 1.91s | 2m 1.91s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_255] | 1m 57.95s | 1m 57.95s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 56.26s | 1m 56.26s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH6] | 1m 54.02s | 1m 54.02s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 53.55s | 1m 53.55s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 52.36s | 1m 52.36s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 50.28s | 1m 50.28s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 50.16s | 1m 50.16s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 49.75s | 1m 49.75s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH7] | 1m 49.55s | 1m 49.55s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 47.96s | 1m 47.96s |
| test_arithmetic.py::test_mod_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-op_MULMOD-mod_bits_127] | 1m 47.43s | 1m 47.43s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 46.50s | 1m 46.50s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 46.43s | 1m 46.43s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 42.44s | 1m 42.44s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BLOBBASEFEE] | 1m 42.06s | 1m 42.06s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 41.84s | 1m 41.84s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 41.56s | 1m 41.56s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_4_pair] | 1m 39.00s | 1m 39.00s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 37.28s | 1m 37.28s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value] | 1m 34.94s | 1m 34.94s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH5] | 1m 34.39s | 1m 34.39s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_5_pair] | 1m 34.23s | 1m 34.23s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH0] | 1m 33.53s | 1m 33.53s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH4] | 1m 33.21s | 1m 33.21s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1] | 1m 32.65s | 1m 32.65s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 1m 31.28s | 1m 31.28s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 1m 30.44s | 1m 30.44s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 1m 29.63s | 1m 29.63s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-512] | 1m 27.64s | 1m 27.64s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE same value] | 1m 27.43s | 1m 27.43s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH3] | 1m 26.74s | 1m 26.74s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 26.30s | 1m 26.30s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-0 bytes] | 1m 25.88s | 1m 25.88s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_LT-] | 1m 25.35s | 1m 25.35s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000] | 1m 24.95s | 1m 24.95s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_BALANCE] | 1m 23.33s | 1m 23.33s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSLOAD] | 1m 23.11s | 1m 23.11s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_TIMESTAMP] | 1m 23.06s | 1m 23.06s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_2_exp_heavy] | 1m 22.24s | 1m 22.24s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BASEFEE] | 1m 22.14s | 1m 22.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_BALANCE] | 1m 21.86s | 1m 21.86s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 1m 21.29s | 1m 21.29s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_heavy] | 1m 20.65s | 1m 20.65s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 1m 20.62s | 1m 20.62s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 1m 20.61s | 1m 20.61s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 1m 19.87s | 1m 19.87s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 1m 19.82s | 1m 19.82s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_NUMBER] | 1m 19.66s | 1m 19.66s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASPRICE] | 1m 18.98s | 1m 18.98s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 1m 18.60s | 1m 18.60s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CHAINID] | 1m 17.86s | 1m 17.86s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP6] | 1m 17.74s | 1m 17.74s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 1m 17.41s | 1m 17.41s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_0] | 1m 16.83s | 1m 16.83s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP7] | 1m 16.01s | 1m 16.01s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP10] | 1m 15.68s | 1m 15.68s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP12] | 1m 15.31s | 1m 15.31s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP13] | 1m 15.14s | 1m 15.14s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP12] | 1m 15.08s | 1m 15.08s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP1] | 1m 14.55s | 1m 14.55s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH2] | 1m 14.54s | 1m 14.54s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_4_exp_heavy] | 1m 14.42s | 1m 14.42s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_False] | 1m 14.21s | 1m 14.21s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SLT-] | 1m 14.21s | 1m 14.21s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASLIMIT] | 1m 14.18s | 1m 14.18s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_False] | 1m 13.91s | 1m 13.91s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP16] | 1m 13.73s | 1m 13.73s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP1] | 1m 12.88s | 1m 12.88s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH1] | 1m 12.72s | 1m 12.72s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 12.02s | 1m 12.02s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 1m 9.73s | 1m 9.73s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GT-] | 1m 9.70s | 1m 9.70s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 8.69s | 1m 8.69s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 1m 8.66s | 1m 8.66s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_AND-] | 1m 8.66s | 1m 8.66s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 1m 8.03s | 1m 8.03s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB] | 1m 7.66s | 1m 7.66s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 1m 5.61s | 1m 5.61s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 1m 5.49s | 1m 5.49s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 1m 5.12s | 1m 5.12s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value] | 1m 5.09s | 1m 5.09s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 1m 4.67s | 1m 4.67s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 4.11s | 1m 4.11s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | 1m 3.94s | 1m 3.94s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-one blob but access non-existent index] | 1m 3.72s | 1m 3.72s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 1m 3.49s | 1m 3.49s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 1m 3.43s | 1m 3.43s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 1m 3.12s | 1m 3.12s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 1m 2.77s | 1m 2.77s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 1m 2.54s | 1m 2.54s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-no blobs] | 1m 2.51s | 1m 2.51s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 1m 2.44s | 1m 2.44s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SGT-] | 1m 2.15s | 1m 2.15s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 1m 2.03s | 1m 2.03s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 1m 2.02s | 1m 2.02s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP9] | 1m 1.82s | 1m 1.82s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP8] | 1m 1.77s | 1m 1.77s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP4] | 1m 1.63s | 1m 1.63s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MUL-] | 1m 1.59s | 1m 1.59s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP14] | 1m 1.42s | 1m 1.42s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP3] | 1m 1.10s | 1m 1.10s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | 1m 1.00s | 1m 1.00s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_True] | 1m 0.62s | 1m 0.62s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SLOAD] | 1m 0.62s | 1m 0.62s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 1m 0.27s | 1m 0.27s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 1m 0.20s | 1m 0.20s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP5] | 1m 0.00s | 1m 0.00s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP6] | 59.91s | 59.91s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-100 bytes] | 59.88s | 59.88s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP13] | 59.60s | 59.60s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP11] | 59.59s | 59.59s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP16] | 59.41s | 59.41s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP15] | 59.34s | 59.34s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-100 bytes] | 59.00s | 59.00s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MOD-] | 58.98s | 58.98s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP11] | 58.82s | 58.82s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP14] | 58.69s | 58.69s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 58.62s | 58.62s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 58.50s | 58.50s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP7] | 58.50s | 58.50s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP5] | 58.44s | 58.44s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP4] | 57.59s | 57.59s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP15] | 57.41s | 57.41s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SUB-] | 57.36s | 57.36s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BYTE-] | 57.12s | 57.12s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 57.11s | 57.11s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP8] | 57.02s | 57.02s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP2] | 56.90s | 56.90s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_0] | 56.22s | 56.22s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP10] | 56.20s | 56.20s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP2] | 56.00s | 56.00s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ADD-] | 55.51s | 55.51s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_True] | 55.21s | 55.21s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP3] | 55.18s | 55.18s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_10000] | 54.06s | 54.06s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SMOD-] | 54.01s | 54.01s |
| test_stack.py::test_swap[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SWAP9] | 53.99s | 53.99s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 53.98s | 53.98s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 53.61s | 53.61s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 53.29s | 53.29s |
| test_comparison.py::test_iszero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 53.22s | 53.22s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 52.89s | 52.89s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_True] | 52.40s | 52.40s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_False] | 52.34s | 52.34s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-max code size] | 51.72s | 51.72s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 51.70s | 51.70s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 51.50s | 51.50s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_1000] | 50.99s | 50.99s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_diff_acc] | 50.18s | 50.18s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_XOR-] | 49.99s | 49.99s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 49.09s | 49.09s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_OR-] | 48.90s | 48.90s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-10KiB] | 47.20s | 47.20s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSLOAD] | 46.18s | 46.18s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_True] | 46.01s | 46.01s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 45.86s | 45.86s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_False] | 45.40s | 45.40s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_False] | 45.20s | 45.20s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-1MiB] | 44.01s | 44.01s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_True] | 42.70s | 42.70s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-00] | 42.40s | 42.40s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 42.40s | 42.40s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-10KiB] | 42.31s | 42.31s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 42.19s | 42.19s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-5KiB] | 41.28s | 41.28s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_b] | 41.27s | 41.27s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-1MiB] | 41.01s | 41.01s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_diff_acc] | 40.37s | 40.37s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 39.50s | 39.50s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 39.46s | 39.46s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 39.38s | 39.38s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-1MiB] | 39.19s | 39.19s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_True] | 38.91s | 38.91s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 36.59s | 36.59s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_b] | 35.16s | 35.16s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_a] | 34.57s | 34.57s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_example_2] | 34.36s | 34.36s |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_zkevm_worst_case] | 34.19s | 34.19s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 33.95s | 33.95s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_False] | 33.36s | 33.36s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b] | 32.18s | 32.18s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-10KiB] | 31.29s | 31.29s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 30.95s | 30.95s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_True] | 30.54s | 30.54s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 29.96s | 29.96s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 29.34s | 29.34s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul] | 29.34s | 29.34s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-1MiB] | 29.18s | 29.18s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 27.75s | 27.75s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 27.36s | 27.36s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 26.64s | 26.64s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_False] | 25.56s | 25.56s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-10KiB] | 25.35s | 25.35s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 24.75s | 24.75s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 24.05s | 24.05s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 23.85s | 23.85s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_False] | 23.56s | 23.56s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_True] | 23.55s | 23.55s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 23.14s | 23.14s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b] | 22.55s | 22.55s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_True] | 21.14s | 21.14s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 20.55s | 20.55s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 19.24s | 19.24s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_False] | 18.84s | 18.84s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_True] | 18.64s | 18.64s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 15.04s | 15.04s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 13.54s | 13.54s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE] | 11.53s | 11.53s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 11.23s | 11.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 10.04s | 10.04s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 9.74s | 9.74s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_2_scalar] | 9.74s | 9.74s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value] | 9.72s | 9.72s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value] | 9.53s | 9.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 9.32s | 9.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 9.03s | 9.03s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 8.92s | 8.92s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_REVERT] | 8.73s | 8.73s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 8.72s | 8.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 8.72s | 8.72s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 8.23s | 8.23s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE] | 8.12s | 8.12s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 8.12s | 8.12s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 8.02s | 8.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 7.72s | 7.72s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_False] | 7.72s | 7.72s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 7.72s | 7.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 7.52s | 7.52s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000000] | 7.12s | 7.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 7.03s | 7.03s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 6.82s | 6.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 6.72s | 6.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 6.63s | 6.63s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE2] | 6.52s | 6.52s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 6.52s | 6.52s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_RETURN] | 6.32s | 6.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE] | 6.22s | 6.22s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_2_scalar] | 6.12s | 6.12s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 6.12s | 6.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 6.02s | 6.02s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 6.02s | 6.02s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE2] | 5.92s | 5.92s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE2] | 5.92s | 5.92s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 5.92s | 5.92s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 5.53s | 5.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 5.52s | 5.52s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 5.43s | 5.43s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 5.42s | 5.42s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 5.42s | 5.42s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 5.42s | 5.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 5.33s | 5.33s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE2] | 5.24s | 5.24s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 5.22s | 5.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE] | 5.12s | 5.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 4.82s | 4.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 4.82s | 4.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 4.62s | 4.62s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair] | 4.53s | 4.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 4.53s | 4.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 4.53s | 4.53s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 4.52s | 4.52s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 4.52s | 4.52s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair_empty] | 4.51s | 4.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 4.42s | 4.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 4.32s | 4.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 4.32s | 4.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 4.32s | 4.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 4.23s | 4.23s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 4.22s | 4.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 4.12s | 4.12s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 3.82s | 3.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 3.72s | 3.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 3.71s | 3.71s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 3.71s | 3.71s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 3.62s | 3.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 3.62s | 3.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 3.62s | 3.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 3.62s | 3.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 3.52s | 3.52s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 3.51s | 3.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 3.51s | 3.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 3.41s | 3.41s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_zero_input] | 3.32s | 3.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 3.32s | 3.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 3.32s | 3.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 3.31s | 3.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 3.22s | 3.22s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_2_sets] | 3.22s | 3.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 3.22s | 3.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 3.21s | 3.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 3.21s | 3.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 3.12s | 3.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 3.12s | 3.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 3.11s | 3.11s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_3_pair] | 3.02s | 3.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 3.01s | 3.01s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 2.92s | 2.92s |

## Summary

**Total unique test cases:** 536

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.14.0 | 536 | 316 | 220 | 0 |

---

## reth


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | zisk-v0.14.0<br/>(244.02KiB) | Avg |
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
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | ❌ SDK Crash | — |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | ❌ SDK Crash | — |
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
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_3_exp_heavy] | ❌ SDK Crash | — |
| test_modexp.py::test_modexp[fork_Prague-benchmark-gas-value_60M-blockchain_test-mod_vul_pawel_4_exp_heavy] | ❌ SDK Crash | — |
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
| test_keccak.py::test_keccak[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 5m 27.69s | 5m 27.69s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 2m 29.67s | 2m 29.67s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 2m 18.58s | 2m 18.58s |
| test_control_flow.py::test_jumpi_fallthrough[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 2m 17.63s | 2m 17.63s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH8] | 2m 17.54s | 2m 17.54s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 2m 15.93s | 2m 15.93s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 2m 11.37s | 2m 11.37s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 2m 8.44s | 2m 8.44s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 2m 2.77s | 2m 2.77s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 59.88s | 1m 59.88s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH12] | 1m 56.46s | 1m 56.46s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1] | 1m 55.57s | 1m 55.57s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SAR-] | 1m 54.40s | 1m 54.40s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 1m 50.53s | 1m 50.53s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH11] | 1m 43.09s | 1m 43.09s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000] | 1m 42.75s | 1m 42.75s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_False] | 1m 39.27s | 1m 39.27s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_True-key_mut_True] | 1m 39.04s | 1m 39.04s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH9] | 1m 37.26s | 1m 37.26s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH0] | 1m 37.24s | 1m 37.24s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH10] | 1m 36.66s | 1m 36.66s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SSTORE same value] | 1m 36.58s | 1m 36.58s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 1m 32.25s | 1m 32.25s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_4_pair] | 1m 32.24s | 1m 32.24s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BLOBBASEFEE] | 1m 31.45s | 1m 31.45s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_0] | 1m 28.36s | 1m 28.36s |
| test_tx_context.py::test_call_frame_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASPRICE] | 1m 25.46s | 1m 25.46s |
| test_sha256.py::test_sha256[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 23.84s | 1m 23.84s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_5_pair] | 1m 22.22s | 1m 22.22s |
| test_account_query.py::test_codesize[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 21.87s | 1m 21.87s |
| test_block_context.py::test_blockhash[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 21.66s | 1m 21.66s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH7] | 1m 21.57s | 1m 21.57s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-5b] | 1m 20.53s | 1m 20.53s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CHAINID] | 1m 20.14s | 1m 20.14s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_NUMBER] | 1m 20.13s | 1m 20.13s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 1m 19.67s | 1m 19.67s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH6] | 1m 19.46s | 1m 19.46s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_TIMESTAMP] | 1m 19.42s | 1m 19.42s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SLT-] | 1m 18.94s | 1m 18.94s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 1m 18.00s | 1m 18.00s |
| test_call_context.py::test_returndatasize_zero[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 17.81s | 1m 17.81s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 1m 16.44s | 1m 16.44s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BASEFEE] | 1m 15.43s | 1m 15.43s |
| test_block_context.py::test_block_context_ops[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GASLIMIT] | 1m 14.88s | 1m 14.88s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-0 bytes] | 1m 14.47s | 1m 14.47s |
| test_control_flow.py::test_gas_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 14.38s | 1m 14.38s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test-shift_right_SAR] | 1m 13.42s | 1m 13.42s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.75x max code size] | 1m 12.17s | 1m 12.17s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH4] | 1m 10.37s | 1m 10.37s |
| test_bitwise.py::test_shifts[fork_Prague-benchmark-gas-value_60M-blockchain_test-shift_right_SHR] | 1m 9.96s | 1m 9.96s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-max code size] | 1m 9.51s | 1m 9.51s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 1m 9.14s | 1m 9.14s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 1m 9.02s | 1m 9.02s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-100 bytes] | 1m 8.93s | 1m 8.93s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH5] | 1m 8.60s | 1m 8.60s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b5b] | 1m 7.98s | 1m 7.98s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 1m 7.52s | 1m 7.52s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 1m 6.91s | 1m 6.91s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0 bytes] | 1m 5.82s | 1m 5.82s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_False] | 1m 4.86s | 1m 4.86s |
| test_alt_bn128.py::test_bn128_pairings_amortized[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 1m 3.49s | 1m 3.49s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_BALANCE] | 1m 2.84s | 1m 2.84s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SHR-] | 1m 2.02s | 1m 2.02s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 1m 1.28s | 1m 1.28s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 1m 0.70s | 1m 0.70s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SHL-] | 1m 0.62s | 1m 0.62s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 1m 0.62s | 1m 0.62s |
| test_storage.py::test_tstore[fork_Prague-benchmark-gas-value_60M-blockchain_test-dense_val_mut_False-key_mut_True] | 1m 0.35s | 1m 0.35s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 1m 0.23s | 1m 0.23s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-0 bytes] | 59.31s | 59.31s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0 bytes] | 58.83s | 58.83s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_False] | 58.54s | 58.54s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-one blob but access non-existent index] | 58.29s | 58.29s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 58.20s | 58.20s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_True-opcode_BALANCE] | 57.00s | 57.00s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-100 bytes] | 56.94s | 56.94s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 56.62s | 56.62s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH3] | 56.55s | 56.55s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value] | 56.33s | 56.33s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 56.17s | 56.17s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSLOAD] | 55.78s | 55.78s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_False] | 55.41s | 55.41s |
| test_control_flow.py::test_jumpdests[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 54.63s | 54.63s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-100 bytes] | 54.60s | 54.60s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_True-non_zero_value_True] | 53.50s | 53.50s |
| test_tx_context.py::test_blobhash[fork_Prague-benchmark-gas-value_60M-blockchain_test-no blobs] | 53.19s | 53.19s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP12] | 53.06s | 53.06s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 52.74s | 52.74s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 52.48s | 52.48s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_AND-] | 52.11s | 52.11s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 51.48s | 51.48s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SIGNEXTEND-] | 51.38s | 51.38s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.25x max code size] | 51.20s | 51.20s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_EXP-] | 50.89s | 50.89s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_0] | 50.62s | 50.62s |
| test_call_context.py::test_callvalue[fork_Prague-benchmark-gas-value_60M-blockchain_test-from_origin_False-non_zero_value_True] | 50.50s | 50.50s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 50.38s | 50.38s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_10000] | 49.18s | 49.18s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 48.92s | 48.92s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 48.88s | 48.88s |
| test_call_context.py::test_calldatasize[fork_Prague-benchmark-gas-value_60M-blockchain_test-calldata_length_1000] | 48.61s | 48.61s |
| test_call_context.py::test_returndatasize_nonzero[fork_Prague-benchmark-gas-value_60M-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 48.59s | 48.59s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-0.50x max code size] | 48.21s | 48.21s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 48.21s | 48.21s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 47.72s | 47.72s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 47.52s | 47.52s |
| test_account_query.py::test_ext_account_query_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 47.49s | 47.49s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_MUL-] | 46.90s | 46.90s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-10KiB] | 46.42s | 46.42s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP11] | 46.30s | 46.30s |
| test_storage.py::test_storage_access_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-SLOAD] | 46.18s | 46.18s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 46.12s | 46.12s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH2] | 45.28s | 45.28s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP5] | 45.20s | 45.20s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 44.47s | 44.47s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 43.54s | 43.54s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP10] | 43.49s | 43.49s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP16] | 43.49s | 43.49s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-00] | 43.37s | 43.37s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_False-1MiB] | 43.31s | 43.31s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP9] | 43.27s | 43.27s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP4] | 43.22s | 43.22s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_OR-] | 43.18s | 43.18s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP7] | 43.17s | 43.17s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-100 bytes] | 43.09s | 43.09s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP13] | 43.09s | 43.09s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP8] | 42.98s | 42.98s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_SUB-] | 42.88s | 42.88s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | 42.68s | 42.68s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 42.50s | 42.50s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 42.50s | 42.50s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP3] | 42.48s | 42.48s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP6] | 42.43s | 42.43s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 42.18s | 42.18s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 42.10s | 42.10s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 42.09s | 42.09s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | 41.67s | 41.67s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_False] | 41.60s | 41.60s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 41.52s | 41.52s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP1] | 41.18s | 41.18s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 41.17s | 41.17s |
| test_arithmetic.py::test_arithmetic[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_ADD-] | 40.89s | 40.89s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP2] | 40.88s | 40.88s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-10KiB] | 40.79s | 40.79s |
| test_stack.py::test_push[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_PUSH1] | 40.48s | 40.48s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP14] | 40.33s | 40.33s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_False-1MiB] | 40.30s | 40.30s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 39.93s | 39.93s |
| test_stack.py::test_dup[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_DUP15] | 39.88s | 39.88s |
| test_memory.py::test_memory_access[fork_Prague-benchmark-gas-value_60M-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 39.87s | 39.87s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_BYTE-] | 39.68s | 39.68s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value] | 39.22s | 39.22s |
| test_control_flow.py::test_jumpis[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 39.07s | 39.07s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | 38.90s | 38.90s |
| test_bitwise.py::test_not_op[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 38.78s | 38.78s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0 bytes] | 38.69s | 38.69s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 38.68s | 38.68s |
| test_ripemd160.py::test_ripemd160[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 38.59s | 38.59s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_LT-] | 37.71s | 37.71s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-512] | 37.21s | 37.21s |
| test_comparison.py::test_comparison[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_GT-] | 36.79s | 36.79s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 36.65s | 36.65s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_True-key_mut_True] | 36.48s | 36.48s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b5b] | 36.37s | 36.37s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 36.20s | 36.20s |
| test_bitwise.py::test_bitwise[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_XOR-] | 36.07s | 36.07s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 35.95s | 35.95s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-1KiB] | 34.86s | 34.86s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_False] | 33.07s | 33.07s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_diff_acc] | 32.09s | 32.09s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 30.95s | 30.95s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-605b] | 30.88s | 30.88s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-10KiB] | 30.86s | 30.86s |
| test_control_flow.py::test_jumps[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 30.06s | 30.06s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.75x max code size] | 30.01s | 30.01s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 29.87s | 29.87s |
| test_memory.py::test_mcopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-1MiB] | 29.86s | 29.86s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 29.25s | 29.25s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_True] | 28.00s | 28.00s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul] | 27.45s | 27.45s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_diff_acc_to_b] | 27.36s | 27.36s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.50x max code size] | 26.95s | 26.95s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 26.87s | 26.87s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-1MiB] | 26.75s | 26.75s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 26.46s | 26.46s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-0.25x max code size] | 26.45s | 26.45s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_True] | 26.15s | 26.15s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 25.96s | 25.96s |
| test_account_query.py::test_extcodecopy_warm[fork_Prague-benchmark-gas-value_60M-blockchain_test-5KiB] | 25.96s | 25.96s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 25.77s | 25.77s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_False] | 25.34s | 25.34s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 24.54s | 24.54s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 24.14s | 24.14s |
| test_call_context.py::test_returndatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_dst_True-10KiB] | 24.04s | 24.04s |
| test_mix_operations.py::test_jumpdest_analysis[fork_Prague-benchmark-gas-value_60M-blockchain_test-615b5b] | 23.56s | 23.56s |
| test_account_query.py::test_codecopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_src_dst_True-max code size] | 23.34s | 23.34s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_True-empty_authority_True] | 23.16s | 23.16s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_diff_acc] | 22.94s | 22.94s |
| test_transaction_types.py::test_worst_case_auth_block[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_delegation_False-empty_authority_True] | 22.04s | 22.04s |
| test_system.py::test_selfdestruct_existing[fork_Prague-benchmark-gas-value_60M-blockchain_test-value_bearing_False] | 21.15s | 21.15s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 20.48s | 20.48s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_b] | 20.38s | 20.38s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 19.75s | 19.75s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSLOAD] | 19.64s | 19.64s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 18.94s | 18.94s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_100000] | 18.94s | 18.94s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 18.85s | 18.85s |
| test_call_context.py::test_calldatacopy[fork_Prague-benchmark-gas-value_60M-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 18.83s | 18.83s |
| test_transaction_types.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_60M-blockchain_test-case_id_a_to_a] | 18.04s | 18.04s |
| test_transaction_types.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 17.45s | 17.45s |
| test_account_query.py::test_ext_account_query_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 14.82s | 14.82s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_True] | 12.84s | 12.84s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 10.73s | 10.73s |
| test_storage.py::test_tload[fork_Prague-benchmark-gas-value_60M-blockchain_test-val_mut_False-key_mut_False] | 10.73s | 10.73s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_1_2_2_scalar] | 10.64s | 10.64s |
| test_transaction_types.py::test_block_full_data[fork_Prague-benchmark-gas-value_60M-blockchain_test-zero_byte_False] | 9.54s | 9.54s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 8.82s | 8.82s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE] | 8.73s | 8.73s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-bn128_mul_infinities_2_scalar] | 8.02s | 8.02s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE] | 7.32s | 7.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 7.23s | 7.23s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value] | 6.92s | 6.92s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value] | 6.83s | 6.83s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 6.62s | 6.62s |
| test_system.py::test_creates_collisions[fork_Prague-benchmark-gas-value_60M-blockchain_test-opcode_CREATE2] | 6.62s | 6.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 6.15s | 6.15s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 5.83s | 5.83s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 5.83s | 5.83s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 5.82s | 5.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 5.82s | 5.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE2] | 5.73s | 5.73s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 5.62s | 5.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 5.52s | 5.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 5.43s | 5.43s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes without value-opcode_CREATE2] | 5.32s | 5.32s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 5.22s | 5.22s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 5.12s | 5.12s |
| test_system.py::test_selfdestruct_created[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 5.12s | 5.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 5.12s | 5.12s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 5.02s | 5.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 5.02s | 5.02s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with zero data-opcode_CREATE] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 4.92s | 4.92s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 4.83s | 4.83s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 4.82s | 4.82s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE2] | 4.82s | 4.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 4.82s | 4.82s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 4.82s | 4.82s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 4.82s | 4.82s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 4.72s | 4.72s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 4.72s | 4.72s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_RETURN] | 4.72s | 4.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 4.72s | 4.72s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0 bytes with value-opcode_CREATE] | 4.72s | 4.72s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 4.72s | 4.72s |
| test_memory.py::test_msize[fork_Prague-benchmark-gas-value_60M-blockchain_test-mem_size_1000000] | 4.63s | 4.63s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair_empty] | 4.62s | 4.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 4.62s | 4.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 4.52s | 4.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 4.52s | 4.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 4.52s | 4.52s |
| test_storage.py::test_storage_access_cold[fork_Prague-benchmark-gas-value_60M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 4.51s | 4.51s |
| test_system.py::test_return_revert[fork_Prague-benchmark-gas-value_60M-blockchain_test-1MiB of zero data-opcode_REVERT] | 4.51s | 4.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 4.42s | 4.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 4.42s | 4.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 4.42s | 4.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 4.22s | 4.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 4.12s | 4.12s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_True] | 4.12s | 4.12s |
| test_system.py::test_selfdestruct_initcode[fork_Prague-benchmark-gas-value_60M-blockchain_test_from_state_test-value_bearing_False] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 4.12s | 4.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 4.02s | 4.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 4.02s | 4.02s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 3.92s | 3.92s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 3.72s | 3.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 3.72s | 3.72s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 3.62s | 3.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 3.62s | 3.62s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_1_pair] | 3.62s | 3.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 3.62s | 3.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 3.62s | 3.62s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 3.62s | 3.62s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE] | 3.61s | 3.61s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 3.52s | 3.52s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 3.52s | 3.52s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_2_sets] | 3.52s | 3.52s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 3.51s | 3.51s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 3.43s | 3.43s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 3.42s | 3.42s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 3.41s | 3.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 3.41s | 3.41s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 3.41s | 3.41s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 3.32s | 3.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 3.32s | 3.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 3.32s | 3.32s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_zero_input] | 3.32s | 3.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 3.32s | 3.32s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 3.32s | 3.32s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 3.31s | 3.31s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 3.22s | 3.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 3.22s | 3.22s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 3.21s | 3.21s |
| test_system.py::test_create[fork_Prague-benchmark-gas-value_60M-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 3.21s | 3.21s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 3.12s | 3.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 3.12s | 3.12s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 3.12s | 3.12s |
| test_alt_bn128.py::test_alt_bn128[fork_Prague-benchmark-gas-value_60M-blockchain_test-ec_pairing_3_pair] | 3.11s | 3.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 3.11s | 3.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 3.11s | 3.11s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 3.02s | 3.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 3.02s | 3.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 3.02s | 3.02s |
| test_log.py::test_log[fork_Prague-benchmark-gas-value_60M-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 2.92s | 2.92s |
| test_transaction_types.py::test_empty_block[fork_Prague-benchmark-gas-value_60M-blockchain_test] | 2.72s | 2.72s |

## Summary

**Total unique test cases:** 536

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.14.0 | 536 | 321 | 215 | 0 |

---

