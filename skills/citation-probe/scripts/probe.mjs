#!/usr/bin/env node
/**
 * reporise probe — does any generative engine name this project?
 *
 * The probe is a four-step handshake because the default engine driver is the
 * agent itself. Node cannot call Claude from inside a Claude Code session, so
 * the script prepares the work, the agent does the sampling, and the script
 * scores what comes back. That split is also what makes the run auditable:
 * every raw response is on disk before anything is counted.
 *
 *   init    write a query template into .reporise/queries.json
 *   plan    expand queries x engines x samples into .reporise/handoff.json
 *   record  score the filled handoff into .reporise/baseline.json
 *   diff    compare the current baseline against an archived one
 *   status  show where you are in the cycle
 */

import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { collect } from './lib/collect.mjs';
import * as queries from './lib/queries.mjs';
import { detectMention, extractCandidates, assessName } from './lib/detect.mjs';
import { aggregate, samplesNeeded, precision } from './lib/stats.mjs';
import * as baselineStore from './lib/baseline.mjs';
import { buildPayload, describe as describeTelemetry, TELEMETRY_ENABLED } from './lib/telemetry.mjs';
import { loadConfig, resolveEngines } from './lib/adapters.mjs';

const VERSION = '0.1.0';

const HELP = `reporise probe v${VERSION} — measure whether generative engines cite your project

Usage:
  npx reporise-probe <command> [path] [options]
  reporise-probe <command> [path] [options]

Commands:
  status    Show current progress and what step comes next
  init      Write .reporise/queries.json from a template (then customize it)
  plan      Expand queries into .reporise/handoff.json for sampling
  record    Score completed handoff into .reporise/baseline.json
  diff      Compare current baseline against an earlier archived baseline

Options:
  --samples <n>       Samples per query per engine (default: 3)
  --engines <a,b>     Engine drivers to use (default: claude)
  --json              Machine-readable JSON output
  --show-telemetry    Print the payload that WOULD be shared (nothing is sent)
  --force             Overwrite existing files (queries.json or handoff.json)
  -v, --version       Show version number
  -h, --help          Show this help message

The probe is empirical. Every rate is reported with a 95% Wilson interval,
and diffs report "noise" rather than a delta when confidence intervals overlap.`;

function parseArgs(argv) {
  const opts = { command: null, path: '.', samples: null, engines: null, json: false, force: false, showTelemetry: false, version: false };
  const rest = [];
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--json') opts.json = true;
    else if (a === '--force') opts.force = true;
    else if (a === '--show-telemetry') opts.showTelemetry = true;
    else if (a === '--help' || a === '-h') opts.help = true;
    else if (a === '--version' || a === '-v') opts.version = true;
    else if (a === '--samples') opts.samples = Number(argv[++i]);
    else if (a === '--engines') opts.engines = argv[++i].split(',').map((s) => s.trim()).filter(Boolean);
    else if (a.startsWith('--')) throw new Error(`Unknown option: ${a}`);
    else rest.push(a);
  }
  opts.command = rest[0] || null;
  if (rest[1]) opts.path = rest[1];
  return opts;
}

const paths = (root) => {
  const baseDir = join(root, '.reporise');
  return {
    dir: baseDir,
    queries: join(baseDir, 'queries.json'),
    handoff: join(baseDir, 'handoff.json'),
    baseline: join(baseDir, 'baseline.json'),
    archive: join(baseDir, 'history'),
  };
};

// ------------------------------------------------------------------- init

function cmdInit(root, opts) {
  const p = paths(root);
  if (existsSync(p.queries) && !opts.force) {
    throw new Error(`${p.queries} already exists. Use --force to overwrite it (this discards your edited queries).`);
  }
  const signals = collect(root);
  const template = queries.templateFor(signals);
  queries.save(p.queries, template);

  return {
    wrote: p.queries,
    next: 'Edit the file: replace every <placeholder> with your real category, competitors, and tasks. Add known competitors to "watch" so they are detected reliably rather than guessed at.',
    nameRisk: assessName(template.repo.name),
    template,
  };
}

// ------------------------------------------------------------------- plan

