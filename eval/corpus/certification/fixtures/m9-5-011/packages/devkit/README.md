# @nx/devkit

The plugin development kit for Nx.

## Installation
```bash
npm install @nx/devkit
```

## Generator Usage
```typescript
import { Tree, formatFiles } from '@nx/devkit';
export default async function (tree: Tree) {
  await formatFiles(tree);
}
```
