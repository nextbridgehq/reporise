import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

function findJsFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== '.superpowers') {
        results = results.concat(findJsFiles(full));
      }
    } else if (entry.name.endsWith('.mjs') || entry.name.endsWith('.js')) {
      results.push(full);
    }
  }
  return results;
}

test('Static child-process security audit in hardened production and research paths', () => {
  const hardenedFiles = [
    ...findJsFiles('skills'),
    path.resolve('eval/research/runner.mjs'),
    path.resolve('eval/research/syntax.mjs'),
    path.resolve('eval/research/git-checkpoint.mjs'),
    path.resolve('eval/research/git.mjs'),
    path.resolve('eval/certify.mjs'),
    path.resolve('eval/score.mjs'),
    path.resolve('eval/freeze.mjs'),
    path.resolve('eval/report.mjs'),
  ];
  const violations = [];

  for (const file of hardenedFiles) {
    if (!fs.existsSync(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');

    lines.forEach((line, idx) => {
      // 1. Prohibit execSync or exec with template literals containing variables
      if (/(exec|execSync)\s*\(\s*`[^`]*\${/.test(line)) {
        violations.push(`${file}:${idx + 1} - Template literal variable in exec/execSync: ${line.trim()}`);
      }
      // 2. Prohibit shell: true
      if (/shell\s*:\s*true/.test(line)) {
        violations.push(`${file}:${idx + 1} - Prohibited shell: true option found: ${line.trim()}`);
      }
      // 3. Prohibit empty catch around git operations in runner
      if (file.includes('runner.mjs') && /catch\s*\(\s*_\s*\)\s*\{\s*\}/.test(line)) {
        violations.push(`${file}:${idx + 1} - Empty catch block swallowing errors: ${line.trim()}`);
      }
    });
  }

  assert.deepStrictEqual(violations, [], `Found prohibited child-process patterns:\n${violations.join('\n')}`);
});
