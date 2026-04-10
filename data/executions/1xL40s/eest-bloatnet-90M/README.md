# 1xL40s - eest-bloatnet-90M

EEST benchmarks from fixture set **eest-bloatnet-90M** on **1xL40s** hardware.

# 90M-gas-limit

# 1xL40s - 90M-gas-limit

## Gas Limit Configuration - Execution

EEST benchmarks with 90M-gas-limit gas limit (fixtures: eest-bloatnet-90M) (execution results) on **1xL40s** hardware.

## Available EL Clients

- [ethrex-b9d3ef6](#ethrex-b9d3ef6)
- [reth-v1.11.0](#reth-v1.11.0)

---

## ethrex-b9d3ef6


## Execution Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: ❌ indicates an SDK-reported crash.

| Test Case | zisk-v0.16.1 | Avg |
|-----------|-----------|----------|
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-False-0-max_code_size-0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-True-0-max_code_size-0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_extcodesize_bytecode_sizes.py__test_extcodesize_bytecode_sizes[fork_Osaka-blockchain_test-10.0KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_extcodesize_bytecode_sizes.py__test_extcodesize_bytecode_sizes[fork_Osaka-blockchain_test-24.0KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_extcodesize_bytecode_sizes.py__test_extcodesize_bytecode_sizes[fork_Osaka-blockchain_test-5.0KB-benchmark_90M]_90M.txt | 50.40s | 50.40s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-10KB-benchmark_90M]_90M.txt | 43.56s | 43.56s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-10KB-benchmark_90M]_90M.txt | 42.97s | 42.97s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-10KB-benchmark_90M]_90M.txt | 42.74s | 42.74s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-10KB-benchmark_90M]_90M.txt | 42.56s | 42.56s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-10KB-benchmark_90M]_90M.txt | 42.39s | 42.39s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 42.21s | 42.21s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 41.59s | 41.59s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-10KB-benchmark_90M]_90M.txt | 41.37s | 41.37s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 41.33s | 41.33s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-10KB-benchmark_90M]_90M.txt | 40.98s | 40.98s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 40.85s | 40.85s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-10KB-benchmark_90M]_90M.txt | 40.57s | 40.56s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 40.10s | 40.10s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 39.72s | 39.72s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 39.71s | 39.71s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 39.52s | 39.52s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 39.21s | 39.20s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 39.08s | 39.08s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 39.01s | 39.01s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 38.96s | 38.96s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 38.73s | 38.73s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 38.73s | 38.73s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 38.70s | 38.70s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 38.59s | 38.59s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 38.24s | 38.24s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 38.19s | 38.19s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 38.01s | 38.01s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 37.88s | 37.88s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 37.79s | 37.79s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 37.71s | 37.71s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 37.44s | 37.44s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 37.35s | 37.35s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 37.04s | 37.04s |
| test_extcodesize_bytecode_sizes.py__test_extcodesize_bytecode_sizes[fork_Osaka-blockchain_test-2.0KB-benchmark_90M]_90M.txt | 37.02s | 37.02s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 36.96s | 36.96s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 36.74s | 36.74s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_True-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 36.70s | 36.70s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 36.67s | 36.67s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 36.52s | 36.52s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 36.50s | 36.50s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 36.42s | 36.42s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 36.25s | 36.25s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 35.95s | 35.95s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_USDC-benchmark_90M]_90M.txt | 35.94s | 35.94s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 35.84s | 35.84s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 35.80s | 35.80s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 35.72s | 35.72s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_USDC-benchmark_90M]_90M.txt | 35.48s | 35.48s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 35.31s | 35.31s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-24KB-benchmark_90M]_90M.txt | 35.23s | 35.23s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 35.20s | 35.20s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 35.16s | 35.16s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_True-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 34.88s | 34.88s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 34.70s | 34.70s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 34.65s | 34.65s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 34.57s | 34.57s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_True-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 34.54s | 34.53s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 34.43s | 34.43s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_USDC-benchmark_90M]_90M.txt | 34.38s | 34.38s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_XEN-benchmark_90M]_90M.txt | 34.38s | 34.38s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 34.30s | 34.30s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 34.28s | 34.28s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 34.24s | 34.24s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_True-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 34.18s | 34.18s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 33.98s | 33.98s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 33.86s | 33.86s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_True-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 33.65s | 33.65s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_0-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 33.52s | 33.52s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 33.49s | 33.49s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 33.23s | 33.23s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 33.22s | 33.22s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_True-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 33.20s | 33.20s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_XEN-benchmark_90M]_90M.txt | 33.13s | 33.12s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 33.10s | 33.10s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 32.91s | 32.91s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 32.85s | 32.85s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 32.78s | 32.77s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 32.76s | 32.76s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 32.67s | 32.67s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 32.66s | 32.66s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 32.57s | 32.57s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 32.57s | 32.57s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 32.54s | 32.54s |
| test_extcodesize_bytecode_sizes.py__test_extcodesize_bytecode_sizes[fork_Osaka-blockchain_test-1.0KB-benchmark_90M]_90M.txt | 32.53s | 32.53s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_0-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 32.53s | 32.53s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 32.25s | 32.25s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 32.21s | 32.21s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_USDC-benchmark_90M]_90M.txt | 32.20s | 32.20s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 32.19s | 32.19s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 32.16s | 32.16s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 32.15s | 32.15s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 32.14s | 32.14s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 32.11s | 32.11s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 32.11s | 32.11s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 32.05s | 32.05s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 31.97s | 31.97s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 31.95s | 31.95s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 31.89s | 31.89s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 31.81s | 31.81s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_USDC-benchmark_90M]_90M.txt | 31.80s | 31.80s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 31.79s | 31.79s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_False-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 31.78s | 31.77s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 31.75s | 31.75s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 31.73s | 31.73s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 31.68s | 31.68s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 31.64s | 31.64s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_USDC-benchmark_90M]_90M.txt | 31.63s | 31.63s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 31.48s | 31.48s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 31.48s | 31.48s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 31.47s | 31.47s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 31.46s | 31.46s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 31.46s | 31.46s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_USDC-benchmark_90M]_90M.txt | 31.45s | 31.45s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 31.44s | 31.43s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 31.43s | 31.43s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 31.38s | 31.38s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 31.31s | 31.31s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 31.28s | 31.28s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_False-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 31.28s | 31.27s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 31.26s | 31.26s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_XEN-benchmark_90M]_90M.txt | 31.26s | 31.25s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 31.25s | 31.25s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_XEN-benchmark_90M]_90M.txt | 31.19s | 31.19s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_USDC-benchmark_90M]_90M.txt | 31.15s | 31.15s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_XEN-benchmark_90M]_90M.txt | 31.15s | 31.14s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 31.03s | 31.02s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_False-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 31.00s | 31.00s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_XEN-benchmark_90M]_90M.txt | 30.97s | 30.97s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 30.93s | 30.93s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 30.91s | 30.91s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_STATICCALL-access_warm_False-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 30.89s | 30.89s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_XEN-benchmark_90M]_90M.txt | 30.84s | 30.84s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_False-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 30.83s | 30.83s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 30.82s | 30.82s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_0-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 30.78s | 30.78s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 30.69s | 30.68s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_0-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 30.65s | 30.65s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 30.52s | 30.52s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_XEN-benchmark_90M]_90M.txt | 30.47s | 30.47s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 30.23s | 30.23s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 30.15s | 30.15s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 30.14s | 30.14s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-5KB-benchmark_90M]_90M.txt | 30.10s | 30.10s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-5KB-benchmark_90M]_90M.txt | 29.97s | 29.97s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_DELEGATECALL-access_warm_False-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 29.89s | 29.89s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 29.88s | 29.88s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-5KB-benchmark_90M]_90M.txt | 29.85s | 29.84s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-5KB-benchmark_90M]_90M.txt | 29.84s | 29.84s |
| test_extcodesize_bytecode_sizes.py__test_extcodesize_bytecode_sizes[fork_Osaka-blockchain_test-0.5KB-benchmark_90M]_90M.txt | 29.80s | 29.80s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 29.66s | 29.66s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 29.51s | 29.51s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 29.50s | 29.50s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 29.40s | 29.40s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 29.08s | 29.08s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 29.04s | 29.04s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 29.00s | 29.00s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_BALANCE-access_warm_True-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 28.95s | 28.95s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 28.95s | 28.95s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 28.80s | 28.80s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-5KB-benchmark_90M]_90M.txt | 28.77s | 28.77s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 28.71s | 28.71s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 28.68s | 28.68s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 28.57s | 28.57s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 28.44s | 28.44s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 28.43s | 28.43s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 28.40s | 28.40s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 28.35s | 28.35s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 28.31s | 28.31s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_0-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 28.27s | 28.27s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 28.17s | 28.17s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 28.15s | 28.15s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-5KB-benchmark_90M]_90M.txt | 28.13s | 28.13s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 28.10s | 28.10s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 28.07s | 28.07s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-5KB-benchmark_90M]_90M.txt | 28.07s | 28.07s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 28.01s | 28.01s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 27.97s | 27.97s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 27.94s | 27.93s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 27.92s | 27.92s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_6-benchmark_90M]_90M.txt | 27.85s | 27.85s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_4-benchmark_90M]_90M.txt | 27.82s | 27.82s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 27.75s | 27.75s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_0-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 27.63s | 27.63s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-5KB-benchmark_90M]_90M.txt | 27.60s | 27.60s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_3-benchmark_90M]_90M.txt | 27.60s | 27.60s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 27.53s | 27.53s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 27.53s | 27.53s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_12-account_depth_3-benchmark_90M]_90M.txt | 27.52s | 27.52s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 27.49s | 27.49s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_5-benchmark_90M]_90M.txt | 27.44s | 27.44s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 27.37s | 27.37s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_7-benchmark_90M]_90M.txt | 27.32s | 27.32s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 27.27s | 27.27s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 27.26s | 27.26s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_12-account_depth_5-benchmark_90M]_90M.txt | 27.22s | 27.22s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 27.21s | 27.21s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 27.08s | 27.08s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 26.95s | 26.95s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_12-account_depth_4-benchmark_90M]_90M.txt | 26.95s | 26.95s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_BALANCE-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 26.89s | 26.89s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 26.84s | 26.84s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 26.78s | 26.78s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 26.66s | 26.66s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 26.60s | 26.60s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_0-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 26.59s | 26.59s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 26.05s | 26.05s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 26.00s | 26.00s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_4-benchmark_90M]_90M.txt | 25.75s | 25.75s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_7-benchmark_90M]_90M.txt | 25.58s | 25.58s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_5-benchmark_90M]_90M.txt | 25.55s | 25.55s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_USDC-benchmark_90M]_90M.txt | 25.42s | 25.42s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 25.28s | 25.28s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 25.27s | 25.27s |
| test_transient_storage.py__test_tstore_unique_keys[fork_Osaka-benchmark_test-with_tload_False-benchmark_90M]_90M.txt | 25.12s | 25.12s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_3-benchmark_90M]_90M.txt | 25.11s | 25.11s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 24.92s | 24.92s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 24.86s | 24.86s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_6-benchmark_90M]_90M.txt | 24.80s | 24.80s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 24.61s | 24.61s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_32-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 24.17s | 24.17s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 24.09s | 24.09s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 24.08s | 24.08s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 24.03s | 24.03s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 24.02s | 24.02s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 23.96s | 23.96s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 23.95s | 23.95s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_256-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 23.94s | 23.93s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 23.93s | 23.93s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 23.91s | 23.91s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_256-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 23.84s | 23.84s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 23.75s | 23.75s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_32-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 23.63s | 23.63s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_32-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 23.61s | 23.61s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 23.59s | 23.59s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-False-32-max_code_size-0-benchmark_90M]_90M.txt | 23.49s | 23.49s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 23.48s | 23.48s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 23.47s | 23.47s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_XEN-benchmark_90M]_90M.txt | 23.46s | 23.46s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-2KB-benchmark_90M]_90M.txt | 23.41s | 23.41s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_256-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 23.35s | 23.35s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 23.23s | 23.23s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 23.08s | 23.08s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-False-256-max_code_size-0-benchmark_90M]_90M.txt | 23.04s | 23.04s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 23.02s | 23.02s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-2KB-benchmark_90M]_90M.txt | 22.75s | 22.75s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-2KB-benchmark_90M]_90M.txt | 22.71s | 22.71s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 22.56s | 22.56s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_ARB-benchmark_90M]_90M.txt | 22.43s | 22.43s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 22.32s | 22.32s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-2KB-benchmark_90M]_90M.txt | 22.18s | 22.18s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 22.13s | 22.13s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_HST-benchmark_90M]_90M.txt | 21.82s | 21.82s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 21.59s | 21.59s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_ARB-benchmark_90M]_90M.txt | 21.55s | 21.55s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 21.43s | 21.43s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-2KB-benchmark_90M]_90M.txt | 21.14s | 21.14s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_HST-benchmark_90M]_90M.txt | 21.12s | 21.11s |
| test_transient_storage.py__test_tstore_unique_keys[fork_Osaka-benchmark_test-with_tload_True-benchmark_90M]_90M.txt | 20.92s | 20.92s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 20.85s | 20.85s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-1KB-benchmark_90M]_90M.txt | 20.83s | 20.83s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-2KB-benchmark_90M]_90M.txt | 20.76s | 20.76s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-1KB-benchmark_90M]_90M.txt | 20.43s | 20.43s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-2KB-benchmark_90M]_90M.txt | 20.40s | 20.40s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 20.40s | 20.40s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 20.22s | 20.22s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-1KB-benchmark_90M]_90M.txt | 20.14s | 20.14s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 20.08s | 20.08s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 19.98s | 19.98s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 19.97s | 19.97s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-2KB-benchmark_90M]_90M.txt | 19.90s | 19.90s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 19.60s | 19.60s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 19.57s | 19.57s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-1KB-benchmark_90M]_90M.txt | 19.55s | 19.55s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-0_5KB-benchmark_90M]_90M.txt | 19.52s | 19.52s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 19.27s | 19.27s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-1KB-benchmark_90M]_90M.txt | 19.06s | 19.06s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 19.00s | 19.00s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-0_5KB-benchmark_90M]_90M.txt | 18.90s | 18.90s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-10KB-benchmark_90M]_90M.txt | 18.85s | 18.85s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-0_5KB-benchmark_90M]_90M.txt | 18.78s | 18.78s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 18.53s | 18.53s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-0_5KB-benchmark_90M]_90M.txt | 18.50s | 18.50s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 18.49s | 18.49s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_USDC-benchmark_90M]_90M.txt | 18.10s | 18.10s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-1KB-benchmark_90M]_90M.txt | 18.06s | 18.06s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_1024-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 18.05s | 18.05s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_1024-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 17.97s | 17.97s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_1024-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 17.96s | 17.96s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-1KB-benchmark_90M]_90M.txt | 17.89s | 17.89s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-False-1024-max_code_size-0-benchmark_90M]_90M.txt | 17.85s | 17.85s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 17.78s | 17.78s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-1KB-benchmark_90M]_90M.txt | 17.70s | 17.70s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 17.59s | 17.59s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-0_5KB-benchmark_90M]_90M.txt | 16.89s | 16.89s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-0_5KB-benchmark_90M]_90M.txt | 16.58s | 16.57s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_XEN-benchmark_90M]_90M.txt | 16.56s | 16.56s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-0_5KB-benchmark_90M]_90M.txt | 16.55s | 16.55s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_ARB-benchmark_90M]_90M.txt | 16.55s | 16.55s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-0_5KB-benchmark_90M]_90M.txt | 16.45s | 16.45s |
| test_single_opcode.py__test_storage_sload_same_key_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_True-benchmark_90M]_90M.txt | 16.39s | 16.39s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 16.29s | 16.29s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_ARB-benchmark_90M]_90M.txt | 16.26s | 16.26s |
| test_single_opcode.py__test_storage_sload_same_key_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_False-benchmark_90M]_90M.txt | 16.22s | 16.22s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 16.08s | 16.08s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_ARB-benchmark_90M]_90M.txt | 15.79s | 15.79s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_HST-benchmark_90M]_90M.txt | 15.75s | 15.75s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_HST-benchmark_90M]_90M.txt | 15.71s | 15.71s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 15.70s | 15.70s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_HST-benchmark_90M]_90M.txt | 15.49s | 15.49s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_HST-benchmark_90M]_90M.txt | 15.41s | 15.41s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_ARB-benchmark_90M]_90M.txt | 15.40s | 15.40s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-10KB-benchmark_90M]_90M.txt | 15.38s | 15.38s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_ARB-benchmark_90M]_90M.txt | 15.32s | 15.32s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-5KB-benchmark_90M]_90M.txt | 15.22s | 15.22s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_HST-benchmark_90M]_90M.txt | 15.13s | 15.12s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-2KB-benchmark_90M]_90M.txt | 14.95s | 14.95s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-24KB-benchmark_90M]_90M.txt | 14.80s | 14.80s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-10KB-benchmark_90M]_90M.txt | 14.74s | 14.74s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-24KB-benchmark_90M]_90M.txt | 14.73s | 14.73s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-0_5KB-benchmark_90M]_90M.txt | 14.72s | 14.72s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-1KB-benchmark_90M]_90M.txt | 14.64s | 14.64s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-0_5KB-benchmark_90M]_90M.txt | 14.56s | 14.56s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-5KB-benchmark_90M]_90M.txt | 14.50s | 14.50s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-1KB-benchmark_90M]_90M.txt | 14.45s | 14.45s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 14.44s | 14.44s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-2KB-benchmark_90M]_90M.txt | 14.30s | 14.30s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_ARB-benchmark_90M]_90M.txt | 13.22s | 13.21s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_HST-benchmark_90M]_90M.txt | 13.14s | 13.13s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-5KB-benchmark_90M]_90M.txt | 12.94s | 12.94s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_same-sloads_before_sstore_False-access_warm_True-benchmark_90M]_90M.txt | 12.77s | 12.77s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_same-sloads_before_sstore_True-access_warm_True-benchmark_90M]_90M.txt | 12.69s | 12.69s |
| test_single_opcode.py__test_storage_sload_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_True-access_warm_True-benchmark_90M]_90M.txt | 12.09s | 12.09s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_zero-sloads_before_sstore_True-access_warm_True-benchmark_90M]_90M.txt | 11.13s | 11.13s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 10.97s | 10.97s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 10.90s | 10.90s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_0-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 10.60s | 10.60s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_256-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 10.60s | 10.60s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_32-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 10.58s | 10.58s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_same-sloads_before_sstore_True-access_warm_False-benchmark_90M]_90M.txt | 10.57s | 10.57s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 10.53s | 10.53s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_ARB-benchmark_90M]_90M.txt | 10.49s | 10.49s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_1024-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 10.38s | 10.38s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_zero-sloads_before_sstore_False-access_warm_True-benchmark_90M]_90M.txt | 10.37s | 10.37s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_1024-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 10.36s | 10.36s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_0-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 10.28s | 10.28s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_32-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 10.15s | 10.15s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-2KB-benchmark_90M]_90M.txt | 10.09s | 10.09s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 10.07s | 10.07s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_256-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 10.04s | 10.04s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_HST-benchmark_90M]_90M.txt | 10.04s | 10.04s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_USDC-benchmark_90M]_90M.txt | 9.88s | 9.88s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 9.83s | 9.83s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_same-sloads_before_sstore_False-access_warm_False-benchmark_90M]_90M.txt | 9.75s | 9.75s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 9.70s | 9.70s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 9.64s | 9.64s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 9.36s | 9.36s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_XEN-benchmark_90M]_90M.txt | 9.27s | 9.27s |
| test_single_opcode.py__test_storage_sload_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_False-access_warm_True-benchmark_90M]_90M.txt | 9.26s | 9.26s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 9.25s | 9.25s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 9.06s | 9.06s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 8.99s | 8.99s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-mass_clear-access_warm_True-benchmark_90M]_90M.txt | 8.94s | 8.94s |
| test_single_opcode.py__test_storage_sload_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_True-access_warm_False-benchmark_90M]_90M.txt | 8.90s | 8.90s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 8.88s | 8.88s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 8.88s | 8.88s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 8.85s | 8.85s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_USDC-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 8.72s | 8.72s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-1KB-benchmark_90M]_90M.txt | 8.68s | 8.68s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 8.51s | 8.51s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_30GB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 8.36s | 8.36s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_diff-sloads_before_sstore_False-access_warm_True-benchmark_90M]_90M.txt | 8.34s | 8.34s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 8.33s | 8.33s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_50GB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 8.32s | 8.32s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 8.24s | 8.24s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_zero-sloads_before_sstore_True-access_warm_False-benchmark_90M]_90M.txt | 8.22s | 8.22s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_diff-sloads_before_sstore_True-access_warm_True-benchmark_90M]_90M.txt | 8.20s | 8.20s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-0_5KB-benchmark_90M]_90M.txt | 8.09s | 8.09s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-triple_write_restore-access_warm_True-benchmark_90M]_90M.txt | 7.87s | 7.87s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-mass_clear-access_warm_False-benchmark_90M]_90M.txt | 7.82s | 7.82s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_9_39GB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 7.76s | 7.76s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_zero-sloads_before_sstore_False-access_warm_False-benchmark_90M]_90M.txt | 7.65s | 7.65s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 7.48s | 7.47s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_ARB-benchmark_90M]_90M.txt | 7.42s | 7.42s |
| test_single_opcode.py__test_storage_sload_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_False-access_warm_False-benchmark_90M]_90M.txt | 7.42s | 7.42s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 7.39s | 7.39s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_diff-sloads_before_sstore_True-access_warm_False-benchmark_90M]_90M.txt | 7.37s | 7.37s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 7.30s | 7.30s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_diff-sloads_before_sstore_False-access_warm_False-benchmark_90M]_90M.txt | 7.20s | 7.20s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_1GB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 7.15s | 7.15s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-triple_write_restore-access_warm_False-benchmark_90M]_90M.txt | 7.12s | 7.12s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 7.11s | 7.11s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 7.08s | 7.08s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_HST-benchmark_90M]_90M.txt | 6.93s | 6.93s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 6.79s | 6.79s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 6.74s | 6.74s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_XEN-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 6.57s | 6.57s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 6.39s | 6.39s |
| test_transient_storage.py__test_tstore_same_key[fork_Osaka-benchmark_test-with_tload_True-benchmark_90M]_90M.txt | 6.38s | 6.38s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 6.29s | 6.29s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_USDC-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 6.29s | 6.29s |
| test_transient_storage.py__test_tstore_same_key[fork_Osaka-benchmark_test-with_tload_False-benchmark_90M]_90M.txt | 6.08s | 6.08s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_4x-access_warm_True-benchmark_90M]_90M.txt | 6.02s | 6.02s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 5.87s | 5.87s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_50GB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 5.81s | 5.81s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 5.81s | 5.80s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_USDC-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 5.78s | 5.78s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_30GB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 5.77s | 5.77s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_30GB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 5.76s | 5.75s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_50GB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 5.69s | 5.69s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_4_23MB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 5.69s | 5.69s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_4x-access_warm_False-benchmark_90M]_90M.txt | 5.66s | 5.66s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 5.62s | 5.62s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_6x-access_warm_True-benchmark_90M]_90M.txt | 5.43s | 5.43s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_9_39GB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 5.35s | 5.35s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 5.34s | 5.34s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_9_39GB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 5.28s | 5.28s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_XEN-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 5.26s | 5.26s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_32-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 5.24s | 5.24s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 5.23s | 5.23s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 5.19s | 5.19s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_1GB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 5.15s | 5.15s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_XEN-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 5.13s | 5.13s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-True-32-max_code_size-0-benchmark_90M]_90M.txt | 5.01s | 5.01s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_32-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 4.98s | 4.98s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_6x-access_warm_False-benchmark_90M]_90M.txt | 4.97s | 4.97s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_32-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 4.93s | 4.93s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_1GB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 4.87s | 4.87s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_256-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 4.77s | 4.77s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-True-256-max_code_size-0-benchmark_90M]_90M.txt | 4.71s | 4.71s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_256-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 4.65s | 4.65s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 4.61s | 4.61s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_256-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 4.59s | 4.59s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-True-1024-max_code_size-0-benchmark_90M]_90M.txt | 4.59s | 4.59s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 4.58s | 4.58s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_1024-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 4.58s | 4.58s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_1024-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 4.48s | 4.48s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_1024-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 4.43s | 4.43s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_BALANCE-32B-benchmark_90M]_90M.txt | 4.40s | 4.40s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 4.39s | 4.39s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_1024-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 4.37s | 4.37s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 4.35s | 4.35s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_1024-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 4.32s | 4.32s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODEHASH-32B-benchmark_90M]_90M.txt | 4.27s | 4.27s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODECOPY-32B-benchmark_90M]_90M.txt | 4.27s | 4.27s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 4.25s | 4.25s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_ARB-benchmark_90M]_90M.txt | 4.21s | 4.21s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_ARB-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 4.19s | 4.18s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 4.18s | 4.18s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_0-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 4.11s | 4.11s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 4.11s | 4.11s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_HST-benchmark_90M]_90M.txt | 4.09s | 4.09s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_256-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 4.07s | 4.07s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_256-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 4.01s | 4.01s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_32-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 4.01s | 4.01s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_HST-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 4.00s | 4.00s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_0-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 3.95s | 3.95s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_32-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 3.85s | 3.85s |
| test_multi_opcode.py__test_bloatnet_call_value_new_account[fork_Osaka-benchmark_test-benchmark_90M]_90M.txt | 3.71s | 3.71s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_4_23MB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 3.49s | 3.49s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_4_23MB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 3.49s | 3.49s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 2.95s | 2.95s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 2.85s | 2.85s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 2.82s | 2.81s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_ARB-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 2.80s | 2.80s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_ARB-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 2.76s | 2.76s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_HST-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 2.63s | 2.63s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_HST-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 2.49s | 2.49s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_BALANCE-256B-benchmark_90M]_90M.txt | 2.31s | 2.31s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODECOPY-256B-benchmark_90M]_90M.txt | 2.31s | 2.31s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODEHASH-256B-benchmark_90M]_90M.txt | 2.29s | 2.29s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_nonzero-sloads_before_sstore_True-access_warm_True-benchmark_90M]_90M.txt | 1.80s | 1.80s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-mass_set_from_zero-access_warm_True-benchmark_90M]_90M.txt | 1.73s | 1.73s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_nonzero-sloads_before_sstore_False-access_warm_True-benchmark_90M]_90M.txt | 1.70s | 1.70s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_nonzero-sloads_before_sstore_True-access_warm_False-benchmark_90M]_90M.txt | 1.62s | 1.62s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_BALANCE-1KB-benchmark_90M]_90M.txt | 1.58s | 1.58s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_nonzero-sloads_before_sstore_False-access_warm_False-benchmark_90M]_90M.txt | 1.51s | 1.51s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-mass_set_from_zero-access_warm_False-benchmark_90M]_90M.txt | 1.51s | 1.51s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODECOPY-1KB-benchmark_90M]_90M.txt | 1.30s | 1.29s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODEHASH-1KB-benchmark_90M]_90M.txt | 1.25s | 1.25s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_4x_from_zero-access_warm_True-benchmark_90M]_90M.txt | 1.17s | 1.17s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_4x_from_zero-access_warm_False-benchmark_90M]_90M.txt | 1.02s | 1.02s |

