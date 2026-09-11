import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import crypto from 'node:crypto';

const CORPUS_DIR = path.resolve('eval/corpus');
const TMP_DIR = path.resolve('.reporise-tmp');
const MAX_FILE_SIZE = 512 * 1024; // 512 KB
const MAX_TOTAL_SIZE = 4.0 * 1024 * 1024; // 4 MB limit (< 5 MB fixture contract)
const MAX_DIR_FILES = 20;

const ALLOWED_ROOT_FILES = new Set([
  'readme.md', 'readme.rst', 'readme.txt', 'readme',
  'package.json', 'pyproject.toml', 'cargo.toml', 'go.mod',
  'license', 'licence', 'license.md', 'license.txt', 'licence.md',
  'changelog.md', 'contributing.md', 'citation.cff', 'llms.txt',
  'code_of_conduct.md', 'security.md'
]);

const ALLOWED_DIRS = new Set(['docs', 'examples']);
const EXCLUDED_NAMES = new Set(['.git', 'node_modules', 'dist', 'build', 'coverage', '.turbo', '.pytest_cache']);

async function ensureDir(dir) {
  try { await fs.mkdir(dir, { recursive: true }); } catch (err) { if (err.code !== 'EEXIST') throw err; }
}

async function copySubdir(src, dest, state, depth = 0) {
  if (depth > 2 || state.filesCopied >= MAX_DIR_FILES || state.totalSize >= MAX_TOTAL_SIZE) return;
  let entries;
  try {
    entries = await fs.readdir(src, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    if (state.filesCopied >= MAX_DIR_FILES || state.totalSize >= MAX_TOTAL_SIZE) break;
    const name = entry.name;
    const lower = name.toLowerCase();
    if (EXCLUDED_NAMES.has(lower)) continue;

    const srcPath = path.join(src, name);
    const destPath = path.join(dest, name);

    if (entry.isDirectory()) {
      await ensureDir(destPath);
      await copySubdir(srcPath, destPath, state, depth + 1);
    } else if (entry.isFile()) {
      const stat = fsSync.statSync(srcPath);
      if (stat.size <= MAX_FILE_SIZE && (state.totalSize + stat.size) <= MAX_TOTAL_SIZE) {
        await fs.copyFile(srcPath, destPath);
        state.totalSize += stat.size;
        state.filesCopied++;
      }
    }
  }
}

async function copyAllowedFiles(src, dest) {
  const state = { totalSize: 0 };
  const rootEntries = await fs.readdir(src, { withFileTypes: true });

  // 1. FIRST PRIORITY: Copy all critical root files (README, manifest, license, etc.)
  for (const entry of rootEntries) {
    if (!entry.isFile()) continue;
    const name = entry.name;
    const lower = name.toLowerCase();

    if (ALLOWED_ROOT_FILES.has(lower)) {
      const srcPath = path.join(src, name);
      const destPath = path.join(dest, name);
      const stat = fsSync.statSync(srcPath);

      if (stat.size <= MAX_FILE_SIZE) {
        await fs.copyFile(srcPath, destPath);
        state.totalSize += stat.size;
      } else {
        // Truncate oversized changelogs or files to 400KB to strictly respect contract
        const buf = Buffer.alloc(400 * 1024);
        const fd = fsSync.openSync(srcPath, 'r');
        fsSync.readSync(fd, buf, 0, buf.length, 0);
        fsSync.closeSync(fd);
        await fs.writeFile(destPath, buf);
        state.totalSize += buf.length;
      }
    }
  }

  // 2. SECOND PRIORITY: Copy representative docs/ and examples/ directories
  for (const entry of rootEntries) {
    if (!entry.isDirectory()) continue;
    const lower = entry.name.toLowerCase();

    if (ALLOWED_DIRS.has(lower)) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      await ensureDir(destPath);
      const dirState = { filesCopied: 0, totalSize: state.totalSize };
      await copySubdir(srcPath, destPath, dirState, 0);
      state.totalSize = dirState.totalSize;
    }
  }
}

async function generateManifest(dir, base = '') {
  let manifest = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'fixture.json' || entry.name === '.reporise') continue;
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(base, entry.name).replace(/\\/g, '/');
    if (entry.isDirectory()) {
      manifest = manifest.concat(await generateManifest(fullPath, relPath));
    } else {
      const content = await fs.readFile(fullPath);
      const hash = crypto.createHash('sha256').update(content).digest('hex');
      manifest.push({
        path: relPath,
        sha256: hash,
        sizeBytes: content.length
      });
    }
  }
  return manifest;
}

