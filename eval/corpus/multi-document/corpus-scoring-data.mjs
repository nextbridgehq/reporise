/**
 * corpus-m9-2-data.mjs — 40-Repository Scoring Integration Corpus for M9.2.
 *
 * Ground truth calibrated against empirical expert consensus:
 * - Sparse root with external docs: SEO=2, AEO=3, GEO=3, Overall=3
 * - Rich monorepo with nested docs: SEO=3, AEO=4, GEO=4, Overall=4
 * - Pure stub root with nested docs: SEO=2, AEO=3, GEO=2, Overall=2
 *
 * Partitioned into:
 * - Development Split (N=24): For observational calibration and guardrail tuning.
 * - Sealed Evaluation Split (N=16): Strictly untouched held-out evaluation set.
 */

export const M9_2_CORPUS_ITEMS = [
  // =========================================================================
  // DEVELOPMENT SPLIT (N=24)
  // =========================================================================

  // Cohort A: External Docs (Dev N=8)
  {
    fixture_id: 'm9-2-001',
    repository: 'redis/ioredis',
    split: 'dev',
    archetype: 'database',
    doc_strategy: 'external_custom_domain',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# ioredis
A robust, performance-focused and full-featured Redis client for Node.js.

See our [API Documentation](https://ioredis.readthedocs.io/en/latest/) for guides.
`,
    manifest: { name: 'ioredis', homepage: 'https://ioredis.readthedocs.io' },
    external_docs: {
      'https://ioredis.readthedocs.io/en/latest/': {
        http_status: 200,
        content: `# ioredis Documentation\n\n## Installation\n\`\`\`bash\nnpm install ioredis\n\`\`\`\n\n## Basic Usage\n\`\`\`js\nconst Redis = require("ioredis");\nconst redis = new Redis();\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-002',
    repository: 'prisma/prisma',
    split: 'dev',
    archetype: 'database',
    doc_strategy: 'external_custom_domain',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Prisma
Next-generation ORM for Node.js & TypeScript.

Check the [Prisma Documentation](https://www.prisma.io/docs) to get started.
`,
    manifest: { name: 'prisma', homepage: 'https://www.prisma.io' },
    external_docs: {
      'https://www.prisma.io/docs': {
        http_status: 200,
        content: `# Prisma Documentation\n\n## Quickstart\n\`\`\`bash\nnpm install prisma --save-dev\nnpx prisma init\n\`\`\`\n\n## Data modeling\nDefine your schema.prisma file.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-003',
    repository: 'pydantic/pydantic',
    split: 'dev',
    archetype: 'library',
    doc_strategy: 'external_custom_domain',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Pydantic
Data validation using Python type hints.

Documentation: [https://docs.pydantic.dev](https://docs.pydantic.dev/latest/)
`,
    manifest: { name: 'pydantic', homepage: 'https://docs.pydantic.dev' },
    external_docs: {
      'https://docs.pydantic.dev/latest/': {
        http_status: 200,
        content: `# Pydantic Documentation\n\n## Installation\n\`\`\`bash\npip install pydantic\n\`\`\`\n\n## Example\n\`\`\`python\nfrom pydantic import BaseModel\nclass User(BaseModel):\n    id: int\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-004',
    repository: 'tiangolo/sqlmodel',
    split: 'dev',
    archetype: 'database',
    doc_strategy: 'external_custom_domain',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# SQLModel
SQL databases in Python, designed for simplicity.
Documentation at [https://sqlmodel.tiangolo.com](https://sqlmodel.tiangolo.com).
`,
    manifest: { name: 'sqlmodel', homepage: 'https://sqlmodel.tiangolo.com' },
    external_docs: {
      'https://sqlmodel.tiangolo.com': {
        http_status: 200,
        content: `# SQLModel Tutorial\n\n## Installation\n\`\`\`bash\npip install sqlmodel\n\`\`\`\n\n## First Steps\nCreate your database models.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-005',
    repository: 'encode/httpx',
    split: 'dev',
    archetype: 'library',
    doc_strategy: 'external_encode',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# HTTPX
A next generation HTTP client for Python.
Documentation: [https://www.python-httpx.org](https://www.python-httpx.org)
`,
    manifest: { name: 'httpx', homepage: 'https://www.python-httpx.org' },
    external_docs: {
      'https://www.python-httpx.org': {
        http_status: 200,
        content: `# HTTPX\n\n## Installation\n\`\`\`bash\npip install httpx\n\`\`\`\n\n## Quickstart\n\`\`\`python\nimport httpx\nr = httpx.get('https://httpbin.org/get')\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-006',
    repository: 'huggingface/transformers',
    split: 'dev',
    archetype: 'ai-ml',
    doc_strategy: 'external_huggingface',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Transformers
State-of-the-art Machine Learning for PyTorch, TensorFlow, and JAX.
Documentation is at [https://huggingface.co/docs/transformers](https://huggingface.co/docs/transformers).
`,
    manifest: { name: 'transformers', homepage: 'https://huggingface.co/docs/transformers' },
    external_docs: {
      'https://huggingface.co/docs/transformers': {
        http_status: 200,
        content: `# Transformers Documentation\n\n## Quick tour\n\`\`\`bash\npip install transformers datasets\n\`\`\`\n\n## Pipeline usage\n\`\`\`python\nfrom transformers import pipeline\nclassifier = pipeline('sentiment-analysis')\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-007',
    repository: 'pallets/click',
    split: 'dev',
    archetype: 'cli',
    doc_strategy: 'external_palletsprojects',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Click
Python composable command line utility.
See documentation at [https://click.palletsprojects.com](https://click.palletsprojects.com).
`,
    manifest: { name: 'click', homepage: 'https://click.palletsprojects.com' },
    external_docs: {
      'https://click.palletsprojects.com': {
        http_status: 200,
        content: `# Click Documentation\n\n## Installing\n\`\`\`bash\npip install click\n\`\`\`\n\n## Quickstart\n\`\`\`python\nimport click\n@click.command()\ndef hello():\n    click.echo('Hello World!')\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-008',
    repository: 'encode/starlette',
    split: 'dev',
    archetype: 'web-framework',
    doc_strategy: 'external_encode',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Starlette
The little ASGI framework that shines.
Documentation: [https://www.starlette.io](https://www.starlette.io)
`,
    manifest: { name: 'starlette', homepage: 'https://www.starlette.io' },
    external_docs: {
      'https://www.starlette.io': {
        http_status: 200,
        content: `# Starlette\n\n## Installation\n\`\`\`bash\npip install starlette uvicorn\n\`\`\`\n\n## Example\n\`\`\`python\nfrom starlette.applications import Starlette\n\`\`\`\n`,
      },
    },
    local_files: {},
  },

  // Cohort B: Monorepos & Workspaces (Dev N=8)
  {
    fixture_id: 'm9-2-009',
    repository: 'tanstack/query',
    split: 'dev',
    archetype: 'monorepo',
    doc_strategy: 'workspace_and_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# TanStack Query
Powerful asynchronous state management.
Monorepo managing multiple framework adapters.
`,
    manifest: { name: 'query-monorepo', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/react-query/README.md': '# @tanstack/react-query\n\nReact hooks for TanStack Query.\n\n```bash\nnpm install @tanstack/react-query\n```\n',
      'docs/overview.md': '# TanStack Query Overview\n\nFetching and caching guide.\n',
    },
  },
  {
    fixture_id: 'm9-2-010',
    repository: 'colinhacks/zod',
    split: 'dev',
    archetype: 'library',
    doc_strategy: 'workspace_and_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Zod
TypeScript-first schema validation with static type inference.
`,
    manifest: { name: 'zod', homepage: 'https://zod.dev' },
    external_docs: {
      'https://zod.dev': {
        http_status: 200,
        content: `# Zod Documentation\n\n## Installation\n\`\`\`bash\nnpm install zod\n\`\`\`\n\n## Basic usage\n\`\`\`ts\nimport { z } from "zod";\nconst mySchema = z.string();\n\`\`\`\n`,
      },
    },
    local_files: {
      'docs/index.md': '# Zod Guide\n\nPrimitives and inference.\n',
    },
  },
  {
    fixture_id: 'm9-2-011',
    repository: 'apollographql/apollo-client',
    split: 'dev',
    archetype: 'monorepo',
    doc_strategy: 'workspace_and_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Apollo Client
A fully-featured, caching GraphQL client.
`,
    manifest: { name: 'apollo-client-root', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/core/README.md': '# @apollo/client\n\nCore GraphQL client.\n\n```bash\nnpm install @apollo/client graphql\n```\n',
      'docs/index.md': '# Apollo Documentation\n\nGetting started with queries.\n',
    },
  },
  {
    fixture_id: 'm9-2-012',
    repository: 'facebook/react-native',
    split: 'dev',
    archetype: 'monorepo',
    doc_strategy: 'workspace_and_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# React Native
A framework for building native apps using React.
`,
    manifest: { name: 'react-native-root', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/react-native/README.md': '# react-native\n\nCore react native runtime.\n\n```bash\nnpx react-native init MyApp\n```\n',
      'docs/environment-setup.md': '# Environment Setup\n\nSetting up Android and iOS.\n',
    },
  },
  {
    fixture_id: 'm9-2-013',
    repository: 'tailwindlabs/headlessui',
    split: 'dev',
    archetype: 'monorepo',
    doc_strategy: 'workspace_and_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Headless UI
Completely unstyled, fully accessible UI components.
`,
    manifest: { name: 'headlessui-monorepo', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/@headlessui-react/README.md': '# @headlessui/react\n\nReact components.\n\n```bash\nnpm install @headlessui/react\n```\n',
      'packages/@headlessui-vue/README.md': '# @headlessui/vue\n\nVue components.\n\n```bash\nnpm install @headlessui/vue\n```\n',
    },
  },
  {
    fixture_id: 'm9-2-014',
    repository: 'preactjs/preact',
    split: 'dev',
    archetype: 'web-framework',
    doc_strategy: 'workspace_and_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Preact
Fast 3kB alternative to React with the same modern API.
`,
    manifest: { name: 'preact', homepage: 'https://preactjs.com' },
    external_docs: {},
    local_files: {
      'docs/getting-started.md': '# Getting Started with Preact\n\n## Installation\n\`\`\`bash\nnpm install preact\n\`\`\`\n\n## Usage\nRender components directly.\n',
    },
  },
  {
    fixture_id: 'm9-2-015',
    repository: 'vitejs/vite',
    split: 'dev',
    archetype: 'monorepo',
    doc_strategy: 'workspace_and_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Vite
Next Generation Frontend Tooling.
`,
    manifest: { name: 'vite-monorepo', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/vite/README.md': '# vite\n\nCore Vite CLI.\n\n```bash\nnpm create vite@latest\n```\n',
      'docs/guide/index.md': '# Vite Guide\n\nFast dev server.\n',
    },
  },
  {
    fixture_id: 'm9-2-016',
    repository: 'sveltejs/kit',
    split: 'dev',
    archetype: 'monorepo',
    doc_strategy: 'workspace_and_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# SvelteKit
The fastest way to build Svelte apps.
`,
    manifest: { name: 'sveltekit-monorepo', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/kit/README.md': '# @sveltejs/kit\n\nCore kit package.\n\n```bash\nnpx sv create my-app\n```\n',
      'docs/index.md': '# SvelteKit Docs\n\nRouting and SSR.\n',
    },
  },

  // Cohort C: Sparse Root Landing (Dev N=8)
  {
    fixture_id: 'm9-2-017',
    repository: 'esbuild/esbuild',
    split: 'dev',
    archetype: 'devtool',
    doc_strategy: 'sparse_root_external',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# esbuild
An extremely fast bundler for the web.
See official documentation at [https://esbuild.github.io](https://esbuild.github.io).
`,
    manifest: { name: 'esbuild', homepage: 'https://esbuild.github.io' },
    external_docs: {
      'https://esbuild.github.io': {
        http_status: 200,
        content: `# esbuild\n\n## Getting Started\n\`\`\`bash\nnpm install --save-exact --save-dev esbuild\n\`\`\`\n\n## Build script\n\`\`\`js\nrequire('esbuild').buildSync({ entryPoints: ['app.jsx'], outdir: 'out' })\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-018',
    repository: 'swc-project/swc',
    split: 'dev',
    archetype: 'devtool',
    doc_strategy: 'sparse_root_external',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# SWC
Rust-based platform for the Web.
Documentation: [https://swc.rs/docs](https://swc.rs/docs/getting-started)
`,
    manifest: { name: 'swc', homepage: 'https://swc.rs' },
    external_docs: {
      'https://swc.rs/docs/getting-started': {
        http_status: 200,
        content: `# Getting Started with SWC\n\n## Installation\n\`\`\`bash\nnpm install -D @swc/cli @swc/core\n\`\`\`\n\n## Usage\nRun \`npx swc ./src -d dist\`.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-019',
    repository: 'biomejs/biome',
    split: 'dev',
    archetype: 'devtool',
    doc_strategy: 'sparse_root_external',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# Biome
One toolchain for your web project.
Read docs at [https://biomejs.dev](https://biomejs.dev).
`,
    manifest: { name: '@biomejs/biome', homepage: 'https://biomejs.dev' },
    external_docs: {
      'https://biomejs.dev': {
        http_status: 200,
        content: `# Biome Documentation\n\n## Getting Started\n\`\`\`bash\nnpm install --save-dev --save-exact @biomejs/biome\nnpx @biomejs/biome init\n\`\`\`\n\n## Formatter & Linter\nFormat code quickly.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-020',
    repository: 'solidjs/solid',
    split: 'dev',
    archetype: 'web-framework',
    doc_strategy: 'sparse_root_external',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# Solid
Simple and performant reactivity for building user interfaces.
Official docs: [https://docs.solidjs.com](https://docs.solidjs.com).
`,
    manifest: { name: 'solid-js', homepage: 'https://solidjs.com' },
    external_docs: {
      'https://docs.solidjs.com': {
        http_status: 200,
        content: `# SolidJS Documentation\n\n## Quick Start\n\`\`\`bash\nnpx degit solidjs/templates/js my-app\n\`\`\`\n\n## Primitives\nCreate signals and effects.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-021',
    repository: 'honojs/hono',
    split: 'dev',
    archetype: 'web-framework',
    doc_strategy: 'sparse_root_external',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# Hono
Fast, lightweight, web-standards web framework.
Documentation: [https://hono.dev](https://hono.dev).
`,
    manifest: { name: 'hono', homepage: 'https://hono.dev' },
    external_docs: {
      'https://hono.dev': {
        http_status: 200,
        content: `# Hono Documentation\n\n## Quickstart\n\`\`\`bash\nnpm create hono@latest\n\`\`\`\n\n## Basic App\n\`\`\`ts\nimport { Hono } from "hono";\nconst app = new Hono();\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-022',
    repository: 'astral-sh/ruff',
    split: 'dev',
    archetype: 'devtool',
    doc_strategy: 'sparse_root_external',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# Ruff
An extremely fast Python linter and code formatter.
Documentation: [https://docs.astral.sh/ruff](https://docs.astral.sh/ruff).
`,
    manifest: {},
    external_docs: {
      'https://docs.astral.sh/ruff': {
        http_status: 200,
        content: `# Ruff Documentation\n\n## Installation\n\`\`\`bash\npip install ruff\n\`\`\`\n\n## Usage\nRun \`ruff check .\` to lint.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-023',
    repository: 'oxc-project/oxc',
    split: 'dev',
    archetype: 'devtool',
    doc_strategy: 'sparse_root_external',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# Oxc
The JavaScript Oxidation Compiler.
Guide: [https://oxc.rs/docs](https://oxc.rs/docs).
`,
    manifest: { name: 'oxc', homepage: 'https://oxc.rs' },
    external_docs: {
      'https://oxc.rs/docs': {
        http_status: 200,
        content: `# Oxc Guide\n\n## Installation\n\`\`\`bash\nnpm install -D oxlint\n\`\`\`\n\n## Usage\nRun \`npx oxlint\`.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-024',
    repository: 'shadcn/taxonomy',
    split: 'dev',
    archetype: 'web-framework',
    doc_strategy: 'sparse_root_with_docs',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# Taxonomy
An open source application built using the new router, server components and everything new in Next.js.
`,
    manifest: { name: 'taxonomy' },
    external_docs: {},
    local_files: {
      'docs/getting-started.md': '# Getting Started\n\n## Running locally\n\`\`\`bash\npnpm install\npnpm dev\n\`\`\`\n',
    },
  },

  // =========================================================================
  // SEALED EVALUATION SPLIT (N=16) — UNTOUCHED GENERALIZATION EVALUATION
  // =========================================================================

  // Cohort A: External Docs (Sealed N=5)
  {
    fixture_id: 'm9-2-025',
    repository: 'tortoise/tortoise-orm',
    split: 'evaluation_sealed',
    archetype: 'database',
    doc_strategy: 'external_readthedocs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Tortoise ORM
Familiar asyncio Python ORM.
Read docs at [https://tortoise.github.io](https://tortoise.github.io).
`,
    manifest: { name: 'tortoise-orm', homepage: 'https://tortoise.github.io' },
    external_docs: {
      'https://tortoise.github.io': {
        http_status: 200,
        content: `# Tortoise ORM Documentation\n\n## Installation\n\`\`\`bash\npip install tortoise-orm\n\`\`\`\n\n## Getting Started\nInitialize models.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-026',
    repository: 'aio-libs/aiohttp',
    split: 'evaluation_sealed',
    archetype: 'web-framework',
    doc_strategy: 'external_readthedocs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# aiohttp
Async HTTP client/server for asyncio and Python.
Official docs: [https://docs.aiohttp.org](https://docs.aiohttp.org/en/stable/).
`,
    manifest: { name: 'aiohttp', homepage: 'https://docs.aiohttp.org' },
    external_docs: {
      'https://docs.aiohttp.org/en/stable/': {
        http_status: 200,
        content: `# aiohttp\n\n## Install\n\`\`\`bash\npip install aiohttp\n\`\`\`\n\n## Client example\n\`\`\`python\nimport aiohttp\nasync with aiohttp.ClientSession() as session:\n    pass\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-027',
    repository: 'marshmallow-code/marshmallow',
    split: 'evaluation_sealed',
    archetype: 'library',
    doc_strategy: 'external_readthedocs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# marshmallow
Simplified object serialization.
Documentation: [https://marshmallow.readthedocs.io](https://marshmallow.readthedocs.io/en/stable/).
`,
    manifest: { name: 'marshmallow', homepage: 'https://marshmallow.readthedocs.io' },
    external_docs: {
      'https://marshmallow.readthedocs.io/en/stable/': {
        http_status: 200,
        content: `# marshmallow documentation\n\n## Installation\n\`\`\`bash\npip install marshmallow\n\`\`\`\n\n## Guide\nDeclare schemas.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-028',
    repository: 'pytest-dev/pytest',
    split: 'evaluation_sealed',
    archetype: 'devtool',
    doc_strategy: 'external_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# pytest
The pytest framework makes it easy to write small, readable tests.
Documentation: [https://docs.pytest.org](https://docs.pytest.org/en/stable/).
`,
    manifest: { name: 'pytest', homepage: 'https://docs.pytest.org' },
    external_docs: {
      'https://docs.pytest.org/en/stable/': {
        http_status: 200,
        content: `# pytest documentation\n\n## Install pytest\n\`\`\`bash\npip install pytest\n\`\`\`\n\n## Create your first test\n\`\`\`python\ndef test_answer():\n    assert 1 == 1\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-029',
    repository: 'scikit-learn/scikit-learn',
    split: 'evaluation_sealed',
    archetype: 'ai-ml',
    doc_strategy: 'external_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# scikit-learn
Machine learning in Python.
Documentation: [https://scikit-learn.org/stable/](https://scikit-learn.org/stable/).
`,
    manifest: { name: 'scikit-learn', homepage: 'https://scikit-learn.org' },
    external_docs: {
      'https://scikit-learn.org/stable/': {
        http_status: 200,
        content: `# scikit-learn documentation\n\n## Installation\n\`\`\`bash\npip install scikit-learn\n\`\`\`\n\n## An example\nFit a classifier.\n`,
      },
    },
    local_files: {},
  },

  // Cohort B: Monorepos & Workspaces (Sealed N=5)
  {
    fixture_id: 'm9-2-030',
    repository: 'formkit/formkit',
    split: 'evaluation_sealed',
    archetype: 'monorepo',
    doc_strategy: 'workspace_and_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# FormKit
Form authoring framework for Vue developers.
`,
    manifest: { name: 'formkit-monorepo', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/vue/README.md': '# @formkit/vue\n\nVue component integration.\n\n```bash\nnpm install @formkit/vue\n```\n',
      'docs/index.md': '# FormKit Guide\n\nSchema definitions.\n',
    },
  },
  {
    fixture_id: 'm9-2-031',
    repository: 'vueuse/vueuse',
    split: 'evaluation_sealed',
    archetype: 'monorepo',
    doc_strategy: 'workspace_and_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# VueUse
Collection of essential Vue Composition Utilities.
`,
    manifest: { name: 'vueuse-monorepo', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/core/README.md': '# @vueuse/core\n\nCore utilities.\n\n```bash\nnpm install @vueuse/core\n```\n',
      'docs/guide.md': '# VueUse Guide\n\nComposable architecture.\n',
    },
  },
  {
    fixture_id: 'm9-2-032',
    repository: 'radix-ui/primitives',
    split: 'evaluation_sealed',
    archetype: 'monorepo',
    doc_strategy: 'workspace_and_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Radix Primitives
Unstyled, accessible components for building high-quality design systems.
`,
    manifest: { name: 'radix-primitives', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/react/dialog/README.md': '# @radix-ui/react-dialog\n\nAccessible dialog primitive.\n\n```bash\nnpm install @radix-ui/react-dialog\n```\n',
      'docs/overview.md': '# Radix Primitives Overview\n\nAccessibility first.\n',
    },
  },
  {
    fixture_id: 'm9-2-033',
    repository: 'ant-design/ant-design',
    split: 'evaluation_sealed',
    archetype: 'monorepo',
    doc_strategy: 'workspace_and_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Ant Design
An enterprise-class UI design language and React UI library.
`,
    manifest: { name: 'antd-root', private: true, workspaces: ['components/*'] },
    external_docs: {},
    local_files: {
      'docs/react/introduce.md': '# Ant Design Introduction\n\n## Install\n\`\`\`bash\nnpm install antd\n\`\`\`\n',
    },
  },
  {
    fixture_id: 'm9-2-034',
    repository: 'mantinedev/mantine',
    split: 'evaluation_sealed',
    archetype: 'monorepo',
    doc_strategy: 'workspace_and_docs',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    readme: `# Mantine
React components and hooks library.
`,
    manifest: { name: 'mantine-root', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/@mantine/core/README.md': '# @mantine/core\n\nCore components.\n\n```bash\nnpm install @mantine/core @mantine/hooks\n```\n',
      'docs/getting-started.md': '# Mantine Getting Started\n\nSetup Provider.\n',
    },
  },

  // Cohort C: Sparse Root Landing (Sealed N=6)
  {
    fixture_id: 'm9-2-035',
    repository: 'unjs/nitro',
    split: 'evaluation_sealed',
    archetype: 'web-framework',
    doc_strategy: 'sparse_root_external',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# Nitro
Next Generation Server Toolkit.
Docs at [https://nitro.unjs.io](https://nitro.unjs.io).
`,
    manifest: { name: 'nitropack', homepage: 'https://nitro.unjs.io' },
    external_docs: {
      'https://nitro.unjs.io': {
        http_status: 200,
        content: `# Nitro Documentation\n\n## Getting Started\n\`\`\`bash\nnpx giget@latest nitro-starter my-server\n\`\`\`\n\n## Universal Deployment\nDeploy to cloudflare, node, vercel.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-036',
    repository: 'unjs/unplugin',
    split: 'evaluation_sealed',
    archetype: 'devtool',
    doc_strategy: 'sparse_root_with_docs',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# unplugin
Unified plugin system for build tools.
`,
    manifest: { name: 'unplugin' },
    external_docs: {},
    local_files: {
      'docs/guide.md': '# unplugin Guide\n\n## Installation\n\`\`\`bash\nnpm install unplugin\n\`\`\`\n',
    },
  },
  {
    fixture_id: 'm9-2-037',
    repository: 'drizzle-team/drizzle-orm',
    split: 'evaluation_sealed',
    archetype: 'database',
    doc_strategy: 'sparse_root_external',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# Drizzle ORM
TypeScript ORM that lets you say goodbye to boilerplate.
Docs: [https://orm.drizzle.team](https://orm.drizzle.team).
`,
    manifest: { name: 'drizzle-orm', homepage: 'https://orm.drizzle.team' },
    external_docs: {
      'https://orm.drizzle.team': {
        http_status: 200,
        content: `# Drizzle ORM Documentation\n\n## Quick Start\n\`\`\`bash\nnpm install drizzle-orm pg\n\`\`\`\n\n## Schema declaration\nDefine tables with drizzle.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-038',
    repository: 'lucide-icons/lucide',
    split: 'evaluation_sealed',
    archetype: 'library',
    doc_strategy: 'sparse_root_external',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# Lucide
Beautiful & consistent icon toolkit.
Read the guide at [https://lucide.dev/guide](https://lucide.dev/guide).
`,
    manifest: { name: 'lucide', homepage: 'https://lucide.dev' },
    external_docs: {
      'https://lucide.dev/guide': {
        http_status: 200,
        content: `# Lucide Guide\n\n## Installation\n\`\`\`bash\nnpm install lucide-react\n\`\`\`\n\n## Rendering icons\n\`\`\`jsx\nimport { Camera } from 'lucide-react';\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-2-039',
    repository: 'colinhacks/trpc-openapi',
    split: 'evaluation_sealed',
    archetype: 'devtool',
    doc_strategy: 'sparse_root_with_docs',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# trpc-openapi
OpenAPI support for tRPC.
`,
    manifest: { name: 'trpc-openapi' },
    external_docs: {},
    local_files: {
      'docs/index.md': '# trpc-openapi Documentation\n\n## Installation\n\`\`\`bash\nnpm install trpc-openapi\n\`\`\`\n',
    },
  },
  {
    fixture_id: 'm9-2-040',
    repository: 'payloadcms/payload',
    split: 'evaluation_sealed',
    archetype: 'web-framework',
    doc_strategy: 'sparse_root_external',
    ground_truth: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    readme: `# Payload
The modern backend and CMS for Next.js.
Docs: [https://payloadcms.com/docs](https://payloadcms.com/docs).
`,
    manifest: { name: 'payload', homepage: 'https://payloadcms.com' },
    external_docs: {
      'https://payloadcms.com/docs': {
        http_status: 200,
        content: `# Payload CMS Documentation\n\n## Installation\n\`\`\`bash\nnpx create-payload-app@latest\n\`\`\`\n\n## Configuration\nPayload config file.\n`,
      },
    },
    local_files: {},
  },
];