function buildPrompt(queryText) {
  // Phrased as a real user would, with no hint that a specific tool is being
  // looked for. Any nudge toward the answer invalidates the measurement.
  return queryText;
}

function cmdPlan(root, opts, config) {
  const p = paths(root);
  const q = queries.load(p.queries);
  const engines = resolveEngines({ ...config, engines: opts.engines || config.engines });
  const samples = opts.samples || config.samplesPerQuery || 3;

  if (existsSync(p.handoff) && !opts.force) {
    throw new Error(`${p.handoff} already exists. Run \`record\` to score it, or pass --force to start a new run.`);
  }

  const runs = [];
  for (const query of q.queries) {
    for (const engine of engines) {
      for (let s = 1; s <= samples; s += 1) {
        runs.push({
          id: `${query.id}-${engine.id}-${s}`,
          queryId: query.id,
          query: query.text,
          intent: query.intent || null,
          engine: engine.id,
          sample: s,
          prompt: buildPrompt(query.text),
          status: 'pending',
          response: null,
        });
      }
    }
  }

  const handoff = {
    version: VERSION,
    createdAt: new Date().toISOString(),
    repo: q.repo,
    watch: q.watch,
    samplesPerQuery: samples,
    engines: engines.map((e) => e.id),
    instructions:
      'For each run below, send `prompt` to the named engine as a fresh, independent request with no prior context, and paste the full answer into `response`. Do not mention the project being probed, do not reuse a conversation between samples, and do not summarise — the raw text is what gets scored. Then run `probe.mjs record`.',
    runs,
  };

  mkdirSync(p.dir, { recursive: true });
  writeFileSync(p.handoff, `${JSON.stringify(handoff, null, 2)}\n`);

  return {
    wrote: p.handoff,
    runs: runs.length,
    engines: engines.map((e) => e.id),
    samples,
    precisionNote:
      samples < 10
        ? `At ${samples} samples the 95% interval will be roughly ±${Math.round(precision(Math.round(samples / 2), samples) * 50)} points. Enough to tell "never" from "usually", not enough to track small moves.`
        : null,
  };
}

// ----------------------------------------------------------------- record

function cmdRecord(root, opts) {
  const p = paths(root);
  if (!existsSync(p.handoff)) throw new Error(`No handoff at ${p.handoff}. Run \`plan\` first.`);
  const handoff = JSON.parse(readFileSync(p.handoff, 'utf8'));

  const pending = handoff.runs.filter((r) => !r.response || !String(r.response).trim());
  if (pending.length) {
    throw new Error(
      `${pending.length} of ${handoff.runs.length} runs have no response yet (first: ${pending[0].id}). ` +
        'Fill every response in the handoff before recording — a partial run produces a baseline that cannot be compared against later.'
    );
  }

  const identity = {
    name: handoff.repo.name,
    aliases: handoff.repo.aliases || [],
    url: handoff.repo.url,
    package: handoff.repo.package,
  };
  const excludeFromCandidates = [identity.name, ...(identity.aliases || [])];

  const scored = handoff.runs.map((r) => ({
    ...r,
    detection: detectMention(r.response, identity),
    candidates: extractCandidates(r.response, { watch: handoff.watch || [], exclude: excludeFromCandidates }),
  }));

  const agg = aggregate(scored);
  const needsReview = scored.filter((r) => r.detection.needsReview);

  const baseline = {
    version: VERSION,
    sampledAt: new Date().toISOString(),
    repo: handoff.repo,
    engines: handoff.engines,
    samplesPerQuery: handoff.samplesPerQuery,
    nameRisk: assessName(identity.name),
    results: agg.results.map((r) => ({
      ...r,
      intent: handoff.runs.find((x) => x.queryId === r.queryId)?.intent || null,
    })),
    overall: agg.overall,
    shareOfVoice: agg.shareOfVoice,
    review: needsReview.map((r) => ({ id: r.id, reason: 'name match is ambiguous', matches: r.detection.matches })),
  };

  baselineStore.write(p.baseline, baseline);
  const archived = baselineStore.archive(p.archive, baseline);

  return {
    wrote: p.baseline,
    archived,
    baseline,
    suggestedSamples: samplesNeeded(agg.overall.rate),
  };
}