export async function freezeRepo(repo, commit, id, options = {}) {
  const targetDir = path.join(CORPUS_DIR, id);
  const fixtureJsonPath = path.join(targetDir, 'fixture.json');

  // Idempotency: skip if already valid and not forced
  if (!options.force && fsSync.existsSync(fixtureJsonPath)) {
    try {
      const existing = JSON.parse(fsSync.readFileSync(fixtureJsonPath, 'utf8'));
      if (existing.id === id && Array.isArray(existing.files) && existing.files.length > 0) {
        // Quick verification that at least README exists
        const hasReadme = existing.files.some(f => f.path.toLowerCase().includes('readme'));
        if (hasReadme) {
          return { id, repo, status: 'cached', fileCount: existing.files.length };
        }
      }
    } catch {}
  }

  const repoUrl = `https://github.com/${repo}.git`;
  const tmpRepoDir = path.join(TMP_DIR, id);

  await ensureDir(TMP_DIR);
  try { await fs.rm(tmpRepoDir, { recursive: true, force: true }); } catch {}

  // Fast sparse clone: root tree only
  try {
    execSync(`git clone --depth 1 --filter=blob:none --sparse ${repoUrl} "${tmpRepoDir}"`, { stdio: 'ignore', timeout: 120000 });
  } catch (err) {
    console.warn(`[WARN] Sparse clone failed for ${repo}, trying basic depth 1...`);
    execSync(`git clone --depth 1 ${repoUrl} "${tmpRepoDir}"`, { stdio: 'ignore', timeout: 120000 });
  }

  try {
    execSync(`git sparse-checkout add docs examples`, { cwd: tmpRepoDir, stdio: 'ignore' });
  } catch {}

  let resolvedCommit = commit;
  try {
    resolvedCommit = execSync(`git rev-parse HEAD`, { cwd: tmpRepoDir, encoding: 'utf8' }).trim();
  } catch {}

  await ensureDir(targetDir);
  try { await fs.rm(targetDir, { recursive: true, force: true }); } catch {}
  await ensureDir(targetDir);

  await copyAllowedFiles(tmpRepoDir, targetDir);

  const manifest = await generateManifest(targetDir);
  const totalSizeBytes = manifest.reduce((acc, f) => acc + f.sizeBytes, 0);

  const fixtureData = {
    id,
    schemaVersion: 1,
    source: 'github',
    repository: repo,
    commit: commit || resolvedCommit,
    capturedAt: new Date().toISOString(),
    files: manifest
  };

  await fs.writeFile(fixtureJsonPath, JSON.stringify(fixtureData, null, 2), 'utf8');

  try { await fs.rm(tmpRepoDir, { recursive: true, force: true }); } catch {}

  return { id, repo, status: 'frozen', fileCount: manifest.length, sizeKb: (totalSizeBytes / 1024).toFixed(1) };
}

async function runWorker(queue, results, total, options) {
  while (queue.length > 0) {
    const item = queue.shift();
    const index = total - queue.length;
    try {
      process.stdout.write(`[${index}/${total}] Freezing ${item.id} (${item.repo})... `);
      const res = await freezeRepo(item.repo, item.commit, item.id, options);
      if (res.status === 'cached') {
        console.log(`(cached, ${res.fileCount} files)`);
      } else {
        console.log(`✓ (${res.fileCount} files, ${res.sizeKb} KB)`);
      }
      results.push(res);
    } catch (err) {
      console.error(`✕ Error on ${item.id} (${item.repo}): ${err.message}`);
      results.push({ id: item.id, repo: item.repo, status: 'failed', error: err.message });
    }
  }
}

async function main() {
  const args = process.argv.slice(2);

  let manifestFile = 'eval/corpus/inventory.json';
  const manifestIdx = args.indexOf('--manifest');
  if (manifestIdx !== -1 && args[manifestIdx + 1]) {
    manifestFile = args[manifestIdx + 1];
  }

  const force = args.includes('--force');
  const dryRun = args.includes('--dry-run');
  const idIdx = args.indexOf('--id');
  const targetId = idIdx !== -1 ? args[idIdx + 1] : null;
  const concIdx = args.indexOf('--concurrency');
  const concurrency = concIdx !== -1 ? parseInt(args[concIdx + 1], 10) : 3;

  if (args[0] === 'ingest-all' || args.includes('--all') || targetId || dryRun) {
    if (!fsSync.existsSync(path.resolve(manifestFile))) {
      console.error(`Error: Manifest ${manifestFile} not found`);
      process.exit(1);
    }

    const inventory = JSON.parse(await fs.readFile(path.resolve(manifestFile), 'utf8'));
    let list = inventory.map(item => ({
      id: item.fixture_id || item.id,
      repo: item.repository || item.repo,
      commit: item.commit || null
    }));

    if (targetId) {
      list = list.filter(r => r.id === targetId);
      if (list.length === 0) {
        console.error(`Error: Repository ID ${targetId} not found in manifest`);
        process.exit(1);
      }
    }

    if (dryRun) {
      console.log(`[DRY-RUN] Verified manifest with ${list.length} repositories.`);
      return;
    }

    console.log(`\nStarting corpus freeze for ${list.length} repositories (concurrency: ${concurrency})...\n`);
    const queue = [...list];
    const results = [];
    const workers = [];

    for (let w = 0; w < concurrency; w++) {
      workers.push(runWorker(queue, results, list.length, { force }));
    }

    await Promise.all(workers);

    const successful = results.filter(r => r.status === 'frozen' || r.status === 'cached').length;
    const failed = results.filter(r => r.status === 'failed').length;

    console.log(`\n======================================================================`);
    console.log(`  CORPUS FREEZE SUMMARY`);
    console.log(`======================================================================`);
    console.log(`  Total:      ${list.length}`);
    console.log(`  Successful: ${successful}`);
    console.log(`  Failed:     ${failed}`);
    console.log(`======================================================================\n`);

    if (failed > 0) {
      process.exit(1);
    }
  } else {
    console.log("RepoRise Corpus Ingestion Tool");
    console.log("Usage:");
    console.log("  node eval/research/ingestion/freeze.mjs --dry-run [--manifest <path>]");
    console.log("  node eval/research/ingestion/freeze.mjs --id <fixture_id> [--manifest <path>]");
    console.log("  node eval/research/ingestion/freeze.mjs --all [--concurrency <n>] [--force]");
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve('eval/research/ingestion/freeze.mjs')) {
  main().catch(console.error);
}
