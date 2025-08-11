# EEST Benchmark v0.0.9 (1x4090)

Used [`zkevm-benchmark-workload` commit](https://github.com/eth-act/zkevm-benchmark-workload/tree/d2bbf1e8750064a3deae32eb61434bccfbd11ee8).

## Run status
- [ ] 45M gas limit (in progress)
- [ ] 60M gas limit
- [ ] 90M gas limit
- [ ] 120M gas limit


## Proving failures

This section lists the proving failures encountered during the benchmark runs. Note that when the prover process 
crashes, there won't be a corresponding `.json` output file. For crashes that are reported by the SDK, the `.json` 
file will be present but result will have a `crashed` field with the error message.


### SP1
| Name | Lowest Gas Limit | Error |
| ---- | --------- | ----- |
| `test_worst_compute.py::test_worst_modarith[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-op_MULMOD-mod_bits_191]` | 45M | Host machine crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_400_gas_exp_heavy]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_677_gas_base_heavy]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_767_gas_balanced]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_996_gas_balanced]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_24b_exp_168]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_even_32b_exp_40]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_exp_208_gas_balanced]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_exp_298_gas_exp_heavy]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_min_as_balanced]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_96]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_odd_32b_exp_cover_windows]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_pawel_2]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_867_gas_base_heavy]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_1045_gas_base_heavy]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-mod_800_gas_base_heavy]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-blake2f]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_fp_to_g1]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g1msm]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_g2add]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-point_evaluation]` | 45M | Host process crashed OOM |
| `test_worst_compute.py::test_worst_precompile_fixed_cost[fork_Prague-benchmark-gas-value_45M-blockchain_test_from_state_test-bls12_fp_to_g2]` | 45M | SDK reported failure |