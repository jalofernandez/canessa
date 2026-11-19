import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const directory = 'build/client';
async function walk(path) {
  const files = await readdir(path, { withFileTypes: true });
  return (
    await Promise.all(
      files.map((file) =>
        file.isDirectory() ? walk(join(path, file.name)) : join(path, file.name)
      )
    )
  ).flat();
}
const files = {};
for (const path of (await walk(directory)).sort()) {
  if (
    relative(directory, path)
      .split('/')
      .some((part) => part.startsWith('.'))
  )
    continue;
  const bytes = await readFile(path);
  files[relative(directory, path)] = {
    bytes: bytes.length,
    sha256: createHash('sha256').update(bytes).digest('hex'),
  };
}
const manifest = {
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(),
  dirty: Boolean(execFileSync('git', ['status', '--porcelain'], { encoding: 'utf8' }).trim()),
  node: process.version,
  files,
};
if (process.argv.includes('--check')) {
  const expected = JSON.parse(await readFile('build/release-manifest.json', 'utf8'));
  assert.deepEqual(files, expected.files, 'El artefacto cambió después de la verificación');
} else {
  await writeFile('build/release-manifest.json', JSON.stringify(manifest, null, 2) + '\n');
}
console.log(`Artefacto identificado: ${Object.keys(files).length} archivos con SHA-256.`);
