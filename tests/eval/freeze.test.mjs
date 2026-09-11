import assert from 'node:assert';
import { execSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const testDir = path.join(process.cwd(), 'tests', 'tmp-repo');
const outDir = path.join(process.cwd(), 'eval', 'corpus', 'test-repo');

function cleanup() {
  fs.rmSync(testDir, { recursive: true, force: true });
  fs.rmSync(outDir, { recursive: true, force: true });
}

function testFreezeSuccess() {
  cleanup();
  fs.mkdirSync(path.join(testDir, 'docs', 'subdir'), { recursive: true });
  fs.mkdirSync(path.join(testDir, 'examples'), { recursive: true });
  fs.mkdirSync(path.join(testDir, 'node_modules', 'some-pkg'), { recursive: true });
  fs.mkdirSync(path.join(testDir, 'dist'), { recursive: true });

  const readmeContent = '# Test\n';
  const designContent = 'design specification';
  const exampleContent = 'console.log("hello");';

  fs.writeFileSync(path.join(testDir, 'README.md'), readmeContent);
  fs.writeFileSync(path.join(testDir, 'package.json'), '{"name":"test-repo"}');
  fs.writeFileSync(path.join(testDir, 'LICENSE'), 'MIT License');
  fs.writeFileSync(path.join(testDir, 'docs', 'design.md'), designContent);
  fs.writeFileSync(path.join(testDir, 'docs', 'subdir', 'arch.md'), 'architecture');
  fs.writeFileSync(path.join(testDir, 'examples', 'demo.js'), exampleContent);
  fs.writeFileSync(path.join(testDir, 'node_modules', 'some-pkg', 'index.js'), 'module.exports = {}');
  fs.writeFileSync(path.join(testDir, 'dist', 'bundle.js'), 'bundled code');
  fs.writeFileSync(path.join(testDir, 'random.ignored'), 'should not be copied');

  // Initialize git repo and make a commit
  execSync('git init', { cwd: testDir, stdio: 'pipe' });
  execSync('git config user.name "test"', { cwd: testDir, stdio: 'pipe' });
  execSync('git config user.email "test@example.com"', { cwd: testDir, stdio: 'pipe' });
  execSync('git add .', { cwd: testDir, stdio: 'pipe' });
  execSync('git commit -m "initial commit"', { cwd: testDir, stdio: 'pipe' });
  const expectedCommit = execSync('git rev-parse HEAD', { cwd: testDir, stdio: 'pipe' }).toString().trim();

  execSync(`node eval/freeze.mjs "${testDir}" --id test-repo`, { stdio: 'pipe' });

  const fixture = JSON.parse(fs.readFileSync(path.join(outDir, 'fixture.json'), 'utf8'));
  assert.strictEqual(fixture.id, 'test-repo');
  assert.strictEqual(fixture.schemaVersion, 1);
  assert.strictEqual(fixture.repository, 'tmp-repo');
  assert.strictEqual(fixture.commit, expectedCommit);
  assert.ok(/^[0-9a-f]{40}$/i.test(fixture.commit));
  assert.ok(fixture.capturedAt);
  assert.deepStrictEqual(fixture.warnings, []);

  // Check included files
  const filePaths = fixture.files.map(f => f.path);
  assert.ok(filePaths.includes('README.md'));
  assert.ok(filePaths.includes('package.json'));
  assert.ok(filePaths.includes('LICENSE'));
  assert.ok(filePaths.includes('docs/design.md'));
  assert.ok(filePaths.includes('docs/subdir/arch.md'));
  assert.ok(filePaths.includes('examples/demo.js'));

  // Check excluded files
  assert.ok(!filePaths.some(p => p.includes('node_modules')));
  assert.ok(!filePaths.some(p => p.includes('.git')));
  assert.ok(!filePaths.some(p => p.includes('dist')));
  assert.ok(!filePaths.includes('random.ignored'));

  // Check sha256 and sizeBytes
  const readmeEntry = fixture.files.find(f => f.path === 'README.md');
  const expectedSha = crypto.createHash('sha256').update(readmeContent).digest('hex');
  assert.strictEqual(readmeEntry.sha256, expectedSha);
  assert.strictEqual(readmeEntry.sizeBytes, Buffer.byteLength(readmeContent));

  // Check files on disk
  assert.strictEqual(fs.readFileSync(path.join(outDir, 'README.md'), 'utf8'), readmeContent);
  assert.strictEqual(fs.readFileSync(path.join(outDir, 'docs', 'design.md'), 'utf8'), designContent);
  assert.ok(!fs.existsSync(path.join(outDir, 'node_modules')));
  assert.ok(!fs.existsSync(path.join(outDir, '.git')));
  assert.ok(!fs.existsSync(path.join(outDir, 'dist')));
  assert.ok(!fs.existsSync(path.join(outDir, 'random.ignored')));

  console.log('PASS: testFreezeSuccess');
}

function testFreezeFallbackCommitWhenNotGit() {
  const nonGitDir = fs.mkdtempSync(path.join(os.tmpdir(), 'non-git-'));
  const nonGitOutDir = path.join(process.cwd(), 'eval', 'corpus', 'non-git-repo');
  try {
    fs.writeFileSync(path.join(nonGitDir, 'README.md'), '# No Git\n');
    execSync(`node eval/freeze.mjs "${nonGitDir}" --id non-git-repo`, { stdio: 'pipe' });
    const fixture = JSON.parse(fs.readFileSync(path.join(nonGitOutDir, 'fixture.json'), 'utf8'));
    assert.strictEqual(fixture.commit, 'unknown');
    console.log('PASS: testFreezeFallbackCommitWhenNotGit');
  } finally {
    fs.rmSync(nonGitDir, { recursive: true, force: true });
    fs.rmSync(nonGitOutDir, { recursive: true, force: true });
  }
}

function testFreezeMissingArgs() {
  cleanup();
  let threw = false;
  try {
    execSync('node eval/freeze.mjs', { stdio: 'pipe' });
  } catch (err) {
    threw = true;
    assert.strictEqual(err.status, 1);
  }
  assert.ok(threw, 'Should exit with code 1 when args missing');
  console.log('PASS: testFreezeMissingArgs');
}

function testFreezeOversizedFileThrows() {
  cleanup();
  fs.mkdirSync(testDir, { recursive: true });
  fs.writeFileSync(path.join(testDir, 'README.md'), '# Normal Readme\n');
  // Create a file > 512KB
  const largeBuf = Buffer.alloc(513 * 1024, 'a');
  fs.writeFileSync(path.join(testDir, 'CHANGELOG.md'), largeBuf);

  let threw = false;
  try {
    execSync(`node eval/freeze.mjs "${testDir}" --id test-repo`, { stdio: 'pipe' });
  } catch {
    threw = true;
  }
  assert.ok(threw, 'Should throw error when file exceeds 512KB');
  console.log('PASS: testFreezeOversizedFileThrows');
}

try {
  testFreezeSuccess();
  testFreezeFallbackCommitWhenNotGit();
  testFreezeMissingArgs();
  testFreezeOversizedFileThrows();
  console.log('All freeze tests passed!');
} catch (err) {
  console.error('FAIL: freeze.test.mjs', err);
  process.exitCode = 1;
} finally {
  cleanup();
}
