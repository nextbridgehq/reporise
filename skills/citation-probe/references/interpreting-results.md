# Interpreting probe results

Read this before explaining a baseline to a user. The failure mode this file exists to prevent is treating three samples as a measurement — which is easy to do, reads as rigorous, and destroys the value of every later comparison.

## Contents

- [What the numbers mean](#what-the-numbers-mean)
- [Small-sample reality](#small-sample-reality)
- [Reading share of voice](#reading-share-of-voice)
- [Sources of error](#sources-of-error)
- [What a result licenses you to say](#what-a-result-licenses-you-to-say)

## What the numbers mean

**Mention rate** — the share of samples in which the project was named. It is not a market share, a ranking, or a probability that any given user will be shown the project. It is a property of the sample.

**ci95** — the Wilson 95% interval. The honest version of the rate. Always quote it.

**Ambiguous matches** — the project name appeared but the name is generic enough that the match may be coincidental. These are excluded from the mention count and listed under `review`. If a user's project is called `flow` or `next`, most of their signal will land here, and the right response is to suggest probing on the package name or repo path instead.

**Share of voice** — how often each other tool appeared, across all samples. `source: "watchlist"` means the user named it and the match is reliable. `source: "inferred"` means it was pulled out of prose by pattern and needs eyeballing before it is repeated as fact.

## Small-sample reality

At the 3-sample default, these are the only outcomes and their 95% intervals:

| Result | Rate | 95% interval |
| --- | --- | --- |
| 0/3 | 0% | 0% – 56% |
| 1/3 | 33% | 6% – 79% |
| 2/3 | 67% | 21% – 94% |
| 3/3 | 100% | 44% – 100% |

Three things follow, and all three are worth saying out loud to a user:

1. **0/3 does not mean never.** It is consistent with a true rate as high as ~56%.
2. **1/3 versus 2/3 is not a difference.** Those intervals overlap almost entirely.
3. **Any run at n=3 can distinguish "basically never" from "basically always" and nothing in between.** That is still useful for a first read — most young projects are at "never" and want to know it — but it cannot support a claim about improvement.

To track movement, samples need to go up. `record` prints the suggested count; roughly 40 samples per query gets the interval to about ±15 points. That is a real cost in time, and the honest framing is: cheap run to learn where you stand, expensive run to prove something moved.

## Reading share of voice

For a project with zero mentions, this is the more useful half of the output, and it is worth leading with.

The tools appearing repeatedly are not just competitors — they are evidence about **which sources the engines trust for this category**. A name that shows up in twelve of fifteen samples is being pulled from pages that rank and get cited. Those pages are the placement target.

What to look for:

- **Names you did not expect.** Often reveals the category is defined differently than the maintainer assumes — which is itself the most valuable finding a first probe can produce.
- **The same three names everywhere.** Suggests a small set of canonical sources. Concentrated, and therefore tractable.
- **Different names per query.** Suggests the engines have no settled answer, which is the easiest condition to enter a category in.

## Sources of error

Name these when presenting results. They are real, and a user who discovers one you did not mention will discount everything else.

- **Non-determinism.** The same query returns different answers. This is the point of sampling and the reason for intervals.
- **Drift.** Engines change. A baseline from three months ago may differ for reasons that have nothing to do with the user's work.
- **Retrieval variance.** Whether the engine searched the web at all, and what it found, varies per request. A mention can appear or vanish based on which pages loaded.
- **Query phrasing sensitivity.** Small wording changes move results substantially. This is why the query list is fixed across runs — comparing across different phrasings measures the phrasing.
- **Conversation contamination.** If samples were not run as independent requests, later samples are influenced by earlier ones and the run is invalid. There is no way to detect this after the fact, so the discipline has to hold during collection.
- **Sampler effects.** When Claude is both the sampler and the engine, an implicit bias toward known context is possible. Treat single-engine Claude-only runs as the weakest configuration and say so.

## What a result licenses you to say

**Fair:**
- "Across 15 samples the project was named twice; the interval runs from about 4% to 32%."
- "Langfuse appeared in most answers for this query set."
- "Nothing here distinguishes this run from the last one."

**Not fair:**
- "You have 13% AI visibility." Invented metric, invented precision.
- "You improved." Not without a `diff` that says something other than `noise`.
- "ChatGPT prefers X." One query set, one moment, no mechanism established.
- "Fixing your README will raise this." Plausible, unproven, and often wrong when the citations are all third-party pages.
- Any projection of traffic or adoption from a mention rate. There is no established conversion between the two.
