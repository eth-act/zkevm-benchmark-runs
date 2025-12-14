# 1xL40s - 5M-gas-limit

## Gas Limit Configuration - Proving

EEST benchmarks with 5M-gas-limit gas limit (proving results) on **1xL40s** hardware.

## Available EL Clients

- [ethrex](#ethrex)
- [reth](#reth)

---

## ethrex


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | sp1-v5.2.3<br/>(1.41MiB) | zisk-v0.14.0<br/>(244.02KiB) | Avg |
|-----------|-----------|-----------|----------|
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_8b_exp_896] | 44m 17.32s | ❌ SDK Crash | 44m 17.32s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-point_evaluation] | 37m 8.10s | ❌ SDK Crash | 37m 8.10s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_2_even] | 32m 29.29s | ❌ SDK Crash | 32m 29.29s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_marius_1_even] | 31m 1.39s | ❌ SDK Crash | 31m 1.39s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g1add] | 30m 57.62s | ❌ SDK Crash | 30m 57.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_16b_exp_320] | 29m 9.89s | ❌ SDK Crash | 29m 9.89s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_127] | 55m 26.80s | 47.23s | 28m 7.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_1_even] | 26m 13.86s | ❌ SDK Crash | 26m 13.86s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_800_gas_exp_heavy] | 25m 17.57s | ❌ SDK Crash | 25m 17.57s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_852_gas_exp_heavy] | 25m 17.20s | ❌ SDK Crash | 25m 17.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_8_exp_896] | 25m 3.61s | ❌ SDK Crash | 25m 3.61s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_191] | 48m 48.74s | 47.10s | 24m 47.92s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_298_gas_exp_heavy] | 24m 44.34s | ❌ SDK Crash | 24m 44.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_600_gas_exp_heavy] | 24m 25.68s | ❌ SDK Crash | 24m 25.68s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_8_exp_648] | 24m 8.05s | ❌ SDK Crash | 24m 8.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_215_gas_exp_heavy] | 24m 2.67s | ❌ SDK Crash | 24m 2.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_2] | 23m 29.97s | ❌ SDK Crash | 23m 29.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_400_gas_exp_heavy] | 23m 26.19s | ❌ SDK Crash | 23m 26.19s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_255] | 42m 8.93s | 47.81s | 21m 28.37s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_63] | 41m 52.88s | 47.49s | 21m 20.18s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_127] | 36m 51.64s | 4m 38.07s | 20m 44.85s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_127] | 36m 30.04s | 4m 39.26s | 20m 34.65s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_qube] | 33m 44.08s | 7m 21.25s | 20m 32.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_800_gas_base_heavy] | 33m 3.94s | 7m 33.18s | 20m 18.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_867_gas_base_heavy] | 32m 55.79s | 7m 25.98s | 20m 10.88s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_616_gas_base_heavy] | 32m 42.83s | 7m 34.28s | 20m 8.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_qube] | 32m 10.29s | 7m 30.11s | 19m 50.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_408_gas_base_heavy] | 31m 56.41s | 7m 28.94s | 19m 42.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_264_exp_2] | 31m 50.43s | 7m 27.19s | 19m 38.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1045_gas_base_heavy] | 32m 4.51s | 7m 2.72s | 19m 33.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_256_exp_2] | 30m 33.10s | 6m 56.93s | 18m 45.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_base_heavy] | 26m 58.35s | 6m 37.86s | 16m 48.10s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_square] | 26m 16.14s | 5m 51.33s | 16m 3.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_qube] | 26m 2.83s | 5m 56.45s | 15m 59.64s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g2add] | 24m 10.52s | 7m 20.95s | 15m 45.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_exp_heavy] | 23m 44.24s | 7m 45.55s | 15m 44.89s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_square] | 25m 0.81s | 6m 9.11s | 15m 34.96s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1024_exp_2] | 24m 45.73s | 5m 25.25s | 15m 5.49s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SDIV-1] | 25m 34.12s | 4m 4.31s | 14m 49.21s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_63] | 26m 52.48s | 2m 39.99s | 14m 46.24s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_127] | 25m 16.17s | 4m 5.51s | 14m 40.84s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_63] | 26m 29.01s | 2m 40.93s | 14m 34.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_24b_exp_168] | 20m 45.56s | 7m 30.40s | 14m 7.98s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-blake2f] | 20m 46.44s | 6m 45.43s | 13m 45.93s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_191] | 23m 28.14s | 3m 35.39s | 13m 31.77s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_191] | 23m 17.96s | 3m 34.37s | 13m 26.16s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_DIV-1] | 22m 0.04s | 3m 38.88s | 12m 49.46s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_square] | 20m 50.03s | 4m 48.20s | 12m 49.12s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SDIV-0] | 21m 46.42s | 3m 43.72s | 12m 45.07s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_DIV-0] | 21m 24.98s | 3m 38.25s | 12m 31.61s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add_1_2] | 20m 4.73s | 4m 46.13s | 12m 25.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_765_gas_exp_heavy] | 18m 6.84s | 6m 4.35s | 12m 5.59s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_3_exp_8] | 17m 49.57s | 6m 17.74s | 12m 3.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_3] | 17m 48.88s | 5m 59.96s | 11m 54.42s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add] | 19m 14.08s | 4m 30.13s | 11m 52.11s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_pairing_check] | 12m 49.34s | 10m 29.94s | 11m 39.63s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_256] | 17m 29.55s | 5m 35.94s | 11m 32.74s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_96] | 16m 50.90s | 5m 32.60s | 11m 11.75s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_191] | 18m 28.53s | 3m 26.06s | 10m 57.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_40] | 15m 48.23s | 5m 10.61s | 10m 29.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_256] | 15m 31.31s | 4m 48.16s | 10m 9.74s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1360_gas_balanced] | 15m 15.73s | 4m 43.07s | 9m 59.40s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_example_1] | 15m 12.42s | 4m 43.58s | 9m 58.00s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1349n1] | 15m 13.30s | 4m 38.75s | 9m 56.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1360n1] | 15m 7.42s | 4m 44.36s | 9m 55.89s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_63] | 16m 48.34s | 2m 52.83s | 9m 50.58s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_cover_windows] | 14m 58.39s | 4m 41.75s | 9m 50.07s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_677_gas_base_heavy] | 14m 57.87s | 4m 42.07s | 9m 49.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_128] | 14m 55.84s | 4m 42.17s | 9m 49.01s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_96] | 14m 50.21s | 4m 39.84s | 9m 45.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_64] | 14m 45.02s | 4m 42.97s | 9m 44.00s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_65] | 14m 46.24s | 4m 40.77s | 9m 43.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_4] | 14m 44.73s | 4m 39.54s | 9m 42.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1360n2] | 14m 20.03s | 4m 31.23s | 9m 25.63s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_qube] | 14m 40.14s | 4m 7.50s | 9m 23.82s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_balanced] | 14m 4.54s | 4m 18.50s | 9m 11.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_208_gas_balanced] | 13m 51.79s | 4m 30.95s | 9m 11.37s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_40] | 13m 51.41s | 4m 30.09s | 9m 10.75s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_36] | 13m 8.08s | 4m 18.73s | 8m 43.40s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1152n1] | 13m 15.22s | 4m 7.22s | 8m 41.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_996_gas_balanced] | 13m 50.70s | 3m 31.42s | 8m 41.06s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_767_gas_balanced] | 13m 39.12s | 3m 33.78s | 8m 36.45s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_600_gas_balanced] | 13m 23.34s | 3m 49.40s | 8m 36.37s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_408_gas_balanced] | 13m 16.19s | 3m 49.01s | 8m 32.60s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_64b_exp_512] | 12m 43.49s | 3m 10.46s | 7m 56.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_32] | 11m 49.72s | 3m 53.65s | 7m 51.68s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_square] | 12m 8.12s | 3m 33.68s | 7m 50.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_64b_exp_512] | 12m 20.46s | 2m 59.03s | 7m 39.74s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 11m 28.20s | 3m 16.25s | 7m 22.23s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 11m 25.97s | 2m 39.12s | 7m 2.55s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n2] | 10m 32.01s | 3m 27.78s | 6m 59.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n3] | 10m 33.21s | 3m 26.28s | 6m 59.75s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_255] | 11m 1.87s | 2m 48.03s | 6m 54.95s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_fp_to_g2] | 6m 42.91s | 6m 49.69s | 6m 46.30s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_255] | 11m 3.52s | 2m 28.05s | 6m 45.79s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_255] | 10m 51.49s | 2m 27.22s | 6m 39.35s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_CALLCODE] | 7m 39.40s | 5m 36.80s | 6m 38.10s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_DELEGATECALL] | 7m 37.97s | 5m 37.62s | 6m 37.79s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_STATICCALL] | 7m 34.61s | 5m 38.55s | 6m 36.58s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_CALL] | 7m 34.76s | 5m 36.68s | 6m 35.72s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODESIZE] | 7m 31.59s | 5m 34.04s | 6m 32.81s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODEHASH] | 7m 29.20s | 5m 31.39s | 6m 30.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 10m 42.05s | 2m 17.19s | 6m 29.62s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODECOPY] | 7m 14.42s | 5m 22.20s | 6m 18.31s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_128b_exp_1024] | 10m 20.31s | 2m 16.21s | 6m 18.26s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_128b_exp_1024] | 10m 19.11s | 2m 13.86s | 6m 16.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n1] | 9m 4.08s | 3m 2.58s | 6m 3.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 9m 45.90s | 2m 4.07s | 5m 54.99s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_256b_exp_1024] | 9m 32.38s | 1m 59.66s | 5m 46.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_256b_exp_1024] | 9m 30.30s | 1m 57.95s | 5m 44.12s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_fp_to_g1] | 3m 20.78s | 6m 25.21s | 4m 52.99s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_5_pair] | 8m 41.83s | 32.97s | 4m 37.40s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_512b_exp_1024] | 7m 30.72s | 1m 35.64s | 4m 33.18s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_4_pair] | 8m 31.65s | 34.52s | 4m 33.08s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_512b_exp_1024] | 7m 29.36s | 1m 36.47s | 4m 32.92s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_2_pair] | 8m 16.18s | 39.58s | 4m 27.88s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_two_pairings] | 8m 15.34s | 40.00s | 4m 27.67s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-SHA2-256] | 8m 0.68s | 41.38s | 4m 21.03s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_one_pairing] | 7m 52.17s | 45.59s | 4m 18.88s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-blockchain_test] | 8m 5.20s | 27.66s | 4m 16.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 6m 43.90s | 1m 33.85s | 4m 8.87s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_qube] | 6m 4.67s | 2m 1.87s | 4m 3.27s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_EXP-] | 6m 50.73s | 59.09s | 3m 54.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_3_even] | 5m 51.99s | 1m 24.33s | 3m 38.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_square] | 5m 18.75s | 1m 54.86s | 3m 36.81s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_PREVRANDAO] | 4m 35.55s | 2m 21.79s | 3m 28.67s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_STATICCALL] | 4m 15.66s | 2m 32.40s | 3m 24.03s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_CALL] | 4m 9.80s | 2m 26.70s | 3m 18.25s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_CALLCODE] | 4m 9.16s | 2m 27.11s | 3m 18.13s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 4m 5.65s | 2m 27.30s | 3m 16.47s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g2msm] | 3m 19.22s | 3m 4.13s | 3m 11.68s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_STATICCALL] | 3m 47.15s | 2m 15.69s | 3m 1.42s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-blockchain_test] | 3m 19.61s | 2m 41.63s | 3m 0.62s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-blockchain_test-contract_balance_1] | 3m 44.74s | 2m 15.91s | 3m 0.33s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-blockchain_test-contract_balance_0] | 3m 45.04s | 2m 14.78s | 2m 59.91s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_CALL] | 3m 45.51s | 2m 10.72s | 2m 58.12s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_CALLCODE] | 3m 44.35s | 2m 11.07s | 2m 57.71s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-empty-opcode_REVERT] | 3m 38.64s | 2m 12.78s | 2m 55.71s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 3m 39.56s | 2m 10.58s | 2m 55.07s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g1msm] | 1m 30.88s | 4m 18.67s | 2m 54.78s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-empty-opcode_RETURN] | 3m 32.32s | 2m 8.43s | 2m 50.37s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-zero-loop] | 3m 24.01s | 1m 35.32s | 2m 29.66s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of zero data-opcode_REVERT] | 3m 24.10s | 1m 33.52s | 2m 28.81s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of zero data-opcode_RETURN] | 3m 24.83s | 1m 32.28s | 2m 28.55s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add_infinities] | 3m 31.78s | 1m 19.12s | 2m 25.45s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 3m 26.64s | 1m 24.14s | 2m 25.39s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 3m 25.09s | 1m 24.22s | 2m 24.66s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-one-loop] | 3m 11.56s | 1m 33.74s | 2m 22.65s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-0 bytes] | 3m 18.13s | 1m 22.55s | 2m 20.34s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0 bytes] | 3m 19.09s | 1m 21.41s | 2m 20.25s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SIGNEXTEND-] | 3m 33.09s | 1m 4.01s | 2m 18.55s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ecrecover] | 3m 41.92s | 39.67s | 2m 10.80s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-empty] | 2m 53.52s | 1m 22.45s | 2m 7.99s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SAR-] | 3m 8.06s | 1m 4.01s | 2m 6.03s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 2m 45.61s | 1m 17.42s | 2m 1.51s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 2m 44.97s | 1m 18.02s | 2m 1.50s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-0 bytes] | 2m 48.75s | 1m 9.33s | 1m 59.04s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 2m 41.39s | 1m 15.42s | 1m 58.41s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_EQ-] | 2m 38.41s | 1m 10.99s | 1m 54.70s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH27] | 2m 13.01s | 1m 31.72s | 1m 52.37s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-blockchain_test-shift_right_SAR] | 2m 44.89s | 58.31s | 1m 51.60s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH26] | 2m 11.92s | 1m 26.02s | 1m 48.97s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 2m 26.14s | 1m 10.90s | 1m 48.52s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH32] | 1m 51.33s | 1m 44.79s | 1m 48.06s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 2m 24.98s | 1m 11.11s | 1m 48.05s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH31] | 1m 55.25s | 1m 39.94s | 1m 47.59s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-100 bytes] | 2m 27.74s | 1m 7.30s | 1m 47.52s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH30] | 1m 54.08s | 1m 39.74s | 1m 46.91s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH25] | 2m 5.69s | 1m 26.12s | 1m 45.91s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SHL-] | 2m 39.42s | 51.86s | 1m 45.64s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH24] | 2m 6.99s | 1m 23.62s | 1m 45.30s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH29] | 1m 51.45s | 1m 34.24s | 1m 42.85s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 2m 23.83s | 1m 1.22s | 1m 42.53s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH23] | 1m 57.83s | 1m 21.87s | 1m 39.85s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH28] | 1m 46.65s | 1m 32.53s | 1m 39.59s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_ORIGIN] | 1m 55.12s | 1m 23.96s | 1m 39.54s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH22] | 1m 54.00s | 1m 18.94s | 1m 36.47s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_COINBASE] | 1m 53.23s | 1m 18.21s | 1m 35.72s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CALLER] | 1m 54.82s | 1m 16.48s | 1m 35.65s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-blockchain_test-shift_right_SHR] | 2m 15.55s | 50.40s | 1m 32.97s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_ADDRESS] | 1m 53.60s | 1m 11.31s | 1m 32.45s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH21] | 1m 48.43s | 1m 16.14s | 1m 32.28s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH20] | 1m 51.90s | 1m 12.04s | 1m 31.97s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-5b] | 2m 20.37s | 41.89s | 1m 31.13s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SHR-] | 2m 6.99s | 48.19s | 1m 27.59s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH19] | 1m 43.88s | 1m 10.81s | 1m 27.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_1_exp_heavy] | 2m 1.01s | 52.80s | 1m 26.90s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SSTORE new value] | 1m 51.79s | 59.88s | 1m 25.83s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH18] | 1m 41.60s | 1m 6.13s | 1m 23.86s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-100 bytes] | 1m 52.41s | 54.31s | 1m 23.36s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH16] | 1m 41.35s | 1m 5.02s | 1m 23.18s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-six blobs, access latest] | 1m 28.46s | 1m 15.41s | 1m 21.94s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 46.16s | 57.71s | 1m 21.93s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH17] | 1m 38.19s | 1m 4.81s | 1m 21.50s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 46.26s | 56.29s | 1m 21.27s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 44.88s | 57.19s | 1m 21.03s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 44.86s | 57.19s | 1m 21.03s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 45.29s | 56.59s | 1m 20.94s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 45.20s | 56.59s | 1m 20.89s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 44.98s | 56.79s | 1m 20.89s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH15] | 1m 39.45s | 1m 2.30s | 1m 20.88s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 44.50s | 57.00s | 1m 20.75s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 44.98s | 56.29s | 1m 20.63s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 45.06s | 56.19s | 1m 20.62s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 44.45s | 56.39s | 1m 20.42s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 44.63s | 55.99s | 1m 20.31s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-blockchain_test] | 1m 38.44s | 58.40s | 1m 18.42s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH14] | 1m 35.66s | 59.69s | 1m 17.67s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-one blob and accessed] | 1m 28.90s | 1m 4.99s | 1m 16.95s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GAS] | 1m 43.24s | 45.58s | 1m 14.41s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH13] | 1m 30.81s | 57.21s | 1m 14.01s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_MUL-] | 1m 55.61s | 29.16s | 1m 12.39s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH12] | 1m 26.97s | 54.89s | 1m 10.93s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-max code size] | 1m 34.21s | 45.67s | 1m 9.94s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 1m 30.43s | 44.98s | 1m 7.70s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 1m 33.71s | 39.77s | 1m 6.74s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 1m 30.37s | 42.66s | 1m 6.52s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 23.66s | 49.18s | 1m 6.42s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH8] | 1m 22.55s | 48.81s | 1m 5.68s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH10] | 1m 21.31s | 49.80s | 1m 5.56s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH7] | 1m 22.04s | 47.58s | 1m 4.81s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH9] | 1m 20.55s | 48.89s | 1m 4.72s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH11] | 1m 16.22s | 53.18s | 1m 4.70s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul] | 1m 52.12s | 14.23s | 1m 3.18s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH6] | 1m 19.77s | 46.48s | 1m 3.12s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-605b5b] | 1m 39.79s | 25.85s | 1m 2.82s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 23.83s | 39.57s | 1m 1.70s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 24.51s | 38.80s | 1m 1.66s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 1m 48.98s | 14.27s | 1m 1.63s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 23.41s | 39.76s | 1m 1.59s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 23.39s | 39.77s | 1m 1.58s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 23.74s | 39.17s | 1m 1.45s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 23.11s | 39.77s | 1m 1.44s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 23.55s | 39.17s | 1m 1.36s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 23.34s | 38.97s | 1m 1.16s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 1m 47.70s | 14.34s | 1m 1.02s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 22.31s | 38.87s | 1m 0.59s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 22.24s | 38.69s | 1m 0.46s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 22.03s | 38.66s | 1m 0.35s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH5] | 1m 16.18s | 42.89s | 59.53s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_2_exp_heavy] | 1m 21.16s | 37.06s | 59.11s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CHAINID] | 1m 20.91s | 36.38s | 58.65s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_NUMBER] | 1m 20.95s | 36.27s | 58.61s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_BASEFEE] | 1m 20.92s | 35.90s | 58.41s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_TIMESTAMP] | 1m 20.14s | 36.16s | 58.15s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_BLOBBASEFEE] | 1m 19.73s | 36.27s | 58.00s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH4] | 1m 14.94s | 40.67s | 57.81s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GASPRICE] | 1m 19.75s | 35.76s | 57.75s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_LT-] | 1m 22.00s | 32.67s | 57.34s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-blockchain_test] | 1m 14.90s | 39.57s | 57.23s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH3] | 1m 15.01s | 38.48s | 56.74s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_GT-] | 1m 21.11s | 32.06s | 56.59s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1000] | 1m 17.54s | 35.27s | 56.40s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_MOD-] | 1m 19.78s | 29.06s | 54.42s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_0] | 1m 13.53s | 35.17s | 54.35s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-615b5b5b] | 1m 27.05s | 20.84s | 53.94s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1] | 1m 12.98s | 34.77s | 53.88s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GASLIMIT] | 1m 13.48s | 34.17s | 53.83s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-blockchain_test] | 1m 12.63s | 34.47s | 53.55s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP11] | 1m 19.21s | 27.64s | 53.43s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP14] | 1m 19.41s | 27.25s | 53.33s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP2] | 1m 19.24s | 27.36s | 53.30s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP7] | 1m 19.47s | 27.07s | 53.27s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP12] | 1m 19.25s | 27.26s | 53.25s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP13] | 1m 19.07s | 27.36s | 53.22s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP5] | 1m 19.42s | 26.88s | 53.15s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP15] | 1m 18.79s | 27.46s | 53.12s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP8] | 1m 18.86s | 27.36s | 53.11s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP1] | 1m 18.73s | 27.45s | 53.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_4_exp_heavy] | 1m 12.30s | 33.87s | 53.08s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CODESIZE] | 1m 11.89s | 34.16s | 53.02s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP6] | 1m 18.33s | 27.66s | 52.99s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-0 bytes] | 1m 15.09s | 30.87s | 52.98s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH0] | 1m 11.67s | 34.27s | 52.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_3_exp_heavy] | 1m 12.14s | 33.78s | 52.96s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP16] | 1m 18.26s | 27.55s | 52.91s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP3] | 1m 18.34s | 27.45s | 52.90s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP10] | 1m 18.49s | 27.25s | 52.87s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP4] | 1m 18.35s | 27.26s | 52.80s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH2] | 1m 11.64s | 33.28s | 52.46s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP9] | 1m 17.18s | 26.85s | 52.02s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 1m 13.17s | 30.28s | 51.72s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 1m 6.27s | 37.16s | 51.72s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 1m 6.16s | 37.17s | 51.67s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 1m 12.83s | 30.47s | 51.65s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-00] | 1m 23.18s | 19.84s | 51.51s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SLT-] | 1m 11.60s | 30.37s | 50.98s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SSTORE same value] | 1m 6.91s | 34.96s | 50.93s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-0 bytes] | 1m 9.59s | 31.86s | 50.72s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH1] | 1m 8.43s | 32.56s | 50.49s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-IDENTITY] | 1m 14.91s | 25.96s | 50.44s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_ADD-] | 1m 11.94s | 28.67s | 50.31s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SGT-] | 1m 10.18s | 30.05s | 50.11s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0 bytes] | 1m 10.17s | 29.35s | 49.76s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_BYTE-] | 1m 10.34s | 28.26s | 49.30s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SUB-] | 1m 8.33s | 28.46s | 48.40s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-no blobs] | 1m 6.71s | 27.94s | 47.32s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-one blob but access non-existent index] | 1m 6.08s | 27.96s | 47.02s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 1m 3.79s | 29.06s | 46.43s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 1m 3.59s | 29.05s | 46.33s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 1m 3.41s | 29.16s | 46.28s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 1m 3.64s | 28.75s | 46.20s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 1m 3.20s | 28.96s | 46.08s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-605b] | 1m 15.30s | 16.75s | 46.02s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 1m 3.37s | 28.67s | 46.02s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 1m 3.33s | 28.66s | 45.99s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 1m 2.91s | 29.05s | 45.98s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 1m 3.11s | 28.86s | 45.98s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 59.79s | 32.16s | 45.98s |
| test_worst_compute.py::test_worst_unop[fork_Prague-blockchain_test-opcode_ISZERO] | 1m 4.48s | 27.40s | 45.94s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_AND-] | 1m 5.91s | 25.86s | 45.88s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 1m 2.87s | 28.85s | 45.86s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 1m 2.49s | 28.97s | 45.73s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 1m 2.03s | 29.06s | 45.55s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-100 bytes] | 1m 1.54s | 28.76s | 45.15s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP12] | 1m 1.56s | 27.86s | 44.71s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_OR-] | 1m 3.50s | 25.86s | 44.68s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP16] | 1m 1.50s | 27.85s | 44.67s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP11] | 1m 0.76s | 28.17s | 44.47s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_XOR-] | 1m 3.07s | 25.85s | 44.46s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP8] | 1m 0.89s | 27.95s | 44.42s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP3] | 1m 1.01s | 27.76s | 44.38s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP13] | 1m 0.76s | 27.96s | 44.36s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP2] | 1m 0.52s | 28.15s | 44.34s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP14] | 1m 0.68s | 27.97s | 44.33s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP6] | 1m 0.78s | 27.76s | 44.27s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP5] | 1m 0.36s | 28.05s | 44.21s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP7] | 1m 0.62s | 27.74s | 44.18s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_diff_acc_to_diff_acc] | 1m 7.33s | 20.84s | 44.09s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP10] | 1m 0.20s | 27.96s | 44.08s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP15] | 1m 0.01s | 28.06s | 44.03s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP4] | 1m 0.21s | 27.86s | 44.03s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP9] | 1m 0.12s | 27.85s | 43.98s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-10KiB] | 1m 1.75s | 25.16s | 43.45s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP1] | 59.73s | 26.86s | 43.30s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 56.20s | 29.68s | 42.94s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-1KiB] | 55.92s | 29.76s | 42.84s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 53.33s | 32.08s | 42.71s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_True-non_zero_value_False] | 57.19s | 27.86s | 42.53s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_False-non_zero_value_False] | 56.90s | 27.85s | 42.38s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_True-non_zero_value_True] | 56.94s | 27.76s | 42.35s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 52.85s | 31.79s | 42.32s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-615b5b] | 1m 10.28s | 13.84s | 42.06s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_BALANCE] | 54.66s | 29.45s | 42.05s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_False-non_zero_value_True] | 55.64s | 27.75s | 41.70s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_BALANCE] | 54.53s | 28.75s | 41.64s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_diff_acc_to_b] | 1m 3.59s | 19.25s | 41.42s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 52.17s | 29.37s | 40.77s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value] | 50.76s | 30.57s | 40.66s |
| test_worst_compute.py::test_worst_unop[fork_Prague-blockchain_test-opcode_NOT] | 57.10s | 24.05s | 40.58s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-512] | 52.97s | 28.18s | 40.57s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_diff_acc] | 1m 1.20s | 18.25s | 39.73s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-5KiB] | 52.24s | 26.95s | 39.59s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.50x max code size] | 52.80s | 26.36s | 39.58s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 55.16s | 23.54s | 39.35s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 51.44s | 26.96s | 39.20s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-100 bytes] | 52.63s | 25.66s | 39.15s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 51.47s | 26.76s | 39.12s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 51.31s | 26.67s | 38.99s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_0] | 51.58s | 26.37s | 38.98s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.25x max code size] | 49.97s | 27.95s | 38.96s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 51.34s | 26.56s | 38.95s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_10000] | 51.42s | 26.46s | 38.94s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 51.26s | 26.47s | 38.86s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 51.03s | 26.66s | 38.84s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_1000] | 50.41s | 26.85s | 38.63s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_100000] | 59.65s | 17.04s | 38.34s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SMOD-] | 55.02s | 21.44s | 38.23s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.25x max code size] | 48.73s | 25.55s | 37.14s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_b] | 58.37s | 15.74s | 37.06s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-max code size] | 48.40s | 25.45s | 36.92s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.50x max code size] | 48.07s | 25.45s | 36.76s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSLOAD] | 47.78s | 25.56s | 36.67s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_a] | 57.59s | 15.74s | 36.66s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SLOAD] | 45.55s | 24.35s | 34.95s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value, revert] | 44.64s | 24.75s | 34.69s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 43.69s | 25.25s | 34.47s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_True-key_mut_True] | 42.89s | 21.36s | 32.12s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_True-key_mut_False] | 43.09s | 21.15s | 32.12s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_False-key_mut_True] | 42.99s | 20.95s | 31.97s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_False-key_mut_False] | 42.44s | 20.73s | 31.58s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-10KiB] | 40.75s | 21.96s | 31.36s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-1MiB] | 45.71s | 16.34s | 31.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_zkevm_worst_case] | 41.73s | 20.23s | 30.98s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-10KiB] | 45.08s | 16.43s | 30.75s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value] | 39.48s | 21.35s | 30.42s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_True-key_mut_False] | 40.16s | 19.55s | 29.85s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-RIPEMD-160] | 38.38s | 21.15s | 29.77s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.75x max code size] | 38.86s | 20.65s | 29.75s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_True-key_mut_True] | 39.91s | 19.16s | 29.53s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-blockchain_test] | 41.91s | 16.94s | 29.43s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_True-empty_authority_False] | 45.56s | 13.13s | 29.34s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_False-empty_authority_False] | 45.31s | 13.25s | 29.28s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_False-empty_authority_True] | 43.91s | 12.54s | 28.22s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_True-empty_authority_True] | 44.18s | 11.63s | 27.91s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-blockchain_test-absent_accounts_False-opcode_BALANCE] | 35.11s | 20.64s | 27.88s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 28.79s | 26.76s | 27.78s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-blockchain_test] | 39.20s | 16.14s | 27.67s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-blockchain_test-value_bearing_True] | 35.87s | 18.64s | 27.25s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSLOAD] | 35.80s | 17.54s | 26.67s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_1_2_2_scalar] | 20.80s | 31.77s | 26.28s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_example_2] | 35.60s | 16.95s | 26.27s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 29.12s | 22.64s | 25.88s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-blockchain_test] | 33.61s | 16.24s | 24.93s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-1MiB] | 36.25s | 11.34s | 23.79s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 29.10s | 14.94s | 22.02s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 32.25s | 11.64s | 21.95s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.75x max code size] | 29.62s | 14.24s | 21.93s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value, revert] | 28.88s | 14.95s | 21.91s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-blockchain_test-zero_byte_True] | 31.08s | 12.63s | 21.86s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 29.29s | 14.34s | 21.82s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-10KiB] | 29.29s | 14.34s | 21.82s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 26.37s | 13.73s | 20.05s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-blockchain_test-value_bearing_False] | 25.43s | 13.54s | 19.48s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-blockchain_test] | 25.60s | 12.04s | 18.82s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 22.51s | 11.43s | 16.97s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 21.92s | 11.38s | 16.65s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-blockchain_test-absent_accounts_True-opcode_BALANCE] | 21.91s | 11.24s | 16.58s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 23.79s | 9.22s | 16.51s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 19.75s | 11.63s | 15.69s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_False-key_mut_True] | 19.90s | 10.73s | 15.31s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 20.69s | 9.83s | 15.26s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_False-key_mut_False] | 20.09s | 10.33s | 15.21s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 22.21s | 7.74s | 14.97s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 21.01s | 7.82s | 14.42s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-1MiB] | 20.16s | 8.43s | 14.30s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 18.61s | 9.63s | 14.12s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 18.40s | 9.13s | 13.76s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 18.33s | 9.02s | 13.67s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-1MiB] | 18.89s | 7.73s | 13.31s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 16.83s | 9.33s | 13.08s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 16.66s | 9.32s | 12.99s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 16.23s | 9.63s | 12.93s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value] | 16.13s | 8.93s | 12.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 16.31s | 8.52s | 12.42s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of zero data-opcode_REVERT] | 17.01s | 7.73s | 12.37s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 16.16s | 8.43s | 12.29s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of zero data-opcode_RETURN] | 16.75s | 7.72s | 12.24s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-blockchain_test-opcode_CREATE] | 15.24s | 8.84s | 12.04s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value] | 14.85s | 8.72s | 11.79s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 14.92s | 8.58s | 11.75s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 14.57s | 8.72s | 11.65s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-blockchain_test-zero_byte_False] | 15.23s | 8.03s | 11.63s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-blockchain_test_from_state_test-value_bearing_False] | 14.41s | 8.72s | 11.57s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 14.81s | 8.32s | 11.56s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_infinities_2_scalar] | 14.34s | 8.72s | 11.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 14.66s | 8.32s | 11.49s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 14.42s | 8.42s | 11.42s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-blockchain_test_from_state_test-value_bearing_True] | 13.92s | 8.73s | 11.32s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes with value-opcode_CREATE] | 13.94s | 8.13s | 11.04s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 14.31s | 7.72s | 11.02s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 14.11s | 7.62s | 10.87s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes with value-opcode_CREATE2] | 13.73s | 7.92s | 10.82s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-blockchain_test_from_state_test-value_bearing_False] | 14.12s | 7.53s | 10.82s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-blockchain_test_from_state_test-value_bearing_True] | 13.53s | 8.03s | 10.78s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 13.69s | 7.62s | 10.66s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1000000] | 13.68s | 7.32s | 10.50s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes without value-opcode_CREATE] | 13.35s | 7.62s | 10.48s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 13.30s | 7.63s | 10.47s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 13.28s | 7.63s | 10.46s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 13.14s | 7.73s | 10.43s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 12.99s | 7.73s | 10.36s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-blockchain_test-opcode_CREATE2] | 12.80s | 7.73s | 10.27s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with zero data-opcode_CREATE] | 13.05s | 7.32s | 10.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 12.67s | 7.63s | 10.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 12.68s | 7.63s | 10.15s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes without value-opcode_CREATE2] | 12.67s | 7.62s | 10.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 12.45s | 7.83s | 10.14s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value, revert] | 12.51s | 7.72s | 10.11s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value, revert] | 12.33s | 7.64s | 9.98s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 12.45s | 7.22s | 9.84s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 12.31s | 7.22s | 9.77s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 12.37s | 7.12s | 9.75s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 12.10s | 7.33s | 9.71s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_1_pair] | 12.13s | 7.12s | 9.63s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 11.99s | 7.24s | 9.61s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 12.01s | 7.22s | 9.61s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 12.14s | 7.02s | 9.58s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 12.05s | 7.02s | 9.54s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 11.83s | 7.23s | 9.53s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 11.56s | 7.23s | 9.40s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 11.86s | 6.93s | 9.39s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 11.76s | 7.02s | 9.39s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 11.61s | 7.12s | 9.37s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 11.67s | 7.02s | 9.35s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 11.63s | 7.02s | 9.33s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with zero data-opcode_CREATE2] | 11.51s | 7.12s | 9.32s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 11.50s | 7.12s | 9.31s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 11.38s | 7.22s | 9.30s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 11.46s | 7.12s | 9.29s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 11.46s | 7.12s | 9.29s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_2_sets] | 11.44s | 7.12s | 9.28s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_1_pair_empty] | 11.33s | 7.23s | 9.28s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 11.42s | 7.12s | 9.27s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 11.51s | 7.02s | 9.26s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 11.38s | 7.13s | 9.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_1024b_exp_1024] | 11.47s | 7.02s | 9.24s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 11.46s | 7.03s | 9.24s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 11.46s | 7.03s | 9.24s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_3_pair] | 11.34s | 7.12s | 9.23s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 11.30s | 7.12s | 9.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 11.29s | 7.13s | 9.21s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 11.25s | 7.16s | 9.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 11.26s | 7.12s | 9.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 11.25s | 7.12s | 9.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 11.23s | 7.14s | 9.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 11.16s | 7.19s | 9.18s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 11.31s | 7.02s | 9.17s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 11.18s | 7.14s | 9.16s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 11.09s | 7.22s | 9.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 11.06s | 7.22s | 9.14s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 11.25s | 7.02s | 9.13s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_1024b_exp_1024] | 11.13s | 7.13s | 9.13s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_zero_input] | 11.10s | 7.14s | 9.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 11.10s | 7.12s | 9.11s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 11.09s | 7.12s | 9.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 10.88s | 7.33s | 9.10s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with non-zero data-opcode_CREATE] | 11.18s | 7.02s | 9.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 10.90s | 7.24s | 9.07s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 11.02s | 7.12s | 9.07s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 11.00s | 7.12s | 9.06s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 10.92s | 7.19s | 9.06s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 10.98s | 7.12s | 9.05s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 10.87s | 7.22s | 9.05s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 10.79s | 7.23s | 9.01s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 10.89s | 7.12s | 9.01s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 10.93s | 7.02s | 8.97s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 10.79s | 7.12s | 8.96s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 10.79s | 7.12s | 8.96s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 11.05s | 6.83s | 8.94s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 10.64s | 7.13s | 8.89s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 10.51s | 7.23s | 8.87s |
| test_worst_compute.py::test_empty_block[fork_Prague-blockchain_test] | 7.70s | 6.42s | 7.06s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| sp1-v5.2.3 | 533 | 533 | 0 | 0 |
| zisk-v0.14.0 | 533 | 517 | 16 | 0 |

