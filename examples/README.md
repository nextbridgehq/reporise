# RepoRise Turnkey Examples

This directory contains ready-to-use reference configurations and scripts for integrating RepoRise into CI pipelines, developer tooling, and automated workflows.

## Contents

| File | Description |
| --- | --- |
| [`ci-github-action.yml`](./ci-github-action.yml) | Turnkey GitHub Actions workflow for automated PR quality gating (`--fail-under 80`). |
| [`programmatic-audit.mjs`](./programmatic-audit.mjs) | Standalone Node.js script showing how to consume the `audit()` API programmatically. |
| [`reporise.config.json`](./reporise.config.json) | Sample configuration file for customizing query probing and adapter options. |

---

## 1. Automated CI Quality Gate (`ci-github-action.yml`)

Copy this file to `.github/workflows/visibility-audit.yml` in your repository.

On every push and pull request to `main`, GitHub Actions will run an offline audit. If your project's score falls below 80%, the job exits with code `1` and blocks merging.

```yaml
name: RepoRise Visibility Audit

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run RepoRise Offline Visibility Audit
        run: npx reporise . --fail-under 80
```

---

## 2. Programmatic Node.js Audit (`programmatic-audit.mjs`)

You can import and execute the audit directly in custom JavaScript / TypeScript automation:

```javascript
import { audit } from 'reporise';

const result = audit('./path-to-repo');
console.log(`Score: ${result.overall}%`);
console.log(`SEO: ${result.surfaces.seo}%, AEO: ${result.surfaces.aeo}%, GEO: ${result.surfaces.geo}%`);
```

Run the example locally:
```bash
node examples/programmatic-audit.mjs
```

---

## 3. Configuration File (`reporise.config.json`)

Place `reporise.config.json` at your repository root to configure citation probing parameters:

```json
{
  "$schema": "./schemas/profile.schema.json",
  "fetch": "websearch",
  "engines": ["claude"],
  "samplesPerQuery": 3,
  "handoffPath": ".reporise/handoff.json"
}
```
