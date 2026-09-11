/**
 * stats.mjs — small-sample honesty.
 *
 * A probe run at n=3 gives a mention rate of 0%, 33%, 67% or 100% and nothing
 * in between. Reporting "33%" as though it were a measurement is the single
 * easiest way to make this tool lie. Every rate is therefore returned with a
 * Wilson score interval, and any comparison between two runs is checked for
 * interval overlap before it is called a change.
 *
 * Wilson is used rather than the normal approximation because the normal
 * interval degenerates badly at small n and at rates near 0 or 1 — which is
 * exactly where this tool operates.
 */

const Z95 = 1.959964;

export function wilson(successes, trials, z = Z95) {
  if (trials === 0) return { lo: 0, hi: 1, point: null };
  const p = successes / trials;
  const z2 = z * z;
  const denom = 1 + z2 / trials;
  const centre = (p + z2 / (2 * trials)) / denom;
  const margin = (z / denom) * Math.sqrt((p * (1 - p)) / trials + z2 / (4 * trials * trials));
  return {
    point: p,
    lo: Math.max(0, centre - margin),
    hi: Math.min(1, centre + margin),
  };
}

/** Width of the 95% interval — the honest measure of how little n=3 tells you. */
export function precision(successes, trials) {
  const w = wilson(successes, trials);
  return w.hi - w.lo;
}

/**
 * How many samples to reach a target interval width at the observed rate.
 * Used to tell the user what a meaningful run would actually cost, instead of
 * letting them read three coin flips as a trend.
 */
export function samplesNeeded(observedRate, targetWidth = 0.3) {
  const p = Math.min(Math.max(observedRate ?? 0.5, 0.05), 0.95);
  for (let n = 3; n <= 400; n += 1) {
    const w = wilson(Math.round(p * n), n);
    if (w.hi - w.lo <= targetWidth) return n;
  }
  return null;
}

export function aggregate(runs) {
  const byKey = new Map();
  for (const r of runs) {
    const key = `${r.queryId}::${r.engine}`;
    if (!byKey.has(key)) byKey.set(key, { queryId: r.queryId, query: r.query, engine: r.engine, samples: 0, mentions: 0, ambiguous: 0, competitors: new Map() });
    const g = byKey.get(key);
    g.samples += 1;
    if (r.detection.mentioned && r.detection.strength !== 'ambiguous') g.mentions += 1;
    if (r.detection.strength === 'ambiguous') g.ambiguous += 1;
    for (const c of r.candidates || []) {
      const prev = g.competitors.get(c.name.toLowerCase());
      if (prev) {
        prev.appearances += 1;
        if (c.source === 'watchlist') prev.source = 'watchlist';
      } else {
        g.competitors.set(c.name.toLowerCase(), { name: c.name, appearances: 1, source: c.source });
      }
    }
  }

  const results = [...byKey.values()].map((g) => {
    const ci = wilson(g.mentions, g.samples);
    return {
      queryId: g.queryId,
      query: g.query,
      engine: g.engine,
      samples: g.samples,
      mentions: g.mentions,
      ambiguous: g.ambiguous,
      rate: ci.point,
      ci95: [Number(ci.lo.toFixed(3)), Number(ci.hi.toFixed(3))],
      intervalWidth: Number((ci.hi - ci.lo).toFixed(3)),
      competitors: [...g.competitors.values()].sort((a, b) => b.appearances - a.appearances || a.name.localeCompare(b.name)),
    };
  });

  const totalSamples = results.reduce((s, r) => s + r.samples, 0);
  const totalMentions = results.reduce((s, r) => s + r.mentions, 0);
  const overallCi = wilson(totalMentions, totalSamples);

  // Share of voice across every sample, not per query — this is the number
  // that tends to move first when placement work starts to land.
  const voice = new Map();
  for (const r of results) {
    for (const c of r.competitors) {
      const prev = voice.get(c.name.toLowerCase());
      if (prev) prev.appearances += c.appearances;
      else voice.set(c.name.toLowerCase(), { name: c.name, appearances: c.appearances, source: c.source });
    }
  }

  return {
    results,
    overall: {
      samples: totalSamples,
      mentions: totalMentions,
      rate: overallCi.point,
      ci95: [Number(overallCi.lo.toFixed(3)), Number(overallCi.hi.toFixed(3))],
      intervalWidth: Number((overallCi.hi - overallCi.lo).toFixed(3)),
    },
    shareOfVoice: [...voice.values()].sort((a, b) => b.appearances - a.appearances || a.name.localeCompare(b.name)),
  };
}

/** Two rates differ meaningfully only if their intervals do not overlap. */
export function distinguishable(a, b) {
  const ca = wilson(a.mentions, a.samples);
  const cb = wilson(b.mentions, b.samples);
  return ca.hi < cb.lo || cb.hi < ca.lo;
}
