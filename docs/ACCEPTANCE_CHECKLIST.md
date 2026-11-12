# Definition of Done — Umap Landing

## Product and content

- [ ] Page clearly describes Umap as a map/place-discovery product.
- [ ] Product-facing features are limited to confirmed map, categories, businesses, routes, search, place cards.
- [ ] No invented numbers, awards, reviews, app-store links, geographic coverage or unsupported feature claims.
- [ ] Primary CTA `Открыть карту` opens the **actual** map URL, configured and tested; not a self-link or dead-end.
- [ ] All navigation links and section IDs work.
- [ ] No placeholder text, fake pricing, useless UI controls or dead links.

## Design

- [ ] Original Umap look; inspiration does not become a 2GIS clone.
- [ ] Light gray/white surfaces and deliberate blue accents; readable contrast.
- [ ] Hero has a dominant headline and an authentic Umap visual.
- [ ] Section hierarchy is visible, layout is editorial rather than repeated generic cards.
- [ ] Production images are authentic Umap assets and stay legible.
- [ ] No 2GIS reference screenshot is rendered or bundled as a site asset.
- [ ] No evident stretched/pixelated hero, layout collisions or overscaled UI screenshots.

## Engineering

- [ ] Next.js App Router + TypeScript or a compatible pre-existing project setup.
- [ ] No backend, map SDK, API integrations, fake API calls or unnecessary dependencies.
- [ ] No unexplained modifications to existing Umap map routes/application.
- [ ] Responsive at ~375–390px mobile, ~768px tablet, ~1440px desktop.
- [ ] No horizontal overflow; buttons, nav and footer remain usable.
- [ ] Semantic HTML, accessible image alternatives, visible keyboard focus.
- [ ] Motion respects `prefers-reduced-motion`.
- [ ] Page title, description, lang `ru` are correct.
- [ ] Successful lint, typecheck and production build when scripts/environment permit.
- [ ] At least a visual inspection of desktop and mobile when tooling is available. Report missing tools honestly.

## Handoff

- [ ] Explain file structure and how to run locally using the repo package manager.
- [ ] Explain where to put assets, and which assets were missing if any.
- [ ] State where `NEXT_PUBLIC_MAP_URL` is set and what production deployment requires.
- [ ] Summarize edits, tests actually run, known limitations.
