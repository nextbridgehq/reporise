import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import util from 'node:util';
import { execSync } from 'node:child_process';

const args = util.parseArgs({ options: { id: { type: 'string' } }, allowPositionals: true });
const targetPath = args.positionals[0];
const id = args.values.id;

if (!targetPath || !id) process.exit(1);

const corpusDir = path.join(process.cwd(), 'eval', 'corpus', id);
fs.mkdirSync(corpusDir, { recursive: true });

const MAX_FILE_SIZE = 512 * 1024;
const MAX_TOTAL_SIZE = 5 * 1024 * 1024;
const EXCLUSIONS = new Set(['node_modules', '.git', 'dist', 'build', 'coverage']);
const ALLOWED_FILES = new Set([
  'README.md', 'README.rst', 'README.txt', 'README',
  'package.json', 'pyproject.toml', 'Cargo.toml', 'go.mod',
  'LICENSE', 'LICENCE', 'LICENSE.md',
  'CHANGELOG.md', 'CONTRIBUTING.md', 'CITATION.cff', 'llms.txt',
  'CODE_OF_CONDUCT.md', 'SECURITY.md'
]);
const ALLOWED_DIRS = new Set(['docs', 'examples']);

let totalSize = 0;
const files = [];

let commit = 'unknown';
try {
  commit = execSync('git rev-parse HEAD', { cwd: path.resolve(targetPath), stdio: ['pipe', 'pipe', 'pipe'] }).toString().trim();
} catch {
  commit = 'unknown';
}

function walk(dir, isAllowedDir = false) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (EXCLUSIONS.has(file)) continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (isAllowedDir || ALLOWED_DIRS.has(file)) walk(fullPath, true);
    } else {
      if (isAllowedDir || ALLOWED_FILES.has(file)) {
        const relPath = path.relative(targetPath, fullPath).replace(/\\/g, '/');
        if (stat.size > MAX_FILE_SIZE) {
          throw new Error(`File ${relPath} exceeds maximum allowed size of ${MAX_FILE_SIZE} bytes`);
        }
        if (totalSize + stat.size > MAX_TOTAL_SIZE) throw new Error('Total size limit exceeded');

        const content = fs.readFileSync(fullPath);
        const sha256 = crypto.createHash('sha256').update(content).digest('hex');

        const destPath = path.join(corpusDir, relPath);
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        fs.writeFileSync(destPath, content);

        totalSize += stat.size;
        files.push({ path: relPath, sha256, sizeBytes: stat.size });
      }
    }
  }
}
walk(targetPath);

fs.writeFileSync(path.join(corpusDir, 'fixture.json'), JSON.stringify({
  id,
  schemaVersion: 1,
  repository: path.basename(path.resolve(targetPath)),
  commit,
  capturedAt: new Date().toISOString(),
  files,
  warnings: []
}, null, 2));
