# EEST Benchmark v0.0.9 (1xL40s)

Used [`zkevm-benchmark-workload` commit](https://github.com/eth-act/zkevm-benchmark-workload/tree/d2bbf1e8750064a3deae32eb61434bccfbd11ee8).

## Run status
- [X] 10M gas limit
- [ ] 45M gas limit
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
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_408_gas_base_heavy]` | 10M | Prover process OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_867_gas_base_heavy]` | 10M | Prover process OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_1045_gas_base_heavy]` | 10M | Prover process OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_800_gas_base_heavy]` | 10M | Prover process OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_616_gas_base_heavy]` | 10M | Prover process OOM |