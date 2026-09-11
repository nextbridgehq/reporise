/**
 * resolver.mjs — Multi-Document Evidence Resolver.
 *
 * M9 Track: Multi-Document Evidence Resolution
 * Part of Milestone M9.1: External Documentation Resolution Feasibility Benchmark.
 *
 * Implements the 7 Acceptance Gates:
 * 1. M8 Engine Invariant: Zero modifications to scoring heuristics.
 * 2. Target Acquisition: Discovers README doc links, nested /docs, and workspace packages.
 * 3. Bounded Resolution: Hop depth = 1, domain whitelist, 256 KB cap, offline fixture support.
 * 4. Determinism: Produces byte-identical evidence graphs for identical inputs.
 * 5. Full Provenance: Tracks source URI, anchor, content hash, and byte offset.
 * 6. Fail-Closed Isolation: Handles 4xx/5xx, unreachable hosts, and invalid URLs cleanly.
 * 7. Zero Scoring Changes: Purely expands and observes the evidence universe.
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, basename, extname } from 'node:path';
import {
  createEvidenceGraph,
  addEvidenceNode,
  addEvidenceEdge,
  NODE_TYPES,
  RESOLUTION_STATUS,
  sha256,
} from './evidence-graph.mjs';

export const MAX_CONTENT_BYTES = 256 * 1024; // 256 KB cap per document
export const MAX_NESTED_FILES = 8;
export const MAX_WORKSPACE_PACKAGES = 8;
export const MAX_EXTERNAL_TARGETS = 5;

const DOC_DOMAIN_SUFFIXES = [
  'readthedocs.io',
  'readthedocs.org',
  'github.io',
  'gitbook.io',
  'gitbook.com',
  'pages.dev',
  'vercel.app',
  'netlify.app',
];

const EXCLUDED_HOSTS = new Set([
  'twitter.com',
  'x.com',
  'discord.gg',
  'discord.com',
  'slack.com',
  'reddit.com',
  'youtube.com',
  'img.shields.io',
  'shields.io',
  'badge.fury.io',
  'travis-ci.org',
  'travis-ci.com',
  'circleci.com',
  'codecov.io',
  'coveralls.io',
  'patreon.com',
  'opencollective.com',
  'buymeacoffee.com',
  'gnu.org',
  'apache.org/licenses',
  'opensource.org',
]);

const INSTALL_REGEX = /\b(npm\s+i|npm\s+install|pnpm\s+add|yarn\s+add|pip\s+install|cargo\s+add|go\s+get|gem\s+install|brew\s+install|docker\s+pull|docker\s+run)\b/i;
const QUICKSTART_REGEX = /\b(quick\s*start|getting\s*started|usage|basic\s*usage|tutorial|how\s*to\s*use)\b/i;

function safeRead(path, maxBytes = MAX_CONTENT_BYTES) {
  try {
    if (!existsSync(path)) return null;
    const stat = statSync(path);
    if (!stat.isFile()) return null;
    const buf = readFileSync(path);
    if (buf.byteLength > maxBytes) {
      return buf.slice(0, maxBytes).toString('utf8');
    }
    return buf.toString('utf8');
  } catch {
    return null;
  }
}

function extractMarkdownStructure(text) {
  if (typeof text !== 'string') {
    return { headings: [], code_blocks: [], has_install: false, has_quickstart: false };
  }

  const headings = [];
  const code_blocks = [];

  // Headings
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  let match;
  while ((match = headingRegex.exec(text)) !== null) {
    headings.push({ level: match[1].length, title: match[2].trim() });
  }

  // Code blocks
  const codeBlockRegex = /```([a-zA-Z0-9_\-]*)\r?\n([\s\S]*?)```/g;
  while ((match = codeBlockRegex.exec(text)) !== null) {
    code_blocks.push({
      lang: match[1].trim() || 'text',
      lines: match[2].split(/\r?\n/).length,
      sample: match[2].slice(0, 100).trim(),
    });
  }

  const has_install = INSTALL_REGEX.test(text);
  const has_quickstart = QUICKSTART_REGEX.test(text);

  return { headings, code_blocks, has_install, has_quickstart };
}

/**
 * Validates whether an external URL is an eligible, bounded documentation target.
 *
 * @param {string} urlString - Target URL to validate
 * @param {object|string} context - Optional context: anchor text string, or { anchor, surrounding, isManifestDoc }
 */
