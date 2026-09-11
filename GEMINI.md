# RepoRise

RepoRise measures how findable a repository is across search engines (SEO), answer engines (AEO), and generative engines (GEO) — and whether generative engines actually cite it.

It is two Node scripts and two skill documents. There is no MCP server, no network access, and no API keys. Node 18 or newer is the only requirement.

Paths below are relative to this file's directory, which is the extension's installation directory.

## When to use it

Use RepoRise when the user asks why nobody finds their repository, wants more stars or downloads, asks about SEO, GEO, AEO, LLM citations, README quality, or discoverability — and also when they ask for a README rewrite, since the audit is what tells you which rewrite matters.

## Audit a repository

Read `skills/visibility-audit/SKILL.md` before running this. It carries the interpretation rules, and the numbers are misleading without them.

```bash
node skills/visibility-audit/scripts/audit.mjs <repo-path>
```

Writes `.reporise/audit.json` and `.reporise/audit.md` into the target repo and prints a markdown report. Flags: `--json`, `--no-write`, `--out <dir>`, `--fail-under <n>`, `--quiet`.

Background reading lives in `skills/visibility-audit/references/surfaces.md` (what SEO, AEO and GEO mean here, and which claims are established versus speculative) and `references/checks.md` (the full check inventory and why each is weighted as it is).

## Measure whether engines cite the project

Read `skills/citation-probe/SKILL.md` first. This workflow has a step only the agent can perform, and skipping the instructions invalidates the measurement.

```bash
node skills/citation-probe/scripts/probe.mjs status <repo>   # where am I?
node skills/citation-probe/scripts/probe.mjs init <repo>     # 1. write query template
node skills/citation-probe/scripts/probe.mjs plan <repo>     # 2. expand into runs
#                                                              3. you answer them yourself
node skills/citation-probe/scripts/probe.mjs record <repo>   # 4. score into a baseline
node skills/citation-probe/scripts/probe.mjs diff <repo>     # later: what moved?
```

Run `status` whenever you are unsure which step comes next.

## Two rules that matter more than the commands

**Never quote a rate without its interval.** At the 3-sample default, 1 mention spans roughly 6%–70%. Saying "you're at 33%" is a fabrication dressed as a measurement. `record` prints the interval next to every rate — pass it on.

**When `diff` says `noise`, say `noise`.** Do not soften it into "slight improvement". A baseline is only worth having if it can be trusted later, and that trust dies the first time noise gets reported as progress.

## What it deliberately will not do

The audit reads the working tree and nothing else. It cannot tell you who your competitors are, which queries developers use, or which pages currently get cited instead of you. Checks needing the network return `skip` and are excluded from the score rather than guessed at. Do not improvise around a `skip`.
