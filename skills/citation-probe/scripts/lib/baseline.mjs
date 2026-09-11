/**
 * baseline.mjs — persistence and comparison for probe results.
 *
 * The diff is the reason the probe is worth running twice, so it is built to
 * resist the failure mode that would make it useless: reporting noise as
 * movement. Every per-query comparison is checked for interval overlap, and
 * anything that overlaps is reported as indistinguishable rather than as a
 * small change.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { distinguishable } from './stats.mjs';

export function write(path, baseline) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(baseline, null, 2)}\n`);
}

export function read(path) {
  if (!existsSync(path)) throw new Error(`No baseline at ${path}`);
  return JSON.parse(readFileSync(path, 'utf8'));
}

/** Baselines are archived by timestamp so a diff always has something to compare against. */
export function archive(dir, baseline) {
  mkdirSync(dir, { recursive: true });
  const stamp = baseline.sampledAt.replace(/[:.]/g, '-');
  const path = join(dir, `baseline-${stamp}.json`);
  writeFileSync(path, `${JSON.stringify(baseline, null, 2)}\n`);
  return path;
}

export function listArchived(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => /^baseline-.*\.json$/.test(f))
    .sort()
    .map((f) => join(dir, f));
}

export function diff(before, after) {
  const beforeByKey = new Map(before.results.map((r) => [`${r.queryId}::${r.engine}`, r]));
  const changes = [];

  for (const b of after.results) {
    const key = `${b.queryId}::${b.engine}`;
    const a = beforeByKey.get(key);
    if (!a) {
      changes.push({ queryId: b.queryId, query: b.query, engine: b.engine, kind: 'new', after: b });
      continue;
    }
    const moved = distinguishable(a, b);
    const delta = (b.rate ?? 0) - (a.rate ?? 0);
    changes.push({
      queryId: b.queryId,
      query: b.query,
      engine: b.engine,
      kind: moved ? (delta > 0 ? 'improved' : 'declined') : 'noise',
      delta: Number(delta.toFixed(3)),
      before: { mentions: a.mentions, samples: a.samples, rate: a.rate, ci95: a.ci95 },
      after: { mentions: b.mentions, samples: b.samples, rate: b.rate, ci95: b.ci95 },
    });
  }

  for (const [key, a] of beforeByKey) {
    if (!after.results.some((r) => `${r.queryId}::${r.engine}` === key)) {
      changes.push({ queryId: a.queryId, query: a.query, engine: a.engine, kind: 'removed', before: a });
    }
  }

  const voiceBefore = new Map((before.shareOfVoice || []).map((c) => [c.name.toLowerCase(), c.appearances]));
  const voiceAfter = new Map((after.shareOfVoice || []).map((c) => [c.name.toLowerCase(), c.appearances]));
  const voiceChanges = [];
  for (const [name, appearances] of voiceAfter) {
    const prev = voiceBefore.get(name) || 0;
    if (appearances !== prev) voiceChanges.push({ name, before: prev, after: appearances, delta: appearances - prev });
  }
  for (const [name, appearances] of voiceBefore) {
    if (!voiceAfter.has(name)) voiceChanges.push({ name, before: appearances, after: 0, delta: -appearances });
  }

  const overallMoved = distinguishable(before.overall, after.overall);

  return {
    from: before.sampledAt,
    to: after.sampledAt,
    overall: {
      before: { mentions: before.overall.mentions, samples: before.overall.samples, rate: before.overall.rate, ci95: before.overall.ci95 },
      after: { mentions: after.overall.mentions, samples: after.overall.samples, rate: after.overall.rate, ci95: after.overall.ci95 },
      kind: overallMoved ? ((after.overall.rate ?? 0) > (before.overall.rate ?? 0) ? 'improved' : 'declined') : 'noise',
    },
    changes: changes.sort((a, b) => Math.abs(b.delta ?? 0) - Math.abs(a.delta ?? 0)),
    shareOfVoice: voiceChanges.sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta)),
  };
}
