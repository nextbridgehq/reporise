import { execFileSync } from 'node:child_process';

/**
 * Validates that the provided JavaScript file has valid syntax.
 * Uses node -c to parse the file without executing it.
 * Passes the filePath as an argument vector without shell interpretation.
 * 
 * @param {string} filePath - Path to the file to check
 * @returns {boolean} True if syntax is valid, false otherwise
 */
export function validateSyntax(filePath) {
  try {
    execFileSync('node', ['-c', filePath], { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates that the provided JavaScript code string has valid syntax.
 * 
 * @param {string} code - Code string to check
 * @returns {boolean} True if syntax is valid, false otherwise
 */
export function isSyntaxValid(code) {
  if (typeof code !== 'string') return false;
  try {
    new Function(code);
    return true;
  } catch {
    return false;
  }
}

