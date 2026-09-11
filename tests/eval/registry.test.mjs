import assert from 'node:assert';
import { MUTATION_POINTS } from '../../eval/research/registry.mjs';

function testRegistry() {
  assert.ok(MUTATION_POINTS['definitional-pattern'], 'definitional-pattern should exist in registry');
  const point = MUTATION_POINTS['definitional-pattern'];
  assert.strictEqual(point.target, 'definitional-pattern');
  assert.strictEqual(point.type, 'regex');
  assert.deepStrictEqual(point.allowedOperations, ['replaceValue']);
  assert.strictEqual(point.expectedStructure, 'const DEFINITIONAL_PATTERN = /.../;');
  assert.strictEqual(point.marker, '// @research-point: definitional-pattern');
}

try {
  testRegistry();
  console.log('PASS: registry');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