export function isEligibleDocUrl(urlString, context = {}) {
  try {
    const url = new URL(urlString);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;

    const hostname = url.hostname.toLowerCase();
    for (const bad of EXCLUDED_HOSTS) {
      if (hostname === bad || hostname.endsWith('.' + bad)) return false;
    }

    // Subdomain indicators (e.g. docs.nestjs.com, wiki.js.org)
    if (
      hostname.startsWith('docs.') ||
      hostname.startsWith('doc.') ||
      hostname.startsWith('documentation.') ||
      hostname.startsWith('wiki.') ||
      hostname.startsWith('guide.') ||
      hostname === 'docs.rs' ||
      hostname.endsWith('.docs.rs')
    ) {
      return true;
    }

    // Direct doc domain match (e.g. readthedocs.io, github.io)
    for (const suffix of DOC_DOMAIN_SUFFIXES) {
      if (hostname === suffix || hostname.endsWith('.' + suffix)) return true;
    }

    // Path indicators
    const path = url.pathname.toLowerCase();
    if (path.includes('/docs') || path.includes('/documentation') || path.includes('/wiki') || path.includes('/guide')) {
      return true;
    }

    // Contextual validation: markdown link anchor or surrounding line text
    const anchor = typeof context === 'string' ? context : context.anchor || '';
    const surrounding = typeof context === 'object' ? context.surrounding || '' : '';
    const isDocContext =
      /\b(docs?|documentation|guide|manual|api\s*reference|wiki|quickstart|tutorial|getting\s*started)\b/i.test(anchor) ||
      /\b(docs?|documentation|guide|manual|api\s*reference|wiki|quickstart|tutorial|getting\s*started)\b/i.test(surrounding);

    if (isDocContext) {
      return true;
    }

    // Manifest homepage or documentation link
    if (typeof context === 'object' && context.isManifestDoc) {
      return true;
    }

    return false;
  } catch {
    return false;
  }
}

/**
 * Discovers potential documentation targets from repository root, README, and manifest.
 */
