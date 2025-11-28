# 1xL40s - 45M-gas-limit

## Gas Limit Configuration - Execution

EEST benchmarks with 45M-gas-limit gas limit (execution results) on **1xL40s** hardware.

## Available EL Clients

- [ethrex](#ethrex)
- [reth](#reth)

---

## ethrex


## Execution Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | risc0-v3.0.3 | sp1-v5.2.1 | Avg |
|-----------|-----------|-----------|----------|
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-point_evaluation] | 58m 5.83s | 14m 23.62s | 36m 14.73s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_127] | 29m 14.01s | 42m 27.98s | 35m 50.99s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 27m 22.90s | 42m 20.26s | 34m 51.57s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_8b_exp_896] | 28m 35.02s | 39m 42.87s | 34m 8.94s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_5_pair] | 25m 3.98s | 38m 7.85s | 31m 35.91s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_4_pair] | 24m 30.61s | 38m 4.43s | 31m 17.52s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_191] | 24m 25.34s | 37m 14.37s | 30m 49.86s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_2_pair] | 22m 44.27s | 34m 44.66s | 28m 44.46s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_two_pairings] | 22m 38.50s | 34m 47.89s | 28m 43.19s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_255] | 22m 46.64s | 32m 26.57s | 27m 36.61s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_one_pairing] | 20m 53.52s | 31m 11.31s | 26m 2.42s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_63] | 19m 18.87s | 29m 25.46s | 24m 22.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_guido_2_even] | 19m 35.28s | 28m 2.96s | 23m 49.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_marius_1_even] | 19m 20.84s | 27m 12.74s | 23m 16.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_800_gas_base_heavy] | 19m 44.52s | 26m 43.98s | 23m 14.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_867_gas_base_heavy] | 19m 37.54s | 26m 39.19s | 23m 8.36s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_616_gas_base_heavy] | 19m 49.43s | 26m 14.97s | 23m 2.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_1045_gas_base_heavy] | 19m 6.03s | 26m 19.16s | 22m 42.59s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_4_qube] | 18m 56.33s | 26m 15.36s | 22m 35.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_264_exp_2] | 19m 13.22s | 25m 36.32s | 22m 24.77s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g1add] | 18m 30.97s | 26m 14.80s | 22m 22.88s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_3_qube] | 18m 49.48s | 25m 20.15s | 22m 4.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_16b_exp_320] | 18m 38.94s | 25m 17.38s | 21m 58.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_408_gas_base_heavy] | 17m 31.84s | 25m 48.22s | 21m 40.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_256_exp_2] | 18m 14.91s | 24m 52.97s | 21m 33.94s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_127] | 17m 36.59s | 25m 30.49s | 21m 33.54s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_127] | 17m 43.01s | 25m 15.75s | 21m 29.38s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_guido_1_even] | 16m 55.42s | 23m 23.17s | 20m 9.30s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul] | 16m 6.29s | 23m 16.04s | 19m 41.17s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_min_gas_base_heavy] | 16m 41.43s | 22m 0.69s | 19m 21.06s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ecrecover] | 19m 8.83s | 19m 26.96s | 19m 17.89s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_1_2_32_byte_scalar] | 15m 25.15s | 22m 33.31s | 18m 59.23s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_scalar] | 15m 24.72s | 22m 32.59s | 18m 58.65s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_852_gas_exp_heavy] | 15m 46.66s | 21m 24.23s | 18m 35.44s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_800_gas_exp_heavy] | 15m 44.13s | 21m 15.67s | 18m 29.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_8_exp_896] | 15m 10.47s | 21m 24.84s | 18m 17.65s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_exp_298_gas_exp_heavy] | 15m 7.76s | 21m 21.86s | 18m 14.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_600_gas_exp_heavy] | 15m 26.21s | 20m 49.00s | 18m 7.60s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g2add] | 14m 56.07s | 20m 37.29s | 17m 46.68s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_4_square] | 15m 0.33s | 20m 30.54s | 17m 45.44s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_5_qube] | 14m 52.80s | 20m 31.06s | 17m 41.93s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_exp_215_gas_exp_heavy] | 14m 22.81s | 20m 23.29s | 17m 23.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_pawel_2] | 14m 48.36s | 19m 51.14s | 17m 19.75s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_3_square] | 14m 56.02s | 19m 37.25s | 17m 16.64s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_1024_exp_2] | 14m 28.74s | 20m 2.21s | 17m 15.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_400_gas_exp_heavy] | 14m 37.93s | 19m 33.55s | 17m 5.74s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_min_gas_exp_heavy] | 14m 4.36s | 20m 1.96s | 17m 3.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_8_exp_648] | 13m 31.29s | 20m 10.39s | 16m 50.84s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SDIV-1] | 13m 33.15s | 19m 32.72s | 16m 32.93s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_127] | 13m 32.59s | 19m 26.02s | 16m 29.30s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_pairing_check] | 26m 19.57s | 5m 39.37s | 15m 59.47s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_CALLCODE] | 27m 20.22s | 4m 7.13s | 15m 43.68s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_CALL] | 27m 17.68s | 4m 5.06s | 15m 41.37s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_STATICCALL] | 27m 8.19s | 4m 6.52s | 15m 37.35s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_DELEGATECALL] | 27m 7.90s | 4m 6.54s | 15m 37.22s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODESIZE] | 26m 58.17s | 3m 59.80s | 15m 28.99s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_add_1_2] | 12m 48.20s | 17m 49.30s | 15m 18.75s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_24b_exp_168] | 12m 55.60s | 17m 35.30s | 15m 15.45s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_191] | 12m 2.04s | 17m 14.28s | 14m 38.16s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODECOPY] | 25m 22.12s | 3m 53.13s | 14m 37.62s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODEHASH] | 25m 42.92s | 3m 29.36s | 14m 36.14s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_191] | 11m 58.38s | 17m 9.66s | 14m 34.02s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-blake2f] | 13m 0.45s | 16m 3.00s | 14m 31.72s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DIV-1] | 11m 39.72s | 17m 0.35s | 14m 20.04s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_63] | 11m 2.71s | 17m 37.34s | 14m 20.03s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SDIV-0] | 11m 44.17s | 16m 49.79s | 14m 16.98s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_add] | 11m 56.08s | 16m 27.18s | 14m 11.63s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_5_square] | 11m 53.39s | 16m 12.27s | 14m 2.83s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DIV-0] | 11m 16.90s | 16m 25.35s | 13m 51.13s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_63] | 10m 55.96s | 16m 9.65s | 13m 32.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_765_gas_exp_heavy] | 11m 10.01s | 15m 16.90s | 13m 13.45s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_pawel_3] | 11m 7.69s | 15m 2.85s | 13m 5.27s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_8] | 11m 3.08s | 15m 3.01s | 13m 3.05s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_fp_to_g2] | 21m 14.95s | 4m 27.88s | 12m 51.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_32b_exp_256] | 10m 26.54s | 14m 20.34s | 12m 23.44s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_32b_exp_96] | 10m 25.12s | 14m 10.76s | 12m 17.94s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_191] | 10m 4.55s | 14m 29.97s | 12m 17.26s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_fp_to_g1] | 19m 39.29s | 3m 44.03s | 11m 41.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_32b_exp_40] | 9m 46.30s | 13m 23.52s | 11m 34.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_256] | 9m 37.40s | 13m 8.70s | 11m 23.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_example_1] | 9m 37.78s | 12m 59.69s | 11m 18.74s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_1360_gas_balanced] | 9m 30.81s | 12m 58.83s | 11m 14.82s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_677_gas_base_heavy] | 9m 22.27s | 12m 50.37s | 11m 6.32s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_128] | 9m 25.81s | 12m 46.32s | 11m 6.07s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_96] | 9m 25.22s | 12m 41.60s | 11m 3.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_1360n1] | 9m 18.98s | 12m 43.77s | 11m 1.38s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_1349n1] | 9m 18.83s | 12m 40.94s | 10m 59.88s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_65] | 9m 17.35s | 12m 35.49s | 10m 56.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_pawel_4] | 9m 14.02s | 12m 37.31s | 10m 55.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_64] | 9m 10.79s | 12m 33.89s | 10m 52.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_cover_windows] | 8m 32.90s | 12m 45.68s | 10m 39.29s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_1360n2] | 8m 59.71s | 12m 13.71s | 10m 36.71s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_2_qube] | 9m 12.53s | 11m 53.32s | 10m 32.92s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_63] | 8m 29.82s | 12m 26.56s | 10m 28.19s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_min_gas_balanced] | 8m 53.34s | 11m 59.13s | 10m 26.23s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_40] | 8m 48.81s | 11m 48.12s | 10m 18.46s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_exp_208_gas_balanced] | 8m 47.59s | 11m 47.45s | 10m 17.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_600_gas_balanced] | 8m 21.45s | 11m 19.81s | 9m 50.63s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_36] | 8m 25.20s | 11m 10.85s | 9m 48.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_408_gas_balanced] | 8m 21.13s | 11m 8.45s | 9m 44.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_996_gas_balanced] | 8m 1.35s | 11m 1.38s | 9m 31.36s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_1152n1] | 8m 3.50s | 10m 54.82s | 9m 29.16s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_767_gas_balanced] | 8m 0.65s | 10m 51.48s | 9m 26.06s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_32] | 7m 28.67s | 10m 4.77s | 8m 46.72s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_2_square] | 7m 37.06s | 9m 48.94s | 8m 43.00s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_64b_exp_512] | 6m 41.72s | 10m 0.26s | 8m 20.99s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g1msm] | 12m 59.83s | 3m 28.64s | 8m 14.24s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_1_pow_0x10001] | 6m 59.37s | 9m 18.11s | 8m 8.74s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_64b_exp_512] | 6m 30.11s | 9m 42.58s | 8m 6.34s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_255] | 6m 39.42s | 9m 29.99s | 8m 4.71s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_200n3] | 6m 39.11s | 8m 39.73s | 7m 39.42s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_2_pow_0x10001] | 6m 27.10s | 8m 47.09s | 7m 37.10s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_200n2] | 6m 37.03s | 8m 36.90s | 7m 36.96s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_255] | 6m 11.95s | 9m 0.59s | 7m 36.27s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_255] | 6m 21.15s | 8m 51.25s | 7m 36.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_3_pow_0x10001] | 5m 43.85s | 8m 7.77s | 6m 55.81s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 12m 29.97s | 1m 6.80s | 6m 48.38s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_128b_exp_1024] | 5m 22.62s | 8m 12.31s | 6m 47.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_128b_exp_1024] | 5m 18.03s | 8m 5.00s | 6m 41.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_200n1] | 5m 29.45s | 7m 6.65s | 6m 18.05s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_4_pow_0x10001] | 5m 0.94s | 7m 28.14s | 6m 14.54s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_256b_exp_1024] | 4m 56.42s | 7m 30.99s | 6m 13.71s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_256b_exp_1024] | 4m 55.20s | 7m 26.17s | 6m 10.68s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g2msm] | 11m 13.73s | 1m 6.13s | 6m 9.93s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_512b_exp_1024] | 4m 31.77s | 6m 46.06s | 5m 38.92s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_512b_exp_1024] | 4m 32.42s | 6m 44.66s | 5m 38.54s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_EXP-] | 3m 39.71s | 5m 37.33s | 4m 38.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_5_pow_0x10001] | 3m 39.98s | 5m 2.09s | 4m 21.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_1_qube] | 3m 49.29s | 4m 45.41s | 4m 17.35s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BLOBBASEFEE] | 3m 47.33s | 4m 40.03s | 4m 13.68s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_guido_3_even] | 3m 29.81s | 4m 16.27s | 3m 53.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_1024b_exp_1024] | 3m 16.41s | 4m 29.20s | 3m 52.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_1024b_exp_1024] | 3m 16.44s | 4m 29.13s | 3m 52.79s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_1_square] | 3m 21.95s | 4m 10.28s | 3m 46.11s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_diff_acc_to_diff_acc] | 3m 12.16s | 3m 16.13s | 3m 14.15s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_diff_acc_to_b] | 2m 51.11s | 3m 7.66s | 2m 59.38s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_STATICCALL] | 2m 34.18s | 3m 17.53s | 2m 55.85s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PREVRANDAO] | 2m 25.80s | 3m 16.39s | 2m 51.10s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_CALL] | 2m 28.13s | 3m 12.76s | 2m 50.44s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_CALLCODE] | 2m 26.99s | 3m 13.45s | 2m 50.22s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_DELEGATECALL] | 2m 26.00s | 3m 11.37s | 2m 48.69s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_a_to_diff_acc] | 2m 35.98s | 3m 1.34s | 2m 48.66s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_a_to_b] | 2m 23.63s | 2m 56.04s | 2m 39.84s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_a_to_a] | 2m 22.79s | 2m 56.16s | 2m 39.47s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SIGNEXTEND-] | 2m 6.24s | 3m 4.90s | 2m 35.57s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-one-loop] | 1m 45.51s | 3m 10.46s | 2m 27.98s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_add_infinities] | 2m 6.07s | 2m 45.07s | 2m 25.57s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero-loop] | 1m 48.03s | 2m 55.70s | 2m 21.87s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_STATICCALL] | 2m 5.00s | 2m 38.16s | 2m 21.58s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SAR-] | 1m 52.59s | 2m 47.31s | 2m 19.95s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty-opcode_REVERT] | 1m 59.68s | 2m 38.51s | 2m 19.10s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_CALL] | 2m 2.09s | 2m 35.11s | 2m 18.60s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty-opcode_RETURN] | 2m 1.97s | 2m 34.34s | 2m 18.16s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_CALLCODE] | 2m 1.55s | 2m 33.91s | 2m 17.73s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of zero data-opcode_RETURN] | 2m 28.95s | 2m 4.43s | 2m 16.69s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 1m 48.90s | 2m 41.73s | 2m 15.31s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 1m 49.11s | 2m 41.29s | 2m 15.20s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_DELEGATECALL] | 1m 58.63s | 2m 30.65s | 2m 14.64s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of zero data-opcode_REVERT] | 2m 26.38s | 2m 0.94s | 2m 13.66s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 1m 45.95s | 2m 37.61s | 2m 11.78s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 1m 45.20s | 2m 35.16s | 2m 10.18s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-shift_right_SAR] | 1m 37.75s | 2m 28.44s | 2m 3.09s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty] | 1m 33.60s | 2m 25.26s | 1m 59.43s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 1m 43.91s | 2m 13.15s | 1m 58.53s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 1m 40.24s | 2m 15.96s | 1m 58.10s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 1m 39.49s | 2m 16.02s | 1m 57.76s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 1m 38.18s | 2m 11.87s | 1m 55.02s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-0 bytes] | 1m 30.47s | 2m 14.72s | 1m 52.59s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE same value] | 2m 35.44s | 1m 2.37s | 1m 48.91s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 2m 34.87s | 57.57s | 1m 46.22s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_RETURN] | 1m 54.32s | 1m 36.36s | 1m 45.34s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_REVERT] | 1m 55.16s | 1m 34.95s | 1m 45.06s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 2m 30.93s | 57.53s | 1m 44.23s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 2m 31.36s | 56.52s | 1m 43.94s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-100 bytes] | 1m 24.55s | 2m 2.66s | 1m 43.60s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SHL-] | 1m 21.61s | 2m 2.95s | 1m 42.28s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-shift_right_SHR] | 1m 19.69s | 1m 59.76s | 1m 39.72s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 1m 17.26s | 1m 53.57s | 1m 35.41s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SHR-] | 1m 13.96s | 1m 51.03s | 1m 32.49s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_MUL-] | 1m 4.01s | 1m 58.38s | 1m 31.20s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_EQ-] | 1m 11.24s | 1m 48.72s | 1m 29.98s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH31] | 1m 12.12s | 1m 46.46s | 1m 29.29s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH27] | 1m 14.21s | 1m 41.45s | 1m 27.83s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE new value] | 2m 3.94s | 50.90s | 1m 27.42s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH30] | 1m 8.61s | 1m 44.39s | 1m 26.50s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH32] | 1m 11.25s | 1m 41.44s | 1m 26.35s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH29] | 1m 10.05s | 1m 39.83s | 1m 24.94s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_COINBASE] | 1m 12.37s | 1m 36.00s | 1m 24.18s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ADDRESS] | 1m 12.57s | 1m 35.45s | 1m 24.01s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ORIGIN] | 1m 12.40s | 1m 35.60s | 1m 24.00s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH25] | 1m 15.04s | 1m 31.75s | 1m 23.39s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CALLER] | 1m 11.95s | 1m 33.19s | 1m 22.57s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH26] | 1m 9.67s | 1m 34.24s | 1m 21.95s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-615b5b] | 1m 27.99s | 1m 15.78s | 1m 21.89s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH28] | 1m 6.74s | 1m 36.07s | 1m 21.41s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH23] | 1m 5.28s | 1m 35.23s | 1m 20.25s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH24] | 1m 6.73s | 1m 30.70s | 1m 18.71s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-100 bytes] | 1m 4.24s | 1m 31.89s | 1m 18.07s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 1m 39.07s | 56.98s | 1m 18.03s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH22] | 1m 3.81s | 1m 31.71s | 1m 17.76s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-615b5b5b] | 1m 22.63s | 1m 12.06s | 1m 17.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_1_exp_heavy] | 1m 5.51s | 1m 28.30s | 1m 16.90s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-605b] | 1m 19.22s | 1m 11.56s | 1m 15.39s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_45M-blockchain_test-value_bearing_True] | 1m 41.13s | 44.13s | 1m 12.63s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH21] | 1m 4.96s | 1m 20.12s | 1m 12.54s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH20] | 1m 0.06s | 1m 18.01s | 1m 9.03s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test-SSTORE new value] | 58.06s | 1m 19.21s | 1m 8.63s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH19] | 58.99s | 1m 17.88s | 1m 8.43s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 52.38s | 1m 21.34s | 1m 6.86s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 52.53s | 1m 21.11s | 1m 6.82s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 52.63s | 1m 20.98s | 1m 6.80s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 52.34s | 1m 20.81s | 1m 6.57s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 52.49s | 1m 20.60s | 1m 6.54s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 52.27s | 1m 20.59s | 1m 6.43s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 51.76s | 1m 20.81s | 1m 6.28s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 51.69s | 1m 20.71s | 1m 6.20s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 50.61s | 1m 21.74s | 1m 6.18s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 51.26s | 1m 20.35s | 1m 5.81s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 51.83s | 1m 19.68s | 1m 5.76s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH18] | 57.63s | 1m 13.27s | 1m 5.45s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 51.05s | 1m 19.83s | 1m 5.44s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-605b5b] | 1m 7.30s | 1m 3.32s | 1m 5.31s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH16] | 55.30s | 1m 15.01s | 1m 5.15s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-one blob and accessed] | 57.17s | 1m 12.79s | 1m 4.98s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH15] | 54.71s | 1m 13.28s | 1m 4.00s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-six blobs, access latest] | 56.65s | 1m 9.83s | 1m 3.24s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH17] | 53.73s | 1m 11.38s | 1m 2.55s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH14] | 51.77s | 1m 10.22s | 1m 0.99s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH13] | 50.23s | 1m 10.86s | 1m 0.54s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 1m 6.37s | 54.71s | 1m 0.54s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 1m 4.55s | 56.42s | 1m 0.48s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-max code size] | 1m 7.77s | 51.96s | 59.86s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 1m 2.86s | 55.36s | 59.11s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSLOAD] | ❌ SDK Crash | 59.07s | 59.07s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH12] | 48.98s | 1m 4.51s | 56.74s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_NUMBER] | 48.70s | 1m 3.09s | 55.90s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | 1m 12.75s | 38.87s | 55.81s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GASPRICE] | 49.02s | 1m 1.60s | 55.31s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CHAINID] | 48.38s | 1m 2.07s | 55.22s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BASEFEE] | 47.85s | 1m 2.46s | 55.16s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH11] | 48.81s | 1m 1.45s | 55.13s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_TIMESTAMP] | 48.02s | 1m 1.48s | 54.75s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH6] | 50.65s | 58.11s | 54.38s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH8] | 46.91s | 1m 0.93s | 53.92s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH7] | 47.51s | 1m 0.28s | 53.89s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH10] | 46.87s | 1m 0.60s | 53.74s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH9] | 45.39s | 59.40s | 52.40s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_2_exp_heavy] | 43.16s | 1m 0.04s | 51.60s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_MOD-] | 41.84s | 1m 0.45s | 51.15s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH4] | 44.57s | 57.43s | 51.00s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | 1m 5.94s | 36.00s | 50.97s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 42.69s | 58.93s | 50.81s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 41.28s | 1m 0.34s | 50.81s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 40.44s | 1m 1.11s | 50.78s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 41.52s | 59.86s | 50.69s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH5] | 44.46s | 56.88s | 50.67s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 40.68s | 1m 0.39s | 50.53s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 41.19s | 59.80s | 50.50s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1000000] | 44.57s | 56.39s | 50.48s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 40.31s | 1m 0.63s | 50.47s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1] | 45.42s | 55.51s | 50.47s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GT-] | 39.79s | 1m 1.14s | 50.46s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 40.99s | 59.83s | 50.41s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_LT-] | 39.73s | 1m 1.03s | 50.38s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 40.82s | 59.89s | 50.35s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 41.33s | 59.13s | 50.23s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1000] | 44.23s | 56.15s | 50.19s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GASLIMIT] | 44.10s | 55.85s | 49.97s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_0] | 44.11s | 55.66s | 49.88s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_100000] | 44.02s | 55.43s | 49.73s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 40.24s | 58.91s | 49.57s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 40.30s | 58.76s | 49.53s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GAS] | 45.39s | 53.53s | 49.46s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 39.99s | 58.58s | 49.28s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CODESIZE] | 42.89s | 55.48s | 49.18s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH3] | 43.85s | 54.30s | 49.07s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-1MiB] | 1m 1.41s | 35.51s | 48.46s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH0] | 42.64s | 53.08s | 47.86s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 1m 6.62s | 27.99s | 47.30s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-benchmark-gas-value_45M-blockchain_test] | 39.30s | 54.85s | 47.08s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH2] | 40.55s | 53.14s | 46.84s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 1m 5.67s | 27.32s | 46.49s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SUB-] | 37.58s | 55.10s | 46.34s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-0 bytes] | 37.03s | 55.41s | 46.22s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SLT-] | 36.57s | 55.28s | 45.93s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-00] | 43.93s | 47.81s | 45.87s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-5b] | 43.29s | 48.01s | 45.65s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH1] | 39.99s | 51.02s | 45.51s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SGT-] | 36.13s | 54.47s | 45.30s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-IDENTITY] | 53.59s | 36.38s | 44.98s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 35.43s | 54.31s | 44.87s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ADD-] | 35.67s | 52.90s | 44.29s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 34.84s | 53.43s | 44.13s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_heavy] | 37.65s | 48.59s | 43.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_4_exp_heavy] | 37.73s | 47.91s | 42.82s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-1MiB] | 55.00s | 30.22s | 42.61s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-no blobs] | 36.55s | 48.64s | 42.59s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-one blob but access non-existent index] | 36.62s | 48.42s | 42.52s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BYTE-] | 33.66s | 51.12s | 42.39s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 33.83s | 50.32s | 42.08s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 33.93s | 50.09s | 42.01s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP1] | 32.56s | 50.56s | 41.56s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_True-non_zero_value_False] | 31.37s | 50.26s | 40.82s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP16] | 34.81s | 44.43s | 39.62s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-1MiB] | 53.13s | 25.95s | 39.54s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ISZERO] | 31.53s | 47.02s | 39.27s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP3] | 33.61s | 44.66s | 39.14s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 31.71s | 46.52s | 39.12s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 31.39s | 46.71s | 39.05s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-SHA2-256] | 16.92s | 1m 1.15s | 39.03s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 31.49s | 46.48s | 38.98s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP10] | 33.42s | 44.49s | 38.96s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 31.08s | 46.83s | 38.95s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 31.18s | 46.59s | 38.88s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_45M-blockchain_test-value_bearing_False] | 55.49s | 22.22s | 38.85s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP5] | 33.43s | 44.07s | 38.75s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP6] | 34.09s | 43.32s | 38.70s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 31.06s | 46.25s | 38.66s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 31.12s | 46.14s | 38.63s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP8] | 33.90s | 43.04s | 38.47s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP15] | 33.28s | 43.55s | 38.41s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP1] | 33.04s | 43.78s | 38.41s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 30.72s | 46.09s | 38.40s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP12] | 33.26s | 43.44s | 38.35s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP14] | 33.13s | 43.55s | 38.34s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP2] | 33.66s | 43.02s | 38.34s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP4] | 33.40s | 43.27s | 38.33s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP11] | 33.41s | 43.23s | 38.32s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP7] | 33.02s | 43.61s | 38.32s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_OR-] | 29.49s | 46.99s | 38.24s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP13] | 33.18s | 43.16s | 38.17s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP9] | 33.04s | 43.26s | 38.15s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 31.54s | 44.47s | 38.01s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_AND-] | 29.63s | 46.18s | 37.90s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_False-non_zero_value_False] | 30.55s | 44.88s | 37.72s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 30.46s | 44.78s | 37.62s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_True-non_zero_value_True] | 30.64s | 44.46s | 37.55s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 30.31s | 44.77s | 37.54s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_False-non_zero_value_True] | 30.42s | 44.39s | 37.40s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_XOR-] | 29.31s | 45.29s | 37.30s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 30.10s | 44.47s | 37.28s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_1_2_2_scalar] | 32.12s | 42.27s | 37.19s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-100 bytes] | 29.51s | 44.22s | 36.86s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODESIZE] | 31.87s | 41.64s | 36.76s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test-SSTORE same value] | 29.33s | 42.60s | 35.97s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 28.63s | 43.16s | 35.90s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODESIZE] | 30.20s | 41.16s | 35.68s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-1MiB] | 50.36s | 19.85s | 35.10s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_0] | 28.40s | 41.70s | 35.05s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 28.19s | 41.69s | 34.94s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_1000] | 28.23s | 41.61s | 34.92s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_10000] | 28.09s | 41.56s | 34.83s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 28.33s | 41.22s | 34.78s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 28.21s | 41.04s | 34.62s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 28.34s | 40.85s | 34.59s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 28.62s | 40.52s | 34.57s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 27.99s | 40.57s | 34.28s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_2_scalar] | 29.29s | 38.92s | 34.10s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 49.94s | 17.84s | 33.89s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-100 bytes] | 27.43s | 39.60s | 33.51s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 26.82s | 39.78s | 33.30s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 26.12s | 40.08s | 33.10s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 26.63s | 39.09s | 32.86s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-10KiB] | 28.56s | 36.41s | 32.49s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODEHASH] | 27.40s | 37.42s | 32.41s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SMOD-] | 25.20s | 38.89s | 32.04s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_NOT] | 25.85s | 37.56s | 31.70s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODEHASH] | 26.83s | 35.46s | 31.14s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_BALANCE] | 25.31s | 35.14s | 30.22s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 24.32s | 35.61s | 29.97s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-512] | 25.37s | 34.39s | 29.88s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSLOAD] | 28.43s | 31.12s | 29.78s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_BALANCE] | 24.80s | 33.86s | 29.33s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP2] | 22.26s | 33.20s | 27.73s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 44.55s | 9.11s | 26.83s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 44.21s | 8.80s | 26.51s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 37.34s | 15.38s | 26.36s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB] | 21.97s | 29.68s | 25.82s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 20.83s | 30.72s | 25.77s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 20.21s | 29.34s | 24.77s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 34.95s | 14.58s | 24.77s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_True] | 19.82s | 26.43s | 23.12s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_True-key_mut_True] | 19.13s | 26.42s | 22.78s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.25x max code size] | 18.82s | 26.52s | 22.67s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_True] | 18.89s | 26.37s | 22.63s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_True-key_mut_False] | 19.23s | 26.00s | 22.61s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_False] | 19.15s | 25.84s | 22.49s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_False] | 19.07s | 25.53s | 22.30s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_zkevm_worst_case] | 18.75s | 25.63s | 22.19s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test-SLOAD] | 18.16s | 26.12s | 22.14s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-10KiB] | 17.81s | 24.02s | 20.91s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP3] | 16.97s | 24.86s | 20.91s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 17.06s | 23.87s | 20.46s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-10KiB] | 17.51s | 22.99s | 20.25s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0.25x max code size] | 11.02s | 29.43s | 20.22s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0.75x max code size] | 10.89s | 29.39s | 20.14s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.50x max code size] | 17.30s | 22.86s | 20.08s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 25.01s | 13.99s | 19.50s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.75x max code size] | 16.64s | 21.85s | 19.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_example_2] | 14.94s | 20.81s | 17.87s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-5KiB] | 15.53s | 20.08s | 17.80s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP4] | 13.69s | 20.05s | 16.87s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero_byte_True] | 23.57s | 10.14s | 16.85s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-RIPEMD-160] | 13.81s | 18.27s | 16.04s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP5] | 11.55s | 16.77s | 14.16s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-10KiB] | 10.88s | 16.10s | 13.49s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 10.82s | 15.63s | 13.22s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 10.70s | 15.49s | 13.10s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0.50x max code size] | 10.74s | 15.44s | 13.09s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-max code size] | 11.13s | 14.83s | 12.98s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 10.83s | 15.06s | 12.94s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 16.29s | 9.19s | 12.74s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP6] | 9.86s | 14.34s | 12.10s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP7] | 9.03s | 12.82s | 10.92s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 8.82s | 11.29s | 10.05s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CREATE] | 13.59s | 5.95s | 9.77s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP8] | 8.07s | 11.14s | 9.60s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE new value] | 11.58s | 6.78s | 9.18s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_RETURN] | 13.27s | 4.96s | 9.12s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE same value] | 11.30s | 6.84s | 9.07s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_REVERT] | 13.09s | 4.80s | 8.94s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP9] | 7.16s | 10.09s | 8.62s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP10] | 6.57s | 9.57s | 8.07s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 7.47s | 8.49s | 7.98s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 6.71s | 8.36s | 7.53s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP11] | 6.09s | 8.50s | 7.29s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of zero data-opcode_REVERT] | 10.91s | 3.67s | 7.29s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of zero data-opcode_RETURN] | 10.87s | 3.62s | 7.24s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 6.37s | 8.11s | 7.24s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP12] | 5.67s | 7.79s | 6.73s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_False-key_mut_False] | 5.71s | 7.63s | 6.67s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_False-key_mut_True] | 5.63s | 7.52s | 6.57s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP13] | 5.40s | 7.41s | 6.41s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP14] | 5.11s | 6.87s | 5.99s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP15] | 4.98s | 6.44s | 5.71s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_True] | 7.12s | 3.86s | 5.49s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP16] | 4.60s | 5.99s | 5.29s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_False] | 6.71s | 3.43s | 5.07s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 4.88s | 5.14s | 5.01s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 4.79s | 5.11s | 4.95s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_True] | 6.54s | 3.19s | 4.86s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_infinities_2_scalar] | 4.51s | 5.00s | 4.75s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE2] | 6.82s | 2.66s | 4.74s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_infinities_32_byte_scalar] | 4.43s | 4.94s | 4.68s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE2] | 6.83s | 2.53s | 4.68s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 5.07s | 4.26s | 4.67s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero_byte_False] | 6.38s | 2.84s | 4.61s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_False] | 6.05s | 2.82s | 4.44s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE] | 6.10s | 2.76s | 4.43s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 4.49s | 3.65s | 4.07s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 4.22s | 3.77s | 4.00s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE] | 5.40s | 2.56s | 3.98s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 4.15s | 3.74s | 3.95s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | 4.02s | 3.74s | 3.88s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 3.87s | 3.77s | 3.82s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 3.77s | 2.94s | 3.36s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 3.76s | 2.95s | 3.35s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 3.48s | 3.09s | 3.28s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 3.49s | 3.07s | 3.28s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 3.26s | 2.62s | 2.94s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 3.15s | 2.70s | 2.93s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 3.11s | 2.69s | 2.90s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 3.00s | 2.65s | 2.82s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 2.94s | 2.18s | 2.56s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 2.96s | 2.15s | 2.56s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 2.50s | 1.97s | 2.24s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CREATE2] | 3.04s | 1.42s | 2.23s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 2.51s | 1.91s | 2.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 2.54s | 1.76s | 2.15s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 2.44s | 1.84s | 2.14s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE2] | 2.77s | 0.48s | 1.62s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE2] | 2.73s | 0.45s | 1.59s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE2] | 2.66s | 0.46s | 1.56s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE2] | 2.67s | 0.44s | 1.55s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE2] | 2.63s | 0.45s | 1.54s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE2] | 2.60s | 0.45s | 1.52s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE2] | 2.62s | 0.42s | 1.52s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE2] | 2.56s | 0.43s | 1.50s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE] | 2.06s | 0.39s | 1.22s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 1.81s | 0.60s | 1.21s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 1.78s | 0.60s | 1.19s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 1.77s | 0.61s | 1.19s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE] | 1.97s | 0.39s | 1.18s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 1.74s | 0.61s | 1.18s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE] | 1.94s | 0.38s | 1.16s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE] | 1.91s | 0.37s | 1.14s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE] | 1.90s | 0.36s | 1.13s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 1.67s | 0.58s | 1.13s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 1.68s | 0.57s | 1.13s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 1.65s | 0.59s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 1.78s | 0.46s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 1.62s | 0.62s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 1.76s | 0.47s | 1.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 1.63s | 0.59s | 1.11s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 1.64s | 0.58s | 1.11s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 1.63s | 0.59s | 1.11s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 1.64s | 0.57s | 1.10s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_2_sets] | 1.32s | 0.88s | 1.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 1.72s | 0.48s | 1.10s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE] | 1.84s | 0.36s | 1.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 1.62s | 0.59s | 1.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 1.63s | 0.57s | 1.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 1.71s | 0.48s | 1.10s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE] | 1.79s | 0.39s | 1.09s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE] | 1.79s | 0.35s | 1.07s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 1.61s | 0.51s | 1.06s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 1.62s | 0.50s | 1.06s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 1.61s | 0.51s | 1.06s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 1.58s | 0.52s | 1.05s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 1.62s | 0.46s | 1.04s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 1.60s | 0.48s | 1.04s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 1.59s | 0.48s | 1.04s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 1.58s | 0.49s | 1.03s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 1.61s | 0.46s | 1.03s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 1.60s | 0.46s | 1.03s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 1.57s | 0.48s | 1.02s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 1.58s | 0.47s | 1.02s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 1.56s | 0.47s | 1.01s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 1.54s | 0.47s | 1.00s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 1.53s | 0.47s | 1.00s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 1.52s | 0.49s | 1.00s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 1.54s | 0.46s | 1.00s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 1.53s | 0.47s | 1.00s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 1.51s | 0.49s | 1.00s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 1.53s | 0.46s | 1.00s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 1.52s | 0.47s | 0.99s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 1.50s | 0.46s | 0.98s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_1_pair] | 1.16s | 0.62s | 0.89s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_zero_input] | 1.15s | 0.62s | 0.88s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_1_pair_empty] | 0.86s | 0.21s | 0.53s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_3_pair] | 0.85s | 0.21s | 0.53s |
| test_worst_compute.py::test_empty_block[fork_Prague-benchmark-gas-value_45M-blockchain_test] | 0.66s | 0.10s | 0.38s |

