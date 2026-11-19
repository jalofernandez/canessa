import { readFile, writeFile } from 'node:fs/promises';
const config = JSON.parse(await readFile('firebase.json', 'utf8'));
config.hosting.headers.push({
  source: '**',
  headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
});
await writeFile('firebase.preview.json', JSON.stringify(config, null, 2) + '\n');
console.log('Configuración de preview sin indexación preparada. No se ha desplegado.');