// ------------------------------------------------------------------- diff

function cmdDiff(root) {
  const p = paths(root);
  const archived = baselineStore.listArchived(p.archive);
  if (archived.length < 2) {
    throw new Error(
      `Need two recorded runs to diff; found ${archived.length}. The second run is where this tool starts being worth anything — run \`plan\` and \`record\` again after making changes.`
    );
  }
  const before = baselineStore.read(archived[archived.length - 2]);
  const after = baselineStore.read(archived[archived.length - 1]);
  return baselineStore.diff(before, after);
}

// ----------------------------------------------------------------- status

function cmdStatus(root) {
  const p = paths(root);
  const has = (f) => existsSync(f);
  const archived = baselineStore.listArchived(p.archive);
  let pending = null;
  if (has(p.handoff)) {
    const h = JSON.parse(readFileSync(p.handoff, 'utf8'));
    pending = h.runs.filter((r) => !r.response || !String(r.response).trim()).length;
  }
  return {
    queries: has(p.queries),
    handoff: has(p.handoff),
    pendingRuns: pending,
    baseline: has(p.baseline),
    archivedRuns: archived.length,
    canDiff: archived.length >= 2,
    next: !has(p.queries)
      ? 'run: probe.mjs init'
      : !has(p.handoff)
        ? 'run: probe.mjs plan'
        : pending > 0
          ? `fill ${pending} response(s) in .reporise/handoff.json, then: probe.mjs record`
          : !has(p.baseline)
            ? 'run: probe.mjs record'
            : archived.length < 2
              ? 'make changes, then plan + record again to get a diff'
              : 'run: probe.mjs diff',
  };
}

// ------------------------------------------------------------------- main

function render(command, out) {
  const lines = [];
  if (command === 'init') {
    lines.push(`Wrote ${out.wrote}`);
    lines.push('');
    lines.push('Next: edit that file. Every <placeholder> must be replaced with your real');
    lines.push('category, competitors and tasks — the probe refuses to run on templates.');
    lines.push('Add known competitors to "watch" so they are matched reliably rather than');
    lines.push('inferred from prose.');
    if (out.nameRisk.risk !== 'low') {
      lines.push('');
      lines.push(`Warning: project name "${out.template.repo.name}" is ${out.nameRisk.risk}-risk for detection (${out.nameRisk.why}).`);
      lines.push('Mentions matched only by name will be flagged for review rather than counted.');
    }
  } else if (command === 'plan') {
    lines.push(`Wrote ${out.wrote} — ${out.runs} runs across ${out.engines.join(', ')} at ${out.samples} samples per query.`);
    lines.push('');
    lines.push('Each run must be a fresh, independent request. Reusing a conversation');
    lines.push('contaminates later samples with earlier answers.');
    if (out.precisionNote) {
      lines.push('');
      lines.push(out.precisionNote);
    }
  } else if (command === 'record') {
    const b = out.baseline;
    const pct = (x) => (x === null ? 'n/a' : `${Math.round(x * 100)}%`);
    lines.push(`Overall mention rate: ${pct(b.overall.rate)} (${b.overall.mentions}/${b.overall.samples} samples)`);
    lines.push(`95% interval: ${pct(b.overall.ci95[0])}–${pct(b.overall.ci95[1])}`);
    lines.push('');
    for (const r of b.results) {
      lines.push(`  ${r.mentions}/${r.samples}  ${pct(r.rate).padStart(4)}  [${pct(r.ci95[0])}–${pct(r.ci95[1])}]  ${r.query}`);
    }
    if (b.shareOfVoice.length) {
      lines.push('');
      lines.push('Cited instead of you:');
      for (const c of b.shareOfVoice.slice(0, 10)) {
        lines.push(`  ${String(c.appearances).padStart(3)}x  ${c.name}${c.source === 'inferred' ? '  (inferred — verify)' : ''}`);
      }
    }
    if (b.review.length) {
      lines.push('');
      lines.push(`${b.review.length} match(es) flagged for review: the project name is ambiguous enough that a text match may be coincidental.`);
    }
    if (out.suggestedSamples && out.suggestedSamples > b.samplesPerQuery) {
      lines.push('');
      lines.push(`At the observed rate, ~${out.suggestedSamples} samples per query would narrow the interval to ±15 points.`);
    }
    lines.push('');
    lines.push(`Archived to ${out.archived}`);
  } else if (command === 'diff') {
    const pct = (x) => (x === null ? 'n/a' : `${Math.round(x * 100)}%`);
    lines.push(`${out.from} → ${out.to}`);
    lines.push('');
    lines.push(`Overall: ${pct(out.overall.before.rate)} → ${pct(out.overall.after.rate)}  [${out.overall.kind}]`);
    if (out.overall.kind === 'noise') lines.push('  Intervals overlap. This is not a measurable change.');
    lines.push('');
    for (const c of out.changes) {
      const tag = c.kind === 'noise' ? 'noise ' : c.kind === 'improved' ? '  up  ' : c.kind === 'declined' ? ' down ' : ` ${c.kind} `;
      lines.push(`  [${tag}] ${c.query}`);
      if (c.before && c.after) lines.push(`            ${c.before.mentions}/${c.before.samples} → ${c.after.mentions}/${c.after.samples}`);
    }
    if (out.shareOfVoice.length) {
      lines.push('');
      lines.push('Share of voice movement:');
      for (const v of out.shareOfVoice.slice(0, 10)) {
        lines.push(`  ${v.delta > 0 ? '+' : ''}${v.delta}  ${v.name}  (${v.before} → ${v.after})`);
      }
    }
  } else if (command === 'status') {
    lines.push(`queries.json   ${out.queries ? 'yes' : 'no'}`);
    lines.push(`handoff.json   ${out.handoff ? `yes (${out.pendingRuns} pending)` : 'no'}`);
    lines.push(`baseline.json  ${out.baseline ? 'yes' : 'no'}`);
    lines.push(`archived runs  ${out.archivedRuns}`);
    lines.push('');
    lines.push(`Next: ${out.next}`);
  }
  return lines.join('\n');
}