## Summary

**Total unique test cases:** 532

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| risc0-v3.0.3 | 532 | 531 | 1 | 0 |
| sp1-v5.2.1 | 532 | 532 | 0 | 0 |

---

## reth


## Execution Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: 💥 indicates a prover crash, ❌ indicates an SDK-reported crash.

| Test Case | openvm-v1.4.0 | risc0-v3.0.3 | sp1-v5.2.1 | zisk-v0.12.0 | Avg |
|-----------|-----------|-----------|-----------|-----------|----------|
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_5_qube] | 23m 10.08s | 1h 3m 56.91s | 1h 46m 37.17s | ❌ SDK Crash | 1h 4m 34.72s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_4_qube] | 22m 33.42s | 1h 2m 54.06s | 1h 41m 33.40s | ❌ SDK Crash | 1h 2m 20.29s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_1024_exp_2] | 21m 15.68s | 58m 20.21s | 1h 36m 15.94s | ❌ SDK Crash | 58m 37.28s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_5_square] | 21m 27.90s | 58m 29.64s | 1h 34m 40.90s | ❌ SDK Crash | 58m 12.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_4_square] | 20m 44.37s | 58m 9.88s | 1h 34m 41.86s | ❌ SDK Crash | 57m 52.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_1045_gas_base_heavy] | 20m 1.22s | 56m 18.48s | 1h 31m 39.09s | ❌ SDK Crash | 55m 59.59s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_867_gas_base_heavy] | 19m 51.36s | 55m 57.68s | 1h 30m 41.96s | ❌ SDK Crash | 55m 30.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_800_gas_base_heavy] | 19m 52.68s | 55m 47.58s | 1h 30m 19.30s | ❌ SDK Crash | 55m 19.85s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_3_qube] | 19m 25.31s | 56m 59.69s | 1h 26m 31.34s | ❌ SDK Crash | 54m 18.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_616_gas_base_heavy] | 19m 6.13s | 54m 28.37s | 1h 27m 30.08s | ❌ SDK Crash | 53m 41.53s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_3_square] | 17m 50.35s | 53m 3.71s | 1h 20m 58.51s | ❌ SDK Crash | 50m 37.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_408_gas_base_heavy] | 18m 8.22s | 52m 27.62s | 1h 20m 54.51s | ❌ SDK Crash | 50m 30.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_264_exp_2] | 17m 33.08s | 51m 35.44s | 1h 20m 46.46s | ❌ SDK Crash | 49m 58.32s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_256_exp_2] | 17m 6.71s | 50m 50.07s | 1h 18m 45.82s | ❌ SDK Crash | 48m 54.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_min_gas_base_heavy] | 14m 27.10s | 43m 6.57s | 1h 5m 40.22s | ❌ SDK Crash | 41m 4.63s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_8b_exp_896] | 12m 3.84s | 36m 43.39s | 53m 54.21s | ❌ SDK Crash | 34m 13.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_8_exp_896] | 11m 36.56s | 36m 19.26s | 51m 47.70s | ❌ SDK Crash | 33m 14.50s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_exp_298_gas_exp_heavy] | 11m 42.61s | 35m 55.25s | 52m 2.52s | ❌ SDK Crash | 33m 13.46s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_1_exp_heavy] | 11m 20.97s | 34m 23.54s | 50m 31.12s | ❌ SDK Crash | 32m 5.21s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-point_evaluation] | 21m 37.27s | 58m 31.84s | 14m 19.85s | ❌ SDK Crash | 31m 29.65s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_exp_215_gas_exp_heavy] | 10m 34.87s | 32m 59.66s | 47m 11.28s | ❌ SDK Crash | 30m 15.27s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_8_exp_648] | 10m 36.50s | 32m 44.56s | 47m 13.53s | ❌ SDK Crash | 30m 11.53s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_min_gas_exp_heavy] | 10m 25.20s | 32m 20.04s | 46m 17.08s | ❌ SDK Crash | 29m 40.77s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_guido_3_even] | 10m 14.59s | 26m 15.82s | 40m 25.13s | ❌ SDK Crash | 25m 38.51s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_2_qube] | 7m 55.25s | 23m 57.12s | 34m 48.43s | ❌ SDK Crash | 22m 13.60s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_2_square] | 7m 20.72s | 23m 26.42s | 32m 14.80s | ❌ SDK Crash | 21m 0.65s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_pairing_check] | 7m 41.24s | 23m 51.29s | 30m 43.02s | ❌ SDK Crash | 20m 45.18s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_800_gas_exp_heavy] | 7m 2.47s | 22m 2.32s | 31m 15.87s | ❌ SDK Crash | 20m 6.88s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_600_gas_exp_heavy] | 6m 47.35s | 21m 19.56s | 30m 18.93s | ❌ SDK Crash | 19m 28.61s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_852_gas_exp_heavy] | 7m 1.00s | 20m 13.01s | 31m 10.21s | ❌ SDK Crash | 19m 28.08s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_fp_to_g1] | 9m 15.00s | 15m 29.44s | 33m 33.57s | ❌ SDK Crash | 19m 26.00s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ecrecover] | 30m 35.22s | 7m 10.78s | 20m 8.72s | ❌ SDK Crash | 19m 18.24s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_16b_exp_320] | 6m 37.95s | 20m 29.20s | 29m 42.77s | ❌ SDK Crash | 18m 56.64s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_pawel_2] | 6m 23.43s | 19m 56.39s | 28m 28.44s | ❌ SDK Crash | 18m 16.09s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_400_gas_exp_heavy] | 6m 19.12s | 19m 49.01s | 28m 10.49s | ❌ SDK Crash | 18m 6.20s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_2_exp_heavy] | 6m 7.37s | 18m 58.74s | 26m 55.51s | ❌ SDK Crash | 17m 20.54s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_guido_2_even] | 6m 5.80s | 18m 5.71s | 26m 53.79s | ❌ SDK Crash | 17m 1.77s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_marius_1_even] | 5m 29.80s | 16m 36.95s | 24m 1.48s | ❌ SDK Crash | 15m 22.74s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_765_gas_exp_heavy] | 5m 28.00s | 16m 24.51s | 23m 43.32s | ❌ SDK Crash | 15m 11.95s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_24b_exp_168] | 5m 16.98s | 16m 18.41s | 23m 28.62s | ❌ SDK Crash | 15m 1.34s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_fp_to_g2] | 6m 14.20s | 14m 2.93s | 23m 43.24s | ❌ SDK Crash | 14m 40.12s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_pawel_3] | 5m 3.00s | 15m 43.03s | 22m 40.89s | ❌ SDK Crash | 14m 28.98s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_32b_exp_256] | 4m 59.48s | 15m 13.07s | 22m 13.78s | ❌ SDK Crash | 14m 8.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_256] | 4m 59.07s | 15m 2.14s | 22m 3.36s | ❌ SDK Crash | 14m 1.53s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_example_1] | 4m 53.60s | 15m 7.33s | 21m 36.10s | ❌ SDK Crash | 13m 52.34s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_1360_gas_balanced] | 4m 54.06s | 14m 54.20s | 21m 43.95s | ❌ SDK Crash | 13m 50.74s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_heavy] | 4m 54.27s | 15m 1.62s | 21m 27.13s | ❌ SDK Crash | 13m 47.67s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_zkevm_worst_case] | 4m 50.09s | 14m 44.72s | 21m 11.23s | ❌ SDK Crash | 13m 35.35s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_32b_exp_96] | 4m 43.04s | 14m 25.17s | 21m 0.48s | ❌ SDK Crash | 13m 22.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_677_gas_base_heavy] | 4m 40.17s | 14m 16.25s | 20m 36.82s | ❌ SDK Crash | 13m 11.08s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_128] | 4m 38.32s | 14m 10.13s | 20m 32.35s | ❌ SDK Crash | 13m 6.93s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_example_2] | 4m 38.77s | 14m 6.54s | 20m 32.17s | ❌ SDK Crash | 13m 5.83s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g2add] | 5m 12.95s | 14m 37.64s | 19m 21.22s | ❌ SDK Crash | 13m 3.94s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_3_exp_8] | 4m 37.46s | 14m 9.79s | 20m 8.08s | ❌ SDK Crash | 12m 58.44s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_96] | 4m 33.61s | 13m 54.64s | 20m 6.12s | ❌ SDK Crash | 12m 51.46s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_pawel_4] | 4m 37.14s | 13m 49.41s | 19m 54.05s | ❌ SDK Crash | 12m 46.87s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_65] | 4m 29.08s | 13m 45.17s | 19m 45.31s | ❌ SDK Crash | 12m 39.86s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_600_gas_balanced] | 4m 20.71s | 13m 15.48s | 19m 11.23s | ❌ SDK Crash | 12m 15.81s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_pawel_4_exp_heavy] | 4m 21.37s | 13m 5.82s | 18m 54.46s | ❌ SDK Crash | 12m 7.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_64] | 4m 15.94s | 13m 0.39s | 18m 51.67s | ❌ SDK Crash | 12m 2.66s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_1360n1] | 4m 14.17s | 13m 4.24s | 18m 47.56s | ❌ SDK Crash | 12m 1.99s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_408_gas_balanced] | 4m 16.22s | 12m 52.63s | 18m 48.23s | ❌ SDK Crash | 11m 59.02s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_996_gas_balanced] | 4m 10.89s | 12m 48.63s | 18m 33.34s | ❌ SDK Crash | 11m 50.96s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-blake2f] | 5m 52.08s | 13m 18.76s | 16m 9.23s | ❌ SDK Crash | 11m 46.69s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_64b_exp_512] | 4m 20.73s | 12m 9.87s | 18m 48.55s | ❌ SDK Crash | 11m 46.38s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_767_gas_balanced] | 4m 9.65s | 12m 35.37s | 18m 16.19s | ❌ SDK Crash | 11m 40.40s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_64b_exp_512] | 4m 17.82s | 11m 58.94s | 18m 40.58s | ❌ SDK Crash | 11m 39.11s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_32b_exp_40] | 4m 10.29s | 12m 39.08s | 18m 7.77s | ❌ SDK Crash | 11m 39.04s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_min_gas_balanced] | 4m 8.39s | 12m 28.43s | 18m 0.78s | ❌ SDK Crash | 11m 32.53s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g1add] | 4m 58.91s | 11m 27.80s | 18m 1.71s | ❌ SDK Crash | 11m 29.47s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_1360n2] | 3m 53.74s | 11m 54.16s | 17m 10.30s | ❌ SDK Crash | 10m 59.40s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_40] | 3m 52.39s | 11m 45.27s | 17m 11.90s | ❌ SDK Crash | 10m 56.52s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_exp_208_gas_balanced] | 3m 51.62s | 11m 49.20s | 16m 56.24s | ❌ SDK Crash | 10m 52.35s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_1349n1] | 3m 51.14s | 11m 54.67s | 16m 50.84s | ❌ SDK Crash | 10m 52.22s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_128b_exp_1024] | 3m 59.93s | 10m 57.34s | 17m 23.06s | ❌ SDK Crash | 10m 46.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_128b_exp_1024] | 3m 56.59s | 10m 52.78s | 17m 21.49s | ❌ SDK Crash | 10m 43.62s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g1msm] | 4m 42.37s | ❌ SDK Crash | 16m 44.30s | ❌ SDK Crash | 10m 43.33s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_36] | 3m 44.46s | 11m 21.61s | 16m 23.33s | ❌ SDK Crash | 10m 29.80s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_256b_exp_1024] | 3m 51.20s | 10m 40.23s | 16m 39.83s | ❌ SDK Crash | 10m 23.75s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_256b_exp_1024] | 3m 50.16s | 10m 26.51s | 16m 39.85s | ❌ SDK Crash | 10m 18.84s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_guido_1_even] | 3m 38.08s | 10m 59.77s | 16m 5.83s | ❌ SDK Crash | 10m 14.56s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_512b_exp_1024] | 3m 47.34s | 10m 18.92s | 16m 20.31s | ❌ SDK Crash | 10m 8.86s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_512b_exp_1024] | 3m 45.63s | 10m 20.15s | 16m 19.98s | ❌ SDK Crash | 10m 8.59s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_cover_windows] | 3m 34.08s | 10m 58.06s | 15m 38.24s | ❌ SDK Crash | 10m 3.46s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_1024b_exp_1024] | 3m 46.09s | 10m 16.64s | 15m 54.50s | ❌ SDK Crash | 9m 59.08s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_1024b_exp_1024] | 3m 47.00s | 10m 13.52s | 15m 51.71s | ❌ SDK Crash | 9m 57.41s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_2_pow_0x10001] | 3m 31.07s | 10m 45.47s | 15m 19.39s | ❌ SDK Crash | 9m 51.97s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_1_pow_0x10001] | 3m 24.13s | 10m 27.15s | 14m 53.74s | ❌ SDK Crash | 9m 35.00s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_3_pow_0x10001] | 3m 25.77s | 9m 44.87s | 14m 41.10s | ❌ SDK Crash | 9m 17.25s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_32_exp_32] | 3m 16.49s | 9m 56.53s | 14m 12.61s | ❌ SDK Crash | 9m 8.54s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_4_pow_0x10001] | 3m 22.42s | 9m 16.60s | 14m 17.93s | ❌ SDK Crash | 8m 58.98s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_5_pow_0x10001] | 3m 19.60s | 9m 4.36s | 13m 59.77s | ❌ SDK Crash | 8m 47.91s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_200n2] | 2m 50.19s | 8m 33.28s | 12m 12.22s | ❌ SDK Crash | 7m 51.90s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_200n3] | 2m 49.58s | 8m 34.73s | 12m 7.56s | ❌ SDK Crash | 7m 50.62s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_1152n1] | 2m 39.12s | 8m 26.81s | 11m 48.18s | ❌ SDK Crash | 7m 38.03s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_1_qube] | 2m 34.16s | 7m 48.21s | 10m 50.72s | ❌ SDK Crash | 7m 4.36s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g2msm] | 2m 48.36s | ❌ SDK Crash | 10m 53.62s | ❌ SDK Crash | 6m 50.99s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_nagydani_1_square] | 2m 27.66s | 7m 23.45s | 10m 14.24s | ❌ SDK Crash | 6m 41.78s |
| test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_vul_common_200n1] | 2m 12.23s | 6m 41.54s | 9m 15.63s | ❌ SDK Crash | 6m 3.13s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_add] | 3m 42.26s | 1m 37.39s | 12m 27.33s | ❌ SDK Crash | 5m 55.66s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_191] | 1m 56.24s | 5m 28.59s | 8m 27.40s | ❌ SDK Crash | 5m 17.41s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul] | 6m 11.92s | 6m 6.56s | 7m 49.20s | 22.37s | 5m 7.51s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_255] | 1m 51.31s | 5m 16.94s | 8m 3.96s | ❌ SDK Crash | 5m 4.07s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_1_2_32_byte_scalar] | 6m 7.08s | 5m 59.78s | 7m 37.89s | 21.76s | 5m 1.62s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_scalar] | 6m 4.76s | 6m 0.19s | 7m 37.94s | 21.87s | 5m 1.19s |
| test_worst_compute.py::test_amortized_bn128_pairings[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 4m 12.02s | 6m 30.60s | 3m 29.39s | ❌ SDK Crash | 4m 44.00s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_STATICCALL] | ❌ SDK Crash | 5m 51.20s | 3m 24.94s | ❌ SDK Crash | 4m 38.07s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_DELEGATECALL] | ❌ SDK Crash | 5m 51.78s | 3m 23.97s | ❌ SDK Crash | 4m 37.87s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_CALLCODE] | ❌ SDK Crash | 5m 52.18s | 3m 23.38s | ❌ SDK Crash | 4m 37.78s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_5_pair] | 4m 4.69s | 6m 16.81s | 3m 16.72s | ❌ SDK Crash | 4m 32.74s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_CALL] | ❌ SDK Crash | 5m 51.40s | 3m 12.83s | ❌ SDK Crash | 4m 32.11s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODESIZE] | ❌ SDK Crash | 5m 47.72s | 3m 16.06s | ❌ SDK Crash | 4m 31.89s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODEHASH] | ❌ SDK Crash | 5m 45.31s | 3m 17.10s | ❌ SDK Crash | 4m 31.21s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_4_pair] | 3m 55.47s | 6m 12.03s | 3m 18.23s | ❌ SDK Crash | 4m 28.58s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_2_pair] | 3m 52.29s | 5m 56.83s | 3m 19.74s | ❌ SDK Crash | 4m 22.95s |
| test_worst_bytecode.py::test_worst_bytecode_single_opcode[fork_Prague-benchmark-gas-value_45M-blockchain_test-opcode_EXTCODECOPY] | ❌ SDK Crash | 5m 31.28s | 3m 6.47s | ❌ SDK Crash | 4m 18.88s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_two_pairings] | 3m 49.53s | 5m 52.46s | 3m 14.47s | ❌ SDK Crash | 4m 18.82s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_one_pairing] | 3m 45.01s | 5m 40.11s | 3m 13.00s | ❌ SDK Crash | 4m 12.71s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_127] | 1m 23.57s | 3m 57.04s | 5m 51.88s | 1m 43.85s | 3m 14.09s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_191] | 1m 17.27s | 3m 56.68s | 5m 39.30s | 1m 48.99s | 3m 10.56s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_191] | 1m 15.47s | 3m 44.97s | 5m 26.52s | 1m 43.36s | 3m 2.58s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SDIV-1] | 1m 16.72s | 3m 45.30s | 5m 18.53s | 1m 42.89s | 3m 0.86s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SDIV-0] | 1m 16.33s | 3m 42.26s | 5m 12.03s | 1m 42.62s | 2m 58.31s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_add_1_2] | 4m 6.22s | 1m 36.83s | 2m 44.98s | ❌ SDK Crash | 2m 49.34s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DIV-0] | 1m 3.89s | 3m 14.45s | 4m 37.33s | 1m 30.87s | 2m 36.63s |
| test_worst_stateful_opcodes.py::test_worst_selfbalance[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 56.39s | 3m 0.07s | 3m 48.43s | ❌ SDK Crash | 2m 34.97s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_63] | 1m 3.58s | 2m 58.57s | 4m 22.46s | 1m 28.30s | 2m 28.23s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_255] | 59.25s | 3m 2.48s | 4m 13.42s | 1m 29.49s | 2m 26.16s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DIV-1] | 59.88s | 3m 0.99s | 4m 11.30s | 1m 32.19s | 2m 26.09s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_127] | 1m 2.24s | 2m 54.93s | 4m 25.86s | 1m 14.30s | 2m 24.33s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_255] | 57.35s | 2m 54.96s | 4m 5.45s | 1m 24.00s | 2m 20.44s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_191] | 55.33s | 2m 46.42s | 4m 7.46s | 1m 30.26s | 2m 19.87s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_127] | 58.91s | 2m 46.66s | 4m 14.46s | 1m 9.03s | 2m 17.26s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PREVRANDAO] | 45.61s | 2m 16.48s | 3m 4.89s | ❌ SDK Crash | 2m 2.32s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_infinities_32_byte_scalar] | 6.12s | 3m 30.51s | 4m 21.49s | 4.11s | 2m 0.56s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_255] | 46.46s | 2m 20.71s | 3m 21.93s | 1m 23.92s | 1m 58.25s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_127] | 48.85s | 2m 11.63s | 3m 11.08s | 1m 7.79s | 1m 49.84s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_SMOD-mod_bits_63] | 41.53s | 1m 57.52s | 2m 57.37s | 57.51s | 1m 38.48s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_diff_acc_to_diff_acc] | 2m 6.33s | 44.95s | 3m 0.46s | 23.70s | 1m 33.86s |
| test_worst_compute.py::test_worst_mod[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MOD-mod_bits_63] | 39.86s | 1m 50.11s | 2m 44.71s | 52.69s | 1m 31.84s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_diff_acc_to_b] | 2m 4.93s | 40.84s | 2m 59.33s | 22.14s | 1m 31.81s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_a_to_diff_acc] | 2m 7.43s | 39.05s | 2m 59.05s | 21.44s | 1m 31.74s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_a_to_b] | 2m 7.90s | 36.27s | 3m 0.65s | 20.45s | 1m 31.32s |
| test_worst_blocks.py::test_block_full_of_ether_transfers[fork_Prague-benchmark-gas-value_45M-blockchain_test-case_id_a_to_a] | 2m 4.67s | 35.82s | 2m 57.24s | 20.07s | 1m 29.45s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty-opcode_REVERT] | 32.30s | 1m 36.12s | 2m 7.27s | 1m 27.32s | 1m 25.75s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_CALLCODE] | 29.68s | 1m 30.23s | 1m 59.76s | 1m 21.15s | 1m 20.21s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_STATICCALL] | 28.78s | 1m 29.59s | 2m 1.27s | 1m 20.69s | 1m 20.08s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_EXP-] | 37.01s | 1m 40.12s | 2m 34.16s | 25.34s | 1m 19.16s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_CALL] | 30.27s | 1m 29.65s | 1m 56.10s | 1m 19.46s | 1m 18.87s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty-opcode_RETURN] | 29.86s | 1m 27.34s | 1m 56.60s | 1m 18.99s | 1m 18.20s |
| test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_ADDMOD-mod_bits_63] | 31.03s | 1m 27.90s | 2m 11.10s | 56.41s | 1m 16.61s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_CALLCODE] | 27.84s | 1m 24.02s | 1m 50.43s | 1m 16.10s | 1m 14.60s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_STATICCALL] | 26.94s | 1m 22.94s | 1m 49.76s | 1m 15.56s | 1m 13.80s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_CALL] | 27.28s | 1m 20.96s | 1m 48.51s | 1m 15.39s | 1m 13.03s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero-loop] | 27.24s | 1m 11.79s | 1m 54.63s | 1m 10.25s | 1m 10.97s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-one-loop] | 28.39s | 1m 11.98s | 1m 46.25s | 1m 10.56s | 1m 9.29s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_DELEGATECALL] | 24.88s | 1m 16.22s | 1m 40.97s | 1m 8.91s | 1m 7.75s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH32] | 20.12s | 1m 5.38s | 1m 33.42s | 1m 29.99s | 1m 7.23s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH31] | 19.73s | 1m 1.13s | 1m 36.90s | 1m 25.67s | 1m 5.85s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH30] | 18.29s | 58.53s | 1m 33.53s | 1m 23.86s | 1m 3.55s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SGT-] | 24.15s | 1m 6.06s | 1m 39.88s | 59.24s | 1m 2.33s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of zero data-opcode_REVERT] | 21.77s | 1m 21.28s | 1m 26.59s | 57.11s | 1m 1.69s |
| test_worst_compute.py::test_worst_calldataload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-empty] | 23.77s | 1m 0.65s | 1m 41.01s | 1m 1.32s | 1m 1.69s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_DELEGATECALL] | 22.55s | 1m 9.24s | 1m 29.32s | 1m 4.03s | 1m 1.29s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH29] | 17.55s | 56.57s | 1m 27.83s | 1m 21.65s | 1m 0.90s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH27] | 17.91s | 56.44s | 1m 26.24s | 1m 19.67s | 1m 0.06s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH28] | 18.02s | 57.75s | 1m 26.18s | 1m 17.68s | 59.91s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_EQ-] | 21.48s | 1m 0.64s | 1m 31.29s | 1m 3.04s | 59.11s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_COINBASE] | 21.10s | 1m 3.75s | 1m 24.11s | 1m 0.99s | 57.49s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of zero data-opcode_RETURN] | 19.81s | 1m 15.50s | 1m 21.31s | 52.42s | 57.26s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ADDRESS] | 21.20s | 1m 3.63s | 1m 23.55s | 59.16s | 56.88s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ORIGIN] | 20.75s | 1m 4.10s | 1m 22.47s | 59.28s | 56.65s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH26] | 16.71s | 54.44s | 1m 22.09s | 1m 13.07s | 56.58s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CALLER] | 20.90s | 1m 4.87s | 1m 22.65s | 57.15s | 56.39s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH25] | 16.34s | 53.70s | 1m 17.92s | 1m 12.73s | 55.17s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP1] | 21.53s | 54.13s | 1m 29.10s | 54.06s | 54.70s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ISZERO] | 19.82s | 58.33s | 1m 26.87s | 52.77s | 54.45s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH24] | 16.11s | 52.02s | 1m 18.13s | 1m 10.05s | 54.08s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SMOD-] | 21.21s | 57.95s | 1m 25.72s | 47.89s | 53.19s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH23] | 15.47s | 48.03s | 1m 21.29s | 1m 3.08s | 51.97s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SAR-] | 22.74s | 59.89s | 1m 30.48s | 33.68s | 51.69s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE] | 20.47s | 52.69s | 1m 22.63s | 50.63s | 51.60s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE] | 21.38s | 52.38s | 1m 21.69s | 50.44s | 51.47s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH22] | 14.51s | 46.74s | 1m 19.31s | 1m 5.21s | 51.44s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE] | 20.84s | 50.24s | 1m 24.18s | 50.28s | 51.38s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE] | 20.39s | 50.80s | 1m 22.09s | 50.65s | 50.98s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE] | 20.34s | 50.54s | 1m 22.22s | 50.52s | 50.90s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE] | 19.86s | 50.01s | 1m 23.05s | 50.18s | 50.77s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE] | 19.68s | 51.05s | 1m 21.70s | 50.06s | 50.62s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE] | 20.08s | 50.36s | 1m 21.70s | 50.03s | 50.54s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_add_infinities] | 20.48s | 51.24s | 1m 8.68s | 56.76s | 49.29s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-shift_right_SAR] | 22.13s | 55.27s | 1m 25.16s | 31.56s | 48.53s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH21] | 14.03s | 44.54s | 1m 11.35s | 59.58s | 47.37s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-six blobs, access latest] | 14.69s | 47.56s | 1m 5.58s | 59.93s | 46.94s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-one blob and accessed] | 14.85s | 47.46s | 1m 4.13s | 58.63s | 46.27s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH19] | 13.41s | 43.80s | 1m 9.26s | 56.35s | 45.70s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_REVERT] | 16.22s | 59.64s | 1m 4.29s | 42.00s | 45.54s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_MUL-] | 18.77s | 50.84s | 1m 33.24s | 19.22s | 45.52s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH20] | 13.47s | 43.59s | 1m 8.66s | 56.28s | 45.50s |
| test_worst_compute.py::test_worst_shifts[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-shift_right_SHR] | 20.80s | 52.33s | 1m 15.96s | 28.30s | 44.35s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SHR-] | 22.08s | 51.72s | 1m 13.70s | 28.23s | 43.93s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE] | 17.86s | 44.93s | 1m 12.83s | 38.34s | 43.49s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE] | 17.96s | 45.13s | 1m 11.63s | 38.07s | 43.20s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE] | 17.93s | 45.59s | 1m 11.14s | 37.88s | 43.13s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_MOD-] | 16.06s | 45.74s | 1m 9.43s | 40.71s | 42.98s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE] | 17.91s | 44.40s | 1m 11.58s | 37.72s | 42.90s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test-SSTORE new value] | 16.04s | 50.74s | 1m 2.04s | 42.67s | 42.87s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SHL-] | 20.86s | 50.59s | 1m 12.00s | 28.02s | 42.87s |
| test_worst_compute.py::test_worst_keccak[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 0.73s | 1m 36.54s | 44.21s | 28.17s | 42.41s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB of non-zero data-opcode_RETURN] | 15.11s | 55.63s | 59.08s | 38.68s | 42.13s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH17] | 12.41s | 39.97s | 1m 2.28s | 50.49s | 41.29s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH15] | 12.71s | 39.33s | 1m 6.43s | 46.58s | 41.26s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-SHA2-256] | 1m 37.12s | 3.75s | 52.12s | 12.05s | 41.26s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH16] | 12.37s | 40.10s | 1m 0.82s | 48.95s | 40.56s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH14] | 11.93s | 38.06s | 1m 3.67s | 44.98s | 39.66s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH18] | 13.22s | 40.64s | 1m 4.02s | ❌ SDK Crash | 39.29s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CODESIZE] | 14.61s | 46.58s | 1m 1.43s | 33.39s | 39.00s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MLOAD] | 14.56s | 36.77s | 54.20s | 49.14s | 38.67s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MLOAD] | 15.16s | 37.26s | 53.26s | 48.94s | 38.65s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MLOAD] | 14.72s | 37.13s | 53.26s | 49.34s | 38.61s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BLOBBASEFEE] | 14.33s | 47.76s | 1m 3.23s | 28.89s | 38.55s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MLOAD] | 14.29s | 37.27s | 53.13s | 49.01s | 38.43s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MLOAD] | 14.63s | 36.75s | 53.14s | 49.08s | 38.40s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MLOAD] | 14.72s | 36.47s | 52.54s | 49.59s | 38.33s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SIGNEXTEND-] | 18.02s | 43.97s | 1m 7.84s | 23.48s | 38.33s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MLOAD] | 14.88s | 36.75s | 52.61s | 48.96s | 38.30s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MLOAD] | 14.37s | 36.66s | 52.75s | 49.40s | 38.30s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MLOAD] | 14.03s | 36.86s | 53.38s | 48.90s | 38.29s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MLOAD] | 14.12s | 36.68s | 53.02s | 49.08s | 38.23s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MLOAD] | 14.66s | 36.92s | 52.22s | 49.03s | 38.21s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-call] | 16.00s | 42.88s | 1m 6.58s | 27.32s | 38.19s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MLOAD] | 13.56s | 36.76s | 52.46s | 48.88s | 37.91s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-0 bytes-transaction] | 15.68s | 42.40s | 1m 4.24s | 27.32s | 37.41s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GASPRICE] | 13.84s | 44.79s | 1m 0.57s | 28.94s | 37.03s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP2] | 15.02s | 35.96s | 59.43s | 36.69s | 36.78s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH13] | 11.60s | 36.24s | 55.47s | 42.63s | 36.49s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 14.62s | 41.06s | 1m 2.82s | 25.73s | 36.06s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-0 bytes] | 14.72s | 40.71s | 1m 2.13s | 26.00s | 35.89s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0 bytes] | 14.57s | 40.73s | 1m 2.55s | 24.89s | 35.69s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH12] | 10.97s | 35.56s | 51.57s | 39.08s | 34.29s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH11] | 10.93s | 34.91s | 52.64s | 38.27s | 34.19s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-call] | 13.27s | 38.27s | 56.16s | 28.46s | 34.04s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-100 bytes] | 13.80s | 38.78s | 56.85s | 26.62s | 34.01s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-100 bytes-transaction] | 13.43s | 37.33s | 55.58s | 28.19s | 33.63s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_100000] | 12.95s | 41.34s | 51.86s | 27.98s | 33.53s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1] | 12.91s | 40.96s | 51.77s | 27.96s | 33.40s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1000000] | 13.13s | 41.15s | 51.47s | 27.83s | 33.40s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_1000] | 12.57s | 40.35s | 51.43s | 28.17s | 33.13s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-call] | 13.17s | 36.66s | 55.25s | 27.43s | 33.12s |
| test_worst_compute.py::test_worst_msize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mem_size_0] | 12.95s | 40.37s | 51.10s | 28.01s | 33.11s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_True] | 11.57s | 41.39s | 47.96s | 31.04s | 32.99s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_True-key_mut_False] | 11.81s | 39.98s | 47.57s | 30.78s | 32.53s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test-SSTORE same value] | 11.82s | ❌ SDK Crash | 50.90s | 33.04s | 31.92s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_NUMBER] | 11.83s | 37.26s | 51.16s | 24.11s | 31.09s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_TIMESTAMP] | 11.56s | 36.95s | 51.96s | 23.76s | 31.06s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-100 bytes] | 11.54s | 34.17s | 49.67s | 27.15s | 30.63s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH10] | 10.52s | 33.12s | 44.52s | 34.30s | 30.61s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-1MiB] | 9.38s | 1m 0.09s | 34.72s | 17.68s | 30.47s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-100 bytes-transaction] | 11.88s | 33.38s | 49.43s | 22.46s | 29.29s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH9] | 10.02s | 31.50s | 42.48s | 32.46s | 29.11s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BASEFEE] | 10.69s | 35.23s | 47.61s | 22.80s | 29.08s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH7] | 9.86s | 31.43s | 43.10s | 30.64s | 28.76s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH8] | 9.75s | 31.66s | 40.98s | 31.85s | 28.56s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CHAINID] | 10.70s | 34.42s | 46.10s | 22.81s | 28.51s |
| test_worst_compute.py::test_worst_jumpi_fallthrough[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 10.72s | 30.48s | 45.26s | 27.08s | 28.38s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SLT-] | 11.33s | 31.43s | 45.94s | 22.93s | 27.91s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH0] | 10.48s | 33.58s | 44.31s | 22.43s | 27.70s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP3] | 11.25s | 26.95s | 44.72s | 27.66s | 27.64s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH6] | 9.62s | 30.58s | 39.61s | 29.39s | 27.30s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GASLIMIT] | 10.52s | 33.00s | 43.46s | 21.46s | 27.11s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-0 bytes] | 11.24s | 29.68s | 45.86s | 21.38s | 27.04s |
| test_worst_compute.py::test_worst_zero_param[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GAS] | 10.51s | 32.40s | 43.13s | 21.38s | 26.85s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-5b] | 7.81s | 37.11s | 39.31s | 21.65s | 26.47s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SUB-] | 11.23s | 31.00s | 45.55s | 17.86s | 26.41s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_0-opcode_MSTORE8] | 11.03s | 28.56s | 42.30s | 22.03s | 25.98s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_31-opcode_MSTORE8] | 10.37s | 28.43s | 43.10s | 21.56s | 25.86s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_1-opcode_MSTORE8] | 10.92s | 28.10s | 41.61s | 21.93s | 25.64s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_1-opcode_MSTORE8] | 10.70s | 28.17s | 41.88s | 21.79s | 25.63s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_1-opcode_MSTORE8] | 10.37s | 28.61s | 41.74s | 21.61s | 25.58s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_False-offset_0-opcode_MSTORE8] | 10.75s | 28.14s | 41.57s | 21.86s | 25.58s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_0-opcode_MSTORE8] | 10.64s | 28.12s | 41.85s | 21.64s | 25.56s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_True-offset_31-opcode_MSTORE8] | 10.38s | 28.72s | 41.60s | 21.52s | 25.55s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_1-opcode_MSTORE8] | 10.51s | 28.31s | 41.66s | 21.65s | 25.53s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_True-offset_initialized_False-offset_31-opcode_MSTORE8] | 10.47s | 28.56s | 41.32s | 21.65s | 25.50s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_0-opcode_MSTORE8] | 10.53s | 28.08s | 41.60s | 21.52s | 25.43s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-1MiB] | 6.07s | 54.08s | 32.11s | 9.38s | 25.41s |
| test_worst_compute.py::test_worst_memory_access[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-big_memory_expansion_False-offset_initialized_True-offset_31-opcode_MSTORE8] | 10.35s | 27.89s | 41.29s | 21.73s | 25.32s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH5] | 8.99s | 28.19s | 37.36s | 26.21s | 25.19s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-1MiB] | 5.28s | 53.99s | 25.36s | 15.53s | 25.04s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-one blob but access non-existent index] | 9.51s | 30.68s | 35.75s | 23.21s | 24.79s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-call] | 10.08s | 26.72s | 41.31s | 20.17s | 24.57s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_ADD-] | 10.30s | 28.04s | 41.97s | 17.75s | 24.51s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-call] | 4.94s | 52.38s | 23.14s | 16.51s | 24.24s |
| test_worst_compute.py::test_worst_blobhash[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-no blobs] | 9.11s | 30.61s | 34.67s | 21.30s | 23.92s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-0 bytes-transaction] | 9.72s | 26.00s | 39.97s | 19.96s | 23.91s |
| test_worst_compute.py::test_worst_jumpdests[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 10.05s | 26.05s | 38.17s | 20.37s | 23.66s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP5] | 8.10s | 25.43s | 43.35s | 17.17s | 23.52s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH4] | 8.40s | 26.82s | 35.41s | 23.02s | 23.41s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH3] | 8.46s | 26.67s | 35.58s | 21.57s | 23.07s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_BYTE-] | 9.57s | 25.62s | 38.64s | 17.59s | 22.85s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-IDENTITY] | 4.03s | 54.78s | 22.97s | 9.32s | 22.77s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP4] | 8.97s | 21.86s | 35.66s | 22.60s | 22.27s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-10KiB] | 10.37s | 26.68s | 32.81s | 19.13s | 22.25s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP2] | 7.93s | 25.69s | 36.55s | 16.94s | 21.77s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 9.27s | 23.19s | 37.33s | 17.29s | 21.77s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_GT-] | 9.34s | 24.22s | 37.12s | 16.34s | 21.75s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP13] | 8.16s | 25.91s | 35.98s | 16.89s | 21.73s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP9] | 8.08s | 26.24s | 35.47s | 16.93s | 21.68s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_LT-] | 9.02s | 24.32s | 36.88s | 16.42s | 21.66s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP1] | 8.20s | 25.83s | 35.50s | 17.08s | 21.65s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP15] | 7.93s | 25.98s | 35.52s | 16.98s | 21.61s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP4] | 8.12s | 25.55s | 35.50s | 17.16s | 21.58s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP11] | 8.23s | 25.86s | 35.07s | 17.08s | 21.56s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP10] | 8.01s | 25.86s | 35.15s | 17.08s | 21.52s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP16] | 8.02s | 25.69s | 35.45s | 16.93s | 21.52s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP14] | 7.86s | 26.05s | 35.11s | 17.00s | 21.50s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP12] | 8.03s | 25.58s | 35.33s | 16.99s | 21.48s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP6] | 8.10s | 25.92s | 34.85s | 16.95s | 21.45s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP8] | 8.29s | 25.49s | 34.93s | 17.10s | 21.45s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP7] | 8.04s | 25.95s | 34.60s | 17.15s | 21.43s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_OR-] | 9.21s | 23.27s | 36.98s | 16.25s | 21.43s |
| test_worst_compute.py::test_worst_dup[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_DUP3] | 7.99s | 25.66s | 35.13s | 16.83s | 21.40s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_0] | 8.69s | 23.86s | 33.46s | 18.95s | 21.24s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_10000] | 8.67s | 23.89s | 33.48s | 18.71s | 21.19s |
| test_worst_compute.py::test_worst_calldatasize[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-calldata_length_1000] | 8.73s | 23.15s | 33.27s | 18.91s | 21.02s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_AND-] | 9.28s | 23.22s | 35.41s | 15.91s | 20.95s |
| test_worst_compute.py::test_worst_binop_simple[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_XOR-] | 8.84s | 23.11s | 35.42s | 16.17s | 20.88s |
| test_worst_stateful_opcodes.py::test_worst_blockhash[fork_Prague-benchmark-gas-value_45M-blockchain_test] | 7.92s | 21.82s | 30.78s | 22.97s | 20.87s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0 bytes] | 8.74s | 23.32s | 35.62s | 15.49s | 20.79s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-100 bytes] | 8.05s | 23.02s | 33.75s | 18.27s | 20.77s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH2] | 8.31s | 24.70s | 32.68s | 17.13s | 20.70s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-100 bytes] | 8.60s | 23.23s | 33.40s | 16.60s | 20.46s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-call] | 8.49s | 21.70s | 32.54s | 18.42s | 20.29s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-100 bytes-transaction] | 8.67s | 21.40s | 31.02s | 18.14s | 19.81s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-1MiB] | 3.27s | 49.04s | 19.01s | 7.81s | 19.78s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_True-non_zero_value_True] | 8.10s | 21.85s | 32.27s | 16.80s | 19.75s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_True-non_zero_value_False] | 8.50s | 21.42s | 32.23s | 16.53s | 19.67s |
| test_worst_compute.py::test_worst_push[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_PUSH1] | 7.38s | 23.29s | 31.34s | 16.24s | 19.56s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_False-non_zero_value_False] | 8.32s | 21.70s | 31.49s | 16.42s | 19.48s |
| test_worst_compute.py::test_worst_callvalue[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-from_origin_False-non_zero_value_True] | 8.25s | 21.28s | 31.54s | 16.44s | 19.38s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-call] | 3.26s | 48.81s | 17.49s | 7.94s | 19.37s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-call] | 8.08s | 20.56s | 30.96s | 17.45s | 19.26s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP5] | 7.58s | 18.53s | 29.87s | 19.25s | 18.81s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.REVERT] | 7.67s | 21.37s | 29.48s | 16.50s | 18.75s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.REVERT] | 7.66s | 21.24s | 29.81s | 16.20s | 18.73s |
| test_worst_compute.py::test_worst_returndatasize_zero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 7.58s | 21.61s | 29.56s | 16.06s | 18.70s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-transaction] | 4.17s | 38.05s | 20.04s | 12.23s | 18.62s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.IDENTITY] | 7.64s | 20.62s | 30.02s | 16.18s | 18.61s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_1-return_data_style_ReturnDataStyle.RETURN] | 7.60s | 20.91s | 29.53s | 16.19s | 18.55s |
| test_worst_compute.py::test_worst_unop[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_NOT] | 7.54s | 20.02s | 32.31s | 14.34s | 18.55s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.RETURN] | 7.64s | 20.30s | 29.58s | 16.13s | 18.41s |
| test_worst_compute.py::test_worst_returndatasize_nonzero[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-returned_size_0-return_data_style_ReturnDataStyle.IDENTITY] | 7.59s | 20.44s | 29.34s | 16.22s | 18.40s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODEHASH] | 6.60s | 18.99s | 26.03s | 21.81s | 18.36s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-100 bytes-transaction] | 7.11s | 19.21s | 28.27s | 15.43s | 17.50s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-00] | 4.60s | 26.89s | 24.05s | 13.75s | 17.32s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-1MiB-call] | 3.69s | 34.27s | 18.88s | 11.17s | 17.00s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-605b5b] | 4.70s | 28.04s | 20.84s | 13.86s | 16.86s |
| test_worst_compute.py::test_worst_jumpis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 6.84s | 18.39s | 27.46s | 14.19s | 16.72s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP6] | 6.57s | 15.70s | 25.88s | 16.44s | 16.15s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.25x max code size] | 5.72s | 15.72s | 23.95s | 18.96s | 16.09s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_False-10KiB] | 6.21s | 18.10s | 22.86s | 17.17s | 16.09s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_accounts_False-opcode_BALANCE] | 3.37s | 30.98s | 16.98s | 11.15s | 15.62s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODEHASH] | 5.63s | 15.74s | 21.88s | 18.46s | 15.43s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE same value, out of gas] | 3.28s | 29.14s | 17.77s | 11.33s | 15.38s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-transaction] | 5.69s | 15.91s | 21.07s | 18.73s | 15.35s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.50x max code size] | 5.57s | 15.58s | 21.17s | 18.56s | 15.22s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE same value, revert] | 3.41s | 28.05s | 18.26s | 11.14s | 15.21s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_True] | 5.88s | 16.51s | 22.83s | 15.57s | 15.20s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-call] | 5.75s | 15.43s | 20.66s | 18.91s | 15.19s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-1MiB-transaction] | 1.85s | 44.38s | 8.81s | 5.51s | 15.14s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-0.75x max code size] | 5.54s | 15.67s | 20.59s | 18.59s | 15.10s |
| test_worst_compute.py::test_worst_tstore[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-dense_val_mut_False-key_mut_False] | 6.03s | 16.32s | 22.31s | 15.72s | 15.09s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-1MiB-transaction] | 1.85s | 44.31s | 8.69s | 5.47s | 15.08s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_False-10KiB-call] | 5.94s | 15.34s | 20.28s | 18.59s | 15.04s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_45M-blockchain_test-value_bearing_True] | ❌ SDK Crash | 21.08s | 14.37s | 9.65s | 15.03s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_False-max code size] | 5.55s | 15.66s | 19.93s | 18.66s | 14.95s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-615b5b5b] | 3.85s | 26.29s | 17.65s | 11.62s | 14.85s |
| test_worst_memory.py::test_worst_mcopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-10KiB] | 6.67s | 17.51s | 24.04s | 10.00s | 14.55s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE same value] | 3.22s | 26.39s | 17.58s | 10.90s | 14.52s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSLOAD] | 2.90s | 26.54s | 17.20s | 10.16s | 14.20s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP7] | 5.70s | 13.92s | 22.33s | 14.74s | 14.17s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test-SLOAD] | 5.43s | 15.32s | 21.50s | 14.38s | 14.16s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-transaction] | 2.33s | 33.12s | 14.36s | 6.27s | 14.02s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_32_byte_coord_and_2_scalar] | 9.71s | 5.98s | 33.30s | 6.59s | 13.90s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_EXTCODESIZE] | 4.96s | 13.65s | 18.25s | 16.51s | 13.34s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-605b] | 3.25s | 24.11s | 16.02s | 9.80s | 13.29s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-512] | 4.95s | 14.06s | 19.68s | 14.21s | 13.22s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_EXTCODESIZE] | 4.85s | 13.13s | 17.80s | 16.02s | 12.95s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-1MiB-call] | 2.14s | 30.80s | 12.61s | 5.93s | 12.87s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP8] | 5.13s | 12.35s | 19.75s | 13.15s | 12.59s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1KiB] | 4.63s | 13.55s | 18.96s | 12.48s | 12.40s |
| test_worst_compute.py::test_worst_jumps[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 5.00s | 13.19s | 19.36s | 10.95s | 12.12s |
| test_worst_compute.py::test_worst_precompile_only_data_input[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-RIPEMD-160] | 4.31s | 11.91s | 17.61s | 13.90s | 11.93s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_True-key_mut_True] | 4.37s | 12.97s | 17.06s | 12.32s | 11.68s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP9] | 4.70s | 11.15s | 17.88s | 12.11s | 11.46s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_True-key_mut_False] | 4.38s | 12.08s | 17.02s | 12.17s | 11.41s |
| test_worst_bytecode.py::test_worst_initcode_jumpdest_analysis[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-615b5b] | 2.59s | 21.10s | 13.67s | 7.91s | 11.32s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE new value] | 2.38s | 20.64s | 13.36s | 8.12s | 11.12s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_True-opcode_BALANCE] | 4.12s | 11.39s | 15.62s | 12.55s | 10.92s |
| test_worst_stateful_opcodes.py::test_worst_address_state_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-absent_target_False-opcode_BALANCE] | 4.03s | 11.10s | 15.20s | 12.39s | 10.68s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP10] | 4.27s | 10.50s | 16.37s | 11.09s | 10.56s |
| test_worst_stateful_opcodes.py::test_worst_extcodecopy_warm[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-5KiB] | 3.95s | 11.47s | 16.19s | 9.86s | 10.37s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-max code size] | 3.67s | 12.21s | 15.86s | 8.38s | 10.03s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP11] | 3.84s | 9.45s | 15.16s | 10.67s | 9.78s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0.25x max code size] | 3.75s | 10.53s | 15.78s | 8.71s | 9.69s |
| test_worst_memory.py::test_worst_returndatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_dst_True-10KiB] | 3.74s | 10.69s | 14.96s | 8.50s | 9.47s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0.75x max code size] | 3.63s | 10.62s | 14.93s | 8.55s | 9.43s |
| test_worst_memory.py::test_worst_codecopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_src_dst_True-0.50x max code size] | 3.78s | 10.43s | 14.99s | 8.50s | 9.42s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-transaction] | 3.79s | 10.45s | 14.82s | 8.64s | 9.42s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-call] | 3.70s | 10.44s | 14.98s | 8.58s | 9.42s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_True-fixed_src_dst_True-10KiB-call] | 3.70s | 10.62s | 14.81s | 8.46s | 9.40s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_existing[fork_Prague-benchmark-gas-value_45M-blockchain_test-value_bearing_False] | 2.47s | 15.22s | 10.56s | 8.00s | 9.06s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP12] | 3.58s | 8.66s | 13.90s | 9.85s | 9.00s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP13] | 3.36s | 8.17s | 13.18s | 9.12s | 8.45s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP14] | 3.23s | 7.75s | 11.92s | 8.55s | 7.86s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_1_2_2_scalar] | 10.97s | 5.80s | 8.27s | 6.30s | 7.83s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE new value, revert] | 1.77s | 12.92s | 8.82s | 6.31s | 7.45s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP15] | 2.99s | 7.31s | 11.29s | 8.17s | 7.44s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSLOAD] | 1.59s | 13.62s | 8.34s | 5.97s | 7.38s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_False-SSTORE new value, out of gas] | 1.79s | 12.76s | 8.56s | 6.33s | 7.36s |
| test_worst_compute.py::test_worst_swap[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_SWAP16] | 2.87s | 7.03s | 10.70s | 7.71s | 7.08s |
| test_worst_stateful_opcodes.py::test_worst_address_state_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_accounts_True-opcode_BALANCE] | 1.42s | 13.74s | 6.85s | 5.29s | 6.82s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_False-10KiB-transaction] | 2.29s | 6.97s | 8.75s | 6.29s | 6.08s |
| test_worst_memory.py::test_worst_calldatacopy[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-non_zero_data_False-fixed_src_dst_True-10KiB-transaction] | 2.06s | 6.20s | 8.03s | 5.92s | 5.55s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero_byte_True] | 0.79s | 10.07s | 5.37s | 4.66s | 5.22s |
| test_worst_blocks.py::test_block_full_access_list_and_data[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test] | 0.88s | 8.88s | 4.73s | 4.31s | 4.70s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bn128_mul_infinities_2_scalar] | 1.78s | 5.19s | 6.96s | 3.93s | 4.46s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_False-key_mut_False] | 1.59s | 4.15s | 5.68s | 4.62s | 4.01s |
| test_worst_compute.py::test_worst_tload[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-val_mut_False-key_mut_True] | 1.55s | 4.22s | 5.46s | 4.57s | 3.95s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_REVERT] | 0.51s | 6.70s | 1.91s | 2.32s | 2.86s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of non-zero data-opcode_RETURN] | 0.52s | 6.70s | 1.86s | 2.28s | 2.84s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log0] | 0.91s | 3.57s | 3.38s | 2.85s | 2.68s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log0] | 0.92s | 3.58s | 3.28s | 2.82s | 2.65s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log2] | ❌ SDK Crash | 2.53s | 2.30s | 2.65s | 2.49s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CREATE] | 0.66s | 3.40s | 2.32s | 3.05s | 2.36s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of zero data-opcode_REVERT] | 0.47s | 4.94s | 1.59s | 2.11s | 2.28s |
| test_worst_compute.py::test_worst_return_revert[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-1MiB of zero data-opcode_RETURN] | 0.45s | 5.00s | 1.62s | 2.00s | 2.27s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE same value] | 0.56s | 3.42s | 2.31s | 2.66s | 2.24s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log1] | 0.77s | 2.90s | 2.55s | 2.71s | 2.23s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log1] | 0.75s | 2.78s | 2.61s | 2.62s | 2.19s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE new value] | 0.56s | 2.87s | 2.44s | 2.62s | 2.12s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log2] | 0.67s | 2.55s | 2.24s | 2.72s | 2.05s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_True] | 0.63s | 2.77s | 1.80s | 2.52s | 1.93s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_created[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_False] | 0.57s | 2.62s | 1.88s | 2.55s | 1.90s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log0] | 0.57s | 2.57s | 1.82s | 2.27s | 1.81s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log1] | 0.61s | 2.25s | 1.85s | 2.41s | 1.78s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log3] | 0.62s | 2.16s | 1.98s | 2.35s | 1.78s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log3] | 0.59s | 2.17s | 1.96s | 2.30s | 1.75s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log1] | 0.56s | 2.21s | 1.87s | 2.37s | 1.75s |
| test_worst_blocks.py::test_block_full_data[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-zero_byte_False] | 0.37s | 2.93s | 1.48s | 2.23s | 1.75s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-0_bytes_data-log4] | 0.64s | 2.12s | 1.81s | 2.24s | 1.70s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log2] | 0.55s | 2.12s | 1.64s | 2.50s | 1.70s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log0] | 0.53s | 2.25s | 1.82s | 2.21s | 1.70s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE2] | 0.52s | 2.32s | 1.52s | 2.35s | 1.68s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-0_bytes_data-log4] | 0.57s | 2.07s | 1.83s | 2.23s | 1.67s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE] | 0.50s | 2.22s | 1.51s | 2.42s | 1.66s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log2] | 0.55s | 2.16s | 1.65s | 2.28s | 1.66s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes without value-opcode_CREATE2] | 0.48s | 2.32s | 1.49s | 2.33s | 1.66s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0 bytes with value-opcode_CREATE] | 0.49s | 2.20s | 1.44s | 2.25s | 1.59s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE same value, out of gas] | 0.47s | 2.15s | 1.33s | 2.27s | 1.55s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE same value, revert] | 0.44s | 2.11s | 1.37s | 2.28s | 1.55s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_True] | 0.46s | 2.14s | 1.27s | 2.33s | 1.55s |
| test_worst_stateful_opcodes.py::test_worst_selfdestruct_initcode[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-value_bearing_False] | 0.47s | 2.04s | 1.36s | 2.24s | 1.52s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log3] | 0.52s | 1.90s | 1.49s | 2.18s | 1.52s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log4] | 0.51s | 1.91s | 1.37s | 2.16s | 1.49s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-0_bytes_data-log4] | 0.50s | 1.86s | 1.41s | 2.13s | 1.47s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-0_bytes_data-log3] | 0.52s | 1.65s | 1.48s | 2.22s | 1.47s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE new value, out of gas] | 0.45s | 1.77s | 1.33s | 2.26s | 1.45s |
| test_worst_stateful_opcodes.py::test_worst_storage_access_cold[fork_Prague-benchmark-gas-value_45M-blockchain_test-absent_slots_True-SSTORE new value, revert] | 0.45s | 1.77s | 1.36s | 2.23s | 1.45s |
| test_worst_bytecode.py::test_worst_creates_collisions[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-opcode_CREATE2] | 0.42s | 1.48s | 1.10s | 2.14s | 1.28s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log0] | 0.31s | 1.65s | 0.63s | 1.80s | 1.10s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log2] | 0.34s | 1.49s | 0.62s | 1.87s | 1.08s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_2_sets] | 0.38s | 1.06s | 0.58s | 2.22s | 1.06s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log3] | 0.31s | 1.52s | 0.64s | 1.72s | 1.05s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log4] | 0.33s | 1.39s | 0.58s | 1.86s | 1.04s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log1] | 0.32s | 1.50s | 0.60s | 1.72s | 1.03s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log0] | 0.31s | 1.47s | 0.57s | 1.76s | 1.03s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log3] | 0.33s | 1.37s | 0.50s | 1.90s | 1.02s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log2] | 0.28s | 1.46s | 0.55s | 1.79s | 1.02s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log2] | 0.32s | 1.42s | 0.57s | 1.76s | 1.02s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log0] | 0.31s | 1.44s | 0.57s | 1.73s | 1.01s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log4] | 0.31s | 1.43s | 0.57s | 1.73s | 1.01s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log1] | 0.33s | 1.40s | 0.56s | 1.74s | 1.01s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log3] | 0.29s | 1.40s | 0.57s | 1.75s | 1.00s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log4] | 0.31s | 1.39s | 0.60s | 1.69s | 1.00s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_zeros_data-log3] | 0.30s | 1.38s | 0.56s | 1.73s | 0.99s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log4] | 0.29s | 1.34s | 0.48s | 1.85s | 0.99s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log2] | 0.29s | 1.36s | 0.48s | 1.79s | 0.98s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log0] | 0.27s | 1.31s | 0.47s | 1.82s | 0.97s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log1] | 0.29s | 1.35s | 0.48s | 1.74s | 0.96s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_non_zero_data-log3] | 0.29s | 1.32s | 0.49s | 1.73s | 0.96s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log3] | 0.29s | 1.40s | 0.46s | 1.69s | 0.96s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log2] | 0.33s | 1.34s | 0.55s | 1.60s | 0.95s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log3] | 0.27s | 1.39s | 0.46s | 1.68s | 0.95s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log0] | 0.26s | 1.36s | 0.47s | 1.70s | 0.95s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-zeros_topic-1_MiB_non_zero_data-log1] | 0.30s | 1.32s | 0.46s | 1.70s | 0.94s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log1] | 0.30s | 1.39s | 0.46s | 1.63s | 0.94s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log4] | 0.28s | 1.39s | 0.46s | 1.64s | 0.94s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log4] | 0.27s | 1.33s | 0.47s | 1.69s | 0.94s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_False-non_zero_topic-1_MiB_zeros_data-log0] | 0.28s | 1.32s | 0.48s | 1.68s | 0.94s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log4] | 0.27s | 1.33s | 0.46s | 1.68s | 0.94s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_zeros_data-log0] | 0.27s | 1.33s | 0.47s | 1.68s | 0.94s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log1] | 0.29s | 1.31s | 0.47s | 1.67s | 0.94s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log1] | 0.28s | 1.28s | 0.46s | 1.72s | 0.93s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log4] | 0.27s | 1.33s | 0.48s | 1.65s | 0.93s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log1] | 0.27s | 1.36s | 0.47s | 1.62s | 0.93s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log0] | 0.28s | 1.32s | 0.47s | 1.65s | 0.93s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log3] | 0.34s | 1.32s | 0.45s | 1.61s | 0.93s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-non_zero_topic-1_MiB_non_zero_data-log2] | 0.31s | 1.31s | 0.46s | 1.62s | 0.93s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_non_zero_data-log2] | 0.30s | 1.32s | 0.46s | 1.60s | 0.92s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE2] | 0.26s | 1.04s | 0.42s | 1.92s | 0.91s |
| test_worst_opcode.py::test_worst_log_opcodes[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-fixed_offset_True-zeros_topic-1_MiB_zeros_data-log2] | 0.28s | 1.31s | 0.48s | 1.57s | 0.91s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE2] | 0.28s | 1.08s | 0.43s | 1.82s | 0.90s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE2] | 0.31s | 1.12s | 0.45s | 1.71s | 0.89s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE2] | 0.31s | 1.15s | 0.45s | 1.67s | 0.89s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE2] | 0.27s | 1.09s | 0.45s | 1.73s | 0.88s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE2] | 0.27s | 1.06s | 0.45s | 1.72s | 0.88s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with non-zero data-opcode_CREATE] | 0.26s | 0.98s | 0.43s | 1.79s | 0.86s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE2] | 0.25s | 1.01s | 0.43s | 1.73s | 0.85s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE2] | 0.26s | 1.01s | 0.45s | 1.66s | 0.84s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-max code size with zero data-opcode_CREATE] | 0.26s | 0.89s | 0.46s | 1.76s | 0.84s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with zero data-opcode_CREATE] | 0.26s | 1.01s | 0.42s | 1.66s | 0.84s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_zero_input] | 0.30s | 0.84s | 0.47s | 1.73s | 0.83s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with non-zero data-opcode_CREATE] | 0.26s | 0.97s | 0.40s | 1.70s | 0.83s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.75x max code size with non-zero data-opcode_CREATE] | 0.26s | 0.98s | 0.40s | 1.65s | 0.82s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.50x max code size with zero data-opcode_CREATE] | 0.30s | 0.92s | 0.40s | 1.66s | 0.82s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_1_pair] | 0.30s | 0.84s | 0.47s | 1.67s | 0.82s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with non-zero data-opcode_CREATE] | 0.26s | 0.94s | 0.41s | 1.65s | 0.81s |
| test_worst_bytecode.py::test_worst_create[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-0.25x max code size with zero data-opcode_CREATE] | 0.25s | 0.89s | 0.42s | 1.62s | 0.79s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_1_pair_empty] | 0.22s | 0.72s | 0.19s | 1.58s | 0.68s |
| test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-ec_pairing_3_pair] | 0.23s | 0.66s | 0.20s | 1.56s | 0.66s |
| test_worst_compute.py::test_empty_block[fork_Prague-benchmark-gas-value_45M-blockchain_test] | 0.18s | 0.64s | 0.09s | 1.58s | 0.62s |

## Summary

**Total unique test cases:** 532

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed | 💥 Prover Crashed |
|------|-------|---------------|----------------|--------------------|
| openvm-v1.4.0 | 532 | 523 | 9 | 0 |
| risc0-v3.0.3 | 532 | 529 | 3 | 0 |
| sp1-v5.2.1 | 532 | 532 | 0 | 0 |
| zisk-v0.12.0 | 532 | 413 | 119 | 0 |

---

