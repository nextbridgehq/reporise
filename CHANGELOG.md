# Changelog

All notable changes to RepoRise will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-09-14

### Added
- **Offline Visibility Audit (`skills/visibility-audit`)**:
  - Deterministic 22-check evaluation suite across SEO, AEO, and GEO retrieval surfaces.
  - Multi-document evidence graph resolver (`resolver.mjs`) for cross-document repository discovery.
  - Attribution engine (`attribution.mjs`) tracking surface scores back to specific repository files.
  - Impact-ranked fix plan prioritised by `category weight × severity × surfaces moved`.
  - CLI runner supporting `--json`, `--no-write`, `--out <dir>`, and `--fail-under <n>` for CI gating.
- **Citation Probe (`skills/citation-probe`)**:
  - 4-step sampling workflow (`init`, `plan`, `record`, `diff`) for empirical LLM citation tracking.
  - 95% Wilson score confidence intervals for statistically sound mention rates.
  - Share-of-voice (SOV) ranking identifying authoritative third-party placement targets.
  - Strict noise guardrail reporting overlapping intervals as `noise` rather than false progress.
  - Zero-telemetry design with `--show-telemetry` inspection mode.
- **Benchmark Registry & Provenance**:
  - Cryptographic SHA-256 provenance tracking across 21 core engine files in `benchmarks/PROVENANCE.json`.
  - Single-document baseline evaluations ($N=120$ corpus inventory, $N=15$ human gold standard).
  - Multi-document challenge datasets ($N=30$ resolution, $N=40$ scoring, $N=32$ certification) with sub-0.7000 Mean Absolute Error verification.
  - 5-phase automated certification harness via `npm run benchmark:certify`.
- **Harness Portability**:
  - Self-contained skill structure compatible with Claude Code, Claude Desktop, Gemini CLI, Codex CLI, and standalone Node.js CLI.
