# zkEVM Benchmark Runs

This repository contains benchmark results for zkEVM proving across different hardware configurations.

## Hardware Configurations

| Hardware Setup | Available Benchmarks | Details |
|----------------|---------------------|----------|
| **1x4090** | `eest-benchmark-v0.0.9` | [View Results](proving/1x4090/README.md) |
| **1xL40s** | `eest-benchmark-v0.0.9`, `mainnet-22974575-22974674` | [View Results](proving/1xL40s/README.md) |

## Benchmark Types

- **eest-benchmark-vX.X.X**: EEST (Ethereum Execution State Test) benchmarks
- **mainnet-A-B**: Mainnet block range benchmarks (blocks A through B)

## Understanding the Results

### Status Categories

- 💥 **Prover Crashes**: Fixtures that crashed the prover entirely (from _crashes.txt)
- ❌ **SDK Reported Crashes**: Fixtures that failed during proving (reported by SDK)
- ✅ **Successful Runs**: Fixtures that completed proving successfully (sorted slowest to fastest)

### Metrics

- **Time**: How long it took to generate the proof
- **Throughput**: Gas processed per second (gas/s)
- **Gas Used**: Total gas consumed by the fixture

