## Summary of Changes
Provide a brief explanation of what this pull request does and why.

## Motivation & Context
Fixes # (issue) or addresses (context).

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New heuristic or check (non-breaking addition to visibility audit)
- [ ] CLI / UX enhancement
- [ ] Documentation / Examples update
- [ ] Performance / hygiene refactor

## Invariant & Quality Checklist
- [ ] **Zero Dependencies**: No new runtime dependencies have been added to `package.json`.
- [ ] **Offline Execution**: The audit pipeline makes zero outbound network requests.
- [ ] **Skill Duplication Synced**: If `collect.mjs` or `adapters.mjs` was changed, both copies in `skills/visibility-audit/` and `skills/citation-probe/` were kept identical.
- [ ] **Automated Tests**: Ran `npm test` and all 64 unit tests pass cleanly.
- [ ] **Benchmark Certification**: Ran `npm run benchmark:certify` and all 5 gates pass without invariant violations.
- [ ] **Packaging Verification**: Ran `npm pack --dry-run` and verified the package manifest remains lean and correct.
