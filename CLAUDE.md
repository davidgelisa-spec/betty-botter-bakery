# Betty Botter Web

Preview website for a small home bakery. Static site, no backend. Content lives in `src/config/siteConfig.ts` — edit there, not in components.

## Stack

- Astro 5 (static output)
- Tailwind CSS 4 via `@tailwindcss/vite`
- TypeScript strict mode
- `@astrojs/sitemap` integration
- Deployed target: Cloudflare Pages, project `betty-botters-bakery` (URL `betty-botters-bakery.pages.dev`), eventual custom domain `bettybottersbakery.com`

## Commands

```bash
npm run dev      # dev server (default port 4321, --port to override)
npm run build    # static build to ./dist
npm run preview  # preview the built site
```

## Structure

```
src/
  config/siteConfig.ts      # all business content (products, payments, steps, etc.)
  components/               # Hero, About, Products, HowItWorks, OrderForm, SEO, Footer
  layouts/Layout.astro      # base HTML + SEO
  pages/index.astro         # single homepage
  styles/global.css         # Tailwind theme tokens (cream/wheat/crust/sage palette)
public/images/              # product photography
```

## Sharing a dev preview

The dev server only runs locally. To share a public URL with the client:

```bash
npm run dev -- --port 4322          # terminal 1
cloudflared tunnel --url http://localhost:4322   # terminal 2
```

Cloudflare prints a `*.trycloudflare.com` URL. The site is served at
`/betty-botter-bakery/` (because of the `base` in `astro.config.mjs`), so the
full URL is `https://<subdomain>.trycloudflare.com/betty-botter-bakery/`.

Vite blocks unknown hosts — `astro.config.mjs` already allows
`.trycloudflare.com` under `vite.server.allowedHosts`. If you switch to a
different tunnel provider, add that host there.

## Deployment notes

- GitHub remote: `davidgelisa-spec/betty-botter-bakery`
- Live preview: Cloudflare Pages project `betty-botters-bakery` →
  `betty-botters-bakery.pages.dev`. Auto-deploys from `main`. Build command
  `npm run build`, output `dist`, framework preset Astro.
- `astro.config.mjs` has NO `base` path (served from the root on Pages). Do
  not re-add it unless switching deploy target.
- `site:` in `astro.config.mjs` is set to `https://bettybottersbakery.com`
  (the eventual custom domain — add it in Pages → Custom domains once DNS
  is on Cloudflare).

## Placeholders to replace before going live

- `formspreeId` in `src/config/siteConfig.ts` (currently `YOUR_FORMSPREE_ID`)
- Payment details (bank sort code, PayPal link, Stripe link) in `siteConfig.payments`
- `cabinetLocation` in `siteConfig`
- `site:` URL in `astro.config.mjs`

## Tone / copy rules

- Keep copy understated, not cheesy. No "baked with love", no "whole lot of
  patience", no "lovely neighbours".
- **Don't use the baker's first name.** She doesn't want her personal name on
  the site. "Betty Botter" is the bakery name and is fine; first-person
  references like "I'm Betty" are not.
- Friendly and local in tone, but plain and direct.

## Session log

### 2026-04-11

- Replaced the original hand-written `index.html` prototype with an Astro 5 +
  Tailwind 4 project. Set up `siteConfig.ts` as the single source of truth
  for content.
- Built seven components and a single-page homepage: Hero, About, Products,
  HowItWorks, OrderForm (with integrated payment details section), Footer,
  SEO.
- Added `@astrojs/sitemap`, SEO meta tags, Playfair Display + Lato from
  Google Fonts.
- Committed and pushed to `main` on `davidgelisa-spec/betty-botter-bakery`.
  Workflow file couldn't push (OAuth scope); saved to `/tmp/`.
- User added product photography under `public/images/` and extended the
  product list with Brioche Plait and Chocolate Babka.
- Toned down cheesy copy (hero subheading, product blurb headings, footer,
  "warm welcome" style).
- Merged the separate Payment Options section into the pre-order form so
  it's all in one place.
- Set up Cloudflare Tunnel (`brew install cloudflared` + `cloudflared tunnel
  --url http://localhost:4322`) for shareable dev previews; added
  `.trycloudflare.com` to Vite's `allowedHosts`.
- Removed first-person "I'm Betty" from the About copy — the baker doesn't
  want her personal name on the site.
- Hero: moved the logo out of the hero image into a dark-crust band below
  it (it was clashing with the cream background when placed over the photo
  and with the image itself).
- Hero heading now reads "Betty Botter's Bakery" to match the logo wordmark.
- Swapped the hero image: was `brioche.jpg`, now `bakes-spread.jpg`
  (renamed from the old `cinnamon-rolls.jpg` which had blurred rolls in the
  background — it's a spread of bakes, not cinnamon rolls specifically).
  The Cinnamon Rolls product card temporarily reuses `brioche.jpg` with a
  TODO comment — drop a real cinnamon rolls photo into
  `public/images/cinnamon-rolls.jpg` and re-wire `siteConfig.ts`.
- HowItWorks steps now all have images: `this-weeks-menu.jpg` (Order),
  `brioche.jpg` (Pay — placeholder, swap for something payment-themed if
  anything better shows up), `honesty-cabinet.jpg` (Collect).
- Location is Ringwood, not "Little Ashford". `cabinetLocation` currently
  just says "Ringwood" — TODO add full street address.
- Replaced `this-weeks-menu.jpg` with the standalone pricelist screenshot
  (the previous one was squashed alongside other info).
- **TODO from the baker**: she has both a permanent pre-order list AND a
  weekly menu. The current site lumps everything into `products`. Need to
  split into (a) always-available products and (b) this week's menu. The
  existing menu image on the site mixes the two. Waiting for her to tell
  us which items belong where.
- Deploy: switched from GitHub Pages to Cloudflare Pages. Removed the
  `base: "/betty-botter-bakery"` from `astro.config.mjs` and pointed
  `site` at `https://bettybottersbakery.com`. First attempt accidentally
  created a **Worker** project (Workers Builds pipeline auto-ran `astro
  add cloudflare`, flipped the build to server mode and failed to upload
  `_worker.js`); deleted it and created a proper Pages project. Domain
  `bettybottersbakery.com` is owned but not yet on Cloudflare — custom
  domain setup pending.
