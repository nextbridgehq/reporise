/**
 * collect.mjs — gathers raw, offline signals from a repository.
 *
 * Design rule: this module OBSERVES only. It never judges, scores, or
 * suggests. Checks live in checks.mjs and consume this output. Keeping the
 * two apart means a wrong verdict is always a bug in one place, and the raw
 * signal set stays reusable by later RepoRise skills.
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative, basename } from 'node:path';
import { execFileSync } from 'node:child_process';

const README_NAMES = ['README.md', 'readme.md', 'Readme.md', 'README.markdown', 'README.rst', 'README.txt', 'README'];
const LICENSE_NAMES = ['LICENSE', 'LICENSE.md', 'LICENSE.txt', 'LICENCE', 'LICENCE.md', 'COPYING'];
const CHANGELOG_NAMES = ['CHANGELOG.md', 'CHANGELOG', 'CHANGES.md', 'HISTORY.md', 'RELEASES.md'];
const CONTRIBUTING_NAMES = ['CONTRIBUTING.md', 'CONTRIBUTING', '.github/CONTRIBUTING.md'];

function firstExisting(root, names) {
  for (const name of names) {
    const p = join(root, name);
    if (existsSync(p) && statSync(p).isFile()) return { name, path: p };
  }
  return null;
}

function safeRead(path) {
  try {
    return readFileSync(path, 'utf8');
  } catch {
    return null;
  }
}

function safeJson(path) {
  const raw = safeRead(path);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function git(root, args) {
  try {
    return execFileSync('git', args, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
      timeout: 10000,
    }).trim();
  } catch {
    return null;
  }
}

/** Minimal TOML value reader. Handles the `key = "value"` and `key = [..]` forms
 *  we need from pyproject/Cargo without pulling in a TOML dependency. */
