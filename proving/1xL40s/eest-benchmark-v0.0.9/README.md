# EEST Benchmark v0.0.9

## Run status
- [X] 1M gas limit
- [ ] 10M gas limit
- [ ] 30M gas limit
- [ ] 45M gas limit
- [ ] 60M gas limit
- [ ] 90M gas limit
- [ ] 120M gas limit


## Crashes

This section lists the host prover (host) crashes, thus a report for the fixture couldn't be generated. There are other fixtures 
which also can crash but at the zkVM level, which *do* generate a report but with the `crash` status.

Note that if a test crashes at X gas limit, it will crash at all higher gas limits as well -- so the crash is only 
listed once at the lowest gas limit where it occurs.


### SP1
| Name | Lowest Gas Limit | Error |
| ---- | --------- | ----- |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_408_gas_base_heavy]` | 10M | Prover process OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_867_gas_base_heavy]` | 10M | Prover process OOM |
| `test_worst_compute.py::test_worst_modexp[fork_Prague-benchmark-gas-value_10M-blockchain_test_from_state_test-mod_1045_gas_base_heavy]` | 10M | Prover process OOM |