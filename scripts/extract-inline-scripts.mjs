import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const htmlPath = resolve(rootDir, 'index.html');
const outDir = resolve(rootDir, '.typecheck');
const outPath = resolve(outDir, 'inline-scripts.js');

const html = readFileSync(htmlPath, 'utf8');
const scriptRegex = /<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;

const snippets = [];
let match;
while ((match = scriptRegex.exec(html)) !== null) {
  const body = match[1]?.trim();
  if (body) snippets.push(body);
}

mkdirSync(outDir, { recursive: true });

const header = [
  '// Generated file for inline script checks. Do not edit directly.',
  '// @ts-check',
  '',
].join('\n');

const output = `${header}${snippets.join('\n\n')}${snippets.length ? '\n' : ''}`;
writeFileSync(outPath, output, 'utf8');
