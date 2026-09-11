import assert from 'node:assert';
import { isSyntaxValid } from '../../eval/research/syntax.mjs';

function testValidStatements() {
  assert.strictEqual(isSyntaxValid('const a = 1;'), true, 'Valid const assignment');
  assert.strictEqual(isSyntaxValid('let b = 2; b += 3;'), true, 'Valid let assignment');
  assert.strictEqual(isSyntaxValid('function test(x) { return x * 2; }'), true, 'Valid function');
  assert.strictEqual(isSyntaxValid('const regex = /^[a-z]+$/i;'), true, 'Valid regex literal');
  assert.strictEqual(isSyntaxValid(''), true, 'Empty code string');
  assert.strictEqual(isSyntaxValid('   \n\t  '), true, 'Whitespace code string');
}

function testInvalidSyntax() {
  assert.strictEqual(isSyntaxValid('const a = ;'), false, 'Incomplete assignment syntax');
  assert.strictEqual(isSyntaxValid('function test( {'), false, 'Unclosed parameter list');
  assert.strictEqual(isSyntaxValid('const obj = { a: 1, ; };'), false, 'Malformed object literal');
  assert.strictEqual(isSyntaxValid('const regex = /(unclosed/i;'), false, 'Invalid regex literal');
  assert.strictEqual(isSyntaxValid('if (true) {'), false, 'Unclosed block');
}

function testNonStringInputs() {
  assert.strictEqual(isSyntaxValid(null), false, 'null is not valid code');
  assert.strictEqual(isSyntaxValid(undefined), false, 'undefined is not valid code');
  assert.strictEqual(isSyntaxValid(123), false, 'number is not valid code string');
  assert.strictEqual(isSyntaxValid({}), false, 'object is not valid code string');
}

try {
  testValidStatements();
  testInvalidSyntax();
  testNonStringInputs();
  console.log('PASS: syntax');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
