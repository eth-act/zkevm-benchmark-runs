# zkEVM Benchmark Runs

This repository contains benchmark results for zkEVM proving across different hardware configurations.

## Hardware Configurations

| Hardware Setup | Configurations | Details |
|----------------|----------------|----------|
| **1x4090** | 1 gas limit | [View Results](proving/1x4090/README.md) |
| **1xL40s** | 1 gas limit, 1 mainnet range | [View Results](proving/1xL40s/README.md) |

## Folder Structure

The benchmark results are organized in the following hierarchy:

```
proving/
├── [Hardware Setup]/              # e.g., 1xL40s, 1x4090
│   ├── [Configuration]/           # Gas limit or mainnet range
│   │   │
│   │   ├── Gas Limits (EEST):
│   │   │   ├── [EL Client]/       # e.g., reth, ethrex
│   │   │   │   ├── [Benchmark]/   # e.g., eest-benchmark-v0.0.3
│   │   │   │   │   └── [zkVM]/    # e.g., sp1-v5.1.0, risc0-v1.2.0
│   │   │
│   │   └── Mainnet Ranges:
│   │       ├── [EL Client]/       # e.g., reth, ethrex
│   │       │   └── [zkVM]/        # e.g., sp1-v5.1.0, risc0-v1.2.0
```

## Configuration Types

- **XXM-gas-limit**: EEST (Ethereum Execution State Test) benchmarks with specific gas limits
- **mainnet-A-B**: Mainnet block range benchmarks (blocks A through B)

## Understanding the Results

### Individual Configuration READMEs

Each configuration folder (gas limit or mainnet range) contains its own detailed README.md file with specific benchmark results, organized by EL client and zkVM.

### Benchmark Workload

EEST benchmark runs include a **Benchmark Workload** link that points to the specific version of the [zkevm-benchmark-workload](https://github.com/eth-act/zkevm-benchmark-workload) tool used to generate the test fixtures.

### Status Categories

- 💥 **Prover Crashes**: Fixtures that crashed the prover entirely (from _crashes.txt)
- ❌ **SDK Reported Crashes**: Fixtures that failed during proving (reported by SDK)
- ✅ **Successful Runs**: Fixtures that completed proving successfully (sorted slowest to fastest)

### Metrics

- **Time**: How long it took to generate the proof
- **Throughput**: Gas processed per second (gas/s)