function main() {
  let opts;
  try {
    opts = parseArgs(process.argv.slice(2));
  } catch (err) {
    process.stderr.write(`${err.message}\n\n${HELP}\n`);
    process.exit(2);
  }

  if (opts.version) {
    process.stdout.write(`${VERSION}\n`);
    return;
  }

  if (opts.help || !opts.command) {
    process.stdout.write(`${HELP}\n`);
    return;
  }

  const root = resolve(opts.path);
  let config = {};
  const configPath = join(root, 'reporise.config.json');
  if (existsSync(configPath)) {
    try {
      config = loadConfig(JSON.parse(readFileSync(configPath, 'utf8')));
    } catch (err) {
      process.stderr.write(`reporise: ${err.message}\n`);
      process.exit(2);
    }
  } else {
    config = loadConfig({});
  }

  let out;
  try {
    if (opts.command === 'init') out = cmdInit(root, opts);
    else if (opts.command === 'plan') out = cmdPlan(root, opts, config);
    else if (opts.command === 'record') out = cmdRecord(root, opts);
    else if (opts.command === 'diff') out = cmdDiff(root);
    else if (opts.command === 'status') out = cmdStatus(root);
    else throw new Error(`Unknown command "${opts.command}". Valid: init, plan, record, diff, status.`);
  } catch (err) {
    process.stderr.write(`reporise: ${err.message}\n`);
    process.exit(2);
  }

  if (opts.showTelemetry) {
    const b = out.baseline || (existsSync(paths(root).baseline) ? baselineStore.read(paths(root).baseline) : null);
    process.stdout.write(`${describeTelemetry()}\n\nenabled: ${TELEMETRY_ENABLED}\n\n`);
    if (b) process.stdout.write(`${JSON.stringify(buildPayload(b), null, 2)}\n`);
    return;
  }

  process.stdout.write(opts.json ? `${JSON.stringify(out, null, 2)}\n` : `${render(opts.command, out)}\n`);
}

// Compare resolved URLs, not filename suffixes: a sibling file named
// test-probe.mjs would satisfy an endsWith() check and run main() on import.
const invokedDirectly = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (invokedDirectly) main();

export { cmdInit, cmdPlan, cmdRecord, cmdDiff, cmdStatus };
