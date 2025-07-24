# zkevm-benchmark-runs

This repository contains benchmark output for `zkevm-benchmark-workload` tools.

## Notes
- Every execution or proving is done with `RUSTFLAGS="-C target-cpu=native"` plus `RUSTFLAGS="-C target-cpu=native -C target-feature=+avx512f"` if AVX512 is supported.