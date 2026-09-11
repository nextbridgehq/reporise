import fs from 'node:fs';
import path from 'node:path';

/**
 * Appends a structured record as a JSON line to the specified JSONL log file.
 * Validates that entry is a non-null object.
 *
 * @param {string} filePath - Path to the JSONL log file
 * @param {object} entry - The object to log
 */
export function appendLog(filePath, entry) {
  if (typeof entry !== 'object' || entry === null) {
    throw new Error('Must log objects');
  }
  const dir = path.dirname(filePath);
  if (dir && !fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const line = JSON.stringify(entry) + '\n';
  fs.appendFileSync(filePath, line, 'utf8');
}

/**
 * Reads and parses all entries from a JSONL log file.
 * Returns an empty array if the file does not exist.
 *
 * @param {string} filePath - Path to the JSONL log file
 * @returns {Array<object>} Parsed log entries
 */
export function readLog(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const content = fs.readFileSync(filePath, 'utf8');
  return content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => JSON.parse(line));
}