## Summary

**Total unique test cases:** 494

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed |
|------|-------|---------------|----------------|
| zisk-v0.16.1 | 494 | 482 | 12 |

---

## reth-v1.11.0


## Execution Results Comparison

### Notes

- **Empty results (—)**: When a zkVM shows no result for a test case, it may indicate that the zkVM has not yet run the latest EEST benchmark suite. These gaps are temporary and will be filled as benchmarks are executed.
- **Crash indicators**: ❌ indicates an SDK-reported crash.

| Test Case | zisk-v0.16.1 | Avg |
|-----------|-----------|----------|
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-False-0-max_code_size-0-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
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
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-24KB-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | ❌ SDK Crash | — |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-10KB-benchmark_90M]_90M.txt | 46.03s | 46.03s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-10KB-benchmark_90M]_90M.txt | 44.76s | 44.76s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-10KB-benchmark_90M]_90M.txt | 44.74s | 44.74s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-10KB-benchmark_90M]_90M.txt | 44.16s | 44.16s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-10KB-benchmark_90M]_90M.txt | 43.82s | 43.82s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-10KB-benchmark_90M]_90M.txt | 43.41s | 43.41s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-10KB-benchmark_90M]_90M.txt | 42.35s | 42.34s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-10KB-benchmark_90M]_90M.txt | 42.30s | 42.30s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-24KB-benchmark_90M]_90M.txt | 38.15s | 38.15s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 37.68s | 37.68s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 37.56s | 37.56s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 37.49s | 37.49s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 36.54s | 36.54s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 36.53s | 36.53s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 36.09s | 36.09s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 36.05s | 36.05s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 35.87s | 35.87s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 35.75s | 35.75s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 35.51s | 35.51s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 35.40s | 35.40s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 35.19s | 35.19s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 34.97s | 34.97s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 34.96s | 34.96s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 34.75s | 34.74s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 34.42s | 34.42s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 34.39s | 34.38s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 34.35s | 34.35s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 34.34s | 34.34s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 33.87s | 33.87s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 33.76s | 33.76s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 33.42s | 33.42s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 33.42s | 33.42s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 33.18s | 33.18s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 32.75s | 32.75s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 32.35s | 32.34s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 32.26s | 32.26s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 32.16s | 32.16s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 31.66s | 31.66s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-5KB-benchmark_90M]_90M.txt | 31.51s | 31.51s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 31.31s | 31.31s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-5KB-benchmark_90M]_90M.txt | 31.30s | 31.30s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-5KB-benchmark_90M]_90M.txt | 31.27s | 31.27s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 31.27s | 31.27s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 30.99s | 30.99s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-5KB-benchmark_90M]_90M.txt | 30.84s | 30.84s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 30.66s | 30.66s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 30.32s | 30.32s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_XEN-benchmark_90M]_90M.txt | 29.98s | 29.98s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 29.95s | 29.95s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-5KB-benchmark_90M]_90M.txt | 29.95s | 29.95s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 29.84s | 29.84s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_XEN-benchmark_90M]_90M.txt | 29.83s | 29.83s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 29.80s | 29.80s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_XEN-benchmark_90M]_90M.txt | 29.79s | 29.79s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 29.78s | 29.78s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 29.72s | 29.72s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-5KB-benchmark_90M]_90M.txt | 29.71s | 29.71s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 29.60s | 29.60s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_XEN-benchmark_90M]_90M.txt | 29.43s | 29.43s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 29.42s | 29.41s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_XEN-benchmark_90M]_90M.txt | 29.26s | 29.26s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-5KB-benchmark_90M]_90M.txt | 29.25s | 29.25s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_XEN-benchmark_90M]_90M.txt | 29.25s | 29.25s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 29.24s | 29.24s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 29.10s | 29.10s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_XEN-benchmark_90M]_90M.txt | 29.06s | 29.06s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 29.05s | 29.05s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 29.01s | 29.01s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-5KB-benchmark_90M]_90M.txt | 28.87s | 28.87s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 28.84s | 28.84s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 28.67s | 28.67s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 28.42s | 28.41s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 28.39s | 28.39s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 28.33s | 28.33s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 28.31s | 28.30s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 28.26s | 28.26s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 28.25s | 28.25s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 28.20s | 28.20s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 28.16s | 28.16s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 28.12s | 28.12s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 28.05s | 28.05s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_XEN-benchmark_90M]_90M.txt | 27.94s | 27.94s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 27.92s | 27.92s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 27.78s | 27.78s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 27.71s | 27.71s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 27.56s | 27.56s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 27.48s | 27.48s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 27.46s | 27.46s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 27.41s | 27.41s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 27.24s | 27.24s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 27.10s | 27.10s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_USDC-benchmark_90M]_90M.txt | 27.08s | 27.08s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 26.94s | 26.94s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 26.93s | 26.93s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 26.81s | 26.81s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 26.75s | 26.75s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_USDC-benchmark_90M]_90M.txt | 26.69s | 26.69s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 26.66s | 26.66s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_STATICCALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 26.46s | 26.46s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 26.46s | 26.46s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 26.44s | 26.44s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 26.35s | 26.35s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_DELEGATECALL-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 26.20s | 26.20s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 26.11s | 26.11s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 26.04s | 26.04s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 25.98s | 25.98s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_32-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 25.77s | 25.77s |
| test_transient_storage.py__test_tstore_unique_keys[fork_Osaka-benchmark_test-with_tload_False-benchmark_90M]_90M.txt | 25.75s | 25.75s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 25.74s | 25.74s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 25.61s | 25.61s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 25.51s | 25.50s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 25.46s | 25.45s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 25.43s | 25.43s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 25.42s | 25.42s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 25.41s | 25.41s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 25.40s | 25.40s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 25.39s | 25.39s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 25.35s | 25.35s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 25.35s | 25.34s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 25.33s | 25.33s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 25.22s | 25.22s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_USDC-benchmark_90M]_90M.txt | 25.17s | 25.17s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODESIZE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 25.09s | 25.09s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-False-32-max_code_size-0-benchmark_90M]_90M.txt | 25.06s | 25.06s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 24.99s | 24.99s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_USDC-benchmark_90M]_90M.txt | 24.97s | 24.97s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_32-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 24.93s | 24.93s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_USDC-benchmark_90M]_90M.txt | 24.92s | 24.92s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODEHASH-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 24.85s | 24.85s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_BALANCE-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 24.82s | 24.82s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_USDC-benchmark_90M]_90M.txt | 24.70s | 24.70s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 24.65s | 24.65s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 24.52s | 24.52s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_USDC-benchmark_90M]_90M.txt | 24.52s | 24.52s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_32-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 24.44s | 24.44s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_USDC-benchmark_90M]_90M.txt | 24.27s | 24.27s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 24.11s | 24.11s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 24.10s | 24.10s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 23.80s | 23.80s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 23.77s | 23.77s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-2KB-benchmark_90M]_90M.txt | 23.21s | 23.21s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-2KB-benchmark_90M]_90M.txt | 23.08s | 23.08s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 22.87s | 22.87s |
| test_transient_storage.py__test_tstore_unique_keys[fork_Osaka-benchmark_test-with_tload_True-benchmark_90M]_90M.txt | 22.85s | 22.85s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-2KB-benchmark_90M]_90M.txt | 22.79s | 22.79s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-2KB-benchmark_90M]_90M.txt | 22.74s | 22.74s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 22.60s | 22.60s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_5-benchmark_90M]_90M.txt | 22.31s | 22.31s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_12-account_depth_5-benchmark_90M]_90M.txt | 21.93s | 21.93s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-2KB-benchmark_90M]_90M.txt | 21.90s | 21.90s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_XEN-benchmark_90M]_90M.txt | 21.88s | 21.88s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_12-account_depth_3-benchmark_90M]_90M.txt | 21.83s | 21.83s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_3-benchmark_90M]_90M.txt | 21.70s | 21.70s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_6-benchmark_90M]_90M.txt | 21.64s | 21.64s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-2KB-benchmark_90M]_90M.txt | 21.57s | 21.57s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_7-benchmark_90M]_90M.txt | 21.52s | 21.52s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 21.52s | 21.52s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_11-account_depth_4-benchmark_90M]_90M.txt | 21.46s | 21.46s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-2KB-benchmark_90M]_90M.txt | 21.38s | 21.38s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_3-benchmark_90M]_90M.txt | 21.18s | 21.18s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-2KB-benchmark_90M]_90M.txt | 21.01s | 21.01s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_12-account_depth_4-benchmark_90M]_90M.txt | 20.96s | 20.96s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-10KB-benchmark_90M]_90M.txt | 20.82s | 20.82s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-1KB-benchmark_90M]_90M.txt | 20.80s | 20.80s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_6-benchmark_90M]_90M.txt | 20.67s | 20.67s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_4-benchmark_90M]_90M.txt | 20.65s | 20.65s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_5-benchmark_90M]_90M.txt | 20.61s | 20.61s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 20.60s | 20.60s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-1KB-benchmark_90M]_90M.txt | 20.50s | 20.50s |
| test_deep_branch.py__test_worst_depth_stateroot_recomp[fork_Osaka-benchmark_test-storage_depth_10-account_depth_7-benchmark_90M]_90M.txt | 20.45s | 20.45s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-1KB-benchmark_90M]_90M.txt | 20.43s | 20.43s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_CALL-0_5KB-benchmark_90M]_90M.txt | 19.93s | 19.93s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-1KB-benchmark_90M]_90M.txt | 19.93s | 19.93s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_CALL-0_5KB-benchmark_90M]_90M.txt | 19.91s | 19.91s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 19.76s | 19.76s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_USDC-benchmark_90M]_90M.txt | 19.63s | 19.63s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-1KB-benchmark_90M]_90M.txt | 19.51s | 19.51s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_STATICCALL-0_5KB-benchmark_90M]_90M.txt | 19.44s | 19.43s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_STATICCALL-0_5KB-benchmark_90M]_90M.txt | 19.35s | 19.35s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 19.14s | 19.14s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-1KB-benchmark_90M]_90M.txt | 19.01s | 19.01s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 18.80s | 18.80s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 18.73s | 18.73s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 18.63s | 18.63s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-1KB-benchmark_90M]_90M.txt | 18.55s | 18.55s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-1KB-benchmark_90M]_90M.txt | 18.40s | 18.40s |
| test_single_opcode.py__test_storage_sload_same_key_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_True-benchmark_90M]_90M.txt | 18.09s | 18.09s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODECOPY-0_5KB-benchmark_90M]_90M.txt | 17.86s | 17.86s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODECOPY-0_5KB-benchmark_90M]_90M.txt | 17.83s | 17.83s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 17.81s | 17.80s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 17.65s | 17.64s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODESIZE-0_5KB-benchmark_90M]_90M.txt | 17.50s | 17.50s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODESIZE-0_5KB-benchmark_90M]_90M.txt | 17.40s | 17.39s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 17.33s | 17.33s |
| test_single_opcode.py__test_storage_sload_same_key_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_False-benchmark_90M]_90M.txt | 17.26s | 17.26s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 16.37s | 16.36s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-0_5KB-benchmark_90M]_90M.txt | 16.36s | 16.36s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_256-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 16.30s | 16.30s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 16.28s | 16.28s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-False-256-max_code_size-0-benchmark_90M]_90M.txt | 16.23s | 16.23s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_256-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 16.19s | 16.19s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_HST-benchmark_90M]_90M.txt | 16.07s | 16.07s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_256-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 15.83s | 15.83s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_ARB-benchmark_90M]_90M.txt | 15.78s | 15.78s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_XEN-benchmark_90M]_90M.txt | 15.64s | 15.64s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_HST-benchmark_90M]_90M.txt | 15.62s | 15.62s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-1KB-benchmark_90M]_90M.txt | 15.60s | 15.60s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-24KB-benchmark_90M]_90M.txt | 15.51s | 15.51s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-10KB-benchmark_90M]_90M.txt | 15.50s | 15.50s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-2KB-benchmark_90M]_90M.txt | 15.45s | 15.45s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-5KB-benchmark_90M]_90M.txt | 15.44s | 15.44s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-10KB-benchmark_90M]_90M.txt | 15.44s | 15.44s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-1KB-benchmark_90M]_90M.txt | 15.41s | 15.41s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-0_5KB-benchmark_90M]_90M.txt | 15.38s | 15.38s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 15.34s | 15.34s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_ARB-benchmark_90M]_90M.txt | 15.30s | 15.30s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-5KB-benchmark_90M]_90M.txt | 15.30s | 15.29s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-opcode_first-second_opcode_EXTCODEHASH-2KB-benchmark_90M]_90M.txt | 15.26s | 15.26s |
| test_multi_opcode.py__test_bloatnet_balance_opcode[fork_Osaka-benchmark_test-balance_first-second_opcode_EXTCODEHASH-24KB-benchmark_90M]_90M.txt | 15.11s | 15.11s |
| test_transient_storage.py__test_tstore_same_key[fork_Osaka-benchmark_test-with_tload_False-benchmark_90M]_90M.txt | 14.93s | 14.93s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 14.90s | 14.90s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 14.88s | 14.88s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 14.87s | 14.87s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 14.74s | 14.74s |
| test_transient_storage.py__test_tstore_same_key[fork_Osaka-benchmark_test-with_tload_True-benchmark_90M]_90M.txt | 14.72s | 14.72s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 14.32s | 14.32s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 14.29s | 14.29s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_USDC-benchmark_90M]_90M.txt | 14.15s | 14.15s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 14.14s | 14.14s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-5KB-benchmark_90M]_90M.txt | 14.10s | 14.10s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 13.99s | 13.99s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_True-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 13.79s | 13.79s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 13.67s | 13.67s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 13.67s | 13.67s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 13.35s | 13.35s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-value_sent_0-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 13.25s | 13.25s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 13.00s | 12.99s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_1024-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 12.49s | 12.49s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 12.18s | 12.18s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_HST-benchmark_90M]_90M.txt | 12.12s | 12.12s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-False-1024-max_code_size-0-benchmark_90M]_90M.txt | 12.05s | 12.05s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_1024-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 12.03s | 12.03s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_HST-benchmark_90M]_90M.txt | 11.99s | 11.99s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_False-mem_size_1024-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 11.96s | 11.96s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_HST-benchmark_90M]_90M.txt | 11.89s | 11.89s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_HST-benchmark_90M]_90M.txt | 11.82s | 11.82s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_ARB-benchmark_90M]_90M.txt | 11.75s | 11.75s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_ARB-benchmark_90M]_90M.txt | 11.71s | 11.71s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_HST-benchmark_90M]_90M.txt | 11.69s | 11.69s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_ARB-benchmark_90M]_90M.txt | 11.61s | 11.61s |
| test_single_opcode.py__test_sload_erc20_balanceof[fork_Osaka-benchmark_test-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_ARB-benchmark_90M]_90M.txt | 11.58s | 11.58s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-90-10-token_name_ARB-benchmark_90M]_90M.txt | 11.53s | 11.53s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 11.31s | 11.31s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_True-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 10.99s | 10.99s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-2KB-benchmark_90M]_90M.txt | 10.85s | 10.85s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 10.42s | 10.41s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_same-sloads_before_sstore_True-access_warm_True-benchmark_90M]_90M.txt | 10.07s | 10.07s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_32-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 10.00s | 10.00s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 9.98s | 9.98s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_256-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 9.97s | 9.97s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 9.80s | 9.80s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_1024-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 9.74s | 9.74s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_False-mem_size_0-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 9.74s | 9.74s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_ARB-benchmark_90M]_90M.txt | 9.72s | 9.72s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_0-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 9.66s | 9.66s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-1KB-benchmark_90M]_90M.txt | 9.62s | 9.62s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_1024-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 9.60s | 9.60s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_same-sloads_before_sstore_False-access_warm_True-benchmark_90M]_90M.txt | 9.57s | 9.57s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_256-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 9.49s | 9.48s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_False-mem_size_32-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 9.48s | 9.48s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-70-30-token_name_HST-benchmark_90M]_90M.txt | 9.48s | 9.48s |
| test_single_opcode.py__test_storage_sload_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_True-access_warm_True-benchmark_90M]_90M.txt | 9.38s | 9.38s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 9.35s | 9.35s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 9.14s | 9.14s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 9.02s | 9.02s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 8.80s | 8.80s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 8.80s | 8.79s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 8.70s | 8.70s |
| test_multi_opcode.py__test_bloatnet_call_value_existing[fork_Osaka-benchmark_test-0_5KB-benchmark_90M]_90M.txt | 8.65s | 8.65s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_XEN-benchmark_90M]_90M.txt | 8.49s | 8.49s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 8.27s | 8.27s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 8.20s | 8.20s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 8.16s | 8.16s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 8.13s | 8.13s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_USDC-benchmark_90M]_90M.txt | 8.09s | 8.09s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.EXISTING_EOA-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 8.05s | 8.05s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_same-sloads_before_sstore_True-access_warm_False-benchmark_90M]_90M.txt | 7.90s | 7.90s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 7.85s | 7.85s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_50GB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 7.75s | 7.75s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_ARB-benchmark_90M]_90M.txt | 7.71s | 7.71s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 7.67s | 7.67s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_30GB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 7.66s | 7.66s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 7.52s | 7.52s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-50-50-token_name_HST-benchmark_90M]_90M.txt | 7.41s | 7.41s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 7.34s | 7.34s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 7.30s | 7.30s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 7.27s | 7.27s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_9_39GB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 7.24s | 7.24s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_same-sloads_before_sstore_False-access_warm_False-benchmark_90M]_90M.txt | 7.09s | 7.09s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_zero-sloads_before_sstore_True-access_warm_True-benchmark_90M]_90M.txt | 7.08s | 7.08s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_50GB_ERC20-benchmark_90M]_90M.txt | 6.90s | 6.90s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_diff-sloads_before_sstore_True-access_warm_True-benchmark_90M]_90M.txt | 6.80s | 6.80s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_zero-sloads_before_sstore_False-access_warm_True-benchmark_90M]_90M.txt | 6.78s | 6.78s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_30GB_ERC20-benchmark_90M]_90M.txt | 6.77s | 6.77s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_1GB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 6.73s | 6.73s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 6.61s | 6.61s |
| test_single_opcode.py__test_storage_sload_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_False-access_warm_True-benchmark_90M]_90M.txt | 6.54s | 6.54s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_diff-sloads_before_sstore_False-access_warm_True-benchmark_90M]_90M.txt | 6.54s | 6.54s |
| test_single_opcode.py__test_storage_sload_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_True-access_warm_False-benchmark_90M]_90M.txt | 6.41s | 6.41s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_USDC-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 6.34s | 6.34s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_9_39GB_ERC20-benchmark_90M]_90M.txt | 6.32s | 6.32s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 6.24s | 6.24s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_XEN-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 6.04s | 6.04s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-mass_clear-access_warm_True-benchmark_90M]_90M.txt | 5.84s | 5.84s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_50GB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 5.72s | 5.72s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_diff-sloads_before_sstore_True-access_warm_False-benchmark_90M]_90M.txt | 5.71s | 5.71s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_50GB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 5.62s | 5.62s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-triple_write_restore-access_warm_True-benchmark_90M]_90M.txt | 5.54s | 5.54s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-nonzero_to_diff-sloads_before_sstore_False-access_warm_False-benchmark_90M]_90M.txt | 5.54s | 5.54s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 5.48s | 5.48s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_zero-sloads_before_sstore_True-access_warm_False-benchmark_90M]_90M.txt | 5.40s | 5.40s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_30GB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 5.37s | 5.37s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_30GB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 5.35s | 5.35s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_1GB_ERC20-benchmark_90M]_90M.txt | 5.33s | 5.33s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_HST-benchmark_90M]_90M.txt | 5.21s | 5.21s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-30-70-token_name_ARB-benchmark_90M]_90M.txt | 5.17s | 5.17s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_XEN-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 5.03s | 5.03s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_9_39GB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 4.98s | 4.98s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_9_39GB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 4.96s | 4.96s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-mass_clear-access_warm_False-benchmark_90M]_90M.txt | 4.92s | 4.92s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-True-32-max_code_size-0-benchmark_90M]_90M.txt | 4.89s | 4.88s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_USDC-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 4.74s | 4.74s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-triple_write_restore-access_warm_False-benchmark_90M]_90M.txt | 4.71s | 4.71s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 4.69s | 4.69s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_XEN-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 4.67s | 4.67s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_USDC-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 4.66s | 4.66s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_zero-sloads_before_sstore_False-access_warm_False-benchmark_90M]_90M.txt | 4.63s | 4.63s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 4.53s | 4.53s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_1GB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 4.40s | 4.40s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_1GB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 4.36s | 4.36s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_32-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 4.35s | 4.35s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 4.34s | 4.34s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALLCODE-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 4.34s | 4.34s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_32-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 4.31s | 4.31s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_32-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 4.31s | 4.31s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_4_23MB_ERC20-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 4.29s | 4.29s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_32-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 4.23s | 4.23s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_4x-access_warm_True-benchmark_90M]_90M.txt | 4.16s | 4.16s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_TX-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 4.12s | 4.12s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 4.05s | 4.05s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 4.00s | 4.00s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.EXISTING_CONTRACT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 3.93s | 3.93s |
| test_single_opcode.py__test_storage_sload_benchmark[fork_Osaka-benchmark_test-storage_keys_pre_set_False-access_warm_False-benchmark_90M]_90M.txt | 3.89s | 3.89s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_BALANCE-32B-benchmark_90M]_90M.txt | 3.75s | 3.75s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODEHASH-32B-benchmark_90M]_90M.txt | 3.69s | 3.69s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_6x-access_warm_True-benchmark_90M]_90M.txt | 3.69s | 3.69s |
| test_multi_opcode.py__test_bloatnet_call_value_new_account[fork_Osaka-benchmark_test-benchmark_90M]_90M.txt | 3.68s | 3.68s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODECOPY-32B-benchmark_90M]_90M.txt | 3.64s | 3.63s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_1024-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 3.59s | 3.59s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_6x-access_warm_False-benchmark_90M]_90M.txt | 3.56s | 3.56s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_4x-access_warm_False-benchmark_90M]_90M.txt | 3.55s | 3.55s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_1024-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 3.48s | 3.48s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 3.35s | 3.35s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-True-256-max_code_size-0-benchmark_90M]_90M.txt | 3.22s | 3.22s |
| test_single_opcode.py__test_sstore_erc20_mint[fork_Osaka-benchmark_test-no_change_False-cache_strategy_CacheStrategy.NO_CACHE-existing_slots_False-token_name_4_23MB_ERC20-benchmark_90M]_90M.txt | 3.20s | 3.20s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_256-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 3.18s | 3.18s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_ARB-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 3.16s | 3.16s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_256-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 3.16s | 3.16s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_256-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 3.16s | 3.16s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_256-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 3.11s | 3.11s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_1024-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 3.11s | 3.11s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_32-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 3.11s | 3.11s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALL-access_warm_True-mem_size_0-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 3.10s | 3.10s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_1024-code_size_1024-value_sent_0-benchmark_90M]_90M.txt | 3.10s | 3.10s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_1024-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 3.10s | 3.10s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_1024-code_size_0-value_sent_0-benchmark_90M]_90M.txt | 3.09s | 3.09s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_256-code_size_256-value_sent_0-benchmark_90M]_90M.txt | 3.08s | 3.08s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_EXTCODECOPY-access_warm_True-mem_size_256-code_size_32-value_sent_0-benchmark_90M]_90M.txt | 3.06s | 3.06s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-EXTCODECOPY-True-1024-max_code_size-0-benchmark_90M]_90M.txt | 3.04s | 3.04s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_32-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 3.04s | 3.04s |
| test_account_query.py__test_account_query[fork_Osaka-benchmark_test-opcode_CALLCODE-access_warm_True-mem_size_0-code_size_0-value_sent_1-benchmark_90M]_90M.txt | 3.04s | 3.04s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_HST-benchmark_90M]_90M.txt | 3.03s | 3.03s |
| test_multi_opcode.py__test_mixed_sload_sstore[fork_Osaka-benchmark_test-10-90-token_name_ARB-benchmark_90M]_90M.txt | 3.00s | 3.00s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_HST-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 2.92s | 2.92s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 2.80s | 2.80s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 2.77s | 2.77s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_4_23MB_ERC20-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 2.77s | 2.77s |
| test_single_opcode.py__test_account_access[fork_Osaka-benchmark_test-opcode_CALL-value_sent_1-account_mode_AccountMode.NON_EXISTING_ACCOUNT-cache_strategy_CacheStrategy.CACHE_TX-benchmark_90M]_90M.txt | 2.75s | 2.75s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_4_23MB_ERC20-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 2.72s | 2.71s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODECOPY-256B-benchmark_90M]_90M.txt | 1.98s | 1.98s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODEHASH-256B-benchmark_90M]_90M.txt | 1.97s | 1.97s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_ARB-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 1.94s | 1.94s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_BALANCE-256B-benchmark_90M]_90M.txt | 1.94s | 1.94s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_ARB-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 1.93s | 1.93s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_HST-cache_strategy_CacheStrategy.NO_CACHE-benchmark_90M]_90M.txt | 1.89s | 1.89s |
| test_single_opcode.py__test_sstore_erc20_approve[fork_Osaka-benchmark_test-token_name_HST-cache_strategy_CacheStrategy.CACHE_PREVIOUS_BLOCK-benchmark_90M]_90M.txt | 1.85s | 1.85s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_nonzero-sloads_before_sstore_True-access_warm_True-benchmark_90M]_90M.txt | 1.42s | 1.42s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_nonzero-sloads_before_sstore_False-access_warm_True-benchmark_90M]_90M.txt | 1.34s | 1.33s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-mass_set_from_zero-access_warm_True-benchmark_90M]_90M.txt | 1.31s | 1.31s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_nonzero-sloads_before_sstore_True-access_warm_False-benchmark_90M]_90M.txt | 1.19s | 1.19s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-mass_set_from_zero-access_warm_False-benchmark_90M]_90M.txt | 1.11s | 1.11s |
| test_single_opcode.py__test_sstore_variants[fork_Osaka-benchmark_test-zero_to_nonzero-sloads_before_sstore_False-access_warm_False-benchmark_90M]_90M.txt | 1.11s | 1.10s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODEHASH-1KB-benchmark_90M]_90M.txt | 0.95s | 0.95s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_EXTCODECOPY-1KB-benchmark_90M]_90M.txt | 0.93s | 0.93s |
| test_create2_access.py__test_create2_immediate_access[fork_Osaka-benchmark_test-access_opcode_BALANCE-1KB-benchmark_90M]_90M.txt | 0.93s | 0.93s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_4x_from_zero-access_warm_True-benchmark_90M]_90M.txt | 0.81s | 0.81s |
| test_single_opcode.py__test_sstore_dirty_transitions[fork_Osaka-benchmark_test-oscillation_4x_from_zero-access_warm_False-benchmark_90M]_90M.txt | 0.68s | 0.68s |

## Summary

**Total unique test cases:** 494

### Results by zkVM

| zkVM | Total | ✅ Successful | ❌ SDK Crashed |
|------|-------|---------------|----------------|
| zisk-v0.16.1 | 494 | 407 | 87 |

---

