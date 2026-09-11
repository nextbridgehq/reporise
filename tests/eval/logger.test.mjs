import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { appendLog, readLog } from '../../eval/research/logger.mjs';

const TMP_LOG = path.resolve('tests/tmp_experiments.jsonl');

function cleanup() {
  if (fs.existsSync(TMP_LOG)) {
    fs.unlinkSync(TMP_LOG);
  }
}

function testAppendAndRead() {
  cleanup();
  try {
    const entry1 = { id: 1, proposal: { target: 'check-1' }, decision: 'accepted' };
    const entry2 = { id: 2, proposal: { target: 'check-2' }, decision: 'rejected' };

    appendLog(TMP_LOG, entry1);
    appendLog(TMP_LOG, entry2);

    const raw = fs.readFileSync(TMP_LOG, 'utf8');
    const lines = raw.trim().split('\n');
    assert.strictEqual(lines.length, 2);
    assert.deepStrictEqual(JSON.parse(lines[0]), entry1);
    assert.deepStrictEqual(JSON.parse(lines[1]), entry2);

    if (typeof readLog === 'function') {
      const records = readLog(TMP_LOG);
      assert.deepStrictEqual(records, [entry1, entry2]);
    }
  } finally {
    cleanup();
  }
}

function testValidation() {
  assert.throws(() => appendLog(TMP_LOG, null), /Must log objects/);
  assert.throws(() => appendLog(TMP_LOG, 'invalid string'), /Must log objects/);
  assert.throws(() => appendLog(TMP_LOG, 123), /Must log objects/);
  assert.throws(() => appendLog(TMP_LOG, undefined), /Must log objects/);
}

function testReadNonExistent() {
  if (typeof readLog === 'function') {
    const nonExistent = path.resolve('tests/non_existent_file_12345.jsonl');
    assert.deepStrictEqual(readLog(nonExistent), []);
  }
}

try {
  testAppendAndRead();
  testValidation();
  testReadNonExistent();
  console.log('PASS: logger');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
} finally {
  cleanup();
}
