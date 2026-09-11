import assert from 'node:assert';
import { evaluateFixture } from '../../eval/research/evaluate.mjs';
const res = evaluateFixture('dummy');
assert.strictEqual(res.trainMetrics.mae, 2.0);
console.log('PASS: evaluateFixture');