function tomlValue(text, key) {
  const line = new RegExp(`^\\s*${key}\\s*=\\s*(.+)$`, 'm').exec(text);
  if (!line) return null;
  const raw = line[1].trim();
  if (raw.startsWith('[')) {
    const inner = raw.slice(1, raw.lastIndexOf(']'));
    return inner
      .split(',')
      .map((s) => s.trim().replace(/^["']|["'],?$/g, ''))
      .filter(Boolean);
  }
  return raw.replace(/^["']|["']$/g, '');
}

/**
 * Detect the package manifest and normalise it to a common shape so checks
 * don't need to know which ecosystem they're looking at.
 */
function collectManifest(root) {
  const pkgPath = join(root, 'package.json');
  if (existsSync(pkgPath)) {
    const pkg = safeJson(pkgPath) || {};
    return {
      ecosystem: 'npm',
      file: 'package.json',
      name: pkg.name || null,
      description: pkg.description || null,
      keywords: Array.isArray(pkg.keywords) ? pkg.keywords : [],
      homepage: pkg.homepage || null,
      repository: pkg.repository ? (typeof pkg.repository === 'string' ? pkg.repository : pkg.repository.url) : null,
      license: pkg.license || null,
      version: pkg.version || null,
      private: pkg.private === true,
      isWorkspace: Boolean(pkg.workspaces) || existsSync(join(root, 'pnpm-workspace.yaml')) || existsSync(join(root, 'lerna.json')) || existsSync(join(root, 'turbo.json')) || existsSync(join(root, 'nx.json')),
    };
  }

  const pyPath = join(root, 'pyproject.toml');
  if (existsSync(pyPath)) {
    const text = safeRead(pyPath) || '';
    return {
      ecosystem: 'pypi',
      file: 'pyproject.toml',
      name: tomlValue(text, 'name'),
      description: tomlValue(text, 'description'),
      keywords: tomlValue(text, 'keywords') || [],
      homepage: tomlValue(text, 'homepage') || tomlValue(text, 'Homepage'),
      repository: tomlValue(text, 'repository') || tomlValue(text, 'Repository'),
      license: tomlValue(text, 'license'),
      version: tomlValue(text, 'version'),
      private: false,
    };
  }

  const cargoPath = join(root, 'Cargo.toml');
  if (existsSync(cargoPath)) {
    const text = safeRead(cargoPath) || '';
    return {
      ecosystem: 'crates',
      file: 'Cargo.toml',
      name: tomlValue(text, 'name'),
      description: tomlValue(text, 'description'),
      keywords: tomlValue(text, 'keywords') || [],
      homepage: tomlValue(text, 'homepage'),
      repository: tomlValue(text, 'repository'),
      license: tomlValue(text, 'license'),
      version: tomlValue(text, 'version'),
      private: false,
    };
  }

  const goPath = join(root, 'go.mod');
  if (existsSync(goPath)) {
    const text = safeRead(goPath) || '';
    const mod = /^module\s+(\S+)/m.exec(text);
    return {
      ecosystem: 'go',
      file: 'go.mod',
      name: mod ? mod[1] : null,
      description: null,
      keywords: [],
      homepage: null,
      repository: mod ? mod[1] : null,
      license: null,
      version: null,
      private: false,
    };
  }

  return null;
}

/** Parse markdown structure without a parser: headings, code fences, links, badges. */
function parseMarkdown(text) {
  const lines = text.split(/\r?\n/);
  const headings = [];
  const codeBlocks = [];
  let inFence = false;
  let fenceLang = null;
  let fenceStart = 0;

  lines.forEach((line, i) => {
    const fence = /^\s*(```|~~~)(.*)$/.exec(line);
    if (fence) {
      if (!inFence) {
        inFence = true;
        fenceLang = fence[2].trim().split(/\s+/)[0] || null;
        fenceStart = i;
      } else {
        codeBlocks.push({ lang: fenceLang, line: fenceStart + 1, lines: i - fenceStart - 1 });
        inFence = false;
        fenceLang = null;
      }
      return;
    }
    if (inFence) return;

    const atx = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
    if (atx) {
      headings.push({ level: atx[1].length, text: atx[2].trim(), line: i + 1 });
      return;
    }
    const prev = lines[i - 1];
    if (prev && prev.trim() && /^\s*(=+|-{2,})\s*$/.test(line)) {
      headings.push({ level: line.trim()[0] === '=' ? 1 : 2, text: prev.trim(), line: i });
    }
  });

  const links = [];
  const linkRe = /\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  let m;
  while ((m = linkRe.exec(text)) !== null) {
    links.push({ text: m[1], href: m[2] });
  }

  const images = [];
  const imgRe = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  while ((m = imgRe.exec(text)) !== null) {
    images.push({ alt: m[1], src: m[2] });
  }

  return { lines, headings, codeBlocks, links, images };
}

/** The text before the first heading that follows the H1 — i.e. the "lede". */
function extractLede(text, headings) {
  const h1 = headings.find((h) => h.level === 1);
  const lines = text.split(/\r?\n/);
  const start = h1 ? h1.line : 0;
  const next = headings.find((h) => h.line > start);
  const end = next ? next.line - 1 : Math.min(lines.length, start + 25);
  const body = lines
    .slice(start, end)
    .filter((l) => !/^\s*[![]/.test(l))
    .filter((l) => !/^\s*(<|```|~~~)/.test(l))
    .join(' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const sentence = /^(.+?[.!?])(\s|$)/.exec(body);
  return { text: body, firstSentence: sentence ? sentence[1].trim() : body.slice(0, 240).trim() };
}

function listDirs(root) {
  try {
    return readdirSync(root, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith('.') && d.name !== 'node_modules')
      .map((d) => d.name);
  } catch {
    return [];
  }
}

function countFiles(dir, depth = 2) {
  if (!existsSync(dir)) return 0;
  let n = 0;
  const walk = (d, level) => {
    let entries = [];
    try {
      entries = readdirSync(d, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.name.startsWith('.') || e.name === 'node_modules') continue;
      if (e.isFile()) n += 1;
      else if (e.isDirectory() && level > 0) walk(join(d, e.name), level - 1);
    }
  };
  walk(dir, depth);
  return n;
}

export function collect(rootInput) {
  const root = resolve(rootInput);
  if (!existsSync(root)) throw new Error(`Path does not exist: ${root}`);

  const readmeFile = firstExisting(root, README_NAMES);
  const readmeText = readmeFile ? safeRead(readmeFile.path) || '' : '';
  const md = readmeText ? parseMarkdown(readmeText) : { lines: [], headings: [], codeBlocks: [], links: [], images: [] };
  const lede = readmeText ? extractLede(readmeText, md.headings) : { text: '', firstSentence: '' };

  // Relative links that point at files which do not exist. Deterministic and
  // high-signal: broken links hurt both crawlers and the humans they send.
  const readmeDir = readmeFile ? dirname(readmeFile.path) : root;
  const brokenLinks = [];
  for (const l of [...md.links, ...md.images.map((i) => ({ text: i.alt, href: i.src }))]) {
    const href = l.href;
    if (/^([a-z]+:)?\/\//i.test(href) || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('data:')) continue;
    const clean = decodeURIComponent(href.split('#')[0].split('?')[0]);
    if (!clean) continue;
    if (!existsSync(join(readmeDir, clean))) brokenLinks.push({ text: l.text, href });
  }

  const dirs = listDirs(root);
  const licenseFile = firstExisting(root, LICENSE_NAMES);
  const changelogFile = firstExisting(root, CHANGELOG_NAMES);
  const contributingFile = firstExisting(root, CONTRIBUTING_NAMES);

  const tagsRaw = git(root, ['tag', '--list']);
  const tags = tagsRaw ? tagsRaw.split(/\r?\n/).filter(Boolean) : [];
  const originUrl = git(root, ['config', '--get', 'remote.origin.url']);
  const commitCount = Number(git(root, ['rev-list', '--count', 'HEAD']) || 0);
  const lastCommitISO = git(root, ['log', '-1', '--format=%cI']);

  const docsDirName = dirs.find((d) => ['docs', 'doc', 'documentation', 'website'].includes(d.toLowerCase())) || null;
  let detectedDocs = docsDirName;
  let detectedDocsCount = docsDirName ? countFiles(join(root, docsDirName)) : 0;
  if (!detectedDocs) {
    for (const container of ['packages', 'apps', 'website']) {
      if (dirs.includes(container)) {
        const subdirs = listDirs(join(root, container));
        const sub = subdirs.find((d) => ['docs', 'doc', 'documentation'].includes(d.toLowerCase()));
        if (sub) {
          detectedDocs = `${container}/${sub}`;
          detectedDocsCount = countFiles(join(root, container, sub));
          break;
        }
      }
    }
  }

  const examplesDirName = dirs.find((d) => ['examples', 'example', 'samples', 'demo', 'demos'].includes(d.toLowerCase())) || null;
  const exampleFileCount = examplesDirName ? countFiles(join(root, examplesDirName)) : 0;

  return {
    root,
    collectedAt: new Date().toISOString(),
    repo: {
      dirName: basename(root) || null,
      originUrl,
      tags,
      tagCount: tags.length,
      commitCount,
      lastCommitISO,
      isGitRepo: originUrl !== null || commitCount > 0,
    },
    readme: readmeFile
      ? {
          present: true,
          file: relative(root, readmeFile.path),
          bytes: Buffer.byteLength(readmeText, 'utf8'),
          wordCount: readmeText.split(/\s+/).filter(Boolean).length,
          text: readmeText,
          headings: md.headings,
          codeBlocks: md.codeBlocks,
          links: md.links,
          images: md.images,
          brokenLinks,
          lede,
        }
      : { present: false, brokenLinks: [], headings: [], codeBlocks: [], links: [], images: [], lede },
    manifest: collectManifest(root),
    files: {
      license: licenseFile ? relative(root, licenseFile.path) : null,
      changelog: changelogFile ? relative(root, changelogFile.path) : null,
      contributing: contributingFile ? relative(root, contributingFile.path) : null,
      codeOfConduct: existsSync(join(root, 'CODE_OF_CONDUCT.md')),
      security: existsSync(join(root, 'SECURITY.md')) || existsSync(join(root, '.github/SECURITY.md')),
      citation: existsSync(join(root, 'CITATION.cff')),
      llmsTxt: existsSync(join(root, 'llms.txt')) || existsSync(join(root, 'public/llms.txt')) || existsSync(join(root, 'static/llms.txt')),
      robotsTxt: existsSync(join(root, 'robots.txt')) || existsSync(join(root, 'public/robots.txt')) || existsSync(join(root, 'static/robots.txt')),
    },
    dirs: {
      all: dirs,
      docs: detectedDocs,
      docsFileCount: detectedDocsCount,
      examples: examplesDirName,
      exampleFileCount,
      tests: dirs.find((d) => ['test', 'tests', '__tests__', 'spec'].includes(d.toLowerCase())) || null,
      github: existsSync(join(root, '.github')),
    },
  };
}
