# Colin Aysun Portfolio Website

Static Astro portfolio built from:

- `LATEST_Colin_Aysun_Portfolio_Illustrated.pdf`
- `Colin_Aysun_Resume.pdf`

The site uses Markdown project files, KaTeX math rendering, optimized WebP images rendered from the portfolio PDF, and a copied resume PDF in `public/resume.pdf`.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Regenerate project images from the illustrated portfolio:

```bash
npm run extract:assets
```

## Project Content

Each project lives in `src/content/projects/*.md`.

To add a project:

1. Copy an existing Markdown file in `src/content/projects/`.
2. Change the frontmatter fields: `title`, `summary`, `category`, `tags`, `role`, `tools`, `results`, `images`, `links`, and `todo`.
3. Write the body content below the frontmatter.
4. Run `npm run build`.

Categories currently used:

- `Hardware / PCB`
- `Machine Learning`
- `Robotics`
- `Software`
- `Autonomous Systems`

## Images

Project images are in `public/assets/projects/`.

The current images are rendered from pages 3-11 of the illustrated portfolio PDF by `scripts/extract-assets.mjs`. To swap an image:

1. Add the new optimized image to `public/assets/projects/`.
2. Update the `images` array in the related project Markdown file.
3. Keep `alt` text specific to the visible figure or diagram.
4. Run `npm run build`.

## Resume

The downloadable resume is `public/resume.pdf`. Replace that file when the resume changes.

## Deploy

### Vercel

1. Import the repository.
2. Framework preset: Astro.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Set `SITE_URL` to the final production URL.

### Netlify

1. New site from Git.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Set `SITE_URL` to the final production URL.

### GitHub Pages

1. Set `SITE_URL` to the final GitHub Pages URL.
2. If deploying from a project repository, set `BASE_PATH` to `/<repo-name>/`.
3. Run `npm run build`.
4. Publish the `dist` directory with your preferred GitHub Pages workflow.

## TODOs

- Confirm the target audience: internship recruiters, research labs, grad admissions, or a blend.
- Replace `SITE_URL` from `https://example.com` with the final deployed URL.
- Add exact public URLs for project-specific repositories, paper, videos, itch.io, and Google Play Store pages.
- Confirm whether the resume skill `SMFL` should remain as written or be corrected to `SFML`.
- Add more granular cropped figures if you want images separated from the full PDF page renders.
- Add images and more detail for the in-progress Drone Tracker when ready.
