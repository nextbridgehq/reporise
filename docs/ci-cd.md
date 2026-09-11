# Integrating RepoRise in CI/CD

Prevent repository documentation and discoverability rot by running RepoRise as an automated gate in your CI pipeline.

## GitHub Actions

Create `.github/workflows/visibility-audit.yml`:

```yaml
name: Repository Visibility Audit

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run RepoRise Audit Gate
        run: npx reporise . --fail-under 80
```

## How `--fail-under` Works

When `--fail-under <n>` is passed:
- If the repository overall score is $\ge n$, RepoRise outputs exit code `0`.
- If the repository overall score is $< n$, RepoRise prints the shortfall to `stderr` and exits with code `1`, failing the CI check.

## Excluding Artifacts from Version Control

Ensure `.reporise/` is added to your `.gitignore`:

```gitignore
.reporise/
```
