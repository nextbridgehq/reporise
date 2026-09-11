---
name: citation-probe
description: Measure whether ChatGPT, Claude, Perplexity or other generative engines actually name a project when someone asks for a tool in its category — and find out who gets recommended instead. Use this whenever the user asks if LLMs know about their project, whether AI recommends their tool, why competitors get suggested and they don't, wants to track GEO or AI-search visibility over time, or asks to measure the effect of visibility work they've already done. Also use it after a visibility-audit when the user wants to know whether the repo work is landing. Runs against a hand-written query list; no API keys needed for the default engine.
---

# Citation Probe

Sample generative engines with real category queries and record whether this project gets named, who gets named instead, and whether that changes over time.

## Why this exists, and what it is honestly for

A visibility audit tells you whether a repo is *shaped* for retrieval. It cannot tell you whether anyone retrieves it. This skill closes that gap by measuring the actual outcome: ask the question a user would ask, see what comes back.

The result is usually uncomfortable and that is the point. "0 of 15 samples mentioned you; here is who they recommended" is the finding that makes the rest of the work worth doing.

Be careful not to oversell it. This measures a small sample of a non-deterministic system at one moment in time. It is a thermometer, not a diagnosis.

## The four-step cycle

The default engine is the agent itself, so Node cannot do the sampling — you do. The script prepares the work and scores what comes back.

```bash
node <skill-dir>/scripts/probe.mjs status <repo>   # where am I?
node <skill-dir>/scripts/probe.mjs init <repo>     # 1. write query template
node <skill-dir>/scripts/probe.mjs plan <repo>     # 2. expand into runs
#                                                              3. you fill the responses
node <skill-dir>/scripts/probe.mjs record <repo>   # 4. score into a baseline
node <skill-dir>/scripts/probe.mjs diff <repo>     # later: what moved?
```

`<skill-dir>` is the directory containing this SKILL.md. Every harness places it somewhere different — Claude Code under the plugin root, Claude Desktop in the unpacked skill folder, Codex under `~/.codex/skills/`, Gemini under the extension path — so resolve it from this file's own location rather than assuming a fixed path.


Run `status` first whenever you are unsure — it tells you the next command.

### Step 1 — init, then get the user to edit

`init` writes `.reporise/queries.json` with five query templates containing `<placeholders>`. **The user must fill these in.** `plan` refuses to run on unedited templates, deliberately: an invented category noun produces a measurement of the wrong thing while looking exactly like a real result.

Help them write the queries, but the category noun has to be theirs. Ask what a user who does not know the project exists would type. Then add known competitors to `watch` — watchlisted names are matched reliably; everything else is guessed from prose and labelled `inferred`.

Also read the `nameRisk` warning. A project called `go` or `next` cannot be detected by name, and the probe will say so rather than counting coincidental word matches.

### Step 2 — plan

Expands queries × engines × samples into `.reporise/handoff.json`. Default is 3 samples, which is enough to distinguish "never" from "usually" and nothing finer. Use `--samples 10` or more when the user cares about tracking movement rather than getting a first read.

### Step 3 — run the samples yourself

This is the part only you can do, and the part where the measurement is most easily invalidated. For each run in the handoff:

- Send `prompt` **exactly as written**. Do not add context, do not mention the project, do not hint at the category beyond what the query says.
- Use a **fresh, independent request** per sample. Reusing a conversation contaminates later samples with earlier answers, which manufactures consistency that is not there.
- Paste the **full raw answer** into `response`. Do not summarise. The scoring reads the text, and a summary of yours is not what the engine said.
- If an engine refuses or returns nothing useful, record that verbatim too. A refusal is data.

Then run `record`. It rejects a partially filled handoff rather than scoring what it has — a partial run produces a baseline nothing can be compared against later.

### Step 4 — read the numbers with the intervals attached

Never quote a rate without its interval. At 3 samples, 1 mention is a 95% interval of roughly 6%–70%. Saying "you're at 33%" is a fabrication dressed as a measurement.

`record` prints the interval next to every rate and suggests how many samples would narrow it. Pass that on.

## Interpreting results

Read `references/interpreting-results.md` before explaining a baseline to a user. The short version:

- **0 mentions across every query** is the common case for a young project. It is a starting line, not a verdict.
- **Share of voice matters more than your own rate at first.** Who gets cited tells you which sources the engines trust for this category — that list is your actual target.
- **A single run has no trend in it.** Do not describe movement until there are two baselines and `diff` calls it something other than `noise`.

## The diff is the point

`diff` compares the last two archived baselines and refuses to call overlapping intervals a change. When it says `noise`, say `noise` — do not soften it into "slight improvement". The whole value of a baseline is that you can trust it later, and that trust dies the first time noise gets reported as progress.

## Telemetry

There is none. `scripts/lib/telemetry.mjs` builds a payload and has no network code; `--show-telemetry` prints exactly what would be shared if it ever were. If a user asks, tell them plainly: off, unwired, and the payload deliberately excludes their repo name, URL, and whether they were mentioned.

## What to do with a bad result

The instinct is to suggest README fixes. Sometimes right, often not — if the engines are citing four comparison articles that do not mention the project, no amount of README work changes the answer, because the README is not what is being retrieved.

Point at the share-of-voice list and say what it means: those are the pages that get cited for this category, and the work is getting into them. That is `category-profile`'s job, which does not exist yet. Say so rather than improvising a substitute.
