# RepoRise: Overview, Capabilities, and Testing Guide

RepoRise is an offline-first, zero-dependency Node.js tool (Node ≥ 18) and agent skill suite designed to measure and improve repository findability across search engines (SEO), answer engines (AEO), and generative engines (GEO).

---

## 1. What is RepoRise?

RepoRise diagnoses why a repository might be well-built yet remains unretrieved by developers and automated retrieval engines. It measures how discoverable and citable a project is across three retrieval surfaces:

1. **SEO (Search Engine Optimization):** How traditional search engine crawlers index repository files, README headers, and metadata.
2. **AEO (Answer Engine Optimization):** How direct-answer engines extract self-contained definitions, quickstart instructions, and copy-pasteable code fences.
3. **GEO (Generative Engine Optimization):** Whether LLM-based generative engines (such as ChatGPT, Claude, Perplexity, and Gemini) recommend or cite the repository when answering category-level tool queries.

### Core Philosophy
- **Offline & Self-Contained:** Operates purely on the local working tree without external network calls, MCP servers, or API keys.
- **Evidence-Based Honesty:** If an evaluation requires external data (such as GitHub stars, web backlinks, or repository topics), it returns `skip` instead of guessing. Skipped checks are explicitly reported and excluded from scoring rather than penalized as failures.
- **Statistical Discipline:** Refuses to quote single-digit sample rates without confidence intervals. If before/after confidence intervals overlap, changes are classified as `noise` rather than exaggerated as improvements.
- **Privacy & Telemetry-Free:** No telemetry code is executed; all data remains local.

---

## 2. What Does RepoRise Do?

RepoRise ships two portable skills that can run as standalone CLI tools, CI verification gates, or agent skills in Claude Code, Gemini CLI, Codex, and other AI coding harnesses.

### Capability 1: Visibility Audit (`visibility-audit`)
> **Question Answered:** *Is this repository shaped to be retrieved?*

- **Multi-Document Evidence Graph:** Traverses root documentation, linked architecture/docs pages, and manifest files (`package.json`, etc.) to resolve cross-document references without falling into cycles or traversing external links.
- **Scoring Dimensions (22 checks across 5 weighted categories):**
  - **Identity (Weight 25):** Evaluates if a human or LLM chunk can identify what the tool is and who it is for (e.g., standard format `<Name> is a <category> that <does X> for <audience>`).
  - **Citability (Weight 25):** Checks for quotable, stable facts, benchmarks, version support matrices, and an **Alternatives/Comparison** section (essential for category queries).
  - **Discoverability (Weight 20):** Evaluates package metadata, indexable keywords, and search discovery signals.
  - **Answerability (Weight 20):** Looks for self-contained answers, copy-pasteable code examples, and clear installation blocks.
  - **Hygiene (Weight 10):** Detects broken relative links, syntax errors, and untagged markdown code fences.
- **Ranked Fix Plan:** Emits `.reporise/audit.json` and `.reporise/audit.md`, prioritizing actionable fixes by `category weight × severity × surfaces moved`.

### Capability 2: Citation Probe (`citation-probe`)
> **Question Answered:** *Do generative engines actually cite or recommend this project?*

- **4-Step Measurement Cycle:**
  1. `init`: Scaffolds `.reporise/queries.json` with user-defined category query templates and a competitor watchlist.
  2. `plan`: Expands queries into test execution runs across target engines (`.reporise/handoff.json`).
  3. **Sampling:** Samples LLM responses using isolated, prompt-exact queries (preventing conversation memory contamination).
  4. `record` & `diff`: Records mentions, computes a **95% Wilson score interval**, and evaluates historical deltas.
- **Share of Voice (SOV):** When a new project receives 0 mentions, the probe measures which competitor tools and source pages the engines *do* cite, identifying high-priority third-party placement targets.
- **Noise Detection:** The `diff` command refuses to report slight variations as positive movement unless confidence intervals are statistically distinct.

---

## 3. How to Test RepoRise

RepoRise provides both automated test suites and a multi-phase cryptographic certification pipeline.

### Automated Unit Test Suite (`npm test`)
RepoRise includes 64 automated tests across 5 test suites with zero external dependencies:

```bash
npm test
```

The test runner executes:
1. `skills/visibility-audit/scripts/test.mjs` (18 tests): Single-document audit logic, scoring algorithms, checks, and adapters.
2. `skills/citation-probe/scripts/test-probe.mjs` (31 tests): Mention detection, name risk checks, Wilson intervals, pipeline state machine, and telemetry safety.
3. `skills/visibility-audit/scripts/test-resolver.mjs` (5 tests): Multi-document evidence graph, target discovery, boundary filtering, and fail-closed isolation.
4. `skills/visibility-audit/scripts/test-semantics.mjs` (4 tests): Provenance classification (P0–P3), semantic deduplication, and substitution guardrails.
5. `skills/visibility-audit/scripts/test-attribution.mjs` (6 tests): Residual attribution, selection mismatches, and surface composite scoring.

### Cryptographic Benchmark Certification (`npm run benchmark:certify`)
Runs the 5-phase certification harness validating engine integrity against benchmark datasets:

```bash
npm run benchmark:certify
```

**Verification Gates:**
1. **Cryptographic Provenance:** Verifies SHA-256 digests across 21 core engine files registered in `benchmarks/PROVENANCE.json`.
2. **Unit Test Verification:** Confirms all 64/64 test cases pass across 5 test suites.
3. **Single-Document Baseline Invariant Gate:** Verifies consistency against human gold standard and baseline evaluation corpora ($N=120$ / $N=15$).
4. **Multi-Doc Generalization Gate:** Validates against the $N=32$ multi-document challenge dataset.
5. **Safety Guardrails (A–E):** Audits safety guardrails and writes output to `benchmarks/CERTIFICATE.json`.

---

## 4. Quick Command Reference

```bash
# Run a full offline audit on the current repository
node skills/visibility-audit/scripts/audit.mjs .

# Audit with raw JSON output
node skills/visibility-audit/scripts/audit.mjs . --json

# Run audit in CI mode (fail if score falls below 70)
node skills/visibility-audit/scripts/audit.mjs . --fail-under 70

# Check citation probe pipeline status
node skills/citation-probe/scripts/probe.mjs status .

# Run the automated test suite
npm test

# Run benchmark certification
npm run benchmark:certify
```
