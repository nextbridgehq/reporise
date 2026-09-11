import assert from 'assert';
import { readFileSync } from 'fs';

function testPackageScripts() {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  assert.ok(pkg.scripts.audit, 'audit script missing');
  assert.ok(pkg.scripts.freeze, 'freeze script missing');
  assert.ok(pkg.scripts.eval, 'eval script missing');
  assert.ok(pkg.scripts.research, 'research script missing');
}
testPackageScripts();
console.log('PASS');
