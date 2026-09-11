#!/usr/bin/env node
/**
 * test-probe.mjs — tests for the citation probe.
 *
 * The probe measures something non-deterministic, so the tests focus on the
 * parts that must be deterministic: detection, small-sample statistics, the
 * refusal to score a partial run, and the refusal to call noise a change.
 */

import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { cmdInit, cmdPlan, cmdRecord, cmdDiff, cmdStatus } from './probe.mjs';
import { detectMention, extractCandidates, assessName } from './lib/detect.mjs';
import { wilson, samplesNeeded, distinguishable, aggregate } from './lib/stats.mjs';
import { buildPayload, TELEMETRY_ENABLED, send } from './lib/telemetry.mjs';
import { loadConfig } from './lib/adapters.mjs';

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed += 1;
    process.stdout.write(`  ✓ ${name}\n`);
  } catch (err) {
    failed += 1;
    process.stdout.write(`  ✗ ${name}\n    ${err.message}\n`);
  }
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg || 'assertion failed');
}

function throws(fn, pattern, msg) {
  try {
    fn();
  } catch (err) {
    if (pattern && !pattern.test(err.message)) throw new Error(`${msg || 'wrong error'}: ${err.message}`);
    return;
  }
  throw new Error(msg || 'expected a throw');
}

const cleanup = [];
function repo(files = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'reporise-probe-'));
  cleanup.push(dir);
  for (const [rel, content] of Object.entries(files)) {
    const full = join(dir, rel);
    mkdirSync(join(full, '..'), { recursive: true });
    writeFileSync(full, typeof content === 'string' ? content : JSON.stringify(content, null, 2));
  }
  return dir;
}

const PKG = {
  'package.json': { name: 'loopguard', version: '1.0.0', description: 'Loop detection for LLM agents.' },
  'README.md': '# Loopguard\n\nLoopguard is a loop-detection library for LLM agents.\n',
};

/** Fill every response in a handoff with the supplied text (or per-index texts). */
function fillHandoff(dir, textOrFn) {
  const p = join(dir, '.reporise', 'handoff.json');
  const h = JSON.parse(readFileSync(p, 'utf8'));
  h.runs = h.runs.map((r, i) => ({ ...r, response: typeof textOrFn === 'function' ? textOrFn(r, i) : textOrFn }));
  writeFileSync(p, JSON.stringify(h, null, 2));
  return h;
}

function realQueries(dir, extra = {}) {
  const p = join(dir, '.reporise', 'queries.json');
  const q = JSON.parse(readFileSync(p, 'utf8'));
  q.queries = [
    { id: 'q1', text: 'best loop detection library for LLM agents', intent: 'recommendation' },
    { id: 'q2', text: 'how do I stop an agent from looping forever', intent: 'task' },
  ];
  q.watch = ['AgentOps', 'Langfuse'];
  Object.assign(q, extra);
  writeFileSync(p, JSON.stringify(q, null, 2));
  return q;
}

// -------------------------------------------------------------- detection

process.stdout.write('\ndetection\n');

test('exact name match is detected as a clear mention', () => {
  const d = detectMention('You could try Loopguard for this.', { name: 'loopguard', aliases: [], url: null, package: null });
  assert(d.mentioned && d.strength === 'clear', `got ${d.strength}`);
});

test('substring inside a longer word is not a match', () => {
  const d = detectMention('The loopguardian pattern is unrelated.', { name: 'loopguard', aliases: [] });
  assert(!d.mentioned, 'word-boundary matching failed');
});

test('a GitHub path counts as a strong match', () => {
  const d = detectMention('See https://github.com/nextbridgehq/loopguard for details.', {
    name: 'somethingelse',
    aliases: [],
    url: 'https://github.com/nextbridgehq/loopguard.git',
  });
  assert(d.strength === 'strong', `got ${d.strength}`);
});

test('an install command counts as a strong match', () => {
  const d = detectMention('Run `npm install loopguard` to get started.', { name: 'zzz', aliases: [], package: 'loopguard' });
  assert(d.strength === 'strong', `got ${d.strength}`);
});

test('ambiguous names are flagged for review rather than counted', () => {
  const d = detectMention('You should go and check the docs.', { name: 'go', aliases: [] });
  assert(d.mentioned, 'expected a raw match');
  assert(d.strength === 'ambiguous' && d.needsReview, 'expected the match to be flagged');
});

test('name risk is assessed before probing', () => {
  assert(assessName('go').risk === 'high');
  assert(assessName('next').risk === 'high');
  assert(assessName('loopguard').risk === 'low');
});

test('watchlist competitors are extracted reliably', () => {
  const c = extractCandidates('I would use Langfuse or AgentOps for this.', { watch: ['Langfuse', 'AgentOps'] });
  assert(c.length === 2, `got ${c.length}`);
  assert(c.every((x) => x.source === 'watchlist'), 'expected watchlist provenance');
});

test('inferred candidates are labelled as inferred', () => {
  const c = extractCandidates('1. **Helicone** — observability\n2. **Braintrust** — evals', { watch: [] });
  assert(c.length >= 2, `got ${c.length}`);
  assert(c.every((x) => x.source === 'inferred'), 'expected inferred provenance');
});

