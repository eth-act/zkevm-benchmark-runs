# Block encoding length RLP vs SSZ

Summary (baseline=RLP, optimized=SSZ):
```
BLOCK ENCODING LENGTH CALCULATION:
  Average speedup: 12.41x (+1141.0%)
  Min speedup: 11.78x
  Max speedup: 12.87x
  Top 3 best speedups:
    1. sp1-v5.1.0/rpc_block_22974583: 12.87x
    2. sp1-v5.1.0/rpc_block_22974580: 12.80x
    3. sp1-v5.1.0/rpc_block_22974582: 12.76x
  Top 3 worst speedups:
    1. sp1-v5.1.0/rpc_block_22974576: 12.06x
    2. sp1-v5.1.0/rpc_block_22974653: 12.04x
    3. sp1-v5.1.0/rpc_block_22974673: 11.78x
```