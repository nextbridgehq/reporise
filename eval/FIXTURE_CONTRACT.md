# Fixture Contract

SchemaVersion: 1
Max file size: 512 KB
Total max size: 5 MB

## Allowed Files
- Core manifests & READMEs: `README.md`, `README.rst`, `README.txt`, `README`, `package.json`, `pyproject.toml`, `Cargo.toml`, `go.mod`
- Documentation & metadata: `LICENSE`, `LICENCE`, `LICENSE.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, `CITATION.cff`, `llms.txt`, `CODE_OF_CONDUCT.md`, `SECURITY.md`
- Allowed directories: `docs/`, `examples/`

## Excluded Files and Directories
- `node_modules/`
- `.git/`
- `dist/`
- `build/`
- `coverage/`

## Schema Requirements
- `id` (string, required): unique repository identifier
- `schemaVersion` (number, required): must equal `1`
- `repository` (string, optional): source repository name
- `commit` (string, optional): Git commit hash (or `'unknown'`)
- `capturedAt` (string, optional): ISO-8601 timestamp
- `files` (array, required): list of file objects
  - `path` (string, required): relative file path within fixture
  - `sha256` (string, required): hex SHA-256 digest of file content
  - `sizeBytes` (number, required): exact file size in bytes
- `warnings` (array, optional): list of string warnings
