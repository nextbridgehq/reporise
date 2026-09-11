# Security Policy

Nextbridge takes the security of RepoRise seriously. We welcome contributions and reports from security researchers and developers to help keep RepoRise and its users safe.

## Supported Versions

Only the latest release of RepoRise receives security updates.

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |
| < 0.1.0 | :x:                |

## Security Architecture & Guarantees

RepoRise is designed with strict security boundaries by default:

1. **Zero External Runtime Dependencies**: RepoRise does not depend on any third-party npm packages at runtime. The dependency graph contains zero transitive packages.
2. **Offline-First by Design**: The core visibility audit runs entirely against the local working tree on disk. It initiates zero network requests and does not transmit code or telemetry.
3. **No Dynamic Code Evaluation**: RepoRise parses repository artifacts (Markdown, JSON, text) statically using deterministic regex and AST parsers. It never executes repository code (no `eval()`, `Function()`, or dynamic execution of target project scripts).
4. **Shell Execution Boundaries**: RepoRise does not invoke arbitrary shell commands. Git operations (commit timestamps, tag inspection) use deterministic Node.js child processes with strict argument isolation.
5. **No Telemetry by Default**: No metrics, tracking, or user data are phoned home.

## Reporting a Vulnerability

If you discover a potential security vulnerability in RepoRise:

1. **Do not create a public GitHub issue.**
2. Send an email to **[security@nextbridge.com](mailto:security@nextbridge.com)** with:
   - A description of the vulnerability and potential impact.
   - Step-by-step reproduction instructions or a minimal proof-of-concept repository.
   - Affected versions and environments (Node.js version, operating system).
   - Any proposed mitigations or patches.

Alternatively, you may submit a report through GitHub's [Private Vulnerability Reporting](https://github.com/nextbridgehq/reporise/security/advisories/new).

## Response Commitment

- **Initial Acknowledgment**: Within 48 hours of receipt.
- **Triage & Assessment**: Within 5 business days.
- **Fix & Disclosure**: We aim to release a patch promptly and coordinate public disclosure with the reporter.
- **Credit**: If desired, we will credit your contribution in release notes and security advisories.
