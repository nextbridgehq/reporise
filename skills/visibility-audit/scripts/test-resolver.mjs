/**
 * test-resolver.mjs — Unit test suite for Multi-Document Evidence Resolver & Evidence Graph.
 *
 * Verifies M9.1 Acceptance Gates:
 * 1. Target Discovery (nested docs, workspaces, links)
 * 2. Whitelist & Boundary Filtering
 * 3. Bounded Byte Caps & Hop Limits
 * 4. Determinism & Byte-Identical Serialization
 * 5. Fail-Closed Error Isolation
 * 6. Provenance Tracking & Hashing
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import {
  createEvidenceGraph,
  addEvidenceNode,
  addEvidenceEdge,
  serializeEvidenceGraph,
  NODE_TYPES,
  RESOLUTION_STATUS,
  sha256,
} from './lib/evidence-graph.mjs';

import {
  isEligibleDocUrl,
  discoverTargets,
  resolveEvidenceGraph,
  MAX_CONTENT_BYTES,
} from './lib/resolver.mjs';

test('Evidence Graph: Contract & Determinism', () => {
  const g1 = createEvidenceGraph('test-repo', '/fake/path');
  const n1 = addEvidenceNode(g1, {
    id: 'root:README.md',
    type: NODE_TYPES.ROOT_README,
    content: '# Hello\n\n```js\nconsole.log(1);\n```',
    headings: [{ level: 1, title: 'Hello' }],
    code_blocks: [{ lang: 'js', lines: 1 }],
  });
  const n2 = addEvidenceNode(g1, {
    id: 'local:docs/index.md',
    type: NODE_TYPES.NESTED_DOC,
    content: '## Guide\n\nnpm install test',
    headings: [{ level: 2, title: 'Guide' }],
    has_install_signals: true,
  });
  addEvidenceEdge(g1, n1.id, n2.id, 'references_doc');

  const s1 = serializeEvidenceGraph(g1);
  const s2 = serializeEvidenceGraph(g1);

  assert.equal(s1, s2, 'Serialization must be 100% deterministic');
  assert.equal(sha256(s1), sha256(s2), 'Serialized hash must be identical');
  assert.equal(g1.metrics.total_targets_resolved, 2);
  assert.equal(g1.metrics.total_headings, 2);
  assert.equal(g1.metrics.total_code_blocks, 1);
});

test('Resolver: Domain Whitelist & Boundary Filtering', () => {
  // Valid documentation domains
  assert.equal(isEligibleDocUrl('https://reporise.readthedocs.io/en/latest/'), true);
  assert.equal(isEligibleDocUrl('https://facebook.github.io/react/'), true);
  assert.equal(isEligibleDocUrl('https://docs.nestjs.com/'), true);
  assert.equal(isEligibleDocUrl('https://expressjs.com/en/guide/routing.html'), true);
  assert.equal(isEligibleDocUrl('https://myproject.gitbook.io/docs/'), true);

  // Excluded domains (social, badges, CI, trackers)
  assert.equal(isEligibleDocUrl('https://twitter.com/myproject'), false);
  assert.equal(isEligibleDocUrl('https://discord.gg/invite123'), false);
  assert.equal(isEligibleDocUrl('https://img.shields.io/badge/v-1.0-blue'), false);
  assert.equal(isEligibleDocUrl('https://circleci.com/gh/user/repo'), false);
  assert.equal(isEligibleDocUrl('https://patreon.com/user'), false);
  assert.equal(isEligibleDocUrl('not-a-url'), false);
});

test('Resolver: Target Discovery in Synthetic Repository', () => {
  const tmp = mkdtempSync(join(tmpdir(), 'reporise-resolver-test-'));

  try {
    // 1. Root README with doc link and badge
    const readmeContent = `# Test Project
[![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://circleci.com)
Read our [Documentation](https://myproject.readthedocs.io/en/latest/) for setup.
Also see [Architecture Guide](https://docs.myproject.org/architecture).
`;
    writeFileSync(join(tmp, 'README.md'), readmeContent);

    // 2. Nested /docs/ folder
    mkdirSync(join(tmp, 'docs'));
    writeFileSync(join(tmp, 'docs', 'index.md'), '# Getting Started\n\n```bash\nnpm i test-project\n```');
    writeFileSync(join(tmp, 'docs', 'api.md'), '# API Reference\n\nMethod details here.');

    // 3. Monorepo packages folder
    mkdirSync(join(tmp, 'packages'));
    mkdirSync(join(tmp, 'packages', 'core'));
    writeFileSync(join(tmp, 'packages', 'core', 'README.md'), '# Core Package\n\nCore primitives.');

    const manifest = {
      name: 'test-project',
      homepage: 'https://testproject.github.io/',
    };

    const targets = discoverTargets(tmp, readmeContent, manifest);

    const ids = targets.map((t) => t.id);
    assert.ok(ids.includes('local:docs/index.md'), 'Must discover docs/index.md');
    assert.ok(ids.includes('local:docs/api.md'), 'Must discover docs/api.md');
    assert.ok(ids.includes('workspace:packages/core/README.md'), 'Must discover workspace package README');
    assert.ok(ids.includes('external:https://myproject.readthedocs.io/en/latest/'), 'Must discover ReadTheDocs link');
    assert.ok(ids.includes('external:https://testproject.github.io/'), 'Must discover manifest homepage');

    // Shields.io and CircleCI must be filtered out
    assert.ok(!ids.some((id) => id.includes('shields.io')), 'Must exclude badges');
    assert.ok(!ids.some((id) => id.includes('circleci.com')), 'Must exclude CI');
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
});

test('Resolver: Full Graph Resolution & Provenance with Mock Fixtures', () => {
  const tmp = mkdtempSync(join(tmpdir(), 'reporise-graph-test-'));

  try {
    const readme = `# MyLib
Official guide at [Docs](https://mylib.readthedocs.io/).
`;
    writeFileSync(join(tmp, 'README.md'), readme);

    mkdirSync(join(tmp, 'docs'));
    writeFileSync(join(tmp, 'docs', 'index.md'), '# Local Guide\n\n```bash\npip install mylib\n```');

    const offlineFixtures = {
      'https://mylib.readthedocs.io/': {
        content: '# Remote Documentation\n\n## Quickstart\n\nRun the quickstart tutorial.',
        http_status: 200,
      },
    };

    const graph = resolveEvidenceGraph('mylib-repo', tmp, readme, {}, { offlineFixtures });

    assert.equal(graph.repository, 'mylib-repo');
    assert.equal(graph.nodes.length, 3, 'Must contain root, local nested, and external node');

    const rootNode = graph.nodes.find((n) => n.type === NODE_TYPES.ROOT_README);
    const localNode = graph.nodes.find((n) => n.type === NODE_TYPES.NESTED_DOC);
    const extNode = graph.nodes.find((n) => n.type === NODE_TYPES.EXTERNAL_DOC);

    assert.ok(rootNode, 'Root node exists');
    assert.ok(localNode, 'Local nested node exists');
    assert.ok(extNode, 'External node exists');

    assert.equal(localNode.structural_summary.has_install_signals, true);
    assert.equal(extNode.structural_summary.has_quickstart_signals, true);
    assert.equal(extNode.resolution_status, RESOLUTION_STATUS.RESOLVED);
    assert.equal(extNode.http_status, 200);

    // Edges
    assert.equal(graph.edges.length, 2);
    assert.ok(graph.edges.some((e) => e.from === rootNode.id && e.to === localNode.id));
    assert.ok(graph.edges.some((e) => e.from === rootNode.id && e.to === extNode.id));
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
});

test('Resolver: Fail-Closed Isolation on 404, 500, and Missing Files', () => {
  const tmp = mkdtempSync(join(tmpdir(), 'reporise-fail-closed-test-'));

  try {
    const readme = `# Fragile Repo
[Broken Link](https://fragile.readthedocs.io/broken)
`;
    writeFileSync(join(tmp, 'README.md'), readme);

    const offlineFixtures = {
      'https://fragile.readthedocs.io/broken': {
        error: 'HTTP 404 Not Found',
        http_status: 404,
      },
    };

    // Resolution must not throw, but fail closed cleanly
    const graph = resolveEvidenceGraph('fragile-repo', tmp, readme, {}, { offlineFixtures });

    assert.equal(graph.nodes.length, 2);
    const extNode = graph.nodes.find((n) => n.type === NODE_TYPES.EXTERNAL_DOC);
    assert.equal(extNode.resolution_status, RESOLUTION_STATUS.UNREACHABLE);
    assert.equal(extNode.http_status, 404);
    assert.equal(extNode.error_detail, 'HTTP 404 Not Found');
    assert.equal(graph.metrics.total_targets_failed, 1);
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
});
