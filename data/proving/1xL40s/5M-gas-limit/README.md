# 1xL40s - 5M-gas-limit

## Gas Limit Configuration - Proving

EEST benchmarks with 5M-gas-limit gas limit (proving results) on **1xL40s** hardware.

## Available EL Clients

- [reth](#reth)

---

## reth


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | zisk-v0.13.0<br/>(244.02KiB) | Avg |
|-----------|-----------|----------|
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_False-empty_authority_True] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1024_exp_2] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1045_gas_base_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_256_exp_2] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_264_exp_2] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_400_gas_exp_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_408_gas_base_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_600_gas_exp_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_616_gas_base_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_800_gas_base_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_800_gas_exp_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_852_gas_exp_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_867_gas_base_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_8_exp_648] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_8_exp_896] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_16b_exp_320] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_8b_exp_896] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_215_gas_exp_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_298_gas_exp_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_base_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_exp_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_2] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_2_even] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_3_even] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_marius_1_even] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_qube] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_qube] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_square] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_qube] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_square] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_qube] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_square] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_1_exp_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_2_exp_heavy] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_5_pair] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-point_evaluation] | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_square] | 10m 34.00s | 10m 34.00s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_24b_exp_168] | 9m 41.09s | 9m 41.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_765_gas_exp_heavy] | 9m 20.25s | 9m 20.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_1_even] | 9m 8.28s | 9m 8.28s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_3] | 8m 56.27s | 8m 56.27s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_3_exp_8] | 8m 47.17s | 8m 47.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_256] | 8m 30.63s | 8m 30.63s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_pairing_check] | 8m 25.30s | 8m 25.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_256] | 8m 20.51s | 8m 20.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_96] | 8m 20.06s | 8m 20.06s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_example_1] | 8m 15.72s | 8m 15.72s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1360_gas_balanced] | 8m 11.56s | 8m 11.56s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-blake2f] | 8m 8.25s | 8m 8.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_3_exp_heavy] | 8m 1.90s | 8m 1.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_677_gas_base_heavy] | 7m 56.08s | 7m 56.08s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_fp_to_g1] | 7m 55.37s | 7m 55.37s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_128] | 7m 52.09s | 7m 52.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_96] | 7m 40.18s | 7m 40.18s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_4] | 7m 34.83s | 7m 34.83s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_40] | 7m 32.97s | 7m 32.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_65] | 7m 31.41s | 7m 31.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_zkevm_worst_case] | 7m 27.81s | 7m 27.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_64] | 7m 9.14s | 7m 9.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1360n1] | 7m 8.77s | 7m 8.77s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_example_2] | 7m 6.16s | 7m 6.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_600_gas_balanced] | 6m 54.59s | 6m 54.59s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_408_gas_balanced] | 6m 46.21s | 6m 46.21s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_balanced] | 6m 43.24s | 6m 43.24s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_4_exp_heavy] | 6m 40.66s | 6m 40.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1360n2] | 6m 35.18s | 6m 35.18s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_40] | 6m 34.28s | 6m 34.28s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_64b_exp_512] | 6m 33.12s | 6m 33.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_208_gas_balanced] | 6m 33.07s | 6m 33.07s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_996_gas_balanced] | 6m 29.88s | 6m 29.88s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_64b_exp_512] | 6m 29.35s | 6m 29.35s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_767_gas_balanced] | 6m 29.05s | 6m 29.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1349n1] | 6m 28.77s | 6m 28.77s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_36] | 6m 20.37s | 6m 20.37s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g2add] | 6m 13.24s | 6m 13.24s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_cover_windows] | 6m 7.92s | 6m 7.92s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_fp_to_g2] | 5m 58.73s | 5m 58.73s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g1add] | 5m 57.94s | 5m 57.94s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_CALL] | 5m 56.15s | 5m 56.15s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_CALLCODE] | 5m 56.14s | 5m 56.14s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_DELEGATECALL] | 5m 52.34s | 5m 52.34s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_STATICCALL] | 5m 52.13s | 5m 52.13s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODESIZE] | 5m 50.11s | 5m 50.11s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODEHASH] | 5m 48.90s | 5m 48.90s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODECOPY] | 5m 43.17s | 5m 43.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_128b_exp_1024] | 5m 40.44s | 5m 40.44s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_128b_exp_1024] | 5m 37.73s | 5m 37.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_32] | 5m 33.55s | 5m 33.55s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 5m 23.40s | 5m 23.40s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_256b_exp_1024] | 5m 19.49s | 5m 19.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_256b_exp_1024] | 5m 19.11s | 5m 19.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 5m 16.38s | 5m 16.38s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 5m 0.00s | 5m 0.00s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-blockchain_test-contract_balance_1] | 4m 56.45s | 4m 56.45s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-blockchain_test-contract_balance_0] | 4m 56.28s | 4m 56.28s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 4m 47.30s | 4m 47.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1152n1] | 4m 42.51s | 4m 42.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n3] | 4m 38.94s | 4m 38.94s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n2] | 4m 38.78s | 4m 38.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 4m 37.83s | 4m 37.83s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_512b_exp_1024] | 4m 27.42s | 4m 27.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_512b_exp_1024] | 4m 27.20s | 4m 27.20s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g1msm] | 4m 1.84s | 4m 1.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_qube] | 3m 55.47s | 3m 55.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n1] | 3m 43.41s | 3m 43.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_square] | 3m 42.22s | 3m 42.22s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_191] | 3m 14.66s | 3m 14.66s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_255] | 3m 10.23s | 3m 10.23s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_PREVRANDAO] | 2m 48.76s | 2m 48.76s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g2msm] | 2m 41.49s | 2m 41.49s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_127] | 2m 24.73s | 2m 24.73s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_191] | 2m 21.65s | 2m 21.65s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-blockchain_test] | 2m 20.84s | 2m 20.84s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_191] | 2m 16.18s | 2m 16.18s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add] | 2m 9.67s | 2m 9.67s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SDIV-1] | 2m 5.94s | 2m 5.94s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_63] | 2m 3.95s | 2m 3.95s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SDIV-0] | 2m 2.44s | 2m 2.44s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP2] | 2m 1.48s | 2m 1.48s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP16] | 2m 1.25s | 2m 1.25s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP5] | 2m 1.00s | 2m 1.00s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP6] | 2m 0.65s | 2m 0.65s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP3] | 2m 0.63s | 2m 0.63s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add_1_2] | 2m 0.28s | 2m 0.28s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP15] | 1m 59.96s | 1m 59.96s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP12] | 1m 59.85s | 1m 59.85s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP13] | 1m 59.70s | 1m 59.70s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP7] | 1m 59.16s | 1m 59.16s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP4] | 1m 58.24s | 1m 58.24s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP14] | 1m 56.84s | 1m 56.84s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP1] | 1m 55.64s | 1m 55.64s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_191] | 1m 55.54s | 1m 55.54s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP9] | 1m 55.36s | 1m 55.36s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP10] | 1m 55.00s | 1m 55.00s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_255] | 1m 54.47s | 1m 54.47s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP8] | 1m 52.36s | 1m 52.36s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_DIV-0] | 1m 51.31s | 1m 51.31s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP11] | 1m 50.70s | 1m 50.70s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH32] | 1m 50.44s | 1m 50.44s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_255] | 1m 48.66s | 1m 48.66s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_DIV-1] | 1m 46.36s | 1m 46.36s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_255] | 1m 45.75s | 1m 45.75s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH31] | 1m 44.35s | 1m 44.35s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_127] | 1m 43.83s | 1m 43.83s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_ORIGIN] | 1m 43.77s | 1m 43.77s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_COINBASE] | 1m 43.37s | 1m 43.37s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH30] | 1m 41.87s | 1m 41.87s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH29] | 1m 37.95s | 1m 37.95s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_127] | 1m 37.27s | 1m 37.27s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH27] | 1m 35.77s | 1m 35.77s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH28] | 1m 35.68s | 1m 35.68s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_127] | 1m 33.13s | 1m 33.13s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-empty-opcode_REVERT] | 1m 31.57s | 1m 31.57s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_ADDRESS] | 1m 30.65s | 1m 30.65s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH26] | 1m 29.81s | 1m 29.81s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH25] | 1m 28.63s | 1m 28.63s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-one-loop] | 1m 27.22s | 1m 27.22s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH24] | 1m 26.52s | 1m 26.52s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CALLER] | 1m 25.95s | 1m 25.95s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-zero-loop] | 1m 25.13s | 1m 25.13s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_STATICCALL] | 1m 24.95s | 1m 24.95s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_CALL] | 1m 24.06s | 1m 24.06s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_CALLCODE] | 1m 22.98s | 1m 22.98s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-empty-opcode_RETURN] | 1m 22.62s | 1m 22.62s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SGT-] | 1m 22.17s | 1m 22.17s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH23] | 1m 21.48s | 1m 21.48s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-six blobs, access latest] | 1m 21.28s | 1m 21.28s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_63] | 1m 20.66s | 1m 20.66s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH22] | 1m 19.39s | 1m 19.39s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_63] | 1m 18.69s | 1m 18.69s |
| test_worst_compute.py::test_worst_unop[fork_Prague-blockchain_test-opcode_ISZERO] | 1m 17.77s | 1m 17.77s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_EQ-] | 1m 17.14s | 1m 17.14s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH21] | 1m 16.19s | 1m 16.19s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_63] | 1m 15.27s | 1m 15.27s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-empty] | 1m 14.92s | 1m 14.92s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_STATICCALL] | 1m 14.32s | 1m 14.32s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 1m 13.87s | 1m 13.87s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add_infinities] | 1m 13.59s | 1m 13.59s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_CALLCODE] | 1m 12.99s | 1m 12.99s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH19] | 1m 12.79s | 1m 12.79s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH20] | 1m 12.72s | 1m 12.72s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_CALL] | 1m 12.26s | 1m 12.26s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-one blob and accessed] | 1m 9.72s | 1m 9.72s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH18] | 1m 6.86s | 1m 6.86s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH17] | 1m 5.27s | 1m 5.27s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SMOD-] | 1m 4.97s | 1m 4.97s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH16] | 1m 4.92s | 1m 4.92s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 1m 4.66s | 1m 4.66s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of zero data-opcode_REVERT] | 1m 2.88s | 1m 2.88s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SSTORE new value] | 1m 1.69s | 1m 1.69s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH15] | 1m 0.59s | 1m 0.59s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH14] | 59.21s | 59.21s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_MOD-] | 58.99s | 58.99s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 57.99s | 57.99s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 57.88s | 57.88s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 57.73s | 57.73s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 57.65s | 57.65s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 57.65s | 57.65s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of zero data-opcode_RETURN] | 57.63s | 57.63s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 57.62s | 57.62s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 57.60s | 57.60s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 57.52s | 57.52s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 57.40s | 57.40s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 57.28s | 57.28s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 57.18s | 57.18s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 56.98s | 56.98s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH13] | 56.09s | 56.09s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH12] | 53.25s | 53.25s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH11] | 51.05s | 51.05s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_BLOBBASEFEE] | 49.58s | 49.58s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_one_pairing] | 49.08s | 49.08s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 48.42s | 48.42s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_True-key_mut_True] | 47.37s | 47.37s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_True-key_mut_False] | 47.08s | 47.08s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH10] | 46.88s | 46.88s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 46.84s | 46.84s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 46.62s | 46.62s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 46.49s | 46.49s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 46.49s | 46.49s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 46.48s | 46.48s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GASPRICE] | 46.45s | 46.45s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 46.45s | 46.45s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 46.27s | 46.27s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 46.22s | 46.22s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH9] | 46.22s | 46.22s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SAR-] | 46.21s | 46.21s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 46.19s | 46.19s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 46.19s | 46.19s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH8] | 46.16s | 46.16s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 46.07s | 46.07s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 45.91s | 45.91s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 45.33s | 45.33s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SSTORE same value] | 44.07s | 44.07s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CODESIZE] | 43.83s | 43.83s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH7] | 43.38s | 43.38s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_TIMESTAMP] | 43.21s | 43.21s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1] | 42.91s | 42.91s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_two_pairings] | 42.90s | 42.90s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-blockchain_test] | 42.79s | 42.79s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_0] | 42.78s | 42.78s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_BASEFEE] | 42.61s | 42.61s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-blockchain_test] | 42.52s | 42.52s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CHAINID] | 42.52s | 42.52s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_NUMBER] | 42.50s | 42.50s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-blockchain_test] | 42.47s | 42.47s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_2_pair] | 42.44s | 42.44s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-blockchain_test-shift_right_SAR] | 42.16s | 42.16s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1000] | 41.78s | 41.78s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH6] | 41.75s | 41.75s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ecrecover] | 41.65s | 41.65s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GASLIMIT] | 41.06s | 41.06s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GAS] | 40.94s | 40.94s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-SHA2-256] | 40.91s | 40.91s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH0] | 40.88s | 40.88s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-0 bytes] | 39.41s | 39.41s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 39.39s | 39.39s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SHR-] | 39.03s | 39.03s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 38.58s | 38.58s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 38.36s | 38.36s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-100 bytes] | 38.32s | 38.32s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 38.22s | 38.22s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-blockchain_test-shift_right_SHR] | 38.16s | 38.16s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 38.13s | 38.13s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH5] | 37.82s | 37.82s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-5b] | 37.42s | 37.42s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SHL-] | 37.33s | 37.33s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_4_pair] | 36.80s | 36.80s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-100 bytes] | 36.72s | 36.72s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 36.69s | 36.69s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0 bytes] | 35.92s | 35.92s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-0 bytes] | 35.44s | 35.44s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH4] | 34.97s | 34.97s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-0 bytes] | 34.72s | 34.72s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_EXP-] | 34.25s | 34.25s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SIGNEXTEND-] | 33.50s | 33.50s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH3] | 33.05s | 33.05s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SLT-] | 32.57s | 32.57s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_False-non_zero_value_False] | 32.29s | 32.29s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-one blob but access non-existent index] | 32.18s | 32.18s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_False-non_zero_value_True] | 32.09s | 32.09s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_True-non_zero_value_False] | 31.94s | 31.94s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_True-non_zero_value_True] | 31.84s | 31.84s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 31.83s | 31.83s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-blockchain_test] | 31.58s | 31.58s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 31.23s | 31.23s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_BALANCE] | 31.21s | 31.21s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 30.91s | 30.91s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 30.80s | 30.80s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 30.78s | 30.78s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 30.75s | 30.75s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 30.68s | 30.68s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-no blobs] | 30.60s | 30.60s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 30.58s | 30.58s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 30.56s | 30.56s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_0] | 30.55s | 30.55s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.50x max code size] | 30.49s | 30.49s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 30.49s | 30.49s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_10000] | 30.40s | 30.40s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_1000] | 30.39s | 30.39s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.25x max code size] | 30.38s | 30.38s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.75x max code size] | 30.31s | 30.31s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-max code size] | 30.20s | 30.20s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 30.14s | 30.14s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-blockchain_test] | 29.72s | 29.72s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 29.39s | 29.39s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_MUL-] | 29.29s | 29.29s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-100 bytes] | 28.17s | 28.17s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 27.68s | 27.68s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-10KiB] | 27.62s | 27.62s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 27.53s | 27.53s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SUB-] | 27.52s | 27.52s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_ADD-] | 27.47s | 27.47s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 26.68s | 26.68s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 26.66s | 26.66s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 26.66s | 26.66s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 26.63s | 26.63s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 26.58s | 26.58s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 26.57s | 26.57s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0 bytes] | 26.37s | 26.37s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH2] | 26.35s | 26.35s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 26.34s | 26.34s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 26.34s | 26.34s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 26.33s | 26.33s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_BYTE-] | 26.20s | 26.20s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 26.20s | 26.20s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-10KiB] | 26.18s | 26.18s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 26.16s | 26.16s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 26.14s | 26.14s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP13] | 26.13s | 26.13s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-100 bytes] | 26.03s | 26.03s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP9] | 25.95s | 25.95s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 25.95s | 25.95s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP5] | 25.94s | 25.94s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP14] | 25.92s | 25.92s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 25.91s | 25.91s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP12] | 25.85s | 25.85s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP6] | 25.85s | 25.85s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP10] | 25.85s | 25.85s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP3] | 25.84s | 25.84s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-0 bytes] | 25.80s | 25.80s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_False-key_mut_False] | 25.74s | 25.74s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP11] | 25.73s | 25.73s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP2] | 25.71s | 25.71s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP8] | 25.71s | 25.71s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP16] | 25.65s | 25.65s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP7] | 25.62s | 25.62s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP4] | 25.60s | 25.60s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP1] | 25.50s | 25.50s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_False-key_mut_True] | 25.46s | 25.46s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP15] | 25.42s | 25.42s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_LT-] | 25.38s | 25.38s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_GT-] | 25.21s | 25.21s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_BALANCE] | 25.12s | 25.12s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 24.99s | 24.99s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 24.80s | 24.80s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH1] | 24.75s | 24.75s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-605b5b] | 24.53s | 24.53s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-blockchain_test] | 24.53s | 24.53s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SLOAD] | 24.41s | 24.41s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_OR-] | 24.12s | 24.12s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_AND-] | 24.09s | 24.09s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_XOR-] | 24.05s | 24.05s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-00] | 23.97s | 23.97s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-RIPEMD-160] | 23.67s | 23.67s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-512] | 23.16s | 23.16s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 23.08s | 23.08s |
| test_worst_compute.py::test_worst_unop[fork_Prague-blockchain_test-opcode_NOT] | 22.89s | 22.89s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-1KiB] | 22.41s | 22.41s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value, revert] | 22.26s | 22.26s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 22.07s | 22.07s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-615b5b5b] | 21.98s | 21.98s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value] | 21.77s | 21.77s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSLOAD] | 20.76s | 20.76s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_True-key_mut_False] | 20.65s | 20.65s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-blockchain_test] | 20.24s | 20.24s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-blockchain_test-absent_accounts_False-opcode_BALANCE] | 20.22s | 20.22s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_True-key_mut_True] | 19.48s | 19.48s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-605b] | 18.56s | 18.56s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-1MiB] | 18.33s | 18.33s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-10KiB] | 18.23s | 18.23s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-5KiB] | 17.83s | 17.83s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-IDENTITY] | 17.62s | 17.62s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value] | 17.34s | 17.34s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-blockchain_test-value_bearing_True] | 17.21s | 17.21s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 16.99s | 16.99s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 16.84s | 16.84s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.75x max code size] | 16.73s | 16.73s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.25x max code size] | 16.70s | 16.70s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-max code size] | 16.56s | 16.56s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-10KiB] | 16.54s | 16.54s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 16.49s | 16.49s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_diff_acc_to_diff_acc] | 16.44s | 16.44s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.50x max code size] | 16.43s | 16.43s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-615b5b] | 16.42s | 16.42s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-blockchain_test-zero_byte_True] | 15.90s | 15.90s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 15.69s | 15.69s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 15.49s | 15.49s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_diff_acc_to_b] | 15.49s | 15.49s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul] | 15.42s | 15.42s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-blockchain_test-value_bearing_False] | 14.86s | 14.86s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSLOAD] | 14.12s | 14.12s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_True-empty_authority_True] | 14.09s | 14.09s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_diff_acc] | 14.06s | 14.06s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_True-empty_authority_False] | 13.98s | 13.98s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value, revert] | 13.97s | 13.97s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_False-empty_authority_False] | 13.79s | 13.79s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 13.55s | 13.55s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 13.33s | 13.33s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 13.23s | 13.23s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-1MiB] | 13.16s | 13.16s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-blockchain_test] | 12.96s | 12.96s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_b] | 12.77s | 12.77s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_a] | 12.60s | 12.60s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-blockchain_test-absent_accounts_True-opcode_BALANCE] | 11.77s | 11.77s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_False-key_mut_True] | 11.32s | 11.32s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 11.16s | 11.16s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_1_2_2_scalar] | 11.03s | 11.03s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_False-key_mut_False] | 10.90s | 10.90s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_100000] | 10.72s | 10.72s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-blockchain_test-zero_byte_False] | 10.17s | 10.17s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_infinities_2_scalar] | 10.07s | 10.07s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 9.92s | 9.92s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 9.80s | 9.80s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-1MiB] | 9.44s | 9.44s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 9.43s | 9.43s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 9.42s | 9.42s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 9.18s | 9.18s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value] | 9.09s | 9.09s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 9.08s | 9.08s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value] | 9.01s | 9.01s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 8.83s | 8.83s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 8.77s | 8.77s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 8.72s | 8.72s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 8.71s | 8.71s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 8.71s | 8.71s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-blockchain_test_from_state_test-value_bearing_False] | 8.67s | 8.67s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 8.64s | 8.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 8.64s | 8.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 8.64s | 8.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 8.64s | 8.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 8.61s | 8.61s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 8.59s | 8.59s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-blockchain_test_from_state_test-value_bearing_True] | 8.50s | 8.50s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-1MiB] | 8.48s | 8.48s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-blockchain_test-opcode_CREATE] | 8.48s | 8.48s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 8.18s | 8.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 8.17s | 8.17s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 8.17s | 8.17s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 8.09s | 8.09s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 8.09s | 8.09s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 8.06s | 8.06s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 8.06s | 8.06s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 7.99s | 7.99s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 7.98s | 7.98s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 7.98s | 7.98s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 7.97s | 7.97s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 7.97s | 7.97s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 7.96s | 7.96s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with zero data-opcode_CREATE2] | 7.96s | 7.96s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 7.95s | 7.95s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 7.95s | 7.95s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 7.95s | 7.95s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes with value-opcode_CREATE] | 7.94s | 7.94s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 7.92s | 7.92s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 7.92s | 7.92s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_2_sets] | 7.91s | 7.91s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 7.91s | 7.91s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 7.90s | 7.90s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 7.89s | 7.89s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 7.89s | 7.89s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 7.89s | 7.89s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with non-zero data-opcode_CREATE] | 7.89s | 7.89s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 7.89s | 7.89s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 7.88s | 7.88s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 7.88s | 7.88s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 7.88s | 7.88s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with zero data-opcode_CREATE] | 7.87s | 7.87s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 7.87s | 7.87s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 7.87s | 7.87s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of zero data-opcode_REVERT] | 7.86s | 7.86s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 7.86s | 7.86s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_1024b_exp_1024] | 7.85s | 7.85s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 7.85s | 7.85s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 7.85s | 7.85s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of zero data-opcode_RETURN] | 7.84s | 7.84s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 7.84s | 7.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_1024b_exp_1024] | 7.84s | 7.84s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_1_pair_empty] | 7.82s | 7.82s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 7.82s | 7.82s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 7.82s | 7.82s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 7.81s | 7.81s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 7.81s | 7.81s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value, revert] | 7.80s | 7.80s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 7.80s | 7.80s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1000000] | 7.79s | 7.79s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 7.79s | 7.79s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value, revert] | 7.79s | 7.79s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes without value-opcode_CREATE2] | 7.78s | 7.78s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 7.78s | 7.78s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 7.78s | 7.78s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes without value-opcode_CREATE] | 7.78s | 7.78s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 7.78s | 7.78s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-blockchain_test-opcode_CREATE2] | 7.77s | 7.77s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-blockchain_test_from_state_test-value_bearing_True] | 7.77s | 7.77s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_1_pair] | 7.77s | 7.77s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 7.77s | 7.77s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-blockchain_test_from_state_test-value_bearing_False] | 7.76s | 7.76s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_zero_input] | 7.75s | 7.75s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 7.74s | 7.74s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 7.74s | 7.74s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 7.72s | 7.72s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 7.72s | 7.72s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 7.71s | 7.71s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 7.71s | 7.71s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 7.71s | 7.71s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 7.71s | 7.71s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 7.70s | 7.70s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 7.70s | 7.70s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 7.70s | 7.70s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 7.70s | 7.70s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 7.68s | 7.68s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes with value-opcode_CREATE2] | 7.68s | 7.68s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 7.68s | 7.68s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 7.67s | 7.67s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 7.66s | 7.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 7.66s | 7.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 7.66s | 7.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 7.65s | 7.65s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 7.64s | 7.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 7.60s | 7.60s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_3_pair] | 7.59s | 7.59s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 7.49s | 7.49s |
| test_worst_compute.py::test_empty_block[fork_Prague-blockchain_test] | 7.12s | 7.12s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| zisk-v0.13.0 | 533 | 497 | 36 | 0 |

---