export function discoverTargets(repoPath, rootReadmeContent = '', manifest = {}) {
  const targets = [];
  const seenUrls = new Set();
  const seenPaths = new Set();

  // 1. Discover Nested Local Documentation Folders (/docs/, /doc/)
  const docFolders = ['docs', 'doc', 'documentation'];
  for (const df of docFolders) {
    const dir = join(repoPath, df);
    if (existsSync(dir) && statSync(dir).isDirectory()) {
      try {
        const entries = readdirSync(dir);
        // Prioritize key landing files
        const keyNames = ['index.md', 'README.md', 'intro.md', 'getting-started.md', 'overview.md', 'index.html'];
        const mdFiles = [];

        for (const entry of entries) {
          const fullP = join(dir, entry);
          const stat = statSync(fullP);
          if (stat.isFile() && (entry.endsWith('.md') || entry.endsWith('.markdown'))) {
            mdFiles.push(entry);
          }
        }

        // Sort: key names first, then alphabetical
        mdFiles.sort((a, b) => {
          const aKey = keyNames.indexOf(a);
          const bKey = keyNames.indexOf(b);
          if (aKey !== -1 && bKey !== -1) return aKey - bKey;
          if (aKey !== -1) return -1;
          if (bKey !== -1) return 1;
          return a.localeCompare(b);
        });

        for (const f of mdFiles.slice(0, MAX_NESTED_FILES)) {
          const targetPath = join(df, f).replace(/\\/g, '/');
          if (!seenPaths.has(targetPath)) {
            seenPaths.add(targetPath);
            targets.push({
              id: `local:${targetPath}`,
              type: NODE_TYPES.NESTED_DOC,
              source_type: 'local_file',
              source_uri: targetPath,
              title: f,
              parent_anchor: `Directory /${df}/`,
            });
          }
        }
      } catch {
        // fail closed on permission / directory errors
      }
    }
  }

  // 2. Discover Monorepo Packages (packages/*/README.md, apps/*/README.md, components/*/README.md)
  const workspaceDirs = ['packages', 'apps', 'libs', 'modules'];
  if (manifest && Array.isArray(manifest.workspaces)) {
    for (const pattern of manifest.workspaces) {
      if (typeof pattern === 'string') {
        const prefix = pattern.replace(/\/\*.*$/, '').replace(/^[./]+/, '');
        if (prefix && !workspaceDirs.includes(prefix)) {
          workspaceDirs.push(prefix);
        }
      }
    }
  }

  for (const wd of workspaceDirs) {
    const wsPath = join(repoPath, wd);
    if (existsSync(wsPath) && statSync(wsPath).isDirectory()) {
      try {
        const pkgs = readdirSync(wsPath);
        pkgs.sort();
        for (const pkg of pkgs) {
          const pkgDir = join(wsPath, pkg);
          if (statSync(pkgDir).isDirectory()) {
            const readmeNames = ['README.md', 'readme.md', 'README'];
            for (const rn of readmeNames) {
              const rp = join(pkgDir, rn);
              if (existsSync(rp) && statSync(rp).isFile()) {
                const targetPath = `${wd}/${pkg}/${rn}`.replace(/\\/g, '/');
                if (!seenPaths.has(targetPath)) {
                  seenPaths.add(targetPath);
                  targets.push({
                    id: `workspace:${targetPath}`,
                    type: NODE_TYPES.WORKSPACE_MEMBER,
                    source_type: 'local_file',
                    source_uri: targetPath,
                    title: `Package ${pkg}`,
                    parent_anchor: `Workspace ${wd}/${pkg}`,
                  });
                }
                break;
              }
            }
          }
          if (seenPaths.size >= MAX_WORKSPACE_PACKAGES + MAX_NESTED_FILES) break;
        }
      } catch {
        // fail closed
      }
    }
  }

  // 3. Discover Manifest Documentation Target
  if (manifest && typeof manifest === 'object') {
    const manifestUrls = [manifest.homepage, manifest.documentation].filter(Boolean);
    for (const mu of manifestUrls) {
      if (typeof mu === 'string' && isEligibleDocUrl(mu, { isManifestDoc: true }) && !seenUrls.has(mu)) {
        seenUrls.add(mu);
        targets.push({
          id: `external:${mu}`,
          type: NODE_TYPES.EXTERNAL_DOC,
          source_type: 'external_url',
          source_uri: mu,
          title: 'Manifest Documentation',
          parent_anchor: 'package manifest homepage/docs',
        });
      }
    }
  }

  // 4. Discover External Documentation Links from Root README
  if (rootReadmeContent) {
    const lines = rootReadmeContent.split('\n');
    for (const line of lines) {
      // Markdown link: [anchor](url)
      const mdLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
      let m;
      while ((m = mdLinkRegex.exec(line)) !== null) {
        const anchor = m[1].trim();
        const url = m[2].trim();
        if (isEligibleDocUrl(url, { anchor, surrounding: line }) && !seenUrls.has(url)) {
          seenUrls.add(url);
          targets.push({
            id: `external:${url}`,
            type: NODE_TYPES.EXTERNAL_DOC,
            source_type: 'external_url',
            source_uri: url,
            title: anchor || 'External Documentation',
            parent_anchor: anchor,
          });
        }
        if (seenUrls.size >= MAX_EXTERNAL_TARGETS) break;
      }
      if (seenUrls.size >= MAX_EXTERNAL_TARGETS) break;
    }
  }

  // Deterministic sorting of targets by ID
  return targets.sort((a, b) => a.id.localeCompare(b.id));
}