test('our own name is excluded from competitor candidates', () => {
  const c = extractCandidates('**Loopguard** is one option, **Langfuse** another.', { watch: [], exclude: ['Loopguard'] });
  assert(!c.some((x) => x.name.toLowerCase() === 'loopguard'), 'self should not be a competitor');
});

// ------------------------------------------------------------------ stats

process.stdout.write('\nstatistics\n');

test('wilson interval is wide at n=3 and narrows as n grows', () => {
  const small = wilson(1, 3);
  const large = wilson(100, 300);
  assert(small.hi - small.lo > 0.6, `expected a wide interval, got ${small.hi - small.lo}`);
  assert(large.hi - large.lo < 0.12, `expected a narrow interval, got ${large.hi - large.lo}`);
});

test('wilson stays inside [0,1] at the extremes', () => {
  const zero = wilson(0, 3);
  const all = wilson(3, 3);
  assert(zero.lo >= 0 && zero.hi <= 1 && all.lo >= 0 && all.hi <= 1);
  assert(zero.hi < 1, '0/3 should not imply certainty of never');
  assert(all.lo > 0, '3/3 should not imply certainty of always');
});

test('samplesNeeded recommends more than 3 for a usable interval', () => {
  assert(samplesNeeded(0.33, 0.3) > 3);
});

test('overlapping intervals are not distinguishable', () => {
  assert(!distinguishable({ mentions: 1, samples: 3 }, { mentions: 2, samples: 3 }), '1/3 vs 2/3 is noise');
});

test('clearly separated rates are distinguishable', () => {
  assert(distinguishable({ mentions: 0, samples: 40 }, { mentions: 35, samples: 40 }));
});

test('aggregate groups by query and engine and counts mentions', () => {
  const runs = [
    { queryId: 'q1', query: 'x', engine: 'claude', detection: { mentioned: true, strength: 'clear' }, candidates: [{ name: 'Rival', source: 'watchlist' }] },
    { queryId: 'q1', query: 'x', engine: 'claude', detection: { mentioned: false, strength: 'none' }, candidates: [{ name: 'Rival', source: 'watchlist' }] },
  ];
  const a = aggregate(runs);
  assert(a.results.length === 1 && a.results[0].samples === 2 && a.results[0].mentions === 1);
  assert(a.shareOfVoice[0].appearances === 2, 'competitor appearances should accumulate');
});

test('ambiguous matches are excluded from the mention count', () => {
  const runs = [{ queryId: 'q1', query: 'x', engine: 'claude', detection: { mentioned: true, strength: 'ambiguous' }, candidates: [] }];
  const a = aggregate(runs);
  assert(a.results[0].mentions === 0 && a.results[0].ambiguous === 1, 'ambiguous should not inflate the rate');
});

// --------------------------------------------------------------- pipeline

process.stdout.write('\npipeline\n');

test('init writes a template with placeholders', () => {
  const dir = repo(PKG);
  const out = cmdInit(dir, {});
  const q = JSON.parse(readFileSync(out.wrote, 'utf8'));
  assert(q.queries.some((x) => /<.+>/.test(x.text)), 'expected placeholder templates');
  assert(q.repo.name === 'loopguard');
});

test('init refuses to overwrite without --force', () => {
  const dir = repo(PKG);
  cmdInit(dir, {});
  throws(() => cmdInit(dir, {}), /already exists/, 'should not clobber edited queries');
});

test('plan refuses to run on unedited placeholder templates', () => {
  const dir = repo(PKG);
  cmdInit(dir, {});
  throws(() => cmdPlan(dir, {}, loadConfig({})), /placeholder/i, 'templates must be filled in first');
});

test('plan expands queries x engines x samples', () => {
  const dir = repo(PKG);
  cmdInit(dir, {});
  realQueries(dir);
  const out = cmdPlan(dir, { samples: 3 }, loadConfig({}));
  assert(out.runs === 6, `expected 2 queries x 1 engine x 3 samples = 6, got ${out.runs}`);
});

test('plan refuses to clobber an unrecorded handoff', () => {
  const dir = repo(PKG);
  cmdInit(dir, {});
  realQueries(dir);
  cmdPlan(dir, { samples: 3 }, loadConfig({}));
  throws(() => cmdPlan(dir, { samples: 3 }, loadConfig({})), /already exists/);
});

test('record refuses a partially filled handoff', () => {
  const dir = repo(PKG);
  cmdInit(dir, {});
  realQueries(dir);
  cmdPlan(dir, { samples: 3 }, loadConfig({}));
  const p = join(dir, '.reporise', 'handoff.json');
  const h = JSON.parse(readFileSync(p, 'utf8'));
  h.runs[0].response = 'Try Loopguard.';
  writeFileSync(p, JSON.stringify(h, null, 2));
  throws(() => cmdRecord(dir, {}), /no response yet/, 'partial runs must not be scored');
});

