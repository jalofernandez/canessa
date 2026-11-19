import { createHash } from 'node:crypto';
import { readdir, readFile, mkdir, writeFile, rm } from 'node:fs/promises';
import { join, relative, extname } from 'node:path';

import sharp from 'sharp';

const source = 'src/assets/photos';
const output = 'public/media';
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) =>
      entry.isDirectory() ? walk(join(dir, entry.name)) : join(dir, entry.name)
    )
  );
  return files.flat();
}
const media = {};
for (const path of (await walk(source)).sort()) {
  if (!['.jpg', '.jpeg', '.png', '.gif'].includes(extname(path).toLowerCase())) continue;
  const buffer = await readFile(path);
  const info = await sharp(buffer).metadata();
  const widths = [...new Set([480, 960, 1440].map((width) => Math.min(width, info.width)))];
  const variants = [];
  let dimensions;
  for (const width of widths) {
    const result = await sharp(buffer)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toBuffer({ resolveWithObject: true });
    const digest = createHash('sha256').update(result.data).digest('hex').slice(0, 16);
    const name = `${digest}-${result.info.width}.webp`;
    dimensions = { width: result.info.width, height: result.info.height };
    await writeFile(join(output, name), result.data);
    variants.push({ src: `/media/${name}`, width: result.info.width });
  }
  media[relative(source, path)] = {
    ...dimensions,
    src: variants[Math.min(1, variants.length - 1)].src,
    variants,
  };
}
await writeFile('src/data/media.json', JSON.stringify(media, null, 2) + '\n');
console.log(
  `${Object.keys(media).length} imágenes preparadas con tamaños explícitos y variantes WebP.`
);
