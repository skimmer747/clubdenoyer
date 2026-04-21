# Club Denoyer

Website for Club Denoyer — a pizza restaurant and bar in Eagle River, Wisconsin.
Lives at [clubdenoyer.com](https://clubdenoyer.com).

## Stack

- [Astro](https://astro.build) (minimal, static output)
- Plain CSS, Google Fonts (Playfair Display + Inter)
- Deployed to GitHub Pages via GitHub Actions

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
```

## Build & preview

```sh
npm run build    # writes static site to dist/
npm run preview  # serves dist/ locally
```

## Editing content

- **Menu**: edit `src/data/menu.json`
- **Hours / phone / address**: edit `src/data/site.ts`
- **Photos**: drop into `src/assets/` and swap the placeholder tiles in `src/components/Gallery.astro` for `<Image>` from `astro:assets`

## Deploying

Push to `main` → GitHub Actions builds and deploys to GitHub Pages.
The custom domain `clubdenoyer.com` is set via `public/CNAME`.

More project details in [`CLAUDE.md`](./CLAUDE.md).
