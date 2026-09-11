# RepoRise Quickstart Guide

RepoRise measures how discoverable and citable your repository is across search engines (SEO), direct answer engines (AEO), and generative AI engines (GEO).

## 1. Zero-Install Audit (Instant)

Run an offline audit on your current repository using `npx`:

```bash
npx reporise .
```

This immediately evaluates your repository against 22 deterministic heuristics and writes:
- `.reporise/audit.json`: Complete structured signals, surface scores, and categorized results.
- `.reporise/audit.md`: A readable markdown report with ranked fixes.

## 2. Common CLI Flags

```bash
# Print raw JSON directly to stdout (useful for piping into jq)
npx reporise . --json

# Run audit without writing .reporise/ artifacts to disk
npx reporise . --no-write

# Fail in CI if the overall score is below a threshold
npx reporise . --fail-under 80

# Specify a custom output directory for artifacts
npx reporise . --out ./reports
```

## 3. Understanding the Surface Scores

- **SEO (Search Engine Optimization)**: Evaluates whether crawlers can index your terms, package keywords, and repository metadata.
- **AEO (Answer Engine Optimization)**: Checks if answer engines (Perplexity, Google AI Overviews) can lift self-contained definitions and copy-pasteable code examples.
- **GEO (Generative Engine Optimization)**: Measures whether generative LLMs (ChatGPT, Claude, Gemini) receive stable, attributable facts (comparison tables, version support matrices, changelogs).

## 4. Dual Execution Models: Standalone CLI vs. Agent Harnesses

RepoRise is intentionally built with a **dual distribution model**:

1. **As an npm Package (`reporise`):**
   - **Zero-Install CLI:** Run `npx reporise .` in any terminal without manual cloning or installing agent software.
   - **Deterministic CI/CD Quality Gate:** Run audits in GitHub Actions (`--fail-under 80`) to block documentation rot without needing an LLM or API keys.
   - **Offline & Private:** All audits execute locally on the git working tree with zero telemetry or network calls.

2. **As an AI Agent Plugin / Skill Suite:**
   - **Multi-Harness Support:** Natively integrates with Claude Code (`.claude-plugin/`), Gemini CLI (`gemini-extension.json`), OpenAI Codex (`~/.codex/skills/`), and Claude Desktop.
   - **Autonomous Remediation & Probing:** In an agent session, the assistant triggers `visibility-audit` to draft README fixes or conducts `citation-probe` cycles to test category discoverability.

## 5. Next Steps

- Check out [docs/ci-cd.md](./ci-cd.md) to integrate RepoRise into your GitHub Actions workflow.
- Read [docs/citation-probing.md](./citation-probing.md) to measure empirical LLM recommendations.