/**
 * Resolves targets into a complete Cross-Document Evidence Graph.
 *
 * @param {string} repoIdentifier - Unique repository identifier
 * @param {string} repoPath - Local path to repository root
 * @param {string} rootReadmeContent - Primary README content
 * @param {object} manifest - Repository manifest
 * @param {object} options - Optional mock fetcher / offline fixture map
 */
export function resolveEvidenceGraph(repoIdentifier, repoPath, rootReadmeContent = '', manifest = {}, options = {}) {
  const graph = createEvidenceGraph(repoIdentifier, repoPath);

  // 1. Add Root README node (Primary local baseline)
  const rootStructure = extractMarkdownStructure(rootReadmeContent);
  const rootNode = addEvidenceNode(graph, {
    id: 'root:README.md',
    type: NODE_TYPES.ROOT_README,
    source_type: 'local_file',
    source_uri: 'README.md',
    title: 'Root README',
    resolution_status: rootReadmeContent ? RESOLUTION_STATUS.RESOLVED : RESOLUTION_STATUS.UNREACHABLE,
    content: rootReadmeContent,
    headings: rootStructure.headings,
    code_blocks: rootStructure.code_blocks,
    has_install_signals: rootStructure.has_install,
    has_quickstart_signals: rootStructure.has_quickstart,
    metadata: { is_primary_root: true },
  });

  // 2. Discover Targets
  const discoveredTargets = discoverTargets(repoPath, rootReadmeContent, manifest);

  // 3. Resolve Each Target
  const offlineFixtures = options.offlineFixtures || {};

  for (const target of discoveredTargets) {
    let content = null;
    let status = RESOLUTION_STATUS.RESOLVED;
    let errorDetail = null;
    let httpStatus = null;

    if (target.source_type === 'local_file') {
      const fullPath = join(repoPath, target.source_uri);
      content = safeRead(fullPath, MAX_CONTENT_BYTES);
      if (content === null) {
        status = RESOLUTION_STATUS.UNREACHABLE;
        errorDetail = 'Local document could not be read or does not exist';
      }
    } else if (target.source_type === 'external_url') {
      // Check offline fixture registry first (ensures deterministic benchmark replay)
      if (offlineFixtures[target.source_uri] !== undefined) {
        const fixture = offlineFixtures[target.source_uri];
        if (fixture.error) {
          status = RESOLUTION_STATUS.UNREACHABLE;
          errorDetail = fixture.error;
          httpStatus = fixture.http_status || 500;
        } else {
          content = fixture.content || '';
          httpStatus = 200;
        }
      } else if (options.mockFetcher) {
        try {
          const res = options.mockFetcher(target.source_uri);
          if (res.error) {
            status = RESOLUTION_STATUS.UNREACHABLE;
            errorDetail = res.error;
            httpStatus = res.http_status || 500;
          } else {
            content = res.content || '';
            httpStatus = 200;
          }
        } catch (err) {
          status = RESOLUTION_STATUS.UNREACHABLE;
          errorDetail = err.message;
        }
      } else {
        // Without live network or mock, external targets fail closed cleanly
        status = RESOLUTION_STATUS.SKIPPED_UNSUPPORTED;
        errorDetail = 'Live network resolution disabled in offline deterministic mode';
      }
    }

    const structure = extractMarkdownStructure(content);

    const node = addEvidenceNode(graph, {
      id: target.id,
      type: target.type,
      source_type: target.source_type,
      source_uri: target.source_uri,
      title: target.title,
      parent_anchor: target.parent_anchor,
      resolution_status: status,
      http_status: httpStatus,
      error_detail: errorDetail,
      content: content || '',
      headings: structure.headings,
      code_blocks: structure.code_blocks,
      has_install_signals: structure.has_install,
      has_quickstart_signals: structure.has_quickstart,
    });

    // Add edge from root to resolved target
    addEvidenceEdge(graph, rootNode.id, node.id, target.type === NODE_TYPES.WORKSPACE_MEMBER ? 'workspace_member' : 'references_doc', {
      anchor: target.parent_anchor,
    });
  }

  return graph;
}
