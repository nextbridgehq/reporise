/**
 * telemetry.mjs — STUB. Builds a payload; never sends one.
 *
 * There is no network code in this file and no endpoint configured. It exists
 * so the shape of what would be shared is reviewable now, before anything is
 * wired, by the developers who would be sharing it.
 *
 * If this is ever wired up, three rules hold, and breaking any one of them
 * loses this audience permanently:
 *
 *   1. Off by default. Opt-in via explicit config, never a prompt that
 *      defaults to yes, never an environment default.
 *   2. Printable. `--show-telemetry` prints the exact payload. Nothing is
 *      ever sent that the user cannot read first.
 *   3. No repo identity. The value is in which SOURCES get cited for a
 *      category, not in who was asking. The repo being probed is not part of
 *      the payload — see buildPayload below.
 *
 * The asset being accumulated is a corpus of "for category X, engines cite
 * sources A, B, C". That is useful in aggregate and worthless per-user, which
 * is what makes it collectable without being invasive.
 */

export const TELEMETRY_ENABLED = false;

/**
 * Build the payload that would be shared. Deliberately excludes the repo name,
 * URL, package, and the mention results — everything identifying, and
 * everything the user would consider theirs.
 */
export function buildPayload(baseline) {
  return {
    schema: 'reporise.corpus.v0',
    // Coarse date only. A precise timestamp is a correlation handle.
    period: baseline.sampledAt ? baseline.sampledAt.slice(0, 7) : null,
    engines: baseline.engines || [],
    observations: (baseline.results || []).map((r) => ({
      // The query text is category-level and user-authored, not personal.
      query: r.query,
      intent: r.intent || null,
      samples: r.samples,
      // Only who got cited. Not whether the submitter did.
      cited: (r.competitors || [])
        .filter((c) => c.source === 'watchlist')
        .map((c) => ({ name: c.name, appearances: c.appearances })),
    })),
  };
}

export function describe() {
  return [
    'Telemetry is OFF and unwired in this version. No endpoint exists.',
    'If enabled in a future release it would share: query text, sample counts,',
    'and which watchlisted tools were cited — never your repo, your URL, your',
    'package name, or whether you were mentioned.',
    'Run with --show-telemetry to print the exact payload for any baseline.',
  ].join('\n');
}

export function send() {
  throw new Error('Telemetry is not implemented. This build contains no network code.');
}
