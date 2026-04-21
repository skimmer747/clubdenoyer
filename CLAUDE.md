# CLAUDE.md

Guidance for Claude Code sessions working in this repo.

## Project

**Club Denoyer** — public marketing site for a pizza restaurant and bar in
Eagle River, Wisconsin. Domain: `clubdenoyer.com` (DNS at Hover, email on
Hover MX). Hosted on GitHub Pages from `main` via the workflow in
`.github/workflows/deploy.yml`.

## Stack

- **Astro** (minimal template, TypeScript strict) — static site, no frameworks.
- Hand-written CSS in `src/styles/global.css` (no Sass, no Tailwind).
- Google Fonts via `<link>`: Playfair Display (display) + Inter (body).
- `astro:assets` `<Image>` for any real photos once they land in `src/assets/`.

## Where things live

- `src/data/site.ts` — single source of truth for name, phone, address, hours, geo.
  Used by `Base.astro` (JSON-LD + meta) and the `Visit`/`Nav`/`Hero`/`Footer` components.
- `src/data/menu.json` — the menu. Edit to update content; UI re-renders on
  build. Schema (full types in `MenuSection.astro`):
  - Section: `{ id, title, eyebrow?, blurb?, priceLabels?, items, footer? }`
  - Item: `{ name, description?, note?, price? | prices? | tiers? }` —
    - `price`: single string (leader-dot row).
    - `prices`: array matching `section.priceLabels` (pizza Sm/Med/Lg, wings,
      soup cup/bowl).
    - `tiers`: item-specific `[{ label, price }]` — for the odd Sm/Lg item
      inside an otherwise single-price section (e.g. Brew City Fries).
    - `note`: small aside under the name (portion size, sauce, quantity).
  - `section.footer` renders as an italic note (used for the pizza
    toppings builder list).
- `src/layouts/Base.astro` — `<head>`: title, meta description, OpenGraph/Twitter,
  canonical, theme-color, and the `schema.org/Restaurant` JSON-LD block.
- `src/components/` — presentational components (`Nav`, `Hero`, `About`,
  `MenuSection`, `Gallery`, `Visit`, `Footer`).
- `src/pages/index.astro` — assembles the single-page layout.
- `src/styles/global.css` — palette tokens (`--brand-red`, `--cream`, etc.) and all styles.
- `public/CNAME` — contains the bare domain `clubdenoyer.com`. Required by GitHub Pages.

## Local dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output -> dist/
npm run preview  # serve the prod build locally
```

## Deploying

Push to `main` → GitHub Actions runs `withastro/action@v3` → built `dist/` is
uploaded to Pages. The `public/CNAME` is copied verbatim into `dist/` so the
custom domain is preserved on every deploy.

## Common edits

- **Menu change**: edit `src/data/menu.json`. Done.
- **Hours / phone / address change**: edit `src/data/site.ts`. Changes flow to
  the JSON-LD, the Visit section, the Nav CTA, and the Footer automatically.
- **Adding photos**: drop files into `src/assets/`, then replace the placeholder
  tiles in `src/components/Gallery.astro` with `<Image>` from `astro:assets`.
  See the `TODO` comment at the top of that file for the pattern.

## Conventions

- Keep the site static. No client-side frameworks unless there's a real reason.
- Respect `prefers-reduced-motion` (already handled globally in `global.css`).
- Every `<Image>` needs an `alt` — restaurant sites are photo-heavy and accessibility matters.
- Don't hardcode phone/address/hours in markup — they live in `site.ts`.
