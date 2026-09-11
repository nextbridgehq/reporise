# RepoRise

*RepoRise is a zero-dependency CLI and AI-agent toolkit that measures how findable a repository is across search engines (SEO), answer engines (AEO), and generative engines (GEO) — auditing retrieval readiness offline and probing generative citations with statistical confidence intervals.*

*It runs offline, needs no API keys, and refuses to guess at what it cannot see.*

[![npm version](https://img.shields.io/npm/v/reporise.svg?color=blue)](https://www.npmjs.com/package/reporise)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](https://nodejs.org)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-success.svg)](package.json)
[![Tests](https://img.shields.io/badge/tests-64%20passed-success.svg)](skills/visibility-audit/scripts/test.mjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[GitHub](https://github.com/nextbridgehq/reporise) · [Issues](https://github.com/nextbridgehq/reporise/issues) · [Releases](https://github.com/nextbridgehq/reporise/releases) · [Changelog](CHANGELOG.md)

Maintained by [Nextbridge](https://nextbridge.com)

## Quickstart

Audit any repository in seconds with zero installation:

```bash
npx reporise .
```

Enforce a documentation quality gate in your CI pipeline:

```bash
npx reporise . --fail-under 80
```

---

## The First 5 Minutes with RepoRise

Here is exactly what you experience in your first five minutes after discovering RepoRise:

### Minute 1: Run your first zero-install audit
From your project's root directory, run:
```bash
npx reporise .
```
No installation, no account, no API keys, and zero network calls. RepoRise analyzes your working tree against 22 deterministic heuristics across 5 categories in under two seconds.

### Minute 2: Read your diagnostic breakdown
RepoRise prints a clean terminal summary to `stderr`:
```text
Overall 82%  (SEO 88% · AEO 75% · GEO 84%)
Top fixes:
  ✗ comparison-section — Add alternative comparisons
  ! quickstart-fence   — Untagged code block
Wrote .reporise/audit.json and audit.md
```
- **SEO (Search Engines)**: Can search crawlers and package registries index your project for high-intent queries?
- **AEO (Answer Engines)**: Can answer engines (Perplexity, Google AI Overviews) lift self-contained explanations and install snippets directly from your docs?
- **GEO (Generative Engines)**: Do generative models (ChatGPT, Claude, Gemini) have stable, citable facts (benchmarks, feature matrices, compatibility)?

### Minute 3: Address your highest-leverage fixes
RepoRise writes two local artifacts into `.reporise/`:
- `.reporise/audit.md`: A structured markdown report ranking every issue by `category weight × severity × surfaces moved`. The cheap wins that lift multiple surfaces float to the top.
- `.reporise/audit.json`: Complete machine-readable signal and score data for scripting.

Open `.reporise/audit.md` and implement the top recommendations (for example, adding language tags to code fences or adding a dedicated alternatives table).

### Minute 4: Lock in your score in CI
Prevent documentation decay across pull requests by adding an automated quality gate to your GitHub Actions:
```bash
npx reporise . --fail-under 80
```
If a pull request drops your repository's visibility score below 80%, RepoRise exits with code `1` and blocks the merge.

### Minute 5: Automate remediation with your AI coding agent
If you use Claude Code, Gemini CLI, or Codex, RepoRise installs as an agent skill. Simply ask your assistant:
> *"Audit this repo's discoverability with RepoRise and draft the missing comparison section to maximize search and generative citations."*
The agent reads `.reporise/audit.json` and drafts the exact missing documentation.

## Requirements

Node 18 or newer. No runtime dependencies. Git is optional — release and commit checks are skipped without it rather than failing.

| Runtime | Supported |
| --- | --- |
| Node 18 | yes |
| Node 20 | yes |
| Node 22 | yes |

## Installation

RepoRise ships as a self-contained skill folder per capability, so every harness installs it the same way: point the tool at the folder.

### Claude Code (CLI, VS Code, JetBrains)

```bash
/plugin marketplace add nextbridgehq/reporise
/plugin install reporise@reporise-marketplace
```

Both skills are then discovered automatically. Just ask — `visibility-audit` triggers on questions about discoverability, README quality, SEO, GEO, or why nobody is finding a project; `citation-probe` triggers on questions about whether LLMs actually name it.

### Claude Desktop

Desktop takes one zipped skill folder at a time, and needs **code execution enabled** under Settings → Capabilities.

```bash
cd skills
zip -r visibility-audit.zip visibility-audit    # macOS / Linux
zip -r citation-probe.zip   citation-probe
```

```powershell
cd skills                                        # Windows
Compress-Archive -Path visibility-audit -DestinationPath visibility-audit.zip
Compress-Archive -Path citation-probe   -DestinationPath citation-probe.zip
```

Then Settings → Capabilities → Skills → upload each zip and toggle it on. The zip's root must be the skill folder itself, which is what the commands above produce.

### Codex CLI

```bash
cp -r skills/visibility-audit skills/citation-probe ~/.codex/skills/
```

Use `.codex/skills/` instead for a single project. Codex reads the `SKILL.md` standard directly, so no adapter file is needed.

### Gemini CLI

```bash
cp -r . ~/.gemini/extensions/reporise/
```

`gemini-extension.json` declares the extension and `GEMINI.md` carries the routing instructions. No MCP server is involved — RepoRise is plain CLI scripts.

### Any other agent

`AGENTS.md` at the repository root covers harnesses that read it. Otherwise copy either skill folder anywhere; each is independently runnable.

### Standalone CLI

```bash
npx reporise .
```

## How do I audit a repository?

```bash
npx reporise /path/to/repo
```

This evaluates your repository offline and writes `.reporise/audit.json` and `.reporise/audit.md` into the target repo, printing the markdown report to stdout.

```bash
npx reporise . --json          # raw JSON structure (pipeable to jq)
npx reporise . --no-write      # print report to stdout only, write nothing to disk
npx reporise . --fail-under 80 # exit 1 below threshold, for CI quality gates
```

*(From a local repository clone, you can also run `node skills/visibility-audit/scripts/audit.mjs .`)*

Inside Claude Code, just ask — the `visibility-audit` skill triggers on questions about discoverability, README quality, SEO, GEO, LLM citations, or why nobody is finding a project.

## What does it check?

Twenty-two checks across five categories, each tagged with the surfaces it moves:

| Category | Weight | Question it answers |
| --- | --- | --- |
| Identity | 25 | Can a stranger, or a model holding one chunk of your README, say what this is? |
| Discoverability | 20 | Do the surfaces that index you have anything to index? |
| Answerability | 20 | Can an answer engine lift a self-contained answer out of this? |
| Citability | 25 | Does this give a generative engine stable, quotable facts? |
| Hygiene | 10 | What mechanical defects are suppressing the rest? |

Fixes are ranked by `category weight × severity × number of surfaces moved`, so the cheap wins that help everywhere float to the top.

## When to use this

Use it when a repository is well-built but nobody arrives, when you are about to rewrite a README and want to know which parts matter, or as a CI gate so documentation quality does not silently rot.

Do not use it as a traffic predictor. The score measures whether a repo is *well-formed for retrieval*, not whether anyone is retrieving it — those are different problems and only the first is visible from inside the working tree. A repo can score 95% and have four visitors a month.

## What it deliberately does not do

The audit reads the working tree and nothing else. It cannot tell you who your competitors are, which queries developers use for your category, which third-party pages currently get cited instead of you, or whether any engine mentions you today.

Checks that need the network return `skip` and are excluded from the score rather than guessed at. An offline tool that invents a verdict is worse than one that admits a gap, because a confident wrong score sends you to fix the wrong thing.

## Alternatives

| Tool | Focus | Difference |
| --- | --- | --- |
| RepoRise | Repository visibility across SEO, AEO and GEO | Offline, evidence-tagged, ranks fixes by cross-surface impact |
| Classic SEO crawlers (Screaming Frog, Sitebulb) | Websites | Crawl rendered sites; a repo working tree is not a site |
| Lighthouse | Page performance and on-page SEO of a URL | Needs a deployed page; says nothing about README structure |
| Markdown linters | Style and formatting | Enforce syntax consistency, not discoverability |
| README badge/score services | Presence checklists | Check that files exist, not whether the content is retrievable |

## FAQ

### Why is my comparison section scored as a failure rather than a warning?

Because the absence is near-universal and near-costless to fix. Category queries are overwhelmingly comparative, and a project that never names the other members of its category is not in that category as far as a retrieval system is concerned.

### Why does a check say `skip` instead of giving me a score?

It needs the GitHub API or the open web. Repository topics, for example, do not exist in the working tree. Skipped checks are listed separately so the gap is visible.

### Why did it flag my opening sentence when it reads fine?

The check pattern-matches the `X is a Y` form and will misfire on legitimate openings that start with a verb. It is a heuristic; override it. The reasoning is in `skills/visibility-audit/references/checks.md`.

### Is `llms.txt` worth adding?

Unproven. Adoption is partial and no engine has committed to honouring it. RepoRise marks it `speculative` rather than recommending it as a ranking factor.

### Why is RepoRise an npm package if it is an AI agent plugin?

RepoRise uses a **dual distribution model**:
- **As an npm package (`reporise`):** Developers and DevOps teams can run instant terminal audits with `npx reporise .` or enforce retrieval quality gates in CI/CD pipelines (`--fail-under 80`) without requiring an active AI assistant or LLM session.
- **As an AI agent plugin:** AI coding assistants (Claude Code, Gemini CLI, OpenAI Codex, Claude Desktop) discover the self-contained `skills/` to autonomously diagnose discoverability problems and draft actionable README improvements.

### How does citation probing work without an OpenAI or Anthropic API key?

RepoRise uses **inversion of control**: **the active agent or user is the engine.** Node does not execute outbound HTTP calls or consume API keys.
1. `probe plan` generates prompt tasks into `.reporise/handoff.json`.
2. The AI assistant (or the developer) executes each prompt in clean, independent context windows and pastes the raw output back into `handoff.json`.
3. `probe record` scores the responses locally on disk, identifying mentions and computing 95% Wilson confidence intervals offline.

## How do I measure whether engines actually cite me?

The audit says whether a repo is *shaped* for retrieval. The probe says whether
anything retrieves it.

```bash
npx reporise-probe status .   # check where you are in the cycle
npx reporise-probe init .     # step 1: write query template (.reporise/queries.json)
npx reporise-probe plan .     # step 2: expand into runs (.reporise/handoff.json)
#                               step 3: agent or user fills raw responses in handoff.json
npx reporise-probe record .   # step 4: score answers into baseline (.reporise/baseline.json)
npx reporise-probe diff .     # later: compare baselines for real movement
```

*(From a local repository clone, you can also run `node skills/citation-probe/scripts/probe.mjs`)*

### The 4-Step Probe Cycle

1. **`init`**: Scaffolds `.reporise/queries.json` with category query templates. Maintainers customize the query placeholders and add known competitors to the `watch` list.
2. **`plan`**: Expands `queries × engines × samples` into `.reporise/handoff.json`. Default is 3 samples per query.
3. **Sampling Handshake (No API keys needed)**:
   - *In Claude Code / Gemini CLI:* The AI agent reads the handoff file, runs each prompt in fresh independent sessions, and records the verbatim responses into `handoff.json`.
   - *In Standalone Terminal:* The developer runs the prompts in web chats (ChatGPT, Claude, Perplexity) and pastes the responses into `handoff.json`.
4. **`record`**: Evaluates the completed handoff offline, runs entity detection for the project name and competitors, and saves `.reporise/baseline.json`.

Every rate comes with a 95% Wilson interval, and `diff` reports `noise` rather
than a delta when intervals overlap. At the 3-sample default a result of 1/3
spans 6%–79%, so the probe tells you "never" versus "usually" and refuses to
pretend it can tell you more.

Share of voice is often the more useful half: for a project with zero mentions,
the tools that *do* get named reveal which sources the engines trust for that
category. Those pages are the placement target.

## Telemetry

None. `skills/citation-probe/scripts/lib/telemetry.mjs` builds a payload and contains no network code.
`--show-telemetry` prints exactly what would be shared if it ever were — query
text, sample counts, and which watchlisted tools were cited. Never your repo
name, your URL, or whether you were mentioned.

## Documentation & Resources

- [Quickstart Guide](docs/quickstart.md) — 5-minute setup and CLI flags.
- [CI/CD Integration](docs/ci-cd.md) — GitHub Actions workflow and exit code gating.
- [Citation Probing Guide](docs/citation-probing.md) — How to design queries and evaluate Wilson intervals.
- [Runnable Examples](examples/) — Turnkey GitHub Action, programmatic Node script, and sample configuration.
- [Contributing Guide](CONTRIBUTING.md) — Development setup, invariant rules, and PR guidelines.
- [Security Policy](SECURITY.md) — Vulnerability reporting and security architecture.
- [Changelog](CHANGELOG.md) — Release notes and version history.
- [Machine-Readable Overview](llms.txt) — Project summary structured for LLMs.

## Roadmap

v0.1.0 ships the offline audit and the citation probe. Planned next:

- `category-profile` — competitor set, real query phrasings, citation-source shortlist
- `visibility-remediate` — apply the fix plan across README, registry metadata, and docs

Both networked seams are pluggable and documented in `skills/visibility-audit/scripts/lib/adapters.mjs`. The principle: ships working with zero keys, gets better when you add them.

## Development & Benchmark Certification

```bash
npm test                                             # run full test suite (64 tests across 5 suites)
npm run benchmark:certify                            # run 5-phase cryptographic certification
```

Individual test suites:
- `skills/visibility-audit/scripts/test.mjs` — single-document audit (18 tests)
- `skills/citation-probe/scripts/test-probe.mjs` — citation probe (31 tests)
- `skills/visibility-audit/scripts/test-resolver.mjs` — multi-doc evidence resolver (5 tests)
- `skills/visibility-audit/scripts/test-semantics.mjs` — multi-doc evidence semantics (5 tests)
- `skills/visibility-audit/scripts/test-attribution.mjs` — attribution and error diagnostics (5 tests)

### Evaluation

RepoRise is evaluated using:
- Deterministic unit and contract tests (64 tests across 5 test suites)
- Synthetic edge-case fixtures
- Real-world repository corpus (120 repositories across 12 archetypes)
- Single-document evaluation baseline
- Multi-document evaluation benchmarks (resolution, scoring, attribution)
- Counterexample testing and boundary auditing
- Score calibration across evaluation surfaces
- Certification and regression gates ($N=32$ challenge corpus)
- Cryptographic SHA-256 provenance across all engine, test, and benchmark components

### Benchmark Registry

RepoRise maintains an immutable benchmark registry in `benchmarks/`:
- `benchmarks/registry.json`: Master index across single-document and multi-document benchmark tracks.
- `benchmarks/single-document/`: Single-document baseline evaluations ($N=120$ corpus inventory, $N=15$ human gold standard).
- `benchmarks/multi-document/`: Multi-document challenge datasets (resolution feasibility $N=30$, scoring integration $N=40$).
- `benchmarks/certification/`: Generalization and certification corpus ($N=32$).
- `benchmarks/PROVENANCE.json`: SHA-256 integrity digests across all 21 engine components, test suites, and manifests.
- `benchmarks/CERTIFICATE.json`: Cryptographic certificate emitted by `npm run benchmark:certify`.

## License

MIT
