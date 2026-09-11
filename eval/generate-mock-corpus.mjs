import fs from 'node:fs';
import path from 'node:path';

const CORPUS_DIR = 'eval/corpus';
const LABELS_DIR = 'eval/labels';

function createRepo(id, split, quality) {
  const repoPath = path.join(CORPUS_DIR, id);
  fs.mkdirSync(repoPath, { recursive: true });
  
  let readme = # \n\n;
  if (quality >= 1) readme += This project does something useful.\n\n;
  if (quality >= 2) readme += ## Installation\n\n\\\ash\nnpm install \n\\\\n\n;
  if (quality >= 3) readme += ## Features\n- Fast\n- Secure\n- Reliable\n\n;
  if (quality >= 4) readme += ## Comparison\nUnlike other tools, this is better.\n\n;
  if (quality >= 5) readme += ## Definition\n is a tool for doing things.\n\n;
  
  fs.writeFileSync(path.join(repoPath, 'README.md'), readme);
  fs.writeFileSync(path.join(repoPath, 'package.json'), JSON.stringify({
    name: id,
    version: '1.0.0',
    description: quality >= 3 ? 'A great package' : 'package',
    keywords: quality >= 4 ? ['tool', 'cli', 'fast'] : []
  }, null, 2));

  const label = {
    fixture_id: id,
    split,
    scores: {
      overall: quality,
      geo: Math.max(0, quality - 1),
      aeo: quality,
      seo: Math.min(5, quality + 1)
    }
  };
  fs.writeFileSync(path.join(LABELS_DIR, ${id}.json), JSON.stringify(label, null, 2));
}

for (let i = 1; i <= 20; i++) {
  const quality = Math.floor(Math.random() * 6);
  let split = 'train';
  if (i > 10 && i <= 15) split = 'validation';
  if (i > 15) split = 'test';
  createRepo(epo-, split, quality);
}

for (let i = 1; i <= 15; i++) {
  const quality = Math.floor(Math.random() * 6);
  createRepo(dge-, 'edge', quality);
}

console.log('Created 20 corpus fixtures and 15 edge case fixtures with labels.');
