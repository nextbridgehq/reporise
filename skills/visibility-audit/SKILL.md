---
name: visibility-audit
description: Audit a repository for how findable and citable it is across search engines (SEO), answer engines (AEO), and generative engines (GEO), then produce a ranked, evidence-backed fix plan. Use this whenever the user asks why nobody finds their repo, wants more stars/downloads/traffic, asks about SEO, GEO, AEO, LLM citations, README quality, discoverability, developer marketing, or getting their project recommended by ChatGPT/Claude/Perplexity — and also when they ask for a README rewrite or "how do I market this project", since the audit is what tells you which rewrite actually matters. Runs fully offline; no API keys needed.
---

# Visibility Audit

Audit a repository's visibility and turn the findings into a plan the user can execute today.

## Why this skill exists

Most visibility advice fails in one of two ways: it is generic ("write a good README"), or it is confidently wrong about things it cannot see ("your competitors are X"). This skill avoids both by separating what is observable in the working tree from what is not, and refusing to guess at the second category.

The audit reads the repository only. It says nothing about who your competitors are, what developers search for, or whether any engine mentions you today — those belong to the networked skills. Be clear with the user about that boundary; a strong audit score means the repo is *well-formed for retrieval*, not that anyone is retrieving it.

## Workflow

### 1. Run the audit

```bash
node <skill-dir>/scripts/audit.mjs <repo-path>
```

`<skill-dir>` is the directory containing this SKILL.md. Every harness places it somewhere different — Claude Code under the plugin root, Claude Desktop in the unpacked skill folder, Codex under `~/.codex/skills/`, Gemini under the extension path — so resolve it from this file's own location rather than assuming a fixed path.


It writes `.reporise/audit.json` and `.reporise/audit.md` into the target repo, and prints the markdown report.

Useful flags: `--json` for the raw structure, `--no-write` to avoid touching the repo, `--fail-under 70` for CI gating, `--out <dir>` to redirect artifacts.

The script is deterministic and needs no network. If it errors, read the message — it distinguishes usage errors (exit 2) from a genuine below-threshold result (exit 1).

### 2. Read the results before summarising them

Open `.reporise/audit.json` and look at the check inventory, not just the score. In particular:

- **`skip` statuses are not failures.** They mean the check needs the GitHub API or the open web. Never present a skipped check as a problem, and never invent a verdict for one.
- **`confidence: "speculative"`** marks a fix whose payoff is genuinely unproven (currently `llms.txt`). Pass that uncertainty through to the user rather than laundering it into a recommendation.
- **The `surfaces` array** on each check tells you which of SEO / AEO / GEO the fix moves. Fixes that move all three are the cheap wins and should lead.

### 3. Verify the top findings against the actual file

The checks are heuristics over text. Before telling the user their opening sentence is promotional, read it. If a heuristic has misfired — and it will, on unusual READMEs — say so and override it. A check result is evidence, not a verdict, and the user will trust the whole report less if an obviously wrong item survives into your summary.

### 4. Present a plan, not a score dump

The user cannot act on `62%`. Give them:

1. **The one-line diagnosis.** What is the single structural reason this repo is hard to find? Usually it is one of: no stated category, no comparison content, or nothing indexable beyond the README.
2. **The top three fixes**, each with the specific edit — the actual sentence to write, the actual section to add. Not "improve your description."
3. **What it will not fix.** If the repo has ten stars and no external mentions, README work raises the ceiling but does not fill the room. Say that.

Order by the report's ranking, which already weights category importance against surface breadth. Do not reorder by what is easiest unless the user asks for quick wins specifically.

### 5. Offer the next step, once

If the user wants to go further than the working tree allows, the honest next move is competitive and citation research — which needs the network and does not exist in v0.1.0. Say so plainly rather than improvising a substitute with a web search or two; a half-sampled citation claim is worse than none, because it reads as measurement.

## Writing the fixes

When the user asks you to apply fixes rather than list them, some rules that keep the edits honest:

- **Never fabricate a comparison.** If you add an `## Alternatives` section, the competitors must be real and the comparison must be one the maintainer would defend in public. An invented advantage over a misdescribed competitor is a reputational liability, not a marketing win.
- **Never invent version support.** A support matrix claiming Node 18–22 when nothing was tested on 18 is a bug report waiting to happen. Ask what is actually tested.
- **Rewrite the opening sentence in `<Name> is a <category> that <does X> for <audience>` form.** This is the single highest-leverage edit in the report and the one most worth spending words on. The category noun matters most: it is what makes the project retrievable for "best <category> for <task>" queries, which is how these tools are actually looked for.
- **Preserve the maintainer's voice.** A README rewritten into marketing register reads as inauthentic to exactly the audience it is aimed at.

## Reference

- `references/surfaces.md` — what SEO, AEO and GEO actually mean here, what is established versus speculative, and why the three overlap. Read this before explaining the three-way distinction to a user, or before making any claim about how generative retrieval works.
- `references/checks.md` — the full check inventory with rationale for each. Read when a user disputes a verdict or asks why something is weighted the way it is.
