# Aillegent Web

Marketing site for [Aillegent](https://www.aillegent.com) — a custom software development company in Gandhinagar, India.

Built with the Next.js App Router, React 19 and TypeScript. Styling is hand-written SCSS (no Tailwind, no CSS-in-JS), motion is anime.js + Lenis, and the contact form posts through a server action that delivers over SMTP.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in SMTP values (see Environment)
npm run dev                  # http://localhost:3000
```

| Script | Does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build (run `build` first) |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Type-check — **not covered by `build`**, see below |

> **`npm run build` does not fail on type or lint errors.**
> `next.config.mjs` sets `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds`, so a
> green build is not proof the code type-checks. Run `npx tsc --noEmit` before you push.

---

## Stack

| | |
| --- | --- |
| Framework | Next.js 15.5.21 (App Router, React Server Components) |
| UI | React 19, TypeScript 5 |
| Styling | Dart Sass, 7-1 pattern, `@use` modules — light theme only |
| Motion | [anime.js](https://animejs.com) for reveals, [Lenis](https://lenis.darkroom.engineering) for smooth scroll |
| Forms | Server Actions + [zod](https://zod.dev) validation + [Nodemailer](https://nodemailer.com) |
| Analytics | `@vercel/analytics` |
| Hosting | Vercel |

Every page is statically prerendered — there is no database and no CMS.

---

## Project layout

```
app/                      Routes (App Router)
  layout.tsx              Root layout: fonts, metadata, Organization JSON-LD
  page.tsx                Home
  services/               Listing + 6 service pages
  products/               Listing + 3 product pages
  industries/             Listing + 4 pages (currently hidden — see below)
  about/  contact/        Contact uses a server action in contact/actions.ts
  sitemap.ts robots.ts    Generated from lib/site.ts
components/
  layout/                 Header (incl. mobile menu), Footer
  motion/                 MotionProvider + animated set pieces
  forms/ ui/              ContactForm, custom select
  seo/JsonLd.tsx          Structured-data helper
lib/site.ts               Single source of truth for site content
styles/                   SCSS design system (entry: styles/main.scss)
public/img/               Images
```

### `lib/site.ts` is the content source of truth

Brand details, the nav, and the `services` / `products` / `industries` arrays all live here. The
**header, mobile menu and `sitemap.xml` are generated from it**, so adding a service or product is
two steps:

1. Add the entry to the relevant array in `lib/site.ts`.
2. Create `app/<section>/<slug>/page.tsx`.

It appears in the sitemap automatically. The listing pages and homepage cards are hand-written
markup, so update those too if the new item should be promoted.

---

## Styling

`styles/main.scss` is the only stylesheet imported by the app. It pulls in every partial via
`@use`, following the 7-1 pattern:

```
abstracts/   tokens (emit :root custom properties), breakpoints, mixins
base/        reset, typography, globals, utilities
components/  buttons, header, cards, forms, footer, …
sections/    hero, phero (inner-page hero), pyramid, misc
```

Rules worth knowing:

- **Design tokens live in `abstracts/_tokens.scss`.** They are declared as SCSS variables
  (`$brand`, `$ink`, …) and then mirrored onto `:root` as CSS custom properties. Component styles
  consume the custom properties — `var(--brand)`, `var(--ink)`, `var(--muted)` — not literal hex.
- **Colours are hex-only** in SCSS — no `rgba()` wrappers around token names.
- Utility classes (`u-mt-44`, `g-2`, `g-3`, `balance`) already exist; prefer them over new one-off rules.

---

## Motion

`components/motion/MotionProvider.tsx` wraps the app and wires three data attributes. Add the
attribute, get the behaviour — no per-component JS:

| Attribute | Effect |
| --- | --- |
| `data-animate` | Fades/slides the element in when it scrolls into view |
| `data-draw` | Draws an SVG `path`/`circle` by animating `stroke-dashoffset` |
| `data-count` | Counts a number up to its target |

All of it is disabled under `prefers-reduced-motion: reduce`, and Lenis smooth scroll is skipped too.

### Gotcha: SVG stroke gradients

The `.v-stroke` class paints with `stroke: url(#vg)`, so **any SVG using it must define a `vg`
gradient in its own `<defs>`** — the id is per-document, not global.

Give that gradient `gradientUnits="userSpaceOnUse"`. The default (`objectBoundingBox`) collapses on
a perfectly horizontal or vertical line, because such a line has a zero-width or zero-height
bounding box, and the stroke then renders as nothing at all. See
`app/products/safetysetu/page.tsx` for a working example.

---

## Environment

The contact form is the only thing needing configuration. Copy `.env.example` to `.env.local`:

| Variable | Required | Notes |
| --- | --- | --- |
| `SMTP_HOST` | yes | SMTP server hostname |
| `SMTP_PORT` | no | Defaults to `587`; `465` switches on implicit TLS |
| `SMTP_USER` | yes | Also used as the `From` address |
| `SMTP_PASS` | yes | |
| `CONTACT_TO` | no | Where enquiries land; defaults to `info@aillegent.com` |

If `SMTP_HOST`, `SMTP_USER` or `SMTP_PASS` is missing, the form **does not fail silently** — it
returns a visible error telling the visitor to email directly, and logs the reason server-side.

On Vercel these must be set for the environment you are deploying to, and the project
**redeployed** afterwards — environment variables are baked in at deploy time.

---

## SEO

- Per-route metadata via the Next.js Metadata API; titles use the
  `%s | Aillegent` template from `app/layout.tsx`.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` from `lib/site.ts`.
- JSON-LD: an `Organization` graph in the root layout, plus `BreadcrumbList` and
  `SoftwareApplication` / `Service` on inner pages via `components/seo/JsonLd.tsx`.
- **`site.url` must match the domain the site actually serves on** (currently the `www` host).
  Canonical tags, sitemap URLs, `robots.txt` and OpenGraph URLs are all derived from it, so a
  mismatch points Google at URLs that redirect.

---

## Current state

Two things are deliberately not what they appear:

**The Industries section is hidden site-wide.** `/industries` and all four child pages return
404 and carry `robots: { index: false, follow: false }`; the nav entry, footer link, homepage
section and sitemap entries are commented out. The content and data are intact. To restore:
uncomment the `nav` entry in `lib/site.ts`, the Footer link, the homepage section in
`app/page.tsx` and the sitemap lines, then remove the `notFound()` call and the `robots` block
from each industries page.

**Permit360 was rebranded SafetySetu.** The page now lives at `/products/safetysetu`, with a
permanent redirect from `/products/permit360` in `next.config.mjs`.

---

## Deployment

Hosted on Vercel, building from `main` in this repository. Pushing to `main` triggers a
production deploy; pull requests get preview deployments.

Before pushing, the short checklist is:

```bash
npx tsc --noEmit   # build won't catch this
npm run build
```
