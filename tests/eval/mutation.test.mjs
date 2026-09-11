import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { applyStructuredMutation } from '../../eval/research/mutation.mjs';
import { MUTATION_POINTS } from '../../eval/research/registry.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function testBasicReplacement() {
  const code = `// @research-point: definitional-pattern\nconst DEFINITIONAL_PATTERN = /old/i;`;
  const proposal = { target: 'definitional-pattern', mutation: { type: 'replace', value: { pattern: 'new', flags: 'i' } } };
  const res = applyStructuredMutation(code, proposal, MUTATION_POINTS);
  assert.ok(res.includes('/new/i;'), 'Should replace pattern with flags');
  assert.ok(!res.includes('/old/i;'), 'Old pattern should be gone');
  assert.ok(res.includes('// @research-point: definitional-pattern'), 'Marker should be preserved');
}

function testReplacementNoFlags() {
  const code = `// @research-point: definitional-pattern\nconst DEFINITIONAL_PATTERN = /old/i;`;
  const proposal = { target: 'definitional-pattern', mutation: { type: 'replace', value: { pattern: 'new_no_flags' } } };
  const res = applyStructuredMutation(code, proposal, MUTATION_POINTS);
  assert.ok(res.includes('/new_no_flags/;'), 'Should replace pattern with empty flags');
  assert.ok(!res.includes('undefined'), 'Should not contain undefined');
}

function testUnknownTarget() {
  const code = `// @research-point: unknown-pattern\nconst UNKNOWN = /old/i;`;
  const proposal = { target: 'unknown-pattern', mutation: { type: 'replace', value: { pattern: 'new' } } };
  assert.throws(
    () => applyStructuredMutation(code, proposal, MUTATION_POINTS),
    /Unknown mutation target/
  );
}

function testDisallowedOperation() {
  const code = `// @research-point: definitional-pattern\nconst DEFINITIONAL_PATTERN = /old/i;`;
  const proposal = { target: 'definitional-pattern', mutation: { type: 'delete' } };
  assert.throws(
    () => applyStructuredMutation(code, proposal, MUTATION_POINTS),
    /Disallowed operation/
  );
}

function testMarkerNotFound() {
  const code = `const DEFINITIONAL_PATTERN = /old/i;`;
  const proposal = { target: 'definitional-pattern', mutation: { type: 'replace', value: { pattern: 'new' } } };
  assert.throws(
    () => applyStructuredMutation(code, proposal, MUTATION_POINTS),
    /Marker not found/
  );
}

function testInvalidMarkerLocationAtEnd() {
  const code = `const a = 1;\n// @research-point: definitional-pattern`;
  const proposal = { target: 'definitional-pattern', mutation: { type: 'replace', value: { pattern: 'new' } } };
  assert.throws(
    () => applyStructuredMutation(code, proposal, MUTATION_POINTS),
    /Invalid marker location/
  );
}

function testRealChecksFileMutation() {
  const checksPath = path.resolve(__dirname, '../../skills/visibility-audit/scripts/lib/checks.mjs');
  const checksCode = fs.readFileSync(checksPath, 'utf8');
  const proposal = {
    target: 'definitional-pattern',
    mutation: { type: 'replace', value: { pattern: '\\b(is|are)\\b', flags: 'i' } }
  };
  const mutated = applyStructuredMutation(checksCode, proposal, MUTATION_POINTS);
  assert.ok(mutated.includes('const DEFINITIONAL_PATTERN = /\\b(is|are)\\b/i;'));
  assert.ok(!mutated.includes('const DEFINITIONAL_PATTERN = /\\b(is|are|serves as|acts as)\\s+(a|an|the)\\b/i;'));
}

try {
  testBasicReplacement();
  testReplacementNoFlags();
  testUnknownTarget();
  testDisallowedOperation();
  testMarkerNotFound();
  testInvalidMarkerLocationAtEnd();
  testRealChecksFileMutation();
  console.log('PASS: applyStructuredMutation');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
