/**
 * corpus-data.mjs — 30-Repository Feasibility Corpus for M9.1.
 *
 * Distinct and isolated from M8 Benchmark Track:
 * - Cohort C1: External Documentation (N=10)
 * - Cohort C2: Monorepo & Workspaces (N=10)
 * - Cohort C3: Sparse Landing / Redirect / Documentation Trees (N=10)
 */

export const M9_CORPUS_ITEMS = [
  // COHORT C1: External Documentation (N=10)
  {
    fixture_id: 'm9-001',
    repository: 'sqlalchemy/sqlalchemy',
    cohort: 'C1_EXTERNAL_DOCS',
    description: 'The Database Toolkit for Python',
    doc_strategy: 'external_readthedocs',
    readme: `# SQLAlchemy
The Python SQL Toolkit and Object Relational Mapper.

For complete installation and tutorials, see our official documentation:
[SQLAlchemy Documentation](https://docs.sqlalchemy.org/en/20/)
`,
    manifest: { name: 'sqlalchemy', homepage: 'https://docs.sqlalchemy.org' },
    external_docs: {
      'https://docs.sqlalchemy.org/en/20/': {
        http_status: 200,
        content: `# SQLAlchemy 2.0 Documentation\n\n## Overview\nSQLAlchemy is the Python SQL toolkit and Object Relational Mapper.\n\n## Installation\n\`\`\`bash\npip install sqlalchemy\n\`\`\`\n\n## Quick Start\n\`\`\`python\nfrom sqlalchemy import create_engine\nengine = create_engine('sqlite:///:memory:')\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-002',
    repository: 'celery/celery',
    cohort: 'C1_EXTERNAL_DOCS',
    description: 'Distributed Task Queue',
    doc_strategy: 'external_custom_domain',
    readme: `# Celery
Distributed Task Queue (PHP, Python, etc.)

Check out the [Official Documentation](https://docs.celeryq.dev/en/stable/) for getting started.
`,
    manifest: { name: 'celery', homepage: 'https://docs.celeryq.dev' },
    external_docs: {
      'https://docs.celeryq.dev/en/stable/': {
        http_status: 200,
        content: `# Celery - Distributed Task Queue\n\n## Getting Started\n\`\`\`bash\npip install celery\n\`\`\`\n\n## First Steps\nRun celery worker commands.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-003',
    repository: 'expressjs/express',
    cohort: 'C1_EXTERNAL_DOCS',
    description: 'Fast, unopinionated, minimalist web framework for Node.js',
    doc_strategy: 'external_custom_domain',
    readme: `# Express
Fast, unopinionated, minimalist web framework for Node.js.

See [Getting Started Guide](https://expressjs.com/en/starter/installing.html) on our website.
`,
    manifest: { name: 'express', homepage: 'https://expressjs.com/' },
    external_docs: {
      'https://expressjs.com/en/starter/installing.html': {
        http_status: 200,
        content: `# Installing Express\n\nAssuming you've already installed Node.js:\n\n\`\`\`bash\nnpm install express\n\`\`\`\n\n## Quick Start\n\`\`\`js\nconst express = require('express');\nconst app = express();\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-004',
    repository: 'pandas-dev/pandas',
    cohort: 'C1_EXTERNAL_DOCS',
    description: 'Flexible and powerful data analysis / manipulation library for Python',
    doc_strategy: 'external_pydata',
    readme: `# pandas: powerful Python data analysis toolkit
Documentation is available at [pandas Documentation](https://pandas.pydata.org/docs/).
`,
    manifest: { name: 'pandas', homepage: 'https://pandas.pydata.org' },
    external_docs: {
      'https://pandas.pydata.org/docs/': {
        http_status: 200,
        content: `# pandas Documentation\n\n## Getting Started\n\`\`\`bash\npip install pandas\n\`\`\`\n\n## Package overview\nData structures and algorithms.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-005',
    repository: 'django/django',
    cohort: 'C1_EXTERNAL_DOCS',
    description: 'The Web framework for perfectionists with deadlines',
    doc_strategy: 'external_djangoproject',
    readme: `# Django
Official documentation is at [Django Docs](https://docs.djangoproject.com/en/stable/).
`,
    manifest: { name: 'Django', homepage: 'https://www.djangoproject.com/' },
    external_docs: {
      'https://docs.djangoproject.com/en/stable/': {
        http_status: 200,
        content: `# Django Documentation\n\n## Quick-install guide\n\`\`\`bash\npip install Django\n\`\`\`\n\n## Writing your first Django app\nRun django-admin startproject mysite.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-006',
    repository: 'pytorch/pytorch',
    cohort: 'C1_EXTERNAL_DOCS',
    description: 'Tensors and Dynamic neural networks in Python with strong GPU acceleration',
    doc_strategy: 'external_pytorch_org',
    readme: `# PyTorch
Please refer to the [PyTorch Documentation](https://pytorch.org/docs/stable/).
`,
    manifest: { name: 'torch', homepage: 'https://pytorch.org/' },
    external_docs: {
      'https://pytorch.org/docs/stable/': {
        http_status: 200,
        content: `# PyTorch Documentation\n\n## Installation\n\`\`\`bash\npip install torch torchvision\n\`\`\`\n\n## Introduction\nPyTorch is an optimized tensor library.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-007',
    repository: 'ray-project/ray',
    cohort: 'C1_EXTERNAL_DOCS',
    description: 'An open source framework that provides a simple, universal API for building distributed applications',
    doc_strategy: 'external_readthedocs',
    readme: `# Ray
Visit the [Ray Documentation](https://docs.ray.io/en/latest/).
`,
    manifest: { name: 'ray', homepage: 'https://docs.ray.io' },
    external_docs: {
      'https://docs.ray.io/en/latest/': {
        http_status: 200,
        content: `# Welcome to Ray!\n\n## Installing Ray\n\`\`\`bash\npip install -U "ray[default]"\n\`\`\`\n\n## What is Ray?\nRay is a unified framework.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-008',
    repository: 'pallets/flask',
    cohort: 'C1_EXTERNAL_DOCS',
    description: 'The Python micro framework for building web applications',
    doc_strategy: 'external_palletsprojects',
    readme: `# Flask
Documentation: [Flask Documentation](https://flask.palletsprojects.com/en/stable/)
`,
    manifest: { name: 'Flask', homepage: 'https://palletsprojects.com/p/flask/' },
    external_docs: {
      'https://flask.palletsprojects.com/en/stable/': {
        http_status: 200,
        content: `# Flask Documentation\n\n## Installation\n\`\`\`bash\npip install Flask\n\`\`\`\n\n## A Minimal Application\n\`\`\`python\nfrom flask import Flask\napp = Flask(__name__)\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-009',
    repository: 'k3s-io/k3s',
    cohort: 'C1_EXTERNAL_DOCS',
    description: 'Lightweight Kubernetes',
    doc_strategy: 'external_custom_docs',
    readme: `# K3s - Lightweight Kubernetes
See our [Official Documentation](https://docs.k3s.io/) for installation.
`,
    manifest: { name: 'k3s', homepage: 'https://k3s.io' },
    external_docs: {
      'https://docs.k3s.io/': {
        http_status: 200,
        content: `# K3s Documentation\n\n## Quick Start\n\`\`\`bash\ncurl -sfL https://get.k3s.io | sh -\n\`\`\`\n\n## Architecture\nK3s packages Kubernetes into a single binary.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-010',
    repository: 'fastapi/fastapi',
    cohort: 'C1_EXTERNAL_DOCS',
    description: 'FastAPI framework, high performance, easy to learn, fast to code, ready for production',
    doc_strategy: 'external_tiangolo',
    readme: `# FastAPI
Documentation is at [FastAPI Tutorial](https://fastapi.tiangolo.com/tutorial/).
`,
    manifest: { name: 'fastapi', homepage: 'https://fastapi.tiangolo.com' },
    external_docs: {
      'https://fastapi.tiangolo.com/tutorial/': {
        http_status: 200,
        content: `# FastAPI Tutorial - User Guide\n\n## Installation\n\`\`\`bash\npip install "fastapi[standard]"\n\`\`\`\n\n## First Steps\n\`\`\`python\nfrom fastapi import FastAPI\napp = FastAPI()\n\`\`\`\n`,
      },
    },
    local_files: {},
  },

  // COHORT C2: Monorepo & Workspaces (N=10)
  {
    fixture_id: 'm9-011',
    repository: 'babel/babel',
    cohort: 'C2_MONOREPO_WORKSPACES',
    description: 'The compiler for next generation JavaScript',
    doc_strategy: 'workspace_packages',
    readme: `# Babel
A compiler for writing next generation JavaScript.
This is a monorepo containing multiple packages.
`,
    manifest: { name: 'babel', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/babel-core/README.md': '# @babel/core\n\nBabel compiler core.\n\n```bash\nnpm install --save-dev @babel/core\n```\n',
      'packages/babel-cli/README.md': '# @babel/cli\n\nBabel command line interface.\n\n```bash\nnpm install --save-dev @babel/cli\n```\n',
      'docs/index.md': '# Babel Architecture & Contribution\n\nInternal compiler architecture.\n',
    },
  },
  {
    fixture_id: 'm9-012',
    repository: 'vercel/turborepo',
    cohort: 'C2_MONOREPO_WORKSPACES',
    description: 'Build system for TypeScript and JavaScript monorepos',
    doc_strategy: 'workspace_packages',
    readme: `# Turborepo
High-performance build system for TypeScript monorepos.
`,
    manifest: { name: 'turborepo', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/turbo/README.md': '# turbo\n\nCLI tool for Turborepo.\n\n```bash\nnpm install turbo --global\n```\n',
      'docs/index.md': '# Turborepo Documentation\n\nGetting started with build caching.\n',
    },
  },
  {
    fixture_id: 'm9-013',
    repository: 'jestjs/jest',
    cohort: 'C2_MONOREPO_WORKSPACES',
    description: 'Delightful JavaScript Testing',
    doc_strategy: 'workspace_packages',
    readme: `# Jest
Delightful JavaScript Testing Framework with a focus on simplicity.
`,
    manifest: { name: 'jest-monorepo', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/jest/README.md': '# jest\n\nCore Jest testing package.\n\n```bash\nnpm install --save-dev jest\n```\n',
      'docs/GettingStarted.md': '# Getting Started with Jest\n\nRunning your first test suite.\n',
    },
  },
  {
    fixture_id: 'm9-014',
    repository: 'trpc/trpc',
    cohort: 'C2_MONOREPO_WORKSPACES',
    description: 'End-to-end typesafe APIs made easy',
    doc_strategy: 'workspace_packages',
    readme: `# tRPC
End-to-end typesafe APIs made easy.
`,
    manifest: { name: 'trpc-root', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/server/README.md': '# @trpc/server\n\nServer library for tRPC.\n\n```bash\nnpm install @trpc/server\n```\n',
      'packages/client/README.md': '# @trpc/client\n\nClient library for tRPC.\n\n```bash\nnpm install @trpc/client\n```\n',
      'docs/quickstart.md': '# Quickstart\n\nSet up your router.\n',
    },
  },
  {
    fixture_id: 'm9-015',
    repository: 'storybookjs/storybook',
    cohort: 'C2_MONOREPO_WORKSPACES',
    description: 'The UI component workshop',
    doc_strategy: 'workspace_packages',
    readme: `# Storybook
The UI component workshop for frontend developers.
`,
    manifest: { name: 'storybook-monorepo', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/core/README.md': '# @storybook/core\n\nCore Storybook engine.\n\n```bash\nnpm i storybook\n```\n',
      'docs/index.md': '# Storybook Architecture\n\nComponent isolated rendering.\n',
    },
  },
  {
    fixture_id: 'm9-016',
    repository: 'lerna/lerna',
    cohort: 'C2_MONOREPO_WORKSPACES',
    description: 'Fast, elegant JavaScript/TypeScript monorepos',
    doc_strategy: 'workspace_packages',
    readme: `# Lerna
A tool for managing JavaScript projects with multiple packages.
`,
    manifest: { name: 'lerna-root', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/lerna/README.md': '# lerna\n\nCLI tool for monorepo publishing.\n\n```bash\nnpm install -g lerna\n```\n',
      'docs/getting-started.md': '# Getting Started with Lerna\n\nBootstrap your workspace.\n',
    },
  },
  {
    fixture_id: 'm9-017',
    repository: 'nrwl/nx',
    cohort: 'C2_MONOREPO_WORKSPACES',
    description: 'Smart Monorepos, Fast CI',
    doc_strategy: 'workspace_packages',
    readme: `# Nx
Smart Monorepos, Fast CI.
`,
    manifest: { name: 'nx-root', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/nx/README.md': '# nx\n\nNx build orchestrator.\n\n```bash\nnpm install -g nx\n```\n',
      'docs/intro.md': '# Nx Intro\n\nMonorepo tooling.\n',
    },
  },
  {
    fixture_id: 'm9-018',
    repository: 'pnpm/pnpm',
    cohort: 'C2_MONOREPO_WORKSPACES',
    description: 'Fast, disk space efficient package manager',
    doc_strategy: 'workspace_packages',
    readme: `# pnpm
Fast, disk space efficient package manager.
`,
    manifest: { name: 'pnpm-workspace-root', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/core/README.md': '# @pnpm/core\n\nCore pnpm installation logic.\n',
      'docs/index.md': '# pnpm Architecture\n\nHard link and symlink store.\n',
    },
  },
  {
    fixture_id: 'm9-019',
    repository: 'remix-run/remix',
    cohort: 'C2_MONOREPO_WORKSPACES',
    description: 'Full stack web framework',
    doc_strategy: 'workspace_packages',
    readme: `# Remix
Full stack web framework.
`,
    manifest: { name: 'remix-root', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/remix-node/README.md': '# @remix-run/node\n\nNode runtime adapter for Remix.\n\n```bash\nnpm install @remix-run/node\n```\n',
      'docs/index.md': '# Remix Documentation\n\nRouting and nested layout architecture.\n',
    },
  },
  {
    fixture_id: 'm9-020',
    repository: 'vitest-dev/vitest',
    cohort: 'C2_MONOREPO_WORKSPACES',
    description: 'Next generation testing framework powered by Vite',
    doc_strategy: 'workspace_packages',
    readme: `# Vitest
A Vite-native test framework.
`,
    manifest: { name: 'vitest-monorepo', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/vitest/README.md': '# vitest\n\nVitest runner.\n\n```bash\nnpm install -D vitest\n```\n',
      'docs/guide.md': '# Vitest Guide\n\nConfiguring test files.\n',
    },
  },

  // COHORT C3: Sparse Landing / Redirect / Documentation Trees (N=10)
  {
    fixture_id: 'm9-021',
    repository: 'vuejs/core',
    cohort: 'C3_SPARSE_REDIRECT',
    description: 'Vue.js is a progressive, incrementally-adoptable JavaScript framework',
    doc_strategy: 'sparse_root_with_docs',
    readme: `# Vue.js
Vue.js is a progressive JavaScript framework.
Please see the [Vue.js Guide](https://vuejs.org/guide/introduction.html) for getting started.
`,
    manifest: { name: 'vue', homepage: 'https://vuejs.org' },
    external_docs: {
      'https://vuejs.org/guide/introduction.html': {
        http_status: 200,
        content: `# Introduction to Vue\n\n## What is Vue?\nVue is a framework for building UIs.\n\n## Quick Start\n\`\`\`bash\nnpm create vue@latest\n\`\`\`\n`,
      },
    },
    local_files: {
      'docs/index.md': '# Contributing to Vue Core\n\nInternal reactive engine documentation.\n',
    },
  },
  {
    fixture_id: 'm9-022',
    repository: 'tailwindlabs/tailwindcss',
    cohort: 'C3_SPARSE_REDIRECT',
    description: 'A utility-first CSS framework for rapid UI development',
    doc_strategy: 'sparse_root_external',
    readme: `# Tailwind CSS
A utility-first CSS framework.
For documentation, visit [tailwindcss.com](https://tailwindcss.com/docs).
`,
    manifest: { name: 'tailwindcss', homepage: 'https://tailwindcss.com' },
    external_docs: {
      'https://tailwindcss.com/docs': {
        http_status: 200,
        content: `# Tailwind CSS Documentation\n\n## Installation\n\`\`\`bash\nnpm install -D tailwindcss\nnpx tailwindcss init\n\`\`\`\n\n## Configuration\nConfigure template paths.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-023',
    repository: 'denoland/deno',
    cohort: 'C3_SPARSE_REDIRECT',
    description: 'A modern runtime for JavaScript and TypeScript',
    doc_strategy: 'sparse_root_external',
    readme: `# Deno
A modern runtime for JavaScript and TypeScript.
Read the manual at [Deno Manual](https://docs.deno.com/runtime/manual/).
`,
    manifest: {},
    external_docs: {
      'https://docs.deno.com/runtime/manual/': {
        http_status: 200,
        content: `# Deno Manual\n\n## Installation\n\`\`\`bash\ncurl -fsSL https://deno.land/install.sh | sh\n\`\`\`\n\n## Getting Started\n\`\`\`bash\ndeno run https://deno.land/std/examples/welcome.ts\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-024',
    repository: 'grafana/grafana',
    cohort: 'C3_SPARSE_REDIRECT',
    description: 'The open and composable observability and data visualization platform',
    doc_strategy: 'sparse_root_with_docs',
    readme: `# Grafana
The open observability platform.
Read the [Grafana Documentation](https://grafana.com/docs/).
`,
    manifest: { name: 'grafana', homepage: 'https://grafana.com' },
    external_docs: {
      'https://grafana.com/docs/': {
        http_status: 200,
        content: `# Grafana Documentation\n\n## Getting Started\n\`\`\`bash\ndocker run -d -p 3000:3000 grafana/grafana\n\`\`\`\n`,
      },
    },
    local_files: {
      'docs/sources/index.md': '# Grafana Developer Docs\n\nBuilding plugins.\n',
    },
  },
  {
    fixture_id: 'm9-025',
    repository: 'astral-sh/uv',
    cohort: 'C3_SPARSE_REDIRECT',
    description: 'An extremely fast Python package and project manager, written in Rust',
    doc_strategy: 'sparse_root_external',
    readme: `# uv
An extremely fast Python package manager.
Refer to [uv documentation](https://docs.astral.sh/uv/) for installation.
`,
    manifest: {},
    external_docs: {
      'https://docs.astral.sh/uv/': {
        http_status: 200,
        content: `# uv Documentation\n\n## Installation\n\`\`\`bash\ncurl -LsSf https://astral.sh/uv/install.sh | sh\n\`\`\`\n\n## Quick Start\n\`\`\`bash\nuv venv\nuv pip install ruff\n\`\`\`\n`,
      },
    },
    local_files: {
      'docs/index.md': '# uv Architecture\n\nResolver performance.\n',
    },
  },
  {
    fixture_id: 'm9-026',
    repository: 'facebook/docusaurus',
    cohort: 'C3_SPARSE_REDIRECT',
    description: 'Easy to maintain open source documentation websites',
    doc_strategy: 'workspace_and_docs',
    readme: `# Docusaurus
Easy to maintain open source documentation websites.
`,
    manifest: { name: 'docusaurus-monorepo', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/docusaurus/README.md': '# @docusaurus/core\n\nCore Docusaurus engine.\n\n```bash\nnpm install @docusaurus/core\n```\n',
      'docs/introduction.md': '# Docusaurus Introduction\n\nStatic site generator.\n',
    },
  },
  {
    fixture_id: 'm9-027',
    repository: 'shadcn-ui/ui',
    cohort: 'C3_SPARSE_REDIRECT',
    description: 'Beautifully designed components that you can copy and paste into your apps',
    doc_strategy: 'sparse_root_external',
    readme: `# shadcn/ui
Beautifully designed components.
See [Components Documentation](https://ui.shadcn.com/docs).
`,
    manifest: {},
    external_docs: {
      'https://ui.shadcn.com/docs': {
        http_status: 200,
        content: `# Documentation\n\n## Installation\n\`\`\`bash\nnpx shadcn@latest init\n\`\`\`\n\n## Usage\nAdd components directly to your source.\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-028',
    repository: 'directus/directus',
    cohort: 'C3_SPARSE_REDIRECT',
    description: 'The Modern Data Stack in a Box',
    doc_strategy: 'workspace_and_docs',
    readme: `# Directus
The Modern Data Stack in a Box.
`,
    manifest: { name: 'directus-root', private: true, workspaces: ['packages/*'] },
    external_docs: {},
    local_files: {
      'packages/directus/README.md': '# directus\n\nDirectus CLI and server.\n\n```bash\nnpm install directus\n```\n',
      'docs/index.md': '# Directus Guide\n\nInstant REST and GraphQL API.\n',
    },
  },
  {
    fixture_id: 'm9-029',
    repository: 'langchain-ai/langchain',
    cohort: 'C3_SPARSE_REDIRECT',
    description: 'Building applications with LLMs through composability',
    doc_strategy: 'sparse_root_external',
    readme: `# LangChain
Building applications with LLMs through composability.
Read the docs at [LangChain Documentation](https://python.langchain.com/docs/).
`,
    manifest: { name: 'langchain', homepage: 'https://python.langchain.com' },
    external_docs: {
      'https://python.langchain.com/docs/': {
        http_status: 200,
        content: `# LangChain Documentation\n\n## Installation\n\`\`\`bash\npip install langchain\n\`\`\`\n\n## Quickstart\n\`\`\`python\nfrom langchain_openai import ChatOpenAI\n\`\`\`\n`,
      },
    },
    local_files: {},
  },
  {
    fixture_id: 'm9-030',
    repository: 'electron/electron',
    cohort: 'C3_SPARSE_REDIRECT',
    description: 'Build cross-platform desktop apps with JavaScript, HTML, and CSS',
    doc_strategy: 'nested_docs_hierarchy',
    readme: `# Electron
Build cross-platform desktop apps with JavaScript, HTML, and CSS.
See our local documentation in \`docs/\`.
`,
    manifest: { name: 'electron', homepage: 'https://electronjs.org' },
    external_docs: {},
    local_files: {
      'docs/index.md': '# Electron Documentation\n\n## Quick Start\n\`\`\`bash\nnpm install --save-dev electron\n\`\`\`\n\n## Tutorial\nMain and renderer processes.\n',
      'docs/api/app.md': '# app\n\nControl your application event lifecycle.\n',
    },
  },
];
