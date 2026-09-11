import { execSync } from 'child_process';

export function assertCleanTree() {
  const status = execSync('git status --porcelain', { stdio: ['pipe', 'pipe', 'pipe'] }).toString();
  if (status.trim() !== '') {
    throw new Error('Working tree not clean');
  }
}

export function currentCommit() {
  return execSync('git rev-parse HEAD', { stdio: ['pipe', 'pipe', 'pipe'] }).toString().trim();
}

export function diffFiles() {
  return execSync('git diff --name-only', { stdio: ['pipe', 'pipe', 'pipe'] })
    .toString()
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);
}
