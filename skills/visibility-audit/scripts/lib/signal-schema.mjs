/**
 * signal-schema.mjs — Zero-dependency runtime contract validator for collected repository signals.
 *
 * Enforces the minimum structural contract required by runChecks() in checks.mjs.
 * Pure, deterministic, side-effect free, and pass-through on success.
 */

function getType(val) {
  if (val === null) return 'null';
  if (Array.isArray(val)) return 'array';
  return typeof val;
}

export class SignalContractError extends TypeError {
  constructor(fieldPath, expected, received, isMissing = false) {
    const receivedType = getType(received);
    const message = isMissing
      ? `[SignalContractViolation] '${fieldPath}' is required; received: undefined`
      : `[SignalContractViolation] '${fieldPath}' must be ${expected}; received: ${receivedType}`;
    super(message);
    this.name = 'SignalContractError';
    this.fieldPath = fieldPath;
    this.expected = expected;
    this.receivedType = receivedType;
  }
}

function assertNonNegativeInteger(val, fieldPath) {
  if (typeof val !== 'number' || !Number.isInteger(val) || val < 0) {
    throw new SignalContractError(fieldPath, 'non-negative integer', val);
  }
}

function assertBoolean(val, fieldPath) {
  if (typeof val !== 'boolean') {
    throw new SignalContractError(fieldPath, 'boolean', val);
  }
}

function assertArray(val, fieldPath) {
  if (!Array.isArray(val)) {
    throw new SignalContractError(fieldPath, 'array', val);
  }
}

/**
 * Validates the raw observations collected from a repository.
 * Strictly checks presence and structural types required by checks.mjs.
 *
 * @param {object} signals - Raw observation dictionary from collect()
 * @returns {object} The identical signals object reference
 * @throws {SignalContractError} If structural invariants are violated
 */
export function validateSignals(signals) {
  if (!signals || typeof signals !== 'object' || Array.isArray(signals)) {
    throw new SignalContractError('signals', 'object', signals, signals === undefined);
  }

  // 1. signals.repo
  if (!signals.repo || typeof signals.repo !== 'object' || Array.isArray(signals.repo)) {
    throw new SignalContractError('signals.repo', 'object', signals.repo, signals.repo === undefined);
  }
  assertBoolean(signals.repo.isGitRepo, 'signals.repo.isGitRepo');
  if (signals.repo.isGitRepo) {
    assertArray(signals.repo.tags, 'signals.repo.tags');
    assertNonNegativeInteger(signals.repo.tagCount, 'signals.repo.tagCount');
  }

  // 2. signals.readme
  if (!signals.readme || typeof signals.readme !== 'object' || Array.isArray(signals.readme)) {
    throw new SignalContractError('signals.readme', 'object', signals.readme, signals.readme === undefined);
  }
  assertBoolean(signals.readme.present, 'signals.readme.present');
  assertArray(signals.readme.headings, 'signals.readme.headings');
  assertArray(signals.readme.codeBlocks, 'signals.readme.codeBlocks');
  assertArray(signals.readme.links, 'signals.readme.links');
  assertArray(signals.readme.brokenLinks, 'signals.readme.brokenLinks');
  assertArray(signals.readme.images, 'signals.readme.images');

  if (signals.readme.present) {
    if (typeof signals.readme.file !== 'string') {
      throw new SignalContractError('signals.readme.file', 'string', signals.readme.file);
    }
    assertNonNegativeInteger(signals.readme.wordCount, 'signals.readme.wordCount');
  }

  // 3. signals.manifest (optional, but if present must be null or object)
  if (signals.manifest !== null && signals.manifest !== undefined) {
    if (typeof signals.manifest !== 'object' || Array.isArray(signals.manifest)) {
      throw new SignalContractError('signals.manifest', 'object or null', signals.manifest);
    }
    if (signals.manifest.keywords !== null && signals.manifest.keywords !== undefined) {
      assertArray(signals.manifest.keywords, 'signals.manifest.keywords');
    }
  }

  // 4. signals.files
  if (!signals.files || typeof signals.files !== 'object' || Array.isArray(signals.files)) {
    throw new SignalContractError('signals.files', 'object', signals.files, signals.files === undefined);
  }

  // 5. signals.dirs
  if (!signals.dirs || typeof signals.dirs !== 'object' || Array.isArray(signals.dirs)) {
    throw new SignalContractError('signals.dirs', 'object', signals.dirs, signals.dirs === undefined);
  }
  assertNonNegativeInteger(signals.dirs.docsFileCount, 'signals.dirs.docsFileCount');
  assertNonNegativeInteger(signals.dirs.exampleFileCount, 'signals.dirs.exampleFileCount');

  return signals;
}
