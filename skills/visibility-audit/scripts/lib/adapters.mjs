/**
 * adapters.mjs — the two pluggable seams in RepoRise.
 *
 * Design principle: RepoRise ships working with zero API keys and gets better
 * when you add them. Both seams therefore have a default that needs no
 * credentials, and optional drivers that do.
 *
 *   FETCH adapters  — how networked skills gather evidence from the open web.
 *   ENGINE adapters — which generative engines `citation-probe` samples.
 *
 * `visibility-audit` uses neither. It is fully offline by design, so the free
 * path through the plugin never touches this file.
 *
 * Two driver kinds exist, and the difference matters:
 *
 *   kind: 'agent' — the driver has no Node implementation. The skill instructs
 *     Claude to perform the calls with its own tools (WebSearch / WebFetch)
 *     and write results to a handoff file the scripts then read. This is how
 *     the default works with no key: the agent IS the network layer.
 *
 *   kind: 'http'  — the driver calls an API directly from Node using a key
 *     from the environment. Deterministic, scriptable, CI-friendly, paid.
 *
 * v0.1.0 implements the agent defaults and declares the http drivers without
 * implementing them. They are marked `implemented: false` and resolving one
 * throws a clear error rather than silently degrading — a networked skill that
 * quietly returns nothing is worse than one that refuses to start.
 */

export const FETCH_DRIVERS = {
  websearch: {
    id: 'websearch',
    kind: 'agent',
    implemented: true,
    label: "Claude Code's built-in WebSearch / WebFetch",
    requires: [],
    notes: 'Default. No key, no install. The skill drives the searches and writes findings to the handoff file.',
  },
  exa: {
    id: 'exa',
    kind: 'http',
    implemented: false,
    label: 'Exa neural search',
    requires: ['EXA_API_KEY'],
    notes: 'Better recall for "pages semantically near this category" than keyword search. Planned for v0.2.0.',
  },
  firecrawl: {
    id: 'firecrawl',
    kind: 'http',
    implemented: false,
    label: 'Firecrawl scrape + crawl',
    requires: ['FIRECRAWL_API_KEY'],
    notes: 'Depth on known URLs. Useful for auditing a competitor docs site, not for discovery.',
  },
};

export const ENGINE_DRIVERS = {
  claude: {
    id: 'claude',
    kind: 'agent',
    implemented: true,
    label: 'Claude',
    requires: [],
    notes: 'Default. Sampled through the session itself, so no separate key is needed.',
  },
  chatgpt: {
    id: 'chatgpt',
    kind: 'http',
    implemented: false,
    label: 'ChatGPT',
    requires: ['OPENAI_API_KEY'],
    notes: 'Planned for v0.2.0.',
  },
  perplexity: {
    id: 'perplexity',
    kind: 'http',
    implemented: false,
    label: 'Perplexity',
    requires: ['PERPLEXITY_API_KEY'],
    notes: 'Planned for v0.2.0. Cites sources explicitly, so it is the highest-signal engine for citation work.',
  },
};

export const DEFAULT_CONFIG = {
  fetch: 'websearch',
  engines: ['claude'],
  samplesPerQuery: 3,
  handoffPath: '.reporise/handoff.json',
};

function resolveDriver(registry, id, seam) {
  const driver = registry[id];
  if (!driver) {
    throw new Error(`Unknown ${seam} driver "${id}". Available: ${Object.keys(registry).join(', ')}`);
  }
  if (!driver.implemented) {
    throw new Error(
      `The ${seam} driver "${id}" is declared but not implemented in this version (${driver.notes}). ` +
        `Use the default instead, or wait for the release that ships it.`
    );
  }
  const missing = (driver.requires || []).filter((k) => !process.env[k]);
  if (missing.length) {
    throw new Error(`Driver "${id}" needs ${missing.join(', ')} in the environment.`);
  }
  return driver;
}

export function resolveFetch(config = {}) {
  return resolveDriver(FETCH_DRIVERS, config.fetch || DEFAULT_CONFIG.fetch, 'fetch');
}

export function resolveEngines(config = {}) {
  const ids = config.engines && config.engines.length ? config.engines : DEFAULT_CONFIG.engines;
  return ids.map((id) => resolveDriver(ENGINE_DRIVERS, id, 'engine'));
}

/** Merge user config over defaults, rejecting unknown keys loudly. */
export function loadConfig(raw = {}) {
  const known = new Set(Object.keys(DEFAULT_CONFIG));
  const unknown = Object.keys(raw).filter((k) => !known.has(k));
  if (unknown.length) {
    throw new Error(`Unknown config key(s): ${unknown.join(', ')}. Valid keys: ${[...known].join(', ')}`);
  }
  return { ...DEFAULT_CONFIG, ...raw };
}
