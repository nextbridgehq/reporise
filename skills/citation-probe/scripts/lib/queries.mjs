/**
 * queries.mjs — the query list is user-authored, on purpose.
 *
 * v0.1.0 does not discover queries; that is `category-profile`'s job. Asking
 * the maintainer to write five queries by hand costs them two minutes and
 * produces a better list than inference would, because they know what their
 * users actually ask. It also keeps the probe honest: every query in the file
 * is one a human chose, so a bad result cannot be blamed on a bad guess.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

export const INTENTS = ['recommendation', 'comparative', 'task', 'troubleshooting'];

/**
 * Query shapes that actually surface tools in generative answers. Written as
 * templates rather than finished queries so the maintainer has to fill in the
 * category noun — the act of choosing that noun is most of the value.
 */
const TEMPLATES = [
  { text: 'best <category> for <use case>', intent: 'recommendation', note: 'The core category query. If you appear nowhere else, appear here.' },
  { text: 'what should I use to <task>', intent: 'task', note: 'Task-phrased, no category noun. Catches users who do not know the category exists.' },
  { text: '<competitor> alternatives', intent: 'comparative', note: 'Highest-intent query in the set. Someone is already leaving a competitor.' },
  { text: '<your name> vs <competitor>', intent: 'comparative', note: 'Tests whether engines know you well enough to compare you.' },
  { text: 'how do I <specific thing your tool does>', intent: 'task', note: 'Narrow, low-competition, high conversion.' },
];

export function templateFor(signals) {
  const name = signals.manifest?.name || signals.repo.dirName || 'your-project';
  const url = signals.repo.originUrl || null;
  return {
    version: '0.1.0',
    repo: {
      name,
      aliases: [],
      url,
      package: signals.manifest?.name || null,
    },
    watch: [],
    queries: TEMPLATES.map((t, i) => ({
      id: `q${i + 1}`,
      text: t.text,
      intent: t.intent,
      _note: t.note,
    })),
  };
}

function fail(msg) {
  throw new Error(`queries.json: ${msg}`);
}

export function validate(q) {
  if (!q || typeof q !== 'object') fail('not an object');
  if (!q.repo || !q.repo.name) fail('repo.name is required — the probe cannot detect a mention without knowing what to look for');
  if (!Array.isArray(q.queries) || q.queries.length === 0) fail('at least one query is required');

  const unfilled = q.queries.filter((x) => /<[^>]+>/.test(x.text));
  if (unfilled.length) {
    fail(
      `${unfilled.length} query template(s) still contain placeholders: ${unfilled
        .map((x) => `"${x.text}"`)
        .join(', ')}. Replace the <angle brackets> with your real category and competitors before probing.`
    );
  }

  const ids = new Set();
  for (const item of q.queries) {
    if (!item.id) fail('every query needs an id');
    if (ids.has(item.id)) fail(`duplicate query id "${item.id}"`);
    ids.add(item.id);
    if (!item.text || item.text.trim().length < 8) fail(`query "${item.id}" is too short to be a real query`);
    if (item.intent && !INTENTS.includes(item.intent)) fail(`query "${item.id}" has unknown intent "${item.intent}" (valid: ${INTENTS.join(', ')})`);
  }

  if (!Array.isArray(q.watch)) q.watch = [];
  if (!Array.isArray(q.repo.aliases)) q.repo.aliases = [];
  return q;
}

export function load(path) {
  if (!existsSync(path)) {
    throw new Error(`No query list at ${path}. Run \`probe.mjs init\` first, then edit the file — the templates contain placeholders you need to fill in.`);
  }
  let parsed;
  try {
    parsed = JSON.parse(readFileSync(path, 'utf8'));
  } catch (err) {
    throw new Error(`Could not parse ${path}: ${err.message}`);
  }
  return validate(parsed);
}

export function save(path, data) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`);
}

export { join };
