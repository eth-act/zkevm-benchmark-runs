---
description: Ingest a zkEVM benchmark run folder into data/proving structure
allowed-tools: Bash(python3:*)
---

Ingest the zkEVM benchmark run folder specified by the user: $ARGUMENTS

## Steps

1. Run the ingestion script:
   ```
   python3 scripts/ingest_run.py $ARGUMENTS
   ```

2. If the script succeeds, show the user the summary and suggest:
   - Review the changes with `git status`
   - Delete the source folder and its `.tar.gz` if satisfied
