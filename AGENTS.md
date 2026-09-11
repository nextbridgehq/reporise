# RepoRise — agent instructions

RepoRise measures how findable a repository is across search engines (SEO), answer engines (AEO), and generative engines (GEO), and whether generative engines actually cite it.

Two Node scripts, two skills, zero dependencies. No MCP server, no network, no API keys, no telemetry. Node 18 or newer.

## Skills

Both skills follow the SKILL.md standard and are self-contained — each folder carries its own `scripts/` and `references/`, so it can be copied anywhere and still run.

| Skill | Path | What it answers |
| --- | --- | --- |
| `visibility-audit` | `skills/visibility-audit/` | Is this repo *shaped* to be retrieved? Returns a ranked, evidence-backed fix plan. |
| `citation-probe` | `skills/citation-probe/` | Does anything actually retrieve it? Returns mention rates with confidence intervals and a share-of-voice list. |

**Read the relevant `SKILL.md` before running either script.** They carry the interpretation rules; the raw numbers mislead without them.

## Commands

```bash
node skills/visibility-audit/scripts/audit.mjs <repo-path>   # offline audit
node skills/citation-probe/scripts/probe.mjs status <repo>   # probe: what's next?
npm test                                                    # run full test suite (64 tests across 5 suites)
npm run benchmark:certify                                   # 5-phase cryptographic certification & invariant verification
```

Run the whole test suite with `npm test` — 64 tests, no network, no dependencies.

## Benchmark Registry & Verification

RepoRise maintains an immutable benchmark registry and cryptographic provenance tracking in `benchmarks/`:

- `benchmarks/registry.json`: Master index across single-document and multi-document benchmark tracks.
- `benchmarks/single-document/`: Single-document baseline evaluations (N=120 corpus inventory, N=15 human gold standard).
- `benchmarks/multi-document/`: Multi-document challenge datasets (resolution feasibility N=30, scoring integration N=40).
- `benchmarks/certification/`: Generalization and certification challenge corpus (N=32).
- `benchmarks/PROVENANCE.json`: SHA-256 digests across all 21 engine components, test suites, and manifests.
- `benchmarks/CERTIFICATE.json`: Cryptographic certificate emitted by `npm run benchmark:certify`.

## Installing into other harnesses

Because the skill folders are self-contained, installation is a copy:

```bash
cp -r skills/visibility-audit ~/.codex/skills/     # Codex CLI (or .codex/skills/ per project)
cp -r skills/citation-probe   ~/.codex/skills/
```

Claude Code installs the whole repo as a plugin via `.claude-plugin/`. Gemini CLI reads `gemini-extension.json` and `GEMINI.md`. Claude Desktop takes one zipped skill folder at a time.

## Working on this repo

Keep the two skill folders independently runnable. `scripts/lib/collect.mjs` and `scripts/lib/adapters.mjs` are deliberately duplicated between them — that duplication is what makes each folder portable across harnesses. If you change one copy, change both, and run `npm test`.

Version lives in three places that must agree: `package.json`, `.claude-plugin/plugin.json`, and the `VERSION` constant in each script.

## Two rules that matter more than the commands

**Never quote a rate without its interval.** At the 3-sample default, 1 mention spans roughly 6%–70%. "You're at 33%" is a fabrication dressed as a measurement.

**When `diff` says `noise`, say `noise`** — not "slight improvement". The value of a baseline is that it can be trusted later.
