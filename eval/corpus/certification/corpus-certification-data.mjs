/**
 * corpus-m9-5-data.mjs — Independent M9.5 Generalization & Certification Corpus (N=32).
 *
 * Designed to test:
 * 1. Cohort 1: Diverse External Doc Frameworks (N=7)
 * 2. Cohort 2: Workspace & Monorepo Topologies (N=7)
 * 3. Cohort 3: Evidence Ambiguity & Competing Targets (N=6)
 * 4. Cohort 4: Edge, Failure & Network Degradation (N=6)
 * 5. Cohort 5: Adversarial, Stress & Cheating Defense (N=6)
 */

export const M9_5_CORPUS_ITEMS = [
  // =========================================================================
  // COHORT 1: Diverse External Doc Frameworks (N=7)
  // =========================================================================
  {
    fixture_id: 'm9-5-001',
    repository: 'pallets/flask',
    cohort: 'external_frameworks',
    doc_strategy: 'external_readthedocs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Flask
Flask is a lightweight WSGI web application framework in Python.

See the [Flask Documentation](https://flask.palletsprojects.com/en/stable/) for detailed guides and API reference.
`,
    manifest: { name: 'flask', homepage: 'https://flask.palletsprojects.com' },
    external_docs: {
      'https://flask.palletsprojects.com/en/stable/': {
        http_status: 200,
        content: `# Welcome to Flask\n\n## Installation\n\`\`\`bash\npip install Flask\n\`\`\`\n\n## Quickstart\nA minimal Flask application looks something like this:\n\`\`\`python\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route("/")\ndef hello_world():\n    return "<p>Hello, World!</p>"\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-002',
    repository: 'facebook/docusaurus',
    cohort: 'external_frameworks',
    doc_strategy: 'external_docusaurus',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Docusaurus
Easy to maintain open source documentation websites.

Read the [Docusaurus Documentation](https://docusaurus.io/docs) to get started.
`,
    manifest: { name: 'docusaurus', homepage: 'https://docusaurus.io' },
    external_docs: {
      'https://docusaurus.io/docs': {
        http_status: 200,
        content: `# Docusaurus Docs\n\n## Getting Started\n\`\`\`bash\nnpx create-docusaurus@latest my-website classic\ncd my-website\nnpm start\n\`\`\`\n\n## Fast Track\nDocusaurus builds static content into a fast single-page app.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-003',
    repository: 'vuejs/vitepress',
    cohort: 'external_frameworks',
    doc_strategy: 'external_vitepress',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# VitePress
Vite & Vue Powered Static Site Generator.

Check out our [VitePress Guide](https://vitepress.dev/guide/getting-started) for setup instructions.
`,
    manifest: { name: 'vitepress', homepage: 'https://vitepress.dev' },
    external_docs: {
      'https://vitepress.dev/guide/getting-started': {
        http_status: 200,
        content: `# Getting Started with VitePress\n\n## Installation\n\`\`\`bash\nnpm add -D vitepress\nnpx vitepress init\n\`\`\`\n\n## Running Docs\n\`\`\`bash\nnpx vitepress dev docs\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-004',
    repository: 'squidfunk/mkdocs-material',
    cohort: 'external_frameworks',
    doc_strategy: 'external_mkdocs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Material for MkDocs
A powerful documentation framework on top of MkDocs.

See the [Documentation](https://squidfunk.github.io/mkdocs-material/getting-started/) to build your documentation site.
`,
    manifest: { name: 'mkdocs-material', homepage: 'https://squidfunk.github.io/mkdocs-material/' },
    external_docs: {
      'https://squidfunk.github.io/mkdocs-material/getting-started/': {
        http_status: 200,
        content: `# Getting Started\n\n## Installation\n\`\`\`bash\npip install mkdocs-material\n\`\`\`\n\n## Quick Configuration\nAdd \`theme: name: material\` to your \`mkdocs.yml\`.\n\`\`\`yaml\nsite_name: My Docs\ntheme:\n  name: material\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-005',
    repository: 'expressjs/express',
    cohort: 'external_frameworks',
    doc_strategy: 'external_github_pages',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Express
Fast, unopinionated, minimalist web framework for Node.js.

Consult the [Official Documentation](https://expressjs.com/en/starter/installing.html) for guides.
`,
    manifest: { name: 'express', homepage: 'https://expressjs.com' },
    external_docs: {
      'https://expressjs.com/en/starter/installing.html': {
        http_status: 200,
        content: `# Installing Express\n\n## Installation\n\`\`\`bash\nnpm install express\n\`\`\`\n\n## Hello World\n\`\`\`javascript\nconst express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => res.send('Hello World!'));\napp.listen(3000);\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-006',
    repository: 'reduxjs/redux-toolkit',
    cohort: 'external_frameworks',
    doc_strategy: 'external_gitbook',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Redux Toolkit
The official, opinionated, batteries-included toolset for efficient Redux development.

See the [RTK Documentation & Tutorial](https://redux-toolkit.js.org/introduction/getting-started) for full setup.
`,
    manifest: { name: '@reduxjs/toolkit', homepage: 'https://redux-toolkit.js.org' },
    external_docs: {
      'https://redux-toolkit.js.org/introduction/getting-started': {
        http_status: 200,
        content: `# Getting Started with Redux Toolkit\n\n## Installation\n\`\`\`bash\nnpm install @reduxjs/toolkit react-redux\n\`\`\`\n\n## Basic Setup\n\`\`\`ts\nimport { configureStore } from '@reduxjs/toolkit';\nexport const store = configureStore({ reducer: {} });\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-007',
    repository: 'sveltejs/kit',
    cohort: 'external_frameworks',
    doc_strategy: 'external_custom_domain',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# SvelteKit
Web development, streamlined.

Check the [SvelteKit Documentation](https://kit.svelte.dev/docs) to build modern web apps.
`,
    manifest: { name: '@sveltejs/kit', homepage: 'https://kit.svelte.dev' },
    external_docs: {
      'https://kit.svelte.dev/docs': {
        http_status: 200,
        content: `# SvelteKit Docs\n\n## Getting Started\n\`\`\`bash\nnpx sv create my-app\ncd my-app\nnpm install\nnpm run dev\n\`\`\`\n\n## Routing\nSvelteKit uses filesystem-based routing in \`src/routes\`.\n`,
      },
    },
    local_files: {},
  },

  // =========================================================================
  // COHORT 2: Workspace & Monorepo Topologies (N=7)
  // =========================================================================
  {
    fixture_id: 'm9-5-008',
    repository: 'babel/babel',
    cohort: 'workspace_topologies',
    doc_strategy: 'nested_workspace',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Babel
The compiler for next generation JavaScript.

## Packages
This repository is managed as a monorepo containing multiple packages under packages/.
`,
    manifest: {
      name: 'babel',
      description: 'The compiler for next generation JavaScript',
      workspaces: ['packages/*'],
    },
    local_files: {
      'packages/babel-core/package.json': JSON.stringify({ name: '@babel/core', version: '7.24.0' }),
      'packages/babel-core/README.md': `# @babel/core\n\nBabel compiler core.\n\n## Installation\n\`\`\`bash\nnpm install --save-dev @babel/core\n\`\`\`\n\n## Usage\n\`\`\`javascript\nconst babel = require("@babel/core");\nconst result = babel.transformSync("code();", options);\n\`\`\`\n`,
      'packages/babel-cli/package.json': JSON.stringify({ name: '@babel/cli', version: '7.24.0' }),
      'packages/babel-cli/README.md': `# @babel/cli\n\nBabel command line interface.\n\n## Installation\n\`\`\`bash\nnpm install --save-dev @babel/cli\n\`\`\`\n`,
    },
    external_docs: {},
  },
  {
    fixture_id: 'm9-5-009',
    repository: 'pnpm/pnpm-workspace',
    cohort: 'workspace_topologies',
    doc_strategy: 'nested_workspace_pnpm',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# PNPM Monorepo
Fast, disk space efficient package manager monorepo.
`,
    manifest: {
      name: 'pnpm-workspace',
      description: 'Fast, disk space efficient package manager monorepo',
    },
    local_files: {
      'pnpm-workspace.yaml': `packages:\n  - 'packages/*'\n`,
      'packages/core/package.json': JSON.stringify({ name: '@pnpm/core' }),
      'packages/core/README.md': `# @pnpm/core\n\nCore installation and resolution engine.\n\n## Installation\n\`\`\`bash\npnpm add @pnpm/core\n\`\`\`\n\n## Usage\n\`\`\`ts\nimport { createPkgGraph } from '@pnpm/core';\n\`\`\`\n`,
      'packages/plugin/package.json': JSON.stringify({ name: '@pnpm/plugin' }),
      'packages/plugin/README.md': `# @pnpm/plugin\n\nPlugin architecture for pnpm.\n\n## Installation\n\`\`\`bash\npnpm add @pnpm/plugin\n\`\`\`\n`,
    },
    external_docs: {},
  },
  {
    fixture_id: 'm9-5-010',
    repository: 'yarnpkg/berry',
    cohort: 'workspace_topologies',
    doc_strategy: 'nested_workspace_yarn',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Yarn Berry
The modern package manager for JavaScript ecosystem.
`,
    manifest: {
      name: 'berry',
      description: 'The modern package manager for JavaScript ecosystem',
      workspaces: ['packages/yarnpkg-*'],
    },
    local_files: {
      'packages/yarnpkg-core/package.json': JSON.stringify({ name: '@yarnpkg/core' }),
      'packages/yarnpkg-core/README.md': `# @yarnpkg/core\n\nCore package management logic.\n\n## Installation\n\`\`\`bash\nyarn add @yarnpkg/core\n\`\`\`\n\n## Example\n\`\`\`js\nconst { Configuration } = require('@yarnpkg/core');\n\`\`\`\n`,
    },
    external_docs: {},
  },
  {
    fixture_id: 'm9-5-011',
    repository: 'nrwl/nx-monorepo',
    cohort: 'workspace_topologies',
    doc_strategy: 'nested_workspace_nx',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Nx Suite
Smart, fast, extensible build system with first class monorepo support.
`,
    manifest: {
      name: 'nx-monorepo',
      description: 'Smart build system and monorepo tooling',
      workspaces: ['packages/*'],
    },
    local_files: {
      'nx.json': JSON.stringify({ targetDefaults: { build: { cache: true } } }),
      'packages/devkit/package.json': JSON.stringify({ name: '@nx/devkit' }),
      'packages/devkit/README.md': `# @nx/devkit\n\nThe plugin development kit for Nx.\n\n## Installation\n\`\`\`bash\nnpm install @nx/devkit\n\`\`\`\n\n## Generator Usage\n\`\`\`typescript\nimport { Tree, formatFiles } from '@nx/devkit';\nexport default async function (tree: Tree) {\n  await formatFiles(tree);\n}\n\`\`\`\n`,
    },
    external_docs: {},
  },
  {
    fixture_id: 'm9-5-012',
    repository: 'vercel/turborepo',
    cohort: 'workspace_topologies',
    doc_strategy: 'nested_workspace_turbo',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Turborepo
High-performance build system for JavaScript and TypeScript codebases.
`,
    manifest: {
      name: 'turborepo',
      description: 'High-performance build system for JS and TS',
      workspaces: ['packages/*'],
    },
    local_files: {
      'turbo.json': JSON.stringify({ $schema: 'https://turbo.build/schema.json' }),
      'packages/turbo-gen/package.json': JSON.stringify({ name: '@turbo/gen' }),
      'packages/turbo-gen/README.md': `# @turbo/gen\n\nCode generation tool for Turborepo workspaces.\n\n## Installation\n\`\`\`bash\nnpx @turbo/gen workspace\n\`\`\`\n\n## Example\n\`\`\`bash\nnpx turbo gen\n\`\`\`\n`,
    },
    external_docs: {},
  },
  {
    fixture_id: 'm9-5-013',
    repository: 'lerna/lerna-monorepo',
    cohort: 'workspace_topologies',
    doc_strategy: 'nested_workspace_lerna',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Lerna Project
Original monorepo tool for managing JavaScript projects with multiple packages.
`,
    manifest: {
      name: 'lerna-project',
      description: 'Monorepo tool for JavaScript projects',
      workspaces: ['packages/*'],
    },
    local_files: {
      'lerna.json': JSON.stringify({ version: '1.0.0', packages: ['packages/*'] }),
      'packages/publish/package.json': JSON.stringify({ name: '@lerna/publish' }),
      'packages/publish/README.md': `# @lerna/publish\n\nPublish packages in the current Lerna repository.\n\n## Installation\n\`\`\`bash\nnpm install @lerna/publish\n\`\`\`\n\n## Command\n\`\`\`bash\nlerna publish\n\`\`\`\n`,
    },
    external_docs: {},
  },
  {
    fixture_id: 'm9-5-014',
    repository: 'fastify/fastify-deep-workspace',
    cohort: 'workspace_topologies',
    doc_strategy: 'nested_workspace_deep',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Fastify Deep Ecosystem
Ecosystem plugin monorepo with nested modules.
`,
    manifest: {
      name: 'fastify-deep',
      description: 'Fastify ecosystem plugin monorepo',
      workspaces: ['packages/plugins/*'],
    },
    local_files: {
      'packages/plugins/auth/package.json': JSON.stringify({ name: '@fastify/deep-auth' }),
      'packages/plugins/auth/README.md': `# @fastify/deep-auth\n\nAuthentication plugin.\n\n## Installation\n\`\`\`bash\nnpm install @fastify/deep-auth\n\`\`\`\n\n## Setup\n\`\`\`javascript\nfastify.register(require('@fastify/deep-auth'));\n\`\`\`\n`,
    },
    external_docs: {},
  },

  // =========================================================================
  // COHORT 3: Evidence Ambiguity & Competing Targets (N=6)
  // =========================================================================
  {
    fixture_id: 'm9-5-015',
    repository: 'example/blog-vs-docs',
    cohort: 'evidence_ambiguity',
    doc_strategy: 'ambiguous_targets',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Project BlogVsDocs
Modern data pipeline toolkit.

- Read our [Launch Announcement](https://blog.example.com/announcing-v2) on the blog.
- Explore the [User Documentation](https://docs.example.com/guide) for complete setup instructions.
`,
    manifest: { name: 'blog-vs-docs' },
    external_docs: {
      'https://blog.example.com/announcing-v2': {
        http_status: 200,
        content: `# Announcing v2.0\nToday we are excited to launch v2 of our toolkit with 10x performance.\n`,
      },
      'https://docs.example.com/guide': {
        http_status: 200,
        content: `# User Documentation\n\n## Installation\n\`\`\`bash\nnpm install blog-vs-docs\n\`\`\`\n\n## Basic Pipeline\n\`\`\`js\nconst pipeline = require("blog-vs-docs");\npipeline.run();\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-016',
    repository: 'example/social-and-docs',
    cohort: 'evidence_ambiguity',
    doc_strategy: 'ambiguous_targets',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# SocialAndDocs Project
Community-driven messaging utilities.

Join our [Discord Community](https://discord.gg/invite123) or follow on [Twitter/X](https://x.com/project).
For technical setup, read the [Technical Manual](https://socialdocs.readthedocs.io/en/latest/).
`,
    manifest: { name: 'social-and-docs' },
    external_docs: {
      'https://socialdocs.readthedocs.io/en/latest/': {
        http_status: 200,
        content: `# Technical Manual\n\n## Installation\n\`\`\`bash\npip install social-and-docs\n\`\`\`\n\n## Example\n\`\`\`python\nimport socialdocs\nsocialdocs.connect()\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-017',
    repository: 'example/duplicate-examples',
    cohort: 'evidence_ambiguity',
    doc_strategy: 'duplicate_evidence',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Duplicate Example Project
Utilities for string manipulation.

## Installation
\`\`\`bash
npm install str-utils
\`\`\`

## Quickstart
\`\`\`javascript
const { camelCase } = require('str-utils');
console.log(camelCase('hello world'));
\`\`\`

Detailed guides are at [Online Documentation](https://str-utils.github.io/docs/).
`,
    manifest: { name: 'str-utils' },
    external_docs: {
      'https://str-utils.github.io/docs/': {
        http_status: 200,
        content: `# String Utils Documentation\n\n## Installation\n\`\`\`bash\nnpm install str-utils\n\`\`\`\n\n## Quickstart\n\`\`\`javascript\nconst { camelCase } = require('str-utils');\nconsole.log(camelCase('hello world'));\n\`\`\`\n\n## Advanced API\n\`\`\`javascript\nconst { kebabCase } = require('str-utils');\nconsole.log(kebabCase('fooBar'));\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-018',
    repository: 'example/multi-external-links',
    cohort: 'evidence_ambiguity',
    doc_strategy: 'multi_doc_links',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Multi External Links
Microservice communication library.

- Check out the [Installation Guide](https://docs.microcomm.org/install)
- Read the [API Reference](https://docs.microcomm.org/api)
`,
    manifest: { name: 'microcomm' },
    external_docs: {
      'https://docs.microcomm.org/install': {
        http_status: 200,
        content: `# Installation Guide\n\`\`\`bash\nnpm install microcomm\n\`\`\`\n`,
      },
      'https://docs.microcomm.org/api': {
        http_status: 200,
        content: `# API Reference\n\`\`\`javascript\nconst client = new MicroClient();\nawait client.send('ping');\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-019',
    repository: 'example/interleaved-releases',
    cohort: 'evidence_ambiguity',
    doc_strategy: 'interleaved_release_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Interleaved Releases Project
Task scheduling library.

See [Release Notes](https://github.com/example/releases) and our [Official Guide](https://tasklib.readthedocs.io/en/latest/).
`,
    manifest: { name: 'tasklib' },
    external_docs: {
      'https://tasklib.readthedocs.io/en/latest/': {
        http_status: 200,
        content: `# TaskLib Guide\n\n## Installation\n\`\`\`bash\npip install tasklib\n\`\`\`\n\n## Usage\n\`\`\`python\nfrom tasklib import Scheduler\ns = Scheduler()\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-020',
    repository: 'example/nested-docs-partial',
    cohort: 'evidence_ambiguity',
    doc_strategy: 'nested_partial_snippets',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Nested Docs Partial
Component library with local docs directory.
`,
    manifest: { name: 'nested-docs-partial' },
    local_files: {
      'docs/setup.md': `# Setup Guide\n\n## Installation\n\`\`\`bash\nnpm install @ui/partial\n\`\`\`\n`,
      'docs/usage.md': `# Usage Guide\n\n## Code Example\n\`\`\`js\nimport { Button } from '@ui/partial';\n\`\`\`\n`,
    },
    external_docs: {},
  },

  // =========================================================================
  // COHORT 4: Edge, Failure & Network Degradation (N=6)
  // =========================================================================
  {
    fixture_id: 'm9-5-021',
    repository: 'edge/broken-link-404',
    cohort: 'edge_failure',
    doc_strategy: 'http_404_failure',
    ground_truth: { overall: 2, seo: 2, aeo: 2, geo: 1 },
    readme: `# Broken Link Project
See our [Documentation](https://docs.brokenlink404.org/missing) for details.
`,
    manifest: { name: 'broken-link-404' },
    external_docs: {
      'https://docs.brokenlink404.org/missing': {
        error: 'HTTP 404 Not Found',
        http_status: 404,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-022',
    repository: 'edge/server-error-500',
    cohort: 'edge_failure',
    doc_strategy: 'http_500_failure',
    ground_truth: { overall: 2, seo: 2, aeo: 2, geo: 1 },
    readme: `# Server Error Project
Find setup details in the [System Documentation](https://docs.servererror500.org/crash).
`,
    manifest: { name: 'server-error-500' },
    external_docs: {
      'https://docs.servererror500.org/crash': {
        error: 'HTTP 500 Internal Server Error',
        http_status: 500,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-023',
    repository: 'edge/timeout-unreachable',
    cohort: 'edge_failure',
    doc_strategy: 'network_timeout',
    ground_truth: { overall: 2, seo: 2, aeo: 2, geo: 1 },
    readme: `# Timeout Project
Consult the [Unreachable Documentation](https://docs.unreachable-network.org/guide).
`,
    manifest: { name: 'timeout-unreachable' },
    external_docs: {
      'https://docs.unreachable-network.org/guide': {
        http_status: 0,
        error: 'ECONNREFUSED',
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-024',
    repository: 'edge/binary-target-pdf',
    cohort: 'edge_failure',
    doc_strategy: 'binary_file_target',
    ground_truth: { overall: 2, seo: 2, aeo: 2, geo: 1 },
    readme: `# Binary Target Project
Download our [Complete User Manual](https://docs.binarytarget.org/manual.pdf).
`,
    manifest: { name: 'binary-target-pdf' },
    external_docs: {
      'https://docs.binarytarget.org/manual.pdf': {
        http_status: 200,
        content: `%PDF-1.4 binary data stream...`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-025',
    repository: 'edge/generic-anchor-text',
    cohort: 'edge_failure',
    doc_strategy: 'generic_anchor_rejection',
    ground_truth: { overall: 2, seo: 2, aeo: 2, geo: 1 },
    readme: `# Generic Anchor Project
A small utility tool. To learn more, [click here](https://mytoolsite.org/info).
`,
    manifest: { name: 'generic-anchor-project' },
    external_docs: {
      'https://mytoolsite.org/info': {
        http_status: 200,
        content: `# Info Page\nSome info.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-026',
    repository: 'edge/empty-doc-response',
    cohort: 'edge_failure',
    doc_strategy: 'empty_doc_content',
    ground_truth: { overall: 2, seo: 2, aeo: 2, geo: 1 },
    readme: `# Empty Doc Project
Check our [Documentation](https://docs.emptydocproject.org/index.html).
`,
    manifest: { name: 'empty-doc-project' },
    external_docs: {
      'https://docs.emptydocproject.org/index.html': {
        http_status: 200,
        content: `   \n\n  `,
      },
    },
    local_files: {},
  },

  // =========================================================================
  // COHORT 5: Adversarial, Stress & Cheating Defense (N=6)
  // =========================================================================
  {
    fixture_id: 'm9-5-027',
    repository: 'adversarial/massive-doc-payload',
    cohort: 'adversarial_stress',
    doc_strategy: 'guard_a_payload_cap',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Massive Doc Project
High scale telemetry engine.

Refer to the [Comprehensive Manual](https://docs.massivedoc.org/big-spec).
`,
    manifest: { name: 'massive-doc-project' },
    external_docs: {
      'https://docs.massivedoc.org/big-spec': {
        http_status: 200,
        content: `# Massive Specification\n\n## Installation\n\`\`\`bash\nnpm install massive-doc-project\n\`\`\`\n\n## Usage\n\`\`\`javascript\nconst engine = require('massive-doc-project');\nengine.start();\n\`\`\`\n` +
          Array.from({ length: 40 }, (_, i) => `\n## Section ${i + 1}\nDetailed specification paragraphs explaining telemetry architecture and buffer management.\n\`\`\`javascript\n// Sub-example ${i}\nengine.poll(${i});\n\`\`\`\n`).join('') +
          'x'.repeat(300000),
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-028',
    repository: 'adversarial/spam-link-readme',
    cohort: 'adversarial_stress',
    doc_strategy: 'guard_d_link_spam',
    ground_truth: { overall: 2, seo: 2, aeo: 2, geo: 1 },
    readme: `# Spam Link Farm
A tiny library.` +
      Array.from({ length: 40 }, (_, i) => `\n- [Spam Link ${i}](https://spam-domain-${i}.com/page)`).join('') +
      `\n`,
    manifest: { name: 'spam-link-readme' },
    external_docs: {},
    local_files: {},
  },
  {
    fixture_id: 'm9-5-029',
    repository: 'adversarial/stub-root-cheat-seo',
    cohort: 'adversarial_stress',
    doc_strategy: 'guard_c_stub_cheating',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 3 },
    readme: `# CheatRoot
See our [Rich Documentation](https://docs.cheatroot.org/full-guide).
`,
    manifest: { name: 'cheat-root' },
    external_docs: {
      'https://docs.cheatroot.org/full-guide': {
        http_status: 200,
        content: `# Complete Guide to CheatRoot\n\n## Installation\n\`\`\`bash\nnpm install cheat-root\n\`\`\`\n\n## Getting Started\n\`\`\`javascript\nimport { cheat } from 'cheat-root';\ncheat();\n\`\`\`\n\n## Feature Comparison\nCheatRoot provides unmatched capabilities compared to traditional libraries.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-030',
    repository: 'adversarial/stub-root-workspace-cheat',
    cohort: 'adversarial_stress',
    doc_strategy: 'guard_c_workspace_cheating',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# MonorepoStub
`,
    manifest: {
      name: 'monorepo-stub',
      workspaces: ['packages/*'],
    },
    local_files: {
      'packages/rich/package.json': JSON.stringify({ name: '@monorepo/rich' }),
      'packages/rich/README.md': `# @monorepo/rich\n\nComprehensive package inside a stub root.\n\n## Installation\n\`\`\`bash\nnpm install @monorepo/rich\n\`\`\`\n\n## Usage\n\`\`\`typescript\nimport { rich } from '@monorepo/rich';\nrich.execute();\n\`\`\`\n`,
    },
    external_docs: {},
  },
  {
    fixture_id: 'm9-5-031',
    repository: 'adversarial/contradictory-examples',
    cohort: 'adversarial_stress',
    doc_strategy: 'contradictory_evidence',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Contradictory Project
A versatile stream processor.

See the [Official Manual](https://docs.contradictory.org/manual).
`,
    manifest: { name: 'contradictory-project' },
    external_docs: {
      'https://docs.contradictory.org/manual': {
        http_status: 200,
        content: `# Contradictory Manual\n\n## Installation\n\`\`\`bash\nnpm install contradictory-v1\n\`\`\`\n\nAlternatively for modern runtimes:\n\`\`\`bash\nnpm install contradictory-v2\n\`\`\`\n\n## Usage\n\`\`\`javascript\nconst stream = require('contradictory-v2');\nstream.pipe();\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-5-032',
    repository: 'adversarial/circular-reference-docs',
    cohort: 'adversarial_stress',
    doc_strategy: 'circular_reference_guard',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Circular Docs Repo
A component framework.

See [Getting Started](docs/intro.md) for instructions.
`,
    manifest: { name: 'circular-docs' },
    local_files: {
      'docs/intro.md': `# Introduction\n\nSee our [Detailed Guide](guide.md) for code samples.\n\n## Installation\n\`\`\`bash\nnpm install circular-docs\n\`\`\`\n`,
      'docs/guide.md': `# Detailed Guide\n\nBack to [Introduction](intro.md).\n\n## Usage\n\`\`\`javascript\nimport { run } from 'circular-docs';\nrun();\n\`\`\`\n`,
    },
    external_docs: {},
  },
];
