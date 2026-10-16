import { mkdir, writeFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { PDFParse } from 'pdf-parse';

const portfolioPath = path.resolve('LATEST_Colin_Aysun_Portfolio_Illustrated.pdf');
const outDir = path.resolve('public/assets/projects');
const pages = [3, 4, 5, 6, 7, 8, 9, 10, 11];

await mkdir(outDir, { recursive: true });

const parser = new PDFParse({ data: readFileSync(portfolioPath) });
const screenshots = await parser.getScreenshot({
  partial: pages,
  desiredWidth: 1400,
  imageDataUrl: false,
  imageBuffer: true,
});
await parser.destroy();

for (const page of screenshots.pages) {
  const pageNumber = String(page.pageNumber).padStart(2, '0');
  const output = path.join(outDir, `portfolio-page-${pageNumber}.webp`);
  await sharp(page.data)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output);
  console.log(`wrote ${output}`);
}

await writeFile(
  path.join(outDir, 'README.md'),
  [
    '# Project Assets',
    '',
    'These WebP images are rendered from `LATEST_Colin_Aysun_Portfolio_Illustrated.pdf` by `npm run extract:assets`.',
    'They preserve the source figures, captions, formulas, and diagrams from the portfolio PDF.',
    '',
  ].join('\n')
);
