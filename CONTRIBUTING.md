# Contributing to RepoRise

Thank you for your interest in contributing to RepoRise! RepoRise measures how findable and citable repositories are across search engines (SEO), direct answer engines (AEO), and generative engines (GEO).

RepoRise is maintained by [Nextbridge](https://nextbridge.com) as an open-source project.

---

## Guiding Principles

1. **Zero Runtime Dependencies**: The core package has no external npm dependencies. Everything is implemented using Node.js built-ins. Do not add runtime dependencies.
2. **Offline by Default**: The visibility audit runs completely offline against the local working tree. Never add network calls to the core audit pipeline.
3. **Statistical Honesty**: Never report citation probe rates without confidence intervals. When confidence intervals overlap, report `noise`, not "improvement".
4. **Reproducibility & Provenance**: Engine components, benchmark manifests, and test suites are tracked by cryptographic SHA-256 digests in `benchmarks/PROVENANCE.json`.

---

## Getting Started

### Prerequisites

- **Node.js**: Version 18.0.0 or higher.
- **Git**: For version control and commit metadata.

Because RepoRise has zero dependencies, you do not need to run `npm install`:

```bash
git clone https://github.com/nextbridgehq/reporise.git
cd reporise
npm test
```

---

## Repository Structure

```text
reporise/
├── skills/
│   ├── visibility-audit/       # Offline 22-heuristic visibility audit skill & CLI
│   └── citation-probe/         # Empirical LLM citation probing skill & CLI
├── benchmarks/                 # Canonical benchmark tracks and cryptographic registry
│   ├── single-document/        # Baseline corpus (N=120) and human gold standards
│   ├── multi-document/         # Resolution feasibility and scoring challenge sets
│   ├── certification/          # Challenge corpus (N=32) for invariant gating
│   ├── PROVENANCE.json         # SHA-256 digests of all 21 core engine files
│   └── CERTIFICATE.json        # Cryptographic verification certificate
├── eval/                       # Evaluation machinery, scoring, and research runners
├── docs/                       # User guides, CI/CD patterns, and evaluation reports
│   └── evaluation/             # Human-readable evaluation and generalization reports
├── tests/                      # Integration and contract test suites
├── examples/                   # Turnkey workflows, scripts, and sample configurations
└── schemas/                    # JSON Schemas for audit output, profiles, and queries
```

---

## Architectural Invariants

### 1. Skill Folder Independence
Both `skills/visibility-audit/` and `skills/citation-probe/` must remain independently runnable when copied into external harnesses (such as Codex CLI or Claude Desktop).

- `scripts/lib/collect.mjs` and `scripts/lib/adapters.mjs` are deliberately duplicated in both skill folders.
- **Rule**: If you modify one copy, you must update the other copy identically, and verify with `npm test`.

### 2. Synchronized Version Declarations
The package version lives in three places that must always agree:
1. `package.json` (`"version"`)
2. `.claude-plugin/plugin.json` (`"version"`)
3. The `VERSION` constant in `skills/visibility-audit/scripts/audit.mjs` and `skills/citation-probe/scripts/probe.mjs`

### 3. Cryptographic Provenance Integrity
RepoRise enforces tamper-detection across 21 core engine, test, and benchmark files via `benchmarks/PROVENANCE.json`.
- Run `npm run benchmark:certify` before opening a pull request.
- All 5 certification gates must pass.

---

## Running Tests & Verification

Run the full test suite (64 tests across 5 suites):
```bash
npm test
```

Run individual test suites:
```bash
node skills/visibility-audit/scripts/test.mjs             # Single-document audit (18 tests)
node skills/citation-probe/scripts/test-probe.mjs         # Citation probe & stats (31 tests)
node skills/visibility-audit/scripts/test-resolver.mjs    # Multi-doc resolver (5 tests)
node skills/visibility-audit/scripts/test-semantics.mjs   # Evidence semantics (4 tests)
node skills/visibility-audit/scripts/test-attribution.mjs # Attribution diagnostics (6 tests)
```

Run the 5-phase certification harness:
```bash
npm run benchmark:certify
```

Run contract boundary and security audits:
```bash
node tests/contract-boundary.test.mjs
node tests/security-process-audit.test.mjs
```

Verify npm packaging:
```bash
npm pack --dry-run
npm publish --dry-run
```

---

## Pull Request Guidelines

1. **Create a topic branch** from `main`:
   ```bash
   git checkout -b feature/my-improvement
   ```
2. **Write clean, well-tested code**:
   - Adhere to the zero-dependency rule.
   - Include unit tests for any new heuristic, check, or CLI option.
3. **Ensure all tests pass**:
   ```bash
   npm test
   npm run benchmark:certify
   ```
4. **Submit a Pull Request**:
   - Provide a clear, descriptive title.
   - Fill out the PR template completely.
   - Link any related issues.
