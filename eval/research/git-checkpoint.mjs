import { execFileSync } from 'node:child_process';

/**
 * Capture a git checkpoint of the repository.
 * @param {string} [cwd=process.cwd()] - Repository working directory
 * @returns {{ head: string, tree: string }} Checkpoint object containing HEAD SHA and git write-tree SHA
 */
export function storeCheckpoint(cwd = process.cwd()) {
  const head = execFileSync('git', ['rev-parse', 'HEAD'], { cwd, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
  const tree = execFileSync('git', ['write-tree'], { cwd, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
  return { head, tree };
}

/**
 * Restores repository state from a git checkpoint.
 * Performs hard reset to checkpoint head and cleans all untracked files/directories.
 * @param {string|object} cwdOrCheckpoint - Repository working directory or checkpoint object if cwd omitted
 * @param {object} [maybeCheckpoint] - Checkpoint object
 */
export function restoreCheckpoint(cwdOrCheckpoint, maybeCheckpoint) {
  let cwd = process.cwd();
  let checkpoint = maybeCheckpoint;

  if (typeof cwdOrCheckpoint === 'string') {
    cwd = cwdOrCheckpoint;
  } else if (cwdOrCheckpoint && typeof cwdOrCheckpoint === 'object') {
    checkpoint = cwdOrCheckpoint;
  }

  if (!checkpoint || typeof checkpoint.head !== 'string') {
    throw new Error('Invalid checkpoint: missing head commit SHA');
  }

  execFileSync('git', ['reset', '--hard', checkpoint.head], { cwd, stdio: ['pipe', 'pipe', 'pipe'] });
  execFileSync('git', ['clean', '-fd'], { cwd, stdio: ['pipe', 'pipe', 'pipe'] });
}

/**
 * Validates that all changed files are within the allowed protected paths.
 * Throws an error if any changed file is not in the allowed paths list.
 *
 * @param {string} [cwd=process.cwd()] - Repository working directory
 * @param {string[]} [changedFiles=[]] - List of relative file paths that were modified
 * @param {string[]} [allowedPaths=[]] - List of relative file paths permitted to be modified/staged
 */
export function stageProtectedFiles(cwd, changedFiles = [], allowedPaths = []) {
  const allowedSet = new Set((allowedPaths || []).map(p => p.replace(/\\/g, '/')));
  for (const f of (changedFiles || [])) {
    const normalized = f.replace(/\\/g, '/');
    if (!allowedSet.has(normalized)) {
      throw new Error('Attempted to stage unprotected file: ' + f);
    }
  }
}

