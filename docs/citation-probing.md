# Citation Probing with RepoRise

While the visibility audit measures whether a repository is **shaped** for retrieval, the citation probe measures whether generative engines (ChatGPT, Claude, Perplexity) **actually retrieve and cite it**.

## Why No API Keys Are Required: The "Agent as the Engine" Architecture

Traditional benchmarking tools require users to configure external API keys (e.g., `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`), install complex MCP servers, or pay for API tokens. 

RepoRise flips this paradigm through **inversion of control**:
* **The active AI assistant (or human user) is the engine.** Node does not execute outbound HTTP/LLM calls.
* The script prepares structured query plans on disk, the agent or user performs the sampling in independent queries, and the script scores the raw text outputs offline using local entity detection and statistical mathematics.
* This architecture ensures zero telemetry, zero unexpected API costs, full transparency, and auditable raw responses stored directly in version-controlled or local files.

## The 4-Step Probe Workflow

```bash
node skills/citation-probe/scripts/probe.mjs status .   # Check current cycle state
node skills/citation-probe/scripts/probe.mjs init .     # Step 1: Write query template
node skills/citation-probe/scripts/probe.mjs plan .     # Step 2: Expand into run tasks
#                                                        Step 3: The Handshake (Agent/User fills responses)
node skills/citation-probe/scripts/probe.mjs record .   # Step 4: Score responses into baseline
node skills/citation-probe/scripts/probe.mjs diff .     # Later: Compare baselines for real movement
```

### Step 1 — Initialize Query Templates (`init`)
`init` writes `.reporise/queries.json` with default query templates containing `<placeholders>` (e.g., `"What are the best tools for <task>?"`). The user or maintainer customizes these placeholders with the actual category nouns developers search for, along with a `watch` list of known competitors.

### Step 2 — Plan the Execution Matrix (`plan`)
`plan` expands `queries × engines × samples` into `.reporise/handoff.json`. The default is 3 samples per query, sufficient to distinguish "never" from "usually".

### Step 3 — The Handshake: Sampling (No API Keys Needed)
This is the interactive step that avoids external API keys:
* **Inside an AI Harness (Claude Code, Gemini CLI, etc.):** The assistant reads `.reporise/handoff.json`, executes each prompt in fresh independent sessions, and writes the verbatim raw text responses back into the `response` fields of `handoff.json`.
* **In Standalone Terminal / Human Mode:** The developer copies prompts from `handoff.json` into web interfaces (ChatGPT, Claude.ai, Perplexity) and pastes the verbatim responses back into the file.

### Step 4 — Record and Score the Baseline (`record`)
`record` reads the populated `.reporise/handoff.json`, checks that all samples are present, runs local pattern and regex matching to detect project and competitor mentions, and archives `.reporise/baseline.json`.

### Comparing Runs (`diff`)
After refactoring documentation or building authority, run the cycle again and use `diff` to compare the latest baseline against previous ones. If confidence intervals overlap, RepoRise flags the result as `noise` rather than falsely claiming progress.

## Statistical Discipline: 95% Wilson Score Intervals

Single-digit sample rates without confidence intervals are misleading. For example, getting 1 mention out of 3 samples spans roughly **6% to 70%** at a 95% confidence level. Quoting "we are at 33%" is statistically invalid.

RepoRise enforces:
- Every rate is accompanied by its 95% Wilson score interval.
- When comparing two runs via `diff`, if the confidence intervals overlap, RepoRise explicitly labels the change as `noise` rather than reporting a false delta.

## Share of Voice (SOV)

For young or unindexed repositories, a mention rate of 0% is common. In this case, the citation probe computes **Share of Voice**:
- It records which competitors and third-party tools the LLM *did* recommend.
- These named tools and articles highlight the exact authority sources the engine trusts for that category, providing a concrete roadmap for external PR and backlink placement.
