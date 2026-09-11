/**
 * detect.mjs — did the answer name us, and who did it name instead?
 *
 * Two jobs with very different reliability, kept separate for that reason:
 *
 *   detectMention()    — high confidence. Matching a known string.
 *   extractCandidates() — low confidence. Guessing at product names in prose.
 *
 * The second is explicitly labelled as candidate extraction, not extraction.
 * Its output is a list to review, never a finding to report. A probe that
 * confidently misidentifies a competitor is worse than one that returns
 * nothing, because the whole point of the baseline is that you can trust the
 * numbers later when they move.
 */

const COMMON_WORDS = new Set([
  'go', 'rust', 'next', 'node', 'react', 'vue', 'swift', 'dart', 'ruby', 'gem', 'pip', 'npm',
  'test', 'build', 'core', 'base', 'api', 'cli', 'app', 'web', 'data', 'flow', 'link', 'sync',
]);

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * A name is ambiguous if a word-boundary match against it would plausibly hit
 * unrelated prose. Short names and dictionary words are the risk. When a name
 * is ambiguous the caller should require a stronger signal (URL or package
 * name) before counting a mention.
 */
export function assessName(name) {
  const n = name.trim();
  const lower = n.toLowerCase();
  if (n.length <= 3) return { risk: 'high', why: 'name is 3 characters or fewer' };
  if (COMMON_WORDS.has(lower)) return { risk: 'high', why: 'name is a common technical word' };
  if (/^[a-z]+$/.test(lower) && n.length <= 5) return { risk: 'medium', why: 'short single dictionary-shaped word' };
  return { risk: 'low', why: null };
}

/**
 * @param {string} response  the engine's answer text
 * @param {object} identity  { name, aliases[], url, package }
 */
export function detectMention(response, identity) {
  if (!response || !response.trim()) return { mentioned: false, matches: [], strength: 'none' };

  const text = response;
  const matches = [];

  // Strongest signals first: a URL or a package specifier is unambiguous.
  if (identity.url) {
    const path = identity.url.replace(/^.*github\.com[/:]/i, '').replace(/\.git$/, '');
    if (path && path.includes('/') && new RegExp(escapeRe(path), 'i').test(text)) {
      matches.push({ kind: 'url', value: path });
    }
  }
  if (identity.package) {
    const re = new RegExp(`(?:npm\\s+i(?:nstall)?|pip\\s+install|cargo\\s+add|yarn\\s+add|@)\\s*${escapeRe(identity.package)}\\b`, 'i');
    if (re.test(text)) matches.push({ kind: 'package', value: identity.package });
  }

  const names = [identity.name, ...(identity.aliases || [])].filter(Boolean);
  for (const name of names) {
    const re = new RegExp(`(?<![\\w-])${escapeRe(name)}(?![\\w-])`, 'i');
    if (re.test(text)) {
      matches.push({ kind: 'name', value: name, ambiguity: assessName(name).risk });
    }
  }

  const strong = matches.some((m) => m.kind === 'url' || m.kind === 'package');
  const cleanName = matches.some((m) => m.kind === 'name' && m.ambiguity === 'low');
  const riskyName = matches.some((m) => m.kind === 'name' && m.ambiguity !== 'low');

  let strength = 'none';
  if (strong) strength = 'strong';
  else if (cleanName) strength = 'clear';
  else if (riskyName) strength = 'ambiguous';

  return {
    mentioned: matches.length > 0,
    matches,
    strength,
    // An ambiguous-only match is reported but should be reviewed before it is
    // counted as a win. The caller decides; this module just labels it.
    needsReview: strength === 'ambiguous',
  };
}

/**
 * Pull likely product names out of an answer. Watchlist hits are reliable;
 * everything else is a guess and is labelled as one.
 */
export function extractCandidates(response, { watch = [], exclude = [] } = {}) {
  if (!response) return [];
  const found = new Map();
  const excludeSet = new Set(exclude.filter(Boolean).map((s) => s.toLowerCase()));

  const add = (name, source) => {
    const key = name.toLowerCase();
    if (excludeSet.has(key)) return;
    if (COMMON_WORDS.has(key)) return;
    if (name.length < 3) return;
    const prev = found.get(key);
    // A watchlist hit always wins over an inferred one for the same string.
    if (prev) {
      prev.count += 1;
      if (source === 'watchlist') prev.source = 'watchlist';
      return;
    }
    found.set(key, { name, count: 1, source });
  };

  for (const w of watch) {
    const re = new RegExp(`(?<![\\w-])${escapeRe(w)}(?![\\w-])`, 'gi');
    const hits = response.match(re);
    if (hits) for (let i = 0; i < hits.length; i += 1) add(w, 'watchlist');
  }

  // Inferred: bolded names, backticked identifiers, and list-item leads. These
  // are the three places a recommendation answer actually puts a tool name.
  const patterns = [
    /\*\*([A-Za-z][\w.\-/]{2,30})\*\*/g,
    /`([a-z][\w.\-/@]{2,30})`/g,
    /^\s*(?:[-*]|\d+\.)\s+\*{0,2}([A-Z][\w.\-]{2,30})\*{0,2}\s*[—–:-]/gm,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(response)) !== null) add(m[1], 'inferred');
  }

  return [...found.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