test('record scores a full handoff and archives the baseline', () => {
  const dir = repo(PKG);
  cmdInit(dir, {});
  realQueries(dir);
  cmdPlan(dir, { samples: 3 }, loadConfig({}));
  fillHandoff(dir, (r, i) => (i % 3 === 0 ? 'You could use Loopguard for that.' : 'I would recommend Langfuse or AgentOps.'));
  const out = cmdRecord(dir, {});
  assert(out.baseline.overall.samples === 6);
  assert(out.baseline.overall.mentions === 2, `expected 2 mentions, got ${out.baseline.overall.mentions}`);
  assert(out.baseline.shareOfVoice.some((c) => c.name === 'Langfuse'));
  assert(out.archived.includes('baseline-'));
});

test('baseline carries an interval, never a bare rate', () => {
  const dir = repo(PKG);
  cmdInit(dir, {});
  realQueries(dir);
  cmdPlan(dir, { samples: 3 }, loadConfig({}));
  fillHandoff(dir, 'Try Langfuse.');
  const out = cmdRecord(dir, {});
  assert(Array.isArray(out.baseline.overall.ci95) && out.baseline.overall.ci95.length === 2);
  for (const r of out.baseline.results) assert(Array.isArray(r.ci95), 'every query result needs an interval');
});

test('diff needs two runs and says so plainly', () => {
  const dir = repo(PKG);
  cmdInit(dir, {});
  realQueries(dir);
  cmdPlan(dir, { samples: 3 }, loadConfig({}));
  fillHandoff(dir, 'Try Langfuse.');
  cmdRecord(dir, {});
  throws(() => cmdDiff(dir), /two recorded runs/);
});

function sleepMs(ms) { const end = Date.now() + ms; while (Date.now() < end) {} }

test('diff reports a small move as noise rather than progress', () => {
  const dir = repo(PKG);
  cmdInit(dir, {});
  realQueries(dir);
  cmdPlan(dir, { samples: 3 }, loadConfig({}));
  fillHandoff(dir, 'Try Langfuse.');
  cmdRecord(dir, {});
  sleepMs(2);
  cmdPlan(dir, { samples: 3, force: true }, loadConfig({}));
  fillHandoff(dir, (r, i) => (i === 0 ? 'Try Loopguard.' : 'Try Langfuse.'));
  cmdRecord(dir, {});
  const d = cmdDiff(dir);
  assert(d.overall.kind === 'noise', `1/6 vs 0/6 must not read as improvement, got ${d.overall.kind}`);
});

test('diff detects a real move when the sample supports it', () => {
  const dir = repo(PKG);
  cmdInit(dir, {});
  realQueries(dir);
  cmdPlan(dir, { samples: 30 }, loadConfig({}));
  fillHandoff(dir, 'Try Langfuse.');
  cmdRecord(dir, {});
  sleepMs(2);
  cmdPlan(dir, { samples: 30, force: true }, loadConfig({}));
  fillHandoff(dir, 'Try Loopguard.');
  cmdRecord(dir, {});
  const d = cmdDiff(dir);
  assert(d.overall.kind === 'improved', `expected improvement, got ${d.overall.kind}`);
});

test('status reports the correct next step at each stage', () => {
  const dir = repo(PKG);
  assert(/init/.test(cmdStatus(dir).next));
  cmdInit(dir, {});
  realQueries(dir);
  assert(/plan/.test(cmdStatus(dir).next));
  cmdPlan(dir, { samples: 3 }, loadConfig({}));
  assert(/fill 6/.test(cmdStatus(dir).next), cmdStatus(dir).next);
  fillHandoff(dir, 'Try Langfuse.');
  assert(/record/.test(cmdStatus(dir).next));
});

// -------------------------------------------------------------- telemetry

process.stdout.write('\ntelemetry\n');

test('telemetry is disabled and sending throws', () => {
  assert(TELEMETRY_ENABLED === false, 'telemetry must ship disabled');
  throws(() => send(), /not implemented/);
});

test('the payload excludes repo identity and mention results', () => {
  const dir = repo(PKG);
  cmdInit(dir, {});
  realQueries(dir);
  cmdPlan(dir, { samples: 3 }, loadConfig({}));
  fillHandoff(dir, 'Try Loopguard or Langfuse.');
  const { baseline } = cmdRecord(dir, {});
  const payload = JSON.stringify(buildPayload(baseline));
  assert(!/loopguard/i.test(payload), 'repo identity leaked into the telemetry payload');
  assert(!/mentions/.test(payload), 'mention results leaked into the telemetry payload');
  assert(/Langfuse/.test(payload), 'expected cited competitors to be present');
});

test('the payload carries only a coarse period, not a timestamp', () => {
  const p = buildPayload({ sampledAt: '2026-08-16T17:43:59.788Z', engines: ['claude'], results: [] });
  assert(p.period === '2026-08', `got ${p.period}`);
});

// ---------------------------------------------------------------- cleanup

for (const dir of cleanup) rmSync(dir, { recursive: true, force: true });

process.stdout.write(`\n${passed} passed, ${failed} failed\n`);
process.exit(failed ? 1 : 0);
