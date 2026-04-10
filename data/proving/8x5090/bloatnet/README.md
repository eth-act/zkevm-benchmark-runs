# 8x5090 - bloatnet

## Benchmark Configuration - Proving

Benchmark results for bloatnet (proving) on **8x5090** hardware.

## Available EL Clients

- [reth-v1.11.0](#reth-v1.11.0)
- [zisk-v0.16.1](#zisk-v0.16.1)

---

## reth-v1.11.0


## Proving Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: ❌ indicates an SDK-reported crash.

| Test Case | zisk-v0.16.1<br/>(335.53KiB) | Avg |
|-----------|-----------|----------|
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-False-0-max_code_size-0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-False-32-max_code_size-0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-True-0-max_code_size-0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_BALANCE-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_BALANCE-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_256-code_size_0-value_sent_1-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_False-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_False-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_False-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_True-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_True-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_True-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_0-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_0-code_size_256-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_0-code_size_32-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_32-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_32-code_size_256-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_32-code_size_32-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_0-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_0-code_size_256-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_0-code_size_32-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_False-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_False-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_False-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_True-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_True-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_True-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_extcodesize_bytecode_sizes.py__test_extcodesize_bytecode_sizes[fork_Osaka-blockchain_test-0.5KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_extcodesize_bytecode_sizes.py__test_extcodesize_bytecode_sizes[fork_Osaka-blockchain_test-1.0KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_extcodesize_bytecode_sizes.py__test_extcodesize_bytecode_sizes[fork_Osaka-blockchain_test-10.0KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_extcodesize_bytecode_sizes.py__test_extcodesize_bytecode_sizes[fork_Osaka-blockchain_test-2.0KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_extcodesize_bytecode_sizes.py__test_extcodesize_bytecode_sizes[fork_Osaka-blockchain_test-24.0KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_extcodesize_bytecode_sizes.py__test_extcodesize_bytecode_sizes[fork_Osaka-blockchain_test-5.0KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-10KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-5KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-10KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-5KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-10KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-5KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-10KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-5KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-10KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-5KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-10KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-5KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-10KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-5KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-10KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-5KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_USDC-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_USDC-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 1m 52.81s | 1m 52.81s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 1m 46.50s | 1m 46.50s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_XEN-benchmark_90M]_90M.txt | 1m 39.89s | 1m 39.89s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 38.40s | 1m 38.40s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_XEN-benchmark_90M]_90M.txt | 1m 38.28s | 1m 38.28s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 1m 36.28s | 1m 36.28s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 1m 34.70s | 1m 34.70s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_XEN-benchmark_90M]_90M.txt | 1m 33.79s | 1m 33.79s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 1m 33.68s | 1m 33.68s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_XEN-benchmark_90M]_90M.txt | 1m 32.99s | 1m 32.99s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 32.28s | 1m 32.28s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 1m 31.20s | 1m 31.20s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_XEN-benchmark_90M]_90M.txt | 1m 31.19s | 1m 31.19s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 29.98s | 1m 29.98s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 29.48s | 1m 29.48s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 1m 29.28s | 1m 29.28s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 29.18s | 1m 29.18s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_XEN-benchmark_90M]_90M.txt | 1m 28.38s | 1m 28.38s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_XEN-benchmark_90M]_90M.txt | 1m 27.98s | 1m 27.98s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 1m 27.18s | 1m 27.18s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-2KB-benchmark_90M]_90M.txt | 1m 26.98s | 1m 26.98s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 26.88s | 1m 26.88s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-2KB-benchmark_90M]_90M.txt | 1m 26.27s | 1m 26.27s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 26.08s | 1m 26.08s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-10KB-benchmark_90M]_90M.txt | 1m 25.88s | 1m 25.88s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 1m 25.78s | 1m 25.78s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_XEN-benchmark_90M]_90M.txt | 1m 25.19s | 1m 25.19s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 24.66s | 1m 24.66s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 24.37s | 1m 24.37s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 1m 23.98s | 1m 23.98s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_12-account_depth_3-benchmark_90M]_90M.txt | 1m 23.08s | 1m 23.08s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-2KB-benchmark_90M]_90M.txt | 1m 22.98s | 1m 22.98s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 22.97s | 1m 22.97s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-2KB-benchmark_90M]_90M.txt | 1m 22.57s | 1m 22.57s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 1m 21.98s | 1m 21.98s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 1m 21.67s | 1m 21.67s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 21.38s | 1m 21.38s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-2KB-benchmark_90M]_90M.txt | 1m 21.28s | 1m 21.28s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 20.88s | 1m 20.88s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-2KB-benchmark_90M]_90M.txt | 1m 20.88s | 1m 20.88s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_6-benchmark_90M]_90M.txt | 1m 20.47s | 1m 20.47s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_12-account_depth_4-benchmark_90M]_90M.txt | 1m 20.47s | 1m 20.47s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 20.07s | 1m 20.07s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 18.97s | 1m 18.97s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-2KB-benchmark_90M]_90M.txt | 1m 18.58s | 1m 18.58s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 1m 18.27s | 1m 18.27s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_USDC-benchmark_90M]_90M.txt | 1m 17.48s | 1m 17.48s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_12-account_depth_5-benchmark_90M]_90M.txt | 1m 16.78s | 1m 16.78s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-1KB-benchmark_90M]_90M.txt | 1m 16.77s | 1m 16.77s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_3-benchmark_90M]_90M.txt | 1m 16.46s | 1m 16.46s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_7-benchmark_90M]_90M.txt | 1m 15.97s | 1m 15.97s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 1m 15.57s | 1m 15.57s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-1KB-benchmark_90M]_90M.txt | 1m 15.18s | 1m 15.18s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_USDC-benchmark_90M]_90M.txt | 1m 13.97s | 1m 13.97s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_4-benchmark_90M]_90M.txt | 1m 13.78s | 1m 13.78s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-1KB-benchmark_90M]_90M.txt | 1m 13.26s | 1m 13.26s |
| test_transient_storage.py__test_tstore_unique_keys[fork_Osaka-benchmark_test-with_tload_False-benchmark_90M]_90M.txt | 1m 12.97s | 1m 12.97s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_3-benchmark_90M]_90M.txt | 1m 12.87s | 1m 12.87s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-2KB-benchmark_90M]_90M.txt | 1m 12.77s | 1m 12.77s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 1m 10.77s | 1m 10.77s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_USDC-benchmark_90M]_90M.txt | 1m 10.37s | 1m 10.37s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-1KB-benchmark_90M]_90M.txt | 1m 9.77s | 1m 9.77s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_4-benchmark_90M]_90M.txt | 1m 9.68s | 1m 9.68s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_6-benchmark_90M]_90M.txt | 1m 9.57s | 1m 9.57s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_5-benchmark_90M]_90M.txt | 1m 9.37s | 1m 9.37s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 8.86s | 1m 8.86s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_5-benchmark_90M]_90M.txt | 1m 8.76s | 1m 8.76s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_USDC-benchmark_90M]_90M.txt | 1m 8.66s | 1m 8.66s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-1KB-benchmark_90M]_90M.txt | 1m 7.96s | 1m 7.96s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_USDC-benchmark_90M]_90M.txt | 1m 7.96s | 1m 7.96s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-0_5KB-benchmark_90M]_90M.txt | 1m 7.86s | 1m 7.86s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-0_5KB-benchmark_90M]_90M.txt | 1m 7.16s | 1m 7.16s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_USDC-benchmark_90M]_90M.txt | 1m 6.97s | 1m 6.97s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-1KB-benchmark_90M]_90M.txt | 1m 6.86s | 1m 6.86s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_7-benchmark_90M]_90M.txt | 1m 6.27s | 1m 6.27s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 4.96s | 1m 4.96s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-0_5KB-benchmark_90M]_90M.txt | 1m 4.46s | 1m 4.46s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-0_5KB-benchmark_90M]_90M.txt | 1m 4.26s | 1m 4.26s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_XEN-benchmark_90M]_90M.txt | 1m 3.95s | 1m 3.95s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-1KB-benchmark_90M]_90M.txt | 1m 3.57s | 1m 3.57s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-1KB-benchmark_90M]_90M.txt | 1m 3.16s | 1m 3.16s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 1m 2.57s | 1m 2.57s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 1m 1.75s | 1m 1.75s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 1m 1.55s | 1m 1.55s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-0_5KB-benchmark_90M]_90M.txt | 1m 1.26s | 1m 1.26s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 1m 1.17s | 1m 1.17s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-0_5KB-benchmark_90M]_90M.txt | 1m 1.05s | 1m 1.05s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 1m 1.05s | 1m 1.05s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-0_5KB-benchmark_90M]_90M.txt | 1m 0.47s | 1m 0.47s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-5KB-benchmark_90M]_90M.txt | 58.66s | 58.66s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-0_5KB-benchmark_90M]_90M.txt | 58.35s | 58.35s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-0_5KB-benchmark_90M]_90M.txt | 58.26s | 58.26s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-24KB-benchmark_90M]_90M.txt | 58.15s | 58.15s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 58.05s | 58.05s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 57.95s | 57.95s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-10KB-benchmark_90M]_90M.txt | 57.86s | 57.86s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-5KB-benchmark_90M]_90M.txt | 57.56s | 57.56s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_USDC-benchmark_90M]_90M.txt | 57.07s | 57.07s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 56.96s | 56.96s |
| test_transient_storage.py__test_tstore_unique_keys[fork_Osaka-benchmark_test-with_tload_True-benchmark_90M]_90M.txt | 56.56s | 56.56s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-10KB-benchmark_90M]_90M.txt | 56.15s | 56.15s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-2KB-benchmark_90M]_90M.txt | 55.36s | 55.36s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-1KB-benchmark_90M]_90M.txt | 54.75s | 54.75s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 54.75s | 54.75s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-2KB-benchmark_90M]_90M.txt | 54.45s | 54.45s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 54.26s | 54.26s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_256-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 54.05s | 54.05s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 53.66s | 53.66s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-24KB-benchmark_90M]_90M.txt | 53.15s | 53.15s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 52.95s | 52.95s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-5KB-benchmark_90M]_90M.txt | 52.76s | 52.76s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-1KB-benchmark_90M]_90M.txt | 52.05s | 52.05s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-False-256-max_code_size-0-benchmark_90M]_90M.txt | 51.45s | 51.45s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 51.35s | 51.35s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_256-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 51.25s | 51.25s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-0_5KB-benchmark_90M]_90M.txt | 50.75s | 50.75s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_256-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 50.25s | 50.25s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_XEN-benchmark_90M]_90M.txt | 49.95s | 49.95s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 47.14s | 47.14s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 45.36s | 45.36s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_HST-benchmark_90M]_90M.txt | 44.95s | 44.95s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 44.94s | 44.94s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_HST-benchmark_90M]_90M.txt | 44.65s | 44.65s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_ARB-benchmark_90M]_90M.txt | 44.34s | 44.34s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 44.14s | 44.14s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 44.04s | 44.04s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 42.84s | 42.84s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_1024-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 41.64s | 41.64s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_1024-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 41.55s | 41.55s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 41.14s | 41.14s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_ARB-benchmark_90M]_90M.txt | 40.73s | 40.73s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_1024-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 39.84s | 39.84s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-False-1024-max_code_size-0-benchmark_90M]_90M.txt | 39.53s | 39.53s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_USDC-benchmark_90M]_90M.txt | 38.85s | 38.85s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 38.54s | 38.54s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 38.53s | 38.53s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 38.33s | 38.33s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 37.94s | 37.94s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 37.43s | 37.43s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 37.24s | 37.24s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 37.13s | 37.13s |
| test_single_opcode.py__test_storage_sload_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_True-access_warm_True-benchmark_90M]_90M.txt | 37.03s | 37.03s |
| test_single_opcode.py__test_storage_sload_same_key_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_False-benchmark_90M]_90M.txt | 36.63s | 36.63s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 36.54s | 36.54s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_same-sloads_before_sstore_False-access_warm_True-benchmark_90M]_90M.txt | 36.44s | 36.44s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-2KB-benchmark_90M]_90M.txt | 36.23s | 36.23s |
| test_single_opcode.py__test_storage_sload_same_key_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_True-benchmark_90M]_90M.txt | 35.83s | 35.83s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_0-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 35.43s | 35.43s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 34.93s | 34.93s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 34.84s | 34.84s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_ARB-benchmark_90M]_90M.txt | 34.63s | 34.63s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_HST-benchmark_90M]_90M.txt | 34.53s | 34.53s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_1024-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 34.13s | 34.13s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_ARB-benchmark_90M]_90M.txt | 33.64s | 33.64s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 33.64s | 33.64s |
| test_transient_storage.py__test_tstore_same_key[fork_Osaka-benchmark_test-with_tload_False-benchmark_90M]_90M.txt | 33.62s | 33.62s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_1024-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 33.43s | 33.43s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_256-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 33.14s | 33.14s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 33.03s | 33.03s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-1KB-benchmark_90M]_90M.txt | 32.94s | 32.94s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_HST-benchmark_90M]_90M.txt | 32.83s | 32.83s |
| test_transient_storage.py__test_tstore_same_key[fork_Osaka-benchmark_test-with_tload_True-benchmark_90M]_90M.txt | 32.73s | 32.73s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_ARB-benchmark_90M]_90M.txt | 32.64s | 32.64s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_32-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 32.53s | 32.53s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_HST-benchmark_90M]_90M.txt | 32.23s | 32.23s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_same-sloads_before_sstore_True-access_warm_True-benchmark_90M]_90M.txt | 32.23s | 32.23s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_HST-benchmark_90M]_90M.txt | 32.13s | 32.13s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_ARB-benchmark_90M]_90M.txt | 31.83s | 31.83s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_0-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 31.63s | 31.63s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_ARB-benchmark_90M]_90M.txt | 31.53s | 31.53s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_32-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 31.52s | 31.52s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 31.52s | 31.52s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_HST-benchmark_90M]_90M.txt | 31.43s | 31.43s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 30.24s | 30.24s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 30.22s | 30.22s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-0_5KB-benchmark_90M]_90M.txt | 30.13s | 30.13s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 29.93s | 29.93s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 29.52s | 29.52s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 29.43s | 29.43s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_ARB-benchmark_90M]_90M.txt | 29.12s | 29.12s |
| test_single_opcode.py__test_storage_sload_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_False-access_warm_True-benchmark_90M]_90M.txt | 28.84s | 28.84s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_zero-sloads_before_sstore_False-access_warm_True-benchmark_90M]_90M.txt | 28.82s | 28.82s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 28.63s | 28.63s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 28.52s | 28.52s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 28.32s | 28.32s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_HST-benchmark_90M]_90M.txt | 27.93s | 27.93s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 27.83s | 27.83s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 27.33s | 27.33s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 27.33s | 27.33s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_30GB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 26.83s | 26.83s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 26.72s | 26.72s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 26.42s | 26.42s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_50GB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 25.82s | 25.82s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 25.82s | 25.82s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 25.72s | 25.72s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_XEN-benchmark_90M]_90M.txt | 25.54s | 25.54s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 25.52s | 25.52s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 25.23s | 25.23s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 25.13s | 25.13s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 24.82s | 24.82s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_zero-sloads_before_sstore_True-access_warm_True-benchmark_90M]_90M.txt | 24.72s | 24.72s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_ARB-benchmark_90M]_90M.txt | 24.34s | 24.34s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_diff-sloads_before_sstore_True-access_warm_True-benchmark_90M]_90M.txt | 24.12s | 24.12s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_same-sloads_before_sstore_True-access_warm_False-benchmark_90M]_90M.txt | 24.03s | 24.03s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_diff-sloads_before_sstore_False-access_warm_True-benchmark_90M]_90M.txt | 23.94s | 23.94s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 23.82s | 23.82s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_USDC-benchmark_90M]_90M.txt | 23.42s | 23.42s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_9_39GB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 23.32s | 23.32s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 22.93s | 22.93s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_1GB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 22.42s | 22.42s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_same-sloads_before_sstore_False-access_warm_False-benchmark_90M]_90M.txt | 22.22s | 22.22s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_HST-benchmark_90M]_90M.txt | 22.02s | 22.02s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 21.82s | 21.82s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 20.92s | 20.92s |
| test_single_opcode.py__test_storage_sload_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_True-access_warm_False-benchmark_90M]_90M.txt | 20.72s | 20.72s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 20.23s | 20.23s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_50GB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 20.12s | 20.12s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 20.02s | 20.02s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_USDC-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 19.42s | 19.42s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_50GB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 19.28s | 19.28s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 19.21s | 19.21s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_32-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 19.03s | 19.03s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-mass_clear-access_warm_True-benchmark_90M]_90M.txt | 19.02s | 19.02s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-triple_write_restore-access_warm_True-benchmark_90M]_90M.txt | 18.91s | 18.91s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_32-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 18.81s | 18.81s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_30GB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 18.52s | 18.52s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_XEN-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 18.31s | 18.31s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_diff-sloads_before_sstore_True-access_warm_False-benchmark_90M]_90M.txt | 17.92s | 17.92s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_diff-sloads_before_sstore_False-access_warm_False-benchmark_90M]_90M.txt | 17.92s | 17.92s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_30GB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 17.62s | 17.62s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_ARB-benchmark_90M]_90M.txt | 17.52s | 17.52s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_32-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 17.31s | 17.31s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_9_39GB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 17.21s | 17.21s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-True-32-max_code_size-0-benchmark_90M]_90M.txt | 17.01s | 17.01s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_9_39GB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 16.71s | 16.71s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 16.32s | 16.32s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_HST-benchmark_90M]_90M.txt | 16.11s | 16.11s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_zero-sloads_before_sstore_False-access_warm_False-benchmark_90M]_90M.txt | 16.02s | 16.02s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 15.72s | 15.72s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_XEN-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 15.62s | 15.62s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_XEN-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 15.51s | 15.51s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_1024-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 15.42s | 15.42s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_USDC-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 15.42s | 15.42s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_USDC-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 15.42s | 15.42s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_256-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 15.41s | 15.41s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_256-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 15.41s | 15.41s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-triple_write_restore-access_warm_False-benchmark_90M]_90M.txt | 15.32s | 15.32s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-mass_clear-access_warm_False-benchmark_90M]_90M.txt | 15.31s | 15.31s |
| test_single_opcode.py__test_storage_sload_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_False-access_warm_False-benchmark_90M]_90M.txt | 15.22s | 15.22s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_zero-sloads_before_sstore_True-access_warm_False-benchmark_90M]_90M.txt | 15.22s | 15.22s |
| test_multi_opcode.py__test_bloatnet_call_value_new_account[fork_Osaka-benchmark_test-benchmark_90M]_90M.txt | 15.12s | 15.12s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_1GB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 15.12s | 15.12s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 15.02s | 15.02s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 14.82s | 14.82s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_32-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 14.62s | 14.62s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_4_23MB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 14.61s | 14.61s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 14.61s | 14.61s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 14.61s | 14.61s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_0-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 14.52s | 14.52s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_1024-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 14.42s | 14.42s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 14.41s | 14.41s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-True-1024-max_code_size-0-benchmark_90M]_90M.txt | 13.91s | 13.91s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_1GB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 13.91s | 13.91s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODECOPY-32B-benchmark_90M]_90M.txt | 13.91s | 13.91s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_0-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 13.81s | 13.81s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_256-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 13.62s | 13.62s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_BALANCE-32B-benchmark_90M]_90M.txt | 13.61s | 13.61s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODEHASH-32B-benchmark_90M]_90M.txt | 13.61s | 13.61s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_32-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 13.52s | 13.52s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 13.51s | 13.51s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 13.41s | 13.41s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_256-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 13.31s | 13.31s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_4x-access_warm_True-benchmark_90M]_90M.txt | 13.23s | 13.23s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_6x-access_warm_True-benchmark_90M]_90M.txt | 12.92s | 12.92s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_256-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 12.81s | 12.81s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 12.81s | 12.81s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-True-256-max_code_size-0-benchmark_90M]_90M.txt | 12.71s | 12.71s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_1024-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 12.71s | 12.71s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_1024-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 12.71s | 12.71s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 12.71s | 12.71s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_1024-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 12.41s | 12.41s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_ARB-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 12.31s | 12.31s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 11.01s | 11.01s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 10.52s | 10.52s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 10.41s | 10.41s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_HST-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 10.11s | 10.11s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 10.11s | 10.11s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_4x-access_warm_False-benchmark_90M]_90M.txt | 10.01s | 10.01s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_ARB-benchmark_90M]_90M.txt | 10.01s | 10.01s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_HST-benchmark_90M]_90M.txt | 9.91s | 9.91s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODECOPY-256B-benchmark_90M]_90M.txt | 9.91s | 9.91s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_4_23MB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 9.51s | 9.51s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_4_23MB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 9.11s | 9.11s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_6x-access_warm_False-benchmark_90M]_90M.txt | 9.01s | 9.01s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_BALANCE-256B-benchmark_90M]_90M.txt | 8.41s | 8.41s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_ARB-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 8.31s | 8.31s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODEHASH-256B-benchmark_90M]_90M.txt | 8.21s | 8.21s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_ARB-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 7.71s | 7.71s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_HST-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 7.31s | 7.31s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_nonzero-sloads_before_sstore_True-access_warm_True-benchmark_90M]_90M.txt | 7.11s | 7.11s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_HST-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 7.01s | 7.01s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_nonzero-sloads_before_sstore_False-access_warm_True-benchmark_90M]_90M.txt | 6.71s | 6.71s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_nonzero-sloads_before_sstore_True-access_warm_False-benchmark_90M]_90M.txt | 6.71s | 6.71s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_BALANCE-1KB-benchmark_90M]_90M.txt | 6.70s | 6.70s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-mass_set_from_zero-access_warm_True-benchmark_90M]_90M.txt | 6.61s | 6.61s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_4x_from_zero-access_warm_True-benchmark_90M]_90M.txt | 6.61s | 6.61s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-mass_set_from_zero-access_warm_False-benchmark_90M]_90M.txt | 6.50s | 6.50s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_nonzero-sloads_before_sstore_False-access_warm_False-benchmark_90M]_90M.txt | 6.50s | 6.50s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODECOPY-1KB-benchmark_90M]_90M.txt | 6.42s | 6.42s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODEHASH-1KB-benchmark_90M]_90M.txt | 6.40s | 6.40s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_4x_from_zero-access_warm_False-benchmark_90M]_90M.txt | 5.71s | 5.71s |

## Summary

**Total unique test cases:** 494

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed |
|------|-------|---------------|----------------|
| zisk-v0.16.1 | 494 | 311 | 183 |

---

## zisk-v0.16.1

No zkVM results found.

