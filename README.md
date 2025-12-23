# zkEVM Benchmark Runs

This repository contains benchmark results for zkEVM proving and execution across different hardware configurations.

You can see a website rendering of the results [here](https://eth-act.github.io/zkevm-benchmark-runs/).

## Hardware Configurations

| Hardware Setup | Proving Results | Execution Results |
|----------------|-----------------|-------------------|
| **1xL40s** | [3 gas limits, 1 mainnet range](data/proving/1xL40s/README.md) | [3 gas limits, 1 mainnet range](data/executions/1xL40s/README.md) |
| **8x5090** | [3 gas limits](data/proving/8x5090/README.md) | — |

## Folder Structure

The benchmark results are organized in the following hierarchy:

```
data/
├── proving/                        # Proving benchmark results
│   └── [Hardware Setup]/           # e.g., 1xL40s, 1x4090
│       └── [Configuration]/        # e.g., 10M-gas-limit, mainnet-A-B
│           └── [EL Client]/        # e.g., reth, ethrex
│               └── [zkVM]/         # e.g., sp1-v5.1.0, risc0-v1.2.0
│
└── executions/                     # Execution benchmark results
    └── [Hardware Setup]/           # e.g., 1xL40s, 1x4090
        └── [Configuration]/        # e.g., 10M-gas-limit, mainnet-A-B
            └── [EL Client]/        # e.g., reth, ethrex
                └── [zkVM]/         # e.g., sp1-v5.1.0, risc0-v1.2.0
```

## Configuration Types

- **XXM-gas-limit**: EEST (Ethereum Execution State Test) benchmarks with specific gas limits
- **mainnet-A-B**: Mainnet block range benchmarks (blocks A through B)

## Understanding the Results

### Result Types

- **Proving**: Measures the time and resources required to generate zero-knowledge proofs for blocks
- **Execution**: Measures the time and cycles required to execute blocks within the zkVM (without proof generation)

### Individual Configuration READMEs

Each configuration folder (gas limit or mainnet range) contains its own detailed README.md file with specific benchmark results, organized by EL client and zkVM.

### Benchmark Workload

EEST benchmark runs include a **Benchmark Workload** link that points to the specific version of the [zkevm-benchmark-workload](https://github.com/eth-act/zkevm-benchmark-workload) tool used to generate the test fixtures.

### Status Categories

- 💥 **Prover Crashes**: Fixtures that crashed the prover/executor entirely (from _crashes.txt)
- ❌ **SDK Reported Crashes**: Fixtures that failed during proving/execution (reported by SDK)
- ✅ **Successful Runs**: Fixtures that completed successfully (sorted slowest to fastest)

### Metrics

**Proving:**
- **Time**: How long it took to generate the proof
- **Throughput**: Gas processed per second (gas/s)
- **Proof Size**: Size of the generated proof

**Execution:**
- **Time**: How long it took to execute the block in the zkVM
- **Throughput**: Gas processed per second (gas/s)
- **Cycles**: Total number of zkVM cycles used