---

## reth


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | sp1-v5.2.3<br/>(1.41MiB) | zisk-v0.14.0<br/>(244.02KiB) | Avg |
|-----------|-----------|-----------|----------|
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_qube] | ❌ SDK Crash | ❌ SDK Crash | — |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_qube] | 1h 57m 27.82s | ❌ SDK Crash | 1h 57m 27.82s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_square] | 1h 50m 22.81s | ❌ SDK Crash | 1h 50m 22.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1024_exp_2] | 1h 48m 58.56s | ❌ SDK Crash | 1h 48m 58.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_square] | 1h 47m 32.22s | ❌ SDK Crash | 1h 47m 32.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1045_gas_base_heavy] | 1h 43m 32.04s | ❌ SDK Crash | 1h 43m 32.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_867_gas_base_heavy] | 1h 43m 5.78s | ❌ SDK Crash | 1h 43m 5.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_800_gas_base_heavy] | 1h 42m 12.24s | ❌ SDK Crash | 1h 42m 12.24s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-point_evaluation] | 1h 40m 10.97s | ❌ SDK Crash | 1h 40m 10.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_qube] | 1h 40m 1.99s | ❌ SDK Crash | 1h 40m 1.99s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_616_gas_base_heavy] | 1h 39m 2.97s | ❌ SDK Crash | 1h 39m 2.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_408_gas_base_heavy] | 1h 33m 9.65s | ❌ SDK Crash | 1h 33m 9.65s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_264_exp_2] | 1h 31m 21.77s | ❌ SDK Crash | 1h 31m 21.77s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_square] | 1h 30m 53.80s | ❌ SDK Crash | 1h 30m 53.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_256_exp_2] | 1h 29m 12.47s | ❌ SDK Crash | 1h 29m 12.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_base_heavy] | 1h 14m 21.53s | ❌ SDK Crash | 1h 14m 21.53s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_3_even] | 57m 27.39s | ❌ SDK Crash | 57m 27.39s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_8b_exp_896] | 54m 13.76s | ❌ SDK Crash | 54m 13.76s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_8_exp_896] | 52m 59.66s | ❌ SDK Crash | 52m 59.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_298_gas_exp_heavy] | 52m 54.77s | ❌ SDK Crash | 52m 54.77s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_1_exp_heavy] | 51m 2.67s | ❌ SDK Crash | 51m 2.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_215_gas_exp_heavy] | 48m 20.84s | ❌ SDK Crash | 48m 20.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_8_exp_648] | 48m 13.67s | ❌ SDK Crash | 48m 13.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_exp_heavy] | 47m 14.76s | ❌ SDK Crash | 47m 14.76s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_qube] | 39m 49.49s | ❌ SDK Crash | 39m 49.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_800_gas_exp_heavy] | 33m 20.92s | ❌ SDK Crash | 33m 20.92s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_852_gas_exp_heavy] | 33m 19.90s | ❌ SDK Crash | 33m 19.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_600_gas_exp_heavy] | 32m 12.70s | ❌ SDK Crash | 32m 12.70s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_16b_exp_320] | 31m 19.57s | ❌ SDK Crash | 31m 19.57s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_2] | 30m 17.31s | ❌ SDK Crash | 30m 17.31s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_400_gas_exp_heavy] | 30m 0.14s | ❌ SDK Crash | 30m 0.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_2_even] | 29m 19.51s | ❌ SDK Crash | 29m 19.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_2_exp_heavy] | 28m 56.91s | ❌ SDK Crash | 28m 56.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_marius_1_even] | 25m 55.30s | ❌ SDK Crash | 25m 55.30s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_fp_to_g1] | 39m 31.87s | 6m 32.53s | 23m 2.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_square] | 36m 43.58s | 8m 43.72s | 22m 43.65s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_pairing_check] | 36m 42.59s | 6m 53.05s | 21m 47.82s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_24b_exp_168] | 25m 42.93s | 7m 58.37s | 16m 50.65s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_765_gas_exp_heavy] | 25m 51.29s | 7m 43.33s | 16m 47.31s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_fp_to_g2] | 28m 20.05s | 4m 54.93s | 16m 37.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_3] | 24m 42.00s | 7m 20.65s | 16m 1.32s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_256] | 24m 38.00s | 7m 1.78s | 15m 49.89s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_256] | 24m 41.54s | 6m 48.81s | 15m 45.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_example_1] | 24m 16.01s | 6m 49.24s | 15m 32.63s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_1360_gas_balanced] | 24m 16.33s | 6m 45.10s | 15m 30.71s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_3_exp_heavy] | 23m 25.40s | 6m 36.05s | 15m 0.73s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_96] | 23m 7.08s | 6m 53.52s | 15m 0.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_zkevm_worst_case] | 23m 44.68s | 6m 11.77s | 14m 58.23s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_677_gas_base_heavy] | 22m 55.20s | 6m 26.48s | 14m 40.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_128] | 22m 45.25s | 6m 30.98s | 14m 38.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_3_exp_8] | 21m 59.71s | 7m 12.31s | 14m 36.01s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_example_2] | 22m 52.33s | 5m 52.28s | 14m 22.31s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_96] | 22m 22.19s | 6m 21.46s | 14m 21.83s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_pawel_4] | 22m 12.42s | 6m 13.00s | 14m 12.71s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_64b_exp_512] | 22m 57.20s | 5m 22.62s | 14m 9.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_65] | 21m 57.79s | 6m 13.57s | 14m 5.68s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_64b_exp_512] | 22m 39.00s | 5m 22.03s | 14m 0.51s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g2add] | 22m 46.93s | 5m 4.78s | 13m 55.86s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-blake2f] | 20m 45.11s | 6m 38.33s | 13m 41.72s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_996_gas_balanced] | 21m 59.19s | 5m 24.14s | 13m 41.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1360n1] | 21m 22.55s | 5m 54.44s | 13m 38.49s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_600_gas_balanced] | 21m 27.51s | 5m 38.52s | 13m 33.01s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_767_gas_balanced] | 21m 45.21s | 5m 16.79s | 13m 31.00s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_pawel_4_exp_heavy] | 21m 15.24s | 5m 33.33s | 13m 24.29s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_408_gas_balanced] | 20m 59.13s | 5m 35.71s | 13m 17.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_64] | 20m 37.03s | 5m 55.13s | 13m 16.08s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_32b_exp_40] | 20m 3.85s | 6m 13.27s | 13m 8.56s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g1add] | 21m 16.91s | 4m 51.75s | 13m 4.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_min_gas_balanced] | 20m 8.63s | 5m 34.62s | 12m 51.63s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_128b_exp_1024] | 20m 59.27s | 4m 40.14s | 12m 49.70s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_128b_exp_1024] | 20m 41.24s | 4m 37.76s | 12m 39.50s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1349n1] | 19m 22.58s | 5m 20.47s | 12m 21.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1360n2] | 19m 11.06s | 5m 25.87s | 12m 18.46s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_256b_exp_1024] | 20m 10.36s | 4m 22.57s | 12m 16.46s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_256b_exp_1024] | 20m 7.72s | 4m 21.37s | 12m 14.54s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_guido_1_even] | 16m 46.23s | 7m 35.93s | 12m 11.08s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_40] | 18m 42.36s | 5m 23.29s | 12m 2.82s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_exp_208_gas_balanced] | 18m 41.79s | 5m 22.65s | 12m 2.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_36] | 18m 11.88s | 5m 14.47s | 11m 43.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_32b_exp_cover_windows] | 17m 39.12s | 5m 3.86s | 11m 21.49s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g1msm] | 19m 5.60s | 3m 18.69s | 11m 12.14s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_2_pow_0x10001] | 17m 56.43s | 4m 20.06s | 11m 8.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_3_pow_0x10001] | 17m 56.16s | 4m 6.65s | 11m 1.40s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_pow_0x10001] | 17m 10.39s | 4m 26.13s | 10m 48.26s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_4_pow_0x10001] | 17m 36.50s | 3m 56.74s | 10m 46.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_5_pow_0x10001] | 16m 57.85s | 3m 49.30s | 10m 23.58s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_512b_exp_1024] | 16m 58.76s | 3m 39.20s | 10m 18.98s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_512b_exp_1024] | 16m 58.48s | 3m 38.73s | 10m 18.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_32_exp_32] | 15m 51.03s | 4m 36.29s | 10m 13.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n3] | 13m 43.60s | 3m 51.06s | 8m 47.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n2] | 13m 41.61s | 3m 49.32s | 8m 45.46s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_1152n1] | 13m 9.58s | 3m 52.00s | 8m 30.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_qube] | 12m 48.33s | 3m 13.34s | 8m 0.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_nagydani_1_square] | 12m 7.96s | 3m 3.15s | 7m 35.56s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bls12_g2msm] | 11m 37.84s | 2m 13.09s | 6m 55.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_vul_common_200n1] | 10m 33.70s | 3m 3.75s | 6m 48.73s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_DELEGATECALL] | 7m 36.01s | 5m 5.71s | 6m 20.86s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODESIZE] | 7m 33.85s | 5m 6.01s | 6m 19.93s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_STATICCALL] | 7m 32.22s | 5m 5.95s | 6m 19.08s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_CALLCODE] | 7m 27.85s | 5m 8.63s | 6m 18.24s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_CALL] | 7m 28.75s | 5m 7.71s | 6m 18.23s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODEHASH] | 7m 28.14s | 5m 2.83s | 6m 15.49s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_191] | 9m 52.41s | 2m 38.18s | 6m 15.29s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-blockchain_test-opcode_EXTCODECOPY] | 7m 20.82s | 4m 57.50s | 6m 9.16s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_255] | 9m 39.07s | 2m 34.11s | 6m 6.59s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-blockchain_test-contract_balance_1] | 7m 31.84s | 4m 7.73s | 5m 49.78s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-blockchain_test-contract_balance_0] | 7m 28.64s | 4m 7.98s | 5m 48.31s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul] | 11m 19.61s | 14.13s | 5m 46.87s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_1_2_32_byte_scalar] | 10m 58.90s | 14.05s | 5m 36.47s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_32_byte_coord_and_scalar] | 10m 53.50s | 13.94s | 5m 33.72s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_5_pair] | 8m 40.65s | 32.98s | 4m 36.81s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_4_pair] | 8m 33.63s | 33.30s | 4m 33.46s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_127] | 7m 2.93s | 1m 58.26s | 4m 30.60s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_2_pair] | 8m 9.24s | 38.79s | 4m 24.01s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_two_pairings] | 8m 8.23s | 37.80s | 4m 23.01s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_191] | 6m 49.84s | 1m 55.87s | 4m 22.85s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_one_pairing] | 7m 53.60s | 45.19s | 4m 19.40s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-blockchain_test] | 8m 3.29s | 26.47s | 4m 14.88s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_191] | 6m 27.45s | 1m 51.68s | 4m 9.57s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SDIV-1] | 6m 10.25s | 1m 43.21s | 3m 56.73s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SDIV-0] | 6m 4.73s | 1m 40.37s | 3m 52.55s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_MULMOD-mod_bits_63] | 5m 21.10s | 1m 41.53s | 3m 31.32s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_DIV-0] | 5m 23.64s | 1m 31.45s | 3m 27.54s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_127] | 5m 18.73s | 1m 25.19s | 3m 21.96s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_255] | 5m 0.73s | 1m 34.83s | 3m 17.78s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_infinities_32_byte_scalar] | 6m 24.80s | 8.83s | 3m 16.82s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_127] | 5m 8.80s | 1m 19.53s | 3m 14.17s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_DIV-1] | 4m 58.97s | 1m 27.93s | 3m 13.45s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_191] | 4m 48.26s | 1m 34.29s | 3m 11.28s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_255] | 4m 50.96s | 1m 29.22s | 3m 10.09s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_255] | 3m 53.78s | 1m 26.63s | 2m 40.21s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_PREVRANDAO] | 2m 51.59s | 2m 20.98s | 2m 36.28s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_127] | 3m 50.83s | 1m 16.12s | 2m 33.47s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_SMOD-mod_bits_63] | 3m 33.63s | 1m 6.43s | 2m 20.03s |
| test_worst_compute.py::test_worst_mod[fork_Prague-blockchain_test-op_MOD-mod_bits_63] | 3m 22.74s | 1m 1.90s | 2m 12.31s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ecrecover] | 3m 42.06s | 38.28s | 2m 10.17s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add] | 2m 31.19s | 1m 47.19s | 2m 9.19s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-blockchain_test] | 2m 12.03s | 2m 5.86s | 2m 8.95s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-SHA2-256] | 3m 40.93s | 36.87s | 2m 8.90s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add_1_2] | 2m 26.30s | 1m 40.64s | 2m 3.47s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP15] | 2m 7.88s | 1m 49.10s | 1m 58.49s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP6] | 2m 8.44s | 1m 48.04s | 1m 58.24s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP12] | 2m 9.47s | 1m 46.64s | 1m 58.05s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP5] | 2m 10.11s | 1m 45.54s | 1m 57.83s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP2] | 2m 8.34s | 1m 47.27s | 1m 57.80s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP3] | 2m 8.51s | 1m 46.90s | 1m 57.70s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP4] | 2m 8.38s | 1m 46.53s | 1m 57.45s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP9] | 2m 7.10s | 1m 47.44s | 1m 57.27s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP14] | 2m 9.29s | 1m 45.16s | 1m 57.22s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP7] | 2m 8.34s | 1m 45.54s | 1m 56.94s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP16] | 2m 8.79s | 1m 44.85s | 1m 56.82s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP1] | 2m 9.82s | 1m 42.84s | 1m 56.33s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP13] | 2m 9.29s | 1m 43.26s | 1m 56.27s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP11] | 2m 8.62s | 1m 43.07s | 1m 55.84s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP8] | 2m 8.06s | 1m 43.43s | 1m 55.74s |
| test_worst_compute.py::test_worst_swap[fork_Prague-blockchain_test-opcode_SWAP10] | 2m 7.41s | 1m 43.92s | 1m 55.66s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-blockchain_test-op_ADDMOD-mod_bits_63] | 2m 40.32s | 1m 5.09s | 1m 52.71s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SGT-] | 2m 35.29s | 1m 8.90s | 1m 52.09s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_EXP-] | 3m 8.33s | 28.66s | 1m 48.49s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-zero-loop] | 2m 20.43s | 1m 12.35s | 1m 46.39s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-empty-opcode_REVERT] | 2m 15.59s | 1m 17.02s | 1m 46.31s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_EQ-] | 2m 27.65s | 1m 4.12s | 1m 45.89s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-one-loop] | 2m 17.74s | 1m 13.81s | 1m 45.78s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_COINBASE] | 2m 5.68s | 1m 25.37s | 1m 45.53s |
| test_worst_compute.py::test_worst_unop[fork_Prague-blockchain_test-opcode_ISZERO] | 2m 22.39s | 1m 8.25s | 1m 45.32s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_ORIGIN] | 2m 4.40s | 1m 25.38s | 1m 44.89s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_ADDRESS] | 2m 4.86s | 1m 15.33s | 1m 40.10s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CALLER] | 2m 7.98s | 1m 11.11s | 1m 39.55s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_CALL] | 2m 5.92s | 1m 10.87s | 1m 38.39s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_STATICCALL] | 2m 5.38s | 1m 10.70s | 1m 38.04s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_CALLCODE] | 2m 4.78s | 1m 9.58s | 1m 37.18s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-empty-opcode_RETURN] | 2m 4.39s | 1m 9.42s | 1m 36.91s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH32] | 1m 42.05s | 1m 31.46s | 1m 36.76s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH31] | 1m 41.67s | 1m 26.04s | 1m 33.85s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SMOD-] | 2m 10.21s | 56.19s | 1m 33.20s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH30] | 1m 40.46s | 1m 24.62s | 1m 32.54s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH29] | 1m 39.86s | 1m 22.65s | 1m 31.25s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-blockchain_test-empty] | 1m 53.85s | 1m 2.19s | 1m 28.02s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH28] | 1m 35.11s | 1m 20.54s | 1m 27.83s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH27] | 1m 35.22s | 1m 18.72s | 1m 26.97s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_CALL] | 1m 52.44s | 1m 0.79s | 1m 26.61s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_STATICCALL] | 1m 50.73s | 1m 2.41s | 1m 26.57s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_CALLCODE] | 1m 51.71s | 1m 1.10s | 1m 26.41s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_DELEGATECALL] | 1m 50.39s | 1m 2.20s | 1m 26.30s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_MOD-] | 1m 56.31s | 49.59s | 1m 22.95s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH26] | 1m 31.37s | 1m 14.11s | 1m 22.74s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH25] | 1m 27.69s | 1m 14.00s | 1m 20.84s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH24] | 1m 27.59s | 1m 13.73s | 1m 20.66s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SAR-] | 1m 58.20s | 38.66s | 1m 18.43s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of zero data-opcode_REVERT] | 1m 43.99s | 52.21s | 1m 18.10s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH23] | 1m 28.73s | 1m 7.19s | 1m 17.96s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SSTORE new value] | 1m 42.84s | 51.48s | 1m 17.16s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH22] | 1m 27.69s | 1m 6.31s | 1m 17.00s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_DELEGATECALL] | 1m 36.84s | 54.22s | 1m 15.53s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-six blobs, access latest] | 1m 23.44s | 1m 6.29s | 1m 14.86s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_BLOBBASEFEE] | 1m 44.64s | 41.19s | 1m 12.91s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH21] | 1m 22.37s | 1m 3.02s | 1m 12.69s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-blockchain_test-shift_right_SAR] | 1m 48.57s | 35.17s | 1m 11.87s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of zero data-opcode_RETURN] | 1m 35.37s | 48.07s | 1m 11.72s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GASPRICE] | 1m 41.75s | 39.68s | 1m 10.72s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH20] | 1m 20.64s | 1m 0.76s | 1m 10.70s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH19] | 1m 20.62s | 1m 0.40s | 1m 10.51s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_add_infinities] | 1m 19.43s | 1m 1.41s | 1m 10.42s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-one blob and accessed] | 1m 22.80s | 57.80s | 1m 10.30s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SHR-] | 1m 41.31s | 33.15s | 1m 7.23s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SHL-] | 1m 41.60s | 31.08s | 1m 6.34s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-blockchain_test-shift_right_SHR] | 1m 40.41s | 31.96s | 1m 6.19s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH18] | 1m 16.35s | 55.88s | 1m 6.12s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_MUL-] | 1m 46.62s | 24.95s | 1m 5.78s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH17] | 1m 13.82s | 54.91s | 1m 4.37s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_NUMBER] | 1m 31.78s | 36.46s | 1m 4.12s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH16] | 1m 13.59s | 53.28s | 1m 3.44s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 26.11s | 39.77s | 1m 2.94s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-0 bytes] | 1m 31.68s | 33.27s | 1m 2.48s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH15] | 1m 14.84s | 50.08s | 1m 2.46s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 24.64s | 40.18s | 1m 2.41s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 25.27s | 39.47s | 1m 2.37s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_TIMESTAMP] | 1m 28.44s | 36.26s | 1m 2.35s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 1m 24.02s | 40.47s | 1m 2.25s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 1m 32.50s | 31.96s | 1m 2.23s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 1m 24.04s | 40.38s | 1m 2.21s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 1m 32.20s | 32.06s | 1m 2.13s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 24.20s | 39.97s | 1m 2.08s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 1m 24.05s | 39.97s | 1m 2.01s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 24.72s | 39.18s | 1m 1.95s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 1m 24.19s | 39.38s | 1m 1.78s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 23.88s | 39.66s | 1m 1.77s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 1m 23.80s | 39.70s | 1m 1.74s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 1m 24.23s | 38.99s | 1m 1.61s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH14] | 1m 11.53s | 48.92s | 1m 0.23s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of non-zero data-opcode_RETURN] | 1m 22.43s | 37.97s | 1m 0.20s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0 bytes] | 1m 30.24s | 30.15s | 1m 0.20s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-blockchain_test] | 1m 24.41s | 35.87s | 1m 0.13s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1KiB of non-zero data-opcode_REVERT] | 1m 19.71s | 40.28s | 59.99s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 12.27s | 47.69s | 59.98s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 11.87s | 47.78s | 59.83s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_True-key_mut_True] | 1m 19.39s | 40.09s | 59.74s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-0 bytes] | 1m 28.78s | 30.37s | 59.58s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_True-key_mut_False] | 1m 19.29s | 39.58s | 59.44s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 11.49s | 47.38s | 59.43s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CHAINID] | 1m 22.85s | 35.66s | 59.26s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 10.66s | 47.77s | 59.22s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 10.55s | 47.89s | 59.22s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 11.14s | 47.28s | 59.21s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 1m 10.61s | 47.69s | 59.15s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 1m 9.99s | 48.28s | 59.13s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 1m 9.49s | 48.27s | 58.88s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 1m 9.70s | 47.89s | 58.79s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_CODESIZE] | 1m 20.83s | 36.57s | 58.70s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 1m 9.56s | 47.69s | 58.62s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_BASEFEE] | 1m 21.66s | 35.56s | 58.61s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-blockchain_test] | 1m 21.17s | 35.95s | 58.56s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SIGNEXTEND-] | 1m 28.44s | 28.45s | 58.44s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 1m 9.02s | 47.60s | 58.31s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_0] | 1m 20.67s | 35.76s | 58.22s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1] | 1m 20.11s | 36.06s | 58.08s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1000] | 1m 19.64s | 35.36s | 57.50s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH13] | 1m 8.06s | 46.69s | 57.37s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GAS] | 1m 20.19s | 34.47s | 57.33s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-blockchain_test-opcode_GASLIMIT] | 1m 19.86s | 34.26s | 57.06s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH0] | 1m 17.72s | 34.16s | 55.94s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH12] | 1m 5.71s | 44.46s | 55.09s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH11] | 1m 6.71s | 42.57s | 54.64s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SSTORE same value] | 1m 11.72s | 36.66s | 54.19s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-100 bytes] | 1m 17.14s | 31.05s | 54.09s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 1m 13.94s | 32.87s | 53.40s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 1m 14.36s | 32.25s | 53.31s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-0 bytes] | 1m 15.45s | 29.06s | 52.26s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 1m 12.30s | 31.05s | 51.68s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_True-non_zero_value_False] | 1m 14.80s | 27.15s | 50.98s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-100 bytes] | 1m 8.60s | 32.26s | 50.43s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_False-non_zero_value_False] | 1m 13.69s | 27.05s | 50.37s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_False-non_zero_value_True] | 1m 13.49s | 27.15s | 50.32s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-blockchain_test-from_origin_True-non_zero_value_True] | 1m 13.07s | 27.18s | 50.12s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH7] | 1m 1.53s | 36.56s | 49.05s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH10] | 58.49s | 39.29s | 48.89s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 1m 9.59s | 26.76s | 48.17s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH9] | 57.69s | 38.47s | 48.08s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH8] | 56.77s | 38.50s | 47.64s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SLT-] | 1m 7.79s | 27.15s | 47.47s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-blockchain_test] | 1m 7.26s | 26.55s | 46.91s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_EXTCODEHASH] | 59.25s | 32.27s | 45.76s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 1m 5.21s | 25.55s | 45.38s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH6] | 55.98s | 34.47s | 45.22s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 1m 5.25s | 24.95s | 45.10s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-blockchain_test] | 53.90s | 36.27s | 45.09s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-5b] | 58.41s | 31.27s | 44.84s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_SUB-] | 1m 4.37s | 23.34s | 43.86s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 1m 1.39s | 25.85s | 43.62s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 1m 1.33s | 25.75s | 43.54s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_1000] | 1m 1.57s | 25.46s | 43.52s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 1m 1.23s | 25.76s | 43.50s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 1m 1.28s | 25.65s | 43.47s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_10000] | 1m 1.52s | 25.27s | 43.40s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 59.93s | 25.88s | 42.90s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-blockchain_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 59.95s | 25.76s | 42.85s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-blockchain_test-calldata_length_0] | 1m 0.04s | 25.58s | 42.81s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH4] | 55.28s | 29.35s | 42.32s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-10KiB] | 1m 1.09s | 23.36s | 42.23s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_LT-] | 1m 3.05s | 21.25s | 42.15s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH5] | 52.37s | 31.69s | 42.03s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 1m 1.32s | 22.46s | 41.89s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_BYTE-] | 1m 0.72s | 22.35s | 41.54s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 1m 0.62s | 22.25s | 41.43s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_GT-] | 1m 1.60s | 20.84s | 41.22s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0 bytes] | 59.65s | 22.25s | 40.95s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_ADD-] | 58.88s | 22.94s | 40.91s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 59.20s | 22.45s | 40.82s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 58.86s | 22.26s | 40.56s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 58.52s | 22.55s | 40.53s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 58.68s | 22.34s | 40.51s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 58.79s | 22.16s | 40.48s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 58.33s | 22.45s | 40.39s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_diff_acc_to_diff_acc] | 1m 5.77s | 14.44s | 40.10s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 57.82s | 22.36s | 40.09s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 58.12s | 22.04s | 40.08s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 57.77s | 22.34s | 40.05s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-blockchain_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 58.09s | 21.96s | 40.02s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_XOR-] | 59.31s | 20.55s | 39.93s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_AND-] | 58.93s | 20.46s | 39.69s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-0 bytes] | 57.01s | 21.95s | 39.48s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-blockchain_test-opcode_OR-] | 58.25s | 20.44s | 39.34s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-100 bytes] | 55.58s | 22.25s | 38.91s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH3] | 49.64s | 27.98s | 38.81s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP4] | 54.94s | 21.75s | 38.34s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-one blob but access non-existent index] | 49.10s | 27.45s | 38.27s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP3] | 54.11s | 22.14s | 38.13s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-IDENTITY] | 1m 0.98s | 15.24s | 38.11s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_diff_acc_to_b] | 1m 2.26s | 13.63s | 37.94s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP10] | 54.06s | 21.78s | 37.92s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-blockchain_test-no blobs] | 49.69s | 26.05s | 37.87s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP7] | 53.66s | 22.05s | 37.85s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP16] | 53.95s | 21.75s | 37.85s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP8] | 53.80s | 21.85s | 37.82s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP11] | 53.86s | 21.64s | 37.75s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP9] | 53.70s | 21.75s | 37.73s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP2] | 53.60s | 21.75s | 37.67s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP13] | 53.65s | 21.64s | 37.64s |
| test_worst_compute.py::test_worst_unop[fork_Prague-blockchain_test-opcode_NOT] | 55.91s | 19.36s | 37.63s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP1] | 53.41s | 21.85s | 37.63s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP12] | 53.20s | 21.95s | 37.58s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP5] | 53.15s | 21.84s | 37.50s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP15] | 53.17s | 21.75s | 37.46s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_EXTCODESIZE] | 48.27s | 26.56s | 37.41s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP14] | 52.69s | 22.04s | 37.36s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_diff_acc] | 1m 2.26s | 12.45s | 37.35s |
| test_worst_compute.py::test_worst_dup[fork_Prague-blockchain_test-opcode_DUP6] | 52.75s | 21.95s | 37.35s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_True-opcode_BALANCE] | 47.73s | 26.85s | 37.29s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH2] | 51.92s | 22.16s | 37.04s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 51.38s | 22.05s | 36.72s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-100 bytes] | 49.45s | 23.75s | 36.60s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-blockchain_test] | 51.21s | 20.64s | 35.92s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 50.37s | 20.65s | 35.51s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 47.55s | 23.15s | 35.35s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_b] | 58.84s | 10.94s | 34.89s |
| test_worst_compute.py::test_worst_push[fork_Prague-blockchain_test-opcode_PUSH1] | 48.65s | 21.06s | 34.85s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-blockchain_test-case_id_a_to_a] | 58.22s | 11.03s | 34.63s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-00] | 48.28s | 20.15s | 34.21s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.25x max code size] | 42.33s | 25.55s | 33.94s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-10KiB] | 44.49s | 21.54s | 33.02s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 46.17s | 19.54s | 32.85s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-605b5b] | 44.76s | 20.84s | 32.80s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.75x max code size] | 39.77s | 25.77s | 32.77s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_False-key_mut_False] | 43.10s | 22.25s | 32.67s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-blockchain_test-dense_val_mut_False-key_mut_True] | 42.72s | 22.05s | 32.39s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-0.50x max code size] | 38.07s | 25.36s | 31.72s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-blockchain_test-SLOAD] | 42.78s | 20.65s | 31.72s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_False-max code size] | 37.78s | 25.24s | 31.51s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 37.76s | 25.05s | 31.41s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_EXTCODEHASH] | 39.72s | 22.95s | 31.33s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 37.16s | 25.05s | 31.11s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_False-1MiB] | 45.98s | 16.13s | 31.06s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 38.62s | 22.65s | 30.64s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-10KiB] | 44.91s | 15.85s | 30.38s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_EXTCODESIZE] | 38.82s | 21.57s | 30.19s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-blockchain_test-absent_target_False-opcode_BALANCE] | 38.23s | 21.15s | 29.69s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_False-empty_authority_True] | 46.63s | 12.64s | 29.64s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_False-empty_authority_False] | 46.46s | 12.64s | 29.55s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-615b5b5b] | 39.95s | 18.56s | 29.25s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_True-empty_authority_False] | 45.52s | 12.34s | 28.93s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-blockchain_test-RIPEMD-160] | 37.18s | 19.84s | 28.51s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-512] | 37.17s | 19.64s | 28.41s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-1KiB] | 38.58s | 18.12s | 28.35s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 37.43s | 19.15s | 28.29s |
| test_worst_blocks.py::test_worst_case_auth_block[fork_Prague-blockchain_test-zero_delegation_True-empty_authority_True] | 44.05s | 12.23s | 28.14s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value, revert] | 36.95s | 19.25s | 28.10s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-blockchain_test] | 39.40s | 16.74s | 28.07s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE same value] | 35.53s | 18.84s | 27.18s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-605b] | 38.46s | 15.74s | 27.10s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_True-key_mut_False] | 36.15s | 17.27s | 26.71s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSLOAD] | 35.10s | 17.94s | 26.52s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_True-key_mut_True] | 34.58s | 17.04s | 25.81s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-blockchain_test-absent_accounts_False-opcode_BALANCE] | 33.41s | 17.65s | 25.53s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-blockchain_test-615b5b] | 35.91s | 13.93s | 24.92s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-blockchain_test-fixed_src_dst_True-1MiB] | 37.62s | 11.53s | 24.57s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value] | 33.44s | 15.15s | 24.30s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-blockchain_test-5KiB] | 32.42s | 15.23s | 23.83s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.25x max code size] | 30.86s | 14.55s | 22.71s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 31.06s | 14.13s | 22.59s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.75x max code size] | 30.56s | 14.34s | 22.45s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-blockchain_test-value_bearing_True] | 29.26s | 15.15s | 22.21s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-max code size] | 29.77s | 14.64s | 22.20s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-blockchain_test-fixed_src_dst_True-0.50x max code size] | 30.53s | 13.83s | 22.18s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-10KiB] | 30.02s | 14.33s | 22.17s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 29.70s | 14.34s | 22.02s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 29.79s | 14.13s | 21.96s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-blockchain_test-zero_byte_True] | 25.49s | 14.04s | 19.76s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-blockchain_test-value_bearing_False] | 25.44s | 12.94s | 19.19s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSLOAD] | 25.58s | 12.73s | 19.16s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value, revert] | 23.04s | 12.24s | 17.64s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 22.94s | 12.14s | 17.54s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 23.74s | 11.34s | 17.54s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_32_byte_coord_and_2_scalar] | 23.48s | 9.73s | 16.61s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 21.41s | 11.64s | 16.52s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-blockchain_test-absent_accounts_True-opcode_BALANCE] | 22.59s | 10.43s | 16.51s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-blockchain_test] | 20.98s | 11.33s | 16.15s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_1_2_2_scalar] | 22.39s | 9.43s | 15.91s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 21.59s | 8.63s | 15.11s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-bn128_mul_infinities_2_scalar] | 21.35s | 8.72s | 15.04s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 21.46s | 8.54s | 15.00s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_100000] | 20.02s | 9.73s | 14.88s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_False-key_mut_False] | 19.44s | 9.73s | 14.58s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_False-1MiB] | 20.18s | 8.42s | 14.30s |
| test_worst_compute.py::test_worst_tload[fork_Prague-blockchain_test-val_mut_False-key_mut_True] | 18.83s | 9.53s | 14.18s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-blockchain_test-fixed_dst_True-1MiB] | 20.12s | 7.62s | 13.87s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 19.64s | 7.62s | 13.63s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-blockchain_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 18.70s | 8.23s | 13.46s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 16.32s | 7.93s | 12.13s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of non-zero data-opcode_REVERT] | 16.45s | 7.62s | 12.04s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 16.16s | 7.82s | 11.99s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value] | 16.12s | 7.83s | 11.98s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 15.99s | 7.72s | 11.86s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of non-zero data-opcode_RETURN] | 16.15s | 7.43s | 11.79s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 15.32s | 8.03s | 11.68s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 15.29s | 7.86s | 11.57s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-blockchain_test-zero_byte_False] | 14.72s | 8.33s | 11.52s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 15.30s | 7.72s | 11.51s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value] | 14.75s | 8.04s | 11.39s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes with value-opcode_CREATE] | 15.74s | 7.03s | 11.38s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_2_sets] | 15.72s | 7.04s | 11.38s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 14.56s | 8.02s | 11.29s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with zero data-opcode_CREATE] | 15.29s | 7.13s | 11.21s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-blockchain_test-opcode_CREATE] | 14.60s | 7.82s | 11.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 14.41s | 7.83s | 11.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 14.61s | 7.62s | 11.12s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of zero data-opcode_REVERT] | 15.30s | 6.92s | 11.11s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-blockchain_test-1MiB of zero data-opcode_RETURN] | 15.18s | 7.03s | 11.11s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 14.08s | 7.93s | 11.00s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-blockchain_test_from_state_test-value_bearing_False] | 13.94s | 7.82s | 10.88s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with zero data-opcode_CREATE] | 14.53s | 7.03s | 10.78s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-blockchain_test_from_state_test-value_bearing_True] | 13.55s | 7.84s | 10.69s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 14.19s | 7.12s | 10.66s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes with value-opcode_CREATE2] | 14.28s | 7.02s | 10.65s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 13.97s | 7.32s | 10.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 14.46s | 6.82s | 10.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 14.10s | 7.12s | 10.61s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 13.81s | 7.36s | 10.59s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 14.01s | 7.02s | 10.51s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-blockchain_test-opcode_CREATE2] | 13.99s | 6.92s | 10.46s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 13.54s | 7.32s | 10.43s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 13.56s | 7.28s | 10.42s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes without value-opcode_CREATE] | 13.95s | 6.82s | 10.38s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-blockchain_test_from_state_test-value_bearing_True] | 13.61s | 7.13s | 10.37s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 13.71s | 7.02s | 10.37s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0 bytes without value-opcode_CREATE2] | 13.63s | 7.02s | 10.32s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 13.71s | 6.82s | 10.27s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-blockchain_test_from_state_test-value_bearing_False] | 13.63s | 6.82s | 10.22s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 13.49s | 6.92s | 10.21s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with non-zero data-opcode_CREATE2] | 13.45s | 6.82s | 10.14s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value, revert] | 13.38s | 6.83s | 10.10s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE new value, revert] | 13.37s | 6.82s | 10.09s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 13.34s | 6.82s | 10.08s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 13.31s | 6.84s | 10.07s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with zero data-opcode_CREATE2] | 13.01s | 7.12s | 10.07s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE2] | 13.18s | 6.92s | 10.05s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE2] | 13.16s | 6.92s | 10.04s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 12.99s | 7.03s | 10.01s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 13.36s | 6.63s | 9.99s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_zero_input] | 12.71s | 7.17s | 9.94s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with zero data-opcode_CREATE2] | 12.68s | 7.13s | 9.91s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE2] | 12.89s | 6.83s | 9.86s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with non-zero data-opcode_CREATE] | 12.88s | 6.82s | 9.85s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with zero data-opcode_CREATE2] | 12.77s | 6.92s | 9.84s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with non-zero data-opcode_CREATE] | 12.81s | 6.83s | 9.82s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 12.65s | 6.93s | 9.79s |
| test_worst_compute.py::test_worst_msize[fork_Prague-blockchain_test-mem_size_1000000] | 12.66s | 6.92s | 9.79s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.50x max code size with zero data-opcode_CREATE] | 12.62s | 6.94s | 9.78s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 12.41s | 7.13s | 9.77s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 12.51s | 7.03s | 9.77s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 12.47s | 7.03s | 9.75s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.75x max code size with non-zero data-opcode_CREATE] | 12.45s | 7.02s | 9.73s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 12.29s | 7.12s | 9.71s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 12.57s | 6.82s | 9.70s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 12.37s | 7.02s | 9.70s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 12.56s | 6.83s | 9.70s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 12.35s | 7.02s | 9.68s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 12.43s | 6.93s | 9.68s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 12.40s | 6.92s | 9.66s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_1_pair] | 12.50s | 6.82s | 9.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 12.39s | 6.93s | 9.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 12.39s | 6.92s | 9.66s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-max code size with zero data-opcode_CREATE2] | 12.29s | 7.02s | 9.65s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 12.28s | 7.03s | 9.65s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_3_pair] | 12.45s | 6.83s | 9.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 12.35s | 6.92s | 9.64s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 12.40s | 6.84s | 9.62s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 12.21s | 7.02s | 9.62s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with non-zero data-opcode_CREATE] | 12.39s | 6.82s | 9.61s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 12.46s | 6.72s | 9.59s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 12.33s | 6.82s | 9.58s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 12.32s | 6.82s | 9.57s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 12.20s | 6.92s | 9.56s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 12.22s | 6.82s | 9.52s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 12.09s | 6.95s | 9.52s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 12.08s | 6.93s | 9.51s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-blockchain_test-0.25x max code size with zero data-opcode_CREATE] | 11.98s | 7.03s | 9.50s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 12.08s | 6.92s | 9.50s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 11.96s | 7.03s | 9.50s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 12.02s | 6.92s | 9.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_odd_1024b_exp_1024] | 11.93s | 6.94s | 9.43s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-blockchain_test-mod_even_1024b_exp_1024] | 12.01s | 6.82s | 9.41s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 12.04s | 6.74s | 9.39s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 11.85s | 6.92s | 9.39s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 11.75s | 7.03s | 9.39s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-blockchain_test-ec_pairing_1_pair_empty] | 11.90s | 6.82s | 9.36s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 11.80s | 6.92s | 9.36s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 11.75s | 6.93s | 9.34s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 11.71s | 6.93s | 9.32s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 11.81s | 6.82s | 9.31s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 11.87s | 6.72s | 9.29s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 11.36s | 6.82s | 9.09s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-blockchain_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 11.24s | 6.92s | 9.08s |
| test_worst_compute.py::test_empty_block[fork_Prague-blockchain_test] | 8.96s | 6.22s | 7.59s |

## Summary

**Total unique test cases:** 533

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| sp1-v5.2.3 | 533 | 532 | 1 | 0 |
| zisk-v0.14.0 | 533 | 499 | 34 | 0 |

---

